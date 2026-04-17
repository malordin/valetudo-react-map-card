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
  { key: 'select', label: 'Выбрать', icon: <MousePointer size={16} /> },
  { key: 'wall', label: 'Стена', icon: <Minus size={16} /> },
  { key: 'no_go', label: 'No-go', icon: <Square size={16} /> },
  { key: 'no_mop', label: 'No-mop', icon: <Droplets size={16} /> },
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
    <div className="restrictions-toolbar">
      <div className="restrictions-toolbar__tools">
        {TOOLS.map((t) => (
          <button
            key={t.key}
            type="button"
            className={`restrictions-toolbar__btn${tool === t.key ? ' restrictions-toolbar__btn--active' : ''} restrictions-toolbar__btn--${t.key}`}
            onClick={() => onToolChange(t.key)}
            title={t.label}
          >
            {t.icon}
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      <div className="restrictions-toolbar__actions">
        {selectedId && (
          <button
            type="button"
            className="restrictions-toolbar__btn restrictions-toolbar__btn--delete"
            onClick={onDeleteSelected}
            title="Удалить выбранный элемент"
          >
            <Trash2 size={16} />
            <span>Удалить</span>
          </button>
        )}
        <button
          type="button"
          className={`restrictions-toolbar__btn restrictions-toolbar__btn--save${dirty ? ' restrictions-toolbar__btn--save--dirty' : ''}`}
          onClick={onSave}
          disabled={saving || !dirty}
          title="Сохранить изменения"
        >
          <Save size={16} />
          <span>{saving ? '…' : 'Сохранить'}</span>
        </button>
      </div>
    </div>
  );
}
