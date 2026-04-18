import { Minus, Square, Droplets, Trash2, Save, MousePointer } from 'lucide-react';
import type { RestrictionTool, RestrictionsState } from '../../types/valetudo';
import { useTranslation } from '../../hooks/useTranslation';
import type { SupportedLanguage } from '../../i18n/locales';
import './RestrictionsToolbar.scss';

interface RestrictionsToolbarProps {
  restrictions: RestrictionsState;
  onToolChange: (tool: RestrictionTool) => void;
  onDeleteSelected: () => void;
  onSave: () => void;
  saving?: boolean;
  language?: SupportedLanguage;
}

export function RestrictionsToolbar({
  restrictions,
  onToolChange,
  onDeleteSelected,
  onSave,
  saving,
  language,
}: RestrictionsToolbarProps) {
  const { t } = useTranslation(language);
  const { tool, selectedId, dirty } = restrictions;

  const TOOLS: { key: RestrictionTool; label: string; icon: React.ReactNode }[] = [
    { key: 'select', label: t('valetudo.restrictions.select'), icon: <MousePointer size={14} /> },
    { key: 'wall', label: t('valetudo.restrictions.wall'), icon: <Minus size={14} /> },
    { key: 'no_go', label: t('valetudo.restrictions.no_go'), icon: <Square size={14} /> },
    { key: 'no_mop', label: t('valetudo.restrictions.no_mop'), icon: <Droplets size={14} /> },
  ];

  return (
    <div className="rt">
      <div className="rt__seg">
        {TOOLS.map((tool_item) => (
          <button
            key={tool_item.key}
            type="button"
            className={`rt__seg-btn rt__seg-btn--${tool_item.key}${tool === tool_item.key ? ' rt__seg-btn--active' : ''}`}
            onClick={() => onToolChange(tool_item.key)}
            title={tool_item.label}
          >
            {tool_item.icon}
            <span>{tool_item.label}</span>
          </button>
        ))}
      </div>

      <div className="rt__actions">
        <button
          type="button"
          className="rt__action-btn rt__action-btn--delete"
          onClick={onDeleteSelected}
          disabled={!selectedId}
          title={t('valetudo.restrictions.delete_selected')}
        >
          <Trash2 size={14} />
        </button>
        <button
          type="button"
          className={`rt__action-btn rt__action-btn--save${dirty ? ' rt__action-btn--save-dirty' : ''}`}
          onClick={onSave}
          disabled={saving || !dirty}
          title={dirty ? t('valetudo.restrictions.save_changes') : t('valetudo.restrictions.no_changes')}
        >
          <Save size={14} />
          <span>{saving ? '…' : t('valetudo.restrictions.save')}</span>
        </button>
      </div>
    </div>
  );
}
