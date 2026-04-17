import { useState } from 'react';
import { Modal } from '../common';
import type { HassEntity } from '../../types/homeassistant';
import './ValetudoCleaningButton.scss';

interface ValetudoCleaningButtonProps {
  fanEntity?: HassEntity;
  waterEntity?: HassEntity;
  onFanChange: (option: string) => void;
  onWaterChange: (option: string) => void;
  disabled?: boolean;
}

export function ValetudoCleaningButton({
  fanEntity,
  waterEntity,
  onFanChange,
  onWaterChange,
  disabled = false,
}: ValetudoCleaningButtonProps) {
  const [open, setOpen] = useState(false);

  const fanOptions = (fanEntity?.attributes?.options as string[] | undefined) ?? [];
  const waterOptions = (waterEntity?.attributes?.options as string[] | undefined) ?? [];
  const fanCurrent = fanEntity?.state ?? '';
  const waterCurrent = waterEntity?.state ?? '';

  if (!fanEntity && !waterEntity) return null;

  const label = [fanEntity ? fanCurrent : null, waterEntity ? waterCurrent : null].filter(Boolean).join(' · ');

  return (
    <>
      <div className="valetudo-cleaning-button-wrapper">
        <button
          className="valetudo-cleaning-button"
          onClick={() => !disabled && setOpen(true)}
          disabled={disabled}
          type="button"
        >
          <span className="valetudo-cleaning-button__left">
            <svg
              className="valetudo-cleaning-button__icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V8z"
                fill="currentColor"
              />
            </svg>
            <span className="valetudo-cleaning-button__text">
              <span className="valetudo-cleaning-button__title">Настроить уборку</span>
              <span className="valetudo-cleaning-button__subtitle">{label}</span>
            </span>
          </span>
          <svg className="valetudo-cleaning-button__arrow" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <Modal opened={open} onClose={() => setOpen(false)}>
        <div className="valetudo-cleaning-modal">
          {fanEntity && fanOptions.length > 0 && (
            <div className="valetudo-cleaning-modal__section">
              <div className="valetudo-cleaning-modal__section-title">
                <span>💨</span> Мощность всасывания
              </div>
              <div className="valetudo-cleaning-modal__pills">
                {fanOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`valetudo-cleaning-modal__pill${fanCurrent === opt ? ' valetudo-cleaning-modal__pill--active' : ''}`}
                    onClick={() => {
                      onFanChange(opt);
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {waterEntity && waterOptions.length > 0 && (
            <div className="valetudo-cleaning-modal__section">
              <div className="valetudo-cleaning-modal__section-title">
                <span>💧</span> Уровень воды
              </div>
              <div className="valetudo-cleaning-modal__pills">
                {waterOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`valetudo-cleaning-modal__pill${waterCurrent === opt ? ' valetudo-cleaning-modal__pill--active' : ''}`}
                    onClick={() => {
                      onWaterChange(opt);
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
