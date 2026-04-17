import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import type { RawMapData, RawMapLayer } from '../../utils/ValetudoRawMapData';
import type { CleaningMode, Zone } from '../../types/homeassistant';
import './ValetudoMapCanvas.scss';

// Segment color palette (4-color theorem friendly)
const SEGMENT_COLORS = [
  'rgba(90,  155, 212, 0.85)',
  'rgba(120, 195, 130, 0.85)',
  'rgba(255, 190,  80, 0.85)',
  'rgba(220, 100, 100, 0.85)',
  'rgba(170, 120, 210, 0.85)',
  'rgba( 80, 185, 185, 0.85)',
];

const FLOOR_COLOR   = 'rgba(120, 164, 193, 0.6)';
const WALL_COLOR    = 'rgba( 50,  50,  50, 1)';
const PATH_COLOR    = 'rgba(255, 255, 255, 0.85)';
const CHARGER_COLOR = '#4CAF50';
const ROBOT_COLOR   = '#2196F3';
const SCALE = 2; // px per map pixel

function getBoundingBox(mapData: RawMapData) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

  for (const layer of mapData.layers) {
    for (let i = 0; i < layer.pixels.length; i += 2) {
      const x = layer.pixels[i];
      const y = layer.pixels[i + 1];
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }

  // Fallback to map size
  if (minX === Infinity) {
    minX = 0; minY = 0;
    maxX = mapData.size.x; maxY = mapData.size.y;
  }

  return { minX, minY, maxX, maxY };
}

function drawLayer(ctx: CanvasRenderingContext2D, layer: RawMapLayer, color: string, offsetX: number, offsetY: number) {
  ctx.fillStyle = color;
  for (let i = 0; i < layer.pixels.length; i += 2) {
    ctx.fillRect(
      (layer.pixels[i] - offsetX) * SCALE,
      (layer.pixels[i + 1] - offsetY) * SCALE,
      SCALE,
      SCALE
    );
  }
}

function assignSegmentColors(layers: RawMapLayer[]): Map<string, string> {
  const map = new Map<string, string>();
  let idx = 0;
  for (const layer of layers) {
    if (layer.type === 'segment' && layer.metaData.segmentId) {
      if (!map.has(layer.metaData.segmentId)) {
        map.set(layer.metaData.segmentId, SEGMENT_COLORS[idx % SEGMENT_COLORS.length]);
        idx++;
      }
    }
  }
  return map;
}

interface ValetudoMapCanvasProps {
  mapData: RawMapData;
  mode?: CleaningMode;
  selectedRooms?: Map<number, string>;
  zone?: Zone | null;
  onZoneChange?: (zone: Zone | null) => void;
  onSegmentClick?: (segmentId: number) => void;
}

// Stored state for coordinate conversion (filled during render)
interface MapGeometry {
  bb: { minX: number; minY: number };
  pixelSize: number;
}

export function ValetudoMapCanvas({ mapData, mode, selectedRooms, zone, onZoneChange, onSegmentClick }: ValetudoMapCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const geoRef = useRef<MapGeometry>({ bb: { minX: 0, minY: 0 }, pixelSize: 50 });
  const segLookupRef = useRef<Map<string, number>>(new Map());

  // ─── Zoom/Pan state ────────────────────────────────────────────────────────
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  // pinch tracking
  const lastPinchDist = useRef<number | null>(null);
  const lastPanPos = useRef<{ x: number; y: number } | null>(null);
  const isPanning = useRef(false);
  // track active pointer ids for multi-touch detection
  const activePointers = useRef<Map<number, { x: number; y: number }>>(new Map());

  // ─── Zone drag state (desktop: drag-to-draw) ───────────────────────────────
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [dragCurrent, setDragCurrent] = useState<{ x: number; y: number } | null>(null);
  const isDragging = useRef(false);

  // ─── Widget zone state (mobile: movable rectangle) ────────────────────────
  // widgetZone: position/size in canvas px coords (before scale)
  const [widgetZone, setWidgetZone] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const widgetDragRef = useRef<{ mode: 'move' | 'resize'; startPtr: { x: number; y: number }; startZone: { x: number; y: number; w: number; h: number } } | null>(null);

  const isTouchDevice = useMemo(() => window.matchMedia('(pointer: coarse)').matches, []);

  const canvasToMm = useCallback((cx: number, cy: number): { x: number; y: number } => {
    const { bb, pixelSize } = geoRef.current;
    return {
      x: (cx / SCALE + bb.minX) * pixelSize,
      y: (cy / SCALE + bb.minY) * pixelSize,
    };
  }, []);

  const mmToCanvas = useCallback((mmX: number, mmY: number): { x: number; y: number } => {
    const { bb, pixelSize } = geoRef.current;
    return {
      x: (mmX / pixelSize - bb.minX) * SCALE,
      y: (mmY / pixelSize - bb.minY) * SCALE,
    };
  }, []);

  // Convert screen point → canvas pixel (accounting for zoom/pan/css scale)
  const screenToCanvas = useCallback((screenX: number, screenY: number): { x: number; y: number } => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return { x: 0, y: 0 };
    const rect = container.getBoundingClientRect();
    // Position relative to container center (pan pivot)
    const cx = (screenX - rect.left - rect.width / 2 - pan.x) / zoom + rect.width / 2;
    const cy = (screenY - rect.top - rect.height / 2 - pan.y) / zoom + rect.height / 2;
    // canvas CSS width to canvas logical width ratio
    const cssW = rect.width;
    const logW = canvas.width;
    const ratio = logW / cssW;
    return { x: cx * ratio, y: cy * ratio };
  }, [zoom, pan]);

  // Reset zoom/pan when mode changes
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setWidgetZone(null);
  }, [mode]);

  // When zone mode is activated on touch device, place a default widget zone
  useEffect(() => {
    if (mode === 'zone' && isTouchDevice) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      // Place zone at center, 30% of canvas size
      const w = canvas.width * 0.3;
      const h = canvas.height * 0.3;
      const x = (canvas.width - w) / 2;
      const y = (canvas.height - h) / 2;
      setWidgetZone({ x, y, w, h });
    } else {
      setWidgetZone(null);
    }
  }, [mode, isTouchDevice]);

  // Sync widget zone → mm zone whenever widget changes
  useEffect(() => {
    if (widgetZone === null) return;
    const mm1 = canvasToMm(widgetZone.x, widgetZone.y);
    const mm2 = canvasToMm(widgetZone.x + widgetZone.w, widgetZone.y + widgetZone.h);
    onZoneChange?.({
      x1: Math.round(Math.min(mm1.x, mm2.x)),
      y1: Math.round(Math.min(mm1.y, mm2.y)),
      x2: Math.round(Math.max(mm1.x, mm2.x)),
      y2: Math.round(Math.max(mm1.y, mm2.y)),
    });
  }, [widgetZone, canvasToMm, onZoneChange]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const bb = getBoundingBox(mapData);
    const pixelSize = mapData.pixelSize || 50;
    geoRef.current = { bb, pixelSize };

    const lookup = new Map<string, number>();
    for (const layer of mapData.layers) {
      if (layer.type === 'segment' && layer.metaData.segmentId) {
        const sid = parseInt(layer.metaData.segmentId, 10);
        for (let i = 0; i < layer.pixels.length; i += 2) {
          lookup.set(`${layer.pixels[i]},${layer.pixels[i + 1]}`, sid);
        }
      }
    }
    segLookupRef.current = lookup;

    const w = (bb.maxX - bb.minX + 2) * SCALE;
    const h = (bb.maxY - bb.minY + 2) * SCALE;

    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, w, h);

    const segColors = assignSegmentColors(mapData.layers);
    const segIdToNumber = (sid: string): number => parseInt(sid, 10);

    for (const layer of mapData.layers) {
      if (layer.type === 'floor') drawLayer(ctx, layer, FLOOR_COLOR, bb.minX, bb.minY);
    }
    for (const layer of mapData.layers) {
      if (layer.type === 'segment') {
        const sid = layer.metaData.segmentId;
        const baseColor = sid ? (segColors.get(sid) ?? FLOOR_COLOR) : FLOOR_COLOR;
        const isSelected = sid && selectedRooms && selectedRooms.size > 0
          ? selectedRooms.has(segIdToNumber(sid)) : true;
        const color = isSelected ? baseColor : baseColor.replace(/[\d.]+\)$/, '0.35)');
        drawLayer(ctx, layer, color, bb.minX, bb.minY);
      }
    }
    for (const layer of mapData.layers) {
      if (layer.type === 'wall') drawLayer(ctx, layer, WALL_COLOR, bb.minX, bb.minY);
    }

    for (const entity of mapData.entities) {
      if (entity.type !== 'path' && entity.type !== 'predicted_path') continue;
      ctx.beginPath();
      ctx.strokeStyle = entity.type === 'predicted_path' ? 'rgba(255,255,255,0.4)' : PATH_COLOR;
      ctx.lineWidth = SCALE * 0.6;
      ctx.setLineDash(entity.type === 'predicted_path' ? [4, 3] : []);
      for (let i = 0; i < entity.points.length; i += 2) {
        const x = (entity.points[i] / pixelSize - bb.minX) * SCALE;
        const y = (entity.points[i + 1] / pixelSize - bb.minY) * SCALE;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    for (const entity of mapData.entities) {
      if (entity.type !== 'charger_location' || entity.points.length < 2) continue;
      const cx = (entity.points[0] / pixelSize - bb.minX) * SCALE;
      const cy = (entity.points[1] / pixelSize - bb.minY) * SCALE;
      const r = SCALE * 4;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, 2 * Math.PI);
      ctx.fillStyle = CHARGER_COLOR;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = SCALE * 0.5;
      ctx.stroke();
    }

    for (const entity of mapData.entities) {
      if (entity.type !== 'robot_position' || entity.points.length < 2) continue;
      const rx = (entity.points[0] / pixelSize - bb.minX) * SCALE;
      const ry = (entity.points[1] / pixelSize - bb.minY) * SCALE;
      const angle = (entity.metaData.angle ?? 0) * (Math.PI / 180);
      const r = SCALE * 5;
      ctx.save();
      ctx.translate(rx, ry);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, 2 * Math.PI);
      ctx.fillStyle = ROBOT_COLOR;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = SCALE * 0.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, -r * 0.5);
      ctx.lineTo(r * 0.4, r * 0.5);
      ctx.lineTo(-r * 0.4, r * 0.5);
      ctx.closePath();
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.restore();
    }

    // Draw active_zone entities from map data (zones currently being cleaned)
    for (const entity of mapData.entities) {
      if (entity.type !== 'active_zone' || entity.points.length < 8) continue;
      // points: [x0,y0, x1,y1, x2,y2, x3,y3] in mm
      ctx.beginPath();
      for (let i = 0; i < entity.points.length; i += 2) {
        const px = (entity.points[i] / pixelSize - bb.minX) * SCALE;
        const py = (entity.points[i + 1] / pixelSize - bb.minY) * SCALE;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 152, 0, 0.22)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 152, 0, 0.9)';
      ctx.lineWidth = SCALE;
      ctx.setLineDash([6, 3]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    if (zone && !isTouchDevice) {
      const zc1 = mmToCanvas(zone.x1, zone.y1);
      const zc2 = mmToCanvas(zone.x2, zone.y2);
      const zx = Math.min(zc1.x, zc2.x);
      const zy = Math.min(zc1.y, zc2.y);
      const zw = Math.abs(zc2.x - zc1.x);
      const zh = Math.abs(zc2.y - zc1.y);
      ctx.fillStyle = 'rgba(255, 152, 0, 0.25)';
      ctx.fillRect(zx, zy, zw, zh);
      ctx.strokeStyle = 'rgba(255, 152, 0, 0.9)';
      ctx.lineWidth = SCALE;
      ctx.setLineDash([6, 3]);
      ctx.strokeRect(zx, zy, zw, zh);
      ctx.setLineDash([]);
    }

    // ─── Virtual restrictions (always rendered, prominent in restrictions mode) ─
    for (const entity of mapData.entities) {
      if (entity.type === 'virtual_wall' && entity.points.length >= 4) {
        const x1 = (entity.points[0] / pixelSize - bb.minX) * SCALE;
        const y1 = (entity.points[1] / pixelSize - bb.minY) * SCALE;
        const x2 = (entity.points[2] / pixelSize - bb.minX) * SCALE;
        const y2 = (entity.points[3] / pixelSize - bb.minY) * SCALE;
        const alpha = mode === 'restrictions' ? 1.0 : 0.6;
        const width = mode === 'restrictions' ? SCALE * 2 : SCALE * 1.2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(244, 67, 54, ${alpha})`;
        ctx.lineWidth = width;
        ctx.setLineDash([]);
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.lineCap = 'butt';
        // Endpoint dots
        if (mode === 'restrictions') {
          for (const [ex, ey] of [[x1, y1], [x2, y2]] as [number, number][]) {
            ctx.beginPath();
            ctx.arc(ex, ey, SCALE * 1.5, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(244, 67, 54, 0.9)';
            ctx.fill();
          }
        }
      }
      if ((entity.type === 'no_go_area' || entity.type === 'no_mop_area') && entity.points.length >= 8) {
        const alpha = mode === 'restrictions' ? 0.9 : 0.5;
        const isMop = entity.type === 'no_mop_area';
        const fillColor = isMop
          ? `rgba(33, 150, 243, ${mode === 'restrictions' ? 0.2 : 0.1})`
          : `rgba(244, 67, 54, ${mode === 'restrictions' ? 0.2 : 0.1})`;
        const strokeColor = isMop
          ? `rgba(33, 150, 243, ${alpha})`
          : `rgba(244, 67, 54, ${alpha})`;
        ctx.beginPath();
        for (let i = 0; i < entity.points.length; i += 2) {
          const px = (entity.points[i] / pixelSize - bb.minX) * SCALE;
          const py = (entity.points[i + 1] / pixelSize - bb.minY) * SCALE;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = mode === 'restrictions' ? SCALE * 1.5 : SCALE;
        ctx.setLineDash([5, 3]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }
  }, [mapData, selectedRooms, zone, mode, mmToCanvas, isTouchDevice]);

  // ─── Zoom: wheel ────────────────────────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const delta = e.deltaY < 0 ? 1.15 : 1 / 1.15;
      setZoom(prev => {
        const nz = Math.min(8, Math.max(1, prev * delta));
        if (nz <= 1) setPan({ x: 0, y: 0 });
        return nz;
      });
    };
    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  // ─── Pointer events: pan + zone drawing ────────────────────────────────────
  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.current.size === 2) {
      // Two fingers → pinch zoom, cancel any pan/drag
      isDragging.current = false;
      isPanning.current = false;
      setDragStart(null);
      setDragCurrent(null);
      return;
    }

    e.currentTarget.setPointerCapture(e.pointerId);

    if (mode === 'zone' && !isTouchDevice) {
      // Desktop drag-to-draw
      isDragging.current = true;
      const pt = screenToCanvas(e.clientX, e.clientY);
      setDragStart(pt);
      setDragCurrent(pt);
      onZoneChange?.(null);
      return;
    }

    if (zoom > 1) {
      // Pan
      isPanning.current = true;
      lastPanPos.current = { x: e.clientX, y: e.clientY };
    }
  }, [mode, isTouchDevice, zoom, screenToCanvas, onZoneChange]);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // Pinch zoom
    if (activePointers.current.size === 2) {
      const pts = Array.from(activePointers.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (lastPinchDist.current !== null) {
        const delta = dist / lastPinchDist.current;
        setZoom(z => Math.min(8, Math.max(1, z * delta)));
      }
      lastPinchDist.current = dist;
      return;
    }
    lastPinchDist.current = null;

    if (isDragging.current && mode === 'zone' && !isTouchDevice) {
      setDragCurrent(screenToCanvas(e.clientX, e.clientY));
      return;
    }

    if (isPanning.current && lastPanPos.current) {
      const dx = e.clientX - lastPanPos.current.x;
      const dy = e.clientY - lastPanPos.current.y;
      lastPanPos.current = { x: e.clientX, y: e.clientY };
      const container = containerRef.current;
      if (!container) return;
      const maxPan = (zoom - 1) * container.getBoundingClientRect().width / 2;
      setPan(p => ({
        x: Math.max(-maxPan, Math.min(maxPan, p.x + dx)),
        y: Math.max(-maxPan, Math.min(maxPan, p.y + dy)),
      }));
    }
  }, [mode, isTouchDevice, zoom, screenToCanvas]);

  const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    activePointers.current.delete(e.pointerId);
    lastPinchDist.current = null;

    if (isDragging.current && mode === 'zone' && !isTouchDevice) {
      isDragging.current = false;
      const end = screenToCanvas(e.clientX, e.clientY);
      if (dragStart && (Math.abs(end.x - dragStart.x) > 8 || Math.abs(end.y - dragStart.y) > 8)) {
        const mm1 = canvasToMm(dragStart.x, dragStart.y);
        const mm2 = canvasToMm(end.x, end.y);
        onZoneChange?.({
          x1: Math.round(Math.min(mm1.x, mm2.x)),
          y1: Math.round(Math.min(mm1.y, mm2.y)),
          x2: Math.round(Math.max(mm1.x, mm2.x)),
          y2: Math.round(Math.max(mm1.y, mm2.y)),
        });
      }
      setDragStart(null);
      setDragCurrent(null);
      return;
    }

    isPanning.current = false;
    lastPanPos.current = null;
  }, [mode, isTouchDevice, dragStart, screenToCanvas, canvasToMm, onZoneChange]);

  // Room click
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (mode !== 'room' || !onSegmentClick) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const pt = screenToCanvas(e.clientX, e.clientY);
    const { bb } = geoRef.current;
    const mx = Math.floor(pt.x / SCALE) + bb.minX;
    const my = Math.floor(pt.y / SCALE) + bb.minY;
    const segId = segLookupRef.current.get(`${mx},${my}`);
    if (segId !== undefined) onSegmentClick(segId);
  }, [mode, onSegmentClick, screenToCanvas]);

  // ─── Widget zone drag handles ──────────────────────────────────────────────
  // widgetZone coords are in canvas logical px; on screen they appear scaled
  // The overlay is absolutely positioned over the canvas CSS area
  const widgetZoneStyle = useMemo(() => {
    if (!widgetZone || !canvasRef.current) return null;
    const canvas = canvasRef.current;
    const canvasCssW = canvas.width; // we'll use % of canvas logical
    const canvasCssH = canvas.height;
    return {
      left:   `${widgetZone.x / canvasCssW * 100}%`,
      top:    `${widgetZone.y / canvasCssH * 100}%`,
      width:  `${widgetZone.w / canvasCssW * 100}%`,
      height: `${widgetZone.h / canvasCssH * 100}%`,
    };
  }, [widgetZone]);

  const handleWidgetPointerDown = useCallback((dragMode: 'move' | 'resize', e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    if (!widgetZone) return;
    widgetDragRef.current = {
      mode: dragMode,
      startPtr: { x: e.clientX, y: e.clientY },
      startZone: { ...widgetZone },
    };
  }, [widgetZone]);

  const handleWidgetPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!widgetDragRef.current || !canvasRef.current) return;
    e.stopPropagation();
    const { mode: dm, startPtr, startZone } = widgetDragRef.current;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!container) return;

    // screen delta → canvas px delta (accounting for zoom + canvas CSS scale)
    const rect = container.getBoundingClientRect();
    const cssToLogical = canvas.width / rect.width / zoom;
    const dx = (e.clientX - startPtr.x) * cssToLogical;
    const dy = (e.clientY - startPtr.y) * cssToLogical;

    setWidgetZone(prev => {
      if (!prev) return prev;
      const cw = canvas.width;
      const ch = canvas.height;
      if (dm === 'move') {
        return {
          ...prev,
          x: Math.max(0, Math.min(cw - startZone.w, startZone.x + dx)),
          y: Math.max(0, Math.min(ch - startZone.h, startZone.y + dy)),
        };
      } else {
        // resize: bottom-right corner
        const minSize = 20;
        const newW = Math.max(minSize, Math.min(cw - startZone.x, startZone.w + dx));
        const newH = Math.max(minSize, Math.min(ch - startZone.y, startZone.h + dy));
        return { ...prev, w: newW, h: newH };
      }
    });
  }, [zoom]);

  const handleWidgetPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    widgetDragRef.current = null;
  }, []);

  // ─── Desktop drag rect (% of canvas CSS area) ─────────────────────────────
  let dragRect: { left: string; top: string; width: string; height: string } | null = null;
  if (dragStart && dragCurrent && canvasRef.current) {
    const cw = canvasRef.current.width;
    const ch = canvasRef.current.height;
    const x = Math.min(dragStart.x, dragCurrent.x) / cw * 100;
    const y = Math.min(dragStart.y, dragCurrent.y) / ch * 100;
    const w = Math.abs(dragCurrent.x - dragStart.x) / cw * 100;
    const h = Math.abs(dragCurrent.y - dragStart.y) / ch * 100;
    dragRect = { left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` };
  }

  const isZoneMode = mode === 'zone';
  const isRoomMode = mode === 'room' && !!onSegmentClick;

  return (
    <div
      ref={containerRef}
      className={`valetudo-map-canvas${isZoneMode ? ' valetudo-map-canvas--zone-mode' : ''}${isRoomMode ? ' valetudo-map-canvas--room-mode' : ''}`}
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        className="valetudo-map-canvas__inner"
        style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}
      >
        <canvas ref={canvasRef} className="valetudo-map-canvas__canvas" />

        {/* Desktop drag-to-draw zone */}
        {dragRect && (
          <div className="valetudo-map-canvas__zone-drag" style={dragRect} />
        )}

        {/* Mobile widget zone */}
        {isZoneMode && isTouchDevice && widgetZone && widgetZoneStyle && (
          <div className="valetudo-map-canvas__widget-zone" style={widgetZoneStyle}>
            {/* Move handle — center */}
            <div
              className="valetudo-map-canvas__widget-zone-move"
              onPointerDown={(e) => handleWidgetPointerDown('move', e)}
              onPointerMove={handleWidgetPointerMove}
              onPointerUp={handleWidgetPointerUp}
              onPointerCancel={handleWidgetPointerUp}
            />
            {/* Resize handle — bottom-right corner */}
            <div
              className="valetudo-map-canvas__widget-zone-resize"
              onPointerDown={(e) => handleWidgetPointerDown('resize', e)}
              onPointerMove={handleWidgetPointerMove}
              onPointerUp={handleWidgetPointerUp}
              onPointerCancel={handleWidgetPointerUp}
            />
            {/* Delete button — top-right */}
            <button
              className="valetudo-map-canvas__widget-zone-delete"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => { e.stopPropagation(); setWidgetZone(null); onZoneChange?.(null); }}
              type="button"
            >×</button>
          </div>
        )}
      </div>

      {/* Zoom controls */}
      <div className="valetudo-map-canvas__zoom-controls">
        <button type="button" onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(8, z * 1.5)); }}>+</button>
        <button type="button" onClick={(e) => { e.stopPropagation(); setZoom(prev => { const nz = Math.max(1, prev / 1.5); if (nz <= 1) { setPan({ x: 0, y: 0 }); return 1; } return nz; }); }}>−</button>
        {zoom > 1 && <button type="button" onClick={(e) => { e.stopPropagation(); setZoom(1); setPan({ x: 0, y: 0 }); }} style={{fontSize:'0.7rem'}}>✕</button>}
      </div>
    </div>
  );
}
