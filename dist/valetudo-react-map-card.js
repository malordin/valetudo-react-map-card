
(function() {
  const style = document.createElement('style');
  style.textContent = "@charset \"UTF-8\";.header{padding:1.25rem 1.25rem .625rem;text-align:center}.header__top{display:flex;justify-content:space-between;align-items:flex-start}.header__title-wrapper{flex:1;text-align:center}.header__restrictions-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease;flex-shrink:0}@media(hover:hover){.header__restrictions-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--danger, #f44336)}}.header__restrictions-btn--active{color:#f44336;background:#f443361f}.header__settings-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease;flex-shrink:0}.header__settings-btn svg{width:1.25rem;height:1.25rem}.header__settings-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--text-primary, #1a1a1a)}.header__settings-btn:active{background:var(--active-bg, rgba(0, 0, 0, .1))}.header__title{margin:0;font-size:1rem;font-weight:600;color:var(--text-primary, #1a1a1a)}.header__status{margin:0;font-size:.875rem;color:var(--text-secondary, #666)}.header__progress{margin:0 auto;max-width:12.5rem}.header__progress-bar{width:100%;height:.25rem;background-color:var(--surface-tertiary, #e8e8e8);border-radius:.25rem;overflow:hidden}.header__progress-fill{height:100%;background-color:var(--accent-color, #007aff);transition:width .3s ease}.header__progress-text{margin:.25rem 0 0;font-size:.75rem;color:var(--text-tertiary, #999)}.header__stats{display:flex;justify-content:center;gap:1.25rem;font-size:1rem;color:var(--text-primary, #1a1a1a);margin-top:.875rem;align-items:center}.header__stat{display:flex;align-items:center;gap:.25rem}.header__stat-icon,.header__stat-icon--cleaning-time,.header__stat-icon--area{display:flex}.header__stat-icon--cleaning-time svg,.header__stat-icon--area svg{scale:.8}.header__stat-value{display:flex;font-weight:500}.valetudo-restrictions-hint{flex:1;display:flex;align-items:center;justify-content:center;padding:.625rem 1rem;font-size:.8rem;color:#f44336;background:#f4433614;border-radius:.75rem;border:1px solid rgba(244,67,54,.2)}.cleaning-mode-button-wrapper{margin:.625rem 1.25rem;width:calc(100% - 2.5rem);display:flex;align-items:center;gap:.5rem}.cleaning-mode-button-wrapper__shortcuts{background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:50%;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.1rem;flex-shrink:0;transition:transform .2s,opacity .2s;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-button-wrapper__shortcuts svg{scale:.8}.cleaning-mode-button-wrapper__shortcuts:hover:not(:disabled){transform:scale(1.1);opacity:.9;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button-wrapper__shortcuts:active:not(:disabled){transform:scale(.95)}.cleaning-mode-button-wrapper__shortcuts:disabled{opacity:.5;cursor:not-allowed}.cleaning-mode-button{flex:1;background:var(--surface-bg, #fff);border:none;border-radius:.75rem;padding:.75rem 1rem;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08));color:var(--text-primary, #1a1a1a);font-weight:400;font-size:.9375rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:transform .1s ease}.cleaning-mode-button:hover:not(:disabled){box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button:active:not(:disabled){transform:scale(.98)}.cleaning-mode-button--disabled,.cleaning-mode-button:disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.cleaning-mode-button__content{display:flex;align-items:center}.cleaning-mode-button__icon{scale:.7;display:flex}.cleaning-mode-button__text{font-weight:400;font-size:.8rem}.cleaning-mode-button__arrow{font-size:1.25rem;color:var(--text-tertiary, #999)}.view-toggle-button{position:absolute;top:.75rem;right:.75rem;z-index:10;width:2.25rem;height:2.25rem;border-radius:.5rem;background:var(--surface-bg, #fff);border:1px solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-primary, #1a1a1a);box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .1));transition:all .2s ease}.view-toggle-button:hover{background:var(--surface-secondary, #f5f5f5);transform:scale(1.05)}.view-toggle-button:active{transform:scale(.95)}.view-toggle-button svg{transition:transform .2s ease}.room-list-view{position:absolute;inset:0;background:var(--surface-bg, #fff);border-radius:.9375rem;display:flex;flex-direction:column;overflow:hidden}.room-list-view__header{padding:.75rem 3.5rem .75rem 1rem;font-size:.875rem;color:var(--text-secondary, #666);background:var(--surface-secondary, #f5f5f5);border-bottom:1px solid var(--border-color, #e0e0e0);flex-shrink:0}.room-list-view__list{flex:1;overflow-y:auto;padding:.5rem;display:flex;flex-direction:column;gap:.5rem}.room-list-view__list::-webkit-scrollbar{width:.25rem}.room-list-view__list::-webkit-scrollbar-track{background:transparent}.room-list-view__list::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.room-list-view__empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary, #999);font-size:.875rem}.room-list-view__item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:var(--surface-secondary, #f5f5f5);border:2px solid transparent;border-radius:.75rem;cursor:pointer;transition:all .2s ease;width:100%;text-align:left}.room-list-view__item:hover{background:var(--surface-tertiary, #ebebeb)}.room-list-view__item:active{transform:scale(.98)}.room-list-view__item--selected{background:var(--accent-bg-transparent, rgba(212, 175, 55, .1));border-color:var(--accent-color, #d4af37)}.room-list-view__item--selected:hover{background:var(--accent-bg-transparent, rgba(212, 175, 55, .15))}.room-list-view__item-name{flex:1;font-size:.9375rem;font-weight:500;color:var(--text-primary, #1a1a1a);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.room-list-view__item-check{width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--accent-color, #d4af37)}.vacuum-map{position:relative;margin:0 1.25rem;border-radius:.9375rem;overflow:hidden;background:var(--surface-bg, #fff);display:flex;align-items:center;justify-content:center;box-shadow:0 .25rem .9375rem var(--card-shadow, rgba(0, 0, 0, .1));min-height:18.75rem}.vacuum-map__image{width:100%;height:100%;object-fit:contain;border-radius:.9375rem}.dreame-vacuum-card--dark .vacuum-map .vacuum-map__image{filter:brightness(.8) contrast(.9) saturate(.85)}.vacuum-map__placeholder{color:#666;text-align:center;font-size:.875rem}.vacuum-map__placeholder small{font-size:.75rem;color:#999}.vacuum-map__overlay{position:absolute;inset:0;background:#0000000d;border-radius:.9375rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;color:#666;pointer-events:none}.vacuum-map__cycles{position:absolute;right:1rem;bottom:1rem;width:2.5rem;height:2.5rem;border-radius:25%;border-radius:.375rem}.vacuum-map__zone{position:absolute;border:.1875rem solid #007aff;background:repeating-linear-gradient(45deg,#007aff1a,#007aff1a .625rem,#007aff0d .625rem 1.25rem);pointer-events:auto;border-radius:.5rem;box-shadow:0 .125rem .75rem #007aff4d}.vacuum-map__zone-handle{position:absolute;width:1.5rem;height:1.5rem;background:#007aff;border:.125rem solid white;border-radius:50%;cursor:pointer;pointer-events:auto;box-shadow:0 .125rem .25rem #0003;transition:all .2s ease;z-index:10;touch-action:none}.vacuum-map__zone-handle:before{content:\"\";position:absolute;inset:-.5rem}.vacuum-map__zone-handle:hover{background:#0051d5;transform:scale(1.2)}.vacuum-map__zone-handle:active{transform:scale(.9)}.vacuum-map__zone-handle--tl{top:-.75rem;left:-.75rem;cursor:nwse-resize}.vacuum-map__zone-handle--tr{top:-.75rem;right:-.75rem;cursor:nesw-resize}.vacuum-map__zone-handle--bl{bottom:-.75rem;left:-.75rem;cursor:nesw-resize}.vacuum-map__zone-handle--br{bottom:-.75rem;right:-.75rem;cursor:nwse-resize}.vacuum-map__zone-clear{position:absolute;top:-.75rem;right:-.75rem;width:1.5rem;height:1.5rem;border-radius:50%;background:#ff3b30;color:#fff;border:.125rem solid white;font-size:1.125rem;font-weight:700;cursor:pointer;pointer-events:auto;display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .5rem #ff3b3066;transition:all .2s ease;line-height:1;padding:0}.vacuum-map__zone-clear:hover{background:#ff1f0f;transform:scale(1.1)}.vacuum-map__zone-clear:active{transform:scale(.95)}.vacuum-map__room-segments{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:auto}.vacuum-map__room-segment{cursor:pointer;transition:all .2s ease}.vacuum-map__room-segment:hover{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .2));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .3));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected:hover{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .4))}.vacuum-map__rooms{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.vacuum-map__room{position:absolute;transform:translate(-50%,-50%);width:2rem;height:2rem;border-radius:50%;background:#ffffffe6;border:.125rem solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:var(--text-primary, #1a1a1a);cursor:pointer;pointer-events:auto;transition:all .2s ease;box-shadow:0 .125rem .25rem #0000001a;z-index:2}.vacuum-map__room:hover{transform:translate(-50%,-50%) scale(1.1);background:#fff;box-shadow:0 .25rem .5rem #00000026}.vacuum-map__room--selected{background:var(--accent-color, #d4af37);color:#fff;border-color:var(--accent-color, #d4af37);box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(212, 175, 55, .4))}.vacuum-map__room--selected:hover{transform:translate(-50%,-50%) scale(1.1);box-shadow:0 .25rem .75rem var(--accent-color-shadow-color, rgba(212, 175, 55, .5))}.mode-tabs{display:flex;gap:.25rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.9375rem;padding:.25rem;margin-bottom:.9375rem}.mode-tabs--disabled{opacity:.5;pointer-events:none}.mode-tabs__button{flex:1;display:flex;align-items:center;justify-content:center;border:none;border-radius:.6875rem;padding:.625rem;font-weight:500;font-size:.875rem;cursor:pointer;transition:all .2s;background-color:transparent;color:var(--text-secondary, #666)}.mode-tabs__button-icon svg{scale:.5;color:var(--text-secondary, #666)}.mode-tabs__button--active{background-color:var(--surface-bg, white);color:var(--text-primary, #000);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .1))}.mode-tabs__button:hover:not(.mode-tabs__button--active):not(:disabled){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.mode-tabs__button:disabled{cursor:not-allowed}.action-buttons{display:flex;gap:.75rem;margin-top:.9375rem}.action-buttons__clean,.action-buttons__dock,.action-buttons__pause,.action-buttons__resume,.action-buttons__stop{flex:1;background:var(--accent-bg);border:.0625rem solid var(--accent-bg);border-radius:.875rem;padding:.875rem;font-size:.9375rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.5rem;transition:all .3s cubic-bezier(.16,1,.3,1);color:var(--text-primary)}.action-buttons__clean:disabled,.action-buttons__dock:disabled,.action-buttons__pause:disabled,.action-buttons__resume:disabled,.action-buttons__stop:disabled{opacity:.38;cursor:not-allowed;pointer-events:none}.action-buttons__clean--selected,.action-buttons__dock--selected,.action-buttons__pause--selected,.action-buttons__resume--selected,.action-buttons__stop--selected{transform:translateY(-.125rem);border:.0625rem solid var(--toggle-active-border);box-shadow:0 .625rem 1.25rem #0006,0 0 .75rem #5865f240,inset 0 .0625rem .0625rem #ffffff1a!important}.action-buttons__clean{color:var(--text-primary-invert);background:var(--accent-color)}.action-buttons__pause{color:var(--accent-color);border-color:var(--accent-color-hover)}.action-buttons__resume{color:#32d74b;border-color:#32d74b80}.action-buttons__stop{color:#ff453a;border-color:#ff453a80}.action-buttons__dock{background:var(--surface-secondary);color:var(--text-secondary)}.accordion{border-radius:.75rem;background:var(--card-bg, rgba(255, 255, 255, .8));overflow:hidden;margin-bottom:.5rem}.accordion__header{display:flex;align-items:center;justify-content:space-between;width:100%;padding:.875rem 1rem;background:none;border:none;cursor:pointer;color:var(--text-primary, #000);font-size:.9375rem;font-weight:500;text-align:left;transition:background-color .2s ease}.accordion__header:hover{background:var(--hover-bg, rgba(0, 0, 0, .03))}.accordion__header:active{background:var(--active-bg, rgba(0, 0, 0, .06))}.accordion__title-wrapper{display:flex;align-items:center;gap:.625rem}.accordion__icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.accordion__icon svg{width:1.25rem;height:1.25rem}.accordion__title{font-weight:500}.accordion__chevron{width:1.25rem;height:1.25rem;color:var(--text-secondary, #666);transition:transform .3s ease}.accordion__content{max-height:0;overflow:hidden;transition:max-height .3s ease}.accordion__content-inner{padding:0 1rem 1rem}.accordion--open .accordion__chevron{transform:rotate(180deg)}.accordion--open .accordion__content{max-height:600px}.toggle{position:relative;display:inline-block;width:3.1875rem;height:1.9375rem}.toggle__input{opacity:0;width:0;height:0}.toggle__slider{position:absolute;cursor:pointer;inset:0;background-color:var(--surface-tertiary, #e0e0e0);transition:.4s;border-radius:1.9375rem}.toggle__knob{position:absolute;height:1.6875rem;width:1.6875rem;left:.125rem;bottom:.125rem;background-color:var(--surface-bg, white);transition:.4s;border-radius:50%;box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .2))}.toggle__input:checked+.toggle__slider{background-color:var(--toggle-active);border:.125rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color)}.toggle__input:checked+.toggle__slider .toggle__knob{transform:translate(1.25rem)}.toggle--disabled{opacity:.5;pointer-events:none}.circular-button{display:flex;flex-direction:column;align-items:center;gap:.5rem}.circular-button:hover{transform:translateY(-.125rem)}.circular-button__circle{border-radius:50%;background:var(--surface-secondary, #f5f5f5);display:flex;align-items:center;justify-content:center;cursor:pointer;border:.0625rem solid var(--text-primary, black);transition:all .2s ease;color:var(--text-primary)}.circular-button__circle--small{width:3.5rem;height:3.5rem;font-size:1.5rem}.circular-button__circle--medium{width:4.5rem;height:4.5rem;font-size:1.75rem}.circular-button__circle--large{width:5.5rem;height:5.5rem;font-size:2rem}.circular-button__circle--selected{background:var(--toggle-active);border:.1875rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color);color:var(--text-primary)}.circular-button__circle:hover:not(.circular-button__circle--selected){background:var(--surface-tertiary, #ebebeb)}.circular-button__circle:active{transform:scale(.95)}.circular-button__icon{display:flex;align-items:center;justify-content:center}.circular-button__icon--svg{width:100%;height:100%;color:var(--text-primary, #1a1a1a)}.circular-button__icon--svg svg{width:100%;height:100%;display:block}.circular-button__circle--selected .circular-button__icon--svg{color:#fff}.circular-button__label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center;line-height:1.2}.modal{position:absolute;inset:20% 0 0;background:var(--surface-bg, #f5f5f7);border-radius:1.25rem 1.25rem 0 0;padding:0 1.25rem 1.25rem;z-index:1000;max-height:80vh;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;color:var(--text-primary, black)}.modal::-webkit-scrollbar{display:none}.modal__backdrop{position:absolute;inset:0;background:var(--backdrop-bg, rgba(0, 0, 0, .4));z-index:999;border-radius:1.25rem}.modal__handle{width:2.25rem;height:.3125rem;background:var(--handle-bg, rgba(0, 0, 0, .15));border-radius:.1875rem;margin:.75rem auto 1.25rem}.modal__content{height:90%}.segmented-control{display:flex;gap:.5rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.75rem;padding:.25rem}.segmented-control__button{flex:1;border:none;border-radius:.625rem;padding:.75rem;font-size:.9375rem;font-weight:500;cursor:pointer;background-color:transparent;color:var(--text-primary, #1a1a1a);transition:all .2s}.segmented-control__button--active{background-color:var(--surface-bg, white);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .08))}.segmented-control__button:hover:not(.segmented-control__button--active){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.toast{position:fixed;bottom:1.25rem;left:50%;transform:translate(-50%);background:var(--surface-bg, #ffffff);border:.0625rem solid var(--border-color, #e0e0e0);border-radius:.5rem;padding:.75rem 1rem;display:flex;align-items:center;gap:.75rem;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12));animation:toast-slide-up .3s ease-out;z-index:1000;max-width:90%}@keyframes toast-slide-up{0%{transform:translate(-50%) translateY(1.25rem);opacity:0}to{transform:translate(-50%) translateY(0);opacity:1}}.toast__message{color:var(--text-primary, #1a1a1a);font-size:.875rem}.toast__close{background:none;border:none;color:var(--text-secondary, #666666);font-size:1.5rem;cursor:pointer;padding:0;width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;line-height:1;transition:color .2s}.toast__close:hover{color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__header{margin-bottom:1.5rem}.cleaning-mode-modal__content-wrapper{width:100%;overflow-x:hidden;padding-bottom:1rem}.cleaning-mode-modal__section{margin-bottom:1.5rem}.cleaning-mode-modal__section-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500;margin:0 0 .75rem}.cleaning-mode-modal__section-header{display:flex;align-items:center;gap:.375rem;margin-bottom:.75rem}.cleaning-mode-modal__help-icon{display:inline-flex;align-items:center;justify-content:center;width:1rem;height:1rem;border-radius:50%;border:.09375rem solid var(--text-tertiary, #999);font-size:.6875rem;color:var(--text-tertiary, #999);font-weight:600}.cleaning-mode-modal__room-map{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem;display:flex;align-items:center;justify-content:center;min-height:7.5rem}.cleaning-mode-modal__placeholder{font-size:.8125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__mode-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.cleaning-mode-modal__mode-card{position:relative;border:.125rem solid var(--border-color, #e0e0e0);border-radius:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:var(--surface-bg, white);padding:1.5rem 1rem;transition:all .2s ease}.cleaning-mode-modal__mode-card:hover{transform:translateY(-.125rem);box-shadow:0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--selected{border:.1875rem solid var(--accent-color, #d4af37);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(212, 175, 55, .15))}.cleaning-mode-modal__mode-card--selected:hover{transform:translateY(-.125rem);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25)),0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--mapping{border-style:dashed;border-color:var(--accent-color, #d4af37);opacity:.85}.cleaning-mode-modal__mode-card--mapping:hover{opacity:1}.cleaning-mode-modal__mode-icon{border-radius:50%;margin-bottom:.75rem;display:flex;align-items:center;justify-content:center;font-size:1.75rem}.cleaning-mode-modal__mode-label{font-size:.875rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__mode-checkmark{position:absolute;top:.75rem;right:.75rem;width:1.5rem;height:1.5rem;border-radius:50%;background:var(--accent-color, #d4af37);display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .15));color:#fff;font-size:.875rem}.cleaning-mode-modal__horizontal-scroll{display:flex;justify-content:space-around;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar{height:.25rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-track{background:var(--surface-secondary, #f1f1f1);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb:hover{background:var(--border-color, #bbb)}.cleaning-mode-modal__mode-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__mode-option-label{font-size:.75rem;color:var(--text-secondary, #666);text-align:center;line-height:1.2}.cleaning-mode-modal__power-grid{display:grid;grid-template-columns:repeat(4,1fr);margin-bottom:1rem}.cleaning-mode-modal__power-option{display:flex;flex-direction:column;align-items:center;gap:.5rem}.cleaning-mode-modal__power-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.cleaning-mode-modal__max-plus{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem}.cleaning-mode-modal__max-plus-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}.cleaning-mode-modal__max-plus-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__max-plus-description{font-size:.8125rem;color:var(--text-tertiary, #999);margin:0;line-height:1.4}.cleaning-mode-modal__slider-container{position:relative;padding:0 .5rem;margin-bottom:.75rem}.cleaning-mode-modal__slider-wrapper{position:relative;padding-top:2rem}.cleaning-mode-modal__slider{width:100%;height:.375rem;border-radius:.1875rem;outline:none;-webkit-appearance:none;appearance:none;cursor:pointer}.cleaning-mode-modal__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider::-moz-range-thumb{width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;border:none;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip{position:absolute;top:-.5rem;left:0;transform:translate(-50%);background:var(--accent-color, #d4af37);color:#fff;padding:.25rem .5rem;border-radius:.375rem;font-size:.85rem;font-weight:600;white-space:nowrap;pointer-events:none;box-shadow:0 .125rem .375rem var(--accent-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:.3125rem solid transparent;border-right:.3125rem solid transparent;border-top:.3125rem solid var(--accent-color, #d4af37)}.cleaning-mode-modal__slider-value{position:absolute;top:-2rem;transform:translate(-50%);background:var(--accent-color, #d4af37);border-radius:50%;width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:#fff;box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25));pointer-events:none}.cleaning-mode-modal__slider-labels{display:flex;justify-content:space-between;padding:0 .5rem;margin-top:1.5rem}.cleaning-mode-modal__slider-label{font-size:.8125rem}.cleaning-mode-modal__slider-label--inactive{color:var(--text-tertiary, #999)}.cleaning-mode-modal__slider-label--active{color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__setting{display:flex;align-items:center;justify-content:space-between;padding:1rem;background:var(--surface-bg, white);border-radius:.75rem;margin-bottom:1rem}.cleaning-mode-modal__setting--clickable{cursor:pointer;transition:background .2s ease}.cleaning-mode-modal__setting--clickable:hover{background:var(--surface-secondary, #f8f8f8)}.cleaning-mode-modal__setting--clickable:active{background:var(--surface-tertiary, #f0f0f0)}.cleaning-mode-modal__setting-label{font-size:.9375rem;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__setting-value{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__setting-arrow{font-size:1.125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__route-grid{display:flex;justify-content:space-around}.cleaning-mode-modal__route-option{display:flex;flex-direction:column;align-items:center;gap:.5rem}.cleaning-mode-modal__route-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.shortcuts-modal{padding:0}.shortcuts-modal__title{font-size:1.3rem;font-weight:600;margin:0 0 1rem;padding:1.5rem 1.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty{padding:2rem 1.5rem;text-align:center;color:var(--text-secondary, #666)}.shortcuts-modal__empty p{margin:.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty-hint{font-size:.9rem;color:var(--text-tertiary, #888)}.shortcuts-modal__list{max-height:35rem;overflow-y:auto;padding:.5rem 0;gap:.5rem;display:flex;flex-direction:column}.shortcuts-modal__item{display:flex;align-items:center;gap:1rem;padding:.75rem 1.5rem;margin:.25rem 1rem;background:var(--surface-bg, #fff);border:2px solid var(--accent-color);border-radius:.75rem;box-shadow:0 .125rem .5rem var(--accent-shadow);transition:all .2s;width:90%}.shortcuts-modal__item:hover{box-shadow:0 .25rem .75rem var(--accent-shadow);transform:translateY(-.0625rem)}.shortcuts-modal__item-info{flex:1;min-width:0;display:flex;align-items:center;gap:.75rem}.shortcuts-modal__item-icon{display:flex;font-size:1.3rem;flex-shrink:0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__item-icon svg{scale:.8}.shortcuts-modal__item-name{font-size:1rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.ai-detection-section{display:flex;flex-direction:column;gap:.75rem}.ai-detection-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.ai-detection-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.ai-detection-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.ai-detection-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section{display:flex;flex-direction:column;gap:.75rem}.carpet-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.carpet-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.carpet-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.carpet-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.carpet-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.carpet-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.carpet-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.consumables-section{display:flex;flex-direction:column;gap:1rem}.consumables-section__item{display:flex;flex-direction:column;gap:.375rem}.consumables-section__info{display:flex;justify-content:space-between;align-items:center}.consumables-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.consumables-section__stats{font-size:.75rem;color:var(--text-secondary, #666)}.consumables-section__progress{height:.375rem;background:var(--progress-bg, rgba(0, 0, 0, .1));border-radius:.1875rem;overflow:hidden}.consumables-section__progress-bar{height:100%;border-radius:.1875rem;transition:width .3s ease}.consumables-section__reset{align-self:flex-end;padding:.25rem .75rem;font-size:.75rem;font-weight:500;color:var(--accent-color, #007aff);background:none;border:1px solid var(--accent-color, #007aff);border-radius:.375rem;cursor:pointer;transition:all .2s ease}.consumables-section__reset:hover{background:var(--accent-color, #007aff);color:#fff}.consumables-section__reset:active{opacity:.8}.device-info-section{display:flex;flex-direction:column;gap:.75rem}.device-info-section__item{display:flex;justify-content:space-between;align-items:center;padding:.25rem 0;border-bottom:1px solid var(--divider-color, rgba(0, 0, 0, .06))}.device-info-section__item:last-child{border-bottom:none}.device-info-section__label{font-size:.875rem;color:var(--text-secondary, #666)}.device-info-section__value{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.map-management-section__description{font-size:.8125rem;color:var(--text-secondary, #666);margin:0 0 .75rem;line-height:1.4}.map-management-section__empty{font-size:.875rem;color:var(--text-secondary, #666);text-align:center;padding:1rem 0;margin:0}.map-management-section__maps{display:flex;flex-wrap:wrap;gap:.5rem}.map-management-section__map{padding:.5rem 1rem;font-size:.875rem;font-weight:500;color:var(--text-primary, #000);background:var(--button-bg, rgba(0, 0, 0, .05));border:2px solid transparent;border-radius:.5rem;cursor:pointer;transition:all .2s ease}.map-management-section__map:hover{background:var(--button-hover-bg, rgba(0, 0, 0, .08))}.map-management-section__map--active{border-color:var(--accent-color, #007aff);background:var(--accent-bg, rgba(0, 122, 255, .1));color:var(--accent-color, #007aff)}.quick-settings-section{display:flex;flex-direction:column;gap:1rem}.quick-settings-section__item{display:flex;justify-content:space-between;align-items:center;gap:1rem}.quick-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.quick-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.quick-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.volume-section{display:flex;flex-direction:row;gap:1rem}.volume-section__control{display:flex;align-items:center;gap:.75rem;flex:1}.volume-section__icon{display:flex;align-items:center;justify-content:center;color:var(--text-secondary, #666);flex-shrink:0}.volume-section__slider-container{flex:1;padding-top:1.5rem;margin-top:1rem}.volume-section__slider-wrapper{position:relative;width:100%}.volume-section__slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:3px;outline:none;cursor:pointer}.volume-section__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-webkit-slider-thumb:hover{transform:scale(1.1)}.volume-section__slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;border:none;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-moz-range-thumb:hover{transform:scale(1.1)}.volume-section__tooltip{position:absolute;top:-1.75rem;transform:translate(-50%);background:var(--accent-color, #007aff);color:#fff;padding:.25rem .5rem;border-radius:4px;font-size:.75rem;font-weight:500;white-space:nowrap;pointer-events:none}.volume-section__tooltip:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);border:4px solid transparent;border-top-color:var(--accent-color, #007aff)}.volume-section__test-button{display:flex;align-items:center;justify-content:center;gap:.5rem;padding:.625rem 1rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;color:var(--text-primary, #333);font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s ease}.volume-section__test-button:hover{background:var(--surface-tertiary, #eee)}.volume-section__test-button:active{transform:scale(.98)}.volume-section__test-button svg{color:var(--accent-color, #007aff)}.settings-panel{height:100%}.settings-panel__title{font-size:1.25rem;font-weight:600;margin:0 0 1rem;text-align:center;color:var(--text-primary, #000)}.settings-panel__scroll-wrapper{height:90%;overflow-y:auto}.settings-panel__sections{display:flex;flex-direction:column;gap:.25rem;padding-right:.25rem}.settings-panel__sections::-webkit-scrollbar{width:4px}.settings-panel__sections::-webkit-scrollbar-track{background:transparent}.settings-panel__sections::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb, rgba(0, 0, 0, .2));border-radius:2px}.room-selection-display{padding:.75rem 1rem;background:var(--accent-bg, #e3f2fd);border-radius:.5rem;margin-bottom:.75rem;font-size:.875rem;color:var(--text-primary, #1a1a1a)}.room-selection-display__label{font-weight:600;margin-right:.5rem;color:var(--accent-color, #007aff)}.room-selection-display__rooms{color:var(--text-secondary, #666666)}.dreame-vacuum-card{position:relative;background:var(--card-bg, #f5f5f7);border-radius:1.25rem;overflow:hidden;box-shadow:0 .125rem 1.25rem var(--card-shadow, rgba(0, 0, 0, .08));font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.dreame-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center}.dreame-vacuum-card__container{display:flex;flex-direction:column;gap:1rem}.dreame-vacuum-card__controls{padding:0 1.25rem 1.25rem}.dreame-vacuum-card__error{padding:1.25rem;text-align:center;color:var(--error-color, #ff3b30);font-size:.875rem}.valetudo-map-canvas{width:100%;background:var(--card-bg, #1a1a2e);border-radius:.75rem;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:200px;position:relative;-webkit-user-select:none;user-select:none;touch-action:none}.valetudo-map-canvas--zone-mode{cursor:crosshair}.valetudo-map-canvas--room-mode{cursor:pointer}.valetudo-map-canvas__inner{position:relative;width:100%;transform-origin:center center;will-change:transform}.valetudo-map-canvas__canvas{width:100%;height:auto;display:block;image-rendering:auto}.valetudo-map-canvas__zone-drag{position:absolute;background:#ff980033;border:2px dashed rgba(255,152,0,.9);pointer-events:none;border-radius:2px}.valetudo-map-canvas__widget-zone{position:absolute;background:#ff98002e;border:2px dashed rgba(255,152,0,.9);border-radius:3px;box-sizing:border-box}.valetudo-map-canvas__widget-zone-move{position:absolute;inset:0;cursor:move;touch-action:none}.valetudo-map-canvas__widget-zone-move:after{content:\"✥\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.4rem;color:#ff9800d9;pointer-events:none;text-shadow:0 0 3px #000}.valetudo-map-canvas__widget-zone-resize{position:absolute;bottom:-8px;right:-8px;width:24px;height:24px;background:#ff9800e6;border-radius:50%;cursor:se-resize;touch-action:none;z-index:2}.valetudo-map-canvas__widget-zone-resize:after{content:\"⤡\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:.9rem;color:#fff;pointer-events:none}.valetudo-map-canvas__widget-zone-delete{position:absolute;top:-10px;right:-10px;width:22px;height:22px;background:#e53935;color:#fff;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none}.valetudo-map-canvas--restrictions-wall,.valetudo-map-canvas--restrictions-no_go,.valetudo-map-canvas--restrictions-no_mop{cursor:crosshair}.valetudo-map-canvas__pending-restriction{position:absolute;border-radius:3px;box-sizing:border-box}.valetudo-map-canvas__pending-restriction--wall{background:#f443361a;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__pending-restriction--no_go{background:#f443362e;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__pending-restriction--no_mop{background:#2196f32e;border:2px dashed rgba(33,150,243,.85)}.valetudo-map-canvas__pending-restriction-move{position:absolute;inset:0;cursor:move;touch-action:none}.valetudo-map-canvas__pending-restriction-move:after{content:\"✥\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.4rem;color:#f44336d9;pointer-events:none;text-shadow:0 0 3px #000}.valetudo-map-canvas__pending-restriction-resize{position:absolute;bottom:-8px;right:-8px;width:24px;height:24px;background:#f44336e6;border-radius:50%;cursor:se-resize;touch-action:none;z-index:2}.valetudo-map-canvas__pending-restriction-resize:after{content:\"⤡\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:.9rem;color:#fff;pointer-events:none}.valetudo-map-canvas__pending-restriction-delete{position:absolute;top:-10px;right:-10px;width:22px;height:22px;background:#e53935;color:#fff;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none}.valetudo-map-canvas__pending-restriction-confirm{position:absolute;bottom:-10px;left:-10px;width:26px;height:26px;background:#43a047;color:#fff;border:none;border-radius:50%;font-size:.9rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-endpoint{width:22px;height:22px;background:#f44336e6;border:2px solid #fff;border-radius:50%;cursor:move;touch-action:none;z-index:3;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-action-btn{width:22px;height:22px;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:3;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none;color:#fff;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-action-btn--delete{background:#e53935}.valetudo-map-canvas__wall-action-btn--confirm{background:#43a047}.valetudo-map-canvas--restrictions-select{cursor:pointer}.valetudo-map-canvas__restriction-preview{position:absolute;pointer-events:none;border-radius:2px}.valetudo-map-canvas__restriction-preview--no_go{background:#f443362e;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__restriction-preview--no_mop{background:#2196f32e;border:2px dashed rgba(33,150,243,.85)}.valetudo-map-canvas__restriction-preview-svg{position:absolute;inset:0;pointer-events:none}.valetudo-map-canvas__bottom-controls{position:absolute;bottom:.5rem;right:.5rem;display:flex;flex-direction:row;align-items:flex-end;gap:4px;z-index:10}.valetudo-map-canvas__zoom-controls{display:flex;flex-direction:column;gap:2px}.valetudo-map-canvas__zoom-controls button{width:28px;height:28px;background:#0000008c;color:#fff;border:1px solid rgba(255,255,255,.2);border-radius:4px;font-size:1.1rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}.valetudo-map-canvas__zoom-controls button:active{background:#fff3}.valetudo-map-canvas__iterations-btn{width:32px;height:32px;background:rgba(var(--rgb-primary-color, 3, 169, 244),.7);color:#fff;border:1px solid rgba(255,255,255,.35);border-radius:4px;font-size:.8rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}.valetudo-map-canvas__iterations-btn:active{background:rgba(var(--rgb-primary-color, 3, 169, 244),.9)}.restrictions-toolbar{display:none}.rt{display:flex;flex-direction:column;align-items:stretch;gap:6px;width:100%}.rt__seg{display:flex;border-radius:8px;overflow:hidden;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);flex-shrink:0}.rt__seg-btn{display:inline-flex;align-items:center;justify-content:center;gap:5px;flex:1;padding:0 10px;height:32px;border:none;border-right:1px solid rgba(255,255,255,.07);background:transparent;color:#ffffff73;font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;transition:background .12s,color .12s;outline:none}.rt__seg-btn:last-child{border-right:none}.rt__seg-btn:hover:not(.rt__seg-btn--active){background:#ffffff14;color:#fffc}.rt__seg-btn--select.rt__seg-btn--active{background:#ffffff26;color:#fff}.rt__seg-btn--wall.rt__seg-btn--active,.rt__seg-btn--no_go.rt__seg-btn--active{background:#ef535047;color:#ffcdd2}.rt__seg-btn--no_mop.rt__seg-btn--active{background:#42a5f547;color:#bbdefb}.rt__seg-btn svg{flex-shrink:0}.rt__actions{display:flex;align-items:center;justify-content:center;gap:6px}.rt__action-btn{display:inline-flex;align-items:center;justify-content:center;gap:5px;height:32px;padding:0 10px;border:1px solid transparent;border-radius:7px;background:#ffffff0f;color:#ffffff73;font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;transition:background .12s,color .12s,border-color .12s;outline:none}.rt__action-btn:disabled{opacity:.38;cursor:not-allowed}.rt__action-btn:hover:not(:disabled){background:#ffffff1a;color:#ffffffd9}.rt__action-btn--delete{width:32px;padding:0;color:#ef5350a6;border-color:#ef535033}.rt__action-btn--delete:hover:not(:disabled){background:#ef53502e;color:#ef5350;border-color:#ef535066}.rt__action-btn--save{color:#ffffff47}.rt__action-btn--save.rt__action-btn--save-dirty{background:#4caf5033;color:#a5d6a7;border-color:#4caf5059}.rt__action-btn--save.rt__action-btn--save-dirty:hover:not(:disabled){background:#4caf504d;color:#c8e6c9}.rt__action-btn svg{flex-shrink:0}.valetudo-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center;font-size:.875rem}.valetudo-vacuum-card__warning{padding:.5rem 1.25rem;background:var(--warning-bg, #fff3cd);color:var(--warning-color, #856404);font-size:.75rem;border-radius:0 0 1.25rem 1.25rem}.valetudo-vacuum-card__map-placeholder{margin:0 1.25rem;min-height:200px;display:flex;align-items:center;justify-content:center;background:var(--surface-secondary, #e8e8e8);border-radius:.75rem;font-size:.875rem;color:var(--text-secondary, #666)}.valetudo-selected-rooms{display:flex;align-items:baseline;gap:.4rem;padding:0 0 .25rem;font-size:.8rem;line-height:1.4}.valetudo-selected-rooms__label{font-weight:600;color:var(--text-secondary, #888);white-space:nowrap}.valetudo-selected-rooms__names{color:var(--accent-color, #007aff);font-weight:500}.valetudo-config-error{display:flex;flex-direction:column;gap:.75rem;padding:.25rem 0}.valetudo-config-error__title{font-size:1rem;font-weight:700;color:var(--text-primary, #1a1a1a);margin:0}.valetudo-config-error__desc{font-size:.875rem;color:var(--text-secondary, #666);margin:0}.valetudo-config-error__option{font-size:.875rem;color:var(--text-primary, #1a1a1a);margin:0}.valetudo-config-error__yaml{background:var(--surface-secondary, #f0f0f0);border:1px solid var(--border-color, #ddd);border-radius:.5rem;padding:.75rem;font-size:.75rem;font-family:monospace;white-space:pre;overflow-x:auto;color:var(--text-primary, #1a1a1a);margin:0;-webkit-user-select:all;user-select:all}.valetudo-config-error__close{align-self:flex-end;background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:.5rem;padding:.5rem 1.25rem;font-size:.875rem;font-weight:600;cursor:pointer;transition:opacity .15s}.valetudo-config-error__close:hover{opacity:.85}\n";
  document.head.appendChild(style);
})();
function Q_(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var xr = { exports: {} }, El = {};
var Qm;
function Jh() {
  if (Qm) return El;
  Qm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(u, g, m) {
    var h = null;
    if (m !== void 0 && (h = "" + m), g.key !== void 0 && (h = "" + g.key), "key" in g) {
      m = {};
      for (var b in g)
        b !== "key" && (m[b] = g[b]);
    } else m = g;
    return g = m.ref, {
      $$typeof: o,
      type: u,
      key: h,
      ref: g !== void 0 ? g : null,
      props: m
    };
  }
  return El.Fragment = c, El.jsx = s, El.jsxs = s, El;
}
var $m;
function Ih() {
  return $m || ($m = 1, xr.exports = Jh()), xr.exports;
}
var r = Ih(), Sr = { exports: {} }, Me = {};
var Jm;
function Wh() {
  if (Jm) return Me;
  Jm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), w = /* @__PURE__ */ Symbol.for("react.activity"), k = Symbol.iterator;
  function N(x) {
    return x === null || typeof x != "object" ? null : (x = k && x[k] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var S = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, D = Object.assign, K = {};
  function U(x, H, P) {
    this.props = x, this.context = H, this.refs = K, this.updater = P || S;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(x, H) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, H, "setState");
  }, U.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function $() {
  }
  $.prototype = U.prototype;
  function Z(x, H, P) {
    this.props = x, this.context = H, this.refs = K, this.updater = P || S;
  }
  var L = Z.prototype = new $();
  L.constructor = Z, D(L, U.prototype), L.isPureReactComponent = !0;
  var ae = Array.isArray;
  function V() {
  }
  var Y = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function le(x, H, P) {
    var ne = P.ref;
    return {
      $$typeof: o,
      type: x,
      key: H,
      ref: ne !== void 0 ? ne : null,
      props: P
    };
  }
  function I(x, H) {
    return le(x.type, H, x.props);
  }
  function se(x) {
    return typeof x == "object" && x !== null && x.$$typeof === o;
  }
  function ge(x) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(P) {
      return H[P];
    });
  }
  var Ne = /\/+/g;
  function Ce(x, H) {
    return typeof x == "object" && x !== null && x.key != null ? ge("" + x.key) : H.toString(36);
  }
  function Se(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(V, V) : (x.status = "pending", x.then(
          function(H) {
            x.status === "pending" && (x.status = "fulfilled", x.value = H);
          },
          function(H) {
            x.status === "pending" && (x.status = "rejected", x.reason = H);
          }
        )), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function R(x, H, P, ne, xe) {
    var me = typeof x;
    (me === "undefined" || me === "boolean") && (x = null);
    var ye = !1;
    if (x === null) ye = !0;
    else
      switch (me) {
        case "bigint":
        case "string":
        case "number":
          ye = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case o:
            case c:
              ye = !0;
              break;
            case p:
              return ye = x._init, R(
                ye(x._payload),
                H,
                P,
                ne,
                xe
              );
          }
      }
    if (ye)
      return xe = xe(x), ye = ne === "" ? "." + Ce(x, 0) : ne, ae(xe) ? (P = "", ye != null && (P = ye.replace(Ne, "$&/") + "/"), R(xe, H, P, "", function(ba) {
        return ba;
      })) : xe != null && (se(xe) && (xe = I(
        xe,
        P + (xe.key == null || x && x.key === xe.key ? "" : ("" + xe.key).replace(
          Ne,
          "$&/"
        ) + "/") + ye
      )), H.push(xe)), 1;
    ye = 0;
    var ot = ne === "" ? "." : ne + ":";
    if (ae(x))
      for (var Pe = 0; Pe < x.length; Pe++)
        ne = x[Pe], me = ot + Ce(ne, Pe), ye += R(
          ne,
          H,
          P,
          me,
          xe
        );
    else if (Pe = N(x), typeof Pe == "function")
      for (x = Pe.call(x), Pe = 0; !(ne = x.next()).done; )
        ne = ne.value, me = ot + Ce(ne, Pe++), ye += R(
          ne,
          H,
          P,
          me,
          xe
        );
    else if (me === "object") {
      if (typeof x.then == "function")
        return R(
          Se(x),
          H,
          P,
          ne,
          xe
        );
      throw H = String(x), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ye;
  }
  function ee(x, H, P) {
    if (x == null) return x;
    var ne = [], xe = 0;
    return R(x, ne, "", "", function(me) {
      return H.call(P, me, xe++);
    }), ne;
  }
  function F(x) {
    if (x._status === -1) {
      var H = x._result;
      H = H(), H.then(
        function(P) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = P);
        },
        function(P) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = P);
        }
      ), x._status === -1 && (x._status = 0, x._result = H);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var ve = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  }, Ee = {
    map: ee,
    forEach: function(x, H, P) {
      ee(
        x,
        function() {
          H.apply(this, arguments);
        },
        P
      );
    },
    count: function(x) {
      var H = 0;
      return ee(x, function() {
        H++;
      }), H;
    },
    toArray: function(x) {
      return ee(x, function(H) {
        return H;
      }) || [];
    },
    only: function(x) {
      if (!se(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return Me.Activity = w, Me.Children = Ee, Me.Component = U, Me.Fragment = s, Me.Profiler = g, Me.PureComponent = Z, Me.StrictMode = u, Me.Suspense = v, Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, Me.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return Y.H.useMemoCache(x);
    }
  }, Me.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, Me.cacheSignal = function() {
    return null;
  }, Me.cloneElement = function(x, H, P) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var ne = D({}, x.props), xe = x.key;
    if (H != null)
      for (me in H.key !== void 0 && (xe = "" + H.key), H)
        !J.call(H, me) || me === "key" || me === "__self" || me === "__source" || me === "ref" && H.ref === void 0 || (ne[me] = H[me]);
    var me = arguments.length - 2;
    if (me === 1) ne.children = P;
    else if (1 < me) {
      for (var ye = Array(me), ot = 0; ot < me; ot++)
        ye[ot] = arguments[ot + 2];
      ne.children = ye;
    }
    return le(x.type, xe, ne);
  }, Me.createContext = function(x) {
    return x = {
      $$typeof: h,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: m,
      _context: x
    }, x;
  }, Me.createElement = function(x, H, P) {
    var ne, xe = {}, me = null;
    if (H != null)
      for (ne in H.key !== void 0 && (me = "" + H.key), H)
        J.call(H, ne) && ne !== "key" && ne !== "__self" && ne !== "__source" && (xe[ne] = H[ne]);
    var ye = arguments.length - 2;
    if (ye === 1) xe.children = P;
    else if (1 < ye) {
      for (var ot = Array(ye), Pe = 0; Pe < ye; Pe++)
        ot[Pe] = arguments[Pe + 2];
      xe.children = ot;
    }
    if (x && x.defaultProps)
      for (ne in ye = x.defaultProps, ye)
        xe[ne] === void 0 && (xe[ne] = ye[ne]);
    return le(x, me, xe);
  }, Me.createRef = function() {
    return { current: null };
  }, Me.forwardRef = function(x) {
    return { $$typeof: b, render: x };
  }, Me.isValidElement = se, Me.lazy = function(x) {
    return {
      $$typeof: p,
      _payload: { _status: -1, _result: x },
      _init: F
    };
  }, Me.memo = function(x, H) {
    return {
      $$typeof: f,
      type: x,
      compare: H === void 0 ? null : H
    };
  }, Me.startTransition = function(x) {
    var H = Y.T, P = {};
    Y.T = P;
    try {
      var ne = x(), xe = Y.S;
      xe !== null && xe(P, ne), typeof ne == "object" && ne !== null && typeof ne.then == "function" && ne.then(V, ve);
    } catch (me) {
      ve(me);
    } finally {
      H !== null && P.types !== null && (H.types = P.types), Y.T = H;
    }
  }, Me.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, Me.use = function(x) {
    return Y.H.use(x);
  }, Me.useActionState = function(x, H, P) {
    return Y.H.useActionState(x, H, P);
  }, Me.useCallback = function(x, H) {
    return Y.H.useCallback(x, H);
  }, Me.useContext = function(x) {
    return Y.H.useContext(x);
  }, Me.useDebugValue = function() {
  }, Me.useDeferredValue = function(x, H) {
    return Y.H.useDeferredValue(x, H);
  }, Me.useEffect = function(x, H) {
    return Y.H.useEffect(x, H);
  }, Me.useEffectEvent = function(x) {
    return Y.H.useEffectEvent(x);
  }, Me.useId = function() {
    return Y.H.useId();
  }, Me.useImperativeHandle = function(x, H, P) {
    return Y.H.useImperativeHandle(x, H, P);
  }, Me.useInsertionEffect = function(x, H) {
    return Y.H.useInsertionEffect(x, H);
  }, Me.useLayoutEffect = function(x, H) {
    return Y.H.useLayoutEffect(x, H);
  }, Me.useMemo = function(x, H) {
    return Y.H.useMemo(x, H);
  }, Me.useOptimistic = function(x, H) {
    return Y.H.useOptimistic(x, H);
  }, Me.useReducer = function(x, H, P) {
    return Y.H.useReducer(x, H, P);
  }, Me.useRef = function(x) {
    return Y.H.useRef(x);
  }, Me.useState = function(x) {
    return Y.H.useState(x);
  }, Me.useSyncExternalStore = function(x, H, P) {
    return Y.H.useSyncExternalStore(
      x,
      H,
      P
    );
  }, Me.useTransition = function() {
    return Y.H.useTransition();
  }, Me.version = "19.2.3", Me;
}
var Im;
function Yr() {
  return Im || (Im = 1, Sr.exports = Wh()), Sr.exports;
}
var O = Yr();
const $_ = /* @__PURE__ */ Q_(O);
var wr = { exports: {} }, Ml = {}, zr = { exports: {} }, Nr = {};
var Wm;
function Fh() {
  return Wm || (Wm = 1, (function(o) {
    function c(R, ee) {
      var F = R.length;
      R.push(ee);
      e: for (; 0 < F; ) {
        var ve = F - 1 >>> 1, Ee = R[ve];
        if (0 < g(Ee, ee))
          R[ve] = ee, R[F] = Ee, F = ve;
        else break e;
      }
    }
    function s(R) {
      return R.length === 0 ? null : R[0];
    }
    function u(R) {
      if (R.length === 0) return null;
      var ee = R[0], F = R.pop();
      if (F !== ee) {
        R[0] = F;
        e: for (var ve = 0, Ee = R.length, x = Ee >>> 1; ve < x; ) {
          var H = 2 * (ve + 1) - 1, P = R[H], ne = H + 1, xe = R[ne];
          if (0 > g(P, F))
            ne < Ee && 0 > g(xe, P) ? (R[ve] = xe, R[ne] = F, ve = ne) : (R[ve] = P, R[H] = F, ve = H);
          else if (ne < Ee && 0 > g(xe, F))
            R[ve] = xe, R[ne] = F, ve = ne;
          else break e;
        }
      }
      return ee;
    }
    function g(R, ee) {
      var F = R.sortIndex - ee.sortIndex;
      return F !== 0 ? F : R.id - ee.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      o.unstable_now = function() {
        return m.now();
      };
    } else {
      var h = Date, b = h.now();
      o.unstable_now = function() {
        return h.now() - b;
      };
    }
    var v = [], f = [], p = 1, w = null, k = 3, N = !1, S = !1, D = !1, K = !1, U = typeof setTimeout == "function" ? setTimeout : null, $ = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
    function L(R) {
      for (var ee = s(f); ee !== null; ) {
        if (ee.callback === null) u(f);
        else if (ee.startTime <= R)
          u(f), ee.sortIndex = ee.expirationTime, c(v, ee);
        else break;
        ee = s(f);
      }
    }
    function ae(R) {
      if (D = !1, L(R), !S)
        if (s(v) !== null)
          S = !0, V || (V = !0, ge());
        else {
          var ee = s(f);
          ee !== null && Se(ae, ee.startTime - R);
        }
    }
    var V = !1, Y = -1, J = 5, le = -1;
    function I() {
      return K ? !0 : !(o.unstable_now() - le < J);
    }
    function se() {
      if (K = !1, V) {
        var R = o.unstable_now();
        le = R;
        var ee = !0;
        try {
          e: {
            S = !1, D && (D = !1, $(Y), Y = -1), N = !0;
            var F = k;
            try {
              t: {
                for (L(R), w = s(v); w !== null && !(w.expirationTime > R && I()); ) {
                  var ve = w.callback;
                  if (typeof ve == "function") {
                    w.callback = null, k = w.priorityLevel;
                    var Ee = ve(
                      w.expirationTime <= R
                    );
                    if (R = o.unstable_now(), typeof Ee == "function") {
                      w.callback = Ee, L(R), ee = !0;
                      break t;
                    }
                    w === s(v) && u(v), L(R);
                  } else u(v);
                  w = s(v);
                }
                if (w !== null) ee = !0;
                else {
                  var x = s(f);
                  x !== null && Se(
                    ae,
                    x.startTime - R
                  ), ee = !1;
                }
              }
              break e;
            } finally {
              w = null, k = F, N = !1;
            }
            ee = void 0;
          }
        } finally {
          ee ? ge() : V = !1;
        }
      }
    }
    var ge;
    if (typeof Z == "function")
      ge = function() {
        Z(se);
      };
    else if (typeof MessageChannel < "u") {
      var Ne = new MessageChannel(), Ce = Ne.port2;
      Ne.port1.onmessage = se, ge = function() {
        Ce.postMessage(null);
      };
    } else
      ge = function() {
        U(se, 0);
      };
    function Se(R, ee) {
      Y = U(function() {
        R(o.unstable_now());
      }, ee);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, o.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < R ? Math.floor(1e3 / R) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, o.unstable_next = function(R) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var ee = 3;
          break;
        default:
          ee = k;
      }
      var F = k;
      k = ee;
      try {
        return R();
      } finally {
        k = F;
      }
    }, o.unstable_requestPaint = function() {
      K = !0;
    }, o.unstable_runWithPriority = function(R, ee) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var F = k;
      k = R;
      try {
        return ee();
      } finally {
        k = F;
      }
    }, o.unstable_scheduleCallback = function(R, ee, F) {
      var ve = o.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? ve + F : ve) : F = ve, R) {
        case 1:
          var Ee = -1;
          break;
        case 2:
          Ee = 250;
          break;
        case 5:
          Ee = 1073741823;
          break;
        case 4:
          Ee = 1e4;
          break;
        default:
          Ee = 5e3;
      }
      return Ee = F + Ee, R = {
        id: p++,
        callback: ee,
        priorityLevel: R,
        startTime: F,
        expirationTime: Ee,
        sortIndex: -1
      }, F > ve ? (R.sortIndex = F, c(f, R), s(v) === null && R === s(f) && (D ? ($(Y), Y = -1) : D = !0, Se(ae, F - ve))) : (R.sortIndex = Ee, c(v, R), S || N || (S = !0, V || (V = !0, ge()))), R;
    }, o.unstable_shouldYield = I, o.unstable_wrapCallback = function(R) {
      var ee = k;
      return function() {
        var F = k;
        k = ee;
        try {
          return R.apply(this, arguments);
        } finally {
          k = F;
        }
      };
    };
  })(Nr)), Nr;
}
var Fm;
function Ph() {
  return Fm || (Fm = 1, zr.exports = Fh()), zr.exports;
}
var Er = { exports: {} }, Et = {};
var Pm;
function e0() {
  if (Pm) return Et;
  Pm = 1;
  var o = Yr();
  function c(v) {
    var f = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      f += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        f += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return "Minified React error #" + v + "; visit " + f + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var u = {
    d: {
      f: s,
      r: function() {
        throw Error(c(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, g = /* @__PURE__ */ Symbol.for("react.portal");
  function m(v, f, p) {
    var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: g,
      key: w == null ? null : "" + w,
      children: v,
      containerInfo: f,
      implementation: p
    };
  }
  var h = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function b(v, f) {
    if (v === "font") return "";
    if (typeof f == "string")
      return f === "use-credentials" ? f : "";
  }
  return Et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, Et.createPortal = function(v, f) {
    var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!f || f.nodeType !== 1 && f.nodeType !== 9 && f.nodeType !== 11)
      throw Error(c(299));
    return m(v, f, null, p);
  }, Et.flushSync = function(v) {
    var f = h.T, p = u.p;
    try {
      if (h.T = null, u.p = 2, v) return v();
    } finally {
      h.T = f, u.p = p, u.d.f();
    }
  }, Et.preconnect = function(v, f) {
    typeof v == "string" && (f ? (f = f.crossOrigin, f = typeof f == "string" ? f === "use-credentials" ? f : "" : void 0) : f = null, u.d.C(v, f));
  }, Et.prefetchDNS = function(v) {
    typeof v == "string" && u.d.D(v);
  }, Et.preinit = function(v, f) {
    if (typeof v == "string" && f && typeof f.as == "string") {
      var p = f.as, w = b(p, f.crossOrigin), k = typeof f.integrity == "string" ? f.integrity : void 0, N = typeof f.fetchPriority == "string" ? f.fetchPriority : void 0;
      p === "style" ? u.d.S(
        v,
        typeof f.precedence == "string" ? f.precedence : void 0,
        {
          crossOrigin: w,
          integrity: k,
          fetchPriority: N
        }
      ) : p === "script" && u.d.X(v, {
        crossOrigin: w,
        integrity: k,
        fetchPriority: N,
        nonce: typeof f.nonce == "string" ? f.nonce : void 0
      });
    }
  }, Et.preinitModule = function(v, f) {
    if (typeof v == "string")
      if (typeof f == "object" && f !== null) {
        if (f.as == null || f.as === "script") {
          var p = b(
            f.as,
            f.crossOrigin
          );
          u.d.M(v, {
            crossOrigin: p,
            integrity: typeof f.integrity == "string" ? f.integrity : void 0,
            nonce: typeof f.nonce == "string" ? f.nonce : void 0
          });
        }
      } else f == null && u.d.M(v);
  }, Et.preload = function(v, f) {
    if (typeof v == "string" && typeof f == "object" && f !== null && typeof f.as == "string") {
      var p = f.as, w = b(p, f.crossOrigin);
      u.d.L(v, p, {
        crossOrigin: w,
        integrity: typeof f.integrity == "string" ? f.integrity : void 0,
        nonce: typeof f.nonce == "string" ? f.nonce : void 0,
        type: typeof f.type == "string" ? f.type : void 0,
        fetchPriority: typeof f.fetchPriority == "string" ? f.fetchPriority : void 0,
        referrerPolicy: typeof f.referrerPolicy == "string" ? f.referrerPolicy : void 0,
        imageSrcSet: typeof f.imageSrcSet == "string" ? f.imageSrcSet : void 0,
        imageSizes: typeof f.imageSizes == "string" ? f.imageSizes : void 0,
        media: typeof f.media == "string" ? f.media : void 0
      });
    }
  }, Et.preloadModule = function(v, f) {
    if (typeof v == "string")
      if (f) {
        var p = b(f.as, f.crossOrigin);
        u.d.m(v, {
          as: typeof f.as == "string" && f.as !== "script" ? f.as : void 0,
          crossOrigin: p,
          integrity: typeof f.integrity == "string" ? f.integrity : void 0
        });
      } else u.d.m(v);
  }, Et.requestFormReset = function(v) {
    u.d.r(v);
  }, Et.unstable_batchedUpdates = function(v, f) {
    return v(f);
  }, Et.useFormState = function(v, f, p) {
    return h.H.useFormState(v, f, p);
  }, Et.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, Et.version = "19.2.3", Et;
}
var e_;
function t0() {
  if (e_) return Er.exports;
  e_ = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  return o(), Er.exports = e0(), Er.exports;
}
var t_;
function a0() {
  if (t_) return Ml;
  t_ = 1;
  var o = Ph(), c = Yr(), s = t0();
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function g(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function m(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function b(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (m(e) !== e)
      throw Error(u(188));
  }
  function f(e) {
    var t = e.alternate;
    if (!t) {
      if (t = m(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var a = e, n = t; ; ) {
      var i = a.return;
      if (i === null) break;
      var l = i.alternate;
      if (l === null) {
        if (n = i.return, n !== null) {
          a = n;
          continue;
        }
        break;
      }
      if (i.child === l.child) {
        for (l = i.child; l; ) {
          if (l === a) return v(i), e;
          if (l === n) return v(i), t;
          l = l.sibling;
        }
        throw Error(u(188));
      }
      if (a.return !== n.return) a = i, n = l;
      else {
        for (var d = !1, _ = i.child; _; ) {
          if (_ === a) {
            d = !0, a = i, n = l;
            break;
          }
          if (_ === n) {
            d = !0, n = i, a = l;
            break;
          }
          _ = _.sibling;
        }
        if (!d) {
          for (_ = l.child; _; ) {
            if (_ === a) {
              d = !0, a = l, n = i;
              break;
            }
            if (_ === n) {
              d = !0, n = l, a = i;
              break;
            }
            _ = _.sibling;
          }
          if (!d) throw Error(u(189));
        }
      }
      if (a.alternate !== n) throw Error(u(190));
    }
    if (a.tag !== 3) throw Error(u(188));
    return a.stateNode.current === a ? e : t;
  }
  function p(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = p(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var w = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), N = /* @__PURE__ */ Symbol.for("react.transitional.element"), S = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), U = /* @__PURE__ */ Symbol.for("react.profiler"), $ = /* @__PURE__ */ Symbol.for("react.consumer"), Z = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), ae = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), Y = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), le = /* @__PURE__ */ Symbol.for("react.activity"), I = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), se = Symbol.iterator;
  function ge(e) {
    return e === null || typeof e != "object" ? null : (e = se && e[se] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ne = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ce(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ne ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case U:
        return "Profiler";
      case K:
        return "StrictMode";
      case ae:
        return "Suspense";
      case V:
        return "SuspenseList";
      case le:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case S:
          return "Portal";
        case Z:
          return e.displayName || "Context";
        case $:
          return (e._context.displayName || "Context") + ".Consumer";
        case L:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Y:
          return t = e.displayName || null, t !== null ? t : Ce(e.type) || "Memo";
        case J:
          t = e._payload, e = e._init;
          try {
            return Ce(e(t));
          } catch {
          }
      }
    return null;
  }
  var Se = Array.isArray, R = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ve = [], Ee = -1;
  function x(e) {
    return { current: e };
  }
  function H(e) {
    0 > Ee || (e.current = ve[Ee], ve[Ee] = null, Ee--);
  }
  function P(e, t) {
    Ee++, ve[Ee] = e.current, e.current = t;
  }
  var ne = x(null), xe = x(null), me = x(null), ye = x(null);
  function ot(e, t) {
    switch (P(me, t), P(xe, e), P(ne, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? pm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = pm(t), e = hm(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    H(ne), P(ne, e);
  }
  function Pe() {
    H(ne), H(xe), H(me);
  }
  function ba(e) {
    e.memoizedState !== null && P(ye, e);
    var t = ne.current, a = hm(t, e.type);
    t !== a && (P(xe, e), P(ne, a));
  }
  function ya(e) {
    xe.current === e && (H(ne), H(xe)), ye.current === e && (H(ye), Sl._currentValue = F);
  }
  var Za, bn;
  function Xt(e) {
    if (Za === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Za = t && t[1] || "", bn = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Za + e + bn;
  }
  var Ka = !1;
  function fa(e, t) {
    if (!e || Ka) return "";
    Ka = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var Q = function() {
                throw Error();
              };
              if (Object.defineProperty(Q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, []);
                } catch (B) {
                  var T = B;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (B) {
                  T = B;
                }
                e.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (B) {
                T = B;
              }
              (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (B) {
            if (B && T && typeof B.stack == "string")
              return [B.stack, T.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      i && i.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var l = n.DetermineComponentFrameRoot(), d = l[0], _ = l[1];
      if (d && _) {
        var y = d.split(`
`), C = _.split(`
`);
        for (i = n = 0; n < y.length && !y[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; i < C.length && !C[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (n === y.length || i === C.length)
          for (n = y.length - 1, i = C.length - 1; 1 <= n && 0 <= i && y[n] !== C[i]; )
            i--;
        for (; 1 <= n && 0 <= i; n--, i--)
          if (y[n] !== C[i]) {
            if (n !== 1 || i !== 1)
              do
                if (n--, i--, 0 > i || y[n] !== C[i]) {
                  var q = `
` + y[n].replace(" at new ", " at ");
                  return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q;
                }
              while (1 <= n && 0 <= i);
            break;
          }
      }
    } finally {
      Ka = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Xt(a) : "";
  }
  function Qt(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Xt(e.type);
      case 16:
        return Xt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Xt("Suspense Fallback") : Xt("Suspense");
      case 19:
        return Xt("SuspenseList");
      case 0:
      case 15:
        return fa(e.type, !1);
      case 11:
        return fa(e.type.render, !1);
      case 1:
        return fa(e.type, !0);
      case 31:
        return Xt("Activity");
      default:
        return "";
    }
  }
  function xa(e) {
    try {
      var t = "", a = null;
      do
        t += Qt(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Sa = Object.prototype.hasOwnProperty, la = o.unstable_scheduleCallback, wa = o.unstable_cancelCallback, Kn = o.unstable_shouldYield, dt = o.unstable_requestPaint, et = o.unstable_now, yn = o.unstable_getCurrentPriorityLevel, ht = o.unstable_ImmediatePriority, Xa = o.unstable_UserBlockingPriority, Qa = o.unstable_NormalPriority, xn = o.unstable_LowPriority, Sn = o.unstable_IdlePriority, j = o.log, G = o.unstable_setDisableYieldValue, W = null, ie = null;
  function ue(e) {
    if (typeof j == "function" && G(e), ie && typeof ie.setStrictMode == "function")
      try {
        ie.setStrictMode(W, e);
      } catch {
      }
  }
  var ze = Math.clz32 ? Math.clz32 : yt, M = Math.log, tt = Math.LN2;
  function yt(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (M(e) / tt | 0) | 0;
  }
  var te = 256, oe = 262144, de = 4194304;
  function ce(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function pe(e, t, a) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, l = e.suspendedLanes, d = e.pingedLanes;
    e = e.warmLanes;
    var _ = n & 134217727;
    return _ !== 0 ? (n = _ & ~l, n !== 0 ? i = ce(n) : (d &= _, d !== 0 ? i = ce(d) : a || (a = _ & ~e, a !== 0 && (i = ce(a))))) : (_ = n & ~l, _ !== 0 ? i = ce(_) : d !== 0 ? i = ce(d) : a || (a = n & ~e, a !== 0 && (i = ce(a)))), i === 0 ? 0 : t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, a = t & -t, l >= a || l === 32 && (a & 4194048) !== 0) ? t : i;
  }
  function Te(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ke(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Oe() {
    var e = de;
    return de <<= 1, (de & 62914560) === 0 && (de = 4194304), e;
  }
  function Ve(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ae(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function rs(e, t, a, n, i, l) {
    var d = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var _ = e.entanglements, y = e.expirationTimes, C = e.hiddenUpdates;
    for (a = d & ~a; 0 < a; ) {
      var q = 31 - ze(a), Q = 1 << q;
      _[q] = 0, y[q] = -1;
      var T = C[q];
      if (T !== null)
        for (C[q] = null, q = 0; q < T.length; q++) {
          var B = T[q];
          B !== null && (B.lane &= -536870913);
        }
      a &= ~Q;
    }
    n !== 0 && Rl(e, n, 0), l !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= l & ~(d & ~t));
  }
  function Rl(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - ze(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | a & 261930;
  }
  function Fr(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var n = 31 - ze(a), i = 1 << n;
      i & t | e[n] & t && (e[n] |= t), a &= ~i;
    }
  }
  function Pr(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : us(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function us(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ds(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function eu() {
    var e = ee.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Hm(e.type));
  }
  function tu(e, t) {
    var a = ee.p;
    try {
      return ee.p = e, t();
    } finally {
      ee.p = a;
    }
  }
  var $a = Math.random().toString(36).slice(2), xt = "__reactFiber$" + $a, At = "__reactProps$" + $a, Xn = "__reactContainer$" + $a, fs = "__reactEvents$" + $a, Lg = "__reactListeners$" + $a, Gg = "__reactHandles$" + $a, au = "__reactResources$" + $a, Bi = "__reactMarker$" + $a;
  function ms(e) {
    delete e[xt], delete e[At], delete e[fs], delete e[Lg], delete e[Gg];
  }
  function Qn(e) {
    var t = e[xt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Xn] || a[xt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = zm(e); e !== null; ) {
            if (a = e[xt]) return a;
            e = zm(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function $n(e) {
    if (e = e[xt] || e[Xn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Li(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Jn(e) {
    var t = e[au];
    return t || (t = e[au] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function vt(e) {
    e[Bi] = !0;
  }
  var nu = /* @__PURE__ */ new Set(), iu = {};
  function wn(e, t) {
    In(e, t), In(e + "Capture", t);
  }
  function In(e, t) {
    for (iu[e] = t, e = 0; e < t.length; e++)
      nu.add(t[e]);
  }
  var Hg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), lu = {}, ou = {};
  function Vg(e) {
    return Sa.call(ou, e) ? !0 : Sa.call(lu, e) ? !1 : Hg.test(e) ? ou[e] = !0 : (lu[e] = !0, !1);
  }
  function Dl(e, t, a) {
    if (Vg(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Ul(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function za(e, t, a, n) {
    if (n === null) e.removeAttribute(a);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + n);
    }
  }
  function $t(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function su(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function qg(e, t, a) {
    var n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, l = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(d) {
          a = "" + d, l.call(this, d);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(d) {
          a = "" + d;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function _s(e) {
    if (!e._valueTracker) {
      var t = su(e) ? "checked" : "value";
      e._valueTracker = qg(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function cu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), n = "";
    return e && (n = su(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Bl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Yg = /[\n"\\]/g;
  function Jt(e) {
    return e.replace(
      Yg,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function gs(e, t, a, n, i, l, d, _) {
    e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + $t(t)) : e.value !== "" + $t(t) && (e.value = "" + $t(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? ps(e, d, $t(t)) : a != null ? ps(e, d, $t(a)) : n != null && e.removeAttribute("value"), i == null && l != null && (e.defaultChecked = !!l), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.name = "" + $t(_) : e.removeAttribute("name");
  }
  function ru(e, t, a, n, i, l, d, _) {
    if (l != null && typeof l != "function" && typeof l != "symbol" && typeof l != "boolean" && (e.type = l), t != null || a != null) {
      if (!(l !== "submit" && l !== "reset" || t != null)) {
        _s(e);
        return;
      }
      a = a != null ? "" + $t(a) : "", t = t != null ? "" + $t(t) : a, _ || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? i, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = _ ? e.checked : !!n, e.defaultChecked = !!n, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d), _s(e);
  }
  function ps(e, t, a) {
    t === "number" && Bl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Wn(e, t, a, n) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < a.length; i++)
        t["$" + a[i]] = !0;
      for (a = 0; a < e.length; a++)
        i = t.hasOwnProperty("$" + e[a].value), e[a].selected !== i && (e[a].selected = i), i && n && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + $t(a), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === a) {
          e[i].selected = !0, n && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function uu(e, t, a) {
    if (t != null && (t = "" + $t(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + $t(a) : "";
  }
  function du(e, t, a, n) {
    if (t == null) {
      if (n != null) {
        if (a != null) throw Error(u(92));
        if (Se(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        a = n;
      }
      a == null && (a = ""), t = a;
    }
    a = $t(t), e.defaultValue = a, n = e.textContent, n === a && n !== "" && n !== null && (e.value = n), _s(e);
  }
  function Fn(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function fu(e, t, a) {
    var n = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Zg.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function mu(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(u(62));
    if (e = e.style, a != null) {
      for (var n in a)
        !a.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var i in t)
        n = t[i], t.hasOwnProperty(i) && a[i] !== n && fu(e, i, n);
    } else
      for (var l in t)
        t.hasOwnProperty(l) && fu(e, l, t[l]);
  }
  function hs(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Kg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Xg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ll(e) {
    return Xg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Na() {
  }
  var vs = null;
  function bs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Pn = null, ei = null;
  function _u(e) {
    var t = $n(e);
    if (t && (e = t.stateNode)) {
      var a = e[At] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (gs(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Jt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var n = a[t];
              if (n !== e && n.form === e.form) {
                var i = n[At] || null;
                if (!i) throw Error(u(90));
                gs(
                  n,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              n = a[t], n.form === e.form && cu(n);
          }
          break e;
        case "textarea":
          uu(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Wn(e, !!a.multiple, t, !1);
      }
    }
  }
  var ys = !1;
  function gu(e, t, a) {
    if (ys) return e(t, a);
    ys = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (ys = !1, (Pn !== null || ei !== null) && (Eo(), Pn && (t = Pn, e = ei, ei = Pn = null, _u(t), e)))
        for (t = 0; t < e.length; t++) _u(e[t]);
    }
  }
  function Gi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var n = a[At] || null;
    if (n === null) return null;
    a = n[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        u(231, t, typeof a)
      );
    return a;
  }
  var Ea = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xs = !1;
  if (Ea)
    try {
      var Hi = {};
      Object.defineProperty(Hi, "passive", {
        get: function() {
          xs = !0;
        }
      }), window.addEventListener("test", Hi, Hi), window.removeEventListener("test", Hi, Hi);
    } catch {
      xs = !1;
    }
  var Ja = null, Ss = null, Gl = null;
  function pu() {
    if (Gl) return Gl;
    var e, t = Ss, a = t.length, n, i = "value" in Ja ? Ja.value : Ja.textContent, l = i.length;
    for (e = 0; e < a && t[e] === i[e]; e++) ;
    var d = a - e;
    for (n = 1; n <= d && t[a - n] === i[l - n]; n++) ;
    return Gl = i.slice(e, 1 < n ? 1 - n : void 0);
  }
  function Hl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Vl() {
    return !0;
  }
  function hu() {
    return !1;
  }
  function Ct(e) {
    function t(a, n, i, l, d) {
      this._reactName = a, this._targetInst = i, this.type = n, this.nativeEvent = l, this.target = d, this.currentTarget = null;
      for (var _ in e)
        e.hasOwnProperty(_) && (a = e[_], this[_] = a ? a(l) : l[_]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Vl : hu, this.isPropagationStopped = hu, this;
    }
    return w(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Vl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Vl);
      },
      persist: function() {
      },
      isPersistent: Vl
    }), t;
  }
  var zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ql = Ct(zn), Vi = w({}, zn, { view: 0, detail: 0 }), Qg = Ct(Vi), ws, zs, qi, Yl = w({}, Vi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Es,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== qi && (qi && e.type === "mousemove" ? (ws = e.screenX - qi.screenX, zs = e.screenY - qi.screenY) : zs = ws = 0, qi = e), ws);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : zs;
    }
  }), vu = Ct(Yl), $g = w({}, Yl, { dataTransfer: 0 }), Jg = Ct($g), Ig = w({}, Vi, { relatedTarget: 0 }), Ns = Ct(Ig), Wg = w({}, zn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fg = Ct(Wg), Pg = w({}, zn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), ep = Ct(Pg), tp = w({}, zn, { data: 0 }), bu = Ct(tp), ap = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, np = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ip = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function lp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ip[e]) ? !!t[e] : !1;
  }
  function Es() {
    return lp;
  }
  var op = w({}, Vi, {
    key: function(e) {
      if (e.key) {
        var t = ap[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Hl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? np[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Es,
    charCode: function(e) {
      return e.type === "keypress" ? Hl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Hl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), sp = Ct(op), cp = w({}, Yl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), yu = Ct(cp), rp = w({}, Vi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Es
  }), up = Ct(rp), dp = w({}, zn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), fp = Ct(dp), mp = w({}, Yl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _p = Ct(mp), gp = w({}, zn, {
    newState: 0,
    oldState: 0
  }), pp = Ct(gp), hp = [9, 13, 27, 32], Ms = Ea && "CompositionEvent" in window, Yi = null;
  Ea && "documentMode" in document && (Yi = document.documentMode);
  var vp = Ea && "TextEvent" in window && !Yi, xu = Ea && (!Ms || Yi && 8 < Yi && 11 >= Yi), Su = " ", wu = !1;
  function zu(e, t) {
    switch (e) {
      case "keyup":
        return hp.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Nu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ti = !1;
  function bp(e, t) {
    switch (e) {
      case "compositionend":
        return Nu(t);
      case "keypress":
        return t.which !== 32 ? null : (wu = !0, Su);
      case "textInput":
        return e = t.data, e === Su && wu ? null : e;
      default:
        return null;
    }
  }
  function yp(e, t) {
    if (ti)
      return e === "compositionend" || !Ms && zu(e, t) ? (e = pu(), Gl = Ss = Ja = null, ti = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return xu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var xp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xp[e.type] : t === "textarea";
  }
  function Mu(e, t, a, n) {
    Pn ? ei ? ei.push(n) : ei = [n] : Pn = n, t = Oo(t, "onChange"), 0 < t.length && (a = new ql(
      "onChange",
      "change",
      null,
      a,
      n
    ), e.push({ event: a, listeners: t }));
  }
  var Zi = null, Ki = null;
  function Sp(e) {
    um(e, 0);
  }
  function Zl(e) {
    var t = Li(e);
    if (cu(t)) return e;
  }
  function ku(e, t) {
    if (e === "change") return t;
  }
  var Au = !1;
  if (Ea) {
    var ks;
    if (Ea) {
      var As = "oninput" in document;
      if (!As) {
        var Cu = document.createElement("div");
        Cu.setAttribute("oninput", "return;"), As = typeof Cu.oninput == "function";
      }
      ks = As;
    } else ks = !1;
    Au = ks && (!document.documentMode || 9 < document.documentMode);
  }
  function ju() {
    Zi && (Zi.detachEvent("onpropertychange", Tu), Ki = Zi = null);
  }
  function Tu(e) {
    if (e.propertyName === "value" && Zl(Ki)) {
      var t = [];
      Mu(
        t,
        Ki,
        e,
        bs(e)
      ), gu(Sp, t);
    }
  }
  function wp(e, t, a) {
    e === "focusin" ? (ju(), Zi = t, Ki = a, Zi.attachEvent("onpropertychange", Tu)) : e === "focusout" && ju();
  }
  function zp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Zl(Ki);
  }
  function Np(e, t) {
    if (e === "click") return Zl(t);
  }
  function Ep(e, t) {
    if (e === "input" || e === "change")
      return Zl(t);
  }
  function Mp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Bt = typeof Object.is == "function" ? Object.is : Mp;
  function Xi(e, t) {
    if (Bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), n = Object.keys(t);
    if (a.length !== n.length) return !1;
    for (n = 0; n < a.length; n++) {
      var i = a[n];
      if (!Sa.call(t, i) || !Bt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function Ou(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ru(e, t) {
    var a = Ou(e);
    e = 0;
    for (var n; a; ) {
      if (a.nodeType === 3) {
        if (n = e + a.textContent.length, e <= t && n >= t)
          return { node: a, offset: t - e };
        e = n;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Ou(a);
    }
  }
  function Du(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Du(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Uu(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Bl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Bl(e.document);
    }
    return t;
  }
  function Cs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var kp = Ea && "documentMode" in document && 11 >= document.documentMode, ai = null, js = null, Qi = null, Ts = !1;
  function Bu(e, t, a) {
    var n = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Ts || ai == null || ai !== Bl(n) || (n = ai, "selectionStart" in n && Cs(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), Qi && Xi(Qi, n) || (Qi = n, n = Oo(js, "onSelect"), 0 < n.length && (t = new ql(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: n }), t.target = ai)));
  }
  function Nn(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var ni = {
    animationend: Nn("Animation", "AnimationEnd"),
    animationiteration: Nn("Animation", "AnimationIteration"),
    animationstart: Nn("Animation", "AnimationStart"),
    transitionrun: Nn("Transition", "TransitionRun"),
    transitionstart: Nn("Transition", "TransitionStart"),
    transitioncancel: Nn("Transition", "TransitionCancel"),
    transitionend: Nn("Transition", "TransitionEnd")
  }, Os = {}, Lu = {};
  Ea && (Lu = document.createElement("div").style, "AnimationEvent" in window || (delete ni.animationend.animation, delete ni.animationiteration.animation, delete ni.animationstart.animation), "TransitionEvent" in window || delete ni.transitionend.transition);
  function En(e) {
    if (Os[e]) return Os[e];
    if (!ni[e]) return e;
    var t = ni[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Lu)
        return Os[e] = t[a];
    return e;
  }
  var Gu = En("animationend"), Hu = En("animationiteration"), Vu = En("animationstart"), Ap = En("transitionrun"), Cp = En("transitionstart"), jp = En("transitioncancel"), qu = En("transitionend"), Yu = /* @__PURE__ */ new Map(), Rs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Rs.push("scrollEnd");
  function oa(e, t) {
    Yu.set(e, t), wn(t, [e]);
  }
  var Kl = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, It = [], ii = 0, Ds = 0;
  function Xl() {
    for (var e = ii, t = Ds = ii = 0; t < e; ) {
      var a = It[t];
      It[t++] = null;
      var n = It[t];
      It[t++] = null;
      var i = It[t];
      It[t++] = null;
      var l = It[t];
      if (It[t++] = null, n !== null && i !== null) {
        var d = n.pending;
        d === null ? i.next = i : (i.next = d.next, d.next = i), n.pending = i;
      }
      l !== 0 && Zu(a, i, l);
    }
  }
  function Ql(e, t, a, n) {
    It[ii++] = e, It[ii++] = t, It[ii++] = a, It[ii++] = n, Ds |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function Us(e, t, a, n) {
    return Ql(e, t, a, n), $l(e);
  }
  function Mn(e, t) {
    return Ql(e, null, null, t), $l(e);
  }
  function Zu(e, t, a) {
    e.lanes |= a;
    var n = e.alternate;
    n !== null && (n.lanes |= a);
    for (var i = !1, l = e.return; l !== null; )
      l.childLanes |= a, n = l.alternate, n !== null && (n.childLanes |= a), l.tag === 22 && (e = l.stateNode, e === null || e._visibility & 1 || (i = !0)), e = l, l = l.return;
    return e.tag === 3 ? (l = e.stateNode, i && t !== null && (i = 31 - ze(a), e = l.hiddenUpdates, n = e[i], n === null ? e[i] = [t] : n.push(t), t.lane = a | 536870912), l) : null;
  }
  function $l(e) {
    if (50 < gl)
      throw gl = 0, Kc = null, Error(u(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var li = {};
  function Tp(e, t, a, n) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Lt(e, t, a, n) {
    return new Tp(e, t, a, n);
  }
  function Bs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ma(e, t) {
    var a = e.alternate;
    return a === null ? (a = Lt(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Ku(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Jl(e, t, a, n, i, l) {
    var d = 0;
    if (n = e, typeof e == "function") Bs(e) && (d = 1);
    else if (typeof e == "string")
      d = Bh(
        e,
        a,
        ne.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case le:
          return e = Lt(31, a, t, i), e.elementType = le, e.lanes = l, e;
        case D:
          return kn(a.children, i, l, t);
        case K:
          d = 8, i |= 24;
          break;
        case U:
          return e = Lt(12, a, t, i | 2), e.elementType = U, e.lanes = l, e;
        case ae:
          return e = Lt(13, a, t, i), e.elementType = ae, e.lanes = l, e;
        case V:
          return e = Lt(19, a, t, i), e.elementType = V, e.lanes = l, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Z:
                d = 10;
                break e;
              case $:
                d = 9;
                break e;
              case L:
                d = 11;
                break e;
              case Y:
                d = 14;
                break e;
              case J:
                d = 16, n = null;
                break e;
            }
          d = 29, a = Error(
            u(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = Lt(d, a, t, i), t.elementType = e, t.type = n, t.lanes = l, t;
  }
  function kn(e, t, a, n) {
    return e = Lt(7, e, n, t), e.lanes = a, e;
  }
  function Ls(e, t, a) {
    return e = Lt(6, e, null, t), e.lanes = a, e;
  }
  function Xu(e) {
    var t = Lt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Gs(e, t, a) {
    return t = Lt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Qu = /* @__PURE__ */ new WeakMap();
  function Wt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Qu.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: xa(t)
      }, Qu.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: xa(t)
    };
  }
  var oi = [], si = 0, Il = null, $i = 0, Ft = [], Pt = 0, Ia = null, ma = 1, _a = "";
  function ka(e, t) {
    oi[si++] = $i, oi[si++] = Il, Il = e, $i = t;
  }
  function $u(e, t, a) {
    Ft[Pt++] = ma, Ft[Pt++] = _a, Ft[Pt++] = Ia, Ia = e;
    var n = ma;
    e = _a;
    var i = 32 - ze(n) - 1;
    n &= ~(1 << i), a += 1;
    var l = 32 - ze(t) + i;
    if (30 < l) {
      var d = i - i % 5;
      l = (n & (1 << d) - 1).toString(32), n >>= d, i -= d, ma = 1 << 32 - ze(t) + i | a << i | n, _a = l + e;
    } else
      ma = 1 << l | a << i | n, _a = e;
  }
  function Hs(e) {
    e.return !== null && (ka(e, 1), $u(e, 1, 0));
  }
  function Vs(e) {
    for (; e === Il; )
      Il = oi[--si], oi[si] = null, $i = oi[--si], oi[si] = null;
    for (; e === Ia; )
      Ia = Ft[--Pt], Ft[Pt] = null, _a = Ft[--Pt], Ft[Pt] = null, ma = Ft[--Pt], Ft[Pt] = null;
  }
  function Ju(e, t) {
    Ft[Pt++] = ma, Ft[Pt++] = _a, Ft[Pt++] = Ia, ma = t.id, _a = t.overflow, Ia = e;
  }
  var St = null, at = null, He = !1, Wa = null, ea = !1, qs = Error(u(519));
  function Fa(e) {
    var t = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ji(Wt(t, e)), qs;
  }
  function Iu(e) {
    var t = e.stateNode, a = e.type, n = e.memoizedProps;
    switch (t[xt] = e, t[At] = n, a) {
      case "dialog":
        Be("cancel", t), Be("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Be("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < hl.length; a++)
          Be(hl[a], t);
        break;
      case "source":
        Be("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Be("error", t), Be("load", t);
        break;
      case "details":
        Be("toggle", t);
        break;
      case "input":
        Be("invalid", t), ru(
          t,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        Be("invalid", t);
        break;
      case "textarea":
        Be("invalid", t), du(t, n.value, n.defaultValue, n.children);
    }
    a = n.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || n.suppressHydrationWarning === !0 || _m(t.textContent, a) ? (n.popover != null && (Be("beforetoggle", t), Be("toggle", t)), n.onScroll != null && Be("scroll", t), n.onScrollEnd != null && Be("scrollend", t), n.onClick != null && (t.onclick = Na), t = !0) : t = !1, t || Fa(e, !0);
  }
  function Wu(e) {
    for (St = e.return; St; )
      switch (St.tag) {
        case 5:
        case 31:
        case 13:
          ea = !1;
          return;
        case 27:
        case 3:
          ea = !0;
          return;
        default:
          St = St.return;
      }
  }
  function ci(e) {
    if (e !== St) return !1;
    if (!He) return Wu(e), He = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || or(e.type, e.memoizedProps)), a = !a), a && at && Fa(e), Wu(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      at = wm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      at = wm(e);
    } else
      t === 27 ? (t = at, mn(e.type) ? (e = dr, dr = null, at = e) : at = t) : at = St ? aa(e.stateNode.nextSibling) : null;
    return !0;
  }
  function An() {
    at = St = null, He = !1;
  }
  function Ys() {
    var e = Wa;
    return e !== null && (Rt === null ? Rt = e : Rt.push.apply(
      Rt,
      e
    ), Wa = null), e;
  }
  function Ji(e) {
    Wa === null ? Wa = [e] : Wa.push(e);
  }
  var Zs = x(null), Cn = null, Aa = null;
  function Pa(e, t, a) {
    P(Zs, t._currentValue), t._currentValue = a;
  }
  function Ca(e) {
    e._currentValue = Zs.current, H(Zs);
  }
  function Ks(e, t, a) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function Xs(e, t, a, n) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var l = i.dependencies;
      if (l !== null) {
        var d = i.child;
        l = l.firstContext;
        e: for (; l !== null; ) {
          var _ = l;
          l = i;
          for (var y = 0; y < t.length; y++)
            if (_.context === t[y]) {
              l.lanes |= a, _ = l.alternate, _ !== null && (_.lanes |= a), Ks(
                l.return,
                a,
                e
              ), n || (d = null);
              break e;
            }
          l = _.next;
        }
      } else if (i.tag === 18) {
        if (d = i.return, d === null) throw Error(u(341));
        d.lanes |= a, l = d.alternate, l !== null && (l.lanes |= a), Ks(d, a, e), d = null;
      } else d = i.child;
      if (d !== null) d.return = i;
      else
        for (d = i; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (i = d.sibling, i !== null) {
            i.return = d.return, d = i;
            break;
          }
          d = d.return;
        }
      i = d;
    }
  }
  function ri(e, t, a, n) {
    e = null;
    for (var i = t, l = !1; i !== null; ) {
      if (!l) {
        if ((i.flags & 524288) !== 0) l = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var d = i.alternate;
        if (d === null) throw Error(u(387));
        if (d = d.memoizedProps, d !== null) {
          var _ = i.type;
          Bt(i.pendingProps.value, d.value) || (e !== null ? e.push(_) : e = [_]);
        }
      } else if (i === ye.current) {
        if (d = i.alternate, d === null) throw Error(u(387));
        d.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(Sl) : e = [Sl]);
      }
      i = i.return;
    }
    e !== null && Xs(
      t,
      e,
      a,
      n
    ), t.flags |= 262144;
  }
  function Wl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Bt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function jn(e) {
    Cn = e, Aa = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function wt(e) {
    return Fu(Cn, e);
  }
  function Fl(e, t) {
    return Cn === null && jn(e), Fu(e, t);
  }
  function Fu(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Aa === null) {
      if (e === null) throw Error(u(308));
      Aa = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Aa = Aa.next = t;
    return a;
  }
  var Op = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, n) {
        e.push(n);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, Rp = o.unstable_scheduleCallback, Dp = o.unstable_NormalPriority, ft = {
    $$typeof: Z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Qs() {
    return {
      controller: new Op(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ii(e) {
    e.refCount--, e.refCount === 0 && Rp(Dp, function() {
      e.controller.abort();
    });
  }
  var Wi = null, $s = 0, ui = 0, di = null;
  function Up(e, t) {
    if (Wi === null) {
      var a = Wi = [];
      $s = 0, ui = Wc(), di = {
        status: "pending",
        value: void 0,
        then: function(n) {
          a.push(n);
        }
      };
    }
    return $s++, t.then(Pu, Pu), t;
  }
  function Pu() {
    if (--$s === 0 && Wi !== null) {
      di !== null && (di.status = "fulfilled");
      var e = Wi;
      Wi = null, ui = 0, di = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Bp(e, t) {
    var a = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(i) {
        a.push(i);
      }
    };
    return e.then(
      function() {
        n.status = "fulfilled", n.value = t;
        for (var i = 0; i < a.length; i++) (0, a[i])(t);
      },
      function(i) {
        for (n.status = "rejected", n.reason = i, i = 0; i < a.length; i++)
          (0, a[i])(void 0);
      }
    ), n;
  }
  var ed = R.S;
  R.S = function(e, t) {
    Lf = et(), typeof t == "object" && t !== null && typeof t.then == "function" && Up(e, t), ed !== null && ed(e, t);
  };
  var Tn = x(null);
  function Js() {
    var e = Tn.current;
    return e !== null ? e : Fe.pooledCache;
  }
  function Pl(e, t) {
    t === null ? P(Tn, Tn.current) : P(Tn, t.pool);
  }
  function td() {
    var e = Js();
    return e === null ? null : { parent: ft._currentValue, pool: e };
  }
  var fi = Error(u(460)), Is = Error(u(474)), eo = Error(u(542)), to = { then: function() {
  } };
  function ad(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function nd(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Na, Na), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, ld(e), e;
      default:
        if (typeof t.status == "string") t.then(Na, Na);
        else {
          if (e = Fe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(u(482));
          e = t, e.status = "pending", e.then(
            function(n) {
              if (t.status === "pending") {
                var i = t;
                i.status = "fulfilled", i.value = n;
              }
            },
            function(n) {
              if (t.status === "pending") {
                var i = t;
                i.status = "rejected", i.reason = n;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, ld(e), e;
        }
        throw Rn = t, fi;
    }
  }
  function On(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Rn = a, fi) : a;
    }
  }
  var Rn = null;
  function id() {
    if (Rn === null) throw Error(u(459));
    var e = Rn;
    return Rn = null, e;
  }
  function ld(e) {
    if (e === fi || e === eo)
      throw Error(u(483));
  }
  var mi = null, Fi = 0;
  function ao(e) {
    var t = Fi;
    return Fi += 1, mi === null && (mi = []), nd(mi, e, t);
  }
  function Pi(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function no(e, t) {
    throw t.$$typeof === k ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(
      u(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function od(e) {
    function t(E, z) {
      if (e) {
        var A = E.deletions;
        A === null ? (E.deletions = [z], E.flags |= 16) : A.push(z);
      }
    }
    function a(E, z) {
      if (!e) return null;
      for (; z !== null; )
        t(E, z), z = z.sibling;
      return null;
    }
    function n(E) {
      for (var z = /* @__PURE__ */ new Map(); E !== null; )
        E.key !== null ? z.set(E.key, E) : z.set(E.index, E), E = E.sibling;
      return z;
    }
    function i(E, z) {
      return E = Ma(E, z), E.index = 0, E.sibling = null, E;
    }
    function l(E, z, A) {
      return E.index = A, e ? (A = E.alternate, A !== null ? (A = A.index, A < z ? (E.flags |= 67108866, z) : A) : (E.flags |= 67108866, z)) : (E.flags |= 1048576, z);
    }
    function d(E) {
      return e && E.alternate === null && (E.flags |= 67108866), E;
    }
    function _(E, z, A, X) {
      return z === null || z.tag !== 6 ? (z = Ls(A, E.mode, X), z.return = E, z) : (z = i(z, A), z.return = E, z);
    }
    function y(E, z, A, X) {
      var he = A.type;
      return he === D ? q(
        E,
        z,
        A.props.children,
        X,
        A.key
      ) : z !== null && (z.elementType === he || typeof he == "object" && he !== null && he.$$typeof === J && On(he) === z.type) ? (z = i(z, A.props), Pi(z, A), z.return = E, z) : (z = Jl(
        A.type,
        A.key,
        A.props,
        null,
        E.mode,
        X
      ), Pi(z, A), z.return = E, z);
    }
    function C(E, z, A, X) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== A.containerInfo || z.stateNode.implementation !== A.implementation ? (z = Gs(A, E.mode, X), z.return = E, z) : (z = i(z, A.children || []), z.return = E, z);
    }
    function q(E, z, A, X, he) {
      return z === null || z.tag !== 7 ? (z = kn(
        A,
        E.mode,
        X,
        he
      ), z.return = E, z) : (z = i(z, A), z.return = E, z);
    }
    function Q(E, z, A) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Ls(
          "" + z,
          E.mode,
          A
        ), z.return = E, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case N:
            return A = Jl(
              z.type,
              z.key,
              z.props,
              null,
              E.mode,
              A
            ), Pi(A, z), A.return = E, A;
          case S:
            return z = Gs(
              z,
              E.mode,
              A
            ), z.return = E, z;
          case J:
            return z = On(z), Q(E, z, A);
        }
        if (Se(z) || ge(z))
          return z = kn(
            z,
            E.mode,
            A,
            null
          ), z.return = E, z;
        if (typeof z.then == "function")
          return Q(E, ao(z), A);
        if (z.$$typeof === Z)
          return Q(
            E,
            Fl(E, z),
            A
          );
        no(E, z);
      }
      return null;
    }
    function T(E, z, A, X) {
      var he = z !== null ? z.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return he !== null ? null : _(E, z, "" + A, X);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case N:
            return A.key === he ? y(E, z, A, X) : null;
          case S:
            return A.key === he ? C(E, z, A, X) : null;
          case J:
            return A = On(A), T(E, z, A, X);
        }
        if (Se(A) || ge(A))
          return he !== null ? null : q(E, z, A, X, null);
        if (typeof A.then == "function")
          return T(
            E,
            z,
            ao(A),
            X
          );
        if (A.$$typeof === Z)
          return T(
            E,
            z,
            Fl(E, A),
            X
          );
        no(E, A);
      }
      return null;
    }
    function B(E, z, A, X, he) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return E = E.get(A) || null, _(z, E, "" + X, he);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case N:
            return E = E.get(
              X.key === null ? A : X.key
            ) || null, y(z, E, X, he);
          case S:
            return E = E.get(
              X.key === null ? A : X.key
            ) || null, C(z, E, X, he);
          case J:
            return X = On(X), B(
              E,
              z,
              A,
              X,
              he
            );
        }
        if (Se(X) || ge(X))
          return E = E.get(A) || null, q(z, E, X, he, null);
        if (typeof X.then == "function")
          return B(
            E,
            z,
            A,
            ao(X),
            he
          );
        if (X.$$typeof === Z)
          return B(
            E,
            z,
            A,
            Fl(z, X),
            he
          );
        no(z, X);
      }
      return null;
    }
    function re(E, z, A, X) {
      for (var he = null, Ye = null, fe = z, Re = z = 0, Ge = null; fe !== null && Re < A.length; Re++) {
        fe.index > Re ? (Ge = fe, fe = null) : Ge = fe.sibling;
        var Ze = T(
          E,
          fe,
          A[Re],
          X
        );
        if (Ze === null) {
          fe === null && (fe = Ge);
          break;
        }
        e && fe && Ze.alternate === null && t(E, fe), z = l(Ze, z, Re), Ye === null ? he = Ze : Ye.sibling = Ze, Ye = Ze, fe = Ge;
      }
      if (Re === A.length)
        return a(E, fe), He && ka(E, Re), he;
      if (fe === null) {
        for (; Re < A.length; Re++)
          fe = Q(E, A[Re], X), fe !== null && (z = l(
            fe,
            z,
            Re
          ), Ye === null ? he = fe : Ye.sibling = fe, Ye = fe);
        return He && ka(E, Re), he;
      }
      for (fe = n(fe); Re < A.length; Re++)
        Ge = B(
          fe,
          E,
          Re,
          A[Re],
          X
        ), Ge !== null && (e && Ge.alternate !== null && fe.delete(
          Ge.key === null ? Re : Ge.key
        ), z = l(
          Ge,
          z,
          Re
        ), Ye === null ? he = Ge : Ye.sibling = Ge, Ye = Ge);
      return e && fe.forEach(function(vn) {
        return t(E, vn);
      }), He && ka(E, Re), he;
    }
    function we(E, z, A, X) {
      if (A == null) throw Error(u(151));
      for (var he = null, Ye = null, fe = z, Re = z = 0, Ge = null, Ze = A.next(); fe !== null && !Ze.done; Re++, Ze = A.next()) {
        fe.index > Re ? (Ge = fe, fe = null) : Ge = fe.sibling;
        var vn = T(E, fe, Ze.value, X);
        if (vn === null) {
          fe === null && (fe = Ge);
          break;
        }
        e && fe && vn.alternate === null && t(E, fe), z = l(vn, z, Re), Ye === null ? he = vn : Ye.sibling = vn, Ye = vn, fe = Ge;
      }
      if (Ze.done)
        return a(E, fe), He && ka(E, Re), he;
      if (fe === null) {
        for (; !Ze.done; Re++, Ze = A.next())
          Ze = Q(E, Ze.value, X), Ze !== null && (z = l(Ze, z, Re), Ye === null ? he = Ze : Ye.sibling = Ze, Ye = Ze);
        return He && ka(E, Re), he;
      }
      for (fe = n(fe); !Ze.done; Re++, Ze = A.next())
        Ze = B(fe, E, Re, Ze.value, X), Ze !== null && (e && Ze.alternate !== null && fe.delete(Ze.key === null ? Re : Ze.key), z = l(Ze, z, Re), Ye === null ? he = Ze : Ye.sibling = Ze, Ye = Ze);
      return e && fe.forEach(function($h) {
        return t(E, $h);
      }), He && ka(E, Re), he;
    }
    function We(E, z, A, X) {
      if (typeof A == "object" && A !== null && A.type === D && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case N:
            e: {
              for (var he = A.key; z !== null; ) {
                if (z.key === he) {
                  if (he = A.type, he === D) {
                    if (z.tag === 7) {
                      a(
                        E,
                        z.sibling
                      ), X = i(
                        z,
                        A.props.children
                      ), X.return = E, E = X;
                      break e;
                    }
                  } else if (z.elementType === he || typeof he == "object" && he !== null && he.$$typeof === J && On(he) === z.type) {
                    a(
                      E,
                      z.sibling
                    ), X = i(z, A.props), Pi(X, A), X.return = E, E = X;
                    break e;
                  }
                  a(E, z);
                  break;
                } else t(E, z);
                z = z.sibling;
              }
              A.type === D ? (X = kn(
                A.props.children,
                E.mode,
                X,
                A.key
              ), X.return = E, E = X) : (X = Jl(
                A.type,
                A.key,
                A.props,
                null,
                E.mode,
                X
              ), Pi(X, A), X.return = E, E = X);
            }
            return d(E);
          case S:
            e: {
              for (he = A.key; z !== null; ) {
                if (z.key === he)
                  if (z.tag === 4 && z.stateNode.containerInfo === A.containerInfo && z.stateNode.implementation === A.implementation) {
                    a(
                      E,
                      z.sibling
                    ), X = i(z, A.children || []), X.return = E, E = X;
                    break e;
                  } else {
                    a(E, z);
                    break;
                  }
                else t(E, z);
                z = z.sibling;
              }
              X = Gs(A, E.mode, X), X.return = E, E = X;
            }
            return d(E);
          case J:
            return A = On(A), We(
              E,
              z,
              A,
              X
            );
        }
        if (Se(A))
          return re(
            E,
            z,
            A,
            X
          );
        if (ge(A)) {
          if (he = ge(A), typeof he != "function") throw Error(u(150));
          return A = he.call(A), we(
            E,
            z,
            A,
            X
          );
        }
        if (typeof A.then == "function")
          return We(
            E,
            z,
            ao(A),
            X
          );
        if (A.$$typeof === Z)
          return We(
            E,
            z,
            Fl(E, A),
            X
          );
        no(E, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, z !== null && z.tag === 6 ? (a(E, z.sibling), X = i(z, A), X.return = E, E = X) : (a(E, z), X = Ls(A, E.mode, X), X.return = E, E = X), d(E)) : a(E, z);
    }
    return function(E, z, A, X) {
      try {
        Fi = 0;
        var he = We(
          E,
          z,
          A,
          X
        );
        return mi = null, he;
      } catch (fe) {
        if (fe === fi || fe === eo) throw fe;
        var Ye = Lt(29, fe, null, E.mode);
        return Ye.lanes = X, Ye.return = E, Ye;
      }
    };
  }
  var Dn = od(!0), sd = od(!1), en = !1;
  function Ws(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Fs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function tn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function an(e, t, a) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Xe & 2) !== 0) {
      var i = n.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, t = $l(e), Zu(e, null, a), t;
    }
    return Ql(e, n, t, a), $l(e);
  }
  function el(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, a |= n, t.lanes = a, Fr(e, a);
    }
  }
  function Ps(e, t) {
    var a = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, a === n)) {
      var i = null, l = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var d = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          l === null ? i = l = d : l = l.next = d, a = a.next;
        } while (a !== null);
        l === null ? i = l = t : l = l.next = t;
      } else i = l = t;
      a = {
        baseState: n.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: l,
        shared: n.shared,
        callbacks: n.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var ec = !1;
  function tl() {
    if (ec) {
      var e = di;
      if (e !== null) throw e;
    }
  }
  function al(e, t, a, n) {
    ec = !1;
    var i = e.updateQueue;
    en = !1;
    var l = i.firstBaseUpdate, d = i.lastBaseUpdate, _ = i.shared.pending;
    if (_ !== null) {
      i.shared.pending = null;
      var y = _, C = y.next;
      y.next = null, d === null ? l = C : d.next = C, d = y;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, _ = q.lastBaseUpdate, _ !== d && (_ === null ? q.firstBaseUpdate = C : _.next = C, q.lastBaseUpdate = y));
    }
    if (l !== null) {
      var Q = i.baseState;
      d = 0, q = C = y = null, _ = l;
      do {
        var T = _.lane & -536870913, B = T !== _.lane;
        if (B ? (Le & T) === T : (n & T) === T) {
          T !== 0 && T === ui && (ec = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: null,
            next: null
          });
          e: {
            var re = e, we = _;
            T = t;
            var We = a;
            switch (we.tag) {
              case 1:
                if (re = we.payload, typeof re == "function") {
                  Q = re.call(We, Q, T);
                  break e;
                }
                Q = re;
                break e;
              case 3:
                re.flags = re.flags & -65537 | 128;
              case 0:
                if (re = we.payload, T = typeof re == "function" ? re.call(We, Q, T) : re, T == null) break e;
                Q = w({}, Q, T);
                break e;
              case 2:
                en = !0;
            }
          }
          T = _.callback, T !== null && (e.flags |= 64, B && (e.flags |= 8192), B = i.callbacks, B === null ? i.callbacks = [T] : B.push(T));
        } else
          B = {
            lane: T,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          }, q === null ? (C = q = B, y = Q) : q = q.next = B, d |= T;
        if (_ = _.next, _ === null) {
          if (_ = i.shared.pending, _ === null)
            break;
          B = _, _ = B.next, B.next = null, i.lastBaseUpdate = B, i.shared.pending = null;
        }
      } while (!0);
      q === null && (y = Q), i.baseState = y, i.firstBaseUpdate = C, i.lastBaseUpdate = q, l === null && (i.shared.lanes = 0), cn |= d, e.lanes = d, e.memoizedState = Q;
    }
  }
  function cd(e, t) {
    if (typeof e != "function")
      throw Error(u(191, e));
    e.call(t);
  }
  function rd(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        cd(a[e], t);
  }
  var _i = x(null), io = x(0);
  function ud(e, t) {
    e = Ga, P(io, e), P(_i, t), Ga = e | t.baseLanes;
  }
  function tc() {
    P(io, Ga), P(_i, _i.current);
  }
  function ac() {
    Ga = io.current, H(_i), H(io);
  }
  var Gt = x(null), ta = null;
  function nn(e) {
    var t = e.alternate;
    P(rt, rt.current & 1), P(Gt, e), ta === null && (t === null || _i.current !== null || t.memoizedState !== null) && (ta = e);
  }
  function nc(e) {
    P(rt, rt.current), P(Gt, e), ta === null && (ta = e);
  }
  function dd(e) {
    e.tag === 22 ? (P(rt, rt.current), P(Gt, e), ta === null && (ta = e)) : ln();
  }
  function ln() {
    P(rt, rt.current), P(Gt, Gt.current);
  }
  function Ht(e) {
    H(Gt), ta === e && (ta = null), H(rt);
  }
  var rt = x(0);
  function lo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || rr(a) || ur(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ja = 0, je = null, Je = null, mt = null, oo = !1, gi = !1, Un = !1, so = 0, nl = 0, pi = null, Lp = 0;
  function st() {
    throw Error(u(321));
  }
  function ic(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Bt(e[a], t[a])) return !1;
    return !0;
  }
  function lc(e, t, a, n, i, l) {
    return ja = l, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = e === null || e.memoizedState === null ? $d : yc, Un = !1, l = a(n, i), Un = !1, gi && (l = md(
      t,
      a,
      n,
      i
    )), fd(e), l;
  }
  function fd(e) {
    R.H = ol;
    var t = Je !== null && Je.next !== null;
    if (ja = 0, mt = Je = je = null, oo = !1, nl = 0, pi = null, t) throw Error(u(300));
    e === null || _t || (e = e.dependencies, e !== null && Wl(e) && (_t = !0));
  }
  function md(e, t, a, n) {
    je = e;
    var i = 0;
    do {
      if (gi && (pi = null), nl = 0, gi = !1, 25 <= i) throw Error(u(301));
      if (i += 1, mt = Je = null, e.updateQueue != null) {
        var l = e.updateQueue;
        l.lastEffect = null, l.events = null, l.stores = null, l.memoCache != null && (l.memoCache.index = 0);
      }
      R.H = Jd, l = t(a, n);
    } while (gi);
    return l;
  }
  function Gp() {
    var e = R.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? il(t) : t, e = e.useState()[0], (Je !== null ? Je.memoizedState : null) !== e && (je.flags |= 1024), t;
  }
  function oc() {
    var e = so !== 0;
    return so = 0, e;
  }
  function sc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function cc(e) {
    if (oo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      oo = !1;
    }
    ja = 0, mt = Je = je = null, gi = !1, nl = so = 0, pi = null;
  }
  function Mt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return mt === null ? je.memoizedState = mt = e : mt = mt.next = e, mt;
  }
  function ut() {
    if (Je === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = mt === null ? je.memoizedState : mt.next;
    if (t !== null)
      mt = t, Je = e;
    else {
      if (e === null)
        throw je.alternate === null ? Error(u(467)) : Error(u(310));
      Je = e, e = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null
      }, mt === null ? je.memoizedState = mt = e : mt = mt.next = e;
    }
    return mt;
  }
  function co() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function il(e) {
    var t = nl;
    return nl += 1, pi === null && (pi = []), e = nd(pi, e, t), t = je, (mt === null ? t.memoizedState : mt.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? $d : yc), e;
  }
  function ro(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return il(e);
      if (e.$$typeof === Z) return wt(e);
    }
    throw Error(u(438, String(e)));
  }
  function rc(e) {
    var t = null, a = je.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var n = je.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = co(), je.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), n = 0; n < e; n++)
        a[n] = I;
    return t.index++, a;
  }
  function Ta(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function uo(e) {
    var t = ut();
    return uc(t, Je, e);
  }
  function uc(e, t, a) {
    var n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = a;
    var i = e.baseQueue, l = n.pending;
    if (l !== null) {
      if (i !== null) {
        var d = i.next;
        i.next = l.next, l.next = d;
      }
      t.baseQueue = i = l, n.pending = null;
    }
    if (l = e.baseState, i === null) e.memoizedState = l;
    else {
      t = i.next;
      var _ = d = null, y = null, C = t, q = !1;
      do {
        var Q = C.lane & -536870913;
        if (Q !== C.lane ? (Le & Q) === Q : (ja & Q) === Q) {
          var T = C.revertLane;
          if (T === 0)
            y !== null && (y = y.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), Q === ui && (q = !0);
          else if ((ja & T) === T) {
            C = C.next, T === ui && (q = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, y === null ? (_ = y = Q, d = l) : y = y.next = Q, je.lanes |= T, cn |= T;
          Q = C.action, Un && a(l, Q), l = C.hasEagerState ? C.eagerState : a(l, Q);
        } else
          T = {
            lane: Q,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, y === null ? (_ = y = T, d = l) : y = y.next = T, je.lanes |= Q, cn |= Q;
        C = C.next;
      } while (C !== null && C !== t);
      if (y === null ? d = l : y.next = _, !Bt(l, e.memoizedState) && (_t = !0, q && (a = di, a !== null)))
        throw a;
      e.memoizedState = l, e.baseState = d, e.baseQueue = y, n.lastRenderedState = l;
    }
    return i === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function dc(e) {
    var t = ut(), a = t.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = e;
    var n = a.dispatch, i = a.pending, l = t.memoizedState;
    if (i !== null) {
      a.pending = null;
      var d = i = i.next;
      do
        l = e(l, d.action), d = d.next;
      while (d !== i);
      Bt(l, t.memoizedState) || (_t = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), a.lastRenderedState = l;
    }
    return [l, n];
  }
  function _d(e, t, a) {
    var n = je, i = ut(), l = He;
    if (l) {
      if (a === void 0) throw Error(u(407));
      a = a();
    } else a = t();
    var d = !Bt(
      (Je || i).memoizedState,
      a
    );
    if (d && (i.memoizedState = a, _t = !0), i = i.queue, _c(hd.bind(null, n, i, e), [
      e
    ]), i.getSnapshot !== t || d || mt !== null && mt.memoizedState.tag & 1) {
      if (n.flags |= 2048, hi(
        9,
        { destroy: void 0 },
        pd.bind(
          null,
          n,
          i,
          a,
          t
        ),
        null
      ), Fe === null) throw Error(u(349));
      l || (ja & 127) !== 0 || gd(n, t, a);
    }
    return a;
  }
  function gd(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = je.updateQueue, t === null ? (t = co(), je.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function pd(e, t, a, n) {
    t.value = a, t.getSnapshot = n, vd(t) && bd(e);
  }
  function hd(e, t, a) {
    return a(function() {
      vd(t) && bd(e);
    });
  }
  function vd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Bt(e, a);
    } catch {
      return !0;
    }
  }
  function bd(e) {
    var t = Mn(e, 2);
    t !== null && Dt(t, e, 2);
  }
  function fc(e) {
    var t = Mt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Un) {
        ue(!0);
        try {
          a();
        } finally {
          ue(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ta,
      lastRenderedState: e
    }, t;
  }
  function yd(e, t, a, n) {
    return e.baseState = a, uc(
      e,
      Je,
      typeof n == "function" ? n : Ta
    );
  }
  function Hp(e, t, a, n, i) {
    if (_o(e)) throw Error(u(485));
    if (e = t.action, e !== null) {
      var l = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(d) {
          l.listeners.push(d);
        }
      };
      R.T !== null ? a(!0) : l.isTransition = !1, n(l), a = t.pending, a === null ? (l.next = t.pending = l, xd(t, l)) : (l.next = a.next, t.pending = a.next = l);
    }
  }
  function xd(e, t) {
    var a = t.action, n = t.payload, i = e.state;
    if (t.isTransition) {
      var l = R.T, d = {};
      R.T = d;
      try {
        var _ = a(i, n), y = R.S;
        y !== null && y(d, _), Sd(e, t, _);
      } catch (C) {
        mc(e, t, C);
      } finally {
        l !== null && d.types !== null && (l.types = d.types), R.T = l;
      }
    } else
      try {
        l = a(i, n), Sd(e, t, l);
      } catch (C) {
        mc(e, t, C);
      }
  }
  function Sd(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(n) {
        wd(e, t, n);
      },
      function(n) {
        return mc(e, t, n);
      }
    ) : wd(e, t, a);
  }
  function wd(e, t, a) {
    t.status = "fulfilled", t.value = a, zd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, xd(e, a)));
  }
  function mc(e, t, a) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = a, zd(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function zd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Nd(e, t) {
    return t;
  }
  function Ed(e, t) {
    if (He) {
      var a = Fe.formState;
      if (a !== null) {
        e: {
          var n = je;
          if (He) {
            if (at) {
              t: {
                for (var i = at, l = ea; i.nodeType !== 8; ) {
                  if (!l) {
                    i = null;
                    break t;
                  }
                  if (i = aa(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                l = i.data, i = l === "F!" || l === "F" ? i : null;
              }
              if (i) {
                at = aa(
                  i.nextSibling
                ), n = i.data === "F!";
                break e;
              }
            }
            Fa(n);
          }
          n = !1;
        }
        n && (t = a[0]);
      }
    }
    return a = Mt(), a.memoizedState = a.baseState = t, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nd,
      lastRenderedState: t
    }, a.queue = n, a = Kd.bind(
      null,
      je,
      n
    ), n.dispatch = a, n = fc(!1), l = bc.bind(
      null,
      je,
      !1,
      n.queue
    ), n = Mt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = i, a = Hp.bind(
      null,
      je,
      i,
      l,
      a
    ), i.dispatch = a, n.memoizedState = e, [t, a, !1];
  }
  function Md(e) {
    var t = ut();
    return kd(t, Je, e);
  }
  function kd(e, t, a) {
    if (t = uc(
      e,
      t,
      Nd
    )[0], e = uo(Ta)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = il(t);
      } catch (d) {
        throw d === fi ? eo : d;
      }
    else n = t;
    t = ut();
    var i = t.queue, l = i.dispatch;
    return a !== t.memoizedState && (je.flags |= 2048, hi(
      9,
      { destroy: void 0 },
      Vp.bind(null, i, a),
      null
    )), [n, l, e];
  }
  function Vp(e, t) {
    e.action = t;
  }
  function Ad(e) {
    var t = ut(), a = Je;
    if (a !== null)
      return kd(t, a, e);
    ut(), t = t.memoizedState, a = ut();
    var n = a.queue.dispatch;
    return a.memoizedState = e, [t, n, !1];
  }
  function hi(e, t, a, n) {
    return e = { tag: e, create: a, deps: n, inst: t, next: null }, t = je.updateQueue, t === null && (t = co(), je.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (n = a.next, a.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Cd() {
    return ut().memoizedState;
  }
  function fo(e, t, a, n) {
    var i = Mt();
    je.flags |= e, i.memoizedState = hi(
      1 | t,
      { destroy: void 0 },
      a,
      n === void 0 ? null : n
    );
  }
  function mo(e, t, a, n) {
    var i = ut();
    n = n === void 0 ? null : n;
    var l = i.memoizedState.inst;
    Je !== null && n !== null && ic(n, Je.memoizedState.deps) ? i.memoizedState = hi(t, l, a, n) : (je.flags |= e, i.memoizedState = hi(
      1 | t,
      l,
      a,
      n
    ));
  }
  function jd(e, t) {
    fo(8390656, 8, e, t);
  }
  function _c(e, t) {
    mo(2048, 8, e, t);
  }
  function qp(e) {
    je.flags |= 4;
    var t = je.updateQueue;
    if (t === null)
      t = co(), je.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Td(e) {
    var t = ut().memoizedState;
    return qp({ ref: t, nextImpl: e }), function() {
      if ((Xe & 2) !== 0) throw Error(u(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Od(e, t) {
    return mo(4, 2, e, t);
  }
  function Rd(e, t) {
    return mo(4, 4, e, t);
  }
  function Dd(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Ud(e, t, a) {
    a = a != null ? a.concat([e]) : null, mo(4, 4, Dd.bind(null, t, e), a);
  }
  function gc() {
  }
  function Bd(e, t) {
    var a = ut();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    return t !== null && ic(t, n[1]) ? n[0] : (a.memoizedState = [e, t], e);
  }
  function Ld(e, t) {
    var a = ut();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    if (t !== null && ic(t, n[1]))
      return n[0];
    if (n = e(), Un) {
      ue(!0);
      try {
        e();
      } finally {
        ue(!1);
      }
    }
    return a.memoizedState = [n, t], n;
  }
  function pc(e, t, a) {
    return a === void 0 || (ja & 1073741824) !== 0 && (Le & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Hf(), je.lanes |= e, cn |= e, a);
  }
  function Gd(e, t, a, n) {
    return Bt(a, t) ? a : _i.current !== null ? (e = pc(e, a, n), Bt(e, t) || (_t = !0), e) : (ja & 42) === 0 || (ja & 1073741824) !== 0 && (Le & 261930) === 0 ? (_t = !0, e.memoizedState = a) : (e = Hf(), je.lanes |= e, cn |= e, t);
  }
  function Hd(e, t, a, n, i) {
    var l = ee.p;
    ee.p = l !== 0 && 8 > l ? l : 8;
    var d = R.T, _ = {};
    R.T = _, bc(e, !1, t, a);
    try {
      var y = i(), C = R.S;
      if (C !== null && C(_, y), y !== null && typeof y == "object" && typeof y.then == "function") {
        var q = Bp(
          y,
          n
        );
        ll(
          e,
          t,
          q,
          Yt(e)
        );
      } else
        ll(
          e,
          t,
          n,
          Yt(e)
        );
    } catch (Q) {
      ll(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Q },
        Yt()
      );
    } finally {
      ee.p = l, d !== null && _.types !== null && (d.types = _.types), R.T = d;
    }
  }
  function Yp() {
  }
  function hc(e, t, a, n) {
    if (e.tag !== 5) throw Error(u(476));
    var i = Vd(e).queue;
    Hd(
      e,
      i,
      t,
      F,
      a === null ? Yp : function() {
        return qd(e), a(n);
      }
    );
  }
  function Vd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ta,
        lastRenderedState: F
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ta,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function qd(e) {
    var t = Vd(e);
    t.next === null && (t = e.alternate.memoizedState), ll(
      e,
      t.next.queue,
      {},
      Yt()
    );
  }
  function vc() {
    return wt(Sl);
  }
  function Yd() {
    return ut().memoizedState;
  }
  function Zd() {
    return ut().memoizedState;
  }
  function Zp(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Yt();
          e = tn(a);
          var n = an(t, e, a);
          n !== null && (Dt(n, t, a), el(n, t, a)), t = { cache: Qs() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Kp(e, t, a) {
    var n = Yt();
    a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _o(e) ? Xd(t, a) : (a = Us(e, t, a, n), a !== null && (Dt(a, e, n), Qd(a, t, n)));
  }
  function Kd(e, t, a) {
    var n = Yt();
    ll(e, t, a, n);
  }
  function ll(e, t, a, n) {
    var i = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (_o(e)) Xd(t, i);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
        try {
          var d = t.lastRenderedState, _ = l(d, a);
          if (i.hasEagerState = !0, i.eagerState = _, Bt(_, d))
            return Ql(e, t, i, 0), Fe === null && Xl(), !1;
        } catch {
        }
      if (a = Us(e, t, i, n), a !== null)
        return Dt(a, e, n), Qd(a, t, n), !0;
    }
    return !1;
  }
  function bc(e, t, a, n) {
    if (n = {
      lane: 2,
      revertLane: Wc(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _o(e)) {
      if (t) throw Error(u(479));
    } else
      t = Us(
        e,
        a,
        n,
        2
      ), t !== null && Dt(t, e, 2);
  }
  function _o(e) {
    var t = e.alternate;
    return e === je || t !== null && t === je;
  }
  function Xd(e, t) {
    gi = oo = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Qd(e, t, a) {
    if ((a & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, a |= n, t.lanes = a, Fr(e, a);
    }
  }
  var ol = {
    readContext: wt,
    use: ro,
    useCallback: st,
    useContext: st,
    useEffect: st,
    useImperativeHandle: st,
    useLayoutEffect: st,
    useInsertionEffect: st,
    useMemo: st,
    useReducer: st,
    useRef: st,
    useState: st,
    useDebugValue: st,
    useDeferredValue: st,
    useTransition: st,
    useSyncExternalStore: st,
    useId: st,
    useHostTransitionStatus: st,
    useFormState: st,
    useActionState: st,
    useOptimistic: st,
    useMemoCache: st,
    useCacheRefresh: st
  };
  ol.useEffectEvent = st;
  var $d = {
    readContext: wt,
    use: ro,
    useCallback: function(e, t) {
      return Mt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: wt,
    useEffect: jd,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, fo(
        4194308,
        4,
        Dd.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return fo(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      fo(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Mt();
      t = t === void 0 ? null : t;
      var n = e();
      if (Un) {
        ue(!0);
        try {
          e();
        } finally {
          ue(!1);
        }
      }
      return a.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, a) {
      var n = Mt();
      if (a !== void 0) {
        var i = a(t);
        if (Un) {
          ue(!0);
          try {
            a(t);
          } finally {
            ue(!1);
          }
        }
      } else i = t;
      return n.memoizedState = n.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, n.queue = e, e = e.dispatch = Kp.bind(
        null,
        je,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = Mt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = fc(e);
      var t = e.queue, a = Kd.bind(null, je, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: gc,
    useDeferredValue: function(e, t) {
      var a = Mt();
      return pc(a, e, t);
    },
    useTransition: function() {
      var e = fc(!1);
      return e = Hd.bind(
        null,
        je,
        e.queue,
        !0,
        !1
      ), Mt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var n = je, i = Mt();
      if (He) {
        if (a === void 0)
          throw Error(u(407));
        a = a();
      } else {
        if (a = t(), Fe === null)
          throw Error(u(349));
        (Le & 127) !== 0 || gd(n, t, a);
      }
      i.memoizedState = a;
      var l = { value: a, getSnapshot: t };
      return i.queue = l, jd(hd.bind(null, n, l, e), [
        e
      ]), n.flags |= 2048, hi(
        9,
        { destroy: void 0 },
        pd.bind(
          null,
          n,
          l,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Mt(), t = Fe.identifierPrefix;
      if (He) {
        var a = _a, n = ma;
        a = (n & ~(1 << 32 - ze(n) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = so++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Lp++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: vc,
    useFormState: Ed,
    useActionState: Ed,
    useOptimistic: function(e) {
      var t = Mt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = bc.bind(
        null,
        je,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: rc,
    useCacheRefresh: function() {
      return Mt().memoizedState = Zp.bind(
        null,
        je
      );
    },
    useEffectEvent: function(e) {
      var t = Mt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Xe & 2) !== 0)
          throw Error(u(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, yc = {
    readContext: wt,
    use: ro,
    useCallback: Bd,
    useContext: wt,
    useEffect: _c,
    useImperativeHandle: Ud,
    useInsertionEffect: Od,
    useLayoutEffect: Rd,
    useMemo: Ld,
    useReducer: uo,
    useRef: Cd,
    useState: function() {
      return uo(Ta);
    },
    useDebugValue: gc,
    useDeferredValue: function(e, t) {
      var a = ut();
      return Gd(
        a,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = uo(Ta)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : il(e),
        t
      ];
    },
    useSyncExternalStore: _d,
    useId: Yd,
    useHostTransitionStatus: vc,
    useFormState: Md,
    useActionState: Md,
    useOptimistic: function(e, t) {
      var a = ut();
      return yd(a, Je, e, t);
    },
    useMemoCache: rc,
    useCacheRefresh: Zd
  };
  yc.useEffectEvent = Td;
  var Jd = {
    readContext: wt,
    use: ro,
    useCallback: Bd,
    useContext: wt,
    useEffect: _c,
    useImperativeHandle: Ud,
    useInsertionEffect: Od,
    useLayoutEffect: Rd,
    useMemo: Ld,
    useReducer: dc,
    useRef: Cd,
    useState: function() {
      return dc(Ta);
    },
    useDebugValue: gc,
    useDeferredValue: function(e, t) {
      var a = ut();
      return Je === null ? pc(a, e, t) : Gd(
        a,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = dc(Ta)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : il(e),
        t
      ];
    },
    useSyncExternalStore: _d,
    useId: Yd,
    useHostTransitionStatus: vc,
    useFormState: Ad,
    useActionState: Ad,
    useOptimistic: function(e, t) {
      var a = ut();
      return Je !== null ? yd(a, Je, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: rc,
    useCacheRefresh: Zd
  };
  Jd.useEffectEvent = Td;
  function xc(e, t, a, n) {
    t = e.memoizedState, a = a(n, t), a = a == null ? t : w({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Sc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var n = Yt(), i = tn(n);
      i.payload = t, a != null && (i.callback = a), t = an(e, i, n), t !== null && (Dt(t, e, n), el(t, e, n));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var n = Yt(), i = tn(n);
      i.tag = 1, i.payload = t, a != null && (i.callback = a), t = an(e, i, n), t !== null && (Dt(t, e, n), el(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Yt(), n = tn(a);
      n.tag = 2, t != null && (n.callback = t), t = an(e, n, a), t !== null && (Dt(t, e, a), el(t, e, a));
    }
  };
  function Id(e, t, a, n, i, l, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, l, d) : t.prototype && t.prototype.isPureReactComponent ? !Xi(a, n) || !Xi(i, l) : !0;
  }
  function Wd(e, t, a, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, n), t.state !== e && Sc.enqueueReplaceState(t, t.state, null);
  }
  function Bn(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var n in t)
        n !== "ref" && (a[n] = t[n]);
    }
    if (e = e.defaultProps) {
      a === t && (a = w({}, a));
      for (var i in e)
        a[i] === void 0 && (a[i] = e[i]);
    }
    return a;
  }
  function Fd(e) {
    Kl(e);
  }
  function Pd(e) {
    console.error(e);
  }
  function ef(e) {
    Kl(e);
  }
  function go(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function tf(e, t, a) {
    try {
      var n = e.onCaughtError;
      n(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function wc(e, t, a) {
    return a = tn(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      go(e, t);
    }, a;
  }
  function af(e) {
    return e = tn(e), e.tag = 3, e;
  }
  function nf(e, t, a, n) {
    var i = a.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = n.value;
      e.payload = function() {
        return i(l);
      }, e.callback = function() {
        tf(t, a, n);
      };
    }
    var d = a.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
      tf(t, a, n), typeof i != "function" && (rn === null ? rn = /* @__PURE__ */ new Set([this]) : rn.add(this));
      var _ = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: _ !== null ? _ : ""
      });
    });
  }
  function Xp(e, t, a, n, i) {
    if (a.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = a.alternate, t !== null && ri(
        t,
        a,
        i,
        !0
      ), a = Gt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return ta === null ? Mo() : a.alternate === null && ct === 0 && (ct = 3), a.flags &= -257, a.flags |= 65536, a.lanes = i, n === to ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), $c(e, n, i)), !1;
          case 22:
            return a.flags |= 65536, n === to ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : a.add(n)), $c(e, n, i)), !1;
        }
        throw Error(u(435, a.tag));
      }
      return $c(e, n, i), Mo(), !1;
    }
    if (He)
      return t = Gt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, n !== qs && (e = Error(u(422), { cause: n }), Ji(Wt(e, a)))) : (n !== qs && (t = Error(u(423), {
        cause: n
      }), Ji(
        Wt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, n = Wt(n, a), i = wc(
        e.stateNode,
        n,
        i
      ), Ps(e, i), ct !== 4 && (ct = 2)), !1;
    var l = Error(u(520), { cause: n });
    if (l = Wt(l, a), _l === null ? _l = [l] : _l.push(l), ct !== 4 && (ct = 2), t === null) return !0;
    n = Wt(n, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = i & -i, a.lanes |= e, e = wc(a.stateNode, n, e), Ps(a, e), !1;
        case 1:
          if (t = a.type, l = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || l !== null && typeof l.componentDidCatch == "function" && (rn === null || !rn.has(l))))
            return a.flags |= 65536, i &= -i, a.lanes |= i, i = af(i), nf(
              i,
              e,
              a,
              n
            ), Ps(a, i), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var zc = Error(u(461)), _t = !1;
  function zt(e, t, a, n) {
    t.child = e === null ? sd(t, null, a, n) : Dn(
      t,
      e.child,
      a,
      n
    );
  }
  function lf(e, t, a, n, i) {
    a = a.render;
    var l = t.ref;
    if ("ref" in n) {
      var d = {};
      for (var _ in n)
        _ !== "ref" && (d[_] = n[_]);
    } else d = n;
    return jn(t), n = lc(
      e,
      t,
      a,
      d,
      l,
      i
    ), _ = oc(), e !== null && !_t ? (sc(e, t, i), Oa(e, t, i)) : (He && _ && Hs(t), t.flags |= 1, zt(e, t, n, i), t.child);
  }
  function of(e, t, a, n, i) {
    if (e === null) {
      var l = a.type;
      return typeof l == "function" && !Bs(l) && l.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = l, sf(
        e,
        t,
        l,
        n,
        i
      )) : (e = Jl(
        a.type,
        null,
        n,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (l = e.child, !Tc(e, i)) {
      var d = l.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Xi, a(d, n) && e.ref === t.ref)
        return Oa(e, t, i);
    }
    return t.flags |= 1, e = Ma(l, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function sf(e, t, a, n, i) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (Xi(l, n) && e.ref === t.ref)
        if (_t = !1, t.pendingProps = n = l, Tc(e, i))
          (e.flags & 131072) !== 0 && (_t = !0);
        else
          return t.lanes = e.lanes, Oa(e, t, i);
    }
    return Nc(
      e,
      t,
      a,
      n,
      i
    );
  }
  function cf(e, t, a, n) {
    var i = n.children, l = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (l = l !== null ? l.baseLanes | a : a, e !== null) {
          for (n = t.child = e.child, i = 0; n !== null; )
            i = i | n.lanes | n.childLanes, n = n.sibling;
          n = i & ~l;
        } else n = 0, t.child = null;
        return rf(
          e,
          t,
          l,
          a,
          n
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Pl(
          t,
          l !== null ? l.cachePool : null
        ), l !== null ? ud(t, l) : tc(), dd(t);
      else
        return n = t.lanes = 536870912, rf(
          e,
          t,
          l !== null ? l.baseLanes | a : a,
          a,
          n
        );
    } else
      l !== null ? (Pl(t, l.cachePool), ud(t, l), ln(), t.memoizedState = null) : (e !== null && Pl(t, null), tc(), ln());
    return zt(e, t, i, a), t.child;
  }
  function sl(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function rf(e, t, a, n, i) {
    var l = Js();
    return l = l === null ? null : { parent: ft._currentValue, pool: l }, t.memoizedState = {
      baseLanes: a,
      cachePool: l
    }, e !== null && Pl(t, null), tc(), dd(t), e !== null && ri(e, t, n, !0), t.childLanes = i, null;
  }
  function po(e, t) {
    return t = vo(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function uf(e, t, a) {
    return Dn(t, e.child, null, a), e = po(t, t.pendingProps), e.flags |= 2, Ht(t), t.memoizedState = null, e;
  }
  function Qp(e, t, a) {
    var n = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (He) {
        if (n.mode === "hidden")
          return e = po(t, n), t.lanes = 536870912, sl(null, e);
        if (nc(t), (e = at) ? (e = Sm(
          e,
          ea
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ia !== null ? { id: ma, overflow: _a } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Xu(e), a.return = t, t.child = a, St = t, at = null)) : e = null, e === null) throw Fa(t);
        return t.lanes = 536870912, null;
      }
      return po(t, n);
    }
    var l = e.memoizedState;
    if (l !== null) {
      var d = l.dehydrated;
      if (nc(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = uf(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(u(558));
      else if (_t || ri(e, t, a, !1), i = (a & e.childLanes) !== 0, _t || i) {
        if (n = Fe, n !== null && (d = Pr(n, a), d !== 0 && d !== l.retryLane))
          throw l.retryLane = d, Mn(e, d), Dt(n, e, d), zc;
        Mo(), t = uf(
          e,
          t,
          a
        );
      } else
        e = l.treeContext, at = aa(d.nextSibling), St = t, He = !0, Wa = null, ea = !1, e !== null && Ju(t, e), t = po(t, n), t.flags |= 4096;
      return t;
    }
    return e = Ma(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ho(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(u(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Nc(e, t, a, n, i) {
    return jn(t), a = lc(
      e,
      t,
      a,
      n,
      void 0,
      i
    ), n = oc(), e !== null && !_t ? (sc(e, t, i), Oa(e, t, i)) : (He && n && Hs(t), t.flags |= 1, zt(e, t, a, i), t.child);
  }
  function df(e, t, a, n, i, l) {
    return jn(t), t.updateQueue = null, a = md(
      t,
      n,
      a,
      i
    ), fd(e), n = oc(), e !== null && !_t ? (sc(e, t, l), Oa(e, t, l)) : (He && n && Hs(t), t.flags |= 1, zt(e, t, a, l), t.child);
  }
  function ff(e, t, a, n, i) {
    if (jn(t), t.stateNode === null) {
      var l = li, d = a.contextType;
      typeof d == "object" && d !== null && (l = wt(d)), l = new a(n, l), t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, l.updater = Sc, t.stateNode = l, l._reactInternals = t, l = t.stateNode, l.props = n, l.state = t.memoizedState, l.refs = {}, Ws(t), d = a.contextType, l.context = typeof d == "object" && d !== null ? wt(d) : li, l.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (xc(
        t,
        a,
        d,
        n
      ), l.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (d = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), d !== l.state && Sc.enqueueReplaceState(l, l.state, null), al(t, n, l, i), tl(), l.state = t.memoizedState), typeof l.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      l = t.stateNode;
      var _ = t.memoizedProps, y = Bn(a, _);
      l.props = y;
      var C = l.context, q = a.contextType;
      d = li, typeof q == "object" && q !== null && (d = wt(q));
      var Q = a.getDerivedStateFromProps;
      q = typeof Q == "function" || typeof l.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, q || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (_ || C !== d) && Wd(
        t,
        l,
        n,
        d
      ), en = !1;
      var T = t.memoizedState;
      l.state = T, al(t, n, l, i), tl(), C = t.memoizedState, _ || T !== C || en ? (typeof Q == "function" && (xc(
        t,
        a,
        Q,
        n
      ), C = t.memoizedState), (y = en || Id(
        t,
        a,
        y,
        n,
        T,
        C,
        d
      )) ? (q || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = C), l.props = n, l.state = C, l.context = d, n = y) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      l = t.stateNode, Fs(e, t), d = t.memoizedProps, q = Bn(a, d), l.props = q, Q = t.pendingProps, T = l.context, C = a.contextType, y = li, typeof C == "object" && C !== null && (y = wt(C)), _ = a.getDerivedStateFromProps, (C = typeof _ == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (d !== Q || T !== y) && Wd(
        t,
        l,
        n,
        y
      ), en = !1, T = t.memoizedState, l.state = T, al(t, n, l, i), tl();
      var B = t.memoizedState;
      d !== Q || T !== B || en || e !== null && e.dependencies !== null && Wl(e.dependencies) ? (typeof _ == "function" && (xc(
        t,
        a,
        _,
        n
      ), B = t.memoizedState), (q = en || Id(
        t,
        a,
        q,
        n,
        T,
        B,
        y
      ) || e !== null && e.dependencies !== null && Wl(e.dependencies)) ? (C || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(n, B, y), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(
        n,
        B,
        y
      )), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || d === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = B), l.props = n, l.state = B, l.context = y, n = q) : (typeof l.componentDidUpdate != "function" || d === e.memoizedProps && T === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && T === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return l = n, ho(e, t), n = (t.flags & 128) !== 0, l || n ? (l = t.stateNode, a = n && typeof a.getDerivedStateFromError != "function" ? null : l.render(), t.flags |= 1, e !== null && n ? (t.child = Dn(
      t,
      e.child,
      null,
      i
    ), t.child = Dn(
      t,
      null,
      a,
      i
    )) : zt(e, t, a, i), t.memoizedState = l.state, e = t.child) : e = Oa(
      e,
      t,
      i
    ), e;
  }
  function mf(e, t, a, n) {
    return An(), t.flags |= 256, zt(e, t, a, n), t.child;
  }
  var Ec = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Mc(e) {
    return { baseLanes: e, cachePool: td() };
  }
  function kc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= qt), e;
  }
  function _f(e, t, a) {
    var n = t.pendingProps, i = !1, l = (t.flags & 128) !== 0, d;
    if ((d = l) || (d = e !== null && e.memoizedState === null ? !1 : (rt.current & 2) !== 0), d && (i = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (He) {
        if (i ? nn(t) : ln(), (e = at) ? (e = Sm(
          e,
          ea
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ia !== null ? { id: ma, overflow: _a } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Xu(e), a.return = t, t.child = a, St = t, at = null)) : e = null, e === null) throw Fa(t);
        return ur(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var _ = n.children;
      return n = n.fallback, i ? (ln(), i = t.mode, _ = vo(
        { mode: "hidden", children: _ },
        i
      ), n = kn(
        n,
        i,
        a,
        null
      ), _.return = t, n.return = t, _.sibling = n, t.child = _, n = t.child, n.memoizedState = Mc(a), n.childLanes = kc(
        e,
        d,
        a
      ), t.memoizedState = Ec, sl(null, n)) : (nn(t), Ac(t, _));
    }
    var y = e.memoizedState;
    if (y !== null && (_ = y.dehydrated, _ !== null)) {
      if (l)
        t.flags & 256 ? (nn(t), t.flags &= -257, t = Cc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (ln(), t.child = e.child, t.flags |= 128, t = null) : (ln(), _ = n.fallback, i = t.mode, n = vo(
          { mode: "visible", children: n.children },
          i
        ), _ = kn(
          _,
          i,
          a,
          null
        ), _.flags |= 2, n.return = t, _.return = t, n.sibling = _, t.child = n, Dn(
          t,
          e.child,
          null,
          a
        ), n = t.child, n.memoizedState = Mc(a), n.childLanes = kc(
          e,
          d,
          a
        ), t.memoizedState = Ec, t = sl(null, n));
      else if (nn(t), ur(_)) {
        if (d = _.nextSibling && _.nextSibling.dataset, d) var C = d.dgst;
        d = C, n = Error(u(419)), n.stack = "", n.digest = d, Ji({ value: n, source: null, stack: null }), t = Cc(
          e,
          t,
          a
        );
      } else if (_t || ri(e, t, a, !1), d = (a & e.childLanes) !== 0, _t || d) {
        if (d = Fe, d !== null && (n = Pr(d, a), n !== 0 && n !== y.retryLane))
          throw y.retryLane = n, Mn(e, n), Dt(d, e, n), zc;
        rr(_) || Mo(), t = Cc(
          e,
          t,
          a
        );
      } else
        rr(_) ? (t.flags |= 192, t.child = e.child, t = null) : (e = y.treeContext, at = aa(
          _.nextSibling
        ), St = t, He = !0, Wa = null, ea = !1, e !== null && Ju(t, e), t = Ac(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (ln(), _ = n.fallback, i = t.mode, y = e.child, C = y.sibling, n = Ma(y, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = y.subtreeFlags & 65011712, C !== null ? _ = Ma(
      C,
      _
    ) : (_ = kn(
      _,
      i,
      a,
      null
    ), _.flags |= 2), _.return = t, n.return = t, n.sibling = _, t.child = n, sl(null, n), n = t.child, _ = e.child.memoizedState, _ === null ? _ = Mc(a) : (i = _.cachePool, i !== null ? (y = ft._currentValue, i = i.parent !== y ? { parent: y, pool: y } : i) : i = td(), _ = {
      baseLanes: _.baseLanes | a,
      cachePool: i
    }), n.memoizedState = _, n.childLanes = kc(
      e,
      d,
      a
    ), t.memoizedState = Ec, sl(e.child, n)) : (nn(t), a = e.child, e = a.sibling, a = Ma(a, {
      mode: "visible",
      children: n.children
    }), a.return = t, a.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [e], t.flags |= 16) : d.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function Ac(e, t) {
    return t = vo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function vo(e, t) {
    return e = Lt(22, e, null, t), e.lanes = 0, e;
  }
  function Cc(e, t, a) {
    return Dn(t, e.child, null, a), e = Ac(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function gf(e, t, a) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Ks(e.return, t, a);
  }
  function jc(e, t, a, n, i, l) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: a,
      tailMode: i,
      treeForkCount: l
    } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = n, d.tail = a, d.tailMode = i, d.treeForkCount = l);
  }
  function pf(e, t, a) {
    var n = t.pendingProps, i = n.revealOrder, l = n.tail;
    n = n.children;
    var d = rt.current, _ = (d & 2) !== 0;
    if (_ ? (d = d & 1 | 2, t.flags |= 128) : d &= 1, P(rt, d), zt(e, t, n, a), n = He ? $i : 0, !_ && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && gf(e, a, t);
        else if (e.tag === 19)
          gf(e, a, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (i) {
      case "forwards":
        for (a = t.child, i = null; a !== null; )
          e = a.alternate, e !== null && lo(e) === null && (i = a), a = a.sibling;
        a = i, a === null ? (i = t.child, t.child = null) : (i = a.sibling, a.sibling = null), jc(
          t,
          !1,
          i,
          a,
          l,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && lo(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = a, a = i, i = e;
        }
        jc(
          t,
          !0,
          a,
          null,
          l,
          n
        );
        break;
      case "together":
        jc(
          t,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Oa(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), cn |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (ri(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, a = Ma(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = Ma(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Tc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Wl(e)));
  }
  function $p(e, t, a) {
    switch (t.tag) {
      case 3:
        ot(t, t.stateNode.containerInfo), Pa(t, ft, e.memoizedState.cache), An();
        break;
      case 27:
      case 5:
        ba(t);
        break;
      case 4:
        ot(t, t.stateNode.containerInfo);
        break;
      case 10:
        Pa(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, nc(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (nn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? _f(e, t, a) : (nn(t), e = Oa(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        nn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (n = (a & t.childLanes) !== 0, n || (ri(
          e,
          t,
          a,
          !1
        ), n = (a & t.childLanes) !== 0), i) {
          if (n)
            return pf(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), P(rt, rt.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, cf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Pa(t, ft, e.memoizedState.cache);
    }
    return Oa(e, t, a);
  }
  function hf(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        _t = !0;
      else {
        if (!Tc(e, a) && (t.flags & 128) === 0)
          return _t = !1, $p(
            e,
            t,
            a
          );
        _t = (e.flags & 131072) !== 0;
      }
    else
      _t = !1, He && (t.flags & 1048576) !== 0 && $u(t, $i, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = On(t.elementType), t.type = e, typeof e == "function")
            Bs(e) ? (n = Bn(e, n), t.tag = 1, t = ff(
              null,
              t,
              e,
              n,
              a
            )) : (t.tag = 0, t = Nc(
              null,
              t,
              e,
              n,
              a
            ));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === L) {
                t.tag = 11, t = lf(
                  null,
                  t,
                  e,
                  n,
                  a
                );
                break e;
              } else if (i === Y) {
                t.tag = 14, t = of(
                  null,
                  t,
                  e,
                  n,
                  a
                );
                break e;
              }
            }
            throw t = Ce(e) || e, Error(u(306, t, ""));
          }
        }
        return t;
      case 0:
        return Nc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return n = t.type, i = Bn(
          n,
          t.pendingProps
        ), ff(
          e,
          t,
          n,
          i,
          a
        );
      case 3:
        e: {
          if (ot(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(u(387));
          n = t.pendingProps;
          var l = t.memoizedState;
          i = l.element, Fs(e, t), al(t, n, null, a);
          var d = t.memoizedState;
          if (n = d.cache, Pa(t, ft, n), n !== l.cache && Xs(
            t,
            [ft],
            a,
            !0
          ), tl(), n = d.element, l.isDehydrated)
            if (l = {
              element: n,
              isDehydrated: !1,
              cache: d.cache
            }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
              t = mf(
                e,
                t,
                n,
                a
              );
              break e;
            } else if (n !== i) {
              i = Wt(
                Error(u(424)),
                t
              ), Ji(i), t = mf(
                e,
                t,
                n,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, at = aa(e.firstChild), St = t, He = !0, Wa = null, ea = !0, a = sd(
                t,
                null,
                n,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (An(), n === i) {
              t = Oa(
                e,
                t,
                a
              );
              break e;
            }
            zt(e, t, n, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return ho(e, t), e === null ? (a = km(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : He || (a = t.type, e = t.pendingProps, n = Ro(
          me.current
        ).createElement(a), n[xt] = t, n[At] = e, Nt(n, a, e), vt(n), t.stateNode = n) : t.memoizedState = km(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ba(t), e === null && He && (n = t.stateNode = Nm(
          t.type,
          t.pendingProps,
          me.current
        ), St = t, ea = !0, i = at, mn(t.type) ? (dr = i, at = aa(n.firstChild)) : at = i), zt(
          e,
          t,
          t.pendingProps.children,
          a
        ), ho(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && He && ((i = n = at) && (n = zh(
          n,
          t.type,
          t.pendingProps,
          ea
        ), n !== null ? (t.stateNode = n, St = t, at = aa(n.firstChild), ea = !1, i = !0) : i = !1), i || Fa(t)), ba(t), i = t.type, l = t.pendingProps, d = e !== null ? e.memoizedProps : null, n = l.children, or(i, l) ? n = null : d !== null && or(i, d) && (t.flags |= 32), t.memoizedState !== null && (i = lc(
          e,
          t,
          Gp,
          null,
          null,
          a
        ), Sl._currentValue = i), ho(e, t), zt(e, t, n, a), t.child;
      case 6:
        return e === null && He && ((e = a = at) && (a = Nh(
          a,
          t.pendingProps,
          ea
        ), a !== null ? (t.stateNode = a, St = t, at = null, e = !0) : e = !1), e || Fa(t)), null;
      case 13:
        return _f(e, t, a);
      case 4:
        return ot(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = Dn(
          t,
          null,
          n,
          a
        ) : zt(e, t, n, a), t.child;
      case 11:
        return lf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return zt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return zt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return zt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return n = t.pendingProps, Pa(t, t.type, n.value), zt(e, t, n.children, a), t.child;
      case 9:
        return i = t.type._context, n = t.pendingProps.children, jn(t), i = wt(i), n = n(i), t.flags |= 1, zt(e, t, n, a), t.child;
      case 14:
        return of(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return sf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return pf(e, t, a);
      case 31:
        return Qp(e, t, a);
      case 22:
        return cf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return jn(t), n = wt(ft), e === null ? (i = Js(), i === null && (i = Fe, l = Qs(), i.pooledCache = l, l.refCount++, l !== null && (i.pooledCacheLanes |= a), i = l), t.memoizedState = { parent: n, cache: i }, Ws(t), Pa(t, ft, i)) : ((e.lanes & a) !== 0 && (Fs(e, t), al(t, null, null, a), tl()), i = e.memoizedState, l = t.memoizedState, i.parent !== n ? (i = { parent: n, cache: n }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Pa(t, ft, n)) : (n = l.cache, Pa(t, ft, n), n !== i.cache && Xs(
          t,
          [ft],
          a,
          !0
        ))), zt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function Ra(e) {
    e.flags |= 4;
  }
  function Oc(e, t, a, n, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Zf()) e.flags |= 8192;
        else
          throw Rn = to, Is;
    } else e.flags &= -16777217;
  }
  function vf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Om(t))
      if (Zf()) e.flags |= 8192;
      else
        throw Rn = to, Is;
  }
  function bo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Oe() : 536870912, e.lanes |= t, xi |= t);
  }
  function cl(e, t) {
    if (!He)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var n = null; a !== null; )
            a.alternate !== null && (n = a), a = a.sibling;
          n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
      }
  }
  function nt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, n = 0;
    if (t)
      for (var i = e.child; i !== null; )
        a |= i.lanes | i.childLanes, n |= i.subtreeFlags & 65011712, n |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        a |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= n, e.childLanes = a, t;
  }
  function Jp(e, t, a) {
    var n = t.pendingProps;
    switch (Vs(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return nt(t), null;
      case 1:
        return nt(t), null;
      case 3:
        return a = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Ca(ft), Pe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ci(t) ? Ra(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ys())), nt(t), null;
      case 26:
        var i = t.type, l = t.memoizedState;
        return e === null ? (Ra(t), l !== null ? (nt(t), vf(t, l)) : (nt(t), Oc(
          t,
          i,
          null,
          n,
          a
        ))) : l ? l !== e.memoizedState ? (Ra(t), nt(t), vf(t, l)) : (nt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && Ra(t), nt(t), Oc(
          t,
          i,
          e,
          n,
          a
        )), null;
      case 27:
        if (ya(t), a = me.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && Ra(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(u(166));
            return nt(t), null;
          }
          e = ne.current, ci(t) ? Iu(t) : (e = Nm(i, n, a), t.stateNode = e, Ra(t));
        }
        return nt(t), null;
      case 5:
        if (ya(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && Ra(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(u(166));
            return nt(t), null;
          }
          if (l = ne.current, ci(t))
            Iu(t);
          else {
            var d = Ro(
              me.current
            );
            switch (l) {
              case 1:
                l = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  i
                );
                break;
              case 2:
                l = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  i
                );
                break;
              default:
                switch (i) {
                  case "svg":
                    l = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      i
                    );
                    break;
                  case "math":
                    l = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    l = d.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(
                      l.firstChild
                    );
                    break;
                  case "select":
                    l = typeof n.is == "string" ? d.createElement("select", {
                      is: n.is
                    }) : d.createElement("select"), n.multiple ? l.multiple = !0 : n.size && (l.size = n.size);
                    break;
                  default:
                    l = typeof n.is == "string" ? d.createElement(i, { is: n.is }) : d.createElement(i);
                }
            }
            l[xt] = t, l[At] = n;
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                l.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t)
                  break e;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            t.stateNode = l;
            e: switch (Nt(l, i, n), i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && Ra(t);
          }
        }
        return nt(t), Oc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && Ra(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(u(166));
          if (e = me.current, ci(t)) {
            if (e = t.stateNode, a = t.memoizedProps, n = null, i = St, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  n = i.memoizedProps;
              }
            e[xt] = t, e = !!(e.nodeValue === a || n !== null && n.suppressHydrationWarning === !0 || _m(e.nodeValue, a)), e || Fa(t, !0);
          } else
            e = Ro(e).createTextNode(
              n
            ), e[xt] = t, t.stateNode = e;
        }
        return nt(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = ci(t), a !== null) {
            if (e === null) {
              if (!n) throw Error(u(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(557));
              e[xt] = t;
            } else
              An(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            nt(t), e = !1;
          } else
            a = Ys(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(u(558));
        }
        return nt(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = ci(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(u(317));
              i[xt] = t;
            } else
              An(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            nt(t), i = !1;
          } else
            i = Ys(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
        }
        return Ht(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = n !== null, e = e !== null && e.memoizedState !== null, a && (n = t.child, i = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (i = n.alternate.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== i && (n.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), bo(t, t.updateQueue), nt(t), null);
      case 4:
        return Pe(), e === null && tr(t.stateNode.containerInfo), nt(t), null;
      case 10:
        return Ca(t.type), nt(t), null;
      case 19:
        if (H(rt), n = t.memoizedState, n === null) return nt(t), null;
        if (i = (t.flags & 128) !== 0, l = n.rendering, l === null)
          if (i) cl(n, !1);
          else {
            if (ct !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (l = lo(e), l !== null) {
                  for (t.flags |= 128, cl(n, !1), e = l.updateQueue, t.updateQueue = e, bo(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Ku(a, e), a = a.sibling;
                  return P(
                    rt,
                    rt.current & 1 | 2
                  ), He && ka(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && et() > zo && (t.flags |= 128, i = !0, cl(n, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = lo(l), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, bo(t, e), cl(n, !0), n.tail === null && n.tailMode === "hidden" && !l.alternate && !He)
                return nt(t), null;
            } else
              2 * et() - n.renderingStartTime > zo && a !== 536870912 && (t.flags |= 128, i = !0, cl(n, !1), t.lanes = 4194304);
          n.isBackwards ? (l.sibling = t.child, t.child = l) : (e = n.last, e !== null ? e.sibling = l : t.child = l, n.last = l);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = et(), e.sibling = null, a = rt.current, P(
          rt,
          i ? a & 1 | 2 : a & 1
        ), He && ka(t, n.treeForkCount), e) : (nt(t), null);
      case 22:
      case 23:
        return Ht(t), ac(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), a = t.updateQueue, a !== null && bo(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== a && (t.flags |= 2048), e !== null && H(Tn), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Ca(ft), nt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Ip(e, t) {
    switch (Vs(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ca(ft), Pe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ya(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Ht(t), t.alternate === null)
            throw Error(u(340));
          An();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ht(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(u(340));
          An();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return H(rt), null;
      case 4:
        return Pe(), null;
      case 10:
        return Ca(t.type), null;
      case 22:
      case 23:
        return Ht(t), ac(), e !== null && H(Tn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Ca(ft), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bf(e, t) {
    switch (Vs(t), t.tag) {
      case 3:
        Ca(ft), Pe();
        break;
      case 26:
      case 27:
      case 5:
        ya(t);
        break;
      case 4:
        Pe();
        break;
      case 31:
        t.memoizedState !== null && Ht(t);
        break;
      case 13:
        Ht(t);
        break;
      case 19:
        H(rt);
        break;
      case 10:
        Ca(t.type);
        break;
      case 22:
      case 23:
        Ht(t), ac(), e !== null && H(Tn);
        break;
      case 24:
        Ca(ft);
    }
  }
  function rl(e, t) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            n = void 0;
            var l = a.create, d = a.inst;
            n = l(), d.destroy = n;
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (_) {
      $e(t, t.return, _);
    }
  }
  function on(e, t, a) {
    try {
      var n = t.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var l = i.next;
        n = l;
        do {
          if ((n.tag & e) === e) {
            var d = n.inst, _ = d.destroy;
            if (_ !== void 0) {
              d.destroy = void 0, i = t;
              var y = a, C = _;
              try {
                C();
              } catch (q) {
                $e(
                  i,
                  y,
                  q
                );
              }
            }
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (q) {
      $e(t, t.return, q);
    }
  }
  function yf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        rd(t, a);
      } catch (n) {
        $e(e, e.return, n);
      }
    }
  }
  function xf(e, t, a) {
    a.props = Bn(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (n) {
      $e(e, t, n);
    }
  }
  function ul(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(n) : a.current = n;
      }
    } catch (i) {
      $e(e, t, i);
    }
  }
  function ga(e, t) {
    var a = e.ref, n = e.refCleanup;
    if (a !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (i) {
          $e(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (i) {
          $e(e, t, i);
        }
      else a.current = null;
  }
  function Sf(e) {
    var t = e.type, a = e.memoizedProps, n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && n.focus();
          break e;
        case "img":
          a.src ? n.src = a.src : a.srcSet && (n.srcset = a.srcSet);
      }
    } catch (i) {
      $e(e, e.return, i);
    }
  }
  function Rc(e, t, a) {
    try {
      var n = e.stateNode;
      vh(n, e.type, a, t), n[At] = t;
    } catch (i) {
      $e(e, e.return, i);
    }
  }
  function wf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && mn(e.type) || e.tag === 4;
  }
  function Dc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || wf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && mn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Uc(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Na));
    else if (n !== 4 && (n === 27 && mn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Uc(e, t, a), e = e.sibling; e !== null; )
        Uc(e, t, a), e = e.sibling;
  }
  function yo(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (n !== 4 && (n === 27 && mn(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (yo(e, t, a), e = e.sibling; e !== null; )
        yo(e, t, a), e = e.sibling;
  }
  function zf(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var n = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      Nt(t, n, a), t[xt] = e, t[At] = a;
    } catch (l) {
      $e(e, e.return, l);
    }
  }
  var Da = !1, gt = !1, Bc = !1, Nf = typeof WeakSet == "function" ? WeakSet : Set, bt = null;
  function Wp(e, t) {
    if (e = e.containerInfo, ir = Vo, e = Uu(e), Cs(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var i = n.anchorOffset, l = n.focusNode;
            n = n.focusOffset;
            try {
              a.nodeType, l.nodeType;
            } catch {
              a = null;
              break e;
            }
            var d = 0, _ = -1, y = -1, C = 0, q = 0, Q = e, T = null;
            t: for (; ; ) {
              for (var B; Q !== a || i !== 0 && Q.nodeType !== 3 || (_ = d + i), Q !== l || n !== 0 && Q.nodeType !== 3 || (y = d + n), Q.nodeType === 3 && (d += Q.nodeValue.length), (B = Q.firstChild) !== null; )
                T = Q, Q = B;
              for (; ; ) {
                if (Q === e) break t;
                if (T === a && ++C === i && (_ = d), T === l && ++q === n && (y = d), (B = Q.nextSibling) !== null) break;
                Q = T, T = Q.parentNode;
              }
              Q = B;
            }
            a = _ === -1 || y === -1 ? null : { start: _, end: y };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (lr = { focusedElem: e, selectionRange: a }, Vo = !1, bt = t; bt !== null; )
      if (t = bt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, bt = e;
      else
        for (; bt !== null; ) {
          switch (t = bt, l = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  i = e[a], i.ref.impl = i.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && l !== null) {
                e = void 0, a = t, i = l.memoizedProps, l = l.memoizedState, n = a.stateNode;
                try {
                  var re = Bn(
                    a.type,
                    i
                  );
                  e = n.getSnapshotBeforeUpdate(
                    re,
                    l
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (we) {
                  $e(
                    a,
                    a.return,
                    we
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  cr(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      cr(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(u(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, bt = e;
            break;
          }
          bt = t.return;
        }
  }
  function Ef(e, t, a) {
    var n = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ba(e, a), n & 4 && rl(5, a);
        break;
      case 1:
        if (Ba(e, a), n & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (d) {
              $e(a, a.return, d);
            }
          else {
            var i = Bn(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                i,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (d) {
              $e(
                a,
                a.return,
                d
              );
            }
          }
        n & 64 && yf(a), n & 512 && ul(a, a.return);
        break;
      case 3:
        if (Ba(e, a), n & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            rd(e, t);
          } catch (d) {
            $e(a, a.return, d);
          }
        }
        break;
      case 27:
        t === null && n & 4 && zf(a);
      case 26:
      case 5:
        Ba(e, a), t === null && n & 4 && Sf(a), n & 512 && ul(a, a.return);
        break;
      case 12:
        Ba(e, a);
        break;
      case 31:
        Ba(e, a), n & 4 && Af(e, a);
        break;
      case 13:
        Ba(e, a), n & 4 && Cf(e, a), n & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = oh.bind(
          null,
          a
        ), Eh(e, a))));
        break;
      case 22:
        if (n = a.memoizedState !== null || Da, !n) {
          t = t !== null && t.memoizedState !== null || gt, i = Da;
          var l = gt;
          Da = n, (gt = t) && !l ? La(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Ba(e, a), Da = i, gt = l;
        }
        break;
      case 30:
        break;
      default:
        Ba(e, a);
    }
  }
  function Mf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Mf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ms(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var it = null, jt = !1;
  function Ua(e, t, a) {
    for (a = a.child; a !== null; )
      kf(e, t, a), a = a.sibling;
  }
  function kf(e, t, a) {
    if (ie && typeof ie.onCommitFiberUnmount == "function")
      try {
        ie.onCommitFiberUnmount(W, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        gt || ga(a, t), Ua(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        gt || ga(a, t);
        var n = it, i = jt;
        mn(a.type) && (it = a.stateNode, jt = !1), Ua(
          e,
          t,
          a
        ), bl(a.stateNode), it = n, jt = i;
        break;
      case 5:
        gt || ga(a, t);
      case 6:
        if (n = it, i = jt, it = null, Ua(
          e,
          t,
          a
        ), it = n, jt = i, it !== null)
          if (jt)
            try {
              (it.nodeType === 9 ? it.body : it.nodeName === "HTML" ? it.ownerDocument.body : it).removeChild(a.stateNode);
            } catch (l) {
              $e(
                a,
                t,
                l
              );
            }
          else
            try {
              it.removeChild(a.stateNode);
            } catch (l) {
              $e(
                a,
                t,
                l
              );
            }
        break;
      case 18:
        it !== null && (jt ? (e = it, ym(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Ai(e)) : ym(it, a.stateNode));
        break;
      case 4:
        n = it, i = jt, it = a.stateNode.containerInfo, jt = !0, Ua(
          e,
          t,
          a
        ), it = n, jt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        on(2, a, t), gt || on(4, a, t), Ua(
          e,
          t,
          a
        );
        break;
      case 1:
        gt || (ga(a, t), n = a.stateNode, typeof n.componentWillUnmount == "function" && xf(
          a,
          t,
          n
        )), Ua(
          e,
          t,
          a
        );
        break;
      case 21:
        Ua(
          e,
          t,
          a
        );
        break;
      case 22:
        gt = (n = gt) || a.memoizedState !== null, Ua(
          e,
          t,
          a
        ), gt = n;
        break;
      default:
        Ua(
          e,
          t,
          a
        );
    }
  }
  function Af(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ai(e);
      } catch (a) {
        $e(t, t.return, a);
      }
    }
  }
  function Cf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ai(e);
      } catch (a) {
        $e(t, t.return, a);
      }
  }
  function Fp(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Nf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Nf()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function xo(e, t) {
    var a = Fp(e);
    t.forEach(function(n) {
      if (!a.has(n)) {
        a.add(n);
        var i = sh.bind(null, e, n);
        n.then(i, i);
      }
    });
  }
  function Tt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var i = a[n], l = e, d = t, _ = d;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (mn(_.type)) {
                it = _.stateNode, jt = !1;
                break e;
              }
              break;
            case 5:
              it = _.stateNode, jt = !1;
              break e;
            case 3:
            case 4:
              it = _.stateNode.containerInfo, jt = !0;
              break e;
          }
          _ = _.return;
        }
        if (it === null) throw Error(u(160));
        kf(l, d, i), it = null, jt = !1, l = i.alternate, l !== null && (l.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        jf(t, e), t = t.sibling;
  }
  var sa = null;
  function jf(e, t) {
    var a = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Tt(t, e), Ot(e), n & 4 && (on(3, e, e.return), rl(3, e), on(5, e, e.return));
        break;
      case 1:
        Tt(t, e), Ot(e), n & 512 && (gt || a === null || ga(a, a.return)), n & 64 && Da && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? n : a.concat(n))));
        break;
      case 26:
        var i = sa;
        if (Tt(t, e), Ot(e), n & 512 && (gt || a === null || ga(a, a.return)), n & 4) {
          var l = a !== null ? a.memoizedState : null;
          if (n = e.memoizedState, a === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, a = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (n) {
                    case "title":
                      l = i.getElementsByTagName("title")[0], (!l || l[Bi] || l[xt] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = i.createElement(n), i.head.insertBefore(
                        l,
                        i.querySelector("head > title")
                      )), Nt(l, n, a), l[xt] = e, vt(l), n = l;
                      break e;
                    case "link":
                      var d = jm(
                        "link",
                        "href",
                        i
                      ).get(n + (a.href || ""));
                      if (d) {
                        for (var _ = 0; _ < d.length; _++)
                          if (l = d[_], l.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && l.getAttribute("rel") === (a.rel == null ? null : a.rel) && l.getAttribute("title") === (a.title == null ? null : a.title) && l.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            d.splice(_, 1);
                            break t;
                          }
                      }
                      l = i.createElement(n), Nt(l, n, a), i.head.appendChild(l);
                      break;
                    case "meta":
                      if (d = jm(
                        "meta",
                        "content",
                        i
                      ).get(n + (a.content || ""))) {
                        for (_ = 0; _ < d.length; _++)
                          if (l = d[_], l.getAttribute("content") === (a.content == null ? null : "" + a.content) && l.getAttribute("name") === (a.name == null ? null : a.name) && l.getAttribute("property") === (a.property == null ? null : a.property) && l.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && l.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            d.splice(_, 1);
                            break t;
                          }
                      }
                      l = i.createElement(n), Nt(l, n, a), i.head.appendChild(l);
                      break;
                    default:
                      throw Error(u(468, n));
                  }
                  l[xt] = e, vt(l), n = l;
                }
                e.stateNode = n;
              } else
                Tm(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Cm(
                i,
                n,
                e.memoizedProps
              );
          else
            l !== n ? (l === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : l.count--, n === null ? Tm(
              i,
              e.type,
              e.stateNode
            ) : Cm(
              i,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && Rc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Tt(t, e), Ot(e), n & 512 && (gt || a === null || ga(a, a.return)), a !== null && n & 4 && Rc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Tt(t, e), Ot(e), n & 512 && (gt || a === null || ga(a, a.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Fn(i, "");
          } catch (re) {
            $e(e, e.return, re);
          }
        }
        n & 4 && e.stateNode != null && (i = e.memoizedProps, Rc(
          e,
          i,
          a !== null ? a.memoizedProps : i
        )), n & 1024 && (Bc = !0);
        break;
      case 6:
        if (Tt(t, e), Ot(e), n & 4) {
          if (e.stateNode === null)
            throw Error(u(162));
          n = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = n;
          } catch (re) {
            $e(e, e.return, re);
          }
        }
        break;
      case 3:
        if (Bo = null, i = sa, sa = Do(t.containerInfo), Tt(t, e), sa = i, Ot(e), n & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Ai(t.containerInfo);
          } catch (re) {
            $e(e, e.return, re);
          }
        Bc && (Bc = !1, Tf(e));
        break;
      case 4:
        n = sa, sa = Do(
          e.stateNode.containerInfo
        ), Tt(t, e), Ot(e), sa = n;
        break;
      case 12:
        Tt(t, e), Ot(e);
        break;
      case 31:
        Tt(t, e), Ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, xo(e, n)));
        break;
      case 13:
        Tt(t, e), Ot(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (wo = et()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, xo(e, n)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var y = a !== null && a.memoizedState !== null, C = Da, q = gt;
        if (Da = C || i, gt = q || y, Tt(t, e), gt = q, Da = C, Ot(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (a === null || y || Da || gt || Ln(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                y = a = t;
                try {
                  if (l = y.stateNode, i)
                    d = l.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    _ = y.stateNode;
                    var Q = y.memoizedProps.style, T = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                    _.style.display = T == null || typeof T == "boolean" ? "" : ("" + T).trim();
                  }
                } catch (re) {
                  $e(y, y.return, re);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                y = t;
                try {
                  y.stateNode.nodeValue = i ? "" : y.memoizedProps;
                } catch (re) {
                  $e(y, y.return, re);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                y = t;
                try {
                  var B = y.stateNode;
                  i ? xm(B, !0) : xm(y.stateNode, !1);
                } catch (re) {
                  $e(y, y.return, re);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        n & 4 && (n = e.updateQueue, n !== null && (a = n.retryQueue, a !== null && (n.retryQueue = null, xo(e, a))));
        break;
      case 19:
        Tt(t, e), Ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, xo(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Tt(t, e), Ot(e);
    }
  }
  function Ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, n = e.return; n !== null; ) {
          if (wf(n)) {
            a = n;
            break;
          }
          n = n.return;
        }
        if (a == null) throw Error(u(160));
        switch (a.tag) {
          case 27:
            var i = a.stateNode, l = Dc(e);
            yo(e, l, i);
            break;
          case 5:
            var d = a.stateNode;
            a.flags & 32 && (Fn(d, ""), a.flags &= -33);
            var _ = Dc(e);
            yo(e, _, d);
            break;
          case 3:
          case 4:
            var y = a.stateNode.containerInfo, C = Dc(e);
            Uc(
              e,
              C,
              y
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (q) {
        $e(e, e.return, q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Tf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Tf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Ba(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Ef(e, t.alternate, t), t = t.sibling;
  }
  function Ln(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          on(4, t, t.return), Ln(t);
          break;
        case 1:
          ga(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && xf(
            t,
            t.return,
            a
          ), Ln(t);
          break;
        case 27:
          bl(t.stateNode);
        case 26:
        case 5:
          ga(t, t.return), Ln(t);
          break;
        case 22:
          t.memoizedState === null && Ln(t);
          break;
        case 30:
          Ln(t);
          break;
        default:
          Ln(t);
      }
      e = e.sibling;
    }
  }
  function La(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, i = e, l = t, d = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          La(
            i,
            l,
            a
          ), rl(4, l);
          break;
        case 1:
          if (La(
            i,
            l,
            a
          ), n = l, i = n.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (C) {
              $e(n, n.return, C);
            }
          if (n = l, i = n.updateQueue, i !== null) {
            var _ = n.stateNode;
            try {
              var y = i.shared.hiddenCallbacks;
              if (y !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < y.length; i++)
                  cd(y[i], _);
            } catch (C) {
              $e(n, n.return, C);
            }
          }
          a && d & 64 && yf(l), ul(l, l.return);
          break;
        case 27:
          zf(l);
        case 26:
        case 5:
          La(
            i,
            l,
            a
          ), a && n === null && d & 4 && Sf(l), ul(l, l.return);
          break;
        case 12:
          La(
            i,
            l,
            a
          );
          break;
        case 31:
          La(
            i,
            l,
            a
          ), a && d & 4 && Af(i, l);
          break;
        case 13:
          La(
            i,
            l,
            a
          ), a && d & 4 && Cf(i, l);
          break;
        case 22:
          l.memoizedState === null && La(
            i,
            l,
            a
          ), ul(l, l.return);
          break;
        case 30:
          break;
        default:
          La(
            i,
            l,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Lc(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Ii(a));
  }
  function Gc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ii(e));
  }
  function ca(e, t, a, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Of(
          e,
          t,
          a,
          n
        ), t = t.sibling;
  }
  function Of(e, t, a, n) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ca(
          e,
          t,
          a,
          n
        ), i & 2048 && rl(9, t);
        break;
      case 1:
        ca(
          e,
          t,
          a,
          n
        );
        break;
      case 3:
        ca(
          e,
          t,
          a,
          n
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ii(e)));
        break;
      case 12:
        if (i & 2048) {
          ca(
            e,
            t,
            a,
            n
          ), e = t.stateNode;
          try {
            var l = t.memoizedProps, d = l.id, _ = l.onPostCommit;
            typeof _ == "function" && _(
              d,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (y) {
            $e(t, t.return, y);
          }
        } else
          ca(
            e,
            t,
            a,
            n
          );
        break;
      case 31:
        ca(
          e,
          t,
          a,
          n
        );
        break;
      case 13:
        ca(
          e,
          t,
          a,
          n
        );
        break;
      case 23:
        break;
      case 22:
        l = t.stateNode, d = t.alternate, t.memoizedState !== null ? l._visibility & 2 ? ca(
          e,
          t,
          a,
          n
        ) : dl(e, t) : l._visibility & 2 ? ca(
          e,
          t,
          a,
          n
        ) : (l._visibility |= 2, vi(
          e,
          t,
          a,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && Lc(d, t);
        break;
      case 24:
        ca(
          e,
          t,
          a,
          n
        ), i & 2048 && Gc(t.alternate, t);
        break;
      default:
        ca(
          e,
          t,
          a,
          n
        );
    }
  }
  function vi(e, t, a, n, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var l = e, d = t, _ = a, y = n, C = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          vi(
            l,
            d,
            _,
            y,
            i
          ), rl(8, d);
          break;
        case 23:
          break;
        case 22:
          var q = d.stateNode;
          d.memoizedState !== null ? q._visibility & 2 ? vi(
            l,
            d,
            _,
            y,
            i
          ) : dl(
            l,
            d
          ) : (q._visibility |= 2, vi(
            l,
            d,
            _,
            y,
            i
          )), i && C & 2048 && Lc(
            d.alternate,
            d
          );
          break;
        case 24:
          vi(
            l,
            d,
            _,
            y,
            i
          ), i && C & 2048 && Gc(d.alternate, d);
          break;
        default:
          vi(
            l,
            d,
            _,
            y,
            i
          );
      }
      t = t.sibling;
    }
  }
  function dl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, n = t, i = n.flags;
        switch (n.tag) {
          case 22:
            dl(a, n), i & 2048 && Lc(
              n.alternate,
              n
            );
            break;
          case 24:
            dl(a, n), i & 2048 && Gc(n.alternate, n);
            break;
          default:
            dl(a, n);
        }
        t = t.sibling;
      }
  }
  var fl = 8192;
  function bi(e, t, a) {
    if (e.subtreeFlags & fl)
      for (e = e.child; e !== null; )
        Rf(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function Rf(e, t, a) {
    switch (e.tag) {
      case 26:
        bi(
          e,
          t,
          a
        ), e.flags & fl && e.memoizedState !== null && Lh(
          a,
          sa,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        bi(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var n = sa;
        sa = Do(e.stateNode.containerInfo), bi(
          e,
          t,
          a
        ), sa = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = fl, fl = 16777216, bi(
          e,
          t,
          a
        ), fl = n) : bi(
          e,
          t,
          a
        ));
        break;
      default:
        bi(
          e,
          t,
          a
        );
    }
  }
  function Df(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ml(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          bt = n, Bf(
            n,
            e
          );
        }
      Df(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Uf(e), e = e.sibling;
  }
  function Uf(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ml(e), e.flags & 2048 && on(9, e, e.return);
        break;
      case 3:
        ml(e);
        break;
      case 12:
        ml(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, So(e)) : ml(e);
        break;
      default:
        ml(e);
    }
  }
  function So(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          bt = n, Bf(
            n,
            e
          );
        }
      Df(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          on(8, t, t.return), So(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, So(t));
          break;
        default:
          So(t);
      }
      e = e.sibling;
    }
  }
  function Bf(e, t) {
    for (; bt !== null; ) {
      var a = bt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          on(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var n = a.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Ii(a.memoizedState.cache);
      }
      if (n = a.child, n !== null) n.return = a, bt = n;
      else
        e: for (a = e; bt !== null; ) {
          n = bt;
          var i = n.sibling, l = n.return;
          if (Mf(n), n === a) {
            bt = null;
            break e;
          }
          if (i !== null) {
            i.return = l, bt = i;
            break e;
          }
          bt = l;
        }
    }
  }
  var Pp = {
    getCacheForType: function(e) {
      var t = wt(ft), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return wt(ft).controller.signal;
    }
  }, eh = typeof WeakMap == "function" ? WeakMap : Map, Xe = 0, Fe = null, Ue = null, Le = 0, Qe = 0, Vt = null, sn = !1, yi = !1, Hc = !1, Ga = 0, ct = 0, cn = 0, Gn = 0, Vc = 0, qt = 0, xi = 0, _l = null, Rt = null, qc = !1, wo = 0, Lf = 0, zo = 1 / 0, No = null, rn = null, pt = 0, un = null, Si = null, Ha = 0, Yc = 0, Zc = null, Gf = null, gl = 0, Kc = null;
  function Yt() {
    return (Xe & 2) !== 0 && Le !== 0 ? Le & -Le : R.T !== null ? Wc() : eu();
  }
  function Hf() {
    if (qt === 0)
      if ((Le & 536870912) === 0 || He) {
        var e = oe;
        oe <<= 1, (oe & 3932160) === 0 && (oe = 262144), qt = e;
      } else qt = 536870912;
    return e = Gt.current, e !== null && (e.flags |= 32), qt;
  }
  function Dt(e, t, a) {
    (e === Fe && (Qe === 2 || Qe === 9) || e.cancelPendingCommit !== null) && (wi(e, 0), dn(
      e,
      Le,
      qt,
      !1
    )), Ae(e, a), ((Xe & 2) === 0 || e !== Fe) && (e === Fe && ((Xe & 2) === 0 && (Gn |= a), ct === 4 && dn(
      e,
      Le,
      qt,
      !1
    )), pa(e));
  }
  function Vf(e, t, a) {
    if ((Xe & 6) !== 0) throw Error(u(327));
    var n = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Te(e, t), i = n ? nh(e, t) : Qc(e, t, !0), l = n;
    do {
      if (i === 0) {
        yi && !n && dn(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, l && !th(a)) {
          i = Qc(e, t, !1), l = !1;
          continue;
        }
        if (i === 2) {
          if (l = t, e.errorRecoveryDisabledLanes & l)
            var d = 0;
          else
            d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
          if (d !== 0) {
            t = d;
            e: {
              var _ = e;
              i = _l;
              var y = _.current.memoizedState.isDehydrated;
              if (y && (wi(_, d).flags |= 256), d = Qc(
                _,
                d,
                !1
              ), d !== 2) {
                if (Hc && !y) {
                  _.errorRecoveryDisabledLanes |= l, Gn |= l, i = 4;
                  break e;
                }
                l = Rt, Rt = i, l !== null && (Rt === null ? Rt = l : Rt.push.apply(
                  Rt,
                  l
                ));
              }
              i = d;
            }
            if (l = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          wi(e, 0), dn(e, t, 0, !0);
          break;
        }
        e: {
          switch (n = e, l = i, l) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              dn(
                n,
                t,
                qt,
                !sn
              );
              break e;
            case 2:
              Rt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && (i = wo + 300 - et(), 10 < i)) {
            if (dn(
              n,
              t,
              qt,
              !sn
            ), pe(n, 0, !0) !== 0) break e;
            Ha = t, n.timeoutHandle = vm(
              qf.bind(
                null,
                n,
                a,
                Rt,
                No,
                qc,
                t,
                qt,
                Gn,
                xi,
                sn,
                l,
                "Throttled",
                -0,
                0
              ),
              i
            );
            break e;
          }
          qf(
            n,
            a,
            Rt,
            No,
            qc,
            t,
            qt,
            Gn,
            xi,
            sn,
            l,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    pa(e);
  }
  function qf(e, t, a, n, i, l, d, _, y, C, q, Q, T, B) {
    if (e.timeoutHandle = -1, Q = t.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
      Q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Na
      }, Rf(
        t,
        l,
        Q
      );
      var re = (l & 62914560) === l ? wo - et() : (l & 4194048) === l ? Lf - et() : 0;
      if (re = Gh(
        Q,
        re
      ), re !== null) {
        Ha = l, e.cancelPendingCommit = re(
          If.bind(
            null,
            e,
            t,
            l,
            a,
            n,
            i,
            d,
            _,
            y,
            q,
            Q,
            null,
            T,
            B
          )
        ), dn(e, l, d, !C);
        return;
      }
    }
    If(
      e,
      t,
      l,
      a,
      n,
      i,
      d,
      _,
      y
    );
  }
  function th(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var n = 0; n < a.length; n++) {
          var i = a[n], l = i.getSnapshot;
          i = i.value;
          try {
            if (!Bt(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function dn(e, t, a, n) {
    t &= ~Vc, t &= ~Gn, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var l = 31 - ze(i), d = 1 << l;
      n[l] = -1, i &= ~d;
    }
    a !== 0 && Rl(e, a, t);
  }
  function Eo() {
    return (Xe & 6) === 0 ? (pl(0), !1) : !0;
  }
  function Xc() {
    if (Ue !== null) {
      if (Qe === 0)
        var e = Ue.return;
      else
        e = Ue, Aa = Cn = null, cc(e), mi = null, Fi = 0, e = Ue;
      for (; e !== null; )
        bf(e.alternate, e), e = e.return;
      Ue = null;
    }
  }
  function wi(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, xh(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Ha = 0, Xc(), Fe = e, Ue = a = Ma(e.current, null), Le = t, Qe = 0, Vt = null, sn = !1, yi = Te(e, t), Hc = !1, xi = qt = Vc = Gn = cn = ct = 0, Rt = _l = null, qc = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var i = 31 - ze(n), l = 1 << i;
        t |= e[i], n &= ~l;
      }
    return Ga = t, Xl(), a;
  }
  function Yf(e, t) {
    je = null, R.H = ol, t === fi || t === eo ? (t = id(), Qe = 3) : t === Is ? (t = id(), Qe = 4) : Qe = t === zc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, Ue === null && (ct = 1, go(
      e,
      Wt(t, e.current)
    ));
  }
  function Zf() {
    var e = Gt.current;
    return e === null ? !0 : (Le & 4194048) === Le ? ta === null : (Le & 62914560) === Le || (Le & 536870912) !== 0 ? e === ta : !1;
  }
  function Kf() {
    var e = R.H;
    return R.H = ol, e === null ? ol : e;
  }
  function Xf() {
    var e = R.A;
    return R.A = Pp, e;
  }
  function Mo() {
    ct = 4, sn || (Le & 4194048) !== Le && Gt.current !== null || (yi = !0), (cn & 134217727) === 0 && (Gn & 134217727) === 0 || Fe === null || dn(
      Fe,
      Le,
      qt,
      !1
    );
  }
  function Qc(e, t, a) {
    var n = Xe;
    Xe |= 2;
    var i = Kf(), l = Xf();
    (Fe !== e || Le !== t) && (No = null, wi(e, t)), t = !1;
    var d = ct;
    e: do
      try {
        if (Qe !== 0 && Ue !== null) {
          var _ = Ue, y = Vt;
          switch (Qe) {
            case 8:
              Xc(), d = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Gt.current === null && (t = !0);
              var C = Qe;
              if (Qe = 0, Vt = null, zi(e, _, y, C), a && yi) {
                d = 0;
                break e;
              }
              break;
            default:
              C = Qe, Qe = 0, Vt = null, zi(e, _, y, C);
          }
        }
        ah(), d = ct;
        break;
      } catch (q) {
        Yf(e, q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Aa = Cn = null, Xe = n, R.H = i, R.A = l, Ue === null && (Fe = null, Le = 0, Xl()), d;
  }
  function ah() {
    for (; Ue !== null; ) Qf(Ue);
  }
  function nh(e, t) {
    var a = Xe;
    Xe |= 2;
    var n = Kf(), i = Xf();
    Fe !== e || Le !== t ? (No = null, zo = et() + 500, wi(e, t)) : yi = Te(
      e,
      t
    );
    e: do
      try {
        if (Qe !== 0 && Ue !== null) {
          t = Ue;
          var l = Vt;
          t: switch (Qe) {
            case 1:
              Qe = 0, Vt = null, zi(e, t, l, 1);
              break;
            case 2:
            case 9:
              if (ad(l)) {
                Qe = 0, Vt = null, $f(t);
                break;
              }
              t = function() {
                Qe !== 2 && Qe !== 9 || Fe !== e || (Qe = 7), pa(e);
              }, l.then(t, t);
              break e;
            case 3:
              Qe = 7;
              break e;
            case 4:
              Qe = 5;
              break e;
            case 7:
              ad(l) ? (Qe = 0, Vt = null, $f(t)) : (Qe = 0, Vt = null, zi(e, t, l, 7));
              break;
            case 5:
              var d = null;
              switch (Ue.tag) {
                case 26:
                  d = Ue.memoizedState;
                case 5:
                case 27:
                  var _ = Ue;
                  if (d ? Om(d) : _.stateNode.complete) {
                    Qe = 0, Vt = null;
                    var y = _.sibling;
                    if (y !== null) Ue = y;
                    else {
                      var C = _.return;
                      C !== null ? (Ue = C, ko(C)) : Ue = null;
                    }
                    break t;
                  }
              }
              Qe = 0, Vt = null, zi(e, t, l, 5);
              break;
            case 6:
              Qe = 0, Vt = null, zi(e, t, l, 6);
              break;
            case 8:
              Xc(), ct = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        ih();
        break;
      } catch (q) {
        Yf(e, q);
      }
    while (!0);
    return Aa = Cn = null, R.H = n, R.A = i, Xe = a, Ue !== null ? 0 : (Fe = null, Le = 0, Xl(), ct);
  }
  function ih() {
    for (; Ue !== null && !Kn(); )
      Qf(Ue);
  }
  function Qf(e) {
    var t = hf(e.alternate, e, Ga);
    e.memoizedProps = e.pendingProps, t === null ? ko(e) : Ue = t;
  }
  function $f(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = df(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Le
        );
        break;
      case 11:
        t = df(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Le
        );
        break;
      case 5:
        cc(t);
      default:
        bf(a, t), t = Ue = Ku(t, Ga), t = hf(a, t, Ga);
    }
    e.memoizedProps = e.pendingProps, t === null ? ko(e) : Ue = t;
  }
  function zi(e, t, a, n) {
    Aa = Cn = null, cc(t), mi = null, Fi = 0;
    var i = t.return;
    try {
      if (Xp(
        e,
        i,
        t,
        a,
        Le
      )) {
        ct = 1, go(
          e,
          Wt(a, e.current)
        ), Ue = null;
        return;
      }
    } catch (l) {
      if (i !== null) throw Ue = i, l;
      ct = 1, go(
        e,
        Wt(a, e.current)
      ), Ue = null;
      return;
    }
    t.flags & 32768 ? (He || n === 1 ? e = !0 : yi || (Le & 536870912) !== 0 ? e = !1 : (sn = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Gt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Jf(t, e)) : ko(t);
  }
  function ko(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Jf(
          t,
          sn
        );
        return;
      }
      e = t.return;
      var a = Jp(
        t.alternate,
        t,
        Ga
      );
      if (a !== null) {
        Ue = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ue = t;
        return;
      }
      Ue = t = e;
    } while (t !== null);
    ct === 0 && (ct = 5);
  }
  function Jf(e, t) {
    do {
      var a = Ip(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Ue = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ue = e;
        return;
      }
      Ue = e = a;
    } while (e !== null);
    ct = 6, Ue = null;
  }
  function If(e, t, a, n, i, l, d, _, y) {
    e.cancelPendingCommit = null;
    do
      Ao();
    while (pt !== 0);
    if ((Xe & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (l = t.lanes | t.childLanes, l |= Ds, rs(
        e,
        a,
        l,
        d,
        _,
        y
      ), e === Fe && (Ue = Fe = null, Le = 0), Si = t, un = e, Ha = a, Yc = l, Zc = i, Gf = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ch(Qa, function() {
        return tm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = R.T, R.T = null, i = ee.p, ee.p = 2, d = Xe, Xe |= 4;
        try {
          Wp(e, t, a);
        } finally {
          Xe = d, ee.p = i, R.T = n;
        }
      }
      pt = 1, Wf(), Ff(), Pf();
    }
  }
  function Wf() {
    if (pt === 1) {
      pt = 0;
      var e = un, t = Si, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = R.T, R.T = null;
        var n = ee.p;
        ee.p = 2;
        var i = Xe;
        Xe |= 4;
        try {
          jf(t, e);
          var l = lr, d = Uu(e.containerInfo), _ = l.focusedElem, y = l.selectionRange;
          if (d !== _ && _ && _.ownerDocument && Du(
            _.ownerDocument.documentElement,
            _
          )) {
            if (y !== null && Cs(_)) {
              var C = y.start, q = y.end;
              if (q === void 0 && (q = C), "selectionStart" in _)
                _.selectionStart = C, _.selectionEnd = Math.min(
                  q,
                  _.value.length
                );
              else {
                var Q = _.ownerDocument || document, T = Q && Q.defaultView || window;
                if (T.getSelection) {
                  var B = T.getSelection(), re = _.textContent.length, we = Math.min(y.start, re), We = y.end === void 0 ? we : Math.min(y.end, re);
                  !B.extend && we > We && (d = We, We = we, we = d);
                  var E = Ru(
                    _,
                    we
                  ), z = Ru(
                    _,
                    We
                  );
                  if (E && z && (B.rangeCount !== 1 || B.anchorNode !== E.node || B.anchorOffset !== E.offset || B.focusNode !== z.node || B.focusOffset !== z.offset)) {
                    var A = Q.createRange();
                    A.setStart(E.node, E.offset), B.removeAllRanges(), we > We ? (B.addRange(A), B.extend(z.node, z.offset)) : (A.setEnd(z.node, z.offset), B.addRange(A));
                  }
                }
              }
            }
            for (Q = [], B = _; B = B.parentNode; )
              B.nodeType === 1 && Q.push({
                element: B,
                left: B.scrollLeft,
                top: B.scrollTop
              });
            for (typeof _.focus == "function" && _.focus(), _ = 0; _ < Q.length; _++) {
              var X = Q[_];
              X.element.scrollLeft = X.left, X.element.scrollTop = X.top;
            }
          }
          Vo = !!ir, lr = ir = null;
        } finally {
          Xe = i, ee.p = n, R.T = a;
        }
      }
      e.current = t, pt = 2;
    }
  }
  function Ff() {
    if (pt === 2) {
      pt = 0;
      var e = un, t = Si, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = R.T, R.T = null;
        var n = ee.p;
        ee.p = 2;
        var i = Xe;
        Xe |= 4;
        try {
          Ef(e, t.alternate, t);
        } finally {
          Xe = i, ee.p = n, R.T = a;
        }
      }
      pt = 3;
    }
  }
  function Pf() {
    if (pt === 4 || pt === 3) {
      pt = 0, dt();
      var e = un, t = Si, a = Ha, n = Gf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? pt = 5 : (pt = 0, Si = un = null, em(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (rn = null), ds(a), t = t.stateNode, ie && typeof ie.onCommitFiberRoot == "function")
        try {
          ie.onCommitFiberRoot(
            W,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        t = R.T, i = ee.p, ee.p = 2, R.T = null;
        try {
          for (var l = e.onRecoverableError, d = 0; d < n.length; d++) {
            var _ = n[d];
            l(_.value, {
              componentStack: _.stack
            });
          }
        } finally {
          R.T = t, ee.p = i;
        }
      }
      (Ha & 3) !== 0 && Ao(), pa(e), i = e.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? e === Kc ? gl++ : (gl = 0, Kc = e) : gl = 0, pl(0);
    }
  }
  function em(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ii(t)));
  }
  function Ao() {
    return Wf(), Ff(), Pf(), tm();
  }
  function tm() {
    if (pt !== 5) return !1;
    var e = un, t = Yc;
    Yc = 0;
    var a = ds(Ha), n = R.T, i = ee.p;
    try {
      ee.p = 32 > a ? 32 : a, R.T = null, a = Zc, Zc = null;
      var l = un, d = Ha;
      if (pt = 0, Si = un = null, Ha = 0, (Xe & 6) !== 0) throw Error(u(331));
      var _ = Xe;
      if (Xe |= 4, Uf(l.current), Of(
        l,
        l.current,
        d,
        a
      ), Xe = _, pl(0, !1), ie && typeof ie.onPostCommitFiberRoot == "function")
        try {
          ie.onPostCommitFiberRoot(W, l);
        } catch {
        }
      return !0;
    } finally {
      ee.p = i, R.T = n, em(e, t);
    }
  }
  function am(e, t, a) {
    t = Wt(a, t), t = wc(e.stateNode, t, 2), e = an(e, t, 2), e !== null && (Ae(e, 2), pa(e));
  }
  function $e(e, t, a) {
    if (e.tag === 3)
      am(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          am(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (rn === null || !rn.has(n))) {
            e = Wt(a, e), a = af(2), n = an(t, a, 2), n !== null && (nf(
              a,
              n,
              t,
              e
            ), Ae(n, 2), pa(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function $c(e, t, a) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new eh();
      var i = /* @__PURE__ */ new Set();
      n.set(t, i);
    } else
      i = n.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(t, i));
    i.has(a) || (Hc = !0, i.add(a), e = lh.bind(null, e, t, a), t.then(e, e));
  }
  function lh(e, t, a) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Fe === e && (Le & a) === a && (ct === 4 || ct === 3 && (Le & 62914560) === Le && 300 > et() - wo ? (Xe & 2) === 0 && wi(e, 0) : Vc |= a, xi === Le && (xi = 0)), pa(e);
  }
  function nm(e, t) {
    t === 0 && (t = Oe()), e = Mn(e, t), e !== null && (Ae(e, t), pa(e));
  }
  function oh(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), nm(e, a);
  }
  function sh(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode, i = e.memoizedState;
        i !== null && (a = i.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    n !== null && n.delete(t), nm(e, a);
  }
  function ch(e, t) {
    return la(e, t);
  }
  var Co = null, Ni = null, Jc = !1, jo = !1, Ic = !1, fn = 0;
  function pa(e) {
    e !== Ni && e.next === null && (Ni === null ? Co = Ni = e : Ni = Ni.next = e), jo = !0, Jc || (Jc = !0, uh());
  }
  function pl(e, t) {
    if (!Ic && jo) {
      Ic = !0;
      do
        for (var a = !1, n = Co; n !== null; ) {
          if (e !== 0) {
            var i = n.pendingLanes;
            if (i === 0) var l = 0;
            else {
              var d = n.suspendedLanes, _ = n.pingedLanes;
              l = (1 << 31 - ze(42 | e) + 1) - 1, l &= i & ~(d & ~_), l = l & 201326741 ? l & 201326741 | 1 : l ? l | 2 : 0;
            }
            l !== 0 && (a = !0, sm(n, l));
          } else
            l = Le, l = pe(
              n,
              n === Fe ? l : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (l & 3) === 0 || Te(n, l) || (a = !0, sm(n, l));
          n = n.next;
        }
      while (a);
      Ic = !1;
    }
  }
  function rh() {
    im();
  }
  function im() {
    jo = Jc = !1;
    var e = 0;
    fn !== 0 && yh() && (e = fn);
    for (var t = et(), a = null, n = Co; n !== null; ) {
      var i = n.next, l = lm(n, t);
      l === 0 ? (n.next = null, a === null ? Co = i : a.next = i, i === null && (Ni = a)) : (a = n, (e !== 0 || (l & 3) !== 0) && (jo = !0)), n = i;
    }
    pt !== 0 && pt !== 5 || pl(e), fn !== 0 && (fn = 0);
  }
  function lm(e, t) {
    for (var a = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes & -62914561; 0 < l; ) {
      var d = 31 - ze(l), _ = 1 << d, y = i[d];
      y === -1 ? ((_ & a) === 0 || (_ & n) !== 0) && (i[d] = ke(_, t)) : y <= t && (e.expiredLanes |= _), l &= ~_;
    }
    if (t = Fe, a = Le, a = pe(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, a === 0 || e === t && (Qe === 2 || Qe === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && wa(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Te(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (n !== null && wa(n), ds(a)) {
        case 2:
        case 8:
          a = Xa;
          break;
        case 32:
          a = Qa;
          break;
        case 268435456:
          a = Sn;
          break;
        default:
          a = Qa;
      }
      return n = om.bind(null, e), a = la(a, n), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return n !== null && n !== null && wa(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function om(e, t) {
    if (pt !== 0 && pt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Ao() && e.callbackNode !== a)
      return null;
    var n = Le;
    return n = pe(
      e,
      e === Fe ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (Vf(e, n, t), lm(e, et()), e.callbackNode != null && e.callbackNode === a ? om.bind(null, e) : null);
  }
  function sm(e, t) {
    if (Ao()) return null;
    Vf(e, t, !0);
  }
  function uh() {
    Sh(function() {
      (Xe & 6) !== 0 ? la(
        ht,
        rh
      ) : im();
    });
  }
  function Wc() {
    if (fn === 0) {
      var e = ui;
      e === 0 && (e = te, te <<= 1, (te & 261888) === 0 && (te = 256)), fn = e;
    }
    return fn;
  }
  function cm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ll("" + e);
  }
  function rm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function dh(e, t, a, n, i) {
    if (t === "submit" && a && a.stateNode === i) {
      var l = cm(
        (i[At] || null).action
      ), d = n.submitter;
      d && (t = (t = d[At] || null) ? cm(t.formAction) : d.getAttribute("formAction"), t !== null && (l = t, d = null));
      var _ = new ql(
        "action",
        "action",
        null,
        n,
        i
      );
      e.push({
        event: _,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (fn !== 0) {
                  var y = d ? rm(i, d) : new FormData(i);
                  hc(
                    a,
                    {
                      pending: !0,
                      data: y,
                      method: i.method,
                      action: l
                    },
                    null,
                    y
                  );
                }
              } else
                typeof l == "function" && (_.preventDefault(), y = d ? rm(i, d) : new FormData(i), hc(
                  a,
                  {
                    pending: !0,
                    data: y,
                    method: i.method,
                    action: l
                  },
                  l,
                  y
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var Fc = 0; Fc < Rs.length; Fc++) {
    var Pc = Rs[Fc], fh = Pc.toLowerCase(), mh = Pc[0].toUpperCase() + Pc.slice(1);
    oa(
      fh,
      "on" + mh
    );
  }
  oa(Gu, "onAnimationEnd"), oa(Hu, "onAnimationIteration"), oa(Vu, "onAnimationStart"), oa("dblclick", "onDoubleClick"), oa("focusin", "onFocus"), oa("focusout", "onBlur"), oa(Ap, "onTransitionRun"), oa(Cp, "onTransitionStart"), oa(jp, "onTransitionCancel"), oa(qu, "onTransitionEnd"), In("onMouseEnter", ["mouseout", "mouseover"]), In("onMouseLeave", ["mouseout", "mouseover"]), In("onPointerEnter", ["pointerout", "pointerover"]), In("onPointerLeave", ["pointerout", "pointerover"]), wn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), wn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), wn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), wn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), wn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), wn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var hl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), _h = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl)
  );
  function um(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var n = e[a], i = n.event;
      n = n.listeners;
      e: {
        var l = void 0;
        if (t)
          for (var d = n.length - 1; 0 <= d; d--) {
            var _ = n[d], y = _.instance, C = _.currentTarget;
            if (_ = _.listener, y !== l && i.isPropagationStopped())
              break e;
            l = _, i.currentTarget = C;
            try {
              l(i);
            } catch (q) {
              Kl(q);
            }
            i.currentTarget = null, l = y;
          }
        else
          for (d = 0; d < n.length; d++) {
            if (_ = n[d], y = _.instance, C = _.currentTarget, _ = _.listener, y !== l && i.isPropagationStopped())
              break e;
            l = _, i.currentTarget = C;
            try {
              l(i);
            } catch (q) {
              Kl(q);
            }
            i.currentTarget = null, l = y;
          }
      }
    }
  }
  function Be(e, t) {
    var a = t[fs];
    a === void 0 && (a = t[fs] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    a.has(n) || (dm(t, e, 2, !1), a.add(n));
  }
  function er(e, t, a) {
    var n = 0;
    t && (n |= 4), dm(
      a,
      e,
      n,
      t
    );
  }
  var To = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[To]) {
      e[To] = !0, nu.forEach(function(a) {
        a !== "selectionchange" && (_h.has(a) || er(a, !1, e), er(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[To] || (t[To] = !0, er("selectionchange", !1, t));
    }
  }
  function dm(e, t, a, n) {
    switch (Hm(t)) {
      case 2:
        var i = qh;
        break;
      case 8:
        i = Yh;
        break;
      default:
        i = pr;
    }
    a = i.bind(
      null,
      t,
      a,
      e
    ), i = void 0, !xs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, a, !0) : i !== void 0 ? e.addEventListener(t, a, {
      passive: i
    }) : e.addEventListener(t, a, !1);
  }
  function ar(e, t, a, n, i) {
    var l = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var d = n.tag;
        if (d === 3 || d === 4) {
          var _ = n.stateNode.containerInfo;
          if (_ === i) break;
          if (d === 4)
            for (d = n.return; d !== null; ) {
              var y = d.tag;
              if ((y === 3 || y === 4) && d.stateNode.containerInfo === i)
                return;
              d = d.return;
            }
          for (; _ !== null; ) {
            if (d = Qn(_), d === null) return;
            if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
              n = l = d;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        n = n.return;
      }
    gu(function() {
      var C = l, q = bs(a), Q = [];
      e: {
        var T = Yu.get(e);
        if (T !== void 0) {
          var B = ql, re = e;
          switch (e) {
            case "keypress":
              if (Hl(a) === 0) break e;
            case "keydown":
            case "keyup":
              B = sp;
              break;
            case "focusin":
              re = "focus", B = Ns;
              break;
            case "focusout":
              re = "blur", B = Ns;
              break;
            case "beforeblur":
            case "afterblur":
              B = Ns;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = vu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = Jg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = up;
              break;
            case Gu:
            case Hu:
            case Vu:
              B = Fg;
              break;
            case qu:
              B = fp;
              break;
            case "scroll":
            case "scrollend":
              B = Qg;
              break;
            case "wheel":
              B = _p;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = ep;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = yu;
              break;
            case "toggle":
            case "beforetoggle":
              B = pp;
          }
          var we = (t & 4) !== 0, We = !we && (e === "scroll" || e === "scrollend"), E = we ? T !== null ? T + "Capture" : null : T;
          we = [];
          for (var z = C, A; z !== null; ) {
            var X = z;
            if (A = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || A === null || E === null || (X = Gi(z, E), X != null && we.push(
              vl(z, X, A)
            )), We) break;
            z = z.return;
          }
          0 < we.length && (T = new B(
            T,
            re,
            null,
            a,
            q
          ), Q.push({ event: T, listeners: we }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (T = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", T && a !== vs && (re = a.relatedTarget || a.fromElement) && (Qn(re) || re[Xn]))
            break e;
          if ((B || T) && (T = q.window === q ? q : (T = q.ownerDocument) ? T.defaultView || T.parentWindow : window, B ? (re = a.relatedTarget || a.toElement, B = C, re = re ? Qn(re) : null, re !== null && (We = m(re), we = re.tag, re !== We || we !== 5 && we !== 27 && we !== 6) && (re = null)) : (B = null, re = C), B !== re)) {
            if (we = vu, X = "onMouseLeave", E = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (we = yu, X = "onPointerLeave", E = "onPointerEnter", z = "pointer"), We = B == null ? T : Li(B), A = re == null ? T : Li(re), T = new we(
              X,
              z + "leave",
              B,
              a,
              q
            ), T.target = We, T.relatedTarget = A, X = null, Qn(q) === C && (we = new we(
              E,
              z + "enter",
              re,
              a,
              q
            ), we.target = A, we.relatedTarget = We, X = we), We = X, B && re)
              t: {
                for (we = gh, E = B, z = re, A = 0, X = E; X; X = we(X))
                  A++;
                X = 0;
                for (var he = z; he; he = we(he))
                  X++;
                for (; 0 < A - X; )
                  E = we(E), A--;
                for (; 0 < X - A; )
                  z = we(z), X--;
                for (; A--; ) {
                  if (E === z || z !== null && E === z.alternate) {
                    we = E;
                    break t;
                  }
                  E = we(E), z = we(z);
                }
                we = null;
              }
            else we = null;
            B !== null && fm(
              Q,
              T,
              B,
              we,
              !1
            ), re !== null && We !== null && fm(
              Q,
              We,
              re,
              we,
              !0
            );
          }
        }
        e: {
          if (T = C ? Li(C) : window, B = T.nodeName && T.nodeName.toLowerCase(), B === "select" || B === "input" && T.type === "file")
            var Ye = ku;
          else if (Eu(T))
            if (Au)
              Ye = Ep;
            else {
              Ye = zp;
              var fe = wp;
            }
          else
            B = T.nodeName, !B || B.toLowerCase() !== "input" || T.type !== "checkbox" && T.type !== "radio" ? C && hs(C.elementType) && (Ye = ku) : Ye = Np;
          if (Ye && (Ye = Ye(e, C))) {
            Mu(
              Q,
              Ye,
              a,
              q
            );
            break e;
          }
          fe && fe(e, T, C), e === "focusout" && C && T.type === "number" && C.memoizedProps.value != null && ps(T, "number", T.value);
        }
        switch (fe = C ? Li(C) : window, e) {
          case "focusin":
            (Eu(fe) || fe.contentEditable === "true") && (ai = fe, js = C, Qi = null);
            break;
          case "focusout":
            Qi = js = ai = null;
            break;
          case "mousedown":
            Ts = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ts = !1, Bu(Q, a, q);
            break;
          case "selectionchange":
            if (kp) break;
          case "keydown":
          case "keyup":
            Bu(Q, a, q);
        }
        var Re;
        if (Ms)
          e: {
            switch (e) {
              case "compositionstart":
                var Ge = "onCompositionStart";
                break e;
              case "compositionend":
                Ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ge = "onCompositionUpdate";
                break e;
            }
            Ge = void 0;
          }
        else
          ti ? zu(e, a) && (Ge = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ge = "onCompositionStart");
        Ge && (xu && a.locale !== "ko" && (ti || Ge !== "onCompositionStart" ? Ge === "onCompositionEnd" && ti && (Re = pu()) : (Ja = q, Ss = "value" in Ja ? Ja.value : Ja.textContent, ti = !0)), fe = Oo(C, Ge), 0 < fe.length && (Ge = new bu(
          Ge,
          e,
          null,
          a,
          q
        ), Q.push({ event: Ge, listeners: fe }), Re ? Ge.data = Re : (Re = Nu(a), Re !== null && (Ge.data = Re)))), (Re = vp ? bp(e, a) : yp(e, a)) && (Ge = Oo(C, "onBeforeInput"), 0 < Ge.length && (fe = new bu(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          q
        ), Q.push({
          event: fe,
          listeners: Ge
        }), fe.data = Re)), dh(
          Q,
          e,
          C,
          a,
          q
        );
      }
      um(Q, t);
    });
  }
  function vl(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Oo(e, t) {
    for (var a = t + "Capture", n = []; e !== null; ) {
      var i = e, l = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || l === null || (i = Gi(e, a), i != null && n.unshift(
        vl(e, i, l)
      ), i = Gi(e, t), i != null && n.push(
        vl(e, i, l)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function gh(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function fm(e, t, a, n, i) {
    for (var l = t._reactName, d = []; a !== null && a !== n; ) {
      var _ = a, y = _.alternate, C = _.stateNode;
      if (_ = _.tag, y !== null && y === n) break;
      _ !== 5 && _ !== 26 && _ !== 27 || C === null || (y = C, i ? (C = Gi(a, l), C != null && d.unshift(
        vl(a, C, y)
      )) : i || (C = Gi(a, l), C != null && d.push(
        vl(a, C, y)
      ))), a = a.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var ph = /\r\n?/g, hh = /\u0000|\uFFFD/g;
  function mm(e) {
    return (typeof e == "string" ? e : "" + e).replace(ph, `
`).replace(hh, "");
  }
  function _m(e, t) {
    return t = mm(t), mm(e) === t;
  }
  function Ie(e, t, a, n, i, l) {
    switch (a) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || Fn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && Fn(e, "" + n);
        break;
      case "className":
        Ul(e, "class", n);
        break;
      case "tabIndex":
        Ul(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ul(e, a, n);
        break;
      case "style":
        mu(e, n, l);
        break;
      case "data":
        if (t !== "object") {
          Ul(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(a);
          break;
        }
        n = Ll("" + n), e.setAttribute(a, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof l == "function" && (a === "formAction" ? (t !== "input" && Ie(e, t, "name", i.name, i, null), Ie(
            e,
            t,
            "formEncType",
            i.formEncType,
            i,
            null
          ), Ie(
            e,
            t,
            "formMethod",
            i.formMethod,
            i,
            null
          ), Ie(
            e,
            t,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (Ie(e, t, "encType", i.encType, i, null), Ie(e, t, "method", i.method, i, null), Ie(e, t, "target", i.target, i, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(a);
          break;
        }
        n = Ll("" + n), e.setAttribute(a, n);
        break;
      case "onClick":
        n != null && (e.onclick = Na);
        break;
      case "onScroll":
        n != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Be("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(u(61));
          if (a = n.__html, a != null) {
            if (i.children != null) throw Error(u(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = Ll("" + n), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, "" + n) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        n === !0 ? e.setAttribute(a, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, n) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(a, n) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(a) : e.setAttribute(a, n);
        break;
      case "popover":
        Be("beforetoggle", e), Be("toggle", e), Dl(e, "popover", n);
        break;
      case "xlinkActuate":
        za(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        za(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        za(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        za(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        za(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        za(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        za(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        za(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        za(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Dl(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Kg.get(a) || a, Dl(e, a, n));
    }
  }
  function nr(e, t, a, n, i, l) {
    switch (a) {
      case "style":
        mu(e, n, l);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(u(61));
          if (a = n.__html, a != null) {
            if (i.children != null) throw Error(u(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof n == "string" ? Fn(e, n) : (typeof n == "number" || typeof n == "bigint") && Fn(e, "" + n);
        break;
      case "onScroll":
        n != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Be("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Na);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!iu.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (i = a.endsWith("Capture"), t = a.slice(2, i ? a.length - 7 : void 0), l = e[At] || null, l = l != null ? l[a] : null, typeof l == "function" && e.removeEventListener(t, l, i), typeof n == "function")) {
              typeof l != "function" && l !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, n, i);
              break e;
            }
            a in e ? e[a] = n : n === !0 ? e.setAttribute(a, "") : Dl(e, a, n);
          }
    }
  }
  function Nt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Be("error", e), Be("load", e);
        var n = !1, i = !1, l;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var d = a[l];
            if (d != null)
              switch (l) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  Ie(e, t, l, d, a, null);
              }
          }
        i && Ie(e, t, "srcSet", a.srcSet, a, null), n && Ie(e, t, "src", a.src, a, null);
        return;
      case "input":
        Be("invalid", e);
        var _ = l = d = i = null, y = null, C = null;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var q = a[n];
            if (q != null)
              switch (n) {
                case "name":
                  i = q;
                  break;
                case "type":
                  d = q;
                  break;
                case "checked":
                  y = q;
                  break;
                case "defaultChecked":
                  C = q;
                  break;
                case "value":
                  l = q;
                  break;
                case "defaultValue":
                  _ = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(u(137, t));
                  break;
                default:
                  Ie(e, t, n, q, a, null);
              }
          }
        ru(
          e,
          l,
          _,
          y,
          C,
          d,
          i,
          !1
        );
        return;
      case "select":
        Be("invalid", e), n = d = l = null;
        for (i in a)
          if (a.hasOwnProperty(i) && (_ = a[i], _ != null))
            switch (i) {
              case "value":
                l = _;
                break;
              case "defaultValue":
                d = _;
                break;
              case "multiple":
                n = _;
              default:
                Ie(e, t, i, _, a, null);
            }
        t = l, a = d, e.multiple = !!n, t != null ? Wn(e, !!n, t, !1) : a != null && Wn(e, !!n, a, !0);
        return;
      case "textarea":
        Be("invalid", e), l = i = n = null;
        for (d in a)
          if (a.hasOwnProperty(d) && (_ = a[d], _ != null))
            switch (d) {
              case "value":
                n = _;
                break;
              case "defaultValue":
                i = _;
                break;
              case "children":
                l = _;
                break;
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(u(91));
                break;
              default:
                Ie(e, t, d, _, a, null);
            }
        du(e, n, i, l);
        return;
      case "option":
        for (y in a)
          a.hasOwnProperty(y) && (n = a[y], n != null) && (y === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : Ie(e, t, y, n, a, null));
        return;
      case "dialog":
        Be("beforetoggle", e), Be("toggle", e), Be("cancel", e), Be("close", e);
        break;
      case "iframe":
      case "object":
        Be("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < hl.length; n++)
          Be(hl[n], e);
        break;
      case "image":
        Be("error", e), Be("load", e);
        break;
      case "details":
        Be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Be("error", e), Be("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in a)
          if (a.hasOwnProperty(C) && (n = a[C], n != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                Ie(e, t, C, n, a, null);
            }
        return;
      default:
        if (hs(t)) {
          for (q in a)
            a.hasOwnProperty(q) && (n = a[q], n !== void 0 && nr(
              e,
              t,
              q,
              n,
              a,
              void 0
            ));
          return;
        }
    }
    for (_ in a)
      a.hasOwnProperty(_) && (n = a[_], n != null && Ie(e, t, _, n, a, null));
  }
  function vh(e, t, a, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null, l = null, d = null, _ = null, y = null, C = null, q = null;
        for (B in a) {
          var Q = a[B];
          if (a.hasOwnProperty(B) && Q != null)
            switch (B) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = Q;
              default:
                n.hasOwnProperty(B) || Ie(e, t, B, null, n, Q);
            }
        }
        for (var T in n) {
          var B = n[T];
          if (Q = a[T], n.hasOwnProperty(T) && (B != null || Q != null))
            switch (T) {
              case "type":
                l = B;
                break;
              case "name":
                i = B;
                break;
              case "checked":
                C = B;
                break;
              case "defaultChecked":
                q = B;
                break;
              case "value":
                d = B;
                break;
              case "defaultValue":
                _ = B;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(u(137, t));
                break;
              default:
                B !== Q && Ie(
                  e,
                  t,
                  T,
                  B,
                  n,
                  Q
                );
            }
        }
        gs(
          e,
          d,
          _,
          y,
          C,
          q,
          l,
          i
        );
        return;
      case "select":
        B = d = _ = T = null;
        for (l in a)
          if (y = a[l], a.hasOwnProperty(l) && y != null)
            switch (l) {
              case "value":
                break;
              case "multiple":
                B = y;
              default:
                n.hasOwnProperty(l) || Ie(
                  e,
                  t,
                  l,
                  null,
                  n,
                  y
                );
            }
        for (i in n)
          if (l = n[i], y = a[i], n.hasOwnProperty(i) && (l != null || y != null))
            switch (i) {
              case "value":
                T = l;
                break;
              case "defaultValue":
                _ = l;
                break;
              case "multiple":
                d = l;
              default:
                l !== y && Ie(
                  e,
                  t,
                  i,
                  l,
                  n,
                  y
                );
            }
        t = _, a = d, n = B, T != null ? Wn(e, !!a, T, !1) : !!n != !!a && (t != null ? Wn(e, !!a, t, !0) : Wn(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        B = T = null;
        for (_ in a)
          if (i = a[_], a.hasOwnProperty(_) && i != null && !n.hasOwnProperty(_))
            switch (_) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ie(e, t, _, null, n, i);
            }
        for (d in n)
          if (i = n[d], l = a[d], n.hasOwnProperty(d) && (i != null || l != null))
            switch (d) {
              case "value":
                T = i;
                break;
              case "defaultValue":
                B = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(u(91));
                break;
              default:
                i !== l && Ie(e, t, d, i, n, l);
            }
        uu(e, T, B);
        return;
      case "option":
        for (var re in a)
          T = a[re], a.hasOwnProperty(re) && T != null && !n.hasOwnProperty(re) && (re === "selected" ? e.selected = !1 : Ie(
            e,
            t,
            re,
            null,
            n,
            T
          ));
        for (y in n)
          T = n[y], B = a[y], n.hasOwnProperty(y) && T !== B && (T != null || B != null) && (y === "selected" ? e.selected = T && typeof T != "function" && typeof T != "symbol" : Ie(
            e,
            t,
            y,
            T,
            n,
            B
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var we in a)
          T = a[we], a.hasOwnProperty(we) && T != null && !n.hasOwnProperty(we) && Ie(e, t, we, null, n, T);
        for (C in n)
          if (T = n[C], B = a[C], n.hasOwnProperty(C) && T !== B && (T != null || B != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(u(137, t));
                break;
              default:
                Ie(
                  e,
                  t,
                  C,
                  T,
                  n,
                  B
                );
            }
        return;
      default:
        if (hs(t)) {
          for (var We in a)
            T = a[We], a.hasOwnProperty(We) && T !== void 0 && !n.hasOwnProperty(We) && nr(
              e,
              t,
              We,
              void 0,
              n,
              T
            );
          for (q in n)
            T = n[q], B = a[q], !n.hasOwnProperty(q) || T === B || T === void 0 && B === void 0 || nr(
              e,
              t,
              q,
              T,
              n,
              B
            );
          return;
        }
    }
    for (var E in a)
      T = a[E], a.hasOwnProperty(E) && T != null && !n.hasOwnProperty(E) && Ie(e, t, E, null, n, T);
    for (Q in n)
      T = n[Q], B = a[Q], !n.hasOwnProperty(Q) || T === B || T == null && B == null || Ie(e, t, Q, T, n, B);
  }
  function gm(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), n = 0; n < a.length; n++) {
        var i = a[n], l = i.transferSize, d = i.initiatorType, _ = i.duration;
        if (l && _ && gm(d)) {
          for (d = 0, _ = i.responseEnd, n += 1; n < a.length; n++) {
            var y = a[n], C = y.startTime;
            if (C > _) break;
            var q = y.transferSize, Q = y.initiatorType;
            q && gm(Q) && (y = y.responseEnd, d += q * (y < _ ? 1 : (_ - C) / (y - C)));
          }
          if (--n, t += 8 * (l + d) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var ir = null, lr = null;
  function Ro(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function pm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function hm(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function or(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var sr = null;
  function yh() {
    var e = window.event;
    return e && e.type === "popstate" ? e === sr ? !1 : (sr = e, !0) : (sr = null, !1);
  }
  var vm = typeof setTimeout == "function" ? setTimeout : void 0, xh = typeof clearTimeout == "function" ? clearTimeout : void 0, bm = typeof Promise == "function" ? Promise : void 0, Sh = typeof queueMicrotask == "function" ? queueMicrotask : typeof bm < "u" ? function(e) {
    return bm.resolve(null).then(e).catch(wh);
  } : vm;
  function wh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function mn(e) {
    return e === "head";
  }
  function ym(e, t) {
    var a = t, n = 0;
    do {
      var i = a.nextSibling;
      if (e.removeChild(a), i && i.nodeType === 8)
        if (a = i.data, a === "/$" || a === "/&") {
          if (n === 0) {
            e.removeChild(i), Ai(t);
            return;
          }
          n--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          n++;
        else if (a === "html")
          bl(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, bl(a);
          for (var l = a.firstChild; l; ) {
            var d = l.nextSibling, _ = l.nodeName;
            l[Bi] || _ === "SCRIPT" || _ === "STYLE" || _ === "LINK" && l.rel.toLowerCase() === "stylesheet" || a.removeChild(l), l = d;
          }
        } else
          a === "body" && bl(e.ownerDocument.body);
      a = i;
    } while (a);
    Ai(t);
  }
  function xm(e, t) {
    var a = e;
    e = 0;
    do {
      var n = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), n && n.nodeType === 8)
        if (a = n.data, a === "/$") {
          if (e === 0) break;
          e--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = n;
    } while (a);
  }
  function cr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          cr(a), ms(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function zh(e, t, a, n) {
    for (; e.nodeType === 1; ) {
      var i = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (n) {
        if (!e[Bi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (l = e.getAttribute("rel"), l === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (l !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (l = e.getAttribute("src"), (l !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && l && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var l = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === l)
          return e;
      } else return e;
      if (e = aa(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Nh(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = aa(e.nextSibling), e === null)) return null;
    return e;
  }
  function Sm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = aa(e.nextSibling), e === null)) return null;
    return e;
  }
  function rr(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ur(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Eh(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var n = function() {
        t(), a.removeEventListener("DOMContentLoaded", n);
      };
      a.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
    }
  }
  function aa(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var dr = null;
  function wm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return aa(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function zm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Nm(e, t, a) {
    switch (t = Ro(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(u(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(u(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function bl(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    ms(e);
  }
  var na = /* @__PURE__ */ new Map(), Em = /* @__PURE__ */ new Set();
  function Do(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Va = ee.d;
  ee.d = {
    f: Mh,
    r: kh,
    D: Ah,
    C: Ch,
    L: jh,
    m: Th,
    X: Rh,
    S: Oh,
    M: Dh
  };
  function Mh() {
    var e = Va.f(), t = Eo();
    return e || t;
  }
  function kh(e) {
    var t = $n(e);
    t !== null && t.tag === 5 && t.type === "form" ? qd(t) : Va.r(e);
  }
  var Ei = typeof document > "u" ? null : document;
  function Mm(e, t, a) {
    var n = Ei;
    if (n && typeof t == "string" && t) {
      var i = Jt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof a == "string" && (i += '[crossorigin="' + a + '"]'), Em.has(i) || (Em.add(i), e = { rel: e, crossOrigin: a, href: t }, n.querySelector(i) === null && (t = n.createElement("link"), Nt(t, "link", e), vt(t), n.head.appendChild(t)));
    }
  }
  function Ah(e) {
    Va.D(e), Mm("dns-prefetch", e, null);
  }
  function Ch(e, t) {
    Va.C(e, t), Mm("preconnect", e, t);
  }
  function jh(e, t, a) {
    Va.L(e, t, a);
    var n = Ei;
    if (n && e && t) {
      var i = 'link[rel="preload"][as="' + Jt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (i += '[imagesrcset="' + Jt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (i += '[imagesizes="' + Jt(
        a.imageSizes
      ) + '"]')) : i += '[href="' + Jt(e) + '"]';
      var l = i;
      switch (t) {
        case "style":
          l = Mi(e);
          break;
        case "script":
          l = ki(e);
      }
      na.has(l) || (e = w(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), na.set(l, e), n.querySelector(i) !== null || t === "style" && n.querySelector(yl(l)) || t === "script" && n.querySelector(xl(l)) || (t = n.createElement("link"), Nt(t, "link", e), vt(t), n.head.appendChild(t)));
    }
  }
  function Th(e, t) {
    Va.m(e, t);
    var a = Ei;
    if (a && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Jt(n) + '"][href="' + Jt(e) + '"]', l = i;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          l = ki(e);
      }
      if (!na.has(l) && (e = w({ rel: "modulepreload", href: e }, t), na.set(l, e), a.querySelector(i) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(xl(l)))
              return;
        }
        n = a.createElement("link"), Nt(n, "link", e), vt(n), a.head.appendChild(n);
      }
    }
  }
  function Oh(e, t, a) {
    Va.S(e, t, a);
    var n = Ei;
    if (n && e) {
      var i = Jn(n).hoistableStyles, l = Mi(e);
      t = t || "default";
      var d = i.get(l);
      if (!d) {
        var _ = { loading: 0, preload: null };
        if (d = n.querySelector(
          yl(l)
        ))
          _.loading = 5;
        else {
          e = w(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = na.get(l)) && fr(e, a);
          var y = d = n.createElement("link");
          vt(y), Nt(y, "link", e), y._p = new Promise(function(C, q) {
            y.onload = C, y.onerror = q;
          }), y.addEventListener("load", function() {
            _.loading |= 1;
          }), y.addEventListener("error", function() {
            _.loading |= 2;
          }), _.loading |= 4, Uo(d, t, n);
        }
        d = {
          type: "stylesheet",
          instance: d,
          count: 1,
          state: _
        }, i.set(l, d);
      }
    }
  }
  function Rh(e, t) {
    Va.X(e, t);
    var a = Ei;
    if (a && e) {
      var n = Jn(a).hoistableScripts, i = ki(e), l = n.get(i);
      l || (l = a.querySelector(xl(i)), l || (e = w({ src: e, async: !0 }, t), (t = na.get(i)) && mr(e, t), l = a.createElement("script"), vt(l), Nt(l, "link", e), a.head.appendChild(l)), l = {
        type: "script",
        instance: l,
        count: 1,
        state: null
      }, n.set(i, l));
    }
  }
  function Dh(e, t) {
    Va.M(e, t);
    var a = Ei;
    if (a && e) {
      var n = Jn(a).hoistableScripts, i = ki(e), l = n.get(i);
      l || (l = a.querySelector(xl(i)), l || (e = w({ src: e, async: !0, type: "module" }, t), (t = na.get(i)) && mr(e, t), l = a.createElement("script"), vt(l), Nt(l, "link", e), a.head.appendChild(l)), l = {
        type: "script",
        instance: l,
        count: 1,
        state: null
      }, n.set(i, l));
    }
  }
  function km(e, t, a, n) {
    var i = (i = me.current) ? Do(i) : null;
    if (!i) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Mi(a.href), a = Jn(
          i
        ).hoistableStyles, n = a.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Mi(a.href);
          var l = Jn(
            i
          ).hoistableStyles, d = l.get(e);
          if (d || (i = i.ownerDocument || i, d = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, l.set(e, d), (l = i.querySelector(
            yl(e)
          )) && !l._p && (d.instance = l, d.state.loading = 5), na.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, na.set(e, a), l || Uh(
            i,
            e,
            a,
            d.state
          ))), t && n === null)
            throw Error(u(528, ""));
          return d;
        }
        if (t && n !== null)
          throw Error(u(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ki(a), a = Jn(
          i
        ).hoistableScripts, n = a.get(t), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(u(444, e));
    }
  }
  function Mi(e) {
    return 'href="' + Jt(e) + '"';
  }
  function yl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Am(e) {
    return w({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Uh(e, t, a, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), Nt(t, "link", a), vt(t), e.head.appendChild(t));
  }
  function ki(e) {
    return '[src="' + Jt(e) + '"]';
  }
  function xl(e) {
    return "script[async]" + e;
  }
  function Cm(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + Jt(a.href) + '"]'
          );
          if (n)
            return t.instance = n, vt(n), n;
          var i = w({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), vt(n), Nt(n, "style", i), Uo(n, a.precedence, e), t.instance = n;
        case "stylesheet":
          i = Mi(a.href);
          var l = e.querySelector(
            yl(i)
          );
          if (l)
            return t.state.loading |= 4, t.instance = l, vt(l), l;
          n = Am(a), (i = na.get(i)) && fr(n, i), l = (e.ownerDocument || e).createElement("link"), vt(l);
          var d = l;
          return d._p = new Promise(function(_, y) {
            d.onload = _, d.onerror = y;
          }), Nt(l, "link", n), t.state.loading |= 4, Uo(l, a.precedence, e), t.instance = l;
        case "script":
          return l = ki(a.src), (i = e.querySelector(
            xl(l)
          )) ? (t.instance = i, vt(i), i) : (n = a, (i = na.get(l)) && (n = w({}, a), mr(n, i)), e = e.ownerDocument || e, i = e.createElement("script"), vt(i), Nt(i, "link", n), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, Uo(n, a.precedence, e));
    return t.instance;
  }
  function Uo(e, t, a) {
    for (var n = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = n.length ? n[n.length - 1] : null, l = i, d = 0; d < n.length; d++) {
      var _ = n[d];
      if (_.dataset.precedence === t) l = _;
      else if (l !== i) break;
    }
    l ? l.parentNode.insertBefore(e, l.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function fr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function mr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Bo = null;
  function jm(e, t, a) {
    if (Bo === null) {
      var n = /* @__PURE__ */ new Map(), i = Bo = /* @__PURE__ */ new Map();
      i.set(a, n);
    } else
      i = Bo, n = i.get(a), n || (n = /* @__PURE__ */ new Map(), i.set(a, n));
    if (n.has(e)) return n;
    for (n.set(e, null), a = a.getElementsByTagName(e), i = 0; i < a.length; i++) {
      var l = a[i];
      if (!(l[Bi] || l[xt] || e === "link" && l.getAttribute("rel") === "stylesheet") && l.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = l.getAttribute(t) || "";
        d = e + d;
        var _ = n.get(d);
        _ ? _.push(l) : n.set(d, [l]);
      }
    }
    return n;
  }
  function Tm(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Bh(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Om(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Lh(e, t, a, n) {
    if (a.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var i = Mi(n.href), l = t.querySelector(
          yl(i)
        );
        if (l) {
          t = l._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Lo.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = l, vt(l);
          return;
        }
        l = t.ownerDocument || t, n = Am(n), (i = na.get(i)) && fr(n, i), l = l.createElement("link"), vt(l);
        var d = l;
        d._p = new Promise(function(_, y) {
          d.onload = _, d.onerror = y;
        }), Nt(l, "link", n), a.instance = l;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Lo.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var _r = 0;
  function Gh(e, t) {
    return e.stylesheets && e.count === 0 && Ho(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var n = setTimeout(function() {
        if (e.stylesheets && Ho(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4 + t);
      0 < e.imgBytes && _r === 0 && (_r = 62500 * bh());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ho(e, e.stylesheets), e.unsuspend)) {
            var l = e.unsuspend;
            e.unsuspend = null, l();
          }
        },
        (e.imgBytes > _r ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(i);
      };
    } : null;
  }
  function Lo() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ho(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Go = null;
  function Ho(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Go = /* @__PURE__ */ new Map(), t.forEach(Hh, e), Go = null, Lo.call(e));
  }
  function Hh(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Go.get(e);
      if (a) var n = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Go.set(e, a);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), l = 0; l < i.length; l++) {
          var d = i[l];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), n = d);
        }
        n && a.set(null, n);
      }
      i = t.instance, d = i.getAttribute("data-precedence"), l = a.get(d) || n, l === n && a.set(null, i), a.set(d, i), this.count++, n = Lo.bind(this), i.addEventListener("load", n), i.addEventListener("error", n), l ? l.parentNode.insertBefore(i, l.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Sl = {
    $$typeof: Z,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0
  };
  function Vh(e, t, a, n, i, l, d, _, y) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ve(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ve(0), this.hiddenUpdates = Ve(null), this.identifierPrefix = n, this.onUncaughtError = i, this.onCaughtError = l, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Rm(e, t, a, n, i, l, d, _, y, C, q, Q) {
    return e = new Vh(
      e,
      t,
      a,
      d,
      y,
      C,
      q,
      Q,
      _
    ), t = 1, l === !0 && (t |= 24), l = Lt(3, null, null, t), e.current = l, l.stateNode = e, t = Qs(), t.refCount++, e.pooledCache = t, t.refCount++, l.memoizedState = {
      element: n,
      isDehydrated: a,
      cache: t
    }, Ws(l), e;
  }
  function Dm(e) {
    return e ? (e = li, e) : li;
  }
  function Um(e, t, a, n, i, l) {
    i = Dm(i), n.context === null ? n.context = i : n.pendingContext = i, n = tn(t), n.payload = { element: a }, l = l === void 0 ? null : l, l !== null && (n.callback = l), a = an(e, n, t), a !== null && (Dt(a, e, t), el(a, e, t));
  }
  function Bm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function gr(e, t) {
    Bm(e, t), (e = e.alternate) && Bm(e, t);
  }
  function Lm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Mn(e, 67108864);
      t !== null && Dt(t, e, 67108864), gr(e, 67108864);
    }
  }
  function Gm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yt();
      t = us(t);
      var a = Mn(e, t);
      a !== null && Dt(a, e, t), gr(e, t);
    }
  }
  var Vo = !0;
  function qh(e, t, a, n) {
    var i = R.T;
    R.T = null;
    var l = ee.p;
    try {
      ee.p = 2, pr(e, t, a, n);
    } finally {
      ee.p = l, R.T = i;
    }
  }
  function Yh(e, t, a, n) {
    var i = R.T;
    R.T = null;
    var l = ee.p;
    try {
      ee.p = 8, pr(e, t, a, n);
    } finally {
      ee.p = l, R.T = i;
    }
  }
  function pr(e, t, a, n) {
    if (Vo) {
      var i = hr(n);
      if (i === null)
        ar(
          e,
          t,
          n,
          qo,
          a
        ), Vm(e, n);
      else if (Kh(
        i,
        e,
        t,
        a,
        n
      ))
        n.stopPropagation();
      else if (Vm(e, n), t & 4 && -1 < Zh.indexOf(e)) {
        for (; i !== null; ) {
          var l = $n(i);
          if (l !== null)
            switch (l.tag) {
              case 3:
                if (l = l.stateNode, l.current.memoizedState.isDehydrated) {
                  var d = ce(l.pendingLanes);
                  if (d !== 0) {
                    var _ = l;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; d; ) {
                      var y = 1 << 31 - ze(d);
                      _.entanglements[1] |= y, d &= ~y;
                    }
                    pa(l), (Xe & 6) === 0 && (zo = et() + 500, pl(0));
                  }
                }
                break;
              case 31:
              case 13:
                _ = Mn(l, 2), _ !== null && Dt(_, l, 2), Eo(), gr(l, 2);
            }
          if (l = hr(n), l === null && ar(
            e,
            t,
            n,
            qo,
            a
          ), l === i) break;
          i = l;
        }
        i !== null && n.stopPropagation();
      } else
        ar(
          e,
          t,
          n,
          null,
          a
        );
    }
  }
  function hr(e) {
    return e = bs(e), vr(e);
  }
  var qo = null;
  function vr(e) {
    if (qo = null, e = Qn(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = b(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return qo = e, null;
  }
  function Hm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (yn()) {
          case ht:
            return 2;
          case Xa:
            return 8;
          case Qa:
          case xn:
            return 32;
          case Sn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var br = !1, _n = null, gn = null, pn = null, wl = /* @__PURE__ */ new Map(), zl = /* @__PURE__ */ new Map(), hn = [], Zh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Vm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        _n = null;
        break;
      case "dragenter":
      case "dragleave":
        gn = null;
        break;
      case "mouseover":
      case "mouseout":
        pn = null;
        break;
      case "pointerover":
      case "pointerout":
        wl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zl.delete(t.pointerId);
    }
  }
  function Nl(e, t, a, n, i, l) {
    return e === null || e.nativeEvent !== l ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: n,
      nativeEvent: l,
      targetContainers: [i]
    }, t !== null && (t = $n(t), t !== null && Lm(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Kh(e, t, a, n, i) {
    switch (t) {
      case "focusin":
        return _n = Nl(
          _n,
          e,
          t,
          a,
          n,
          i
        ), !0;
      case "dragenter":
        return gn = Nl(
          gn,
          e,
          t,
          a,
          n,
          i
        ), !0;
      case "mouseover":
        return pn = Nl(
          pn,
          e,
          t,
          a,
          n,
          i
        ), !0;
      case "pointerover":
        var l = i.pointerId;
        return wl.set(
          l,
          Nl(
            wl.get(l) || null,
            e,
            t,
            a,
            n,
            i
          )
        ), !0;
      case "gotpointercapture":
        return l = i.pointerId, zl.set(
          l,
          Nl(
            zl.get(l) || null,
            e,
            t,
            a,
            n,
            i
          )
        ), !0;
    }
    return !1;
  }
  function qm(e) {
    var t = Qn(e.target);
    if (t !== null) {
      var a = m(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = h(a), t !== null) {
            e.blockedOn = t, tu(e.priority, function() {
              Gm(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = b(a), t !== null) {
            e.blockedOn = t, tu(e.priority, function() {
              Gm(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Yo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = hr(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var n = new a.constructor(
          a.type,
          a
        );
        vs = n, a.target.dispatchEvent(n), vs = null;
      } else
        return t = $n(a), t !== null && Lm(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Ym(e, t, a) {
    Yo(e) && a.delete(t);
  }
  function Xh() {
    br = !1, _n !== null && Yo(_n) && (_n = null), gn !== null && Yo(gn) && (gn = null), pn !== null && Yo(pn) && (pn = null), wl.forEach(Ym), zl.forEach(Ym);
  }
  function Zo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, br || (br = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      Xh
    )));
  }
  var Ko = null;
  function Zm(e) {
    Ko !== e && (Ko = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Ko === e && (Ko = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], n = e[t + 1], i = e[t + 2];
          if (typeof n != "function") {
            if (vr(n || a) === null)
              continue;
            break;
          }
          var l = $n(a);
          l !== null && (e.splice(t, 3), t -= 3, hc(
            l,
            {
              pending: !0,
              data: i,
              method: a.method,
              action: n
            },
            n,
            i
          ));
        }
      }
    ));
  }
  function Ai(e) {
    function t(y) {
      return Zo(y, e);
    }
    _n !== null && Zo(_n, e), gn !== null && Zo(gn, e), pn !== null && Zo(pn, e), wl.forEach(t), zl.forEach(t);
    for (var a = 0; a < hn.length; a++) {
      var n = hn[a];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < hn.length && (a = hn[0], a.blockedOn === null); )
      qm(a), a.blockedOn === null && hn.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (n = 0; n < a.length; n += 3) {
        var i = a[n], l = a[n + 1], d = i[At] || null;
        if (typeof l == "function")
          d || Zm(a);
        else if (d) {
          var _ = null;
          if (l && l.hasAttribute("formAction")) {
            if (i = l, d = l[At] || null)
              _ = d.formAction;
            else if (vr(i) !== null) continue;
          } else _ = d.action;
          typeof _ == "function" ? a[n + 1] = _ : (a.splice(n, 3), n -= 3), Zm(a);
        }
      }
  }
  function Km() {
    function e(l) {
      l.canIntercept && l.info === "react-transition" && l.intercept({
        handler: function() {
          return new Promise(function(d) {
            return i = d;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      i !== null && (i(), i = null), n || setTimeout(a, 20);
    }
    function a() {
      if (!n && !navigation.transition) {
        var l = navigation.currentEntry;
        l && l.url != null && navigation.navigate(l.url, {
          state: l.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, i = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        n = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
      };
    }
  }
  function yr(e) {
    this._internalRoot = e;
  }
  Xo.prototype.render = yr.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var a = t.current, n = Yt();
    Um(a, n, e, t, null, null);
  }, Xo.prototype.unmount = yr.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Um(e.current, 2, null, e, null, null), Eo(), t[Xn] = null;
    }
  };
  function Xo(e) {
    this._internalRoot = e;
  }
  Xo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = eu();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < hn.length && t !== 0 && t < hn[a].priority; a++) ;
      hn.splice(a, 0, e), a === 0 && qm(e);
    }
  };
  var Xm = c.version;
  if (Xm !== "19.2.3")
    throw Error(
      u(
        527,
        Xm,
        "19.2.3"
      )
    );
  ee.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = f(t), e = e !== null ? p(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Qh = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qo.isDisabled && Qo.supportsFiber)
      try {
        W = Qo.inject(
          Qh
        ), ie = Qo;
      } catch {
      }
  }
  return Ml.createRoot = function(e, t) {
    if (!g(e)) throw Error(u(299));
    var a = !1, n = "", i = Fd, l = Pd, d = ef;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (l = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Rm(
      e,
      1,
      !1,
      null,
      null,
      a,
      n,
      null,
      i,
      l,
      d,
      Km
    ), e[Xn] = t.current, tr(e), new yr(t);
  }, Ml.hydrateRoot = function(e, t, a) {
    if (!g(e)) throw Error(u(299));
    var n = !1, i = "", l = Fd, d = Pd, _ = ef, y = null;
    return a != null && (a.unstable_strictMode === !0 && (n = !0), a.identifierPrefix !== void 0 && (i = a.identifierPrefix), a.onUncaughtError !== void 0 && (l = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (_ = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = Rm(
      e,
      1,
      !0,
      t,
      a ?? null,
      n,
      i,
      y,
      l,
      d,
      _,
      Km
    ), t.context = Dm(null), a = t.current, n = Yt(), n = us(n), i = tn(n), i.callback = null, an(a, i, n), a = n, t.current.lanes = a, Ae(t, a), pa(t), e[Xn] = t.current, tr(e), new Xo(t);
  }, Ml.version = "19.2.3", Ml;
}
var a_;
function n0() {
  if (a_) return wr.exports;
  a_ = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  return o(), wr.exports = a0(), wr.exports;
}
var i0 = n0();
const J_ = /* @__PURE__ */ Q_(i0);
const I_ = (...o) => o.filter((c, s, u) => !!c && c.trim() !== "" && u.indexOf(c) === s).join(" ").trim();
const l0 = (o) => o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const o0 = (o) => o.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (c, s, u) => u ? u.toUpperCase() : s.toLowerCase()
);
const n_ = (o) => {
  const c = o0(o);
  return c.charAt(0).toUpperCase() + c.slice(1);
};
var s0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const c0 = (o) => {
  for (const c in o)
    if (c.startsWith("aria-") || c === "role" || c === "title")
      return !0;
  return !1;
};
const r0 = O.forwardRef(
  ({
    color: o = "currentColor",
    size: c = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: u,
    className: g = "",
    children: m,
    iconNode: h,
    ...b
  }, v) => O.createElement(
    "svg",
    {
      ref: v,
      ...s0,
      width: c,
      height: c,
      stroke: o,
      strokeWidth: u ? Number(s) * 24 / Number(c) : s,
      className: I_("lucide", g),
      ...!m && !c0(b) && { "aria-hidden": "true" },
      ...b
    },
    [
      ...h.map(([f, p]) => O.createElement(f, p)),
      ...Array.isArray(m) ? m : [m]
    ]
  )
);
const be = (o, c) => {
  const s = O.forwardRef(
    ({ className: u, ...g }, m) => O.createElement(r0, {
      ref: m,
      iconNode: c,
      className: I_(
        `lucide-${l0(n_(o))}`,
        `lucide-${o}`,
        u
      ),
      ...g
    })
  );
  return s.displayName = n_(o), s;
};
const u0 = [
  [
    "path",
    {
      d: "M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",
      key: "67vhrh"
    }
  ],
  ["path", { d: "M4 9v6", key: "bns7oa" }]
], d0 = be("arrow-big-right-dash", u0);
const f0 = [
  ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
  ["path", { d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935", key: "lre1cr" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936", key: "13q5k0" }]
];
be("battery-charging", f0);
const m0 = [
  ["path", { d: "M10 10v4", key: "1mb2ec" }],
  ["path", { d: "M14 10v4", key: "1nt88p" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 10v4", key: "1n77qd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], _0 = be("battery-full", m0);
const g0 = [
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 14v-4", key: "14a6bd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], p0 = be("battery-low", g0);
const h0 = [
  ["path", { d: "M10 14v-4", key: "suye4c" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 14v-4", key: "14a6bd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], v0 = be("battery-medium", h0);
const b0 = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], y0 = be("battery", b0);
const x0 = [
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
      key: "oz39mx"
    }
  ]
], S0 = be("bookmark", x0);
const w0 = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
], z0 = be("brain", w0);
const N0 = [
  ["path", { d: "m16 22-1-4", key: "1ow2iv" }],
  [
    "path",
    {
      d: "M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1",
      key: "11gii7"
    }
  ],
  ["path", { d: "M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z", key: "bju7h4" }],
  ["path", { d: "m8 22 1-4", key: "s3unb" }]
], Zr = be("brush-cleaning", N0);
const E0 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V3", key: "1lcnhd" }],
  ["path", { d: "M19 21V9", key: "unv183" }]
], M0 = be("chart-no-axes-column", E0);
const k0 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], A0 = be("check", k0);
const C0 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], j0 = be("chevron-down", C0);
const T0 = [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], O0 = be("circle-play", T0);
const R0 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], D0 = be("clock", R0);
const U0 = [
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M17 20v2", key: "1rnc9c" }],
  ["path", { d: "M17 2v2", key: "11trls" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M2 17h2", key: "7oei6x" }],
  ["path", { d: "M2 7h2", key: "asdhe0" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "M20 17h2", key: "1fpfkl" }],
  ["path", { d: "M20 7h2", key: "1o8tra" }],
  ["path", { d: "M7 20v2", key: "4gnj0m" }],
  ["path", { d: "M7 2v2", key: "1i4yhu" }],
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]
], B0 = be("cpu", U0);
const L0 = [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix"
    }
  ]
], ls = be("droplet", L0);
const G0 = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
], W_ = be("droplets", G0);
const H0 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], V0 = be("external-link", H0);
const q0 = [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
], Y0 = be("gauge", q0);
const Z0 = [
  [
    "path",
    {
      d: "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",
      key: "p55z4y"
    }
  ],
  ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0", key: "mjntcy" }]
], i_ = be("glass-water", Z0);
const K0 = [
  [
    "path",
    {
      d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
      key: "11za1p"
    }
  ],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
], X0 = be("grid-2x2-check", K0);
const Q0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], $0 = be("history", Q0);
const J0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], F_ = be("info", J0);
const I0 = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], W0 = be("layers", I0);
const F0 = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], P0 = be("list", F0);
const ev = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], P_ = be("map-pin", ev);
const tv = [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
], os = be("map", tv);
const av = [["path", { d: "M5 12h14", key: "1ays0h" }]], nv = be("minus", av);
const iv = [
  ["path", { d: "M12.586 12.586 19 19", key: "ea5xo7" }],
  [
    "path",
    {
      d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",
      key: "277e5u"
    }
  ]
], lv = be("mouse-pointer", iv);
const ov = [
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      key: "2d38gg"
    }
  ],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], sv = be("octagon-x", ov);
const cv = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "m15 8-3 3-3-3", key: "1oxy1z" }]
], rv = be("panel-bottom-close", cv);
const uv = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], dv = be("pause", uv);
const fv = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], mv = be("play", fv);
const _v = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], gv = be("plus", _v);
const pv = [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
], hv = be("route", pv);
const vv = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], bv = be("save", vv);
const yv = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
], Kr = be("scan", yv);
const xv = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], eg = be("settings-2", xv);
const Sv = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], tg = be("settings", Sv);
const wv = [
  [
    "path",
    {
      d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",
      key: "1cn552"
    }
  ]
], zv = be("shell", wv);
const Nv = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
], Ev = be("shield-alert", Nv);
const Mv = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }]
], kv = be("signal-high", Mv);
const Av = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }]
], Cv = be("signal-low", Av);
const jv = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }]
], Tv = be("signal-medium", jv);
const Ov = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }],
  ["path", { d: "M22 4v16", key: "sih9yq" }]
], Rv = be("signal", Ov);
const Dv = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], Uv = be("square", Dv);
const Bv = [
  [
    "path",
    {
      d: "M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "1ystz2"
    }
  ],
  ["path", { d: "M3 4v16", key: "1ph11n" }]
], Lv = be("step-forward", Bv);
const Gv = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], Hv = be("timer", Gv);
const Vv = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], qv = be("trash-2", Vv);
const Yv = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], ag = be("volume-2", Yv);
const Zv = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], Kv = be("volume-x", Zv);
const Xv = [
  ["path", { d: "M12 10L12 2", key: "jvb0aw" }],
  ["path", { d: "M16 6L12 10L8 6", key: "9j6vje" }],
  [
    "path",
    {
      d: "M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15",
      key: "s2zepw"
    }
  ],
  [
    "path",
    {
      d: "M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21",
      key: "u68omc"
    }
  ]
], Qv = be("waves-arrow-down", Xv);
const $v = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
], Jv = be("wrench", $v);
const Iv = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], Wv = be("zap", Iv), ng = /* @__PURE__ */ r.jsx(y0, {}), ig = /* @__PURE__ */ r.jsx(p0, {}), lg = /* @__PURE__ */ r.jsx(v0, {}), og = /* @__PURE__ */ r.jsx(_0, {}), Fv = /* @__PURE__ */ r.jsx($0, {}), Pv = /* @__PURE__ */ r.jsx(Kr, {}), eb = /* @__PURE__ */ r.jsx(mv, {}), tb = /* @__PURE__ */ r.jsx(dv, {}), ab = /* @__PURE__ */ r.jsx(Lv, {}), nb = /* @__PURE__ */ r.jsx(sv, {}), ib = /* @__PURE__ */ r.jsx(rv, {}), lb = /* @__PURE__ */ r.jsx(S0, {}), ob = /* @__PURE__ */ r.jsx(O0, {}), Xr = /* @__PURE__ */ r.jsx(Zr, {}), sb = /* @__PURE__ */ r.jsx(os, {}), Qr = /* @__PURE__ */ r.jsx(ls, {}), Oi = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx(Zr, {}),
  /* @__PURE__ */ r.jsx(gv, {}),
  /* @__PURE__ */ r.jsx(ls, {})
] }), $r = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx(Zr, {}),
  /* @__PURE__ */ r.jsx(d0, {}),
  /* @__PURE__ */ r.jsx(ls, {})
] }), sg = /* @__PURE__ */ r.jsx(Cv, {}), cg = /* @__PURE__ */ r.jsx(Tv, {}), rg = /* @__PURE__ */ r.jsx(kv, {}), ug = /* @__PURE__ */ r.jsx(Rv, {}), cb = /* @__PURE__ */ r.jsx(Kr, {}), rb = /* @__PURE__ */ r.jsx(Hv, {}), ub = /* @__PURE__ */ r.jsx(X0, {}), db = /* @__PURE__ */ r.jsx(Wv, {}), fb = /* @__PURE__ */ r.jsx(hv, {}), mb = /* @__PURE__ */ r.jsx(zv, {}), _b = /* @__PURE__ */ r.jsx(Qv, {}), kl = {
  WETNESS: {
    MIN: 1,
    MAX: 32
  }
}, Ci = {
  SELECT: "select",
  SWITCH: "switch",
  NUMBER: "number",
  VACUUM: "vacuum",
  DREAME_VACUUM: "dreame_vacuum"
}, Hn = {
  SELECT_OPTION: "select_option",
  TURN_ON: "turn_on",
  TURN_OFF: "turn_off",
  SET_VALUE: "set_value",
  START: "start",
  RETURN_TO_BASE: "return_to_base",
  VACUUM_CLEAN_SEGMENT: "vacuum_clean_segment"
}, ra = {
  CLEANING_MODE: "cleaning_mode",
  CLEANGENIUS_MODE: "cleangenius_mode",
  CLEANGENIUS: "cleangenius",
  SUCTION_LEVEL: "suction_level",
  CLEANING_ROUTE: "cleaning_route",
  MAX_SUCTION_POWER: "max_suction_power",
  CUSTOM_MOPPING_MODE: "custom_mopping_mode",
  WETNESS_LEVEL: "wetness_level",
  SELF_CLEAN_FREQUENCY: "self_clean_frequency",
  SELF_CLEAN_AREA: "self_clean_area",
  SELF_CLEAN_TIME: "self_clean_time"
}, qe = {
  SWEEPING: "Sweeping",
  MOPPING: "Mopping",
  SWEEPING_AND_MOPPING: "Sweeping and mopping",
  MOPPING_AFTER_SWEEPING: "Mopping after sweeping",
  MAPPING: "Mapping"
}, da = {
  VACUUM_AND_MOP: "Vacuum and mop",
  MOP_AFTER_VACUUM: "Mop after vacuum"
}, va = {
  OFF: "Off",
  ROUTINE_CLEANING: "Routine cleaning",
  DEEP_CLEANING: "Deep cleaning"
}, Kt = {
  CLEANING_MODE: {
    SWEEPING: "sweeping",
    MOPPING: "mopping",
    SWEEPING_AND_MOPPING: "sweeping_and_mopping",
    MOPPING_AFTER_SWEEPING: "mopping_after_sweeping",
    MAPPING: "mapping"
  },
  CLEANGENIUS_MODE: {
    VACUUM_AND_MOP: "vacuum_and_mop",
    MOP_AFTER_VACUUM: "mop_after_vacuum"
  },
  CLEANGENIUS: {
    OFF: "off",
    ROUTINE_CLEANING: "routine_cleaning",
    DEEP_CLEANING: "deep_cleaning"
  },
  SELF_CLEAN_FREQUENCY: {
    BY_AREA: "by_area",
    BY_TIME: "by_time",
    BY_ROOM: "by_room"
  }
}, qn = {
  BY_AREA: "By area",
  BY_TIME: "By time",
  BY_ROOM: "By room"
}, Ut = {
  QUIET: "Quiet",
  SILENT: "Silent",
  STANDARD: "Standard",
  STRONG: "Strong",
  TURBO: "Turbo"
}, Vn = {
  QUICK: "Quick",
  STANDARD: "Standard",
  INTENSIVE: "Intensive",
  DEEP: "Deep"
}, es = {
  SLIGHTLY_DRY: "Slightly dry",
  MOIST: "Moist",
  WET: "Wet"
}, gb = {
  ALL: "all"
}, Al = {
  CLEANGENIUS: "CleanGenius",
  CUSTOM: "Custom"
}, kt = {
  MODE: gb.ALL,
  CLEANING_MODE: qe.SWEEPING_AND_MOPPING,
  CLEANGENIUS_MODE: da.VACUUM_AND_MOP,
  SUCTION_LEVEL: Ut.STANDARD,
  WETNESS_LEVEL: 20,
  CLEANING_ROUTE: Vn.STANDARD,
  MAX_SUCTION_POWER: !1,
  SELF_CLEAN_AREA: 20,
  SELF_CLEAN_FREQUENCY: qn.BY_AREA,
  MOP_PAD_HUMIDITY: es.MOIST,
  SELF_CLEAN_AREA_MIN: 10,
  SELF_CLEAN_AREA_MAX: 35,
  SELF_CLEAN_TIME: 25,
  SELF_CLEAN_TIME_MIN: 10,
  SELF_CLEAN_TIME_MAX: 50
};
function Jr(o) {
  const c = O.useCallback(
    (v, f, p) => {
      console.debug("[HA Service]", v, f, p), o.callService(v, f, p);
    },
    [o]
  ), s = O.useCallback(
    (v, f) => {
      console.debug("[HA Select]", v, "→", f);
      const p = {
        entity_id: v,
        option: f
      };
      c(Ci.SELECT, Hn.SELECT_OPTION, p);
    },
    [c]
  ), u = O.useCallback(
    (v, f) => {
      console.debug("[HA Switch]", v, "→", f ? "ON" : "OFF");
      const p = f ? Hn.TURN_ON : Hn.TURN_OFF;
      c(Ci.SWITCH, p, { entity_id: v });
    },
    [c]
  ), g = O.useCallback(
    (v, f) => {
      console.debug("[HA Number]", v, "→", f);
      const p = {
        entity_id: v,
        value: f
      };
      c(Ci.NUMBER, Hn.SET_VALUE, p);
    },
    [c]
  ), m = O.useCallback(
    (v) => {
      console.debug("[HA Vacuum] Start", v), c(Ci.VACUUM, Hn.START, { entity_id: v });
    },
    [c]
  ), h = O.useCallback(
    (v) => {
      console.debug("[HA Vacuum] Return to base", v), c(Ci.VACUUM, Hn.RETURN_TO_BASE, { entity_id: v });
    },
    [c]
  ), b = O.useCallback(
    (v, f) => {
      console.debug("[HA Vacuum] Clean segments", v, f);
      const p = {
        entity_id: v,
        segments: f
      };
      c(Ci.DREAME_VACUUM, Hn.VACUUM_CLEAN_SEGMENT, p);
    },
    [c]
  );
  return {
    setSelectOption: s,
    setSwitch: u,
    setNumber: g,
    startVacuum: m,
    returnToBase: h,
    cleanSegments: b,
    callService: c
  };
}
function pb(o) {
  switch (o) {
    case qe.SWEEPING:
      return Kt.CLEANING_MODE.SWEEPING;
    case qe.MOPPING:
      return Kt.CLEANING_MODE.MOPPING;
    case qe.SWEEPING_AND_MOPPING:
      return Kt.CLEANING_MODE.SWEEPING_AND_MOPPING;
    case qe.MOPPING_AFTER_SWEEPING:
      return Kt.CLEANING_MODE.MOPPING_AFTER_SWEEPING;
    case qe.MAPPING:
      return Kt.CLEANING_MODE.MAPPING;
    default:
      return o;
  }
}
function hb(o) {
  switch (o) {
    case da.VACUUM_AND_MOP:
      return Kt.CLEANGENIUS_MODE.VACUUM_AND_MOP;
    case da.MOP_AFTER_VACUUM:
      return Kt.CLEANGENIUS_MODE.MOP_AFTER_VACUUM;
    default:
      return o;
  }
}
function ts(o) {
  switch (o) {
    case va.OFF:
      return Kt.CLEANGENIUS.OFF;
    case va.ROUTINE_CLEANING:
      return Kt.CLEANGENIUS.ROUTINE_CLEANING;
    case va.DEEP_CLEANING:
      return Kt.CLEANGENIUS.DEEP_CLEANING;
    default:
      return o;
  }
}
function vb(o) {
  switch (o) {
    case qn.BY_AREA:
      return Kt.SELF_CLEAN_FREQUENCY.BY_AREA;
    case qn.BY_TIME:
      return Kt.SELF_CLEAN_FREQUENCY.BY_TIME;
    case qn.BY_ROOM:
      return Kt.SELF_CLEAN_FREQUENCY.BY_ROOM;
    default:
      return o;
  }
}
function as(o) {
  return o.toLowerCase();
}
function ji(o, c) {
  return `select.${o}_${c}`;
}
function l_(o, c) {
  return `switch.${o}_${c}`;
}
function Mr(o, c) {
  return `number.${o}_${c}`;
}
function dg(o) {
  return o.replace("vacuum.", "");
}
function Ir(o) {
  return O.useMemo(() => {
    const c = dg(o);
    return {
      base: c,
      cleaningMode: ji(c, ra.CLEANING_MODE),
      cleangeniusMode: ji(c, ra.CLEANGENIUS_MODE),
      cleangenius: ji(c, ra.CLEANGENIUS),
      suctionLevel: ji(c, ra.SUCTION_LEVEL),
      cleaningRoute: ji(c, ra.CLEANING_ROUTE),
      maxSuctionPower: l_(c, ra.MAX_SUCTION_POWER),
      customMoppingMode: l_(c, ra.CUSTOM_MOPPING_MODE),
      wetnessLevel: Mr(c, ra.WETNESS_LEVEL),
      selfCleanFrequency: ji(c, ra.SELF_CLEAN_FREQUENCY),
      selfCleanArea: Mr(c, ra.SELF_CLEAN_AREA),
      selfCleanTime: Mr(c, ra.SELF_CLEAN_TIME)
    };
  }, [o]);
}
function fg({ defaultMode: o = kt.MODE } = {}) {
  const [c, s] = O.useState(o), [u, g] = O.useState(/* @__PURE__ */ new Map()), [m, h] = O.useState(null), [b, v] = O.useState(!1), [f, p] = O.useState(!1), [w, k] = O.useState(!1), N = O.useCallback((Z) => {
    console.debug("[UI] Mode changed:", Z), s(Z), g(/* @__PURE__ */ new Map()), h(null);
  }, []), S = O.useCallback(
    (Z, L) => (g((ae) => {
      const V = new Map(ae);
      return V.has(Z) ? (console.debug("[UI] Room deselected:", { roomId: Z, roomName: L }), V.delete(Z)) : (console.debug("[UI] Room selected:", { roomId: Z, roomName: L }), V.set(Z, L)), V;
    }), u.has(Z)),
    [u]
  ), D = O.useCallback((Z) => {
    console.debug("[UI] Cleaning mode modal:", Z ? "opened" : "closed"), v(Z);
  }, []), K = O.useCallback((Z) => {
    console.debug("[UI] Shortcuts modal:", Z ? "opened" : "closed"), p(Z);
  }, []), U = O.useCallback((Z) => {
    console.debug("[UI] Settings panel:", Z ? "opened" : "closed"), k(Z);
  }, []), $ = O.useCallback((Z) => {
    console.debug("[UI] Zone changed:", Z), h(Z);
  }, []);
  return {
    selectedMode: c,
    selectedRooms: u,
    selectedZone: m,
    modalOpened: b,
    shortcutsModalOpened: f,
    settingsPanelOpened: w,
    setSelectedMode: s,
    setSelectedRooms: g,
    setSelectedZone: $,
    setModalOpened: D,
    setShortcutsModalOpened: K,
    setSettingsPanelOpened: U,
    handleModeChange: N,
    handleRoomToggle: S
  };
}
const bb = {
  // Room Selector
  room_selector: {
    title: "Select Rooms",
    selected_count: "{{count}} selected"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "No map available",
    looking_for: "Looking for: {{entity}}",
    room_overlay: "Click on room numbers to select rooms for cleaning",
    zone_overlay_create: "Click on the map to place a cleaning zone",
    zone_overlay_resize: "Drag corners to resize, click elsewhere to reposition",
    clear_zone: "Clear zone",
    switch_to_list: "Switch to list view",
    switch_to_map: "Switch to map view",
    room_list_overlay: "Tap rooms to select for cleaning",
    no_rooms: "No rooms available"
  },
  // Mode Tabs
  modes: {
    room: "Room",
    all: "All",
    zone: "Zone"
  },
  // Action Buttons
  actions: {
    clean: "Clean",
    clean_all: "Clean All",
    clean_rooms: "Clean {{count}} Room",
    clean_rooms_plural: "Clean {{count}} Rooms",
    select_rooms: "Select Rooms",
    zone_clean: "Zone Clean",
    pause: "Pause",
    resume: "Resume",
    stop: "Stop",
    dock: "Dock"
  },
  // Toast Messages
  toast: {
    selected_room: "Selected {{name}}",
    deselected_room: "Deselected {{name}}",
    paused: "Paused cleaning",
    stopped: "Stopped cleaning",
    docked: "Returning to dock",
    cleaning_started: "Cleaning started",
    resuming: "Resuming cleaning",
    starting_full_clean: "Starting full house cleaning",
    pausing_vacuum: "Pausing vacuum",
    stopping_vacuum: "Stopping vacuum",
    vacuum_docking: "Vacuum returning to dock",
    starting_room_clean: "Starting cleaning for {{count}} selected room",
    starting_room_clean_plural: "Starting cleaning for {{count}} selected rooms",
    starting_zone_clean: "Starting zone cleaning",
    select_rooms_first: "Please select rooms to clean first",
    cannot_determine_map: "Cannot determine map dimensions",
    select_zone_first: "Please select a zone on the map"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Selected Rooms:",
    selected_label: "Selected:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Custom: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "View shortcuts",
    vac_and_mop: "Vac & Mop",
    mop_after_vac: "Mop after Vac",
    vacuum: "Vacuum",
    mop: "Mop",
    mapping: "Mapping"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Cleaning Mode",
    clean_genius: "CleanGenius",
    custom: "Custom"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Shortcuts",
    no_shortcuts: "No shortcuts available",
    create_hint: "Create shortcuts in the Dreame app to quickly start your favorite cleaning routines"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Cleaning Mode",
    suction_power_title: "Suction Power",
    max_plus_description: "The suction power will be increased to the highest level, which is a single-use mode.",
    wetness_title: "Wetness",
    slightly_dry: "Slightly dry",
    moist: "Moist",
    wet: "Wet",
    mop_washing_frequency_title: "Mop-washing frequency",
    route_title: "Route"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Cleaning Mode",
    deep_cleaning: "Deep Cleaning"
  },
  // Header
  header: {
    battery: "Battery",
    status: "Status",
    area: "Area",
    time: "Time"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Quiet",
    standard: "Standard",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "By room",
    by_area: "By area",
    by_time: "By time"
  },
  // Errors
  errors: {
    entity_not_found: "Entity not found: {{entity}}",
    failed_to_load: "Failed to load entity data"
  },
  // Valetudo-specific
  valetudo: {
    panel: {
      title: "Settings",
      device: "Device",
      consumables: "Consumables",
      statistics: "Statistics",
      cleaning_settings: "Cleaning Settings",
      rooms: "Rooms",
      configuration: "Configuration",
      status: "Status",
      battery: "Battery",
      wifi: "Wi-Fi",
      signal: "Signal",
      ip_address: "IP Address",
      main_brush: "Main Brush",
      side_brush: "Side Brush",
      filter: "Filter",
      sensors: "Sensors",
      total_cleanings: "Total Cleanings",
      total_area: "Total Area",
      total_time: "Total Time",
      current_area: "Current session — area",
      current_time: "Current session — time",
      carpet_mode: "Carpet Mode",
      replace: "Replace",
      needs_replacement: "Needs replacement",
      remaining: "Remaining: {{time}}",
      reset: "Reset",
      dbm: "dBm",
      valetudo_ui: "Valetudo UI",
      open: "Open"
    },
    restrictions: {
      select: "Select",
      wall: "Wall",
      no_go: "No-go",
      no_mop: "No-mop",
      delete_selected: "Delete selected",
      save: "Save",
      save_changes: "Save changes",
      no_changes: "No changes"
    },
    toast: {
      saved: "Restrictions saved",
      error: "Error: {{message}}",
      config_needed: "⚠️ Config needed. See console (F12).",
      mapping_started: "Mapping run started",
      mapping_error: "Failed to start mapping"
    },
    status: {
      docked: "Docked",
      cleaning: "Cleaning",
      paused: "Paused",
      returning: "Returning to dock",
      idle: "Idle",
      error: "Error"
    },
    restrictions_label: "Virtual restrictions",
    cleaning: {
      configure: "Configure cleaning",
      mode_title: "Cleaning mode",
      dry: "Vacuum only",
      wet: "Mop only",
      both: "Vacuum & Mop",
      suction_power: "Suction power",
      water_level: "Water level",
      iterations: "Cleaning passes",
      mapping: "Mapping run",
      mapping_warning_overwrite: "⚠️ Mapping will overwrite the current map.",
      mapping_warning_loss: "Current cleaning progress and all restriction zones will be lost. Continue?"
    },
    map: {
      loading: "Loading map…",
      error: "Map error: {{message}}"
    },
    time: {
      hours_minutes: "{{h}}h {{m}}m",
      minutes: "{{m}}m"
    },
    config_error: {
      restrictions_title: "Virtual restrictions — configuration needed",
      mapping_title: "Mapping — configuration needed",
      desc: "Neither valetudo_url (card editor) nor rest_command is configured. Pick one option:",
      option_url: "Option 1 — recommended: open the card editor and fill in the Valetudo URL field (e.g. http://192.168.0.162).",
      option_rest_intro: "Option 2 — add to configuration.yaml and reload Home Assistant:",
      close: "Close"
    }
  },
  // Settings Panel
  settings: {
    title: "Settings",
    consumables: {
      title: "Consumables",
      main_brush: "Main Brush",
      side_brush: "Side Brush",
      filter: "Filter",
      sensor: "Sensor",
      remaining: "remaining",
      reset: "Reset"
    },
    device_info: {
      title: "Device Info",
      firmware: "Firmware",
      total_area: "Total Cleaned Area",
      total_time: "Total Cleaning Time",
      total_cleans: "Total Cleanings",
      wifi_ssid: "Wi-Fi Network",
      wifi_signal: "Signal Strength",
      ip_address: "IP Address"
    },
    map_management: {
      title: "Map Management",
      description: "Select which map to use for cleaning.",
      no_maps: "No maps available"
    },
    quick_settings: {
      title: "Quick Settings",
      child_lock: "Child Lock",
      child_lock_desc: "Disable physical buttons on device",
      carpet_boost: "Carpet Boost",
      carpet_boost_desc: "Increase suction on carpets",
      obstacle_avoidance: "Obstacle Avoidance",
      obstacle_avoidance_desc: "Avoid obstacles during cleaning",
      auto_dust_collecting: "Auto Empty",
      auto_dust_collecting_desc: "Automatically empty dustbin",
      auto_drying: "Auto Drying",
      auto_drying_desc: "Dry mop pad after cleaning",
      dnd: "Do Not Disturb",
      dnd_desc: "Quiet hours with reduced activity"
    },
    volume: {
      title: "Volume & Sound",
      test_sound: "Locate",
      muted: "Muted"
    },
    carpet: {
      title: "Carpet Settings",
      carpet_boost: "Carpet Boost",
      carpet_boost_desc: "Increase suction power on carpets",
      carpet_recognition: "Carpet Recognition",
      carpet_recognition_desc: "Automatically detect carpets",
      carpet_avoidance: "Carpet Avoidance",
      carpet_avoidance_desc: "Avoid carpets while mopping",
      sensitivity: "Carpet Sensitivity",
      sensitivity_desc: "Detection sensitivity level",
      sensitivity_low: "Low",
      sensitivity_medium: "Medium",
      sensitivity_high: "High"
    },
    ai_detection: {
      title: "AI & Detection",
      obstacle_avoidance: "Obstacle Avoidance",
      obstacle_avoidance_desc: "Use sensors to avoid obstacles",
      ai_obstacle_detection: "AI Obstacle Detection",
      ai_obstacle_detection_desc: "Use AI to identify and avoid obstacles",
      ai_obstacle_image_upload: "Obstacle Image Upload",
      ai_obstacle_image_upload_desc: "Upload obstacle images for analysis",
      ai_pet_detection: "Pet Detection",
      ai_pet_detection_desc: "Detect and avoid pets",
      ai_human_detection: "Human Detection",
      ai_human_detection_desc: "Detect and avoid humans",
      ai_furniture_detection: "Furniture Detection",
      ai_furniture_detection_desc: "Detect and navigate around furniture",
      ai_fluid_detection: "Fluid Detection",
      ai_fluid_detection_desc: "Detect and avoid liquids",
      stain_avoidance: "Stain Avoidance",
      stain_avoidance_desc: "Avoid detected stains",
      collision_avoidance: "Collision Avoidance",
      collision_avoidance_desc: "Prevent collisions with objects",
      fill_light: "Fill Light",
      fill_light_desc: "Use fill light for better detection"
    }
  }
}, yb = {
  // Room Selector
  room_selector: {
    title: "Räume auswählen",
    selected_count: "{{count}} ausgewählt"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "Keine Karte verfügbar",
    looking_for: "Suche nach: {{entity}}",
    room_overlay: "Klicken Sie auf Raumnummern, um Räume zum Reinigen auszuwählen",
    zone_overlay_create: "Klicken Sie auf die Karte, um eine Reinigungszone zu platzieren",
    zone_overlay_resize: "Ziehen Sie an den Ecken, um die Größe zu ändern, oder klicken Sie woanders, um neu zu positionieren",
    clear_zone: "Zone löschen",
    switch_to_list: "Zur Listenansicht wechseln",
    switch_to_map: "Zur Kartenansicht wechseln",
    room_list_overlay: "Räume antippen, um sie für die Reinigung auszuwählen",
    no_rooms: "Keine Räume verfügbar"
  },
  // Mode Tabs
  modes: {
    room: "Raum",
    all: "Alle",
    zone: "Zone"
  },
  // Action Buttons
  actions: {
    clean: "Reinigen",
    clean_all: "Alles reinigen",
    clean_rooms: "{{count}} Raum reinigen",
    clean_rooms_plural: "{{count}} Räume reinigen",
    select_rooms: "Räume auswählen",
    zone_clean: "Zone reinigen",
    pause: "Pause",
    resume: "Fortsetzen",
    stop: "Stopp",
    dock: "Andocken"
  },
  // Toast Messages
  toast: {
    selected_room: "{{name}} ausgewählt",
    deselected_room: "{{name}} abgewählt",
    paused: "Reinigung pausiert",
    stopped: "Reinigung gestoppt",
    docked: "Kehrt zur Station zurück",
    cleaning_started: "Reinigung gestartet",
    resuming: "Reinigung wird fortgesetzt",
    starting_full_clean: "Vollständige Hausreinigung gestartet",
    pausing_vacuum: "Saugroboter wird pausiert",
    stopping_vacuum: "Saugroboter wird gestoppt",
    vacuum_docking: "Saugroboter kehrt zur Station zurück",
    starting_room_clean: "Reinigung für {{count}} ausgewählten Raum wird gestartet",
    starting_room_clean_plural: "Reinigung für {{count}} ausgewählte Räume wird gestartet",
    starting_zone_clean: "Zonenreinigung wird gestartet",
    select_rooms_first: "Bitte wählen Sie zuerst Räume zum Reinigen aus",
    cannot_determine_map: "Kartenabmessungen können nicht ermittelt werden",
    select_zone_first: "Bitte wählen Sie zuerst eine Zone auf der Karte aus"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Ausgewählte Räume:",
    selected_label: "Ausgewählt:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Benutzerdefiniert: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Verknüpfungen anzeigen",
    vac_and_mop: "Saugen & Wischen",
    mop_after_vac: "Wischen nach Saugen",
    vacuum: "Saugen",
    mop: "Wischen",
    mapping: "Kartierung"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Reinigungsmodus",
    clean_genius: "CleanGenius",
    custom: "Benutzerdefiniert"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Verknüpfungen",
    no_shortcuts: "Keine Verknüpfungen verfügbar",
    create_hint: "Erstellen Sie Verknüpfungen in der Dreame-App, um Ihre bevorzugten Reinigungsroutinen schnell zu starten"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Reinigungsmodus",
    suction_power_title: "Saugleistung",
    max_plus_description: "Die Saugkraft wird auf die höchste Stufe erhöht. Dies ist ein Einmal-Modus.",
    wetness_title: "Feuchtigkeit",
    slightly_dry: "Leicht trocken",
    moist: "Feucht",
    wet: "Nass",
    mop_washing_frequency_title: "Wischmopp-Waschfrequenz",
    route_title: "Route"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Reinigungsmodus",
    deep_cleaning: "Tiefenreinigung"
  },
  // Header
  header: {
    battery: "Batterie",
    status: "Status",
    area: "Fläche",
    time: "Zeit"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Leise",
    standard: "Standard",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Nach Raum",
    by_area: "Nach Fläche",
    by_time: "Nach Zeit"
  },
  // Errors
  errors: {
    entity_not_found: "Entität nicht gefunden: {{entity}}",
    failed_to_load: "Entitätsdaten konnten nicht geladen werden"
  },
  // Valetudo-specific
  valetudo: {
    panel: {
      title: "Einstellungen",
      device: "Gerät",
      consumables: "Verbrauchsmaterial",
      statistics: "Statistik",
      cleaning_settings: "Reinigungseinstellungen",
      rooms: "Räume",
      configuration: "Konfiguration",
      status: "Status",
      battery: "Batterie",
      wifi: "Wi-Fi",
      signal: "Signal",
      ip_address: "IP-Adresse",
      main_brush: "Hauptbürste",
      side_brush: "Seitbürste",
      filter: "Filter",
      sensors: "Sensoren",
      total_cleanings: "Reinigungen gesamt",
      total_area: "Gesamtfläche",
      total_time: "Gesamtzeit",
      current_area: "Aktuelle Sitzung — Fläche",
      current_time: "Aktuelle Sitzung — Zeit",
      carpet_mode: "Teppichmodus",
      replace: "Ersetzen",
      needs_replacement: "Austausch erforderlich",
      remaining: "Verbleibend: {{time}}",
      reset: "Zurücksetzen",
      dbm: "dBm",
      valetudo_ui: "Valetudo UI",
      open: "Öffnen"
    },
    restrictions: {
      select: "Auswählen",
      wall: "Wand",
      no_go: "No-go",
      no_mop: "No-mop",
      delete_selected: "Ausgewähltes löschen",
      save: "Speichern",
      save_changes: "Änderungen speichern",
      no_changes: "Keine Änderungen"
    },
    toast: {
      saved: "Einschränkungen gespeichert",
      error: "Fehler: {{message}}",
      config_needed: "⚠️ Konfiguration erforderlich. Konsole öffnen (F12).",
      mapping_started: "Kartierung gestartet",
      mapping_error: "Kartierung konnte nicht gestartet werden"
    },
    status: {
      docked: "Auf der Basis",
      cleaning: "Reinigung",
      paused: "Pause",
      returning: "Rückkehr zur Basis",
      idle: "Bereit",
      error: "Fehler"
    },
    restrictions_label: "Virtuelle Einschränkungen",
    cleaning: {
      configure: "Reinigung konfigurieren",
      mode_title: "Reinigungsmodus",
      dry: "Nur Saugen",
      wet: "Nur Wischen",
      both: "Saugen & Wischen",
      suction_power: "Saugstärke",
      water_level: "Wasserstand",
      iterations: "Reinigungsdurchläufe",
      mapping: "Kartierung",
      mapping_warning_overwrite: "⚠️ Die Kartierung überschreibt die aktuelle Karte.",
      mapping_warning_loss: "Der aktuelle Reinigungsfortschritt und alle Sperrzonen gehen verloren. Fortfahren?"
    },
    map: {
      loading: "Karte lädt…",
      error: "Kartenfehler: {{message}}"
    },
    time: {
      hours_minutes: "{{h}}h {{m}}min",
      minutes: "{{m}}min"
    },
    config_error: {
      restrictions_title: "Virtuelle Einschränkungen — Konfiguration erforderlich",
      mapping_title: "Kartierung — Konfiguration erforderlich",
      desc: "Weder valetudo_url (Karten-Editor) noch rest_command ist konfiguriert. Wähle eine Option:",
      option_url: "Option 1 — empfohlen: Karten-Editor öffnen und Valetudo-URL eintragen (z. B. http://192.168.0.162).",
      option_rest_intro: "Option 2 — in configuration.yaml eintragen und Home Assistant neu laden:",
      close: "Schließen"
    }
  },
  // Settings Panel
  settings: {
    title: "Einstellungen",
    consumables: {
      title: "Verbrauchsmaterialien",
      main_brush: "Hauptbürste",
      side_brush: "Seitenbürste",
      filter: "Filter",
      sensor: "Sensor",
      remaining: "verbleibend",
      reset: "Zurücksetzen"
    },
    device_info: {
      title: "Geräteinformationen",
      firmware: "Firmware",
      total_area: "Gesamtreinigungsfläche",
      total_time: "Gesamtreinigungszeit",
      total_cleans: "Gesamte Reinigungen",
      wifi_ssid: "WLAN-Netzwerk",
      wifi_signal: "Signalstärke",
      ip_address: "IP-Adresse"
    },
    map_management: {
      title: "Kartenverwaltung",
      description: "Wählen Sie die Karte für die Reinigung aus.",
      no_maps: "Keine Karten verfügbar"
    },
    quick_settings: {
      title: "Schnelleinstellungen",
      child_lock: "Kindersicherung",
      child_lock_desc: "Tasten am Gerät deaktivieren",
      carpet_boost: "Teppich-Boost",
      carpet_boost_desc: "Saugkraft auf Teppichen erhöhen",
      obstacle_avoidance: "Hindernisvermeidung",
      obstacle_avoidance_desc: "Hindernisse beim Reinigen umfahren",
      auto_dust_collecting: "Auto-Entleerung",
      auto_dust_collecting_desc: "Staubbehälter automatisch leeren",
      auto_drying: "Auto-Trocknung",
      auto_drying_desc: "Wischmopp nach Reinigung trocknen",
      dnd: "Nicht stören",
      dnd_desc: "Ruhezeiten mit reduzierter Aktivität"
    },
    volume: {
      title: "Lautstärke & Ton",
      test_sound: "Finden",
      muted: "Stumm"
    },
    carpet: {
      title: "Teppich-Einstellungen",
      carpet_boost: "Teppich-Boost",
      carpet_boost_desc: "Saugkraft auf Teppichen erhöhen",
      carpet_recognition: "Teppicherkennung",
      carpet_recognition_desc: "Teppiche automatisch erkennen",
      carpet_avoidance: "Teppichvermeidung",
      carpet_avoidance_desc: "Teppiche beim Wischen vermeiden",
      sensitivity: "Teppich-Empfindlichkeit",
      sensitivity_desc: "Erkennungsempfindlichkeit",
      sensitivity_low: "Niedrig",
      sensitivity_medium: "Mittel",
      sensitivity_high: "Hoch"
    },
    ai_detection: {
      title: "KI & Erkennung",
      obstacle_avoidance: "Hindernisvermeidung",
      obstacle_avoidance_desc: "Sensoren zur Hindernisvermeidung nutzen",
      ai_obstacle_detection: "KI-Hinderniserkennung",
      ai_obstacle_detection_desc: "KI zur Erkennung und Vermeidung von Hindernissen nutzen",
      ai_obstacle_image_upload: "Hindernis-Bilder hochladen",
      ai_obstacle_image_upload_desc: "Hindernisbilder zur Analyse hochladen",
      ai_pet_detection: "Haustiererkennung",
      ai_pet_detection_desc: "Haustiere erkennen und vermeiden",
      ai_human_detection: "Personenerkennung",
      ai_human_detection_desc: "Personen erkennen und vermeiden",
      ai_furniture_detection: "Möbelerkennung",
      ai_furniture_detection_desc: "Möbel erkennen und umfahren",
      ai_fluid_detection: "Flüssigkeitserkennung",
      ai_fluid_detection_desc: "Flüssigkeiten erkennen und vermeiden",
      stain_avoidance: "Fleckenvermeidung",
      stain_avoidance_desc: "Erkannte Flecken vermeiden",
      collision_avoidance: "Kollisionsvermeidung",
      collision_avoidance_desc: "Kollisionen mit Objekten verhindern",
      fill_light: "Zusatzlicht",
      fill_light_desc: "Zusatzlicht für bessere Erkennung nutzen"
    }
  }
}, xb = {
  // Room Selector
  room_selector: {
    title: "Выбор комнат",
    selected_count: "{{count}} выбрано"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "Нет доступной карты",
    looking_for: "Обнаружение: {{entity}}",
    room_overlay: "Кликните на номера комнат чтобы выбрать комнаты для убокри",
    zone_overlay_create: "Кликните на карту для добавления зоны уборки",
    zone_overlay_resize: "Потяните за углы для изменения размеры, кликните на любом месте для новой зоны",
    clear_zone: "Уборка зоны",
    switch_to_list: "Переключить на список",
    switch_to_map: "Переключить на карту",
    room_list_overlay: "Нажмите на комнаты для выбора уборки",
    no_rooms: "Нет доступных комнат"
  },
  // Mode Tabs
  modes: {
    room: "Комната",
    all: "Всё",
    zone: "Зона"
  },
  // Action Buttons
  actions: {
    clean: "Очистка",
    clean_all: "Очистка всего",
    clean_rooms: "Очистка {{count}} комнаты",
    clean_rooms_plural: "Очистка {{count}} комнат",
    select_rooms: "Выбор комнат",
    zone_clean: "Уборка зоны",
    pause: "Пауза",
    resume: "Продолжить",
    stop: "Стоп",
    dock: "Возврат на базу"
  },
  // Toast Messages
  toast: {
    selected_room: "Выбраны {{name}}",
    deselected_room: "Исключены {{name}}",
    paused: "Уборки приостановлена",
    stopped: "Уборка остановлена",
    docked: "Возвращение на базу",
    cleaning_started: "Уборка начата",
    resuming: "Продолжение уборки",
    starting_full_clean: "Начинается полная уборка дома",
    pausing_vacuum: "Приостановка пылесоса",
    stopping_vacuum: "Остановка пылесоса",
    vacuum_docking: "Пылесос возвращается на базу",
    starting_room_clean: "Начало уборки {{count}} выбранной комнаты",
    starting_room_clean_plural: "Начало уборки {{count}} выбранных комнат",
    starting_zone_clean: "Начало зональной уборки",
    select_rooms_first: "Пожалуйста, сначала выберите комнаты с которых начать",
    cannot_determine_map: "Не удаётся распознать размеры карты",
    select_zone_first: "Пожалуйста, выберите зону на карте"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Выбранные комнаты:",
    selected_label: "Выбрано:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Настроить уборку: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Посмотреть шорткаты",
    vac_and_mop: "Сухая и влажная",
    mop_after_vac: "Влажная после сухой",
    vacuum: "Сухая уборка",
    mop: "Влажная уборка",
    mapping: "Картографир."
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Режим уборки",
    clean_genius: "CleanGenius",
    custom: "Настроить"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Шорткаты",
    no_shortcuts: "Нет доступных шорткатов",
    create_hint: "Создайте шорткаты в приложении Dreame для быстрого выбора ваших любимых процедур "
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Режим уборки",
    suction_power_title: "Мощность всасывания",
    max_plus_description: "Мощность всасывания будет увеличена до максимального уровня, что соответствует режиму одноразового использования.",
    wetness_title: "Влажность",
    slightly_dry: "Слегка сухая",
    moist: "Влажная",
    wet: "Мокрая",
    mop_washing_frequency_title: "Периодичность промывки швабры",
    route_title: "Маршрут"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Режим уборки",
    deep_cleaning: "Тщательная уборка"
  },
  // Header
  header: {
    battery: "Батарея",
    status: "Статус",
    area: "Площадь",
    time: "Время"
  },
  // Units
  units: {
    square_meters: "м²",
    minutes: "мин",
    minutes_short: "м",
    percent: "%",
    decibels: "дБм"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Тихий",
    standard: "Стандартный",
    strong: "Турбо",
    turbo: "Макс"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "По комнате",
    by_area: "По площади",
    by_time: "По времени"
  },
  // Errors
  errors: {
    entity_not_found: "Сущность не найдена: {{entity}}",
    failed_to_load: "Не удалось получить данные сущности"
  },
  // Valetudo-specific
  valetudo: {
    panel: {
      title: "Настройки",
      device: "Устройство",
      consumables: "Расходники",
      statistics: "Статистика",
      cleaning_settings: "Настройки очистки",
      rooms: "Комнаты",
      configuration: "Конфигурация",
      status: "Состояние",
      battery: "Батарея",
      wifi: "Wi-Fi",
      signal: "Сигнал",
      ip_address: "IP-адрес",
      main_brush: "Основная щётка",
      side_brush: "Боковая щётка",
      filter: "Фильтр",
      sensors: "Датчики",
      total_cleanings: "Всего уборок",
      total_area: "Общая площадь",
      total_time: "Общее время",
      current_area: "Текущая уборка — площадь",
      current_time: "Текущая уборка — время",
      carpet_mode: "Ковровый режим",
      replace: "Заменить",
      needs_replacement: "Требует замены",
      remaining: "Осталось: {{time}}",
      reset: "Сбросить",
      dbm: "дБм",
      valetudo_ui: "Valetudo UI",
      open: "Открыть"
    },
    restrictions: {
      select: "Выбрать",
      wall: "Стена",
      no_go: "No-go",
      no_mop: "No-mop",
      delete_selected: "Удалить выбранное",
      save: "Сохранить",
      save_changes: "Сохранить изменения",
      no_changes: "Нет изменений"
    },
    toast: {
      saved: "Ограничения сохранены",
      error: "Ошибка: {{message}}",
      config_needed: "⚠️ Нужна настройка. Смотри консоль (F12).",
      mapping_started: "Картирование запущено",
      mapping_error: "Не удалось запустить картирование"
    },
    status: {
      docked: "На базе",
      cleaning: "Уборка",
      paused: "Пауза",
      returning: "Возврат на базу",
      idle: "Ожидание",
      error: "Ошибка"
    },
    restrictions_label: "Виртуальные ограничения",
    cleaning: {
      configure: "Настроить уборку",
      mode_title: "Режим уборки",
      dry: "Только сухая",
      wet: "Только влажная",
      both: "Сухая и влажная",
      suction_power: "Мощность всасывания",
      water_level: "Уровень воды",
      iterations: "Количество проходов",
      mapping: "Картирование",
      mapping_warning_overwrite: "⚠️ Картирование перезапишет текущую карту.",
      mapping_warning_loss: "Текущий прогресс уборки и все зоны ограничений будут утеряны. Продолжить?"
    },
    map: {
      loading: "Загрузка карты…",
      error: "Ошибка карты: {{message}}"
    },
    time: {
      hours_minutes: "{{h}}ч {{m}}м",
      minutes: "{{m}}м"
    },
    config_error: {
      restrictions_title: "Виртуальные ограничения — нужна настройка",
      mapping_title: "Картирование — нужна настройка",
      desc: "Не задан ни valetudo_url (редактор карточки), ни rest_command. Выбери один из вариантов:",
      option_url: "Вариант 1 — рекомендуется: открой редактор карточки и заполни поле Valetudo URL (например http://192.168.0.162).",
      option_rest_intro: "Вариант 2 — добавь в configuration.yaml и перезагрузи Home Assistant:",
      close: "Закрыть"
    }
  },
  // Settings Panel
  settings: {
    title: "Настройки",
    consumables: {
      title: "Расходные материалы",
      main_brush: "Основная щётка",
      side_brush: "Боковая щётка",
      filter: "Фильтр",
      sensor: "Датчик",
      remaining: "осталось",
      reset: "Сбросить"
    },
    device_info: {
      title: "Информация об устройстве",
      firmware: "Прошивка",
      total_area: "Общая площадь уборки",
      total_time: "Общее время уборки",
      total_cleans: "Всего уборок",
      wifi_ssid: "Сеть Wi-Fi",
      wifi_signal: "Уровень сигнала",
      ip_address: "IP-адрес"
    },
    map_management: {
      title: "Управление картами",
      description: "Выберите карту для уборки.",
      no_maps: "Нет доступных карт"
    },
    quick_settings: {
      title: "Быстрые настройки",
      child_lock: "Блокировка от детей",
      child_lock_desc: "Отключить кнопки на устройстве",
      carpet_boost: "Усиление на коврах",
      carpet_boost_desc: "Увеличить мощность на коврах",
      obstacle_avoidance: "Избегание препятствий",
      obstacle_avoidance_desc: "Обход препятствий при уборке",
      auto_dust_collecting: "Автоочистка",
      auto_dust_collecting_desc: "Автоматическая очистка пылесборника",
      auto_drying: "Автосушка",
      auto_drying_desc: "Сушка салфетки после уборки",
      dnd: "Не беспокоить",
      dnd_desc: "Тихие часы с ограниченной активностью"
    },
    volume: {
      title: "Громкость и звук",
      test_sound: "Найти",
      muted: "Без звука"
    },
    carpet: {
      title: "Настройки ковров",
      carpet_boost: "Усиление на коврах",
      carpet_boost_desc: "Увеличить мощность всасывания на коврах",
      carpet_recognition: "Распознавание ковров",
      carpet_recognition_desc: "Автоматическое определение ковров",
      carpet_avoidance: "Избегание ковров",
      carpet_avoidance_desc: "Обходить ковры при влажной уборке",
      sensitivity: "Чувствительность ковра",
      sensitivity_desc: "Уровень чувствительности распознавания",
      sensitivity_low: "Низкая",
      sensitivity_medium: "Средняя",
      sensitivity_high: "Высокая"
    },
    ai_detection: {
      title: "ИИ и распознавание",
      obstacle_avoidance: "Избегание препятствий",
      obstacle_avoidance_desc: "Использовать датчики для обхода препятствий",
      ai_obstacle_detection: "ИИ-распознавание препятствий",
      ai_obstacle_detection_desc: "Использовать ИИ для определения и обхода препятствий",
      ai_obstacle_image_upload: "Загрузка изображений препятствий",
      ai_obstacle_image_upload_desc: "Загружать изображения препятствий для анализа",
      ai_pet_detection: "Распознавание питомцев",
      ai_pet_detection_desc: "Обнаружение и обход питомцев",
      ai_human_detection: "Распознавание людей",
      ai_human_detection_desc: "Обнаружение и обход людей",
      ai_furniture_detection: "Распознавание мебели",
      ai_furniture_detection_desc: "Обнаружение и обход мебели",
      ai_fluid_detection: "Распознавание жидкостей",
      ai_fluid_detection_desc: "Обнаружение и обход жидкостей",
      stain_avoidance: "Избегание пятен",
      stain_avoidance_desc: "Обходить обнаруженные пятна",
      collision_avoidance: "Предотвращение столкновений",
      collision_avoidance_desc: "Предотвращать столкновения с объектами",
      fill_light: "Подсветка",
      fill_light_desc: "Использовать подсветку для лучшего распознавания"
    }
  }
}, Sb = {
  // Room Selector (房间选择器)
  room_selector: {
    title: "选择房间",
    selected_count: "已选 {{count}} 个"
  },
  // Vacuum Map (建图与地图交互)
  vacuum_map: {
    no_map: "暂无地图",
    looking_for: "正在寻找：{{entity}}",
    room_overlay: "请选择需要清洁的房间",
    zone_overlay_create: "点击地图添加划区清洁区域",
    zone_overlay_resize: "拖动边角调整大小，点击其他空白处重新放置",
    clear_zone: "清除选区",
    switch_to_list: "切换到列表视图",
    switch_to_map: "切换到地图视图",
    room_list_overlay: "点击房间进行选择",
    no_rooms: "暂无可用房间"
  },
  // Mode Tabs (模式切换标签)
  modes: {
    room: "选区",
    // 对应选定房间
    all: "全局",
    // 对应全屋
    zone: "划区"
    // 对应自定义区域
  },
  // Action Buttons (操作按钮)
  actions: {
    clean: "开始清洁",
    clean_all: "全屋清洁",
    clean_rooms: "清洁 {{count}} 个房间",
    clean_rooms_plural: "清洁 {{count}} 个房间",
    select_rooms: "选择房间",
    zone_clean: "划区清洁",
    pause: "暂停",
    resume: "继续",
    stop: "停止",
    dock: "回充"
  },
  // Toast Messages (提示信息)
  toast: {
    selected_room: "已选择 {{name}}",
    deselected_room: "已取消选择 {{name}}",
    paused: "清洁已暂停",
    stopped: "清洁已停止",
    docked: "正在返回基站",
    cleaning_started: "开始清洁",
    resuming: "恢复清洁",
    starting_full_clean: "开始全屋清洁",
    pausing_vacuum: "扫地机器人已暂停",
    stopping_vacuum: "扫地机器人已停止",
    vacuum_docking: "扫地机正在返回基站",
    starting_room_clean: "开始清洁选中的 {{count}} 个房间",
    starting_room_clean_plural: "开始清洁选中的 {{count}} 个房间",
    starting_zone_clean: "开始划区清洁",
    select_rooms_first: "请先选择要清洁的房间",
    cannot_determine_map: "无法获取地图尺寸",
    select_zone_first: "请先在地图上划定一个区域"
  },
  // Room Selection Display (房间选择显示)
  room_display: {
    selected_rooms: "已选房间：",
    selected_label: "已选："
  },
  // Cleaning Mode Button (清洁模式按钮)
  cleaning_mode_button: {
    prefix_custom: "自定义：",
    prefix_cleangenius: "智能托管：",
    view_shortcuts: "查看快捷指令",
    vac_and_mop: "扫拖同步",
    mop_after_vac: "先扫后拖",
    vacuum: "单扫",
    mop: "单拖",
    mapping: "建图"
  },
  // Cleaning Mode Modal (清洁模式弹窗)
  cleaning_mode: {
    title: "清洁模式",
    clean_genius: "智能托管",
    custom: "自定义"
  },
  // Shortcuts Modal (快捷指令弹窗)
  shortcuts: {
    title: "快捷指令",
    no_shortcuts: "暂无快捷指令",
    create_hint: "请在 Dreame (追觅) App 中创建快捷指令，以便快速启动您常用的清洁任务"
  },
  // Custom Mode (自定义模式)
  custom_mode: {
    cleaning_mode_title: "清洁模式",
    suction_power_title: "吸力设置",
    max_plus_description: "吸力将提升至最高档位（该模式仅单次生效）。",
    wetness_title: "拖布水量",
    slightly_dry: "偏干",
    moist: "标准",
    wet: "偏湿",
    mop_washing_frequency_title: "拖布回洗频率",
    route_title: "路径设置"
  },
  // CleanGenius Mode (智能托管模式)
  cleangenius_mode: {
    cleaning_mode_title: "清洁模式",
    deep_cleaning: "深度清洁"
  },
  // Header (头部信息)
  header: {
    battery: "电量",
    status: "状态",
    area: "面积",
    time: "时间"
  },
  // Units (单位)
  units: {
    square_meters: "㎡",
    minutes: "分钟",
    minutes_short: "分",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (吸力档位)
  suction_levels: {
    quiet: "安静",
    standard: "标准",
    strong: "强劲",
    turbo: "超强"
  },
  // Mop Washing Frequency (拖布回洗频率)
  mop_washing_frequency: {
    by_room: "按房间",
    by_area: "按面积",
    by_time: "按时间"
  },
  // Errors (错误提示)
  errors: {
    entity_not_found: "未找到实体：{{entity}}",
    failed_to_load: "实体数据加载失败"
  },
  // Valetudo-specific
  valetudo: {
    panel: {
      title: "设置",
      device: "设备",
      consumables: "耗材",
      statistics: "统计",
      cleaning_settings: "清洁设置",
      rooms: "房间",
      configuration: "配置",
      status: "状态",
      battery: "电池",
      wifi: "Wi-Fi",
      signal: "信号",
      ip_address: "IP 地址",
      main_brush: "主刻",
      side_brush: "边刻",
      filter: "过滤器",
      sensors: "传感器",
      total_cleanings: "总清洁次数",
      total_area: "总面积",
      total_time: "总时间",
      current_area: "当前清洁 — 面积",
      current_time: "当前清洁 — 时间",
      carpet_mode: "地毯模式",
      replace: "更换",
      needs_replacement: "需要更换",
      remaining: "剩余: {{time}}",
      reset: "重置",
      dbm: "dBm",
      valetudo_ui: "Valetudo 界面",
      open: "打开"
    },
    restrictions: {
      select: "选择",
      wall: "墙",
      no_go: "禁行区",
      no_mop: "禁指区",
      delete_selected: "删除所选",
      save: "保存",
      save_changes: "保存更改",
      no_changes: "无更改"
    },
    toast: {
      saved: "限制已保存",
      error: "错误: {{message}}",
      config_needed: "⚠️ 需要配置，请查看控制台 (F12)。",
      mapping_started: "建图已启动",
      mapping_error: "无法启动建图"
    },
    status: {
      docked: "已归位",
      cleaning: "清洁中",
      paused: "已暂停",
      returning: "返回基站",
      idle: "待机",
      error: "错误"
    },
    restrictions_label: "虚拟限制",
    cleaning: {
      configure: "配置清洁",
      mode_title: "清洁模式",
      dry: "仅吸尘",
      wet: "仅拖地",
      both: "吸尘+拖地",
      suction_power: "吸力",
      water_level: "水量",
      iterations: "清洁遍数",
      mapping: "建图",
      mapping_warning_overwrite: "⚠️ 建图将覆盖当前地图。",
      mapping_warning_loss: "当前清洁进度和所有限制区域将丢失。是否继续？"
    },
    map: {
      loading: "地图加载中…",
      error: "地图错误: {{message}}"
    },
    time: {
      hours_minutes: "{{h}}时{{m}}分",
      minutes: "{{m}}分"
    },
    config_error: {
      restrictions_title: "虚拟限制区域 — 需要配置",
      mapping_title: "建图 — 需要配置",
      desc: "未设置 valetudo_url（卡片编辑器）且未配置 rest_command。请选择一项：",
      option_url: "选项 1（推荐）：打开卡片编辑器，填写 Valetudo URL 字段（例如 http://192.168.0.162）。",
      option_rest_intro: "选项 2：添加到 configuration.yaml 并重新加载 Home Assistant：",
      close: "关闭"
    }
  },
  // Settings Panel (设置面板)
  settings: {
    title: "设置",
    consumables: {
      title: "耗材管理",
      main_brush: "主刷",
      side_brush: "边刷",
      filter: "滤网",
      sensor: "传感器",
      remaining: "剩余",
      reset: "复位"
    },
    device_info: {
      title: "设备信息",
      firmware: "固件版本",
      total_area: "累计清洁面积",
      total_time: "累计清洁时间",
      total_cleans: "累计清洁次数",
      wifi_ssid: "Wi-Fi 网络",
      wifi_signal: "信号强度",
      ip_address: "IP 地址"
    },
    map_management: {
      title: "地图管理",
      description: "选择本次清洁要使用的地图。",
      no_maps: "暂无可用地图"
    },
    quick_settings: {
      title: "快捷设置",
      child_lock: "童锁",
      child_lock_desc: "锁定设备按键以防误触",
      carpet_boost: "地毯增压",
      carpet_boost_desc: "识别到地毯时自动增大吸力",
      obstacle_avoidance: "避障功能",
      obstacle_avoidance_desc: "清洁时自动避开障碍物",
      auto_dust_collecting: "自动集尘",
      auto_dust_collecting_desc: "清扫结束后自动清空尘盒",
      auto_drying: "自动烘干",
      auto_drying_desc: "清洗完成后自动烘干拖布",
      dnd: "免打扰",
      dnd_desc: "在设定的安静时段内不主动执行任务"
    },
    volume: {
      title: "音量与语音",
      test_sound: "寻找机器",
      muted: "已静音"
    },
    carpet: {
      title: "地毯清洁策略",
      carpet_boost: "地毯增压",
      carpet_boost_desc: "在地毯上自动提升吸力",
      carpet_recognition: "地毯识别",
      carpet_recognition_desc: "自动检测地面上的地毯",
      carpet_avoidance: "躲避地毯",
      carpet_avoidance_desc: "拖地模式下自动避开地毯",
      sensitivity: "地毯识别灵敏度",
      sensitivity_desc: "设置传感器检测地毯的灵敏程度",
      sensitivity_low: "低",
      sensitivity_medium: "中",
      sensitivity_high: "高"
    },
    ai_detection: {
      title: "AI 识别与避障",
      obstacle_avoidance: "避障功能",
      obstacle_avoidance_desc: "使用传感器避开障碍物",
      ai_obstacle_detection: "AI 障碍物识别",
      ai_obstacle_detection_desc: "使用 AI 视觉识别并避开障碍物",
      ai_obstacle_image_upload: "实景障碍物照片上传",
      ai_obstacle_image_upload_desc: "上传拍摄到的障碍物照片以供分析",
      ai_pet_detection: "宠物识别",
      ai_pet_detection_desc: "识别并智能避让宠物",
      ai_human_detection: "人员识别",
      ai_human_detection_desc: "识别并避让活动人员",
      ai_furniture_detection: "家具识别",
      ai_furniture_detection_desc: "识别家具并沿边清扫",
      ai_fluid_detection: "液体识别",
      ai_fluid_detection_desc: "识别并避开地面液体",
      stain_avoidance: "污渍躲避",
      stain_avoidance_desc: "自动避开识别到的顽固污渍",
      collision_avoidance: "防碰撞",
      collision_avoidance_desc: "主动减速以防止与物体发生碰撞",
      fill_light: "自动补光灯",
      fill_light_desc: "暗光环境下自动开启以提升识别率"
    }
  }
}, wb = {
  // Room Selector
  room_selector: {
    title: "Seleccionar Habitaciones",
    selected_count: "{{count}} seleccionadas"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "No hay mapa disponible",
    looking_for: "Buscando: {{entity}}",
    room_overlay: "Haga clic en los números de las habitaciones para seleccionarlas para la limpieza",
    zone_overlay_create: "Haga clic en el mapa para colocar una zona de limpieza",
    zone_overlay_resize: "Arrastre las esquinas para cambiar el tamaño, haga clic en otro lugar para reposicionar",
    clear_zone: "Borrar zona",
    switch_to_list: "Cambiar a vista de lista",
    switch_to_map: "Cambiar a vista de mapa",
    room_list_overlay: "Toque las habitaciones para seleccionarlas para la limpieza",
    no_rooms: "No hay habitaciones disponibles"
  },
  // Mode Tabs
  modes: {
    room: "Habitaciones",
    all: "Todo",
    zone: "Zona"
  },
  // Action Buttons
  actions: {
    clean: "Limpiar",
    clean_all: "Limpiar Todo",
    clean_rooms: "Limpiar {{count}} Habitación",
    clean_rooms_plural: "Limpiar {{count}} Habitaciones",
    select_rooms: "Seleccionar Habitaciones",
    zone_clean: "Limpiar Zona",
    pause: "Pausar",
    resume: "Reanudar",
    stop: "Detener",
    dock: "Base"
  },
  // Toast Messages
  toast: {
    selected_room: "{{name}} seleccionada",
    deselected_room: "{{name}} deseleccionada",
    paused: "Limpieza pausada",
    stopped: "Limpieza detenida",
    docked: "Volviendo a la base",
    cleaning_started: "Limpieza iniciada",
    resuming: "Reanudando limpieza",
    starting_full_clean: "Iniciando limpieza de toda la casa",
    pausing_vacuum: "Pausando aspirador",
    stopping_vacuum: "Deteniendo aspirador",
    vacuum_docking: "Aspirador volviendo a la base",
    starting_room_clean: "Iniciando limpieza para {{count}} habitación seleccionada",
    starting_room_clean_plural: "Iniciando limpieza para {{count}} habitaciones seleccionadas",
    starting_zone_clean: "Iniciando limpieza de zona",
    select_rooms_first: "Por favor, seleccione primero las habitaciones a limpiar",
    cannot_determine_map: "No se pueden determinar las dimensiones del mapa",
    select_zone_first: "Por favor, seleccione una zona en el mapa"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Habitaciones seleccionadas:",
    selected_label: "Seleccionadas:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Personalizado: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Ver accesos directos",
    vac_and_mop: "Aspirar y Trapear",
    mop_after_vac: "Trapear después de aspirar",
    vacuum: "Aspirar",
    mop: "Trapear",
    mapping: "Mapeo"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Modo de limpieza",
    clean_genius: "CleanGenius",
    custom: "Personalizado"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Accesos directos",
    no_shortcuts: "No hay accesos directos disponibles",
    create_hint: "Cree accesos directos en la aplicación Dreame para iniciar rápidamente sus rutinas de limpieza favoritas"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Modo de limpieza",
    suction_power_title: "Potencia de succión",
    max_plus_description: "La potencia de succión se incrementará al máximo nivel, es un modo de un solo uso.",
    wetness_title: "Humedad",
    slightly_dry: "Ligeramente seco",
    moist: "Húmedo",
    wet: "Mojado",
    mop_washing_frequency_title: "Frecuencia de lavado de mopa",
    route_title: "Ruta"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Modo de limpieza",
    deep_cleaning: "Limpieza profunda"
  },
  // Header
  header: {
    battery: "Batería",
    status: "Estado",
    area: "Área",
    time: "Tiempo"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Silencioso",
    standard: "Estándar",
    strong: "Turbo",
    turbo: "Máximo"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Por habitación",
    by_area: "Por área",
    by_time: "Por tiempo"
  },
  // Errors
  errors: {
    entity_not_found: "Entidad no encontrada: {{entity}}",
    failed_to_load: "Error al cargar los datos de la entidad"
  },
  // Valetudo-specific
  valetudo: {
    panel: {
      title: "Ajustes",
      device: "Dispositivo",
      consumables: "Consumibles",
      statistics: "Estadísticas",
      cleaning_settings: "Ajustes de limpieza",
      rooms: "Habitaciones",
      configuration: "Configuración",
      status: "Estado",
      battery: "Batería",
      wifi: "Wi-Fi",
      signal: "Señal",
      ip_address: "Dirección IP",
      main_brush: "Cepillo principal",
      side_brush: "Cepillo lateral",
      filter: "Filtro",
      sensors: "Sensores",
      total_cleanings: "Limpiezas totales",
      total_area: "Área total",
      total_time: "Tiempo total",
      current_area: "Sesión actual — área",
      current_time: "Sesión actual — tiempo",
      carpet_mode: "Modo alfombra",
      replace: "Reemplazar",
      needs_replacement: "Necesita reemplazo",
      remaining: "Restante: {{time}}",
      reset: "Restablecer",
      dbm: "dBm",
      valetudo_ui: "Valetudo UI",
      open: "Abrir"
    },
    restrictions: {
      select: "Seleccionar",
      wall: "Pared",
      no_go: "No-go",
      no_mop: "No-mop",
      delete_selected: "Eliminar seleccionado",
      save: "Guardar",
      save_changes: "Guardar cambios",
      no_changes: "Sin cambios"
    },
    toast: {
      saved: "Restricciones guardadas",
      error: "Error: {{message}}",
      config_needed: "⚠️ Configuración necesaria. Ver consola (F12).",
      mapping_started: "Mapeo iniciado",
      mapping_error: "Error al iniciar el mapeo"
    },
    status: {
      docked: "En base",
      cleaning: "Limpiando",
      paused: "Pausado",
      returning: "Volviendo a la base",
      idle: "En espera",
      error: "Error"
    },
    restrictions_label: "Restricciones virtuales",
    cleaning: {
      configure: "Configurar limpieza",
      mode_title: "Modo de limpieza",
      dry: "Solo aspirar",
      wet: "Solo fregar",
      both: "Aspirar y fregar",
      suction_power: "Potencia de succión",
      water_level: "Nivel de agua",
      iterations: "Pasadas de limpieza",
      mapping: "Mapeo",
      mapping_warning_overwrite: "⚠️ El mapeo sobrescribirá el mapa actual.",
      mapping_warning_loss: "Se perderán el progreso de limpieza actual y todas las zonas de restricción. ¿Continuar?"
    },
    map: {
      loading: "Cargando mapa…",
      error: "Error de mapa: {{message}}"
    },
    time: {
      hours_minutes: "{{h}}h {{m}}m",
      minutes: "{{m}}m"
    },
    config_error: {
      restrictions_title: "Restricciones virtuales — configuración necesaria",
      mapping_title: "Mapeo — configuración necesaria",
      desc: "No está configurado ni valetudo_url (editor de tarjeta) ni rest_command. Elige una opción:",
      option_url: "Opción 1 — recomendada: abre el editor de tarjeta y rellena el campo Valetudo URL (p. ej. http://192.168.0.162).",
      option_rest_intro: "Opción 2 — añade a configuration.yaml y recarga Home Assistant:",
      close: "Cerrar"
    }
  },
  // Settings Panel
  settings: {
    title: "Ajustes",
    consumables: {
      title: "Consumibles",
      main_brush: "Cepillo principal",
      side_brush: "Cepillo lateral",
      filter: "Filtro",
      sensor: "Sensor",
      remaining: "restante",
      reset: "Restablecer"
    },
    device_info: {
      title: "Información del dispositivo",
      firmware: "Firmware",
      total_area: "Área total limpiada",
      total_time: "Tiempo total de limpieza",
      total_cleans: "Limpiezas totales",
      wifi_ssid: "Red Wi-Fi",
      wifi_signal: "Intensidad de señal",
      ip_address: "Dirección IP"
    },
    map_management: {
      title: "Gestión de mapas",
      description: "Seleccione qué mapa usar para la limpieza.",
      no_maps: "No hay mapas disponibles"
    },
    quick_settings: {
      title: "Ajustes rápidos",
      child_lock: "Bloqueo infantil",
      child_lock_desc: "Desactivar botones físicos del dispositivo",
      carpet_boost: "Potencia en alfombras",
      carpet_boost_desc: "Aumentar succión en alfombras",
      obstacle_avoidance: "Evitación de obstáculos",
      obstacle_avoidance_desc: "Evitar obstáculos durante la limpieza",
      auto_dust_collecting: "Vaciado automático",
      auto_dust_collecting_desc: "Vaciar automáticamente el depósito de polvo",
      auto_drying: "Secado automático",
      auto_drying_desc: "Secar la mopa después de la limpieza",
      dnd: "No molestar",
      dnd_desc: "Horas de silencio con actividad reducida"
    },
    volume: {
      title: "Volumen y sonido",
      test_sound: "Localizar",
      muted: "Silenciado"
    },
    carpet: {
      title: "Ajustes de alfombras",
      carpet_boost: "Potencia en alfombras",
      carpet_boost_desc: "Aumentar potencia de succión en alfombras",
      carpet_recognition: "Reconocimiento de alfombras",
      carpet_recognition_desc: "Detectar alfombras automáticamente",
      carpet_avoidance: "Evitación de alfombras",
      carpet_avoidance_desc: "Evitar alfombras mientras trapea",
      sensitivity: "Sensibilidad de alfombras",
      sensitivity_desc: "Nivel de sensibilidad de detección",
      sensitivity_low: "Baja",
      sensitivity_medium: "Media",
      sensitivity_high: "Alta"
    },
    ai_detection: {
      title: "IA y detección",
      obstacle_avoidance: "Evitación de obstáculos",
      obstacle_avoidance_desc: "Usar sensores para evitar obstáculos",
      ai_obstacle_detection: "Detección de obstáculos con IA",
      ai_obstacle_detection_desc: "Usar IA para identificar y evitar obstáculos",
      ai_obstacle_image_upload: "Carga de imágenes de obstáculos",
      ai_obstacle_image_upload_desc: "Cargar imágenes de obstáculos para análisis",
      ai_pet_detection: "Detección de mascotas",
      ai_pet_detection_desc: "Detectar y evitar mascotas",
      ai_human_detection: "Detección de personas",
      ai_human_detection_desc: "Detectar y evitar personas",
      ai_furniture_detection: "Detección de muebles",
      ai_furniture_detection_desc: "Detectar y navegar alrededor de muebles",
      ai_fluid_detection: "Detección de líquidos",
      ai_fluid_detection_desc: "Detectar y evitar líquidos",
      stain_avoidance: "Evitación de manchas",
      stain_avoidance_desc: "Evitar manchas detectadas",
      collision_avoidance: "Evitación de colisiones",
      collision_avoidance_desc: "Prevenir colisiones con objetos",
      fill_light: "Luz de relleno",
      fill_light_desc: "Usar luz de relleno para mejor detección"
    }
  }
}, zb = {
  // Kamer Kiezer
  room_selector: {
    title: "Kamers Selecteren",
    selected_count: "{{count}} geselecteerd"
  },
  // Stofzuiger Kaart
  vacuum_map: {
    no_map: "Geen kaart beschikbaar",
    looking_for: "Zoeken naar: {{entity}}",
    room_overlay: "Klik op kamernummers om kamers te selecteren voor reiniging",
    zone_overlay_create: "Klik op de kaart om een schoonmaakzone te plaatsen",
    zone_overlay_resize: "Sleep de hoeken om aan te passen, klik elders om te verplaatsen",
    clear_zone: "Zone wissen",
    switch_to_list: "Naar lijstweergave",
    switch_to_map: "Naar kaartweergave",
    room_list_overlay: "Tik op kamers om te selecteren voor reiniging",
    no_rooms: "Geen kamers beschikbaar"
  },
  // Modus Tabbladen
  modes: {
    room: "Kamer",
    all: "Alles",
    zone: "Zone"
  },
  // Actieknoppen
  actions: {
    clean: "Schoonmaken",
    clean_all: "Alles Schoonmaken",
    clean_rooms: "Schoonmaken ({{count}} kamer)",
    clean_rooms_plural: "Schoonmaken ({{count}} kamers)",
    select_rooms: "Kamers Selecteren",
    zone_clean: "Zone Reinigen",
    pause: "Pauze",
    resume: "Hervatten",
    stop: "Stop",
    dock: "Docken"
  },
  // Meldingen (Toasts)
  toast: {
    selected_room: "{{name}} geselecteerd",
    deselected_room: "{{name}} gedeselecteerd",
    paused: "Schoonmaken gepauzeerd",
    stopped: "Schoonmaken gestopt",
    docked: "Keert terug naar dock",
    cleaning_started: "Schoonmaken gestart",
    resuming: "Schoonmaken wordt hervat",
    starting_full_clean: "Start volledige reiniging van het huis",
    pausing_vacuum: "Stofzuiger pauzeren",
    stopping_vacuum: "Stofzuiger stoppen",
    vacuum_docking: "Stofzuiger keert terug naar dock",
    starting_room_clean: "Start reinigen van {{count}} geselecteerde kamer",
    starting_room_clean_plural: "Start reinigen van {{count}} geselecteerde kamers",
    starting_zone_clean: "Zone-reiniging gestart",
    select_rooms_first: "Selecteer eerst de kamers die je wilt schoonmaken",
    cannot_determine_map: "Kan afmetingen van de kaart niet bepalen",
    select_zone_first: "Selecteer eerst een zone op de kaart"
  },
  // Kamer Selectie Weergave
  room_display: {
    selected_rooms: "Geselecteerde Kamers:",
    selected_label: "Geselecteerd:"
  },
  // Schoonmaakmodus Knop
  cleaning_mode_button: {
    prefix_custom: "Aangepast: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Snelkoppelingen bekijken",
    vac_and_mop: "Stofzuigen & Dweilen",
    mop_after_vac: "Dweilen na Stofzuigen",
    vacuum: "Stofzuigen",
    mop: "Dweilen",
    mapping: "Kartering"
  },
  // Schoonmaakmodus Modal
  cleaning_mode: {
    title: "Schoonmaakmodus",
    clean_genius: "CleanGenius",
    custom: "Aangepast"
  },
  // Snelkoppelingen Modal
  shortcuts: {
    title: "Snelkoppelingen",
    no_shortcuts: "Geen snelkoppelingen beschikbaar",
    create_hint: "Maak snelkoppelingen aan in de Dreame app om snel je favoriete routines te starten"
  },
  // Aangepaste Modus
  custom_mode: {
    cleaning_mode_title: "Schoonmaakmodus",
    suction_power_title: "Zuigkracht",
    max_plus_description: "De zuigkracht wordt verhoogd naar het hoogste niveau (eenmalige modus).",
    wetness_title: "Vochtigheid",
    slightly_dry: "Licht droog",
    moist: "Vochtig",
    wet: "Nat",
    mop_washing_frequency_title: "Dweil-wasfrequentie",
    route_title: "Route"
  },
  // CleanGenius Modus
  cleangenius_mode: {
    cleaning_mode_title: "Schoonmaakmodus",
    deep_cleaning: "Grondige Reiniging"
  },
  // Header
  header: {
    battery: "Batterij",
    status: "Status",
    area: "Oppervlak",
    time: "Tijd"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Stil",
    standard: "Standaard",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Per kamer",
    by_area: "Per oppervlak",
    by_time: "Per tijd"
  },
  // Fouten
  errors: {
    entity_not_found: "Entiteit niet gevonden: {{entity}}",
    failed_to_load: "Laden van entiteitsgegevens mislukt"
  },
  // Instellingenpaneel
  // Valetudo-specific
  valetudo: {
    panel: {
      title: "Instellingen",
      device: "Apparaat",
      consumables: "Verbruiksartikelen",
      statistics: "Statistieken",
      cleaning_settings: "Reinigingsinstellingen",
      rooms: "Kamers",
      configuration: "Configuratie",
      status: "Status",
      battery: "Batterij",
      wifi: "Wi-Fi",
      signal: "Signaal",
      ip_address: "IP-adres",
      main_brush: "Hoofdborstel",
      side_brush: "Zijborstel",
      filter: "Filter",
      sensors: "Sensoren",
      total_cleanings: "Totaal reinigingen",
      total_area: "Totaal oppervlak",
      total_time: "Totale tijd",
      current_area: "Huidige sessie — oppervlak",
      current_time: "Huidige sessie — tijd",
      carpet_mode: "Tapijtmodus",
      replace: "Vervangen",
      needs_replacement: "Vervanging nodig",
      remaining: "Resterend: {{time}}",
      reset: "Resetten",
      dbm: "dBm",
      valetudo_ui: "Valetudo UI",
      open: "Openen"
    },
    restrictions: {
      select: "Selecteren",
      wall: "Muur",
      no_go: "No-go",
      no_mop: "No-mop",
      delete_selected: "Geselecteerde verwijderen",
      save: "Opslaan",
      save_changes: "Wijzigingen opslaan",
      no_changes: "Geen wijzigingen"
    },
    toast: {
      saved: "Beperkingen opgeslagen",
      error: "Fout: {{message}}",
      config_needed: "⚠️ Configuratie vereist. Zie console (F12).",
      mapping_started: "Kaartcyclus gestart",
      mapping_error: "Kaartcyclus starten mislukt"
    },
    status: {
      docked: "Op basis",
      cleaning: "Aan het reinigen",
      paused: "Gepauzeerd",
      returning: "Terug naar basis",
      idle: "Inactief",
      error: "Fout"
    },
    restrictions_label: "Virtuele beperkingen",
    cleaning: {
      configure: "Reiniging instellen",
      mode_title: "Reinigingsmodus",
      dry: "Alleen stofzuigen",
      wet: "Alleen dweilen",
      both: "Stofzuigen & dweilen",
      suction_power: "Zuigkracht",
      water_level: "Waterniveau",
      iterations: "Reinigingspassen",
      mapping: "Kartering",
      mapping_warning_overwrite: "⚠️ Kartering overschrijft de huidige kaart.",
      mapping_warning_loss: "De huidige schoonmaakvoortgang en alle beperkingszones gaan verloren. Doorgaan?"
    },
    map: {
      loading: "Kaart laden…",
      error: "Kaartfout: {{message}}"
    },
    time: {
      hours_minutes: "{{h}}u {{m}}m",
      minutes: "{{m}}m"
    },
    config_error: {
      restrictions_title: "Virtuele beperkingen — configuratie vereist",
      mapping_title: "Kaartopname — configuratie vereist",
      desc: "Noch valetudo_url (kaarteditor) noch rest_command is geconfigureerd. Kies een optie:",
      option_url: "Optie 1 — aanbevolen: open de kaarteditor en vul het veld Valetudo URL in (bijv. http://192.168.0.162).",
      option_rest_intro: "Optie 2 — voeg toe aan configuration.yaml en herlaad Home Assistant:",
      close: "Sluiten"
    }
  },
  settings: {
    title: "Instellingen",
    consumables: {
      title: "Onderdelen & Verbruik",
      main_brush: "Hoofdborstel",
      side_brush: "Zijborstel",
      filter: "Filter",
      sensor: "Sensor",
      remaining: "resterend",
      reset: "Resetten"
    },
    device_info: {
      title: "Apparaatinfo",
      firmware: "Firmware",
      total_area: "Totaal Gereinigd Oppervlak",
      total_time: "Totale Schoonmaaktijd",
      total_cleans: "Totaal Aantal Reinigingen",
      wifi_ssid: "Wifi-netwerk",
      wifi_signal: "Signaalsterkte",
      ip_address: "IP-adres"
    },
    map_management: {
      title: "Kaartbeheer",
      description: "Selecteer welke kaart je wilt gebruiken.",
      no_maps: "Geen kaarten beschikbaar"
    },
    quick_settings: {
      title: "Snelle Instellingen",
      child_lock: "Kinderslot",
      child_lock_desc: "Fysieke knoppen op het apparaat uitschakelen",
      carpet_boost: "Tapijtboost",
      carpet_boost_desc: "Zuigkracht verhogen op tapijt",
      obstacle_avoidance: "Obstakelvermijding",
      obstacle_avoidance_desc: "Obstakels vermijden tijdens het reinigen",
      auto_dust_collecting: "Automatisch legen",
      auto_dust_collecting_desc: "Stofbak automatisch legen",
      auto_drying: "Automatisch drogen",
      auto_drying_desc: "Dweilpad drogen na reiniging",
      dnd: "Niet Storen",
      dnd_desc: "Stille uren met beperkte activiteit"
    },
    volume: {
      title: "Volume & Geluid",
      test_sound: "Lokaliseren",
      muted: "Gedempt"
    },
    carpet: {
      title: "Tapijtinstellingen",
      carpet_boost: "Tapijtboost",
      carpet_boost_desc: "Zuigkracht verhogen op tapijt",
      carpet_recognition: "Tapijtherkenning",
      carpet_recognition_desc: "Automatisch tapijt detecteren",
      carpet_avoidance: "Tapijt vermijden",
      carpet_avoidance_desc: "Tapijten vermijden tijdens het dweilen",
      sensitivity: "Tapijtgevoeligheid",
      sensitivity_desc: "Gevoeligheidsniveau voor detectie",
      sensitivity_low: "Laag",
      sensitivity_medium: "Gemiddeld",
      sensitivity_high: "Hoog"
    },
    ai_detection: {
      title: "AI & Detectie",
      obstacle_avoidance: "Obstakelvermijding",
      obstacle_avoidance_desc: "Sensoren gebruiken om obstakels te vermijden",
      ai_obstacle_detection: "AI-obstakeldetectie",
      ai_obstacle_detection_desc: "AI gebruiken om obstakels te herkennen en vermijden",
      ai_obstacle_image_upload: "Obstakelfoto's uploaden",
      ai_obstacle_image_upload_desc: "Foto's van obstakels uploaden voor analyse",
      ai_pet_detection: "Huisdierdetectie",
      ai_pet_detection_desc: "Huisdieren detecteren en vermijden",
      ai_human_detection: "Personendetectie",
      ai_human_detection_desc: "Personen detecteren en vermijden",
      ai_furniture_detection: "Meubeldetectie",
      ai_furniture_detection_desc: "Meubels detecteren en eromheen navigeren",
      ai_fluid_detection: "Vloeistofdetectie",
      ai_fluid_detection_desc: "Vloeistoffen detecteren en vermijden",
      stain_avoidance: "Vlekvermijding",
      stain_avoidance_desc: "Gedetecteerde vlekken vermijden",
      collision_avoidance: "Botsvermijding",
      collision_avoidance_desc: "Botsingen met objecten voorkomen",
      fill_light: "Bijverlichting",
      fill_light_desc: "Bijverlichting gebruiken voor betere detectie"
    }
  }
}, Nb = {
  // Room Selector
  room_selector: {
    title: "Seleziona stanze",
    selected_count: "{{count}} selezionate"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "Nessuna mappa disponibile",
    looking_for: "Ricerca di: {{entity}}",
    room_overlay: "Clicca sui numeri delle stanze per selezionarle per la pulizia",
    zone_overlay_create: "Clicca sulla mappa per posizionare una zona di pulizia",
    zone_overlay_resize: "Trascina gli angoli per ridimensionare, clicca altrove per riposizionare",
    clear_zone: "Cancella zona",
    switch_to_list: "Passa alla vista elenco",
    switch_to_map: "Passa alla vista mappa",
    room_list_overlay: "Tocca le stanze per selezionarle per la pulizia",
    no_rooms: "Nessuna stanza disponibile"
  },
  // Mode Tabs
  modes: {
    room: "Stanza",
    all: "Tutto",
    zone: "Zona"
  },
  // Action Buttons
  actions: {
    clean: "Pulisci",
    clean_all: "Pulisci tutto",
    clean_rooms: "Pulisci {{count}} stanza",
    clean_rooms_plural: "Pulisci {{count}} stanze",
    select_rooms: "Seleziona stanze",
    zone_clean: "Pulizia zona",
    pause: "Pausa",
    resume: "Riprendi",
    stop: "Stop",
    dock: "Rientra alla base"
  },
  // Toast Messages
  toast: {
    selected_room: "{{name}} selezionata",
    deselected_room: "{{name}} deselezionata",
    paused: "Pulizia in pausa",
    stopped: "Pulizia interrotta",
    docked: "Rientro alla base in corso",
    cleaning_started: "Pulizia avviata",
    resuming: "Ripresa della pulizia",
    starting_full_clean: "Avvio pulizia completa della casa",
    pausing_vacuum: "Messa in pausa del robot",
    stopping_vacuum: "Arresto del robot",
    vacuum_docking: "Il robot sta rientrando alla base",
    starting_room_clean: "Avvio pulizia per {{count}} stanza selezionata",
    starting_room_clean_plural: "Avvio pulizia per {{count}} stanze selezionate",
    starting_zone_clean: "Avvio pulizia della zona",
    select_rooms_first: "Seleziona prima le stanze da pulire",
    cannot_determine_map: "Impossibile determinare le dimensioni della mappa",
    select_zone_first: "Seleziona una zona sulla mappa"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Stanze selezionate:",
    selected_label: "Selezionate:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Personalizzato: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Visualizza scorciatoie",
    vac_and_mop: "Aspirazione e lavaggio",
    mop_after_vac: "Lavaggio dopo aspirazione",
    vacuum: "Aspirazione",
    mop: "Lavaggio",
    mapping: "Mappatura"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Modalità di pulizia",
    clean_genius: "CleanGenius",
    custom: "Personalizzata"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Scorciatoie",
    no_shortcuts: "Nessuna scorciatoia disponibile",
    create_hint: "Crea scorciatoie nell'app Dreame per avviare rapidamente le tue routine di pulizia preferite"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Modalità di pulizia",
    suction_power_title: "Potenza di aspirazione",
    max_plus_description: "La potenza di aspirazione sarà aumentata al livello massimo. Modalità utilizzabile una sola volta.",
    wetness_title: "Livello di umidità",
    slightly_dry: "Leggermente asciutto",
    moist: "Umido",
    wet: "Bagnato",
    mop_washing_frequency_title: "Frequenza lavaggio mop",
    route_title: "Percorso"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Modalità di pulizia",
    deep_cleaning: "Pulizia profonda"
  },
  // Header
  header: {
    battery: "Batteria",
    status: "Stato",
    area: "Area",
    time: "Tempo"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Silenzioso",
    standard: "Standard",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Per stanza",
    by_area: "Per area",
    by_time: "Per tempo"
  },
  // Errors
  errors: {
    entity_not_found: "Entità non trovata: {{entity}}",
    failed_to_load: "Impossibile caricare i dati dell'entità"
  },
  // Valetudo-specific
  valetudo: {
    panel: {
      title: "Impostazioni",
      device: "Dispositivo",
      consumables: "Consumabili",
      statistics: "Statistiche",
      cleaning_settings: "Impostazioni pulizia",
      rooms: "Stanze",
      configuration: "Configurazione",
      status: "Stato",
      battery: "Batteria",
      wifi: "Wi-Fi",
      signal: "Segnale",
      ip_address: "Indirizzo IP",
      main_brush: "Spazzola principale",
      side_brush: "Spazzola laterale",
      filter: "Filtro",
      sensors: "Sensori",
      total_cleanings: "Pulizie totali",
      total_area: "Area totale",
      total_time: "Tempo totale",
      current_area: "Sessione corrente — area",
      current_time: "Sessione corrente — tempo",
      carpet_mode: "Modalità tappeto",
      replace: "Sostituire",
      needs_replacement: "Sostituzione necessaria",
      remaining: "Rimasto: {{time}}",
      reset: "Reimposta",
      dbm: "dBm",
      valetudo_ui: "Valetudo UI",
      open: "Apri"
    },
    restrictions: {
      select: "Seleziona",
      wall: "Parete",
      no_go: "No-go",
      no_mop: "No-mop",
      delete_selected: "Elimina selezionato",
      save: "Salva",
      save_changes: "Salva modifiche",
      no_changes: "Nessuna modifica"
    },
    toast: {
      saved: "Restrizioni salvate",
      error: "Errore: {{message}}",
      config_needed: "⚠️ Configurazione necessaria. Vedi console (F12).",
      mapping_started: "Mappatura avviata",
      mapping_error: "Impossibile avviare la mappatura"
    },
    status: {
      docked: "In base",
      cleaning: "In pulizia",
      paused: "In pausa",
      returning: "Ritorno alla base",
      idle: "In attesa",
      error: "Errore"
    },
    restrictions_label: "Restrizioni virtuali",
    cleaning: {
      configure: "Configura pulizia",
      mode_title: "Modalità pulizia",
      dry: "Solo aspirazione",
      wet: "Solo lavaggio",
      both: "Aspira e lava",
      suction_power: "Potenza di aspirazione",
      water_level: "Livello acqua",
      iterations: "Passate di pulizia",
      mapping: "Mappatura",
      mapping_warning_overwrite: "⚠️ La mappatura sovrascriverà la mappa corrente.",
      mapping_warning_loss: "Il progresso di pulizia corrente e tutte le zone di restrizione andranno persi. Continuare?"
    },
    map: {
      loading: "Caricamento mappa…",
      error: "Errore mappa: {{message}}"
    },
    time: {
      hours_minutes: "{{h}}h {{m}}m",
      minutes: "{{m}}m"
    },
    config_error: {
      restrictions_title: "Restrizioni virtuali — configurazione necessaria",
      mapping_title: "Mappatura — configurazione necessaria",
      desc: "Né valetudo_url (editor scheda) né rest_command è configurato. Scegli un'opzione:",
      option_url: "Opzione 1 — consigliata: apri l'editor della scheda e inserisci il campo Valetudo URL (es. http://192.168.0.162).",
      option_rest_intro: "Opzione 2 — aggiungi a configuration.yaml e ricarica Home Assistant:",
      close: "Chiudi"
    }
  },
  // Settings Panel
  settings: {
    title: "Impostazioni",
    consumables: {
      title: "Materiali di consumo",
      main_brush: "Spazzola principale",
      side_brush: "Spazzola laterale",
      filter: "Filtro",
      sensor: "Sensore",
      remaining: "rimanente",
      reset: "Reimposta"
    },
    device_info: {
      title: "Informazioni dispositivo",
      firmware: "Firmware",
      total_area: "Area totale pulita",
      total_time: "Tempo totale di pulizia",
      total_cleans: "Pulizie totali",
      wifi_ssid: "Rete Wi-Fi",
      wifi_signal: "Potenza segnale",
      ip_address: "Indirizzo IP"
    },
    map_management: {
      title: "Gestione mappa",
      description: "Seleziona quale mappa utilizzare per la pulizia.",
      no_maps: "Nessuna mappa disponibile"
    },
    quick_settings: {
      title: "Impostazioni rapide",
      child_lock: "Blocco bambini",
      child_lock_desc: "Disabilita i pulsanti fisici del dispositivo",
      carpet_boost: "Potenza tappeti",
      carpet_boost_desc: "Aumenta l'aspirazione sui tappeti",
      obstacle_avoidance: "Evitamento ostacoli",
      obstacle_avoidance_desc: "Evita gli ostacoli durante la pulizia",
      auto_dust_collecting: "Svuotamento automatico",
      auto_dust_collecting_desc: "Svuota automaticamente il contenitore della polvere",
      auto_drying: "Asciugatura automatica",
      auto_drying_desc: "Asciuga il panno mop dopo la pulizia",
      dnd: "Non disturbare",
      dnd_desc: "Orari silenziosi con attività ridotta"
    },
    volume: {
      title: "Volume e suoni",
      test_sound: "Individua",
      muted: "Disattivato"
    },
    carpet: {
      title: "Impostazioni tappeti",
      carpet_boost: "Potenza tappeti",
      carpet_boost_desc: "Aumenta la potenza di aspirazione sui tappeti",
      carpet_recognition: "Riconoscimento tappeti",
      carpet_recognition_desc: "Rileva automaticamente i tappeti",
      carpet_avoidance: "Evita tappeti",
      carpet_avoidance_desc: "Evita i tappeti durante il lavaggio",
      sensitivity: "Sensibilità tappeti",
      sensitivity_desc: "Livello di sensibilità di rilevamento",
      sensitivity_low: "Bassa",
      sensitivity_medium: "Media",
      sensitivity_high: "Alta"
    },
    ai_detection: {
      title: "AI e rilevamento",
      obstacle_avoidance: "Evitamento ostacoli",
      obstacle_avoidance_desc: "Usa i sensori per evitare ostacoli",
      ai_obstacle_detection: "Rilevamento ostacoli AI",
      ai_obstacle_detection_desc: "Usa l'AI per identificare ed evitare ostacoli",
      ai_obstacle_image_upload: "Caricamento immagini ostacoli",
      ai_obstacle_image_upload_desc: "Carica immagini degli ostacoli per l'analisi",
      ai_pet_detection: "Rilevamento animali domestici",
      ai_pet_detection_desc: "Rileva ed evita animali domestici",
      ai_human_detection: "Rilevamento persone",
      ai_human_detection_desc: "Rileva ed evita persone",
      ai_furniture_detection: "Rilevamento mobili",
      ai_furniture_detection_desc: "Rileva e aggira i mobili",
      ai_fluid_detection: "Rilevamento liquidi",
      ai_fluid_detection_desc: "Rileva ed evita liquidi",
      stain_avoidance: "Evitamento macchie",
      stain_avoidance_desc: "Evita le macchie rilevate",
      collision_avoidance: "Evitamento collisioni",
      collision_avoidance_desc: "Previene collisioni con oggetti",
      fill_light: "Luce di riempimento",
      fill_light_desc: "Usa la luce di riempimento per un rilevamento migliore"
    }
  }
}, Eb = {
  // Room Selector
  room_selector: {
    title: "Wybierz pokoje",
    selected_count: "Wybrano: {{count}}"
  },
  // Vacuum Map
  vacuum_map: {
    no_map: "Mapa niedostępna",
    looking_for: "Szukanie: {{entity}}",
    room_overlay: "Kliknij numery pokojów, aby wybrać je do sprzątania",
    zone_overlay_create: "Kliknij na mapie, aby umieścić strefę sprzątania",
    zone_overlay_resize: "Przeciągnij rogi, aby zmienić rozmiar, kliknij obok, aby zmienić pozycję",
    clear_zone: "Wyczyść strefę",
    switch_to_list: "Przełącz na widok listy",
    switch_to_map: "Przełącz na widok mapy",
    room_list_overlay: "Dotknij pokoje, aby wybrać do sprzątania",
    no_rooms: "Brak dostępnych pokoi"
  },
  // Mode Tabs
  modes: {
    room: "Pokój",
    all: "Wszystko",
    zone: "Strefa"
  },
  // Action Buttons
  actions: {
    clean: "Sprzątaj",
    clean_all: "Sprzątaj wszystko",
    clean_rooms: "Sprzątaj {{count}} pokój",
    clean_rooms_plural: "Sprzątaj {{count}} pokoje/pokoi",
    select_rooms: "Wybierz pokoje",
    zone_clean: "Sprzątanie strefowe",
    pause: "Pauza",
    resume: "Wznów",
    stop: "Zatrzymaj",
    dock: "Baza"
  },
  // Toast Messages
  toast: {
    selected_room: "Wybrano {{name}}",
    deselected_room: "Odznaczono {{name}}",
    paused: "Wstrzymano sprzątanie",
    stopped: "Zatrzymano sprzątanie",
    docked: "Powrót do bazy",
    cleaning_started: "Rozpoczęto sprzątanie",
    resuming: "Wznawianie sprzątania",
    starting_full_clean: "Rozpoczynanie sprzątania całego domu",
    pausing_vacuum: "Wstrzymywanie odkurzacza",
    stopping_vacuum: "Zatrzymywanie odkurzacza",
    vacuum_docking: "Odkurzacz wraca do bazy",
    starting_room_clean: "Rozpoczynanie sprzątania {{count}} wybranego pokoju",
    starting_room_clean_plural: "Rozpoczynanie sprzątania {{count}} wybranych pokojów",
    starting_zone_clean: "Rozpoczynanie sprzątania strefowego",
    select_rooms_first: "Najpierw wybierz pokoje do sprzątania",
    cannot_determine_map: "Nie można określić wymiarów mapy",
    select_zone_first: "Najpierw wybierz strefę na mapie"
  },
  // Room Selection Display
  room_display: {
    selected_rooms: "Wybrane pokoje:",
    selected_label: "Wybrano:"
  },
  // Cleaning Mode Button
  cleaning_mode_button: {
    prefix_custom: "Własne: ",
    prefix_cleangenius: "CleanGenius: ",
    view_shortcuts: "Pokaż skróty",
    vac_and_mop: "Odkurzanie i mopowanie",
    mop_after_vac: "Mopowanie po odkurzaniu",
    vacuum: "Odkurzanie",
    mop: "Mopowanie",
    mapping: "Mapowanie"
  },
  // Cleaning Mode Modal
  cleaning_mode: {
    title: "Tryb sprzątania",
    clean_genius: "CleanGenius",
    custom: "Własny"
  },
  // Shortcuts Modal
  shortcuts: {
    title: "Skróty",
    no_shortcuts: "Brak dostępnych skrótów",
    create_hint: "Utwórz skróty w aplikacji Dreame, aby szybko uruchamiać ulubione procedury sprzątania"
  },
  // Custom Mode
  custom_mode: {
    cleaning_mode_title: "Tryb sprzątania",
    suction_power_title: "Siła ssania",
    max_plus_description: "Siła ssania zostanie zwiększona do najwyższego poziomu (tryb jednorazowy).",
    wetness_title: "Wilgotność mopa",
    slightly_dry: "Lekko suchy",
    moist: "Wilgotny",
    wet: "Mokry",
    mop_washing_frequency_title: "Częstotliwość mycia mopa",
    route_title: "Trasa"
  },
  // CleanGenius Mode
  cleangenius_mode: {
    cleaning_mode_title: "Tryb sprzątania",
    deep_cleaning: "Głębokie czyszczenie"
  },
  // Header
  header: {
    battery: "Bateria",
    status: "Status",
    area: "Powierzchnia",
    time: "Czas"
  },
  // Units
  units: {
    square_meters: "m²",
    minutes: "min",
    minutes_short: "m",
    percent: "%",
    decibels: "dBm"
  },
  // Suction Levels (friendly names)
  suction_levels: {
    quiet: "Cichy",
    standard: "Standardowy",
    strong: "Turbo",
    turbo: "Max"
  },
  // Mop Washing Frequency
  mop_washing_frequency: {
    by_room: "Według pokoju",
    by_area: "Według powierzchni",
    by_time: "Według czasu"
  },
  // Errors
  errors: {
    entity_not_found: "Nie znaleziono encji: {{entity}}",
    failed_to_load: "Błąd ładowania danych encji"
  },
  // Valetudo-specific
  valetudo: {
    panel: {
      title: "Ustawienia",
      device: "Urządzenie",
      consumables: "Materiały eksploatacyjne",
      statistics: "Statystyki",
      cleaning_settings: "Ustawienia sprzątania",
      rooms: "Pokoje",
      configuration: "Konfiguracja",
      status: "Status",
      battery: "Bateria",
      wifi: "Wi-Fi",
      signal: "Sygnał",
      ip_address: "Adres IP",
      main_brush: "Główna szczotka",
      side_brush: "Boczna szczotka",
      filter: "Filtr",
      sensors: "Czujniki",
      total_cleanings: "Liczba sprzątań",
      total_area: "Całkowita powierzchnia",
      total_time: "Całkowity czas",
      current_area: "Bieżąca sesja — powierzchnia",
      current_time: "Bieżąca sesja — czas",
      carpet_mode: "Tryb dywanu",
      replace: "Wymień",
      needs_replacement: "Wymiana potrzebna",
      remaining: "Pozostało: {{time}}",
      reset: "Resetuj",
      dbm: "dBm",
      valetudo_ui: "Valetudo UI",
      open: "Otwórz"
    },
    restrictions: {
      select: "Wybierz",
      wall: "ściana",
      no_go: "No-go",
      no_mop: "No-mop",
      delete_selected: "Usuń zaznaczone",
      save: "Zapisz",
      save_changes: "Zapisz zmiany",
      no_changes: "Brak zmian"
    },
    toast: {
      saved: "Ograniczenia zapisane",
      error: "Błąd: {{message}}",
      config_needed: "⚠️ Wymagana konfiguracja. Sprawdź konsolę (F12).",
      mapping_started: "Mapowanie uruchomione",
      mapping_error: "Nie udało się uruchomić mapowania"
    },
    status: {
      docked: "Na stacji",
      cleaning: "Sprzątanie",
      paused: "Wstrzymane",
      returning: "Powrót do stacji",
      idle: "Gotowy",
      error: "Błąd"
    },
    restrictions_label: "Wirtualne ograniczenia",
    cleaning: {
      configure: "Skonfiguruj sprzątanie",
      mode_title: "Tryb sprzątania",
      dry: "Tylko odkurzanie",
      wet: "Tylko mycie",
      both: "Odkurzanie i mycie",
      suction_power: "Siła ssania",
      water_level: "Poziom wody",
      iterations: "Przebiegi sprzątania",
      mapping: "Mapowanie",
      mapping_warning_overwrite: "⚠️ Mapowanie nadpisze bieżącą mapę.",
      mapping_warning_loss: "Utracisz bieżący postęp sprzątania i wszystkie strefy ograniczeń. Kontynuować?"
    },
    map: {
      loading: "Ładowanie mapy…",
      error: "Błąd mapy: {{message}}"
    },
    time: {
      hours_minutes: "{{h}}h {{m}}m",
      minutes: "{{m}}m"
    },
    config_error: {
      restrictions_title: "Strefy wirtualne — wymagana konfiguracja",
      mapping_title: "Mapowanie — wymagana konfiguracja",
      desc: "Nie skonfigurowano ani valetudo_url (edytor karty), ani rest_command. Wybierz opcję:",
      option_url: "Opcja 1 — zalecana: otwórz edytor karty i uzupełnij pole Valetudo URL (np. http://192.168.0.162).",
      option_rest_intro: "Opcja 2 — dodaj do configuration.yaml i przeładuj Home Assistant:",
      close: "Zamknij"
    }
  },
  // Settings Panel
  settings: {
    title: "Ustawienia",
    consumables: {
      title: "Materiały eksploatacyjne",
      main_brush: "Szczotka główna",
      side_brush: "Szczotka boczna",
      filter: "Filtr",
      sensor: "Czujnik",
      remaining: "pozostało",
      reset: "Resetuj"
    },
    device_info: {
      title: "Informacje o urządzeniu",
      firmware: "Oprogramowanie układowe",
      total_area: "Całkowita powierzchnia sprzątania",
      total_time: "Całkowity czas sprzątania",
      total_cleans: "Liczba sprzątań",
      wifi_ssid: "Sieć Wi-Fi",
      wifi_signal: "Siła sygnału",
      ip_address: "Adres IP"
    },
    map_management: {
      title: "Zarządzanie mapami",
      description: "Wybierz mapę, która ma być użyta do sprzątania.",
      no_maps: "Brak dostępnych map"
    },
    quick_settings: {
      title: "Szybkie ustawienia",
      child_lock: "Blokada rodzicielska",
      child_lock_desc: "Wyłącz przyciski fizyczne na urządzeniu",
      carpet_boost: "Zwiększenie mocy na dywanie",
      carpet_boost_desc: "Zwiększ siłę ssania po wykryciu dywanu",
      obstacle_avoidance: "Omijanie przeszkód",
      obstacle_avoidance_desc: "Omijaj przeszkody podczas sprzątania",
      auto_dust_collecting: "Automatyczne opróżnianie",
      auto_dust_collecting_desc: "Automatycznie opróżniaj pojemnik na kurz",
      auto_drying: "Automatyczne suszenie",
      auto_drying_desc: "Susz mopa po zakończeniu sprzątania",
      dnd: "Nie przeszkadzać (DND)",
      dnd_desc: "Godziny ciszy z ograniczoną aktywnością"
    },
    volume: {
      title: "Głośność i dźwięk",
      test_sound: "Zlokalizuj urządzenie",
      muted: "Wyciszony"
    },
    carpet: {
      title: "Ustawienia dywanów",
      carpet_boost: "Wzmocnienie na dywanie",
      carpet_boost_desc: "Zwiększ siłę ssania na dywanach",
      carpet_recognition: "Rozpoznawanie dywanów",
      carpet_recognition_desc: "Automatycznie wykrywaj dywany",
      carpet_avoidance: "Unikanie dywanów",
      carpet_avoidance_desc: "Omijaj dywany podczas mopowania",
      sensitivity: "Czułość wykrywania dywanów",
      sensitivity_desc: "Poziom czułości wykrywania",
      sensitivity_low: "Niska",
      sensitivity_medium: "Średnia",
      sensitivity_high: "Wysoka"
    },
    ai_detection: {
      title: "AI i Wykrywanie",
      obstacle_avoidance: "Omijanie przeszkód",
      obstacle_avoidance_desc: "Używaj czujników do omijania przeszkód",
      ai_obstacle_detection: "Rozpoznawanie przeszkód AI",
      ai_obstacle_detection_desc: "Używaj AI do identyfikacji i omijania przeszkód",
      ai_obstacle_image_upload: "Przesyłanie zdjęć przeszkód",
      ai_obstacle_image_upload_desc: "Przesyłaj zdjęcia przeszkód do analizy",
      ai_pet_detection: "Wykrywanie zwierząt",
      ai_pet_detection_desc: "Wykrywaj i omijaj zwierzęta domowe",
      ai_human_detection: "Wykrywanie ludzi",
      ai_human_detection_desc: "Wykrywaj i omijaj ludzi",
      ai_furniture_detection: "Wykrywanie mebli",
      ai_furniture_detection_desc: "Wykrywaj i nawiguj wokół mebli",
      ai_fluid_detection: "Wykrywanie cieczy",
      ai_fluid_detection_desc: "Wykrywaj i omijaj rozlane płyny",
      stain_avoidance: "Omijanie plam",
      stain_avoidance_desc: "Omijaj wykryte plamy",
      collision_avoidance: "Unikanie kolizji",
      collision_avoidance_desc: "Zapobiegaj uderzeniom w obiekty",
      fill_light: "Doświetlenie",
      fill_light_desc: "Użyj światła pomocniczego dla lepszego wykrywania"
    }
  }
}, o_ = {
  en: bb,
  de: yb,
  ru: xb,
  zh: Sb,
  es: wb,
  nl: zb,
  it: Nb,
  pl: Eb
};
function Mb(o, c) {
  return c ? Object.entries(c).reduce((s, [u, g]) => s.replace(new RegExp(`{{${u}}}`, "g"), String(g)), o) : o;
}
function kb(o, c) {
  return c.split(".").reduce((s, u) => {
    if (s && typeof s == "object" && u in s)
      return s[u];
  }, o);
}
function Ab(o = "en") {
  const c = o_[o] || o_.en;
  return function(u, g) {
    const m = kb(c, u);
    return typeof m != "string" ? (console.warn(`Translation key not found: ${u}`), u) : Mb(m, g);
  };
}
function Cb(o, c) {
  return c === 0 ? o("actions.select_rooms") : o(c === 1 ? "actions.clean_rooms" : "actions.clean_rooms_plural", { count: String(c) });
}
function Ke(o = "en") {
  const c = O.useMemo(() => Ab(o), [o]);
  return {
    t: c,
    getRoomCountTranslation: (s) => Cb(c, s)
  };
}
function De(o, c) {
  return typeof o == typeof c ? o : c;
}
function mg(o) {
  return typeof o == "string";
}
function ua(o) {
  return typeof o == "number";
}
function Wr(o) {
  return typeof o == "boolean";
}
function jb(o) {
  return typeof o == "object" && o !== null;
}
function s_(o, c, s) {
  const u = s.scale || 1, g = s.padding || [0, 0, 0, 0], m = s.crop || [0, 0, 0, 0], h = s.left, b = s.top, v = s.height, f = s.grid_size, p = (o + m[0] - g[0]) / u * f + h, w = b + (v * f - 1) - (c + m[1] - g[1]) / u * f;
  return { x: Math.round(p), y: Math.round(w) };
}
function Tb(o, c, s, u) {
  const g = Db(c);
  if (console.debug("[ZoneConverter] Input:", { uiZone: o, imageWidth: s, imageHeight: u, hasDimensions: !!g }), !g) {
    const k = Rb(c);
    return console.debug("[ZoneConverter] Using calibration fallback, points:", k?.length ?? 0), Ob(o, k, s, u);
  }
  console.debug("[ZoneConverter] Map dimensions:", g);
  const m = o.x1 / 100 * s, h = o.y1 / 100 * u, b = o.x2 / 100 * s, v = o.y2 / 100 * u;
  console.debug("[ZoneConverter] Pixel coords:", { px1: m, py1: h, px2: b, py2: v });
  const f = s_(m, h, g), p = s_(b, v, g), w = {
    x1: f.x,
    y1: f.y,
    x2: p.x,
    y2: p.y
  };
  return console.debug("[ZoneConverter] Output vacuum coords:", w), w;
}
function Ob(o, c, s, u) {
  if (!c || c.length < 3)
    return {
      x1: Math.round(o.x1 / 100 * 12e3 - 6e3),
      y1: Math.round(o.y1 / 100 * 12e3 - 6e3),
      x2: Math.round(o.x2 / 100 * 12e3 - 6e3),
      y2: Math.round(o.y2 / 100 * 12e3 - 6e3)
    };
  const g = o.x1 / 100 * s, m = o.y1 / 100 * u, h = o.x2 / 100 * s, b = o.y2 / 100 * u, v = c[0], f = c[1], p = c[2], w = (f.vacuum.x - v.vacuum.x) / (f.map.x - v.map.x || 1), k = (p.vacuum.y - v.vacuum.y) / (p.map.y - v.map.y || 1), N = Math.round(v.vacuum.x + (g - v.map.x) * w), S = Math.round(v.vacuum.y + (m - v.map.y) * k), D = Math.round(v.vacuum.x + (h - v.map.x) * w), K = Math.round(v.vacuum.y + (b - v.map.y) * k);
  return {
    x1: N,
    y1: S,
    x2: D,
    y2: K
  };
}
function Rb(o) {
  const c = o?.attributes?.calibration_points;
  return !c || !Array.isArray(c) || c.length < 3 ? null : c.map((s) => {
    const u = s;
    return {
      vacuum: { x: u.vacuum?.x ?? 0, y: u.vacuum?.y ?? 0 },
      map: { x: u.map?.x ?? 0, y: u.map?.y ?? 0 }
    };
  });
}
function Db(o) {
  const c = o?.attributes;
  if (!c)
    return null;
  const s = ua(c.top) ? c.top : void 0, u = ua(c.left) ? c.left : void 0, g = ua(c.height) ? c.height : void 0, m = ua(c.width) ? c.width : void 0, h = ua(c.grid_size) ? c.grid_size : void 0;
  if (s !== void 0 && u !== void 0 && g && m && h) {
    const b = ua(c.scale) ? c.scale : 1, v = Array.isArray(c.padding) ? c.padding : [0, 0, 0, 0], f = Array.isArray(c.crop) ? c.crop : [0, 0, 0, 0];
    return {
      top: s,
      left: u,
      height: g,
      width: m,
      grid_size: h,
      scale: b,
      padding: v,
      crop: f
    };
  }
  return null;
}
function Ub({ hass: o, entityId: c, mapEntityId: s, onSuccess: u, language: g = "en" }) {
  const { t: m } = Ke(g), h = O.useCallback(() => {
    console.debug("[Vacuum] Start full clean", c), o.callService("vacuum", "start", { entity_id: c }), u?.(m("toast.starting_full_clean"));
  }, [o, c, u, m]), b = O.useCallback(() => {
    console.debug("[Vacuum] Pause", c), o.callService("vacuum", "pause", { entity_id: c }), u?.(m("toast.pausing_vacuum"));
  }, [o, c, u, m]), v = O.useCallback(() => {
    console.debug("[Vacuum] Stop and return to base", c), o.callService("vacuum", "stop", { entity_id: c }), o.callService("vacuum", "return_to_base", { entity_id: c }), u?.(m("toast.stopping_vacuum"));
  }, [o, c, u, m]), f = O.useCallback(() => {
    console.debug("[Vacuum] Return to dock", c), o.callService("vacuum", "return_to_base", { entity_id: c }), u?.(m("toast.vacuum_docking"));
  }, [o, c, u, m]), p = O.useCallback(
    (N, S) => {
      console.debug("[Vacuum] Clean segments", { entityId: c, segments: N, count: S }), o.callService("dreame_vacuum", "vacuum_clean_segment", {
        entity_id: c,
        segments: N
      }), u?.(m(S === 1 ? "toast.starting_room_clean" : "toast.starting_room_clean_plural", { count: String(S) }));
    },
    [o, c, u, m]
  ), w = O.useCallback(
    (N, S, D) => {
      const K = o.states[s];
      console.debug("[Vacuum] Clean zone - input:", {
        uiZone: N,
        imageWidth: S,
        imageHeight: D,
        mapEntityId: s,
        calibrationPoints: K?.attributes?.calibration_points
      });
      const U = Tb(N, K, S, D);
      console.debug("[Vacuum] Clean zone - converted:", U), o.callService("dreame_vacuum", "vacuum_clean_zone", {
        entity_id: c,
        zone: [U.x1, U.y1, U.x2, U.y2]
      }), u?.(m("toast.starting_zone_clean"));
    },
    [o, c, s, u, m]
  ), k = O.useCallback(
    (N, S, D, K, U) => {
      switch (console.debug("[Vacuum] Handle clean", {
        mode: N,
        selectedRooms: Array.from(S.entries()),
        selectedZone: D,
        imageWidth: K,
        imageHeight: U
      }), N) {
        case "all":
          h();
          break;
        case "room":
          S.size > 0 ? p(Array.from(S.keys()), S.size) : (console.debug("[Vacuum] No rooms selected"), u?.(m("toast.select_rooms_first")));
          break;
        case "zone":
          D && K && U ? w(D, K, U) : D ? (console.debug("[Vacuum] Zone selected but no image dimensions"), u?.(m("toast.cannot_determine_map"))) : (console.debug("[Vacuum] No zone selected"), u?.(m("toast.select_zone_first")));
          break;
      }
    },
    [h, p, w, u, m]
  );
  return {
    handleStart: h,
    handlePause: b,
    handleStop: v,
    handleDock: f,
    handleCleanSegments: p,
    handleCleanZone: w,
    handleClean: k
  };
}
function _g(o = 3e3) {
  const [c, s] = O.useState(null);
  O.useEffect(() => {
    if (c) {
      const m = setTimeout(() => s(null), o);
      return () => clearTimeout(m);
    }
  }, [c, o]);
  const u = O.useCallback((m) => {
    s(m);
  }, []), g = O.useCallback(() => {
    s(null);
  }, []);
  return {
    toast: c,
    showToast: u,
    hideToast: g
  };
}
const Gr = {
  name: "light",
  colors: {
    // Background colors
    cardBg: "#f5f5f7",
    surfaceBg: "#ffffff",
    surfaceSecondary: "#f0f0f0",
    surfaceTertiary: "#e8e8e8",
    surfaceBgHover: "rgba(255, 255, 255, 0.5)",
    // Text colors
    textPrimary: "#1a1a1a",
    textPrimaryInvert: "#ffffff",
    textSecondary: "#666666",
    textTertiary: "#999999",
    // Accent colors
    accentColor: "#007aff",
    accentColorHover: "#0051d5",
    accentBg: "#e3f2fd",
    accentBgHover: "#bbdefb",
    accentBgSecondary: "#999999",
    accentBgSecondaryHover: "#666666",
    accentBgTransparent: "rgba(0, 122, 255, 0.15)",
    accentShadow: "rgba(0, 122, 255, 0.3)",
    accentColorShadowColor: "rgba(0, 122, 255, 0.25)",
    // State colors
    warningColor: "#ff9500",
    warningShadow: "rgba(255, 149, 0, 0.4)",
    errorColor: "#ff3b30",
    errorColorHover: "#ff1f0f",
    errorShadow: "rgba(255, 59, 48, 0.4)",
    // UI elements
    borderColor: "#e0e0e0",
    overlayBg: "rgba(0, 0, 0, 0.05)",
    cardShadow: "rgba(0, 0, 0, 0.08)",
    cardShadowHover: "rgba(0, 0, 0, 0.12)",
    handleShadow: "rgba(0, 0, 0, 0.2)",
    handleBg: "rgba(0, 0, 0, 0.15)",
    backdropBg: "rgba(0, 0, 0, 0.4)",
    // Toggle specific
    toggleActive: "rgba(0, 122, 255, 0.25)",
    toggleActiveBorder: "#0051d5",
    toggleActiveShadowColor: "#ffffff"
  }
}, gg = {
  name: "dark",
  colors: {
    // Background colors
    cardBg: "#1c1c1e",
    surfaceBg: "#2c2c2e",
    surfaceSecondary: "#3a3a3c",
    surfaceTertiary: "#48484a",
    surfaceBgHover: "rgba(255, 255, 255, 0.1)",
    // Text colors
    textPrimary: "#ffffff",
    textPrimaryInvert: "#1a1a1a",
    textSecondary: "#aeaeb2",
    textTertiary: "#8e8e93",
    // Accent colors
    accentColor: "#5865f2",
    accentColorHover: "#409cff",
    accentBg: "rgba(10, 132, 255, 0.2)",
    accentBgHover: "rgba(10, 132, 255, 0.3)",
    accentBgSecondary: "rgba(10, 132, 255, 0.1)",
    accentBgSecondaryHover: "rgba(10, 132, 255, 0.2)",
    accentBgTransparent: "rgba(10, 132, 255, 0.2)",
    accentShadow: "rgba(10, 132, 255, 0.4)",
    accentColorShadowColor: "rgba(88, 101, 242, 0.25)",
    // State colors
    warningColor: "#ff9f0a",
    warningShadow: "rgba(255, 159, 10, 0.4)",
    errorColor: "#ff453a",
    errorColorHover: "#ff6961",
    errorShadow: "rgba(255, 69, 58, 0.4)",
    // UI elements
    borderColor: "#48484a",
    overlayBg: "rgba(0, 0, 0, 0.3)",
    cardShadow: "rgba(0, 0, 0, 0.3)",
    cardShadowHover: "rgba(0, 0, 0, 0.4)",
    handleShadow: "rgba(0, 0, 0, 0.4)",
    handleBg: "rgba(255, 255, 255, 0.15)",
    backdropBg: "rgba(0, 0, 0, 0.6)",
    // Toggle specific
    toggleActive: "#2e354f",
    toggleActiveBorder: "#5865f2",
    toggleActiveShadowColor: "rgba(88, 101, 242, 0.25)"
  }
};
function Bb(o, c) {
  switch (o) {
    case "light":
      return Gr;
    case "dark":
      return gg;
    case "custom":
      return Lb(c || {});
    default:
      return Gr;
  }
}
function Lb(o) {
  return {
    name: "custom",
    colors: {
      ...(o.base === "dark" ? gg : Gr).colors,
      ...o
    }
  };
}
function Gb(o) {
  return {
    "--card-bg": o.cardBg,
    "--surface-bg": o.surfaceBg,
    "--surface-secondary": o.surfaceSecondary,
    "--surface-tertiary": o.surfaceTertiary,
    "--surface-bg-hover": o.surfaceBgHover,
    "--text-primary": o.textPrimary,
    "--text-primary-invert": o.textPrimaryInvert,
    "--text-secondary": o.textSecondary,
    "--text-tertiary": o.textTertiary,
    "--accent-color": o.accentColor,
    "--accent-color-hover": o.accentColorHover,
    "--accent-bg": o.accentBg,
    "--accent-bg-hover": o.accentBgHover,
    "--accent-bg-secondary": o.accentBgSecondary,
    "--accent-bg-secondary-hover": o.accentBgSecondaryHover,
    "--accent-bg-transparent": o.accentBgTransparent,
    "--accent-shadow": o.accentShadow,
    "--accent-color-shadow-color": o.accentColorShadowColor,
    "--warning-color": o.warningColor,
    "--warning-shadow": o.warningShadow,
    "--error-color": o.errorColor,
    "--error-color-hover": o.errorColorHover,
    "--error-shadow": o.errorShadow,
    "--border-color": o.borderColor,
    "--overlay-bg": o.overlayBg,
    "--card-shadow": o.cardShadow,
    "--card-shadow-hover": o.cardShadowHover,
    "--handle-shadow": o.handleShadow,
    "--handle-bg": o.handleBg,
    "--backdrop-bg": o.backdropBg,
    "--toggle-active": o.toggleActive,
    "--toggle-active-border": o.toggleActiveBorder,
    "--toggle-active-shadow-color": o.toggleActiveShadowColor
  };
}
function Hb(o, c) {
  const s = Gb(c.colors);
  Object.entries(s).forEach(([u, g]) => {
    o.style.setProperty(u, g);
  });
}
function pg({ themeType: o = "light", customThemeConfig: c, containerRef: s }) {
  const u = O.useMemo(() => Bb(o, c), [o, c]);
  return O.useEffect(() => {
    s?.current && Hb(s.current, u);
  }, [u, s]), u;
}
let Vb = 0;
function ns() {
  return `r${++Vb}`;
}
function qb(o) {
  const c = [], s = [];
  for (const u of o.entities)
    u.type === "virtual_wall" && u.points.length >= 4 ? c.push({
      id: ns(),
      pA: { x: u.points[0], y: u.points[1] },
      pB: { x: u.points[2], y: u.points[3] }
    }) : (u.type === "no_go_area" || u.type === "no_mop_area") && u.points.length >= 8 && s.push({
      id: ns(),
      type: u.type === "no_mop_area" ? "mop" : "regular",
      pA: { x: u.points[0], y: u.points[1] },
      pB: { x: u.points[2], y: u.points[3] },
      pC: { x: u.points[4], y: u.points[5] },
      pD: { x: u.points[6], y: u.points[7] }
    });
  return { walls: c, zones: s };
}
function Yb(o, c) {
  return {
    virtualWalls: o.map((s) => ({
      __class: "ValetudoVirtualWall",
      points: { pA: s.pA, pB: s.pB }
    })),
    restrictedZones: c.map((s) => ({
      __class: s.type === "mop" ? "ValetudoNoMopZone" : "ValetudoRestrictedZone",
      type: s.type,
      points: { pA: s.pA, pB: s.pB, pC: s.pC, pD: s.pD }
    }))
  };
}
function Zb({ mapData: o, active: c }) {
  const s = O.useRef(null), [u, g] = O.useState({
    walls: [],
    zones: [],
    selectedId: null,
    tool: "wall",
    dirty: !1,
    savedDisplay: null
  });
  O.useEffect(() => {
    if (!c || !o) return;
    const S = qb(o), D = s.current;
    if (D) {
      if (!(S.walls.length === D.walls.length && D.walls.every(
        (U) => S.walls.some(
          ($) => $.pA.x === U.pA.x && $.pA.y === U.pA.y && $.pB.x === U.pB.x && $.pB.y === U.pB.y
        )
      ) && S.zones.length === D.zones.length && D.zones.every(
        (U) => S.zones.some(
          ($) => $.pA.x === U.pA.x && $.pA.y === U.pA.y && $.pC.x === U.pC.x && $.pC.y === U.pC.y
        )
      ))) {
        g((U) => U.dirty || U.selectedId !== null ? U : { ...U, walls: D.walls, zones: D.zones, selectedId: null, dirty: !1 });
        return;
      }
      s.current = null, g((U) => U.dirty || U.selectedId !== null ? U : {
        ...U,
        walls: S.walls,
        zones: S.zones,
        selectedId: null,
        dirty: !1,
        savedDisplay: null
      });
      return;
    }
    g((K) => K.dirty || K.selectedId !== null ? K : { ...K, walls: S.walls, zones: S.zones, selectedId: null, dirty: !1 });
  }, [c, o]), O.useEffect(() => {
    c || g((S) => ({
      walls: [],
      zones: [],
      selectedId: null,
      tool: "wall",
      dirty: !1,
      savedDisplay: S.savedDisplay
    }));
  }, [c]);
  const m = O.useCallback((S) => {
    g((D) => ({ ...D, tool: S, selectedId: null }));
  }, []), h = O.useCallback((S, D) => {
    const K = ns();
    return g((U) => ({
      ...U,
      walls: [...U.walls, { id: K, pA: S, pB: D }],
      dirty: !0,
      selectedId: K
    })), K;
  }, []), b = O.useCallback((S, D, K) => {
    const U = Math.min(D.x, K.x), $ = Math.max(D.x, K.x), Z = Math.min(D.y, K.y), L = Math.max(D.y, K.y), ae = ns();
    return g((V) => ({
      ...V,
      zones: [
        ...V.zones,
        {
          id: ae,
          type: S,
          pA: { x: U, y: Z },
          pB: { x: $, y: Z },
          pC: { x: $, y: L },
          pD: { x: U, y: L }
        }
      ],
      dirty: !0,
      selectedId: ae
    })), ae;
  }, []), v = O.useCallback((S, D, K) => {
    g((U) => ({
      ...U,
      walls: U.walls.map(($) => $.id === S ? { ...$, pA: D, pB: K } : $),
      dirty: !0,
      selectedId: S
    }));
  }, []), f = O.useCallback((S, D, K) => {
    const U = Math.min(D.x, K.x), $ = Math.max(D.x, K.x), Z = Math.min(D.y, K.y), L = Math.max(D.y, K.y);
    g((ae) => ({
      ...ae,
      zones: ae.zones.map(
        (V) => V.id === S ? {
          ...V,
          pA: { x: U, y: Z },
          pB: { x: $, y: Z },
          pC: { x: $, y: L },
          pD: { x: U, y: L }
        } : V
      ),
      dirty: !0,
      selectedId: S
    }));
  }, []), p = O.useCallback((S) => {
    g((D) => ({
      ...D,
      walls: D.walls.filter((K) => K.id !== S),
      zones: D.zones.filter((K) => K.id !== S),
      dirty: !0,
      selectedId: D.selectedId === S ? null : D.selectedId
    }));
  }, []), w = O.useCallback((S) => {
    g((D) => ({ ...D, selectedId: S }));
  }, []), k = O.useCallback(() => {
    g((S) => S.selectedId ? {
      ...S,
      walls: S.walls.filter((D) => D.id !== S.selectedId),
      zones: S.zones.filter((D) => D.id !== S.selectedId),
      selectedId: null,
      dirty: !0
    } : S);
  }, []), N = O.useCallback(() => {
    g((S) => {
      const D = { walls: S.walls, zones: S.zones };
      return s.current = D, { ...S, dirty: !1, savedDisplay: D };
    });
  }, []);
  return {
    restrictions: u,
    setTool: m,
    addWall: h,
    addZone: b,
    updateWall: v,
    updateZone: f,
    deleteItem: p,
    selectItem: w,
    deleteSelected: k,
    markSaved: N
  };
}
function Kb(o, c) {
  if (c)
    switch (o) {
      case qe.SWEEPING_AND_MOPPING:
        return c("cleaning_mode_button.vac_and_mop");
      case qe.MOPPING_AFTER_SWEEPING:
        return c("cleaning_mode_button.mop_after_vac");
      case qe.SWEEPING:
        return c("cleaning_mode_button.vacuum");
      case qe.MOPPING:
        return c("cleaning_mode_button.mop");
      case qe.MAPPING:
        return c("cleaning_mode_button.mapping");
      default:
        return o;
    }
  switch (o) {
    case qe.SWEEPING_AND_MOPPING:
      return "Vac & Mop";
    case qe.MOPPING_AFTER_SWEEPING:
      return "Mop after Vac";
    case qe.SWEEPING:
      return "Vac";
    case qe.MOPPING:
      return "Mop";
    case qe.MAPPING:
      return "Mapping";
    default:
      return o;
  }
}
function Xb(o, c) {
  if (c)
    switch (o) {
      case da.VACUUM_AND_MOP:
        return c("cleaning_mode_button.vac_and_mop");
      case da.MOP_AFTER_VACUUM:
        return c("cleaning_mode_button.mop_after_vac");
      default:
        return o;
    }
  switch (o) {
    case da.VACUUM_AND_MOP:
      return "Vac & Mop";
    case da.MOP_AFTER_VACUUM:
      return "Mop after Vac";
    default:
      return o;
  }
}
function Qb(o, c) {
  return c ? o === Ut.QUIET || o.includes("Quiet") ? c("suction_levels.quiet") : o === Ut.STANDARD || o.includes("Standard") ? c("suction_levels.standard") : o === Ut.STRONG || o.includes("Strong") ? c("suction_levels.strong") : o === Ut.TURBO || o.includes("Turbo") ? c("suction_levels.turbo") : o : o === Ut.QUIET || o.includes("Quiet") ? "Quiet" : o === Ut.STANDARD || o.includes("Standard") ? "Standard" : o === Ut.STRONG || o.includes("Strong") ? "Turbo" : o === Ut.TURBO || o.includes("Turbo") ? "Max" : o;
}
function $b(o) {
  switch (o) {
    case qe.SWEEPING:
      return Xr;
    case qe.MOPPING:
      return Qr;
    case qe.SWEEPING_AND_MOPPING:
      return Oi;
    case qe.MOPPING_AFTER_SWEEPING:
      return $r;
    case qe.MAPPING:
      return sb;
    default:
      return "";
  }
}
function Jb(o) {
  switch (o) {
    case da.VACUUM_AND_MOP:
      return Oi;
    case da.MOP_AFTER_VACUUM:
      return $r;
    default:
      return "";
  }
}
function Ib(o) {
  switch (o) {
    case Ut.QUIET:
    case Ut.SILENT:
      return sg;
    case Ut.STANDARD:
      return cg;
    case Ut.STRONG:
      return rg;
    case Ut.TURBO:
      return ug;
  }
}
function Wb(o) {
  switch (o) {
    case Vn.QUICK:
      return db;
    case Vn.STANDARD:
      return fb;
    case Vn.INTENSIVE:
      return mb;
    case Vn.DEEP:
      return _b;
  }
}
function Fb(o) {
  switch (o) {
    case qn.BY_AREA:
      return cb;
    case qn.BY_TIME:
      return rb;
    case qn.BY_ROOM:
      return ub;
    default:
      return "⚙️";
  }
}
function Pb(o, c) {
  if (!o)
    return null;
  const s = o.attributes?.friendly_name || c.title || "Dreame Vacuum", u = c.map_entity || `camera.${c.entity.split(".")[1]}_map`, g = o.attributes?.rooms?.[o.attributes?.selected_map || ""], m = g ? g.map((h) => ({
    id: h.id,
    name: h.name,
    x: 50,
    y: 50,
    icon: h.icon
  })) : [];
  return {
    deviceName: s,
    mapEntityId: u,
    rooms: m
  };
}
function e1(o, c) {
  const s = De(o.attributes.status, ""), u = o.attributes.segment_cleaning || !1, g = o.attributes.zone_cleaning || !1;
  if (o.attributes.started) {
    if (u || s.toLowerCase().includes("room"))
      return "room";
    if (g || s.toLowerCase().includes("zone"))
      return "zone";
  }
  return c;
}
function t1(o, c) {
  const s = o.states[c];
  if (!s?.attributes?.rooms)
    return console.debug("[RoomParser] No rooms found in camera entity:", c), [];
  const u = s.attributes.rooms;
  return Object.values(u).map((g) => ({
    id: g.room_id,
    name: g.name,
    icon: g.icon,
    visibility: g.visibility,
    x0: g.x0,
    y0: g.y0,
    x1: g.x1,
    y1: g.y1,
    x: g.x,
    y: g.y
  }));
}
function $o(o, c, s, u, g) {
  if (!s || s.length < 3) {
    const N = (o + 1e4) / 2e4, S = (c + 1e4) / 2e4;
    return {
      x: N * u,
      y: S * g
    };
  }
  const m = s[0], h = s[1], b = s[2], v = (h.map.x - m.map.x) / (h.vacuum.x - m.vacuum.x || 1), f = (b.map.y - m.map.y) / (b.vacuum.y - m.vacuum.y || 1), p = m.map.x + (o - m.vacuum.x) * v, w = m.map.y + (c - m.vacuum.y) * f;
  return { x: p, y: w };
}
function a1(o, c, s, u) {
  if (o.x0 === void 0 || o.y0 === void 0 || o.x1 === void 0 || o.y1 === void 0)
    return console.warn("Room missing coordinates:", o), "";
  const g = $o(o.x0, o.y0, c, s, u), m = $o(o.x1, o.y0, c, s, u), h = $o(o.x1, o.y1, c, s, u), b = $o(o.x0, o.y1, c, s, u);
  return `M ${g.x} ${g.y} L ${m.x} ${m.y} L ${h.x} ${h.y} L ${b.x} ${b.y} Z`;
}
function n1({ entity: o, deviceName: c, onSettingsClick: s, language: u }) {
  const { t: g } = Ke(u), m = De(o.attributes.status, o.state), h = De(o.attributes.cleaned_area, 0), b = De(o.attributes.cleaning_time, 0), v = De(o.attributes.battery, 0), f = () => {
    const k = o.attributes.battery;
    return ua(k) ? k >= 80 ? og : k >= 60 ? lg : k >= 20 ? ig : ng : null;
  }, p = De(o.attributes.cleaning_progress, 0) || De(o.attributes.drying_progress, 0), w = o.attributes.status;
  return /* @__PURE__ */ r.jsxs("div", { className: "header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "header__top", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "header__title-wrapper", children: [
        /* @__PURE__ */ r.jsx("h2", { className: "header__title", children: c }),
        /* @__PURE__ */ r.jsx("p", { className: "header__status", children: m })
      ] }),
      s && /* @__PURE__ */ r.jsx("button", { className: "header__settings-btn", onClick: s, type: "button", "aria-label": "Settings", children: /* @__PURE__ */ r.jsx(tg, {}) })
    ] }),
    w !== "Sleeping" && p > 0 && /* @__PURE__ */ r.jsx("div", { className: "header__progress", children: /* @__PURE__ */ r.jsx("div", { className: "header__progress-bar", children: /* @__PURE__ */ r.jsx("div", { className: "header__progress-fill", style: { width: `${p}%` } }) }) }),
    /* @__PURE__ */ r.jsxs("div", { className: "header__stats", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "header__stat", children: [
        /* @__PURE__ */ r.jsx("span", { className: "header__stat-icon--area", children: Pv }),
        /* @__PURE__ */ r.jsxs("span", { className: "header__stat-value", children: [
          h,
          " ",
          g("units.square_meters")
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "header__stat", children: [
        /* @__PURE__ */ r.jsx("span", { className: "header__stat-icon--cleaning-time", children: Fv }),
        /* @__PURE__ */ r.jsxs("span", { className: "header__stat-value", children: [
          b,
          " ",
          g("units.minutes")
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "header__stat", children: [
        /* @__PURE__ */ r.jsx("span", { className: "header__stat-icon", children: f() }),
        /* @__PURE__ */ r.jsxs("span", { className: "header__stat-value", children: [
          v,
          " ",
          g("units.percent")
        ] })
      ] })
    ] })
  ] });
}
function i1({
  cleaningMode: o,
  cleanGeniusMode: c,
  cleangenius: s,
  onClick: u,
  onShortcutsClick: g,
  disabled: m = !1,
  language: h
}) {
  const { t: b } = Ke(h), v = (N) => N === qe.SWEEPING ? Xr : N === qe.MOPPING ? Qr : N === qe.SWEEPING_AND_MOPPING ? Oi : N === qe.MOPPING_AFTER_SWEEPING ? $r : Oi, f = (N) => N === da.VACUUM_AND_MOP ? b("cleaning_mode_button.vac_and_mop") : N === da.MOP_AFTER_VACUUM ? b("cleaning_mode_button.mop_after_vac") : "", p = (N) => N === qe.MOPPING_AFTER_SWEEPING ? b("cleaning_mode_button.mop_after_vac") : N === qe.SWEEPING_AND_MOPPING ? b("cleaning_mode_button.vac_and_mop") : N === qe.SWEEPING ? b("cleaning_mode_button.vacuum") : N === qe.MOPPING ? b("cleaning_mode_button.mop") : "", w = () => b(s === "Off" ? "cleaning_mode_button.prefix_custom" : "cleaning_mode_button.prefix_cleangenius"), k = (N) => {
    N.stopPropagation(), g?.();
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-button-wrapper", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: u,
        className: `cleaning-mode-button ${m ? "cleaning-mode-button--disabled" : ""}`,
        disabled: m,
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-button__content", children: [
            /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-button__icon", children: v(o) }),
            /* @__PURE__ */ r.jsxs("span", { className: "cleaning-mode-button__text", children: [
              w(),
              s === "Off" ? p(o) : f(c)
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-button__arrow", children: "›" })
        ]
      }
    ),
    s === "Off" && g && /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "cleaning-mode-button-wrapper__shortcuts",
        onClick: k,
        title: b("cleaning_mode_button.view_shortcuts"),
        disabled: m,
        children: lb
      }
    )
  ] });
}
function l1({ zone: o, onZoneChange: c, clearZoneLabel: s, isStarted: u = !1 }) {
  const [g, m] = O.useState(null), [h, b] = O.useState(null), v = (S, D) => {
    S.stopPropagation(), o && (m(D), b(o));
  }, f = (S) => "touches" in S && S.touches.length > 0 ? { clientX: S.touches[0].clientX, clientY: S.touches[0].clientY } : { clientX: S.clientX, clientY: S.clientY }, p = (S, D) => {
    if (!g || !h) return;
    const { clientX: K, clientY: U } = f(S), $ = K - D.left, Z = U - D.top, L = Math.max(0, Math.min(100, $ / D.width * 100)), ae = Math.max(0, Math.min(100, Z / D.height * 100)), V = { ...h };
    switch (g) {
      case "tl":
        V.x1 = Math.min(L, h.x2 - 5), V.y1 = Math.min(ae, h.y2 - 5);
        break;
      case "tr":
        V.x2 = Math.max(L, h.x1 + 5), V.y1 = Math.min(ae, h.y2 - 5);
        break;
      case "bl":
        V.x1 = Math.min(L, h.x2 - 5), V.y2 = Math.max(ae, h.y1 + 5);
        break;
      case "br":
        V.x2 = Math.max(L, h.x1 + 5), V.y2 = Math.max(ae, h.y1 + 5);
        break;
    }
    c(V);
  }, w = () => {
    m(null), b(null);
  }, k = (S) => {
    S.stopPropagation(), c(null), m(null), b(null);
  };
  return {
    resizingHandle: g,
    handleResizeMove: p,
    handleResizeEnd: w,
    isResizing: () => g !== null,
    renderZone: () => o && /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "vacuum-map__zone",
        style: {
          left: `${o.x1}%`,
          top: `${o.y1}%`,
          width: `${o.x2 - o.x1}%`,
          height: `${o.y2 - o.y1}%`
        },
        onClick: (S) => S.stopPropagation(),
        children: !u && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "vacuum-map__zone-handle vacuum-map__zone-handle--tl",
              onMouseDown: (S) => v(S, "tl"),
              onTouchStart: (S) => v(S, "tl"),
              title: "Resize"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "vacuum-map__zone-handle vacuum-map__zone-handle--tr",
              onMouseDown: (S) => v(S, "tr"),
              onTouchStart: (S) => v(S, "tr"),
              title: "Resize"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "vacuum-map__zone-handle vacuum-map__zone-handle--bl",
              onMouseDown: (S) => v(S, "bl"),
              onTouchStart: (S) => v(S, "bl"),
              title: "Resize"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "vacuum-map__zone-handle vacuum-map__zone-handle--br",
              onMouseDown: (S) => v(S, "br"),
              onTouchStart: (S) => v(S, "br"),
              title: "Resize"
            }
          ),
          /* @__PURE__ */ r.jsx("button", { className: "vacuum-map__zone-clear", onClick: k, title: s, children: "×" })
        ] })
      }
    )
  };
}
function o1({
  rooms: o,
  selectedRooms: c,
  onRoomToggle: s,
  calibrationPoints: u,
  imageWidth: g,
  imageHeight: m,
  isStarted: h
}) {
  const b = O.useMemo(() => o.filter((f) => f.visibility !== "Hidden").map((f) => ({
    room: f,
    path: a1(f, u, g, m)
  })), [o, u, g, m]), v = (f, p) => {
    s(f, p);
  };
  return !g || !m ? null : /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: "vacuum-map__room-segments",
      width: "100%",
      height: "100%",
      viewBox: `0 0 ${g} ${m}`,
      preserveAspectRatio: "none",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto"
      },
      children: b.map(({ room: f, path: p }) => {
        const w = c.has(f.id);
        return p ? /* @__PURE__ */ r.jsx(
          "path",
          {
            d: p,
            className: `vacuum-map__room-segment ${w ? "vacuum-map__room-segment--selected" : ""}`,
            fill: w ? "var(--accent-bg, rgba(212, 175, 55, 0.3))" : "transparent",
            stroke: !h && w ? "var(--accent-color, #D4AF37)" : "rgba(255, 255, 255, 0.2)",
            strokeWidth: "2",
            style: {
              cursor: "pointer",
              transition: "all 0.2s ease"
            },
            onClick: (k) => {
              k.stopPropagation(), v(f.id, f.name);
            },
            "data-room-id": f.id,
            "data-room-name": f.name,
            children: /* @__PURE__ */ r.jsx("title", { children: f.name })
          },
          f.id
        ) : (console.warn("No path for room:", f.id, f.name), null);
      })
    }
  );
}
function s1({ viewMode: o, onToggle: c, mapLabel: s, listLabel: u }) {
  const g = o === "map", m = g ? u : s, h = g ? P0 : os;
  return /* @__PURE__ */ r.jsx("button", { className: "view-toggle-button", onClick: c, "aria-label": m, title: m, children: /* @__PURE__ */ r.jsx(h, { size: 18 }) });
}
function c1({ rooms: o, selectedRooms: c, onRoomToggle: s, language: u }) {
  const { t: g } = Ke(u);
  return o.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: "room-list-view", children: /* @__PURE__ */ r.jsx("div", { className: "room-list-view__empty", children: g("vacuum_map.no_rooms") }) }) : /* @__PURE__ */ r.jsxs("div", { className: "room-list-view", children: [
    /* @__PURE__ */ r.jsx("div", { className: "room-list-view__header", children: g("vacuum_map.room_list_overlay") }),
    /* @__PURE__ */ r.jsx("div", { className: "room-list-view__list", children: o.map((m) => {
      const h = c.has(m.id);
      return /* @__PURE__ */ r.jsxs(
        "button",
        {
          className: `room-list-view__item ${h ? "room-list-view__item--selected" : ""}`,
          onClick: () => s(m.id, m.name),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "room-list-view__item-name", children: m.name }),
            /* @__PURE__ */ r.jsx("span", { className: "room-list-view__item-check", children: h && /* @__PURE__ */ r.jsx(A0, { size: 18 }) })
          ]
        },
        m.id
      );
    }) })
  ] });
}
function r1({
  hass: o,
  mapEntityId: c,
  selectedMode: s,
  selectedRooms: u,
  onRoomToggle: g,
  zone: m,
  onZoneChange: h,
  onImageDimensionsChange: b,
  language: v = "en",
  isStarted: f = !1,
  defaultRoomView: p = "map"
}) {
  const { t: w } = Ke(v), k = o.states[c], N = k?.attributes?.entity_picture, S = O.useRef(null), D = O.useRef(null), [K, U] = O.useState({ width: 0, height: 0 }), [$, Z] = O.useState(p);
  O.useEffect(() => {
    s !== "room" && Z(p);
  }, [s, p]);
  const L = t1(o, c), ae = k?.attributes?.calibration_points ?? [], V = l1({
    zone: m,
    onZoneChange: h,
    clearZoneLabel: w("vacuum_map.clear_zone"),
    isStarted: f
  }), Y = (le) => {
    if (s !== "zone" || V.isResizing()) return;
    const I = S.current?.getBoundingClientRect();
    if (!I) return;
    const se = le.clientX - I.left, ge = le.clientY - I.top, Ne = se / I.width * 100, Ce = ge / I.height * 100, Se = 15, R = Ne, ee = Ce, F = {
      x1: Math.max(0, R - Se / 2),
      y1: Math.max(0, ee - Se / 2),
      x2: Math.min(100, R + Se / 2),
      y2: Math.min(100, ee + Se / 2)
    };
    console.debug("[Map] Zone created at click:", { clickX: se, clickY: ge, xPercent: Ne, yPercent: Ce, newZone: F }), h(F);
  }, J = (le) => {
    const I = S.current?.getBoundingClientRect();
    I && V.handleResizeMove(le, I);
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "vacuum-map",
      ref: S,
      onClick: Y,
      onMouseMove: J,
      onMouseUp: V.handleResizeEnd,
      onMouseLeave: V.handleResizeEnd,
      onTouchMove: J,
      onTouchEnd: V.handleResizeEnd,
      onTouchCancel: V.handleResizeEnd,
      children: [
        k && N ? /* @__PURE__ */ r.jsx(
          "img",
          {
            ref: D,
            src: o.hassUrl(N),
            alt: "Vacuum Map",
            className: "vacuum-map__image",
            onLoad: (le) => {
              const I = le.currentTarget;
              I.naturalWidth && I.naturalHeight && (U({ width: I.naturalWidth, height: I.naturalHeight }), b?.(I.naturalWidth, I.naturalHeight));
            }
          }
        ) : /* @__PURE__ */ r.jsxs("div", { className: "vacuum-map__placeholder", children: [
          w("vacuum_map.no_map"),
          /* @__PURE__ */ r.jsx("br", {}),
          /* @__PURE__ */ r.jsx("small", { children: w("vacuum_map.looking_for", { entity: c }) })
        ] }),
        s === "room" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(
            s1,
            {
              viewMode: $,
              onToggle: () => Z((le) => le === "map" ? "list" : "map"),
              mapLabel: w("vacuum_map.switch_to_map"),
              listLabel: w("vacuum_map.switch_to_list")
            }
          ),
          $ === "map" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            !f && /* @__PURE__ */ r.jsx("div", { className: "vacuum-map__overlay", children: w("vacuum_map.room_overlay") }),
            !f && K.width > 0 && K.height > 0 && /* @__PURE__ */ r.jsx(
              o1,
              {
                rooms: L,
                selectedRooms: u,
                onRoomToggle: g,
                calibrationPoints: ae,
                imageWidth: K.width,
                imageHeight: K.height,
                isStarted: f
              }
            )
          ] }) : /* @__PURE__ */ r.jsx(
            c1,
            {
              rooms: L,
              selectedRooms: u,
              onRoomToggle: g,
              language: v
            }
          )
        ] }),
        s === "zone" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("div", { className: "vacuum-map__overlay", children: w(m ? "vacuum_map.zone_overlay_resize" : "vacuum_map.zone_overlay_create") }),
          V.renderZone()
        ] })
      ]
    }
  );
}
function hg({ selectedMode: o, onModeChange: c, disabled: s = !1, language: u = "en" }) {
  const { t: g } = Ke(u), m = [
    { value: "room", label: g("modes.room") },
    { value: "all", label: g("modes.all") },
    { value: "zone", label: g("modes.zone") }
  ];
  return /* @__PURE__ */ r.jsx("div", { className: `mode-tabs ${s ? "mode-tabs--disabled" : ""}`, children: m.map((h) => /* @__PURE__ */ r.jsxs(
    "button",
    {
      onClick: () => c(h.value),
      className: `mode-tabs__button ${o === h.value ? "mode-tabs__button--active" : ""}`,
      disabled: s,
      children: [
        h.label,
        h.icon && /* @__PURE__ */ r.jsx("span", { className: "mode-tabs__button-icon", children: h.icon })
      ]
    },
    h.value
  )) });
}
function u1({ onClick: o, text: c, disabled: s }) {
  return /* @__PURE__ */ r.jsxs("button", { onClick: o, className: "action-buttons__clean", disabled: s, children: [
    /* @__PURE__ */ r.jsx("span", { className: "action-buttons__icon", children: eb }),
    /* @__PURE__ */ r.jsx("span", { children: c })
  ] });
}
function d1({ onClick: o, language: c = "en" }) {
  const { t: s } = Ke(c);
  return /* @__PURE__ */ r.jsxs("button", { onClick: o, className: "action-buttons__pause", children: [
    /* @__PURE__ */ r.jsx("span", { className: "action-buttons__icon", children: tb }),
    /* @__PURE__ */ r.jsx("span", { children: s("actions.pause") })
  ] });
}
function f1({ onClick: o, language: c = "en" }) {
  const { t: s } = Ke(c);
  return /* @__PURE__ */ r.jsxs("button", { onClick: o, className: "action-buttons__resume", children: [
    /* @__PURE__ */ r.jsx("span", { className: "action-buttons__icon", children: ab }),
    /* @__PURE__ */ r.jsx("span", { children: s("actions.resume") })
  ] });
}
function c_({ onClick: o, language: c = "en" }) {
  const { t: s } = Ke(c);
  return /* @__PURE__ */ r.jsxs("button", { onClick: o, className: "action-buttons__stop", children: [
    /* @__PURE__ */ r.jsx("span", { className: "action-buttons__icon", children: nb }),
    /* @__PURE__ */ r.jsx("span", { children: s("actions.stop") })
  ] });
}
function m1({ onClick: o, language: c = "en", disabled: s }) {
  const { t: u } = Ke(c);
  return /* @__PURE__ */ r.jsxs("button", { onClick: o, className: "action-buttons__dock", disabled: s, children: [
    /* @__PURE__ */ r.jsx("span", { className: "action-buttons__icon", children: ib }),
    /* @__PURE__ */ r.jsx("span", { children: u("actions.dock") })
  ] });
}
function vg({
  selectedMode: o,
  selectedRoomsCount: c,
  isRunning: s,
  isPaused: u,
  isDocked: g,
  onClean: m,
  onPause: h,
  onResume: b,
  onStop: v,
  onDock: f,
  language: p = "en",
  disabled: w = !1
}) {
  const { t: k, getRoomCountTranslation: N } = Ke(p), D = (() => {
    switch (o) {
      case "room":
        return N(c);
      case "all":
        return k("actions.clean_all");
      case "zone":
        return k("actions.zone_clean");
      default:
        return k("actions.clean");
    }
  })();
  return s && !u && !g ? /* @__PURE__ */ r.jsxs("div", { className: "action-buttons", children: [
    /* @__PURE__ */ r.jsx(d1, { onClick: h, language: p }),
    /* @__PURE__ */ r.jsx(c_, { onClick: v, language: p })
  ] }) : u ? /* @__PURE__ */ r.jsxs("div", { className: "action-buttons", children: [
    /* @__PURE__ */ r.jsx(f1, { onClick: b, language: p }),
    /* @__PURE__ */ r.jsx(c_, { onClick: v, language: p })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: "action-buttons", children: [
    /* @__PURE__ */ r.jsx(u1, { onClick: m, text: D, disabled: w }),
    /* @__PURE__ */ r.jsx(m1, { onClick: f, language: p, disabled: w })
  ] });
}
function Zt({ title: o, icon: c, defaultOpen: s = !1, children: u }) {
  const [g, m] = O.useState(s), h = O.useCallback(() => {
    m((b) => !b);
  }, []);
  return /* @__PURE__ */ r.jsxs("div", { className: `accordion ${g ? "accordion--open" : ""}`, children: [
    /* @__PURE__ */ r.jsxs("button", { className: "accordion__header", onClick: h, type: "button", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "accordion__title-wrapper", children: [
        c && /* @__PURE__ */ r.jsx("span", { className: "accordion__icon", children: c }),
        /* @__PURE__ */ r.jsx("span", { className: "accordion__title", children: o })
      ] }),
      /* @__PURE__ */ r.jsx(j0, { className: "accordion__chevron" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "accordion__content", children: /* @__PURE__ */ r.jsx("div", { className: "accordion__content-inner", children: u }) })
  ] });
}
function Ol({ checked: o = !1, onChange: c, disabled: s = !1 }) {
  const u = (g) => {
    c && !s && c(g.target.checked);
  };
  return /* @__PURE__ */ r.jsxs("label", { className: `toggle ${s ? "toggle--disabled" : ""}`, children: [
    /* @__PURE__ */ r.jsx("input", { type: "checkbox", className: "toggle__input", checked: o, onChange: u, disabled: s }),
    /* @__PURE__ */ r.jsx("span", { className: "toggle__slider", children: /* @__PURE__ */ r.jsx("span", { className: "toggle__knob" }) })
  ] });
}
function Ri({
  icon: o,
  label: c,
  selected: s = !1,
  onClick: u,
  size: g = "medium",
  iconStyle: m = {}
}) {
  const h = typeof o == "string" && o.trim().startsWith("<svg");
  return /* @__PURE__ */ r.jsxs("div", { className: "circular-button", children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        className: `circular-button__circle circular-button__circle--${g} ${s ? "circular-button__circle--selected" : ""}`,
        onClick: u,
        children: typeof o == "string" ? h ? /* @__PURE__ */ r.jsx(
          "span",
          {
            className: "circular-button__icon circular-button__icon--svg",
            dangerouslySetInnerHTML: { __html: o }
          }
        ) : /* @__PURE__ */ r.jsx("span", { className: "circular-button__icon", style: m, children: o }) : o
      }
    ),
    c && /* @__PURE__ */ r.jsx("span", { className: "circular-button__label", children: c })
  ] });
}
function Di({ opened: o, onClose: c, children: s }) {
  return o ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { className: "modal__backdrop", onClick: c }),
    /* @__PURE__ */ r.jsxs("div", { className: "modal", children: [
      /* @__PURE__ */ r.jsx("div", { className: "modal__handle" }),
      /* @__PURE__ */ r.jsx("div", { className: "modal__content", children: s })
    ] })
  ] }) : null;
}
function _1({ options: o, value: c, onChange: s }) {
  return /* @__PURE__ */ r.jsx("div", { className: "segmented-control", children: o.map((u) => /* @__PURE__ */ r.jsx(
    "button",
    {
      className: `segmented-control__button ${c === u.value ? "segmented-control__button--active" : ""}`,
      onClick: () => s(u.value),
      children: u.label
    },
    u.value
  )) });
}
function bg({ message: o, onClose: c }) {
  return /* @__PURE__ */ r.jsxs("div", { className: "toast", children: [
    /* @__PURE__ */ r.jsx("span", { className: "toast__message", children: o }),
    /* @__PURE__ */ r.jsx("button", { className: "toast__close", onClick: c, "aria-label": "Close", children: "×" })
  ] });
}
function g1({
  cleangeniusMode: o,
  cleangeniusModeList: c,
  cleangenius: s,
  baseEntityId: u,
  hass: g,
  language: m
}) {
  const { setSelectOption: h } = Jr(g), { t: b } = Ke(m), v = Ir(u), f = (p) => {
    p ? (h(
      v.cleangenius,
      ts(va.DEEP_CLEANING)
    ), h(v.cleaningRoute, as(Vn.DEEP))) : (h(
      v.cleangenius,
      ts(va.ROUTINE_CLEANING)
    ), h(v.cleaningRoute, as(Vn.STANDARD)));
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__content", children: [
    /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: b("cleangenius_mode.cleaning_mode_title") }),
      /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__mode-grid", children: c.map((p, w) => {
        const k = p, N = p === "Vacuum and mop";
        return /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: `cleaning-mode-modal__mode-card ${p === o ? "cleaning-mode-modal__mode-card--selected" : ""}`,
            onClick: () => h(v.cleangeniusMode, hb(k)),
            style: { cursor: "pointer" },
            children: [
              /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: `cleaning-mode-modal__mode-icon cleaning-mode-modal__mode-icon--${N ? "vac-mop" : "mop-after"}`,
                  children: Jb(k)
                }
              ),
              /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__mode-label", children: Xb(k, b) }),
              p === o && /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__mode-checkmark", children: /* @__PURE__ */ r.jsx("span", { children: "✓" }) })
            ]
          },
          w
        );
      }) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__setting", children: [
      /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__setting-label", children: b("cleangenius_mode.deep_cleaning") }),
      /* @__PURE__ */ r.jsx(Ol, { checked: s === va.DEEP_CLEANING, onChange: f })
    ] })
  ] });
}
function p1({
  cleaningMode: o,
  cleaningModeList: c,
  onSelect: s,
  entityId: u,
  t: g
}) {
  return /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__power-grid", children: c.map((m, h) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__mode-option", children: [
    /* @__PURE__ */ r.jsx(
      Ri,
      {
        size: "small",
        selected: m === o,
        onClick: () => s(u, pb(m)),
        icon: $b(m)
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__mode-option-label", children: Kb(m, g) })
  ] }, h)) });
}
function h1({
  suctionLevel: o,
  suctionLevelList: c,
  maxSuctionPower: s,
  onSelectSuctionLevel: u,
  onToggleMaxPower: g,
  suctionLevelEntityId: m,
  maxSuctionPowerEntityId: h,
  maxPlusDescription: b,
  t: v
}) {
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__power-grid", children: c.map((f, p) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__power-option", children: [
      /* @__PURE__ */ r.jsx(
        Ri,
        {
          size: "small",
          selected: f === o,
          onClick: () => u(m, as(f)),
          icon: Ib(f)
        }
      ),
      /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__power-label", children: Qb(f, v) })
    ] }, p)) }),
    /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__max-plus", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__max-plus-header", children: [
        /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__max-plus-title", children: "Max+" }),
        /* @__PURE__ */ r.jsx(
          Ol,
          {
            checked: s,
            onChange: (f) => g(h, f)
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "cleaning-mode-modal__max-plus-description", children: b })
    ] })
  ] });
}
function v1({
  wetnessLevel: o,
  mopPadHumidity: c,
  onChangeWetness: s,
  entityId: u,
  slightlyDryLabel: g,
  moistLabel: m,
  wetLabel: h
}) {
  const [b, v] = O.useState(o), f = (b - kl.WETNESS.MIN) / (kl.WETNESS.MAX - kl.WETNESS.MIN) * 100, p = 20, w = `calc(${f}% + ${p / 2 - f * p / 100}px)`, k = (S) => {
    v(parseInt(S.target.value));
  }, N = () => {
    b !== o && s(u, b);
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__slider-container", children: /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__slider-wrapper", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "range",
          min: kl.WETNESS.MIN,
          max: kl.WETNESS.MAX,
          value: b,
          onChange: k,
          onMouseUp: N,
          onTouchEnd: N,
          className: "cleaning-mode-modal__slider",
          style: {
            background: `linear-gradient(to right, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${f}%, var(--accent-bg-secondary-hover) ${f}%, var(--accent-bg-secondary-hover) 100%)`
          }
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "cleaning-mode-modal__slider-tooltip",
          style: {
            left: w
          },
          children: b
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__slider-labels", children: [
      /* @__PURE__ */ r.jsx(
        "span",
        {
          className: `cleaning-mode-modal__slider-label ${c === es.SLIGHTLY_DRY ? "cleaning-mode-modal__slider-label--active" : "cleaning-mode-modal__slider-label--inactive"}`,
          children: g
        }
      ),
      /* @__PURE__ */ r.jsx(
        "span",
        {
          className: `cleaning-mode-modal__slider-label ${c === es.MOIST ? "cleaning-mode-modal__slider-label--active" : "cleaning-mode-modal__slider-label--inactive"}`,
          children: m
        }
      ),
      /* @__PURE__ */ r.jsx(
        "span",
        {
          className: `cleaning-mode-modal__slider-label ${c === es.WET ? "cleaning-mode-modal__slider-label--active" : "cleaning-mode-modal__slider-label--inactive"}`,
          children: h
        }
      )
    ] })
  ] });
}
function b1(o, c) {
  if (!c) return o;
  switch (o) {
    case "By room":
      return c("mop_washing_frequency.by_room");
    case "By area":
      return c("mop_washing_frequency.by_area");
    case "By time":
      return c("mop_washing_frequency.by_time");
    default:
      return o;
  }
}
function y1({
  selfCleanFrequency: o,
  selfCleanFrequencyList: c,
  selfCleanArea: s,
  selfCleanAreaMin: u,
  selfCleanAreaMax: g,
  selfCleanTime: m,
  selfCleanTimeMin: h,
  selfCleanTimeMax: b,
  onSelectFrequency: v,
  onChangeArea: f,
  onChangeTime: p,
  frequencyEntityId: w,
  areaEntityId: k,
  timeEntityId: N,
  t: S
}) {
  const [D, K] = O.useState(s), [U, $] = O.useState(m), Z = (D - u) / (g - u) * 100, L = (U - h) / (b - h) * 100, ae = 20, V = `calc(${Z}% + ${ae / 2 - Z * ae / 100}px)`, Y = `calc(${L}% + ${ae / 2 - L * ae / 100}px)`, J = S ? S("units.square_meters") : "m²", le = S ? S("units.minutes_short") : "m", I = (ge) => {
    const Ne = parseInt(ge.target.value);
    o === "By area" ? K(Ne) : $(Ne);
  }, se = () => {
    o === "By area" && D !== s ? f(k, D) : o === "By time" && U !== m && p(N, U);
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__horizontal-scroll", children: c.map((ge, Ne) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__mode-option", children: [
      /* @__PURE__ */ r.jsx(
        Ri,
        {
          size: "small",
          selected: ge === o,
          onClick: () => v(w, vb(ge)),
          icon: Fb(ge)
        }
      ),
      /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__mode-option-label", children: b1(ge, S) })
    ] }, Ne)) }),
    (o === "By area" || o === "By time") && /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__slider-container", style: { marginTop: "1rem" }, children: /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__slider-wrapper", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "range",
          min: o === "By area" ? u : h,
          max: o === "By area" ? g : b,
          value: o === "By area" ? D : U,
          onChange: I,
          onMouseUp: se,
          onTouchEnd: se,
          className: "cleaning-mode-modal__slider",
          style: {
            background: o === "By area" ? `linear-gradient(to right, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${Z}%, var(--accent-bg-secondary-hover) ${Z}%, var(--accent-bg-secondary-hover) 100%)` : `linear-gradient(to right, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${L}%, var(--accent-bg-secondary-hover) ${L}%, var(--accent-bg-secondary-hover) 100%)`
          }
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "cleaning-mode-modal__slider-tooltip",
          style: {
            left: o === "By area" ? V : Y
          },
          children: o === "By area" ? `${D}${J}` : `${U}${le}`
        }
      )
    ] }) })
  ] });
}
function x1({ cleaningRoute: o, cleaningRouteList: c, onSelect: s, entityId: u }) {
  return /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__route-grid", children: c.map((g, m) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__route-option", children: [
    /* @__PURE__ */ r.jsx(
      Ri,
      {
        size: "small",
        selected: g === o,
        onClick: () => s(u, as(g)),
        icon: Wb(g)
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__route-label", children: g })
  ] }, m)) });
}
function S1({
  cleaningMode: o,
  cleaningModeList: c,
  suctionLevel: s,
  suctionLevelList: u,
  wetnessLevel: g,
  mopPadHumidity: m,
  cleaningRoute: h,
  cleaningRouteList: b,
  maxSuctionPower: v,
  selfCleanArea: f,
  selfCleanFrequency: p,
  selfCleanFrequencyList: w,
  selfCleanAreaMin: k,
  selfCleanAreaMax: N,
  selfCleanTime: S,
  selfCleanTimeMin: D,
  selfCleanTimeMax: K,
  baseEntityId: U,
  hass: $,
  language: Z
}) {
  const { setSelectOption: L, setSwitch: ae, setNumber: V } = Jr($), Y = Ir(U), { t: J } = Ke(Z);
  return /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__content", children: [
    /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.cleaning_mode_title") }),
      /* @__PURE__ */ r.jsx(
        p1,
        {
          cleaningMode: o,
          cleaningModeList: c,
          onSelect: L,
          entityId: Y.cleaningMode,
          t: J
        }
      )
    ] }),
    o !== qe.MAPPING && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.suction_power_title") }),
      /* @__PURE__ */ r.jsx(
        h1,
        {
          suctionLevel: s,
          suctionLevelList: u,
          maxSuctionPower: v,
          onSelectSuctionLevel: L,
          onToggleMaxPower: ae,
          suctionLevelEntityId: Y.suctionLevel,
          maxSuctionPowerEntityId: Y.maxSuctionPower,
          maxPlusDescription: J("custom_mode.max_plus_description"),
          t: J
        }
      )
    ] }),
    o !== qe.SWEEPING && o !== qe.MAPPING && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.wetness_title") }),
      /* @__PURE__ */ r.jsx(
        v1,
        {
          wetnessLevel: g,
          mopPadHumidity: m,
          onChangeWetness: V,
          entityId: Y.wetnessLevel,
          slightlyDryLabel: J("custom_mode.slightly_dry"),
          moistLabel: J("custom_mode.moist"),
          wetLabel: J("custom_mode.wet")
        }
      )
    ] }),
    o !== qe.MAPPING && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.mop_washing_frequency_title") }),
      /* @__PURE__ */ r.jsx(
        y1,
        {
          selfCleanFrequency: p,
          selfCleanFrequencyList: w,
          selfCleanArea: f,
          selfCleanAreaMin: k,
          selfCleanAreaMax: N,
          selfCleanTime: S,
          selfCleanTimeMin: D,
          selfCleanTimeMax: K,
          onSelectFrequency: L,
          onChangeArea: V,
          onChangeTime: V,
          frequencyEntityId: Y.selfCleanFrequency,
          areaEntityId: Y.selfCleanArea,
          timeEntityId: Y.selfCleanTime,
          t: J
        }
      )
    ] }),
    o !== qe.MAPPING && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__section-header", children: /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.route_title") }) }),
      /* @__PURE__ */ r.jsx(
        x1,
        {
          cleaningRoute: h,
          cleaningRouteList: b,
          onSelect: L,
          entityId: Y.cleaningRoute
        }
      )
    ] })
  ] });
}
function w1({ opened: o, onClose: c, entity: s, hass: u, language: g }) {
  const { t: m } = Ke(g), h = dg(s.entity_id), { setSelectOption: b, setSwitch: v } = Jr(u), f = Ir(h), p = (ve, Ee) => {
    const x = s.attributes[ve];
    return Array.isArray(x) ? x : Ee;
  }, w = De(s.attributes.cleangenius, va.OFF), [k, N] = O.useState(w !== va.OFF), S = De(s.attributes.cleaning_mode, kt.CLEANING_MODE), D = De(s.attributes.cleangenius_mode, kt.CLEANGENIUS_MODE), K = De(s.attributes.suction_level, kt.SUCTION_LEVEL), U = De(s.attributes.wetness_level, kt.WETNESS_LEVEL), $ = De(s.attributes.cleaning_route, kt.CLEANING_ROUTE), Z = De(s.attributes.max_suction_power, kt.MAX_SUCTION_POWER), L = De(s.attributes.self_clean_area, kt.SELF_CLEAN_AREA), ae = De(s.attributes.self_clean_frequency, kt.SELF_CLEAN_FREQUENCY), V = p("self_clean_frequency_list", ["By area", "By time", "By room"]), Y = De(s.attributes.self_clean_area_min, kt.SELF_CLEAN_AREA_MIN), J = De(s.attributes.self_clean_area_max, kt.SELF_CLEAN_AREA_MAX), le = De(s.attributes.previous_self_clean_time, kt.SELF_CLEAN_TIME), I = De(s.attributes.self_clean_time_min, kt.SELF_CLEAN_TIME_MIN), se = De(s.attributes.self_clean_time_max, kt.SELF_CLEAN_TIME_MAX), ge = De(s.attributes.mop_pad_humidity, kt.MOP_PAD_HUMIDITY), Ne = [
    { value: Al.CLEANGENIUS, label: m("cleaning_mode.clean_genius") },
    { value: Al.CUSTOM, label: m("cleaning_mode.custom") }
  ], Ce = (() => {
    const ve = p("cleaning_mode_list", [
      "Sweeping",
      "Mopping",
      "Sweeping and mopping",
      "Mopping after sweeping"
    ]);
    return ve.includes("Mapping") ? ve : [...ve, "Mapping"];
  })(), Se = p("cleangenius_mode_list", ["Vacuum and mop", "Mop after vacuum"]), R = p("suction_level_list", ["Quiet", "Standard", "Strong", "Turbo"]), ee = p("cleaning_route_list", ["Quick", "Standard", "Intensive", "Deep"]), F = (ve) => {
    const Ee = ve === Al.CLEANGENIUS;
    N(Ee), v(f.customMoppingMode, !Ee), Ee ? b(
      f.cleangenius,
      ts(va.ROUTINE_CLEANING)
    ) : b(
      f.cleangenius,
      ts(va.OFF)
    );
  };
  return /* @__PURE__ */ r.jsx(Di, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal", children: [
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__header", children: /* @__PURE__ */ r.jsx(
      _1,
      {
        value: k ? Al.CLEANGENIUS : Al.CUSTOM,
        onChange: F,
        options: Ne
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__content-wrapper", children: k ? /* @__PURE__ */ r.jsx(
      g1,
      {
        cleangeniusMode: D,
        cleangeniusModeList: Se,
        cleangenius: w,
        baseEntityId: h,
        hass: u,
        language: g
      }
    ) : /* @__PURE__ */ r.jsx(
      S1,
      {
        cleaningMode: S,
        cleaningModeList: Ce,
        suctionLevel: K,
        suctionLevelList: R,
        wetnessLevel: U,
        mopPadHumidity: ge,
        cleaningRoute: $,
        cleaningRouteList: ee,
        maxSuctionPower: Z,
        selfCleanArea: L,
        selfCleanFrequency: ae,
        selfCleanFrequencyList: V,
        selfCleanAreaMin: Y,
        selfCleanAreaMax: J,
        selfCleanTime: le,
        selfCleanTimeMin: I,
        selfCleanTimeMax: se,
        baseEntityId: h,
        hass: u,
        language: g
      }
    ) })
  ] }) });
}
function z1({ opened: o, onClose: c, entity: s, hass: u, language: g }) {
  const { t: m } = Ke(g), h = s.attributes.shortcuts || {}, b = Object.entries(h).map(([f, p]) => ({
    id: parseInt(f),
    ...p
  })), v = (f) => {
    u.callService("dreame_vacuum", "vacuum_start_shortcut", {
      entity_id: s.entity_id,
      shortcut_id: f
    }), c();
  };
  return /* @__PURE__ */ r.jsx(Di, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsxs("div", { className: "shortcuts-modal", children: [
    /* @__PURE__ */ r.jsx("h2", { className: "shortcuts-modal__title", children: m("shortcuts.title") }),
    b.length === 0 ? /* @__PURE__ */ r.jsxs("div", { className: "shortcuts-modal__empty", children: [
      /* @__PURE__ */ r.jsx("p", { children: m("shortcuts.no_shortcuts") }),
      /* @__PURE__ */ r.jsx("p", { className: "shortcuts-modal__empty-hint", children: m("shortcuts.create_hint") })
    ] }) : /* @__PURE__ */ r.jsx("div", { className: "shortcuts-modal__list", children: b.map((f) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        className: "shortcuts-modal__item",
        onClick: () => v(f.id),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "shortcuts-modal__item-icon", children: ob }),
          /* @__PURE__ */ r.jsx("span", { className: "shortcuts-modal__item-name", children: f.name })
        ]
      },
      f.id
    )) })
  ] }) });
}
const N1 = [
  {
    key: "obstacle_avoidance",
    labelKey: "settings.ai_detection.obstacle_avoidance",
    descriptionKey: "settings.ai_detection.obstacle_avoidance_desc",
    attributeKey: "obstacle_avoidance",
    switchEntitySuffix: "obstacle_avoidance"
  },
  {
    key: "ai_obstacle_detection",
    labelKey: "settings.ai_detection.ai_obstacle_detection",
    descriptionKey: "settings.ai_detection.ai_obstacle_detection_desc",
    attributeKey: "ai_obstacle_detection",
    switchEntitySuffix: "ai_obstacle_detection"
  },
  {
    key: "ai_obstacle_image_upload",
    labelKey: "settings.ai_detection.ai_obstacle_image_upload",
    descriptionKey: "settings.ai_detection.ai_obstacle_image_upload_desc",
    attributeKey: "ai_obstacle_image_upload",
    switchEntitySuffix: "ai_obstacle_image_upload"
  },
  {
    key: "ai_pet_detection",
    labelKey: "settings.ai_detection.ai_pet_detection",
    descriptionKey: "settings.ai_detection.ai_pet_detection_desc",
    attributeKey: "ai_pet_detection",
    switchEntitySuffix: "ai_pet_detection"
  },
  {
    key: "ai_human_detection",
    labelKey: "settings.ai_detection.ai_human_detection",
    descriptionKey: "settings.ai_detection.ai_human_detection_desc",
    attributeKey: "ai_human_detection",
    switchEntitySuffix: "ai_human_detection"
  },
  {
    key: "ai_furniture_detection",
    labelKey: "settings.ai_detection.ai_furniture_detection",
    descriptionKey: "settings.ai_detection.ai_furniture_detection_desc",
    attributeKey: "ai_furniture_detection",
    switchEntitySuffix: "ai_furniture_detection"
  },
  {
    key: "ai_fluid_detection",
    labelKey: "settings.ai_detection.ai_fluid_detection",
    descriptionKey: "settings.ai_detection.ai_fluid_detection_desc",
    attributeKey: "ai_fluid_detection",
    switchEntitySuffix: "ai_fluid_detection"
  },
  {
    key: "stain_avoidance",
    labelKey: "settings.ai_detection.stain_avoidance",
    descriptionKey: "settings.ai_detection.stain_avoidance_desc",
    attributeKey: "stain_avoidance",
    switchEntitySuffix: "stain_avoidance"
  },
  {
    key: "collision_avoidance",
    labelKey: "settings.ai_detection.collision_avoidance",
    descriptionKey: "settings.ai_detection.collision_avoidance_desc",
    attributeKey: "collision_avoidance",
    switchEntitySuffix: "collision_avoidance"
  },
  {
    key: "fill_light",
    labelKey: "settings.ai_detection.fill_light",
    descriptionKey: "settings.ai_detection.fill_light_desc",
    attributeKey: "fill_light",
    switchEntitySuffix: "fill_light"
  }
];
function E1({ hass: o, entity: c, language: s }) {
  const { t: u } = Ke(s), g = c.attributes, m = c.entity_id.split(".")[1] ?? "", h = O.useCallback(
    (v, f) => {
      const p = `switch.${m}_${v}`;
      o.callService("switch", f ? "turn_on" : "turn_off", {
        entity_id: p
      });
    },
    [o, m]
  ), b = (v) => {
    const f = g[v];
    return Wr(f) ? f : ua(f) ? f > 0 : !1;
  };
  return /* @__PURE__ */ r.jsx("div", { className: "ai-detection-section", children: N1.map((v) => /* @__PURE__ */ r.jsxs("div", { className: "ai-detection-section__item", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "ai-detection-section__info", children: [
      /* @__PURE__ */ r.jsx("span", { className: "ai-detection-section__label", children: u(v.labelKey) }),
      /* @__PURE__ */ r.jsx("span", { className: "ai-detection-section__description", children: u(v.descriptionKey) })
    ] }),
    /* @__PURE__ */ r.jsx(
      Ol,
      {
        checked: b(v.attributeKey),
        onChange: (f) => h(v.switchEntitySuffix, f)
      }
    )
  ] }, v.key)) });
}
const M1 = [
  {
    key: "carpet_boost",
    labelKey: "settings.carpet.carpet_boost",
    descriptionKey: "settings.carpet.carpet_boost_desc",
    attributeKey: "carpet_boost",
    switchEntitySuffix: "carpet_boost"
  },
  {
    key: "carpet_recognition",
    labelKey: "settings.carpet.carpet_recognition",
    descriptionKey: "settings.carpet.carpet_recognition_desc",
    attributeKey: "carpet_recognition",
    switchEntitySuffix: "carpet_recognition"
  },
  {
    key: "carpet_avoidance",
    labelKey: "settings.carpet.carpet_avoidance",
    descriptionKey: "settings.carpet.carpet_avoidance_desc",
    attributeKey: "carpet_avoidance",
    switchEntitySuffix: "carpet_avoidance"
  }
], k1 = ["low", "medium", "high"];
function A1({ hass: o, entity: c, language: s }) {
  const { t: u } = Ke(s), g = c.attributes, m = c.entity_id.split(".")[1] ?? "", h = O.useCallback(
    (w, k) => {
      const N = `switch.${m}_${w}`;
      o.callService("switch", k ? "turn_on" : "turn_off", {
        entity_id: N
      });
    },
    [o, m]
  ), b = O.useCallback(
    (w) => {
      const k = `select.${m}_carpet_sensitivity`;
      o.callService("select", "select_option", {
        entity_id: k,
        option: w
      });
    },
    [o, m]
  ), v = (w) => {
    const k = g[w];
    return Wr(k) ? k : ua(k) ? k > 0 : !1;
  }, f = De(g.carpet_sensitivity, "medium"), p = mg(f) ? f.toLowerCase() : "medium";
  return /* @__PURE__ */ r.jsxs("div", { className: "carpet-settings-section", children: [
    M1.map((w) => /* @__PURE__ */ r.jsxs("div", { className: "carpet-settings-section__item", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "carpet-settings-section__info", children: [
        /* @__PURE__ */ r.jsx("span", { className: "carpet-settings-section__label", children: u(w.labelKey) }),
        /* @__PURE__ */ r.jsx("span", { className: "carpet-settings-section__description", children: u(w.descriptionKey) })
      ] }),
      /* @__PURE__ */ r.jsx(
        Ol,
        {
          checked: v(w.attributeKey),
          onChange: (k) => h(w.switchEntitySuffix, k)
        }
      )
    ] }, w.key)),
    /* @__PURE__ */ r.jsxs("div", { className: "carpet-settings-section__item carpet-settings-section__item--select", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "carpet-settings-section__info", children: [
        /* @__PURE__ */ r.jsx("span", { className: "carpet-settings-section__label", children: u("settings.carpet.sensitivity") }),
        /* @__PURE__ */ r.jsx("span", { className: "carpet-settings-section__description", children: u("settings.carpet.sensitivity_desc") })
      ] }),
      /* @__PURE__ */ r.jsx(
        "select",
        {
          className: "carpet-settings-section__select",
          value: p,
          onChange: (w) => b(w.target.value),
          children: k1.map((w) => /* @__PURE__ */ r.jsx("option", { value: w, children: u(`settings.carpet.sensitivity_${w}`) }, w))
        }
      )
    ] })
  ] });
}
const C1 = [
  {
    key: "main_brush",
    labelKey: "settings.consumables.main_brush",
    percentKey: "main_brush_left",
    hoursKey: "main_brush_time_left",
    resetCommand: "reset_main_brush"
  },
  {
    key: "side_brush",
    labelKey: "settings.consumables.side_brush",
    percentKey: "side_brush_left",
    hoursKey: "side_brush_time_left",
    resetCommand: "reset_side_brush"
  },
  {
    key: "filter",
    labelKey: "settings.consumables.filter",
    percentKey: "filter_left",
    hoursKey: "filter_time_left",
    resetCommand: "reset_filter"
  },
  {
    key: "sensor",
    labelKey: "settings.consumables.sensor",
    percentKey: "sensor_dirty_left",
    hoursKey: "sensor_dirty_time_left",
    resetCommand: "reset_sensor"
  }
];
function j1({ hass: o, entity: c, language: s }) {
  const { t: u } = Ke(s), g = c.attributes, m = O.useCallback(
    (b) => {
      o.callService("dreame_vacuum", b, {
        entity_id: c.entity_id
      });
    },
    [o, c.entity_id]
  ), h = (b) => b >= 50 ? "var(--consumable-good, #34c759)" : b >= 20 ? "var(--consumable-warning, #ff9500)" : "var(--consumable-critical, #ff3b30)";
  return /* @__PURE__ */ r.jsx("div", { className: "consumables-section", children: C1.map((b) => {
    const v = De(g[b.percentKey], 0), f = De(g[b.hoursKey], 0), p = h(v);
    return /* @__PURE__ */ r.jsxs("div", { className: "consumables-section__item", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "consumables-section__info", children: [
        /* @__PURE__ */ r.jsx("span", { className: "consumables-section__label", children: u(b.labelKey) }),
        /* @__PURE__ */ r.jsxs("span", { className: "consumables-section__stats", children: [
          v,
          "% · ",
          f,
          "h ",
          u("settings.consumables.remaining")
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "consumables-section__progress", children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "consumables-section__progress-bar",
          style: {
            width: `${v}%`,
            backgroundColor: p
          }
        }
      ) }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "consumables-section__reset",
          onClick: () => m(b.resetCommand),
          type: "button",
          children: u("settings.consumables.reset")
        }
      )
    ] }, b.key);
  }) });
}
function T1({ entity: o, language: c }) {
  const { t: s } = Ke(c), u = o.attributes, g = u.firmware_version, m = mg(g) || ua(g) ? g : "-", h = De(u.total_cleaned_area, 0), b = De(u.total_cleaning_time, 0), v = De(u.cleaning_count, 0), f = u.ap, p = f?.ssid ?? "-", w = f?.rssi ?? "-", k = f?.ip ?? "-", N = [
    { labelKey: "settings.device_info.firmware", value: m },
    { labelKey: "settings.device_info.total_area", value: h, unitKey: "units.square_meters" },
    { labelKey: "settings.device_info.total_time", value: b, unitKey: "units.minutes" },
    { labelKey: "settings.device_info.total_cleans", value: v },
    { labelKey: "settings.device_info.wifi_ssid", value: p },
    { labelKey: "settings.device_info.wifi_signal", value: w, unitKey: "units.decibels" },
    { labelKey: "settings.device_info.ip_address", value: k }
  ];
  return /* @__PURE__ */ r.jsx("div", { className: "device-info-section", children: N.map((S) => /* @__PURE__ */ r.jsxs("div", { className: "device-info-section__item", children: [
    /* @__PURE__ */ r.jsx("span", { className: "device-info-section__label", children: s(S.labelKey) }),
    /* @__PURE__ */ r.jsxs("span", { className: "device-info-section__value", children: [
      S.value,
      S.unitKey && ` ${s(S.unitKey)}`
    ] })
  ] }, S.labelKey)) });
}
function O1({ hass: o, entity: c, config: s, language: u }) {
  const { t: g } = Ke(u), m = c.attributes, h = O.useMemo(() => m.maps ?? [], [m.maps]), b = m.selected_map_id ?? m.selected_map, f = `select.${s.entity?.split(".")[1] ?? ""}_selected_map`, p = O.useCallback(
    (w) => {
      const k = h.find((N) => N.id === w);
      k && o.callService("select", "select_option", {
        entity_id: f,
        option: k.name
      });
    },
    [o, f, h]
  );
  return h.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: "map-management-section", children: /* @__PURE__ */ r.jsx("p", { className: "map-management-section__empty", children: g("settings.map_management.no_maps") }) }) : /* @__PURE__ */ r.jsxs("div", { className: "map-management-section", children: [
    /* @__PURE__ */ r.jsx("p", { className: "map-management-section__description", children: g("settings.map_management.description") }),
    /* @__PURE__ */ r.jsx("div", { className: "map-management-section__maps", children: h.map((w) => /* @__PURE__ */ r.jsx(
      "button",
      {
        className: `map-management-section__map ${w.id === b ? "map-management-section__map--active" : ""}`,
        onClick: () => p(w.id),
        type: "button",
        children: w.name
      },
      w.id
    )) })
  ] });
}
const R1 = [
  {
    key: "child_lock",
    labelKey: "settings.quick_settings.child_lock",
    descriptionKey: "settings.quick_settings.child_lock_desc",
    attributeKey: "child_lock",
    switchEntitySuffix: "child_lock"
  },
  {
    key: "carpet_boost",
    labelKey: "settings.quick_settings.carpet_boost",
    descriptionKey: "settings.quick_settings.carpet_boost_desc",
    attributeKey: "carpet_boost",
    switchEntitySuffix: "carpet_boost"
  },
  {
    key: "obstacle_avoidance",
    labelKey: "settings.quick_settings.obstacle_avoidance",
    descriptionKey: "settings.quick_settings.obstacle_avoidance_desc",
    attributeKey: "obstacle_avoidance",
    switchEntitySuffix: "obstacle_avoidance"
  },
  {
    key: "auto_dust_collecting",
    labelKey: "settings.quick_settings.auto_dust_collecting",
    descriptionKey: "settings.quick_settings.auto_dust_collecting_desc",
    attributeKey: "auto_dust_collecting",
    switchEntitySuffix: "auto_dust_collecting"
  },
  {
    key: "auto_drying",
    labelKey: "settings.quick_settings.auto_drying",
    descriptionKey: "settings.quick_settings.auto_drying_desc",
    attributeKey: "auto_drying",
    switchEntitySuffix: "auto_drying"
  }
];
function D1({ hass: o, entity: c, language: s }) {
  const { t: u } = Ke(s), g = c.attributes, m = c.entity_id.split(".")[1] ?? "", h = O.useCallback(
    (v, f) => {
      const p = `switch.${m}_${v}`;
      o.callService("switch", f ? "turn_on" : "turn_off", {
        entity_id: p
      });
    },
    [o, m]
  ), b = (v) => {
    const f = g[v];
    return Wr(f) ? f : ua(f) ? f > 0 : jb(f) ? f.enabled ?? !1 : !1;
  };
  return /* @__PURE__ */ r.jsx("div", { className: "quick-settings-section", children: R1.map((v) => /* @__PURE__ */ r.jsxs("div", { className: "quick-settings-section__item", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "quick-settings-section__info", children: [
      /* @__PURE__ */ r.jsx("span", { className: "quick-settings-section__label", children: u(v.labelKey) }),
      /* @__PURE__ */ r.jsx("span", { className: "quick-settings-section__description", children: u(v.descriptionKey) })
    ] }),
    /* @__PURE__ */ r.jsx(
      Ol,
      {
        checked: b(v.attributeKey),
        onChange: (f) => h(v.switchEntitySuffix, f)
      }
    )
  ] }, v.key)) });
}
const kr = 0, r_ = 100;
function U1({ hass: o, entity: c, language: s }) {
  const { t: u } = Ke(s), g = c.entity_id.split(".")[1] ?? "", m = De(c.attributes.volume, 50), [h, b] = O.useState(m), v = (h - kr) / (r_ - kr) * 100, f = 20, p = `calc(${v}% + ${f / 2 - v * f / 100}px)`, w = (D) => {
    b(parseInt(D.target.value));
  }, k = O.useCallback(() => {
    if (h !== m) {
      const D = `number.${g}_volume`;
      o.callService("number", "set_value", {
        entity_id: D,
        value: h
      });
    }
  }, [o, g, h, m]), N = O.useCallback(() => {
    o.callService("vacuum", "locate", {
      entity_id: c.entity_id
    });
  }, [o, c.entity_id]), S = h === 0;
  return /* @__PURE__ */ r.jsxs("div", { className: "volume-section", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "volume-section__control", children: [
      /* @__PURE__ */ r.jsx("div", { className: "volume-section__icon", children: S ? /* @__PURE__ */ r.jsx(Kv, { size: 20 }) : /* @__PURE__ */ r.jsx(ag, { size: 20 }) }),
      /* @__PURE__ */ r.jsx("div", { className: "volume-section__slider-container", children: /* @__PURE__ */ r.jsxs("div", { className: "volume-section__slider-wrapper", children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "range",
            min: kr,
            max: r_,
            value: h,
            onChange: w,
            onMouseUp: k,
            onTouchEnd: k,
            className: "volume-section__slider",
            style: {
              background: `linear-gradient(to right, var(--accent-color, #007aff) 0%, var(--accent-color, #007aff) ${v}%, var(--surface-secondary, #e5e5e5) ${v}%, var(--surface-secondary, #e5e5e5) 100%)`
            }
          }
        ),
        /* @__PURE__ */ r.jsx("div", { className: "volume-section__tooltip", style: { left: p }, children: S ? u("settings.volume.muted") : `${h}%` })
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsxs("button", { className: "volume-section__test-button", onClick: N, type: "button", children: [
      /* @__PURE__ */ r.jsx(P_, { size: 16 }),
      /* @__PURE__ */ r.jsx("span", { children: u("settings.volume.test_sound") })
    ] })
  ] });
}
function B1({ opened: o, onClose: c, hass: s, entity: u, config: g, language: m }) {
  const { t: h } = Ke(m);
  return /* @__PURE__ */ r.jsx(Di, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsxs("div", { className: "settings-panel", children: [
    /* @__PURE__ */ r.jsx("h2", { className: "settings-panel__title", children: h("settings.title") }),
    /* @__PURE__ */ r.jsx("div", { className: "settings-panel__scroll-wrapper", children: /* @__PURE__ */ r.jsxs("div", { className: "settings-panel__sections", children: [
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.consumables.title"), icon: /* @__PURE__ */ r.jsx(Y0, {}), defaultOpen: !0, children: /* @__PURE__ */ r.jsx(j1, { hass: s, entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.device_info.title"), icon: /* @__PURE__ */ r.jsx(F_, {}), children: /* @__PURE__ */ r.jsx(T1, { entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.map_management.title"), icon: /* @__PURE__ */ r.jsx(os, {}), children: /* @__PURE__ */ r.jsx(O1, { hass: s, entity: u, config: g, language: m }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.volume.title"), icon: /* @__PURE__ */ r.jsx(ag, {}), children: /* @__PURE__ */ r.jsx(U1, { hass: s, entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.quick_settings.title"), icon: /* @__PURE__ */ r.jsx(eg, {}), children: /* @__PURE__ */ r.jsx(D1, { hass: s, entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.carpet.title"), icon: /* @__PURE__ */ r.jsx(W0, {}), children: /* @__PURE__ */ r.jsx(A1, { hass: s, entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.ai_detection.title"), icon: /* @__PURE__ */ r.jsx(z0, {}), children: /* @__PURE__ */ r.jsx(E1, { hass: s, entity: u, language: m }) })
    ] }) })
  ] }) });
}
function L1({ selectedRooms: o, language: c }) {
  const { t: s } = Ke(c);
  if (o.size === 0)
    return null;
  const u = Array.from(o.values()).join(", ");
  return /* @__PURE__ */ r.jsxs("div", { className: "room-selection-display", children: [
    /* @__PURE__ */ r.jsx("span", { className: "room-selection-display__label", children: s("room_display.selected_label") }),
    /* @__PURE__ */ r.jsx("span", { className: "room-selection-display__rooms", children: u })
  ] });
}
function G1({ hass: o, config: c }) {
  const s = o.states[c.entity], u = c.theme || "light", g = c.language || "en", { t: m } = Ke(g), h = O.useRef(null), b = pg({
    themeType: u,
    customThemeConfig: c.custom_theme,
    containerRef: h
  }), [v, f] = O.useState(null), {
    selectedMode: p,
    selectedRooms: w,
    selectedZone: k,
    modalOpened: N,
    shortcutsModalOpened: S,
    settingsPanelOpened: D,
    setSelectedZone: K,
    setModalOpened: U,
    setShortcutsModalOpened: $,
    setSettingsPanelOpened: Z,
    handleModeChange: L,
    handleRoomToggle: ae
  } = fg({ defaultMode: c.default_mode }), { toast: V, showToast: Y, hideToast: J } = _g(), { handlePause: le, handleStop: I, handleDock: se, handleClean: ge } = Ub({
    hass: o,
    entityId: c.entity,
    mapEntityId: c.map_entity || `camera.${c.entity.split(".")[1]}_map`,
    onSuccess: Y,
    language: g
  }), Ne = (x, H) => {
    const P = w.has(x);
    ae(x, H), Y(
      P ? m("toast.deselected_room", { name: H }) : m("toast.selected_room", { name: H })
    );
  }, Ce = () => {
    ge(p, w, k, v?.width, v?.height);
  }, Se = () => {
    o.callService("vacuum", "start", { entity_id: c.entity }), Y(m("toast.resuming"));
  };
  if (!s)
    return /* @__PURE__ */ r.jsx("div", { className: "dreame-vacuum-card__error", children: m("errors.entity_not_found", { entity: c.entity }) });
  const R = Pb(s, c);
  if (!R)
    return /* @__PURE__ */ r.jsx("div", { className: "dreame-vacuum-card__error", children: m("errors.failed_to_load") });
  const { deviceName: ee, mapEntityId: F, rooms: ve } = R, Ee = e1(s, p);
  return /* @__PURE__ */ r.jsxs("div", { ref: h, className: `dreame-vacuum-card dreame-vacuum-card--${b.name}`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "dreame-vacuum-card__container", children: [
      /* @__PURE__ */ r.jsx(
        n1,
        {
          entity: s,
          deviceName: ee,
          onSettingsClick: () => Z(!0),
          language: g
        }
      ),
      /* @__PURE__ */ r.jsx(
        r1,
        {
          hass: o,
          mapEntityId: F,
          selectedMode: p,
          selectedRooms: w,
          rooms: ve,
          onRoomToggle: Ne,
          zone: k,
          onZoneChange: K,
          onImageDimensionsChange: (x, H) => f({ width: x, height: H }),
          language: g,
          isStarted: De(s.attributes.started, !1),
          defaultRoomView: c.default_room_view
        }
      ),
      /* @__PURE__ */ r.jsx(
        i1,
        {
          cleanGeniusMode: De(s.attributes.cleangenius_mode, ""),
          cleaningMode: De(s.attributes.cleaning_mode, "Sweeping and mopping"),
          cleangenius: De(s.attributes.cleangenius, "Off"),
          onClick: () => U(!0),
          onShortcutsClick: () => $(!0),
          disabled: De(s.attributes.started, !1),
          language: g
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "dreame-vacuum-card__controls", children: [
        p === "room" && /* @__PURE__ */ r.jsx(L1, { selectedRooms: w, language: g }),
        /* @__PURE__ */ r.jsx(
          hg,
          {
            selectedMode: Ee,
            onModeChange: L,
            disabled: De(s.attributes.started, !1),
            language: g
          }
        ),
        /* @__PURE__ */ r.jsx(
          vg,
          {
            selectedMode: p,
            selectedRoomsCount: w.size,
            isRunning: De(s.attributes.running, !1),
            isPaused: De(s.attributes.paused, !1),
            isDocked: s.state === "docked" || De(s.attributes.docked, !1),
            onClean: Ce,
            onPause: le,
            onResume: Se,
            onStop: I,
            onDock: se,
            language: g
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      w1,
      {
        opened: N,
        onClose: () => U(!1),
        entity: s,
        hass: o,
        language: g
      }
    ),
    /* @__PURE__ */ r.jsx(
      z1,
      {
        opened: S,
        onClose: () => $(!1),
        entity: s,
        hass: o,
        language: g
      }
    ),
    /* @__PURE__ */ r.jsx(
      B1,
      {
        opened: D,
        onClose: () => Z(!1),
        hass: o,
        entity: s,
        config: c,
        language: g
      }
    ),
    V && /* @__PURE__ */ r.jsx(bg, { message: V, onClose: J })
  ] });
}
function H1(o) {
  const c = o / 1e4;
  return `${c < 10 ? c.toFixed(1) : Math.round(c)} м²`;
}
function V1({
  vacuumEntity: o,
  batteryEntity: c,
  currentStatsAreaEntity: s,
  currentStatsTimeEntity: u,
  deviceName: g,
  restrictionsMode: m,
  onRestrictionsToggle: h,
  onSettingsClick: b,
  language: v
}) {
  const { t: f } = Ke(v), p = {
    docked: f("valetudo.status.docked"),
    cleaning: f("valetudo.status.cleaning"),
    paused: f("valetudo.status.paused"),
    returning: f("valetudo.status.returning"),
    idle: f("valetudo.status.idle"),
    error: f("valetudo.status.error")
  }, w = (Z) => {
    const L = Math.floor(Z / 60), ae = Math.floor(L / 60), V = L % 60;
    return ae > 0 ? f("valetudo.time.hours_minutes", { h: String(ae), m: String(V) }) : f("valetudo.time.minutes", { m: String(L) });
  }, k = c ? Number(c.state) : null, N = p[o.state] ?? o.state, S = ["cleaning", "paused", "returning"].includes(o.state), D = s ? Number(s.state) : NaN, K = u ? Number(u.state) : NaN, U = S && !isNaN(D) && !isNaN(K) && D > 0, $ = () => k === null || isNaN(k) ? null : k >= 80 ? og : k >= 60 ? lg : k >= 20 ? ig : ng;
  return /* @__PURE__ */ r.jsxs("div", { className: "header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "header__top", children: [
      h && /* @__PURE__ */ r.jsx(
        "button",
        {
          className: `header__restrictions-btn${m ? " header__restrictions-btn--active" : ""}`,
          onClick: h,
          type: "button",
          "aria-label": f("valetudo.restrictions_label"),
          title: f("valetudo.restrictions_label"),
          children: /* @__PURE__ */ r.jsx(Ev, { size: 20 })
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "header__title-wrapper", children: [
        /* @__PURE__ */ r.jsxs("h2", { className: "header__title", children: [
          g,
          " ",
          /* @__PURE__ */ r.jsx("span", { style: { fontSize: "0.6em", opacity: 0.45, fontWeight: 400 }, children: "v1.12.1" })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: "header__status", children: N })
      ] }),
      b && /* @__PURE__ */ r.jsx("button", { className: "header__settings-btn", onClick: b, type: "button", "aria-label": "Settings", children: /* @__PURE__ */ r.jsx(tg, {}) })
    ] }),
    k !== null && !isNaN(k) || U ? /* @__PURE__ */ r.jsxs("div", { className: "header__stats", children: [
      k !== null && !isNaN(k) && /* @__PURE__ */ r.jsxs("div", { className: "header__stat", children: [
        /* @__PURE__ */ r.jsx("span", { className: "header__stat-icon", children: $() }),
        /* @__PURE__ */ r.jsxs("span", { className: "header__stat-value", children: [
          k,
          "%"
        ] })
      ] }),
      U && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsxs("div", { className: "header__stat", children: [
          /* @__PURE__ */ r.jsx("span", { className: "header__stat-icon header__stat-icon--area", children: /* @__PURE__ */ r.jsx(Kr, { size: 16 }) }),
          /* @__PURE__ */ r.jsx("span", { className: "header__stat-value", children: H1(D) })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "header__stat", children: [
          /* @__PURE__ */ r.jsx("span", { className: "header__stat-icon header__stat-icon--cleaning-time", children: /* @__PURE__ */ r.jsx(D0, { size: 16 }) }),
          /* @__PURE__ */ r.jsx("span", { className: "header__stat-value", children: w(K) })
        ] })
      ] })
    ] }) : null
  ] });
}
const u_ = [
  "rgba(90,  155, 212, 0.85)",
  "rgba(120, 195, 130, 0.85)",
  "rgba(255, 190,  80, 0.85)",
  "rgba(220, 100, 100, 0.85)",
  "rgba(170, 120, 210, 0.85)",
  "rgba( 80, 185, 185, 0.85)"
], Ar = "rgba(120, 164, 193, 0.6)", q1 = "rgba( 50,  50,  50, 1)", Y1 = "rgba(255, 255, 255, 0.85)", Z1 = "#4CAF50", K1 = "#2196F3", _e = 3;
function X1(o) {
  let c = 1 / 0, s = 1 / 0, u = -1 / 0, g = -1 / 0;
  for (const m of o.layers)
    for (let h = 0; h < m.pixels.length; h += 2) {
      const b = m.pixels[h], v = m.pixels[h + 1];
      b < c && (c = b), v < s && (s = v), b > u && (u = b), v > g && (g = v);
    }
  return c === 1 / 0 && (c = 0, s = 0, u = o.size.x, g = o.size.y), { minX: c, minY: s, maxX: u, maxY: g };
}
function Cr(o, c, s, u, g) {
  o.fillStyle = s;
  for (let m = 0; m < c.pixels.length; m += 2)
    o.fillRect((c.pixels[m] - u) * _e, (c.pixels[m + 1] - g) * _e, _e, _e);
}
function Q1(o) {
  const c = /* @__PURE__ */ new Map();
  let s = 0;
  for (const u of o)
    u.type === "segment" && u.metaData.segmentId && (c.has(u.metaData.segmentId) || (c.set(u.metaData.segmentId, u_[s % u_.length]), s++));
  return c;
}
function $1({
  mapData: o,
  mode: c,
  selectedRooms: s,
  zone: u,
  onZoneChange: g,
  onSegmentClick: m,
  restrictions: h,
  displayRestrictions: b,
  onRestrictionDrawn: v,
  onRestrictionSelect: f,
  iterations: p = 1,
  onIterationsChange: w,
  language: k
}) {
  const { t: N } = Ke(k), S = O.useRef(null), D = O.useRef(null), K = O.useRef({ bb: { minX: 0, minY: 0 }, pixelSize: 50 }), U = O.useRef(/* @__PURE__ */ new Map()), [$, Z] = O.useState(1), [L, ae] = O.useState({ x: 0, y: 0 }), V = O.useRef(null), Y = O.useRef(null), J = O.useRef(!1), le = O.useRef(/* @__PURE__ */ new Map()), [I, se] = O.useState(null), [ge, Ne] = O.useState(null), Ce = O.useRef(!1), [Se, R] = O.useState(null), ee = O.useRef(null), [F, ve] = O.useState(null), Ee = O.useRef(null), x = O.useRef(null), H = O.useRef(null), P = O.useMemo(() => window.matchMedia("(pointer: coarse)").matches, []), ne = O.useCallback((j, G) => {
    const { bb: W, pixelSize: ie } = K.current;
    return {
      x: (j / _e + W.minX) * ie,
      y: (G / _e + W.minY) * ie
    };
  }, []), xe = O.useCallback((j, G) => {
    const { bb: W, pixelSize: ie } = K.current;
    return {
      x: (j / ie - W.minX) * _e,
      y: (G / ie - W.minY) * _e
    };
  }, []), me = O.useCallback(
    (j, G) => {
      const W = D.current, ie = S.current;
      if (!W || !ie) return { x: 0, y: 0 };
      const ue = W.getBoundingClientRect(), ze = (j - ue.left - ue.width / 2 - L.x) / $ + ue.width / 2, M = (G - ue.top - ue.height / 2 - L.y) / $ + ue.height / 2, tt = ue.width, te = ie.width / tt;
      return { x: ze * te, y: M * te };
    },
    [$, L]
  );
  O.useEffect(() => {
    Z(1), ae({ x: 0, y: 0 }), R(null), ve(null), H.current = null;
  }, [c]), O.useEffect(() => {
    ve(null), H.current = null;
  }, [h?.tool]), O.useEffect(() => {
    if (c === "zone" && P) {
      const j = S.current;
      if (!j) return;
      const G = j.width * 0.3, W = j.height * 0.3, ie = (j.width - G) / 2, ue = (j.height - W) / 2;
      R({ x: ie, y: ue, w: G, h: W });
    } else
      R(null);
  }, [c, P]), O.useEffect(() => {
    if (Se === null) return;
    const j = ne(Se.x, Se.y), G = ne(Se.x + Se.w, Se.y + Se.h);
    g?.({
      x1: Math.round(Math.min(j.x, G.x)),
      y1: Math.round(Math.min(j.y, G.y)),
      x2: Math.round(Math.max(j.x, G.x)),
      y2: Math.round(Math.max(j.y, G.y))
    });
  }, [Se, ne, g]), O.useEffect(() => {
    const j = S.current;
    if (!j) return;
    const G = X1(o), W = o.pixelSize || 50;
    K.current = { bb: G, pixelSize: W };
    const ie = /* @__PURE__ */ new Map();
    for (const te of o.layers)
      if (te.type === "segment" && te.metaData.segmentId) {
        const oe = parseInt(te.metaData.segmentId, 10);
        for (let de = 0; de < te.pixels.length; de += 2)
          ie.set(`${te.pixels[de]},${te.pixels[de + 1]}`, oe);
      }
    U.current = ie;
    const ue = (G.maxX - G.minX + 2) * _e, ze = (G.maxY - G.minY + 2) * _e;
    j.width = ue, j.height = ze;
    const M = j.getContext("2d");
    if (!M) return;
    M.clearRect(0, 0, ue, ze);
    const tt = Q1(o.layers), yt = (te) => parseInt(te, 10);
    for (const te of o.layers)
      te.type === "floor" && Cr(M, te, Ar, G.minX, G.minY);
    for (const te of o.layers)
      if (te.type === "segment") {
        const oe = te.metaData.segmentId, de = oe ? tt.get(oe) ?? Ar : Ar, pe = (oe && s && s.size > 0 ? s.has(yt(oe)) : !0) ? de : de.replace(/[\d.]+\)$/, "0.35)");
        Cr(M, te, pe, G.minX, G.minY);
      }
    for (const te of o.layers)
      te.type === "wall" && Cr(M, te, q1, G.minX, G.minY);
    for (const te of o.entities)
      if (!(te.type !== "path" && te.type !== "predicted_path")) {
        M.beginPath(), M.strokeStyle = te.type === "predicted_path" ? "rgba(255,255,255,0.4)" : Y1, M.lineWidth = _e * 0.75, M.lineCap = "round", M.lineJoin = "round", M.setLineDash(te.type === "predicted_path" ? [4, 3] : []);
        for (let oe = 0; oe < te.points.length; oe += 2) {
          const de = (te.points[oe] / W - G.minX) * _e, ce = (te.points[oe + 1] / W - G.minY) * _e;
          oe === 0 ? M.moveTo(de, ce) : M.lineTo(de, ce);
        }
        M.stroke(), M.lineCap = "butt", M.lineJoin = "miter", M.setLineDash([]);
      }
    for (const te of o.entities) {
      if (te.type !== "charger_location" || te.points.length < 2) continue;
      const oe = (te.points[0] / W - G.minX) * _e, de = (te.points[1] / W - G.minY) * _e, ce = _e * 3.4;
      M.save(), M.shadowColor = "rgba(0,0,0,0.5)", M.shadowBlur = _e * 2, M.beginPath(), M.arc(oe, de, ce, 0, 2 * Math.PI), M.fillStyle = Z1, M.fill(), M.shadowColor = "transparent", M.shadowBlur = 0, M.strokeStyle = "#fff", M.lineWidth = _e * 0.7, M.stroke(), M.beginPath(), M.moveTo(oe + ce * 0.15, de - ce * 0.65), M.lineTo(oe - ce * 0.2, de + ce * 0.05), M.lineTo(oe + ce * 0.05, de + ce * 0.05), M.lineTo(oe - ce * 0.15, de + ce * 0.65), M.lineTo(oe + ce * 0.2, de - ce * 0.05), M.lineTo(oe - ce * 0.05, de - ce * 0.05), M.closePath(), M.fillStyle = "#fff", M.fill(), M.restore();
    }
    for (const te of o.entities) {
      if (te.type !== "robot_position" || te.points.length < 2) continue;
      const oe = (te.points[0] / W - G.minX) * _e, de = (te.points[1] / W - G.minY) * _e, ce = (te.metaData.angle ?? 0) * (Math.PI / 180), pe = _e * 3;
      M.save(), M.translate(oe, de), M.rotate(ce), M.shadowColor = "rgba(0,0,0,0.6)", M.shadowBlur = _e * 4, M.beginPath(), M.arc(0, 0, pe, 0, 2 * Math.PI), M.fillStyle = K1, M.fill(), M.shadowColor = "transparent", M.shadowBlur = 0, M.strokeStyle = "#fff", M.lineWidth = _e * 0.9, M.stroke(), M.beginPath(), M.moveTo(0, -pe * 0.62), M.lineTo(pe * 0.38, pe * 0.42), M.lineTo(0, pe * 0.18), M.lineTo(-pe * 0.38, pe * 0.42), M.closePath(), M.fillStyle = "#fff", M.fill(), M.restore();
    }
    for (const te of o.entities)
      if (!(te.type !== "active_zone" || te.points.length < 8)) {
        M.beginPath();
        for (let oe = 0; oe < te.points.length; oe += 2) {
          const de = (te.points[oe] / W - G.minX) * _e, ce = (te.points[oe + 1] / W - G.minY) * _e;
          oe === 0 ? M.moveTo(de, ce) : M.lineTo(de, ce);
        }
        M.closePath(), M.fillStyle = "rgba(255, 152, 0, 0.22)", M.fill(), M.strokeStyle = "rgba(255, 152, 0, 0.9)", M.lineWidth = _e, M.setLineDash([6, 3]), M.stroke(), M.setLineDash([]);
      }
    if (u && !P) {
      const te = xe(u.x1, u.y1), oe = xe(u.x2, u.y2), de = Math.min(te.x, oe.x), ce = Math.min(te.y, oe.y), pe = Math.abs(oe.x - te.x), Te = Math.abs(oe.y - te.y);
      M.fillStyle = "rgba(255, 152, 0, 0.25)", M.fillRect(de, ce, pe, Te), M.strokeStyle = "rgba(255, 152, 0, 0.9)", M.lineWidth = _e, M.setLineDash([6, 3]), M.strokeRect(de, ce, pe, Te), M.setLineDash([]);
    }
    if (b) {
      const te = (oe, de) => ({
        x: (oe / W - G.minX) * _e,
        y: (de / W - G.minY) * _e
      });
      for (const oe of b.walls) {
        const de = te(oe.pA.x, oe.pA.y), ce = te(oe.pB.x, oe.pB.y);
        M.beginPath(), M.moveTo(de.x, de.y), M.lineTo(ce.x, ce.y), M.strokeStyle = "rgba(244, 67, 54, 0.6)", M.lineWidth = _e * 1.2, M.setLineDash([]), M.lineCap = "round", M.stroke(), M.lineCap = "butt";
      }
      for (const oe of b.zones) {
        const de = [oe.pA, oe.pB, oe.pC, oe.pD].map((pe) => te(pe.x, pe.y));
        M.beginPath(), M.moveTo(de[0].x, de[0].y);
        for (let pe = 1; pe < de.length; pe++) M.lineTo(de[pe].x, de[pe].y);
        M.closePath();
        const ce = oe.type === "mop";
        M.fillStyle = ce ? "rgba(33,150,243,0.1)" : "rgba(244,67,54,0.1)", M.fill(), M.strokeStyle = ce ? "rgba(33,150,243,0.5)" : "rgba(244,67,54,0.5)", M.lineWidth = _e, M.setLineDash([5, 3]), M.stroke(), M.setLineDash([]);
      }
    } else if (c !== "restrictions")
      for (const te of o.entities) {
        if (te.type === "virtual_wall" && te.points.length >= 4) {
          const oe = (te.points[0] / W - G.minX) * _e, de = (te.points[1] / W - G.minY) * _e, ce = (te.points[2] / W - G.minX) * _e, pe = (te.points[3] / W - G.minY) * _e;
          M.beginPath(), M.moveTo(oe, de), M.lineTo(ce, pe), M.strokeStyle = "rgba(244, 67, 54, 0.6)", M.lineWidth = _e * 1.2, M.setLineDash([]), M.lineCap = "round", M.stroke(), M.lineCap = "butt";
        }
        if ((te.type === "no_go_area" || te.type === "no_mop_area") && te.points.length >= 8) {
          const oe = te.type === "no_mop_area", de = oe ? "rgba(33, 150, 243, 0.1)" : "rgba(244, 67, 54, 0.1)", ce = oe ? "rgba(33, 150, 243, 0.5)" : "rgba(244, 67, 54, 0.5)";
          M.beginPath();
          for (let pe = 0; pe < te.points.length; pe += 2) {
            const Te = (te.points[pe] / W - G.minX) * _e, ke = (te.points[pe + 1] / W - G.minY) * _e;
            pe === 0 ? M.moveTo(Te, ke) : M.lineTo(Te, ke);
          }
          M.closePath(), M.fillStyle = de, M.fill(), M.strokeStyle = ce, M.lineWidth = _e, M.setLineDash([5, 3]), M.stroke(), M.setLineDash([]);
        }
      }
    if (c === "restrictions" && h) {
      const { bb: te, pixelSize: oe } = K.current, de = (Te, ke) => ({
        x: (Te / oe - te.minX) * _e,
        y: (ke / oe - te.minY) * _e
      }), ce = (Te, ke) => {
        const Oe = de(Te.pA.x, Te.pA.y), Ve = de(Te.pB.x, Te.pB.y);
        M.beginPath(), M.moveTo(Oe.x, Oe.y), M.lineTo(Ve.x, Ve.y), M.strokeStyle = ke ? "#ff9800" : "rgba(244,67,54,1)", M.lineWidth = ke ? _e * 3 : _e * 2, M.setLineDash([]), M.lineCap = "round", M.stroke(), M.lineCap = "butt";
        for (const Ae of [Oe, Ve])
          M.beginPath(), M.arc(Ae.x, Ae.y, ke ? _e * 2.5 : _e * 1.5, 0, 2 * Math.PI), M.fillStyle = ke ? "#ff9800" : "rgba(244,67,54,0.9)", M.fill();
      }, pe = (Te, ke) => {
        const Oe = [Te.pA, Te.pB, Te.pC, Te.pD].map((Ae) => de(Ae.x, Ae.y));
        M.beginPath(), M.moveTo(Oe[0].x, Oe[0].y);
        for (let Ae = 1; Ae < Oe.length; Ae++) M.lineTo(Oe[Ae].x, Oe[Ae].y);
        M.closePath();
        const Ve = Te.type === "mop";
        ke ? (M.fillStyle = "rgba(255,152,0,0.25)", M.strokeStyle = "#ff9800") : (M.fillStyle = Ve ? "rgba(33,150,243,0.2)" : "rgba(244,67,54,0.2)", M.strokeStyle = Ve ? "rgba(33,150,243,0.9)" : "rgba(244,67,54,0.9)"), M.fill(), M.lineWidth = ke ? _e * 2 : _e * 1.5, M.setLineDash([5, 3]), M.stroke(), M.setLineDash([]);
      };
      for (const Te of h.walls) ce(Te, Te.id === h.selectedId);
      for (const Te of h.zones) pe(Te, Te.id === h.selectedId);
    }
  }, [o, s, u, c, xe, P, b, h]), O.useEffect(() => {
    const j = D.current;
    if (!j) return;
    const G = (W) => {
      W.preventDefault(), W.stopPropagation();
      const ie = W.deltaY < 0 ? 1.15 : 1 / 1.15;
      Z((ue) => {
        const ze = Math.min(8, Math.max(1, ue * ie));
        return ze <= 1 && ae({ x: 0, y: 0 }), ze;
      });
    };
    return j.addEventListener("wheel", G, { passive: !1 }), () => j.removeEventListener("wheel", G);
  }, []);
  const ye = O.useCallback(
    (j) => {
      if (le.current.set(j.pointerId, { x: j.clientX, y: j.clientY }), le.current.size === 2) {
        Ce.current = !1, J.current = !1, se(null), Ne(null);
        return;
      }
      if (j.currentTarget.setPointerCapture(j.pointerId), c === "zone" && !P) {
        Ce.current = !0;
        const G = me(j.clientX, j.clientY);
        se(G), Ne(G), g?.(null);
        return;
      }
      if (c === "restrictions" && h) {
        if (!P) {
          const G = h.tool;
          if (G === "wall" || G === "no_go" || G === "no_mop") {
            Ce.current = !0;
            const W = me(j.clientX, j.clientY);
            se(W), Ne(W);
            return;
          }
          return;
        }
        h.tool !== "select" && (H.current = { x: j.clientX, y: j.clientY });
      }
      $ > 1 && (J.current = !0, Y.current = { x: j.clientX, y: j.clientY });
    },
    [c, P, $, me, g, h]
  ), ot = O.useCallback(
    (j) => {
      if (le.current.set(j.pointerId, { x: j.clientX, y: j.clientY }), le.current.size === 2) {
        const G = Array.from(le.current.values()), W = Math.hypot(G[0].x - G[1].x, G[0].y - G[1].y);
        if (V.current !== null) {
          const ie = W / V.current;
          Z((ue) => Math.min(8, Math.max(1, ue * ie)));
        }
        V.current = W;
        return;
      }
      if (V.current = null, Ce.current && c === "zone" && !P) {
        Ne(me(j.clientX, j.clientY));
        return;
      }
      if (Ce.current && c === "restrictions" && !P) {
        Ne(me(j.clientX, j.clientY));
        return;
      }
      if (J.current && Y.current) {
        const G = j.clientX - Y.current.x, W = j.clientY - Y.current.y;
        Y.current = { x: j.clientX, y: j.clientY };
        const ie = D.current;
        if (!ie) return;
        const ue = ($ - 1) * ie.getBoundingClientRect().width / 2;
        ae((ze) => ({
          x: Math.max(-ue, Math.min(ue, ze.x + G)),
          y: Math.max(-ue, Math.min(ue, ze.y + W))
        }));
      }
    },
    [c, P, $, me]
  ), Pe = O.useCallback(
    (j) => {
      if (le.current.delete(j.pointerId), V.current = null, Ce.current && c === "zone" && !P) {
        Ce.current = !1;
        const G = me(j.clientX, j.clientY);
        if (I && (Math.abs(G.x - I.x) > 8 || Math.abs(G.y - I.y) > 8)) {
          const W = ne(I.x, I.y), ie = ne(G.x, G.y);
          g?.({
            x1: Math.round(Math.min(W.x, ie.x)),
            y1: Math.round(Math.min(W.y, ie.y)),
            x2: Math.round(Math.max(W.x, ie.x)),
            y2: Math.round(Math.max(W.y, ie.y))
          });
        }
        se(null), Ne(null);
        return;
      }
      if (Ce.current && c === "restrictions" && h && !P) {
        Ce.current = !1;
        const G = me(j.clientX, j.clientY);
        if (I && (Math.abs(G.x - I.x) > 5 || Math.abs(G.y - I.y) > 5)) {
          const W = ne(I.x, I.y), ie = ne(G.x, G.y), ue = { x: Math.round(W.x), y: Math.round(W.y) }, ze = { x: Math.round(ie.x), y: Math.round(ie.y) }, M = h.tool === "wall" ? "wall" : "zone";
          v?.(M, ue, ze);
        }
        se(null), Ne(null);
        return;
      }
      if (c === "restrictions" && h && P && H.current) {
        const G = H.current;
        if (H.current = null, Math.abs(j.clientX - G.x) < 10 && Math.abs(j.clientY - G.y) < 10 && h.tool !== "select") {
          const W = S.current;
          if (W) {
            const ie = me(j.clientX, j.clientY);
            if (h.tool === "wall") {
              const ue = W.width * 0.3;
              ve({
                kind: "wall",
                pA: { x: Math.max(0, ie.x - ue / 2), y: ie.y },
                pB: { x: Math.min(W.width, ie.x + ue / 2), y: ie.y }
              });
            } else {
              const ue = W.width * 0.25, ze = W.height * 0.15;
              ve({
                kind: "zone",
                x: Math.max(0, Math.min(W.width - ue, ie.x - ue / 2)),
                y: Math.max(0, Math.min(W.height - ze, ie.y - ze / 2)),
                w: ue,
                h: ze,
                type: h.tool
              });
            }
          }
        }
      }
      J.current = !1, Y.current = null;
    },
    [c, P, I, me, ne, g, h, v]
  ), ba = O.useCallback(
    (j) => {
      if (c === "restrictions" && h && h.tool === "select" && f) {
        const tt = me(j.clientX, j.clientY), { bb: yt, pixelSize: te } = K.current, oe = (ce, pe) => ({
          x: (ce / te - yt.minX) * _e,
          y: (pe / te - yt.minY) * _e
        }), de = _e * 5;
        for (const ce of [...h.walls].reverse()) {
          const pe = oe(ce.pA.x, ce.pA.y), Te = oe(ce.pB.x, ce.pB.y), ke = Te.x - pe.x, Oe = Te.y - pe.y, Ve = ke * ke + Oe * Oe;
          let Ae = Ve > 0 ? ((tt.x - pe.x) * ke + (tt.y - pe.y) * Oe) / Ve : 0;
          Ae = Math.max(0, Math.min(1, Ae));
          const rs = pe.x + Ae * ke, Rl = pe.y + Ae * Oe;
          if (Math.hypot(tt.x - rs, tt.y - Rl) <= de) {
            f(ce.id);
            return;
          }
        }
        for (const ce of [...h.zones].reverse()) {
          const pe = [ce.pA, ce.pB, ce.pC, ce.pD].map((Ae) => oe(Ae.x, Ae.y)), Te = Math.min(...pe.map((Ae) => Ae.x)), ke = Math.max(...pe.map((Ae) => Ae.x)), Oe = Math.min(...pe.map((Ae) => Ae.y)), Ve = Math.max(...pe.map((Ae) => Ae.y));
          if (tt.x >= Te - de && tt.x <= ke + de && tt.y >= Oe - de && tt.y <= Ve + de) {
            f(ce.id);
            return;
          }
        }
        f(null);
        return;
      }
      if (c !== "room" || !m || !S.current) return;
      const W = me(j.clientX, j.clientY), { bb: ie } = K.current, ue = Math.floor(W.x / _e) + ie.minX, ze = Math.floor(W.y / _e) + ie.minY, M = U.current.get(`${ue},${ze}`);
      M !== void 0 && m(M);
    },
    [c, m, me, h, f]
  ), ya = O.useMemo(() => {
    if (!Se || !S.current) return null;
    const j = S.current, G = j.width, W = j.height;
    return {
      left: `${Se.x / G * 100}%`,
      top: `${Se.y / W * 100}%`,
      width: `${Se.w / G * 100}%`,
      height: `${Se.h / W * 100}%`
    };
  }, [Se]), Za = O.useMemo(() => {
    if (!F || F.kind !== "zone" || !S.current) return null;
    const j = S.current;
    return {
      left: `${F.x / j.width * 100}%`,
      top: `${F.y / j.height * 100}%`,
      width: `${F.w / j.width * 100}%`,
      height: `${F.h / j.height * 100}%`
    };
  }, [F]), bn = O.useMemo(() => {
    if (!F || F.kind !== "wall" || !S.current) return null;
    const j = S.current, { pA: G, pB: W } = F, ie = j.width, ue = j.height, ze = (G.x + W.x) / 2, M = (G.y + W.y) / 2;
    return {
      cw: ie,
      ch: ue,
      pAStyle: { left: `${G.x / ie * 100}%`, top: `${G.y / ue * 100}%` },
      pBStyle: { left: `${W.x / ie * 100}%`, top: `${W.y / ue * 100}%` },
      midStyle: { left: `${ze / ie * 100}%`, top: `${M / ue * 100}%` }
    };
  }, [F]), Xt = O.useCallback(
    (j, G) => {
      G.stopPropagation(), G.currentTarget.setPointerCapture(G.pointerId), Se && (ee.current = {
        mode: j,
        startPtr: { x: G.clientX, y: G.clientY },
        startZone: { ...Se }
      });
    },
    [Se]
  ), Ka = O.useCallback(
    (j) => {
      if (!ee.current || !S.current) return;
      j.stopPropagation();
      const { mode: G, startPtr: W, startZone: ie } = ee.current, ue = S.current, ze = D.current;
      if (!ze) return;
      const M = ze.getBoundingClientRect(), tt = ue.width / M.width / $, yt = (j.clientX - W.x) * tt, te = (j.clientY - W.y) * tt;
      R((oe) => {
        if (!oe) return oe;
        const de = ue.width, ce = ue.height;
        if (G === "move")
          return {
            ...oe,
            x: Math.max(0, Math.min(de - ie.w, ie.x + yt)),
            y: Math.max(0, Math.min(ce - ie.h, ie.y + te))
          };
        {
          const Te = Math.max(20, Math.min(de - ie.x, ie.w + yt)), ke = Math.max(20, Math.min(ce - ie.y, ie.h + te));
          return { ...oe, w: Te, h: ke };
        }
      });
    },
    [$]
  ), fa = O.useCallback((j) => {
    j.stopPropagation(), ee.current = null;
  }, []), Qt = O.useCallback(() => {
    if (!(!F || !v)) {
      if (F.kind === "wall") {
        const j = ne(F.pA.x, F.pA.y), G = ne(F.pB.x, F.pB.y);
        v(
          "wall",
          { x: Math.round(j.x), y: Math.round(j.y) },
          { x: Math.round(G.x), y: Math.round(G.y) }
        );
      } else {
        const j = ne(F.x, F.y), G = ne(F.x + F.w, F.y + F.h);
        v(
          "zone",
          { x: Math.round(j.x), y: Math.round(j.y) },
          { x: Math.round(G.x), y: Math.round(G.y) }
        );
      }
      ve(null);
    }
  }, [F, ne, v]), xa = O.useCallback(
    (j, G) => {
      G.stopPropagation(), G.currentTarget.setPointerCapture(G.pointerId), !(!F || F.kind !== "zone") && (Ee.current = {
        mode: j,
        startPtr: { x: G.clientX, y: G.clientY },
        startItem: {
          x: F.x,
          y: F.y,
          w: F.w,
          h: F.h
        }
      });
    },
    [F]
  ), Sa = O.useCallback(
    (j) => {
      if (!Ee.current || !S.current) return;
      j.stopPropagation();
      const { mode: G, startPtr: W, startItem: ie } = Ee.current, ue = S.current, ze = D.current;
      if (!ze) return;
      const M = ze.getBoundingClientRect(), tt = ue.width / M.width / $, yt = (j.clientX - W.x) * tt, te = (j.clientY - W.y) * tt;
      ve((oe) => {
        if (!oe || oe.kind !== "zone") return oe;
        const de = ue.width, ce = ue.height;
        if (G === "move")
          return {
            ...oe,
            x: Math.max(0, Math.min(de - ie.w, ie.x + yt)),
            y: Math.max(0, Math.min(ce - ie.h, ie.y + te))
          };
        const pe = 20;
        return {
          ...oe,
          w: Math.max(pe, Math.min(de - ie.x, ie.w + yt)),
          h: Math.max(pe, Math.min(ce - ie.y, ie.h + te))
        };
      });
    },
    [$]
  ), la = O.useCallback((j) => {
    j.stopPropagation(), Ee.current = null;
  }, []), wa = O.useCallback(
    (j, G) => {
      G.stopPropagation(), G.currentTarget.setPointerCapture(G.pointerId), !(!F || F.kind !== "wall") && (x.current = {
        endpoint: j,
        startPtr: { x: G.clientX, y: G.clientY },
        startPoint: { ...F[j] }
      });
    },
    [F]
  ), Kn = O.useCallback(
    (j) => {
      if (!x.current || !S.current) return;
      j.stopPropagation();
      const { endpoint: G, startPtr: W, startPoint: ie } = x.current, ue = S.current, ze = D.current;
      if (!ze) return;
      const M = ze.getBoundingClientRect(), tt = ue.width / M.width / $, yt = (j.clientX - W.x) * tt, te = (j.clientY - W.y) * tt;
      ve((oe) => !oe || oe.kind !== "wall" ? oe : {
        ...oe,
        [G]: {
          x: Math.max(0, Math.min(ue.width, ie.x + yt)),
          y: Math.max(0, Math.min(ue.height, ie.y + te))
        }
      });
    },
    [$]
  ), dt = O.useCallback((j) => {
    j.stopPropagation(), x.current = null;
  }, []);
  let et = null, yn = null, ht = null;
  if (I && ge && S.current) {
    const j = S.current.width, G = S.current.height;
    if (c === "zone") {
      const W = Math.min(I.x, ge.x) / j * 100, ie = Math.min(I.y, ge.y) / G * 100, ue = Math.abs(ge.x - I.x) / j * 100, ze = Math.abs(ge.y - I.y) / G * 100;
      et = { left: `${W}%`, top: `${ie}%`, width: `${ue}%`, height: `${ze}%` };
    } else if (c === "restrictions" && h) {
      if (h.tool === "wall")
        ht = { x1: I.x, y1: I.y, x2: ge.x, y2: ge.y, cw: j, ch: G };
      else if (h.tool === "no_go" || h.tool === "no_mop") {
        const W = Math.min(I.x, ge.x) / j * 100, ie = Math.min(I.y, ge.y) / G * 100, ue = Math.abs(ge.x - I.x) / j * 100, ze = Math.abs(ge.y - I.y) / G * 100;
        yn = { left: `${W}%`, top: `${ie}%`, width: `${ue}%`, height: `${ze}%` };
      }
    }
  }
  const Xa = c === "zone", Qa = c === "room" && !!m, xn = c === "restrictions", Sn = h?.tool ?? "select";
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: D,
      className: `valetudo-map-canvas${Xa ? " valetudo-map-canvas--zone-mode" : ""}${Qa ? " valetudo-map-canvas--room-mode" : ""}${xn ? ` valetudo-map-canvas--restrictions-${Sn}` : ""}`,
      onClick: ba,
      onPointerDown: ye,
      onPointerMove: ot,
      onPointerUp: Pe,
      onPointerCancel: Pe,
      children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "valetudo-map-canvas__inner",
            style: { transform: `translate(${L.x}px, ${L.y}px) scale(${$})` },
            children: [
              /* @__PURE__ */ r.jsx("canvas", { ref: S, className: "valetudo-map-canvas__canvas" }),
              et && /* @__PURE__ */ r.jsx("div", { className: "valetudo-map-canvas__zone-drag", style: et }),
              yn && /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: `valetudo-map-canvas__restriction-preview valetudo-map-canvas__restriction-preview--${h?.tool}`,
                  style: yn
                }
              ),
              ht && /* @__PURE__ */ r.jsxs(
                "svg",
                {
                  className: "valetudo-map-canvas__restriction-preview-svg",
                  style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    overflow: "visible"
                  },
                  viewBox: `0 0 ${ht.cw} ${ht.ch}`,
                  preserveAspectRatio: "none",
                  children: [
                    /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        x1: ht.x1,
                        y1: ht.y1,
                        x2: ht.x2,
                        y2: ht.y2,
                        stroke: "rgba(244,67,54,0.9)",
                        strokeWidth: _e * 2,
                        strokeLinecap: "round"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "circle",
                      {
                        cx: ht.x1,
                        cy: ht.y1,
                        r: _e * 1.5,
                        fill: "rgba(244,67,54,0.9)"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "circle",
                      {
                        cx: ht.x2,
                        cy: ht.y2,
                        r: _e * 1.5,
                        fill: "rgba(244,67,54,0.9)"
                      }
                    )
                  ]
                }
              ),
              Xa && P && Se && ya && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-map-canvas__widget-zone", style: ya, children: [
                /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: "valetudo-map-canvas__widget-zone-move",
                    onPointerDown: (j) => Xt("move", j),
                    onPointerMove: Ka,
                    onPointerUp: fa,
                    onPointerCancel: fa
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: "valetudo-map-canvas__widget-zone-resize",
                    onPointerDown: (j) => Xt("resize", j),
                    onPointerMove: Ka,
                    onPointerUp: fa,
                    onPointerCancel: fa
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    className: "valetudo-map-canvas__widget-zone-delete",
                    onPointerDown: (j) => j.stopPropagation(),
                    onClick: (j) => {
                      j.stopPropagation(), R(null), g?.(null);
                    },
                    type: "button",
                    children: "×"
                  }
                )
              ] }),
              xn && P && F?.kind === "zone" && Za && /* @__PURE__ */ r.jsxs(
                "div",
                {
                  className: `valetudo-map-canvas__pending-restriction valetudo-map-canvas__pending-restriction--${F.type}`,
                  style: Za,
                  children: [
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "valetudo-map-canvas__pending-restriction-move",
                        onPointerDown: (j) => xa("move", j),
                        onPointerMove: Sa,
                        onPointerUp: la,
                        onPointerCancel: la
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "valetudo-map-canvas__pending-restriction-resize",
                        onPointerDown: (j) => xa("resize", j),
                        onPointerMove: Sa,
                        onPointerUp: la,
                        onPointerCancel: la
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        className: "valetudo-map-canvas__pending-restriction-delete",
                        onPointerDown: (j) => j.stopPropagation(),
                        onClick: (j) => {
                          j.stopPropagation(), ve(null);
                        },
                        type: "button",
                        children: "×"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        className: "valetudo-map-canvas__pending-restriction-confirm",
                        onPointerDown: (j) => j.stopPropagation(),
                        onClick: (j) => {
                          j.stopPropagation(), Qt();
                        },
                        type: "button",
                        children: "✓"
                      }
                    )
                  ]
                }
              ),
              xn && P && F?.kind === "wall" && bn && (() => {
                const j = F, G = bn;
                return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                  /* @__PURE__ */ r.jsx(
                    "svg",
                    {
                      style: {
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        overflow: "visible"
                      },
                      viewBox: `0 0 ${G.cw} ${G.ch}`,
                      preserveAspectRatio: "none",
                      children: /* @__PURE__ */ r.jsx(
                        "line",
                        {
                          x1: j.pA.x,
                          y1: j.pA.y,
                          x2: j.pB.x,
                          y2: j.pB.y,
                          stroke: "rgba(244,67,54,0.9)",
                          strokeWidth: _e * 2,
                          strokeLinecap: "round"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      className: "valetudo-map-canvas__wall-endpoint",
                      style: { position: "absolute", ...G.pAStyle, transform: "translate(-50%, -50%)" },
                      onPointerDown: (W) => wa("pA", W),
                      onPointerMove: Kn,
                      onPointerUp: dt,
                      onPointerCancel: dt
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      className: "valetudo-map-canvas__wall-endpoint",
                      style: { position: "absolute", ...G.pBStyle, transform: "translate(-50%, -50%)" },
                      onPointerDown: (W) => wa("pB", W),
                      onPointerMove: Kn,
                      onPointerUp: dt,
                      onPointerCancel: dt
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      className: "valetudo-map-canvas__wall-action-btn valetudo-map-canvas__wall-action-btn--delete",
                      style: { position: "absolute", ...G.midStyle, transform: "translate(-50%, -160%)" },
                      onPointerDown: (W) => W.stopPropagation(),
                      onClick: (W) => {
                        W.stopPropagation(), ve(null);
                      },
                      type: "button",
                      children: "×"
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      className: "valetudo-map-canvas__wall-action-btn valetudo-map-canvas__wall-action-btn--confirm",
                      style: { position: "absolute", ...G.midStyle, transform: "translate(-50%, 60%)" },
                      onPointerDown: (W) => W.stopPropagation(),
                      onClick: (W) => {
                        W.stopPropagation(), Qt();
                      },
                      type: "button",
                      children: "✓"
                    }
                  )
                ] });
              })()
            ]
          }
        ),
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "valetudo-map-canvas__bottom-controls",
            onPointerDown: (j) => j.stopPropagation(),
            onPointerUp: (j) => j.stopPropagation(),
            children: [
              w && c !== "restrictions" && /* @__PURE__ */ r.jsxs(
                "button",
                {
                  type: "button",
                  className: "valetudo-map-canvas__iterations-btn",
                  title: N("valetudo.cleaning.iterations"),
                  onClick: (j) => {
                    j.stopPropagation(), w(p >= 4 ? 1 : p + 1);
                  },
                  children: [
                    p,
                    "×"
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs("div", { className: "valetudo-map-canvas__zoom-controls", children: [
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (j) => {
                      j.stopPropagation(), Z((G) => Math.min(8, G * 1.5));
                    },
                    children: "+"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (j) => {
                      j.stopPropagation(), Z((G) => {
                        const W = Math.max(1, G / 1.5);
                        return W <= 1 ? (ae({ x: 0, y: 0 }), 1) : W;
                      });
                    },
                    children: "−"
                  }
                ),
                $ > 1 && /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (j) => {
                      j.stopPropagation(), Z(1), ae({ x: 0, y: 0 });
                    },
                    style: { fontSize: "0.7rem" },
                    children: "✕"
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}
const d_ = [sg, cg, rg, ug], f_ = [/* @__PURE__ */ r.jsx(ls, { size: 20 }), /* @__PURE__ */ r.jsx(W_, { size: 20 }), /* @__PURE__ */ r.jsx(i_, { size: 20 }), /* @__PURE__ */ r.jsx(i_, { size: 20 })];
function m_(o) {
  return o.charAt(0).toUpperCase() + o.slice(1);
}
function J1({
  opened: o,
  onClose: c,
  fanEntity: s,
  waterEntity: u,
  onFanChange: g,
  onWaterChange: m,
  disabled: h,
  language: b,
  onStartMapping: v
}) {
  const { t: f } = Ke(b), p = s?.attributes?.options ?? [], w = u?.attributes?.options ?? [], k = s?.state ?? "", N = u?.state ?? "", S = w.length > 0, D = w[0] ?? "", K = S ? N === D ? "dry" : p.indexOf(k) <= 1 ? "wet" : "both" : "dry", [U, $] = O.useState(K), Z = U === "dry" || U === "both", L = (U === "wet" || U === "both") && S, ae = (J) => {
    h || ($(J), J === "dry" && S ? m(D) : J === "wet" ? (p.length > 0 && g(p[0]), w.length > 0 && m(w[w.length - 1])) : J === "both" && (p.length > 0 && g(p[Math.floor(p.length / 2)]), w.length > 1 && m(w[Math.floor(w.length / 2)])));
  }, V = [
    { key: "dry", label: f("valetudo.cleaning.dry"), icon: Xr },
    ...S ? [
      { key: "both", label: f("valetudo.cleaning.both"), icon: Oi },
      { key: "wet", label: f("valetudo.cleaning.wet"), icon: Qr }
    ] : []
  ], Y = () => {
    h || !v || !window.confirm(f("valetudo.cleaning.mapping_warning_overwrite")) || !window.confirm(f("valetudo.cleaning.mapping_warning_loss")) || (v(), c());
  };
  return /* @__PURE__ */ r.jsx(Di, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal", children: /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__content-wrapper", children: /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__content", children: [
    /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: f("valetudo.cleaning.mode_title") }),
      /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__mode-grid", children: [
        V.map((J) => /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: `cleaning-mode-modal__mode-card${U === J.key ? " cleaning-mode-modal__mode-card--selected" : ""}`,
            onClick: () => ae(J.key),
            role: "button",
            tabIndex: 0,
            onKeyDown: (le) => le.key === "Enter" && ae(J.key),
            children: [
              /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__mode-icon", children: J.icon }),
              /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__mode-label", children: J.label }),
              U === J.key && /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__mode-checkmark", children: /* @__PURE__ */ r.jsx("span", { children: "✓" }) })
            ]
          },
          J.key
        )),
        v && /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "cleaning-mode-modal__mode-card cleaning-mode-modal__mode-card--mapping",
            onClick: Y,
            role: "button",
            tabIndex: 0,
            onKeyDown: (J) => J.key === "Enter" && Y(),
            children: [
              /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__mode-icon", children: /* @__PURE__ */ r.jsx(os, { size: 24 }) }),
              /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__mode-label", children: f("valetudo.cleaning.mapping") })
            ]
          }
        )
      ] })
    ] }),
    Z && p.length > 0 && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsxs("h3", { className: "cleaning-mode-modal__section-title", children: [
        "💨 ",
        f("valetudo.cleaning.suction_power")
      ] }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "cleaning-mode-modal__power-grid",
          style: { gridTemplateColumns: `repeat(${p.length}, 1fr)` },
          children: p.map((J, le) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__power-option", children: [
            /* @__PURE__ */ r.jsx(
              Ri,
              {
                size: "small",
                selected: J === k,
                onClick: () => !h && g(J),
                icon: d_[Math.min(le, d_.length - 1)]
              }
            ),
            /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__power-label", children: m_(J) })
          ] }, J))
        }
      )
    ] }),
    L && w.length > 0 && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsxs("h3", { className: "cleaning-mode-modal__section-title", children: [
        "💧 ",
        f("valetudo.cleaning.water_level")
      ] }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "cleaning-mode-modal__power-grid",
          style: { gridTemplateColumns: `repeat(${w.length}, 1fr)` },
          children: w.map((J, le) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__power-option", children: [
            /* @__PURE__ */ r.jsx(
              Ri,
              {
                size: "small",
                selected: J === N,
                onClick: () => !h && m(J),
                icon: f_[Math.min(le, f_.length - 1)]
              }
            ),
            /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__power-label", children: m_(J) })
          ] }, J))
        }
      )
    ] })
  ] }) }) }) });
}
const I1 = {
  mainBrush: 18e3,
  // 300 h
  rightBrush: 12e3,
  // 200 h
  mainFilter: 9e3,
  // 150 h
  sensorCleaning: 1800
  // 30 h
};
function W1(o) {
  if (o <= 0) return "Заменить";
  const c = Math.floor(o / 60), s = o % 60;
  return c >= 10 ? `${c} ч` : c > 0 ? `${c} ч ${s} м` : `${s} м`;
}
function __(o) {
  const c = Math.floor(o / 60), s = Math.floor(c / 60), u = c % 60;
  return s > 0 ? `${s} h ${u} m` : `${c} m`;
}
function g_(o) {
  const c = o / 1e4;
  return `${c < 10 ? c.toFixed(1) : Math.round(c)} m²`;
}
function Jo({ label: o, entity: c, maxKey: s, onReset: u, t: g }) {
  const m = c?.state, h = m && !["unavailable", "unknown"].includes(m) ? Number(m) : null, b = I1[s] ?? 1, v = h !== null ? Math.max(0, Math.min(100, Math.round(h / b * 100))) : null, f = h !== null && h <= 0, p = v === null || v > 50 ? "var(--accent-color, #007aff)" : v > 20 ? "var(--warning-color, #ff9500)" : "var(--error-color, #ff3b30)", w = h === null ? "" : f ? g("valetudo.panel.needs_replacement") : g("valetudo.panel.remaining", { time: W1(h) });
  return /* @__PURE__ */ r.jsxs("div", { className: "consumable-row", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "consumable-row__header", children: [
      /* @__PURE__ */ r.jsx("span", { className: "consumable-row__label", children: o }),
      /* @__PURE__ */ r.jsx(
        "span",
        {
          className: `consumable-row__value${f ? " consumable-row__value--depleted" : ""}`,
          title: w,
          children: v !== null ? f ? g("valetudo.panel.replace") : `${v}%` : "—"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "consumable-row__reset-btn",
          onClick: u,
          type: "button",
          title: g("valetudo.panel.reset"),
          "aria-label": `${g("valetudo.panel.reset")}: ${o}`,
          children: "↺"
        }
      )
    ] }),
    v !== null && /* @__PURE__ */ r.jsx("div", { className: "consumable-progress", children: /* @__PURE__ */ r.jsx("div", { className: "consumable-progress__fill", style: { width: `${v}%`, background: p } }) })
  ] });
}
function F1({
  opened: o,
  onClose: c,
  hass: s,
  vacuumEntity: u,
  fanEntity: g,
  waterEntity: m,
  batteryEntity: h,
  segmentsEntity: b,
  wifiEntity: v,
  mainBrushEntity: f,
  rightBrushEntity: p,
  mainFilterEntity: w,
  sensorCleaningEntity: k,
  totalStatsAreaEntity: N,
  totalStatsTimeEntity: S,
  totalStatsCountEntity: D,
  currentStatsAreaEntity: K,
  currentStatsTimeEntity: U,
  carpetModeEntity: $,
  entityIds: Z,
  valetudoUrl: L,
  language: ae
}) {
  const { t: V } = Ke(ae), Y = {
    docked: V("valetudo.status.docked"),
    cleaning: V("valetudo.status.cleaning"),
    paused: V("valetudo.status.paused"),
    returning: V("valetudo.status.returning"),
    idle: V("valetudo.status.idle"),
    error: V("valetudo.status.error")
  }[u.state] ?? u.state, J = h ? Number(h.state) : null, le = v?.attributes, I = le?.ssid ?? "—", se = le?.ips?.[0] ?? "—", ge = v?.state && !["unavailable", "unknown"].includes(v.state) ? `${v.state} ${V("valetudo.panel.dbm")}` : "—", Ne = N?.state, Ce = S?.state, Se = D?.state, R = Ne && !["unavailable", "unknown"].includes(Ne) ? Number(Ne) : null, ee = Ce && !["unavailable", "unknown"].includes(Ce) ? Number(Ce) : null, F = Se && !["unavailable", "unknown"].includes(Se) ? Se : null, ve = K?.state, Ee = U?.state, x = ve && !["unavailable", "unknown"].includes(ve) ? Number(ve) : null, H = Ee && !["unavailable", "unknown"].includes(Ee) ? Number(Ee) : null, P = b ? Object.entries(b.attributes).filter(([ye]) => !isNaN(Number(ye))).map(([, ye]) => String(ye)) : [], ne = $?.state === "on", xe = (ye) => {
    s.callService("button", "press", { entity_id: ye });
  }, me = () => {
    s.callService("switch", ne ? "turn_off" : "turn_on", { entity_id: Z.carpetMode });
  };
  return /* @__PURE__ */ r.jsx(Di, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-panel", children: [
    /* @__PURE__ */ r.jsx("h2", { className: "valetudo-settings-panel__title", children: V("valetudo.panel.title") }),
    /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-panel__scroll", children: [
      /* @__PURE__ */ r.jsx(Zt, { title: V("valetudo.panel.device"), icon: /* @__PURE__ */ r.jsx(F_, {}), defaultOpen: !0, children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section", children: [
        [
          { label: V("valetudo.panel.status"), value: Y },
          J !== null && !isNaN(J) ? { label: V("valetudo.panel.battery"), value: `${J}%` } : null,
          { label: V("valetudo.panel.wifi"), value: I },
          { label: V("valetudo.panel.signal"), value: ge },
          { label: V("valetudo.panel.ip_address"), value: se }
        ].filter(Boolean).map((ye) => /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: ye.label }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: ye.value })
        ] }, ye.label)),
        (L || se && se !== "—") && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row valetudo-settings-section__row--link", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.valetudo_ui") }),
          /* @__PURE__ */ r.jsxs(
            "a",
            {
              className: "valetudo-settings-section__link",
              href: L || `http://${se}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [
                /* @__PURE__ */ r.jsx(V0, { size: 14 }),
                /* @__PURE__ */ r.jsx("span", { children: V("valetudo.panel.open") })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: V("valetudo.panel.consumables"), icon: /* @__PURE__ */ r.jsx(Jv, {}), defaultOpen: !0, children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section valetudo-settings-section--consumables", children: [
        /* @__PURE__ */ r.jsx(
          Jo,
          {
            label: V("valetudo.panel.main_brush"),
            entity: f,
            maxKey: "mainBrush",
            onReset: () => xe(Z.resetMainBrush),
            t: V
          }
        ),
        /* @__PURE__ */ r.jsx(
          Jo,
          {
            label: V("valetudo.panel.side_brush"),
            entity: p,
            maxKey: "rightBrush",
            onReset: () => xe(Z.resetRightBrush),
            t: V
          }
        ),
        /* @__PURE__ */ r.jsx(
          Jo,
          {
            label: V("valetudo.panel.filter"),
            entity: w,
            maxKey: "mainFilter",
            onReset: () => xe(Z.resetMainFilter),
            t: V
          }
        ),
        /* @__PURE__ */ r.jsx(
          Jo,
          {
            label: V("valetudo.panel.sensors"),
            entity: k,
            maxKey: "sensorCleaning",
            onReset: () => xe(Z.resetSensorCleaning),
            t: V
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: V("valetudo.panel.statistics"), icon: /* @__PURE__ */ r.jsx(M0, {}), children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section", children: [
        F !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.total_cleanings") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: F })
        ] }),
        R !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.total_area") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: g_(R) })
        ] }),
        ee !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.total_time") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: __(ee) })
        ] }),
        (x !== null || H !== null) && /* @__PURE__ */ r.jsx("div", { className: "valetudo-settings-section__divider" }),
        x !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.current_area") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: g_(x) })
        ] }),
        H !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.current_time") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: __(H) })
        ] })
      ] }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: V("valetudo.panel.cleaning_settings"), icon: /* @__PURE__ */ r.jsx(eg, {}), children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section", children: [
        $ && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row valetudo-settings-section__row--toggle", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.carpet_mode") }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: `valetudo-toggle${ne ? " valetudo-toggle--on" : ""}`,
              onClick: me,
              type: "button",
              "aria-label": V("valetudo.panel.carpet_mode"),
              "aria-pressed": ne,
              children: /* @__PURE__ */ r.jsx("span", { className: "valetudo-toggle__thumb" })
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.cleaning.suction_power") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: g?.state ?? "—" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.cleaning.water_level") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: m?.state ?? "—" })
        ] })
      ] }) }),
      P.length > 0 && /* @__PURE__ */ r.jsx(Zt, { title: V("valetudo.panel.rooms"), icon: /* @__PURE__ */ r.jsx(P_, {}), children: /* @__PURE__ */ r.jsx("div", { className: "valetudo-settings-section", children: P.map((ye, ot) => /* @__PURE__ */ r.jsx("div", { className: "valetudo-settings-section__row", children: /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: ye }) }, ot)) }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: V("valetudo.panel.configuration"), icon: /* @__PURE__ */ r.jsx(B0, {}), children: /* @__PURE__ */ r.jsx("div", { className: "valetudo-settings-section", children: Object.entries(Z).map(([ye, ot]) => /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
        /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label valetudo-settings-section__label--mono", children: ye }),
        /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value valetudo-settings-section__value--mono", children: ot })
      ] }, ye)) }) })
    ] })
  ] }) });
}
function P1({
  restrictions: o,
  onToolChange: c,
  onDeleteSelected: s,
  onSave: u,
  saving: g,
  language: m
}) {
  const { t: h } = Ke(m), { tool: b, selectedId: v, dirty: f } = o, p = [
    { key: "select", label: h("valetudo.restrictions.select"), icon: /* @__PURE__ */ r.jsx(lv, { size: 14 }) },
    { key: "wall", label: h("valetudo.restrictions.wall"), icon: /* @__PURE__ */ r.jsx(nv, { size: 14 }) },
    { key: "no_go", label: h("valetudo.restrictions.no_go"), icon: /* @__PURE__ */ r.jsx(Uv, { size: 14 }) },
    { key: "no_mop", label: h("valetudo.restrictions.no_mop"), icon: /* @__PURE__ */ r.jsx(W_, { size: 14 }) }
  ];
  return /* @__PURE__ */ r.jsxs("div", { className: "rt", children: [
    /* @__PURE__ */ r.jsx("div", { className: "rt__seg", children: p.map((w) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: `rt__seg-btn rt__seg-btn--${w.key}${b === w.key ? " rt__seg-btn--active" : ""}`,
        onClick: () => c(w.key),
        title: w.label,
        children: [
          w.icon,
          /* @__PURE__ */ r.jsx("span", { children: w.label })
        ]
      },
      w.key
    )) }),
    /* @__PURE__ */ r.jsxs("div", { className: "rt__actions", children: [
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "button",
          className: "rt__action-btn rt__action-btn--delete",
          onClick: s,
          disabled: !v,
          title: h("valetudo.restrictions.delete_selected"),
          children: /* @__PURE__ */ r.jsx(qv, { size: 14 })
        }
      ),
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: `rt__action-btn rt__action-btn--save${f ? " rt__action-btn--save-dirty" : ""}`,
          onClick: u,
          disabled: g || !f,
          title: h(f ? "valetudo.restrictions.save_changes" : "valetudo.restrictions.no_changes"),
          children: [
            /* @__PURE__ */ r.jsx(bv, { size: 14 }),
            /* @__PURE__ */ r.jsx("span", { children: g ? "…" : h("valetudo.restrictions.save") })
          ]
        }
      )
    ] })
  ] });
}
function ey({ hass: o, entityIds: c, onSuccess: s, language: u = "en" }) {
  const { t: g } = Ke(u), m = O.useCallback(() => {
    o.callService("vacuum", "start", { entity_id: c.vacuum }), s?.(g("toast.starting_full_clean"));
  }, [o, c.vacuum, s, g]), h = O.useCallback(() => {
    o.callService("vacuum", "pause", { entity_id: c.vacuum }), s?.(g("toast.pausing_vacuum"));
  }, [o, c.vacuum, s, g]), b = O.useCallback(() => {
    o.callService("vacuum", "stop", { entity_id: c.vacuum }), o.callService("vacuum", "return_to_base", { entity_id: c.vacuum }), s?.(g("toast.stopping_vacuum"));
  }, [o, c.vacuum, s, g]), v = O.useCallback(() => {
    o.callService("vacuum", "return_to_base", { entity_id: c.vacuum }), s?.(g("toast.vacuum_docking"));
  }, [o, c.vacuum, s, g]), f = O.useCallback(() => {
    o.callService("vacuum", "start", { entity_id: c.vacuum });
  }, [o, c.vacuum]), p = O.useCallback(
    (S, D, K = 1) => {
      const U = c.mqttIdentifier;
      if (!U) {
        s?.("⚠️ Добавь valetudo_identifier в конфиг карты (например: HarshSillyPigeon)");
        return;
      }
      o.callService("mqtt", "publish", {
        topic: `valetudo/${U}/MapSegmentationCapability/clean/set`,
        payload: JSON.stringify({
          segment_ids: S.map(String),
          iterations: K,
          customOrder: !1
        }),
        retain: !1
      }), s?.(g(D === 1 ? "toast.starting_room_clean" : "toast.starting_room_clean_plural", { count: String(D) }));
    },
    [o, c.mqttIdentifier, s, g]
  ), w = O.useCallback(
    (S) => {
      o.callService("select", "select_option", {
        entity_id: c.fan,
        option: S
      });
    },
    [o, c.fan]
  ), k = O.useCallback(
    (S) => {
      o.callService("select", "select_option", {
        entity_id: c.water,
        option: S
      });
    },
    [o, c.water]
  ), N = O.useCallback(
    (S, D, K, U = 1) => {
      switch (S) {
        case "all":
          m();
          break;
        case "room":
          D.size > 0 ? p(Array.from(D.keys()), D.size, U) : s?.(g("toast.select_rooms_first"));
          break;
        case "zone":
          if (K) {
            const $ = c.mqttIdentifier;
            if (!$) {
              s?.("⚠️ Добавь valetudo_identifier в конфиг карты (например: HarshSillyPigeon)");
              break;
            }
            const { x1: Z, y1: L, x2: ae, y2: V } = K, Y = Math.round(Math.min(Z, ae)), J = Math.round(Math.max(Z, ae)), le = Math.round(Math.min(L, V)), I = Math.round(Math.max(L, V)), se = J - Y, ge = I - le, Ne = {
              zones: [
                {
                  points: {
                    pA: { x: Y, y: le },
                    pB: { x: J, y: le },
                    pC: { x: J, y: I },
                    pD: { x: Y, y: I }
                  }
                }
              ],
              iterations: U
            };
            console.log("[Valetudo] Zone payload:", JSON.stringify(Ne)), o.callService("mqtt", "publish", {
              topic: `valetudo/${$}/ZoneCleaningCapability/start/set`,
              payload: JSON.stringify(Ne),
              retain: !1
            }), s?.(`Уборка зоны запущена (${se}×${ge}мм, ${U}×)`);
          } else
            s?.("Нарисуй зону на карте");
          break;
      }
    },
    [m, p, o, c.mqttIdentifier, s, g]
  );
  return {
    handleStart: m,
    handlePause: h,
    handleStop: b,
    handleDock: v,
    handleResume: f,
    handleCleanSegments: p,
    handleSetFanSpeed: w,
    handleSetWater: k,
    handleClean: N
  };
}
function Ui(o) {
  let c = o.length;
  for (; --c >= 0; )
    o[c] = 0;
}
const ty = 3, ay = 258, yg = 29, ny = 256, iy = ny + 1 + yg, xg = 30, ly = 512, oy = new Array((iy + 2) * 2);
Ui(oy);
const sy = new Array(xg * 2);
Ui(sy);
const cy = new Array(ly);
Ui(cy);
const ry = new Array(ay - ty + 1);
Ui(ry);
const uy = new Array(yg);
Ui(uy);
const dy = new Array(xg);
Ui(dy);
const fy = (o, c, s, u) => {
  let g = o & 65535 | 0, m = o >>> 16 & 65535 | 0, h = 0;
  for (; s !== 0; ) {
    h = s > 2e3 ? 2e3 : s, s -= h;
    do
      g = g + c[u++] | 0, m = m + g | 0;
    while (--h);
    g %= 65521, m %= 65521;
  }
  return g | m << 16 | 0;
};
var Hr = fy;
const my = () => {
  let o, c = [];
  for (var s = 0; s < 256; s++) {
    o = s;
    for (var u = 0; u < 8; u++)
      o = o & 1 ? 3988292384 ^ o >>> 1 : o >>> 1;
    c[s] = o;
  }
  return c;
}, _y = new Uint32Array(my()), gy = (o, c, s, u) => {
  const g = _y, m = u + s;
  o ^= -1;
  for (let h = u; h < m; h++)
    o = o >>> 8 ^ g[(o ^ c[h]) & 255];
  return o ^ -1;
};
var ha = gy, Vr = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, Sg = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const py = (o, c) => Object.prototype.hasOwnProperty.call(o, c);
var hy = function(o) {
  const c = Array.prototype.slice.call(arguments, 1);
  for (; c.length; ) {
    const s = c.shift();
    if (s) {
      if (typeof s != "object")
        throw new TypeError(s + "must be non-object");
      for (const u in s)
        py(s, u) && (o[u] = s[u]);
    }
  }
  return o;
}, vy = (o) => {
  let c = 0;
  for (let u = 0, g = o.length; u < g; u++)
    c += o[u].length;
  const s = new Uint8Array(c);
  for (let u = 0, g = 0, m = o.length; u < m; u++) {
    let h = o[u];
    s.set(h, g), g += h.length;
  }
  return s;
}, wg = {
  assign: hy,
  flattenChunks: vy
};
let zg = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  zg = !1;
}
const jl = new Uint8Array(256);
for (let o = 0; o < 256; o++)
  jl[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
jl[254] = jl[254] = 1;
var by = (o) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(o);
  let c, s, u, g, m, h = o.length, b = 0;
  for (g = 0; g < h; g++)
    s = o.charCodeAt(g), (s & 64512) === 55296 && g + 1 < h && (u = o.charCodeAt(g + 1), (u & 64512) === 56320 && (s = 65536 + (s - 55296 << 10) + (u - 56320), g++)), b += s < 128 ? 1 : s < 2048 ? 2 : s < 65536 ? 3 : 4;
  for (c = new Uint8Array(b), m = 0, g = 0; m < b; g++)
    s = o.charCodeAt(g), (s & 64512) === 55296 && g + 1 < h && (u = o.charCodeAt(g + 1), (u & 64512) === 56320 && (s = 65536 + (s - 55296 << 10) + (u - 56320), g++)), s < 128 ? c[m++] = s : s < 2048 ? (c[m++] = 192 | s >>> 6, c[m++] = 128 | s & 63) : s < 65536 ? (c[m++] = 224 | s >>> 12, c[m++] = 128 | s >>> 6 & 63, c[m++] = 128 | s & 63) : (c[m++] = 240 | s >>> 18, c[m++] = 128 | s >>> 12 & 63, c[m++] = 128 | s >>> 6 & 63, c[m++] = 128 | s & 63);
  return c;
};
const yy = (o, c) => {
  if (c < 65534 && o.subarray && zg)
    return String.fromCharCode.apply(null, o.length === c ? o : o.subarray(0, c));
  let s = "";
  for (let u = 0; u < c; u++)
    s += String.fromCharCode(o[u]);
  return s;
};
var xy = (o, c) => {
  const s = c || o.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(o.subarray(0, c));
  let u, g;
  const m = new Array(s * 2);
  for (g = 0, u = 0; u < s; ) {
    let h = o[u++];
    if (h < 128) {
      m[g++] = h;
      continue;
    }
    let b = jl[h];
    if (b > 4) {
      m[g++] = 65533, u += b - 1;
      continue;
    }
    for (h &= b === 2 ? 31 : b === 3 ? 15 : 7; b > 1 && u < s; )
      h = h << 6 | o[u++] & 63, b--;
    if (b > 1) {
      m[g++] = 65533;
      continue;
    }
    h < 65536 ? m[g++] = h : (h -= 65536, m[g++] = 55296 | h >> 10 & 1023, m[g++] = 56320 | h & 1023);
  }
  return yy(m, g);
}, Sy = (o, c) => {
  c = c || o.length, c > o.length && (c = o.length);
  let s = c - 1;
  for (; s >= 0 && (o[s] & 192) === 128; )
    s--;
  return s < 0 || s === 0 ? c : s + jl[o[s]] > c ? s : c;
}, qr = {
  string2buf: by,
  buf2string: xy,
  utf8border: Sy
};
function wy() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var zy = wy;
const Io = 16209, Ny = 16191;
var Ey = function(c, s) {
  let u, g, m, h, b, v, f, p, w, k, N, S, D, K, U, $, Z, L, ae, V, Y, J, le, I;
  const se = c.state;
  u = c.next_in, le = c.input, g = u + (c.avail_in - 5), m = c.next_out, I = c.output, h = m - (s - c.avail_out), b = m + (c.avail_out - 257), v = se.dmax, f = se.wsize, p = se.whave, w = se.wnext, k = se.window, N = se.hold, S = se.bits, D = se.lencode, K = se.distcode, U = (1 << se.lenbits) - 1, $ = (1 << se.distbits) - 1;
  e:
    do {
      S < 15 && (N += le[u++] << S, S += 8, N += le[u++] << S, S += 8), Z = D[N & U];
      t:
        for (; ; ) {
          if (L = Z >>> 24, N >>>= L, S -= L, L = Z >>> 16 & 255, L === 0)
            I[m++] = Z & 65535;
          else if (L & 16) {
            ae = Z & 65535, L &= 15, L && (S < L && (N += le[u++] << S, S += 8), ae += N & (1 << L) - 1, N >>>= L, S -= L), S < 15 && (N += le[u++] << S, S += 8, N += le[u++] << S, S += 8), Z = K[N & $];
            a:
              for (; ; ) {
                if (L = Z >>> 24, N >>>= L, S -= L, L = Z >>> 16 & 255, L & 16) {
                  if (V = Z & 65535, L &= 15, S < L && (N += le[u++] << S, S += 8, S < L && (N += le[u++] << S, S += 8)), V += N & (1 << L) - 1, V > v) {
                    c.msg = "invalid distance too far back", se.mode = Io;
                    break e;
                  }
                  if (N >>>= L, S -= L, L = m - h, V > L) {
                    if (L = V - L, L > p && se.sane) {
                      c.msg = "invalid distance too far back", se.mode = Io;
                      break e;
                    }
                    if (Y = 0, J = k, w === 0) {
                      if (Y += f - L, L < ae) {
                        ae -= L;
                        do
                          I[m++] = k[Y++];
                        while (--L);
                        Y = m - V, J = I;
                      }
                    } else if (w < L) {
                      if (Y += f + w - L, L -= w, L < ae) {
                        ae -= L;
                        do
                          I[m++] = k[Y++];
                        while (--L);
                        if (Y = 0, w < ae) {
                          L = w, ae -= L;
                          do
                            I[m++] = k[Y++];
                          while (--L);
                          Y = m - V, J = I;
                        }
                      }
                    } else if (Y += w - L, L < ae) {
                      ae -= L;
                      do
                        I[m++] = k[Y++];
                      while (--L);
                      Y = m - V, J = I;
                    }
                    for (; ae > 2; )
                      I[m++] = J[Y++], I[m++] = J[Y++], I[m++] = J[Y++], ae -= 3;
                    ae && (I[m++] = J[Y++], ae > 1 && (I[m++] = J[Y++]));
                  } else {
                    Y = m - V;
                    do
                      I[m++] = I[Y++], I[m++] = I[Y++], I[m++] = I[Y++], ae -= 3;
                    while (ae > 2);
                    ae && (I[m++] = I[Y++], ae > 1 && (I[m++] = I[Y++]));
                  }
                } else if ((L & 64) === 0) {
                  Z = K[(Z & 65535) + (N & (1 << L) - 1)];
                  continue a;
                } else {
                  c.msg = "invalid distance code", se.mode = Io;
                  break e;
                }
                break;
              }
          } else if ((L & 64) === 0) {
            Z = D[(Z & 65535) + (N & (1 << L) - 1)];
            continue t;
          } else if (L & 32) {
            se.mode = Ny;
            break e;
          } else {
            c.msg = "invalid literal/length code", se.mode = Io;
            break e;
          }
          break;
        }
    } while (u < g && m < b);
  ae = S >> 3, u -= ae, S -= ae << 3, N &= (1 << S) - 1, c.next_in = u, c.next_out = m, c.avail_in = u < g ? 5 + (g - u) : 5 - (u - g), c.avail_out = m < b ? 257 + (b - m) : 257 - (m - b), se.hold = N, se.bits = S;
};
const Ti = 15, p_ = 852, h_ = 592, v_ = 0, jr = 1, b_ = 2, My = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), ky = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), Ay = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), Cy = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), jy = (o, c, s, u, g, m, h, b) => {
  const v = b.bits;
  let f = 0, p = 0, w = 0, k = 0, N = 0, S = 0, D = 0, K = 0, U = 0, $ = 0, Z, L, ae, V, Y, J = null, le;
  const I = new Uint16Array(Ti + 1), se = new Uint16Array(Ti + 1);
  let ge = null, Ne, Ce, Se;
  for (f = 0; f <= Ti; f++)
    I[f] = 0;
  for (p = 0; p < u; p++)
    I[c[s + p]]++;
  for (N = v, k = Ti; k >= 1 && I[k] === 0; k--)
    ;
  if (N > k && (N = k), k === 0)
    return g[m++] = 1 << 24 | 64 << 16 | 0, g[m++] = 1 << 24 | 64 << 16 | 0, b.bits = 1, 0;
  for (w = 1; w < k && I[w] === 0; w++)
    ;
  for (N < w && (N = w), K = 1, f = 1; f <= Ti; f++)
    if (K <<= 1, K -= I[f], K < 0)
      return -1;
  if (K > 0 && (o === v_ || k !== 1))
    return -1;
  for (se[1] = 0, f = 1; f < Ti; f++)
    se[f + 1] = se[f] + I[f];
  for (p = 0; p < u; p++)
    c[s + p] !== 0 && (h[se[c[s + p]]++] = p);
  if (o === v_ ? (J = ge = h, le = 20) : o === jr ? (J = My, ge = ky, le = 257) : (J = Ay, ge = Cy, le = 0), $ = 0, p = 0, f = w, Y = m, S = N, D = 0, ae = -1, U = 1 << N, V = U - 1, o === jr && U > p_ || o === b_ && U > h_)
    return 1;
  for (; ; ) {
    Ne = f - D, h[p] + 1 < le ? (Ce = 0, Se = h[p]) : h[p] >= le ? (Ce = ge[h[p] - le], Se = J[h[p] - le]) : (Ce = 96, Se = 0), Z = 1 << f - D, L = 1 << S, w = L;
    do
      L -= Z, g[Y + ($ >> D) + L] = Ne << 24 | Ce << 16 | Se | 0;
    while (L !== 0);
    for (Z = 1 << f - 1; $ & Z; )
      Z >>= 1;
    if (Z !== 0 ? ($ &= Z - 1, $ += Z) : $ = 0, p++, --I[f] === 0) {
      if (f === k)
        break;
      f = c[s + h[p]];
    }
    if (f > N && ($ & V) !== ae) {
      for (D === 0 && (D = N), Y += w, S = f - D, K = 1 << S; S + D < k && (K -= I[S + D], !(K <= 0)); )
        S++, K <<= 1;
      if (U += 1 << S, o === jr && U > p_ || o === b_ && U > h_)
        return 1;
      ae = $ & V, g[ae] = N << 24 | S << 16 | Y - m | 0;
    }
  }
  return $ !== 0 && (g[Y + $] = f - D << 24 | 64 << 16 | 0), b.bits = N, 0;
};
var Cl = jy;
const Ty = 0, Ng = 1, Eg = 2, {
  Z_FINISH: y_,
  Z_BLOCK: Oy,
  Z_TREES: Wo,
  Z_OK: Yn,
  Z_STREAM_END: Ry,
  Z_NEED_DICT: Dy,
  Z_STREAM_ERROR: ia,
  Z_DATA_ERROR: Mg,
  Z_MEM_ERROR: kg,
  Z_BUF_ERROR: Uy,
  Z_DEFLATED: x_
} = Sg, ss = 16180, S_ = 16181, w_ = 16182, z_ = 16183, N_ = 16184, E_ = 16185, M_ = 16186, k_ = 16187, A_ = 16188, C_ = 16189, is = 16190, qa = 16191, Tr = 16192, j_ = 16193, Or = 16194, T_ = 16195, O_ = 16196, R_ = 16197, D_ = 16198, Fo = 16199, Po = 16200, U_ = 16201, B_ = 16202, L_ = 16203, G_ = 16204, H_ = 16205, Rr = 16206, V_ = 16207, q_ = 16208, lt = 16209, Ag = 16210, Cg = 16211, By = 852, Ly = 592, Gy = 15, Hy = Gy, Y_ = (o) => (o >>> 24 & 255) + (o >>> 8 & 65280) + ((o & 65280) << 8) + ((o & 255) << 24);
function Vy() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const Zn = (o) => {
  if (!o)
    return 1;
  const c = o.state;
  return !c || c.strm !== o || c.mode < ss || c.mode > Cg ? 1 : 0;
}, jg = (o) => {
  if (Zn(o))
    return ia;
  const c = o.state;
  return o.total_in = o.total_out = c.total = 0, o.msg = "", c.wrap && (o.adler = c.wrap & 1), c.mode = ss, c.last = 0, c.havedict = 0, c.flags = -1, c.dmax = 32768, c.head = null, c.hold = 0, c.bits = 0, c.lencode = c.lendyn = new Int32Array(By), c.distcode = c.distdyn = new Int32Array(Ly), c.sane = 1, c.back = -1, Yn;
}, Tg = (o) => {
  if (Zn(o))
    return ia;
  const c = o.state;
  return c.wsize = 0, c.whave = 0, c.wnext = 0, jg(o);
}, Og = (o, c) => {
  let s;
  if (Zn(o))
    return ia;
  const u = o.state;
  return c < 0 ? (s = 0, c = -c) : (s = (c >> 4) + 5, c < 48 && (c &= 15)), c && (c < 8 || c > 15) ? ia : (u.window !== null && u.wbits !== c && (u.window = null), u.wrap = s, u.wbits = c, Tg(o));
}, Rg = (o, c) => {
  if (!o)
    return ia;
  const s = new Vy();
  o.state = s, s.strm = o, s.window = null, s.mode = ss;
  const u = Og(o, c);
  return u !== Yn && (o.state = null), u;
}, qy = (o) => Rg(o, Hy);
let Z_ = !0, Dr, Ur;
const Yy = (o) => {
  if (Z_) {
    Dr = new Int32Array(512), Ur = new Int32Array(32);
    let c = 0;
    for (; c < 144; )
      o.lens[c++] = 8;
    for (; c < 256; )
      o.lens[c++] = 9;
    for (; c < 280; )
      o.lens[c++] = 7;
    for (; c < 288; )
      o.lens[c++] = 8;
    for (Cl(Ng, o.lens, 0, 288, Dr, 0, o.work, { bits: 9 }), c = 0; c < 32; )
      o.lens[c++] = 5;
    Cl(Eg, o.lens, 0, 32, Ur, 0, o.work, { bits: 5 }), Z_ = !1;
  }
  o.lencode = Dr, o.lenbits = 9, o.distcode = Ur, o.distbits = 5;
}, Dg = (o, c, s, u) => {
  let g;
  const m = o.state;
  return m.window === null && (m.wsize = 1 << m.wbits, m.wnext = 0, m.whave = 0, m.window = new Uint8Array(m.wsize)), u >= m.wsize ? (m.window.set(c.subarray(s - m.wsize, s), 0), m.wnext = 0, m.whave = m.wsize) : (g = m.wsize - m.wnext, g > u && (g = u), m.window.set(c.subarray(s - u, s - u + g), m.wnext), u -= g, u ? (m.window.set(c.subarray(s - u, s), 0), m.wnext = u, m.whave = m.wsize) : (m.wnext += g, m.wnext === m.wsize && (m.wnext = 0), m.whave < m.wsize && (m.whave += g))), 0;
}, Zy = (o, c) => {
  let s, u, g, m, h, b, v, f, p, w, k, N, S, D, K = 0, U, $, Z, L, ae, V, Y, J;
  const le = new Uint8Array(4);
  let I, se;
  const ge = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (Zn(o) || !o.output || !o.input && o.avail_in !== 0)
    return ia;
  s = o.state, s.mode === qa && (s.mode = Tr), h = o.next_out, g = o.output, v = o.avail_out, m = o.next_in, u = o.input, b = o.avail_in, f = s.hold, p = s.bits, w = b, k = v, J = Yn;
  e:
    for (; ; )
      switch (s.mode) {
        case ss:
          if (s.wrap === 0) {
            s.mode = Tr;
            break;
          }
          for (; p < 16; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          if (s.wrap & 2 && f === 35615) {
            s.wbits === 0 && (s.wbits = 15), s.check = 0, le[0] = f & 255, le[1] = f >>> 8 & 255, s.check = ha(s.check, le, 2, 0), f = 0, p = 0, s.mode = S_;
            break;
          }
          if (s.head && (s.head.done = !1), !(s.wrap & 1) || /* check if zlib header allowed */
          (((f & 255) << 8) + (f >> 8)) % 31) {
            o.msg = "incorrect header check", s.mode = lt;
            break;
          }
          if ((f & 15) !== x_) {
            o.msg = "unknown compression method", s.mode = lt;
            break;
          }
          if (f >>>= 4, p -= 4, Y = (f & 15) + 8, s.wbits === 0 && (s.wbits = Y), Y > 15 || Y > s.wbits) {
            o.msg = "invalid window size", s.mode = lt;
            break;
          }
          s.dmax = 1 << s.wbits, s.flags = 0, o.adler = s.check = 1, s.mode = f & 512 ? C_ : qa, f = 0, p = 0;
          break;
        case S_:
          for (; p < 16; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          if (s.flags = f, (s.flags & 255) !== x_) {
            o.msg = "unknown compression method", s.mode = lt;
            break;
          }
          if (s.flags & 57344) {
            o.msg = "unknown header flags set", s.mode = lt;
            break;
          }
          s.head && (s.head.text = f >> 8 & 1), s.flags & 512 && s.wrap & 4 && (le[0] = f & 255, le[1] = f >>> 8 & 255, s.check = ha(s.check, le, 2, 0)), f = 0, p = 0, s.mode = w_;
        /* falls through */
        case w_:
          for (; p < 32; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          s.head && (s.head.time = f), s.flags & 512 && s.wrap & 4 && (le[0] = f & 255, le[1] = f >>> 8 & 255, le[2] = f >>> 16 & 255, le[3] = f >>> 24 & 255, s.check = ha(s.check, le, 4, 0)), f = 0, p = 0, s.mode = z_;
        /* falls through */
        case z_:
          for (; p < 16; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          s.head && (s.head.xflags = f & 255, s.head.os = f >> 8), s.flags & 512 && s.wrap & 4 && (le[0] = f & 255, le[1] = f >>> 8 & 255, s.check = ha(s.check, le, 2, 0)), f = 0, p = 0, s.mode = N_;
        /* falls through */
        case N_:
          if (s.flags & 1024) {
            for (; p < 16; ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            s.length = f, s.head && (s.head.extra_len = f), s.flags & 512 && s.wrap & 4 && (le[0] = f & 255, le[1] = f >>> 8 & 255, s.check = ha(s.check, le, 2, 0)), f = 0, p = 0;
          } else s.head && (s.head.extra = null);
          s.mode = E_;
        /* falls through */
        case E_:
          if (s.flags & 1024 && (N = s.length, N > b && (N = b), N && (s.head && (Y = s.head.extra_len - s.length, s.head.extra || (s.head.extra = new Uint8Array(s.head.extra_len)), s.head.extra.set(
            u.subarray(
              m,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              m + N
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            Y
          )), s.flags & 512 && s.wrap & 4 && (s.check = ha(s.check, u, N, m)), b -= N, m += N, s.length -= N), s.length))
            break e;
          s.length = 0, s.mode = M_;
        /* falls through */
        case M_:
          if (s.flags & 2048) {
            if (b === 0)
              break e;
            N = 0;
            do
              Y = u[m + N++], s.head && Y && s.length < 65536 && (s.head.name += String.fromCharCode(Y));
            while (Y && N < b);
            if (s.flags & 512 && s.wrap & 4 && (s.check = ha(s.check, u, N, m)), b -= N, m += N, Y)
              break e;
          } else s.head && (s.head.name = null);
          s.length = 0, s.mode = k_;
        /* falls through */
        case k_:
          if (s.flags & 4096) {
            if (b === 0)
              break e;
            N = 0;
            do
              Y = u[m + N++], s.head && Y && s.length < 65536 && (s.head.comment += String.fromCharCode(Y));
            while (Y && N < b);
            if (s.flags & 512 && s.wrap & 4 && (s.check = ha(s.check, u, N, m)), b -= N, m += N, Y)
              break e;
          } else s.head && (s.head.comment = null);
          s.mode = A_;
        /* falls through */
        case A_:
          if (s.flags & 512) {
            for (; p < 16; ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            if (s.wrap & 4 && f !== (s.check & 65535)) {
              o.msg = "header crc mismatch", s.mode = lt;
              break;
            }
            f = 0, p = 0;
          }
          s.head && (s.head.hcrc = s.flags >> 9 & 1, s.head.done = !0), o.adler = s.check = 0, s.mode = qa;
          break;
        case C_:
          for (; p < 32; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          o.adler = s.check = Y_(f), f = 0, p = 0, s.mode = is;
        /* falls through */
        case is:
          if (s.havedict === 0)
            return o.next_out = h, o.avail_out = v, o.next_in = m, o.avail_in = b, s.hold = f, s.bits = p, Dy;
          o.adler = s.check = 1, s.mode = qa;
        /* falls through */
        case qa:
          if (c === Oy || c === Wo)
            break e;
        /* falls through */
        case Tr:
          if (s.last) {
            f >>>= p & 7, p -= p & 7, s.mode = Rr;
            break;
          }
          for (; p < 3; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          switch (s.last = f & 1, f >>>= 1, p -= 1, f & 3) {
            case 0:
              s.mode = j_;
              break;
            case 1:
              if (Yy(s), s.mode = Fo, c === Wo) {
                f >>>= 2, p -= 2;
                break e;
              }
              break;
            case 2:
              s.mode = O_;
              break;
            case 3:
              o.msg = "invalid block type", s.mode = lt;
          }
          f >>>= 2, p -= 2;
          break;
        case j_:
          for (f >>>= p & 7, p -= p & 7; p < 32; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          if ((f & 65535) !== (f >>> 16 ^ 65535)) {
            o.msg = "invalid stored block lengths", s.mode = lt;
            break;
          }
          if (s.length = f & 65535, f = 0, p = 0, s.mode = Or, c === Wo)
            break e;
        /* falls through */
        case Or:
          s.mode = T_;
        /* falls through */
        case T_:
          if (N = s.length, N) {
            if (N > b && (N = b), N > v && (N = v), N === 0)
              break e;
            g.set(u.subarray(m, m + N), h), b -= N, m += N, v -= N, h += N, s.length -= N;
            break;
          }
          s.mode = qa;
          break;
        case O_:
          for (; p < 14; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          if (s.nlen = (f & 31) + 257, f >>>= 5, p -= 5, s.ndist = (f & 31) + 1, f >>>= 5, p -= 5, s.ncode = (f & 15) + 4, f >>>= 4, p -= 4, s.nlen > 286 || s.ndist > 30) {
            o.msg = "too many length or distance symbols", s.mode = lt;
            break;
          }
          s.have = 0, s.mode = R_;
        /* falls through */
        case R_:
          for (; s.have < s.ncode; ) {
            for (; p < 3; ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            s.lens[ge[s.have++]] = f & 7, f >>>= 3, p -= 3;
          }
          for (; s.have < 19; )
            s.lens[ge[s.have++]] = 0;
          if (s.lencode = s.lendyn, s.lenbits = 7, I = { bits: s.lenbits }, J = Cl(Ty, s.lens, 0, 19, s.lencode, 0, s.work, I), s.lenbits = I.bits, J) {
            o.msg = "invalid code lengths set", s.mode = lt;
            break;
          }
          s.have = 0, s.mode = D_;
        /* falls through */
        case D_:
          for (; s.have < s.nlen + s.ndist; ) {
            for (; K = s.lencode[f & (1 << s.lenbits) - 1], U = K >>> 24, $ = K >>> 16 & 255, Z = K & 65535, !(U <= p); ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            if (Z < 16)
              f >>>= U, p -= U, s.lens[s.have++] = Z;
            else {
              if (Z === 16) {
                for (se = U + 2; p < se; ) {
                  if (b === 0)
                    break e;
                  b--, f += u[m++] << p, p += 8;
                }
                if (f >>>= U, p -= U, s.have === 0) {
                  o.msg = "invalid bit length repeat", s.mode = lt;
                  break;
                }
                Y = s.lens[s.have - 1], N = 3 + (f & 3), f >>>= 2, p -= 2;
              } else if (Z === 17) {
                for (se = U + 3; p < se; ) {
                  if (b === 0)
                    break e;
                  b--, f += u[m++] << p, p += 8;
                }
                f >>>= U, p -= U, Y = 0, N = 3 + (f & 7), f >>>= 3, p -= 3;
              } else {
                for (se = U + 7; p < se; ) {
                  if (b === 0)
                    break e;
                  b--, f += u[m++] << p, p += 8;
                }
                f >>>= U, p -= U, Y = 0, N = 11 + (f & 127), f >>>= 7, p -= 7;
              }
              if (s.have + N > s.nlen + s.ndist) {
                o.msg = "invalid bit length repeat", s.mode = lt;
                break;
              }
              for (; N--; )
                s.lens[s.have++] = Y;
            }
          }
          if (s.mode === lt)
            break;
          if (s.lens[256] === 0) {
            o.msg = "invalid code -- missing end-of-block", s.mode = lt;
            break;
          }
          if (s.lenbits = 9, I = { bits: s.lenbits }, J = Cl(Ng, s.lens, 0, s.nlen, s.lencode, 0, s.work, I), s.lenbits = I.bits, J) {
            o.msg = "invalid literal/lengths set", s.mode = lt;
            break;
          }
          if (s.distbits = 6, s.distcode = s.distdyn, I = { bits: s.distbits }, J = Cl(Eg, s.lens, s.nlen, s.ndist, s.distcode, 0, s.work, I), s.distbits = I.bits, J) {
            o.msg = "invalid distances set", s.mode = lt;
            break;
          }
          if (s.mode = Fo, c === Wo)
            break e;
        /* falls through */
        case Fo:
          s.mode = Po;
        /* falls through */
        case Po:
          if (b >= 6 && v >= 258) {
            o.next_out = h, o.avail_out = v, o.next_in = m, o.avail_in = b, s.hold = f, s.bits = p, Ey(o, k), h = o.next_out, g = o.output, v = o.avail_out, m = o.next_in, u = o.input, b = o.avail_in, f = s.hold, p = s.bits, s.mode === qa && (s.back = -1);
            break;
          }
          for (s.back = 0; K = s.lencode[f & (1 << s.lenbits) - 1], U = K >>> 24, $ = K >>> 16 & 255, Z = K & 65535, !(U <= p); ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          if ($ && ($ & 240) === 0) {
            for (L = U, ae = $, V = Z; K = s.lencode[V + ((f & (1 << L + ae) - 1) >> L)], U = K >>> 24, $ = K >>> 16 & 255, Z = K & 65535, !(L + U <= p); ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            f >>>= L, p -= L, s.back += L;
          }
          if (f >>>= U, p -= U, s.back += U, s.length = Z, $ === 0) {
            s.mode = H_;
            break;
          }
          if ($ & 32) {
            s.back = -1, s.mode = qa;
            break;
          }
          if ($ & 64) {
            o.msg = "invalid literal/length code", s.mode = lt;
            break;
          }
          s.extra = $ & 15, s.mode = U_;
        /* falls through */
        case U_:
          if (s.extra) {
            for (se = s.extra; p < se; ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            s.length += f & (1 << s.extra) - 1, f >>>= s.extra, p -= s.extra, s.back += s.extra;
          }
          s.was = s.length, s.mode = B_;
        /* falls through */
        case B_:
          for (; K = s.distcode[f & (1 << s.distbits) - 1], U = K >>> 24, $ = K >>> 16 & 255, Z = K & 65535, !(U <= p); ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          if (($ & 240) === 0) {
            for (L = U, ae = $, V = Z; K = s.distcode[V + ((f & (1 << L + ae) - 1) >> L)], U = K >>> 24, $ = K >>> 16 & 255, Z = K & 65535, !(L + U <= p); ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            f >>>= L, p -= L, s.back += L;
          }
          if (f >>>= U, p -= U, s.back += U, $ & 64) {
            o.msg = "invalid distance code", s.mode = lt;
            break;
          }
          s.offset = Z, s.extra = $ & 15, s.mode = L_;
        /* falls through */
        case L_:
          if (s.extra) {
            for (se = s.extra; p < se; ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            s.offset += f & (1 << s.extra) - 1, f >>>= s.extra, p -= s.extra, s.back += s.extra;
          }
          if (s.offset > s.dmax) {
            o.msg = "invalid distance too far back", s.mode = lt;
            break;
          }
          s.mode = G_;
        /* falls through */
        case G_:
          if (v === 0)
            break e;
          if (N = k - v, s.offset > N) {
            if (N = s.offset - N, N > s.whave && s.sane) {
              o.msg = "invalid distance too far back", s.mode = lt;
              break;
            }
            N > s.wnext ? (N -= s.wnext, S = s.wsize - N) : S = s.wnext - N, N > s.length && (N = s.length), D = s.window;
          } else
            D = g, S = h - s.offset, N = s.length;
          N > v && (N = v), v -= N, s.length -= N;
          do
            g[h++] = D[S++];
          while (--N);
          s.length === 0 && (s.mode = Po);
          break;
        case H_:
          if (v === 0)
            break e;
          g[h++] = s.length, v--, s.mode = Po;
          break;
        case Rr:
          if (s.wrap) {
            for (; p < 32; ) {
              if (b === 0)
                break e;
              b--, f |= u[m++] << p, p += 8;
            }
            if (k -= v, o.total_out += k, s.total += k, s.wrap & 4 && k && (o.adler = s.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            s.flags ? ha(s.check, g, k, h - k) : Hr(s.check, g, k, h - k)), k = v, s.wrap & 4 && (s.flags ? f : Y_(f)) !== s.check) {
              o.msg = "incorrect data check", s.mode = lt;
              break;
            }
            f = 0, p = 0;
          }
          s.mode = V_;
        /* falls through */
        case V_:
          if (s.wrap && s.flags) {
            for (; p < 32; ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            if (s.wrap & 4 && f !== (s.total & 4294967295)) {
              o.msg = "incorrect length check", s.mode = lt;
              break;
            }
            f = 0, p = 0;
          }
          s.mode = q_;
        /* falls through */
        case q_:
          J = Ry;
          break e;
        case lt:
          J = Mg;
          break e;
        case Ag:
          return kg;
        case Cg:
        /* falls through */
        default:
          return ia;
      }
  return o.next_out = h, o.avail_out = v, o.next_in = m, o.avail_in = b, s.hold = f, s.bits = p, (s.wsize || k !== o.avail_out && s.mode < lt && (s.mode < Rr || c !== y_)) && Dg(o, o.output, o.next_out, k - o.avail_out), w -= o.avail_in, k -= o.avail_out, o.total_in += w, o.total_out += k, s.total += k, s.wrap & 4 && k && (o.adler = s.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  s.flags ? ha(s.check, g, k, o.next_out - k) : Hr(s.check, g, k, o.next_out - k)), o.data_type = s.bits + (s.last ? 64 : 0) + (s.mode === qa ? 128 : 0) + (s.mode === Fo || s.mode === Or ? 256 : 0), (w === 0 && k === 0 || c === y_) && J === Yn && (J = Uy), J;
}, Ky = (o) => {
  if (Zn(o))
    return ia;
  let c = o.state;
  return c.window && (c.window = null), o.state = null, Yn;
}, Xy = (o, c) => {
  if (Zn(o))
    return ia;
  const s = o.state;
  return (s.wrap & 2) === 0 ? ia : (s.head = c, c.done = !1, Yn);
}, Qy = (o, c) => {
  const s = c.length;
  let u, g, m;
  return Zn(o) || (u = o.state, u.wrap !== 0 && u.mode !== is) ? ia : u.mode === is && (g = 1, g = Hr(g, c, s, 0), g !== u.check) ? Mg : (m = Dg(o, c, s, s), m ? (u.mode = Ag, kg) : (u.havedict = 1, Yn));
};
var $y = Tg, Jy = Og, Iy = jg, Wy = qy, Fy = Rg, Py = Zy, e2 = Ky, t2 = Xy, a2 = Qy, n2 = "pako inflate (from Nodeca project)", Ya = {
  inflateReset: $y,
  inflateReset2: Jy,
  inflateResetKeep: Iy,
  inflateInit: Wy,
  inflateInit2: Fy,
  inflate: Py,
  inflateEnd: e2,
  inflateGetHeader: t2,
  inflateSetDictionary: a2,
  inflateInfo: n2
};
function i2() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var l2 = i2;
const Ug = Object.prototype.toString, {
  Z_NO_FLUSH: o2,
  Z_FINISH: s2,
  Z_OK: Tl,
  Z_STREAM_END: Br,
  Z_NEED_DICT: Lr,
  Z_STREAM_ERROR: c2,
  Z_DATA_ERROR: K_,
  Z_MEM_ERROR: r2
} = Sg;
function cs(o) {
  this.options = wg.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, o || {});
  const c = this.options;
  c.raw && c.windowBits >= 0 && c.windowBits < 16 && (c.windowBits = -c.windowBits, c.windowBits === 0 && (c.windowBits = -15)), c.windowBits >= 0 && c.windowBits < 16 && !(o && o.windowBits) && (c.windowBits += 32), c.windowBits > 15 && c.windowBits < 48 && (c.windowBits & 15) === 0 && (c.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new zy(), this.strm.avail_out = 0;
  let s = Ya.inflateInit2(
    this.strm,
    c.windowBits
  );
  if (s !== Tl)
    throw new Error(Vr[s]);
  if (this.header = new l2(), Ya.inflateGetHeader(this.strm, this.header), c.dictionary && (typeof c.dictionary == "string" ? c.dictionary = qr.string2buf(c.dictionary) : Ug.call(c.dictionary) === "[object ArrayBuffer]" && (c.dictionary = new Uint8Array(c.dictionary)), c.raw && (s = Ya.inflateSetDictionary(this.strm, c.dictionary), s !== Tl)))
    throw new Error(Vr[s]);
}
cs.prototype.push = function(o, c) {
  const s = this.strm, u = this.options.chunkSize, g = this.options.dictionary;
  let m, h, b;
  if (this.ended) return !1;
  for (c === ~~c ? h = c : h = c === !0 ? s2 : o2, Ug.call(o) === "[object ArrayBuffer]" ? s.input = new Uint8Array(o) : s.input = o, s.next_in = 0, s.avail_in = s.input.length; ; ) {
    for (s.avail_out === 0 && (s.output = new Uint8Array(u), s.next_out = 0, s.avail_out = u), m = Ya.inflate(s, h), m === Lr && g && (m = Ya.inflateSetDictionary(s, g), m === Tl ? m = Ya.inflate(s, h) : m === K_ && (m = Lr)); s.avail_in > 0 && m === Br && s.state.wrap > 0 && o[s.next_in] !== 0; )
      Ya.inflateReset(s), m = Ya.inflate(s, h);
    switch (m) {
      case c2:
      case K_:
      case Lr:
      case r2:
        return this.onEnd(m), this.ended = !0, !1;
    }
    if (b = s.avail_out, s.next_out && (s.avail_out === 0 || m === Br))
      if (this.options.to === "string") {
        let v = qr.utf8border(s.output, s.next_out), f = s.next_out - v, p = qr.buf2string(s.output, v);
        s.next_out = f, s.avail_out = u - f, f && s.output.set(s.output.subarray(v, v + f), 0), this.onData(p);
      } else
        this.onData(s.output.length === s.next_out ? s.output : s.output.subarray(0, s.next_out));
    if (!(m === Tl && b === 0)) {
      if (m === Br)
        return m = Ya.inflateEnd(this.strm), this.onEnd(m), this.ended = !0, !0;
      if (s.avail_in === 0) break;
    }
  }
  return !0;
};
cs.prototype.onData = function(o) {
  this.chunks.push(o);
};
cs.prototype.onEnd = function(o) {
  o === Tl && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = wg.flattenChunks(this.chunks)), this.chunks = [], this.err = o, this.msg = this.strm.msg;
};
function u2(o, c) {
  const s = new cs(c);
  if (s.push(o), s.err) throw s.msg || Vr[s.err];
  return s.result;
}
var d2 = u2, f2 = {
  inflate: d2
};
const { inflate: m2 } = f2;
var _2 = m2;
function g2(o) {
  const c = new Uint8Array(4), s = new Uint32Array(c.buffer);
  if (o[0] !== 137)
    throw new Error("Invalid .png file header");
  if (o[1] !== 80)
    throw new Error("Invalid .png file header");
  if (o[2] !== 78)
    throw new Error("Invalid .png file header");
  if (o[3] !== 71)
    throw new Error("Invalid .png file header");
  if (o[4] !== 13)
    throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
  if (o[5] !== 10)
    throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
  if (o[6] !== 26)
    throw new Error("Invalid .png file header");
  if (o[7] !== 10)
    throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");
  const u = [];
  let g = !1, m = 8;
  for (; m < o.length; ) {
    c[3] = o[m++], c[2] = o[m++], c[1] = o[m++], c[0] = o[m++];
    const h = s[0] + 4, b = new Uint8Array(h);
    b[0] = o[m++], b[1] = o[m++], b[2] = o[m++], b[3] = o[m++];
    const v = String.fromCharCode(b[0]) + String.fromCharCode(b[1]) + String.fromCharCode(b[2]) + String.fromCharCode(b[3]);
    if (v === "IEND") {
      g = !0;
      break;
    }
    for (let p = 4; p < h; p++)
      b[p] = o[m++];
    m += 4;
    const f = new Uint8Array(b.buffer.slice(4));
    if (v === "zTXt") {
      let p = 0, w = "";
      for (; f[p] !== 0 && p < 79; )
        w += String.fromCharCode(f[p]), p++;
      u.push({
        keyword: w,
        data: new Uint8Array(f.slice(p + 2))
      });
    }
  }
  if (!g)
    throw new Error(".png file ended prematurely: no IEND header was found");
  return u;
}
function p2(o) {
  return o.metaData?.version === 2 && Array.isArray(o.layers) && o.layers.forEach((c) => {
    if (c.pixels.length === 0 && c.compressedPixels && c.compressedPixels.length !== 0) {
      for (let s = 0; s < c.compressedPixels.length; s = s + 3) {
        const u = c.compressedPixels[s], g = c.compressedPixels[s + 1], m = c.compressedPixels[s + 2];
        for (let h = 0; h < m; h++)
          c.pixels.push(u + h, g);
      }
      delete c.compressedPixels;
    }
  }), o;
}
const h2 = {
  cleaning: 2e3,
  returning: 2e3,
  paused: 5e3,
  docked: 1e4,
  idle: 5e3,
  error: 5e3
};
function v2(o, c, s) {
  const [u, g] = O.useState(null), [m, h] = O.useState(null), b = O.useRef(!1), v = O.useRef(null), f = h2[s] ?? 5e3, p = O.useCallback(async () => {
    if (b.current) return;
    const w = o.states[c], k = w?.attributes?.entity_picture;
    if (!(!k || w?.state === "unavailable")) {
      b.current = !0;
      try {
        const N = await o.fetchWithAuth(k);
        if (!N.ok)
          throw new Error(`Camera fetch failed: ${N.status}`);
        const S = await N.arrayBuffer(), D = g2(new Uint8Array(S)).filter(($) => $.keyword === "ValetudoMap");
        if (D.length === 0)
          throw new Error("No ValetudoMap ZTXT chunk in PNG");
        const K = _2(D[0].data, { to: "string" }), U = p2(JSON.parse(K));
        g(U), h(null);
      } catch (N) {
        h(N instanceof Error ? N.message : String(N)), console.warn("[ValetudoMap] fetch error:", N);
      } finally {
        b.current = !1;
      }
    }
  }, [o, c]);
  return O.useEffect(() => {
    p();
    const w = () => {
      v.current = setTimeout(() => {
        p().finally(w);
      }, f);
    };
    return w(), () => {
      v.current && clearTimeout(v.current);
    };
  }, [p, f]), { mapData: u, error: m, refetch: p };
}
function b2(o) {
  const c = o.entity.replace(/^vacuum\./, "");
  return {
    vacuum: o.entity,
    map: o.map_entity ?? `camera.${c}_map_data`,
    fan: o.fan_entity ?? `select.${c}_fan`,
    water: o.water_entity ?? `select.${c}_water`,
    battery: o.battery_entity ?? `sensor.${c}_battery_level`,
    segments: o.segments_entity ?? `sensor.${c}_map_segments`,
    wifi: `sensor.${c}_wi_fi_configuration`,
    mqttIdentifier: o.valetudo_identifier,
    // Consumables
    mainBrush: `sensor.${c}_main_brush`,
    rightBrush: `sensor.${c}_right_brush`,
    mainFilter: `sensor.${c}_main_filter`,
    sensorCleaning: `sensor.${c}_sensor_cleaning`,
    resetMainBrush: `button.${c}_reset_main_brush_consumable`,
    resetRightBrush: `button.${c}_reset_right_brush_consumable`,
    resetMainFilter: `button.${c}_reset_main_filter_consumable`,
    resetSensorCleaning: `button.${c}_reset_sensor_cleaning_consumable`,
    // Statistics
    totalStatsArea: `sensor.${c}_total_statistics_area`,
    totalStatsTime: `sensor.${c}_total_statistics_time`,
    totalStatsCount: `sensor.${c}_total_statistics_count`,
    currentStatsArea: `sensor.${c}_current_statistics_area`,
    currentStatsTime: `sensor.${c}_current_statistics_time`,
    // Switches
    carpetMode: `switch.${c}_carpet_mode`
  };
}
function X_(o) {
  if (!o || typeof o != "object") return !1;
  const c = o;
  if (c.code === "not_found") return !0;
  const s = typeof c.message == "string" ? c.message : "";
  return s.includes("not_found") || s.includes("Service not found") || s.includes("Service rest_command");
}
function y2(o) {
  return Object.entries(o).filter(([c]) => !isNaN(Number(c))).map(([c, s]) => ({
    id: Number(c),
    name: String(s),
    x: 50,
    y: 50
  }));
}
function x2({ hass: o, config: c }) {
  const s = b2(c), u = c.language ?? "en", { t: g } = Ke(u), m = c.theme ?? "light", h = o.states[s.vacuum], b = o.states[s.map], v = o.states[s.fan], f = o.states[s.water], p = o.states[s.battery], w = o.states[s.segments], k = o.states[s.wifi], N = o.states[s.mainBrush], S = o.states[s.rightBrush], D = o.states[s.mainFilter], K = o.states[s.sensorCleaning], U = o.states[s.totalStatsArea], $ = o.states[s.totalStatsTime], Z = o.states[s.totalStatsCount], L = o.states[s.currentStatsArea], ae = o.states[s.currentStatsTime], V = o.states[s.carpetMode], Y = O.useRef(null), J = pg({
    themeType: m,
    customThemeConfig: c.custom_theme,
    containerRef: Y
  }), [le, I] = O.useState(!1), [se, ge] = O.useState(!1), {
    selectedMode: Ne,
    selectedRooms: Ce,
    selectedZone: Se,
    setSelectedZone: R,
    setSelectedMode: ee,
    handleModeChange: F,
    handleRoomToggle: ve
  } = fg({ defaultMode: c.default_mode }), { toast: Ee, showToast: x, hideToast: H } = _g(), [P, ne] = O.useState(null), me = k?.attributes?.ips?.[0], ye = c.valetudo_url?.replace(/\/$/, "") || (me ? `http://${me}` : null), ot = !!ye, Pe = O.useCallback(async () => {
    try {
      let ke = !1;
      const Oe = ye;
      if (Oe)
        try {
          const Ve = await fetch(`${Oe}/api/v2/robot/capabilities/MappingPassCapability`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "start_mapping" })
          });
          if (!Ve.ok) throw new Error(`REST ${Ve.status}`);
          ke = !0;
        } catch (Ve) {
          console.warn("[valetudo] Direct mapping fetch failed:", Ve);
        }
      if (!ke)
        try {
          await o.callService("rest_command", "valetudo_start_mapping", {}), ke = !0;
        } catch (Ve) {
          if (!X_(Ve))
            throw Ve;
        }
      if (!ke) {
        console.warn(`[valetudo] Cannot start mapping — no working method.
` + `Добавь в configuration.yaml:
rest_command:
  valetudo_start_mapping:
    url: "http://ROBOT_IP/api/v2/robot/capabilities/MappingPassCapability"
    method: PUT
    content_type: application/json
    payload: '{"action": "start_mapping"}'`), ne("mapping");
        return;
      }
      x(g("valetudo.toast.mapping_started"));
    } catch (ke) {
      console.error("[valetudo] Mapping failed:", ke), x(g("valetudo.toast.mapping_error"));
    }
  }, [ye, o, x, g]), { handlePause: ba, handleStop: ya, handleDock: Za, handleResume: bn, handleSetFanSpeed: Xt, handleSetWater: Ka, handleClean: fa } = ey({
    hass: o,
    entityIds: s,
    onSuccess: x,
    language: u
  }), Qt = h?.state ?? "docked", { mapData: xa, error: Sa, refetch: la } = v2(o, s.map, Qt), [wa, Kn] = O.useState(1);
  O.useEffect(() => {
    (Qt === "docked" || Qt === "idle") && (ee("all"), R(null));
  }, [Qt]);
  const dt = Ne === "restrictions", { restrictions: et, setTool: yn, addWall: ht, addZone: Xa, selectItem: Qa, deleteSelected: xn, markSaved: Sn } = Zb({
    mapData: xa,
    active: dt
  }), [j, G] = O.useState(!1), W = O.useCallback(
    (ke, Oe, Ve) => {
      if (ke === "wall")
        return ht(Oe, Ve);
      {
        const Ae = et.tool === "no_mop" ? "mop" : "regular";
        return Xa(Ae, Oe, Ve);
      }
    },
    [ht, Xa, et.tool]
  ), ie = O.useCallback(async () => {
    const ke = Yb(et.walls, et.zones);
    console.log("[valetudo] Saving restrictions payload:", JSON.stringify(ke)), G(!0);
    try {
      let Oe = !1;
      const Ve = ye;
      if (Ve) {
        const Ae = await fetch(`${Ve}/api/v2/robot/capabilities/CombinedVirtualRestrictionsCapability`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ke)
        });
        if (!Ae.ok) throw new Error(`REST ${Ae.status}: ${await Ae.text()}`);
        console.log("[valetudo] Saved via direct REST"), Oe = !0;
      }
      if (!Oe)
        try {
          await o.callService("rest_command", "valetudo_set_restrictions", {
            payload: JSON.stringify(ke)
          }), console.log("[valetudo] Saved via HA rest_command"), Oe = !0;
        } catch (Ae) {
          if (console.warn("[valetudo] rest_command error:", Ae), !X_(Ae))
            throw Ae;
          console.log("[valetudo] rest_command not configured, trying next method");
        }
      if (!Oe) {
        console.warn(`[valetudo] Could not save — no working method.
` + `Добавь в configuration.yaml:
rest_command:
  valetudo_set_restrictions:
    url: "http://ROBOT_IP/api/v2/robot/capabilities/CombinedVirtualRestrictionsCapability"
    method: PUT
    content_type: application/json
    payload: "{{ payload }}"`), ne("restrictions");
        return;
      }
      Sn(), x(g("valetudo.toast.saved")), setTimeout(la, 800);
    } catch (Oe) {
      console.error("[valetudo] Save failed:", Oe), x(g("valetudo.toast.error", { message: Oe instanceof Error ? Oe.message : String(Oe) }));
    } finally {
      G(!1);
    }
  }, [ye, et, o, Sn, x, la, g]);
  if (!h)
    return /* @__PURE__ */ r.jsxs("div", { className: "valetudo-vacuum-card__error", children: [
      "Entity not found: ",
      s.vacuum
    ] });
  const ue = `rest_command:
  valetudo_set_restrictions:
    url: "http://ROBOT_IP/api/v2/robot/capabilities/CombinedVirtualRestrictionsCapability"
    method: PUT
    content_type: application/json
    payload: "{{ payload }}"`, ze = `rest_command:
  valetudo_start_mapping:
    url: "http://ROBOT_IP/api/v2/robot/capabilities/MappingPassCapability"
    method: PUT
    content_type: application/json
    payload: '{"action": "start_mapping"}'`, M = ["cleaning", "returning"].includes(Qt), tt = Qt === "paused", yt = Qt === "docked", te = c.title ?? h.attributes.friendly_name ?? "Valetudo Robot", oe = w ? y2(w.attributes) : [], de = (ke, Oe) => {
    const Ve = Ce.has(ke);
    ve(ke, Oe), x(Ve ? `Deselected: ${Oe}` : `Selected: ${Oe}`);
  }, ce = () => {
    fa(Ne, Ce, Se, wa), ee("all"), R(null);
  }, pe = () => {
    ee(dt ? "all" : "restrictions"), R(null);
  }, Te = M;
  return /* @__PURE__ */ r.jsxs("div", { ref: Y, className: `dreame-vacuum-card dreame-vacuum-card--${J.name} valetudo-vacuum-card`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "dreame-vacuum-card__container", children: [
      /* @__PURE__ */ r.jsx(
        V1,
        {
          vacuumEntity: h,
          batteryEntity: p,
          currentStatsAreaEntity: L,
          currentStatsTimeEntity: ae,
          deviceName: te,
          restrictionsMode: dt,
          onRestrictionsToggle: pe,
          onSettingsClick: () => I(!0),
          language: u
        }
      ),
      xa ? /* @__PURE__ */ r.jsx(
        $1,
        {
          mapData: xa,
          mode: Ne,
          selectedRooms: Ne === "room" ? Ce : void 0,
          zone: Ne === "zone" ? Se : null,
          onZoneChange: R,
          restrictions: dt ? et : void 0,
          displayRestrictions: dt ? void 0 : et.savedDisplay,
          onRestrictionDrawn: dt ? W : void 0,
          onRestrictionSelect: dt ? Qa : void 0,
          iterations: wa,
          onIterationsChange: dt ? void 0 : Kn,
          language: u,
          onSegmentClick: Ne === "room" ? (ke) => {
            const Oe = oe.find((Ve) => Ve.id === ke);
            de(ke, Oe?.name ?? String(ke));
          } : void 0
        }
      ) : /* @__PURE__ */ r.jsx("div", { className: "valetudo-vacuum-card__map-placeholder", children: Sa ? g("valetudo.map.error", { message: Sa }) : g("valetudo.map.loading") }),
      /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-button-wrapper", children: dt ? /* @__PURE__ */ r.jsx(
        P1,
        {
          restrictions: et,
          onToolChange: yn,
          onDeleteSelected: xn,
          onSave: ie,
          saving: j,
          language: u
        }
      ) : /* @__PURE__ */ r.jsxs(
        "button",
        {
          className: `cleaning-mode-button${Te ? " cleaning-mode-button--disabled" : ""}`,
          onClick: () => ge(!0),
          disabled: Te,
          type: "button",
          children: [
            /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-button__content", children: [
              /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-button__icon", children: Oi }),
              /* @__PURE__ */ r.jsxs("span", { className: "cleaning-mode-button__text", children: [
                g("valetudo.cleaning.configure"),
                v?.state || f?.state ? `: ${v?.state ?? ""}${f?.state ? ` · ${f.state}` : ""}` : ""
              ] })
            ] }),
            /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-button__arrow", children: "›" })
          ]
        }
      ) }),
      /* @__PURE__ */ r.jsxs("div", { className: "dreame-vacuum-card__controls", children: [
        !dt && Ne === "room" && Ce.size > 0 && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-selected-rooms", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-selected-rooms__label", children: g("room_display.selected_label") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-selected-rooms__names", children: Array.from(Ce.values()).join(", ") })
        ] }),
        !dt && /* @__PURE__ */ r.jsx(
          hg,
          {
            selectedMode: Ne,
            onModeChange: F,
            disabled: M,
            language: u
          }
        ),
        /* @__PURE__ */ r.jsx(
          vg,
          {
            selectedMode: Ne,
            selectedRoomsCount: Ce.size,
            isRunning: M,
            isPaused: tt,
            isDocked: yt,
            onClean: dt ? void 0 : ce,
            onPause: ba,
            onResume: bn,
            onStop: ya,
            onDock: Za,
            language: u,
            disabled: dt
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      J1,
      {
        opened: se,
        onClose: () => ge(!1),
        fanEntity: v,
        waterEntity: f,
        onFanChange: Xt,
        onWaterChange: Ka,
        disabled: Te,
        language: u,
        onStartMapping: ot ? Pe : void 0
      }
    ),
    /* @__PURE__ */ r.jsx(
      F1,
      {
        opened: le,
        onClose: () => I(!1),
        hass: o,
        vacuumEntity: h,
        fanEntity: v,
        waterEntity: f,
        batteryEntity: p,
        segmentsEntity: w,
        wifiEntity: k,
        mainBrushEntity: N,
        rightBrushEntity: S,
        mainFilterEntity: D,
        sensorCleaningEntity: K,
        totalStatsAreaEntity: U,
        totalStatsTimeEntity: $,
        totalStatsCountEntity: Z,
        currentStatsAreaEntity: L,
        currentStatsTimeEntity: ae,
        carpetModeEntity: V,
        entityIds: s,
        valetudoUrl: c.valetudo_url,
        language: u
      }
    ),
    Ee && /* @__PURE__ */ r.jsx(bg, { message: Ee, onClose: H }),
    !b && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-vacuum-card__warning", children: [
      "Map entity not found: ",
      s.map
    ] }),
    /* @__PURE__ */ r.jsx(Di, { opened: P !== null, onClose: () => ne(null), children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-config-error", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "valetudo-config-error__title", children: g(P === "restrictions" ? "valetudo.config_error.restrictions_title" : "valetudo.config_error.mapping_title") }),
      /* @__PURE__ */ r.jsx("p", { className: "valetudo-config-error__desc", children: g("valetudo.config_error.desc") }),
      /* @__PURE__ */ r.jsx("p", { className: "valetudo-config-error__option", children: g("valetudo.config_error.option_url") }),
      /* @__PURE__ */ r.jsx("p", { className: "valetudo-config-error__option", children: g("valetudo.config_error.option_rest_intro") }),
      /* @__PURE__ */ r.jsx("pre", { className: "valetudo-config-error__yaml", children: P === "restrictions" ? ue : ze }),
      /* @__PURE__ */ r.jsx("button", { className: "valetudo-config-error__close", onClick: () => ne(null), children: g("valetudo.config_error.close") })
    ] }) })
  ] });
}
const Bg = '@charset "UTF-8";.accordion{border-radius:.75rem;background:var(--card-bg, rgba(255, 255, 255, .8));overflow:hidden;margin-bottom:.5rem}.accordion__header{display:flex;align-items:center;justify-content:space-between;width:100%;padding:.875rem 1rem;background:none;border:none;cursor:pointer;color:var(--text-primary, #000);font-size:.9375rem;font-weight:500;text-align:left;transition:background-color .2s ease}.accordion__header:hover{background:var(--hover-bg, rgba(0, 0, 0, .03))}.accordion__header:active{background:var(--active-bg, rgba(0, 0, 0, .06))}.accordion__title-wrapper{display:flex;align-items:center;gap:.625rem}.accordion__icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.accordion__icon svg{width:1.25rem;height:1.25rem}.accordion__title{font-weight:500}.accordion__chevron{width:1.25rem;height:1.25rem;color:var(--text-secondary, #666);transition:transform .3s ease}.accordion__content{max-height:0;overflow:hidden;transition:max-height .3s ease}.accordion__content-inner{padding:0 1rem 1rem}.accordion--open .accordion__chevron{transform:rotate(180deg)}.accordion--open .accordion__content{max-height:600px}.toggle{position:relative;display:inline-block;width:3.1875rem;height:1.9375rem}.toggle__input{opacity:0;width:0;height:0}.toggle__slider{position:absolute;cursor:pointer;inset:0;background-color:var(--surface-tertiary, #e0e0e0);transition:.4s;border-radius:1.9375rem}.toggle__knob{position:absolute;height:1.6875rem;width:1.6875rem;left:.125rem;bottom:.125rem;background-color:var(--surface-bg, white);transition:.4s;border-radius:50%;box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .2))}.toggle__input:checked+.toggle__slider{background-color:var(--toggle-active);border:.125rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color)}.toggle__input:checked+.toggle__slider .toggle__knob{transform:translate(1.25rem)}.toggle--disabled{opacity:.5;pointer-events:none}.circular-button{display:flex;flex-direction:column;align-items:center;gap:.5rem}.circular-button:hover{transform:translateY(-.125rem)}.circular-button__circle{border-radius:50%;background:var(--surface-secondary, #f5f5f5);display:flex;align-items:center;justify-content:center;cursor:pointer;border:.0625rem solid var(--text-primary, black);transition:all .2s ease;color:var(--text-primary)}.circular-button__circle--small{width:3.5rem;height:3.5rem;font-size:1.5rem}.circular-button__circle--medium{width:4.5rem;height:4.5rem;font-size:1.75rem}.circular-button__circle--large{width:5.5rem;height:5.5rem;font-size:2rem}.circular-button__circle--selected{background:var(--toggle-active);border:.1875rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color);color:var(--text-primary)}.circular-button__circle:hover:not(.circular-button__circle--selected){background:var(--surface-tertiary, #ebebeb)}.circular-button__circle:active{transform:scale(.95)}.circular-button__icon{display:flex;align-items:center;justify-content:center}.circular-button__icon--svg{width:100%;height:100%;color:var(--text-primary, #1a1a1a)}.circular-button__icon--svg svg{width:100%;height:100%;display:block}.circular-button__circle--selected .circular-button__icon--svg{color:#fff}.circular-button__label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center;line-height:1.2}.modal{position:absolute;inset:20% 0 0;background:var(--surface-bg, #f5f5f7);border-radius:1.25rem 1.25rem 0 0;padding:0 1.25rem 1.25rem;z-index:1000;max-height:80vh;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;color:var(--text-primary, black)}.modal::-webkit-scrollbar{display:none}.modal__backdrop{position:absolute;inset:0;background:var(--backdrop-bg, rgba(0, 0, 0, .4));z-index:999;border-radius:1.25rem}.modal__handle{width:2.25rem;height:.3125rem;background:var(--handle-bg, rgba(0, 0, 0, .15));border-radius:.1875rem;margin:.75rem auto 1.25rem}.modal__content{height:90%}.segmented-control{display:flex;gap:.5rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.75rem;padding:.25rem}.segmented-control__button{flex:1;border:none;border-radius:.625rem;padding:.75rem;font-size:.9375rem;font-weight:500;cursor:pointer;background-color:transparent;color:var(--text-primary, #1a1a1a);transition:all .2s}.segmented-control__button--active{background-color:var(--surface-bg, white);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .08))}.segmented-control__button:hover:not(.segmented-control__button--active){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.toast{position:fixed;bottom:1.25rem;left:50%;transform:translate(-50%);background:var(--surface-bg, #ffffff);border:.0625rem solid var(--border-color, #e0e0e0);border-radius:.5rem;padding:.75rem 1rem;display:flex;align-items:center;gap:.75rem;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12));animation:toast-slide-up .3s ease-out;z-index:1000;max-width:90%}@keyframes toast-slide-up{0%{transform:translate(-50%) translateY(1.25rem);opacity:0}to{transform:translate(-50%) translateY(0);opacity:1}}.toast__message{color:var(--text-primary, #1a1a1a);font-size:.875rem}.toast__close{background:none;border:none;color:var(--text-secondary, #666666);font-size:1.5rem;cursor:pointer;padding:0;width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;line-height:1;transition:color .2s}.toast__close:hover{color:var(--text-primary, #1a1a1a)}.header{padding:1.25rem 1.25rem .625rem;text-align:center}.header__top{display:flex;justify-content:space-between;align-items:flex-start}.header__title-wrapper{flex:1;text-align:center}.header__restrictions-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease;flex-shrink:0}@media(hover:hover){.header__restrictions-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--danger, #f44336)}}.header__restrictions-btn--active{color:#f44336;background:#f443361f}.header__settings-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease;flex-shrink:0}.header__settings-btn svg{width:1.25rem;height:1.25rem}.header__settings-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--text-primary, #1a1a1a)}.header__settings-btn:active{background:var(--active-bg, rgba(0, 0, 0, .1))}.header__title{margin:0;font-size:1rem;font-weight:600;color:var(--text-primary, #1a1a1a)}.header__status{margin:0;font-size:.875rem;color:var(--text-secondary, #666)}.header__progress{margin:0 auto;max-width:12.5rem}.header__progress-bar{width:100%;height:.25rem;background-color:var(--surface-tertiary, #e8e8e8);border-radius:.25rem;overflow:hidden}.header__progress-fill{height:100%;background-color:var(--accent-color, #007aff);transition:width .3s ease}.header__progress-text{margin:.25rem 0 0;font-size:.75rem;color:var(--text-tertiary, #999)}.header__stats{display:flex;justify-content:center;gap:1.25rem;font-size:1rem;color:var(--text-primary, #1a1a1a);margin-top:.875rem;align-items:center}.header__stat{display:flex;align-items:center;gap:.25rem}.header__stat-icon,.header__stat-icon--cleaning-time,.header__stat-icon--area{display:flex}.header__stat-icon--cleaning-time svg,.header__stat-icon--area svg{scale:.8}.header__stat-value{display:flex;font-weight:500}.mode-tabs{display:flex;gap:.25rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.9375rem;padding:.25rem;margin-bottom:.9375rem}.mode-tabs--disabled{opacity:.5;pointer-events:none}.mode-tabs__button{flex:1;display:flex;align-items:center;justify-content:center;border:none;border-radius:.6875rem;padding:.625rem;font-weight:500;font-size:.875rem;cursor:pointer;transition:all .2s;background-color:transparent;color:var(--text-secondary, #666)}.mode-tabs__button-icon svg{scale:.5;color:var(--text-secondary, #666)}.mode-tabs__button--active{background-color:var(--surface-bg, white);color:var(--text-primary, #000);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .1))}.mode-tabs__button:hover:not(.mode-tabs__button--active):not(:disabled){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.mode-tabs__button:disabled{cursor:not-allowed}.action-buttons{display:flex;gap:.75rem;margin-top:.9375rem}.action-buttons__clean,.action-buttons__dock,.action-buttons__pause,.action-buttons__resume,.action-buttons__stop{flex:1;background:var(--accent-bg);border:.0625rem solid var(--accent-bg);border-radius:.875rem;padding:.875rem;font-size:.9375rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.5rem;transition:all .3s cubic-bezier(.16,1,.3,1);color:var(--text-primary)}.action-buttons__clean:disabled,.action-buttons__dock:disabled,.action-buttons__pause:disabled,.action-buttons__resume:disabled,.action-buttons__stop:disabled{opacity:.38;cursor:not-allowed;pointer-events:none}.action-buttons__clean--selected,.action-buttons__dock--selected,.action-buttons__pause--selected,.action-buttons__resume--selected,.action-buttons__stop--selected{transform:translateY(-.125rem);border:.0625rem solid var(--toggle-active-border);box-shadow:0 .625rem 1.25rem #0006,0 0 .75rem #5865f240,inset 0 .0625rem .0625rem #ffffff1a!important}.action-buttons__clean{color:var(--text-primary-invert);background:var(--accent-color)}.action-buttons__pause{color:var(--accent-color);border-color:var(--accent-color-hover)}.action-buttons__resume{color:#32d74b;border-color:#32d74b80}.action-buttons__stop{color:#ff453a;border-color:#ff453a80}.action-buttons__dock{background:var(--surface-secondary);color:var(--text-secondary)}.valetudo-restrictions-hint{flex:1;display:flex;align-items:center;justify-content:center;padding:.625rem 1rem;font-size:.8rem;color:#f44336;background:#f4433614;border-radius:.75rem;border:1px solid rgba(244,67,54,.2)}.cleaning-mode-button-wrapper{margin:.625rem 1.25rem;width:calc(100% - 2.5rem);display:flex;align-items:center;gap:.5rem}.cleaning-mode-button-wrapper__shortcuts{background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:50%;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.1rem;flex-shrink:0;transition:transform .2s,opacity .2s;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-button-wrapper__shortcuts svg{scale:.8}.cleaning-mode-button-wrapper__shortcuts:hover:not(:disabled){transform:scale(1.1);opacity:.9;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button-wrapper__shortcuts:active:not(:disabled){transform:scale(.95)}.cleaning-mode-button-wrapper__shortcuts:disabled{opacity:.5;cursor:not-allowed}.cleaning-mode-button{flex:1;background:var(--surface-bg, #fff);border:none;border-radius:.75rem;padding:.75rem 1rem;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08));color:var(--text-primary, #1a1a1a);font-weight:400;font-size:.9375rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:transform .1s ease}.cleaning-mode-button:hover:not(:disabled){box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button:active:not(:disabled){transform:scale(.98)}.cleaning-mode-button--disabled,.cleaning-mode-button:disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.cleaning-mode-button__content{display:flex;align-items:center}.cleaning-mode-button__icon{scale:.7;display:flex}.cleaning-mode-button__text{font-weight:400;font-size:.8rem}.cleaning-mode-button__arrow{font-size:1.25rem;color:var(--text-tertiary, #999)}.vacuum-map{position:relative;margin:0 1.25rem;border-radius:.9375rem;overflow:hidden;background:var(--surface-bg, #fff);display:flex;align-items:center;justify-content:center;box-shadow:0 .25rem .9375rem var(--card-shadow, rgba(0, 0, 0, .1));min-height:18.75rem}.vacuum-map__image{width:100%;height:100%;object-fit:contain;border-radius:.9375rem}.dreame-vacuum-card--dark .vacuum-map .vacuum-map__image{filter:brightness(.8) contrast(.9) saturate(.85)}.vacuum-map__placeholder{color:#666;text-align:center;font-size:.875rem}.vacuum-map__placeholder small{font-size:.75rem;color:#999}.vacuum-map__overlay{position:absolute;inset:0;background:#0000000d;border-radius:.9375rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;color:#666;pointer-events:none}.vacuum-map__cycles{position:absolute;right:1rem;bottom:1rem;width:2.5rem;height:2.5rem;border-radius:25%;border-radius:.375rem}.vacuum-map__zone{position:absolute;border:.1875rem solid #007aff;background:repeating-linear-gradient(45deg,#007aff1a,#007aff1a .625rem,#007aff0d .625rem 1.25rem);pointer-events:auto;border-radius:.5rem;box-shadow:0 .125rem .75rem #007aff4d}.vacuum-map__zone-handle{position:absolute;width:1.5rem;height:1.5rem;background:#007aff;border:.125rem solid white;border-radius:50%;cursor:pointer;pointer-events:auto;box-shadow:0 .125rem .25rem #0003;transition:all .2s ease;z-index:10;touch-action:none}.vacuum-map__zone-handle:before{content:"";position:absolute;inset:-.5rem}.vacuum-map__zone-handle:hover{background:#0051d5;transform:scale(1.2)}.vacuum-map__zone-handle:active{transform:scale(.9)}.vacuum-map__zone-handle--tl{top:-.75rem;left:-.75rem;cursor:nwse-resize}.vacuum-map__zone-handle--tr{top:-.75rem;right:-.75rem;cursor:nesw-resize}.vacuum-map__zone-handle--bl{bottom:-.75rem;left:-.75rem;cursor:nesw-resize}.vacuum-map__zone-handle--br{bottom:-.75rem;right:-.75rem;cursor:nwse-resize}.vacuum-map__zone-clear{position:absolute;top:-.75rem;right:-.75rem;width:1.5rem;height:1.5rem;border-radius:50%;background:#ff3b30;color:#fff;border:.125rem solid white;font-size:1.125rem;font-weight:700;cursor:pointer;pointer-events:auto;display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .5rem #ff3b3066;transition:all .2s ease;line-height:1;padding:0}.vacuum-map__zone-clear:hover{background:#ff1f0f;transform:scale(1.1)}.vacuum-map__zone-clear:active{transform:scale(.95)}.vacuum-map__room-segments{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:auto}.vacuum-map__room-segment{cursor:pointer;transition:all .2s ease}.vacuum-map__room-segment:hover{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .2));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .3));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected:hover{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .4))}.vacuum-map__rooms{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.vacuum-map__room{position:absolute;transform:translate(-50%,-50%);width:2rem;height:2rem;border-radius:50%;background:#ffffffe6;border:.125rem solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:var(--text-primary, #1a1a1a);cursor:pointer;pointer-events:auto;transition:all .2s ease;box-shadow:0 .125rem .25rem #0000001a;z-index:2}.vacuum-map__room:hover{transform:translate(-50%,-50%) scale(1.1);background:#fff;box-shadow:0 .25rem .5rem #00000026}.vacuum-map__room--selected{background:var(--accent-color, #d4af37);color:#fff;border-color:var(--accent-color, #d4af37);box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(212, 175, 55, .4))}.vacuum-map__room--selected:hover{transform:translate(-50%,-50%) scale(1.1);box-shadow:0 .25rem .75rem var(--accent-color-shadow-color, rgba(212, 175, 55, .5))}.room-list-view{position:absolute;inset:0;background:var(--surface-bg, #fff);border-radius:.9375rem;display:flex;flex-direction:column;overflow:hidden}.room-list-view__header{padding:.75rem 3.5rem .75rem 1rem;font-size:.875rem;color:var(--text-secondary, #666);background:var(--surface-secondary, #f5f5f5);border-bottom:1px solid var(--border-color, #e0e0e0);flex-shrink:0}.room-list-view__list{flex:1;overflow-y:auto;padding:.5rem;display:flex;flex-direction:column;gap:.5rem}.room-list-view__list::-webkit-scrollbar{width:.25rem}.room-list-view__list::-webkit-scrollbar-track{background:transparent}.room-list-view__list::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.room-list-view__empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary, #999);font-size:.875rem}.room-list-view__item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:var(--surface-secondary, #f5f5f5);border:2px solid transparent;border-radius:.75rem;cursor:pointer;transition:all .2s ease;width:100%;text-align:left}.room-list-view__item:hover{background:var(--surface-tertiary, #ebebeb)}.room-list-view__item:active{transform:scale(.98)}.room-list-view__item--selected{background:var(--accent-bg-transparent, rgba(212, 175, 55, .1));border-color:var(--accent-color, #d4af37)}.room-list-view__item--selected:hover{background:var(--accent-bg-transparent, rgba(212, 175, 55, .15))}.room-list-view__item-name{flex:1;font-size:.9375rem;font-weight:500;color:var(--text-primary, #1a1a1a);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.room-list-view__item-check{width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--accent-color, #d4af37)}.view-toggle-button{position:absolute;top:.75rem;right:.75rem;z-index:10;width:2.25rem;height:2.25rem;border-radius:.5rem;background:var(--surface-bg, #fff);border:1px solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-primary, #1a1a1a);box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .1));transition:all .2s ease}.view-toggle-button:hover{background:var(--surface-secondary, #f5f5f5);transform:scale(1.05)}.view-toggle-button:active{transform:scale(.95)}.view-toggle-button svg{transition:transform .2s ease}.cleaning-mode-modal__header{margin-bottom:1.5rem}.cleaning-mode-modal__content-wrapper{width:100%;overflow-x:hidden;padding-bottom:1rem}.cleaning-mode-modal__section{margin-bottom:1.5rem}.cleaning-mode-modal__section-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500;margin:0 0 .75rem}.cleaning-mode-modal__section-header{display:flex;align-items:center;gap:.375rem;margin-bottom:.75rem}.cleaning-mode-modal__help-icon{display:inline-flex;align-items:center;justify-content:center;width:1rem;height:1rem;border-radius:50%;border:.09375rem solid var(--text-tertiary, #999);font-size:.6875rem;color:var(--text-tertiary, #999);font-weight:600}.cleaning-mode-modal__room-map{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem;display:flex;align-items:center;justify-content:center;min-height:7.5rem}.cleaning-mode-modal__placeholder{font-size:.8125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__mode-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.cleaning-mode-modal__mode-card{position:relative;border:.125rem solid var(--border-color, #e0e0e0);border-radius:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:var(--surface-bg, white);padding:1.5rem 1rem;transition:all .2s ease}.cleaning-mode-modal__mode-card:hover{transform:translateY(-.125rem);box-shadow:0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--selected{border:.1875rem solid var(--accent-color, #d4af37);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(212, 175, 55, .15))}.cleaning-mode-modal__mode-card--selected:hover{transform:translateY(-.125rem);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25)),0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--mapping{border-style:dashed;border-color:var(--accent-color, #d4af37);opacity:.85}.cleaning-mode-modal__mode-card--mapping:hover{opacity:1}.cleaning-mode-modal__mode-icon{border-radius:50%;margin-bottom:.75rem;display:flex;align-items:center;justify-content:center;font-size:1.75rem}.cleaning-mode-modal__mode-label{font-size:.875rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__mode-checkmark{position:absolute;top:.75rem;right:.75rem;width:1.5rem;height:1.5rem;border-radius:50%;background:var(--accent-color, #d4af37);display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .15));color:#fff;font-size:.875rem}.cleaning-mode-modal__horizontal-scroll{display:flex;justify-content:space-around;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar{height:.25rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-track{background:var(--surface-secondary, #f1f1f1);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb:hover{background:var(--border-color, #bbb)}.cleaning-mode-modal__mode-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__mode-option-label{font-size:.75rem;color:var(--text-secondary, #666);text-align:center;line-height:1.2}.cleaning-mode-modal__power-grid{display:grid;grid-template-columns:repeat(4,1fr);margin-bottom:1rem}.cleaning-mode-modal__power-option{display:flex;flex-direction:column;align-items:center;gap:.5rem}.cleaning-mode-modal__power-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.cleaning-mode-modal__max-plus{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem}.cleaning-mode-modal__max-plus-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}.cleaning-mode-modal__max-plus-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__max-plus-description{font-size:.8125rem;color:var(--text-tertiary, #999);margin:0;line-height:1.4}.cleaning-mode-modal__slider-container{position:relative;padding:0 .5rem;margin-bottom:.75rem}.cleaning-mode-modal__slider-wrapper{position:relative;padding-top:2rem}.cleaning-mode-modal__slider{width:100%;height:.375rem;border-radius:.1875rem;outline:none;-webkit-appearance:none;appearance:none;cursor:pointer}.cleaning-mode-modal__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider::-moz-range-thumb{width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;border:none;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip{position:absolute;top:-.5rem;left:0;transform:translate(-50%);background:var(--accent-color, #d4af37);color:#fff;padding:.25rem .5rem;border-radius:.375rem;font-size:.85rem;font-weight:600;white-space:nowrap;pointer-events:none;box-shadow:0 .125rem .375rem var(--accent-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip:after{content:"";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:.3125rem solid transparent;border-right:.3125rem solid transparent;border-top:.3125rem solid var(--accent-color, #d4af37)}.cleaning-mode-modal__slider-value{position:absolute;top:-2rem;transform:translate(-50%);background:var(--accent-color, #d4af37);border-radius:50%;width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:#fff;box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25));pointer-events:none}.cleaning-mode-modal__slider-labels{display:flex;justify-content:space-between;padding:0 .5rem;margin-top:1.5rem}.cleaning-mode-modal__slider-label{font-size:.8125rem}.cleaning-mode-modal__slider-label--inactive{color:var(--text-tertiary, #999)}.cleaning-mode-modal__slider-label--active{color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__setting{display:flex;align-items:center;justify-content:space-between;padding:1rem;background:var(--surface-bg, white);border-radius:.75rem;margin-bottom:1rem}.cleaning-mode-modal__setting--clickable{cursor:pointer;transition:background .2s ease}.cleaning-mode-modal__setting--clickable:hover{background:var(--surface-secondary, #f8f8f8)}.cleaning-mode-modal__setting--clickable:active{background:var(--surface-tertiary, #f0f0f0)}.cleaning-mode-modal__setting-label{font-size:.9375rem;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__setting-value{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__setting-arrow{font-size:1.125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__route-grid{display:flex;justify-content:space-around}.cleaning-mode-modal__route-option{display:flex;flex-direction:column;align-items:center;gap:.5rem}.cleaning-mode-modal__route-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.room-selection-display{padding:.75rem 1rem;background:var(--accent-bg, #e3f2fd);border-radius:.5rem;margin-bottom:.75rem;font-size:.875rem;color:var(--text-primary, #1a1a1a)}.room-selection-display__label{font-weight:600;margin-right:.5rem;color:var(--accent-color, #007aff)}.room-selection-display__rooms{color:var(--text-secondary, #666666)}.shortcuts-modal{padding:0}.shortcuts-modal__title{font-size:1.3rem;font-weight:600;margin:0 0 1rem;padding:1.5rem 1.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty{padding:2rem 1.5rem;text-align:center;color:var(--text-secondary, #666)}.shortcuts-modal__empty p{margin:.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty-hint{font-size:.9rem;color:var(--text-tertiary, #888)}.shortcuts-modal__list{max-height:35rem;overflow-y:auto;padding:.5rem 0;gap:.5rem;display:flex;flex-direction:column}.shortcuts-modal__item{display:flex;align-items:center;gap:1rem;padding:.75rem 1.5rem;margin:.25rem 1rem;background:var(--surface-bg, #fff);border:2px solid var(--accent-color);border-radius:.75rem;box-shadow:0 .125rem .5rem var(--accent-shadow);transition:all .2s;width:90%}.shortcuts-modal__item:hover{box-shadow:0 .25rem .75rem var(--accent-shadow);transform:translateY(-.0625rem)}.shortcuts-modal__item-info{flex:1;min-width:0;display:flex;align-items:center;gap:.75rem}.shortcuts-modal__item-icon{display:flex;font-size:1.3rem;flex-shrink:0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__item-icon svg{scale:.8}.shortcuts-modal__item-name{font-size:1rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.ai-detection-section{display:flex;flex-direction:column;gap:.75rem}.ai-detection-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.ai-detection-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.ai-detection-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.ai-detection-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section{display:flex;flex-direction:column;gap:.75rem}.carpet-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.carpet-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.carpet-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.carpet-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.carpet-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.carpet-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.carpet-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.consumables-section{display:flex;flex-direction:column;gap:1rem}.consumables-section__item{display:flex;flex-direction:column;gap:.375rem}.consumables-section__info{display:flex;justify-content:space-between;align-items:center}.consumables-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.consumables-section__stats{font-size:.75rem;color:var(--text-secondary, #666)}.consumables-section__progress{height:.375rem;background:var(--progress-bg, rgba(0, 0, 0, .1));border-radius:.1875rem;overflow:hidden}.consumables-section__progress-bar{height:100%;border-radius:.1875rem;transition:width .3s ease}.consumables-section__reset{align-self:flex-end;padding:.25rem .75rem;font-size:.75rem;font-weight:500;color:var(--accent-color, #007aff);background:none;border:1px solid var(--accent-color, #007aff);border-radius:.375rem;cursor:pointer;transition:all .2s ease}.consumables-section__reset:hover{background:var(--accent-color, #007aff);color:#fff}.consumables-section__reset:active{opacity:.8}.device-info-section{display:flex;flex-direction:column;gap:.75rem}.device-info-section__item{display:flex;justify-content:space-between;align-items:center;padding:.25rem 0;border-bottom:1px solid var(--divider-color, rgba(0, 0, 0, .06))}.device-info-section__item:last-child{border-bottom:none}.device-info-section__label{font-size:.875rem;color:var(--text-secondary, #666)}.device-info-section__value{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.map-management-section__description{font-size:.8125rem;color:var(--text-secondary, #666);margin:0 0 .75rem;line-height:1.4}.map-management-section__empty{font-size:.875rem;color:var(--text-secondary, #666);text-align:center;padding:1rem 0;margin:0}.map-management-section__maps{display:flex;flex-wrap:wrap;gap:.5rem}.map-management-section__map{padding:.5rem 1rem;font-size:.875rem;font-weight:500;color:var(--text-primary, #000);background:var(--button-bg, rgba(0, 0, 0, .05));border:2px solid transparent;border-radius:.5rem;cursor:pointer;transition:all .2s ease}.map-management-section__map:hover{background:var(--button-hover-bg, rgba(0, 0, 0, .08))}.map-management-section__map--active{border-color:var(--accent-color, #007aff);background:var(--accent-bg, rgba(0, 122, 255, .1));color:var(--accent-color, #007aff)}.quick-settings-section{display:flex;flex-direction:column;gap:1rem}.quick-settings-section__item{display:flex;justify-content:space-between;align-items:center;gap:1rem}.quick-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.quick-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.quick-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.volume-section{display:flex;flex-direction:row;gap:1rem}.volume-section__control{display:flex;align-items:center;gap:.75rem;flex:1}.volume-section__icon{display:flex;align-items:center;justify-content:center;color:var(--text-secondary, #666);flex-shrink:0}.volume-section__slider-container{flex:1;padding-top:1.5rem;margin-top:1rem}.volume-section__slider-wrapper{position:relative;width:100%}.volume-section__slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:3px;outline:none;cursor:pointer}.volume-section__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-webkit-slider-thumb:hover{transform:scale(1.1)}.volume-section__slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;border:none;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-moz-range-thumb:hover{transform:scale(1.1)}.volume-section__tooltip{position:absolute;top:-1.75rem;transform:translate(-50%);background:var(--accent-color, #007aff);color:#fff;padding:.25rem .5rem;border-radius:4px;font-size:.75rem;font-weight:500;white-space:nowrap;pointer-events:none}.volume-section__tooltip:after{content:"";position:absolute;top:100%;left:50%;transform:translate(-50%);border:4px solid transparent;border-top-color:var(--accent-color, #007aff)}.volume-section__test-button{display:flex;align-items:center;justify-content:center;gap:.5rem;padding:.625rem 1rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;color:var(--text-primary, #333);font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s ease}.volume-section__test-button:hover{background:var(--surface-tertiary, #eee)}.volume-section__test-button:active{transform:scale(.98)}.volume-section__test-button svg{color:var(--accent-color, #007aff)}.settings-panel{height:100%}.settings-panel__title{font-size:1.25rem;font-weight:600;margin:0 0 1rem;text-align:center;color:var(--text-primary, #000)}.settings-panel__scroll-wrapper{height:90%;overflow-y:auto}.settings-panel__sections{display:flex;flex-direction:column;gap:.25rem;padding-right:.25rem}.settings-panel__sections::-webkit-scrollbar{width:4px}.settings-panel__sections::-webkit-scrollbar-track{background:transparent}.settings-panel__sections::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb, rgba(0, 0, 0, .2));border-radius:2px}.dreame-vacuum-card{position:relative;background:var(--card-bg, #f5f5f7);border-radius:1.25rem;overflow:hidden;box-shadow:0 .125rem 1.25rem var(--card-shadow, rgba(0, 0, 0, .08));font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.dreame-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center}.dreame-vacuum-card__container{display:flex;flex-direction:column;gap:1rem}.dreame-vacuum-card__controls{padding:0 1.25rem 1.25rem}.dreame-vacuum-card__error{padding:1.25rem;text-align:center;color:var(--error-color, #ff3b30);font-size:.875rem}.valetudo-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center;font-size:.875rem}.valetudo-vacuum-card__warning{padding:.5rem 1.25rem;background:var(--warning-bg, #fff3cd);color:var(--warning-color, #856404);font-size:.75rem;border-radius:0 0 1.25rem 1.25rem}.valetudo-vacuum-card__map-placeholder{margin:0 1.25rem;min-height:200px;display:flex;align-items:center;justify-content:center;background:var(--surface-secondary, #e8e8e8);border-radius:.75rem;font-size:.875rem;color:var(--text-secondary, #666)}.valetudo-selected-rooms{display:flex;align-items:baseline;gap:.4rem;padding:0 0 .25rem;font-size:.8rem;line-height:1.4}.valetudo-selected-rooms__label{font-weight:600;color:var(--text-secondary, #888);white-space:nowrap}.valetudo-selected-rooms__names{color:var(--accent-color, #007aff);font-weight:500}.valetudo-config-error{display:flex;flex-direction:column;gap:.75rem;padding:.25rem 0}.valetudo-config-error__title{font-size:1rem;font-weight:700;color:var(--text-primary, #1a1a1a);margin:0}.valetudo-config-error__desc{font-size:.875rem;color:var(--text-secondary, #666);margin:0}.valetudo-config-error__option{font-size:.875rem;color:var(--text-primary, #1a1a1a);margin:0}.valetudo-config-error__yaml{background:var(--surface-secondary, #f0f0f0);border:1px solid var(--border-color, #ddd);border-radius:.5rem;padding:.75rem;font-size:.75rem;font-family:monospace;white-space:pre;overflow-x:auto;color:var(--text-primary, #1a1a1a);margin:0;-webkit-user-select:all;user-select:all}.valetudo-config-error__close{align-self:flex-end;background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:.5rem;padding:.5rem 1.25rem;font-size:.875rem;font-weight:600;cursor:pointer;transition:opacity .15s}.valetudo-config-error__close:hover{opacity:.85}.valetudo-map-canvas{width:100%;background:var(--card-bg, #1a1a2e);border-radius:.75rem;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:200px;position:relative;-webkit-user-select:none;user-select:none;touch-action:none}.valetudo-map-canvas--zone-mode{cursor:crosshair}.valetudo-map-canvas--room-mode{cursor:pointer}.valetudo-map-canvas__inner{position:relative;width:100%;transform-origin:center center;will-change:transform}.valetudo-map-canvas__canvas{width:100%;height:auto;display:block;image-rendering:auto}.valetudo-map-canvas__zone-drag{position:absolute;background:#ff980033;border:2px dashed rgba(255,152,0,.9);pointer-events:none;border-radius:2px}.valetudo-map-canvas__widget-zone{position:absolute;background:#ff98002e;border:2px dashed rgba(255,152,0,.9);border-radius:3px;box-sizing:border-box}.valetudo-map-canvas__widget-zone-move{position:absolute;inset:0;cursor:move;touch-action:none}.valetudo-map-canvas__widget-zone-move:after{content:"✥";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.4rem;color:#ff9800d9;pointer-events:none;text-shadow:0 0 3px #000}.valetudo-map-canvas__widget-zone-resize{position:absolute;bottom:-8px;right:-8px;width:24px;height:24px;background:#ff9800e6;border-radius:50%;cursor:se-resize;touch-action:none;z-index:2}.valetudo-map-canvas__widget-zone-resize:after{content:"⤡";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:.9rem;color:#fff;pointer-events:none}.valetudo-map-canvas__widget-zone-delete{position:absolute;top:-10px;right:-10px;width:22px;height:22px;background:#e53935;color:#fff;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none}.valetudo-map-canvas--restrictions-wall,.valetudo-map-canvas--restrictions-no_go,.valetudo-map-canvas--restrictions-no_mop{cursor:crosshair}.valetudo-map-canvas__pending-restriction{position:absolute;border-radius:3px;box-sizing:border-box}.valetudo-map-canvas__pending-restriction--wall{background:#f443361a;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__pending-restriction--no_go{background:#f443362e;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__pending-restriction--no_mop{background:#2196f32e;border:2px dashed rgba(33,150,243,.85)}.valetudo-map-canvas__pending-restriction-move{position:absolute;inset:0;cursor:move;touch-action:none}.valetudo-map-canvas__pending-restriction-move:after{content:"✥";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.4rem;color:#f44336d9;pointer-events:none;text-shadow:0 0 3px #000}.valetudo-map-canvas__pending-restriction-resize{position:absolute;bottom:-8px;right:-8px;width:24px;height:24px;background:#f44336e6;border-radius:50%;cursor:se-resize;touch-action:none;z-index:2}.valetudo-map-canvas__pending-restriction-resize:after{content:"⤡";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:.9rem;color:#fff;pointer-events:none}.valetudo-map-canvas__pending-restriction-delete{position:absolute;top:-10px;right:-10px;width:22px;height:22px;background:#e53935;color:#fff;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none}.valetudo-map-canvas__pending-restriction-confirm{position:absolute;bottom:-10px;left:-10px;width:26px;height:26px;background:#43a047;color:#fff;border:none;border-radius:50%;font-size:.9rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-endpoint{width:22px;height:22px;background:#f44336e6;border:2px solid #fff;border-radius:50%;cursor:move;touch-action:none;z-index:3;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-action-btn{width:22px;height:22px;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:3;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none;color:#fff;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-action-btn--delete{background:#e53935}.valetudo-map-canvas__wall-action-btn--confirm{background:#43a047}.valetudo-map-canvas--restrictions-select{cursor:pointer}.valetudo-map-canvas__restriction-preview{position:absolute;pointer-events:none;border-radius:2px}.valetudo-map-canvas__restriction-preview--no_go{background:#f443362e;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__restriction-preview--no_mop{background:#2196f32e;border:2px dashed rgba(33,150,243,.85)}.valetudo-map-canvas__restriction-preview-svg{position:absolute;inset:0;pointer-events:none}.valetudo-map-canvas__bottom-controls{position:absolute;bottom:.5rem;right:.5rem;display:flex;flex-direction:row;align-items:flex-end;gap:4px;z-index:10}.valetudo-map-canvas__zoom-controls{display:flex;flex-direction:column;gap:2px}.valetudo-map-canvas__zoom-controls button{width:28px;height:28px;background:#0000008c;color:#fff;border:1px solid rgba(255,255,255,.2);border-radius:4px;font-size:1.1rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}.valetudo-map-canvas__zoom-controls button:active{background:#fff3}.valetudo-map-canvas__iterations-btn{width:32px;height:32px;background:rgba(var(--rgb-primary-color, 3, 169, 244),.7);color:#fff;border:1px solid rgba(255,255,255,.35);border-radius:4px;font-size:.8rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}.valetudo-map-canvas__iterations-btn:active{background:rgba(var(--rgb-primary-color, 3, 169, 244),.9)}.valetudo-speed-panel{padding:0 1.25rem;display:flex;flex-direction:column;gap:.75rem}.valetudo-speed-row{display:flex;flex-direction:column;gap:.375rem}.valetudo-speed-row__title{display:flex;align-items:center;gap:.3rem;font-size:.75rem;font-weight:600;color:var(--text-secondary, #888);text-transform:uppercase;letter-spacing:.04em;padding:0 .125rem}.valetudo-speed-row__tabs{display:flex;gap:.25rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.9375rem;padding:.25rem}.valetudo-speed-row__tab{flex:1;display:flex;align-items:center;justify-content:center;border:none;border-radius:.6875rem;padding:.5rem .25rem;font-weight:500;font-size:.8125rem;cursor:pointer;transition:all .2s;background-color:transparent;color:var(--text-secondary, #666);text-transform:capitalize;white-space:nowrap}.valetudo-speed-row__tab--active{background-color:var(--surface-bg, white);color:var(--text-primary, #000);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .1))}.valetudo-speed-row__tab:hover:not(.valetudo-speed-row__tab--active):not(:disabled){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.valetudo-speed-row__tab:disabled{opacity:.4;cursor:not-allowed}.valetudo-settings-panel__title{font-size:1.125rem;font-weight:700;color:var(--text-primary, #111);margin:0 0 1rem;text-align:center}.valetudo-settings-panel__scroll{display:flex;flex-direction:column;gap:.5rem}.valetudo-settings-section{display:flex;flex-direction:column;gap:.5rem;padding:.125rem 0}.valetudo-settings-section__row{display:flex;align-items:baseline;justify-content:space-between;gap:.5rem;padding:.25rem 0;border-bottom:1px solid var(--surface-tertiary, rgba(128, 128, 128, .12))}.valetudo-settings-section__row:last-child{border-bottom:none}.valetudo-settings-section__row--toggle{align-items:center}.valetudo-settings-section__label{font-size:.875rem;color:var(--text-secondary, #666);flex-shrink:0}.valetudo-settings-section__label--mono{font-family:monospace;font-size:.75rem}.valetudo-settings-section__value{font-size:.875rem;font-weight:500;color:var(--text-primary, #111);text-align:right;word-break:break-all}.valetudo-settings-section__value--mono{font-family:monospace;font-size:.7rem;color:var(--text-secondary, #666)}.valetudo-settings-section__link{display:inline-flex;align-items:center;gap:.3rem;font-size:.875rem;font-weight:500;color:var(--accent-color, #007aff);text-decoration:none}.valetudo-settings-section__link:hover{text-decoration:underline}.valetudo-settings-section__divider{height:1px;background:var(--surface-tertiary, rgba(128, 128, 128, .2));margin:.25rem 0}.valetudo-settings-section--consumables{gap:.75rem}.consumable-row{display:flex;flex-direction:column;gap:.375rem;padding-bottom:.5rem;border-bottom:1px solid var(--surface-tertiary, rgba(128, 128, 128, .12))}.consumable-row:last-child{border-bottom:none;padding-bottom:0}.consumable-row__header{display:flex;align-items:center;justify-content:space-between;gap:.5rem}.consumable-row__label{font-size:.875rem;color:var(--text-secondary, #666);flex:1}.consumable-row__value{font-size:.875rem;font-weight:500;color:var(--text-primary, #111)}.consumable-row__value--depleted{color:var(--error-color, #ff3b30);font-weight:700}.consumable-row__reset-btn{display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;padding:0;background:none;border:1px solid var(--surface-tertiary, rgba(128, 128, 128, .3));border-radius:50%;color:var(--text-secondary, #666);font-size:.875rem;cursor:pointer;transition:all .15s ease;line-height:1}.consumable-row__reset-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--text-primary, #111)}.consumable-progress{height:4px;background:var(--surface-tertiary, rgba(128, 128, 128, .15));border-radius:2px;overflow:hidden}.consumable-progress__fill{height:100%;border-radius:2px;transition:width .3s ease}.valetudo-toggle{position:relative;display:inline-flex;align-items:center;width:2.75rem;height:1.5rem;background:var(--surface-tertiary, #ccc);border:none;border-radius:.75rem;cursor:pointer;transition:background .2s ease;flex-shrink:0;padding:0}.valetudo-toggle--on{background:var(--accent-color, #007aff)}.valetudo-toggle__thumb{position:absolute;left:.1875rem;width:1.125rem;height:1.125rem;background:#fff;border-radius:50%;box-shadow:0 1px 3px #00000040;transition:transform .2s ease}.valetudo-toggle--on .valetudo-toggle__thumb{transform:translate(1.25rem)}.restrictions-toolbar{display:none}.rt{display:flex;flex-direction:column;align-items:stretch;gap:6px;width:100%}.rt__seg{display:flex;border-radius:8px;overflow:hidden;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);flex-shrink:0}.rt__seg-btn{display:inline-flex;align-items:center;justify-content:center;gap:5px;flex:1;padding:0 10px;height:32px;border:none;border-right:1px solid rgba(255,255,255,.07);background:transparent;color:#ffffff73;font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;transition:background .12s,color .12s;outline:none}.rt__seg-btn:last-child{border-right:none}.rt__seg-btn:hover:not(.rt__seg-btn--active){background:#ffffff14;color:#fffc}.rt__seg-btn--select.rt__seg-btn--active{background:#ffffff26;color:#fff}.rt__seg-btn--wall.rt__seg-btn--active,.rt__seg-btn--no_go.rt__seg-btn--active{background:#ef535047;color:#ffcdd2}.rt__seg-btn--no_mop.rt__seg-btn--active{background:#42a5f547;color:#bbdefb}.rt__seg-btn svg{flex-shrink:0}.rt__actions{display:flex;align-items:center;justify-content:center;gap:6px}.rt__action-btn{display:inline-flex;align-items:center;justify-content:center;gap:5px;height:32px;padding:0 10px;border:1px solid transparent;border-radius:7px;background:#ffffff0f;color:#ffffff73;font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;transition:background .12s,color .12s,border-color .12s;outline:none}.rt__action-btn:disabled{opacity:.38;cursor:not-allowed}.rt__action-btn:hover:not(:disabled){background:#ffffff1a;color:#ffffffd9}.rt__action-btn--delete{width:32px;padding:0;color:#ef5350a6;border-color:#ef535033}.rt__action-btn--delete:hover:not(:disabled){background:#ef53502e;color:#ef5350;border-color:#ef535066}.rt__action-btn--save{color:#ffffff47}.rt__action-btn--save.rt__action-btn--save-dirty{background:#4caf5033;color:#a5d6a7;border-color:#4caf5059}.rt__action-btn--save.rt__action-btn--save-dirty:hover:not(:disabled){background:#4caf504d;color:#c8e6c9}.rt__action-btn svg{flex-shrink:0}';
class S2 extends HTMLElement {
  _root = null;
  _hass;
  _config;
  constructor() {
    super(), this.attachShadow({ mode: "open" });
    const c = document.createElement("style");
    c.textContent = Bg, this.shadowRoot.appendChild(c);
  }
  setConfig(c) {
    if (!c.entity)
      throw new Error("You need to define an entity");
    this._config = c, this.render();
  }
  set hass(c) {
    this._hass = c, this.render();
  }
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    this._root && (this._root.unmount(), this._root = null);
  }
  render() {
    if (!this._hass || !this._config || !this.shadowRoot) return;
    let c = this.shadowRoot.querySelector("#react-root");
    c || (c = document.createElement("div"), c.id = "react-root", this.shadowRoot.appendChild(c)), this._root || (this._root = J_.createRoot(c)), this._root.render(
      /* @__PURE__ */ r.jsx($_.StrictMode, { children: /* @__PURE__ */ r.jsx(G1, { hass: this._hass, config: this._config }) })
    );
  }
  getCardSize() {
    return 4;
  }
  static getStubConfig() {
    return {
      type: "custom:dreame-vacuum-map-card",
      entity: "vacuum.dreame_vacuum",
      title: "Dreame Vacuum"
    };
  }
}
customElements.get("dreame-vacuum-map-card") || customElements.define("dreame-vacuum-map-card", S2);
window.customCards && (window.customCards = window.customCards || [], window.customCards.push({
  type: "dreame-vacuum-map-card",
  name: "Dreame Vacuum Map Card",
  description: "Custom vacuum map card for Dreame vacuum cleaners"
}));
console.info("Dreame Vacuum Map Card (React) loaded");
class w2 extends HTMLElement {
  _root = null;
  _hass;
  _config;
  constructor() {
    super(), this.attachShadow({ mode: "open" });
    const c = document.createElement("style");
    c.textContent = Bg, this.shadowRoot.appendChild(c);
  }
  setConfig(c) {
    if (!c.entity)
      throw new Error("valetudo-react-map-card: you need to define an entity (vacuum.*)");
    this._config = c, this.render();
  }
  set hass(c) {
    this._hass = c, this.render();
  }
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    this._root && (this._root.unmount(), this._root = null);
  }
  render() {
    if (!this._hass || !this._config || !this.shadowRoot) return;
    let c = this.shadowRoot.querySelector("#react-root");
    c || (c = document.createElement("div"), c.id = "react-root", this.shadowRoot.appendChild(c)), this._root || (this._root = J_.createRoot(c)), this._root.render(
      /* @__PURE__ */ r.jsx($_.StrictMode, { children: /* @__PURE__ */ r.jsx(x2, { hass: this._hass, config: this._config }) })
    );
  }
  getCardSize() {
    return 5;
  }
  static getStubConfig(c) {
    return {
      type: "custom:valetudo-react-map-card",
      entity: c && Object.keys(c.states).find((u) => u.startsWith("vacuum.valetudo_")) || "vacuum.valetudo_yourrobot"
    };
  }
  static getConfigForm() {
    const c = [
      {
        name: "entity",
        required: !0,
        selector: { entity: { domain: "vacuum" } }
      },
      {
        name: "valetudo_identifier",
        selector: { text: {} }
      },
      {
        name: "title",
        selector: { text: {} }
      },
      {
        type: "grid",
        name: "",
        flatten: !0,
        column_min_width: "180px",
        schema: [
          {
            name: "theme",
            selector: {
              select: {
                options: [
                  { label: "Light ☀️", value: "light" },
                  { label: "Dark 🌙", value: "dark" }
                ],
                mode: "dropdown"
              }
            }
          },
          {
            name: "language",
            selector: {
              select: {
                options: [
                  { label: "English", value: "en" },
                  { label: "Русский", value: "ru" },
                  { label: "Deutsch", value: "de" },
                  { label: "Español", value: "es" },
                  { label: "Italiano", value: "it" },
                  { label: "Nederlands", value: "nl" },
                  { label: "Polski", value: "pl" },
                  { label: "中文", value: "zh" }
                ],
                mode: "dropdown"
              }
            }
          }
        ]
      },
      {
        name: "valetudo_url",
        selector: { text: { type: "url" } }
      },
      {
        type: "expandable",
        name: "advanced_overrides",
        flatten: !0,
        title: "Advanced entity overrides",
        schema: [
          { name: "map_entity", selector: { entity: { domain: "camera" } } },
          { name: "fan_entity", selector: { entity: { domain: "select" } } },
          { name: "water_entity", selector: { entity: { domain: "select" } } },
          { name: "battery_entity", selector: { entity: { domain: "sensor" } } },
          { name: "segments_entity", selector: { entity: { domain: "sensor" } } }
        ]
      }
    ], s = {
      entity: "Vacuum entity",
      valetudo_identifier: "Valetudo identifier (e.g. HarshSillyPigeon)",
      title: "Card title",
      theme: "Theme",
      language: "Language",
      valetudo_url: "Valetudo URL (for direct REST saves)",
      map_entity: "Map entity (camera.*)",
      fan_entity: "Fan speed entity (select.*)",
      water_entity: "Water grade entity (select.*)",
      battery_entity: "Battery entity (sensor.*)",
      segments_entity: "Segments entity (sensor.*)"
    }, u = {
      valetudo_identifier: "Open Valetudo web UI → Robot Settings → Connectivity → MQTT → Identifier. Example: HarshSillyPigeon. Required for room and zone cleaning via MQTT.",
      valetudo_url: "Optional. Override the robot URL for direct REST calls (restrictions, mapping). If left empty, the card auto-detects the IP from the Wi-Fi sensor entity. Set this only if auto-detection fails (e.g. the robot IP changes or the Wi-Fi entity is unavailable)."
    };
    return {
      schema: c,
      computeLabel: (g) => s[g.name] ?? g.name,
      computeHelper: (g) => u[g.name]
    };
  }
}
customElements.define("valetudo-react-map-card", w2);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "valetudo-react-map-card",
  name: "Valetudo React Map Card",
  description: "Beautiful map card for Valetudo-flashed vacuum cleaners"
});
export {
  S2 as default
};
