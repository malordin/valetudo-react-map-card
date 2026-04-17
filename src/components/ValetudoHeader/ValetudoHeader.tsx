import { Settings, Clock, Scan, ShieldAlert } from 'lucide-react';
import type { HassEntity } from '../../types/homeassistant';
import {
  BATTERY_EMPTY_ICON_SVG,
  BATTERY_LOW_ICON_SVG,
  BATTERY_MEDIUM_ICON_SVG,
  BATTERY_FULL_ICON_SVG,
} from '../../constants/icons';
import '../Header/Header.scss';

const STATE_LABELS: Record<string, string> = {
  docked: 'Docked',
  cleaning: 'Cleaning',
  paused: 'Paused',
  returning: 'Returning to dock',
  idle: 'Idle',
  error: 'Error',
};

function formatCurrentTime(seconds: number): string {
  const totalMin = Math.floor(seconds / 60);
  const hours = Math.floor(totalMin / 60);
  const mins = totalMin % 60;
  if (hours > 0) return `${hours}ч ${mins}м`;
  return `${totalMin}м`;
}

function formatCurrentArea(cm2: number): string {
  const m2 = cm2 / 10000;
  return `${m2 < 10 ? m2.toFixed(1) : Math.round(m2)} м²`;
}

interface ValetudoHeaderProps {
  vacuumEntity: HassEntity;
  batteryEntity?: HassEntity;
  currentStatsAreaEntity?: HassEntity;
  currentStatsTimeEntity?: HassEntity;
  deviceName: string;
  restrictionsMode?: boolean;
  onRestrictionsToggle?: () => void;
  onSettingsClick?: () => void;
}

export function ValetudoHeader({
  vacuumEntity,
  batteryEntity,
  currentStatsAreaEntity,
  currentStatsTimeEntity,
  deviceName,
  restrictionsMode,
  onRestrictionsToggle,
  onSettingsClick,
}: ValetudoHeaderProps) {
  const batteryLevel = batteryEntity ? Number(batteryEntity.state) : null;
  const statusText = STATE_LABELS[vacuumEntity.state] ?? vacuumEntity.state;

  const isActive = ['cleaning', 'paused', 'returning'].includes(vacuumEntity.state);
  const currentAreaCm = currentStatsAreaEntity ? Number(currentStatsAreaEntity.state) : NaN;
  const currentTimeSec = currentStatsTimeEntity ? Number(currentStatsTimeEntity.state) : NaN;
  const showCurrentStats = isActive && !isNaN(currentAreaCm) && !isNaN(currentTimeSec) && currentAreaCm > 0;

  const getBatteryIcon = () => {
    if (batteryLevel === null || isNaN(batteryLevel)) return null;
    if (batteryLevel >= 80) return BATTERY_FULL_ICON_SVG;
    if (batteryLevel >= 60) return BATTERY_MEDIUM_ICON_SVG;
    if (batteryLevel >= 20) return BATTERY_LOW_ICON_SVG;
    return BATTERY_EMPTY_ICON_SVG;
  };

  return (
    <div className="header">
      <div className="header__top">
        {onRestrictionsToggle && (
          <button
            className={`header__restrictions-btn${restrictionsMode ? ' header__restrictions-btn--active' : ''}`}
            onClick={onRestrictionsToggle}
            type="button"
            aria-label="Virtual restrictions"
            title="Виртуальные ограничения"
          >
            <ShieldAlert size={20} />
          </button>
        )}
        <div className="header__title-wrapper">
          <h2 className="header__title">
            {deviceName} <span style={{ fontSize: '0.6em', opacity: 0.45, fontWeight: 400 }}>{__APP_VERSION__}</span>
          </h2>
          <p className="header__status">{statusText}</p>
        </div>
        {onSettingsClick && (
          <button className="header__settings-btn" onClick={onSettingsClick} type="button" aria-label="Settings">
            <Settings />
          </button>
        )}
      </div>

      {(batteryLevel !== null && !isNaN(batteryLevel)) || showCurrentStats ? (
        <div className="header__stats">
          {batteryLevel !== null && !isNaN(batteryLevel) && (
            <div className="header__stat">
              <span className="header__stat-icon">{getBatteryIcon()}</span>
              <span className="header__stat-value">{batteryLevel}%</span>
            </div>
          )}
          {showCurrentStats && (
            <>
              <div className="header__stat">
                <span className="header__stat-icon header__stat-icon--area">
                  <Scan size={16} />
                </span>
                <span className="header__stat-value">{formatCurrentArea(currentAreaCm)}</span>
              </div>
              <div className="header__stat">
                <span className="header__stat-icon header__stat-icon--cleaning-time">
                  <Clock size={16} />
                </span>
                <span className="header__stat-value">{formatCurrentTime(currentTimeSec)}</span>
              </div>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
