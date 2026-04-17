import { useState, useEffect, useRef, useCallback } from 'react';
import * as pako from 'pako';
import type { Hass } from '../types/homeassistant';
import { extractZtxtPngChunks } from '../utils/valetudoPngUtils';
import { preprocessMap } from '../utils/valetudoMapUtils';
import type { RawMapData } from '../utils/ValetudoRawMapData';

const POLL_INTERVALS: Record<string, number> = {
  cleaning: 2000,
  returning: 2000,
  paused: 5000,
  docked: 10000,
  idle: 5000,
  error: 5000,
};

interface UseValetudoMapResult {
  mapData: RawMapData | null;
  error: string | null;
}

export function useValetudoMap(
  hass: Hass,
  mapEntityId: string,
  vacuumState: string
): UseValetudoMapResult {
  const [mapData, setMapData] = useState<RawMapData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isFetching = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pollInterval = POLL_INTERVALS[vacuumState] ?? 5000;

  const fetchMap = useCallback(async () => {
    if (isFetching.current) return;

    const mapEntity = hass.states[mapEntityId];
    const entityPicture = mapEntity?.attributes?.entity_picture as string | undefined;
    if (!entityPicture || mapEntity?.state === 'unavailable') return;

    isFetching.current = true;
    try {
      const response = await hass.fetchWithAuth(entityPicture);
      if (!response.ok) {
        throw new Error(`Camera fetch failed: ${response.status}`);
      }

      const buffer = await response.arrayBuffer();
      const chunks = extractZtxtPngChunks(new Uint8Array(buffer)).filter(
        (c) => c.keyword === 'ValetudoMap'
      );

      if (chunks.length === 0) {
        throw new Error('No ValetudoMap ZTXT chunk in PNG');
      }

      const jsonStr = pako.inflate(chunks[0].data, { to: 'string' });
      const raw: RawMapData = preprocessMap(JSON.parse(jsonStr));
      setMapData(raw);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      console.warn('[ValetudoMap] fetch error:', e);
    } finally {
      isFetching.current = false;
    }
  }, [hass, mapEntityId]);

  useEffect(() => {
    fetchMap();

    const schedule = () => {
      timerRef.current = setTimeout(() => {
        fetchMap().finally(schedule);
      }, pollInterval);
    };
    schedule();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [fetchMap, pollInterval]);

  return { mapData, error };
}
