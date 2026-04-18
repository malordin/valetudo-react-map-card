import React from 'react';
import ReactDOM from 'react-dom/client';
import { DreameVacuumCard } from './components/DreameVacuumCard';
import { ValetudoVacuumCard } from './components/ValetudoVacuumCard/ValetudoVacuumCard';
import type { Hass, HassConfig } from './types/homeassistant';
import type { ValetudoHassConfig } from './types/valetudo';
import { createMockHass } from './utils/mock';
import { isDevelopment, devConfig } from './config/env';
import { attachDevUtils } from './utils/devUtils';
import styles from './styles.scss?inline';

class DreameVacuumMapCard extends HTMLElement {
  private _root: ReactDOM.Root | null = null;
  private _hass?: Hass;
  private _config?: HassConfig;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    this.shadowRoot!.appendChild(styleEl);
  }

  setConfig(config: HassConfig) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this._config = config;
    this.render();
  }

  set hass(hass: Hass) {
    this._hass = hass;
    this.render();
  }

  connectedCallback() {
    this.render();

    // In development mode, use mock data
    if (isDevelopment && !this._hass) {
      this._hass = createMockHass();
      this._config = {
        entity: devConfig.mockEntityId,
        type: 'custom:dreame-vacuum-map-card',
        title: devConfig.mockEntityTitle,
        theme: 'dark',
      };

      // Attach dev utilities to window for console access
      attachDevUtils(this._hass, devConfig.mockEntityId);

      this.render();
    }
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }

  private render() {
    if (!this._hass || !this._config || !this.shadowRoot) return;

    let container = this.shadowRoot.querySelector('#react-root') as HTMLElement;
    if (!container) {
      container = document.createElement('div');
      container.id = 'react-root';
      this.shadowRoot.appendChild(container);
    }

    if (!this._root) {
      this._root = ReactDOM.createRoot(container);
    }

    this._root.render(
      <React.StrictMode>
        <DreameVacuumCard hass={this._hass} config={this._config} />
      </React.StrictMode>
    );
  }

  getCardSize() {
    return 4;
  }

  static getStubConfig() {
    return {
      type: 'custom:dreame-vacuum-map-card',
      entity: 'vacuum.dreame_vacuum',
      title: 'Dreame Vacuum',
    };
  }
}

if (!customElements.get('dreame-vacuum-map-card')) {
  customElements.define('dreame-vacuum-map-card', DreameVacuumMapCard);
}

declare global {
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
    }>;
  }
}

if (window.customCards) {
  window.customCards = window.customCards || [];
  window.customCards.push({
    type: 'dreame-vacuum-map-card',
    name: 'Dreame Vacuum Map Card',
    description: 'Custom vacuum map card for Dreame vacuum cleaners',
  });
}

console.info('Dreame Vacuum Map Card (React) loaded');

// ─── Valetudo Vacuum Map Card ─────────────────────────────────────────────────

class ValetudoVacuumMapCard extends HTMLElement {
  private _root: ReactDOM.Root | null = null;
  private _hass?: Hass;
  private _config?: ValetudoHassConfig;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    this.shadowRoot!.appendChild(styleEl);
  }

  setConfig(config: ValetudoHassConfig) {
    if (!config.entity) {
      throw new Error('valetudo-vacuum-map-card: you need to define an entity (vacuum.*)');
    }
    this._config = config;
    this.render();
  }

  set hass(hass: Hass) {
    this._hass = hass;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
    }
  }

  private render() {
    if (!this._hass || !this._config || !this.shadowRoot) return;

    let container = this.shadowRoot.querySelector('#react-root') as HTMLElement;
    if (!container) {
      container = document.createElement('div');
      container.id = 'react-root';
      this.shadowRoot.appendChild(container);
    }

    if (!this._root) {
      this._root = ReactDOM.createRoot(container);
    }

    this._root.render(
      <React.StrictMode>
        <ValetudoVacuumCard hass={this._hass} config={this._config} />
      </React.StrictMode>
    );
  }

  getCardSize() {
    return 5;
  }

  static getStubConfig() {
    return {
      type: 'custom:valetudo-vacuum-map-card',
      entity: 'vacuum.valetudo_yourrobot',
    };
  }

  static getConfigForm() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const schema: any[] = [
      {
        name: 'entity',
        required: true,
        selector: { entity: { domain: 'vacuum' } },
      },
      {
        name: 'valetudo_identifier',
        selector: { text: {} },
      },
      {
        name: 'title',
        selector: { text: {} },
      },
      {
        type: 'grid',
        name: '',
        flatten: true,
        column_min_width: '180px',
        schema: [
          {
            name: 'theme',
            selector: {
              select: {
                options: [
                  { label: 'Light ☀️', value: 'light' },
                  { label: 'Dark 🌙', value: 'dark' },
                ],
                mode: 'dropdown',
              },
            },
          },
          {
            name: 'language',
            selector: {
              select: {
                options: [
                  { label: 'English', value: 'en' },
                  { label: 'Русский', value: 'ru' },
                  { label: 'Deutsch', value: 'de' },
                  { label: 'Español', value: 'es' },
                  { label: 'Italiano', value: 'it' },
                  { label: 'Nederlands', value: 'nl' },
                  { label: 'Polski', value: 'pl' },
                  { label: '中文', value: 'zh' },
                ],
                mode: 'dropdown',
              },
            },
          },
        ],
      },
      {
        name: 'valetudo_url',
        selector: { text: { type: 'url' } },
      },
      {
        type: 'expandable',
        name: 'advanced_overrides',
        flatten: true,
        title: 'Advanced entity overrides',
        schema: [
          { name: 'map_entity', selector: { entity: { domain: 'camera' } } },
          { name: 'fan_entity', selector: { entity: { domain: 'select' } } },
          { name: 'water_entity', selector: { entity: { domain: 'select' } } },
          { name: 'battery_entity', selector: { entity: { domain: 'sensor' } } },
          { name: 'segments_entity', selector: { entity: { domain: 'sensor' } } },
        ],
      },
    ];

    const labels: Record<string, string> = {
      entity: 'Vacuum entity',
      valetudo_identifier: 'Valetudo identifier (e.g. HarshSillyPigeon)',
      title: 'Card title',
      theme: 'Theme',
      language: 'Language',
      valetudo_url: 'Valetudo URL (for direct REST saves)',
      map_entity: 'Map entity (camera.*)',
      fan_entity: 'Fan speed entity (select.*)',
      water_entity: 'Water grade entity (select.*)',
      battery_entity: 'Battery entity (sensor.*)',
      segments_entity: 'Segments entity (sensor.*)',
    };

    return {
      schema,
      computeLabel: (s: { name: string }) => labels[s.name] ?? s.name,
    };
  }
}

customElements.define('valetudo-vacuum-map-card', ValetudoVacuumMapCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'valetudo-vacuum-map-card',
  name: 'Valetudo Vacuum Map Card',
  description: 'Beautiful map card for Valetudo-flashed vacuum cleaners',
});

export default DreameVacuumMapCard;
