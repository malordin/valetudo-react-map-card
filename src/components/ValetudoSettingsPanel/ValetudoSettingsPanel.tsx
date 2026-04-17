import { Modal, Accordion } from '../common';
import { Info, Wrench, BarChart2, Settings2, MapPin, Cpu } from 'lucide-react';
import type { HassEntity } from '../../types/homeassistant';
import type { Hass } from '../../types/homeassistant';
import type { ValetudoEntityIds } from '../../types/valetudo';
import { useTranslation } from '../../hooks/useTranslation';
import type { SupportedLanguage } from '../../i18n/locales';

interface ValetudoSettingsPanelProps {
  opened: boolean;
  onClose: () => void;
  hass: Hass;
  vacuumEntity: HassEntity;
  fanEntity?: HassEntity;
  waterEntity?: HassEntity;
  batteryEntity?: HassEntity;
  segmentsEntity?: HassEntity;
  wifiEntity?: HassEntity;
  mainBrushEntity?: HassEntity;
  rightBrushEntity?: HassEntity;
  mainFilterEntity?: HassEntity;
  sensorCleaningEntity?: HassEntity;
  totalStatsAreaEntity?: HassEntity;
  totalStatsTimeEntity?: HassEntity;
  totalStatsCountEntity?: HassEntity;
  currentStatsAreaEntity?: HassEntity;
  currentStatsTimeEntity?: HassEntity;
  carpetModeEntity?: HassEntity;
  entityIds: ValetudoEntityIds;
  language?: SupportedLanguage;
}

const CONSUMABLE_MAX: Record<string, number> = {
  mainBrush: 18000, // 300 h
  rightBrush: 12000, // 200 h
  mainFilter: 9000, // 150 h
  sensorCleaning: 1800, // 30 h
};

function formatMinutesRemaining(mins: number): string {
  if (mins <= 0) return 'Заменить';
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  if (hours >= 10) return `${hours} ч`;
  if (hours > 0) return `${hours} ч ${minutes} м`;
  return `${minutes} м`;
}

function formatSeconds(secs: number): string {
  const totalMin = Math.floor(secs / 60);
  const hours = Math.floor(totalMin / 60);
  const mins = totalMin % 60;
  if (hours > 0) return `${hours} h ${mins} m`;
  return `${totalMin} m`;
}

function formatCm2(cm2: number): string {
  const m2 = cm2 / 10000;
  return `${m2 < 10 ? m2.toFixed(1) : Math.round(m2)} m²`;
}

interface ConsumableRowProps {
  label: string;
  entity?: HassEntity;
  maxKey: string;
  onReset: () => void;
  t: (key: string, vars?: Record<string, string>) => string;
}

function ConsumableRow({ label, entity, maxKey, onReset, t }: ConsumableRowProps) {
  const rawState = entity?.state;
  const mins = rawState && !['unavailable', 'unknown'].includes(rawState) ? Number(rawState) : null;
  const maxMins = CONSUMABLE_MAX[maxKey] ?? 1;
  const pct = mins !== null ? Math.max(0, Math.min(100, Math.round((mins / maxMins) * 100))) : null;
  const isDepleted = mins !== null && mins <= 0;

  const barColor =
    pct === null
      ? 'var(--accent-color, #007aff)'
      : pct > 50
        ? 'var(--accent-color, #007aff)'
        : pct > 20
          ? 'var(--warning-color, #ff9500)'
          : 'var(--error-color, #ff3b30)';

  const tooltipText =
    mins === null
      ? ''
      : isDepleted
        ? t('valetudo.panel.needs_replacement')
        : t('valetudo.panel.remaining', { time: formatMinutesRemaining(mins) });

  return (
    <div className="consumable-row">
      <div className="consumable-row__header">
        <span className="consumable-row__label">{label}</span>
        <span
          className={`consumable-row__value${isDepleted ? ' consumable-row__value--depleted' : ''}`}
          title={tooltipText}
        >
          {pct !== null ? (isDepleted ? t('valetudo.panel.replace') : `${pct}%`) : '—'}
        </span>
        <button
          className="consumable-row__reset-btn"
          onClick={onReset}
          type="button"
          title={t('valetudo.panel.reset')}
          aria-label={`${t('valetudo.panel.reset')}: ${label}`}
        >
          ↺
        </button>
      </div>
      {pct !== null && (
        <div className="consumable-progress">
          <div className="consumable-progress__fill" style={{ width: `${pct}%`, background: barColor }} />
        </div>
      )}
    </div>
  );
}

export function ValetudoSettingsPanel({
  opened,
  onClose,
  hass,
  vacuumEntity,
  fanEntity,
  waterEntity,
  batteryEntity,
  segmentsEntity,
  wifiEntity,
  mainBrushEntity,
  rightBrushEntity,
  mainFilterEntity,
  sensorCleaningEntity,
  totalStatsAreaEntity,
  totalStatsTimeEntity,
  totalStatsCountEntity,
  currentStatsAreaEntity,
  currentStatsTimeEntity,
  carpetModeEntity,
  entityIds,
  language,
}: ValetudoSettingsPanelProps) {
  const { t } = useTranslation(language);
  const stateLabel =
    (
      {
        docked: t('valetudo.status.docked'),
        cleaning: t('valetudo.status.cleaning'),
        paused: t('valetudo.status.paused'),
        returning: t('valetudo.status.returning'),
        idle: t('valetudo.status.idle'),
        error: t('valetudo.status.error'),
      } as Record<string, string>
    )[vacuumEntity.state] ?? vacuumEntity.state;
  const batteryLevel = batteryEntity ? Number(batteryEntity.state) : null;

  // Wi-Fi
  const wifiAttrs = wifiEntity?.attributes as Record<string, unknown> | undefined;
  const wifiSsid = (wifiAttrs?.ssid as string | undefined) ?? '—';
  const wifiIp = (wifiAttrs?.ips as string[] | undefined)?.[0] ?? '—';
  const wifiRssi =
    wifiEntity?.state && !['unavailable', 'unknown'].includes(wifiEntity.state)
      ? `${wifiEntity.state} ${t('valetudo.panel.dbm')}`
      : '—';

  // Total statistics (area in cm², time in s, count unitless)
  const totalAreaRaw = totalStatsAreaEntity?.state;
  const totalTimeRaw = totalStatsTimeEntity?.state;
  const totalCountRaw = totalStatsCountEntity?.state;
  const totalAreaCm = totalAreaRaw && !['unavailable', 'unknown'].includes(totalAreaRaw) ? Number(totalAreaRaw) : null;
  const totalTimeSec = totalTimeRaw && !['unavailable', 'unknown'].includes(totalTimeRaw) ? Number(totalTimeRaw) : null;
  const totalCount = totalCountRaw && !['unavailable', 'unknown'].includes(totalCountRaw) ? totalCountRaw : null;

  // Current session stats
  const curAreaRaw = currentStatsAreaEntity?.state;
  const curTimeRaw = currentStatsTimeEntity?.state;
  const curAreaCm = curAreaRaw && !['unavailable', 'unknown'].includes(curAreaRaw) ? Number(curAreaRaw) : null;
  const curTimeSec = curTimeRaw && !['unavailable', 'unknown'].includes(curTimeRaw) ? Number(curTimeRaw) : null;

  const segments = segmentsEntity
    ? Object.entries(segmentsEntity.attributes)
        .filter(([k]) => !isNaN(Number(k)))
        .map(([, v]) => String(v))
    : [];

  const carpetModeOn = carpetModeEntity?.state === 'on';

  const pressButton = (entityId: string) => {
    hass.callService('button', 'press', { entity_id: entityId });
  };

  const toggleCarpetMode = () => {
    hass.callService('switch', carpetModeOn ? 'turn_off' : 'turn_on', { entity_id: entityIds.carpetMode });
  };

  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="valetudo-settings-panel">
        <h2 className="valetudo-settings-panel__title">{t('valetudo.panel.title')}</h2>

        <div className="valetudo-settings-panel__scroll">
          {/* === Device === */}
          <Accordion title={t('valetudo.panel.device')} icon={<Info />} defaultOpen>
            <div className="valetudo-settings-section">
              {[
                { label: t('valetudo.panel.status'), value: stateLabel },
                batteryLevel !== null && !isNaN(batteryLevel)
                  ? { label: t('valetudo.panel.battery'), value: `${batteryLevel}%` }
                  : null,
                { label: t('valetudo.panel.wifi'), value: wifiSsid },
                { label: t('valetudo.panel.signal'), value: wifiRssi },
                { label: t('valetudo.panel.ip_address'), value: wifiIp },
              ]
                .filter(Boolean)
                .map((item) => (
                  <div key={item!.label} className="valetudo-settings-section__row">
                    <span className="valetudo-settings-section__label">{item!.label}</span>
                    <span className="valetudo-settings-section__value">{item!.value}</span>
                  </div>
                ))}
            </div>
          </Accordion>

          {/* === Consumables === */}
          <Accordion title={t('valetudo.panel.consumables')} icon={<Wrench />} defaultOpen>
            <div className="valetudo-settings-section valetudo-settings-section--consumables">
              <ConsumableRow
                label={t('valetudo.panel.main_brush')}
                entity={mainBrushEntity}
                maxKey="mainBrush"
                onReset={() => pressButton(entityIds.resetMainBrush)}
                t={t}
              />
              <ConsumableRow
                label={t('valetudo.panel.side_brush')}
                entity={rightBrushEntity}
                maxKey="rightBrush"
                onReset={() => pressButton(entityIds.resetRightBrush)}
                t={t}
              />
              <ConsumableRow
                label={t('valetudo.panel.filter')}
                entity={mainFilterEntity}
                maxKey="mainFilter"
                onReset={() => pressButton(entityIds.resetMainFilter)}
                t={t}
              />
              <ConsumableRow
                label={t('valetudo.panel.sensors')}
                entity={sensorCleaningEntity}
                maxKey="sensorCleaning"
                onReset={() => pressButton(entityIds.resetSensorCleaning)}
                t={t}
              />
            </div>
          </Accordion>

          {/* === Statistics === */}
          <Accordion title={t('valetudo.panel.statistics')} icon={<BarChart2 />}>
            <div className="valetudo-settings-section">
              {totalCount !== null && (
                <div className="valetudo-settings-section__row">
                  <span className="valetudo-settings-section__label">{t('valetudo.panel.total_cleanings')}</span>
                  <span className="valetudo-settings-section__value">{totalCount}</span>
                </div>
              )}
              {totalAreaCm !== null && (
                <div className="valetudo-settings-section__row">
                  <span className="valetudo-settings-section__label">{t('valetudo.panel.total_area')}</span>
                  <span className="valetudo-settings-section__value">{formatCm2(totalAreaCm)}</span>
                </div>
              )}
              {totalTimeSec !== null && (
                <div className="valetudo-settings-section__row">
                  <span className="valetudo-settings-section__label">{t('valetudo.panel.total_time')}</span>
                  <span className="valetudo-settings-section__value">{formatSeconds(totalTimeSec)}</span>
                </div>
              )}
              {(curAreaCm !== null || curTimeSec !== null) && <div className="valetudo-settings-section__divider" />}
              {curAreaCm !== null && (
                <div className="valetudo-settings-section__row">
                  <span className="valetudo-settings-section__label">{t('valetudo.panel.current_area')}</span>
                  <span className="valetudo-settings-section__value">{formatCm2(curAreaCm)}</span>
                </div>
              )}
              {curTimeSec !== null && (
                <div className="valetudo-settings-section__row">
                  <span className="valetudo-settings-section__label">{t('valetudo.panel.current_time')}</span>
                  <span className="valetudo-settings-section__value">{formatSeconds(curTimeSec)}</span>
                </div>
              )}
            </div>
          </Accordion>

          {/* === Cleaning Settings === */}
          <Accordion title={t('valetudo.panel.cleaning_settings')} icon={<Settings2 />}>
            <div className="valetudo-settings-section">
              {carpetModeEntity && (
                <div className="valetudo-settings-section__row valetudo-settings-section__row--toggle">
                  <span className="valetudo-settings-section__label">{t('valetudo.panel.carpet_mode')}</span>
                  <button
                    className={`valetudo-toggle${carpetModeOn ? ' valetudo-toggle--on' : ''}`}
                    onClick={toggleCarpetMode}
                    type="button"
                    aria-label={t('valetudo.panel.carpet_mode')}
                    aria-pressed={carpetModeOn}
                  >
                    <span className="valetudo-toggle__thumb" />
                  </button>
                </div>
              )}
              <div className="valetudo-settings-section__row">
                <span className="valetudo-settings-section__label">{t('valetudo.cleaning.suction_power')}</span>
                <span className="valetudo-settings-section__value">{fanEntity?.state ?? '—'}</span>
              </div>
              <div className="valetudo-settings-section__row">
                <span className="valetudo-settings-section__label">{t('valetudo.cleaning.water_level')}</span>
                <span className="valetudo-settings-section__value">{waterEntity?.state ?? '—'}</span>
              </div>
            </div>
          </Accordion>

          {/* === Rooms === */}
          {segments.length > 0 && (
            <Accordion title={t('valetudo.panel.rooms')} icon={<MapPin />}>
              <div className="valetudo-settings-section">
                {segments.map((name, i) => (
                  <div key={i} className="valetudo-settings-section__row">
                    <span className="valetudo-settings-section__label">{name}</span>
                  </div>
                ))}
              </div>
            </Accordion>
          )}

          {/* === Configuration === */}
          <Accordion title={t('valetudo.panel.configuration')} icon={<Cpu />}>
            <div className="valetudo-settings-section">
              {Object.entries(entityIds).map(([key, id]) => (
                <div key={key} className="valetudo-settings-section__row">
                  <span className="valetudo-settings-section__label valetudo-settings-section__label--mono">{key}</span>
                  <span className="valetudo-settings-section__value valetudo-settings-section__value--mono">{id}</span>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </Modal>
  );
}
