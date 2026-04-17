import { Minus, Square, Droplets, Trash2, Save, MousePointer } from 'lucide-react';
import type { RestrictionTool, RestrictionsState } from '../../types/valetudo';
import './RestrictionsToolbar.scss';

interface RestrictionsToolbarProps {
  restrictions: RestrictionsState;
  onToolChange: (tool: RestrictionTool) => void;
  onDeleteSelected: () => void;
  onSave: () => void;
  saving?: boolean;
}

const TOOLS: { key: RestrictionTool; label: string; icon: React.ReactNode }[] = [
  { key: 'select', label: 'Выбрать', icon: <MousePointer size={14} /> },
  { key: 'wall', label: 'Стена', icon: <Minus size={14} /> },
  { key: 'no_go', label: 'No-go', icon: <Square size={14} /> },
  { key: 'no_mop', label: 'No-mop', icon: <Droplets size={14} /> },
];

export function RestrictionsToolbar({
  restrictions,
  onToolChange,
  onDeleteSelected,
  onSave,
  saving,
}: RestrictionsToolbarProps) {
  const { tool, selectedId, dirty } = restrictions;

  return (
    <div className="rt">
      <div className="rt__seg">
        {TOOLS.map((t) => (
          <button
            key={t.key}
            type="button"
            className={`rt__seg-btn rt__seg-btn--${t.key}${tool === t.key ? ' rt__seg-btn--active' : ''}`}
            onClick={() => onToolChange(t.key)}
            title={t.label}
          >
            {t.icon}
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      <div className="rt__actions">
        {selectedId && (
          <button
            type="button"
            className="rt__action-btn rt__action-btn--delete"
            onClick={onDeleteSelected}
            title="Удалить выбранный"
          >
            <Trash2 size={14} />
          </button>
        )}
        <button
          type="button"
          className={`rt__action-btn rt__action-btn--save${dirty ? ' rt__action-btn--save-dirty' : ''}`}
          onClick={onSave}
          disabled={saving || !dirty}
          title={dirty ? 'Сохранить изменения' : 'Нет изменений'}
        >
          <Save size={14} />
          <span>{saving ? '…' : 'Сохранить'}</span>
        </button>
      </div>
    </div>
  );
}
