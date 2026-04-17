import type { HassEntity } from '../../types/homeassistant';
import './ValetudoSpeedPanel.scss';

interface SpeedRowProps {
  icon: string;
  label: string;
  options: string[];
  current: string;
  onChange: (option: string) => void;
  disabled?: boolean;
}

function SpeedRow({ icon, label, options, current, onChange, disabled }: SpeedRowProps) {
  return (
    <div className="valetudo-speed-row">
      <span className="valetudo-speed-row__title">
        <span>{icon}</span>
        {label}
      </span>
      <div className="valetudo-speed-row__tabs">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`valetudo-speed-row__tab${current === option ? ' valetudo-speed-row__tab--active' : ''}`}
            onClick={() => !disabled && onChange(option)}
            disabled={disabled}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

interface ValetudoSpeedPanelProps {
  fanEntity?: HassEntity;
  waterEntity?: HassEntity;
  onFanChange: (option: string) => void;
  onWaterChange: (option: string) => void;
  disabled?: boolean;
}

export function ValetudoSpeedPanel({
  fanEntity,
  waterEntity,
  onFanChange,
  onWaterChange,
  disabled = false,
}: ValetudoSpeedPanelProps) {
  const fanOptions = (fanEntity?.attributes?.options as string[] | undefined) ?? [];
  const waterOptions = (waterEntity?.attributes?.options as string[] | undefined) ?? [];

  if (!fanEntity && !waterEntity) return null;

  return (
    <div className="valetudo-speed-panel">
      {fanEntity && fanOptions.length > 0 && (
        <SpeedRow
          icon="💨"
          label="Мощность всасывания"
          options={fanOptions}
          current={fanEntity.state}
          onChange={onFanChange}
          disabled={disabled}
        />
      )}
      {waterEntity && waterOptions.length > 0 && (
        <SpeedRow
          icon="💧"
          label="Уровень воды"
          options={waterOptions}
          current={waterEntity.state}
          onChange={onWaterChange}
          disabled={disabled}
        />
      )}
    </div>
  );
}
