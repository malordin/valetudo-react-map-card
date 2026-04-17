import type { Translation } from './en';

export const ru: Translation = {
  // Room Selector
  room_selector: {
    title: 'Выбор комнат',
    selected_count: '{{count}} выбрано',
  },

  // Vacuum Map
  vacuum_map: {
    no_map: 'Нет доступной карты',
    looking_for: 'Обнаружение: {{entity}}',
    room_overlay: 'Кликните на номера комнат чтобы выбрать комнаты для убокри',
    zone_overlay_create: 'Кликните на карту для добавления зоны уборки',
    zone_overlay_resize: 'Потяните за углы для изменения размеры, кликните на любом месте для новой зоны',
    clear_zone: 'Уборка зоны',
    switch_to_list: 'Переключить на список',
    switch_to_map: 'Переключить на карту',
    room_list_overlay: 'Нажмите на комнаты для выбора уборки',
    no_rooms: 'Нет доступных комнат',
  },

  // Mode Tabs
  modes: {
    room: 'Комната',
    all: 'Всё',
    zone: 'Зона',
  },

  // Action Buttons
  actions: {
    clean: 'Очистка',
    clean_all: 'Очистка всего',
    clean_rooms: 'Очистка {{count}} комнаты',
    clean_rooms_plural: 'Очистка {{count}} комнат',
    select_rooms: 'Выбор комнат',
    zone_clean: 'Уборка зоны',
    pause: 'Пауза',
    resume: 'Продолжить',
    stop: 'Стоп',
    dock: 'Возврат на базу',
  },

  // Toast Messages
  toast: {
    selected_room: 'Выбраны {{name}}',
    deselected_room: 'Исключены {{name}}',
    paused: 'Уборки приостановлена',
    stopped: 'Уборка остановлена',
    docked: 'Возвращение на базу',
    cleaning_started: 'Уборка начата',
    resuming: 'Продолжение уборки',
    starting_full_clean: 'Начинается полная уборка дома',
    pausing_vacuum: 'Приостановка пылесоса',
    stopping_vacuum: 'Остановка пылесоса',
    vacuum_docking: 'Пылесос возвращается на базу',
    starting_room_clean: 'Начало уборки {{count}} выбранной комнаты',
    starting_room_clean_plural: 'Начало уборки {{count}} выбранных комнат',
    starting_zone_clean: 'Начало зональной уборки',
    select_rooms_first: 'Пожалуйста, сначала выберите комнаты с которых начать',
    cannot_determine_map: 'Не удаётся распознать размеры карты',
    select_zone_first: 'Пожалуйста, выберите зону на карте',
  },

  // Room Selection Display
  room_display: {
    selected_rooms: 'Выбранные комнаты:',
    selected_label: 'Выбрано:',
  },

  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: 'Настроить уборку: ',
    prefix_cleangenius: 'CleanGenius: ',
    view_shortcuts: 'Посмотреть шорткаты',
    vac_and_mop: 'Сухая и влажная',
    mop_after_vac: 'Влажная после сухой',
    vacuum: 'Сухая уборка',
    mop: 'Влажная уборка',
    mapping: 'Картографир.',
  },

  // Cleaning Mode Modal
  cleaning_mode: {
    title: 'Режим уборки',
    clean_genius: 'CleanGenius',
    custom: 'Настроить',
  },

  // Shortcuts Modal
  shortcuts: {
    title: 'Шорткаты',
    no_shortcuts: 'Нет доступных шорткатов',
    create_hint: 'Создайте шорткаты в приложении Dreame для быстрого выбора ваших любимых процедур ',
  },

  // Custom Mode
  custom_mode: {
    cleaning_mode_title: 'Режим уборки',
    suction_power_title: 'Мощность всасывания',
    max_plus_description:
      'Мощность всасывания будет увеличена до максимального уровня, что соответствует режиму одноразового использования.',
    wetness_title: 'Влажность',
    slightly_dry: 'Слегка сухая',
    moist: 'Влажная',
    wet: 'Мокрая',
    mop_washing_frequency_title: 'Периодичность промывки швабры',
    route_title: 'Маршрут',
  },

  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: 'Режим уборки',
    deep_cleaning: 'Тщательная уборка',
  },

  // Header
  header: {
    battery: 'Батарея',
    status: 'Статус',
    area: 'Площадь',
    time: 'Время',
  },

  // Units
  units: {
    square_meters: 'м²',
    minutes: 'мин',
    minutes_short: 'м',
    percent: '%',
    decibels: 'дБм',
  },

  // Suction Levels (friendly names)
  suction_levels: {
    quiet: 'Тихий',
    standard: 'Стандартный',
    strong: 'Турбо',
    turbo: 'Макс',
  },

  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: 'По комнате',
    by_area: 'По площади',
    by_time: 'По времени',
  },

  // Errors
  errors: {
    entity_not_found: 'Сущность не найдена: {{entity}}',
    failed_to_load: 'Не удалось получить данные сущности',
  },

  // Valetudo-specific
  valetudo: {
    panel: {
      title: 'Настройки',
      device: 'Устройство',
      consumables: 'Расходники',
      statistics: 'Статистика',
      cleaning_settings: 'Настройки очистки',
      rooms: 'Комнаты',
      configuration: 'Конфигурация',
      status: 'Состояние',
      battery: 'Батарея',
      wifi: 'Wi-Fi',
      signal: 'Сигнал',
      ip_address: 'IP-адрес',
      main_brush: 'Основная щётка',
      side_brush: 'Боковая щётка',
      filter: 'Фильтр',
      sensors: 'Датчики',
      total_cleanings: 'Всего уборок',
      total_area: 'Общая площадь',
      total_time: 'Общее время',
      current_area: 'Текущая уборка — площадь',
      current_time: 'Текущая уборка — время',
      carpet_mode: 'Ковровый режим',
      replace: 'Заменить',
      needs_replacement: 'Требует замены',
      remaining: 'Осталось: {{time}}',
      reset: 'Сбросить',
      dbm: 'дБм',
      valetudo_ui: 'Valetudo UI',
      open: 'Открыть',
    },
    restrictions: {
      select: 'Выбрать',
      wall: 'Стена',
      no_go: 'No-go',
      no_mop: 'No-mop',
      delete_selected: 'Удалить выбранное',
      save: 'Сохранить',
      save_changes: 'Сохранить изменения',
      no_changes: 'Нет изменений',
    },
    toast: {
      saved: 'Ограничения сохранены',
      error: 'Ошибка: {{message}}',
      config_needed: '⚠️ Нужна настройка. Смотри консоль (F12).',
      mapping_started: 'Картирование запущено',
      mapping_error: 'Не удалось запустить картирование',
    },
    status: {
      docked: 'На базе',
      cleaning: 'Уборка',
      paused: 'Пауза',
      returning: 'Возврат на базу',
      idle: 'Ожидание',
      error: 'Ошибка',
    },
    restrictions_label: 'Виртуальные ограничения',
    cleaning: {
      configure: 'Настроить уборку',
      mode_title: 'Режим уборки',
      dry: 'Только сухая',
      wet: 'Только влажная',
      both: 'Сухая и влажная',
      suction_power: 'Мощность всасывания',
      water_level: 'Уровень воды',
      iterations: 'Количество проходов',
      mapping: 'Картирование',
      mapping_warning_overwrite: '⚠️ Картирование перезапишет текущую карту.',
      mapping_warning_loss: 'Текущий прогресс уборки и все зоны ограничений будут утеряны. Продолжить?',
    },
    map: {
      loading: 'Загрузка карты…',
      error: 'Ошибка карты: {{message}}',
    },
    time: {
      hours_minutes: '{{h}}ч {{m}}м',
      minutes: '{{m}}м',
    },
  },

  // Settings Panel
  settings: {
    title: 'Настройки',
    consumables: {
      title: 'Расходные материалы',
      main_brush: 'Основная щётка',
      side_brush: 'Боковая щётка',
      filter: 'Фильтр',
      sensor: 'Датчик',
      remaining: 'осталось',
      reset: 'Сбросить',
    },
    device_info: {
      title: 'Информация об устройстве',
      firmware: 'Прошивка',
      total_area: 'Общая площадь уборки',
      total_time: 'Общее время уборки',
      total_cleans: 'Всего уборок',
      wifi_ssid: 'Сеть Wi-Fi',
      wifi_signal: 'Уровень сигнала',
      ip_address: 'IP-адрес',
    },
    map_management: {
      title: 'Управление картами',
      description: 'Выберите карту для уборки.',
      no_maps: 'Нет доступных карт',
    },
    quick_settings: {
      title: 'Быстрые настройки',
      child_lock: 'Блокировка от детей',
      child_lock_desc: 'Отключить кнопки на устройстве',
      carpet_boost: 'Усиление на коврах',
      carpet_boost_desc: 'Увеличить мощность на коврах',
      obstacle_avoidance: 'Избегание препятствий',
      obstacle_avoidance_desc: 'Обход препятствий при уборке',
      auto_dust_collecting: 'Автоочистка',
      auto_dust_collecting_desc: 'Автоматическая очистка пылесборника',
      auto_drying: 'Автосушка',
      auto_drying_desc: 'Сушка салфетки после уборки',
      dnd: 'Не беспокоить',
      dnd_desc: 'Тихие часы с ограниченной активностью',
    },
    volume: {
      title: 'Громкость и звук',
      test_sound: 'Найти',
      muted: 'Без звука',
    },
    carpet: {
      title: 'Настройки ковров',
      carpet_boost: 'Усиление на коврах',
      carpet_boost_desc: 'Увеличить мощность всасывания на коврах',
      carpet_recognition: 'Распознавание ковров',
      carpet_recognition_desc: 'Автоматическое определение ковров',
      carpet_avoidance: 'Избегание ковров',
      carpet_avoidance_desc: 'Обходить ковры при влажной уборке',
      sensitivity: 'Чувствительность ковра',
      sensitivity_desc: 'Уровень чувствительности распознавания',
      sensitivity_low: 'Низкая',
      sensitivity_medium: 'Средняя',
      sensitivity_high: 'Высокая',
    },
    ai_detection: {
      title: 'ИИ и распознавание',
      obstacle_avoidance: 'Избегание препятствий',
      obstacle_avoidance_desc: 'Использовать датчики для обхода препятствий',
      ai_obstacle_detection: 'ИИ-распознавание препятствий',
      ai_obstacle_detection_desc: 'Использовать ИИ для определения и обхода препятствий',
      ai_obstacle_image_upload: 'Загрузка изображений препятствий',
      ai_obstacle_image_upload_desc: 'Загружать изображения препятствий для анализа',
      ai_pet_detection: 'Распознавание питомцев',
      ai_pet_detection_desc: 'Обнаружение и обход питомцев',
      ai_human_detection: 'Распознавание людей',
      ai_human_detection_desc: 'Обнаружение и обход людей',
      ai_furniture_detection: 'Распознавание мебели',
      ai_furniture_detection_desc: 'Обнаружение и обход мебели',
      ai_fluid_detection: 'Распознавание жидкостей',
      ai_fluid_detection_desc: 'Обнаружение и обход жидкостей',
      stain_avoidance: 'Избегание пятен',
      stain_avoidance_desc: 'Обходить обнаруженные пятна',
      collision_avoidance: 'Предотвращение столкновений',
      collision_avoidance_desc: 'Предотвращать столкновения с объектами',
      fill_light: 'Подсветка',
      fill_light_desc: 'Использовать подсветку для лучшего распознавания',
    },
  },
};
