import { useRef, useState, useEffect } from 'react';
import { ValetudoHeader } from '../ValetudoHeader/ValetudoHeader';
import { ValetudoMapCanvas } from '../ValetudoMapCanvas/ValetudoMapCanvas';
import { ValetudoCleaningModal } from '../ValetudoCleaningModal/ValetudoCleaningModal';
import { ValetudoSettingsPanel } from '../ValetudoSettingsPanel/ValetudoSettingsPanel';
import { ModeTabs } from '../ModeTabs';
import { ActionButtons } from '../ActionButtons';
import { Toast } from '../common';
import { VACUUM_MOP_ICON_SVG } from '../../constants';
import { useVacuumCardState, useToast, useTheme } from '../../hooks';
import { useValetudoServices } from '../../hooks/useValetudoServices';
import { useValetudoMap } from '../../hooks/useValetudoMap';
import { deriveValetudoEntityIds } from '../../types/valetudo';
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
  const language = config.language ?? 'en';
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

  const {
    handlePause,
    handleStop,
    handleDock,
    handleResume,
    handleSetFanSpeed,
    handleSetWater,
    handleClean,
  } = useValetudoServices({
    hass,
    entityIds,
    onSuccess: showToast,
    language,
  });

  const state = vacuumEntity?.state ?? 'docked';
  const { mapData, error: mapError } = useValetudoMap(hass, entityIds.map, state);

  if (!vacuumEntity) {
    return (
      <div className="valetudo-vacuum-card__error">
        Entity not found: {entityIds.vacuum}
      </div>
    );
  }

  const isRunning = ['cleaning', 'returning'].includes(state);
  const isPaused = state === 'paused';
  const isDocked = state === 'docked';

  const deviceName =
    config.title ??
    (vacuumEntity.attributes.friendly_name as string | undefined) ??
    'Valetudo Robot';

  const rooms: RoomPosition[] = segmentsEntity
    ? parseSegments(segmentsEntity.attributes)
    : [];

  const handleRoomToggleWithToast = (roomId: number, roomName: string) => {
    const wasSelected = selectedRooms.has(roomId);
    handleRoomToggle(roomId, roomName);
    showToast(wasSelected ? `Deselected: ${roomName}` : `Selected: ${roomName}`);
  };

  // When robot finishes and returns to dock — reset zone/mode so map is pannable
  useEffect(() => {
    if (state === 'docked' || state === 'idle') {
      setSelectedMode('all');
      setSelectedZone(null);
    }
  }, [state]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCleanAction = () => {
    handleClean(selectedMode, selectedRooms, selectedZone);
    setSelectedMode('all');
    setSelectedZone(null);
  };

  const isRestrictionsMode = selectedMode === 'restrictions';
  const handleRestrictionsToggle = () => {
    setSelectedMode(isRestrictionsMode ? 'all' : 'restrictions');
    setSelectedZone(null);
  };

  const controlsDisabled = isRunning;

  return (
    <div
      ref={containerRef}
      className={`dreame-vacuum-card dreame-vacuum-card--${theme.name} valetudo-vacuum-card`}
    >
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
        />

        {mapData ? (
          <ValetudoMapCanvas
            mapData={mapData}
            mode={selectedMode}
            selectedRooms={selectedMode === 'room' ? selectedRooms : undefined}
            zone={selectedMode === 'zone' ? selectedZone : null}
            onZoneChange={setSelectedZone}
            onSegmentClick={selectedMode === 'room'
              ? (segId) => {
                  const room = rooms.find((r) => r.id === segId);
                  handleRoomToggleWithToast(segId, room?.name ?? String(segId));
                }
              : undefined
            }
          />
        ) : (
          <div className="valetudo-vacuum-card__map-placeholder">
            {mapError ? `Map error: ${mapError}` : 'Loading map…'}
          </div>
        )}

        <div className="cleaning-mode-button-wrapper">
          {isRestrictionsMode ? (
            <div className="valetudo-restrictions-hint">
              <span>Режим просмотра ограничений</span>
            </div>
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
                Настроить уборку
                {fanEntity?.state || waterEntity?.state
                  ? `: ${fanEntity?.state ?? ''}${
                      waterEntity?.state ? ` · ${waterEntity.state}` : ''
                    }`
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
              <span className="valetudo-selected-rooms__label">Выбрано:</span>
              <span className="valetudo-selected-rooms__names">
                {Array.from(selectedRooms.values()).join(', ')}
              </span>
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
      />

      {toast && <Toast message={toast} onClose={hideToast} />}
      {!mapEntity && (
        <div className="valetudo-vacuum-card__warning">
          Map entity not found: {entityIds.map}
        </div>
      )}
    </div>
  );
}
