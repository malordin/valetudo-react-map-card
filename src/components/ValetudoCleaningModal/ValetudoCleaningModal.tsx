import { useState } from 'react';
import { Droplet, Droplets, GlassWater, Map } from 'lucide-react';
import { Modal, CircularButton } from '../common';
import {
  VACUUM_ICON_SVG,
  MOP_ICON_SVG,
  VACUUM_MOP_ICON_SVG,
  SUCTION_QUIET_ICON_SVG,
  SUCTION_STANDARD_ICON_SVG,
  SUCTION_STRONG_ICON_SVG,
  SUCTION_TURBO_ICON_SVG,
} from '../../constants';
import type { HassEntity } from '../../types/homeassistant';
import { useTranslation } from '../../hooks/useTranslation';
import type { SupportedLanguage } from '../../i18n/locales';

interface ValetudoCleaningModalProps {
  opened: boolean;
  onClose: () => void;
  fanEntity?: HassEntity;
  waterEntity?: HassEntity;
  onFanChange: (value: string) => void;
  onWaterChange: (value: string) => void;
  disabled?: boolean;
  language?: SupportedLanguage;
  onStartMapping?: () => void;
}

const FAN_ICONS = [SUCTION_QUIET_ICON_SVG, SUCTION_STANDARD_ICON_SVG, SUCTION_STRONG_ICON_SVG, SUCTION_TURBO_ICON_SVG];

const WATER_ICONS = [<Droplet size={20} />, <Droplets size={20} />, <GlassWater size={20} />, <GlassWater size={20} />];

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

type UiMode = 'dry' | 'both' | 'wet';

export function ValetudoCleaningModal({
  opened,
  onClose,
  fanEntity,
  waterEntity,
  onFanChange,
  onWaterChange,
  disabled,
  language,
  onStartMapping,
}: ValetudoCleaningModalProps) {
  const { t } = useTranslation(language);
  const fanOptions = (fanEntity?.attributes?.options as string[] | undefined) ?? [];
  const waterOptions = (waterEntity?.attributes?.options as string[] | undefined) ?? [];
  const currentFan = fanEntity?.state ?? '';
  const currentWater = waterEntity?.state ?? '';

  const hasWater = waterOptions.length > 0;

  // Derive initial UI mode from current water state
  // "off"-like option (first option typically means no water) → dry
  const noWaterOption = waterOptions[0] ?? '';
  const inferredMode: UiMode = !hasWater
    ? 'dry'
    : currentWater === noWaterOption
      ? 'dry'
      : fanOptions.indexOf(currentFan) <= 1
        ? 'wet'
        : 'both';

  const [uiMode, setUiMode] = useState<UiMode>(inferredMode);

  const showFan = uiMode === 'dry' || uiMode === 'both';
  const showWater = (uiMode === 'wet' || uiMode === 'both') && hasWater;

  const handleModeSelect = (mode: UiMode) => {
    if (disabled) return;
    setUiMode(mode);
    // Apply sensible defaults when switching mode
    if (mode === 'dry' && hasWater) {
      onWaterChange(noWaterOption);
    } else if (mode === 'wet') {
      // Set fan to quiet, water to max
      if (fanOptions.length > 0) onFanChange(fanOptions[0]);
      if (waterOptions.length > 0) onWaterChange(waterOptions[waterOptions.length - 1]);
    } else if (mode === 'both') {
      // Set fan to mid, water to mid
      if (fanOptions.length > 0) onFanChange(fanOptions[Math.floor(fanOptions.length / 2)]);
      if (waterOptions.length > 1) onWaterChange(waterOptions[Math.floor(waterOptions.length / 2)]);
    }
  };

  const modes: { key: UiMode; label: string; icon: React.ReactNode }[] = [
    { key: 'dry', label: t('valetudo.cleaning.dry'), icon: VACUUM_ICON_SVG },
    ...(hasWater
      ? [
          { key: 'both' as UiMode, label: t('valetudo.cleaning.both'), icon: VACUUM_MOP_ICON_SVG },
          { key: 'wet' as UiMode, label: t('valetudo.cleaning.wet'), icon: MOP_ICON_SVG },
        ]
      : []),
  ];

  const handleMappingClick = () => {
    if (disabled || !onStartMapping) return;
    const confirmedOverwrite = window.confirm(t('valetudo.cleaning.mapping_warning_overwrite'));
    if (!confirmedOverwrite) return;
    const confirmedLoss = window.confirm(t('valetudo.cleaning.mapping_warning_loss'));
    if (!confirmedLoss) return;
    onStartMapping();
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="cleaning-mode-modal">
        <div className="cleaning-mode-modal__content-wrapper">
          <div className="cleaning-mode-modal__content">
            {/* Mode selector */}
            <section className="cleaning-mode-modal__section">
              <h3 className="cleaning-mode-modal__section-title">{t('valetudo.cleaning.mode_title')}</h3>
              <div className="cleaning-mode-modal__mode-grid">
                {modes.map((m) => (
                  <div
                    key={m.key}
                    className={`cleaning-mode-modal__mode-card${
                      uiMode === m.key ? ' cleaning-mode-modal__mode-card--selected' : ''
                    }`}
                    onClick={() => handleModeSelect(m.key)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleModeSelect(m.key)}
                  >
                    <div className="cleaning-mode-modal__mode-icon">{m.icon}</div>
                    <span className="cleaning-mode-modal__mode-label">{m.label}</span>
                    {uiMode === m.key && (
                      <div className="cleaning-mode-modal__mode-checkmark">
                        <span>✓</span>
                      </div>
                    )}
                  </div>
                ))}
                {onStartMapping && (
                  <div
                    className="cleaning-mode-modal__mode-card cleaning-mode-modal__mode-card--mapping"
                    onClick={handleMappingClick}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleMappingClick()}
                  >
                    <div className="cleaning-mode-modal__mode-icon">
                      <Map size={24} />
                    </div>
                    <span className="cleaning-mode-modal__mode-label">{t('valetudo.cleaning.mapping')}</span>
                  </div>
                )}
              </div>
            </section>

            {/* Fan speed — shown for dry and both */}
            {showFan && fanOptions.length > 0 && (
              <section className="cleaning-mode-modal__section">
                <h3 className="cleaning-mode-modal__section-title">💨 {t('valetudo.cleaning.suction_power')}</h3>
                <div
                  className="cleaning-mode-modal__power-grid"
                  style={{ gridTemplateColumns: `repeat(${fanOptions.length}, 1fr)` }}
                >
                  {fanOptions.map((opt, idx) => (
                    <div key={opt} className="cleaning-mode-modal__power-option">
                      <CircularButton
                        size="small"
                        selected={opt === currentFan}
                        onClick={() => !disabled && onFanChange(opt)}
                        icon={FAN_ICONS[Math.min(idx, FAN_ICONS.length - 1)]}
                      />
                      <span className="cleaning-mode-modal__power-label">{cap(opt)}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Water level — shown for wet and both */}
            {showWater && waterOptions.length > 0 && (
              <section className="cleaning-mode-modal__section">
                <h3 className="cleaning-mode-modal__section-title">💧 {t('valetudo.cleaning.water_level')}</h3>
                <div
                  className="cleaning-mode-modal__power-grid"
                  style={{ gridTemplateColumns: `repeat(${waterOptions.length}, 1fr)` }}
                >
                  {waterOptions.map((opt, idx) => (
                    <div key={opt} className="cleaning-mode-modal__power-option">
                      <CircularButton
                        size="small"
                        selected={opt === currentWater}
                        onClick={() => !disabled && onWaterChange(opt)}
                        icon={WATER_ICONS[Math.min(idx, WATER_ICONS.length - 1)]}
                      />
                      <span className="cleaning-mode-modal__power-label">{cap(opt)}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
