
(function() {
  const style = document.createElement('style');
  style.textContent = "@charset \"UTF-8\";.header{padding:1.25rem 1.25rem .625rem;text-align:center}.header__top{display:flex;justify-content:space-between;align-items:flex-start}.header__title-wrapper{flex:1;text-align:center}.header__restrictions-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease;flex-shrink:0}@media(hover:hover){.header__restrictions-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--danger, #f44336)}}.header__restrictions-btn--active{color:#f44336;background:#f443361f}.header__settings-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease;flex-shrink:0}.header__settings-btn svg{width:1.25rem;height:1.25rem}.header__settings-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--text-primary, #1a1a1a)}.header__settings-btn:active{background:var(--active-bg, rgba(0, 0, 0, .1))}.header__title{margin:0;font-size:1rem;font-weight:600;color:var(--text-primary, #1a1a1a)}.header__status{margin:0;font-size:.875rem;color:var(--text-secondary, #666)}.header__progress{margin:0 auto;max-width:12.5rem}.header__progress-bar{width:100%;height:.25rem;background-color:var(--surface-tertiary, #e8e8e8);border-radius:.25rem;overflow:hidden}.header__progress-fill{height:100%;background-color:var(--accent-color, #007aff);transition:width .3s ease}.header__progress-text{margin:.25rem 0 0;font-size:.75rem;color:var(--text-tertiary, #999)}.header__stats{display:flex;justify-content:center;gap:1.25rem;font-size:1rem;color:var(--text-primary, #1a1a1a);margin-top:.875rem;align-items:center}.header__stat{display:flex;align-items:center;gap:.25rem}.header__stat-icon,.header__stat-icon--cleaning-time,.header__stat-icon--area{display:flex}.header__stat-icon--cleaning-time svg,.header__stat-icon--area svg{scale:.8}.header__stat-value{display:flex;font-weight:500}.valetudo-restrictions-hint{flex:1;display:flex;align-items:center;justify-content:center;padding:.625rem 1rem;font-size:.8rem;color:#f44336;background:#f4433614;border-radius:.75rem;border:1px solid rgba(244,67,54,.2)}.cleaning-mode-button-wrapper{margin:.625rem 1.25rem;width:calc(100% - 2.5rem);display:flex;align-items:center;gap:.5rem}.cleaning-mode-button-wrapper__shortcuts{background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:50%;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.1rem;flex-shrink:0;transition:transform .2s,opacity .2s;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-button-wrapper__shortcuts svg{scale:.8}.cleaning-mode-button-wrapper__shortcuts:hover:not(:disabled){transform:scale(1.1);opacity:.9;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button-wrapper__shortcuts:active:not(:disabled){transform:scale(.95)}.cleaning-mode-button-wrapper__shortcuts:disabled{opacity:.5;cursor:not-allowed}.cleaning-mode-button{flex:1;background:var(--surface-bg, #fff);border:none;border-radius:.75rem;padding:.75rem 1rem;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08));color:var(--text-primary, #1a1a1a);font-weight:400;font-size:.9375rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:transform .1s ease}.cleaning-mode-button:hover:not(:disabled){box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button:active:not(:disabled){transform:scale(.98)}.cleaning-mode-button--disabled,.cleaning-mode-button:disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.cleaning-mode-button__content{display:flex;align-items:center}.cleaning-mode-button__icon{scale:.7;display:flex}.cleaning-mode-button__text{font-weight:400;font-size:.8rem}.cleaning-mode-button__arrow{font-size:1.25rem;color:var(--text-tertiary, #999)}.view-toggle-button{position:absolute;top:.75rem;right:.75rem;z-index:10;width:2.25rem;height:2.25rem;border-radius:.5rem;background:var(--surface-bg, #fff);border:1px solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-primary, #1a1a1a);box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .1));transition:all .2s ease}.view-toggle-button:hover{background:var(--surface-secondary, #f5f5f5);transform:scale(1.05)}.view-toggle-button:active{transform:scale(.95)}.view-toggle-button svg{transition:transform .2s ease}.room-list-view{position:absolute;inset:0;background:var(--surface-bg, #fff);border-radius:.9375rem;display:flex;flex-direction:column;overflow:hidden}.room-list-view__header{padding:.75rem 3.5rem .75rem 1rem;font-size:.875rem;color:var(--text-secondary, #666);background:var(--surface-secondary, #f5f5f5);border-bottom:1px solid var(--border-color, #e0e0e0);flex-shrink:0}.room-list-view__list{flex:1;overflow-y:auto;padding:.5rem;display:flex;flex-direction:column;gap:.5rem}.room-list-view__list::-webkit-scrollbar{width:.25rem}.room-list-view__list::-webkit-scrollbar-track{background:transparent}.room-list-view__list::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.room-list-view__empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary, #999);font-size:.875rem}.room-list-view__item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:var(--surface-secondary, #f5f5f5);border:2px solid transparent;border-radius:.75rem;cursor:pointer;transition:all .2s ease;width:100%;text-align:left}.room-list-view__item:hover{background:var(--surface-tertiary, #ebebeb)}.room-list-view__item:active{transform:scale(.98)}.room-list-view__item--selected{background:var(--accent-bg-transparent, rgba(212, 175, 55, .1));border-color:var(--accent-color, #d4af37)}.room-list-view__item--selected:hover{background:var(--accent-bg-transparent, rgba(212, 175, 55, .15))}.room-list-view__item-name{flex:1;font-size:.9375rem;font-weight:500;color:var(--text-primary, #1a1a1a);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.room-list-view__item-check{width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--accent-color, #d4af37)}.vacuum-map{position:relative;margin:0 1.25rem;border-radius:.9375rem;overflow:hidden;background:var(--surface-bg, #fff);display:flex;align-items:center;justify-content:center;box-shadow:0 .25rem .9375rem var(--card-shadow, rgba(0, 0, 0, .1));min-height:18.75rem}.vacuum-map__image{width:100%;height:100%;object-fit:contain;border-radius:.9375rem}.dreame-vacuum-card--dark .vacuum-map .vacuum-map__image{filter:brightness(.8) contrast(.9) saturate(.85)}.vacuum-map__placeholder{color:#666;text-align:center;font-size:.875rem}.vacuum-map__placeholder small{font-size:.75rem;color:#999}.vacuum-map__overlay{position:absolute;inset:0;background:#0000000d;border-radius:.9375rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;color:#666;pointer-events:none}.vacuum-map__cycles{position:absolute;right:1rem;bottom:1rem;width:2.5rem;height:2.5rem;border-radius:25%;border-radius:.375rem}.vacuum-map__zone{position:absolute;border:.1875rem solid #007aff;background:repeating-linear-gradient(45deg,#007aff1a,#007aff1a .625rem,#007aff0d .625rem 1.25rem);pointer-events:auto;border-radius:.5rem;box-shadow:0 .125rem .75rem #007aff4d}.vacuum-map__zone-handle{position:absolute;width:1.5rem;height:1.5rem;background:#007aff;border:.125rem solid white;border-radius:50%;cursor:pointer;pointer-events:auto;box-shadow:0 .125rem .25rem #0003;transition:all .2s ease;z-index:10;touch-action:none}.vacuum-map__zone-handle:before{content:\"\";position:absolute;inset:-.5rem}.vacuum-map__zone-handle:hover{background:#0051d5;transform:scale(1.2)}.vacuum-map__zone-handle:active{transform:scale(.9)}.vacuum-map__zone-handle--tl{top:-.75rem;left:-.75rem;cursor:nwse-resize}.vacuum-map__zone-handle--tr{top:-.75rem;right:-.75rem;cursor:nesw-resize}.vacuum-map__zone-handle--bl{bottom:-.75rem;left:-.75rem;cursor:nesw-resize}.vacuum-map__zone-handle--br{bottom:-.75rem;right:-.75rem;cursor:nwse-resize}.vacuum-map__zone-clear{position:absolute;top:-.75rem;right:-.75rem;width:1.5rem;height:1.5rem;border-radius:50%;background:#ff3b30;color:#fff;border:.125rem solid white;font-size:1.125rem;font-weight:700;cursor:pointer;pointer-events:auto;display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .5rem #ff3b3066;transition:all .2s ease;line-height:1;padding:0}.vacuum-map__zone-clear:hover{background:#ff1f0f;transform:scale(1.1)}.vacuum-map__zone-clear:active{transform:scale(.95)}.vacuum-map__room-segments{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:auto}.vacuum-map__room-segment{cursor:pointer;transition:all .2s ease}.vacuum-map__room-segment:hover{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .2));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .3));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected:hover{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .4))}.vacuum-map__rooms{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.vacuum-map__room{position:absolute;transform:translate(-50%,-50%);width:2rem;height:2rem;border-radius:50%;background:#ffffffe6;border:.125rem solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:var(--text-primary, #1a1a1a);cursor:pointer;pointer-events:auto;transition:all .2s ease;box-shadow:0 .125rem .25rem #0000001a;z-index:2}.vacuum-map__room:hover{transform:translate(-50%,-50%) scale(1.1);background:#fff;box-shadow:0 .25rem .5rem #00000026}.vacuum-map__room--selected{background:var(--accent-color, #d4af37);color:#fff;border-color:var(--accent-color, #d4af37);box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(212, 175, 55, .4))}.vacuum-map__room--selected:hover{transform:translate(-50%,-50%) scale(1.1);box-shadow:0 .25rem .75rem var(--accent-color-shadow-color, rgba(212, 175, 55, .5))}.mode-tabs{display:flex;gap:.25rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.9375rem;padding:.25rem;margin-bottom:.9375rem}.mode-tabs--disabled{opacity:.5;pointer-events:none}.mode-tabs__button{flex:1;display:flex;align-items:center;justify-content:center;border:none;border-radius:.6875rem;padding:.625rem;font-weight:500;font-size:.875rem;cursor:pointer;transition:all .2s;background-color:transparent;color:var(--text-secondary, #666)}.mode-tabs__button-icon svg{scale:.5;color:var(--text-secondary, #666)}.mode-tabs__button--active{background-color:var(--surface-bg, white);color:var(--text-primary, #000);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .1))}.mode-tabs__button:hover:not(.mode-tabs__button--active):not(:disabled){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.mode-tabs__button:disabled{cursor:not-allowed}.action-buttons{display:flex;gap:.75rem;margin-top:.9375rem}.action-buttons__clean,.action-buttons__dock,.action-buttons__pause,.action-buttons__resume,.action-buttons__stop{flex:1;background:var(--accent-bg);border:.0625rem solid var(--accent-bg);border-radius:.875rem;padding:.875rem;font-size:.9375rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.5rem;transition:all .3s cubic-bezier(.16,1,.3,1);color:var(--text-primary)}.action-buttons__clean:disabled,.action-buttons__dock:disabled,.action-buttons__pause:disabled,.action-buttons__resume:disabled,.action-buttons__stop:disabled{opacity:.38;cursor:not-allowed;pointer-events:none}.action-buttons__clean--selected,.action-buttons__dock--selected,.action-buttons__pause--selected,.action-buttons__resume--selected,.action-buttons__stop--selected{transform:translateY(-.125rem);border:.0625rem solid var(--toggle-active-border);box-shadow:0 .625rem 1.25rem #0006,0 0 .75rem #5865f240,inset 0 .0625rem .0625rem #ffffff1a!important}.action-buttons__clean{color:var(--text-primary-invert);background:var(--accent-color)}.action-buttons__pause{color:var(--accent-color);border-color:var(--accent-color-hover)}.action-buttons__resume{color:#32d74b;border-color:#32d74b80}.action-buttons__stop{color:#ff453a;border-color:#ff453a80}.action-buttons__dock{background:var(--surface-secondary);color:var(--text-secondary)}.accordion{border-radius:.75rem;background:var(--card-bg, rgba(255, 255, 255, .8));overflow:hidden;margin-bottom:.5rem}.accordion__header{display:flex;align-items:center;justify-content:space-between;width:100%;padding:.875rem 1rem;background:none;border:none;cursor:pointer;color:var(--text-primary, #000);font-size:.9375rem;font-weight:500;text-align:left;transition:background-color .2s ease}.accordion__header:hover{background:var(--hover-bg, rgba(0, 0, 0, .03))}.accordion__header:active{background:var(--active-bg, rgba(0, 0, 0, .06))}.accordion__title-wrapper{display:flex;align-items:center;gap:.625rem}.accordion__icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.accordion__icon svg{width:1.25rem;height:1.25rem}.accordion__title{font-weight:500}.accordion__chevron{width:1.25rem;height:1.25rem;color:var(--text-secondary, #666);transition:transform .3s ease}.accordion__content{max-height:0;overflow:hidden;transition:max-height .3s ease}.accordion__content-inner{padding:0 1rem 1rem}.accordion--open .accordion__chevron{transform:rotate(180deg)}.accordion--open .accordion__content{max-height:600px}.toggle{position:relative;display:inline-block;width:3.1875rem;height:1.9375rem}.toggle__input{opacity:0;width:0;height:0}.toggle__slider{position:absolute;cursor:pointer;inset:0;background-color:var(--surface-tertiary, #e0e0e0);transition:.4s;border-radius:1.9375rem}.toggle__knob{position:absolute;height:1.6875rem;width:1.6875rem;left:.125rem;bottom:.125rem;background-color:var(--surface-bg, white);transition:.4s;border-radius:50%;box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .2))}.toggle__input:checked+.toggle__slider{background-color:var(--toggle-active);border:.125rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color)}.toggle__input:checked+.toggle__slider .toggle__knob{transform:translate(1.25rem)}.toggle--disabled{opacity:.5;pointer-events:none}.circular-button{display:flex;flex-direction:column;align-items:center;gap:.5rem}.circular-button:hover{transform:translateY(-.125rem)}.circular-button__circle{border-radius:50%;background:var(--surface-secondary, #f5f5f5);display:flex;align-items:center;justify-content:center;cursor:pointer;border:.0625rem solid var(--text-primary, black);transition:all .2s ease;color:var(--text-primary)}.circular-button__circle--small{width:3.5rem;height:3.5rem;font-size:1.5rem}.circular-button__circle--medium{width:4.5rem;height:4.5rem;font-size:1.75rem}.circular-button__circle--large{width:5.5rem;height:5.5rem;font-size:2rem}.circular-button__circle--selected{background:var(--toggle-active);border:.1875rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color);color:var(--text-primary)}.circular-button__circle:hover:not(.circular-button__circle--selected){background:var(--surface-tertiary, #ebebeb)}.circular-button__circle:active{transform:scale(.95)}.circular-button__icon{display:flex;align-items:center;justify-content:center}.circular-button__icon--svg{width:100%;height:100%;color:var(--text-primary, #1a1a1a)}.circular-button__icon--svg svg{width:100%;height:100%;display:block}.circular-button__circle--selected .circular-button__icon--svg{color:#fff}.circular-button__label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center;line-height:1.2}.modal{position:absolute;inset:20% 0 0;background:var(--surface-bg, #f5f5f7);border-radius:1.25rem 1.25rem 0 0;padding:0 1.25rem 1.25rem;z-index:1000;max-height:80vh;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;color:var(--text-primary, black)}.modal::-webkit-scrollbar{display:none}.modal__backdrop{position:absolute;inset:0;background:var(--backdrop-bg, rgba(0, 0, 0, .4));z-index:999;border-radius:1.25rem}.modal__handle{width:2.25rem;height:.3125rem;background:var(--handle-bg, rgba(0, 0, 0, .15));border-radius:.1875rem;margin:.75rem auto 1.25rem}.modal__content{height:90%}.segmented-control{display:flex;gap:.5rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.75rem;padding:.25rem}.segmented-control__button{flex:1;border:none;border-radius:.625rem;padding:.75rem;font-size:.9375rem;font-weight:500;cursor:pointer;background-color:transparent;color:var(--text-primary, #1a1a1a);transition:all .2s}.segmented-control__button--active{background-color:var(--surface-bg, white);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .08))}.segmented-control__button:hover:not(.segmented-control__button--active){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.toast{position:fixed;bottom:1.25rem;left:50%;transform:translate(-50%);background:var(--surface-bg, #ffffff);border:.0625rem solid var(--border-color, #e0e0e0);border-radius:.5rem;padding:.75rem 1rem;display:flex;align-items:center;gap:.75rem;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12));animation:toast-slide-up .3s ease-out;z-index:1000;max-width:90%}@keyframes toast-slide-up{0%{transform:translate(-50%) translateY(1.25rem);opacity:0}to{transform:translate(-50%) translateY(0);opacity:1}}.toast__message{color:var(--text-primary, #1a1a1a);font-size:.875rem}.toast__close{background:none;border:none;color:var(--text-secondary, #666666);font-size:1.5rem;cursor:pointer;padding:0;width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;line-height:1;transition:color .2s}.toast__close:hover{color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__header{margin-bottom:1.5rem}.cleaning-mode-modal__content-wrapper{width:100%;overflow-x:hidden;padding-bottom:1rem}.cleaning-mode-modal__section{margin-bottom:1.5rem}.cleaning-mode-modal__section-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500;margin:0 0 .75rem}.cleaning-mode-modal__section-header{display:flex;align-items:center;gap:.375rem;margin-bottom:.75rem}.cleaning-mode-modal__help-icon{display:inline-flex;align-items:center;justify-content:center;width:1rem;height:1rem;border-radius:50%;border:.09375rem solid var(--text-tertiary, #999);font-size:.6875rem;color:var(--text-tertiary, #999);font-weight:600}.cleaning-mode-modal__room-map{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem;display:flex;align-items:center;justify-content:center;min-height:7.5rem}.cleaning-mode-modal__placeholder{font-size:.8125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__mode-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.cleaning-mode-modal__mode-card{position:relative;border:.125rem solid var(--border-color, #e0e0e0);border-radius:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:var(--surface-bg, white);padding:1.5rem 1rem;transition:all .2s ease}.cleaning-mode-modal__mode-card:hover{transform:translateY(-.125rem);box-shadow:0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--selected{border:.1875rem solid var(--accent-color, #d4af37);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(212, 175, 55, .15))}.cleaning-mode-modal__mode-card--selected:hover{transform:translateY(-.125rem);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25)),0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--mapping{border-style:dashed;border-color:var(--accent-color, #d4af37);opacity:.85}.cleaning-mode-modal__mode-card--mapping:hover{opacity:1}.cleaning-mode-modal__mode-icon{border-radius:50%;margin-bottom:.75rem;display:flex;align-items:center;justify-content:center;font-size:1.75rem}.cleaning-mode-modal__mode-label{font-size:.875rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__mode-checkmark{position:absolute;top:.75rem;right:.75rem;width:1.5rem;height:1.5rem;border-radius:50%;background:var(--accent-color, #d4af37);display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .15));color:#fff;font-size:.875rem}.cleaning-mode-modal__horizontal-scroll{display:flex;justify-content:space-around;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar{height:.25rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-track{background:var(--surface-secondary, #f1f1f1);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb:hover{background:var(--border-color, #bbb)}.cleaning-mode-modal__mode-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__mode-option-label{font-size:.75rem;color:var(--text-secondary, #666);text-align:center;line-height:1.2}.cleaning-mode-modal__power-grid{display:grid;grid-template-columns:repeat(4,1fr);margin-bottom:1rem}.cleaning-mode-modal__power-option{display:flex;flex-direction:column;align-items:center;gap:.5rem}.cleaning-mode-modal__power-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.cleaning-mode-modal__max-plus{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem}.cleaning-mode-modal__max-plus-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}.cleaning-mode-modal__max-plus-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__max-plus-description{font-size:.8125rem;color:var(--text-tertiary, #999);margin:0;line-height:1.4}.cleaning-mode-modal__slider-container{position:relative;padding:0 .5rem;margin-bottom:.75rem}.cleaning-mode-modal__slider-wrapper{position:relative;padding-top:2rem}.cleaning-mode-modal__slider{width:100%;height:.375rem;border-radius:.1875rem;outline:none;-webkit-appearance:none;appearance:none;cursor:pointer}.cleaning-mode-modal__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider::-moz-range-thumb{width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;border:none;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip{position:absolute;top:-.5rem;left:0;transform:translate(-50%);background:var(--accent-color, #d4af37);color:#fff;padding:.25rem .5rem;border-radius:.375rem;font-size:.85rem;font-weight:600;white-space:nowrap;pointer-events:none;box-shadow:0 .125rem .375rem var(--accent-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:.3125rem solid transparent;border-right:.3125rem solid transparent;border-top:.3125rem solid var(--accent-color, #d4af37)}.cleaning-mode-modal__slider-value{position:absolute;top:-2rem;transform:translate(-50%);background:var(--accent-color, #d4af37);border-radius:50%;width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:#fff;box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25));pointer-events:none}.cleaning-mode-modal__slider-labels{display:flex;justify-content:space-between;padding:0 .5rem;margin-top:1.5rem}.cleaning-mode-modal__slider-label{font-size:.8125rem}.cleaning-mode-modal__slider-label--inactive{color:var(--text-tertiary, #999)}.cleaning-mode-modal__slider-label--active{color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__setting{display:flex;align-items:center;justify-content:space-between;padding:1rem;background:var(--surface-bg, white);border-radius:.75rem;margin-bottom:1rem}.cleaning-mode-modal__setting--clickable{cursor:pointer;transition:background .2s ease}.cleaning-mode-modal__setting--clickable:hover{background:var(--surface-secondary, #f8f8f8)}.cleaning-mode-modal__setting--clickable:active{background:var(--surface-tertiary, #f0f0f0)}.cleaning-mode-modal__setting-label{font-size:.9375rem;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__setting-value{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__setting-arrow{font-size:1.125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__route-grid{display:flex;justify-content:space-around}.cleaning-mode-modal__route-option{display:flex;flex-direction:column;align-items:center;gap:.5rem}.cleaning-mode-modal__route-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.shortcuts-modal{padding:0}.shortcuts-modal__title{font-size:1.3rem;font-weight:600;margin:0 0 1rem;padding:1.5rem 1.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty{padding:2rem 1.5rem;text-align:center;color:var(--text-secondary, #666)}.shortcuts-modal__empty p{margin:.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty-hint{font-size:.9rem;color:var(--text-tertiary, #888)}.shortcuts-modal__list{max-height:35rem;overflow-y:auto;padding:.5rem 0;gap:.5rem;display:flex;flex-direction:column}.shortcuts-modal__item{display:flex;align-items:center;gap:1rem;padding:.75rem 1.5rem;margin:.25rem 1rem;background:var(--surface-bg, #fff);border:2px solid var(--accent-color);border-radius:.75rem;box-shadow:0 .125rem .5rem var(--accent-shadow);transition:all .2s;width:90%}.shortcuts-modal__item:hover{box-shadow:0 .25rem .75rem var(--accent-shadow);transform:translateY(-.0625rem)}.shortcuts-modal__item-info{flex:1;min-width:0;display:flex;align-items:center;gap:.75rem}.shortcuts-modal__item-icon{display:flex;font-size:1.3rem;flex-shrink:0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__item-icon svg{scale:.8}.shortcuts-modal__item-name{font-size:1rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.ai-detection-section{display:flex;flex-direction:column;gap:.75rem}.ai-detection-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.ai-detection-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.ai-detection-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.ai-detection-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section{display:flex;flex-direction:column;gap:.75rem}.carpet-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.carpet-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.carpet-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.carpet-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.carpet-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.carpet-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.carpet-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.consumables-section{display:flex;flex-direction:column;gap:1rem}.consumables-section__item{display:flex;flex-direction:column;gap:.375rem}.consumables-section__info{display:flex;justify-content:space-between;align-items:center}.consumables-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.consumables-section__stats{font-size:.75rem;color:var(--text-secondary, #666)}.consumables-section__progress{height:.375rem;background:var(--progress-bg, rgba(0, 0, 0, .1));border-radius:.1875rem;overflow:hidden}.consumables-section__progress-bar{height:100%;border-radius:.1875rem;transition:width .3s ease}.consumables-section__reset{align-self:flex-end;padding:.25rem .75rem;font-size:.75rem;font-weight:500;color:var(--accent-color, #007aff);background:none;border:1px solid var(--accent-color, #007aff);border-radius:.375rem;cursor:pointer;transition:all .2s ease}.consumables-section__reset:hover{background:var(--accent-color, #007aff);color:#fff}.consumables-section__reset:active{opacity:.8}.device-info-section{display:flex;flex-direction:column;gap:.75rem}.device-info-section__item{display:flex;justify-content:space-between;align-items:center;padding:.25rem 0;border-bottom:1px solid var(--divider-color, rgba(0, 0, 0, .06))}.device-info-section__item:last-child{border-bottom:none}.device-info-section__label{font-size:.875rem;color:var(--text-secondary, #666)}.device-info-section__value{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.map-management-section__description{font-size:.8125rem;color:var(--text-secondary, #666);margin:0 0 .75rem;line-height:1.4}.map-management-section__empty{font-size:.875rem;color:var(--text-secondary, #666);text-align:center;padding:1rem 0;margin:0}.map-management-section__maps{display:flex;flex-wrap:wrap;gap:.5rem}.map-management-section__map{padding:.5rem 1rem;font-size:.875rem;font-weight:500;color:var(--text-primary, #000);background:var(--button-bg, rgba(0, 0, 0, .05));border:2px solid transparent;border-radius:.5rem;cursor:pointer;transition:all .2s ease}.map-management-section__map:hover{background:var(--button-hover-bg, rgba(0, 0, 0, .08))}.map-management-section__map--active{border-color:var(--accent-color, #007aff);background:var(--accent-bg, rgba(0, 122, 255, .1));color:var(--accent-color, #007aff)}.quick-settings-section{display:flex;flex-direction:column;gap:1rem}.quick-settings-section__item{display:flex;justify-content:space-between;align-items:center;gap:1rem}.quick-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.quick-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.quick-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.volume-section{display:flex;flex-direction:row;gap:1rem}.volume-section__control{display:flex;align-items:center;gap:.75rem;flex:1}.volume-section__icon{display:flex;align-items:center;justify-content:center;color:var(--text-secondary, #666);flex-shrink:0}.volume-section__slider-container{flex:1;padding-top:1.5rem;margin-top:1rem}.volume-section__slider-wrapper{position:relative;width:100%}.volume-section__slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:3px;outline:none;cursor:pointer}.volume-section__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-webkit-slider-thumb:hover{transform:scale(1.1)}.volume-section__slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;border:none;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-moz-range-thumb:hover{transform:scale(1.1)}.volume-section__tooltip{position:absolute;top:-1.75rem;transform:translate(-50%);background:var(--accent-color, #007aff);color:#fff;padding:.25rem .5rem;border-radius:4px;font-size:.75rem;font-weight:500;white-space:nowrap;pointer-events:none}.volume-section__tooltip:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);border:4px solid transparent;border-top-color:var(--accent-color, #007aff)}.volume-section__test-button{display:flex;align-items:center;justify-content:center;gap:.5rem;padding:.625rem 1rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;color:var(--text-primary, #333);font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s ease}.volume-section__test-button:hover{background:var(--surface-tertiary, #eee)}.volume-section__test-button:active{transform:scale(.98)}.volume-section__test-button svg{color:var(--accent-color, #007aff)}.settings-panel{height:100%}.settings-panel__title{font-size:1.25rem;font-weight:600;margin:0 0 1rem;text-align:center;color:var(--text-primary, #000)}.settings-panel__scroll-wrapper{height:90%;overflow-y:auto}.settings-panel__sections{display:flex;flex-direction:column;gap:.25rem;padding-right:.25rem}.settings-panel__sections::-webkit-scrollbar{width:4px}.settings-panel__sections::-webkit-scrollbar-track{background:transparent}.settings-panel__sections::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb, rgba(0, 0, 0, .2));border-radius:2px}.room-selection-display{padding:.75rem 1rem;background:var(--accent-bg, #e3f2fd);border-radius:.5rem;margin-bottom:.75rem;font-size:.875rem;color:var(--text-primary, #1a1a1a)}.room-selection-display__label{font-weight:600;margin-right:.5rem;color:var(--accent-color, #007aff)}.room-selection-display__rooms{color:var(--text-secondary, #666666)}.dreame-vacuum-card{position:relative;background:var(--card-bg, #f5f5f7);border-radius:1.25rem;overflow:hidden;box-shadow:0 .125rem 1.25rem var(--card-shadow, rgba(0, 0, 0, .08));font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.dreame-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center}.dreame-vacuum-card__container{display:flex;flex-direction:column;gap:1rem}.dreame-vacuum-card__controls{padding:0 1.25rem 1.25rem}.dreame-vacuum-card__error{padding:1.25rem;text-align:center;color:var(--error-color, #ff3b30);font-size:.875rem}.valetudo-map-canvas{width:100%;background:var(--card-bg, #1a1a2e);border-radius:.75rem;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:200px;position:relative;-webkit-user-select:none;user-select:none;touch-action:none}.valetudo-map-canvas--zone-mode{cursor:crosshair}.valetudo-map-canvas--room-mode{cursor:pointer}.valetudo-map-canvas__inner{position:relative;width:100%;transform-origin:center center;will-change:transform}.valetudo-map-canvas__canvas{width:100%;height:auto;display:block;image-rendering:auto}.valetudo-map-canvas__zone-drag{position:absolute;background:#ff980033;border:2px dashed rgba(255,152,0,.9);pointer-events:none;border-radius:2px}.valetudo-map-canvas__widget-zone{position:absolute;background:#ff98002e;border:2px dashed rgba(255,152,0,.9);border-radius:3px;box-sizing:border-box}.valetudo-map-canvas__widget-zone-move{position:absolute;inset:0;cursor:move;touch-action:none}.valetudo-map-canvas__widget-zone-move:after{content:\"✥\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.4rem;color:#ff9800d9;pointer-events:none;text-shadow:0 0 3px #000}.valetudo-map-canvas__widget-zone-resize{position:absolute;bottom:-8px;right:-8px;width:24px;height:24px;background:#ff9800e6;border-radius:50%;cursor:se-resize;touch-action:none;z-index:2}.valetudo-map-canvas__widget-zone-resize:after{content:\"⤡\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:.9rem;color:#fff;pointer-events:none}.valetudo-map-canvas__widget-zone-delete{position:absolute;top:-10px;right:-10px;width:22px;height:22px;background:#e53935;color:#fff;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none}.valetudo-map-canvas--restrictions-wall,.valetudo-map-canvas--restrictions-no_go,.valetudo-map-canvas--restrictions-no_mop{cursor:crosshair}.valetudo-map-canvas__pending-restriction{position:absolute;border-radius:3px;box-sizing:border-box}.valetudo-map-canvas__pending-restriction--wall{background:#f443361a;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__pending-restriction--no_go{background:#f443362e;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__pending-restriction--no_mop{background:#2196f32e;border:2px dashed rgba(33,150,243,.85)}.valetudo-map-canvas__pending-restriction-move{position:absolute;inset:0;cursor:move;touch-action:none}.valetudo-map-canvas__pending-restriction-move:after{content:\"✥\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.4rem;color:#f44336d9;pointer-events:none;text-shadow:0 0 3px #000}.valetudo-map-canvas__pending-restriction-resize{position:absolute;bottom:-8px;right:-8px;width:24px;height:24px;background:#f44336e6;border-radius:50%;cursor:se-resize;touch-action:none;z-index:2}.valetudo-map-canvas__pending-restriction-resize:after{content:\"⤡\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:.9rem;color:#fff;pointer-events:none}.valetudo-map-canvas__pending-restriction-delete{position:absolute;top:-10px;right:-10px;width:22px;height:22px;background:#e53935;color:#fff;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none}.valetudo-map-canvas__pending-restriction-confirm{position:absolute;bottom:-10px;left:-10px;width:26px;height:26px;background:#43a047;color:#fff;border:none;border-radius:50%;font-size:.9rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-endpoint{width:22px;height:22px;background:#f44336e6;border:2px solid #fff;border-radius:50%;cursor:move;touch-action:none;z-index:3;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-action-btn{width:22px;height:22px;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:3;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none;color:#fff;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-action-btn--delete{background:#e53935}.valetudo-map-canvas__wall-action-btn--confirm{background:#43a047}.valetudo-map-canvas--restrictions-select{cursor:pointer}.valetudo-map-canvas__restriction-preview{position:absolute;pointer-events:none;border-radius:2px}.valetudo-map-canvas__restriction-preview--no_go{background:#f443362e;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__restriction-preview--no_mop{background:#2196f32e;border:2px dashed rgba(33,150,243,.85)}.valetudo-map-canvas__restriction-preview-svg{position:absolute;inset:0;pointer-events:none}.valetudo-map-canvas__bottom-controls{position:absolute;bottom:.5rem;right:.5rem;display:flex;flex-direction:row;align-items:flex-end;gap:4px;z-index:10}.valetudo-map-canvas__zoom-controls{display:flex;flex-direction:column;gap:2px}.valetudo-map-canvas__zoom-controls button{width:28px;height:28px;background:#0000008c;color:#fff;border:1px solid rgba(255,255,255,.2);border-radius:4px;font-size:1.1rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}.valetudo-map-canvas__zoom-controls button:active{background:#fff3}.valetudo-map-canvas__iterations-btn{width:32px;height:32px;background:rgba(var(--rgb-primary-color, 3, 169, 244),.7);color:#fff;border:1px solid rgba(255,255,255,.35);border-radius:4px;font-size:.8rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}.valetudo-map-canvas__iterations-btn:active{background:rgba(var(--rgb-primary-color, 3, 169, 244),.9)}.restrictions-toolbar{display:none}.rt{display:flex;flex-direction:column;align-items:stretch;gap:6px;width:100%}.rt__seg{display:flex;border-radius:8px;overflow:hidden;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);flex-shrink:0}.rt__seg-btn{display:inline-flex;align-items:center;justify-content:center;gap:5px;flex:1;padding:0 10px;height:32px;border:none;border-right:1px solid rgba(255,255,255,.07);background:transparent;color:#ffffff73;font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;transition:background .12s,color .12s;outline:none}.rt__seg-btn:last-child{border-right:none}.rt__seg-btn:hover:not(.rt__seg-btn--active){background:#ffffff14;color:#fffc}.rt__seg-btn--select.rt__seg-btn--active{background:#ffffff26;color:#fff}.rt__seg-btn--wall.rt__seg-btn--active,.rt__seg-btn--no_go.rt__seg-btn--active{background:#ef535047;color:#ffcdd2}.rt__seg-btn--no_mop.rt__seg-btn--active{background:#42a5f547;color:#bbdefb}.rt__seg-btn svg{flex-shrink:0}.rt__actions{display:flex;align-items:center;justify-content:center;gap:6px}.rt__action-btn{display:inline-flex;align-items:center;justify-content:center;gap:5px;height:32px;padding:0 10px;border:1px solid transparent;border-radius:7px;background:#ffffff0f;color:#ffffff73;font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;transition:background .12s,color .12s,border-color .12s;outline:none}.rt__action-btn:disabled{opacity:.38;cursor:not-allowed}.rt__action-btn:hover:not(:disabled){background:#ffffff1a;color:#ffffffd9}.rt__action-btn--delete{width:32px;padding:0;color:#ef5350a6;border-color:#ef535033}.rt__action-btn--delete:hover:not(:disabled){background:#ef53502e;color:#ef5350;border-color:#ef535066}.rt__action-btn--save{color:#ffffff47}.rt__action-btn--save.rt__action-btn--save-dirty{background:#4caf5033;color:#a5d6a7;border-color:#4caf5059}.rt__action-btn--save.rt__action-btn--save-dirty:hover:not(:disabled){background:#4caf504d;color:#c8e6c9}.rt__action-btn svg{flex-shrink:0}.valetudo-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center;font-size:.875rem}.valetudo-vacuum-card__warning{padding:.5rem 1.25rem;background:var(--warning-bg, #fff3cd);color:var(--warning-color, #856404);font-size:.75rem;border-radius:0 0 1.25rem 1.25rem}.valetudo-vacuum-card__map-placeholder{margin:0 1.25rem;min-height:200px;display:flex;align-items:center;justify-content:center;background:var(--surface-secondary, #e8e8e8);border-radius:.75rem;font-size:.875rem;color:var(--text-secondary, #666)}.valetudo-selected-rooms{display:flex;align-items:baseline;gap:.4rem;padding:0 0 .25rem;font-size:.8rem;line-height:1.4}.valetudo-selected-rooms__label{font-weight:600;color:var(--text-secondary, #888);white-space:nowrap}.valetudo-selected-rooms__names{color:var(--accent-color, #007aff);font-weight:500}\n";
  document.head.appendChild(style);
})();
function K_(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var xr = { exports: {} }, Ei = {};
var Qm;
function $h() {
  if (Qm) return Ei;
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
  return Ei.Fragment = c, Ei.jsx = s, Ei.jsxs = s, Ei;
}
var $m;
function Jh() {
  return $m || ($m = 1, xr.exports = $h()), xr.exports;
}
var r = Jh(), Sr = { exports: {} }, Me = {};
var Jm;
function Ih() {
  if (Jm) return Me;
  Jm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), w = /* @__PURE__ */ Symbol.for("react.activity"), k = Symbol.iterator;
  function E(x) {
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
  }, D = Object.assign, X = {};
  function U(x, H, ee) {
    this.props = x, this.context = H, this.refs = X, this.updater = ee || S;
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
  function Z(x, H, ee) {
    this.props = x, this.context = H, this.refs = X, this.updater = ee || S;
  }
  var L = Z.prototype = new $();
  L.constructor = Z, D(L, U.prototype), L.isPureReactComponent = !0;
  var ne = Array.isArray;
  function q() {
  }
  var Y = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function se(x, H, ee) {
    var ce = ee.ref;
    return {
      $$typeof: o,
      type: x,
      key: H,
      ref: ce !== void 0 ? ce : null,
      props: ee
    };
  }
  function I(x, H) {
    return se(x.type, H, x.props);
  }
  function re(x) {
    return typeof x == "object" && x !== null && x.$$typeof === o;
  }
  function ge(x) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(ee) {
      return H[ee];
    });
  }
  var Ee = /\/+/g;
  function ke(x, H) {
    return typeof x == "object" && x !== null && x.key != null ? ge("" + x.key) : H.toString(36);
  }
  function xe(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(q, q) : (x.status = "pending", x.then(
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
  function R(x, H, ee, ce, ye) {
    var pe = typeof x;
    (pe === "undefined" || pe === "boolean") && (x = null);
    var we = !1;
    if (x === null) we = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case o:
            case c:
              we = !0;
              break;
            case p:
              return we = x._init, R(
                we(x._payload),
                H,
                ee,
                ce,
                ye
              );
          }
      }
    if (we)
      return ye = ye(x), we = ce === "" ? "." + ke(x, 0) : ce, ne(ye) ? (ee = "", we != null && (ee = we.replace(Ee, "$&/") + "/"), R(ye, H, ee, "", function(ba) {
        return ba;
      })) : ye != null && (re(ye) && (ye = I(
        ye,
        ee + (ye.key == null || x && x.key === ye.key ? "" : ("" + ye.key).replace(
          Ee,
          "$&/"
        ) + "/") + we
      )), H.push(ye)), 1;
    we = 0;
    var at = ce === "" ? "." : ce + ":";
    if (ne(x))
      for (var Ie = 0; Ie < x.length; Ie++)
        ce = x[Ie], pe = at + ke(ce, Ie), we += R(
          ce,
          H,
          ee,
          pe,
          ye
        );
    else if (Ie = E(x), typeof Ie == "function")
      for (x = Ie.call(x), Ie = 0; !(ce = x.next()).done; )
        ce = ce.value, pe = at + ke(ce, Ie++), we += R(
          ce,
          H,
          ee,
          pe,
          ye
        );
    else if (pe === "object") {
      if (typeof x.then == "function")
        return R(
          xe(x),
          H,
          ee,
          ce,
          ye
        );
      throw H = String(x), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return we;
  }
  function te(x, H, ee) {
    if (x == null) return x;
    var ce = [], ye = 0;
    return R(x, ce, "", "", function(pe) {
      return H.call(ee, pe, ye++);
    }), ce;
  }
  function F(x) {
    if (x._status === -1) {
      var H = x._result;
      H = H(), H.then(
        function(ee) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = ee);
        },
        function(ee) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = ee);
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
  }, Ne = {
    map: te,
    forEach: function(x, H, ee) {
      te(
        x,
        function() {
          H.apply(this, arguments);
        },
        ee
      );
    },
    count: function(x) {
      var H = 0;
      return te(x, function() {
        H++;
      }), H;
    },
    toArray: function(x) {
      return te(x, function(H) {
        return H;
      }) || [];
    },
    only: function(x) {
      if (!re(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return Me.Activity = w, Me.Children = Ne, Me.Component = U, Me.Fragment = s, Me.Profiler = g, Me.PureComponent = Z, Me.StrictMode = u, Me.Suspense = v, Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, Me.__COMPILER_RUNTIME = {
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
  }, Me.cloneElement = function(x, H, ee) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var ce = D({}, x.props), ye = x.key;
    if (H != null)
      for (pe in H.key !== void 0 && (ye = "" + H.key), H)
        !J.call(H, pe) || pe === "key" || pe === "__self" || pe === "__source" || pe === "ref" && H.ref === void 0 || (ce[pe] = H[pe]);
    var pe = arguments.length - 2;
    if (pe === 1) ce.children = ee;
    else if (1 < pe) {
      for (var we = Array(pe), at = 0; at < pe; at++)
        we[at] = arguments[at + 2];
      ce.children = we;
    }
    return se(x.type, ye, ce);
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
  }, Me.createElement = function(x, H, ee) {
    var ce, ye = {}, pe = null;
    if (H != null)
      for (ce in H.key !== void 0 && (pe = "" + H.key), H)
        J.call(H, ce) && ce !== "key" && ce !== "__self" && ce !== "__source" && (ye[ce] = H[ce]);
    var we = arguments.length - 2;
    if (we === 1) ye.children = ee;
    else if (1 < we) {
      for (var at = Array(we), Ie = 0; Ie < we; Ie++)
        at[Ie] = arguments[Ie + 2];
      ye.children = at;
    }
    if (x && x.defaultProps)
      for (ce in we = x.defaultProps, we)
        ye[ce] === void 0 && (ye[ce] = we[ce]);
    return se(x, pe, ye);
  }, Me.createRef = function() {
    return { current: null };
  }, Me.forwardRef = function(x) {
    return { $$typeof: b, render: x };
  }, Me.isValidElement = re, Me.lazy = function(x) {
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
    var H = Y.T, ee = {};
    Y.T = ee;
    try {
      var ce = x(), ye = Y.S;
      ye !== null && ye(ee, ce), typeof ce == "object" && ce !== null && typeof ce.then == "function" && ce.then(q, ve);
    } catch (pe) {
      ve(pe);
    } finally {
      H !== null && ee.types !== null && (H.types = ee.types), Y.T = H;
    }
  }, Me.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, Me.use = function(x) {
    return Y.H.use(x);
  }, Me.useActionState = function(x, H, ee) {
    return Y.H.useActionState(x, H, ee);
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
  }, Me.useImperativeHandle = function(x, H, ee) {
    return Y.H.useImperativeHandle(x, H, ee);
  }, Me.useInsertionEffect = function(x, H) {
    return Y.H.useInsertionEffect(x, H);
  }, Me.useLayoutEffect = function(x, H) {
    return Y.H.useLayoutEffect(x, H);
  }, Me.useMemo = function(x, H) {
    return Y.H.useMemo(x, H);
  }, Me.useOptimistic = function(x, H) {
    return Y.H.useOptimistic(x, H);
  }, Me.useReducer = function(x, H, ee) {
    return Y.H.useReducer(x, H, ee);
  }, Me.useRef = function(x) {
    return Y.H.useRef(x);
  }, Me.useState = function(x) {
    return Y.H.useState(x);
  }, Me.useSyncExternalStore = function(x, H, ee) {
    return Y.H.useSyncExternalStore(
      x,
      H,
      ee
    );
  }, Me.useTransition = function() {
    return Y.H.useTransition();
  }, Me.version = "19.2.3", Me;
}
var Im;
function Yr() {
  return Im || (Im = 1, Sr.exports = Ih()), Sr.exports;
}
var O = Yr();
const Q_ = /* @__PURE__ */ K_(O);
var wr = { exports: {} }, Ni = {}, zr = { exports: {} }, Er = {};
var Wm;
function Wh() {
  return Wm || (Wm = 1, (function(o) {
    function c(R, te) {
      var F = R.length;
      R.push(te);
      e: for (; 0 < F; ) {
        var ve = F - 1 >>> 1, Ne = R[ve];
        if (0 < g(Ne, te))
          R[ve] = te, R[F] = Ne, F = ve;
        else break e;
      }
    }
    function s(R) {
      return R.length === 0 ? null : R[0];
    }
    function u(R) {
      if (R.length === 0) return null;
      var te = R[0], F = R.pop();
      if (F !== te) {
        R[0] = F;
        e: for (var ve = 0, Ne = R.length, x = Ne >>> 1; ve < x; ) {
          var H = 2 * (ve + 1) - 1, ee = R[H], ce = H + 1, ye = R[ce];
          if (0 > g(ee, F))
            ce < Ne && 0 > g(ye, ee) ? (R[ve] = ye, R[ce] = F, ve = ce) : (R[ve] = ee, R[H] = F, ve = H);
          else if (ce < Ne && 0 > g(ye, F))
            R[ve] = ye, R[ce] = F, ve = ce;
          else break e;
        }
      }
      return te;
    }
    function g(R, te) {
      var F = R.sortIndex - te.sortIndex;
      return F !== 0 ? F : R.id - te.id;
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
    var v = [], f = [], p = 1, w = null, k = 3, E = !1, S = !1, D = !1, X = !1, U = typeof setTimeout == "function" ? setTimeout : null, $ = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
    function L(R) {
      for (var te = s(f); te !== null; ) {
        if (te.callback === null) u(f);
        else if (te.startTime <= R)
          u(f), te.sortIndex = te.expirationTime, c(v, te);
        else break;
        te = s(f);
      }
    }
    function ne(R) {
      if (D = !1, L(R), !S)
        if (s(v) !== null)
          S = !0, q || (q = !0, ge());
        else {
          var te = s(f);
          te !== null && xe(ne, te.startTime - R);
        }
    }
    var q = !1, Y = -1, J = 5, se = -1;
    function I() {
      return X ? !0 : !(o.unstable_now() - se < J);
    }
    function re() {
      if (X = !1, q) {
        var R = o.unstable_now();
        se = R;
        var te = !0;
        try {
          e: {
            S = !1, D && (D = !1, $(Y), Y = -1), E = !0;
            var F = k;
            try {
              t: {
                for (L(R), w = s(v); w !== null && !(w.expirationTime > R && I()); ) {
                  var ve = w.callback;
                  if (typeof ve == "function") {
                    w.callback = null, k = w.priorityLevel;
                    var Ne = ve(
                      w.expirationTime <= R
                    );
                    if (R = o.unstable_now(), typeof Ne == "function") {
                      w.callback = Ne, L(R), te = !0;
                      break t;
                    }
                    w === s(v) && u(v), L(R);
                  } else u(v);
                  w = s(v);
                }
                if (w !== null) te = !0;
                else {
                  var x = s(f);
                  x !== null && xe(
                    ne,
                    x.startTime - R
                  ), te = !1;
                }
              }
              break e;
            } finally {
              w = null, k = F, E = !1;
            }
            te = void 0;
          }
        } finally {
          te ? ge() : q = !1;
        }
      }
    }
    var ge;
    if (typeof Z == "function")
      ge = function() {
        Z(re);
      };
    else if (typeof MessageChannel < "u") {
      var Ee = new MessageChannel(), ke = Ee.port2;
      Ee.port1.onmessage = re, ge = function() {
        ke.postMessage(null);
      };
    } else
      ge = function() {
        U(re, 0);
      };
    function xe(R, te) {
      Y = U(function() {
        R(o.unstable_now());
      }, te);
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
          var te = 3;
          break;
        default:
          te = k;
      }
      var F = k;
      k = te;
      try {
        return R();
      } finally {
        k = F;
      }
    }, o.unstable_requestPaint = function() {
      X = !0;
    }, o.unstable_runWithPriority = function(R, te) {
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
        return te();
      } finally {
        k = F;
      }
    }, o.unstable_scheduleCallback = function(R, te, F) {
      var ve = o.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? ve + F : ve) : F = ve, R) {
        case 1:
          var Ne = -1;
          break;
        case 2:
          Ne = 250;
          break;
        case 5:
          Ne = 1073741823;
          break;
        case 4:
          Ne = 1e4;
          break;
        default:
          Ne = 5e3;
      }
      return Ne = F + Ne, R = {
        id: p++,
        callback: te,
        priorityLevel: R,
        startTime: F,
        expirationTime: Ne,
        sortIndex: -1
      }, F > ve ? (R.sortIndex = F, c(f, R), s(v) === null && R === s(f) && (D ? ($(Y), Y = -1) : D = !0, xe(ne, F - ve))) : (R.sortIndex = Ne, c(v, R), S || E || (S = !0, q || (q = !0, ge()))), R;
    }, o.unstable_shouldYield = I, o.unstable_wrapCallback = function(R) {
      var te = k;
      return function() {
        var F = k;
        k = te;
        try {
          return R.apply(this, arguments);
        } finally {
          k = F;
        }
      };
    };
  })(Er)), Er;
}
var Fm;
function Fh() {
  return Fm || (Fm = 1, zr.exports = Wh()), zr.exports;
}
var Nr = { exports: {} }, Nt = {};
var Pm;
function Ph() {
  if (Pm) return Nt;
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
  return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, Nt.createPortal = function(v, f) {
    var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!f || f.nodeType !== 1 && f.nodeType !== 9 && f.nodeType !== 11)
      throw Error(c(299));
    return m(v, f, null, p);
  }, Nt.flushSync = function(v) {
    var f = h.T, p = u.p;
    try {
      if (h.T = null, u.p = 2, v) return v();
    } finally {
      h.T = f, u.p = p, u.d.f();
    }
  }, Nt.preconnect = function(v, f) {
    typeof v == "string" && (f ? (f = f.crossOrigin, f = typeof f == "string" ? f === "use-credentials" ? f : "" : void 0) : f = null, u.d.C(v, f));
  }, Nt.prefetchDNS = function(v) {
    typeof v == "string" && u.d.D(v);
  }, Nt.preinit = function(v, f) {
    if (typeof v == "string" && f && typeof f.as == "string") {
      var p = f.as, w = b(p, f.crossOrigin), k = typeof f.integrity == "string" ? f.integrity : void 0, E = typeof f.fetchPriority == "string" ? f.fetchPriority : void 0;
      p === "style" ? u.d.S(
        v,
        typeof f.precedence == "string" ? f.precedence : void 0,
        {
          crossOrigin: w,
          integrity: k,
          fetchPriority: E
        }
      ) : p === "script" && u.d.X(v, {
        crossOrigin: w,
        integrity: k,
        fetchPriority: E,
        nonce: typeof f.nonce == "string" ? f.nonce : void 0
      });
    }
  }, Nt.preinitModule = function(v, f) {
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
  }, Nt.preload = function(v, f) {
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
  }, Nt.preloadModule = function(v, f) {
    if (typeof v == "string")
      if (f) {
        var p = b(f.as, f.crossOrigin);
        u.d.m(v, {
          as: typeof f.as == "string" && f.as !== "script" ? f.as : void 0,
          crossOrigin: p,
          integrity: typeof f.integrity == "string" ? f.integrity : void 0
        });
      } else u.d.m(v);
  }, Nt.requestFormReset = function(v) {
    u.d.r(v);
  }, Nt.unstable_batchedUpdates = function(v, f) {
    return v(f);
  }, Nt.useFormState = function(v, f, p) {
    return h.H.useFormState(v, f, p);
  }, Nt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, Nt.version = "19.2.3", Nt;
}
var e_;
function e0() {
  if (e_) return Nr.exports;
  e_ = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  return o(), Nr.exports = Ph(), Nr.exports;
}
var t_;
function t0() {
  if (t_) return Ni;
  t_ = 1;
  var o = Fh(), c = Yr(), s = e0();
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
      var l = a.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (n = l.return, n !== null) {
          a = n;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === a) return v(l), e;
          if (i === n) return v(l), t;
          i = i.sibling;
        }
        throw Error(u(188));
      }
      if (a.return !== n.return) a = l, n = i;
      else {
        for (var d = !1, _ = l.child; _; ) {
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
        if (!d) {
          for (_ = i.child; _; ) {
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
  var w = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), E = /* @__PURE__ */ Symbol.for("react.transitional.element"), S = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), X = /* @__PURE__ */ Symbol.for("react.strict_mode"), U = /* @__PURE__ */ Symbol.for("react.profiler"), $ = /* @__PURE__ */ Symbol.for("react.consumer"), Z = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), ne = /* @__PURE__ */ Symbol.for("react.suspense"), q = /* @__PURE__ */ Symbol.for("react.suspense_list"), Y = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.activity"), I = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), re = Symbol.iterator;
  function ge(e) {
    return e === null || typeof e != "object" ? null : (e = re && e[re] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ee = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ke(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ee ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case U:
        return "Profiler";
      case X:
        return "StrictMode";
      case ne:
        return "Suspense";
      case q:
        return "SuspenseList";
      case se:
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
          return t = e.displayName || null, t !== null ? t : ke(e.type) || "Memo";
        case J:
          t = e._payload, e = e._init;
          try {
            return ke(e(t));
          } catch {
          }
      }
    return null;
  }
  var xe = Array.isArray, R = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ve = [], Ne = -1;
  function x(e) {
    return { current: e };
  }
  function H(e) {
    0 > Ne || (e.current = ve[Ne], ve[Ne] = null, Ne--);
  }
  function ee(e, t) {
    Ne++, ve[Ne] = e.current, e.current = t;
  }
  var ce = x(null), ye = x(null), pe = x(null), we = x(null);
  function at(e, t) {
    switch (ee(pe, t), ee(ye, e), ee(ce, null), t.nodeType) {
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
    H(ce), ee(ce, e);
  }
  function Ie() {
    H(ce), H(ye), H(pe);
  }
  function ba(e) {
    e.memoizedState !== null && ee(we, e);
    var t = ce.current, a = hm(t, e.type);
    t !== a && (ee(ye, e), ee(ce, a));
  }
  function ya(e) {
    ye.current === e && (H(ce), H(ye)), we.current === e && (H(we), xi._currentValue = F);
  }
  var Va, bn;
  function pt(e) {
    if (Va === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Va = t && t[1] || "", bn = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Va + e + bn;
  }
  var fa = !1;
  function ia(e, t) {
    if (!e || fa) return "";
    fa = !0;
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
                  var j = B;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (B) {
                  j = B;
                }
                e.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (B) {
                j = B;
              }
              (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (B) {
            if (B && j && typeof B.stack == "string")
              return [B.stack, j.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      l && l.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = n.DetermineComponentFrameRoot(), d = i[0], _ = i[1];
      if (d && _) {
        var y = d.split(`
`), C = _.split(`
`);
        for (l = n = 0; n < y.length && !y[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; l < C.length && !C[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (n === y.length || l === C.length)
          for (n = y.length - 1, l = C.length - 1; 1 <= n && 0 <= l && y[n] !== C[l]; )
            l--;
        for (; 1 <= n && 0 <= l; n--, l--)
          if (y[n] !== C[l]) {
            if (n !== 1 || l !== 1)
              do
                if (n--, l--, 0 > l || y[n] !== C[l]) {
                  var V = `
` + y[n].replace(" at new ", " at ");
                  return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), V;
                }
              while (1 <= n && 0 <= l);
            break;
          }
      }
    } finally {
      fa = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? pt(a) : "";
  }
  function yn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return pt(e.type);
      case 16:
        return pt("Lazy");
      case 13:
        return e.child !== t && t !== null ? pt("Suspense Fallback") : pt("Suspense");
      case 19:
        return pt("SuspenseList");
      case 0:
      case 15:
        return ia(e.type, !1);
      case 11:
        return ia(e.type.render, !1);
      case 1:
        return ia(e.type, !0);
      case 31:
        return pt("Activity");
      default:
        return "";
    }
  }
  function Ya(e) {
    try {
      var t = "", a = null;
      do
        t += yn(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Za = Object.prototype.hasOwnProperty, lt = o.unstable_scheduleCallback, Mt = o.unstable_cancelCallback, Zn = o.unstable_shouldYield, xa = o.unstable_requestPaint, rt = o.unstable_now, xn = o.unstable_getCurrentPriorityLevel, bt = o.unstable_ImmediatePriority, Xa = o.unstable_UserBlockingPriority, Ka = o.unstable_NormalPriority, Qa = o.unstable_LowPriority, Xn = o.unstable_IdlePriority, T = o.log, G = o.unstable_setDisableYieldValue, W = null, le = null;
  function fe(e) {
    if (typeof T == "function" && G(e), le && typeof le.setStrictMode == "function")
      try {
        le.setStrictMode(W, e);
      } catch {
      }
  }
  var ze = Math.clz32 ? Math.clz32 : yt, M = Math.log, We = Math.LN2;
  function yt(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (M(e) / We | 0) | 0;
  }
  var ae = 256, P = 262144, ie = 4194304;
  function oe(e) {
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
  function ue(e, t, a) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var l = 0, i = e.suspendedLanes, d = e.pingedLanes;
    e = e.warmLanes;
    var _ = n & 134217727;
    return _ !== 0 ? (n = _ & ~i, n !== 0 ? l = oe(n) : (d &= _, d !== 0 ? l = oe(d) : a || (a = _ & ~e, a !== 0 && (l = oe(a))))) : (_ = n & ~i, _ !== 0 ? l = oe(_) : d !== 0 ? l = oe(d) : a || (a = n & ~e, a !== 0 && (l = oe(a)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, a = t & -t, i >= a || i === 32 && (a & 4194048) !== 0) ? t : l;
  }
  function Ae(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function nt(e, t) {
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
  function _t() {
    var e = ie;
    return ie <<= 1, (ie & 62914560) === 0 && (ie = 4194304), e;
  }
  function kt(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ge(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function rs(e, t, a, n, l, i) {
    var d = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var _ = e.entanglements, y = e.expirationTimes, C = e.hiddenUpdates;
    for (a = d & ~a; 0 < a; ) {
      var V = 31 - ze(a), Q = 1 << V;
      _[V] = 0, y[V] = -1;
      var j = C[V];
      if (j !== null)
        for (C[V] = null, V = 0; V < j.length; V++) {
          var B = j[V];
          B !== null && (B.lane &= -536870913);
        }
      a &= ~Q;
    }
    n !== 0 && Ri(e, n, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(d & ~t));
  }
  function Ri(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - ze(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | a & 261930;
  }
  function Fr(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var n = 31 - ze(a), l = 1 << n;
      l & t | e[n] & t && (e[n] |= t), a &= ~l;
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
    var e = te.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Hm(e.type));
  }
  function tu(e, t) {
    var a = te.p;
    try {
      return te.p = e, t();
    } finally {
      te.p = a;
    }
  }
  var $a = Math.random().toString(36).slice(2), xt = "__reactFiber$" + $a, Tt = "__reactProps$" + $a, Kn = "__reactContainer$" + $a, fs = "__reactEvents$" + $a, Bg = "__reactListeners$" + $a, Lg = "__reactHandles$" + $a, au = "__reactResources$" + $a, Ul = "__reactMarker$" + $a;
  function ms(e) {
    delete e[xt], delete e[Tt], delete e[fs], delete e[Bg], delete e[Lg];
  }
  function Qn(e) {
    var t = e[xt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Kn] || a[xt]) {
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
    if (e = e[xt] || e[Kn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Bl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Jn(e) {
    var t = e[au];
    return t || (t = e[au] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ht(e) {
    e[Ul] = !0;
  }
  var nu = /* @__PURE__ */ new Set(), lu = {};
  function Sn(e, t) {
    In(e, t), In(e + "Capture", t);
  }
  function In(e, t) {
    for (lu[e] = t, e = 0; e < t.length; e++)
      nu.add(t[e]);
  }
  var Gg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), iu = {}, ou = {};
  function Hg(e) {
    return Za.call(ou, e) ? !0 : Za.call(iu, e) ? !1 : Gg.test(e) ? ou[e] = !0 : (iu[e] = !0, !1);
  }
  function Di(e, t, a) {
    if (Hg(t))
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
  function Ui(e, t, a) {
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
  function Sa(e, t, a, n) {
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
      var l = n.get, i = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return l.call(this);
        },
        set: function(d) {
          a = "" + d, i.call(this, d);
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
  function Bi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Vg = /[\n"\\]/g;
  function Jt(e) {
    return e.replace(
      Vg,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function gs(e, t, a, n, l, i, d, _) {
    e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + $t(t)) : e.value !== "" + $t(t) && (e.value = "" + $t(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? ps(e, d, $t(t)) : a != null ? ps(e, d, $t(a)) : n != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.name = "" + $t(_) : e.removeAttribute("name");
  }
  function ru(e, t, a, n, l, i, d, _) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || a != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        _s(e);
        return;
      }
      a = a != null ? "" + $t(a) : "", t = t != null ? "" + $t(t) : a, _ || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? l, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = _ ? e.checked : !!n, e.defaultChecked = !!n, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d), _s(e);
  }
  function ps(e, t, a) {
    t === "number" && Bi(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Wn(e, t, a, n) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < a.length; l++)
        t["$" + a[l]] = !0;
      for (a = 0; a < e.length; a++)
        l = t.hasOwnProperty("$" + e[a].value), e[a].selected !== l && (e[a].selected = l), l && n && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + $t(a), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === a) {
          e[l].selected = !0, n && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
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
        if (xe(n)) {
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
  var Yg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function fu(e, t, a) {
    var n = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Yg.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function mu(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(u(62));
    if (e = e.style, a != null) {
      for (var n in a)
        !a.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var l in t)
        n = t[l], t.hasOwnProperty(l) && a[l] !== n && fu(e, l, n);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && fu(e, i, t[i]);
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
  var Zg = /* @__PURE__ */ new Map([
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
  function Li(e) {
    return Xg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function wa() {
  }
  var vs = null;
  function bs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Pn = null, el = null;
  function _u(e) {
    var t = $n(e);
    if (t && (e = t.stateNode)) {
      var a = e[Tt] || null;
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
                var l = n[Tt] || null;
                if (!l) throw Error(u(90));
                gs(
                  n,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name
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
      if (ys = !1, (Pn !== null || el !== null) && (No(), Pn && (t = Pn, e = el, el = Pn = null, _u(t), e)))
        for (t = 0; t < e.length; t++) _u(e[t]);
    }
  }
  function Ll(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var n = a[Tt] || null;
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
  var za = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xs = !1;
  if (za)
    try {
      var Gl = {};
      Object.defineProperty(Gl, "passive", {
        get: function() {
          xs = !0;
        }
      }), window.addEventListener("test", Gl, Gl), window.removeEventListener("test", Gl, Gl);
    } catch {
      xs = !1;
    }
  var Ja = null, Ss = null, Gi = null;
  function pu() {
    if (Gi) return Gi;
    var e, t = Ss, a = t.length, n, l = "value" in Ja ? Ja.value : Ja.textContent, i = l.length;
    for (e = 0; e < a && t[e] === l[e]; e++) ;
    var d = a - e;
    for (n = 1; n <= d && t[a - n] === l[i - n]; n++) ;
    return Gi = l.slice(e, 1 < n ? 1 - n : void 0);
  }
  function Hi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function qi() {
    return !0;
  }
  function hu() {
    return !1;
  }
  function jt(e) {
    function t(a, n, l, i, d) {
      this._reactName = a, this._targetInst = l, this.type = n, this.nativeEvent = i, this.target = d, this.currentTarget = null;
      for (var _ in e)
        e.hasOwnProperty(_) && (a = e[_], this[_] = a ? a(i) : i[_]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? qi : hu, this.isPropagationStopped = hu, this;
    }
    return w(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = qi);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = qi);
      },
      persist: function() {
      },
      isPersistent: qi
    }), t;
  }
  var wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Vi = jt(wn), Hl = w({}, wn, { view: 0, detail: 0 }), Kg = jt(Hl), ws, zs, ql, Yi = w({}, Hl, {
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
    getModifierState: Ns,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ql && (ql && e.type === "mousemove" ? (ws = e.screenX - ql.screenX, zs = e.screenY - ql.screenY) : zs = ws = 0, ql = e), ws);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : zs;
    }
  }), vu = jt(Yi), Qg = w({}, Yi, { dataTransfer: 0 }), $g = jt(Qg), Jg = w({}, Hl, { relatedTarget: 0 }), Es = jt(Jg), Ig = w({}, wn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Wg = jt(Ig), Fg = w({}, wn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Pg = jt(Fg), ep = w({}, wn, { data: 0 }), bu = jt(ep), tp = {
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
  }, ap = {
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
  }, np = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function lp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = np[e]) ? !!t[e] : !1;
  }
  function Ns() {
    return lp;
  }
  var ip = w({}, Hl, {
    key: function(e) {
      if (e.key) {
        var t = tp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Hi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ap[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ns,
    charCode: function(e) {
      return e.type === "keypress" ? Hi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Hi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), op = jt(ip), sp = w({}, Yi, {
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
  }), yu = jt(sp), cp = w({}, Hl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ns
  }), rp = jt(cp), up = w({}, wn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dp = jt(up), fp = w({}, Yi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), mp = jt(fp), _p = w({}, wn, {
    newState: 0,
    oldState: 0
  }), gp = jt(_p), pp = [9, 13, 27, 32], Ms = za && "CompositionEvent" in window, Vl = null;
  za && "documentMode" in document && (Vl = document.documentMode);
  var hp = za && "TextEvent" in window && !Vl, xu = za && (!Ms || Vl && 8 < Vl && 11 >= Vl), Su = " ", wu = !1;
  function zu(e, t) {
    switch (e) {
      case "keyup":
        return pp.indexOf(t.keyCode) !== -1;
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
  function Eu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var tl = !1;
  function vp(e, t) {
    switch (e) {
      case "compositionend":
        return Eu(t);
      case "keypress":
        return t.which !== 32 ? null : (wu = !0, Su);
      case "textInput":
        return e = t.data, e === Su && wu ? null : e;
      default:
        return null;
    }
  }
  function bp(e, t) {
    if (tl)
      return e === "compositionend" || !Ms && zu(e, t) ? (e = pu(), Gi = Ss = Ja = null, tl = !1, e) : null;
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
  var yp = {
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
  function Nu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!yp[e.type] : t === "textarea";
  }
  function Mu(e, t, a, n) {
    Pn ? el ? el.push(n) : el = [n] : Pn = n, t = Oo(t, "onChange"), 0 < t.length && (a = new Vi(
      "onChange",
      "change",
      null,
      a,
      n
    ), e.push({ event: a, listeners: t }));
  }
  var Yl = null, Zl = null;
  function xp(e) {
    um(e, 0);
  }
  function Zi(e) {
    var t = Bl(e);
    if (cu(t)) return e;
  }
  function ku(e, t) {
    if (e === "change") return t;
  }
  var Au = !1;
  if (za) {
    var ks;
    if (za) {
      var As = "oninput" in document;
      if (!As) {
        var Cu = document.createElement("div");
        Cu.setAttribute("oninput", "return;"), As = typeof Cu.oninput == "function";
      }
      ks = As;
    } else ks = !1;
    Au = ks && (!document.documentMode || 9 < document.documentMode);
  }
  function Tu() {
    Yl && (Yl.detachEvent("onpropertychange", ju), Zl = Yl = null);
  }
  function ju(e) {
    if (e.propertyName === "value" && Zi(Zl)) {
      var t = [];
      Mu(
        t,
        Zl,
        e,
        bs(e)
      ), gu(xp, t);
    }
  }
  function Sp(e, t, a) {
    e === "focusin" ? (Tu(), Yl = t, Zl = a, Yl.attachEvent("onpropertychange", ju)) : e === "focusout" && Tu();
  }
  function wp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Zi(Zl);
  }
  function zp(e, t) {
    if (e === "click") return Zi(t);
  }
  function Ep(e, t) {
    if (e === "input" || e === "change")
      return Zi(t);
  }
  function Np(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Gt = typeof Object.is == "function" ? Object.is : Np;
  function Xl(e, t) {
    if (Gt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), n = Object.keys(t);
    if (a.length !== n.length) return !1;
    for (n = 0; n < a.length; n++) {
      var l = a[n];
      if (!Za.call(t, l) || !Gt(e[l], t[l]))
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
    for (var t = Bi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Bi(e.document);
    }
    return t;
  }
  function Cs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Mp = za && "documentMode" in document && 11 >= document.documentMode, al = null, Ts = null, Kl = null, js = !1;
  function Bu(e, t, a) {
    var n = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    js || al == null || al !== Bi(n) || (n = al, "selectionStart" in n && Cs(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), Kl && Xl(Kl, n) || (Kl = n, n = Oo(Ts, "onSelect"), 0 < n.length && (t = new Vi(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: n }), t.target = al)));
  }
  function zn(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var nl = {
    animationend: zn("Animation", "AnimationEnd"),
    animationiteration: zn("Animation", "AnimationIteration"),
    animationstart: zn("Animation", "AnimationStart"),
    transitionrun: zn("Transition", "TransitionRun"),
    transitionstart: zn("Transition", "TransitionStart"),
    transitioncancel: zn("Transition", "TransitionCancel"),
    transitionend: zn("Transition", "TransitionEnd")
  }, Os = {}, Lu = {};
  za && (Lu = document.createElement("div").style, "AnimationEvent" in window || (delete nl.animationend.animation, delete nl.animationiteration.animation, delete nl.animationstart.animation), "TransitionEvent" in window || delete nl.transitionend.transition);
  function En(e) {
    if (Os[e]) return Os[e];
    if (!nl[e]) return e;
    var t = nl[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Lu)
        return Os[e] = t[a];
    return e;
  }
  var Gu = En("animationend"), Hu = En("animationiteration"), qu = En("animationstart"), kp = En("transitionrun"), Ap = En("transitionstart"), Cp = En("transitioncancel"), Vu = En("transitionend"), Yu = /* @__PURE__ */ new Map(), Rs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Rs.push("scrollEnd");
  function oa(e, t) {
    Yu.set(e, t), Sn(t, [e]);
  }
  var Xi = typeof reportError == "function" ? reportError : function(e) {
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
  }, It = [], ll = 0, Ds = 0;
  function Ki() {
    for (var e = ll, t = Ds = ll = 0; t < e; ) {
      var a = It[t];
      It[t++] = null;
      var n = It[t];
      It[t++] = null;
      var l = It[t];
      It[t++] = null;
      var i = It[t];
      if (It[t++] = null, n !== null && l !== null) {
        var d = n.pending;
        d === null ? l.next = l : (l.next = d.next, d.next = l), n.pending = l;
      }
      i !== 0 && Zu(a, l, i);
    }
  }
  function Qi(e, t, a, n) {
    It[ll++] = e, It[ll++] = t, It[ll++] = a, It[ll++] = n, Ds |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function Us(e, t, a, n) {
    return Qi(e, t, a, n), $i(e);
  }
  function Nn(e, t) {
    return Qi(e, null, null, t), $i(e);
  }
  function Zu(e, t, a) {
    e.lanes |= a;
    var n = e.alternate;
    n !== null && (n.lanes |= a);
    for (var l = !1, i = e.return; i !== null; )
      i.childLanes |= a, n = i.alternate, n !== null && (n.childLanes |= a), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - ze(a), e = i.hiddenUpdates, n = e[l], n === null ? e[l] = [t] : n.push(t), t.lane = a | 536870912), i) : null;
  }
  function $i(e) {
    if (50 < _i)
      throw _i = 0, Xc = null, Error(u(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var il = {};
  function Tp(e, t, a, n) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, a, n) {
    return new Tp(e, t, a, n);
  }
  function Bs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ea(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ht(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Xu(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ji(e, t, a, n, l, i) {
    var d = 0;
    if (n = e, typeof e == "function") Bs(e) && (d = 1);
    else if (typeof e == "string")
      d = Uh(
        e,
        a,
        ce.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case se:
          return e = Ht(31, a, t, l), e.elementType = se, e.lanes = i, e;
        case D:
          return Mn(a.children, l, i, t);
        case X:
          d = 8, l |= 24;
          break;
        case U:
          return e = Ht(12, a, t, l | 2), e.elementType = U, e.lanes = i, e;
        case ne:
          return e = Ht(13, a, t, l), e.elementType = ne, e.lanes = i, e;
        case q:
          return e = Ht(19, a, t, l), e.elementType = q, e.lanes = i, e;
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
    return t = Ht(d, a, t, l), t.elementType = e, t.type = n, t.lanes = i, t;
  }
  function Mn(e, t, a, n) {
    return e = Ht(7, e, n, t), e.lanes = a, e;
  }
  function Ls(e, t, a) {
    return e = Ht(6, e, null, t), e.lanes = a, e;
  }
  function Ku(e) {
    var t = Ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Gs(e, t, a) {
    return t = Ht(
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
        stack: Ya(t)
      }, Qu.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ya(t)
    };
  }
  var ol = [], sl = 0, Ii = null, Ql = 0, Ft = [], Pt = 0, Ia = null, ma = 1, _a = "";
  function Na(e, t) {
    ol[sl++] = Ql, ol[sl++] = Ii, Ii = e, Ql = t;
  }
  function $u(e, t, a) {
    Ft[Pt++] = ma, Ft[Pt++] = _a, Ft[Pt++] = Ia, Ia = e;
    var n = ma;
    e = _a;
    var l = 32 - ze(n) - 1;
    n &= ~(1 << l), a += 1;
    var i = 32 - ze(t) + l;
    if (30 < i) {
      var d = l - l % 5;
      i = (n & (1 << d) - 1).toString(32), n >>= d, l -= d, ma = 1 << 32 - ze(t) + l | a << l | n, _a = i + e;
    } else
      ma = 1 << i | a << l | n, _a = e;
  }
  function Hs(e) {
    e.return !== null && (Na(e, 1), $u(e, 1, 0));
  }
  function qs(e) {
    for (; e === Ii; )
      Ii = ol[--sl], ol[sl] = null, Ql = ol[--sl], ol[sl] = null;
    for (; e === Ia; )
      Ia = Ft[--Pt], Ft[Pt] = null, _a = Ft[--Pt], Ft[Pt] = null, ma = Ft[--Pt], Ft[Pt] = null;
  }
  function Ju(e, t) {
    Ft[Pt++] = ma, Ft[Pt++] = _a, Ft[Pt++] = Ia, ma = t.id, _a = t.overflow, Ia = e;
  }
  var St = null, Fe = null, Be = !1, Wa = null, ea = !1, Vs = Error(u(519));
  function Fa(e) {
    var t = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw $l(Wt(t, e)), Vs;
  }
  function Iu(e) {
    var t = e.stateNode, a = e.type, n = e.memoizedProps;
    switch (t[xt] = e, t[Tt] = n, a) {
      case "dialog":
        Re("cancel", t), Re("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Re("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < pi.length; a++)
          Re(pi[a], t);
        break;
      case "source":
        Re("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Re("error", t), Re("load", t);
        break;
      case "details":
        Re("toggle", t);
        break;
      case "input":
        Re("invalid", t), ru(
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
        Re("invalid", t);
        break;
      case "textarea":
        Re("invalid", t), du(t, n.value, n.defaultValue, n.children);
    }
    a = n.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || n.suppressHydrationWarning === !0 || _m(t.textContent, a) ? (n.popover != null && (Re("beforetoggle", t), Re("toggle", t)), n.onScroll != null && Re("scroll", t), n.onScrollEnd != null && Re("scrollend", t), n.onClick != null && (t.onclick = wa), t = !0) : t = !1, t || Fa(e, !0);
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
  function cl(e) {
    if (e !== St) return !1;
    if (!Be) return Wu(e), Be = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || or(e.type, e.memoizedProps)), a = !a), a && Fe && Fa(e), Wu(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      Fe = wm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      Fe = wm(e);
    } else
      t === 27 ? (t = Fe, mn(e.type) ? (e = dr, dr = null, Fe = e) : Fe = t) : Fe = St ? aa(e.stateNode.nextSibling) : null;
    return !0;
  }
  function kn() {
    Fe = St = null, Be = !1;
  }
  function Ys() {
    var e = Wa;
    return e !== null && (Ut === null ? Ut = e : Ut.push.apply(
      Ut,
      e
    ), Wa = null), e;
  }
  function $l(e) {
    Wa === null ? Wa = [e] : Wa.push(e);
  }
  var Zs = x(null), An = null, Ma = null;
  function Pa(e, t, a) {
    ee(Zs, t._currentValue), t._currentValue = a;
  }
  function ka(e) {
    e._currentValue = Zs.current, H(Zs);
  }
  function Xs(e, t, a) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function Ks(e, t, a, n) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var i = l.dependencies;
      if (i !== null) {
        var d = l.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var _ = i;
          i = l;
          for (var y = 0; y < t.length; y++)
            if (_.context === t[y]) {
              i.lanes |= a, _ = i.alternate, _ !== null && (_.lanes |= a), Xs(
                i.return,
                a,
                e
              ), n || (d = null);
              break e;
            }
          i = _.next;
        }
      } else if (l.tag === 18) {
        if (d = l.return, d === null) throw Error(u(341));
        d.lanes |= a, i = d.alternate, i !== null && (i.lanes |= a), Xs(d, a, e), d = null;
      } else d = l.child;
      if (d !== null) d.return = l;
      else
        for (d = l; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (l = d.sibling, l !== null) {
            l.return = d.return, d = l;
            break;
          }
          d = d.return;
        }
      l = d;
    }
  }
  function rl(e, t, a, n) {
    e = null;
    for (var l = t, i = !1; l !== null; ) {
      if (!i) {
        if ((l.flags & 524288) !== 0) i = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var d = l.alternate;
        if (d === null) throw Error(u(387));
        if (d = d.memoizedProps, d !== null) {
          var _ = l.type;
          Gt(l.pendingProps.value, d.value) || (e !== null ? e.push(_) : e = [_]);
        }
      } else if (l === we.current) {
        if (d = l.alternate, d === null) throw Error(u(387));
        d.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(xi) : e = [xi]);
      }
      l = l.return;
    }
    e !== null && Ks(
      t,
      e,
      a,
      n
    ), t.flags |= 262144;
  }
  function Wi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Gt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Cn(e) {
    An = e, Ma = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function wt(e) {
    return Fu(An, e);
  }
  function Fi(e, t) {
    return An === null && Cn(e), Fu(e, t);
  }
  function Fu(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Ma === null) {
      if (e === null) throw Error(u(308));
      Ma = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Ma = Ma.next = t;
    return a;
  }
  var jp = typeof AbortController < "u" ? AbortController : function() {
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
  }, Op = o.unstable_scheduleCallback, Rp = o.unstable_NormalPriority, ut = {
    $$typeof: Z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Qs() {
    return {
      controller: new jp(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Jl(e) {
    e.refCount--, e.refCount === 0 && Op(Rp, function() {
      e.controller.abort();
    });
  }
  var Il = null, $s = 0, ul = 0, dl = null;
  function Dp(e, t) {
    if (Il === null) {
      var a = Il = [];
      $s = 0, ul = Wc(), dl = {
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
    if (--$s === 0 && Il !== null) {
      dl !== null && (dl.status = "fulfilled");
      var e = Il;
      Il = null, ul = 0, dl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Up(e, t) {
    var a = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(l) {
        a.push(l);
      }
    };
    return e.then(
      function() {
        n.status = "fulfilled", n.value = t;
        for (var l = 0; l < a.length; l++) (0, a[l])(t);
      },
      function(l) {
        for (n.status = "rejected", n.reason = l, l = 0; l < a.length; l++)
          (0, a[l])(void 0);
      }
    ), n;
  }
  var ed = R.S;
  R.S = function(e, t) {
    Lf = rt(), typeof t == "object" && t !== null && typeof t.then == "function" && Dp(e, t), ed !== null && ed(e, t);
  };
  var Tn = x(null);
  function Js() {
    var e = Tn.current;
    return e !== null ? e : Je.pooledCache;
  }
  function Pi(e, t) {
    t === null ? ee(Tn, Tn.current) : ee(Tn, t.pool);
  }
  function td() {
    var e = Js();
    return e === null ? null : { parent: ut._currentValue, pool: e };
  }
  var fl = Error(u(460)), Is = Error(u(474)), eo = Error(u(542)), to = { then: function() {
  } };
  function ad(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function nd(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(wa, wa), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, id(e), e;
      default:
        if (typeof t.status == "string") t.then(wa, wa);
        else {
          if (e = Je, e !== null && 100 < e.shellSuspendCounter)
            throw Error(u(482));
          e = t, e.status = "pending", e.then(
            function(n) {
              if (t.status === "pending") {
                var l = t;
                l.status = "fulfilled", l.value = n;
              }
            },
            function(n) {
              if (t.status === "pending") {
                var l = t;
                l.status = "rejected", l.reason = n;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, id(e), e;
        }
        throw On = t, fl;
    }
  }
  function jn(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (On = a, fl) : a;
    }
  }
  var On = null;
  function ld() {
    if (On === null) throw Error(u(459));
    var e = On;
    return On = null, e;
  }
  function id(e) {
    if (e === fl || e === eo)
      throw Error(u(483));
  }
  var ml = null, Wl = 0;
  function ao(e) {
    var t = Wl;
    return Wl += 1, ml === null && (ml = []), nd(ml, e, t);
  }
  function Fl(e, t) {
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
    function t(N, z) {
      if (e) {
        var A = N.deletions;
        A === null ? (N.deletions = [z], N.flags |= 16) : A.push(z);
      }
    }
    function a(N, z) {
      if (!e) return null;
      for (; z !== null; )
        t(N, z), z = z.sibling;
      return null;
    }
    function n(N) {
      for (var z = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? z.set(N.key, N) : z.set(N.index, N), N = N.sibling;
      return z;
    }
    function l(N, z) {
      return N = Ea(N, z), N.index = 0, N.sibling = null, N;
    }
    function i(N, z, A) {
      return N.index = A, e ? (A = N.alternate, A !== null ? (A = A.index, A < z ? (N.flags |= 67108866, z) : A) : (N.flags |= 67108866, z)) : (N.flags |= 1048576, z);
    }
    function d(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function _(N, z, A, K) {
      return z === null || z.tag !== 6 ? (z = Ls(A, N.mode, K), z.return = N, z) : (z = l(z, A), z.return = N, z);
    }
    function y(N, z, A, K) {
      var he = A.type;
      return he === D ? V(
        N,
        z,
        A.props.children,
        K,
        A.key
      ) : z !== null && (z.elementType === he || typeof he == "object" && he !== null && he.$$typeof === J && jn(he) === z.type) ? (z = l(z, A.props), Fl(z, A), z.return = N, z) : (z = Ji(
        A.type,
        A.key,
        A.props,
        null,
        N.mode,
        K
      ), Fl(z, A), z.return = N, z);
    }
    function C(N, z, A, K) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== A.containerInfo || z.stateNode.implementation !== A.implementation ? (z = Gs(A, N.mode, K), z.return = N, z) : (z = l(z, A.children || []), z.return = N, z);
    }
    function V(N, z, A, K, he) {
      return z === null || z.tag !== 7 ? (z = Mn(
        A,
        N.mode,
        K,
        he
      ), z.return = N, z) : (z = l(z, A), z.return = N, z);
    }
    function Q(N, z, A) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Ls(
          "" + z,
          N.mode,
          A
        ), z.return = N, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case E:
            return A = Ji(
              z.type,
              z.key,
              z.props,
              null,
              N.mode,
              A
            ), Fl(A, z), A.return = N, A;
          case S:
            return z = Gs(
              z,
              N.mode,
              A
            ), z.return = N, z;
          case J:
            return z = jn(z), Q(N, z, A);
        }
        if (xe(z) || ge(z))
          return z = Mn(
            z,
            N.mode,
            A,
            null
          ), z.return = N, z;
        if (typeof z.then == "function")
          return Q(N, ao(z), A);
        if (z.$$typeof === Z)
          return Q(
            N,
            Fi(N, z),
            A
          );
        no(N, z);
      }
      return null;
    }
    function j(N, z, A, K) {
      var he = z !== null ? z.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return he !== null ? null : _(N, z, "" + A, K);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case E:
            return A.key === he ? y(N, z, A, K) : null;
          case S:
            return A.key === he ? C(N, z, A, K) : null;
          case J:
            return A = jn(A), j(N, z, A, K);
        }
        if (xe(A) || ge(A))
          return he !== null ? null : V(N, z, A, K, null);
        if (typeof A.then == "function")
          return j(
            N,
            z,
            ao(A),
            K
          );
        if (A.$$typeof === Z)
          return j(
            N,
            z,
            Fi(N, A),
            K
          );
        no(N, A);
      }
      return null;
    }
    function B(N, z, A, K, he) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return N = N.get(A) || null, _(z, N, "" + K, he);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case E:
            return N = N.get(
              K.key === null ? A : K.key
            ) || null, y(z, N, K, he);
          case S:
            return N = N.get(
              K.key === null ? A : K.key
            ) || null, C(z, N, K, he);
          case J:
            return K = jn(K), B(
              N,
              z,
              A,
              K,
              he
            );
        }
        if (xe(K) || ge(K))
          return N = N.get(A) || null, V(z, N, K, he, null);
        if (typeof K.then == "function")
          return B(
            N,
            z,
            A,
            ao(K),
            he
          );
        if (K.$$typeof === Z)
          return B(
            N,
            z,
            A,
            Fi(z, K),
            he
          );
        no(z, K);
      }
      return null;
    }
    function de(N, z, A, K) {
      for (var he = null, He = null, me = z, Te = z = 0, Ue = null; me !== null && Te < A.length; Te++) {
        me.index > Te ? (Ue = me, me = null) : Ue = me.sibling;
        var qe = j(
          N,
          me,
          A[Te],
          K
        );
        if (qe === null) {
          me === null && (me = Ue);
          break;
        }
        e && me && qe.alternate === null && t(N, me), z = i(qe, z, Te), He === null ? he = qe : He.sibling = qe, He = qe, me = Ue;
      }
      if (Te === A.length)
        return a(N, me), Be && Na(N, Te), he;
      if (me === null) {
        for (; Te < A.length; Te++)
          me = Q(N, A[Te], K), me !== null && (z = i(
            me,
            z,
            Te
          ), He === null ? he = me : He.sibling = me, He = me);
        return Be && Na(N, Te), he;
      }
      for (me = n(me); Te < A.length; Te++)
        Ue = B(
          me,
          N,
          Te,
          A[Te],
          K
        ), Ue !== null && (e && Ue.alternate !== null && me.delete(
          Ue.key === null ? Te : Ue.key
        ), z = i(
          Ue,
          z,
          Te
        ), He === null ? he = Ue : He.sibling = Ue, He = Ue);
      return e && me.forEach(function(vn) {
        return t(N, vn);
      }), Be && Na(N, Te), he;
    }
    function Se(N, z, A, K) {
      if (A == null) throw Error(u(151));
      for (var he = null, He = null, me = z, Te = z = 0, Ue = null, qe = A.next(); me !== null && !qe.done; Te++, qe = A.next()) {
        me.index > Te ? (Ue = me, me = null) : Ue = me.sibling;
        var vn = j(N, me, qe.value, K);
        if (vn === null) {
          me === null && (me = Ue);
          break;
        }
        e && me && vn.alternate === null && t(N, me), z = i(vn, z, Te), He === null ? he = vn : He.sibling = vn, He = vn, me = Ue;
      }
      if (qe.done)
        return a(N, me), Be && Na(N, Te), he;
      if (me === null) {
        for (; !qe.done; Te++, qe = A.next())
          qe = Q(N, qe.value, K), qe !== null && (z = i(qe, z, Te), He === null ? he = qe : He.sibling = qe, He = qe);
        return Be && Na(N, Te), he;
      }
      for (me = n(me); !qe.done; Te++, qe = A.next())
        qe = B(me, N, Te, qe.value, K), qe !== null && (e && qe.alternate !== null && me.delete(qe.key === null ? Te : qe.key), z = i(qe, z, Te), He === null ? he = qe : He.sibling = qe, He = qe);
      return e && me.forEach(function(Qh) {
        return t(N, Qh);
      }), Be && Na(N, Te), he;
    }
    function $e(N, z, A, K) {
      if (typeof A == "object" && A !== null && A.type === D && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case E:
            e: {
              for (var he = A.key; z !== null; ) {
                if (z.key === he) {
                  if (he = A.type, he === D) {
                    if (z.tag === 7) {
                      a(
                        N,
                        z.sibling
                      ), K = l(
                        z,
                        A.props.children
                      ), K.return = N, N = K;
                      break e;
                    }
                  } else if (z.elementType === he || typeof he == "object" && he !== null && he.$$typeof === J && jn(he) === z.type) {
                    a(
                      N,
                      z.sibling
                    ), K = l(z, A.props), Fl(K, A), K.return = N, N = K;
                    break e;
                  }
                  a(N, z);
                  break;
                } else t(N, z);
                z = z.sibling;
              }
              A.type === D ? (K = Mn(
                A.props.children,
                N.mode,
                K,
                A.key
              ), K.return = N, N = K) : (K = Ji(
                A.type,
                A.key,
                A.props,
                null,
                N.mode,
                K
              ), Fl(K, A), K.return = N, N = K);
            }
            return d(N);
          case S:
            e: {
              for (he = A.key; z !== null; ) {
                if (z.key === he)
                  if (z.tag === 4 && z.stateNode.containerInfo === A.containerInfo && z.stateNode.implementation === A.implementation) {
                    a(
                      N,
                      z.sibling
                    ), K = l(z, A.children || []), K.return = N, N = K;
                    break e;
                  } else {
                    a(N, z);
                    break;
                  }
                else t(N, z);
                z = z.sibling;
              }
              K = Gs(A, N.mode, K), K.return = N, N = K;
            }
            return d(N);
          case J:
            return A = jn(A), $e(
              N,
              z,
              A,
              K
            );
        }
        if (xe(A))
          return de(
            N,
            z,
            A,
            K
          );
        if (ge(A)) {
          if (he = ge(A), typeof he != "function") throw Error(u(150));
          return A = he.call(A), Se(
            N,
            z,
            A,
            K
          );
        }
        if (typeof A.then == "function")
          return $e(
            N,
            z,
            ao(A),
            K
          );
        if (A.$$typeof === Z)
          return $e(
            N,
            z,
            Fi(N, A),
            K
          );
        no(N, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, z !== null && z.tag === 6 ? (a(N, z.sibling), K = l(z, A), K.return = N, N = K) : (a(N, z), K = Ls(A, N.mode, K), K.return = N, N = K), d(N)) : a(N, z);
    }
    return function(N, z, A, K) {
      try {
        Wl = 0;
        var he = $e(
          N,
          z,
          A,
          K
        );
        return ml = null, he;
      } catch (me) {
        if (me === fl || me === eo) throw me;
        var He = Ht(29, me, null, N.mode);
        return He.lanes = K, He.return = N, He;
      }
    };
  }
  var Rn = od(!0), sd = od(!1), en = !1;
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
    if (n = n.shared, (Ye & 2) !== 0) {
      var l = n.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), n.pending = t, t = $i(e), Zu(e, null, a), t;
    }
    return Qi(e, n, t, a), $i(e);
  }
  function Pl(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, a |= n, t.lanes = a, Fr(e, a);
    }
  }
  function Ps(e, t) {
    var a = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, a === n)) {
      var l = null, i = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var d = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          i === null ? l = i = d : i = i.next = d, a = a.next;
        } while (a !== null);
        i === null ? l = i = t : i = i.next = t;
      } else l = i = t;
      a = {
        baseState: n.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: n.shared,
        callbacks: n.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var ec = !1;
  function ei() {
    if (ec) {
      var e = dl;
      if (e !== null) throw e;
    }
  }
  function ti(e, t, a, n) {
    ec = !1;
    var l = e.updateQueue;
    en = !1;
    var i = l.firstBaseUpdate, d = l.lastBaseUpdate, _ = l.shared.pending;
    if (_ !== null) {
      l.shared.pending = null;
      var y = _, C = y.next;
      y.next = null, d === null ? i = C : d.next = C, d = y;
      var V = e.alternate;
      V !== null && (V = V.updateQueue, _ = V.lastBaseUpdate, _ !== d && (_ === null ? V.firstBaseUpdate = C : _.next = C, V.lastBaseUpdate = y));
    }
    if (i !== null) {
      var Q = l.baseState;
      d = 0, V = C = y = null, _ = i;
      do {
        var j = _.lane & -536870913, B = j !== _.lane;
        if (B ? (De & j) === j : (n & j) === j) {
          j !== 0 && j === ul && (ec = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: null,
            next: null
          });
          e: {
            var de = e, Se = _;
            j = t;
            var $e = a;
            switch (Se.tag) {
              case 1:
                if (de = Se.payload, typeof de == "function") {
                  Q = de.call($e, Q, j);
                  break e;
                }
                Q = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = Se.payload, j = typeof de == "function" ? de.call($e, Q, j) : de, j == null) break e;
                Q = w({}, Q, j);
                break e;
              case 2:
                en = !0;
            }
          }
          j = _.callback, j !== null && (e.flags |= 64, B && (e.flags |= 8192), B = l.callbacks, B === null ? l.callbacks = [j] : B.push(j));
        } else
          B = {
            lane: j,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          }, V === null ? (C = V = B, y = Q) : V = V.next = B, d |= j;
        if (_ = _.next, _ === null) {
          if (_ = l.shared.pending, _ === null)
            break;
          B = _, _ = B.next, B.next = null, l.lastBaseUpdate = B, l.shared.pending = null;
        }
      } while (!0);
      V === null && (y = Q), l.baseState = y, l.firstBaseUpdate = C, l.lastBaseUpdate = V, i === null && (l.shared.lanes = 0), cn |= d, e.lanes = d, e.memoizedState = Q;
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
  var _l = x(null), lo = x(0);
  function ud(e, t) {
    e = Ba, ee(lo, e), ee(_l, t), Ba = e | t.baseLanes;
  }
  function tc() {
    ee(lo, Ba), ee(_l, _l.current);
  }
  function ac() {
    Ba = lo.current, H(_l), H(lo);
  }
  var qt = x(null), ta = null;
  function nn(e) {
    var t = e.alternate;
    ee(st, st.current & 1), ee(qt, e), ta === null && (t === null || _l.current !== null || t.memoizedState !== null) && (ta = e);
  }
  function nc(e) {
    ee(st, st.current), ee(qt, e), ta === null && (ta = e);
  }
  function dd(e) {
    e.tag === 22 ? (ee(st, st.current), ee(qt, e), ta === null && (ta = e)) : ln();
  }
  function ln() {
    ee(st, st.current), ee(qt, qt.current);
  }
  function Vt(e) {
    H(qt), ta === e && (ta = null), H(st);
  }
  var st = x(0);
  function io(e) {
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
  var Aa = 0, Ce = null, Ke = null, dt = null, oo = !1, gl = !1, Dn = !1, so = 0, ai = 0, pl = null, Bp = 0;
  function it() {
    throw Error(u(321));
  }
  function lc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Gt(e[a], t[a])) return !1;
    return !0;
  }
  function ic(e, t, a, n, l, i) {
    return Aa = i, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = e === null || e.memoizedState === null ? $d : yc, Dn = !1, i = a(n, l), Dn = !1, gl && (i = md(
      t,
      a,
      n,
      l
    )), fd(e), i;
  }
  function fd(e) {
    R.H = ii;
    var t = Ke !== null && Ke.next !== null;
    if (Aa = 0, dt = Ke = Ce = null, oo = !1, ai = 0, pl = null, t) throw Error(u(300));
    e === null || ft || (e = e.dependencies, e !== null && Wi(e) && (ft = !0));
  }
  function md(e, t, a, n) {
    Ce = e;
    var l = 0;
    do {
      if (gl && (pl = null), ai = 0, gl = !1, 25 <= l) throw Error(u(301));
      if (l += 1, dt = Ke = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      R.H = Jd, i = t(a, n);
    } while (gl);
    return i;
  }
  function Lp() {
    var e = R.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ni(t) : t, e = e.useState()[0], (Ke !== null ? Ke.memoizedState : null) !== e && (Ce.flags |= 1024), t;
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
    Aa = 0, dt = Ke = Ce = null, gl = !1, ai = so = 0, pl = null;
  }
  function At() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return dt === null ? Ce.memoizedState = dt = e : dt = dt.next = e, dt;
  }
  function ct() {
    if (Ke === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var t = dt === null ? Ce.memoizedState : dt.next;
    if (t !== null)
      dt = t, Ke = e;
    else {
      if (e === null)
        throw Ce.alternate === null ? Error(u(467)) : Error(u(310));
      Ke = e, e = {
        memoizedState: Ke.memoizedState,
        baseState: Ke.baseState,
        baseQueue: Ke.baseQueue,
        queue: Ke.queue,
        next: null
      }, dt === null ? Ce.memoizedState = dt = e : dt = dt.next = e;
    }
    return dt;
  }
  function co() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ni(e) {
    var t = ai;
    return ai += 1, pl === null && (pl = []), e = nd(pl, e, t), t = Ce, (dt === null ? t.memoizedState : dt.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? $d : yc), e;
  }
  function ro(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ni(e);
      if (e.$$typeof === Z) return wt(e);
    }
    throw Error(u(438, String(e)));
  }
  function rc(e) {
    var t = null, a = Ce.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var n = Ce.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(l) {
          return l.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = co(), Ce.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), n = 0; n < e; n++)
        a[n] = I;
    return t.index++, a;
  }
  function Ca(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function uo(e) {
    var t = ct();
    return uc(t, Ke, e);
  }
  function uc(e, t, a) {
    var n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = a;
    var l = e.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var d = l.next;
        l.next = i.next, i.next = d;
      }
      t.baseQueue = l = i, n.pending = null;
    }
    if (i = e.baseState, l === null) e.memoizedState = i;
    else {
      t = l.next;
      var _ = d = null, y = null, C = t, V = !1;
      do {
        var Q = C.lane & -536870913;
        if (Q !== C.lane ? (De & Q) === Q : (Aa & Q) === Q) {
          var j = C.revertLane;
          if (j === 0)
            y !== null && (y = y.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), Q === ul && (V = !0);
          else if ((Aa & j) === j) {
            C = C.next, j === ul && (V = !0);
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
            }, y === null ? (_ = y = Q, d = i) : y = y.next = Q, Ce.lanes |= j, cn |= j;
          Q = C.action, Dn && a(i, Q), i = C.hasEagerState ? C.eagerState : a(i, Q);
        } else
          j = {
            lane: Q,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, y === null ? (_ = y = j, d = i) : y = y.next = j, Ce.lanes |= Q, cn |= Q;
        C = C.next;
      } while (C !== null && C !== t);
      if (y === null ? d = i : y.next = _, !Gt(i, e.memoizedState) && (ft = !0, V && (a = dl, a !== null)))
        throw a;
      e.memoizedState = i, e.baseState = d, e.baseQueue = y, n.lastRenderedState = i;
    }
    return l === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function dc(e) {
    var t = ct(), a = t.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = e;
    var n = a.dispatch, l = a.pending, i = t.memoizedState;
    if (l !== null) {
      a.pending = null;
      var d = l = l.next;
      do
        i = e(i, d.action), d = d.next;
      while (d !== l);
      Gt(i, t.memoizedState) || (ft = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), a.lastRenderedState = i;
    }
    return [i, n];
  }
  function _d(e, t, a) {
    var n = Ce, l = ct(), i = Be;
    if (i) {
      if (a === void 0) throw Error(u(407));
      a = a();
    } else a = t();
    var d = !Gt(
      (Ke || l).memoizedState,
      a
    );
    if (d && (l.memoizedState = a, ft = !0), l = l.queue, _c(hd.bind(null, n, l, e), [
      e
    ]), l.getSnapshot !== t || d || dt !== null && dt.memoizedState.tag & 1) {
      if (n.flags |= 2048, hl(
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
      ), Je === null) throw Error(u(349));
      i || (Aa & 127) !== 0 || gd(n, t, a);
    }
    return a;
  }
  function gd(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ce.updateQueue, t === null ? (t = co(), Ce.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
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
      return !Gt(e, a);
    } catch {
      return !0;
    }
  }
  function bd(e) {
    var t = Nn(e, 2);
    t !== null && Bt(t, e, 2);
  }
  function fc(e) {
    var t = At();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Dn) {
        fe(!0);
        try {
          a();
        } finally {
          fe(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ca,
      lastRenderedState: e
    }, t;
  }
  function yd(e, t, a, n) {
    return e.baseState = a, uc(
      e,
      Ke,
      typeof n == "function" ? n : Ca
    );
  }
  function Gp(e, t, a, n, l) {
    if (_o(e)) throw Error(u(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: l,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(d) {
          i.listeners.push(d);
        }
      };
      R.T !== null ? a(!0) : i.isTransition = !1, n(i), a = t.pending, a === null ? (i.next = t.pending = i, xd(t, i)) : (i.next = a.next, t.pending = a.next = i);
    }
  }
  function xd(e, t) {
    var a = t.action, n = t.payload, l = e.state;
    if (t.isTransition) {
      var i = R.T, d = {};
      R.T = d;
      try {
        var _ = a(l, n), y = R.S;
        y !== null && y(d, _), Sd(e, t, _);
      } catch (C) {
        mc(e, t, C);
      } finally {
        i !== null && d.types !== null && (i.types = d.types), R.T = i;
      }
    } else
      try {
        i = a(l, n), Sd(e, t, i);
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
  function Ed(e, t) {
    return t;
  }
  function Nd(e, t) {
    if (Be) {
      var a = Je.formState;
      if (a !== null) {
        e: {
          var n = Ce;
          if (Be) {
            if (Fe) {
              t: {
                for (var l = Fe, i = ea; l.nodeType !== 8; ) {
                  if (!i) {
                    l = null;
                    break t;
                  }
                  if (l = aa(
                    l.nextSibling
                  ), l === null) {
                    l = null;
                    break t;
                  }
                }
                i = l.data, l = i === "F!" || i === "F" ? l : null;
              }
              if (l) {
                Fe = aa(
                  l.nextSibling
                ), n = l.data === "F!";
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
    return a = At(), a.memoizedState = a.baseState = t, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ed,
      lastRenderedState: t
    }, a.queue = n, a = Xd.bind(
      null,
      Ce,
      n
    ), n.dispatch = a, n = fc(!1), i = bc.bind(
      null,
      Ce,
      !1,
      n.queue
    ), n = At(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = l, a = Gp.bind(
      null,
      Ce,
      l,
      i,
      a
    ), l.dispatch = a, n.memoizedState = e, [t, a, !1];
  }
  function Md(e) {
    var t = ct();
    return kd(t, Ke, e);
  }
  function kd(e, t, a) {
    if (t = uc(
      e,
      t,
      Ed
    )[0], e = uo(Ca)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = ni(t);
      } catch (d) {
        throw d === fl ? eo : d;
      }
    else n = t;
    t = ct();
    var l = t.queue, i = l.dispatch;
    return a !== t.memoizedState && (Ce.flags |= 2048, hl(
      9,
      { destroy: void 0 },
      Hp.bind(null, l, a),
      null
    )), [n, i, e];
  }
  function Hp(e, t) {
    e.action = t;
  }
  function Ad(e) {
    var t = ct(), a = Ke;
    if (a !== null)
      return kd(t, a, e);
    ct(), t = t.memoizedState, a = ct();
    var n = a.queue.dispatch;
    return a.memoizedState = e, [t, n, !1];
  }
  function hl(e, t, a, n) {
    return e = { tag: e, create: a, deps: n, inst: t, next: null }, t = Ce.updateQueue, t === null && (t = co(), Ce.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (n = a.next, a.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Cd() {
    return ct().memoizedState;
  }
  function fo(e, t, a, n) {
    var l = At();
    Ce.flags |= e, l.memoizedState = hl(
      1 | t,
      { destroy: void 0 },
      a,
      n === void 0 ? null : n
    );
  }
  function mo(e, t, a, n) {
    var l = ct();
    n = n === void 0 ? null : n;
    var i = l.memoizedState.inst;
    Ke !== null && n !== null && lc(n, Ke.memoizedState.deps) ? l.memoizedState = hl(t, i, a, n) : (Ce.flags |= e, l.memoizedState = hl(
      1 | t,
      i,
      a,
      n
    ));
  }
  function Td(e, t) {
    fo(8390656, 8, e, t);
  }
  function _c(e, t) {
    mo(2048, 8, e, t);
  }
  function qp(e) {
    Ce.flags |= 4;
    var t = Ce.updateQueue;
    if (t === null)
      t = co(), Ce.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function jd(e) {
    var t = ct().memoizedState;
    return qp({ ref: t, nextImpl: e }), function() {
      if ((Ye & 2) !== 0) throw Error(u(440));
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
    var a = ct();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    return t !== null && lc(t, n[1]) ? n[0] : (a.memoizedState = [e, t], e);
  }
  function Ld(e, t) {
    var a = ct();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    if (t !== null && lc(t, n[1]))
      return n[0];
    if (n = e(), Dn) {
      fe(!0);
      try {
        e();
      } finally {
        fe(!1);
      }
    }
    return a.memoizedState = [n, t], n;
  }
  function pc(e, t, a) {
    return a === void 0 || (Aa & 1073741824) !== 0 && (De & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Hf(), Ce.lanes |= e, cn |= e, a);
  }
  function Gd(e, t, a, n) {
    return Gt(a, t) ? a : _l.current !== null ? (e = pc(e, a, n), Gt(e, t) || (ft = !0), e) : (Aa & 42) === 0 || (Aa & 1073741824) !== 0 && (De & 261930) === 0 ? (ft = !0, e.memoizedState = a) : (e = Hf(), Ce.lanes |= e, cn |= e, t);
  }
  function Hd(e, t, a, n, l) {
    var i = te.p;
    te.p = i !== 0 && 8 > i ? i : 8;
    var d = R.T, _ = {};
    R.T = _, bc(e, !1, t, a);
    try {
      var y = l(), C = R.S;
      if (C !== null && C(_, y), y !== null && typeof y == "object" && typeof y.then == "function") {
        var V = Up(
          y,
          n
        );
        li(
          e,
          t,
          V,
          Xt(e)
        );
      } else
        li(
          e,
          t,
          n,
          Xt(e)
        );
    } catch (Q) {
      li(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Q },
        Xt()
      );
    } finally {
      te.p = i, d !== null && _.types !== null && (d.types = _.types), R.T = d;
    }
  }
  function Vp() {
  }
  function hc(e, t, a, n) {
    if (e.tag !== 5) throw Error(u(476));
    var l = qd(e).queue;
    Hd(
      e,
      l,
      t,
      F,
      a === null ? Vp : function() {
        return Vd(e), a(n);
      }
    );
  }
  function qd(e) {
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
        lastRenderedReducer: Ca,
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
        lastRenderedReducer: Ca,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Vd(e) {
    var t = qd(e);
    t.next === null && (t = e.alternate.memoizedState), li(
      e,
      t.next.queue,
      {},
      Xt()
    );
  }
  function vc() {
    return wt(xi);
  }
  function Yd() {
    return ct().memoizedState;
  }
  function Zd() {
    return ct().memoizedState;
  }
  function Yp(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Xt();
          e = tn(a);
          var n = an(t, e, a);
          n !== null && (Bt(n, t, a), Pl(n, t, a)), t = { cache: Qs() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Zp(e, t, a) {
    var n = Xt();
    a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _o(e) ? Kd(t, a) : (a = Us(e, t, a, n), a !== null && (Bt(a, e, n), Qd(a, t, n)));
  }
  function Xd(e, t, a) {
    var n = Xt();
    li(e, t, a, n);
  }
  function li(e, t, a, n) {
    var l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (_o(e)) Kd(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var d = t.lastRenderedState, _ = i(d, a);
          if (l.hasEagerState = !0, l.eagerState = _, Gt(_, d))
            return Qi(e, t, l, 0), Je === null && Ki(), !1;
        } catch {
        }
      if (a = Us(e, t, l, n), a !== null)
        return Bt(a, e, n), Qd(a, t, n), !0;
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
      ), t !== null && Bt(t, e, 2);
  }
  function _o(e) {
    var t = e.alternate;
    return e === Ce || t !== null && t === Ce;
  }
  function Kd(e, t) {
    gl = oo = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Qd(e, t, a) {
    if ((a & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, a |= n, t.lanes = a, Fr(e, a);
    }
  }
  var ii = {
    readContext: wt,
    use: ro,
    useCallback: it,
    useContext: it,
    useEffect: it,
    useImperativeHandle: it,
    useLayoutEffect: it,
    useInsertionEffect: it,
    useMemo: it,
    useReducer: it,
    useRef: it,
    useState: it,
    useDebugValue: it,
    useDeferredValue: it,
    useTransition: it,
    useSyncExternalStore: it,
    useId: it,
    useHostTransitionStatus: it,
    useFormState: it,
    useActionState: it,
    useOptimistic: it,
    useMemoCache: it,
    useCacheRefresh: it
  };
  ii.useEffectEvent = it;
  var $d = {
    readContext: wt,
    use: ro,
    useCallback: function(e, t) {
      return At().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: wt,
    useEffect: Td,
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
      var a = At();
      t = t === void 0 ? null : t;
      var n = e();
      if (Dn) {
        fe(!0);
        try {
          e();
        } finally {
          fe(!1);
        }
      }
      return a.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, a) {
      var n = At();
      if (a !== void 0) {
        var l = a(t);
        if (Dn) {
          fe(!0);
          try {
            a(t);
          } finally {
            fe(!1);
          }
        }
      } else l = t;
      return n.memoizedState = n.baseState = l, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      }, n.queue = e, e = e.dispatch = Zp.bind(
        null,
        Ce,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = At();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = fc(e);
      var t = e.queue, a = Xd.bind(null, Ce, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: gc,
    useDeferredValue: function(e, t) {
      var a = At();
      return pc(a, e, t);
    },
    useTransition: function() {
      var e = fc(!1);
      return e = Hd.bind(
        null,
        Ce,
        e.queue,
        !0,
        !1
      ), At().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var n = Ce, l = At();
      if (Be) {
        if (a === void 0)
          throw Error(u(407));
        a = a();
      } else {
        if (a = t(), Je === null)
          throw Error(u(349));
        (De & 127) !== 0 || gd(n, t, a);
      }
      l.memoizedState = a;
      var i = { value: a, getSnapshot: t };
      return l.queue = i, Td(hd.bind(null, n, i, e), [
        e
      ]), n.flags |= 2048, hl(
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
      ), a;
    },
    useId: function() {
      var e = At(), t = Je.identifierPrefix;
      if (Be) {
        var a = _a, n = ma;
        a = (n & ~(1 << 32 - ze(n) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = so++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Bp++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: vc,
    useFormState: Nd,
    useActionState: Nd,
    useOptimistic: function(e) {
      var t = At();
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
        Ce,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: rc,
    useCacheRefresh: function() {
      return At().memoizedState = Yp.bind(
        null,
        Ce
      );
    },
    useEffectEvent: function(e) {
      var t = At(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Ye & 2) !== 0)
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
      return uo(Ca);
    },
    useDebugValue: gc,
    useDeferredValue: function(e, t) {
      var a = ct();
      return Gd(
        a,
        Ke.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = uo(Ca)[0], t = ct().memoizedState;
      return [
        typeof e == "boolean" ? e : ni(e),
        t
      ];
    },
    useSyncExternalStore: _d,
    useId: Yd,
    useHostTransitionStatus: vc,
    useFormState: Md,
    useActionState: Md,
    useOptimistic: function(e, t) {
      var a = ct();
      return yd(a, Ke, e, t);
    },
    useMemoCache: rc,
    useCacheRefresh: Zd
  };
  yc.useEffectEvent = jd;
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
      return dc(Ca);
    },
    useDebugValue: gc,
    useDeferredValue: function(e, t) {
      var a = ct();
      return Ke === null ? pc(a, e, t) : Gd(
        a,
        Ke.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = dc(Ca)[0], t = ct().memoizedState;
      return [
        typeof e == "boolean" ? e : ni(e),
        t
      ];
    },
    useSyncExternalStore: _d,
    useId: Yd,
    useHostTransitionStatus: vc,
    useFormState: Ad,
    useActionState: Ad,
    useOptimistic: function(e, t) {
      var a = ct();
      return Ke !== null ? yd(a, Ke, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: rc,
    useCacheRefresh: Zd
  };
  Jd.useEffectEvent = jd;
  function xc(e, t, a, n) {
    t = e.memoizedState, a = a(n, t), a = a == null ? t : w({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Sc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var n = Xt(), l = tn(n);
      l.payload = t, a != null && (l.callback = a), t = an(e, l, n), t !== null && (Bt(t, e, n), Pl(t, e, n));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var n = Xt(), l = tn(n);
      l.tag = 1, l.payload = t, a != null && (l.callback = a), t = an(e, l, n), t !== null && (Bt(t, e, n), Pl(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Xt(), n = tn(a);
      n.tag = 2, t != null && (n.callback = t), t = an(e, n, a), t !== null && (Bt(t, e, a), Pl(t, e, a));
    }
  };
  function Id(e, t, a, n, l, i, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, d) : t.prototype && t.prototype.isPureReactComponent ? !Xl(a, n) || !Xl(l, i) : !0;
  }
  function Wd(e, t, a, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, n), t.state !== e && Sc.enqueueReplaceState(t, t.state, null);
  }
  function Un(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var n in t)
        n !== "ref" && (a[n] = t[n]);
    }
    if (e = e.defaultProps) {
      a === t && (a = w({}, a));
      for (var l in e)
        a[l] === void 0 && (a[l] = e[l]);
    }
    return a;
  }
  function Fd(e) {
    Xi(e);
  }
  function Pd(e) {
    console.error(e);
  }
  function ef(e) {
    Xi(e);
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
    } catch (l) {
      setTimeout(function() {
        throw l;
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
    var l = a.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = n.value;
      e.payload = function() {
        return l(i);
      }, e.callback = function() {
        tf(t, a, n);
      };
    }
    var d = a.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
      tf(t, a, n), typeof l != "function" && (rn === null ? rn = /* @__PURE__ */ new Set([this]) : rn.add(this));
      var _ = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: _ !== null ? _ : ""
      });
    });
  }
  function Xp(e, t, a, n, l) {
    if (a.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = a.alternate, t !== null && rl(
        t,
        a,
        l,
        !0
      ), a = qt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return ta === null ? Mo() : a.alternate === null && ot === 0 && (ot = 3), a.flags &= -257, a.flags |= 65536, a.lanes = l, n === to ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), $c(e, n, l)), !1;
          case 22:
            return a.flags |= 65536, n === to ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : a.add(n)), $c(e, n, l)), !1;
        }
        throw Error(u(435, a.tag));
      }
      return $c(e, n, l), Mo(), !1;
    }
    if (Be)
      return t = qt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, n !== Vs && (e = Error(u(422), { cause: n }), $l(Wt(e, a)))) : (n !== Vs && (t = Error(u(423), {
        cause: n
      }), $l(
        Wt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, n = Wt(n, a), l = wc(
        e.stateNode,
        n,
        l
      ), Ps(e, l), ot !== 4 && (ot = 2)), !1;
    var i = Error(u(520), { cause: n });
    if (i = Wt(i, a), mi === null ? mi = [i] : mi.push(i), ot !== 4 && (ot = 2), t === null) return !0;
    n = Wt(n, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = l & -l, a.lanes |= e, e = wc(a.stateNode, n, e), Ps(a, e), !1;
        case 1:
          if (t = a.type, i = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (rn === null || !rn.has(i))))
            return a.flags |= 65536, l &= -l, a.lanes |= l, l = af(l), nf(
              l,
              e,
              a,
              n
            ), Ps(a, l), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var zc = Error(u(461)), ft = !1;
  function zt(e, t, a, n) {
    t.child = e === null ? sd(t, null, a, n) : Rn(
      t,
      e.child,
      a,
      n
    );
  }
  function lf(e, t, a, n, l) {
    a = a.render;
    var i = t.ref;
    if ("ref" in n) {
      var d = {};
      for (var _ in n)
        _ !== "ref" && (d[_] = n[_]);
    } else d = n;
    return Cn(t), n = ic(
      e,
      t,
      a,
      d,
      i,
      l
    ), _ = oc(), e !== null && !ft ? (sc(e, t, l), Ta(e, t, l)) : (Be && _ && Hs(t), t.flags |= 1, zt(e, t, n, l), t.child);
  }
  function of(e, t, a, n, l) {
    if (e === null) {
      var i = a.type;
      return typeof i == "function" && !Bs(i) && i.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = i, sf(
        e,
        t,
        i,
        n,
        l
      )) : (e = Ji(
        a.type,
        null,
        n,
        t,
        t.mode,
        l
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !jc(e, l)) {
      var d = i.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Xl, a(d, n) && e.ref === t.ref)
        return Ta(e, t, l);
    }
    return t.flags |= 1, e = Ea(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function sf(e, t, a, n, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Xl(i, n) && e.ref === t.ref)
        if (ft = !1, t.pendingProps = n = i, jc(e, l))
          (e.flags & 131072) !== 0 && (ft = !0);
        else
          return t.lanes = e.lanes, Ta(e, t, l);
    }
    return Ec(
      e,
      t,
      a,
      n,
      l
    );
  }
  function cf(e, t, a, n) {
    var l = n.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | a : a, e !== null) {
          for (n = t.child = e.child, l = 0; n !== null; )
            l = l | n.lanes | n.childLanes, n = n.sibling;
          n = l & ~i;
        } else n = 0, t.child = null;
        return rf(
          e,
          t,
          i,
          a,
          n
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Pi(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? ud(t, i) : tc(), dd(t);
      else
        return n = t.lanes = 536870912, rf(
          e,
          t,
          i !== null ? i.baseLanes | a : a,
          a,
          n
        );
    } else
      i !== null ? (Pi(t, i.cachePool), ud(t, i), ln(), t.memoizedState = null) : (e !== null && Pi(t, null), tc(), ln());
    return zt(e, t, l, a), t.child;
  }
  function oi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function rf(e, t, a, n, l) {
    var i = Js();
    return i = i === null ? null : { parent: ut._currentValue, pool: i }, t.memoizedState = {
      baseLanes: a,
      cachePool: i
    }, e !== null && Pi(t, null), tc(), dd(t), e !== null && rl(e, t, n, !0), t.childLanes = l, null;
  }
  function po(e, t) {
    return t = vo(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function uf(e, t, a) {
    return Rn(t, e.child, null, a), e = po(t, t.pendingProps), e.flags |= 2, Vt(t), t.memoizedState = null, e;
  }
  function Kp(e, t, a) {
    var n = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Be) {
        if (n.mode === "hidden")
          return e = po(t, n), t.lanes = 536870912, oi(null, e);
        if (nc(t), (e = Fe) ? (e = Sm(
          e,
          ea
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ia !== null ? { id: ma, overflow: _a } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Ku(e), a.return = t, t.child = a, St = t, Fe = null)) : e = null, e === null) throw Fa(t);
        return t.lanes = 536870912, null;
      }
      return po(t, n);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var d = i.dehydrated;
      if (nc(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = uf(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(u(558));
      else if (ft || rl(e, t, a, !1), l = (a & e.childLanes) !== 0, ft || l) {
        if (n = Je, n !== null && (d = Pr(n, a), d !== 0 && d !== i.retryLane))
          throw i.retryLane = d, Nn(e, d), Bt(n, e, d), zc;
        Mo(), t = uf(
          e,
          t,
          a
        );
      } else
        e = i.treeContext, Fe = aa(d.nextSibling), St = t, Be = !0, Wa = null, ea = !1, e !== null && Ju(t, e), t = po(t, n), t.flags |= 4096;
      return t;
    }
    return e = Ea(e.child, {
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
  function Ec(e, t, a, n, l) {
    return Cn(t), a = ic(
      e,
      t,
      a,
      n,
      void 0,
      l
    ), n = oc(), e !== null && !ft ? (sc(e, t, l), Ta(e, t, l)) : (Be && n && Hs(t), t.flags |= 1, zt(e, t, a, l), t.child);
  }
  function df(e, t, a, n, l, i) {
    return Cn(t), t.updateQueue = null, a = md(
      t,
      n,
      a,
      l
    ), fd(e), n = oc(), e !== null && !ft ? (sc(e, t, i), Ta(e, t, i)) : (Be && n && Hs(t), t.flags |= 1, zt(e, t, a, i), t.child);
  }
  function ff(e, t, a, n, l) {
    if (Cn(t), t.stateNode === null) {
      var i = il, d = a.contextType;
      typeof d == "object" && d !== null && (i = wt(d)), i = new a(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Sc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Ws(t), d = a.contextType, i.context = typeof d == "object" && d !== null ? wt(d) : il, i.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (xc(
        t,
        a,
        d,
        n
      ), i.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (d = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), d !== i.state && Sc.enqueueReplaceState(i, i.state, null), ti(t, n, i, l), ei(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var _ = t.memoizedProps, y = Un(a, _);
      i.props = y;
      var C = i.context, V = a.contextType;
      d = il, typeof V == "object" && V !== null && (d = wt(V));
      var Q = a.getDerivedStateFromProps;
      V = typeof Q == "function" || typeof i.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, V || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (_ || C !== d) && Wd(
        t,
        i,
        n,
        d
      ), en = !1;
      var j = t.memoizedState;
      i.state = j, ti(t, n, i, l), ei(), C = t.memoizedState, _ || j !== C || en ? (typeof Q == "function" && (xc(
        t,
        a,
        Q,
        n
      ), C = t.memoizedState), (y = en || Id(
        t,
        a,
        y,
        n,
        j,
        C,
        d
      )) ? (V || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = C), i.props = n, i.state = C, i.context = d, n = y) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, Fs(e, t), d = t.memoizedProps, V = Un(a, d), i.props = V, Q = t.pendingProps, j = i.context, C = a.contextType, y = il, typeof C == "object" && C !== null && (y = wt(C)), _ = a.getDerivedStateFromProps, (C = typeof _ == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d !== Q || j !== y) && Wd(
        t,
        i,
        n,
        y
      ), en = !1, j = t.memoizedState, i.state = j, ti(t, n, i, l), ei();
      var B = t.memoizedState;
      d !== Q || j !== B || en || e !== null && e.dependencies !== null && Wi(e.dependencies) ? (typeof _ == "function" && (xc(
        t,
        a,
        _,
        n
      ), B = t.memoizedState), (V = en || Id(
        t,
        a,
        V,
        n,
        j,
        B,
        y
      ) || e !== null && e.dependencies !== null && Wi(e.dependencies)) ? (C || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, B, y), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        B,
        y
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || d === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = B), i.props = n, i.state = B, i.context = y, n = V) : (typeof i.componentDidUpdate != "function" || d === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return i = n, ho(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, a = n && typeof a.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = Rn(
      t,
      e.child,
      null,
      l
    ), t.child = Rn(
      t,
      null,
      a,
      l
    )) : zt(e, t, a, l), t.memoizedState = i.state, e = t.child) : e = Ta(
      e,
      t,
      l
    ), e;
  }
  function mf(e, t, a, n) {
    return kn(), t.flags |= 256, zt(e, t, a, n), t.child;
  }
  var Nc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Mc(e) {
    return { baseLanes: e, cachePool: td() };
  }
  function kc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Zt), e;
  }
  function _f(e, t, a) {
    var n = t.pendingProps, l = !1, i = (t.flags & 128) !== 0, d;
    if ((d = i) || (d = e !== null && e.memoizedState === null ? !1 : (st.current & 2) !== 0), d && (l = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Be) {
        if (l ? nn(t) : ln(), (e = Fe) ? (e = Sm(
          e,
          ea
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ia !== null ? { id: ma, overflow: _a } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Ku(e), a.return = t, t.child = a, St = t, Fe = null)) : e = null, e === null) throw Fa(t);
        return ur(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var _ = n.children;
      return n = n.fallback, l ? (ln(), l = t.mode, _ = vo(
        { mode: "hidden", children: _ },
        l
      ), n = Mn(
        n,
        l,
        a,
        null
      ), _.return = t, n.return = t, _.sibling = n, t.child = _, n = t.child, n.memoizedState = Mc(a), n.childLanes = kc(
        e,
        d,
        a
      ), t.memoizedState = Nc, oi(null, n)) : (nn(t), Ac(t, _));
    }
    var y = e.memoizedState;
    if (y !== null && (_ = y.dehydrated, _ !== null)) {
      if (i)
        t.flags & 256 ? (nn(t), t.flags &= -257, t = Cc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (ln(), t.child = e.child, t.flags |= 128, t = null) : (ln(), _ = n.fallback, l = t.mode, n = vo(
          { mode: "visible", children: n.children },
          l
        ), _ = Mn(
          _,
          l,
          a,
          null
        ), _.flags |= 2, n.return = t, _.return = t, n.sibling = _, t.child = n, Rn(
          t,
          e.child,
          null,
          a
        ), n = t.child, n.memoizedState = Mc(a), n.childLanes = kc(
          e,
          d,
          a
        ), t.memoizedState = Nc, t = oi(null, n));
      else if (nn(t), ur(_)) {
        if (d = _.nextSibling && _.nextSibling.dataset, d) var C = d.dgst;
        d = C, n = Error(u(419)), n.stack = "", n.digest = d, $l({ value: n, source: null, stack: null }), t = Cc(
          e,
          t,
          a
        );
      } else if (ft || rl(e, t, a, !1), d = (a & e.childLanes) !== 0, ft || d) {
        if (d = Je, d !== null && (n = Pr(d, a), n !== 0 && n !== y.retryLane))
          throw y.retryLane = n, Nn(e, n), Bt(d, e, n), zc;
        rr(_) || Mo(), t = Cc(
          e,
          t,
          a
        );
      } else
        rr(_) ? (t.flags |= 192, t.child = e.child, t = null) : (e = y.treeContext, Fe = aa(
          _.nextSibling
        ), St = t, Be = !0, Wa = null, ea = !1, e !== null && Ju(t, e), t = Ac(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return l ? (ln(), _ = n.fallback, l = t.mode, y = e.child, C = y.sibling, n = Ea(y, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = y.subtreeFlags & 65011712, C !== null ? _ = Ea(
      C,
      _
    ) : (_ = Mn(
      _,
      l,
      a,
      null
    ), _.flags |= 2), _.return = t, n.return = t, n.sibling = _, t.child = n, oi(null, n), n = t.child, _ = e.child.memoizedState, _ === null ? _ = Mc(a) : (l = _.cachePool, l !== null ? (y = ut._currentValue, l = l.parent !== y ? { parent: y, pool: y } : l) : l = td(), _ = {
      baseLanes: _.baseLanes | a,
      cachePool: l
    }), n.memoizedState = _, n.childLanes = kc(
      e,
      d,
      a
    ), t.memoizedState = Nc, oi(e.child, n)) : (nn(t), a = e.child, e = a.sibling, a = Ea(a, {
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
    return e = Ht(22, e, null, t), e.lanes = 0, e;
  }
  function Cc(e, t, a) {
    return Rn(t, e.child, null, a), e = Ac(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function gf(e, t, a) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Xs(e.return, t, a);
  }
  function Tc(e, t, a, n, l, i) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: a,
      tailMode: l,
      treeForkCount: i
    } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = n, d.tail = a, d.tailMode = l, d.treeForkCount = i);
  }
  function pf(e, t, a) {
    var n = t.pendingProps, l = n.revealOrder, i = n.tail;
    n = n.children;
    var d = st.current, _ = (d & 2) !== 0;
    if (_ ? (d = d & 1 | 2, t.flags |= 128) : d &= 1, ee(st, d), zt(e, t, n, a), n = Be ? Ql : 0, !_ && e !== null && (e.flags & 128) !== 0)
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
    switch (l) {
      case "forwards":
        for (a = t.child, l = null; a !== null; )
          e = a.alternate, e !== null && io(e) === null && (l = a), a = a.sibling;
        a = l, a === null ? (l = t.child, t.child = null) : (l = a.sibling, a.sibling = null), Tc(
          t,
          !1,
          l,
          a,
          i,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && io(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = a, a = l, l = e;
        }
        Tc(
          t,
          !0,
          a,
          null,
          i,
          n
        );
        break;
      case "together":
        Tc(
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
  function Ta(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), cn |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (rl(
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
      for (e = t.child, a = Ea(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = Ea(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function jc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Wi(e)));
  }
  function Qp(e, t, a) {
    switch (t.tag) {
      case 3:
        at(t, t.stateNode.containerInfo), Pa(t, ut, e.memoizedState.cache), kn();
        break;
      case 27:
      case 5:
        ba(t);
        break;
      case 4:
        at(t, t.stateNode.containerInfo);
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
          return n.dehydrated !== null ? (nn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? _f(e, t, a) : (nn(t), e = Ta(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        nn(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (n = (a & t.childLanes) !== 0, n || (rl(
          e,
          t,
          a,
          !1
        ), n = (a & t.childLanes) !== 0), l) {
          if (n)
            return pf(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ee(st, st.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, cf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Pa(t, ut, e.memoizedState.cache);
    }
    return Ta(e, t, a);
  }
  function hf(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ft = !0;
      else {
        if (!jc(e, a) && (t.flags & 128) === 0)
          return ft = !1, Qp(
            e,
            t,
            a
          );
        ft = (e.flags & 131072) !== 0;
      }
    else
      ft = !1, Be && (t.flags & 1048576) !== 0 && $u(t, Ql, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = jn(t.elementType), t.type = e, typeof e == "function")
            Bs(e) ? (n = Un(e, n), t.tag = 1, t = ff(
              null,
              t,
              e,
              n,
              a
            )) : (t.tag = 0, t = Ec(
              null,
              t,
              e,
              n,
              a
            ));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === L) {
                t.tag = 11, t = lf(
                  null,
                  t,
                  e,
                  n,
                  a
                );
                break e;
              } else if (l === Y) {
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
            throw t = ke(e) || e, Error(u(306, t, ""));
          }
        }
        return t;
      case 0:
        return Ec(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return n = t.type, l = Un(
          n,
          t.pendingProps
        ), ff(
          e,
          t,
          n,
          l,
          a
        );
      case 3:
        e: {
          if (at(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(u(387));
          n = t.pendingProps;
          var i = t.memoizedState;
          l = i.element, Fs(e, t), ti(t, n, null, a);
          var d = t.memoizedState;
          if (n = d.cache, Pa(t, ut, n), n !== i.cache && Ks(
            t,
            [ut],
            a,
            !0
          ), ei(), n = d.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: d.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = mf(
                e,
                t,
                n,
                a
              );
              break e;
            } else if (n !== l) {
              l = Wt(
                Error(u(424)),
                t
              ), $l(l), t = mf(
                e,
                t,
                n,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Fe = aa(e.firstChild), St = t, Be = !0, Wa = null, ea = !0, a = sd(
                t,
                null,
                n,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (kn(), n === l) {
              t = Ta(
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
        )) ? t.memoizedState = a : Be || (a = t.type, e = t.pendingProps, n = Ro(
          pe.current
        ).createElement(a), n[xt] = t, n[Tt] = e, Et(n, a, e), ht(n), t.stateNode = n) : t.memoizedState = km(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ba(t), e === null && Be && (n = t.stateNode = Em(
          t.type,
          t.pendingProps,
          pe.current
        ), St = t, ea = !0, l = Fe, mn(t.type) ? (dr = l, Fe = aa(n.firstChild)) : Fe = l), zt(
          e,
          t,
          t.pendingProps.children,
          a
        ), ho(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Be && ((l = n = Fe) && (n = wh(
          n,
          t.type,
          t.pendingProps,
          ea
        ), n !== null ? (t.stateNode = n, St = t, Fe = aa(n.firstChild), ea = !1, l = !0) : l = !1), l || Fa(t)), ba(t), l = t.type, i = t.pendingProps, d = e !== null ? e.memoizedProps : null, n = i.children, or(l, i) ? n = null : d !== null && or(l, d) && (t.flags |= 32), t.memoizedState !== null && (l = ic(
          e,
          t,
          Lp,
          null,
          null,
          a
        ), xi._currentValue = l), ho(e, t), zt(e, t, n, a), t.child;
      case 6:
        return e === null && Be && ((e = a = Fe) && (a = zh(
          a,
          t.pendingProps,
          ea
        ), a !== null ? (t.stateNode = a, St = t, Fe = null, e = !0) : e = !1), e || Fa(t)), null;
      case 13:
        return _f(e, t, a);
      case 4:
        return at(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = Rn(
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
        return l = t.type._context, n = t.pendingProps.children, Cn(t), l = wt(l), n = n(l), t.flags |= 1, zt(e, t, n, a), t.child;
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
        return Kp(e, t, a);
      case 22:
        return cf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return Cn(t), n = wt(ut), e === null ? (l = Js(), l === null && (l = Je, i = Qs(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= a), l = i), t.memoizedState = { parent: n, cache: l }, Ws(t), Pa(t, ut, l)) : ((e.lanes & a) !== 0 && (Fs(e, t), ti(t, null, null, a), ei()), l = e.memoizedState, i = t.memoizedState, l.parent !== n ? (l = { parent: n, cache: n }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), Pa(t, ut, n)) : (n = i.cache, Pa(t, ut, n), n !== l.cache && Ks(
          t,
          [ut],
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
  function ja(e) {
    e.flags |= 4;
  }
  function Oc(e, t, a, n, l) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Zf()) e.flags |= 8192;
        else
          throw On = to, Is;
    } else e.flags &= -16777217;
  }
  function vf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Om(t))
      if (Zf()) e.flags |= 8192;
      else
        throw On = to, Is;
  }
  function bo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? _t() : 536870912, e.lanes |= t, xl |= t);
  }
  function si(e, t) {
    if (!Be)
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
  function Pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, n = 0;
    if (t)
      for (var l = e.child; l !== null; )
        a |= l.lanes | l.childLanes, n |= l.subtreeFlags & 65011712, n |= l.flags & 65011712, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        a |= l.lanes | l.childLanes, n |= l.subtreeFlags, n |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= n, e.childLanes = a, t;
  }
  function $p(e, t, a) {
    var n = t.pendingProps;
    switch (qs(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Pe(t), null;
      case 1:
        return Pe(t), null;
      case 3:
        return a = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ka(ut), Ie(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (cl(t) ? ja(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ys())), Pe(t), null;
      case 26:
        var l = t.type, i = t.memoizedState;
        return e === null ? (ja(t), i !== null ? (Pe(t), vf(t, i)) : (Pe(t), Oc(
          t,
          l,
          null,
          n,
          a
        ))) : i ? i !== e.memoizedState ? (ja(t), Pe(t), vf(t, i)) : (Pe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && ja(t), Pe(t), Oc(
          t,
          l,
          e,
          n,
          a
        )), null;
      case 27:
        if (ya(t), a = pe.current, l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ja(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Pe(t), null;
          }
          e = ce.current, cl(t) ? Iu(t) : (e = Em(l, n, a), t.stateNode = e, ja(t));
        }
        return Pe(t), null;
      case 5:
        if (ya(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ja(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Pe(t), null;
          }
          if (i = ce.current, cl(t))
            Iu(t);
          else {
            var d = Ro(
              pe.current
            );
            switch (i) {
              case 1:
                i = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                i = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    i = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    i = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    i = d.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof n.is == "string" ? d.createElement("select", {
                      is: n.is
                    }) : d.createElement("select"), n.multiple ? i.multiple = !0 : n.size && (i.size = n.size);
                    break;
                  default:
                    i = typeof n.is == "string" ? d.createElement(l, { is: n.is }) : d.createElement(l);
                }
            }
            i[xt] = t, i[Tt] = n;
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                i.appendChild(d.stateNode);
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
            t.stateNode = i;
            e: switch (Et(i, l, n), l) {
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
            n && ja(t);
          }
        }
        return Pe(t), Oc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && ja(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(u(166));
          if (e = pe.current, cl(t)) {
            if (e = t.stateNode, a = t.memoizedProps, n = null, l = St, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  n = l.memoizedProps;
              }
            e[xt] = t, e = !!(e.nodeValue === a || n !== null && n.suppressHydrationWarning === !0 || _m(e.nodeValue, a)), e || Fa(t, !0);
          } else
            e = Ro(e).createTextNode(
              n
            ), e[xt] = t, t.stateNode = e;
        }
        return Pe(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = cl(t), a !== null) {
            if (e === null) {
              if (!n) throw Error(u(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(557));
              e[xt] = t;
            } else
              kn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Pe(t), e = !1;
          } else
            a = Ys(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Vt(t), t) : (Vt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(u(558));
        }
        return Pe(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (l = cl(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(u(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(u(317));
              l[xt] = t;
            } else
              kn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Pe(t), l = !1;
          } else
            l = Ys(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? (Vt(t), t) : (Vt(t), null);
        }
        return Vt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = n !== null, e = e !== null && e.memoizedState !== null, a && (n = t.child, l = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (l = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== l && (n.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), bo(t, t.updateQueue), Pe(t), null);
      case 4:
        return Ie(), e === null && tr(t.stateNode.containerInfo), Pe(t), null;
      case 10:
        return ka(t.type), Pe(t), null;
      case 19:
        if (H(st), n = t.memoizedState, n === null) return Pe(t), null;
        if (l = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (l) si(n, !1);
          else {
            if (ot !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = io(e), i !== null) {
                  for (t.flags |= 128, si(n, !1), e = i.updateQueue, t.updateQueue = e, bo(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Xu(a, e), a = a.sibling;
                  return ee(
                    st,
                    st.current & 1 | 2
                  ), Be && Na(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && rt() > zo && (t.flags |= 128, l = !0, si(n, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = io(i), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, bo(t, e), si(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !Be)
                return Pe(t), null;
            } else
              2 * rt() - n.renderingStartTime > zo && a !== 536870912 && (t.flags |= 128, l = !0, si(n, !1), t.lanes = 4194304);
          n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = rt(), e.sibling = null, a = st.current, ee(
          st,
          l ? a & 1 | 2 : a & 1
        ), Be && Na(t, n.treeForkCount), e) : (Pe(t), null);
      case 22:
      case 23:
        return Vt(t), ac(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t), a = t.updateQueue, a !== null && bo(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== a && (t.flags |= 2048), e !== null && H(Tn), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ka(ut), Pe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Jp(e, t) {
    switch (qs(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ka(ut), Ie(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ya(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Vt(t), t.alternate === null)
            throw Error(u(340));
          kn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Vt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(u(340));
          kn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return H(st), null;
      case 4:
        return Ie(), null;
      case 10:
        return ka(t.type), null;
      case 22:
      case 23:
        return Vt(t), ac(), e !== null && H(Tn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ka(ut), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bf(e, t) {
    switch (qs(t), t.tag) {
      case 3:
        ka(ut), Ie();
        break;
      case 26:
      case 27:
      case 5:
        ya(t);
        break;
      case 4:
        Ie();
        break;
      case 31:
        t.memoizedState !== null && Vt(t);
        break;
      case 13:
        Vt(t);
        break;
      case 19:
        H(st);
        break;
      case 10:
        ka(t.type);
        break;
      case 22:
      case 23:
        Vt(t), ac(), e !== null && H(Tn);
        break;
      case 24:
        ka(ut);
    }
  }
  function ci(e, t) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var l = n.next;
        a = l;
        do {
          if ((a.tag & e) === e) {
            n = void 0;
            var i = a.create, d = a.inst;
            n = i(), d.destroy = n;
          }
          a = a.next;
        } while (a !== l);
      }
    } catch (_) {
      Xe(t, t.return, _);
    }
  }
  function on(e, t, a) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            var d = n.inst, _ = d.destroy;
            if (_ !== void 0) {
              d.destroy = void 0, l = t;
              var y = a, C = _;
              try {
                C();
              } catch (V) {
                Xe(
                  l,
                  y,
                  V
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (V) {
      Xe(t, t.return, V);
    }
  }
  function yf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        rd(t, a);
      } catch (n) {
        Xe(e, e.return, n);
      }
    }
  }
  function xf(e, t, a) {
    a.props = Un(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (n) {
      Xe(e, t, n);
    }
  }
  function ri(e, t) {
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
    } catch (l) {
      Xe(e, t, l);
    }
  }
  function ga(e, t) {
    var a = e.ref, n = e.refCleanup;
    if (a !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (l) {
          Xe(e, t, l);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (l) {
          Xe(e, t, l);
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
    } catch (l) {
      Xe(e, e.return, l);
    }
  }
  function Rc(e, t, a) {
    try {
      var n = e.stateNode;
      hh(n, e.type, a, t), n[Tt] = t;
    } catch (l) {
      Xe(e, e.return, l);
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
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = wa));
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
      for (var n = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      Et(t, n, a), t[xt] = e, t[Tt] = a;
    } catch (i) {
      Xe(e, e.return, i);
    }
  }
  var Oa = !1, mt = !1, Bc = !1, Ef = typeof WeakSet == "function" ? WeakSet : Set, vt = null;
  function Ip(e, t) {
    if (e = e.containerInfo, lr = qo, e = Uu(e), Cs(e)) {
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
            var l = n.anchorOffset, i = n.focusNode;
            n = n.focusOffset;
            try {
              a.nodeType, i.nodeType;
            } catch {
              a = null;
              break e;
            }
            var d = 0, _ = -1, y = -1, C = 0, V = 0, Q = e, j = null;
            t: for (; ; ) {
              for (var B; Q !== a || l !== 0 && Q.nodeType !== 3 || (_ = d + l), Q !== i || n !== 0 && Q.nodeType !== 3 || (y = d + n), Q.nodeType === 3 && (d += Q.nodeValue.length), (B = Q.firstChild) !== null; )
                j = Q, Q = B;
              for (; ; ) {
                if (Q === e) break t;
                if (j === a && ++C === l && (_ = d), j === i && ++V === n && (y = d), (B = Q.nextSibling) !== null) break;
                Q = j, j = Q.parentNode;
              }
              Q = B;
            }
            a = _ === -1 || y === -1 ? null : { start: _, end: y };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (ir = { focusedElem: e, selectionRange: a }, qo = !1, vt = t; vt !== null; )
      if (t = vt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, vt = e;
      else
        for (; vt !== null; ) {
          switch (t = vt, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  l = e[a], l.ref.impl = l.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, a = t, l = i.memoizedProps, i = i.memoizedState, n = a.stateNode;
                try {
                  var de = Un(
                    a.type,
                    l
                  );
                  e = n.getSnapshotBeforeUpdate(
                    de,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Se) {
                  Xe(
                    a,
                    a.return,
                    Se
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
            e.return = t.return, vt = e;
            break;
          }
          vt = t.return;
        }
  }
  function Nf(e, t, a) {
    var n = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Da(e, a), n & 4 && ci(5, a);
        break;
      case 1:
        if (Da(e, a), n & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (d) {
              Xe(a, a.return, d);
            }
          else {
            var l = Un(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                l,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (d) {
              Xe(
                a,
                a.return,
                d
              );
            }
          }
        n & 64 && yf(a), n & 512 && ri(a, a.return);
        break;
      case 3:
        if (Da(e, a), n & 64 && (e = a.updateQueue, e !== null)) {
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
            Xe(a, a.return, d);
          }
        }
        break;
      case 27:
        t === null && n & 4 && zf(a);
      case 26:
      case 5:
        Da(e, a), t === null && n & 4 && Sf(a), n & 512 && ri(a, a.return);
        break;
      case 12:
        Da(e, a);
        break;
      case 31:
        Da(e, a), n & 4 && Af(e, a);
        break;
      case 13:
        Da(e, a), n & 4 && Cf(e, a), n & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = ih.bind(
          null,
          a
        ), Eh(e, a))));
        break;
      case 22:
        if (n = a.memoizedState !== null || Oa, !n) {
          t = t !== null && t.memoizedState !== null || mt, l = Oa;
          var i = mt;
          Oa = n, (mt = t) && !i ? Ua(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Da(e, a), Oa = l, mt = i;
        }
        break;
      case 30:
        break;
      default:
        Da(e, a);
    }
  }
  function Mf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Mf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ms(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var et = null, Ot = !1;
  function Ra(e, t, a) {
    for (a = a.child; a !== null; )
      kf(e, t, a), a = a.sibling;
  }
  function kf(e, t, a) {
    if (le && typeof le.onCommitFiberUnmount == "function")
      try {
        le.onCommitFiberUnmount(W, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        mt || ga(a, t), Ra(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        mt || ga(a, t);
        var n = et, l = Ot;
        mn(a.type) && (et = a.stateNode, Ot = !1), Ra(
          e,
          t,
          a
        ), vi(a.stateNode), et = n, Ot = l;
        break;
      case 5:
        mt || ga(a, t);
      case 6:
        if (n = et, l = Ot, et = null, Ra(
          e,
          t,
          a
        ), et = n, Ot = l, et !== null)
          if (Ot)
            try {
              (et.nodeType === 9 ? et.body : et.nodeName === "HTML" ? et.ownerDocument.body : et).removeChild(a.stateNode);
            } catch (i) {
              Xe(
                a,
                t,
                i
              );
            }
          else
            try {
              et.removeChild(a.stateNode);
            } catch (i) {
              Xe(
                a,
                t,
                i
              );
            }
        break;
      case 18:
        et !== null && (Ot ? (e = et, ym(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Al(e)) : ym(et, a.stateNode));
        break;
      case 4:
        n = et, l = Ot, et = a.stateNode.containerInfo, Ot = !0, Ra(
          e,
          t,
          a
        ), et = n, Ot = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        on(2, a, t), mt || on(4, a, t), Ra(
          e,
          t,
          a
        );
        break;
      case 1:
        mt || (ga(a, t), n = a.stateNode, typeof n.componentWillUnmount == "function" && xf(
          a,
          t,
          n
        )), Ra(
          e,
          t,
          a
        );
        break;
      case 21:
        Ra(
          e,
          t,
          a
        );
        break;
      case 22:
        mt = (n = mt) || a.memoizedState !== null, Ra(
          e,
          t,
          a
        ), mt = n;
        break;
      default:
        Ra(
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
        Al(e);
      } catch (a) {
        Xe(t, t.return, a);
      }
    }
  }
  function Cf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Al(e);
      } catch (a) {
        Xe(t, t.return, a);
      }
  }
  function Wp(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Ef()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Ef()), t;
      default:
        throw Error(u(435, e.tag));
    }
  }
  function xo(e, t) {
    var a = Wp(e);
    t.forEach(function(n) {
      if (!a.has(n)) {
        a.add(n);
        var l = oh.bind(null, e, n);
        n.then(l, l);
      }
    });
  }
  function Rt(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var l = a[n], i = e, d = t, _ = d;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (mn(_.type)) {
                et = _.stateNode, Ot = !1;
                break e;
              }
              break;
            case 5:
              et = _.stateNode, Ot = !1;
              break e;
            case 3:
            case 4:
              et = _.stateNode.containerInfo, Ot = !0;
              break e;
          }
          _ = _.return;
        }
        if (et === null) throw Error(u(160));
        kf(i, d, l), et = null, Ot = !1, i = l.alternate, i !== null && (i.return = null), l.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Tf(t, e), t = t.sibling;
  }
  var sa = null;
  function Tf(e, t) {
    var a = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Rt(t, e), Dt(e), n & 4 && (on(3, e, e.return), ci(3, e), on(5, e, e.return));
        break;
      case 1:
        Rt(t, e), Dt(e), n & 512 && (mt || a === null || ga(a, a.return)), n & 64 && Oa && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? n : a.concat(n))));
        break;
      case 26:
        var l = sa;
        if (Rt(t, e), Dt(e), n & 512 && (mt || a === null || ga(a, a.return)), n & 4) {
          var i = a !== null ? a.memoizedState : null;
          if (n = e.memoizedState, a === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, a = e.memoizedProps, l = l.ownerDocument || l;
                  t: switch (n) {
                    case "title":
                      i = l.getElementsByTagName("title")[0], (!i || i[Ul] || i[xt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = l.createElement(n), l.head.insertBefore(
                        i,
                        l.querySelector("head > title")
                      )), Et(i, n, a), i[xt] = e, ht(i), n = i;
                      break e;
                    case "link":
                      var d = Tm(
                        "link",
                        "href",
                        l
                      ).get(n + (a.href || ""));
                      if (d) {
                        for (var _ = 0; _ < d.length; _++)
                          if (i = d[_], i.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && i.getAttribute("rel") === (a.rel == null ? null : a.rel) && i.getAttribute("title") === (a.title == null ? null : a.title) && i.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            d.splice(_, 1);
                            break t;
                          }
                      }
                      i = l.createElement(n), Et(i, n, a), l.head.appendChild(i);
                      break;
                    case "meta":
                      if (d = Tm(
                        "meta",
                        "content",
                        l
                      ).get(n + (a.content || ""))) {
                        for (_ = 0; _ < d.length; _++)
                          if (i = d[_], i.getAttribute("content") === (a.content == null ? null : "" + a.content) && i.getAttribute("name") === (a.name == null ? null : a.name) && i.getAttribute("property") === (a.property == null ? null : a.property) && i.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && i.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            d.splice(_, 1);
                            break t;
                          }
                      }
                      i = l.createElement(n), Et(i, n, a), l.head.appendChild(i);
                      break;
                    default:
                      throw Error(u(468, n));
                  }
                  i[xt] = e, ht(i), n = i;
                }
                e.stateNode = n;
              } else
                jm(
                  l,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Cm(
                l,
                n,
                e.memoizedProps
              );
          else
            i !== n ? (i === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : i.count--, n === null ? jm(
              l,
              e.type,
              e.stateNode
            ) : Cm(
              l,
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
        Rt(t, e), Dt(e), n & 512 && (mt || a === null || ga(a, a.return)), a !== null && n & 4 && Rc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Rt(t, e), Dt(e), n & 512 && (mt || a === null || ga(a, a.return)), e.flags & 32) {
          l = e.stateNode;
          try {
            Fn(l, "");
          } catch (de) {
            Xe(e, e.return, de);
          }
        }
        n & 4 && e.stateNode != null && (l = e.memoizedProps, Rc(
          e,
          l,
          a !== null ? a.memoizedProps : l
        )), n & 1024 && (Bc = !0);
        break;
      case 6:
        if (Rt(t, e), Dt(e), n & 4) {
          if (e.stateNode === null)
            throw Error(u(162));
          n = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = n;
          } catch (de) {
            Xe(e, e.return, de);
          }
        }
        break;
      case 3:
        if (Bo = null, l = sa, sa = Do(t.containerInfo), Rt(t, e), sa = l, Dt(e), n & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Al(t.containerInfo);
          } catch (de) {
            Xe(e, e.return, de);
          }
        Bc && (Bc = !1, jf(e));
        break;
      case 4:
        n = sa, sa = Do(
          e.stateNode.containerInfo
        ), Rt(t, e), Dt(e), sa = n;
        break;
      case 12:
        Rt(t, e), Dt(e);
        break;
      case 31:
        Rt(t, e), Dt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, xo(e, n)));
        break;
      case 13:
        Rt(t, e), Dt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (wo = rt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, xo(e, n)));
        break;
      case 22:
        l = e.memoizedState !== null;
        var y = a !== null && a.memoizedState !== null, C = Oa, V = mt;
        if (Oa = C || l, mt = V || y, Rt(t, e), mt = V, Oa = C, Dt(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (a === null || y || Oa || mt || Bn(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                y = a = t;
                try {
                  if (i = y.stateNode, l)
                    d = i.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    _ = y.stateNode;
                    var Q = y.memoizedProps.style, j = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                    _.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (de) {
                  Xe(y, y.return, de);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                y = t;
                try {
                  y.stateNode.nodeValue = l ? "" : y.memoizedProps;
                } catch (de) {
                  Xe(y, y.return, de);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                y = t;
                try {
                  var B = y.stateNode;
                  l ? xm(B, !0) : xm(y.stateNode, !1);
                } catch (de) {
                  Xe(y, y.return, de);
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
        Rt(t, e), Dt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, xo(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Rt(t, e), Dt(e);
    }
  }
  function Dt(e) {
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
            var l = a.stateNode, i = Dc(e);
            yo(e, i, l);
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
      } catch (V) {
        Xe(e, e.return, V);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function jf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        jf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Da(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Nf(e, t.alternate, t), t = t.sibling;
  }
  function Bn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          on(4, t, t.return), Bn(t);
          break;
        case 1:
          ga(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && xf(
            t,
            t.return,
            a
          ), Bn(t);
          break;
        case 27:
          vi(t.stateNode);
        case 26:
        case 5:
          ga(t, t.return), Bn(t);
          break;
        case 22:
          t.memoizedState === null && Bn(t);
          break;
        case 30:
          Bn(t);
          break;
        default:
          Bn(t);
      }
      e = e.sibling;
    }
  }
  function Ua(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, l = e, i = t, d = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ua(
            l,
            i,
            a
          ), ci(4, i);
          break;
        case 1:
          if (Ua(
            l,
            i,
            a
          ), n = i, l = n.stateNode, typeof l.componentDidMount == "function")
            try {
              l.componentDidMount();
            } catch (C) {
              Xe(n, n.return, C);
            }
          if (n = i, l = n.updateQueue, l !== null) {
            var _ = n.stateNode;
            try {
              var y = l.shared.hiddenCallbacks;
              if (y !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < y.length; l++)
                  cd(y[l], _);
            } catch (C) {
              Xe(n, n.return, C);
            }
          }
          a && d & 64 && yf(i), ri(i, i.return);
          break;
        case 27:
          zf(i);
        case 26:
        case 5:
          Ua(
            l,
            i,
            a
          ), a && n === null && d & 4 && Sf(i), ri(i, i.return);
          break;
        case 12:
          Ua(
            l,
            i,
            a
          );
          break;
        case 31:
          Ua(
            l,
            i,
            a
          ), a && d & 4 && Af(l, i);
          break;
        case 13:
          Ua(
            l,
            i,
            a
          ), a && d & 4 && Cf(l, i);
          break;
        case 22:
          i.memoizedState === null && Ua(
            l,
            i,
            a
          ), ri(i, i.return);
          break;
        case 30:
          break;
        default:
          Ua(
            l,
            i,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Lc(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Jl(a));
  }
  function Gc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Jl(e));
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
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ca(
          e,
          t,
          a,
          n
        ), l & 2048 && ci(9, t);
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
        ), l & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Jl(e)));
        break;
      case 12:
        if (l & 2048) {
          ca(
            e,
            t,
            a,
            n
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, d = i.id, _ = i.onPostCommit;
            typeof _ == "function" && _(
              d,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (y) {
            Xe(t, t.return, y);
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
        i = t.stateNode, d = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? ca(
          e,
          t,
          a,
          n
        ) : ui(e, t) : i._visibility & 2 ? ca(
          e,
          t,
          a,
          n
        ) : (i._visibility |= 2, vl(
          e,
          t,
          a,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), l & 2048 && Lc(d, t);
        break;
      case 24:
        ca(
          e,
          t,
          a,
          n
        ), l & 2048 && Gc(t.alternate, t);
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
  function vl(e, t, a, n, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, d = t, _ = a, y = n, C = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          vl(
            i,
            d,
            _,
            y,
            l
          ), ci(8, d);
          break;
        case 23:
          break;
        case 22:
          var V = d.stateNode;
          d.memoizedState !== null ? V._visibility & 2 ? vl(
            i,
            d,
            _,
            y,
            l
          ) : ui(
            i,
            d
          ) : (V._visibility |= 2, vl(
            i,
            d,
            _,
            y,
            l
          )), l && C & 2048 && Lc(
            d.alternate,
            d
          );
          break;
        case 24:
          vl(
            i,
            d,
            _,
            y,
            l
          ), l && C & 2048 && Gc(d.alternate, d);
          break;
        default:
          vl(
            i,
            d,
            _,
            y,
            l
          );
      }
      t = t.sibling;
    }
  }
  function ui(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, n = t, l = n.flags;
        switch (n.tag) {
          case 22:
            ui(a, n), l & 2048 && Lc(
              n.alternate,
              n
            );
            break;
          case 24:
            ui(a, n), l & 2048 && Gc(n.alternate, n);
            break;
          default:
            ui(a, n);
        }
        t = t.sibling;
      }
  }
  var di = 8192;
  function bl(e, t, a) {
    if (e.subtreeFlags & di)
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
        bl(
          e,
          t,
          a
        ), e.flags & di && e.memoizedState !== null && Bh(
          a,
          sa,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        bl(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var n = sa;
        sa = Do(e.stateNode.containerInfo), bl(
          e,
          t,
          a
        ), sa = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = di, di = 16777216, bl(
          e,
          t,
          a
        ), di = n) : bl(
          e,
          t,
          a
        ));
        break;
      default:
        bl(
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
  function fi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          vt = n, Bf(
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
        fi(e), e.flags & 2048 && on(9, e, e.return);
        break;
      case 3:
        fi(e);
        break;
      case 12:
        fi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, So(e)) : fi(e);
        break;
      default:
        fi(e);
    }
  }
  function So(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          vt = n, Bf(
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
    for (; vt !== null; ) {
      var a = vt;
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
          Jl(a.memoizedState.cache);
      }
      if (n = a.child, n !== null) n.return = a, vt = n;
      else
        e: for (a = e; vt !== null; ) {
          n = vt;
          var l = n.sibling, i = n.return;
          if (Mf(n), n === a) {
            vt = null;
            break e;
          }
          if (l !== null) {
            l.return = i, vt = l;
            break e;
          }
          vt = i;
        }
    }
  }
  var Fp = {
    getCacheForType: function(e) {
      var t = wt(ut), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return wt(ut).controller.signal;
    }
  }, Pp = typeof WeakMap == "function" ? WeakMap : Map, Ye = 0, Je = null, Oe = null, De = 0, Ze = 0, Yt = null, sn = !1, yl = !1, Hc = !1, Ba = 0, ot = 0, cn = 0, Ln = 0, qc = 0, Zt = 0, xl = 0, mi = null, Ut = null, Vc = !1, wo = 0, Lf = 0, zo = 1 / 0, Eo = null, rn = null, gt = 0, un = null, Sl = null, La = 0, Yc = 0, Zc = null, Gf = null, _i = 0, Xc = null;
  function Xt() {
    return (Ye & 2) !== 0 && De !== 0 ? De & -De : R.T !== null ? Wc() : eu();
  }
  function Hf() {
    if (Zt === 0)
      if ((De & 536870912) === 0 || Be) {
        var e = P;
        P <<= 1, (P & 3932160) === 0 && (P = 262144), Zt = e;
      } else Zt = 536870912;
    return e = qt.current, e !== null && (e.flags |= 32), Zt;
  }
  function Bt(e, t, a) {
    (e === Je && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null) && (wl(e, 0), dn(
      e,
      De,
      Zt,
      !1
    )), Ge(e, a), ((Ye & 2) === 0 || e !== Je) && (e === Je && ((Ye & 2) === 0 && (Ln |= a), ot === 4 && dn(
      e,
      De,
      Zt,
      !1
    )), pa(e));
  }
  function qf(e, t, a) {
    if ((Ye & 6) !== 0) throw Error(u(327));
    var n = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ae(e, t), l = n ? ah(e, t) : Qc(e, t, !0), i = n;
    do {
      if (l === 0) {
        yl && !n && dn(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, i && !eh(a)) {
          l = Qc(e, t, !1), i = !1;
          continue;
        }
        if (l === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var d = 0;
          else
            d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
          if (d !== 0) {
            t = d;
            e: {
              var _ = e;
              l = mi;
              var y = _.current.memoizedState.isDehydrated;
              if (y && (wl(_, d).flags |= 256), d = Qc(
                _,
                d,
                !1
              ), d !== 2) {
                if (Hc && !y) {
                  _.errorRecoveryDisabledLanes |= i, Ln |= i, l = 4;
                  break e;
                }
                i = Ut, Ut = l, i !== null && (Ut === null ? Ut = i : Ut.push.apply(
                  Ut,
                  i
                ));
              }
              l = d;
            }
            if (i = !1, l !== 2) continue;
          }
        }
        if (l === 1) {
          wl(e, 0), dn(e, t, 0, !0);
          break;
        }
        e: {
          switch (n = e, i = l, i) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              dn(
                n,
                t,
                Zt,
                !sn
              );
              break e;
            case 2:
              Ut = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && (l = wo + 300 - rt(), 10 < l)) {
            if (dn(
              n,
              t,
              Zt,
              !sn
            ), ue(n, 0, !0) !== 0) break e;
            La = t, n.timeoutHandle = vm(
              Vf.bind(
                null,
                n,
                a,
                Ut,
                Eo,
                Vc,
                t,
                Zt,
                Ln,
                xl,
                sn,
                i,
                "Throttled",
                -0,
                0
              ),
              l
            );
            break e;
          }
          Vf(
            n,
            a,
            Ut,
            Eo,
            Vc,
            t,
            Zt,
            Ln,
            xl,
            sn,
            i,
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
  function Vf(e, t, a, n, l, i, d, _, y, C, V, Q, j, B) {
    if (e.timeoutHandle = -1, Q = t.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
      Q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: wa
      }, Rf(
        t,
        i,
        Q
      );
      var de = (i & 62914560) === i ? wo - rt() : (i & 4194048) === i ? Lf - rt() : 0;
      if (de = Lh(
        Q,
        de
      ), de !== null) {
        La = i, e.cancelPendingCommit = de(
          If.bind(
            null,
            e,
            t,
            i,
            a,
            n,
            l,
            d,
            _,
            y,
            V,
            Q,
            null,
            j,
            B
          )
        ), dn(e, i, d, !C);
        return;
      }
    }
    If(
      e,
      t,
      i,
      a,
      n,
      l,
      d,
      _,
      y
    );
  }
  function eh(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var n = 0; n < a.length; n++) {
          var l = a[n], i = l.getSnapshot;
          l = l.value;
          try {
            if (!Gt(i(), l)) return !1;
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
    t &= ~qc, t &= ~Ln, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var i = 31 - ze(l), d = 1 << i;
      n[i] = -1, l &= ~d;
    }
    a !== 0 && Ri(e, a, t);
  }
  function No() {
    return (Ye & 6) === 0 ? (gi(0), !1) : !0;
  }
  function Kc() {
    if (Oe !== null) {
      if (Ze === 0)
        var e = Oe.return;
      else
        e = Oe, Ma = An = null, cc(e), ml = null, Wl = 0, e = Oe;
      for (; e !== null; )
        bf(e.alternate, e), e = e.return;
      Oe = null;
    }
  }
  function wl(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, yh(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), La = 0, Kc(), Je = e, Oe = a = Ea(e.current, null), De = t, Ze = 0, Yt = null, sn = !1, yl = Ae(e, t), Hc = !1, xl = Zt = qc = Ln = cn = ot = 0, Ut = mi = null, Vc = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var l = 31 - ze(n), i = 1 << l;
        t |= e[l], n &= ~i;
      }
    return Ba = t, Ki(), a;
  }
  function Yf(e, t) {
    Ce = null, R.H = ii, t === fl || t === eo ? (t = ld(), Ze = 3) : t === Is ? (t = ld(), Ze = 4) : Ze = t === zc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Yt = t, Oe === null && (ot = 1, go(
      e,
      Wt(t, e.current)
    ));
  }
  function Zf() {
    var e = qt.current;
    return e === null ? !0 : (De & 4194048) === De ? ta === null : (De & 62914560) === De || (De & 536870912) !== 0 ? e === ta : !1;
  }
  function Xf() {
    var e = R.H;
    return R.H = ii, e === null ? ii : e;
  }
  function Kf() {
    var e = R.A;
    return R.A = Fp, e;
  }
  function Mo() {
    ot = 4, sn || (De & 4194048) !== De && qt.current !== null || (yl = !0), (cn & 134217727) === 0 && (Ln & 134217727) === 0 || Je === null || dn(
      Je,
      De,
      Zt,
      !1
    );
  }
  function Qc(e, t, a) {
    var n = Ye;
    Ye |= 2;
    var l = Xf(), i = Kf();
    (Je !== e || De !== t) && (Eo = null, wl(e, t)), t = !1;
    var d = ot;
    e: do
      try {
        if (Ze !== 0 && Oe !== null) {
          var _ = Oe, y = Yt;
          switch (Ze) {
            case 8:
              Kc(), d = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              qt.current === null && (t = !0);
              var C = Ze;
              if (Ze = 0, Yt = null, zl(e, _, y, C), a && yl) {
                d = 0;
                break e;
              }
              break;
            default:
              C = Ze, Ze = 0, Yt = null, zl(e, _, y, C);
          }
        }
        th(), d = ot;
        break;
      } catch (V) {
        Yf(e, V);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Ma = An = null, Ye = n, R.H = l, R.A = i, Oe === null && (Je = null, De = 0, Ki()), d;
  }
  function th() {
    for (; Oe !== null; ) Qf(Oe);
  }
  function ah(e, t) {
    var a = Ye;
    Ye |= 2;
    var n = Xf(), l = Kf();
    Je !== e || De !== t ? (Eo = null, zo = rt() + 500, wl(e, t)) : yl = Ae(
      e,
      t
    );
    e: do
      try {
        if (Ze !== 0 && Oe !== null) {
          t = Oe;
          var i = Yt;
          t: switch (Ze) {
            case 1:
              Ze = 0, Yt = null, zl(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (ad(i)) {
                Ze = 0, Yt = null, $f(t);
                break;
              }
              t = function() {
                Ze !== 2 && Ze !== 9 || Je !== e || (Ze = 7), pa(e);
              }, i.then(t, t);
              break e;
            case 3:
              Ze = 7;
              break e;
            case 4:
              Ze = 5;
              break e;
            case 7:
              ad(i) ? (Ze = 0, Yt = null, $f(t)) : (Ze = 0, Yt = null, zl(e, t, i, 7));
              break;
            case 5:
              var d = null;
              switch (Oe.tag) {
                case 26:
                  d = Oe.memoizedState;
                case 5:
                case 27:
                  var _ = Oe;
                  if (d ? Om(d) : _.stateNode.complete) {
                    Ze = 0, Yt = null;
                    var y = _.sibling;
                    if (y !== null) Oe = y;
                    else {
                      var C = _.return;
                      C !== null ? (Oe = C, ko(C)) : Oe = null;
                    }
                    break t;
                  }
              }
              Ze = 0, Yt = null, zl(e, t, i, 5);
              break;
            case 6:
              Ze = 0, Yt = null, zl(e, t, i, 6);
              break;
            case 8:
              Kc(), ot = 6;
              break e;
            default:
              throw Error(u(462));
          }
        }
        nh();
        break;
      } catch (V) {
        Yf(e, V);
      }
    while (!0);
    return Ma = An = null, R.H = n, R.A = l, Ye = a, Oe !== null ? 0 : (Je = null, De = 0, Ki(), ot);
  }
  function nh() {
    for (; Oe !== null && !Zn(); )
      Qf(Oe);
  }
  function Qf(e) {
    var t = hf(e.alternate, e, Ba);
    e.memoizedProps = e.pendingProps, t === null ? ko(e) : Oe = t;
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
          De
        );
        break;
      case 11:
        t = df(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          De
        );
        break;
      case 5:
        cc(t);
      default:
        bf(a, t), t = Oe = Xu(t, Ba), t = hf(a, t, Ba);
    }
    e.memoizedProps = e.pendingProps, t === null ? ko(e) : Oe = t;
  }
  function zl(e, t, a, n) {
    Ma = An = null, cc(t), ml = null, Wl = 0;
    var l = t.return;
    try {
      if (Xp(
        e,
        l,
        t,
        a,
        De
      )) {
        ot = 1, go(
          e,
          Wt(a, e.current)
        ), Oe = null;
        return;
      }
    } catch (i) {
      if (l !== null) throw Oe = l, i;
      ot = 1, go(
        e,
        Wt(a, e.current)
      ), Oe = null;
      return;
    }
    t.flags & 32768 ? (Be || n === 1 ? e = !0 : yl || (De & 536870912) !== 0 ? e = !1 : (sn = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = qt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Jf(t, e)) : ko(t);
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
      var a = $p(
        t.alternate,
        t,
        Ba
      );
      if (a !== null) {
        Oe = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Oe = t;
        return;
      }
      Oe = t = e;
    } while (t !== null);
    ot === 0 && (ot = 5);
  }
  function Jf(e, t) {
    do {
      var a = Jp(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Oe = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Oe = e;
        return;
      }
      Oe = e = a;
    } while (e !== null);
    ot = 6, Oe = null;
  }
  function If(e, t, a, n, l, i, d, _, y) {
    e.cancelPendingCommit = null;
    do
      Ao();
    while (gt !== 0);
    if ((Ye & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (i = t.lanes | t.childLanes, i |= Ds, rs(
        e,
        a,
        i,
        d,
        _,
        y
      ), e === Je && (Oe = Je = null, De = 0), Sl = t, un = e, La = a, Yc = i, Zc = l, Gf = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, sh(Ka, function() {
        return tm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = R.T, R.T = null, l = te.p, te.p = 2, d = Ye, Ye |= 4;
        try {
          Ip(e, t, a);
        } finally {
          Ye = d, te.p = l, R.T = n;
        }
      }
      gt = 1, Wf(), Ff(), Pf();
    }
  }
  function Wf() {
    if (gt === 1) {
      gt = 0;
      var e = un, t = Sl, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = R.T, R.T = null;
        var n = te.p;
        te.p = 2;
        var l = Ye;
        Ye |= 4;
        try {
          Tf(t, e);
          var i = ir, d = Uu(e.containerInfo), _ = i.focusedElem, y = i.selectionRange;
          if (d !== _ && _ && _.ownerDocument && Du(
            _.ownerDocument.documentElement,
            _
          )) {
            if (y !== null && Cs(_)) {
              var C = y.start, V = y.end;
              if (V === void 0 && (V = C), "selectionStart" in _)
                _.selectionStart = C, _.selectionEnd = Math.min(
                  V,
                  _.value.length
                );
              else {
                var Q = _.ownerDocument || document, j = Q && Q.defaultView || window;
                if (j.getSelection) {
                  var B = j.getSelection(), de = _.textContent.length, Se = Math.min(y.start, de), $e = y.end === void 0 ? Se : Math.min(y.end, de);
                  !B.extend && Se > $e && (d = $e, $e = Se, Se = d);
                  var N = Ru(
                    _,
                    Se
                  ), z = Ru(
                    _,
                    $e
                  );
                  if (N && z && (B.rangeCount !== 1 || B.anchorNode !== N.node || B.anchorOffset !== N.offset || B.focusNode !== z.node || B.focusOffset !== z.offset)) {
                    var A = Q.createRange();
                    A.setStart(N.node, N.offset), B.removeAllRanges(), Se > $e ? (B.addRange(A), B.extend(z.node, z.offset)) : (A.setEnd(z.node, z.offset), B.addRange(A));
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
              var K = Q[_];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          qo = !!lr, ir = lr = null;
        } finally {
          Ye = l, te.p = n, R.T = a;
        }
      }
      e.current = t, gt = 2;
    }
  }
  function Ff() {
    if (gt === 2) {
      gt = 0;
      var e = un, t = Sl, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = R.T, R.T = null;
        var n = te.p;
        te.p = 2;
        var l = Ye;
        Ye |= 4;
        try {
          Nf(e, t.alternate, t);
        } finally {
          Ye = l, te.p = n, R.T = a;
        }
      }
      gt = 3;
    }
  }
  function Pf() {
    if (gt === 4 || gt === 3) {
      gt = 0, xa();
      var e = un, t = Sl, a = La, n = Gf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? gt = 5 : (gt = 0, Sl = un = null, em(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (l === 0 && (rn = null), ds(a), t = t.stateNode, le && typeof le.onCommitFiberRoot == "function")
        try {
          le.onCommitFiberRoot(
            W,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        t = R.T, l = te.p, te.p = 2, R.T = null;
        try {
          for (var i = e.onRecoverableError, d = 0; d < n.length; d++) {
            var _ = n[d];
            i(_.value, {
              componentStack: _.stack
            });
          }
        } finally {
          R.T = t, te.p = l;
        }
      }
      (La & 3) !== 0 && Ao(), pa(e), l = e.pendingLanes, (a & 261930) !== 0 && (l & 42) !== 0 ? e === Xc ? _i++ : (_i = 0, Xc = e) : _i = 0, gi(0);
    }
  }
  function em(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Jl(t)));
  }
  function Ao() {
    return Wf(), Ff(), Pf(), tm();
  }
  function tm() {
    if (gt !== 5) return !1;
    var e = un, t = Yc;
    Yc = 0;
    var a = ds(La), n = R.T, l = te.p;
    try {
      te.p = 32 > a ? 32 : a, R.T = null, a = Zc, Zc = null;
      var i = un, d = La;
      if (gt = 0, Sl = un = null, La = 0, (Ye & 6) !== 0) throw Error(u(331));
      var _ = Ye;
      if (Ye |= 4, Uf(i.current), Of(
        i,
        i.current,
        d,
        a
      ), Ye = _, gi(0, !1), le && typeof le.onPostCommitFiberRoot == "function")
        try {
          le.onPostCommitFiberRoot(W, i);
        } catch {
        }
      return !0;
    } finally {
      te.p = l, R.T = n, em(e, t);
    }
  }
  function am(e, t, a) {
    t = Wt(a, t), t = wc(e.stateNode, t, 2), e = an(e, t, 2), e !== null && (Ge(e, 2), pa(e));
  }
  function Xe(e, t, a) {
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
            ), Ge(n, 2), pa(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function $c(e, t, a) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Pp();
      var l = /* @__PURE__ */ new Set();
      n.set(t, l);
    } else
      l = n.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), n.set(t, l));
    l.has(a) || (Hc = !0, l.add(a), e = lh.bind(null, e, t, a), t.then(e, e));
  }
  function lh(e, t, a) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Je === e && (De & a) === a && (ot === 4 || ot === 3 && (De & 62914560) === De && 300 > rt() - wo ? (Ye & 2) === 0 && wl(e, 0) : qc |= a, xl === De && (xl = 0)), pa(e);
  }
  function nm(e, t) {
    t === 0 && (t = _t()), e = Nn(e, t), e !== null && (Ge(e, t), pa(e));
  }
  function ih(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), nm(e, a);
  }
  function oh(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode, l = e.memoizedState;
        l !== null && (a = l.retryLane);
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
  function sh(e, t) {
    return lt(e, t);
  }
  var Co = null, El = null, Jc = !1, To = !1, Ic = !1, fn = 0;
  function pa(e) {
    e !== El && e.next === null && (El === null ? Co = El = e : El = El.next = e), To = !0, Jc || (Jc = !0, rh());
  }
  function gi(e, t) {
    if (!Ic && To) {
      Ic = !0;
      do
        for (var a = !1, n = Co; n !== null; ) {
          if (e !== 0) {
            var l = n.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var d = n.suspendedLanes, _ = n.pingedLanes;
              i = (1 << 31 - ze(42 | e) + 1) - 1, i &= l & ~(d & ~_), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (a = !0, sm(n, i));
          } else
            i = De, i = ue(
              n,
              n === Je ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || Ae(n, i) || (a = !0, sm(n, i));
          n = n.next;
        }
      while (a);
      Ic = !1;
    }
  }
  function ch() {
    lm();
  }
  function lm() {
    To = Jc = !1;
    var e = 0;
    fn !== 0 && bh() && (e = fn);
    for (var t = rt(), a = null, n = Co; n !== null; ) {
      var l = n.next, i = im(n, t);
      i === 0 ? (n.next = null, a === null ? Co = l : a.next = l, l === null && (El = a)) : (a = n, (e !== 0 || (i & 3) !== 0) && (To = !0)), n = l;
    }
    gt !== 0 && gt !== 5 || gi(e), fn !== 0 && (fn = 0);
  }
  function im(e, t) {
    for (var a = e.suspendedLanes, n = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var d = 31 - ze(i), _ = 1 << d, y = l[d];
      y === -1 ? ((_ & a) === 0 || (_ & n) !== 0) && (l[d] = nt(_, t)) : y <= t && (e.expiredLanes |= _), i &= ~_;
    }
    if (t = Je, a = De, a = ue(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, a === 0 || e === t && (Ze === 2 || Ze === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Mt(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Ae(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (n !== null && Mt(n), ds(a)) {
        case 2:
        case 8:
          a = Xa;
          break;
        case 32:
          a = Ka;
          break;
        case 268435456:
          a = Xn;
          break;
        default:
          a = Ka;
      }
      return n = om.bind(null, e), a = lt(a, n), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return n !== null && n !== null && Mt(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function om(e, t) {
    if (gt !== 0 && gt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Ao() && e.callbackNode !== a)
      return null;
    var n = De;
    return n = ue(
      e,
      e === Je ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (qf(e, n, t), im(e, rt()), e.callbackNode != null && e.callbackNode === a ? om.bind(null, e) : null);
  }
  function sm(e, t) {
    if (Ao()) return null;
    qf(e, t, !0);
  }
  function rh() {
    xh(function() {
      (Ye & 6) !== 0 ? lt(
        bt,
        ch
      ) : lm();
    });
  }
  function Wc() {
    if (fn === 0) {
      var e = ul;
      e === 0 && (e = ae, ae <<= 1, (ae & 261888) === 0 && (ae = 256)), fn = e;
    }
    return fn;
  }
  function cm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Li("" + e);
  }
  function rm(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function uh(e, t, a, n, l) {
    if (t === "submit" && a && a.stateNode === l) {
      var i = cm(
        (l[Tt] || null).action
      ), d = n.submitter;
      d && (t = (t = d[Tt] || null) ? cm(t.formAction) : d.getAttribute("formAction"), t !== null && (i = t, d = null));
      var _ = new Vi(
        "action",
        "action",
        null,
        n,
        l
      );
      e.push({
        event: _,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (fn !== 0) {
                  var y = d ? rm(l, d) : new FormData(l);
                  hc(
                    a,
                    {
                      pending: !0,
                      data: y,
                      method: l.method,
                      action: i
                    },
                    null,
                    y
                  );
                }
              } else
                typeof i == "function" && (_.preventDefault(), y = d ? rm(l, d) : new FormData(l), hc(
                  a,
                  {
                    pending: !0,
                    data: y,
                    method: l.method,
                    action: i
                  },
                  i,
                  y
                ));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var Fc = 0; Fc < Rs.length; Fc++) {
    var Pc = Rs[Fc], dh = Pc.toLowerCase(), fh = Pc[0].toUpperCase() + Pc.slice(1);
    oa(
      dh,
      "on" + fh
    );
  }
  oa(Gu, "onAnimationEnd"), oa(Hu, "onAnimationIteration"), oa(qu, "onAnimationStart"), oa("dblclick", "onDoubleClick"), oa("focusin", "onFocus"), oa("focusout", "onBlur"), oa(kp, "onTransitionRun"), oa(Ap, "onTransitionStart"), oa(Cp, "onTransitionCancel"), oa(Vu, "onTransitionEnd"), In("onMouseEnter", ["mouseout", "mouseover"]), In("onMouseLeave", ["mouseout", "mouseover"]), In("onPointerEnter", ["pointerout", "pointerover"]), In("onPointerLeave", ["pointerout", "pointerover"]), Sn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Sn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Sn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Sn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Sn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Sn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var pi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), mh = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pi)
  );
  function um(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var n = e[a], l = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var d = n.length - 1; 0 <= d; d--) {
            var _ = n[d], y = _.instance, C = _.currentTarget;
            if (_ = _.listener, y !== i && l.isPropagationStopped())
              break e;
            i = _, l.currentTarget = C;
            try {
              i(l);
            } catch (V) {
              Xi(V);
            }
            l.currentTarget = null, i = y;
          }
        else
          for (d = 0; d < n.length; d++) {
            if (_ = n[d], y = _.instance, C = _.currentTarget, _ = _.listener, y !== i && l.isPropagationStopped())
              break e;
            i = _, l.currentTarget = C;
            try {
              i(l);
            } catch (V) {
              Xi(V);
            }
            l.currentTarget = null, i = y;
          }
      }
    }
  }
  function Re(e, t) {
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
  var jo = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[jo]) {
      e[jo] = !0, nu.forEach(function(a) {
        a !== "selectionchange" && (mh.has(a) || er(a, !1, e), er(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[jo] || (t[jo] = !0, er("selectionchange", !1, t));
    }
  }
  function dm(e, t, a, n) {
    switch (Hm(t)) {
      case 2:
        var l = qh;
        break;
      case 8:
        l = Vh;
        break;
      default:
        l = pr;
    }
    a = l.bind(
      null,
      t,
      a,
      e
    ), l = void 0, !xs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), n ? l !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: l
    }) : e.addEventListener(t, a, !0) : l !== void 0 ? e.addEventListener(t, a, {
      passive: l
    }) : e.addEventListener(t, a, !1);
  }
  function ar(e, t, a, n, l) {
    var i = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var d = n.tag;
        if (d === 3 || d === 4) {
          var _ = n.stateNode.containerInfo;
          if (_ === l) break;
          if (d === 4)
            for (d = n.return; d !== null; ) {
              var y = d.tag;
              if ((y === 3 || y === 4) && d.stateNode.containerInfo === l)
                return;
              d = d.return;
            }
          for (; _ !== null; ) {
            if (d = Qn(_), d === null) return;
            if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
              n = i = d;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        n = n.return;
      }
    gu(function() {
      var C = i, V = bs(a), Q = [];
      e: {
        var j = Yu.get(e);
        if (j !== void 0) {
          var B = Vi, de = e;
          switch (e) {
            case "keypress":
              if (Hi(a) === 0) break e;
            case "keydown":
            case "keyup":
              B = op;
              break;
            case "focusin":
              de = "focus", B = Es;
              break;
            case "focusout":
              de = "blur", B = Es;
              break;
            case "beforeblur":
            case "afterblur":
              B = Es;
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
              B = $g;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = rp;
              break;
            case Gu:
            case Hu:
            case qu:
              B = Wg;
              break;
            case Vu:
              B = dp;
              break;
            case "scroll":
            case "scrollend":
              B = Kg;
              break;
            case "wheel":
              B = mp;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = Pg;
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
              B = gp;
          }
          var Se = (t & 4) !== 0, $e = !Se && (e === "scroll" || e === "scrollend"), N = Se ? j !== null ? j + "Capture" : null : j;
          Se = [];
          for (var z = C, A; z !== null; ) {
            var K = z;
            if (A = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || A === null || N === null || (K = Ll(z, N), K != null && Se.push(
              hi(z, K, A)
            )), $e) break;
            z = z.return;
          }
          0 < Se.length && (j = new B(
            j,
            de,
            null,
            a,
            V
          ), Q.push({ event: j, listeners: Se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (j = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", j && a !== vs && (de = a.relatedTarget || a.fromElement) && (Qn(de) || de[Kn]))
            break e;
          if ((B || j) && (j = V.window === V ? V : (j = V.ownerDocument) ? j.defaultView || j.parentWindow : window, B ? (de = a.relatedTarget || a.toElement, B = C, de = de ? Qn(de) : null, de !== null && ($e = m(de), Se = de.tag, de !== $e || Se !== 5 && Se !== 27 && Se !== 6) && (de = null)) : (B = null, de = C), B !== de)) {
            if (Se = vu, K = "onMouseLeave", N = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Se = yu, K = "onPointerLeave", N = "onPointerEnter", z = "pointer"), $e = B == null ? j : Bl(B), A = de == null ? j : Bl(de), j = new Se(
              K,
              z + "leave",
              B,
              a,
              V
            ), j.target = $e, j.relatedTarget = A, K = null, Qn(V) === C && (Se = new Se(
              N,
              z + "enter",
              de,
              a,
              V
            ), Se.target = A, Se.relatedTarget = $e, K = Se), $e = K, B && de)
              t: {
                for (Se = _h, N = B, z = de, A = 0, K = N; K; K = Se(K))
                  A++;
                K = 0;
                for (var he = z; he; he = Se(he))
                  K++;
                for (; 0 < A - K; )
                  N = Se(N), A--;
                for (; 0 < K - A; )
                  z = Se(z), K--;
                for (; A--; ) {
                  if (N === z || z !== null && N === z.alternate) {
                    Se = N;
                    break t;
                  }
                  N = Se(N), z = Se(z);
                }
                Se = null;
              }
            else Se = null;
            B !== null && fm(
              Q,
              j,
              B,
              Se,
              !1
            ), de !== null && $e !== null && fm(
              Q,
              $e,
              de,
              Se,
              !0
            );
          }
        }
        e: {
          if (j = C ? Bl(C) : window, B = j.nodeName && j.nodeName.toLowerCase(), B === "select" || B === "input" && j.type === "file")
            var He = ku;
          else if (Nu(j))
            if (Au)
              He = Ep;
            else {
              He = wp;
              var me = Sp;
            }
          else
            B = j.nodeName, !B || B.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? C && hs(C.elementType) && (He = ku) : He = zp;
          if (He && (He = He(e, C))) {
            Mu(
              Q,
              He,
              a,
              V
            );
            break e;
          }
          me && me(e, j, C), e === "focusout" && C && j.type === "number" && C.memoizedProps.value != null && ps(j, "number", j.value);
        }
        switch (me = C ? Bl(C) : window, e) {
          case "focusin":
            (Nu(me) || me.contentEditable === "true") && (al = me, Ts = C, Kl = null);
            break;
          case "focusout":
            Kl = Ts = al = null;
            break;
          case "mousedown":
            js = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            js = !1, Bu(Q, a, V);
            break;
          case "selectionchange":
            if (Mp) break;
          case "keydown":
          case "keyup":
            Bu(Q, a, V);
        }
        var Te;
        if (Ms)
          e: {
            switch (e) {
              case "compositionstart":
                var Ue = "onCompositionStart";
                break e;
              case "compositionend":
                Ue = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ue = "onCompositionUpdate";
                break e;
            }
            Ue = void 0;
          }
        else
          tl ? zu(e, a) && (Ue = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ue = "onCompositionStart");
        Ue && (xu && a.locale !== "ko" && (tl || Ue !== "onCompositionStart" ? Ue === "onCompositionEnd" && tl && (Te = pu()) : (Ja = V, Ss = "value" in Ja ? Ja.value : Ja.textContent, tl = !0)), me = Oo(C, Ue), 0 < me.length && (Ue = new bu(
          Ue,
          e,
          null,
          a,
          V
        ), Q.push({ event: Ue, listeners: me }), Te ? Ue.data = Te : (Te = Eu(a), Te !== null && (Ue.data = Te)))), (Te = hp ? vp(e, a) : bp(e, a)) && (Ue = Oo(C, "onBeforeInput"), 0 < Ue.length && (me = new bu(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          V
        ), Q.push({
          event: me,
          listeners: Ue
        }), me.data = Te)), uh(
          Q,
          e,
          C,
          a,
          V
        );
      }
      um(Q, t);
    });
  }
  function hi(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Oo(e, t) {
    for (var a = t + "Capture", n = []; e !== null; ) {
      var l = e, i = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = Ll(e, a), l != null && n.unshift(
        hi(e, l, i)
      ), l = Ll(e, t), l != null && n.push(
        hi(e, l, i)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function _h(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function fm(e, t, a, n, l) {
    for (var i = t._reactName, d = []; a !== null && a !== n; ) {
      var _ = a, y = _.alternate, C = _.stateNode;
      if (_ = _.tag, y !== null && y === n) break;
      _ !== 5 && _ !== 26 && _ !== 27 || C === null || (y = C, l ? (C = Ll(a, i), C != null && d.unshift(
        hi(a, C, y)
      )) : l || (C = Ll(a, i), C != null && d.push(
        hi(a, C, y)
      ))), a = a.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var gh = /\r\n?/g, ph = /\u0000|\uFFFD/g;
  function mm(e) {
    return (typeof e == "string" ? e : "" + e).replace(gh, `
`).replace(ph, "");
  }
  function _m(e, t) {
    return t = mm(t), mm(e) === t;
  }
  function Qe(e, t, a, n, l, i) {
    switch (a) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || Fn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && Fn(e, "" + n);
        break;
      case "className":
        Ui(e, "class", n);
        break;
      case "tabIndex":
        Ui(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ui(e, a, n);
        break;
      case "style":
        mu(e, n, i);
        break;
      case "data":
        if (t !== "object") {
          Ui(e, "data", n);
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
        n = Li("" + n), e.setAttribute(a, n);
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
          typeof i == "function" && (a === "formAction" ? (t !== "input" && Qe(e, t, "name", l.name, l, null), Qe(
            e,
            t,
            "formEncType",
            l.formEncType,
            l,
            null
          ), Qe(
            e,
            t,
            "formMethod",
            l.formMethod,
            l,
            null
          ), Qe(
            e,
            t,
            "formTarget",
            l.formTarget,
            l,
            null
          )) : (Qe(e, t, "encType", l.encType, l, null), Qe(e, t, "method", l.method, l, null), Qe(e, t, "target", l.target, l, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(a);
          break;
        }
        n = Li("" + n), e.setAttribute(a, n);
        break;
      case "onClick":
        n != null && (e.onclick = wa);
        break;
      case "onScroll":
        n != null && Re("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Re("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(u(61));
          if (a = n.__html, a != null) {
            if (l.children != null) throw Error(u(60));
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
        a = Li("" + n), e.setAttributeNS(
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
        Re("beforetoggle", e), Re("toggle", e), Di(e, "popover", n);
        break;
      case "xlinkActuate":
        Sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Sa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Sa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Sa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Sa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Di(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Zg.get(a) || a, Di(e, a, n));
    }
  }
  function nr(e, t, a, n, l, i) {
    switch (a) {
      case "style":
        mu(e, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(u(61));
          if (a = n.__html, a != null) {
            if (l.children != null) throw Error(u(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof n == "string" ? Fn(e, n) : (typeof n == "number" || typeof n == "bigint") && Fn(e, "" + n);
        break;
      case "onScroll":
        n != null && Re("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Re("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = wa);
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
        if (!lu.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (l = a.endsWith("Capture"), t = a.slice(2, l ? a.length - 7 : void 0), i = e[Tt] || null, i = i != null ? i[a] : null, typeof i == "function" && e.removeEventListener(t, i, l), typeof n == "function")) {
              typeof i != "function" && i !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, n, l);
              break e;
            }
            a in e ? e[a] = n : n === !0 ? e.setAttribute(a, "") : Di(e, a, n);
          }
    }
  }
  function Et(e, t, a) {
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
        Re("error", e), Re("load", e);
        var n = !1, l = !1, i;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var d = a[i];
            if (d != null)
              switch (i) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  Qe(e, t, i, d, a, null);
              }
          }
        l && Qe(e, t, "srcSet", a.srcSet, a, null), n && Qe(e, t, "src", a.src, a, null);
        return;
      case "input":
        Re("invalid", e);
        var _ = i = d = l = null, y = null, C = null;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var V = a[n];
            if (V != null)
              switch (n) {
                case "name":
                  l = V;
                  break;
                case "type":
                  d = V;
                  break;
                case "checked":
                  y = V;
                  break;
                case "defaultChecked":
                  C = V;
                  break;
                case "value":
                  i = V;
                  break;
                case "defaultValue":
                  _ = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(u(137, t));
                  break;
                default:
                  Qe(e, t, n, V, a, null);
              }
          }
        ru(
          e,
          i,
          _,
          y,
          C,
          d,
          l,
          !1
        );
        return;
      case "select":
        Re("invalid", e), n = d = i = null;
        for (l in a)
          if (a.hasOwnProperty(l) && (_ = a[l], _ != null))
            switch (l) {
              case "value":
                i = _;
                break;
              case "defaultValue":
                d = _;
                break;
              case "multiple":
                n = _;
              default:
                Qe(e, t, l, _, a, null);
            }
        t = i, a = d, e.multiple = !!n, t != null ? Wn(e, !!n, t, !1) : a != null && Wn(e, !!n, a, !0);
        return;
      case "textarea":
        Re("invalid", e), i = l = n = null;
        for (d in a)
          if (a.hasOwnProperty(d) && (_ = a[d], _ != null))
            switch (d) {
              case "value":
                n = _;
                break;
              case "defaultValue":
                l = _;
                break;
              case "children":
                i = _;
                break;
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(u(91));
                break;
              default:
                Qe(e, t, d, _, a, null);
            }
        du(e, n, l, i);
        return;
      case "option":
        for (y in a)
          a.hasOwnProperty(y) && (n = a[y], n != null) && (y === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : Qe(e, t, y, n, a, null));
        return;
      case "dialog":
        Re("beforetoggle", e), Re("toggle", e), Re("cancel", e), Re("close", e);
        break;
      case "iframe":
      case "object":
        Re("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < pi.length; n++)
          Re(pi[n], e);
        break;
      case "image":
        Re("error", e), Re("load", e);
        break;
      case "details":
        Re("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Re("error", e), Re("load", e);
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
                Qe(e, t, C, n, a, null);
            }
        return;
      default:
        if (hs(t)) {
          for (V in a)
            a.hasOwnProperty(V) && (n = a[V], n !== void 0 && nr(
              e,
              t,
              V,
              n,
              a,
              void 0
            ));
          return;
        }
    }
    for (_ in a)
      a.hasOwnProperty(_) && (n = a[_], n != null && Qe(e, t, _, n, a, null));
  }
  function hh(e, t, a, n) {
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
        var l = null, i = null, d = null, _ = null, y = null, C = null, V = null;
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
                n.hasOwnProperty(B) || Qe(e, t, B, null, n, Q);
            }
        }
        for (var j in n) {
          var B = n[j];
          if (Q = a[j], n.hasOwnProperty(j) && (B != null || Q != null))
            switch (j) {
              case "type":
                i = B;
                break;
              case "name":
                l = B;
                break;
              case "checked":
                C = B;
                break;
              case "defaultChecked":
                V = B;
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
                B !== Q && Qe(
                  e,
                  t,
                  j,
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
          V,
          i,
          l
        );
        return;
      case "select":
        B = d = _ = j = null;
        for (i in a)
          if (y = a[i], a.hasOwnProperty(i) && y != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                B = y;
              default:
                n.hasOwnProperty(i) || Qe(
                  e,
                  t,
                  i,
                  null,
                  n,
                  y
                );
            }
        for (l in n)
          if (i = n[l], y = a[l], n.hasOwnProperty(l) && (i != null || y != null))
            switch (l) {
              case "value":
                j = i;
                break;
              case "defaultValue":
                _ = i;
                break;
              case "multiple":
                d = i;
              default:
                i !== y && Qe(
                  e,
                  t,
                  l,
                  i,
                  n,
                  y
                );
            }
        t = _, a = d, n = B, j != null ? Wn(e, !!a, j, !1) : !!n != !!a && (t != null ? Wn(e, !!a, t, !0) : Wn(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        B = j = null;
        for (_ in a)
          if (l = a[_], a.hasOwnProperty(_) && l != null && !n.hasOwnProperty(_))
            switch (_) {
              case "value":
                break;
              case "children":
                break;
              default:
                Qe(e, t, _, null, n, l);
            }
        for (d in n)
          if (l = n[d], i = a[d], n.hasOwnProperty(d) && (l != null || i != null))
            switch (d) {
              case "value":
                j = l;
                break;
              case "defaultValue":
                B = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(u(91));
                break;
              default:
                l !== i && Qe(e, t, d, l, n, i);
            }
        uu(e, j, B);
        return;
      case "option":
        for (var de in a)
          j = a[de], a.hasOwnProperty(de) && j != null && !n.hasOwnProperty(de) && (de === "selected" ? e.selected = !1 : Qe(
            e,
            t,
            de,
            null,
            n,
            j
          ));
        for (y in n)
          j = n[y], B = a[y], n.hasOwnProperty(y) && j !== B && (j != null || B != null) && (y === "selected" ? e.selected = j && typeof j != "function" && typeof j != "symbol" : Qe(
            e,
            t,
            y,
            j,
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
        for (var Se in a)
          j = a[Se], a.hasOwnProperty(Se) && j != null && !n.hasOwnProperty(Se) && Qe(e, t, Se, null, n, j);
        for (C in n)
          if (j = n[C], B = a[C], n.hasOwnProperty(C) && j !== B && (j != null || B != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null)
                  throw Error(u(137, t));
                break;
              default:
                Qe(
                  e,
                  t,
                  C,
                  j,
                  n,
                  B
                );
            }
        return;
      default:
        if (hs(t)) {
          for (var $e in a)
            j = a[$e], a.hasOwnProperty($e) && j !== void 0 && !n.hasOwnProperty($e) && nr(
              e,
              t,
              $e,
              void 0,
              n,
              j
            );
          for (V in n)
            j = n[V], B = a[V], !n.hasOwnProperty(V) || j === B || j === void 0 && B === void 0 || nr(
              e,
              t,
              V,
              j,
              n,
              B
            );
          return;
        }
    }
    for (var N in a)
      j = a[N], a.hasOwnProperty(N) && j != null && !n.hasOwnProperty(N) && Qe(e, t, N, null, n, j);
    for (Q in n)
      j = n[Q], B = a[Q], !n.hasOwnProperty(Q) || j === B || j == null && B == null || Qe(e, t, Q, j, n, B);
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
  function vh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), n = 0; n < a.length; n++) {
        var l = a[n], i = l.transferSize, d = l.initiatorType, _ = l.duration;
        if (i && _ && gm(d)) {
          for (d = 0, _ = l.responseEnd, n += 1; n < a.length; n++) {
            var y = a[n], C = y.startTime;
            if (C > _) break;
            var V = y.transferSize, Q = y.initiatorType;
            V && gm(Q) && (y = y.responseEnd, d += V * (y < _ ? 1 : (_ - C) / (y - C)));
          }
          if (--n, t += 8 * (i + d) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var lr = null, ir = null;
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
  function bh() {
    var e = window.event;
    return e && e.type === "popstate" ? e === sr ? !1 : (sr = e, !0) : (sr = null, !1);
  }
  var vm = typeof setTimeout == "function" ? setTimeout : void 0, yh = typeof clearTimeout == "function" ? clearTimeout : void 0, bm = typeof Promise == "function" ? Promise : void 0, xh = typeof queueMicrotask == "function" ? queueMicrotask : typeof bm < "u" ? function(e) {
    return bm.resolve(null).then(e).catch(Sh);
  } : vm;
  function Sh(e) {
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
      var l = a.nextSibling;
      if (e.removeChild(a), l && l.nodeType === 8)
        if (a = l.data, a === "/$" || a === "/&") {
          if (n === 0) {
            e.removeChild(l), Al(t);
            return;
          }
          n--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          n++;
        else if (a === "html")
          vi(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, vi(a);
          for (var i = a.firstChild; i; ) {
            var d = i.nextSibling, _ = i.nodeName;
            i[Ul] || _ === "SCRIPT" || _ === "STYLE" || _ === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = d;
          }
        } else
          a === "body" && vi(e.ownerDocument.body);
      a = l;
    } while (a);
    Al(t);
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
  function wh(e, t, a, n) {
    for (; e.nodeType === 1; ) {
      var l = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (n) {
        if (!e[Ul])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== l.rel || e.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || e.getAttribute("title") !== (l.title == null ? null : l.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (l.src == null ? null : l.src) || e.getAttribute("type") !== (l.type == null ? null : l.type) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = aa(e.nextSibling), e === null) break;
    }
    return null;
  }
  function zh(e, t, a) {
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
  function Em(e, t, a) {
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
  function vi(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    ms(e);
  }
  var na = /* @__PURE__ */ new Map(), Nm = /* @__PURE__ */ new Set();
  function Do(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Ga = te.d;
  te.d = {
    f: Nh,
    r: Mh,
    D: kh,
    C: Ah,
    L: Ch,
    m: Th,
    X: Oh,
    S: jh,
    M: Rh
  };
  function Nh() {
    var e = Ga.f(), t = No();
    return e || t;
  }
  function Mh(e) {
    var t = $n(e);
    t !== null && t.tag === 5 && t.type === "form" ? Vd(t) : Ga.r(e);
  }
  var Nl = typeof document > "u" ? null : document;
  function Mm(e, t, a) {
    var n = Nl;
    if (n && typeof t == "string" && t) {
      var l = Jt(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof a == "string" && (l += '[crossorigin="' + a + '"]'), Nm.has(l) || (Nm.add(l), e = { rel: e, crossOrigin: a, href: t }, n.querySelector(l) === null && (t = n.createElement("link"), Et(t, "link", e), ht(t), n.head.appendChild(t)));
    }
  }
  function kh(e) {
    Ga.D(e), Mm("dns-prefetch", e, null);
  }
  function Ah(e, t) {
    Ga.C(e, t), Mm("preconnect", e, t);
  }
  function Ch(e, t, a) {
    Ga.L(e, t, a);
    var n = Nl;
    if (n && e && t) {
      var l = 'link[rel="preload"][as="' + Jt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (l += '[imagesrcset="' + Jt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (l += '[imagesizes="' + Jt(
        a.imageSizes
      ) + '"]')) : l += '[href="' + Jt(e) + '"]';
      var i = l;
      switch (t) {
        case "style":
          i = Ml(e);
          break;
        case "script":
          i = kl(e);
      }
      na.has(i) || (e = w(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), na.set(i, e), n.querySelector(l) !== null || t === "style" && n.querySelector(bi(i)) || t === "script" && n.querySelector(yi(i)) || (t = n.createElement("link"), Et(t, "link", e), ht(t), n.head.appendChild(t)));
    }
  }
  function Th(e, t) {
    Ga.m(e, t);
    var a = Nl;
    if (a && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + Jt(n) + '"][href="' + Jt(e) + '"]', i = l;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = kl(e);
      }
      if (!na.has(i) && (e = w({ rel: "modulepreload", href: e }, t), na.set(i, e), a.querySelector(l) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(yi(i)))
              return;
        }
        n = a.createElement("link"), Et(n, "link", e), ht(n), a.head.appendChild(n);
      }
    }
  }
  function jh(e, t, a) {
    Ga.S(e, t, a);
    var n = Nl;
    if (n && e) {
      var l = Jn(n).hoistableStyles, i = Ml(e);
      t = t || "default";
      var d = l.get(i);
      if (!d) {
        var _ = { loading: 0, preload: null };
        if (d = n.querySelector(
          bi(i)
        ))
          _.loading = 5;
        else {
          e = w(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = na.get(i)) && fr(e, a);
          var y = d = n.createElement("link");
          ht(y), Et(y, "link", e), y._p = new Promise(function(C, V) {
            y.onload = C, y.onerror = V;
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
        }, l.set(i, d);
      }
    }
  }
  function Oh(e, t) {
    Ga.X(e, t);
    var a = Nl;
    if (a && e) {
      var n = Jn(a).hoistableScripts, l = kl(e), i = n.get(l);
      i || (i = a.querySelector(yi(l)), i || (e = w({ src: e, async: !0 }, t), (t = na.get(l)) && mr(e, t), i = a.createElement("script"), ht(i), Et(i, "link", e), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(l, i));
    }
  }
  function Rh(e, t) {
    Ga.M(e, t);
    var a = Nl;
    if (a && e) {
      var n = Jn(a).hoistableScripts, l = kl(e), i = n.get(l);
      i || (i = a.querySelector(yi(l)), i || (e = w({ src: e, async: !0, type: "module" }, t), (t = na.get(l)) && mr(e, t), i = a.createElement("script"), ht(i), Et(i, "link", e), a.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(l, i));
    }
  }
  function km(e, t, a, n) {
    var l = (l = pe.current) ? Do(l) : null;
    if (!l) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ml(a.href), a = Jn(
          l
        ).hoistableStyles, n = a.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Ml(a.href);
          var i = Jn(
            l
          ).hoistableStyles, d = i.get(e);
          if (d || (l = l.ownerDocument || l, d = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, d), (i = l.querySelector(
            bi(e)
          )) && !i._p && (d.instance = i, d.state.loading = 5), na.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, na.set(e, a), i || Dh(
            l,
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
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = kl(a), a = Jn(
          l
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
  function Ml(e) {
    return 'href="' + Jt(e) + '"';
  }
  function bi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Am(e) {
    return w({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Dh(e, t, a, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), Et(t, "link", a), ht(t), e.head.appendChild(t));
  }
  function kl(e) {
    return '[src="' + Jt(e) + '"]';
  }
  function yi(e) {
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
            return t.instance = n, ht(n), n;
          var l = w({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), ht(n), Et(n, "style", l), Uo(n, a.precedence, e), t.instance = n;
        case "stylesheet":
          l = Ml(a.href);
          var i = e.querySelector(
            bi(l)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, ht(i), i;
          n = Am(a), (l = na.get(l)) && fr(n, l), i = (e.ownerDocument || e).createElement("link"), ht(i);
          var d = i;
          return d._p = new Promise(function(_, y) {
            d.onload = _, d.onerror = y;
          }), Et(i, "link", n), t.state.loading |= 4, Uo(i, a.precedence, e), t.instance = i;
        case "script":
          return i = kl(a.src), (l = e.querySelector(
            yi(i)
          )) ? (t.instance = l, ht(l), l) : (n = a, (l = na.get(i)) && (n = w({}, a), mr(n, l)), e = e.ownerDocument || e, l = e.createElement("script"), ht(l), Et(l, "link", n), e.head.appendChild(l), t.instance = l);
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
    ), l = n.length ? n[n.length - 1] : null, i = l, d = 0; d < n.length; d++) {
      var _ = n[d];
      if (_.dataset.precedence === t) i = _;
      else if (i !== l) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function fr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function mr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Bo = null;
  function Tm(e, t, a) {
    if (Bo === null) {
      var n = /* @__PURE__ */ new Map(), l = Bo = /* @__PURE__ */ new Map();
      l.set(a, n);
    } else
      l = Bo, n = l.get(a), n || (n = /* @__PURE__ */ new Map(), l.set(a, n));
    if (n.has(e)) return n;
    for (n.set(e, null), a = a.getElementsByTagName(e), l = 0; l < a.length; l++) {
      var i = a[l];
      if (!(i[Ul] || i[xt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = i.getAttribute(t) || "";
        d = e + d;
        var _ = n.get(d);
        _ ? _.push(i) : n.set(d, [i]);
      }
    }
    return n;
  }
  function jm(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Uh(e, t, a) {
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
  function Bh(e, t, a, n) {
    if (a.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var l = Ml(n.href), i = t.querySelector(
          bi(l)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Lo.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = i, ht(i);
          return;
        }
        i = t.ownerDocument || t, n = Am(n), (l = na.get(l)) && fr(n, l), i = i.createElement("link"), ht(i);
        var d = i;
        d._p = new Promise(function(_, y) {
          d.onload = _, d.onerror = y;
        }), Et(i, "link", n), a.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Lo.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var _r = 0;
  function Lh(e, t) {
    return e.stylesheets && e.count === 0 && Ho(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var n = setTimeout(function() {
        if (e.stylesheets && Ho(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && _r === 0 && (_r = 62500 * vh());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ho(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > _r ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(l);
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Go = /* @__PURE__ */ new Map(), t.forEach(Gh, e), Go = null, Lo.call(e));
  }
  function Gh(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Go.get(e);
      if (a) var n = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Go.set(e, a);
        for (var l = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < l.length; i++) {
          var d = l[i];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), n = d);
        }
        n && a.set(null, n);
      }
      l = t.instance, d = l.getAttribute("data-precedence"), i = a.get(d) || n, i === n && a.set(null, l), a.set(d, l), this.count++, n = Lo.bind(this), l.addEventListener("load", n), l.addEventListener("error", n), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var xi = {
    $$typeof: Z,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0
  };
  function Hh(e, t, a, n, l, i, d, _, y) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = kt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kt(0), this.hiddenUpdates = kt(null), this.identifierPrefix = n, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Rm(e, t, a, n, l, i, d, _, y, C, V, Q) {
    return e = new Hh(
      e,
      t,
      a,
      d,
      y,
      C,
      V,
      Q,
      _
    ), t = 1, i === !0 && (t |= 24), i = Ht(3, null, null, t), e.current = i, i.stateNode = e, t = Qs(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: a,
      cache: t
    }, Ws(i), e;
  }
  function Dm(e) {
    return e ? (e = il, e) : il;
  }
  function Um(e, t, a, n, l, i) {
    l = Dm(l), n.context === null ? n.context = l : n.pendingContext = l, n = tn(t), n.payload = { element: a }, i = i === void 0 ? null : i, i !== null && (n.callback = i), a = an(e, n, t), a !== null && (Bt(a, e, t), Pl(a, e, t));
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
      var t = Nn(e, 67108864);
      t !== null && Bt(t, e, 67108864), gr(e, 67108864);
    }
  }
  function Gm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Xt();
      t = us(t);
      var a = Nn(e, t);
      a !== null && Bt(a, e, t), gr(e, t);
    }
  }
  var qo = !0;
  function qh(e, t, a, n) {
    var l = R.T;
    R.T = null;
    var i = te.p;
    try {
      te.p = 2, pr(e, t, a, n);
    } finally {
      te.p = i, R.T = l;
    }
  }
  function Vh(e, t, a, n) {
    var l = R.T;
    R.T = null;
    var i = te.p;
    try {
      te.p = 8, pr(e, t, a, n);
    } finally {
      te.p = i, R.T = l;
    }
  }
  function pr(e, t, a, n) {
    if (qo) {
      var l = hr(n);
      if (l === null)
        ar(
          e,
          t,
          n,
          Vo,
          a
        ), qm(e, n);
      else if (Zh(
        l,
        e,
        t,
        a,
        n
      ))
        n.stopPropagation();
      else if (qm(e, n), t & 4 && -1 < Yh.indexOf(e)) {
        for (; l !== null; ) {
          var i = $n(l);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var d = oe(i.pendingLanes);
                  if (d !== 0) {
                    var _ = i;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; d; ) {
                      var y = 1 << 31 - ze(d);
                      _.entanglements[1] |= y, d &= ~y;
                    }
                    pa(i), (Ye & 6) === 0 && (zo = rt() + 500, gi(0));
                  }
                }
                break;
              case 31:
              case 13:
                _ = Nn(i, 2), _ !== null && Bt(_, i, 2), No(), gr(i, 2);
            }
          if (i = hr(n), i === null && ar(
            e,
            t,
            n,
            Vo,
            a
          ), i === l) break;
          l = i;
        }
        l !== null && n.stopPropagation();
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
  var Vo = null;
  function vr(e) {
    if (Vo = null, e = Qn(e), e !== null) {
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
    return Vo = e, null;
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
        switch (xn()) {
          case bt:
            return 2;
          case Xa:
            return 8;
          case Ka:
          case Qa:
            return 32;
          case Xn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var br = !1, _n = null, gn = null, pn = null, Si = /* @__PURE__ */ new Map(), wi = /* @__PURE__ */ new Map(), hn = [], Yh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function qm(e, t) {
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
        Si.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wi.delete(t.pointerId);
    }
  }
  function zi(e, t, a, n, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [l]
    }, t !== null && (t = $n(t), t !== null && Lm(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Zh(e, t, a, n, l) {
    switch (t) {
      case "focusin":
        return _n = zi(
          _n,
          e,
          t,
          a,
          n,
          l
        ), !0;
      case "dragenter":
        return gn = zi(
          gn,
          e,
          t,
          a,
          n,
          l
        ), !0;
      case "mouseover":
        return pn = zi(
          pn,
          e,
          t,
          a,
          n,
          l
        ), !0;
      case "pointerover":
        var i = l.pointerId;
        return Si.set(
          i,
          zi(
            Si.get(i) || null,
            e,
            t,
            a,
            n,
            l
          )
        ), !0;
      case "gotpointercapture":
        return i = l.pointerId, wi.set(
          i,
          zi(
            wi.get(i) || null,
            e,
            t,
            a,
            n,
            l
          )
        ), !0;
    }
    return !1;
  }
  function Vm(e) {
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
    br = !1, _n !== null && Yo(_n) && (_n = null), gn !== null && Yo(gn) && (gn = null), pn !== null && Yo(pn) && (pn = null), Si.forEach(Ym), wi.forEach(Ym);
  }
  function Zo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, br || (br = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      Xh
    )));
  }
  var Xo = null;
  function Zm(e) {
    Xo !== e && (Xo = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Xo === e && (Xo = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], n = e[t + 1], l = e[t + 2];
          if (typeof n != "function") {
            if (vr(n || a) === null)
              continue;
            break;
          }
          var i = $n(a);
          i !== null && (e.splice(t, 3), t -= 3, hc(
            i,
            {
              pending: !0,
              data: l,
              method: a.method,
              action: n
            },
            n,
            l
          ));
        }
      }
    ));
  }
  function Al(e) {
    function t(y) {
      return Zo(y, e);
    }
    _n !== null && Zo(_n, e), gn !== null && Zo(gn, e), pn !== null && Zo(pn, e), Si.forEach(t), wi.forEach(t);
    for (var a = 0; a < hn.length; a++) {
      var n = hn[a];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < hn.length && (a = hn[0], a.blockedOn === null); )
      Vm(a), a.blockedOn === null && hn.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (n = 0; n < a.length; n += 3) {
        var l = a[n], i = a[n + 1], d = l[Tt] || null;
        if (typeof i == "function")
          d || Zm(a);
        else if (d) {
          var _ = null;
          if (i && i.hasAttribute("formAction")) {
            if (l = i, d = i[Tt] || null)
              _ = d.formAction;
            else if (vr(l) !== null) continue;
          } else _ = d.action;
          typeof _ == "function" ? a[n + 1] = _ : (a.splice(n, 3), n -= 3), Zm(a);
        }
      }
  }
  function Xm() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(d) {
            return l = d;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      l !== null && (l(), l = null), n || setTimeout(a, 20);
    }
    function a() {
      if (!n && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, l = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        n = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), l !== null && (l(), l = null);
      };
    }
  }
  function yr(e) {
    this._internalRoot = e;
  }
  Ko.prototype.render = yr.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var a = t.current, n = Xt();
    Um(a, n, e, t, null, null);
  }, Ko.prototype.unmount = yr.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Um(e.current, 2, null, e, null, null), No(), t[Kn] = null;
    }
  };
  function Ko(e) {
    this._internalRoot = e;
  }
  Ko.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = eu();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < hn.length && t !== 0 && t < hn[a].priority; a++) ;
      hn.splice(a, 0, e), a === 0 && Vm(e);
    }
  };
  var Km = c.version;
  if (Km !== "19.2.3")
    throw Error(
      u(
        527,
        Km,
        "19.2.3"
      )
    );
  te.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = f(t), e = e !== null ? p(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Kh = {
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
          Kh
        ), le = Qo;
      } catch {
      }
  }
  return Ni.createRoot = function(e, t) {
    if (!g(e)) throw Error(u(299));
    var a = !1, n = "", l = Fd, i = Pd, d = ef;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Rm(
      e,
      1,
      !1,
      null,
      null,
      a,
      n,
      null,
      l,
      i,
      d,
      Xm
    ), e[Kn] = t.current, tr(e), new yr(t);
  }, Ni.hydrateRoot = function(e, t, a) {
    if (!g(e)) throw Error(u(299));
    var n = !1, l = "", i = Fd, d = Pd, _ = ef, y = null;
    return a != null && (a.unstable_strictMode === !0 && (n = !0), a.identifierPrefix !== void 0 && (l = a.identifierPrefix), a.onUncaughtError !== void 0 && (i = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (_ = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = Rm(
      e,
      1,
      !0,
      t,
      a ?? null,
      n,
      l,
      y,
      i,
      d,
      _,
      Xm
    ), t.context = Dm(null), a = t.current, n = Xt(), n = us(n), l = tn(n), l.callback = null, an(a, l, n), a = n, t.current.lanes = a, Ge(t, a), pa(t), e[Kn] = t.current, tr(e), new Ko(t);
  }, Ni.version = "19.2.3", Ni;
}
var a_;
function a0() {
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
  return o(), wr.exports = t0(), wr.exports;
}
var n0 = a0();
const $_ = /* @__PURE__ */ K_(n0);
const J_ = (...o) => o.filter((c, s, u) => !!c && c.trim() !== "" && u.indexOf(c) === s).join(" ").trim();
const l0 = (o) => o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const i0 = (o) => o.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (c, s, u) => u ? u.toUpperCase() : s.toLowerCase()
);
const n_ = (o) => {
  const c = i0(o);
  return c.charAt(0).toUpperCase() + c.slice(1);
};
var o0 = {
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
const s0 = (o) => {
  for (const c in o)
    if (c.startsWith("aria-") || c === "role" || c === "title")
      return !0;
  return !1;
};
const c0 = O.forwardRef(
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
      ...o0,
      width: c,
      height: c,
      stroke: o,
      strokeWidth: u ? Number(s) * 24 / Number(c) : s,
      className: J_("lucide", g),
      ...!m && !s0(b) && { "aria-hidden": "true" },
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
    ({ className: u, ...g }, m) => O.createElement(c0, {
      ref: m,
      iconNode: c,
      className: J_(
        `lucide-${l0(n_(o))}`,
        `lucide-${o}`,
        u
      ),
      ...g
    })
  );
  return s.displayName = n_(o), s;
};
const r0 = [
  [
    "path",
    {
      d: "M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",
      key: "67vhrh"
    }
  ],
  ["path", { d: "M4 9v6", key: "bns7oa" }]
], u0 = be("arrow-big-right-dash", r0);
const d0 = [
  ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
  ["path", { d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935", key: "lre1cr" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936", key: "13q5k0" }]
];
be("battery-charging", d0);
const f0 = [
  ["path", { d: "M10 10v4", key: "1mb2ec" }],
  ["path", { d: "M14 10v4", key: "1nt88p" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 10v4", key: "1n77qd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], m0 = be("battery-full", f0);
const _0 = [
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 14v-4", key: "14a6bd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], g0 = be("battery-low", _0);
const p0 = [
  ["path", { d: "M10 14v-4", key: "suye4c" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 14v-4", key: "14a6bd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], h0 = be("battery-medium", p0);
const v0 = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], b0 = be("battery", v0);
const y0 = [
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
      key: "oz39mx"
    }
  ]
], x0 = be("bookmark", y0);
const S0 = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
], w0 = be("brain", S0);
const z0 = [
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
], Zr = be("brush-cleaning", z0);
const E0 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V3", key: "1lcnhd" }],
  ["path", { d: "M19 21V9", key: "unv183" }]
], N0 = be("chart-no-axes-column", E0);
const M0 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], k0 = be("check", M0);
const A0 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], C0 = be("chevron-down", A0);
const T0 = [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], j0 = be("circle-play", T0);
const O0 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], R0 = be("clock", O0);
const D0 = [
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
], U0 = be("cpu", D0);
const B0 = [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix"
    }
  ]
], is = be("droplet", B0);
const L0 = [
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
], I_ = be("droplets", L0);
const G0 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], H0 = be("external-link", G0);
const q0 = [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
], V0 = be("gauge", q0);
const Y0 = [
  [
    "path",
    {
      d: "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",
      key: "p55z4y"
    }
  ],
  ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0", key: "mjntcy" }]
], l_ = be("glass-water", Y0);
const Z0 = [
  [
    "path",
    {
      d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
      key: "11za1p"
    }
  ],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
], X0 = be("grid-2x2-check", Z0);
const K0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], Q0 = be("history", K0);
const $0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], W_ = be("info", $0);
const J0 = [
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
], I0 = be("layers", J0);
const W0 = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], F0 = be("list", W0);
const P0 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], F_ = be("map-pin", P0);
const ev = [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5"
    }
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }]
], os = be("map", ev);
const tv = [["path", { d: "M5 12h14", key: "1ays0h" }]], av = be("minus", tv);
const nv = [
  ["path", { d: "M12.586 12.586 19 19", key: "ea5xo7" }],
  [
    "path",
    {
      d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",
      key: "277e5u"
    }
  ]
], lv = be("mouse-pointer", nv);
const iv = [
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      key: "2d38gg"
    }
  ],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], ov = be("octagon-x", iv);
const sv = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "m15 8-3 3-3-3", key: "1oxy1z" }]
], cv = be("panel-bottom-close", sv);
const rv = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], uv = be("pause", rv);
const dv = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], fv = be("play", dv);
const mv = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], _v = be("plus", mv);
const gv = [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
], pv = be("route", gv);
const hv = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], vv = be("save", hv);
const bv = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
], Xr = be("scan", bv);
const yv = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], P_ = be("settings-2", yv);
const xv = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], eg = be("settings", xv);
const Sv = [
  [
    "path",
    {
      d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",
      key: "1cn552"
    }
  ]
], wv = be("shell", Sv);
const zv = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
], Ev = be("shield-alert", zv);
const Nv = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }]
], Mv = be("signal-high", Nv);
const kv = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }]
], Av = be("signal-low", kv);
const Cv = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }]
], Tv = be("signal-medium", Cv);
const jv = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }],
  ["path", { d: "M22 4v16", key: "sih9yq" }]
], Ov = be("signal", jv);
const Rv = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], Dv = be("square", Rv);
const Uv = [
  [
    "path",
    {
      d: "M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "1ystz2"
    }
  ],
  ["path", { d: "M3 4v16", key: "1ph11n" }]
], Bv = be("step-forward", Uv);
const Lv = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], Gv = be("timer", Lv);
const Hv = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], qv = be("trash-2", Hv);
const Vv = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], tg = be("volume-2", Vv);
const Yv = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], Zv = be("volume-x", Yv);
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
], Kv = be("waves-arrow-down", Xv);
const Qv = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
], $v = be("wrench", Qv);
const Jv = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], Iv = be("zap", Jv), ag = /* @__PURE__ */ r.jsx(b0, {}), ng = /* @__PURE__ */ r.jsx(g0, {}), lg = /* @__PURE__ */ r.jsx(h0, {}), ig = /* @__PURE__ */ r.jsx(m0, {}), Wv = /* @__PURE__ */ r.jsx(Q0, {}), Fv = /* @__PURE__ */ r.jsx(Xr, {}), Pv = /* @__PURE__ */ r.jsx(fv, {}), eb = /* @__PURE__ */ r.jsx(uv, {}), tb = /* @__PURE__ */ r.jsx(Bv, {}), ab = /* @__PURE__ */ r.jsx(ov, {}), nb = /* @__PURE__ */ r.jsx(cv, {}), lb = /* @__PURE__ */ r.jsx(x0, {}), ib = /* @__PURE__ */ r.jsx(j0, {}), Kr = /* @__PURE__ */ r.jsx(Zr, {}), ob = /* @__PURE__ */ r.jsx(os, {}), Qr = /* @__PURE__ */ r.jsx(is, {}), Ol = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx(Zr, {}),
  /* @__PURE__ */ r.jsx(_v, {}),
  /* @__PURE__ */ r.jsx(is, {})
] }), $r = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx(Zr, {}),
  /* @__PURE__ */ r.jsx(u0, {}),
  /* @__PURE__ */ r.jsx(is, {})
] }), og = /* @__PURE__ */ r.jsx(Av, {}), sg = /* @__PURE__ */ r.jsx(Tv, {}), cg = /* @__PURE__ */ r.jsx(Mv, {}), rg = /* @__PURE__ */ r.jsx(Ov, {}), sb = /* @__PURE__ */ r.jsx(Xr, {}), cb = /* @__PURE__ */ r.jsx(Gv, {}), rb = /* @__PURE__ */ r.jsx(X0, {}), ub = /* @__PURE__ */ r.jsx(Iv, {}), db = /* @__PURE__ */ r.jsx(pv, {}), fb = /* @__PURE__ */ r.jsx(wv, {}), mb = /* @__PURE__ */ r.jsx(Kv, {}), Mi = {
  WETNESS: {
    MIN: 1,
    MAX: 32
  }
}, Cl = {
  SELECT: "select",
  SWITCH: "switch",
  NUMBER: "number",
  VACUUM: "vacuum",
  DREAME_VACUUM: "dreame_vacuum"
}, Gn = {
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
}, Le = {
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
}, Qt = {
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
}, Lt = {
  QUIET: "Quiet",
  SILENT: "Silent",
  STANDARD: "Standard",
  STRONG: "Strong",
  TURBO: "Turbo"
}, Hn = {
  QUICK: "Quick",
  STANDARD: "Standard",
  INTENSIVE: "Intensive",
  DEEP: "Deep"
}, es = {
  SLIGHTLY_DRY: "Slightly dry",
  MOIST: "Moist",
  WET: "Wet"
}, _b = {
  ALL: "all"
}, ki = {
  CLEANGENIUS: "CleanGenius",
  CUSTOM: "Custom"
}, Ct = {
  MODE: _b.ALL,
  CLEANING_MODE: Le.SWEEPING_AND_MOPPING,
  CLEANGENIUS_MODE: da.VACUUM_AND_MOP,
  SUCTION_LEVEL: Lt.STANDARD,
  WETNESS_LEVEL: 20,
  CLEANING_ROUTE: Hn.STANDARD,
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
      c(Cl.SELECT, Gn.SELECT_OPTION, p);
    },
    [c]
  ), u = O.useCallback(
    (v, f) => {
      console.debug("[HA Switch]", v, "→", f ? "ON" : "OFF");
      const p = f ? Gn.TURN_ON : Gn.TURN_OFF;
      c(Cl.SWITCH, p, { entity_id: v });
    },
    [c]
  ), g = O.useCallback(
    (v, f) => {
      console.debug("[HA Number]", v, "→", f);
      const p = {
        entity_id: v,
        value: f
      };
      c(Cl.NUMBER, Gn.SET_VALUE, p);
    },
    [c]
  ), m = O.useCallback(
    (v) => {
      console.debug("[HA Vacuum] Start", v), c(Cl.VACUUM, Gn.START, { entity_id: v });
    },
    [c]
  ), h = O.useCallback(
    (v) => {
      console.debug("[HA Vacuum] Return to base", v), c(Cl.VACUUM, Gn.RETURN_TO_BASE, { entity_id: v });
    },
    [c]
  ), b = O.useCallback(
    (v, f) => {
      console.debug("[HA Vacuum] Clean segments", v, f);
      const p = {
        entity_id: v,
        segments: f
      };
      c(Cl.DREAME_VACUUM, Gn.VACUUM_CLEAN_SEGMENT, p);
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
function gb(o) {
  switch (o) {
    case Le.SWEEPING:
      return Qt.CLEANING_MODE.SWEEPING;
    case Le.MOPPING:
      return Qt.CLEANING_MODE.MOPPING;
    case Le.SWEEPING_AND_MOPPING:
      return Qt.CLEANING_MODE.SWEEPING_AND_MOPPING;
    case Le.MOPPING_AFTER_SWEEPING:
      return Qt.CLEANING_MODE.MOPPING_AFTER_SWEEPING;
    case Le.MAPPING:
      return Qt.CLEANING_MODE.MAPPING;
    default:
      return o;
  }
}
function pb(o) {
  switch (o) {
    case da.VACUUM_AND_MOP:
      return Qt.CLEANGENIUS_MODE.VACUUM_AND_MOP;
    case da.MOP_AFTER_VACUUM:
      return Qt.CLEANGENIUS_MODE.MOP_AFTER_VACUUM;
    default:
      return o;
  }
}
function ts(o) {
  switch (o) {
    case va.OFF:
      return Qt.CLEANGENIUS.OFF;
    case va.ROUTINE_CLEANING:
      return Qt.CLEANGENIUS.ROUTINE_CLEANING;
    case va.DEEP_CLEANING:
      return Qt.CLEANGENIUS.DEEP_CLEANING;
    default:
      return o;
  }
}
function hb(o) {
  switch (o) {
    case qn.BY_AREA:
      return Qt.SELF_CLEAN_FREQUENCY.BY_AREA;
    case qn.BY_TIME:
      return Qt.SELF_CLEAN_FREQUENCY.BY_TIME;
    case qn.BY_ROOM:
      return Qt.SELF_CLEAN_FREQUENCY.BY_ROOM;
    default:
      return o;
  }
}
function as(o) {
  return o.toLowerCase();
}
function Tl(o, c) {
  return `select.${o}_${c}`;
}
function i_(o, c) {
  return `switch.${o}_${c}`;
}
function Mr(o, c) {
  return `number.${o}_${c}`;
}
function ug(o) {
  return o.replace("vacuum.", "");
}
function Ir(o) {
  return O.useMemo(() => {
    const c = ug(o);
    return {
      base: c,
      cleaningMode: Tl(c, ra.CLEANING_MODE),
      cleangeniusMode: Tl(c, ra.CLEANGENIUS_MODE),
      cleangenius: Tl(c, ra.CLEANGENIUS),
      suctionLevel: Tl(c, ra.SUCTION_LEVEL),
      cleaningRoute: Tl(c, ra.CLEANING_ROUTE),
      maxSuctionPower: i_(c, ra.MAX_SUCTION_POWER),
      customMoppingMode: i_(c, ra.CUSTOM_MOPPING_MODE),
      wetnessLevel: Mr(c, ra.WETNESS_LEVEL),
      selfCleanFrequency: Tl(c, ra.SELF_CLEAN_FREQUENCY),
      selfCleanArea: Mr(c, ra.SELF_CLEAN_AREA),
      selfCleanTime: Mr(c, ra.SELF_CLEAN_TIME)
    };
  }, [o]);
}
function dg({ defaultMode: o = Ct.MODE } = {}) {
  const [c, s] = O.useState(o), [u, g] = O.useState(/* @__PURE__ */ new Map()), [m, h] = O.useState(null), [b, v] = O.useState(!1), [f, p] = O.useState(!1), [w, k] = O.useState(!1), E = O.useCallback((Z) => {
    console.debug("[UI] Mode changed:", Z), s(Z), g(/* @__PURE__ */ new Map()), h(null);
  }, []), S = O.useCallback(
    (Z, L) => (g((ne) => {
      const q = new Map(ne);
      return q.has(Z) ? (console.debug("[UI] Room deselected:", { roomId: Z, roomName: L }), q.delete(Z)) : (console.debug("[UI] Room selected:", { roomId: Z, roomName: L }), q.set(Z, L)), q;
    }), u.has(Z)),
    [u]
  ), D = O.useCallback((Z) => {
    console.debug("[UI] Cleaning mode modal:", Z ? "opened" : "closed"), v(Z);
  }, []), X = O.useCallback((Z) => {
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
    setShortcutsModalOpened: X,
    setSettingsPanelOpened: U,
    handleModeChange: E,
    handleRoomToggle: S
  };
}
const vb = {
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
}, bb = {
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
}, yb = {
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
}, xb = {
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
}, Sb = {
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
}, wb = {
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
}, zb = {
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
  en: vb,
  de: bb,
  ru: yb,
  zh: xb,
  es: Sb,
  nl: wb,
  it: zb,
  pl: Eb
};
function Nb(o, c) {
  return c ? Object.entries(c).reduce((s, [u, g]) => s.replace(new RegExp(`{{${u}}}`, "g"), String(g)), o) : o;
}
function Mb(o, c) {
  return c.split(".").reduce((s, u) => {
    if (s && typeof s == "object" && u in s)
      return s[u];
  }, o);
}
function kb(o = "en") {
  const c = o_[o] || o_.en;
  return function(u, g) {
    const m = Mb(c, u);
    return typeof m != "string" ? (console.warn(`Translation key not found: ${u}`), u) : Nb(m, g);
  };
}
function Ab(o, c) {
  return c === 0 ? o("actions.select_rooms") : o(c === 1 ? "actions.clean_rooms" : "actions.clean_rooms_plural", { count: String(c) });
}
function Ve(o = "en") {
  const c = O.useMemo(() => kb(o), [o]);
  return {
    t: c,
    getRoomCountTranslation: (s) => Ab(c, s)
  };
}
function je(o, c) {
  return typeof o == typeof c ? o : c;
}
function fg(o) {
  return typeof o == "string";
}
function ua(o) {
  return typeof o == "number";
}
function Wr(o) {
  return typeof o == "boolean";
}
function Cb(o) {
  return typeof o == "object" && o !== null;
}
function s_(o, c, s) {
  const u = s.scale || 1, g = s.padding || [0, 0, 0, 0], m = s.crop || [0, 0, 0, 0], h = s.left, b = s.top, v = s.height, f = s.grid_size, p = (o + m[0] - g[0]) / u * f + h, w = b + (v * f - 1) - (c + m[1] - g[1]) / u * f;
  return { x: Math.round(p), y: Math.round(w) };
}
function Tb(o, c, s, u) {
  const g = Rb(c);
  if (console.debug("[ZoneConverter] Input:", { uiZone: o, imageWidth: s, imageHeight: u, hasDimensions: !!g }), !g) {
    const k = Ob(c);
    return console.debug("[ZoneConverter] Using calibration fallback, points:", k?.length ?? 0), jb(o, k, s, u);
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
function jb(o, c, s, u) {
  if (!c || c.length < 3)
    return {
      x1: Math.round(o.x1 / 100 * 12e3 - 6e3),
      y1: Math.round(o.y1 / 100 * 12e3 - 6e3),
      x2: Math.round(o.x2 / 100 * 12e3 - 6e3),
      y2: Math.round(o.y2 / 100 * 12e3 - 6e3)
    };
  const g = o.x1 / 100 * s, m = o.y1 / 100 * u, h = o.x2 / 100 * s, b = o.y2 / 100 * u, v = c[0], f = c[1], p = c[2], w = (f.vacuum.x - v.vacuum.x) / (f.map.x - v.map.x || 1), k = (p.vacuum.y - v.vacuum.y) / (p.map.y - v.map.y || 1), E = Math.round(v.vacuum.x + (g - v.map.x) * w), S = Math.round(v.vacuum.y + (m - v.map.y) * k), D = Math.round(v.vacuum.x + (h - v.map.x) * w), X = Math.round(v.vacuum.y + (b - v.map.y) * k);
  return {
    x1: E,
    y1: S,
    x2: D,
    y2: X
  };
}
function Ob(o) {
  const c = o?.attributes?.calibration_points;
  return !c || !Array.isArray(c) || c.length < 3 ? null : c.map((s) => {
    const u = s;
    return {
      vacuum: { x: u.vacuum?.x ?? 0, y: u.vacuum?.y ?? 0 },
      map: { x: u.map?.x ?? 0, y: u.map?.y ?? 0 }
    };
  });
}
function Rb(o) {
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
function Db({ hass: o, entityId: c, mapEntityId: s, onSuccess: u, language: g = "en" }) {
  const { t: m } = Ve(g), h = O.useCallback(() => {
    console.debug("[Vacuum] Start full clean", c), o.callService("vacuum", "start", { entity_id: c }), u?.(m("toast.starting_full_clean"));
  }, [o, c, u, m]), b = O.useCallback(() => {
    console.debug("[Vacuum] Pause", c), o.callService("vacuum", "pause", { entity_id: c }), u?.(m("toast.pausing_vacuum"));
  }, [o, c, u, m]), v = O.useCallback(() => {
    console.debug("[Vacuum] Stop and return to base", c), o.callService("vacuum", "stop", { entity_id: c }), o.callService("vacuum", "return_to_base", { entity_id: c }), u?.(m("toast.stopping_vacuum"));
  }, [o, c, u, m]), f = O.useCallback(() => {
    console.debug("[Vacuum] Return to dock", c), o.callService("vacuum", "return_to_base", { entity_id: c }), u?.(m("toast.vacuum_docking"));
  }, [o, c, u, m]), p = O.useCallback(
    (E, S) => {
      console.debug("[Vacuum] Clean segments", { entityId: c, segments: E, count: S }), o.callService("dreame_vacuum", "vacuum_clean_segment", {
        entity_id: c,
        segments: E
      }), u?.(m(S === 1 ? "toast.starting_room_clean" : "toast.starting_room_clean_plural", { count: String(S) }));
    },
    [o, c, u, m]
  ), w = O.useCallback(
    (E, S, D) => {
      const X = o.states[s];
      console.debug("[Vacuum] Clean zone - input:", {
        uiZone: E,
        imageWidth: S,
        imageHeight: D,
        mapEntityId: s,
        calibrationPoints: X?.attributes?.calibration_points
      });
      const U = Tb(E, X, S, D);
      console.debug("[Vacuum] Clean zone - converted:", U), o.callService("dreame_vacuum", "vacuum_clean_zone", {
        entity_id: c,
        zone: [U.x1, U.y1, U.x2, U.y2]
      }), u?.(m("toast.starting_zone_clean"));
    },
    [o, c, s, u, m]
  ), k = O.useCallback(
    (E, S, D, X, U) => {
      switch (console.debug("[Vacuum] Handle clean", {
        mode: E,
        selectedRooms: Array.from(S.entries()),
        selectedZone: D,
        imageWidth: X,
        imageHeight: U
      }), E) {
        case "all":
          h();
          break;
        case "room":
          S.size > 0 ? p(Array.from(S.keys()), S.size) : (console.debug("[Vacuum] No rooms selected"), u?.(m("toast.select_rooms_first")));
          break;
        case "zone":
          D && X && U ? w(D, X, U) : D ? (console.debug("[Vacuum] Zone selected but no image dimensions"), u?.(m("toast.cannot_determine_map"))) : (console.debug("[Vacuum] No zone selected"), u?.(m("toast.select_zone_first")));
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
function mg(o = 3e3) {
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
}, _g = {
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
function Ub(o, c) {
  switch (o) {
    case "light":
      return Gr;
    case "dark":
      return _g;
    case "custom":
      return Bb(c || {});
    default:
      return Gr;
  }
}
function Bb(o) {
  return {
    name: "custom",
    colors: {
      ...(o.base === "dark" ? _g : Gr).colors,
      ...o
    }
  };
}
function Lb(o) {
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
function Gb(o, c) {
  const s = Lb(c.colors);
  Object.entries(s).forEach(([u, g]) => {
    o.style.setProperty(u, g);
  });
}
function gg({ themeType: o = "light", customThemeConfig: c, containerRef: s }) {
  const u = O.useMemo(() => Ub(o, c), [o, c]);
  return O.useEffect(() => {
    s?.current && Gb(s.current, u);
  }, [u, s]), u;
}
let Hb = 0;
function ns() {
  return `r${++Hb}`;
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
function Vb(o, c) {
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
function Yb({ mapData: o, active: c }) {
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
    g((X) => X.dirty || X.selectedId !== null ? X : { ...X, walls: S.walls, zones: S.zones, selectedId: null, dirty: !1 });
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
    const X = ns();
    return g((U) => ({
      ...U,
      walls: [...U.walls, { id: X, pA: S, pB: D }],
      dirty: !0,
      selectedId: X
    })), X;
  }, []), b = O.useCallback((S, D, X) => {
    const U = Math.min(D.x, X.x), $ = Math.max(D.x, X.x), Z = Math.min(D.y, X.y), L = Math.max(D.y, X.y), ne = ns();
    return g((q) => ({
      ...q,
      zones: [
        ...q.zones,
        {
          id: ne,
          type: S,
          pA: { x: U, y: Z },
          pB: { x: $, y: Z },
          pC: { x: $, y: L },
          pD: { x: U, y: L }
        }
      ],
      dirty: !0,
      selectedId: ne
    })), ne;
  }, []), v = O.useCallback((S, D, X) => {
    g((U) => ({
      ...U,
      walls: U.walls.map(($) => $.id === S ? { ...$, pA: D, pB: X } : $),
      dirty: !0,
      selectedId: S
    }));
  }, []), f = O.useCallback((S, D, X) => {
    const U = Math.min(D.x, X.x), $ = Math.max(D.x, X.x), Z = Math.min(D.y, X.y), L = Math.max(D.y, X.y);
    g((ne) => ({
      ...ne,
      zones: ne.zones.map(
        (q) => q.id === S ? {
          ...q,
          pA: { x: U, y: Z },
          pB: { x: $, y: Z },
          pC: { x: $, y: L },
          pD: { x: U, y: L }
        } : q
      ),
      dirty: !0,
      selectedId: S
    }));
  }, []), p = O.useCallback((S) => {
    g((D) => ({
      ...D,
      walls: D.walls.filter((X) => X.id !== S),
      zones: D.zones.filter((X) => X.id !== S),
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
  }, []), E = O.useCallback(() => {
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
    markSaved: E
  };
}
function Zb(o, c) {
  if (c)
    switch (o) {
      case Le.SWEEPING_AND_MOPPING:
        return c("cleaning_mode_button.vac_and_mop");
      case Le.MOPPING_AFTER_SWEEPING:
        return c("cleaning_mode_button.mop_after_vac");
      case Le.SWEEPING:
        return c("cleaning_mode_button.vacuum");
      case Le.MOPPING:
        return c("cleaning_mode_button.mop");
      case Le.MAPPING:
        return c("cleaning_mode_button.mapping");
      default:
        return o;
    }
  switch (o) {
    case Le.SWEEPING_AND_MOPPING:
      return "Vac & Mop";
    case Le.MOPPING_AFTER_SWEEPING:
      return "Mop after Vac";
    case Le.SWEEPING:
      return "Vac";
    case Le.MOPPING:
      return "Mop";
    case Le.MAPPING:
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
function Kb(o, c) {
  return c ? o === Lt.QUIET || o.includes("Quiet") ? c("suction_levels.quiet") : o === Lt.STANDARD || o.includes("Standard") ? c("suction_levels.standard") : o === Lt.STRONG || o.includes("Strong") ? c("suction_levels.strong") : o === Lt.TURBO || o.includes("Turbo") ? c("suction_levels.turbo") : o : o === Lt.QUIET || o.includes("Quiet") ? "Quiet" : o === Lt.STANDARD || o.includes("Standard") ? "Standard" : o === Lt.STRONG || o.includes("Strong") ? "Turbo" : o === Lt.TURBO || o.includes("Turbo") ? "Max" : o;
}
function Qb(o) {
  switch (o) {
    case Le.SWEEPING:
      return Kr;
    case Le.MOPPING:
      return Qr;
    case Le.SWEEPING_AND_MOPPING:
      return Ol;
    case Le.MOPPING_AFTER_SWEEPING:
      return $r;
    case Le.MAPPING:
      return ob;
    default:
      return "";
  }
}
function $b(o) {
  switch (o) {
    case da.VACUUM_AND_MOP:
      return Ol;
    case da.MOP_AFTER_VACUUM:
      return $r;
    default:
      return "";
  }
}
function Jb(o) {
  switch (o) {
    case Lt.QUIET:
    case Lt.SILENT:
      return og;
    case Lt.STANDARD:
      return sg;
    case Lt.STRONG:
      return cg;
    case Lt.TURBO:
      return rg;
  }
}
function Ib(o) {
  switch (o) {
    case Hn.QUICK:
      return ub;
    case Hn.STANDARD:
      return db;
    case Hn.INTENSIVE:
      return fb;
    case Hn.DEEP:
      return mb;
  }
}
function Wb(o) {
  switch (o) {
    case qn.BY_AREA:
      return sb;
    case qn.BY_TIME:
      return cb;
    case qn.BY_ROOM:
      return rb;
    default:
      return "⚙️";
  }
}
function Fb(o, c) {
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
function Pb(o, c) {
  const s = je(o.attributes.status, ""), u = o.attributes.segment_cleaning || !1, g = o.attributes.zone_cleaning || !1;
  if (o.attributes.started) {
    if (u || s.toLowerCase().includes("room"))
      return "room";
    if (g || s.toLowerCase().includes("zone"))
      return "zone";
  }
  return c;
}
function e1(o, c) {
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
    const E = (o + 1e4) / 2e4, S = (c + 1e4) / 2e4;
    return {
      x: E * u,
      y: S * g
    };
  }
  const m = s[0], h = s[1], b = s[2], v = (h.map.x - m.map.x) / (h.vacuum.x - m.vacuum.x || 1), f = (b.map.y - m.map.y) / (b.vacuum.y - m.vacuum.y || 1), p = m.map.x + (o - m.vacuum.x) * v, w = m.map.y + (c - m.vacuum.y) * f;
  return { x: p, y: w };
}
function t1(o, c, s, u) {
  if (o.x0 === void 0 || o.y0 === void 0 || o.x1 === void 0 || o.y1 === void 0)
    return console.warn("Room missing coordinates:", o), "";
  const g = $o(o.x0, o.y0, c, s, u), m = $o(o.x1, o.y0, c, s, u), h = $o(o.x1, o.y1, c, s, u), b = $o(o.x0, o.y1, c, s, u);
  return `M ${g.x} ${g.y} L ${m.x} ${m.y} L ${h.x} ${h.y} L ${b.x} ${b.y} Z`;
}
function a1({ entity: o, deviceName: c, onSettingsClick: s, language: u }) {
  const { t: g } = Ve(u), m = je(o.attributes.status, o.state), h = je(o.attributes.cleaned_area, 0), b = je(o.attributes.cleaning_time, 0), v = je(o.attributes.battery, 0), f = () => {
    const k = o.attributes.battery;
    return ua(k) ? k >= 80 ? ig : k >= 60 ? lg : k >= 20 ? ng : ag : null;
  }, p = je(o.attributes.cleaning_progress, 0) || je(o.attributes.drying_progress, 0), w = o.attributes.status;
  return /* @__PURE__ */ r.jsxs("div", { className: "header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "header__top", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "header__title-wrapper", children: [
        /* @__PURE__ */ r.jsx("h2", { className: "header__title", children: c }),
        /* @__PURE__ */ r.jsx("p", { className: "header__status", children: m })
      ] }),
      s && /* @__PURE__ */ r.jsx("button", { className: "header__settings-btn", onClick: s, type: "button", "aria-label": "Settings", children: /* @__PURE__ */ r.jsx(eg, {}) })
    ] }),
    w !== "Sleeping" && p > 0 && /* @__PURE__ */ r.jsx("div", { className: "header__progress", children: /* @__PURE__ */ r.jsx("div", { className: "header__progress-bar", children: /* @__PURE__ */ r.jsx("div", { className: "header__progress-fill", style: { width: `${p}%` } }) }) }),
    /* @__PURE__ */ r.jsxs("div", { className: "header__stats", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "header__stat", children: [
        /* @__PURE__ */ r.jsx("span", { className: "header__stat-icon--area", children: Fv }),
        /* @__PURE__ */ r.jsxs("span", { className: "header__stat-value", children: [
          h,
          " ",
          g("units.square_meters")
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "header__stat", children: [
        /* @__PURE__ */ r.jsx("span", { className: "header__stat-icon--cleaning-time", children: Wv }),
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
function n1({
  cleaningMode: o,
  cleanGeniusMode: c,
  cleangenius: s,
  onClick: u,
  onShortcutsClick: g,
  disabled: m = !1,
  language: h
}) {
  const { t: b } = Ve(h), v = (E) => E === Le.SWEEPING ? Kr : E === Le.MOPPING ? Qr : E === Le.SWEEPING_AND_MOPPING ? Ol : E === Le.MOPPING_AFTER_SWEEPING ? $r : Ol, f = (E) => E === da.VACUUM_AND_MOP ? b("cleaning_mode_button.vac_and_mop") : E === da.MOP_AFTER_VACUUM ? b("cleaning_mode_button.mop_after_vac") : "", p = (E) => E === Le.MOPPING_AFTER_SWEEPING ? b("cleaning_mode_button.mop_after_vac") : E === Le.SWEEPING_AND_MOPPING ? b("cleaning_mode_button.vac_and_mop") : E === Le.SWEEPING ? b("cleaning_mode_button.vacuum") : E === Le.MOPPING ? b("cleaning_mode_button.mop") : "", w = () => b(s === "Off" ? "cleaning_mode_button.prefix_custom" : "cleaning_mode_button.prefix_cleangenius"), k = (E) => {
    E.stopPropagation(), g?.();
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
    const { clientX: X, clientY: U } = f(S), $ = X - D.left, Z = U - D.top, L = Math.max(0, Math.min(100, $ / D.width * 100)), ne = Math.max(0, Math.min(100, Z / D.height * 100)), q = { ...h };
    switch (g) {
      case "tl":
        q.x1 = Math.min(L, h.x2 - 5), q.y1 = Math.min(ne, h.y2 - 5);
        break;
      case "tr":
        q.x2 = Math.max(L, h.x1 + 5), q.y1 = Math.min(ne, h.y2 - 5);
        break;
      case "bl":
        q.x1 = Math.min(L, h.x2 - 5), q.y2 = Math.max(ne, h.y1 + 5);
        break;
      case "br":
        q.x2 = Math.max(L, h.x1 + 5), q.y2 = Math.max(ne, h.y1 + 5);
        break;
    }
    c(q);
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
function i1({
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
    path: t1(f, u, g, m)
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
function o1({ viewMode: o, onToggle: c, mapLabel: s, listLabel: u }) {
  const g = o === "map", m = g ? u : s, h = g ? F0 : os;
  return /* @__PURE__ */ r.jsx("button", { className: "view-toggle-button", onClick: c, "aria-label": m, title: m, children: /* @__PURE__ */ r.jsx(h, { size: 18 }) });
}
function s1({ rooms: o, selectedRooms: c, onRoomToggle: s, language: u }) {
  const { t: g } = Ve(u);
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
            /* @__PURE__ */ r.jsx("span", { className: "room-list-view__item-check", children: h && /* @__PURE__ */ r.jsx(k0, { size: 18 }) })
          ]
        },
        m.id
      );
    }) })
  ] });
}
function c1({
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
  const { t: w } = Ve(v), k = o.states[c], E = k?.attributes?.entity_picture, S = O.useRef(null), D = O.useRef(null), [X, U] = O.useState({ width: 0, height: 0 }), [$, Z] = O.useState(p);
  O.useEffect(() => {
    s !== "room" && Z(p);
  }, [s, p]);
  const L = e1(o, c), ne = k?.attributes?.calibration_points ?? [], q = l1({
    zone: m,
    onZoneChange: h,
    clearZoneLabel: w("vacuum_map.clear_zone"),
    isStarted: f
  }), Y = (se) => {
    if (s !== "zone" || q.isResizing()) return;
    const I = S.current?.getBoundingClientRect();
    if (!I) return;
    const re = se.clientX - I.left, ge = se.clientY - I.top, Ee = re / I.width * 100, ke = ge / I.height * 100, xe = 15, R = Ee, te = ke, F = {
      x1: Math.max(0, R - xe / 2),
      y1: Math.max(0, te - xe / 2),
      x2: Math.min(100, R + xe / 2),
      y2: Math.min(100, te + xe / 2)
    };
    console.debug("[Map] Zone created at click:", { clickX: re, clickY: ge, xPercent: Ee, yPercent: ke, newZone: F }), h(F);
  }, J = (se) => {
    const I = S.current?.getBoundingClientRect();
    I && q.handleResizeMove(se, I);
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "vacuum-map",
      ref: S,
      onClick: Y,
      onMouseMove: J,
      onMouseUp: q.handleResizeEnd,
      onMouseLeave: q.handleResizeEnd,
      onTouchMove: J,
      onTouchEnd: q.handleResizeEnd,
      onTouchCancel: q.handleResizeEnd,
      children: [
        k && E ? /* @__PURE__ */ r.jsx(
          "img",
          {
            ref: D,
            src: o.hassUrl(E),
            alt: "Vacuum Map",
            className: "vacuum-map__image",
            onLoad: (se) => {
              const I = se.currentTarget;
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
            o1,
            {
              viewMode: $,
              onToggle: () => Z((se) => se === "map" ? "list" : "map"),
              mapLabel: w("vacuum_map.switch_to_map"),
              listLabel: w("vacuum_map.switch_to_list")
            }
          ),
          $ === "map" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            !f && /* @__PURE__ */ r.jsx("div", { className: "vacuum-map__overlay", children: w("vacuum_map.room_overlay") }),
            !f && X.width > 0 && X.height > 0 && /* @__PURE__ */ r.jsx(
              i1,
              {
                rooms: L,
                selectedRooms: u,
                onRoomToggle: g,
                calibrationPoints: ne,
                imageWidth: X.width,
                imageHeight: X.height,
                isStarted: f
              }
            )
          ] }) : /* @__PURE__ */ r.jsx(
            s1,
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
          q.renderZone()
        ] })
      ]
    }
  );
}
function pg({ selectedMode: o, onModeChange: c, disabled: s = !1, language: u = "en" }) {
  const { t: g } = Ve(u), m = [
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
function r1({ onClick: o, text: c, disabled: s }) {
  return /* @__PURE__ */ r.jsxs("button", { onClick: o, className: "action-buttons__clean", disabled: s, children: [
    /* @__PURE__ */ r.jsx("span", { className: "action-buttons__icon", children: Pv }),
    /* @__PURE__ */ r.jsx("span", { children: c })
  ] });
}
function u1({ onClick: o, language: c = "en" }) {
  const { t: s } = Ve(c);
  return /* @__PURE__ */ r.jsxs("button", { onClick: o, className: "action-buttons__pause", children: [
    /* @__PURE__ */ r.jsx("span", { className: "action-buttons__icon", children: eb }),
    /* @__PURE__ */ r.jsx("span", { children: s("actions.pause") })
  ] });
}
function d1({ onClick: o, language: c = "en" }) {
  const { t: s } = Ve(c);
  return /* @__PURE__ */ r.jsxs("button", { onClick: o, className: "action-buttons__resume", children: [
    /* @__PURE__ */ r.jsx("span", { className: "action-buttons__icon", children: tb }),
    /* @__PURE__ */ r.jsx("span", { children: s("actions.resume") })
  ] });
}
function c_({ onClick: o, language: c = "en" }) {
  const { t: s } = Ve(c);
  return /* @__PURE__ */ r.jsxs("button", { onClick: o, className: "action-buttons__stop", children: [
    /* @__PURE__ */ r.jsx("span", { className: "action-buttons__icon", children: ab }),
    /* @__PURE__ */ r.jsx("span", { children: s("actions.stop") })
  ] });
}
function f1({ onClick: o, language: c = "en", disabled: s }) {
  const { t: u } = Ve(c);
  return /* @__PURE__ */ r.jsxs("button", { onClick: o, className: "action-buttons__dock", disabled: s, children: [
    /* @__PURE__ */ r.jsx("span", { className: "action-buttons__icon", children: nb }),
    /* @__PURE__ */ r.jsx("span", { children: u("actions.dock") })
  ] });
}
function hg({
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
  const { t: k, getRoomCountTranslation: E } = Ve(p), D = (() => {
    switch (o) {
      case "room":
        return E(c);
      case "all":
        return k("actions.clean_all");
      case "zone":
        return k("actions.zone_clean");
      default:
        return k("actions.clean");
    }
  })();
  return s && !u && !g ? /* @__PURE__ */ r.jsxs("div", { className: "action-buttons", children: [
    /* @__PURE__ */ r.jsx(u1, { onClick: h, language: p }),
    /* @__PURE__ */ r.jsx(c_, { onClick: v, language: p })
  ] }) : u ? /* @__PURE__ */ r.jsxs("div", { className: "action-buttons", children: [
    /* @__PURE__ */ r.jsx(d1, { onClick: b, language: p }),
    /* @__PURE__ */ r.jsx(c_, { onClick: v, language: p })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: "action-buttons", children: [
    /* @__PURE__ */ r.jsx(r1, { onClick: m, text: D, disabled: w }),
    /* @__PURE__ */ r.jsx(f1, { onClick: f, language: p, disabled: w })
  ] });
}
function Kt({ title: o, icon: c, defaultOpen: s = !1, children: u }) {
  const [g, m] = O.useState(s), h = O.useCallback(() => {
    m((b) => !b);
  }, []);
  return /* @__PURE__ */ r.jsxs("div", { className: `accordion ${g ? "accordion--open" : ""}`, children: [
    /* @__PURE__ */ r.jsxs("button", { className: "accordion__header", onClick: h, type: "button", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "accordion__title-wrapper", children: [
        c && /* @__PURE__ */ r.jsx("span", { className: "accordion__icon", children: c }),
        /* @__PURE__ */ r.jsx("span", { className: "accordion__title", children: o })
      ] }),
      /* @__PURE__ */ r.jsx(C0, { className: "accordion__chevron" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "accordion__content", children: /* @__PURE__ */ r.jsx("div", { className: "accordion__content-inner", children: u }) })
  ] });
}
function ji({ checked: o = !1, onChange: c, disabled: s = !1 }) {
  const u = (g) => {
    c && !s && c(g.target.checked);
  };
  return /* @__PURE__ */ r.jsxs("label", { className: `toggle ${s ? "toggle--disabled" : ""}`, children: [
    /* @__PURE__ */ r.jsx("input", { type: "checkbox", className: "toggle__input", checked: o, onChange: u, disabled: s }),
    /* @__PURE__ */ r.jsx("span", { className: "toggle__slider", children: /* @__PURE__ */ r.jsx("span", { className: "toggle__knob" }) })
  ] });
}
function Rl({
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
function Oi({ opened: o, onClose: c, children: s }) {
  return o ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { className: "modal__backdrop", onClick: c }),
    /* @__PURE__ */ r.jsxs("div", { className: "modal", children: [
      /* @__PURE__ */ r.jsx("div", { className: "modal__handle" }),
      /* @__PURE__ */ r.jsx("div", { className: "modal__content", children: s })
    ] })
  ] }) : null;
}
function m1({ options: o, value: c, onChange: s }) {
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
function vg({ message: o, onClose: c }) {
  return /* @__PURE__ */ r.jsxs("div", { className: "toast", children: [
    /* @__PURE__ */ r.jsx("span", { className: "toast__message", children: o }),
    /* @__PURE__ */ r.jsx("button", { className: "toast__close", onClick: c, "aria-label": "Close", children: "×" })
  ] });
}
function _1({
  cleangeniusMode: o,
  cleangeniusModeList: c,
  cleangenius: s,
  baseEntityId: u,
  hass: g,
  language: m
}) {
  const { setSelectOption: h } = Jr(g), { t: b } = Ve(m), v = Ir(u), f = (p) => {
    p ? (h(
      v.cleangenius,
      ts(va.DEEP_CLEANING)
    ), h(v.cleaningRoute, as(Hn.DEEP))) : (h(
      v.cleangenius,
      ts(va.ROUTINE_CLEANING)
    ), h(v.cleaningRoute, as(Hn.STANDARD)));
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__content", children: [
    /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: b("cleangenius_mode.cleaning_mode_title") }),
      /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__mode-grid", children: c.map((p, w) => {
        const k = p, E = p === "Vacuum and mop";
        return /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: `cleaning-mode-modal__mode-card ${p === o ? "cleaning-mode-modal__mode-card--selected" : ""}`,
            onClick: () => h(v.cleangeniusMode, pb(k)),
            style: { cursor: "pointer" },
            children: [
              /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: `cleaning-mode-modal__mode-icon cleaning-mode-modal__mode-icon--${E ? "vac-mop" : "mop-after"}`,
                  children: $b(k)
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
      /* @__PURE__ */ r.jsx(ji, { checked: s === va.DEEP_CLEANING, onChange: f })
    ] })
  ] });
}
function g1({
  cleaningMode: o,
  cleaningModeList: c,
  onSelect: s,
  entityId: u,
  t: g
}) {
  return /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__power-grid", children: c.map((m, h) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__mode-option", children: [
    /* @__PURE__ */ r.jsx(
      Rl,
      {
        size: "small",
        selected: m === o,
        onClick: () => s(u, gb(m)),
        icon: Qb(m)
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__mode-option-label", children: Zb(m, g) })
  ] }, h)) });
}
function p1({
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
        Rl,
        {
          size: "small",
          selected: f === o,
          onClick: () => u(m, as(f)),
          icon: Jb(f)
        }
      ),
      /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__power-label", children: Kb(f, v) })
    ] }, p)) }),
    /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__max-plus", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__max-plus-header", children: [
        /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__max-plus-title", children: "Max+" }),
        /* @__PURE__ */ r.jsx(
          ji,
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
function h1({
  wetnessLevel: o,
  mopPadHumidity: c,
  onChangeWetness: s,
  entityId: u,
  slightlyDryLabel: g,
  moistLabel: m,
  wetLabel: h
}) {
  const [b, v] = O.useState(o), f = (b - Mi.WETNESS.MIN) / (Mi.WETNESS.MAX - Mi.WETNESS.MIN) * 100, p = 20, w = `calc(${f}% + ${p / 2 - f * p / 100}px)`, k = (S) => {
    v(parseInt(S.target.value));
  }, E = () => {
    b !== o && s(u, b);
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__slider-container", children: /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__slider-wrapper", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "range",
          min: Mi.WETNESS.MIN,
          max: Mi.WETNESS.MAX,
          value: b,
          onChange: k,
          onMouseUp: E,
          onTouchEnd: E,
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
function v1(o, c) {
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
function b1({
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
  timeEntityId: E,
  t: S
}) {
  const [D, X] = O.useState(s), [U, $] = O.useState(m), Z = (D - u) / (g - u) * 100, L = (U - h) / (b - h) * 100, ne = 20, q = `calc(${Z}% + ${ne / 2 - Z * ne / 100}px)`, Y = `calc(${L}% + ${ne / 2 - L * ne / 100}px)`, J = S ? S("units.square_meters") : "m²", se = S ? S("units.minutes_short") : "m", I = (ge) => {
    const Ee = parseInt(ge.target.value);
    o === "By area" ? X(Ee) : $(Ee);
  }, re = () => {
    o === "By area" && D !== s ? f(k, D) : o === "By time" && U !== m && p(E, U);
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__horizontal-scroll", children: c.map((ge, Ee) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__mode-option", children: [
      /* @__PURE__ */ r.jsx(
        Rl,
        {
          size: "small",
          selected: ge === o,
          onClick: () => v(w, hb(ge)),
          icon: Wb(ge)
        }
      ),
      /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__mode-option-label", children: v1(ge, S) })
    ] }, Ee)) }),
    (o === "By area" || o === "By time") && /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__slider-container", style: { marginTop: "1rem" }, children: /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__slider-wrapper", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "range",
          min: o === "By area" ? u : h,
          max: o === "By area" ? g : b,
          value: o === "By area" ? D : U,
          onChange: I,
          onMouseUp: re,
          onTouchEnd: re,
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
            left: o === "By area" ? q : Y
          },
          children: o === "By area" ? `${D}${J}` : `${U}${se}`
        }
      )
    ] }) })
  ] });
}
function y1({ cleaningRoute: o, cleaningRouteList: c, onSelect: s, entityId: u }) {
  return /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__route-grid", children: c.map((g, m) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__route-option", children: [
    /* @__PURE__ */ r.jsx(
      Rl,
      {
        size: "small",
        selected: g === o,
        onClick: () => s(u, as(g)),
        icon: Ib(g)
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__route-label", children: g })
  ] }, m)) });
}
function x1({
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
  selfCleanAreaMax: E,
  selfCleanTime: S,
  selfCleanTimeMin: D,
  selfCleanTimeMax: X,
  baseEntityId: U,
  hass: $,
  language: Z
}) {
  const { setSelectOption: L, setSwitch: ne, setNumber: q } = Jr($), Y = Ir(U), { t: J } = Ve(Z);
  return /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__content", children: [
    /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.cleaning_mode_title") }),
      /* @__PURE__ */ r.jsx(
        g1,
        {
          cleaningMode: o,
          cleaningModeList: c,
          onSelect: L,
          entityId: Y.cleaningMode,
          t: J
        }
      )
    ] }),
    o !== Le.MAPPING && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.suction_power_title") }),
      /* @__PURE__ */ r.jsx(
        p1,
        {
          suctionLevel: s,
          suctionLevelList: u,
          maxSuctionPower: v,
          onSelectSuctionLevel: L,
          onToggleMaxPower: ne,
          suctionLevelEntityId: Y.suctionLevel,
          maxSuctionPowerEntityId: Y.maxSuctionPower,
          maxPlusDescription: J("custom_mode.max_plus_description"),
          t: J
        }
      )
    ] }),
    o !== Le.SWEEPING && o !== Le.MAPPING && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.wetness_title") }),
      /* @__PURE__ */ r.jsx(
        h1,
        {
          wetnessLevel: g,
          mopPadHumidity: m,
          onChangeWetness: q,
          entityId: Y.wetnessLevel,
          slightlyDryLabel: J("custom_mode.slightly_dry"),
          moistLabel: J("custom_mode.moist"),
          wetLabel: J("custom_mode.wet")
        }
      )
    ] }),
    o !== Le.MAPPING && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.mop_washing_frequency_title") }),
      /* @__PURE__ */ r.jsx(
        b1,
        {
          selfCleanFrequency: p,
          selfCleanFrequencyList: w,
          selfCleanArea: f,
          selfCleanAreaMin: k,
          selfCleanAreaMax: E,
          selfCleanTime: S,
          selfCleanTimeMin: D,
          selfCleanTimeMax: X,
          onSelectFrequency: L,
          onChangeArea: q,
          onChangeTime: q,
          frequencyEntityId: Y.selfCleanFrequency,
          areaEntityId: Y.selfCleanArea,
          timeEntityId: Y.selfCleanTime,
          t: J
        }
      )
    ] }),
    o !== Le.MAPPING && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__section-header", children: /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.route_title") }) }),
      /* @__PURE__ */ r.jsx(
        y1,
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
function S1({ opened: o, onClose: c, entity: s, hass: u, language: g }) {
  const { t: m } = Ve(g), h = ug(s.entity_id), { setSelectOption: b, setSwitch: v } = Jr(u), f = Ir(h), p = (ve, Ne) => {
    const x = s.attributes[ve];
    return Array.isArray(x) ? x : Ne;
  }, w = je(s.attributes.cleangenius, va.OFF), [k, E] = O.useState(w !== va.OFF), S = je(s.attributes.cleaning_mode, Ct.CLEANING_MODE), D = je(s.attributes.cleangenius_mode, Ct.CLEANGENIUS_MODE), X = je(s.attributes.suction_level, Ct.SUCTION_LEVEL), U = je(s.attributes.wetness_level, Ct.WETNESS_LEVEL), $ = je(s.attributes.cleaning_route, Ct.CLEANING_ROUTE), Z = je(s.attributes.max_suction_power, Ct.MAX_SUCTION_POWER), L = je(s.attributes.self_clean_area, Ct.SELF_CLEAN_AREA), ne = je(s.attributes.self_clean_frequency, Ct.SELF_CLEAN_FREQUENCY), q = p("self_clean_frequency_list", ["By area", "By time", "By room"]), Y = je(s.attributes.self_clean_area_min, Ct.SELF_CLEAN_AREA_MIN), J = je(s.attributes.self_clean_area_max, Ct.SELF_CLEAN_AREA_MAX), se = je(s.attributes.previous_self_clean_time, Ct.SELF_CLEAN_TIME), I = je(s.attributes.self_clean_time_min, Ct.SELF_CLEAN_TIME_MIN), re = je(s.attributes.self_clean_time_max, Ct.SELF_CLEAN_TIME_MAX), ge = je(s.attributes.mop_pad_humidity, Ct.MOP_PAD_HUMIDITY), Ee = [
    { value: ki.CLEANGENIUS, label: m("cleaning_mode.clean_genius") },
    { value: ki.CUSTOM, label: m("cleaning_mode.custom") }
  ], ke = (() => {
    const ve = p("cleaning_mode_list", [
      "Sweeping",
      "Mopping",
      "Sweeping and mopping",
      "Mopping after sweeping"
    ]);
    return ve.includes("Mapping") ? ve : [...ve, "Mapping"];
  })(), xe = p("cleangenius_mode_list", ["Vacuum and mop", "Mop after vacuum"]), R = p("suction_level_list", ["Quiet", "Standard", "Strong", "Turbo"]), te = p("cleaning_route_list", ["Quick", "Standard", "Intensive", "Deep"]), F = (ve) => {
    const Ne = ve === ki.CLEANGENIUS;
    E(Ne), v(f.customMoppingMode, !Ne), Ne ? b(
      f.cleangenius,
      ts(va.ROUTINE_CLEANING)
    ) : b(
      f.cleangenius,
      ts(va.OFF)
    );
  };
  return /* @__PURE__ */ r.jsx(Oi, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal", children: [
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__header", children: /* @__PURE__ */ r.jsx(
      m1,
      {
        value: k ? ki.CLEANGENIUS : ki.CUSTOM,
        onChange: F,
        options: Ee
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__content-wrapper", children: k ? /* @__PURE__ */ r.jsx(
      _1,
      {
        cleangeniusMode: D,
        cleangeniusModeList: xe,
        cleangenius: w,
        baseEntityId: h,
        hass: u,
        language: g
      }
    ) : /* @__PURE__ */ r.jsx(
      x1,
      {
        cleaningMode: S,
        cleaningModeList: ke,
        suctionLevel: X,
        suctionLevelList: R,
        wetnessLevel: U,
        mopPadHumidity: ge,
        cleaningRoute: $,
        cleaningRouteList: te,
        maxSuctionPower: Z,
        selfCleanArea: L,
        selfCleanFrequency: ne,
        selfCleanFrequencyList: q,
        selfCleanAreaMin: Y,
        selfCleanAreaMax: J,
        selfCleanTime: se,
        selfCleanTimeMin: I,
        selfCleanTimeMax: re,
        baseEntityId: h,
        hass: u,
        language: g
      }
    ) })
  ] }) });
}
function w1({ opened: o, onClose: c, entity: s, hass: u, language: g }) {
  const { t: m } = Ve(g), h = s.attributes.shortcuts || {}, b = Object.entries(h).map(([f, p]) => ({
    id: parseInt(f),
    ...p
  })), v = (f) => {
    u.callService("dreame_vacuum", "vacuum_start_shortcut", {
      entity_id: s.entity_id,
      shortcut_id: f
    }), c();
  };
  return /* @__PURE__ */ r.jsx(Oi, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsxs("div", { className: "shortcuts-modal", children: [
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
          /* @__PURE__ */ r.jsx("span", { className: "shortcuts-modal__item-icon", children: ib }),
          /* @__PURE__ */ r.jsx("span", { className: "shortcuts-modal__item-name", children: f.name })
        ]
      },
      f.id
    )) })
  ] }) });
}
const z1 = [
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
  const { t: u } = Ve(s), g = c.attributes, m = c.entity_id.split(".")[1] ?? "", h = O.useCallback(
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
  return /* @__PURE__ */ r.jsx("div", { className: "ai-detection-section", children: z1.map((v) => /* @__PURE__ */ r.jsxs("div", { className: "ai-detection-section__item", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "ai-detection-section__info", children: [
      /* @__PURE__ */ r.jsx("span", { className: "ai-detection-section__label", children: u(v.labelKey) }),
      /* @__PURE__ */ r.jsx("span", { className: "ai-detection-section__description", children: u(v.descriptionKey) })
    ] }),
    /* @__PURE__ */ r.jsx(
      ji,
      {
        checked: b(v.attributeKey),
        onChange: (f) => h(v.switchEntitySuffix, f)
      }
    )
  ] }, v.key)) });
}
const N1 = [
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
], M1 = ["low", "medium", "high"];
function k1({ hass: o, entity: c, language: s }) {
  const { t: u } = Ve(s), g = c.attributes, m = c.entity_id.split(".")[1] ?? "", h = O.useCallback(
    (w, k) => {
      const E = `switch.${m}_${w}`;
      o.callService("switch", k ? "turn_on" : "turn_off", {
        entity_id: E
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
  }, f = je(g.carpet_sensitivity, "medium"), p = fg(f) ? f.toLowerCase() : "medium";
  return /* @__PURE__ */ r.jsxs("div", { className: "carpet-settings-section", children: [
    N1.map((w) => /* @__PURE__ */ r.jsxs("div", { className: "carpet-settings-section__item", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "carpet-settings-section__info", children: [
        /* @__PURE__ */ r.jsx("span", { className: "carpet-settings-section__label", children: u(w.labelKey) }),
        /* @__PURE__ */ r.jsx("span", { className: "carpet-settings-section__description", children: u(w.descriptionKey) })
      ] }),
      /* @__PURE__ */ r.jsx(
        ji,
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
          children: M1.map((w) => /* @__PURE__ */ r.jsx("option", { value: w, children: u(`settings.carpet.sensitivity_${w}`) }, w))
        }
      )
    ] })
  ] });
}
const A1 = [
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
function C1({ hass: o, entity: c, language: s }) {
  const { t: u } = Ve(s), g = c.attributes, m = O.useCallback(
    (b) => {
      o.callService("dreame_vacuum", b, {
        entity_id: c.entity_id
      });
    },
    [o, c.entity_id]
  ), h = (b) => b >= 50 ? "var(--consumable-good, #34c759)" : b >= 20 ? "var(--consumable-warning, #ff9500)" : "var(--consumable-critical, #ff3b30)";
  return /* @__PURE__ */ r.jsx("div", { className: "consumables-section", children: A1.map((b) => {
    const v = je(g[b.percentKey], 0), f = je(g[b.hoursKey], 0), p = h(v);
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
  const { t: s } = Ve(c), u = o.attributes, g = u.firmware_version, m = fg(g) || ua(g) ? g : "-", h = je(u.total_cleaned_area, 0), b = je(u.total_cleaning_time, 0), v = je(u.cleaning_count, 0), f = u.ap, p = f?.ssid ?? "-", w = f?.rssi ?? "-", k = f?.ip ?? "-", E = [
    { labelKey: "settings.device_info.firmware", value: m },
    { labelKey: "settings.device_info.total_area", value: h, unitKey: "units.square_meters" },
    { labelKey: "settings.device_info.total_time", value: b, unitKey: "units.minutes" },
    { labelKey: "settings.device_info.total_cleans", value: v },
    { labelKey: "settings.device_info.wifi_ssid", value: p },
    { labelKey: "settings.device_info.wifi_signal", value: w, unitKey: "units.decibels" },
    { labelKey: "settings.device_info.ip_address", value: k }
  ];
  return /* @__PURE__ */ r.jsx("div", { className: "device-info-section", children: E.map((S) => /* @__PURE__ */ r.jsxs("div", { className: "device-info-section__item", children: [
    /* @__PURE__ */ r.jsx("span", { className: "device-info-section__label", children: s(S.labelKey) }),
    /* @__PURE__ */ r.jsxs("span", { className: "device-info-section__value", children: [
      S.value,
      S.unitKey && ` ${s(S.unitKey)}`
    ] })
  ] }, S.labelKey)) });
}
function j1({ hass: o, entity: c, config: s, language: u }) {
  const { t: g } = Ve(u), m = c.attributes, h = O.useMemo(() => m.maps ?? [], [m.maps]), b = m.selected_map_id ?? m.selected_map, f = `select.${s.entity?.split(".")[1] ?? ""}_selected_map`, p = O.useCallback(
    (w) => {
      const k = h.find((E) => E.id === w);
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
const O1 = [
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
function R1({ hass: o, entity: c, language: s }) {
  const { t: u } = Ve(s), g = c.attributes, m = c.entity_id.split(".")[1] ?? "", h = O.useCallback(
    (v, f) => {
      const p = `switch.${m}_${v}`;
      o.callService("switch", f ? "turn_on" : "turn_off", {
        entity_id: p
      });
    },
    [o, m]
  ), b = (v) => {
    const f = g[v];
    return Wr(f) ? f : ua(f) ? f > 0 : Cb(f) ? f.enabled ?? !1 : !1;
  };
  return /* @__PURE__ */ r.jsx("div", { className: "quick-settings-section", children: O1.map((v) => /* @__PURE__ */ r.jsxs("div", { className: "quick-settings-section__item", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "quick-settings-section__info", children: [
      /* @__PURE__ */ r.jsx("span", { className: "quick-settings-section__label", children: u(v.labelKey) }),
      /* @__PURE__ */ r.jsx("span", { className: "quick-settings-section__description", children: u(v.descriptionKey) })
    ] }),
    /* @__PURE__ */ r.jsx(
      ji,
      {
        checked: b(v.attributeKey),
        onChange: (f) => h(v.switchEntitySuffix, f)
      }
    )
  ] }, v.key)) });
}
const kr = 0, r_ = 100;
function D1({ hass: o, entity: c, language: s }) {
  const { t: u } = Ve(s), g = c.entity_id.split(".")[1] ?? "", m = je(c.attributes.volume, 50), [h, b] = O.useState(m), v = (h - kr) / (r_ - kr) * 100, f = 20, p = `calc(${v}% + ${f / 2 - v * f / 100}px)`, w = (D) => {
    b(parseInt(D.target.value));
  }, k = O.useCallback(() => {
    if (h !== m) {
      const D = `number.${g}_volume`;
      o.callService("number", "set_value", {
        entity_id: D,
        value: h
      });
    }
  }, [o, g, h, m]), E = O.useCallback(() => {
    o.callService("vacuum", "locate", {
      entity_id: c.entity_id
    });
  }, [o, c.entity_id]), S = h === 0;
  return /* @__PURE__ */ r.jsxs("div", { className: "volume-section", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "volume-section__control", children: [
      /* @__PURE__ */ r.jsx("div", { className: "volume-section__icon", children: S ? /* @__PURE__ */ r.jsx(Zv, { size: 20 }) : /* @__PURE__ */ r.jsx(tg, { size: 20 }) }),
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
    /* @__PURE__ */ r.jsxs("button", { className: "volume-section__test-button", onClick: E, type: "button", children: [
      /* @__PURE__ */ r.jsx(F_, { size: 16 }),
      /* @__PURE__ */ r.jsx("span", { children: u("settings.volume.test_sound") })
    ] })
  ] });
}
function U1({ opened: o, onClose: c, hass: s, entity: u, config: g, language: m }) {
  const { t: h } = Ve(m);
  return /* @__PURE__ */ r.jsx(Oi, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsxs("div", { className: "settings-panel", children: [
    /* @__PURE__ */ r.jsx("h2", { className: "settings-panel__title", children: h("settings.title") }),
    /* @__PURE__ */ r.jsx("div", { className: "settings-panel__scroll-wrapper", children: /* @__PURE__ */ r.jsxs("div", { className: "settings-panel__sections", children: [
      /* @__PURE__ */ r.jsx(Kt, { title: h("settings.consumables.title"), icon: /* @__PURE__ */ r.jsx(V0, {}), defaultOpen: !0, children: /* @__PURE__ */ r.jsx(C1, { hass: s, entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Kt, { title: h("settings.device_info.title"), icon: /* @__PURE__ */ r.jsx(W_, {}), children: /* @__PURE__ */ r.jsx(T1, { entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Kt, { title: h("settings.map_management.title"), icon: /* @__PURE__ */ r.jsx(os, {}), children: /* @__PURE__ */ r.jsx(j1, { hass: s, entity: u, config: g, language: m }) }),
      /* @__PURE__ */ r.jsx(Kt, { title: h("settings.volume.title"), icon: /* @__PURE__ */ r.jsx(tg, {}), children: /* @__PURE__ */ r.jsx(D1, { hass: s, entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Kt, { title: h("settings.quick_settings.title"), icon: /* @__PURE__ */ r.jsx(P_, {}), children: /* @__PURE__ */ r.jsx(R1, { hass: s, entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Kt, { title: h("settings.carpet.title"), icon: /* @__PURE__ */ r.jsx(I0, {}), children: /* @__PURE__ */ r.jsx(k1, { hass: s, entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Kt, { title: h("settings.ai_detection.title"), icon: /* @__PURE__ */ r.jsx(w0, {}), children: /* @__PURE__ */ r.jsx(E1, { hass: s, entity: u, language: m }) })
    ] }) })
  ] }) });
}
function B1({ selectedRooms: o, language: c }) {
  const { t: s } = Ve(c);
  if (o.size === 0)
    return null;
  const u = Array.from(o.values()).join(", ");
  return /* @__PURE__ */ r.jsxs("div", { className: "room-selection-display", children: [
    /* @__PURE__ */ r.jsx("span", { className: "room-selection-display__label", children: s("room_display.selected_label") }),
    /* @__PURE__ */ r.jsx("span", { className: "room-selection-display__rooms", children: u })
  ] });
}
function L1({ hass: o, config: c }) {
  const s = o.states[c.entity], u = c.theme || "light", g = c.language || "en", { t: m } = Ve(g), h = O.useRef(null), b = gg({
    themeType: u,
    customThemeConfig: c.custom_theme,
    containerRef: h
  }), [v, f] = O.useState(null), {
    selectedMode: p,
    selectedRooms: w,
    selectedZone: k,
    modalOpened: E,
    shortcutsModalOpened: S,
    settingsPanelOpened: D,
    setSelectedZone: X,
    setModalOpened: U,
    setShortcutsModalOpened: $,
    setSettingsPanelOpened: Z,
    handleModeChange: L,
    handleRoomToggle: ne
  } = dg({ defaultMode: c.default_mode }), { toast: q, showToast: Y, hideToast: J } = mg(), { handlePause: se, handleStop: I, handleDock: re, handleClean: ge } = Db({
    hass: o,
    entityId: c.entity,
    mapEntityId: c.map_entity || `camera.${c.entity.split(".")[1]}_map`,
    onSuccess: Y,
    language: g
  }), Ee = (x, H) => {
    const ee = w.has(x);
    ne(x, H), Y(
      ee ? m("toast.deselected_room", { name: H }) : m("toast.selected_room", { name: H })
    );
  }, ke = () => {
    ge(p, w, k, v?.width, v?.height);
  }, xe = () => {
    o.callService("vacuum", "start", { entity_id: c.entity }), Y(m("toast.resuming"));
  };
  if (!s)
    return /* @__PURE__ */ r.jsx("div", { className: "dreame-vacuum-card__error", children: m("errors.entity_not_found", { entity: c.entity }) });
  const R = Fb(s, c);
  if (!R)
    return /* @__PURE__ */ r.jsx("div", { className: "dreame-vacuum-card__error", children: m("errors.failed_to_load") });
  const { deviceName: te, mapEntityId: F, rooms: ve } = R, Ne = Pb(s, p);
  return /* @__PURE__ */ r.jsxs("div", { ref: h, className: `dreame-vacuum-card dreame-vacuum-card--${b.name}`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "dreame-vacuum-card__container", children: [
      /* @__PURE__ */ r.jsx(
        a1,
        {
          entity: s,
          deviceName: te,
          onSettingsClick: () => Z(!0),
          language: g
        }
      ),
      /* @__PURE__ */ r.jsx(
        c1,
        {
          hass: o,
          mapEntityId: F,
          selectedMode: p,
          selectedRooms: w,
          rooms: ve,
          onRoomToggle: Ee,
          zone: k,
          onZoneChange: X,
          onImageDimensionsChange: (x, H) => f({ width: x, height: H }),
          language: g,
          isStarted: je(s.attributes.started, !1),
          defaultRoomView: c.default_room_view
        }
      ),
      /* @__PURE__ */ r.jsx(
        n1,
        {
          cleanGeniusMode: je(s.attributes.cleangenius_mode, ""),
          cleaningMode: je(s.attributes.cleaning_mode, "Sweeping and mopping"),
          cleangenius: je(s.attributes.cleangenius, "Off"),
          onClick: () => U(!0),
          onShortcutsClick: () => $(!0),
          disabled: je(s.attributes.started, !1),
          language: g
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "dreame-vacuum-card__controls", children: [
        p === "room" && /* @__PURE__ */ r.jsx(B1, { selectedRooms: w, language: g }),
        /* @__PURE__ */ r.jsx(
          pg,
          {
            selectedMode: Ne,
            onModeChange: L,
            disabled: je(s.attributes.started, !1),
            language: g
          }
        ),
        /* @__PURE__ */ r.jsx(
          hg,
          {
            selectedMode: p,
            selectedRoomsCount: w.size,
            isRunning: je(s.attributes.running, !1),
            isPaused: je(s.attributes.paused, !1),
            isDocked: s.state === "docked" || je(s.attributes.docked, !1),
            onClean: ke,
            onPause: se,
            onResume: xe,
            onStop: I,
            onDock: re,
            language: g
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      S1,
      {
        opened: E,
        onClose: () => U(!1),
        entity: s,
        hass: o,
        language: g
      }
    ),
    /* @__PURE__ */ r.jsx(
      w1,
      {
        opened: S,
        onClose: () => $(!1),
        entity: s,
        hass: o,
        language: g
      }
    ),
    /* @__PURE__ */ r.jsx(
      U1,
      {
        opened: D,
        onClose: () => Z(!1),
        hass: o,
        entity: s,
        config: c,
        language: g
      }
    ),
    q && /* @__PURE__ */ r.jsx(vg, { message: q, onClose: J })
  ] });
}
function G1(o) {
  const c = o / 1e4;
  return `${c < 10 ? c.toFixed(1) : Math.round(c)} м²`;
}
function H1({
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
  const { t: f } = Ve(v), p = {
    docked: f("valetudo.status.docked"),
    cleaning: f("valetudo.status.cleaning"),
    paused: f("valetudo.status.paused"),
    returning: f("valetudo.status.returning"),
    idle: f("valetudo.status.idle"),
    error: f("valetudo.status.error")
  }, w = (Z) => {
    const L = Math.floor(Z / 60), ne = Math.floor(L / 60), q = L % 60;
    return ne > 0 ? f("valetudo.time.hours_minutes", { h: String(ne), m: String(q) }) : f("valetudo.time.minutes", { m: String(L) });
  }, k = c ? Number(c.state) : null, E = p[o.state] ?? o.state, S = ["cleaning", "paused", "returning"].includes(o.state), D = s ? Number(s.state) : NaN, X = u ? Number(u.state) : NaN, U = S && !isNaN(D) && !isNaN(X) && D > 0, $ = () => k === null || isNaN(k) ? null : k >= 80 ? ig : k >= 60 ? lg : k >= 20 ? ng : ag;
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
          /* @__PURE__ */ r.jsx("span", { style: { fontSize: "0.6em", opacity: 0.45, fontWeight: 400 }, children: "v1.10.2" })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: "header__status", children: E })
      ] }),
      b && /* @__PURE__ */ r.jsx("button", { className: "header__settings-btn", onClick: b, type: "button", "aria-label": "Settings", children: /* @__PURE__ */ r.jsx(eg, {}) })
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
          /* @__PURE__ */ r.jsx("span", { className: "header__stat-icon header__stat-icon--area", children: /* @__PURE__ */ r.jsx(Xr, { size: 16 }) }),
          /* @__PURE__ */ r.jsx("span", { className: "header__stat-value", children: G1(D) })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "header__stat", children: [
          /* @__PURE__ */ r.jsx("span", { className: "header__stat-icon header__stat-icon--cleaning-time", children: /* @__PURE__ */ r.jsx(R0, { size: 16 }) }),
          /* @__PURE__ */ r.jsx("span", { className: "header__stat-value", children: w(X) })
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
], Ar = "rgba(120, 164, 193, 0.6)", q1 = "rgba( 50,  50,  50, 1)", V1 = "rgba(255, 255, 255, 0.85)", Y1 = "#4CAF50", Z1 = "#2196F3", _e = 3;
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
function K1(o) {
  const c = /* @__PURE__ */ new Map();
  let s = 0;
  for (const u of o)
    u.type === "segment" && u.metaData.segmentId && (c.has(u.metaData.segmentId) || (c.set(u.metaData.segmentId, u_[s % u_.length]), s++));
  return c;
}
function Q1({
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
  const { t: E } = Ve(k), S = O.useRef(null), D = O.useRef(null), X = O.useRef({ bb: { minX: 0, minY: 0 }, pixelSize: 50 }), U = O.useRef(/* @__PURE__ */ new Map()), [$, Z] = O.useState(1), [L, ne] = O.useState({ x: 0, y: 0 }), q = O.useRef(null), Y = O.useRef(null), J = O.useRef(!1), se = O.useRef(/* @__PURE__ */ new Map()), [I, re] = O.useState(null), [ge, Ee] = O.useState(null), ke = O.useRef(!1), [xe, R] = O.useState(null), te = O.useRef(null), [F, ve] = O.useState(null), Ne = O.useRef(null), x = O.useRef(null), H = O.useRef(null), ee = O.useMemo(() => window.matchMedia("(pointer: coarse)").matches, []), ce = O.useCallback((T, G) => {
    const { bb: W, pixelSize: le } = X.current;
    return {
      x: (T / _e + W.minX) * le,
      y: (G / _e + W.minY) * le
    };
  }, []), ye = O.useCallback((T, G) => {
    const { bb: W, pixelSize: le } = X.current;
    return {
      x: (T / le - W.minX) * _e,
      y: (G / le - W.minY) * _e
    };
  }, []), pe = O.useCallback(
    (T, G) => {
      const W = D.current, le = S.current;
      if (!W || !le) return { x: 0, y: 0 };
      const fe = W.getBoundingClientRect(), ze = (T - fe.left - fe.width / 2 - L.x) / $ + fe.width / 2, M = (G - fe.top - fe.height / 2 - L.y) / $ + fe.height / 2, We = fe.width, ae = le.width / We;
      return { x: ze * ae, y: M * ae };
    },
    [$, L]
  );
  O.useEffect(() => {
    Z(1), ne({ x: 0, y: 0 }), R(null), ve(null), H.current = null;
  }, [c]), O.useEffect(() => {
    ve(null), H.current = null;
  }, [h?.tool]), O.useEffect(() => {
    if (c === "zone" && ee) {
      const T = S.current;
      if (!T) return;
      const G = T.width * 0.3, W = T.height * 0.3, le = (T.width - G) / 2, fe = (T.height - W) / 2;
      R({ x: le, y: fe, w: G, h: W });
    } else
      R(null);
  }, [c, ee]), O.useEffect(() => {
    if (xe === null) return;
    const T = ce(xe.x, xe.y), G = ce(xe.x + xe.w, xe.y + xe.h);
    g?.({
      x1: Math.round(Math.min(T.x, G.x)),
      y1: Math.round(Math.min(T.y, G.y)),
      x2: Math.round(Math.max(T.x, G.x)),
      y2: Math.round(Math.max(T.y, G.y))
    });
  }, [xe, ce, g]), O.useEffect(() => {
    const T = S.current;
    if (!T) return;
    const G = X1(o), W = o.pixelSize || 50;
    X.current = { bb: G, pixelSize: W };
    const le = /* @__PURE__ */ new Map();
    for (const ae of o.layers)
      if (ae.type === "segment" && ae.metaData.segmentId) {
        const P = parseInt(ae.metaData.segmentId, 10);
        for (let ie = 0; ie < ae.pixels.length; ie += 2)
          le.set(`${ae.pixels[ie]},${ae.pixels[ie + 1]}`, P);
      }
    U.current = le;
    const fe = (G.maxX - G.minX + 2) * _e, ze = (G.maxY - G.minY + 2) * _e;
    T.width = fe, T.height = ze;
    const M = T.getContext("2d");
    if (!M) return;
    M.clearRect(0, 0, fe, ze);
    const We = K1(o.layers), yt = (ae) => parseInt(ae, 10);
    for (const ae of o.layers)
      ae.type === "floor" && Cr(M, ae, Ar, G.minX, G.minY);
    for (const ae of o.layers)
      if (ae.type === "segment") {
        const P = ae.metaData.segmentId, ie = P ? We.get(P) ?? Ar : Ar, ue = (P && s && s.size > 0 ? s.has(yt(P)) : !0) ? ie : ie.replace(/[\d.]+\)$/, "0.35)");
        Cr(M, ae, ue, G.minX, G.minY);
      }
    for (const ae of o.layers)
      ae.type === "wall" && Cr(M, ae, q1, G.minX, G.minY);
    for (const ae of o.entities)
      if (!(ae.type !== "path" && ae.type !== "predicted_path")) {
        M.beginPath(), M.strokeStyle = ae.type === "predicted_path" ? "rgba(255,255,255,0.4)" : V1, M.lineWidth = _e * 1.5, M.lineCap = "round", M.lineJoin = "round", M.setLineDash(ae.type === "predicted_path" ? [4, 3] : []);
        for (let P = 0; P < ae.points.length; P += 2) {
          const ie = (ae.points[P] / W - G.minX) * _e, oe = (ae.points[P + 1] / W - G.minY) * _e;
          P === 0 ? M.moveTo(ie, oe) : M.lineTo(ie, oe);
        }
        M.stroke(), M.lineCap = "butt", M.lineJoin = "miter", M.setLineDash([]);
      }
    for (const ae of o.entities) {
      if (ae.type !== "charger_location" || ae.points.length < 2) continue;
      const P = (ae.points[0] / W - G.minX) * _e, ie = (ae.points[1] / W - G.minY) * _e, oe = _e * 4;
      M.save(), M.shadowColor = "rgba(0,0,0,0.5)", M.shadowBlur = _e * 2, M.beginPath(), M.arc(P, ie, oe, 0, 2 * Math.PI), M.fillStyle = Y1, M.fill(), M.shadowColor = "transparent", M.shadowBlur = 0, M.strokeStyle = "#fff", M.lineWidth = _e * 0.7, M.stroke(), M.beginPath(), M.moveTo(P + oe * 0.15, ie - oe * 0.65), M.lineTo(P - oe * 0.2, ie + oe * 0.05), M.lineTo(P + oe * 0.05, ie + oe * 0.05), M.lineTo(P - oe * 0.15, ie + oe * 0.65), M.lineTo(P + oe * 0.2, ie - oe * 0.05), M.lineTo(P - oe * 0.05, ie - oe * 0.05), M.closePath(), M.fillStyle = "#fff", M.fill(), M.restore();
    }
    for (const ae of o.entities) {
      if (ae.type !== "robot_position" || ae.points.length < 2) continue;
      const P = (ae.points[0] / W - G.minX) * _e, ie = (ae.points[1] / W - G.minY) * _e, oe = (ae.metaData.angle ?? 0) * (Math.PI / 180), ue = _e * 6;
      M.save(), M.translate(P, ie), M.rotate(oe), M.shadowColor = "rgba(0,0,0,0.6)", M.shadowBlur = _e * 4, M.beginPath(), M.arc(0, 0, ue, 0, 2 * Math.PI), M.fillStyle = Z1, M.fill(), M.shadowColor = "transparent", M.shadowBlur = 0, M.strokeStyle = "#fff", M.lineWidth = _e * 0.9, M.stroke(), M.beginPath(), M.moveTo(0, -ue * 0.62), M.lineTo(ue * 0.38, ue * 0.42), M.lineTo(0, ue * 0.18), M.lineTo(-ue * 0.38, ue * 0.42), M.closePath(), M.fillStyle = "#fff", M.fill(), M.restore();
    }
    for (const ae of o.entities)
      if (!(ae.type !== "active_zone" || ae.points.length < 8)) {
        M.beginPath();
        for (let P = 0; P < ae.points.length; P += 2) {
          const ie = (ae.points[P] / W - G.minX) * _e, oe = (ae.points[P + 1] / W - G.minY) * _e;
          P === 0 ? M.moveTo(ie, oe) : M.lineTo(ie, oe);
        }
        M.closePath(), M.fillStyle = "rgba(255, 152, 0, 0.22)", M.fill(), M.strokeStyle = "rgba(255, 152, 0, 0.9)", M.lineWidth = _e, M.setLineDash([6, 3]), M.stroke(), M.setLineDash([]);
      }
    if (u && !ee) {
      const ae = ye(u.x1, u.y1), P = ye(u.x2, u.y2), ie = Math.min(ae.x, P.x), oe = Math.min(ae.y, P.y), ue = Math.abs(P.x - ae.x), Ae = Math.abs(P.y - ae.y);
      M.fillStyle = "rgba(255, 152, 0, 0.25)", M.fillRect(ie, oe, ue, Ae), M.strokeStyle = "rgba(255, 152, 0, 0.9)", M.lineWidth = _e, M.setLineDash([6, 3]), M.strokeRect(ie, oe, ue, Ae), M.setLineDash([]);
    }
    if (b) {
      const ae = (P, ie) => ({
        x: (P / W - G.minX) * _e,
        y: (ie / W - G.minY) * _e
      });
      for (const P of b.walls) {
        const ie = ae(P.pA.x, P.pA.y), oe = ae(P.pB.x, P.pB.y);
        M.beginPath(), M.moveTo(ie.x, ie.y), M.lineTo(oe.x, oe.y), M.strokeStyle = "rgba(244, 67, 54, 0.6)", M.lineWidth = _e * 1.2, M.setLineDash([]), M.lineCap = "round", M.stroke(), M.lineCap = "butt";
      }
      for (const P of b.zones) {
        const ie = [P.pA, P.pB, P.pC, P.pD].map((ue) => ae(ue.x, ue.y));
        M.beginPath(), M.moveTo(ie[0].x, ie[0].y);
        for (let ue = 1; ue < ie.length; ue++) M.lineTo(ie[ue].x, ie[ue].y);
        M.closePath();
        const oe = P.type === "mop";
        M.fillStyle = oe ? "rgba(33,150,243,0.1)" : "rgba(244,67,54,0.1)", M.fill(), M.strokeStyle = oe ? "rgba(33,150,243,0.5)" : "rgba(244,67,54,0.5)", M.lineWidth = _e, M.setLineDash([5, 3]), M.stroke(), M.setLineDash([]);
      }
    } else if (c !== "restrictions")
      for (const ae of o.entities) {
        if (ae.type === "virtual_wall" && ae.points.length >= 4) {
          const P = (ae.points[0] / W - G.minX) * _e, ie = (ae.points[1] / W - G.minY) * _e, oe = (ae.points[2] / W - G.minX) * _e, ue = (ae.points[3] / W - G.minY) * _e;
          M.beginPath(), M.moveTo(P, ie), M.lineTo(oe, ue), M.strokeStyle = "rgba(244, 67, 54, 0.6)", M.lineWidth = _e * 1.2, M.setLineDash([]), M.lineCap = "round", M.stroke(), M.lineCap = "butt";
        }
        if ((ae.type === "no_go_area" || ae.type === "no_mop_area") && ae.points.length >= 8) {
          const P = ae.type === "no_mop_area", ie = P ? "rgba(33, 150, 243, 0.1)" : "rgba(244, 67, 54, 0.1)", oe = P ? "rgba(33, 150, 243, 0.5)" : "rgba(244, 67, 54, 0.5)";
          M.beginPath();
          for (let ue = 0; ue < ae.points.length; ue += 2) {
            const Ae = (ae.points[ue] / W - G.minX) * _e, nt = (ae.points[ue + 1] / W - G.minY) * _e;
            ue === 0 ? M.moveTo(Ae, nt) : M.lineTo(Ae, nt);
          }
          M.closePath(), M.fillStyle = ie, M.fill(), M.strokeStyle = oe, M.lineWidth = _e, M.setLineDash([5, 3]), M.stroke(), M.setLineDash([]);
        }
      }
    if (c === "restrictions" && h) {
      const { bb: ae, pixelSize: P } = X.current, ie = (Ae, nt) => ({
        x: (Ae / P - ae.minX) * _e,
        y: (nt / P - ae.minY) * _e
      }), oe = (Ae, nt) => {
        const _t = ie(Ae.pA.x, Ae.pA.y), kt = ie(Ae.pB.x, Ae.pB.y);
        M.beginPath(), M.moveTo(_t.x, _t.y), M.lineTo(kt.x, kt.y), M.strokeStyle = nt ? "#ff9800" : "rgba(244,67,54,1)", M.lineWidth = nt ? _e * 3 : _e * 2, M.setLineDash([]), M.lineCap = "round", M.stroke(), M.lineCap = "butt";
        for (const Ge of [_t, kt])
          M.beginPath(), M.arc(Ge.x, Ge.y, nt ? _e * 2.5 : _e * 1.5, 0, 2 * Math.PI), M.fillStyle = nt ? "#ff9800" : "rgba(244,67,54,0.9)", M.fill();
      }, ue = (Ae, nt) => {
        const _t = [Ae.pA, Ae.pB, Ae.pC, Ae.pD].map((Ge) => ie(Ge.x, Ge.y));
        M.beginPath(), M.moveTo(_t[0].x, _t[0].y);
        for (let Ge = 1; Ge < _t.length; Ge++) M.lineTo(_t[Ge].x, _t[Ge].y);
        M.closePath();
        const kt = Ae.type === "mop";
        nt ? (M.fillStyle = "rgba(255,152,0,0.25)", M.strokeStyle = "#ff9800") : (M.fillStyle = kt ? "rgba(33,150,243,0.2)" : "rgba(244,67,54,0.2)", M.strokeStyle = kt ? "rgba(33,150,243,0.9)" : "rgba(244,67,54,0.9)"), M.fill(), M.lineWidth = nt ? _e * 2 : _e * 1.5, M.setLineDash([5, 3]), M.stroke(), M.setLineDash([]);
      };
      for (const Ae of h.walls) oe(Ae, Ae.id === h.selectedId);
      for (const Ae of h.zones) ue(Ae, Ae.id === h.selectedId);
    }
  }, [o, s, u, c, ye, ee, b, h]), O.useEffect(() => {
    const T = D.current;
    if (!T) return;
    const G = (W) => {
      W.preventDefault(), W.stopPropagation();
      const le = W.deltaY < 0 ? 1.15 : 1 / 1.15;
      Z((fe) => {
        const ze = Math.min(8, Math.max(1, fe * le));
        return ze <= 1 && ne({ x: 0, y: 0 }), ze;
      });
    };
    return T.addEventListener("wheel", G, { passive: !1 }), () => T.removeEventListener("wheel", G);
  }, []);
  const we = O.useCallback(
    (T) => {
      if (se.current.set(T.pointerId, { x: T.clientX, y: T.clientY }), se.current.size === 2) {
        ke.current = !1, J.current = !1, re(null), Ee(null);
        return;
      }
      if (T.currentTarget.setPointerCapture(T.pointerId), c === "zone" && !ee) {
        ke.current = !0;
        const G = pe(T.clientX, T.clientY);
        re(G), Ee(G), g?.(null);
        return;
      }
      if (c === "restrictions" && h) {
        if (!ee) {
          const G = h.tool;
          if (G === "wall" || G === "no_go" || G === "no_mop") {
            ke.current = !0;
            const W = pe(T.clientX, T.clientY);
            re(W), Ee(W);
            return;
          }
          return;
        }
        h.tool !== "select" && (H.current = { x: T.clientX, y: T.clientY });
      }
      $ > 1 && (J.current = !0, Y.current = { x: T.clientX, y: T.clientY });
    },
    [c, ee, $, pe, g, h]
  ), at = O.useCallback(
    (T) => {
      if (se.current.set(T.pointerId, { x: T.clientX, y: T.clientY }), se.current.size === 2) {
        const G = Array.from(se.current.values()), W = Math.hypot(G[0].x - G[1].x, G[0].y - G[1].y);
        if (q.current !== null) {
          const le = W / q.current;
          Z((fe) => Math.min(8, Math.max(1, fe * le)));
        }
        q.current = W;
        return;
      }
      if (q.current = null, ke.current && c === "zone" && !ee) {
        Ee(pe(T.clientX, T.clientY));
        return;
      }
      if (ke.current && c === "restrictions" && !ee) {
        Ee(pe(T.clientX, T.clientY));
        return;
      }
      if (J.current && Y.current) {
        const G = T.clientX - Y.current.x, W = T.clientY - Y.current.y;
        Y.current = { x: T.clientX, y: T.clientY };
        const le = D.current;
        if (!le) return;
        const fe = ($ - 1) * le.getBoundingClientRect().width / 2;
        ne((ze) => ({
          x: Math.max(-fe, Math.min(fe, ze.x + G)),
          y: Math.max(-fe, Math.min(fe, ze.y + W))
        }));
      }
    },
    [c, ee, $, pe]
  ), Ie = O.useCallback(
    (T) => {
      if (se.current.delete(T.pointerId), q.current = null, ke.current && c === "zone" && !ee) {
        ke.current = !1;
        const G = pe(T.clientX, T.clientY);
        if (I && (Math.abs(G.x - I.x) > 8 || Math.abs(G.y - I.y) > 8)) {
          const W = ce(I.x, I.y), le = ce(G.x, G.y);
          g?.({
            x1: Math.round(Math.min(W.x, le.x)),
            y1: Math.round(Math.min(W.y, le.y)),
            x2: Math.round(Math.max(W.x, le.x)),
            y2: Math.round(Math.max(W.y, le.y))
          });
        }
        re(null), Ee(null);
        return;
      }
      if (ke.current && c === "restrictions" && h && !ee) {
        ke.current = !1;
        const G = pe(T.clientX, T.clientY);
        if (I && (Math.abs(G.x - I.x) > 5 || Math.abs(G.y - I.y) > 5)) {
          const W = ce(I.x, I.y), le = ce(G.x, G.y), fe = { x: Math.round(W.x), y: Math.round(W.y) }, ze = { x: Math.round(le.x), y: Math.round(le.y) }, M = h.tool === "wall" ? "wall" : "zone";
          v?.(M, fe, ze);
        }
        re(null), Ee(null);
        return;
      }
      if (c === "restrictions" && h && ee && H.current) {
        const G = H.current;
        if (H.current = null, Math.abs(T.clientX - G.x) < 10 && Math.abs(T.clientY - G.y) < 10 && h.tool !== "select") {
          const W = S.current;
          if (W) {
            const le = pe(T.clientX, T.clientY);
            if (h.tool === "wall") {
              const fe = W.width * 0.3;
              ve({
                kind: "wall",
                pA: { x: Math.max(0, le.x - fe / 2), y: le.y },
                pB: { x: Math.min(W.width, le.x + fe / 2), y: le.y }
              });
            } else {
              const fe = W.width * 0.25, ze = W.height * 0.15;
              ve({
                kind: "zone",
                x: Math.max(0, Math.min(W.width - fe, le.x - fe / 2)),
                y: Math.max(0, Math.min(W.height - ze, le.y - ze / 2)),
                w: fe,
                h: ze,
                type: h.tool
              });
            }
          }
        }
      }
      J.current = !1, Y.current = null;
    },
    [c, ee, I, pe, ce, g, h, v]
  ), ba = O.useCallback(
    (T) => {
      if (c === "restrictions" && h && h.tool === "select" && f) {
        const We = pe(T.clientX, T.clientY), { bb: yt, pixelSize: ae } = X.current, P = (oe, ue) => ({
          x: (oe / ae - yt.minX) * _e,
          y: (ue / ae - yt.minY) * _e
        }), ie = _e * 5;
        for (const oe of [...h.walls].reverse()) {
          const ue = P(oe.pA.x, oe.pA.y), Ae = P(oe.pB.x, oe.pB.y), nt = Ae.x - ue.x, _t = Ae.y - ue.y, kt = nt * nt + _t * _t;
          let Ge = kt > 0 ? ((We.x - ue.x) * nt + (We.y - ue.y) * _t) / kt : 0;
          Ge = Math.max(0, Math.min(1, Ge));
          const rs = ue.x + Ge * nt, Ri = ue.y + Ge * _t;
          if (Math.hypot(We.x - rs, We.y - Ri) <= ie) {
            f(oe.id);
            return;
          }
        }
        for (const oe of [...h.zones].reverse()) {
          const ue = [oe.pA, oe.pB, oe.pC, oe.pD].map((Ge) => P(Ge.x, Ge.y)), Ae = Math.min(...ue.map((Ge) => Ge.x)), nt = Math.max(...ue.map((Ge) => Ge.x)), _t = Math.min(...ue.map((Ge) => Ge.y)), kt = Math.max(...ue.map((Ge) => Ge.y));
          if (We.x >= Ae - ie && We.x <= nt + ie && We.y >= _t - ie && We.y <= kt + ie) {
            f(oe.id);
            return;
          }
        }
        f(null);
        return;
      }
      if (c !== "room" || !m || !S.current) return;
      const W = pe(T.clientX, T.clientY), { bb: le } = X.current, fe = Math.floor(W.x / _e) + le.minX, ze = Math.floor(W.y / _e) + le.minY, M = U.current.get(`${fe},${ze}`);
      M !== void 0 && m(M);
    },
    [c, m, pe, h, f]
  ), ya = O.useMemo(() => {
    if (!xe || !S.current) return null;
    const T = S.current, G = T.width, W = T.height;
    return {
      left: `${xe.x / G * 100}%`,
      top: `${xe.y / W * 100}%`,
      width: `${xe.w / G * 100}%`,
      height: `${xe.h / W * 100}%`
    };
  }, [xe]), Va = O.useMemo(() => {
    if (!F || F.kind !== "zone" || !S.current) return null;
    const T = S.current;
    return {
      left: `${F.x / T.width * 100}%`,
      top: `${F.y / T.height * 100}%`,
      width: `${F.w / T.width * 100}%`,
      height: `${F.h / T.height * 100}%`
    };
  }, [F]), bn = O.useMemo(() => {
    if (!F || F.kind !== "wall" || !S.current) return null;
    const T = S.current, { pA: G, pB: W } = F, le = T.width, fe = T.height, ze = (G.x + W.x) / 2, M = (G.y + W.y) / 2;
    return {
      cw: le,
      ch: fe,
      pAStyle: { left: `${G.x / le * 100}%`, top: `${G.y / fe * 100}%` },
      pBStyle: { left: `${W.x / le * 100}%`, top: `${W.y / fe * 100}%` },
      midStyle: { left: `${ze / le * 100}%`, top: `${M / fe * 100}%` }
    };
  }, [F]), pt = O.useCallback(
    (T, G) => {
      G.stopPropagation(), G.currentTarget.setPointerCapture(G.pointerId), xe && (te.current = {
        mode: T,
        startPtr: { x: G.clientX, y: G.clientY },
        startZone: { ...xe }
      });
    },
    [xe]
  ), fa = O.useCallback(
    (T) => {
      if (!te.current || !S.current) return;
      T.stopPropagation();
      const { mode: G, startPtr: W, startZone: le } = te.current, fe = S.current, ze = D.current;
      if (!ze) return;
      const M = ze.getBoundingClientRect(), We = fe.width / M.width / $, yt = (T.clientX - W.x) * We, ae = (T.clientY - W.y) * We;
      R((P) => {
        if (!P) return P;
        const ie = fe.width, oe = fe.height;
        if (G === "move")
          return {
            ...P,
            x: Math.max(0, Math.min(ie - le.w, le.x + yt)),
            y: Math.max(0, Math.min(oe - le.h, le.y + ae))
          };
        {
          const Ae = Math.max(20, Math.min(ie - le.x, le.w + yt)), nt = Math.max(20, Math.min(oe - le.y, le.h + ae));
          return { ...P, w: Ae, h: nt };
        }
      });
    },
    [$]
  ), ia = O.useCallback((T) => {
    T.stopPropagation(), te.current = null;
  }, []), yn = O.useCallback(() => {
    if (!(!F || !v)) {
      if (F.kind === "wall") {
        const T = ce(F.pA.x, F.pA.y), G = ce(F.pB.x, F.pB.y);
        v(
          "wall",
          { x: Math.round(T.x), y: Math.round(T.y) },
          { x: Math.round(G.x), y: Math.round(G.y) }
        );
      } else {
        const T = ce(F.x, F.y), G = ce(F.x + F.w, F.y + F.h);
        v(
          "zone",
          { x: Math.round(T.x), y: Math.round(T.y) },
          { x: Math.round(G.x), y: Math.round(G.y) }
        );
      }
      ve(null);
    }
  }, [F, ce, v]), Ya = O.useCallback(
    (T, G) => {
      G.stopPropagation(), G.currentTarget.setPointerCapture(G.pointerId), !(!F || F.kind !== "zone") && (Ne.current = {
        mode: T,
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
  ), Za = O.useCallback(
    (T) => {
      if (!Ne.current || !S.current) return;
      T.stopPropagation();
      const { mode: G, startPtr: W, startItem: le } = Ne.current, fe = S.current, ze = D.current;
      if (!ze) return;
      const M = ze.getBoundingClientRect(), We = fe.width / M.width / $, yt = (T.clientX - W.x) * We, ae = (T.clientY - W.y) * We;
      ve((P) => {
        if (!P || P.kind !== "zone") return P;
        const ie = fe.width, oe = fe.height;
        if (G === "move")
          return {
            ...P,
            x: Math.max(0, Math.min(ie - le.w, le.x + yt)),
            y: Math.max(0, Math.min(oe - le.h, le.y + ae))
          };
        const ue = 20;
        return {
          ...P,
          w: Math.max(ue, Math.min(ie - le.x, le.w + yt)),
          h: Math.max(ue, Math.min(oe - le.y, le.h + ae))
        };
      });
    },
    [$]
  ), lt = O.useCallback((T) => {
    T.stopPropagation(), Ne.current = null;
  }, []), Mt = O.useCallback(
    (T, G) => {
      G.stopPropagation(), G.currentTarget.setPointerCapture(G.pointerId), !(!F || F.kind !== "wall") && (x.current = {
        endpoint: T,
        startPtr: { x: G.clientX, y: G.clientY },
        startPoint: { ...F[T] }
      });
    },
    [F]
  ), Zn = O.useCallback(
    (T) => {
      if (!x.current || !S.current) return;
      T.stopPropagation();
      const { endpoint: G, startPtr: W, startPoint: le } = x.current, fe = S.current, ze = D.current;
      if (!ze) return;
      const M = ze.getBoundingClientRect(), We = fe.width / M.width / $, yt = (T.clientX - W.x) * We, ae = (T.clientY - W.y) * We;
      ve((P) => !P || P.kind !== "wall" ? P : {
        ...P,
        [G]: {
          x: Math.max(0, Math.min(fe.width, le.x + yt)),
          y: Math.max(0, Math.min(fe.height, le.y + ae))
        }
      });
    },
    [$]
  ), xa = O.useCallback((T) => {
    T.stopPropagation(), x.current = null;
  }, []);
  let rt = null, xn = null, bt = null;
  if (I && ge && S.current) {
    const T = S.current.width, G = S.current.height;
    if (c === "zone") {
      const W = Math.min(I.x, ge.x) / T * 100, le = Math.min(I.y, ge.y) / G * 100, fe = Math.abs(ge.x - I.x) / T * 100, ze = Math.abs(ge.y - I.y) / G * 100;
      rt = { left: `${W}%`, top: `${le}%`, width: `${fe}%`, height: `${ze}%` };
    } else if (c === "restrictions" && h) {
      if (h.tool === "wall")
        bt = { x1: I.x, y1: I.y, x2: ge.x, y2: ge.y, cw: T, ch: G };
      else if (h.tool === "no_go" || h.tool === "no_mop") {
        const W = Math.min(I.x, ge.x) / T * 100, le = Math.min(I.y, ge.y) / G * 100, fe = Math.abs(ge.x - I.x) / T * 100, ze = Math.abs(ge.y - I.y) / G * 100;
        xn = { left: `${W}%`, top: `${le}%`, width: `${fe}%`, height: `${ze}%` };
      }
    }
  }
  const Xa = c === "zone", Ka = c === "room" && !!m, Qa = c === "restrictions", Xn = h?.tool ?? "select";
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: D,
      className: `valetudo-map-canvas${Xa ? " valetudo-map-canvas--zone-mode" : ""}${Ka ? " valetudo-map-canvas--room-mode" : ""}${Qa ? ` valetudo-map-canvas--restrictions-${Xn}` : ""}`,
      onClick: ba,
      onPointerDown: we,
      onPointerMove: at,
      onPointerUp: Ie,
      onPointerCancel: Ie,
      children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "valetudo-map-canvas__inner",
            style: { transform: `translate(${L.x}px, ${L.y}px) scale(${$})` },
            children: [
              /* @__PURE__ */ r.jsx("canvas", { ref: S, className: "valetudo-map-canvas__canvas" }),
              rt && /* @__PURE__ */ r.jsx("div", { className: "valetudo-map-canvas__zone-drag", style: rt }),
              xn && /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: `valetudo-map-canvas__restriction-preview valetudo-map-canvas__restriction-preview--${h?.tool}`,
                  style: xn
                }
              ),
              bt && /* @__PURE__ */ r.jsxs(
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
                  viewBox: `0 0 ${bt.cw} ${bt.ch}`,
                  preserveAspectRatio: "none",
                  children: [
                    /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        x1: bt.x1,
                        y1: bt.y1,
                        x2: bt.x2,
                        y2: bt.y2,
                        stroke: "rgba(244,67,54,0.9)",
                        strokeWidth: _e * 2,
                        strokeLinecap: "round"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "circle",
                      {
                        cx: bt.x1,
                        cy: bt.y1,
                        r: _e * 1.5,
                        fill: "rgba(244,67,54,0.9)"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "circle",
                      {
                        cx: bt.x2,
                        cy: bt.y2,
                        r: _e * 1.5,
                        fill: "rgba(244,67,54,0.9)"
                      }
                    )
                  ]
                }
              ),
              Xa && ee && xe && ya && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-map-canvas__widget-zone", style: ya, children: [
                /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: "valetudo-map-canvas__widget-zone-move",
                    onPointerDown: (T) => pt("move", T),
                    onPointerMove: fa,
                    onPointerUp: ia,
                    onPointerCancel: ia
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: "valetudo-map-canvas__widget-zone-resize",
                    onPointerDown: (T) => pt("resize", T),
                    onPointerMove: fa,
                    onPointerUp: ia,
                    onPointerCancel: ia
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    className: "valetudo-map-canvas__widget-zone-delete",
                    onPointerDown: (T) => T.stopPropagation(),
                    onClick: (T) => {
                      T.stopPropagation(), R(null), g?.(null);
                    },
                    type: "button",
                    children: "×"
                  }
                )
              ] }),
              Qa && ee && F?.kind === "zone" && Va && /* @__PURE__ */ r.jsxs(
                "div",
                {
                  className: `valetudo-map-canvas__pending-restriction valetudo-map-canvas__pending-restriction--${F.type}`,
                  style: Va,
                  children: [
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "valetudo-map-canvas__pending-restriction-move",
                        onPointerDown: (T) => Ya("move", T),
                        onPointerMove: Za,
                        onPointerUp: lt,
                        onPointerCancel: lt
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "valetudo-map-canvas__pending-restriction-resize",
                        onPointerDown: (T) => Ya("resize", T),
                        onPointerMove: Za,
                        onPointerUp: lt,
                        onPointerCancel: lt
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        className: "valetudo-map-canvas__pending-restriction-delete",
                        onPointerDown: (T) => T.stopPropagation(),
                        onClick: (T) => {
                          T.stopPropagation(), ve(null);
                        },
                        type: "button",
                        children: "×"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        className: "valetudo-map-canvas__pending-restriction-confirm",
                        onPointerDown: (T) => T.stopPropagation(),
                        onClick: (T) => {
                          T.stopPropagation(), yn();
                        },
                        type: "button",
                        children: "✓"
                      }
                    )
                  ]
                }
              ),
              Qa && ee && F?.kind === "wall" && bn && (() => {
                const T = F, G = bn;
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
                          x1: T.pA.x,
                          y1: T.pA.y,
                          x2: T.pB.x,
                          y2: T.pB.y,
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
                      onPointerDown: (W) => Mt("pA", W),
                      onPointerMove: Zn,
                      onPointerUp: xa,
                      onPointerCancel: xa
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      className: "valetudo-map-canvas__wall-endpoint",
                      style: { position: "absolute", ...G.pBStyle, transform: "translate(-50%, -50%)" },
                      onPointerDown: (W) => Mt("pB", W),
                      onPointerMove: Zn,
                      onPointerUp: xa,
                      onPointerCancel: xa
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
                        W.stopPropagation(), yn();
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
            onPointerDown: (T) => T.stopPropagation(),
            onPointerUp: (T) => T.stopPropagation(),
            children: [
              w && c !== "restrictions" && /* @__PURE__ */ r.jsxs(
                "button",
                {
                  type: "button",
                  className: "valetudo-map-canvas__iterations-btn",
                  title: E("valetudo.cleaning.iterations"),
                  onClick: (T) => {
                    T.stopPropagation(), w(p >= 4 ? 1 : p + 1);
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
                    onClick: (T) => {
                      T.stopPropagation(), Z((G) => Math.min(8, G * 1.5));
                    },
                    children: "+"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (T) => {
                      T.stopPropagation(), Z((G) => {
                        const W = Math.max(1, G / 1.5);
                        return W <= 1 ? (ne({ x: 0, y: 0 }), 1) : W;
                      });
                    },
                    children: "−"
                  }
                ),
                $ > 1 && /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (T) => {
                      T.stopPropagation(), Z(1), ne({ x: 0, y: 0 });
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
const d_ = [og, sg, cg, rg], f_ = [/* @__PURE__ */ r.jsx(is, { size: 20 }), /* @__PURE__ */ r.jsx(I_, { size: 20 }), /* @__PURE__ */ r.jsx(l_, { size: 20 }), /* @__PURE__ */ r.jsx(l_, { size: 20 })];
function m_(o) {
  return o.charAt(0).toUpperCase() + o.slice(1);
}
function $1({
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
  const { t: f } = Ve(b), p = s?.attributes?.options ?? [], w = u?.attributes?.options ?? [], k = s?.state ?? "", E = u?.state ?? "", S = w.length > 0, D = w[0] ?? "", X = S ? E === D ? "dry" : p.indexOf(k) <= 1 ? "wet" : "both" : "dry", [U, $] = O.useState(X), Z = U === "dry" || U === "both", L = (U === "wet" || U === "both") && S, ne = (J) => {
    h || ($(J), J === "dry" && S ? m(D) : J === "wet" ? (p.length > 0 && g(p[0]), w.length > 0 && m(w[w.length - 1])) : J === "both" && (p.length > 0 && g(p[Math.floor(p.length / 2)]), w.length > 1 && m(w[Math.floor(w.length / 2)])));
  }, q = [
    { key: "dry", label: f("valetudo.cleaning.dry"), icon: Kr },
    ...S ? [
      { key: "both", label: f("valetudo.cleaning.both"), icon: Ol },
      { key: "wet", label: f("valetudo.cleaning.wet"), icon: Qr }
    ] : []
  ], Y = () => {
    h || !v || !window.confirm(f("valetudo.cleaning.mapping_warning_overwrite")) || !window.confirm(f("valetudo.cleaning.mapping_warning_loss")) || (v(), c());
  };
  return /* @__PURE__ */ r.jsx(Oi, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal", children: /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__content-wrapper", children: /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__content", children: [
    /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: f("valetudo.cleaning.mode_title") }),
      /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__mode-grid", children: [
        q.map((J) => /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: `cleaning-mode-modal__mode-card${U === J.key ? " cleaning-mode-modal__mode-card--selected" : ""}`,
            onClick: () => ne(J.key),
            role: "button",
            tabIndex: 0,
            onKeyDown: (se) => se.key === "Enter" && ne(J.key),
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
          children: p.map((J, se) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__power-option", children: [
            /* @__PURE__ */ r.jsx(
              Rl,
              {
                size: "small",
                selected: J === k,
                onClick: () => !h && g(J),
                icon: d_[Math.min(se, d_.length - 1)]
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
          children: w.map((J, se) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__power-option", children: [
            /* @__PURE__ */ r.jsx(
              Rl,
              {
                size: "small",
                selected: J === E,
                onClick: () => !h && m(J),
                icon: f_[Math.min(se, f_.length - 1)]
              }
            ),
            /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__power-label", children: m_(J) })
          ] }, J))
        }
      )
    ] })
  ] }) }) }) });
}
const J1 = {
  mainBrush: 18e3,
  // 300 h
  rightBrush: 12e3,
  // 200 h
  mainFilter: 9e3,
  // 150 h
  sensorCleaning: 1800
  // 30 h
};
function I1(o) {
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
  const m = c?.state, h = m && !["unavailable", "unknown"].includes(m) ? Number(m) : null, b = J1[s] ?? 1, v = h !== null ? Math.max(0, Math.min(100, Math.round(h / b * 100))) : null, f = h !== null && h <= 0, p = v === null || v > 50 ? "var(--accent-color, #007aff)" : v > 20 ? "var(--warning-color, #ff9500)" : "var(--error-color, #ff3b30)", w = h === null ? "" : f ? g("valetudo.panel.needs_replacement") : g("valetudo.panel.remaining", { time: I1(h) });
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
function W1({
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
  totalStatsAreaEntity: E,
  totalStatsTimeEntity: S,
  totalStatsCountEntity: D,
  currentStatsAreaEntity: X,
  currentStatsTimeEntity: U,
  carpetModeEntity: $,
  entityIds: Z,
  valetudoUrl: L,
  language: ne
}) {
  const { t: q } = Ve(ne), Y = {
    docked: q("valetudo.status.docked"),
    cleaning: q("valetudo.status.cleaning"),
    paused: q("valetudo.status.paused"),
    returning: q("valetudo.status.returning"),
    idle: q("valetudo.status.idle"),
    error: q("valetudo.status.error")
  }[u.state] ?? u.state, J = h ? Number(h.state) : null, se = v?.attributes, I = se?.ssid ?? "—", re = se?.ips?.[0] ?? "—", ge = v?.state && !["unavailable", "unknown"].includes(v.state) ? `${v.state} ${q("valetudo.panel.dbm")}` : "—", Ee = E?.state, ke = S?.state, xe = D?.state, R = Ee && !["unavailable", "unknown"].includes(Ee) ? Number(Ee) : null, te = ke && !["unavailable", "unknown"].includes(ke) ? Number(ke) : null, F = xe && !["unavailable", "unknown"].includes(xe) ? xe : null, ve = X?.state, Ne = U?.state, x = ve && !["unavailable", "unknown"].includes(ve) ? Number(ve) : null, H = Ne && !["unavailable", "unknown"].includes(Ne) ? Number(Ne) : null, ee = b ? Object.entries(b.attributes).filter(([we]) => !isNaN(Number(we))).map(([, we]) => String(we)) : [], ce = $?.state === "on", ye = (we) => {
    s.callService("button", "press", { entity_id: we });
  }, pe = () => {
    s.callService("switch", ce ? "turn_off" : "turn_on", { entity_id: Z.carpetMode });
  };
  return /* @__PURE__ */ r.jsx(Oi, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-panel", children: [
    /* @__PURE__ */ r.jsx("h2", { className: "valetudo-settings-panel__title", children: q("valetudo.panel.title") }),
    /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-panel__scroll", children: [
      /* @__PURE__ */ r.jsx(Kt, { title: q("valetudo.panel.device"), icon: /* @__PURE__ */ r.jsx(W_, {}), defaultOpen: !0, children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section", children: [
        [
          { label: q("valetudo.panel.status"), value: Y },
          J !== null && !isNaN(J) ? { label: q("valetudo.panel.battery"), value: `${J}%` } : null,
          { label: q("valetudo.panel.wifi"), value: I },
          { label: q("valetudo.panel.signal"), value: ge },
          { label: q("valetudo.panel.ip_address"), value: re }
        ].filter(Boolean).map((we) => /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: we.label }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: we.value })
        ] }, we.label)),
        (L || re && re !== "—") && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row valetudo-settings-section__row--link", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: q("valetudo.panel.valetudo_ui") }),
          /* @__PURE__ */ r.jsxs(
            "a",
            {
              className: "valetudo-settings-section__link",
              href: L || `http://${re}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [
                /* @__PURE__ */ r.jsx(H0, { size: 14 }),
                /* @__PURE__ */ r.jsx("span", { children: q("valetudo.panel.open") })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ r.jsx(Kt, { title: q("valetudo.panel.consumables"), icon: /* @__PURE__ */ r.jsx($v, {}), defaultOpen: !0, children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section valetudo-settings-section--consumables", children: [
        /* @__PURE__ */ r.jsx(
          Jo,
          {
            label: q("valetudo.panel.main_brush"),
            entity: f,
            maxKey: "mainBrush",
            onReset: () => ye(Z.resetMainBrush),
            t: q
          }
        ),
        /* @__PURE__ */ r.jsx(
          Jo,
          {
            label: q("valetudo.panel.side_brush"),
            entity: p,
            maxKey: "rightBrush",
            onReset: () => ye(Z.resetRightBrush),
            t: q
          }
        ),
        /* @__PURE__ */ r.jsx(
          Jo,
          {
            label: q("valetudo.panel.filter"),
            entity: w,
            maxKey: "mainFilter",
            onReset: () => ye(Z.resetMainFilter),
            t: q
          }
        ),
        /* @__PURE__ */ r.jsx(
          Jo,
          {
            label: q("valetudo.panel.sensors"),
            entity: k,
            maxKey: "sensorCleaning",
            onReset: () => ye(Z.resetSensorCleaning),
            t: q
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Kt, { title: q("valetudo.panel.statistics"), icon: /* @__PURE__ */ r.jsx(N0, {}), children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section", children: [
        F !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: q("valetudo.panel.total_cleanings") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: F })
        ] }),
        R !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: q("valetudo.panel.total_area") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: g_(R) })
        ] }),
        te !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: q("valetudo.panel.total_time") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: __(te) })
        ] }),
        (x !== null || H !== null) && /* @__PURE__ */ r.jsx("div", { className: "valetudo-settings-section__divider" }),
        x !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: q("valetudo.panel.current_area") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: g_(x) })
        ] }),
        H !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: q("valetudo.panel.current_time") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: __(H) })
        ] })
      ] }) }),
      /* @__PURE__ */ r.jsx(Kt, { title: q("valetudo.panel.cleaning_settings"), icon: /* @__PURE__ */ r.jsx(P_, {}), children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section", children: [
        $ && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row valetudo-settings-section__row--toggle", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: q("valetudo.panel.carpet_mode") }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: `valetudo-toggle${ce ? " valetudo-toggle--on" : ""}`,
              onClick: pe,
              type: "button",
              "aria-label": q("valetudo.panel.carpet_mode"),
              "aria-pressed": ce,
              children: /* @__PURE__ */ r.jsx("span", { className: "valetudo-toggle__thumb" })
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: q("valetudo.cleaning.suction_power") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: g?.state ?? "—" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: q("valetudo.cleaning.water_level") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: m?.state ?? "—" })
        ] })
      ] }) }),
      ee.length > 0 && /* @__PURE__ */ r.jsx(Kt, { title: q("valetudo.panel.rooms"), icon: /* @__PURE__ */ r.jsx(F_, {}), children: /* @__PURE__ */ r.jsx("div", { className: "valetudo-settings-section", children: ee.map((we, at) => /* @__PURE__ */ r.jsx("div", { className: "valetudo-settings-section__row", children: /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: we }) }, at)) }) }),
      /* @__PURE__ */ r.jsx(Kt, { title: q("valetudo.panel.configuration"), icon: /* @__PURE__ */ r.jsx(U0, {}), children: /* @__PURE__ */ r.jsx("div", { className: "valetudo-settings-section", children: Object.entries(Z).map(([we, at]) => /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
        /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label valetudo-settings-section__label--mono", children: we }),
        /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value valetudo-settings-section__value--mono", children: at })
      ] }, we)) }) })
    ] })
  ] }) });
}
function F1({
  restrictions: o,
  onToolChange: c,
  onDeleteSelected: s,
  onSave: u,
  saving: g,
  language: m
}) {
  const { t: h } = Ve(m), { tool: b, selectedId: v, dirty: f } = o, p = [
    { key: "select", label: h("valetudo.restrictions.select"), icon: /* @__PURE__ */ r.jsx(lv, { size: 14 }) },
    { key: "wall", label: h("valetudo.restrictions.wall"), icon: /* @__PURE__ */ r.jsx(av, { size: 14 }) },
    { key: "no_go", label: h("valetudo.restrictions.no_go"), icon: /* @__PURE__ */ r.jsx(Dv, { size: 14 }) },
    { key: "no_mop", label: h("valetudo.restrictions.no_mop"), icon: /* @__PURE__ */ r.jsx(I_, { size: 14 }) }
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
            /* @__PURE__ */ r.jsx(vv, { size: 14 }),
            /* @__PURE__ */ r.jsx("span", { children: g ? "…" : h("valetudo.restrictions.save") })
          ]
        }
      )
    ] })
  ] });
}
function P1({ hass: o, entityIds: c, onSuccess: s, language: u = "en" }) {
  const { t: g } = Ve(u), m = O.useCallback(() => {
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
    (S, D, X = 1) => {
      const U = c.mqttIdentifier;
      if (!U) {
        s?.("⚠️ Добавь valetudo_identifier в конфиг карты (например: HarshSillyPigeon)");
        return;
      }
      o.callService("mqtt", "publish", {
        topic: `valetudo/${U}/MapSegmentationCapability/clean/set`,
        payload: JSON.stringify({
          segment_ids: S.map(String),
          iterations: X,
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
  ), E = O.useCallback(
    (S, D, X, U = 1) => {
      switch (S) {
        case "all":
          m();
          break;
        case "room":
          D.size > 0 ? p(Array.from(D.keys()), D.size, U) : s?.(g("toast.select_rooms_first"));
          break;
        case "zone":
          if (X) {
            const $ = c.mqttIdentifier;
            if (!$) {
              s?.("⚠️ Добавь valetudo_identifier в конфиг карты (например: HarshSillyPigeon)");
              break;
            }
            const { x1: Z, y1: L, x2: ne, y2: q } = X, Y = Math.round(Math.min(Z, ne)), J = Math.round(Math.max(Z, ne)), se = Math.round(Math.min(L, q)), I = Math.round(Math.max(L, q)), re = J - Y, ge = I - se, Ee = {
              zones: [
                {
                  points: {
                    pA: { x: Y, y: se },
                    pB: { x: J, y: se },
                    pC: { x: J, y: I },
                    pD: { x: Y, y: I }
                  }
                }
              ],
              iterations: U
            };
            console.log("[Valetudo] Zone payload:", JSON.stringify(Ee)), o.callService("mqtt", "publish", {
              topic: `valetudo/${$}/ZoneCleaningCapability/start/set`,
              payload: JSON.stringify(Ee),
              retain: !1
            }), s?.(`Уборка зоны запущена (${re}×${ge}мм, ${U}×)`);
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
    handleClean: E
  };
}
function Dl(o) {
  let c = o.length;
  for (; --c >= 0; )
    o[c] = 0;
}
const ey = 3, ty = 258, bg = 29, ay = 256, ny = ay + 1 + bg, yg = 30, ly = 512, iy = new Array((ny + 2) * 2);
Dl(iy);
const oy = new Array(yg * 2);
Dl(oy);
const sy = new Array(ly);
Dl(sy);
const cy = new Array(ty - ey + 1);
Dl(cy);
const ry = new Array(bg);
Dl(ry);
const uy = new Array(yg);
Dl(uy);
const dy = (o, c, s, u) => {
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
var Hr = dy;
const fy = () => {
  let o, c = [];
  for (var s = 0; s < 256; s++) {
    o = s;
    for (var u = 0; u < 8; u++)
      o = o & 1 ? 3988292384 ^ o >>> 1 : o >>> 1;
    c[s] = o;
  }
  return c;
}, my = new Uint32Array(fy()), _y = (o, c, s, u) => {
  const g = my, m = u + s;
  o ^= -1;
  for (let h = u; h < m; h++)
    o = o >>> 8 ^ g[(o ^ c[h]) & 255];
  return o ^ -1;
};
var ha = _y, qr = {
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
}, xg = {
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
const gy = (o, c) => Object.prototype.hasOwnProperty.call(o, c);
var py = function(o) {
  const c = Array.prototype.slice.call(arguments, 1);
  for (; c.length; ) {
    const s = c.shift();
    if (s) {
      if (typeof s != "object")
        throw new TypeError(s + "must be non-object");
      for (const u in s)
        gy(s, u) && (o[u] = s[u]);
    }
  }
  return o;
}, hy = (o) => {
  let c = 0;
  for (let u = 0, g = o.length; u < g; u++)
    c += o[u].length;
  const s = new Uint8Array(c);
  for (let u = 0, g = 0, m = o.length; u < m; u++) {
    let h = o[u];
    s.set(h, g), g += h.length;
  }
  return s;
}, Sg = {
  assign: py,
  flattenChunks: hy
};
let wg = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  wg = !1;
}
const Ci = new Uint8Array(256);
for (let o = 0; o < 256; o++)
  Ci[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
Ci[254] = Ci[254] = 1;
var vy = (o) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(o);
  let c, s, u, g, m, h = o.length, b = 0;
  for (g = 0; g < h; g++)
    s = o.charCodeAt(g), (s & 64512) === 55296 && g + 1 < h && (u = o.charCodeAt(g + 1), (u & 64512) === 56320 && (s = 65536 + (s - 55296 << 10) + (u - 56320), g++)), b += s < 128 ? 1 : s < 2048 ? 2 : s < 65536 ? 3 : 4;
  for (c = new Uint8Array(b), m = 0, g = 0; m < b; g++)
    s = o.charCodeAt(g), (s & 64512) === 55296 && g + 1 < h && (u = o.charCodeAt(g + 1), (u & 64512) === 56320 && (s = 65536 + (s - 55296 << 10) + (u - 56320), g++)), s < 128 ? c[m++] = s : s < 2048 ? (c[m++] = 192 | s >>> 6, c[m++] = 128 | s & 63) : s < 65536 ? (c[m++] = 224 | s >>> 12, c[m++] = 128 | s >>> 6 & 63, c[m++] = 128 | s & 63) : (c[m++] = 240 | s >>> 18, c[m++] = 128 | s >>> 12 & 63, c[m++] = 128 | s >>> 6 & 63, c[m++] = 128 | s & 63);
  return c;
};
const by = (o, c) => {
  if (c < 65534 && o.subarray && wg)
    return String.fromCharCode.apply(null, o.length === c ? o : o.subarray(0, c));
  let s = "";
  for (let u = 0; u < c; u++)
    s += String.fromCharCode(o[u]);
  return s;
};
var yy = (o, c) => {
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
    let b = Ci[h];
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
  return by(m, g);
}, xy = (o, c) => {
  c = c || o.length, c > o.length && (c = o.length);
  let s = c - 1;
  for (; s >= 0 && (o[s] & 192) === 128; )
    s--;
  return s < 0 || s === 0 ? c : s + Ci[o[s]] > c ? s : c;
}, Vr = {
  string2buf: vy,
  buf2string: yy,
  utf8border: xy
};
function Sy() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var wy = Sy;
const Io = 16209, zy = 16191;
var Ey = function(c, s) {
  let u, g, m, h, b, v, f, p, w, k, E, S, D, X, U, $, Z, L, ne, q, Y, J, se, I;
  const re = c.state;
  u = c.next_in, se = c.input, g = u + (c.avail_in - 5), m = c.next_out, I = c.output, h = m - (s - c.avail_out), b = m + (c.avail_out - 257), v = re.dmax, f = re.wsize, p = re.whave, w = re.wnext, k = re.window, E = re.hold, S = re.bits, D = re.lencode, X = re.distcode, U = (1 << re.lenbits) - 1, $ = (1 << re.distbits) - 1;
  e:
    do {
      S < 15 && (E += se[u++] << S, S += 8, E += se[u++] << S, S += 8), Z = D[E & U];
      t:
        for (; ; ) {
          if (L = Z >>> 24, E >>>= L, S -= L, L = Z >>> 16 & 255, L === 0)
            I[m++] = Z & 65535;
          else if (L & 16) {
            ne = Z & 65535, L &= 15, L && (S < L && (E += se[u++] << S, S += 8), ne += E & (1 << L) - 1, E >>>= L, S -= L), S < 15 && (E += se[u++] << S, S += 8, E += se[u++] << S, S += 8), Z = X[E & $];
            a:
              for (; ; ) {
                if (L = Z >>> 24, E >>>= L, S -= L, L = Z >>> 16 & 255, L & 16) {
                  if (q = Z & 65535, L &= 15, S < L && (E += se[u++] << S, S += 8, S < L && (E += se[u++] << S, S += 8)), q += E & (1 << L) - 1, q > v) {
                    c.msg = "invalid distance too far back", re.mode = Io;
                    break e;
                  }
                  if (E >>>= L, S -= L, L = m - h, q > L) {
                    if (L = q - L, L > p && re.sane) {
                      c.msg = "invalid distance too far back", re.mode = Io;
                      break e;
                    }
                    if (Y = 0, J = k, w === 0) {
                      if (Y += f - L, L < ne) {
                        ne -= L;
                        do
                          I[m++] = k[Y++];
                        while (--L);
                        Y = m - q, J = I;
                      }
                    } else if (w < L) {
                      if (Y += f + w - L, L -= w, L < ne) {
                        ne -= L;
                        do
                          I[m++] = k[Y++];
                        while (--L);
                        if (Y = 0, w < ne) {
                          L = w, ne -= L;
                          do
                            I[m++] = k[Y++];
                          while (--L);
                          Y = m - q, J = I;
                        }
                      }
                    } else if (Y += w - L, L < ne) {
                      ne -= L;
                      do
                        I[m++] = k[Y++];
                      while (--L);
                      Y = m - q, J = I;
                    }
                    for (; ne > 2; )
                      I[m++] = J[Y++], I[m++] = J[Y++], I[m++] = J[Y++], ne -= 3;
                    ne && (I[m++] = J[Y++], ne > 1 && (I[m++] = J[Y++]));
                  } else {
                    Y = m - q;
                    do
                      I[m++] = I[Y++], I[m++] = I[Y++], I[m++] = I[Y++], ne -= 3;
                    while (ne > 2);
                    ne && (I[m++] = I[Y++], ne > 1 && (I[m++] = I[Y++]));
                  }
                } else if ((L & 64) === 0) {
                  Z = X[(Z & 65535) + (E & (1 << L) - 1)];
                  continue a;
                } else {
                  c.msg = "invalid distance code", re.mode = Io;
                  break e;
                }
                break;
              }
          } else if ((L & 64) === 0) {
            Z = D[(Z & 65535) + (E & (1 << L) - 1)];
            continue t;
          } else if (L & 32) {
            re.mode = zy;
            break e;
          } else {
            c.msg = "invalid literal/length code", re.mode = Io;
            break e;
          }
          break;
        }
    } while (u < g && m < b);
  ne = S >> 3, u -= ne, S -= ne << 3, E &= (1 << S) - 1, c.next_in = u, c.next_out = m, c.avail_in = u < g ? 5 + (g - u) : 5 - (u - g), c.avail_out = m < b ? 257 + (b - m) : 257 - (m - b), re.hold = E, re.bits = S;
};
const jl = 15, p_ = 852, h_ = 592, v_ = 0, Tr = 1, b_ = 2, Ny = new Uint16Array([
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
]), My = new Uint8Array([
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
]), ky = new Uint16Array([
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
]), Ay = new Uint8Array([
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
]), Cy = (o, c, s, u, g, m, h, b) => {
  const v = b.bits;
  let f = 0, p = 0, w = 0, k = 0, E = 0, S = 0, D = 0, X = 0, U = 0, $ = 0, Z, L, ne, q, Y, J = null, se;
  const I = new Uint16Array(jl + 1), re = new Uint16Array(jl + 1);
  let ge = null, Ee, ke, xe;
  for (f = 0; f <= jl; f++)
    I[f] = 0;
  for (p = 0; p < u; p++)
    I[c[s + p]]++;
  for (E = v, k = jl; k >= 1 && I[k] === 0; k--)
    ;
  if (E > k && (E = k), k === 0)
    return g[m++] = 1 << 24 | 64 << 16 | 0, g[m++] = 1 << 24 | 64 << 16 | 0, b.bits = 1, 0;
  for (w = 1; w < k && I[w] === 0; w++)
    ;
  for (E < w && (E = w), X = 1, f = 1; f <= jl; f++)
    if (X <<= 1, X -= I[f], X < 0)
      return -1;
  if (X > 0 && (o === v_ || k !== 1))
    return -1;
  for (re[1] = 0, f = 1; f < jl; f++)
    re[f + 1] = re[f] + I[f];
  for (p = 0; p < u; p++)
    c[s + p] !== 0 && (h[re[c[s + p]]++] = p);
  if (o === v_ ? (J = ge = h, se = 20) : o === Tr ? (J = Ny, ge = My, se = 257) : (J = ky, ge = Ay, se = 0), $ = 0, p = 0, f = w, Y = m, S = E, D = 0, ne = -1, U = 1 << E, q = U - 1, o === Tr && U > p_ || o === b_ && U > h_)
    return 1;
  for (; ; ) {
    Ee = f - D, h[p] + 1 < se ? (ke = 0, xe = h[p]) : h[p] >= se ? (ke = ge[h[p] - se], xe = J[h[p] - se]) : (ke = 96, xe = 0), Z = 1 << f - D, L = 1 << S, w = L;
    do
      L -= Z, g[Y + ($ >> D) + L] = Ee << 24 | ke << 16 | xe | 0;
    while (L !== 0);
    for (Z = 1 << f - 1; $ & Z; )
      Z >>= 1;
    if (Z !== 0 ? ($ &= Z - 1, $ += Z) : $ = 0, p++, --I[f] === 0) {
      if (f === k)
        break;
      f = c[s + h[p]];
    }
    if (f > E && ($ & q) !== ne) {
      for (D === 0 && (D = E), Y += w, S = f - D, X = 1 << S; S + D < k && (X -= I[S + D], !(X <= 0)); )
        S++, X <<= 1;
      if (U += 1 << S, o === Tr && U > p_ || o === b_ && U > h_)
        return 1;
      ne = $ & q, g[ne] = E << 24 | S << 16 | Y - m | 0;
    }
  }
  return $ !== 0 && (g[Y + $] = f - D << 24 | 64 << 16 | 0), b.bits = E, 0;
};
var Ai = Cy;
const Ty = 0, zg = 1, Eg = 2, {
  Z_FINISH: y_,
  Z_BLOCK: jy,
  Z_TREES: Wo,
  Z_OK: Vn,
  Z_STREAM_END: Oy,
  Z_NEED_DICT: Ry,
  Z_STREAM_ERROR: la,
  Z_DATA_ERROR: Ng,
  Z_MEM_ERROR: Mg,
  Z_BUF_ERROR: Dy,
  Z_DEFLATED: x_
} = xg, ss = 16180, S_ = 16181, w_ = 16182, z_ = 16183, E_ = 16184, N_ = 16185, M_ = 16186, k_ = 16187, A_ = 16188, C_ = 16189, ls = 16190, Ha = 16191, jr = 16192, T_ = 16193, Or = 16194, j_ = 16195, O_ = 16196, R_ = 16197, D_ = 16198, Fo = 16199, Po = 16200, U_ = 16201, B_ = 16202, L_ = 16203, G_ = 16204, H_ = 16205, Rr = 16206, q_ = 16207, V_ = 16208, tt = 16209, kg = 16210, Ag = 16211, Uy = 852, By = 592, Ly = 15, Gy = Ly, Y_ = (o) => (o >>> 24 & 255) + (o >>> 8 & 65280) + ((o & 65280) << 8) + ((o & 255) << 24);
function Hy() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const Yn = (o) => {
  if (!o)
    return 1;
  const c = o.state;
  return !c || c.strm !== o || c.mode < ss || c.mode > Ag ? 1 : 0;
}, Cg = (o) => {
  if (Yn(o))
    return la;
  const c = o.state;
  return o.total_in = o.total_out = c.total = 0, o.msg = "", c.wrap && (o.adler = c.wrap & 1), c.mode = ss, c.last = 0, c.havedict = 0, c.flags = -1, c.dmax = 32768, c.head = null, c.hold = 0, c.bits = 0, c.lencode = c.lendyn = new Int32Array(Uy), c.distcode = c.distdyn = new Int32Array(By), c.sane = 1, c.back = -1, Vn;
}, Tg = (o) => {
  if (Yn(o))
    return la;
  const c = o.state;
  return c.wsize = 0, c.whave = 0, c.wnext = 0, Cg(o);
}, jg = (o, c) => {
  let s;
  if (Yn(o))
    return la;
  const u = o.state;
  return c < 0 ? (s = 0, c = -c) : (s = (c >> 4) + 5, c < 48 && (c &= 15)), c && (c < 8 || c > 15) ? la : (u.window !== null && u.wbits !== c && (u.window = null), u.wrap = s, u.wbits = c, Tg(o));
}, Og = (o, c) => {
  if (!o)
    return la;
  const s = new Hy();
  o.state = s, s.strm = o, s.window = null, s.mode = ss;
  const u = jg(o, c);
  return u !== Vn && (o.state = null), u;
}, qy = (o) => Og(o, Gy);
let Z_ = !0, Dr, Ur;
const Vy = (o) => {
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
    for (Ai(zg, o.lens, 0, 288, Dr, 0, o.work, { bits: 9 }), c = 0; c < 32; )
      o.lens[c++] = 5;
    Ai(Eg, o.lens, 0, 32, Ur, 0, o.work, { bits: 5 }), Z_ = !1;
  }
  o.lencode = Dr, o.lenbits = 9, o.distcode = Ur, o.distbits = 5;
}, Rg = (o, c, s, u) => {
  let g;
  const m = o.state;
  return m.window === null && (m.wsize = 1 << m.wbits, m.wnext = 0, m.whave = 0, m.window = new Uint8Array(m.wsize)), u >= m.wsize ? (m.window.set(c.subarray(s - m.wsize, s), 0), m.wnext = 0, m.whave = m.wsize) : (g = m.wsize - m.wnext, g > u && (g = u), m.window.set(c.subarray(s - u, s - u + g), m.wnext), u -= g, u ? (m.window.set(c.subarray(s - u, s), 0), m.wnext = u, m.whave = m.wsize) : (m.wnext += g, m.wnext === m.wsize && (m.wnext = 0), m.whave < m.wsize && (m.whave += g))), 0;
}, Yy = (o, c) => {
  let s, u, g, m, h, b, v, f, p, w, k, E, S, D, X = 0, U, $, Z, L, ne, q, Y, J;
  const se = new Uint8Array(4);
  let I, re;
  const ge = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (Yn(o) || !o.output || !o.input && o.avail_in !== 0)
    return la;
  s = o.state, s.mode === Ha && (s.mode = jr), h = o.next_out, g = o.output, v = o.avail_out, m = o.next_in, u = o.input, b = o.avail_in, f = s.hold, p = s.bits, w = b, k = v, J = Vn;
  e:
    for (; ; )
      switch (s.mode) {
        case ss:
          if (s.wrap === 0) {
            s.mode = jr;
            break;
          }
          for (; p < 16; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          if (s.wrap & 2 && f === 35615) {
            s.wbits === 0 && (s.wbits = 15), s.check = 0, se[0] = f & 255, se[1] = f >>> 8 & 255, s.check = ha(s.check, se, 2, 0), f = 0, p = 0, s.mode = S_;
            break;
          }
          if (s.head && (s.head.done = !1), !(s.wrap & 1) || /* check if zlib header allowed */
          (((f & 255) << 8) + (f >> 8)) % 31) {
            o.msg = "incorrect header check", s.mode = tt;
            break;
          }
          if ((f & 15) !== x_) {
            o.msg = "unknown compression method", s.mode = tt;
            break;
          }
          if (f >>>= 4, p -= 4, Y = (f & 15) + 8, s.wbits === 0 && (s.wbits = Y), Y > 15 || Y > s.wbits) {
            o.msg = "invalid window size", s.mode = tt;
            break;
          }
          s.dmax = 1 << s.wbits, s.flags = 0, o.adler = s.check = 1, s.mode = f & 512 ? C_ : Ha, f = 0, p = 0;
          break;
        case S_:
          for (; p < 16; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          if (s.flags = f, (s.flags & 255) !== x_) {
            o.msg = "unknown compression method", s.mode = tt;
            break;
          }
          if (s.flags & 57344) {
            o.msg = "unknown header flags set", s.mode = tt;
            break;
          }
          s.head && (s.head.text = f >> 8 & 1), s.flags & 512 && s.wrap & 4 && (se[0] = f & 255, se[1] = f >>> 8 & 255, s.check = ha(s.check, se, 2, 0)), f = 0, p = 0, s.mode = w_;
        /* falls through */
        case w_:
          for (; p < 32; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          s.head && (s.head.time = f), s.flags & 512 && s.wrap & 4 && (se[0] = f & 255, se[1] = f >>> 8 & 255, se[2] = f >>> 16 & 255, se[3] = f >>> 24 & 255, s.check = ha(s.check, se, 4, 0)), f = 0, p = 0, s.mode = z_;
        /* falls through */
        case z_:
          for (; p < 16; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          s.head && (s.head.xflags = f & 255, s.head.os = f >> 8), s.flags & 512 && s.wrap & 4 && (se[0] = f & 255, se[1] = f >>> 8 & 255, s.check = ha(s.check, se, 2, 0)), f = 0, p = 0, s.mode = E_;
        /* falls through */
        case E_:
          if (s.flags & 1024) {
            for (; p < 16; ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            s.length = f, s.head && (s.head.extra_len = f), s.flags & 512 && s.wrap & 4 && (se[0] = f & 255, se[1] = f >>> 8 & 255, s.check = ha(s.check, se, 2, 0)), f = 0, p = 0;
          } else s.head && (s.head.extra = null);
          s.mode = N_;
        /* falls through */
        case N_:
          if (s.flags & 1024 && (E = s.length, E > b && (E = b), E && (s.head && (Y = s.head.extra_len - s.length, s.head.extra || (s.head.extra = new Uint8Array(s.head.extra_len)), s.head.extra.set(
            u.subarray(
              m,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              m + E
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            Y
          )), s.flags & 512 && s.wrap & 4 && (s.check = ha(s.check, u, E, m)), b -= E, m += E, s.length -= E), s.length))
            break e;
          s.length = 0, s.mode = M_;
        /* falls through */
        case M_:
          if (s.flags & 2048) {
            if (b === 0)
              break e;
            E = 0;
            do
              Y = u[m + E++], s.head && Y && s.length < 65536 && (s.head.name += String.fromCharCode(Y));
            while (Y && E < b);
            if (s.flags & 512 && s.wrap & 4 && (s.check = ha(s.check, u, E, m)), b -= E, m += E, Y)
              break e;
          } else s.head && (s.head.name = null);
          s.length = 0, s.mode = k_;
        /* falls through */
        case k_:
          if (s.flags & 4096) {
            if (b === 0)
              break e;
            E = 0;
            do
              Y = u[m + E++], s.head && Y && s.length < 65536 && (s.head.comment += String.fromCharCode(Y));
            while (Y && E < b);
            if (s.flags & 512 && s.wrap & 4 && (s.check = ha(s.check, u, E, m)), b -= E, m += E, Y)
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
              o.msg = "header crc mismatch", s.mode = tt;
              break;
            }
            f = 0, p = 0;
          }
          s.head && (s.head.hcrc = s.flags >> 9 & 1, s.head.done = !0), o.adler = s.check = 0, s.mode = Ha;
          break;
        case C_:
          for (; p < 32; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          o.adler = s.check = Y_(f), f = 0, p = 0, s.mode = ls;
        /* falls through */
        case ls:
          if (s.havedict === 0)
            return o.next_out = h, o.avail_out = v, o.next_in = m, o.avail_in = b, s.hold = f, s.bits = p, Ry;
          o.adler = s.check = 1, s.mode = Ha;
        /* falls through */
        case Ha:
          if (c === jy || c === Wo)
            break e;
        /* falls through */
        case jr:
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
              s.mode = T_;
              break;
            case 1:
              if (Vy(s), s.mode = Fo, c === Wo) {
                f >>>= 2, p -= 2;
                break e;
              }
              break;
            case 2:
              s.mode = O_;
              break;
            case 3:
              o.msg = "invalid block type", s.mode = tt;
          }
          f >>>= 2, p -= 2;
          break;
        case T_:
          for (f >>>= p & 7, p -= p & 7; p < 32; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          if ((f & 65535) !== (f >>> 16 ^ 65535)) {
            o.msg = "invalid stored block lengths", s.mode = tt;
            break;
          }
          if (s.length = f & 65535, f = 0, p = 0, s.mode = Or, c === Wo)
            break e;
        /* falls through */
        case Or:
          s.mode = j_;
        /* falls through */
        case j_:
          if (E = s.length, E) {
            if (E > b && (E = b), E > v && (E = v), E === 0)
              break e;
            g.set(u.subarray(m, m + E), h), b -= E, m += E, v -= E, h += E, s.length -= E;
            break;
          }
          s.mode = Ha;
          break;
        case O_:
          for (; p < 14; ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          if (s.nlen = (f & 31) + 257, f >>>= 5, p -= 5, s.ndist = (f & 31) + 1, f >>>= 5, p -= 5, s.ncode = (f & 15) + 4, f >>>= 4, p -= 4, s.nlen > 286 || s.ndist > 30) {
            o.msg = "too many length or distance symbols", s.mode = tt;
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
          if (s.lencode = s.lendyn, s.lenbits = 7, I = { bits: s.lenbits }, J = Ai(Ty, s.lens, 0, 19, s.lencode, 0, s.work, I), s.lenbits = I.bits, J) {
            o.msg = "invalid code lengths set", s.mode = tt;
            break;
          }
          s.have = 0, s.mode = D_;
        /* falls through */
        case D_:
          for (; s.have < s.nlen + s.ndist; ) {
            for (; X = s.lencode[f & (1 << s.lenbits) - 1], U = X >>> 24, $ = X >>> 16 & 255, Z = X & 65535, !(U <= p); ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            if (Z < 16)
              f >>>= U, p -= U, s.lens[s.have++] = Z;
            else {
              if (Z === 16) {
                for (re = U + 2; p < re; ) {
                  if (b === 0)
                    break e;
                  b--, f += u[m++] << p, p += 8;
                }
                if (f >>>= U, p -= U, s.have === 0) {
                  o.msg = "invalid bit length repeat", s.mode = tt;
                  break;
                }
                Y = s.lens[s.have - 1], E = 3 + (f & 3), f >>>= 2, p -= 2;
              } else if (Z === 17) {
                for (re = U + 3; p < re; ) {
                  if (b === 0)
                    break e;
                  b--, f += u[m++] << p, p += 8;
                }
                f >>>= U, p -= U, Y = 0, E = 3 + (f & 7), f >>>= 3, p -= 3;
              } else {
                for (re = U + 7; p < re; ) {
                  if (b === 0)
                    break e;
                  b--, f += u[m++] << p, p += 8;
                }
                f >>>= U, p -= U, Y = 0, E = 11 + (f & 127), f >>>= 7, p -= 7;
              }
              if (s.have + E > s.nlen + s.ndist) {
                o.msg = "invalid bit length repeat", s.mode = tt;
                break;
              }
              for (; E--; )
                s.lens[s.have++] = Y;
            }
          }
          if (s.mode === tt)
            break;
          if (s.lens[256] === 0) {
            o.msg = "invalid code -- missing end-of-block", s.mode = tt;
            break;
          }
          if (s.lenbits = 9, I = { bits: s.lenbits }, J = Ai(zg, s.lens, 0, s.nlen, s.lencode, 0, s.work, I), s.lenbits = I.bits, J) {
            o.msg = "invalid literal/lengths set", s.mode = tt;
            break;
          }
          if (s.distbits = 6, s.distcode = s.distdyn, I = { bits: s.distbits }, J = Ai(Eg, s.lens, s.nlen, s.ndist, s.distcode, 0, s.work, I), s.distbits = I.bits, J) {
            o.msg = "invalid distances set", s.mode = tt;
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
            o.next_out = h, o.avail_out = v, o.next_in = m, o.avail_in = b, s.hold = f, s.bits = p, Ey(o, k), h = o.next_out, g = o.output, v = o.avail_out, m = o.next_in, u = o.input, b = o.avail_in, f = s.hold, p = s.bits, s.mode === Ha && (s.back = -1);
            break;
          }
          for (s.back = 0; X = s.lencode[f & (1 << s.lenbits) - 1], U = X >>> 24, $ = X >>> 16 & 255, Z = X & 65535, !(U <= p); ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          if ($ && ($ & 240) === 0) {
            for (L = U, ne = $, q = Z; X = s.lencode[q + ((f & (1 << L + ne) - 1) >> L)], U = X >>> 24, $ = X >>> 16 & 255, Z = X & 65535, !(L + U <= p); ) {
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
            s.back = -1, s.mode = Ha;
            break;
          }
          if ($ & 64) {
            o.msg = "invalid literal/length code", s.mode = tt;
            break;
          }
          s.extra = $ & 15, s.mode = U_;
        /* falls through */
        case U_:
          if (s.extra) {
            for (re = s.extra; p < re; ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            s.length += f & (1 << s.extra) - 1, f >>>= s.extra, p -= s.extra, s.back += s.extra;
          }
          s.was = s.length, s.mode = B_;
        /* falls through */
        case B_:
          for (; X = s.distcode[f & (1 << s.distbits) - 1], U = X >>> 24, $ = X >>> 16 & 255, Z = X & 65535, !(U <= p); ) {
            if (b === 0)
              break e;
            b--, f += u[m++] << p, p += 8;
          }
          if (($ & 240) === 0) {
            for (L = U, ne = $, q = Z; X = s.distcode[q + ((f & (1 << L + ne) - 1) >> L)], U = X >>> 24, $ = X >>> 16 & 255, Z = X & 65535, !(L + U <= p); ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            f >>>= L, p -= L, s.back += L;
          }
          if (f >>>= U, p -= U, s.back += U, $ & 64) {
            o.msg = "invalid distance code", s.mode = tt;
            break;
          }
          s.offset = Z, s.extra = $ & 15, s.mode = L_;
        /* falls through */
        case L_:
          if (s.extra) {
            for (re = s.extra; p < re; ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            s.offset += f & (1 << s.extra) - 1, f >>>= s.extra, p -= s.extra, s.back += s.extra;
          }
          if (s.offset > s.dmax) {
            o.msg = "invalid distance too far back", s.mode = tt;
            break;
          }
          s.mode = G_;
        /* falls through */
        case G_:
          if (v === 0)
            break e;
          if (E = k - v, s.offset > E) {
            if (E = s.offset - E, E > s.whave && s.sane) {
              o.msg = "invalid distance too far back", s.mode = tt;
              break;
            }
            E > s.wnext ? (E -= s.wnext, S = s.wsize - E) : S = s.wnext - E, E > s.length && (E = s.length), D = s.window;
          } else
            D = g, S = h - s.offset, E = s.length;
          E > v && (E = v), v -= E, s.length -= E;
          do
            g[h++] = D[S++];
          while (--E);
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
              o.msg = "incorrect data check", s.mode = tt;
              break;
            }
            f = 0, p = 0;
          }
          s.mode = q_;
        /* falls through */
        case q_:
          if (s.wrap && s.flags) {
            for (; p < 32; ) {
              if (b === 0)
                break e;
              b--, f += u[m++] << p, p += 8;
            }
            if (s.wrap & 4 && f !== (s.total & 4294967295)) {
              o.msg = "incorrect length check", s.mode = tt;
              break;
            }
            f = 0, p = 0;
          }
          s.mode = V_;
        /* falls through */
        case V_:
          J = Oy;
          break e;
        case tt:
          J = Ng;
          break e;
        case kg:
          return Mg;
        case Ag:
        /* falls through */
        default:
          return la;
      }
  return o.next_out = h, o.avail_out = v, o.next_in = m, o.avail_in = b, s.hold = f, s.bits = p, (s.wsize || k !== o.avail_out && s.mode < tt && (s.mode < Rr || c !== y_)) && Rg(o, o.output, o.next_out, k - o.avail_out), w -= o.avail_in, k -= o.avail_out, o.total_in += w, o.total_out += k, s.total += k, s.wrap & 4 && k && (o.adler = s.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  s.flags ? ha(s.check, g, k, o.next_out - k) : Hr(s.check, g, k, o.next_out - k)), o.data_type = s.bits + (s.last ? 64 : 0) + (s.mode === Ha ? 128 : 0) + (s.mode === Fo || s.mode === Or ? 256 : 0), (w === 0 && k === 0 || c === y_) && J === Vn && (J = Dy), J;
}, Zy = (o) => {
  if (Yn(o))
    return la;
  let c = o.state;
  return c.window && (c.window = null), o.state = null, Vn;
}, Xy = (o, c) => {
  if (Yn(o))
    return la;
  const s = o.state;
  return (s.wrap & 2) === 0 ? la : (s.head = c, c.done = !1, Vn);
}, Ky = (o, c) => {
  const s = c.length;
  let u, g, m;
  return Yn(o) || (u = o.state, u.wrap !== 0 && u.mode !== ls) ? la : u.mode === ls && (g = 1, g = Hr(g, c, s, 0), g !== u.check) ? Ng : (m = Rg(o, c, s, s), m ? (u.mode = kg, Mg) : (u.havedict = 1, Vn));
};
var Qy = Tg, $y = jg, Jy = Cg, Iy = qy, Wy = Og, Fy = Yy, Py = Zy, e2 = Xy, t2 = Ky, a2 = "pako inflate (from Nodeca project)", qa = {
  inflateReset: Qy,
  inflateReset2: $y,
  inflateResetKeep: Jy,
  inflateInit: Iy,
  inflateInit2: Wy,
  inflate: Fy,
  inflateEnd: Py,
  inflateGetHeader: e2,
  inflateSetDictionary: t2,
  inflateInfo: a2
};
function n2() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var l2 = n2;
const Dg = Object.prototype.toString, {
  Z_NO_FLUSH: i2,
  Z_FINISH: o2,
  Z_OK: Ti,
  Z_STREAM_END: Br,
  Z_NEED_DICT: Lr,
  Z_STREAM_ERROR: s2,
  Z_DATA_ERROR: X_,
  Z_MEM_ERROR: c2
} = xg;
function cs(o) {
  this.options = Sg.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, o || {});
  const c = this.options;
  c.raw && c.windowBits >= 0 && c.windowBits < 16 && (c.windowBits = -c.windowBits, c.windowBits === 0 && (c.windowBits = -15)), c.windowBits >= 0 && c.windowBits < 16 && !(o && o.windowBits) && (c.windowBits += 32), c.windowBits > 15 && c.windowBits < 48 && (c.windowBits & 15) === 0 && (c.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new wy(), this.strm.avail_out = 0;
  let s = qa.inflateInit2(
    this.strm,
    c.windowBits
  );
  if (s !== Ti)
    throw new Error(qr[s]);
  if (this.header = new l2(), qa.inflateGetHeader(this.strm, this.header), c.dictionary && (typeof c.dictionary == "string" ? c.dictionary = Vr.string2buf(c.dictionary) : Dg.call(c.dictionary) === "[object ArrayBuffer]" && (c.dictionary = new Uint8Array(c.dictionary)), c.raw && (s = qa.inflateSetDictionary(this.strm, c.dictionary), s !== Ti)))
    throw new Error(qr[s]);
}
cs.prototype.push = function(o, c) {
  const s = this.strm, u = this.options.chunkSize, g = this.options.dictionary;
  let m, h, b;
  if (this.ended) return !1;
  for (c === ~~c ? h = c : h = c === !0 ? o2 : i2, Dg.call(o) === "[object ArrayBuffer]" ? s.input = new Uint8Array(o) : s.input = o, s.next_in = 0, s.avail_in = s.input.length; ; ) {
    for (s.avail_out === 0 && (s.output = new Uint8Array(u), s.next_out = 0, s.avail_out = u), m = qa.inflate(s, h), m === Lr && g && (m = qa.inflateSetDictionary(s, g), m === Ti ? m = qa.inflate(s, h) : m === X_ && (m = Lr)); s.avail_in > 0 && m === Br && s.state.wrap > 0 && o[s.next_in] !== 0; )
      qa.inflateReset(s), m = qa.inflate(s, h);
    switch (m) {
      case s2:
      case X_:
      case Lr:
      case c2:
        return this.onEnd(m), this.ended = !0, !1;
    }
    if (b = s.avail_out, s.next_out && (s.avail_out === 0 || m === Br))
      if (this.options.to === "string") {
        let v = Vr.utf8border(s.output, s.next_out), f = s.next_out - v, p = Vr.buf2string(s.output, v);
        s.next_out = f, s.avail_out = u - f, f && s.output.set(s.output.subarray(v, v + f), 0), this.onData(p);
      } else
        this.onData(s.output.length === s.next_out ? s.output : s.output.subarray(0, s.next_out));
    if (!(m === Ti && b === 0)) {
      if (m === Br)
        return m = qa.inflateEnd(this.strm), this.onEnd(m), this.ended = !0, !0;
      if (s.avail_in === 0) break;
    }
  }
  return !0;
};
cs.prototype.onData = function(o) {
  this.chunks.push(o);
};
cs.prototype.onEnd = function(o) {
  o === Ti && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = Sg.flattenChunks(this.chunks)), this.chunks = [], this.err = o, this.msg = this.strm.msg;
};
function r2(o, c) {
  const s = new cs(c);
  if (s.push(o), s.err) throw s.msg || qr[s.err];
  return s.result;
}
var u2 = r2, d2 = {
  inflate: u2
};
const { inflate: f2 } = d2;
var m2 = f2;
function _2(o) {
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
function g2(o) {
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
const p2 = {
  cleaning: 2e3,
  returning: 2e3,
  paused: 5e3,
  docked: 1e4,
  idle: 5e3,
  error: 5e3
};
function h2(o, c, s) {
  const [u, g] = O.useState(null), [m, h] = O.useState(null), b = O.useRef(!1), v = O.useRef(null), f = p2[s] ?? 5e3, p = O.useCallback(async () => {
    if (b.current) return;
    const w = o.states[c], k = w?.attributes?.entity_picture;
    if (!(!k || w?.state === "unavailable")) {
      b.current = !0;
      try {
        const E = await o.fetchWithAuth(k);
        if (!E.ok)
          throw new Error(`Camera fetch failed: ${E.status}`);
        const S = await E.arrayBuffer(), D = _2(new Uint8Array(S)).filter(($) => $.keyword === "ValetudoMap");
        if (D.length === 0)
          throw new Error("No ValetudoMap ZTXT chunk in PNG");
        const X = m2(D[0].data, { to: "string" }), U = g2(JSON.parse(X));
        g(U), h(null);
      } catch (E) {
        h(E instanceof Error ? E.message : String(E)), console.warn("[ValetudoMap] fetch error:", E);
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
function v2(o) {
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
function b2(o) {
  return Object.entries(o).filter(([c]) => !isNaN(Number(c))).map(([c, s]) => ({
    id: Number(c),
    name: String(s),
    x: 50,
    y: 50
  }));
}
function y2({ hass: o, config: c }) {
  const s = v2(c), u = c.language ?? "en", { t: g } = Ve(u), m = c.theme ?? "light", h = o.states[s.vacuum], b = o.states[s.map], v = o.states[s.fan], f = o.states[s.water], p = o.states[s.battery], w = o.states[s.segments], k = o.states[s.wifi], E = o.states[s.mainBrush], S = o.states[s.rightBrush], D = o.states[s.mainFilter], X = o.states[s.sensorCleaning], U = o.states[s.totalStatsArea], $ = o.states[s.totalStatsTime], Z = o.states[s.totalStatsCount], L = o.states[s.currentStatsArea], ne = o.states[s.currentStatsTime], q = o.states[s.carpetMode], Y = O.useRef(null), J = gg({
    themeType: m,
    customThemeConfig: c.custom_theme,
    containerRef: Y
  }), [se, I] = O.useState(!1), [re, ge] = O.useState(!1), {
    selectedMode: Ee,
    selectedRooms: ke,
    selectedZone: xe,
    setSelectedZone: R,
    setSelectedMode: te,
    handleModeChange: F,
    handleRoomToggle: ve
  } = dg({ defaultMode: c.default_mode }), { toast: Ne, showToast: x, hideToast: H } = mg(), ce = k?.attributes?.ips?.[0], ye = !!(c.valetudo_url || ce), pe = O.useCallback(async () => {
    try {
      let P = !1;
      const ie = c.valetudo_url?.replace(/\/$/, "");
      if (ie)
        try {
          const oe = await fetch(`${ie}/api/v2/robot/capabilities/MappingPassCapability`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "start_mapping" })
          });
          if (!oe.ok) throw new Error(`REST ${oe.status}`);
          P = !0;
        } catch (oe) {
          console.warn("[valetudo] Direct mapping fetch failed:", oe);
        }
      if (!P)
        try {
          await o.callService("rest_command", "valetudo_start_mapping", {}), P = !0;
        } catch (oe) {
          const ue = String(oe);
          if (!ue.includes("not_found") && !ue.includes("Service not found") && !ue.includes("Service rest_command"))
            throw oe;
        }
      if (!P) {
        console.warn(`[valetudo] Cannot start mapping — no working method.
` + `Добавь в configuration.yaml:
rest_command:
  valetudo_start_mapping:
    url: "http://ROBOT_IP/api/v2/robot/capabilities/MappingPassCapability"
    method: PUT
    content_type: application/json
    payload: '{"action": "start_mapping"}'`), x(g("valetudo.toast.config_needed"));
        return;
      }
      x(g("valetudo.toast.mapping_started"));
    } catch (P) {
      console.error("[valetudo] Mapping failed:", P), x(g("valetudo.toast.mapping_error"));
    }
  }, [c.valetudo_url, o, x, g]), { handlePause: we, handleStop: at, handleDock: Ie, handleResume: ba, handleSetFanSpeed: ya, handleSetWater: Va, handleClean: bn } = P1({
    hass: o,
    entityIds: s,
    onSuccess: x,
    language: u
  }), pt = h?.state ?? "docked", { mapData: fa, error: ia, refetch: yn } = h2(o, s.map, pt), [Ya, Za] = O.useState(1);
  O.useEffect(() => {
    (pt === "docked" || pt === "idle") && (te("all"), R(null));
  }, [pt]);
  const lt = Ee === "restrictions", { restrictions: Mt, setTool: Zn, addWall: xa, addZone: rt, selectItem: xn, deleteSelected: bt, markSaved: Xa } = Yb({
    mapData: fa,
    active: lt
  }), [Ka, Qa] = O.useState(!1), Xn = O.useCallback(
    (P, ie, oe) => {
      if (P === "wall")
        return xa(ie, oe);
      {
        const ue = Mt.tool === "no_mop" ? "mop" : "regular";
        return rt(ue, ie, oe);
      }
    },
    [xa, rt, Mt.tool]
  ), T = O.useCallback(async () => {
    const P = Vb(Mt.walls, Mt.zones);
    console.log("[valetudo] Saving restrictions payload:", JSON.stringify(P)), Qa(!0);
    try {
      let ie = !1;
      const oe = c.valetudo_url?.replace(/\/$/, "");
      if (oe) {
        const ue = await fetch(`${oe}/api/v2/robot/capabilities/CombinedVirtualRestrictionsCapability`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(P)
        });
        if (!ue.ok) throw new Error(`REST ${ue.status}: ${await ue.text()}`);
        console.log("[valetudo] Saved via direct REST"), ie = !0;
      }
      if (!ie)
        try {
          await o.callService("rest_command", "valetudo_set_restrictions", {
            payload: JSON.stringify(P)
          }), console.log("[valetudo] Saved via HA rest_command"), ie = !0;
        } catch (ue) {
          const Ae = String(ue);
          if (console.warn("[valetudo] rest_command error:", Ae), Ae.includes("not_found") || Ae.includes("Service not found") || Ae.includes("Service rest_command"))
            console.log("[valetudo] rest_command not configured, trying next method");
          else
            throw ue;
        }
      if (!ie) {
        console.warn(`[valetudo] Could not save — no working method.
` + `Добавь в configuration.yaml:
rest_command:
  valetudo_set_restrictions:
    url: "http://ROBOT_IP/api/v2/robot/capabilities/CombinedVirtualRestrictionsCapability"
    method: PUT
    content_type: application/json
    payload: "{{ payload }}"`), x(g("valetudo.toast.config_needed"));
        return;
      }
      Xa(), x(g("valetudo.toast.saved")), setTimeout(yn, 800);
    } catch (ie) {
      console.error("[valetudo] Save failed:", ie), x(g("valetudo.toast.error", { message: ie instanceof Error ? ie.message : String(ie) }));
    } finally {
      Qa(!1);
    }
  }, [c.valetudo_url, Mt, o, Xa, x, yn, g]);
  if (!h)
    return /* @__PURE__ */ r.jsxs("div", { className: "valetudo-vacuum-card__error", children: [
      "Entity not found: ",
      s.vacuum
    ] });
  const G = ["cleaning", "returning"].includes(pt), W = pt === "paused", le = pt === "docked", fe = c.title ?? h.attributes.friendly_name ?? "Valetudo Robot", ze = w ? b2(w.attributes) : [], M = (P, ie) => {
    const oe = ke.has(P);
    ve(P, ie), x(oe ? `Deselected: ${ie}` : `Selected: ${ie}`);
  }, We = () => {
    bn(Ee, ke, xe, Ya), te("all"), R(null);
  }, yt = () => {
    te(lt ? "all" : "restrictions"), R(null);
  }, ae = G;
  return /* @__PURE__ */ r.jsxs("div", { ref: Y, className: `dreame-vacuum-card dreame-vacuum-card--${J.name} valetudo-vacuum-card`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "dreame-vacuum-card__container", children: [
      /* @__PURE__ */ r.jsx(
        H1,
        {
          vacuumEntity: h,
          batteryEntity: p,
          currentStatsAreaEntity: L,
          currentStatsTimeEntity: ne,
          deviceName: fe,
          restrictionsMode: lt,
          onRestrictionsToggle: yt,
          onSettingsClick: () => I(!0),
          language: u
        }
      ),
      fa ? /* @__PURE__ */ r.jsx(
        Q1,
        {
          mapData: fa,
          mode: Ee,
          selectedRooms: Ee === "room" ? ke : void 0,
          zone: Ee === "zone" ? xe : null,
          onZoneChange: R,
          restrictions: lt ? Mt : void 0,
          displayRestrictions: lt ? void 0 : Mt.savedDisplay,
          onRestrictionDrawn: lt ? Xn : void 0,
          onRestrictionSelect: lt ? xn : void 0,
          iterations: Ya,
          onIterationsChange: lt ? void 0 : Za,
          language: u,
          onSegmentClick: Ee === "room" ? (P) => {
            const ie = ze.find((oe) => oe.id === P);
            M(P, ie?.name ?? String(P));
          } : void 0
        }
      ) : /* @__PURE__ */ r.jsx("div", { className: "valetudo-vacuum-card__map-placeholder", children: ia ? g("valetudo.map.error", { message: ia }) : g("valetudo.map.loading") }),
      /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-button-wrapper", children: lt ? /* @__PURE__ */ r.jsx(
        F1,
        {
          restrictions: Mt,
          onToolChange: Zn,
          onDeleteSelected: bt,
          onSave: T,
          saving: Ka,
          language: u
        }
      ) : /* @__PURE__ */ r.jsxs(
        "button",
        {
          className: `cleaning-mode-button${ae ? " cleaning-mode-button--disabled" : ""}`,
          onClick: () => ge(!0),
          disabled: ae,
          type: "button",
          children: [
            /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-button__content", children: [
              /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-button__icon", children: Ol }),
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
        !lt && Ee === "room" && ke.size > 0 && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-selected-rooms", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-selected-rooms__label", children: g("room_display.selected_label") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-selected-rooms__names", children: Array.from(ke.values()).join(", ") })
        ] }),
        !lt && /* @__PURE__ */ r.jsx(
          pg,
          {
            selectedMode: Ee,
            onModeChange: F,
            disabled: G,
            language: u
          }
        ),
        /* @__PURE__ */ r.jsx(
          hg,
          {
            selectedMode: Ee,
            selectedRoomsCount: ke.size,
            isRunning: G,
            isPaused: W,
            isDocked: le,
            onClean: lt ? void 0 : We,
            onPause: we,
            onResume: ba,
            onStop: at,
            onDock: Ie,
            language: u,
            disabled: lt
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      $1,
      {
        opened: re,
        onClose: () => ge(!1),
        fanEntity: v,
        waterEntity: f,
        onFanChange: ya,
        onWaterChange: Va,
        disabled: ae,
        language: u,
        onStartMapping: ye ? pe : void 0
      }
    ),
    /* @__PURE__ */ r.jsx(
      W1,
      {
        opened: se,
        onClose: () => I(!1),
        hass: o,
        vacuumEntity: h,
        fanEntity: v,
        waterEntity: f,
        batteryEntity: p,
        segmentsEntity: w,
        wifiEntity: k,
        mainBrushEntity: E,
        rightBrushEntity: S,
        mainFilterEntity: D,
        sensorCleaningEntity: X,
        totalStatsAreaEntity: U,
        totalStatsTimeEntity: $,
        totalStatsCountEntity: Z,
        currentStatsAreaEntity: L,
        currentStatsTimeEntity: ne,
        carpetModeEntity: q,
        entityIds: s,
        valetudoUrl: c.valetudo_url,
        language: u
      }
    ),
    Ne && /* @__PURE__ */ r.jsx(vg, { message: Ne, onClose: H }),
    !b && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-vacuum-card__warning", children: [
      "Map entity not found: ",
      s.map
    ] })
  ] });
}
const Ug = '@charset "UTF-8";.accordion{border-radius:.75rem;background:var(--card-bg, rgba(255, 255, 255, .8));overflow:hidden;margin-bottom:.5rem}.accordion__header{display:flex;align-items:center;justify-content:space-between;width:100%;padding:.875rem 1rem;background:none;border:none;cursor:pointer;color:var(--text-primary, #000);font-size:.9375rem;font-weight:500;text-align:left;transition:background-color .2s ease}.accordion__header:hover{background:var(--hover-bg, rgba(0, 0, 0, .03))}.accordion__header:active{background:var(--active-bg, rgba(0, 0, 0, .06))}.accordion__title-wrapper{display:flex;align-items:center;gap:.625rem}.accordion__icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.accordion__icon svg{width:1.25rem;height:1.25rem}.accordion__title{font-weight:500}.accordion__chevron{width:1.25rem;height:1.25rem;color:var(--text-secondary, #666);transition:transform .3s ease}.accordion__content{max-height:0;overflow:hidden;transition:max-height .3s ease}.accordion__content-inner{padding:0 1rem 1rem}.accordion--open .accordion__chevron{transform:rotate(180deg)}.accordion--open .accordion__content{max-height:600px}.toggle{position:relative;display:inline-block;width:3.1875rem;height:1.9375rem}.toggle__input{opacity:0;width:0;height:0}.toggle__slider{position:absolute;cursor:pointer;inset:0;background-color:var(--surface-tertiary, #e0e0e0);transition:.4s;border-radius:1.9375rem}.toggle__knob{position:absolute;height:1.6875rem;width:1.6875rem;left:.125rem;bottom:.125rem;background-color:var(--surface-bg, white);transition:.4s;border-radius:50%;box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .2))}.toggle__input:checked+.toggle__slider{background-color:var(--toggle-active);border:.125rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color)}.toggle__input:checked+.toggle__slider .toggle__knob{transform:translate(1.25rem)}.toggle--disabled{opacity:.5;pointer-events:none}.circular-button{display:flex;flex-direction:column;align-items:center;gap:.5rem}.circular-button:hover{transform:translateY(-.125rem)}.circular-button__circle{border-radius:50%;background:var(--surface-secondary, #f5f5f5);display:flex;align-items:center;justify-content:center;cursor:pointer;border:.0625rem solid var(--text-primary, black);transition:all .2s ease;color:var(--text-primary)}.circular-button__circle--small{width:3.5rem;height:3.5rem;font-size:1.5rem}.circular-button__circle--medium{width:4.5rem;height:4.5rem;font-size:1.75rem}.circular-button__circle--large{width:5.5rem;height:5.5rem;font-size:2rem}.circular-button__circle--selected{background:var(--toggle-active);border:.1875rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color);color:var(--text-primary)}.circular-button__circle:hover:not(.circular-button__circle--selected){background:var(--surface-tertiary, #ebebeb)}.circular-button__circle:active{transform:scale(.95)}.circular-button__icon{display:flex;align-items:center;justify-content:center}.circular-button__icon--svg{width:100%;height:100%;color:var(--text-primary, #1a1a1a)}.circular-button__icon--svg svg{width:100%;height:100%;display:block}.circular-button__circle--selected .circular-button__icon--svg{color:#fff}.circular-button__label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center;line-height:1.2}.modal{position:absolute;inset:20% 0 0;background:var(--surface-bg, #f5f5f7);border-radius:1.25rem 1.25rem 0 0;padding:0 1.25rem 1.25rem;z-index:1000;max-height:80vh;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;color:var(--text-primary, black)}.modal::-webkit-scrollbar{display:none}.modal__backdrop{position:absolute;inset:0;background:var(--backdrop-bg, rgba(0, 0, 0, .4));z-index:999;border-radius:1.25rem}.modal__handle{width:2.25rem;height:.3125rem;background:var(--handle-bg, rgba(0, 0, 0, .15));border-radius:.1875rem;margin:.75rem auto 1.25rem}.modal__content{height:90%}.segmented-control{display:flex;gap:.5rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.75rem;padding:.25rem}.segmented-control__button{flex:1;border:none;border-radius:.625rem;padding:.75rem;font-size:.9375rem;font-weight:500;cursor:pointer;background-color:transparent;color:var(--text-primary, #1a1a1a);transition:all .2s}.segmented-control__button--active{background-color:var(--surface-bg, white);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .08))}.segmented-control__button:hover:not(.segmented-control__button--active){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.toast{position:fixed;bottom:1.25rem;left:50%;transform:translate(-50%);background:var(--surface-bg, #ffffff);border:.0625rem solid var(--border-color, #e0e0e0);border-radius:.5rem;padding:.75rem 1rem;display:flex;align-items:center;gap:.75rem;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12));animation:toast-slide-up .3s ease-out;z-index:1000;max-width:90%}@keyframes toast-slide-up{0%{transform:translate(-50%) translateY(1.25rem);opacity:0}to{transform:translate(-50%) translateY(0);opacity:1}}.toast__message{color:var(--text-primary, #1a1a1a);font-size:.875rem}.toast__close{background:none;border:none;color:var(--text-secondary, #666666);font-size:1.5rem;cursor:pointer;padding:0;width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;line-height:1;transition:color .2s}.toast__close:hover{color:var(--text-primary, #1a1a1a)}.header{padding:1.25rem 1.25rem .625rem;text-align:center}.header__top{display:flex;justify-content:space-between;align-items:flex-start}.header__title-wrapper{flex:1;text-align:center}.header__restrictions-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease;flex-shrink:0}@media(hover:hover){.header__restrictions-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--danger, #f44336)}}.header__restrictions-btn--active{color:#f44336;background:#f443361f}.header__settings-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease;flex-shrink:0}.header__settings-btn svg{width:1.25rem;height:1.25rem}.header__settings-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--text-primary, #1a1a1a)}.header__settings-btn:active{background:var(--active-bg, rgba(0, 0, 0, .1))}.header__title{margin:0;font-size:1rem;font-weight:600;color:var(--text-primary, #1a1a1a)}.header__status{margin:0;font-size:.875rem;color:var(--text-secondary, #666)}.header__progress{margin:0 auto;max-width:12.5rem}.header__progress-bar{width:100%;height:.25rem;background-color:var(--surface-tertiary, #e8e8e8);border-radius:.25rem;overflow:hidden}.header__progress-fill{height:100%;background-color:var(--accent-color, #007aff);transition:width .3s ease}.header__progress-text{margin:.25rem 0 0;font-size:.75rem;color:var(--text-tertiary, #999)}.header__stats{display:flex;justify-content:center;gap:1.25rem;font-size:1rem;color:var(--text-primary, #1a1a1a);margin-top:.875rem;align-items:center}.header__stat{display:flex;align-items:center;gap:.25rem}.header__stat-icon,.header__stat-icon--cleaning-time,.header__stat-icon--area{display:flex}.header__stat-icon--cleaning-time svg,.header__stat-icon--area svg{scale:.8}.header__stat-value{display:flex;font-weight:500}.mode-tabs{display:flex;gap:.25rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.9375rem;padding:.25rem;margin-bottom:.9375rem}.mode-tabs--disabled{opacity:.5;pointer-events:none}.mode-tabs__button{flex:1;display:flex;align-items:center;justify-content:center;border:none;border-radius:.6875rem;padding:.625rem;font-weight:500;font-size:.875rem;cursor:pointer;transition:all .2s;background-color:transparent;color:var(--text-secondary, #666)}.mode-tabs__button-icon svg{scale:.5;color:var(--text-secondary, #666)}.mode-tabs__button--active{background-color:var(--surface-bg, white);color:var(--text-primary, #000);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .1))}.mode-tabs__button:hover:not(.mode-tabs__button--active):not(:disabled){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.mode-tabs__button:disabled{cursor:not-allowed}.action-buttons{display:flex;gap:.75rem;margin-top:.9375rem}.action-buttons__clean,.action-buttons__dock,.action-buttons__pause,.action-buttons__resume,.action-buttons__stop{flex:1;background:var(--accent-bg);border:.0625rem solid var(--accent-bg);border-radius:.875rem;padding:.875rem;font-size:.9375rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.5rem;transition:all .3s cubic-bezier(.16,1,.3,1);color:var(--text-primary)}.action-buttons__clean:disabled,.action-buttons__dock:disabled,.action-buttons__pause:disabled,.action-buttons__resume:disabled,.action-buttons__stop:disabled{opacity:.38;cursor:not-allowed;pointer-events:none}.action-buttons__clean--selected,.action-buttons__dock--selected,.action-buttons__pause--selected,.action-buttons__resume--selected,.action-buttons__stop--selected{transform:translateY(-.125rem);border:.0625rem solid var(--toggle-active-border);box-shadow:0 .625rem 1.25rem #0006,0 0 .75rem #5865f240,inset 0 .0625rem .0625rem #ffffff1a!important}.action-buttons__clean{color:var(--text-primary-invert);background:var(--accent-color)}.action-buttons__pause{color:var(--accent-color);border-color:var(--accent-color-hover)}.action-buttons__resume{color:#32d74b;border-color:#32d74b80}.action-buttons__stop{color:#ff453a;border-color:#ff453a80}.action-buttons__dock{background:var(--surface-secondary);color:var(--text-secondary)}.valetudo-restrictions-hint{flex:1;display:flex;align-items:center;justify-content:center;padding:.625rem 1rem;font-size:.8rem;color:#f44336;background:#f4433614;border-radius:.75rem;border:1px solid rgba(244,67,54,.2)}.cleaning-mode-button-wrapper{margin:.625rem 1.25rem;width:calc(100% - 2.5rem);display:flex;align-items:center;gap:.5rem}.cleaning-mode-button-wrapper__shortcuts{background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:50%;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.1rem;flex-shrink:0;transition:transform .2s,opacity .2s;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-button-wrapper__shortcuts svg{scale:.8}.cleaning-mode-button-wrapper__shortcuts:hover:not(:disabled){transform:scale(1.1);opacity:.9;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button-wrapper__shortcuts:active:not(:disabled){transform:scale(.95)}.cleaning-mode-button-wrapper__shortcuts:disabled{opacity:.5;cursor:not-allowed}.cleaning-mode-button{flex:1;background:var(--surface-bg, #fff);border:none;border-radius:.75rem;padding:.75rem 1rem;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08));color:var(--text-primary, #1a1a1a);font-weight:400;font-size:.9375rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:transform .1s ease}.cleaning-mode-button:hover:not(:disabled){box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button:active:not(:disabled){transform:scale(.98)}.cleaning-mode-button--disabled,.cleaning-mode-button:disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.cleaning-mode-button__content{display:flex;align-items:center}.cleaning-mode-button__icon{scale:.7;display:flex}.cleaning-mode-button__text{font-weight:400;font-size:.8rem}.cleaning-mode-button__arrow{font-size:1.25rem;color:var(--text-tertiary, #999)}.vacuum-map{position:relative;margin:0 1.25rem;border-radius:.9375rem;overflow:hidden;background:var(--surface-bg, #fff);display:flex;align-items:center;justify-content:center;box-shadow:0 .25rem .9375rem var(--card-shadow, rgba(0, 0, 0, .1));min-height:18.75rem}.vacuum-map__image{width:100%;height:100%;object-fit:contain;border-radius:.9375rem}.dreame-vacuum-card--dark .vacuum-map .vacuum-map__image{filter:brightness(.8) contrast(.9) saturate(.85)}.vacuum-map__placeholder{color:#666;text-align:center;font-size:.875rem}.vacuum-map__placeholder small{font-size:.75rem;color:#999}.vacuum-map__overlay{position:absolute;inset:0;background:#0000000d;border-radius:.9375rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;color:#666;pointer-events:none}.vacuum-map__cycles{position:absolute;right:1rem;bottom:1rem;width:2.5rem;height:2.5rem;border-radius:25%;border-radius:.375rem}.vacuum-map__zone{position:absolute;border:.1875rem solid #007aff;background:repeating-linear-gradient(45deg,#007aff1a,#007aff1a .625rem,#007aff0d .625rem 1.25rem);pointer-events:auto;border-radius:.5rem;box-shadow:0 .125rem .75rem #007aff4d}.vacuum-map__zone-handle{position:absolute;width:1.5rem;height:1.5rem;background:#007aff;border:.125rem solid white;border-radius:50%;cursor:pointer;pointer-events:auto;box-shadow:0 .125rem .25rem #0003;transition:all .2s ease;z-index:10;touch-action:none}.vacuum-map__zone-handle:before{content:"";position:absolute;inset:-.5rem}.vacuum-map__zone-handle:hover{background:#0051d5;transform:scale(1.2)}.vacuum-map__zone-handle:active{transform:scale(.9)}.vacuum-map__zone-handle--tl{top:-.75rem;left:-.75rem;cursor:nwse-resize}.vacuum-map__zone-handle--tr{top:-.75rem;right:-.75rem;cursor:nesw-resize}.vacuum-map__zone-handle--bl{bottom:-.75rem;left:-.75rem;cursor:nesw-resize}.vacuum-map__zone-handle--br{bottom:-.75rem;right:-.75rem;cursor:nwse-resize}.vacuum-map__zone-clear{position:absolute;top:-.75rem;right:-.75rem;width:1.5rem;height:1.5rem;border-radius:50%;background:#ff3b30;color:#fff;border:.125rem solid white;font-size:1.125rem;font-weight:700;cursor:pointer;pointer-events:auto;display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .5rem #ff3b3066;transition:all .2s ease;line-height:1;padding:0}.vacuum-map__zone-clear:hover{background:#ff1f0f;transform:scale(1.1)}.vacuum-map__zone-clear:active{transform:scale(.95)}.vacuum-map__room-segments{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:auto}.vacuum-map__room-segment{cursor:pointer;transition:all .2s ease}.vacuum-map__room-segment:hover{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .2));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .3));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected:hover{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .4))}.vacuum-map__rooms{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.vacuum-map__room{position:absolute;transform:translate(-50%,-50%);width:2rem;height:2rem;border-radius:50%;background:#ffffffe6;border:.125rem solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:var(--text-primary, #1a1a1a);cursor:pointer;pointer-events:auto;transition:all .2s ease;box-shadow:0 .125rem .25rem #0000001a;z-index:2}.vacuum-map__room:hover{transform:translate(-50%,-50%) scale(1.1);background:#fff;box-shadow:0 .25rem .5rem #00000026}.vacuum-map__room--selected{background:var(--accent-color, #d4af37);color:#fff;border-color:var(--accent-color, #d4af37);box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(212, 175, 55, .4))}.vacuum-map__room--selected:hover{transform:translate(-50%,-50%) scale(1.1);box-shadow:0 .25rem .75rem var(--accent-color-shadow-color, rgba(212, 175, 55, .5))}.room-list-view{position:absolute;inset:0;background:var(--surface-bg, #fff);border-radius:.9375rem;display:flex;flex-direction:column;overflow:hidden}.room-list-view__header{padding:.75rem 3.5rem .75rem 1rem;font-size:.875rem;color:var(--text-secondary, #666);background:var(--surface-secondary, #f5f5f5);border-bottom:1px solid var(--border-color, #e0e0e0);flex-shrink:0}.room-list-view__list{flex:1;overflow-y:auto;padding:.5rem;display:flex;flex-direction:column;gap:.5rem}.room-list-view__list::-webkit-scrollbar{width:.25rem}.room-list-view__list::-webkit-scrollbar-track{background:transparent}.room-list-view__list::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.room-list-view__empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary, #999);font-size:.875rem}.room-list-view__item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:var(--surface-secondary, #f5f5f5);border:2px solid transparent;border-radius:.75rem;cursor:pointer;transition:all .2s ease;width:100%;text-align:left}.room-list-view__item:hover{background:var(--surface-tertiary, #ebebeb)}.room-list-view__item:active{transform:scale(.98)}.room-list-view__item--selected{background:var(--accent-bg-transparent, rgba(212, 175, 55, .1));border-color:var(--accent-color, #d4af37)}.room-list-view__item--selected:hover{background:var(--accent-bg-transparent, rgba(212, 175, 55, .15))}.room-list-view__item-name{flex:1;font-size:.9375rem;font-weight:500;color:var(--text-primary, #1a1a1a);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.room-list-view__item-check{width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--accent-color, #d4af37)}.view-toggle-button{position:absolute;top:.75rem;right:.75rem;z-index:10;width:2.25rem;height:2.25rem;border-radius:.5rem;background:var(--surface-bg, #fff);border:1px solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-primary, #1a1a1a);box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .1));transition:all .2s ease}.view-toggle-button:hover{background:var(--surface-secondary, #f5f5f5);transform:scale(1.05)}.view-toggle-button:active{transform:scale(.95)}.view-toggle-button svg{transition:transform .2s ease}.cleaning-mode-modal__header{margin-bottom:1.5rem}.cleaning-mode-modal__content-wrapper{width:100%;overflow-x:hidden;padding-bottom:1rem}.cleaning-mode-modal__section{margin-bottom:1.5rem}.cleaning-mode-modal__section-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500;margin:0 0 .75rem}.cleaning-mode-modal__section-header{display:flex;align-items:center;gap:.375rem;margin-bottom:.75rem}.cleaning-mode-modal__help-icon{display:inline-flex;align-items:center;justify-content:center;width:1rem;height:1rem;border-radius:50%;border:.09375rem solid var(--text-tertiary, #999);font-size:.6875rem;color:var(--text-tertiary, #999);font-weight:600}.cleaning-mode-modal__room-map{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem;display:flex;align-items:center;justify-content:center;min-height:7.5rem}.cleaning-mode-modal__placeholder{font-size:.8125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__mode-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.cleaning-mode-modal__mode-card{position:relative;border:.125rem solid var(--border-color, #e0e0e0);border-radius:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:var(--surface-bg, white);padding:1.5rem 1rem;transition:all .2s ease}.cleaning-mode-modal__mode-card:hover{transform:translateY(-.125rem);box-shadow:0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--selected{border:.1875rem solid var(--accent-color, #d4af37);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(212, 175, 55, .15))}.cleaning-mode-modal__mode-card--selected:hover{transform:translateY(-.125rem);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25)),0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--mapping{border-style:dashed;border-color:var(--accent-color, #d4af37);opacity:.85}.cleaning-mode-modal__mode-card--mapping:hover{opacity:1}.cleaning-mode-modal__mode-icon{border-radius:50%;margin-bottom:.75rem;display:flex;align-items:center;justify-content:center;font-size:1.75rem}.cleaning-mode-modal__mode-label{font-size:.875rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__mode-checkmark{position:absolute;top:.75rem;right:.75rem;width:1.5rem;height:1.5rem;border-radius:50%;background:var(--accent-color, #d4af37);display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .15));color:#fff;font-size:.875rem}.cleaning-mode-modal__horizontal-scroll{display:flex;justify-content:space-around;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar{height:.25rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-track{background:var(--surface-secondary, #f1f1f1);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb:hover{background:var(--border-color, #bbb)}.cleaning-mode-modal__mode-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__mode-option-label{font-size:.75rem;color:var(--text-secondary, #666);text-align:center;line-height:1.2}.cleaning-mode-modal__power-grid{display:grid;grid-template-columns:repeat(4,1fr);margin-bottom:1rem}.cleaning-mode-modal__power-option{display:flex;flex-direction:column;align-items:center;gap:.5rem}.cleaning-mode-modal__power-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.cleaning-mode-modal__max-plus{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem}.cleaning-mode-modal__max-plus-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}.cleaning-mode-modal__max-plus-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__max-plus-description{font-size:.8125rem;color:var(--text-tertiary, #999);margin:0;line-height:1.4}.cleaning-mode-modal__slider-container{position:relative;padding:0 .5rem;margin-bottom:.75rem}.cleaning-mode-modal__slider-wrapper{position:relative;padding-top:2rem}.cleaning-mode-modal__slider{width:100%;height:.375rem;border-radius:.1875rem;outline:none;-webkit-appearance:none;appearance:none;cursor:pointer}.cleaning-mode-modal__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider::-moz-range-thumb{width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;border:none;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip{position:absolute;top:-.5rem;left:0;transform:translate(-50%);background:var(--accent-color, #d4af37);color:#fff;padding:.25rem .5rem;border-radius:.375rem;font-size:.85rem;font-weight:600;white-space:nowrap;pointer-events:none;box-shadow:0 .125rem .375rem var(--accent-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip:after{content:"";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:.3125rem solid transparent;border-right:.3125rem solid transparent;border-top:.3125rem solid var(--accent-color, #d4af37)}.cleaning-mode-modal__slider-value{position:absolute;top:-2rem;transform:translate(-50%);background:var(--accent-color, #d4af37);border-radius:50%;width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:#fff;box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25));pointer-events:none}.cleaning-mode-modal__slider-labels{display:flex;justify-content:space-between;padding:0 .5rem;margin-top:1.5rem}.cleaning-mode-modal__slider-label{font-size:.8125rem}.cleaning-mode-modal__slider-label--inactive{color:var(--text-tertiary, #999)}.cleaning-mode-modal__slider-label--active{color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__setting{display:flex;align-items:center;justify-content:space-between;padding:1rem;background:var(--surface-bg, white);border-radius:.75rem;margin-bottom:1rem}.cleaning-mode-modal__setting--clickable{cursor:pointer;transition:background .2s ease}.cleaning-mode-modal__setting--clickable:hover{background:var(--surface-secondary, #f8f8f8)}.cleaning-mode-modal__setting--clickable:active{background:var(--surface-tertiary, #f0f0f0)}.cleaning-mode-modal__setting-label{font-size:.9375rem;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__setting-value{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__setting-arrow{font-size:1.125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__route-grid{display:flex;justify-content:space-around}.cleaning-mode-modal__route-option{display:flex;flex-direction:column;align-items:center;gap:.5rem}.cleaning-mode-modal__route-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.room-selection-display{padding:.75rem 1rem;background:var(--accent-bg, #e3f2fd);border-radius:.5rem;margin-bottom:.75rem;font-size:.875rem;color:var(--text-primary, #1a1a1a)}.room-selection-display__label{font-weight:600;margin-right:.5rem;color:var(--accent-color, #007aff)}.room-selection-display__rooms{color:var(--text-secondary, #666666)}.shortcuts-modal{padding:0}.shortcuts-modal__title{font-size:1.3rem;font-weight:600;margin:0 0 1rem;padding:1.5rem 1.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty{padding:2rem 1.5rem;text-align:center;color:var(--text-secondary, #666)}.shortcuts-modal__empty p{margin:.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty-hint{font-size:.9rem;color:var(--text-tertiary, #888)}.shortcuts-modal__list{max-height:35rem;overflow-y:auto;padding:.5rem 0;gap:.5rem;display:flex;flex-direction:column}.shortcuts-modal__item{display:flex;align-items:center;gap:1rem;padding:.75rem 1.5rem;margin:.25rem 1rem;background:var(--surface-bg, #fff);border:2px solid var(--accent-color);border-radius:.75rem;box-shadow:0 .125rem .5rem var(--accent-shadow);transition:all .2s;width:90%}.shortcuts-modal__item:hover{box-shadow:0 .25rem .75rem var(--accent-shadow);transform:translateY(-.0625rem)}.shortcuts-modal__item-info{flex:1;min-width:0;display:flex;align-items:center;gap:.75rem}.shortcuts-modal__item-icon{display:flex;font-size:1.3rem;flex-shrink:0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__item-icon svg{scale:.8}.shortcuts-modal__item-name{font-size:1rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.ai-detection-section{display:flex;flex-direction:column;gap:.75rem}.ai-detection-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.ai-detection-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.ai-detection-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.ai-detection-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section{display:flex;flex-direction:column;gap:.75rem}.carpet-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.carpet-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.carpet-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.carpet-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.carpet-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.carpet-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.carpet-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.consumables-section{display:flex;flex-direction:column;gap:1rem}.consumables-section__item{display:flex;flex-direction:column;gap:.375rem}.consumables-section__info{display:flex;justify-content:space-between;align-items:center}.consumables-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.consumables-section__stats{font-size:.75rem;color:var(--text-secondary, #666)}.consumables-section__progress{height:.375rem;background:var(--progress-bg, rgba(0, 0, 0, .1));border-radius:.1875rem;overflow:hidden}.consumables-section__progress-bar{height:100%;border-radius:.1875rem;transition:width .3s ease}.consumables-section__reset{align-self:flex-end;padding:.25rem .75rem;font-size:.75rem;font-weight:500;color:var(--accent-color, #007aff);background:none;border:1px solid var(--accent-color, #007aff);border-radius:.375rem;cursor:pointer;transition:all .2s ease}.consumables-section__reset:hover{background:var(--accent-color, #007aff);color:#fff}.consumables-section__reset:active{opacity:.8}.device-info-section{display:flex;flex-direction:column;gap:.75rem}.device-info-section__item{display:flex;justify-content:space-between;align-items:center;padding:.25rem 0;border-bottom:1px solid var(--divider-color, rgba(0, 0, 0, .06))}.device-info-section__item:last-child{border-bottom:none}.device-info-section__label{font-size:.875rem;color:var(--text-secondary, #666)}.device-info-section__value{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.map-management-section__description{font-size:.8125rem;color:var(--text-secondary, #666);margin:0 0 .75rem;line-height:1.4}.map-management-section__empty{font-size:.875rem;color:var(--text-secondary, #666);text-align:center;padding:1rem 0;margin:0}.map-management-section__maps{display:flex;flex-wrap:wrap;gap:.5rem}.map-management-section__map{padding:.5rem 1rem;font-size:.875rem;font-weight:500;color:var(--text-primary, #000);background:var(--button-bg, rgba(0, 0, 0, .05));border:2px solid transparent;border-radius:.5rem;cursor:pointer;transition:all .2s ease}.map-management-section__map:hover{background:var(--button-hover-bg, rgba(0, 0, 0, .08))}.map-management-section__map--active{border-color:var(--accent-color, #007aff);background:var(--accent-bg, rgba(0, 122, 255, .1));color:var(--accent-color, #007aff)}.quick-settings-section{display:flex;flex-direction:column;gap:1rem}.quick-settings-section__item{display:flex;justify-content:space-between;align-items:center;gap:1rem}.quick-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.quick-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.quick-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.volume-section{display:flex;flex-direction:row;gap:1rem}.volume-section__control{display:flex;align-items:center;gap:.75rem;flex:1}.volume-section__icon{display:flex;align-items:center;justify-content:center;color:var(--text-secondary, #666);flex-shrink:0}.volume-section__slider-container{flex:1;padding-top:1.5rem;margin-top:1rem}.volume-section__slider-wrapper{position:relative;width:100%}.volume-section__slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:3px;outline:none;cursor:pointer}.volume-section__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-webkit-slider-thumb:hover{transform:scale(1.1)}.volume-section__slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;border:none;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-moz-range-thumb:hover{transform:scale(1.1)}.volume-section__tooltip{position:absolute;top:-1.75rem;transform:translate(-50%);background:var(--accent-color, #007aff);color:#fff;padding:.25rem .5rem;border-radius:4px;font-size:.75rem;font-weight:500;white-space:nowrap;pointer-events:none}.volume-section__tooltip:after{content:"";position:absolute;top:100%;left:50%;transform:translate(-50%);border:4px solid transparent;border-top-color:var(--accent-color, #007aff)}.volume-section__test-button{display:flex;align-items:center;justify-content:center;gap:.5rem;padding:.625rem 1rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;color:var(--text-primary, #333);font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s ease}.volume-section__test-button:hover{background:var(--surface-tertiary, #eee)}.volume-section__test-button:active{transform:scale(.98)}.volume-section__test-button svg{color:var(--accent-color, #007aff)}.settings-panel{height:100%}.settings-panel__title{font-size:1.25rem;font-weight:600;margin:0 0 1rem;text-align:center;color:var(--text-primary, #000)}.settings-panel__scroll-wrapper{height:90%;overflow-y:auto}.settings-panel__sections{display:flex;flex-direction:column;gap:.25rem;padding-right:.25rem}.settings-panel__sections::-webkit-scrollbar{width:4px}.settings-panel__sections::-webkit-scrollbar-track{background:transparent}.settings-panel__sections::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb, rgba(0, 0, 0, .2));border-radius:2px}.dreame-vacuum-card{position:relative;background:var(--card-bg, #f5f5f7);border-radius:1.25rem;overflow:hidden;box-shadow:0 .125rem 1.25rem var(--card-shadow, rgba(0, 0, 0, .08));font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.dreame-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center}.dreame-vacuum-card__container{display:flex;flex-direction:column;gap:1rem}.dreame-vacuum-card__controls{padding:0 1.25rem 1.25rem}.dreame-vacuum-card__error{padding:1.25rem;text-align:center;color:var(--error-color, #ff3b30);font-size:.875rem}.valetudo-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center;font-size:.875rem}.valetudo-vacuum-card__warning{padding:.5rem 1.25rem;background:var(--warning-bg, #fff3cd);color:var(--warning-color, #856404);font-size:.75rem;border-radius:0 0 1.25rem 1.25rem}.valetudo-vacuum-card__map-placeholder{margin:0 1.25rem;min-height:200px;display:flex;align-items:center;justify-content:center;background:var(--surface-secondary, #e8e8e8);border-radius:.75rem;font-size:.875rem;color:var(--text-secondary, #666)}.valetudo-selected-rooms{display:flex;align-items:baseline;gap:.4rem;padding:0 0 .25rem;font-size:.8rem;line-height:1.4}.valetudo-selected-rooms__label{font-weight:600;color:var(--text-secondary, #888);white-space:nowrap}.valetudo-selected-rooms__names{color:var(--accent-color, #007aff);font-weight:500}.valetudo-map-canvas{width:100%;background:var(--card-bg, #1a1a2e);border-radius:.75rem;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:200px;position:relative;-webkit-user-select:none;user-select:none;touch-action:none}.valetudo-map-canvas--zone-mode{cursor:crosshair}.valetudo-map-canvas--room-mode{cursor:pointer}.valetudo-map-canvas__inner{position:relative;width:100%;transform-origin:center center;will-change:transform}.valetudo-map-canvas__canvas{width:100%;height:auto;display:block;image-rendering:auto}.valetudo-map-canvas__zone-drag{position:absolute;background:#ff980033;border:2px dashed rgba(255,152,0,.9);pointer-events:none;border-radius:2px}.valetudo-map-canvas__widget-zone{position:absolute;background:#ff98002e;border:2px dashed rgba(255,152,0,.9);border-radius:3px;box-sizing:border-box}.valetudo-map-canvas__widget-zone-move{position:absolute;inset:0;cursor:move;touch-action:none}.valetudo-map-canvas__widget-zone-move:after{content:"✥";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.4rem;color:#ff9800d9;pointer-events:none;text-shadow:0 0 3px #000}.valetudo-map-canvas__widget-zone-resize{position:absolute;bottom:-8px;right:-8px;width:24px;height:24px;background:#ff9800e6;border-radius:50%;cursor:se-resize;touch-action:none;z-index:2}.valetudo-map-canvas__widget-zone-resize:after{content:"⤡";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:.9rem;color:#fff;pointer-events:none}.valetudo-map-canvas__widget-zone-delete{position:absolute;top:-10px;right:-10px;width:22px;height:22px;background:#e53935;color:#fff;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none}.valetudo-map-canvas--restrictions-wall,.valetudo-map-canvas--restrictions-no_go,.valetudo-map-canvas--restrictions-no_mop{cursor:crosshair}.valetudo-map-canvas__pending-restriction{position:absolute;border-radius:3px;box-sizing:border-box}.valetudo-map-canvas__pending-restriction--wall{background:#f443361a;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__pending-restriction--no_go{background:#f443362e;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__pending-restriction--no_mop{background:#2196f32e;border:2px dashed rgba(33,150,243,.85)}.valetudo-map-canvas__pending-restriction-move{position:absolute;inset:0;cursor:move;touch-action:none}.valetudo-map-canvas__pending-restriction-move:after{content:"✥";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.4rem;color:#f44336d9;pointer-events:none;text-shadow:0 0 3px #000}.valetudo-map-canvas__pending-restriction-resize{position:absolute;bottom:-8px;right:-8px;width:24px;height:24px;background:#f44336e6;border-radius:50%;cursor:se-resize;touch-action:none;z-index:2}.valetudo-map-canvas__pending-restriction-resize:after{content:"⤡";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:.9rem;color:#fff;pointer-events:none}.valetudo-map-canvas__pending-restriction-delete{position:absolute;top:-10px;right:-10px;width:22px;height:22px;background:#e53935;color:#fff;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none}.valetudo-map-canvas__pending-restriction-confirm{position:absolute;bottom:-10px;left:-10px;width:26px;height:26px;background:#43a047;color:#fff;border:none;border-radius:50%;font-size:.9rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-endpoint{width:22px;height:22px;background:#f44336e6;border:2px solid #fff;border-radius:50%;cursor:move;touch-action:none;z-index:3;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-action-btn{width:22px;height:22px;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:3;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none;color:#fff;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-action-btn--delete{background:#e53935}.valetudo-map-canvas__wall-action-btn--confirm{background:#43a047}.valetudo-map-canvas--restrictions-select{cursor:pointer}.valetudo-map-canvas__restriction-preview{position:absolute;pointer-events:none;border-radius:2px}.valetudo-map-canvas__restriction-preview--no_go{background:#f443362e;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__restriction-preview--no_mop{background:#2196f32e;border:2px dashed rgba(33,150,243,.85)}.valetudo-map-canvas__restriction-preview-svg{position:absolute;inset:0;pointer-events:none}.valetudo-map-canvas__bottom-controls{position:absolute;bottom:.5rem;right:.5rem;display:flex;flex-direction:row;align-items:flex-end;gap:4px;z-index:10}.valetudo-map-canvas__zoom-controls{display:flex;flex-direction:column;gap:2px}.valetudo-map-canvas__zoom-controls button{width:28px;height:28px;background:#0000008c;color:#fff;border:1px solid rgba(255,255,255,.2);border-radius:4px;font-size:1.1rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}.valetudo-map-canvas__zoom-controls button:active{background:#fff3}.valetudo-map-canvas__iterations-btn{width:32px;height:32px;background:rgba(var(--rgb-primary-color, 3, 169, 244),.7);color:#fff;border:1px solid rgba(255,255,255,.35);border-radius:4px;font-size:.8rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}.valetudo-map-canvas__iterations-btn:active{background:rgba(var(--rgb-primary-color, 3, 169, 244),.9)}.valetudo-speed-panel{padding:0 1.25rem;display:flex;flex-direction:column;gap:.75rem}.valetudo-speed-row{display:flex;flex-direction:column;gap:.375rem}.valetudo-speed-row__title{display:flex;align-items:center;gap:.3rem;font-size:.75rem;font-weight:600;color:var(--text-secondary, #888);text-transform:uppercase;letter-spacing:.04em;padding:0 .125rem}.valetudo-speed-row__tabs{display:flex;gap:.25rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.9375rem;padding:.25rem}.valetudo-speed-row__tab{flex:1;display:flex;align-items:center;justify-content:center;border:none;border-radius:.6875rem;padding:.5rem .25rem;font-weight:500;font-size:.8125rem;cursor:pointer;transition:all .2s;background-color:transparent;color:var(--text-secondary, #666);text-transform:capitalize;white-space:nowrap}.valetudo-speed-row__tab--active{background-color:var(--surface-bg, white);color:var(--text-primary, #000);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .1))}.valetudo-speed-row__tab:hover:not(.valetudo-speed-row__tab--active):not(:disabled){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.valetudo-speed-row__tab:disabled{opacity:.4;cursor:not-allowed}.valetudo-settings-panel__title{font-size:1.125rem;font-weight:700;color:var(--text-primary, #111);margin:0 0 1rem;text-align:center}.valetudo-settings-panel__scroll{display:flex;flex-direction:column;gap:.5rem}.valetudo-settings-section{display:flex;flex-direction:column;gap:.5rem;padding:.125rem 0}.valetudo-settings-section__row{display:flex;align-items:baseline;justify-content:space-between;gap:.5rem;padding:.25rem 0;border-bottom:1px solid var(--surface-tertiary, rgba(128, 128, 128, .12))}.valetudo-settings-section__row:last-child{border-bottom:none}.valetudo-settings-section__row--toggle{align-items:center}.valetudo-settings-section__label{font-size:.875rem;color:var(--text-secondary, #666);flex-shrink:0}.valetudo-settings-section__label--mono{font-family:monospace;font-size:.75rem}.valetudo-settings-section__value{font-size:.875rem;font-weight:500;color:var(--text-primary, #111);text-align:right;word-break:break-all}.valetudo-settings-section__value--mono{font-family:monospace;font-size:.7rem;color:var(--text-secondary, #666)}.valetudo-settings-section__link{display:inline-flex;align-items:center;gap:.3rem;font-size:.875rem;font-weight:500;color:var(--accent-color, #007aff);text-decoration:none}.valetudo-settings-section__link:hover{text-decoration:underline}.valetudo-settings-section__divider{height:1px;background:var(--surface-tertiary, rgba(128, 128, 128, .2));margin:.25rem 0}.valetudo-settings-section--consumables{gap:.75rem}.consumable-row{display:flex;flex-direction:column;gap:.375rem;padding-bottom:.5rem;border-bottom:1px solid var(--surface-tertiary, rgba(128, 128, 128, .12))}.consumable-row:last-child{border-bottom:none;padding-bottom:0}.consumable-row__header{display:flex;align-items:center;justify-content:space-between;gap:.5rem}.consumable-row__label{font-size:.875rem;color:var(--text-secondary, #666);flex:1}.consumable-row__value{font-size:.875rem;font-weight:500;color:var(--text-primary, #111)}.consumable-row__value--depleted{color:var(--error-color, #ff3b30);font-weight:700}.consumable-row__reset-btn{display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;padding:0;background:none;border:1px solid var(--surface-tertiary, rgba(128, 128, 128, .3));border-radius:50%;color:var(--text-secondary, #666);font-size:.875rem;cursor:pointer;transition:all .15s ease;line-height:1}.consumable-row__reset-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--text-primary, #111)}.consumable-progress{height:4px;background:var(--surface-tertiary, rgba(128, 128, 128, .15));border-radius:2px;overflow:hidden}.consumable-progress__fill{height:100%;border-radius:2px;transition:width .3s ease}.valetudo-toggle{position:relative;display:inline-flex;align-items:center;width:2.75rem;height:1.5rem;background:var(--surface-tertiary, #ccc);border:none;border-radius:.75rem;cursor:pointer;transition:background .2s ease;flex-shrink:0;padding:0}.valetudo-toggle--on{background:var(--accent-color, #007aff)}.valetudo-toggle__thumb{position:absolute;left:.1875rem;width:1.125rem;height:1.125rem;background:#fff;border-radius:50%;box-shadow:0 1px 3px #00000040;transition:transform .2s ease}.valetudo-toggle--on .valetudo-toggle__thumb{transform:translate(1.25rem)}.restrictions-toolbar{display:none}.rt{display:flex;flex-direction:column;align-items:stretch;gap:6px;width:100%}.rt__seg{display:flex;border-radius:8px;overflow:hidden;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);flex-shrink:0}.rt__seg-btn{display:inline-flex;align-items:center;justify-content:center;gap:5px;flex:1;padding:0 10px;height:32px;border:none;border-right:1px solid rgba(255,255,255,.07);background:transparent;color:#ffffff73;font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;transition:background .12s,color .12s;outline:none}.rt__seg-btn:last-child{border-right:none}.rt__seg-btn:hover:not(.rt__seg-btn--active){background:#ffffff14;color:#fffc}.rt__seg-btn--select.rt__seg-btn--active{background:#ffffff26;color:#fff}.rt__seg-btn--wall.rt__seg-btn--active,.rt__seg-btn--no_go.rt__seg-btn--active{background:#ef535047;color:#ffcdd2}.rt__seg-btn--no_mop.rt__seg-btn--active{background:#42a5f547;color:#bbdefb}.rt__seg-btn svg{flex-shrink:0}.rt__actions{display:flex;align-items:center;justify-content:center;gap:6px}.rt__action-btn{display:inline-flex;align-items:center;justify-content:center;gap:5px;height:32px;padding:0 10px;border:1px solid transparent;border-radius:7px;background:#ffffff0f;color:#ffffff73;font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;transition:background .12s,color .12s,border-color .12s;outline:none}.rt__action-btn:disabled{opacity:.38;cursor:not-allowed}.rt__action-btn:hover:not(:disabled){background:#ffffff1a;color:#ffffffd9}.rt__action-btn--delete{width:32px;padding:0;color:#ef5350a6;border-color:#ef535033}.rt__action-btn--delete:hover:not(:disabled){background:#ef53502e;color:#ef5350;border-color:#ef535066}.rt__action-btn--save{color:#ffffff47}.rt__action-btn--save.rt__action-btn--save-dirty{background:#4caf5033;color:#a5d6a7;border-color:#4caf5059}.rt__action-btn--save.rt__action-btn--save-dirty:hover:not(:disabled){background:#4caf504d;color:#c8e6c9}.rt__action-btn svg{flex-shrink:0}';
class x2 extends HTMLElement {
  _root = null;
  _hass;
  _config;
  constructor() {
    super(), this.attachShadow({ mode: "open" });
    const c = document.createElement("style");
    c.textContent = Ug, this.shadowRoot.appendChild(c);
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
    c || (c = document.createElement("div"), c.id = "react-root", this.shadowRoot.appendChild(c)), this._root || (this._root = $_.createRoot(c)), this._root.render(
      /* @__PURE__ */ r.jsx(Q_.StrictMode, { children: /* @__PURE__ */ r.jsx(L1, { hass: this._hass, config: this._config }) })
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
customElements.get("dreame-vacuum-map-card") || customElements.define("dreame-vacuum-map-card", x2);
window.customCards && (window.customCards = window.customCards || [], window.customCards.push({
  type: "dreame-vacuum-map-card",
  name: "Dreame Vacuum Map Card",
  description: "Custom vacuum map card for Dreame vacuum cleaners"
}));
console.info("Dreame Vacuum Map Card (React) loaded");
class S2 extends HTMLElement {
  _root = null;
  _hass;
  _config;
  constructor() {
    super(), this.attachShadow({ mode: "open" });
    const c = document.createElement("style");
    c.textContent = Ug, this.shadowRoot.appendChild(c);
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
    c || (c = document.createElement("div"), c.id = "react-root", this.shadowRoot.appendChild(c)), this._root || (this._root = $_.createRoot(c)), this._root.render(
      /* @__PURE__ */ r.jsx(Q_.StrictMode, { children: /* @__PURE__ */ r.jsx(y2, { hass: this._hass, config: this._config }) })
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
      valetudo_url: "Local IP of your robot, e.g. http://192.168.0.162. Needed for saving virtual restrictions (walls/no-go zones) and starting mapping. If left empty, the card falls back to rest_command: valetudo_set_restrictions in configuration.yaml."
    };
    return {
      schema: c,
      computeLabel: (g) => s[g.name] ?? g.name,
      computeHelper: (g) => u[g.name]
    };
  }
}
customElements.define("valetudo-react-map-card", S2);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "valetudo-react-map-card",
  name: "Valetudo React Map Card",
  description: "Beautiful map card for Valetudo-flashed vacuum cleaners"
});
export {
  x2 as default
};
