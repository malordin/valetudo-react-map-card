import { useState, useCallback, useEffect } from 'react';
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
      points: { pA: w.pA, pB: w.pB },
    })),
    restrictedZones: zones.map((z) => ({
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
  const [state, setState] = useState<RestrictionsState>({
    walls: [],
    zones: [],
    selectedId: null,
    tool: 'wall',
    dirty: false,
  });

  // Load from mapData when entering restrictions mode (or when mapData updates while active)
  useEffect(() => {
    if (!active || !mapData) return;
    const { walls, zones } = parseFromMapData(mapData);
    setState((prev) => {
      // Don't overwrite unsaved changes
      if (prev.dirty) return prev;
      return { ...prev, walls, zones, selectedId: null, dirty: false };
    });
  }, [active, mapData]);

  // Reset when leaving mode
  useEffect(() => {
    if (!active) {
      setState({ walls: [], zones: [], selectedId: null, tool: 'wall', dirty: false });
    }
  }, [active]);

  const setTool = useCallback((tool: RestrictionTool) => {
    setState((prev) => ({ ...prev, tool, selectedId: null }));
  }, []);

  const addWall = useCallback((pA: { x: number; y: number }, pB: { x: number; y: number }) => {
    setState((prev) => ({
      ...prev,
      walls: [...prev.walls, { id: uid(), pA, pB }],
      dirty: true,
      selectedId: null,
    }));
  }, []);

  const addZone = useCallback(
    (
      type: 'regular' | 'mop',
      pA: { x: number; y: number },
      pC: { x: number; y: number }
    ) => {
      // pA = top-left, pC = bottom-right → derive all 4 corners
      const minX = Math.min(pA.x, pC.x);
      const maxX = Math.max(pA.x, pC.x);
      const minY = Math.min(pA.y, pC.y);
      const maxY = Math.max(pA.y, pC.y);
      setState((prev) => ({
        ...prev,
        zones: [
          ...prev.zones,
          {
            id: uid(),
            type,
            pA: { x: minX, y: minY },
            pB: { x: maxX, y: minY },
            pC: { x: maxX, y: maxY },
            pD: { x: minX, y: maxY },
          },
        ],
        dirty: true,
        selectedId: null,
      }));
    },
    []
  );

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
    setState((prev) => ({ ...prev, dirty: false }));
  }, []);

  return {
    restrictions: state,
    setTool,
    addWall,
    addZone,
    selectItem,
    deleteSelected,
    markSaved,
  };
}
