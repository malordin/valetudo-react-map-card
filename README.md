# Valetudo Vacuum Card

A Home Assistant Lovelace card for Valetudo-flashed robot vacuums. Works **fully local** — no cloud, no Xiaomi/Dreame account required. Built with React, TypeScript, and SCSS.

> Fork of [dreame-vacuum-map-card](https://github.com/noambergauz/dreame-vacuum-map-card), rewritten to work with [Valetudo](https://valetudo.cloud/) instead of the Dreame cloud integration.

## Features

- Interactive live map (via Valetudo MQTT + HA camera entity)
- **Room**, **All**, and **Zone** cleaning modes
- **Virtual restrictions editor** — draw/delete walls and no-mop zones directly on the map, save via HA `rest_command`
- **Cleaning passes** — choose 1×, 2×, 3×, or 4× per session
- **Fan speed and water level** controls
- Real-time vacuum status and battery level
- Consumable monitoring with remaining time tooltips
- **Customizable Theming**: Light, dark, and fully customizable themes
- **Internationalization (i18n)**: English, German, Russian, Polish, Italian, Dutch, Spanish, Chinese

## Requirements

- Home Assistant with [Valetudo](https://valetudo.cloud/) integration via MQTT
- HACS (for easy install) or manual copy

## Installation

### Via [HACS](https://hacs.xyz/) (Custom Repository)

1. In HACS → Custom repositories → add `malordin/valetudo-vacuum-card` (type: Dashboard)
2. Install **Valetudo Vacuum Card**
3. Clear browser cache and reload HA

Or use the button below (after adding the custom repo):

<a href="https://my.home-assistant.io/redirect/hacs_repository/?owner=malordin&repository=valetudo-vacuum-card&category=dashboard" target="_blank"><img src="https://my.home-assistant.io/badges/hacs_repository.svg" alt="Open your Home Assistant instance and open a repository inside the Home Assistant Community Store." /></a>

### Manual

1. Download `dreame-vacuum-map-card.js` from the [Releases](../../releases) page
2. Copy to `/config/www/valetudo-vacuum-map-card/valetudo-vacuum-map-card.js`
3. In HA → Settings → Dashboards → Resources → Add:
   - URL: `/local/valetudo-vacuum-map-card/valetudo-vacuum-map-card.js`
   - Type: JavaScript Module

## Usage

### Add card to dashboard

```yaml
type: custom:dreame-vacuum-map-card
entity: vacuum.valetudo_yourrobot
valetudo_identifier: YourRobotIdentifier  # MQTT identifier (see Valetudo settings)
valetudo_url: http://192.168.0.xxx        # Robot IP — required for virtual restrictions
title: Vacuum
language: ru                              # Optional: en (default), de, ru, pl, it, nl, es, zh
theme: light                              # Optional: light (default), dark, custom
default_mode: all                         # Optional: all (default), room, zone
```

## Required Home Assistant configuration

### 1. `configuration.yaml` — REST command for virtual restrictions

Virtual restrictions (walls, no-mop zones) are saved directly to the robot via a proxied REST command. Add this to your `configuration.yaml`:

```yaml
rest_command:
  valetudo_set_restrictions:
    url: "http://192.168.0.xxx/api/v2/robot/capabilities/CombinedVirtualRestrictionsCapability"
    method: PUT
    content_type: application/json
    payload: "{{ payload }}"
```

Replace `192.168.0.xxx` with your robot's IP. **Restart HA** after adding this (reload is not enough).

### 2. `automations.yaml` — Notifications (optional but recommended)

Add the following automations for vacuum event notifications. Replace `valetudo_harshsillypigeon` with your robot's entity prefix.

```yaml
- id: 'vacuum_cleaning_started'
  alias: "Vacuum: cleaning started"
  triggers:
    - platform: state
      entity_id: vacuum.valetudo_yourrobot
      to: cleaning
  actions:
    - service: notify.notify
      data:
        title: "🤖 Vacuum: started cleaning"
        message: "Cleaning has started"
  mode: single

- id: 'vacuum_cleaning_finished'
  alias: "Vacuum: cleaning finished"
  triggers:
    - platform: state
      entity_id: vacuum.valetudo_yourrobot
      from: returning
      to: docked
  actions:
    - service: notify.notify
      data:
        title: "✅ Vacuum: done"
        message: >
          Cleaned {{ states('sensor.valetudo_yourrobot_current_stats_area') | float(0) / 10000 | round(1) }} m²
          in {{ (states('sensor.valetudo_yourrobot_current_stats_time') | int(0) / 60) | round(0) | int }} min
  mode: single

- id: 'vacuum_error'
  alias: "Vacuum: error"
  triggers:
    - platform: state
      entity_id: vacuum.valetudo_yourrobot
      to: error
  actions:
    - service: notify.notify
      data:
        title: "🚨 Vacuum: error"
        message: "{{ state_attr('vacuum.valetudo_yourrobot', 'status') }}"
  mode: single

- id: 'vacuum_mop_still_attached'
  alias: "Vacuum: mop still attached"
  triggers:
    - platform: state
      entity_id: vacuum.valetudo_yourrobot
      to: docked
  conditions:
    - condition: state
      entity_id: binary_sensor.valetudo_yourrobot_mop_attachment
      state: 'on'
  actions:
    - service: notify.notify
      data:
        title: "🧹 Vacuum: remove the mop!"
        message: "Robot is docked but the mop is still attached"
  mode: single
  max_exceeded: silent

- id: 'vacuum_consumable_warning'
  alias: "Vacuum: consumable low"
  triggers:
    - platform: numeric_state
      entity_id: sensor.valetudo_yourrobot_main_brush
      below: 540
    - platform: numeric_state
      entity_id: sensor.valetudo_yourrobot_right_brush
      below: 360
    - platform: numeric_state
      entity_id: sensor.valetudo_yourrobot_main_filter
      below: 270
    - platform: numeric_state
      entity_id: sensor.valetudo_yourrobot_sensor_cleaning
      below: 54
  actions:
    - service: notify.notify
      data:
        title: "⚠️ Vacuum: consumable low"
        message: "{{ trigger.entity_id }} is almost depleted ({{ trigger.to_state.state }} min left)"
  mode: parallel

- id: 'vacuum_consumable_depleted'
  alias: "Vacuum: consumable depleted"
  triggers:
    - platform: numeric_state
      entity_id: sensor.valetudo_yourrobot_main_brush
      below: 1
    - platform: numeric_state
      entity_id: sensor.valetudo_yourrobot_right_brush
      below: 1
    - platform: numeric_state
      entity_id: sensor.valetudo_yourrobot_main_filter
      below: 1
    - platform: numeric_state
      entity_id: sensor.valetudo_yourrobot_sensor_cleaning
      below: 1
  actions:
    - service: notify.notify
      data:
        title: "🚨 Vacuum: replace consumable!"
        message: "{{ trigger.entity_id }} needs replacement"
  mode: parallel
```

## Configuration

| Name                  | Type   | Default  | Description                                                        |
|-----------------------|--------|----------|--------------------------------------------------------------------|
| `entity`              | string | Required | Entity ID of your vacuum (`vacuum.valetudo_xxx`)                   |
| `valetudo_identifier` | string | Required | MQTT identifier from Valetudo settings (for room/zone cleaning)    |
| `valetudo_url`        | string | Optional | Robot's local URL (e.g. `http://192.168.0.xxx`) — enables direct REST save for restrictions |
| `title`               | string | Optional | Custom card title                                                  |
| `map_entity`          | string | Optional | Camera entity for the map (auto-detected if omitted)               |
| `theme`               | string | `light`  | `light`, `dark`, or `custom`                                       |
| `custom_theme`        | object | Optional | Custom theme overrides (see Theming section)                       |
| `language`            | string | `en`     | `en`, `de`, `ru`, `pl`, `it`, `nl`, `es`, `zh`                    |
| `default_mode`        | string | `all`    | Default cleaning mode: `all`, `room`, `zone`                       |
| `default_room_view`   | string | `map`    | Room selector view: `map` or `list`                                |

## Theming

### Built-in themes

```yaml
theme: light   # or dark
```

### Custom theme

```yaml
theme: custom
custom_theme:
  base: dark
  accentColor: '#29b6f6'
  cardBg: '#0a1929'
  surfaceBg: '#132f4c'
```

Available properties: `cardBg`, `surfaceBg`, `surfaceSecondary`, `surfaceTertiary`, `textPrimary`, `textSecondary`, `textTertiary`, `accentColor`, `accentColorHover`, `accentBg`, `borderColor`, `warningColor`, `errorColor`, and more. See [THEMING.md](THEMING.md).

## Roadmap / TODO

### Features

#### Mapping mode (in progress)
- [x] Add "Mapping" mode button to the Cleaning Mode modal (alongside Vacuum / Mop / Vac+Mop)
- [x] Hide suction power, water level, mop washing frequency and route selectors when Mapping is selected
- [ ] Start a dedicated mapping-only flow triggered from the card header / main actions

#### Map editing
- [ ] Room split — draw a line to split one room into two
- [ ] Room join — merge two adjacent rooms into one
- [ ] Room delete — remove a room from the map
- [ ] Rename rooms inline
- [ ] Trigger "save map" after editing (requires Valetudo REST API or MQTT)

#### "I am here" (Find robot)
- [ ] Add a button in the Settings panel Device section that triggers the locate/beep command
- [ ] Entity: `button.valetudo_yourrobot_locate` (or equivalent HA service call)

#### Valetudo UI shortcut
- [x] Add a clickable link in the Device section of the Settings panel that opens the Valetudo web UI
- [ ] Config option `valetudo_url` already used for REST save — reuse for the link

### UX improvements

#### Notification automation examples
- [x] Per-language YAML files in `examples/notifications/`

#### Cleaning Mode modal
- [x] Fix invisible blocking element at the bottom of the modal (removed double scroll container)

## Development

```bash
npm install
npm run dev    # dev server at http://localhost:5173
npm run build  # outputs dist/dreame-vacuum-map-card.js
```

## Credits

- Based on [dreame-vacuum-map-card](https://github.com/noambergauz/dreame-vacuum-map-card) by noambergauz
- [Valetudo](https://valetudo.cloud/) by Hypfer

## License

MIT License — see [LICENSE](LICENSE) for details
