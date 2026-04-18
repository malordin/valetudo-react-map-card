import { useCallback } from 'react';
import type { ValetudoHassConfig } from '../../types/valetudo';
import type { Hass } from '../../types/homeassistant';
import './ValetudoCardEditor.scss';

interface ValetudoCardEditorProps {
  hass: Hass;
  config: ValetudoHassConfig;
  onConfigChanged: (config: ValetudoHassConfig) => void;
}

const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Русский' },
  { value: 'de', label: 'Deutsch' },
  { value: 'es', label: 'Español' },
  { value: 'it', label: 'Italiano' },
  { value: 'nl', label: 'Nederlands' },
  { value: 'pl', label: 'Polski' },
  { value: 'zh', label: '中文' },
];

const THEMES = [
  { value: 'light', label: '☀️ Light' },
  { value: 'dark', label: '🌙 Dark' },
];

export function ValetudoCardEditor({ hass, config, onConfigChanged }: ValetudoCardEditorProps) {
  // Collect all vacuum entities from hass states
  const vacuumEntities = Object.keys(hass.states).filter((id) => id.startsWith('vacuum.'));

  const update = useCallback(
    (patch: Partial<ValetudoHassConfig>) => {
      onConfigChanged({ ...config, ...patch });
    },
    [config, onConfigChanged]
  );

  return (
    <div className="vce">
      <div className="vce__section">
        <div className="vce__section-title">Required</div>

        <label className="vce__field">
          <span className="vce__label">Vacuum entity *</span>
          <select
            className="vce__select"
            value={config.entity ?? ''}
            onChange={(e) => update({ entity: e.target.value })}
          >
            {!config.entity && <option value="">— select entity —</option>}
            {vacuumEntities.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
        </label>

        <label className="vce__field">
          <span className="vce__label">
            Valetudo identifier
            <span className="vce__hint"> (e.g. HarshSillyPigeon)</span>
          </span>
          <input
            className="vce__input"
            type="text"
            placeholder="HarshSillyPigeon"
            value={config.valetudo_identifier ?? ''}
            onChange={(e) => update({ valetudo_identifier: e.target.value || undefined })}
          />
        </label>
      </div>

      <div className="vce__section">
        <div className="vce__section-title">Optional</div>

        <label className="vce__field">
          <span className="vce__label">Title</span>
          <input
            className="vce__input"
            type="text"
            placeholder="Vacuum"
            value={config.title ?? ''}
            onChange={(e) => update({ title: e.target.value || undefined })}
          />
        </label>

        <label className="vce__field">
          <span className="vce__label">Theme</span>
          <select
            className="vce__select"
            value={config.theme ?? 'light'}
            onChange={(e) => update({ theme: e.target.value as 'light' | 'dark' })}
          >
            {THEMES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </label>

        <label className="vce__field">
          <span className="vce__label">Language</span>
          <select
            className="vce__select"
            value={config.language ?? 'en'}
            onChange={(e) => update({ language: e.target.value as ValetudoHassConfig['language'] })}
          >
            {LANGUAGES.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
        </label>

        <label className="vce__field">
          <span className="vce__label">
            Valetudo URL
            <span className="vce__hint"> (optional, for direct REST saves)</span>
          </span>
          <input
            className="vce__input"
            type="text"
            placeholder="http://192.168.0.162"
            value={config.valetudo_url ?? ''}
            onChange={(e) => update({ valetudo_url: e.target.value || undefined })}
          />
        </label>
      </div>

      <details className="vce__section vce__section--advanced">
        <summary className="vce__section-title vce__section-title--toggle">Advanced entity overrides</summary>

        {(
          [
            ['map_entity', 'Map entity (camera.*)', 'camera.valetudo_robot_map_data'],
            ['fan_entity', 'Fan speed entity (select.*)', 'select.valetudo_robot_fan'],
            ['water_entity', 'Water grade entity (select.*)', 'select.valetudo_robot_water'],
            ['battery_entity', 'Battery entity (sensor.*)', 'sensor.valetudo_robot_battery_level'],
            ['segments_entity', 'Segments entity (sensor.*)', 'sensor.valetudo_robot_map_segments'],
          ] as [keyof ValetudoHassConfig, string, string][]
        ).map(([key, label, placeholder]) => (
          <label key={key} className="vce__field">
            <span className="vce__label">{label}</span>
            <input
              className="vce__input"
              type="text"
              placeholder={placeholder}
              value={(config[key] as string | undefined) ?? ''}
              onChange={(e) => update({ [key]: e.target.value || undefined })}
            />
          </label>
        ))}
      </details>
    </div>
  );
}
