import { useState, useCallback, useEffect, useRef } from 'react';
import type { RawMapData } from '../utils/ValetudoRawMapData';
import type { VirtualWall, RestrictedZone, RestrictionsState, RestrictionTool } from '../types/valetudo';

let _uid = 0;
function uid(): string {
  return `r${++_uid}`;
}

/** Parse current restrictions from mapData entities. */
function parseFromMapData(mapData: RawMapData): { walls: VirtualWall[]; zones: RestrictedZone[] } {
  const walls: VirtualWall[] = [];
  const zones: RestrictedZone[] = [];
  for (const entity of mapData.entities) {
    if (entity.type === 'virtual_wall' && entity.points.length >= 4) {
      walls.push({
        id: uid(),
        pA: { x: entity.points[0], y: entity.points[1] },
        pB: { x: entity.points[2], y: entity.points[3] },
      });
    } else if ((entity.type === 'no_go_area' || entity.type === 'no_mop_area') && entity.points.length >= 8) {
      zones.push({
        id: uid(),
        type: entity.type === 'no_mop_area' ? 'mop' : 'regular',
        pA: { x: entity.points[0], y: entity.points[1] },
        pB: { x: entity.points[2], y: entity.points[3] },
        pC: { x: entity.points[4], y: entity.points[5] },
        pD: { x: entity.points[6], y: entity.points[7] },
      });
    }
  }
  return { walls, zones };
}

/** Build the PUT payload from local state. */
export function buildRestrictionsPayload(walls: VirtualWall[], zones: RestrictedZone[]) {
  return {
    virtualWalls: walls.map((w) => ({
      __class: 'ValetudoVirtualWall',
      points: { pA: w.pA, pB: w.pB },
    })),
    restrictedZones: zones.map((z) => ({
      __class: z.type === 'mop' ? 'ValetudoNoMopZone' : 'ValetudoRestrictedZone',
      type: z.type,
      points: { pA: z.pA, pB: z.pB, pC: z.pC, pD: z.pD },
    })),
  };
}

interface UseRestrictionsOptions {
  mapData: RawMapData | null;
  active: boolean; // only load/track when in restrictions mode
}

export function useRestrictions({ mapData, active }: UseRestrictionsOptions) {
  // Snapshot of last successfully saved state — used to survive stale mapData (camera lag)
  const savedSnapshotRef = useRef<{ walls: VirtualWall[]; zones: RestrictedZone[] } | null>(null);

  const [state, setState] = useState<RestrictionsState>({
    walls: [],
    zones: [],
    selectedId: null,
    tool: 'wall',
    dirty: false,
    savedDisplay: null,
  });

  // Load from mapData when entering restrictions mode (or when mapData updates while active)
  useEffect(() => {
    if (!active || !mapData) return;
    const parsed = parseFromMapData(mapData);

    // Snapshot check is done outside setState so we can also clear savedDisplay reactively.
    const snap = savedSnapshotRef.current;
    if (snap) {
      const mapDataReflectsSave =
        parsed.walls.length === snap.walls.length &&
        snap.walls.every((sw) =>
          parsed.walls.some(
            (pw) => pw.pA.x === sw.pA.x && pw.pA.y === sw.pA.y && pw.pB.x === sw.pB.x && pw.pB.y === sw.pB.y
          )
        ) &&
        parsed.zones.length === snap.zones.length &&
        snap.zones.every((sz) =>
          parsed.zones.some(
            (pz) => pz.pA.x === sz.pA.x && pz.pA.y === sz.pA.y && pz.pC.x === sz.pC.x && pz.pC.y === sz.pC.y
          )
        );

      if (!mapDataReflectsSave) {
        // Camera still stale — keep showing saved snapshot
        setState((prev) => {
          if (prev.dirty || prev.selectedId !== null) return prev;
          return { ...prev, walls: snap.walls, zones: snap.zones, selectedId: null, dirty: false };
        });
        return;
      }

      // Camera caught up — clear snapshot and remove optimistic savedDisplay
      savedSnapshotRef.current = null;
      setState((prev) => {
        if (prev.dirty || prev.selectedId !== null) return prev;
        return {
          ...prev,
          walls: parsed.walls,
          zones: parsed.zones,
          selectedId: null,
          dirty: false,
          savedDisplay: null,
        };
      });
      return;
    }

    setState((prev) => {
      if (prev.dirty || prev.selectedId !== null) return prev;
      return { ...prev, walls: parsed.walls, zones: parsed.zones, selectedId: null, dirty: false };
    });
  }, [active, mapData]);

  // Reset when leaving mode — clear edit state but keep savedDisplay for optimistic rendering
  useEffect(() => {
    if (!active) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState((prev) => ({
        walls: [],
        zones: [],
        selectedId: null,
        tool: 'wall',
        dirty: false,
        savedDisplay: prev.savedDisplay,
      }));
    }
  }, [active]);

  const setTool = useCallback((tool: RestrictionTool) => {
    setState((prev) => ({ ...prev, tool, selectedId: null }));
  }, []);

  const addWall = useCallback((pA: { x: number; y: number }, pB: { x: number; y: number }) => {
    const id = uid();
    setState((prev) => ({
      ...prev,
      walls: [...prev.walls, { id, pA, pB }],
      dirty: true,
      selectedId: id,
    }));
    return id;
  }, []);

  const addZone = useCallback((type: 'regular' | 'mop', pA: { x: number; y: number }, pC: { x: number; y: number }) => {
    // pA = top-left, pC = bottom-right → derive all 4 corners
    const minX = Math.min(pA.x, pC.x);
    const maxX = Math.max(pA.x, pC.x);
    const minY = Math.min(pA.y, pC.y);
    const maxY = Math.max(pA.y, pC.y);
    const id = uid();
    setState((prev) => ({
      ...prev,
      zones: [
        ...prev.zones,
        {
          id,
          type,
          pA: { x: minX, y: minY },
          pB: { x: maxX, y: minY },
          pC: { x: maxX, y: maxY },
          pD: { x: minX, y: maxY },
        },
      ],
      dirty: true,
      selectedId: id,
    }));
    return id;
  }, []);

  const updateWall = useCallback((id: string, pA: { x: number; y: number }, pB: { x: number; y: number }) => {
    setState((prev) => ({
      ...prev,
      walls: prev.walls.map((w) => (w.id === id ? { ...w, pA, pB } : w)),
      dirty: true,
      selectedId: id,
    }));
  }, []);

  const updateZone = useCallback((id: string, pA: { x: number; y: number }, pC: { x: number; y: number }) => {
    const minX = Math.min(pA.x, pC.x);
    const maxX = Math.max(pA.x, pC.x);
    const minY = Math.min(pA.y, pC.y);
    const maxY = Math.max(pA.y, pC.y);
    setState((prev) => ({
      ...prev,
      zones: prev.zones.map((z) =>
        z.id === id
          ? {
              ...z,
              pA: { x: minX, y: minY },
              pB: { x: maxX, y: minY },
              pC: { x: maxX, y: maxY },
              pD: { x: minX, y: maxY },
            }
          : z
      ),
      dirty: true,
      selectedId: id,
    }));
  }, []);

  const deleteItem = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      walls: prev.walls.filter((w) => w.id !== id),
      zones: prev.zones.filter((z) => z.id !== id),
      dirty: true,
      selectedId: prev.selectedId === id ? null : prev.selectedId,
    }));
  }, []);

  const selectItem = useCallback((id: string | null) => {
    setState((prev) => ({ ...prev, selectedId: id }));
  }, []);

  const deleteSelected = useCallback(() => {
    setState((prev) => {
      if (!prev.selectedId) return prev;
      return {
        ...prev,
        walls: prev.walls.filter((w) => w.id !== prev.selectedId),
        zones: prev.zones.filter((z) => z.id !== prev.selectedId),
        selectedId: null,
        dirty: true,
      };
    });
  }, []);

  const markSaved = useCallback(() => {
    setState((prev) => {
      const snap = { walls: prev.walls, zones: prev.zones };
      // savedSnapshotRef: survives stale mapData on re-entry into edit mode
      savedSnapshotRef.current = snap;
      // savedDisplay: reactive — canvas shows optimistic walls while mapData is still stale
      return { ...prev, dirty: false, savedDisplay: snap };
    });
  }, []);

  return {
    restrictions: state,
    setTool,
    addWall,
    addZone,
    updateWall,
    updateZone,
    deleteItem,
    selectItem,
    deleteSelected,
    markSaved,
  };
}
