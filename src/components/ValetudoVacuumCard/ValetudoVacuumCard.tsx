import { useRef, useState, useEffect, useCallback } from 'react';
import { ValetudoHeader } from '../ValetudoHeader/ValetudoHeader';
import { ValetudoMapCanvas } from '../ValetudoMapCanvas/ValetudoMapCanvas';
import { ValetudoCleaningModal } from '../ValetudoCleaningModal/ValetudoCleaningModal';
import { ValetudoSettingsPanel } from '../ValetudoSettingsPanel/ValetudoSettingsPanel';
import { ModeTabs } from '../ModeTabs';
import { ActionButtons } from '../ActionButtons';
import { Toast } from '../common';
import { RestrictionsToolbar } from '../RestrictionsToolbar/RestrictionsToolbar';
import { VACUUM_MOP_ICON_SVG } from '../../constants';
import { useVacuumCardState, useToast, useTheme } from '../../hooks';
import { useValetudoServices } from '../../hooks/useValetudoServices';
import { useValetudoMap } from '../../hooks/useValetudoMap';
import { useRestrictions, buildRestrictionsPayload } from '../../hooks/useRestrictions';
import { deriveValetudoEntityIds } from '../../types/valetudo';
import { useTranslation } from '../../hooks/useTranslation';
import type { Hass, RoomPosition } from '../../types/homeassistant';
import type { ValetudoHassConfig } from '../../types/valetudo';
import './ValetudoVacuumCard.scss';

interface ValetudoVacuumCardProps {
  hass: Hass;
  config: ValetudoHassConfig;
}

/**
 * Parses the segments sensor attributes into a RoomPosition list.
 * The sensor state attributes look like: { "1": "Спальня", "2": "Кабинет", ... }
 */
function parseSegments(attributes: Record<string, unknown>): RoomPosition[] {
  return Object.entries(attributes)
    .filter(([key]) => !isNaN(Number(key)))
    .map(([key, value]) => ({
      id: Number(key),
      name: String(value),
      x: 50,
      y: 50,
    }));
}

export function ValetudoVacuumCard({ hass, config }: ValetudoVacuumCardProps) {
  const entityIds = deriveValetudoEntityIds(config);
  const language = (config.language ?? 'en') as Parameters<typeof useTranslation>[0];
  const { t } = useTranslation(language);
  const themeType = config.theme ?? 'light';

  const vacuumEntity = hass.states[entityIds.vacuum];
  const mapEntity = hass.states[entityIds.map];
  const fanEntity = hass.states[entityIds.fan];
  const waterEntity = hass.states[entityIds.water];
  const batteryEntity = hass.states[entityIds.battery];
  const segmentsEntity = hass.states[entityIds.segments];
  const wifiEntity = hass.states[entityIds.wifi];
  // Consumables
  const mainBrushEntity = hass.states[entityIds.mainBrush];
  const rightBrushEntity = hass.states[entityIds.rightBrush];
  const mainFilterEntity = hass.states[entityIds.mainFilter];
  const sensorCleaningEntity = hass.states[entityIds.sensorCleaning];
  // Statistics
  const totalStatsAreaEntity = hass.states[entityIds.totalStatsArea];
  const totalStatsTimeEntity = hass.states[entityIds.totalStatsTime];
  const totalStatsCountEntity = hass.states[entityIds.totalStatsCount];
  const currentStatsAreaEntity = hass.states[entityIds.currentStatsArea];
  const currentStatsTimeEntity = hass.states[entityIds.currentStatsTime];
  // Switches
  const carpetModeEntity = hass.states[entityIds.carpetMode];

  const containerRef = useRef<HTMLDivElement>(null);

  const theme = useTheme({
    themeType,
    customThemeConfig: config.custom_theme,
    containerRef,
  });

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [cleaningModalOpen, setCleaningModalOpen] = useState(false);

  const {
    selectedMode,
    selectedRooms,
    selectedZone,
    setSelectedZone,
    setSelectedMode,
    handleModeChange,
    handleRoomToggle,
  } = useVacuumCardState({ defaultMode: config.default_mode });

  const { toast, showToast, hideToast } = useToast();

  const wifiAttrs = wifiEntity?.attributes as Record<string, unknown> | undefined;
  const wifiIp = (wifiAttrs?.ips as string[] | undefined)?.[0];
  // Used only to decide whether to show the Mapping button (not for direct fetch)
  const hasRobotUrl = !!(config.valetudo_url || wifiIp);

  const handleStartMapping = useCallback(async () => {
    try {
      let done = false;

      // 1. Direct REST via valetudo_url from config (works from HTTP pages / local network without HTTPS)
      const directUrl = config.valetudo_url?.replace(/\/$/, '');
      if (directUrl) {
        try {
          const res = await fetch(`${directUrl}/api/v2/robot/capabilities/MappingPassCapability`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'start_mapping' }),
          });
          if (!res.ok) throw new Error(`REST ${res.status}`);
          done = true;
        } catch (fetchErr) {
          console.warn('[valetudo] Direct mapping fetch failed:', fetchErr);
        }
      }

      // 2. HA rest_command (proxied server-side — bypasses CORS/mixed-content)
      if (!done) {
        try {
          await hass.callService('rest_command', 'valetudo_start_mapping', {});
          done = true;
        } catch (restErr: unknown) {
          const msg = String(restErr);
          if (
            !msg.includes('not_found') &&
            !msg.includes('Service not found') &&
            !msg.includes('Service rest_command')
          ) {
            throw restErr;
          }
        }
      }

      if (!done) {
        const hint =
          'Добавь в configuration.yaml:\n' +
          'rest_command:\n' +
          '  valetudo_start_mapping:\n' +
          '    url: "http://ROBOT_IP/api/v2/robot/capabilities/MappingPassCapability"\n' +
          '    method: PUT\n' +
          '    content_type: application/json\n' +
          '    payload: \'{"action": "start_mapping"}\'';
        console.warn('[valetudo] Cannot start mapping — no working method.\n' + hint);
        showToast(t('valetudo.toast.config_needed'));
        return;
      }

      showToast(t('valetudo.toast.mapping_started'));
    } catch (err) {
      console.error('[valetudo] Mapping failed:', err);
      showToast(t('valetudo.toast.mapping_error'));
    }
  }, [config.valetudo_url, hass, showToast, t]);

  const { handlePause, handleStop, handleDock, handleResume, handleSetFanSpeed, handleSetWater, handleClean } =
    useValetudoServices({
      hass,
      entityIds,
      onSuccess: showToast,
      language,
    });

  const state = vacuumEntity?.state ?? 'docked';
  const { mapData, error: mapError, refetch: refetchMap } = useValetudoMap(hass, entityIds.map, state);
  const [cleanIterations, setCleanIterations] = useState(1);

  // When robot finishes and returns to dock — reset zone/mode so map is pannable
  useEffect(() => {
    if (state === 'docked' || state === 'idle') {
      setSelectedMode('all');
      setSelectedZone(null);
    }
  }, [state]); // eslint-disable-line react-hooks/exhaustive-deps

  const isRestrictionsMode = selectedMode === 'restrictions';

  const { restrictions, setTool, addWall, addZone, selectItem, deleteSelected, markSaved } = useRestrictions({
    mapData,
    active: isRestrictionsMode,
  });

  const [restrictionsSaving, setRestrictionsSaving] = useState(false);

  const handleRestrictionDrawn = useCallback(
    (drawType: 'wall' | 'zone', p1: { x: number; y: number }, p2: { x: number; y: number }) => {
      if (drawType === 'wall') {
        return addWall(p1, p2);
      } else {
        const zoneType = restrictions.tool === 'no_mop' ? 'mop' : 'regular';
        return addZone(zoneType, p1, p2);
      }
    },
    [addWall, addZone, restrictions.tool]
  );

  const handleSaveRestrictions = useCallback(async () => {
    const payload = buildRestrictionsPayload(restrictions.walls, restrictions.zones);
    console.log('[valetudo] Saving restrictions payload:', JSON.stringify(payload));
    setRestrictionsSaving(true);
    try {
      let saved = false;

      // 1. Direct REST via valetudo_url from config (works from HTTP pages)
      const robotUrl = config.valetudo_url?.replace(/\/$/, '');
      if (robotUrl) {
        const res = await fetch(`${robotUrl}/api/v2/robot/capabilities/CombinedVirtualRestrictionsCapability`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`REST ${res.status}: ${await res.text()}`);
        console.log('[valetudo] Saved via direct REST');
        saved = true;
      }

      // 2. HA rest_command (proxied on HA server — bypasses CORS/mixed-content)
      if (!saved) {
        try {
          await hass.callService('rest_command', 'valetudo_set_restrictions', {
            payload: JSON.stringify(payload),
          });
          console.log('[valetudo] Saved via HA rest_command');
          saved = true;
        } catch (restCmdErr: unknown) {
          const msg = String(restCmdErr);
          console.warn('[valetudo] rest_command error:', msg);
          if (msg.includes('not_found') || msg.includes('Service not found') || msg.includes('Service rest_command')) {
            console.log('[valetudo] rest_command not configured, trying next method');
          } else {
            throw restCmdErr;
          }
        }
      }

      if (!saved) {
        const configHint =
          'Добавь в configuration.yaml:\n' +
          'rest_command:\n' +
          '  valetudo_set_restrictions:\n' +
          '    url: "http://ROBOT_IP/api/v2/robot/capabilities/CombinedVirtualRestrictionsCapability"\n' +
          '    method: PUT\n' +
          '    content_type: application/json\n' +
          '    payload: "{{ payload }}"';
        console.warn('[valetudo] Could not save — no working method.\n' + configHint);
        showToast(t('valetudo.toast.config_needed'));
        return;
      }

      markSaved();
      showToast(t('valetudo.toast.saved'));
      setTimeout(refetchMap, 800);
    } catch (err) {
      console.error('[valetudo] Save failed:', err);
      showToast(t('valetudo.toast.error', { message: err instanceof Error ? err.message : String(err) }));
    } finally {
      setRestrictionsSaving(false);
    }
  }, [config.valetudo_url, restrictions, hass, markSaved, showToast, refetchMap]);

  if (!vacuumEntity) {
    return <div className="valetudo-vacuum-card__error">Entity not found: {entityIds.vacuum}</div>;
  }

  const isRunning = ['cleaning', 'returning'].includes(state);
  const isPaused = state === 'paused';
  const isDocked = state === 'docked';

  const deviceName = config.title ?? (vacuumEntity.attributes.friendly_name as string | undefined) ?? 'Valetudo Robot';

  const rooms: RoomPosition[] = segmentsEntity ? parseSegments(segmentsEntity.attributes) : [];

  const handleRoomToggleWithToast = (roomId: number, roomName: string) => {
    const wasSelected = selectedRooms.has(roomId);
    handleRoomToggle(roomId, roomName);
    showToast(wasSelected ? `Deselected: ${roomName}` : `Selected: ${roomName}`);
  };

  const handleCleanAction = () => {
    handleClean(selectedMode, selectedRooms, selectedZone, cleanIterations);
    setSelectedMode('all');
    setSelectedZone(null);
  };

  const handleRestrictionsToggle = () => {
    setSelectedMode(isRestrictionsMode ? 'all' : 'restrictions');
    setSelectedZone(null);
  };

  const controlsDisabled = isRunning;

  return (
    <div ref={containerRef} className={`dreame-vacuum-card dreame-vacuum-card--${theme.name} valetudo-vacuum-card`}>
      <div className="dreame-vacuum-card__container">
        <ValetudoHeader
          vacuumEntity={vacuumEntity}
          batteryEntity={batteryEntity}
          currentStatsAreaEntity={currentStatsAreaEntity}
          currentStatsTimeEntity={currentStatsTimeEntity}
          deviceName={deviceName}
          restrictionsMode={isRestrictionsMode}
          onRestrictionsToggle={handleRestrictionsToggle}
          onSettingsClick={() => setSettingsOpen(true)}
          language={language}
        />

        {mapData ? (
          <ValetudoMapCanvas
            mapData={mapData}
            mode={selectedMode}
            selectedRooms={selectedMode === 'room' ? selectedRooms : undefined}
            zone={selectedMode === 'zone' ? selectedZone : null}
            onZoneChange={setSelectedZone}
            restrictions={isRestrictionsMode ? restrictions : undefined}
            onRestrictionDrawn={isRestrictionsMode ? handleRestrictionDrawn : undefined}
            onRestrictionSelect={isRestrictionsMode ? selectItem : undefined}
            iterations={cleanIterations}
            onIterationsChange={isRestrictionsMode ? undefined : setCleanIterations}
            language={language}
            onSegmentClick={
              selectedMode === 'room'
                ? (segId) => {
                    const room = rooms.find((r) => r.id === segId);
                    handleRoomToggleWithToast(segId, room?.name ?? String(segId));
                  }
                : undefined
            }
          />
        ) : (
          <div className="valetudo-vacuum-card__map-placeholder">
            {mapError ? t('valetudo.map.error', { message: mapError }) : t('valetudo.map.loading')}
          </div>
        )}

        <div className="cleaning-mode-button-wrapper">
          {isRestrictionsMode ? (
            <RestrictionsToolbar
              restrictions={restrictions}
              onToolChange={setTool}
              onDeleteSelected={deleteSelected}
              onSave={handleSaveRestrictions}
              saving={restrictionsSaving}
              language={language}
            />
          ) : (
            <button
              className={`cleaning-mode-button${controlsDisabled ? ' cleaning-mode-button--disabled' : ''}`}
              onClick={() => setCleaningModalOpen(true)}
              disabled={controlsDisabled}
              type="button"
            >
              <div className="cleaning-mode-button__content">
                <span className="cleaning-mode-button__icon">{VACUUM_MOP_ICON_SVG}</span>
                <span className="cleaning-mode-button__text">
                  {t('valetudo.cleaning.configure')}
                  {fanEntity?.state || waterEntity?.state
                    ? `: ${fanEntity?.state ?? ''}${waterEntity?.state ? ` · ${waterEntity.state}` : ''}`
                    : ''}
                </span>
              </div>
              <span className="cleaning-mode-button__arrow">›</span>
            </button>
          )}
        </div>

        <div className="dreame-vacuum-card__controls">
          {!isRestrictionsMode && selectedMode === 'room' && selectedRooms.size > 0 && (
            <div className="valetudo-selected-rooms">
              <span className="valetudo-selected-rooms__label">{t('room_display.selected_label')}</span>
              <span className="valetudo-selected-rooms__names">{Array.from(selectedRooms.values()).join(', ')}</span>
            </div>
          )}

          {!isRestrictionsMode && (
            <ModeTabs
              selectedMode={selectedMode}
              onModeChange={handleModeChange}
              disabled={isRunning}
              language={language}
            />
          )}

          <ActionButtons
            selectedMode={selectedMode}
            selectedRoomsCount={selectedRooms.size}
            isRunning={isRunning}
            isPaused={isPaused}
            isDocked={isDocked}
            onClean={isRestrictionsMode ? undefined : handleCleanAction}
            onPause={handlePause}
            onResume={handleResume}
            onStop={handleStop}
            onDock={handleDock}
            language={language}
          />
        </div>
      </div>

      <ValetudoCleaningModal
        opened={cleaningModalOpen}
        onClose={() => setCleaningModalOpen(false)}
        fanEntity={fanEntity}
        waterEntity={waterEntity}
        onFanChange={handleSetFanSpeed}
        onWaterChange={handleSetWater}
        disabled={controlsDisabled}
        language={language}
        onStartMapping={hasRobotUrl ? handleStartMapping : undefined}
      />

      <ValetudoSettingsPanel
        opened={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        hass={hass}
        vacuumEntity={vacuumEntity}
        fanEntity={fanEntity}
        waterEntity={waterEntity}
        batteryEntity={batteryEntity}
        segmentsEntity={segmentsEntity}
        wifiEntity={wifiEntity}
        mainBrushEntity={mainBrushEntity}
        rightBrushEntity={rightBrushEntity}
        mainFilterEntity={mainFilterEntity}
        sensorCleaningEntity={sensorCleaningEntity}
        totalStatsAreaEntity={totalStatsAreaEntity}
        totalStatsTimeEntity={totalStatsTimeEntity}
        totalStatsCountEntity={totalStatsCountEntity}
        currentStatsAreaEntity={currentStatsAreaEntity}
        currentStatsTimeEntity={currentStatsTimeEntity}
        carpetModeEntity={carpetModeEntity}
        entityIds={entityIds}
        valetudoUrl={config.valetudo_url}
        language={language}
      />

      {toast && <Toast message={toast} onClose={hideToast} />}
      {!mapEntity && <div className="valetudo-vacuum-card__warning">Map entity not found: {entityIds.map}</div>}
    </div>
  );
}
