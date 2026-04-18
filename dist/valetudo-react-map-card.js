
(function() {
  const style = document.createElement('style');
  style.textContent = "@charset \"UTF-8\";.header{padding:1.25rem 1.25rem .625rem;text-align:center}.header__top{display:flex;justify-content:space-between;align-items:flex-start}.header__title-wrapper{flex:1;text-align:center}.header__restrictions-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease;flex-shrink:0}@media(hover:hover){.header__restrictions-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--danger, #f44336)}}.header__restrictions-btn--active{color:#f44336;background:#f443361f}.header__settings-btn{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;padding:0;background:none;border:none;color:var(--text-secondary, #666);cursor:pointer;border-radius:.5rem;transition:all .2s ease;flex-shrink:0}.header__settings-btn svg{width:1.25rem;height:1.25rem}.header__settings-btn:hover{background:var(--hover-bg, rgba(0, 0, 0, .05));color:var(--text-primary, #1a1a1a)}.header__settings-btn:active{background:var(--active-bg, rgba(0, 0, 0, .1))}.header__title{margin:0;font-size:1rem;font-weight:600;color:var(--text-primary, #1a1a1a)}.header__status{margin:0;font-size:.875rem;color:var(--text-secondary, #666)}.header__progress{margin:0 auto;max-width:12.5rem}.header__progress-bar{width:100%;height:.25rem;background-color:var(--surface-tertiary, #e8e8e8);border-radius:.25rem;overflow:hidden}.header__progress-fill{height:100%;background-color:var(--accent-color, #007aff);transition:width .3s ease}.header__progress-text{margin:.25rem 0 0;font-size:.75rem;color:var(--text-tertiary, #999)}.header__stats{display:flex;justify-content:center;gap:1.25rem;font-size:1rem;color:var(--text-primary, #1a1a1a);margin-top:.875rem;align-items:center}.header__stat{display:flex;align-items:center;gap:.25rem}.header__stat-icon,.header__stat-icon--cleaning-time,.header__stat-icon--area{display:flex}.header__stat-icon--cleaning-time svg,.header__stat-icon--area svg{scale:.8}.header__stat-value{display:flex;font-weight:500}.valetudo-restrictions-hint{flex:1;display:flex;align-items:center;justify-content:center;padding:.625rem 1rem;font-size:.8rem;color:#f44336;background:#f4433614;border-radius:.75rem;border:1px solid rgba(244,67,54,.2)}.cleaning-mode-button-wrapper{margin:.625rem 1.25rem;width:calc(100% - 2.5rem);display:flex;align-items:center;gap:.5rem}.cleaning-mode-button-wrapper__shortcuts{background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:50%;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.1rem;flex-shrink:0;transition:transform .2s,opacity .2s;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-button-wrapper__shortcuts svg{scale:.8}.cleaning-mode-button-wrapper__shortcuts:hover:not(:disabled){transform:scale(1.1);opacity:.9;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button-wrapper__shortcuts:active:not(:disabled){transform:scale(.95)}.cleaning-mode-button-wrapper__shortcuts:disabled{opacity:.5;cursor:not-allowed}.cleaning-mode-button{flex:1;background:var(--surface-bg, #fff);border:none;border-radius:.75rem;padding:.75rem 1rem;box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .08));color:var(--text-primary, #1a1a1a);font-weight:400;font-size:.9375rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:transform .1s ease}.cleaning-mode-button:hover:not(:disabled){box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12))}.cleaning-mode-button:active:not(:disabled){transform:scale(.98)}.cleaning-mode-button--disabled,.cleaning-mode-button:disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.cleaning-mode-button__content{display:flex;align-items:center}.cleaning-mode-button__icon{scale:.7;display:flex}.cleaning-mode-button__text{font-weight:400;font-size:.8rem}.cleaning-mode-button__arrow{font-size:1.25rem;color:var(--text-tertiary, #999)}.view-toggle-button{position:absolute;top:.75rem;right:.75rem;z-index:10;width:2.25rem;height:2.25rem;border-radius:.5rem;background:var(--surface-bg, #fff);border:1px solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-primary, #1a1a1a);box-shadow:0 .125rem .5rem var(--card-shadow, rgba(0, 0, 0, .1));transition:all .2s ease}.view-toggle-button:hover{background:var(--surface-secondary, #f5f5f5);transform:scale(1.05)}.view-toggle-button:active{transform:scale(.95)}.view-toggle-button svg{transition:transform .2s ease}.room-list-view{position:absolute;inset:0;background:var(--surface-bg, #fff);border-radius:.9375rem;display:flex;flex-direction:column;overflow:hidden}.room-list-view__header{padding:.75rem 3.5rem .75rem 1rem;font-size:.875rem;color:var(--text-secondary, #666);background:var(--surface-secondary, #f5f5f5);border-bottom:1px solid var(--border-color, #e0e0e0);flex-shrink:0}.room-list-view__list{flex:1;overflow-y:auto;padding:.5rem;display:flex;flex-direction:column;gap:.5rem}.room-list-view__list::-webkit-scrollbar{width:.25rem}.room-list-view__list::-webkit-scrollbar-track{background:transparent}.room-list-view__list::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.room-list-view__empty{flex:1;display:flex;align-items:center;justify-content:center;color:var(--text-tertiary, #999);font-size:.875rem}.room-list-view__item{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:var(--surface-secondary, #f5f5f5);border:2px solid transparent;border-radius:.75rem;cursor:pointer;transition:all .2s ease;width:100%;text-align:left}.room-list-view__item:hover{background:var(--surface-tertiary, #ebebeb)}.room-list-view__item:active{transform:scale(.98)}.room-list-view__item--selected{background:var(--accent-bg-transparent, rgba(212, 175, 55, .1));border-color:var(--accent-color, #d4af37)}.room-list-view__item--selected:hover{background:var(--accent-bg-transparent, rgba(212, 175, 55, .15))}.room-list-view__item-name{flex:1;font-size:.9375rem;font-weight:500;color:var(--text-primary, #1a1a1a);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.room-list-view__item-check{width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--accent-color, #d4af37)}.vacuum-map{position:relative;margin:0 1.25rem;border-radius:.9375rem;overflow:hidden;background:var(--surface-bg, #fff);display:flex;align-items:center;justify-content:center;box-shadow:0 .25rem .9375rem var(--card-shadow, rgba(0, 0, 0, .1));min-height:18.75rem}.vacuum-map__image{width:100%;height:100%;object-fit:contain;border-radius:.9375rem}.dreame-vacuum-card--dark .vacuum-map .vacuum-map__image{filter:brightness(.8) contrast(.9) saturate(.85)}.vacuum-map__placeholder{color:#666;text-align:center;font-size:.875rem}.vacuum-map__placeholder small{font-size:.75rem;color:#999}.vacuum-map__overlay{position:absolute;inset:0;background:#0000000d;border-radius:.9375rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;color:#666;pointer-events:none}.vacuum-map__cycles{position:absolute;right:1rem;bottom:1rem;width:2.5rem;height:2.5rem;border-radius:25%;border-radius:.375rem}.vacuum-map__zone{position:absolute;border:.1875rem solid #007aff;background:repeating-linear-gradient(45deg,#007aff1a,#007aff1a .625rem,#007aff0d .625rem 1.25rem);pointer-events:auto;border-radius:.5rem;box-shadow:0 .125rem .75rem #007aff4d}.vacuum-map__zone-handle{position:absolute;width:1.5rem;height:1.5rem;background:#007aff;border:.125rem solid white;border-radius:50%;cursor:pointer;pointer-events:auto;box-shadow:0 .125rem .25rem #0003;transition:all .2s ease;z-index:10;touch-action:none}.vacuum-map__zone-handle:before{content:\"\";position:absolute;inset:-.5rem}.vacuum-map__zone-handle:hover{background:#0051d5;transform:scale(1.2)}.vacuum-map__zone-handle:active{transform:scale(.9)}.vacuum-map__zone-handle--tl{top:-.75rem;left:-.75rem;cursor:nwse-resize}.vacuum-map__zone-handle--tr{top:-.75rem;right:-.75rem;cursor:nesw-resize}.vacuum-map__zone-handle--bl{bottom:-.75rem;left:-.75rem;cursor:nesw-resize}.vacuum-map__zone-handle--br{bottom:-.75rem;right:-.75rem;cursor:nwse-resize}.vacuum-map__zone-clear{position:absolute;top:-.75rem;right:-.75rem;width:1.5rem;height:1.5rem;border-radius:50%;background:#ff3b30;color:#fff;border:.125rem solid white;font-size:1.125rem;font-weight:700;cursor:pointer;pointer-events:auto;display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .5rem #ff3b3066;transition:all .2s ease;line-height:1;padding:0}.vacuum-map__zone-clear:hover{background:#ff1f0f;transform:scale(1.1)}.vacuum-map__zone-clear:active{transform:scale(.95)}.vacuum-map__room-segments{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:auto}.vacuum-map__room-segment{cursor:pointer;transition:all .2s ease}.vacuum-map__room-segment:hover{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .2));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .3));stroke:var(--accent-color, #d4af37);stroke-width:3}.vacuum-map__room-segment--selected:hover{fill:var(--accent-bg-transparent, rgba(212, 175, 55, .4))}.vacuum-map__rooms{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.vacuum-map__room{position:absolute;transform:translate(-50%,-50%);width:2rem;height:2rem;border-radius:50%;background:#ffffffe6;border:.125rem solid var(--border-color, #e0e0e0);display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:var(--text-primary, #1a1a1a);cursor:pointer;pointer-events:auto;transition:all .2s ease;box-shadow:0 .125rem .25rem #0000001a;z-index:2}.vacuum-map__room:hover{transform:translate(-50%,-50%) scale(1.1);background:#fff;box-shadow:0 .25rem .5rem #00000026}.vacuum-map__room--selected{background:var(--accent-color, #d4af37);color:#fff;border-color:var(--accent-color, #d4af37);box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(212, 175, 55, .4))}.vacuum-map__room--selected:hover{transform:translate(-50%,-50%) scale(1.1);box-shadow:0 .25rem .75rem var(--accent-color-shadow-color, rgba(212, 175, 55, .5))}.mode-tabs{display:flex;gap:.25rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.9375rem;padding:.25rem;margin-bottom:.9375rem}.mode-tabs--disabled{opacity:.5;pointer-events:none}.mode-tabs__button{flex:1;display:flex;align-items:center;justify-content:center;border:none;border-radius:.6875rem;padding:.625rem;font-weight:500;font-size:.875rem;cursor:pointer;transition:all .2s;background-color:transparent;color:var(--text-secondary, #666)}.mode-tabs__button-icon svg{scale:.5;color:var(--text-secondary, #666)}.mode-tabs__button--active{background-color:var(--surface-bg, white);color:var(--text-primary, #000);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .1))}.mode-tabs__button:hover:not(.mode-tabs__button--active):not(:disabled){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.mode-tabs__button:disabled{cursor:not-allowed}.action-buttons{display:flex;gap:.75rem;margin-top:.9375rem}.action-buttons__clean,.action-buttons__dock,.action-buttons__pause,.action-buttons__resume,.action-buttons__stop{flex:1;background:var(--accent-bg);border:.0625rem solid var(--accent-bg);border-radius:.875rem;padding:.875rem;font-size:.9375rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.5rem;transition:all .3s cubic-bezier(.16,1,.3,1);color:var(--text-primary)}.action-buttons__clean:disabled,.action-buttons__dock:disabled,.action-buttons__pause:disabled,.action-buttons__resume:disabled,.action-buttons__stop:disabled{opacity:.38;cursor:not-allowed;pointer-events:none}.action-buttons__clean--selected,.action-buttons__dock--selected,.action-buttons__pause--selected,.action-buttons__resume--selected,.action-buttons__stop--selected{transform:translateY(-.125rem);border:.0625rem solid var(--toggle-active-border);box-shadow:0 .625rem 1.25rem #0006,0 0 .75rem #5865f240,inset 0 .0625rem .0625rem #ffffff1a!important}.action-buttons__clean{color:var(--text-primary-invert);background:var(--accent-color)}.action-buttons__pause{color:var(--accent-color);border-color:var(--accent-color-hover)}.action-buttons__resume{color:#32d74b;border-color:#32d74b80}.action-buttons__stop{color:#ff453a;border-color:#ff453a80}.action-buttons__dock{background:var(--surface-secondary);color:var(--text-secondary)}.accordion{border-radius:.75rem;background:var(--card-bg, rgba(255, 255, 255, .8));overflow:hidden;margin-bottom:.5rem}.accordion__header{display:flex;align-items:center;justify-content:space-between;width:100%;padding:.875rem 1rem;background:none;border:none;cursor:pointer;color:var(--text-primary, #000);font-size:.9375rem;font-weight:500;text-align:left;transition:background-color .2s ease}.accordion__header:hover{background:var(--hover-bg, rgba(0, 0, 0, .03))}.accordion__header:active{background:var(--active-bg, rgba(0, 0, 0, .06))}.accordion__title-wrapper{display:flex;align-items:center;gap:.625rem}.accordion__icon{display:flex;align-items:center;justify-content:center;color:var(--accent-color, #007aff)}.accordion__icon svg{width:1.25rem;height:1.25rem}.accordion__title{font-weight:500}.accordion__chevron{width:1.25rem;height:1.25rem;color:var(--text-secondary, #666);transition:transform .3s ease}.accordion__content{max-height:0;overflow:hidden;transition:max-height .3s ease}.accordion__content-inner{padding:0 1rem 1rem}.accordion--open .accordion__chevron{transform:rotate(180deg)}.accordion--open .accordion__content{max-height:600px}.toggle{position:relative;display:inline-block;width:3.1875rem;height:1.9375rem}.toggle__input{opacity:0;width:0;height:0}.toggle__slider{position:absolute;cursor:pointer;inset:0;background-color:var(--surface-tertiary, #e0e0e0);transition:.4s;border-radius:1.9375rem}.toggle__knob{position:absolute;height:1.6875rem;width:1.6875rem;left:.125rem;bottom:.125rem;background-color:var(--surface-bg, white);transition:.4s;border-radius:50%;box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .2))}.toggle__input:checked+.toggle__slider{background-color:var(--toggle-active);border:.125rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color)}.toggle__input:checked+.toggle__slider .toggle__knob{transform:translate(1.25rem)}.toggle--disabled{opacity:.5;pointer-events:none}.circular-button{display:flex;flex-direction:column;align-items:center;gap:.5rem}.circular-button:hover{transform:translateY(-.125rem)}.circular-button__circle{border-radius:50%;background:var(--surface-secondary, #f5f5f5);display:flex;align-items:center;justify-content:center;cursor:pointer;border:.0625rem solid var(--text-primary, black);transition:all .2s ease;color:var(--text-primary)}.circular-button__circle--small{width:3.5rem;height:3.5rem;font-size:1.5rem}.circular-button__circle--medium{width:4.5rem;height:4.5rem;font-size:1.75rem}.circular-button__circle--large{width:5.5rem;height:5.5rem;font-size:2rem}.circular-button__circle--selected{background:var(--toggle-active);border:.1875rem solid var(--toggle-active-border);box-shadow:0 0 0 .25rem var(--toggle-active-shadow-color);color:var(--text-primary)}.circular-button__circle:hover:not(.circular-button__circle--selected){background:var(--surface-tertiary, #ebebeb)}.circular-button__circle:active{transform:scale(.95)}.circular-button__icon{display:flex;align-items:center;justify-content:center}.circular-button__icon--svg{width:100%;height:100%;color:var(--text-primary, #1a1a1a)}.circular-button__icon--svg svg{width:100%;height:100%;display:block}.circular-button__circle--selected .circular-button__icon--svg{color:#fff}.circular-button__label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center;line-height:1.2}.modal{position:absolute;inset:20% 0 0;background:var(--surface-bg, #f5f5f7);border-radius:1.25rem 1.25rem 0 0;padding:0 1.25rem 1.25rem;z-index:1000;max-height:80vh;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;color:var(--text-primary, black)}.modal::-webkit-scrollbar{display:none}.modal__backdrop{position:absolute;inset:0;background:var(--backdrop-bg, rgba(0, 0, 0, .4));z-index:999;border-radius:1.25rem}.modal__handle{width:2.25rem;height:.3125rem;background:var(--handle-bg, rgba(0, 0, 0, .15));border-radius:.1875rem;margin:.75rem auto 1.25rem}.modal__content{height:90%}.segmented-control{display:flex;gap:.5rem;background:var(--surface-tertiary, #e8e8e8);border-radius:.75rem;padding:.25rem}.segmented-control__button{flex:1;border:none;border-radius:.625rem;padding:.75rem;font-size:.9375rem;font-weight:500;cursor:pointer;background-color:transparent;color:var(--text-primary, #1a1a1a);transition:all .2s}.segmented-control__button--active{background-color:var(--surface-bg, white);box-shadow:0 .125rem .25rem var(--card-shadow, rgba(0, 0, 0, .08))}.segmented-control__button:hover:not(.segmented-control__button--active){background-color:var(--surface-bg-hover, rgba(255, 255, 255, .5))}.toast{position:fixed;bottom:1.25rem;left:50%;transform:translate(-50%);background:var(--surface-bg, #ffffff);border:.0625rem solid var(--border-color, #e0e0e0);border-radius:.5rem;padding:.75rem 1rem;display:flex;align-items:center;gap:.75rem;box-shadow:0 .25rem .75rem var(--card-shadow-hover, rgba(0, 0, 0, .12));animation:toast-slide-up .3s ease-out;z-index:1000;max-width:90%}@keyframes toast-slide-up{0%{transform:translate(-50%) translateY(1.25rem);opacity:0}to{transform:translate(-50%) translateY(0);opacity:1}}.toast__message{color:var(--text-primary, #1a1a1a);font-size:.875rem}.toast__close{background:none;border:none;color:var(--text-secondary, #666666);font-size:1.5rem;cursor:pointer;padding:0;width:1.5rem;height:1.5rem;display:flex;align-items:center;justify-content:center;line-height:1;transition:color .2s}.toast__close:hover{color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__header{margin-bottom:1.5rem}.cleaning-mode-modal__content-wrapper{width:100%;overflow-x:hidden;padding-bottom:1rem}.cleaning-mode-modal__section{margin-bottom:1.5rem}.cleaning-mode-modal__section-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500;margin:0 0 .75rem}.cleaning-mode-modal__section-header{display:flex;align-items:center;gap:.375rem;margin-bottom:.75rem}.cleaning-mode-modal__help-icon{display:inline-flex;align-items:center;justify-content:center;width:1rem;height:1rem;border-radius:50%;border:.09375rem solid var(--text-tertiary, #999);font-size:.6875rem;color:var(--text-tertiary, #999);font-weight:600}.cleaning-mode-modal__room-map{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem;display:flex;align-items:center;justify-content:center;min-height:7.5rem}.cleaning-mode-modal__placeholder{font-size:.8125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__mode-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem}.cleaning-mode-modal__mode-card{position:relative;border:.125rem solid var(--border-color, #e0e0e0);border-radius:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:var(--surface-bg, white);padding:1.5rem 1rem;transition:all .2s ease}.cleaning-mode-modal__mode-card:hover{transform:translateY(-.125rem);box-shadow:0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--selected{border:.1875rem solid var(--accent-color, #d4af37);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(212, 175, 55, .15))}.cleaning-mode-modal__mode-card--selected:hover{transform:translateY(-.125rem);box-shadow:0 0 0 .25rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25)),0 .25rem .75rem var(--card-shadow, rgba(0, 0, 0, .08))}.cleaning-mode-modal__mode-card--mapping{border-style:dashed;border-color:var(--accent-color, #d4af37);opacity:.85}.cleaning-mode-modal__mode-card--mapping:hover{opacity:1}.cleaning-mode-modal__mode-icon{border-radius:50%;margin-bottom:.75rem;display:flex;align-items:center;justify-content:center;font-size:1.75rem}.cleaning-mode-modal__mode-label{font-size:.875rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__mode-checkmark{position:absolute;top:.75rem;right:.75rem;width:1.5rem;height:1.5rem;border-radius:50%;background:var(--accent-color, #d4af37);display:flex;align-items:center;justify-content:center;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .15));color:#fff;font-size:.875rem}.cleaning-mode-modal__horizontal-scroll{display:flex;justify-content:space-around;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar{height:.25rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-track{background:var(--surface-secondary, #f1f1f1);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb{background:var(--surface-tertiary, #ccc);border-radius:.125rem}.cleaning-mode-modal__horizontal-scroll::-webkit-scrollbar-thumb:hover{background:var(--border-color, #bbb)}.cleaning-mode-modal__mode-option{min-width:4.375rem;display:flex;flex-direction:column;align-items:center;gap:.375rem}.cleaning-mode-modal__mode-option-label{font-size:.75rem;color:var(--text-secondary, #666);text-align:center;line-height:1.2}.cleaning-mode-modal__power-grid{display:grid;grid-template-columns:repeat(4,1fr);margin-bottom:1rem}.cleaning-mode-modal__power-option{display:flex;flex-direction:column;align-items:center;gap:.5rem}.cleaning-mode-modal__power-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.cleaning-mode-modal__max-plus{background:var(--surface-bg, white);border-radius:.75rem;padding:1rem}.cleaning-mode-modal__max-plus-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}.cleaning-mode-modal__max-plus-title{font-size:.9375rem;color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__max-plus-description{font-size:.8125rem;color:var(--text-tertiary, #999);margin:0;line-height:1.4}.cleaning-mode-modal__slider-container{position:relative;padding:0 .5rem;margin-bottom:.75rem}.cleaning-mode-modal__slider-wrapper{position:relative;padding-top:2rem}.cleaning-mode-modal__slider{width:100%;height:.375rem;border-radius:.1875rem;outline:none;-webkit-appearance:none;appearance:none;cursor:pointer}.cleaning-mode-modal__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider::-moz-range-thumb{width:1.25rem;height:1.25rem;border-radius:50%;background:var(--accent-color, #d4af37);cursor:pointer;border:none;box-shadow:0 .125rem .25rem var(--handle-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip{position:absolute;top:-.5rem;left:0;transform:translate(-50%);background:var(--accent-color, #d4af37);color:#fff;padding:.25rem .5rem;border-radius:.375rem;font-size:.85rem;font-weight:600;white-space:nowrap;pointer-events:none;box-shadow:0 .125rem .375rem var(--accent-shadow, rgba(0, 0, 0, .2))}.cleaning-mode-modal__slider-tooltip:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);width:0;height:0;border-left:.3125rem solid transparent;border-right:.3125rem solid transparent;border-top:.3125rem solid var(--accent-color, #d4af37)}.cleaning-mode-modal__slider-value{position:absolute;top:-2rem;transform:translate(-50%);background:var(--accent-color, #d4af37);border-radius:50%;width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;font-size:.875rem;font-weight:600;color:#fff;box-shadow:0 .125rem .5rem var(--accent-color-shadow-color, rgba(88, 101, 242, .25));pointer-events:none}.cleaning-mode-modal__slider-labels{display:flex;justify-content:space-between;padding:0 .5rem;margin-top:1.5rem}.cleaning-mode-modal__slider-label{font-size:.8125rem}.cleaning-mode-modal__slider-label--inactive{color:var(--text-tertiary, #999)}.cleaning-mode-modal__slider-label--active{color:var(--text-primary, #1a1a1a);font-weight:500}.cleaning-mode-modal__setting{display:flex;align-items:center;justify-content:space-between;padding:1rem;background:var(--surface-bg, white);border-radius:.75rem;margin-bottom:1rem}.cleaning-mode-modal__setting--clickable{cursor:pointer;transition:background .2s ease}.cleaning-mode-modal__setting--clickable:hover{background:var(--surface-secondary, #f8f8f8)}.cleaning-mode-modal__setting--clickable:active{background:var(--surface-tertiary, #f0f0f0)}.cleaning-mode-modal__setting-label{font-size:.9375rem;color:var(--text-primary, #1a1a1a)}.cleaning-mode-modal__setting-value{display:flex;align-items:center;gap:.5rem;font-size:.875rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__setting-arrow{font-size:1.125rem;color:var(--text-tertiary, #999)}.cleaning-mode-modal__route-grid{display:flex;justify-content:space-around}.cleaning-mode-modal__route-option{display:flex;flex-direction:column;align-items:center;gap:.5rem}.cleaning-mode-modal__route-label{font-size:.8125rem;color:var(--text-primary, #1a1a1a);text-align:center}.shortcuts-modal{padding:0}.shortcuts-modal__title{font-size:1.3rem;font-weight:600;margin:0 0 1rem;padding:1.5rem 1.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty{padding:2rem 1.5rem;text-align:center;color:var(--text-secondary, #666)}.shortcuts-modal__empty p{margin:.5rem 0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__empty-hint{font-size:.9rem;color:var(--text-tertiary, #888)}.shortcuts-modal__list{max-height:35rem;overflow-y:auto;padding:.5rem 0;gap:.5rem;display:flex;flex-direction:column}.shortcuts-modal__item{display:flex;align-items:center;gap:1rem;padding:.75rem 1.5rem;margin:.25rem 1rem;background:var(--surface-bg, #fff);border:2px solid var(--accent-color);border-radius:.75rem;box-shadow:0 .125rem .5rem var(--accent-shadow);transition:all .2s;width:90%}.shortcuts-modal__item:hover{box-shadow:0 .25rem .75rem var(--accent-shadow);transform:translateY(-.0625rem)}.shortcuts-modal__item-info{flex:1;min-width:0;display:flex;align-items:center;gap:.75rem}.shortcuts-modal__item-icon{display:flex;font-size:1.3rem;flex-shrink:0;color:var(--text-primary, #1a1a1a)}.shortcuts-modal__item-icon svg{scale:.8}.shortcuts-modal__item-name{font-size:1rem;font-weight:500;color:var(--text-primary, #1a1a1a)}.ai-detection-section{display:flex;flex-direction:column;gap:.75rem}.ai-detection-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.ai-detection-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.ai-detection-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.ai-detection-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section{display:flex;flex-direction:column;gap:.75rem}.carpet-settings-section__item{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.5rem 0}.carpet-settings-section__item--select{flex-direction:column;align-items:stretch;gap:.5rem}.carpet-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.carpet-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #333)}.carpet-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.carpet-settings-section__select{width:100%;padding:.625rem .75rem;font-size:.875rem;color:var(--text-primary, #333);background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;cursor:pointer;outline:none;transition:border-color .2s ease}.carpet-settings-section__select:focus{border-color:var(--accent-color, #007aff)}.carpet-settings-section__select:hover{background:var(--surface-tertiary, #eee)}.consumables-section{display:flex;flex-direction:column;gap:1rem}.consumables-section__item{display:flex;flex-direction:column;gap:.375rem}.consumables-section__info{display:flex;justify-content:space-between;align-items:center}.consumables-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.consumables-section__stats{font-size:.75rem;color:var(--text-secondary, #666)}.consumables-section__progress{height:.375rem;background:var(--progress-bg, rgba(0, 0, 0, .1));border-radius:.1875rem;overflow:hidden}.consumables-section__progress-bar{height:100%;border-radius:.1875rem;transition:width .3s ease}.consumables-section__reset{align-self:flex-end;padding:.25rem .75rem;font-size:.75rem;font-weight:500;color:var(--accent-color, #007aff);background:none;border:1px solid var(--accent-color, #007aff);border-radius:.375rem;cursor:pointer;transition:all .2s ease}.consumables-section__reset:hover{background:var(--accent-color, #007aff);color:#fff}.consumables-section__reset:active{opacity:.8}.device-info-section{display:flex;flex-direction:column;gap:.75rem}.device-info-section__item{display:flex;justify-content:space-between;align-items:center;padding:.25rem 0;border-bottom:1px solid var(--divider-color, rgba(0, 0, 0, .06))}.device-info-section__item:last-child{border-bottom:none}.device-info-section__label{font-size:.875rem;color:var(--text-secondary, #666)}.device-info-section__value{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.map-management-section__description{font-size:.8125rem;color:var(--text-secondary, #666);margin:0 0 .75rem;line-height:1.4}.map-management-section__empty{font-size:.875rem;color:var(--text-secondary, #666);text-align:center;padding:1rem 0;margin:0}.map-management-section__maps{display:flex;flex-wrap:wrap;gap:.5rem}.map-management-section__map{padding:.5rem 1rem;font-size:.875rem;font-weight:500;color:var(--text-primary, #000);background:var(--button-bg, rgba(0, 0, 0, .05));border:2px solid transparent;border-radius:.5rem;cursor:pointer;transition:all .2s ease}.map-management-section__map:hover{background:var(--button-hover-bg, rgba(0, 0, 0, .08))}.map-management-section__map--active{border-color:var(--accent-color, #007aff);background:var(--accent-bg, rgba(0, 122, 255, .1));color:var(--accent-color, #007aff)}.quick-settings-section{display:flex;flex-direction:column;gap:1rem}.quick-settings-section__item{display:flex;justify-content:space-between;align-items:center;gap:1rem}.quick-settings-section__info{display:flex;flex-direction:column;gap:.125rem;flex:1;min-width:0}.quick-settings-section__label{font-size:.875rem;font-weight:500;color:var(--text-primary, #000)}.quick-settings-section__description{font-size:.75rem;color:var(--text-secondary, #666);line-height:1.3}.volume-section{display:flex;flex-direction:row;gap:1rem}.volume-section__control{display:flex;align-items:center;gap:.75rem;flex:1}.volume-section__icon{display:flex;align-items:center;justify-content:center;color:var(--text-secondary, #666);flex-shrink:0}.volume-section__slider-container{flex:1;padding-top:1.5rem;margin-top:1rem}.volume-section__slider-wrapper{position:relative;width:100%}.volume-section__slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:3px;outline:none;cursor:pointer}.volume-section__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-webkit-slider-thumb:hover{transform:scale(1.1)}.volume-section__slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--accent-color, #007aff);cursor:pointer;border:none;box-shadow:0 2px 4px #0003;transition:transform .1s ease}.volume-section__slider::-moz-range-thumb:hover{transform:scale(1.1)}.volume-section__tooltip{position:absolute;top:-1.75rem;transform:translate(-50%);background:var(--accent-color, #007aff);color:#fff;padding:.25rem .5rem;border-radius:4px;font-size:.75rem;font-weight:500;white-space:nowrap;pointer-events:none}.volume-section__tooltip:after{content:\"\";position:absolute;top:100%;left:50%;transform:translate(-50%);border:4px solid transparent;border-top-color:var(--accent-color, #007aff)}.volume-section__test-button{display:flex;align-items:center;justify-content:center;gap:.5rem;padding:.625rem 1rem;background:var(--surface-secondary, #f5f5f5);border:1px solid var(--border-color, #e0e0e0);border-radius:8px;color:var(--text-primary, #333);font-size:.875rem;font-weight:500;cursor:pointer;transition:all .2s ease}.volume-section__test-button:hover{background:var(--surface-tertiary, #eee)}.volume-section__test-button:active{transform:scale(.98)}.volume-section__test-button svg{color:var(--accent-color, #007aff)}.settings-panel{height:100%}.settings-panel__title{font-size:1.25rem;font-weight:600;margin:0 0 1rem;text-align:center;color:var(--text-primary, #000)}.settings-panel__scroll-wrapper{height:90%;overflow-y:auto}.settings-panel__sections{display:flex;flex-direction:column;gap:.25rem;padding-right:.25rem}.settings-panel__sections::-webkit-scrollbar{width:4px}.settings-panel__sections::-webkit-scrollbar-track{background:transparent}.settings-panel__sections::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb, rgba(0, 0, 0, .2));border-radius:2px}.room-selection-display{padding:.75rem 1rem;background:var(--accent-bg, #e3f2fd);border-radius:.5rem;margin-bottom:.75rem;font-size:.875rem;color:var(--text-primary, #1a1a1a)}.room-selection-display__label{font-weight:600;margin-right:.5rem;color:var(--accent-color, #007aff)}.room-selection-display__rooms{color:var(--text-secondary, #666666)}.dreame-vacuum-card{position:relative;background:var(--card-bg, #f5f5f7);border-radius:1.25rem;overflow:hidden;box-shadow:0 .125rem 1.25rem var(--card-shadow, rgba(0, 0, 0, .08));font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.dreame-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center}.dreame-vacuum-card__container{display:flex;flex-direction:column;gap:1rem}.dreame-vacuum-card__controls{padding:0 1.25rem 1.25rem}.dreame-vacuum-card__error{padding:1.25rem;text-align:center;color:var(--error-color, #ff3b30);font-size:.875rem}.valetudo-map-canvas{width:100%;background:var(--card-bg, #1a1a2e);border-radius:.75rem;overflow:hidden;display:flex;align-items:center;justify-content:center;min-height:200px;position:relative;-webkit-user-select:none;user-select:none;touch-action:none}.valetudo-map-canvas--zone-mode{cursor:crosshair}.valetudo-map-canvas--room-mode{cursor:pointer}.valetudo-map-canvas__inner{position:relative;width:100%;transform-origin:center center;will-change:transform}.valetudo-map-canvas__canvas{width:100%;height:auto;display:block;image-rendering:auto}.valetudo-map-canvas__zone-drag{position:absolute;background:#ff980033;border:2px dashed rgba(255,152,0,.9);pointer-events:none;border-radius:2px}.valetudo-map-canvas__widget-zone{position:absolute;background:#ff98002e;border:2px dashed rgba(255,152,0,.9);border-radius:3px;box-sizing:border-box}.valetudo-map-canvas__widget-zone-move{position:absolute;inset:0;cursor:move;touch-action:none}.valetudo-map-canvas__widget-zone-move:after{content:\"✥\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.4rem;color:#ff9800d9;pointer-events:none;text-shadow:0 0 3px #000}.valetudo-map-canvas__widget-zone-resize{position:absolute;bottom:-8px;right:-8px;width:24px;height:24px;background:#ff9800e6;border-radius:50%;cursor:se-resize;touch-action:none;z-index:2}.valetudo-map-canvas__widget-zone-resize:after{content:\"⤡\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:.9rem;color:#fff;pointer-events:none}.valetudo-map-canvas__widget-zone-delete{position:absolute;top:-10px;right:-10px;width:22px;height:22px;background:#e53935;color:#fff;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none}.valetudo-map-canvas--restrictions-wall,.valetudo-map-canvas--restrictions-no_go,.valetudo-map-canvas--restrictions-no_mop{cursor:crosshair}.valetudo-map-canvas__pending-restriction{position:absolute;border-radius:3px;box-sizing:border-box}.valetudo-map-canvas__pending-restriction--wall{background:#f443361a;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__pending-restriction--no_go{background:#f443362e;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__pending-restriction--no_mop{background:#2196f32e;border:2px dashed rgba(33,150,243,.85)}.valetudo-map-canvas__pending-restriction-move{position:absolute;inset:0;cursor:move;touch-action:none}.valetudo-map-canvas__pending-restriction-move:after{content:\"✥\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.4rem;color:#f44336d9;pointer-events:none;text-shadow:0 0 3px #000}.valetudo-map-canvas__pending-restriction-resize{position:absolute;bottom:-8px;right:-8px;width:24px;height:24px;background:#f44336e6;border-radius:50%;cursor:se-resize;touch-action:none;z-index:2}.valetudo-map-canvas__pending-restriction-resize:after{content:\"⤡\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:.9rem;color:#fff;pointer-events:none}.valetudo-map-canvas__pending-restriction-delete{position:absolute;top:-10px;right:-10px;width:22px;height:22px;background:#e53935;color:#fff;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none}.valetudo-map-canvas__pending-restriction-confirm{position:absolute;bottom:-10px;left:-10px;width:26px;height:26px;background:#43a047;color:#fff;border:none;border-radius:50%;font-size:.9rem;line-height:1;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-endpoint{width:22px;height:22px;background:#f44336e6;border:2px solid #fff;border-radius:50%;cursor:move;touch-action:none;z-index:3;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-action-btn{width:22px;height:22px;border:none;border-radius:50%;font-size:.85rem;line-height:1;cursor:pointer;z-index:3;display:flex;align-items:center;justify-content:center;padding:0;touch-action:none;color:#fff;box-shadow:0 1px 4px #0006}.valetudo-map-canvas__wall-action-btn--delete{background:#e53935}.valetudo-map-canvas__wall-action-btn--confirm{background:#43a047}.valetudo-map-canvas--restrictions-select{cursor:pointer}.valetudo-map-canvas__restriction-preview{position:absolute;pointer-events:none;border-radius:2px}.valetudo-map-canvas__restriction-preview--no_go{background:#f443362e;border:2px dashed rgba(244,67,54,.85)}.valetudo-map-canvas__restriction-preview--no_mop{background:#2196f32e;border:2px dashed rgba(33,150,243,.85)}.valetudo-map-canvas__restriction-preview-svg{position:absolute;inset:0;pointer-events:none}.valetudo-map-canvas__bottom-controls{position:absolute;bottom:.5rem;right:.5rem;display:flex;flex-direction:row;align-items:flex-end;gap:4px;z-index:10}.valetudo-map-canvas__zoom-controls{display:flex;flex-direction:column;gap:2px}.valetudo-map-canvas__zoom-controls button{width:28px;height:28px;background:#0000008c;color:#fff;border:1px solid rgba(255,255,255,.2);border-radius:4px;font-size:1.1rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}.valetudo-map-canvas__zoom-controls button:active{background:#fff3}.valetudo-map-canvas__iterations-btn{width:32px;height:32px;background:rgba(var(--rgb-primary-color, 3, 169, 244),.7);color:#fff;border:1px solid rgba(255,255,255,.35);border-radius:4px;font-size:.8rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}.valetudo-map-canvas__iterations-btn:active{background:rgba(var(--rgb-primary-color, 3, 169, 244),.9)}.restrictions-toolbar{display:none}.rt{display:flex;flex-direction:column;align-items:stretch;gap:6px;width:100%}.rt__seg{display:flex;border-radius:8px;overflow:hidden;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);flex-shrink:0}.rt__seg-btn{display:inline-flex;align-items:center;justify-content:center;gap:5px;flex:1;padding:0 10px;height:32px;border:none;border-right:1px solid rgba(255,255,255,.07);background:transparent;color:#ffffff73;font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;transition:background .12s,color .12s;outline:none}.rt__seg-btn:last-child{border-right:none}.rt__seg-btn:hover:not(.rt__seg-btn--active){background:#ffffff14;color:#fffc}.rt__seg-btn--select.rt__seg-btn--active{background:#ffffff26;color:#fff}.rt__seg-btn--wall.rt__seg-btn--active,.rt__seg-btn--no_go.rt__seg-btn--active{background:#ef535047;color:#ffcdd2}.rt__seg-btn--no_mop.rt__seg-btn--active{background:#42a5f547;color:#bbdefb}.rt__seg-btn svg{flex-shrink:0}.rt__actions{display:flex;align-items:center;justify-content:center;gap:6px}.rt__action-btn{display:inline-flex;align-items:center;justify-content:center;gap:5px;height:32px;padding:0 10px;border:1px solid transparent;border-radius:7px;background:#ffffff0f;color:#ffffff73;font-size:12px;font-weight:500;cursor:pointer;white-space:nowrap;transition:background .12s,color .12s,border-color .12s;outline:none}.rt__action-btn:disabled{opacity:.38;cursor:not-allowed}.rt__action-btn:hover:not(:disabled){background:#ffffff1a;color:#ffffffd9}.rt__action-btn--delete{width:32px;padding:0;color:#ef5350a6;border-color:#ef535033}.rt__action-btn--delete:hover:not(:disabled){background:#ef53502e;color:#ef5350;border-color:#ef535066}.rt__action-btn--save{color:#ffffff47}.rt__action-btn--save.rt__action-btn--save-dirty{background:#4caf5033;color:#a5d6a7;border-color:#4caf5059}.rt__action-btn--save.rt__action-btn--save-dirty:hover:not(:disabled){background:#4caf504d;color:#c8e6c9}.rt__action-btn svg{flex-shrink:0}.valetudo-vacuum-card__error{padding:1.25rem;color:var(--error-color, #ff3b30);text-align:center;font-size:.875rem}.valetudo-vacuum-card__warning{padding:.5rem 1.25rem;background:var(--warning-bg, #fff3cd);color:var(--warning-color, #856404);font-size:.75rem;border-radius:0 0 1.25rem 1.25rem}.valetudo-vacuum-card__map-placeholder{margin:0 1.25rem;min-height:200px;display:flex;align-items:center;justify-content:center;background:var(--surface-secondary, #e8e8e8);border-radius:.75rem;font-size:.875rem;color:var(--text-secondary, #666)}.valetudo-selected-rooms{display:flex;align-items:baseline;gap:.4rem;padding:0 0 .25rem;font-size:.8rem;line-height:1.4}.valetudo-selected-rooms__label{font-weight:600;color:var(--text-secondary, #888);white-space:nowrap}.valetudo-selected-rooms__names{color:var(--accent-color, #007aff);font-weight:500}.valetudo-config-error{display:flex;flex-direction:column;gap:.75rem;padding:.25rem 0}.valetudo-config-error__title{font-size:1rem;font-weight:700;color:var(--text-primary, #1a1a1a);margin:0}.valetudo-config-error__desc{font-size:.875rem;color:var(--text-secondary, #666);margin:0}.valetudo-config-error__option{font-size:.875rem;color:var(--text-primary, #1a1a1a);margin:0}.valetudo-config-error__yaml{background:var(--surface-secondary, #f0f0f0);border:1px solid var(--border-color, #ddd);border-radius:.5rem;padding:.75rem;font-size:.75rem;font-family:monospace;white-space:pre;overflow-x:auto;color:var(--text-primary, #1a1a1a);margin:0;-webkit-user-select:all;user-select:all}.valetudo-config-error__close{align-self:flex-end;background:var(--accent-color, #007aff);color:#fff;border:none;border-radius:.5rem;padding:.5rem 1.25rem;font-size:.875rem;font-weight:600;cursor:pointer;transition:opacity .15s}.valetudo-config-error__close:hover{opacity:.85}\n";
  document.head.appendChild(style);
})();
function Q_(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var wr = { exports: {} }, Cl = {};
var Qm;
function Jh() {
  if (Qm) return Cl;
  Qm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(u, g, m) {
    var h = null;
    if (m !== void 0 && (h = "" + m), g.key !== void 0 && (h = "" + g.key), "key" in g) {
      m = {};
      for (var y in g)
        y !== "key" && (m[y] = g[y]);
    } else m = g;
    return g = m.ref, {
      $$typeof: o,
      type: u,
      key: h,
      ref: g !== void 0 ? g : null,
      props: m
    };
  }
  return Cl.Fragment = c, Cl.jsx = s, Cl.jsxs = s, Cl;
}
var $m;
function Ih() {
  return $m || ($m = 1, wr.exports = Jh()), wr.exports;
}
var r = Ih(), zr = { exports: {} }, Me = {};
var Jm;
function Wh() {
  if (Jm) return Me;
  Jm = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), f = /* @__PURE__ */ Symbol.for("react.memo"), p = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), C = Symbol.iterator;
  function E(b) {
    return b === null || typeof b != "object" ? null : (b = C && b[C] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var z = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, L = Object.assign, Q = {};
  function A(b, H, te) {
    this.props = b, this.context = H, this.refs = Q, this.updater = te || z;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(b, H) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, H, "setState");
  }, A.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function I() {
  }
  I.prototype = A.prototype;
  function Z(b, H, te) {
    this.props = b, this.context = H, this.refs = Q, this.updater = te || z;
  }
  var G = Z.prototype = new I();
  G.constructor = Z, L(G, A.prototype), G.isPureReactComponent = !0;
  var W = Array.isArray;
  function V() {
  }
  var Y = { H: null, A: null, T: null, S: null }, J = Object.prototype.hasOwnProperty;
  function ae(b, H, te) {
    var oe = te.ref;
    return {
      $$typeof: o,
      type: b,
      key: H,
      ref: oe !== void 0 ? oe : null,
      props: te
    };
  }
  function ee(b, H) {
    return ae(b.type, H, b.props);
  }
  function re(b) {
    return typeof b == "object" && b !== null && b.$$typeof === o;
  }
  function we(b) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(te) {
      return H[te];
    });
  }
  var me = /\/+/g;
  function je(b, H) {
    return typeof b == "object" && b !== null && b.key != null ? we("" + b.key) : H.toString(36);
  }
  function Ne(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(V, V) : (b.status = "pending", b.then(
          function(H) {
            b.status === "pending" && (b.status = "fulfilled", b.value = H);
          },
          function(H) {
            b.status === "pending" && (b.status = "rejected", b.reason = H);
          }
        )), b.status) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function D(b, H, te, oe, ve) {
    var ge = typeof b;
    (ge === "undefined" || ge === "boolean") && (b = null);
    var de = !1;
    if (b === null) de = !0;
    else
      switch (ge) {
        case "bigint":
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case o:
            case c:
              de = !0;
              break;
            case p:
              return de = b._init, D(
                de(b._payload),
                H,
                te,
                oe,
                ve
              );
          }
      }
    if (de)
      return ve = ve(b), de = oe === "" ? "." + je(b, 0) : oe, W(ve) ? (te = "", de != null && (te = de.replace(me, "$&/") + "/"), D(ve, H, te, "", function(ya) {
        return ya;
      })) : ve != null && (re(ve) && (ve = ee(
        ve,
        te + (ve.key == null || b && b.key === ve.key ? "" : ("" + ve.key).replace(
          me,
          "$&/"
        ) + "/") + de
      )), H.push(ve)), 1;
    de = 0;
    var Pe = oe === "" ? "." : oe + ":";
    if (W(b))
      for (var Oe = 0; Oe < b.length; Oe++)
        oe = b[Oe], ge = Pe + je(oe, Oe), de += D(
          oe,
          H,
          te,
          ge,
          ve
        );
    else if (Oe = E(b), typeof Oe == "function")
      for (b = Oe.call(b), Oe = 0; !(oe = b.next()).done; )
        oe = oe.value, ge = Pe + je(oe, Oe++), de += D(
          oe,
          H,
          te,
          ge,
          ve
        );
    else if (ge === "object") {
      if (typeof b.then == "function")
        return D(
          Ne(b),
          H,
          te,
          oe,
          ve
        );
      throw H = String(b), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return de;
  }
  function F(b, H, te) {
    if (b == null) return b;
    var oe = [], ve = 0;
    return D(b, oe, "", "", function(ge) {
      return H.call(te, ge, ve++);
    }), oe;
  }
  function ie(b) {
    if (b._status === -1) {
      var H = b._result;
      H = H(), H.then(
        function(te) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = te);
        },
        function(te) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = te);
        }
      ), b._status === -1 && (b._status = 0, b._result = H);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var ze = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  }, Ee = {
    map: F,
    forEach: function(b, H, te) {
      F(
        b,
        function() {
          H.apply(this, arguments);
        },
        te
      );
    },
    count: function(b) {
      var H = 0;
      return F(b, function() {
        H++;
      }), H;
    },
    toArray: function(b) {
      return F(b, function(H) {
        return H;
      }) || [];
    },
    only: function(b) {
      if (!re(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  };
  return Me.Activity = S, Me.Children = Ee, Me.Component = A, Me.Fragment = s, Me.Profiler = g, Me.PureComponent = Z, Me.StrictMode = u, Me.Suspense = v, Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, Me.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return Y.H.useMemoCache(b);
    }
  }, Me.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, Me.cacheSignal = function() {
    return null;
  }, Me.cloneElement = function(b, H, te) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var oe = L({}, b.props), ve = b.key;
    if (H != null)
      for (ge in H.key !== void 0 && (ve = "" + H.key), H)
        !J.call(H, ge) || ge === "key" || ge === "__self" || ge === "__source" || ge === "ref" && H.ref === void 0 || (oe[ge] = H[ge]);
    var ge = arguments.length - 2;
    if (ge === 1) oe.children = te;
    else if (1 < ge) {
      for (var de = Array(ge), Pe = 0; Pe < ge; Pe++)
        de[Pe] = arguments[Pe + 2];
      oe.children = de;
    }
    return ae(b.type, ve, oe);
  }, Me.createContext = function(b) {
    return b = {
      $$typeof: h,
      _currentValue: b,
      _currentValue2: b,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, b.Provider = b, b.Consumer = {
      $$typeof: m,
      _context: b
    }, b;
  }, Me.createElement = function(b, H, te) {
    var oe, ve = {}, ge = null;
    if (H != null)
      for (oe in H.key !== void 0 && (ge = "" + H.key), H)
        J.call(H, oe) && oe !== "key" && oe !== "__self" && oe !== "__source" && (ve[oe] = H[oe]);
    var de = arguments.length - 2;
    if (de === 1) ve.children = te;
    else if (1 < de) {
      for (var Pe = Array(de), Oe = 0; Oe < de; Oe++)
        Pe[Oe] = arguments[Oe + 2];
      ve.children = Pe;
    }
    if (b && b.defaultProps)
      for (oe in de = b.defaultProps, de)
        ve[oe] === void 0 && (ve[oe] = de[oe]);
    return ae(b, ge, ve);
  }, Me.createRef = function() {
    return { current: null };
  }, Me.forwardRef = function(b) {
    return { $$typeof: y, render: b };
  }, Me.isValidElement = re, Me.lazy = function(b) {
    return {
      $$typeof: p,
      _payload: { _status: -1, _result: b },
      _init: ie
    };
  }, Me.memo = function(b, H) {
    return {
      $$typeof: f,
      type: b,
      compare: H === void 0 ? null : H
    };
  }, Me.startTransition = function(b) {
    var H = Y.T, te = {};
    Y.T = te;
    try {
      var oe = b(), ve = Y.S;
      ve !== null && ve(te, oe), typeof oe == "object" && oe !== null && typeof oe.then == "function" && oe.then(V, ze);
    } catch (ge) {
      ze(ge);
    } finally {
      H !== null && te.types !== null && (H.types = te.types), Y.T = H;
    }
  }, Me.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, Me.use = function(b) {
    return Y.H.use(b);
  }, Me.useActionState = function(b, H, te) {
    return Y.H.useActionState(b, H, te);
  }, Me.useCallback = function(b, H) {
    return Y.H.useCallback(b, H);
  }, Me.useContext = function(b) {
    return Y.H.useContext(b);
  }, Me.useDebugValue = function() {
  }, Me.useDeferredValue = function(b, H) {
    return Y.H.useDeferredValue(b, H);
  }, Me.useEffect = function(b, H) {
    return Y.H.useEffect(b, H);
  }, Me.useEffectEvent = function(b) {
    return Y.H.useEffectEvent(b);
  }, Me.useId = function() {
    return Y.H.useId();
  }, Me.useImperativeHandle = function(b, H, te) {
    return Y.H.useImperativeHandle(b, H, te);
  }, Me.useInsertionEffect = function(b, H) {
    return Y.H.useInsertionEffect(b, H);
  }, Me.useLayoutEffect = function(b, H) {
    return Y.H.useLayoutEffect(b, H);
  }, Me.useMemo = function(b, H) {
    return Y.H.useMemo(b, H);
  }, Me.useOptimistic = function(b, H) {
    return Y.H.useOptimistic(b, H);
  }, Me.useReducer = function(b, H, te) {
    return Y.H.useReducer(b, H, te);
  }, Me.useRef = function(b) {
    return Y.H.useRef(b);
  }, Me.useState = function(b) {
    return Y.H.useState(b);
  }, Me.useSyncExternalStore = function(b, H, te) {
    return Y.H.useSyncExternalStore(
      b,
      H,
      te
    );
  }, Me.useTransition = function() {
    return Y.H.useTransition();
  }, Me.version = "19.2.3", Me;
}
var Im;
function Kr() {
  return Im || (Im = 1, zr.exports = Wh()), zr.exports;
}
var R = Kr();
const $_ = /* @__PURE__ */ Q_(R);
var Er = { exports: {} }, jl = {}, Nr = { exports: {} }, Mr = {};
var Wm;
function Fh() {
  return Wm || (Wm = 1, (function(o) {
    function c(D, F) {
      var ie = D.length;
      D.push(F);
      e: for (; 0 < ie; ) {
        var ze = ie - 1 >>> 1, Ee = D[ze];
        if (0 < g(Ee, F))
          D[ze] = F, D[ie] = Ee, ie = ze;
        else break e;
      }
    }
    function s(D) {
      return D.length === 0 ? null : D[0];
    }
    function u(D) {
      if (D.length === 0) return null;
      var F = D[0], ie = D.pop();
      if (ie !== F) {
        D[0] = ie;
        e: for (var ze = 0, Ee = D.length, b = Ee >>> 1; ze < b; ) {
          var H = 2 * (ze + 1) - 1, te = D[H], oe = H + 1, ve = D[oe];
          if (0 > g(te, ie))
            oe < Ee && 0 > g(ve, te) ? (D[ze] = ve, D[oe] = ie, ze = oe) : (D[ze] = te, D[H] = ie, ze = H);
          else if (oe < Ee && 0 > g(ve, ie))
            D[ze] = ve, D[oe] = ie, ze = oe;
          else break e;
        }
      }
      return F;
    }
    function g(D, F) {
      var ie = D.sortIndex - F.sortIndex;
      return ie !== 0 ? ie : D.id - F.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      o.unstable_now = function() {
        return m.now();
      };
    } else {
      var h = Date, y = h.now();
      o.unstable_now = function() {
        return h.now() - y;
      };
    }
    var v = [], f = [], p = 1, S = null, C = 3, E = !1, z = !1, L = !1, Q = !1, A = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
    function G(D) {
      for (var F = s(f); F !== null; ) {
        if (F.callback === null) u(f);
        else if (F.startTime <= D)
          u(f), F.sortIndex = F.expirationTime, c(v, F);
        else break;
        F = s(f);
      }
    }
    function W(D) {
      if (L = !1, G(D), !z)
        if (s(v) !== null)
          z = !0, V || (V = !0, we());
        else {
          var F = s(f);
          F !== null && Ne(W, F.startTime - D);
        }
    }
    var V = !1, Y = -1, J = 5, ae = -1;
    function ee() {
      return Q ? !0 : !(o.unstable_now() - ae < J);
    }
    function re() {
      if (Q = !1, V) {
        var D = o.unstable_now();
        ae = D;
        var F = !0;
        try {
          e: {
            z = !1, L && (L = !1, I(Y), Y = -1), E = !0;
            var ie = C;
            try {
              t: {
                for (G(D), S = s(v); S !== null && !(S.expirationTime > D && ee()); ) {
                  var ze = S.callback;
                  if (typeof ze == "function") {
                    S.callback = null, C = S.priorityLevel;
                    var Ee = ze(
                      S.expirationTime <= D
                    );
                    if (D = o.unstable_now(), typeof Ee == "function") {
                      S.callback = Ee, G(D), F = !0;
                      break t;
                    }
                    S === s(v) && u(v), G(D);
                  } else u(v);
                  S = s(v);
                }
                if (S !== null) F = !0;
                else {
                  var b = s(f);
                  b !== null && Ne(
                    W,
                    b.startTime - D
                  ), F = !1;
                }
              }
              break e;
            } finally {
              S = null, C = ie, E = !1;
            }
            F = void 0;
          }
        } finally {
          F ? we() : V = !1;
        }
      }
    }
    var we;
    if (typeof Z == "function")
      we = function() {
        Z(re);
      };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), je = me.port2;
      me.port1.onmessage = re, we = function() {
        je.postMessage(null);
      };
    } else
      we = function() {
        A(re, 0);
      };
    function Ne(D, F) {
      Y = A(function() {
        D(o.unstable_now());
      }, F);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, o.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < D ? Math.floor(1e3 / D) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, o.unstable_next = function(D) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = C;
      }
      var ie = C;
      C = F;
      try {
        return D();
      } finally {
        C = ie;
      }
    }, o.unstable_requestPaint = function() {
      Q = !0;
    }, o.unstable_runWithPriority = function(D, F) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var ie = C;
      C = D;
      try {
        return F();
      } finally {
        C = ie;
      }
    }, o.unstable_scheduleCallback = function(D, F, ie) {
      var ze = o.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? ze + ie : ze) : ie = ze, D) {
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
      return Ee = ie + Ee, D = {
        id: p++,
        callback: F,
        priorityLevel: D,
        startTime: ie,
        expirationTime: Ee,
        sortIndex: -1
      }, ie > ze ? (D.sortIndex = ie, c(f, D), s(v) === null && D === s(f) && (L ? (I(Y), Y = -1) : L = !0, Ne(W, ie - ze))) : (D.sortIndex = Ee, c(v, D), z || E || (z = !0, V || (V = !0, we()))), D;
    }, o.unstable_shouldYield = ee, o.unstable_wrapCallback = function(D) {
      var F = C;
      return function() {
        var ie = C;
        C = F;
        try {
          return D.apply(this, arguments);
        } finally {
          C = ie;
        }
      };
    };
  })(Mr)), Mr;
}
var Fm;
function Ph() {
  return Fm || (Fm = 1, Nr.exports = Fh()), Nr.exports;
}
var kr = { exports: {} }, Et = {};
var Pm;
function e0() {
  if (Pm) return Et;
  Pm = 1;
  var o = Kr();
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
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: g,
      key: S == null ? null : "" + S,
      children: v,
      containerInfo: f,
      implementation: p
    };
  }
  var h = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(v, f) {
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
      var p = f.as, S = y(p, f.crossOrigin), C = typeof f.integrity == "string" ? f.integrity : void 0, E = typeof f.fetchPriority == "string" ? f.fetchPriority : void 0;
      p === "style" ? u.d.S(
        v,
        typeof f.precedence == "string" ? f.precedence : void 0,
        {
          crossOrigin: S,
          integrity: C,
          fetchPriority: E
        }
      ) : p === "script" && u.d.X(v, {
        crossOrigin: S,
        integrity: C,
        fetchPriority: E,
        nonce: typeof f.nonce == "string" ? f.nonce : void 0
      });
    }
  }, Et.preinitModule = function(v, f) {
    if (typeof v == "string")
      if (typeof f == "object" && f !== null) {
        if (f.as == null || f.as === "script") {
          var p = y(
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
      var p = f.as, S = y(p, f.crossOrigin);
      u.d.L(v, p, {
        crossOrigin: S,
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
        var p = y(f.as, f.crossOrigin);
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
  if (e_) return kr.exports;
  e_ = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  return o(), kr.exports = e0(), kr.exports;
}
var t_;
function a0() {
  if (t_) return jl;
  t_ = 1;
  var o = Ph(), c = Kr(), s = t0();
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
  function y(e) {
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
  var S = Object.assign, C = /* @__PURE__ */ Symbol.for("react.element"), E = /* @__PURE__ */ Symbol.for("react.transitional.element"), z = /* @__PURE__ */ Symbol.for("react.portal"), L = /* @__PURE__ */ Symbol.for("react.fragment"), Q = /* @__PURE__ */ Symbol.for("react.strict_mode"), A = /* @__PURE__ */ Symbol.for("react.profiler"), I = /* @__PURE__ */ Symbol.for("react.consumer"), Z = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), Y = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), ae = /* @__PURE__ */ Symbol.for("react.activity"), ee = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), re = Symbol.iterator;
  function we(e) {
    return e === null || typeof e != "object" ? null : (e = re && e[re] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var me = /* @__PURE__ */ Symbol.for("react.client.reference");
  function je(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === me ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case L:
        return "Fragment";
      case A:
        return "Profiler";
      case Q:
        return "StrictMode";
      case W:
        return "Suspense";
      case V:
        return "SuspenseList";
      case ae:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case z:
          return "Portal";
        case Z:
          return e.displayName || "Context";
        case I:
          return (e._context.displayName || "Context") + ".Consumer";
        case G:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Y:
          return t = e.displayName || null, t !== null ? t : je(e.type) || "Memo";
        case J:
          t = e._payload, e = e._init;
          try {
            return je(e(t));
          } catch {
          }
      }
    return null;
  }
  var Ne = Array.isArray, D = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ze = [], Ee = -1;
  function b(e) {
    return { current: e };
  }
  function H(e) {
    0 > Ee || (e.current = ze[Ee], ze[Ee] = null, Ee--);
  }
  function te(e, t) {
    Ee++, ze[Ee] = e.current, e.current = t;
  }
  var oe = b(null), ve = b(null), ge = b(null), de = b(null);
  function Pe(e, t) {
    switch (te(ge, t), te(ve, e), te(oe, null), t.nodeType) {
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
    H(oe), te(oe, e);
  }
  function Oe() {
    H(oe), H(ve), H(ge);
  }
  function ya(e) {
    e.memoizedState !== null && te(de, e);
    var t = oe.current, a = hm(t, e.type);
    t !== a && (te(ve, e), te(oe, a));
  }
  function Xa(e) {
    ve.current === e && (H(oe), H(ve)), de.current === e && (H(de), Nl._currentValue = ie);
  }
  var Qa, Kn;
  function Xt(e) {
    if (Qa === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Qa = t && t[1] || "", Kn = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qa + e + Kn;
  }
  var $a = !1;
  function Ja(e, t) {
    if (!e || $a) return "";
    $a = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (U) {
                  var O = U;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (U) {
                  O = U;
                }
                e.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                O = U;
              }
              (X = e()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (U) {
            if (U && O && typeof U.stack == "string")
              return [U.stack, O.stack];
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
        var x = d.split(`
`), T = _.split(`
`);
        for (i = n = 0; n < x.length && !x[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; i < T.length && !T[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (n === x.length || i === T.length)
          for (n = x.length - 1, i = T.length - 1; 1 <= n && 0 <= i && x[n] !== T[i]; )
            i--;
        for (; 1 <= n && 0 <= i; n--, i--)
          if (x[n] !== T[i]) {
            if (n !== 1 || i !== 1)
              do
                if (n--, i--, 0 > i || x[n] !== T[i]) {
                  var q = `
` + x[n].replace(" at new ", " at ");
                  return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q;
                }
              while (1 <= n && 0 <= i);
            break;
          }
      }
    } finally {
      $a = !1, Error.prepareStackTrace = a;
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
        return Ja(e.type, !1);
      case 11:
        return Ja(e.type.render, !1);
      case 1:
        return Ja(e.type, !0);
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
  var la = Object.prototype.hasOwnProperty, Sa = o.unstable_scheduleCallback, wa = o.unstable_cancelCallback, Xn = o.unstable_shouldYield, rt = o.unstable_requestPaint, et = o.unstable_now, Qn = o.unstable_getCurrentPriorityLevel, fa = o.unstable_ImmediatePriority, za = o.unstable_UserBlockingPriority, ma = o.unstable_NormalPriority, zt = o.unstable_LowPriority, Ia = o.unstable_IdlePriority, Gi = o.log, Wa = o.unstable_setDisableYieldValue, Ea = null, k = null;
  function B(e) {
    if (typeof Gi == "function" && Wa(e), k && typeof k.setStrictMode == "function")
      try {
        k.setStrictMode(Ea, e);
      } catch {
      }
  }
  var $ = Math.clz32 ? Math.clz32 : Re, se = Math.log, pe = Math.LN2;
  function Re(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (se(e) / pe | 0) | 0;
  }
  var M = 256, $e = 262144, ut = 4194304;
  function P(e) {
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
  function ne(e, t, a) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, l = e.suspendedLanes, d = e.pingedLanes;
    e = e.warmLanes;
    var _ = n & 134217727;
    return _ !== 0 ? (n = _ & ~l, n !== 0 ? i = P(n) : (d &= _, d !== 0 ? i = P(d) : a || (a = _ & ~e, a !== 0 && (i = P(a))))) : (_ = n & ~l, _ !== 0 ? i = P(_) : d !== 0 ? i = P(d) : a || (a = n & ~e, a !== 0 && (i = P(a)))), i === 0 ? 0 : t !== 0 && t !== i && (t & l) === 0 && (l = i & -i, a = t & -t, l >= a || l === 32 && (a & 4194048) !== 0) ? t : i;
  }
  function ue(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function le(e, t) {
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
  function ce() {
    var e = ut;
    return ut <<= 1, (ut & 62914560) === 0 && (ut = 4194304), e;
  }
  function ye(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ae(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function pt(e, t, a, n, i, l) {
    var d = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var _ = e.entanglements, x = e.expirationTimes, T = e.hiddenUpdates;
    for (a = d & ~a; 0 < a; ) {
      var q = 31 - $(a), X = 1 << q;
      _[q] = 0, x[q] = -1;
      var O = T[q];
      if (O !== null)
        for (T[q] = null, q = 0; q < O.length; q++) {
          var U = O[q];
          U !== null && (U.lane &= -536870913);
        }
      a &= ~X;
    }
    n !== 0 && kt(e, n, 0), l !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= l & ~(d & ~t));
  }
  function kt(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - $(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | a & 261930;
  }
  function Ke(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var n = 31 - $(a), i = 1 << n;
      i & t | e[n] & t && (e[n] |= t), a &= ~i;
    }
  }
  function Ll(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Hi(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Hi(e) {
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
  function ms(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function eu() {
    var e = F.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Hm(e.type));
  }
  function tu(e, t) {
    var a = F.p;
    try {
      return F.p = e, t();
    } finally {
      F.p = a;
    }
  }
  var Fa = Math.random().toString(36).slice(2), bt = "__reactFiber$" + Fa, At = "__reactProps$" + Fa, $n = "__reactContainer$" + Fa, _s = "__reactEvents$" + Fa, Lg = "__reactListeners$" + Fa, Gg = "__reactHandles$" + Fa, au = "__reactResources$" + Fa, Vi = "__reactMarker$" + Fa;
  function gs(e) {
    delete e[bt], delete e[At], delete e[_s], delete e[Lg], delete e[Gg];
  }
  function Jn(e) {
    var t = e[bt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[$n] || a[bt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = zm(e); e !== null; ) {
            if (a = e[bt]) return a;
            e = zm(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function In(e) {
    if (e = e[bt] || e[$n]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function qi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Wn(e) {
    var t = e[au];
    return t || (t = e[au] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ht(e) {
    e[Vi] = !0;
  }
  var nu = /* @__PURE__ */ new Set(), iu = {};
  function wn(e, t) {
    Fn(e, t), Fn(e + "Capture", t);
  }
  function Fn(e, t) {
    for (iu[e] = t, e = 0; e < t.length; e++)
      nu.add(t[e]);
  }
  var Hg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), lu = {}, ou = {};
  function Vg(e) {
    return la.call(ou, e) ? !0 : la.call(lu, e) ? !1 : Hg.test(e) ? ou[e] = !0 : (lu[e] = !0, !1);
  }
  function Gl(e, t, a) {
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
  function Hl(e, t, a) {
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
  function Na(e, t, a, n) {
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
  function ps(e) {
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
  function Vl(e) {
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
  function hs(e, t, a, n, i, l, d, _) {
    e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + $t(t)) : e.value !== "" + $t(t) && (e.value = "" + $t(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? vs(e, d, $t(t)) : a != null ? vs(e, d, $t(a)) : n != null && e.removeAttribute("value"), i == null && l != null && (e.defaultChecked = !!l), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.name = "" + $t(_) : e.removeAttribute("name");
  }
  function ru(e, t, a, n, i, l, d, _) {
    if (l != null && typeof l != "function" && typeof l != "symbol" && typeof l != "boolean" && (e.type = l), t != null || a != null) {
      if (!(l !== "submit" && l !== "reset" || t != null)) {
        ps(e);
        return;
      }
      a = a != null ? "" + $t(a) : "", t = t != null ? "" + $t(t) : a, _ || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? i, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = _ ? e.checked : !!n, e.defaultChecked = !!n, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d), ps(e);
  }
  function vs(e, t, a) {
    t === "number" && Vl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Pn(e, t, a, n) {
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
        if (Ne(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        a = n;
      }
      a == null && (a = ""), t = a;
    }
    a = $t(t), e.defaultValue = a, n = e.textContent, n === a && n !== "" && n !== null && (e.value = n), ps(e);
  }
  function ei(e, t) {
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
  function bs(e) {
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
  function ql(e) {
    return Xg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Ma() {
  }
  var ys = null;
  function xs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ti = null, ai = null;
  function _u(e) {
    var t = In(e);
    if (t && (e = t.stateNode)) {
      var a = e[At] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (hs(
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
                hs(
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
          t = a.value, t != null && Pn(e, !!a.multiple, t, !1);
      }
    }
  }
  var Ss = !1;
  function gu(e, t, a) {
    if (Ss) return e(t, a);
    Ss = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (Ss = !1, (ti !== null || ai !== null) && (Co(), ti && (t = ti, e = ai, ai = ti = null, _u(t), e)))
        for (t = 0; t < e.length; t++) _u(e[t]);
    }
  }
  function Yi(e, t) {
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
  var ka = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ws = !1;
  if (ka)
    try {
      var Zi = {};
      Object.defineProperty(Zi, "passive", {
        get: function() {
          ws = !0;
        }
      }), window.addEventListener("test", Zi, Zi), window.removeEventListener("test", Zi, Zi);
    } catch {
      ws = !1;
    }
  var Pa = null, zs = null, Yl = null;
  function pu() {
    if (Yl) return Yl;
    var e, t = zs, a = t.length, n, i = "value" in Pa ? Pa.value : Pa.textContent, l = i.length;
    for (e = 0; e < a && t[e] === i[e]; e++) ;
    var d = a - e;
    for (n = 1; n <= d && t[a - n] === i[l - n]; n++) ;
    return Yl = i.slice(e, 1 < n ? 1 - n : void 0);
  }
  function Zl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Kl() {
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
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Kl : hu, this.isPropagationStopped = hu, this;
    }
    return S(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Kl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Kl);
      },
      persist: function() {
      },
      isPersistent: Kl
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
  }, Xl = Ct(zn), Ki = S({}, zn, { view: 0, detail: 0 }), Qg = Ct(Ki), Es, Ns, Xi, Ql = S({}, Ki, {
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
    getModifierState: ks,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Xi && (Xi && e.type === "mousemove" ? (Es = e.screenX - Xi.screenX, Ns = e.screenY - Xi.screenY) : Ns = Es = 0, Xi = e), Es);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ns;
    }
  }), vu = Ct(Ql), $g = S({}, Ql, { dataTransfer: 0 }), Jg = Ct($g), Ig = S({}, Ki, { relatedTarget: 0 }), Ms = Ct(Ig), Wg = S({}, zn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fg = Ct(Wg), Pg = S({}, zn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), ep = Ct(Pg), tp = S({}, zn, { data: 0 }), bu = Ct(tp), ap = {
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
  function ks() {
    return lp;
  }
  var op = S({}, Ki, {
    key: function(e) {
      if (e.key) {
        var t = ap[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Zl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? np[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ks,
    charCode: function(e) {
      return e.type === "keypress" ? Zl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Zl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), sp = Ct(op), cp = S({}, Ql, {
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
  }), yu = Ct(cp), rp = S({}, Ki, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ks
  }), up = Ct(rp), dp = S({}, zn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), fp = Ct(dp), mp = S({}, Ql, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _p = Ct(mp), gp = S({}, zn, {
    newState: 0,
    oldState: 0
  }), pp = Ct(gp), hp = [9, 13, 27, 32], As = ka && "CompositionEvent" in window, Qi = null;
  ka && "documentMode" in document && (Qi = document.documentMode);
  var vp = ka && "TextEvent" in window && !Qi, xu = ka && (!As || Qi && 8 < Qi && 11 >= Qi), Su = " ", wu = !1;
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
  function Eu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ni = !1;
  function bp(e, t) {
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
  function yp(e, t) {
    if (ni)
      return e === "compositionend" || !As && zu(e, t) ? (e = pu(), Yl = zs = Pa = null, ni = !1, e) : null;
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
  function Nu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xp[e.type] : t === "textarea";
  }
  function Mu(e, t, a, n) {
    ti ? ai ? ai.push(n) : ai = [n] : ti = n, t = Bo(t, "onChange"), 0 < t.length && (a = new Xl(
      "onChange",
      "change",
      null,
      a,
      n
    ), e.push({ event: a, listeners: t }));
  }
  var $i = null, Ji = null;
  function Sp(e) {
    um(e, 0);
  }
  function $l(e) {
    var t = qi(e);
    if (cu(t)) return e;
  }
  function ku(e, t) {
    if (e === "change") return t;
  }
  var Au = !1;
  if (ka) {
    var Cs;
    if (ka) {
      var js = "oninput" in document;
      if (!js) {
        var Cu = document.createElement("div");
        Cu.setAttribute("oninput", "return;"), js = typeof Cu.oninput == "function";
      }
      Cs = js;
    } else Cs = !1;
    Au = Cs && (!document.documentMode || 9 < document.documentMode);
  }
  function ju() {
    $i && ($i.detachEvent("onpropertychange", Tu), Ji = $i = null);
  }
  function Tu(e) {
    if (e.propertyName === "value" && $l(Ji)) {
      var t = [];
      Mu(
        t,
        Ji,
        e,
        xs(e)
      ), gu(Sp, t);
    }
  }
  function wp(e, t, a) {
    e === "focusin" ? (ju(), $i = t, Ji = a, $i.attachEvent("onpropertychange", Tu)) : e === "focusout" && ju();
  }
  function zp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return $l(Ji);
  }
  function Ep(e, t) {
    if (e === "click") return $l(t);
  }
  function Np(e, t) {
    if (e === "input" || e === "change")
      return $l(t);
  }
  function Mp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Bt = typeof Object.is == "function" ? Object.is : Mp;
  function Ii(e, t) {
    if (Bt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), n = Object.keys(t);
    if (a.length !== n.length) return !1;
    for (n = 0; n < a.length; n++) {
      var i = a[n];
      if (!la.call(t, i) || !Bt(e[i], t[i]))
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
    for (var t = Vl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Vl(e.document);
    }
    return t;
  }
  function Ts(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var kp = ka && "documentMode" in document && 11 >= document.documentMode, ii = null, Os = null, Wi = null, Rs = !1;
  function Bu(e, t, a) {
    var n = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Rs || ii == null || ii !== Vl(n) || (n = ii, "selectionStart" in n && Ts(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), Wi && Ii(Wi, n) || (Wi = n, n = Bo(Os, "onSelect"), 0 < n.length && (t = new Xl(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: n }), t.target = ii)));
  }
  function En(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var li = {
    animationend: En("Animation", "AnimationEnd"),
    animationiteration: En("Animation", "AnimationIteration"),
    animationstart: En("Animation", "AnimationStart"),
    transitionrun: En("Transition", "TransitionRun"),
    transitionstart: En("Transition", "TransitionStart"),
    transitioncancel: En("Transition", "TransitionCancel"),
    transitionend: En("Transition", "TransitionEnd")
  }, Ds = {}, Lu = {};
  ka && (Lu = document.createElement("div").style, "AnimationEvent" in window || (delete li.animationend.animation, delete li.animationiteration.animation, delete li.animationstart.animation), "TransitionEvent" in window || delete li.transitionend.transition);
  function Nn(e) {
    if (Ds[e]) return Ds[e];
    if (!li[e]) return e;
    var t = li[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Lu)
        return Ds[e] = t[a];
    return e;
  }
  var Gu = Nn("animationend"), Hu = Nn("animationiteration"), Vu = Nn("animationstart"), Ap = Nn("transitionrun"), Cp = Nn("transitionstart"), jp = Nn("transitioncancel"), qu = Nn("transitionend"), Yu = /* @__PURE__ */ new Map(), Us = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Us.push("scrollEnd");
  function oa(e, t) {
    Yu.set(e, t), wn(t, [e]);
  }
  var Jl = typeof reportError == "function" ? reportError : function(e) {
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
  }, It = [], oi = 0, Bs = 0;
  function Il() {
    for (var e = oi, t = Bs = oi = 0; t < e; ) {
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
  function Wl(e, t, a, n) {
    It[oi++] = e, It[oi++] = t, It[oi++] = a, It[oi++] = n, Bs |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function Ls(e, t, a, n) {
    return Wl(e, t, a, n), Fl(e);
  }
  function Mn(e, t) {
    return Wl(e, null, null, t), Fl(e);
  }
  function Zu(e, t, a) {
    e.lanes |= a;
    var n = e.alternate;
    n !== null && (n.lanes |= a);
    for (var i = !1, l = e.return; l !== null; )
      l.childLanes |= a, n = l.alternate, n !== null && (n.childLanes |= a), l.tag === 22 && (e = l.stateNode, e === null || e._visibility & 1 || (i = !0)), e = l, l = l.return;
    return e.tag === 3 ? (l = e.stateNode, i && t !== null && (i = 31 - $(a), e = l.hiddenUpdates, n = e[i], n === null ? e[i] = [t] : n.push(t), t.lane = a | 536870912), l) : null;
  }
  function Fl(e) {
    if (50 < bl)
      throw bl = 0, Qc = null, Error(u(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var si = {};
  function Tp(e, t, a, n) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Lt(e, t, a, n) {
    return new Tp(e, t, a, n);
  }
  function Gs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Aa(e, t) {
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
  function Pl(e, t, a, n, i, l) {
    var d = 0;
    if (n = e, typeof e == "function") Gs(e) && (d = 1);
    else if (typeof e == "string")
      d = Bh(
        e,
        a,
        oe.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ae:
          return e = Lt(31, a, t, i), e.elementType = ae, e.lanes = l, e;
        case L:
          return kn(a.children, i, l, t);
        case Q:
          d = 8, i |= 24;
          break;
        case A:
          return e = Lt(12, a, t, i | 2), e.elementType = A, e.lanes = l, e;
        case W:
          return e = Lt(13, a, t, i), e.elementType = W, e.lanes = l, e;
        case V:
          return e = Lt(19, a, t, i), e.elementType = V, e.lanes = l, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Z:
                d = 10;
                break e;
              case I:
                d = 9;
                break e;
              case G:
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
  function Hs(e, t, a) {
    return e = Lt(6, e, null, t), e.lanes = a, e;
  }
  function Xu(e) {
    var t = Lt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Vs(e, t, a) {
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
  var ci = [], ri = 0, eo = null, Fi = 0, Ft = [], Pt = 0, en = null, _a = 1, ga = "";
  function Ca(e, t) {
    ci[ri++] = Fi, ci[ri++] = eo, eo = e, Fi = t;
  }
  function $u(e, t, a) {
    Ft[Pt++] = _a, Ft[Pt++] = ga, Ft[Pt++] = en, en = e;
    var n = _a;
    e = ga;
    var i = 32 - $(n) - 1;
    n &= ~(1 << i), a += 1;
    var l = 32 - $(t) + i;
    if (30 < l) {
      var d = i - i % 5;
      l = (n & (1 << d) - 1).toString(32), n >>= d, i -= d, _a = 1 << 32 - $(t) + i | a << i | n, ga = l + e;
    } else
      _a = 1 << l | a << i | n, ga = e;
  }
  function qs(e) {
    e.return !== null && (Ca(e, 1), $u(e, 1, 0));
  }
  function Ys(e) {
    for (; e === eo; )
      eo = ci[--ri], ci[ri] = null, Fi = ci[--ri], ci[ri] = null;
    for (; e === en; )
      en = Ft[--Pt], Ft[Pt] = null, ga = Ft[--Pt], Ft[Pt] = null, _a = Ft[--Pt], Ft[Pt] = null;
  }
  function Ju(e, t) {
    Ft[Pt++] = _a, Ft[Pt++] = ga, Ft[Pt++] = en, _a = t.id, ga = t.overflow, en = e;
  }
  var yt = null, tt = null, Ge = !1, tn = null, ea = !1, Zs = Error(u(519));
  function an(e) {
    var t = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Pi(Wt(t, e)), Zs;
  }
  function Iu(e) {
    var t = e.stateNode, a = e.type, n = e.memoizedProps;
    switch (t[bt] = e, t[At] = n, a) {
      case "dialog":
        Ue("cancel", t), Ue("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ue("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < xl.length; a++)
          Ue(xl[a], t);
        break;
      case "source":
        Ue("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ue("error", t), Ue("load", t);
        break;
      case "details":
        Ue("toggle", t);
        break;
      case "input":
        Ue("invalid", t), ru(
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
        Ue("invalid", t);
        break;
      case "textarea":
        Ue("invalid", t), du(t, n.value, n.defaultValue, n.children);
    }
    a = n.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || n.suppressHydrationWarning === !0 || _m(t.textContent, a) ? (n.popover != null && (Ue("beforetoggle", t), Ue("toggle", t)), n.onScroll != null && Ue("scroll", t), n.onScrollEnd != null && Ue("scrollend", t), n.onClick != null && (t.onclick = Ma), t = !0) : t = !1, t || an(e, !0);
  }
  function Wu(e) {
    for (yt = e.return; yt; )
      switch (yt.tag) {
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
          yt = yt.return;
      }
  }
  function ui(e) {
    if (e !== yt) return !1;
    if (!Ge) return Wu(e), Ge = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || cr(e.type, e.memoizedProps)), a = !a), a && tt && an(e), Wu(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      tt = wm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      tt = wm(e);
    } else
      t === 27 ? (t = tt, hn(e.type) ? (e = mr, mr = null, tt = e) : tt = t) : tt = yt ? aa(e.stateNode.nextSibling) : null;
    return !0;
  }
  function An() {
    tt = yt = null, Ge = !1;
  }
  function Ks() {
    var e = tn;
    return e !== null && (Rt === null ? Rt = e : Rt.push.apply(
      Rt,
      e
    ), tn = null), e;
  }
  function Pi(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  var Xs = b(null), Cn = null, ja = null;
  function nn(e, t, a) {
    te(Xs, t._currentValue), t._currentValue = a;
  }
  function Ta(e) {
    e._currentValue = Xs.current, H(Xs);
  }
  function Qs(e, t, a) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function $s(e, t, a, n) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var l = i.dependencies;
      if (l !== null) {
        var d = i.child;
        l = l.firstContext;
        e: for (; l !== null; ) {
          var _ = l;
          l = i;
          for (var x = 0; x < t.length; x++)
            if (_.context === t[x]) {
              l.lanes |= a, _ = l.alternate, _ !== null && (_.lanes |= a), Qs(
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
        d.lanes |= a, l = d.alternate, l !== null && (l.lanes |= a), Qs(d, a, e), d = null;
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
  function di(e, t, a, n) {
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
      } else if (i === de.current) {
        if (d = i.alternate, d === null) throw Error(u(387));
        d.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(Nl) : e = [Nl]);
      }
      i = i.return;
    }
    e !== null && $s(
      t,
      e,
      a,
      n
    ), t.flags |= 262144;
  }
  function to(e) {
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
    Cn = e, ja = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function xt(e) {
    return Fu(Cn, e);
  }
  function ao(e, t) {
    return Cn === null && jn(e), Fu(e, t);
  }
  function Fu(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, ja === null) {
      if (e === null) throw Error(u(308));
      ja = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else ja = ja.next = t;
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
  }, Rp = o.unstable_scheduleCallback, Dp = o.unstable_NormalPriority, dt = {
    $$typeof: Z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Js() {
    return {
      controller: new Op(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function el(e) {
    e.refCount--, e.refCount === 0 && Rp(Dp, function() {
      e.controller.abort();
    });
  }
  var tl = null, Is = 0, fi = 0, mi = null;
  function Up(e, t) {
    if (tl === null) {
      var a = tl = [];
      Is = 0, fi = Pc(), mi = {
        status: "pending",
        value: void 0,
        then: function(n) {
          a.push(n);
        }
      };
    }
    return Is++, t.then(Pu, Pu), t;
  }
  function Pu() {
    if (--Is === 0 && tl !== null) {
      mi !== null && (mi.status = "fulfilled");
      var e = tl;
      tl = null, fi = 0, mi = null;
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
  var ed = D.S;
  D.S = function(e, t) {
    Lf = et(), typeof t == "object" && t !== null && typeof t.then == "function" && Up(e, t), ed !== null && ed(e, t);
  };
  var Tn = b(null);
  function Ws() {
    var e = Tn.current;
    return e !== null ? e : Fe.pooledCache;
  }
  function no(e, t) {
    t === null ? te(Tn, Tn.current) : te(Tn, t.pool);
  }
  function td() {
    var e = Ws();
    return e === null ? null : { parent: dt._currentValue, pool: e };
  }
  var _i = Error(u(460)), Fs = Error(u(474)), io = Error(u(542)), lo = { then: function() {
  } };
  function ad(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function nd(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Ma, Ma), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, ld(e), e;
      default:
        if (typeof t.status == "string") t.then(Ma, Ma);
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
        throw Rn = t, _i;
    }
  }
  function On(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Rn = a, _i) : a;
    }
  }
  var Rn = null;
  function id() {
    if (Rn === null) throw Error(u(459));
    var e = Rn;
    return Rn = null, e;
  }
  function ld(e) {
    if (e === _i || e === io)
      throw Error(u(483));
  }
  var gi = null, al = 0;
  function oo(e) {
    var t = al;
    return al += 1, gi === null && (gi = []), nd(gi, e, t);
  }
  function nl(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function so(e, t) {
    throw t.$$typeof === C ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(
      u(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function od(e) {
    function t(N, w) {
      if (e) {
        var j = N.deletions;
        j === null ? (N.deletions = [w], N.flags |= 16) : j.push(w);
      }
    }
    function a(N, w) {
      if (!e) return null;
      for (; w !== null; )
        t(N, w), w = w.sibling;
      return null;
    }
    function n(N) {
      for (var w = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? w.set(N.key, N) : w.set(N.index, N), N = N.sibling;
      return w;
    }
    function i(N, w) {
      return N = Aa(N, w), N.index = 0, N.sibling = null, N;
    }
    function l(N, w, j) {
      return N.index = j, e ? (j = N.alternate, j !== null ? (j = j.index, j < w ? (N.flags |= 67108866, w) : j) : (N.flags |= 67108866, w)) : (N.flags |= 1048576, w);
    }
    function d(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function _(N, w, j, K) {
      return w === null || w.tag !== 6 ? (w = Hs(j, N.mode, K), w.return = N, w) : (w = i(w, j), w.return = N, w);
    }
    function x(N, w, j, K) {
      var be = j.type;
      return be === L ? q(
        N,
        w,
        j.props.children,
        K,
        j.key
      ) : w !== null && (w.elementType === be || typeof be == "object" && be !== null && be.$$typeof === J && On(be) === w.type) ? (w = i(w, j.props), nl(w, j), w.return = N, w) : (w = Pl(
        j.type,
        j.key,
        j.props,
        null,
        N.mode,
        K
      ), nl(w, j), w.return = N, w);
    }
    function T(N, w, j, K) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== j.containerInfo || w.stateNode.implementation !== j.implementation ? (w = Vs(j, N.mode, K), w.return = N, w) : (w = i(w, j.children || []), w.return = N, w);
    }
    function q(N, w, j, K, be) {
      return w === null || w.tag !== 7 ? (w = kn(
        j,
        N.mode,
        K,
        be
      ), w.return = N, w) : (w = i(w, j), w.return = N, w);
    }
    function X(N, w, j) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return w = Hs(
          "" + w,
          N.mode,
          j
        ), w.return = N, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case E:
            return j = Pl(
              w.type,
              w.key,
              w.props,
              null,
              N.mode,
              j
            ), nl(j, w), j.return = N, j;
          case z:
            return w = Vs(
              w,
              N.mode,
              j
            ), w.return = N, w;
          case J:
            return w = On(w), X(N, w, j);
        }
        if (Ne(w) || we(w))
          return w = kn(
            w,
            N.mode,
            j,
            null
          ), w.return = N, w;
        if (typeof w.then == "function")
          return X(N, oo(w), j);
        if (w.$$typeof === Z)
          return X(
            N,
            ao(N, w),
            j
          );
        so(N, w);
      }
      return null;
    }
    function O(N, w, j, K) {
      var be = w !== null ? w.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return be !== null ? null : _(N, w, "" + j, K);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case E:
            return j.key === be ? x(N, w, j, K) : null;
          case z:
            return j.key === be ? T(N, w, j, K) : null;
          case J:
            return j = On(j), O(N, w, j, K);
        }
        if (Ne(j) || we(j))
          return be !== null ? null : q(N, w, j, K, null);
        if (typeof j.then == "function")
          return O(
            N,
            w,
            oo(j),
            K
          );
        if (j.$$typeof === Z)
          return O(
            N,
            w,
            ao(N, j),
            K
          );
        so(N, j);
      }
      return null;
    }
    function U(N, w, j, K, be) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return N = N.get(j) || null, _(w, N, "" + K, be);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case E:
            return N = N.get(
              K.key === null ? j : K.key
            ) || null, x(w, N, K, be);
          case z:
            return N = N.get(
              K.key === null ? j : K.key
            ) || null, T(w, N, K, be);
          case J:
            return K = On(K), U(
              N,
              w,
              j,
              K,
              be
            );
        }
        if (Ne(K) || we(K))
          return N = N.get(j) || null, q(w, N, K, be, null);
        if (typeof K.then == "function")
          return U(
            N,
            w,
            j,
            oo(K),
            be
          );
        if (K.$$typeof === Z)
          return U(
            N,
            w,
            j,
            ao(w, K),
            be
          );
        so(w, K);
      }
      return null;
    }
    function fe(N, w, j, K) {
      for (var be = null, Ve = null, _e = w, Ce = w = 0, Le = null; _e !== null && Ce < j.length; Ce++) {
        _e.index > Ce ? (Le = _e, _e = null) : Le = _e.sibling;
        var qe = O(
          N,
          _e,
          j[Ce],
          K
        );
        if (qe === null) {
          _e === null && (_e = Le);
          break;
        }
        e && _e && qe.alternate === null && t(N, _e), w = l(qe, w, Ce), Ve === null ? be = qe : Ve.sibling = qe, Ve = qe, _e = Le;
      }
      if (Ce === j.length)
        return a(N, _e), Ge && Ca(N, Ce), be;
      if (_e === null) {
        for (; Ce < j.length; Ce++)
          _e = X(N, j[Ce], K), _e !== null && (w = l(
            _e,
            w,
            Ce
          ), Ve === null ? be = _e : Ve.sibling = _e, Ve = _e);
        return Ge && Ca(N, Ce), be;
      }
      for (_e = n(_e); Ce < j.length; Ce++)
        Le = U(
          _e,
          N,
          Ce,
          j[Ce],
          K
        ), Le !== null && (e && Le.alternate !== null && _e.delete(
          Le.key === null ? Ce : Le.key
        ), w = l(
          Le,
          w,
          Ce
        ), Ve === null ? be = Le : Ve.sibling = Le, Ve = Le);
      return e && _e.forEach(function(Sn) {
        return t(N, Sn);
      }), Ge && Ca(N, Ce), be;
    }
    function Se(N, w, j, K) {
      if (j == null) throw Error(u(151));
      for (var be = null, Ve = null, _e = w, Ce = w = 0, Le = null, qe = j.next(); _e !== null && !qe.done; Ce++, qe = j.next()) {
        _e.index > Ce ? (Le = _e, _e = null) : Le = _e.sibling;
        var Sn = O(N, _e, qe.value, K);
        if (Sn === null) {
          _e === null && (_e = Le);
          break;
        }
        e && _e && Sn.alternate === null && t(N, _e), w = l(Sn, w, Ce), Ve === null ? be = Sn : Ve.sibling = Sn, Ve = Sn, _e = Le;
      }
      if (qe.done)
        return a(N, _e), Ge && Ca(N, Ce), be;
      if (_e === null) {
        for (; !qe.done; Ce++, qe = j.next())
          qe = X(N, qe.value, K), qe !== null && (w = l(qe, w, Ce), Ve === null ? be = qe : Ve.sibling = qe, Ve = qe);
        return Ge && Ca(N, Ce), be;
      }
      for (_e = n(_e); !qe.done; Ce++, qe = j.next())
        qe = U(_e, N, Ce, qe.value, K), qe !== null && (e && qe.alternate !== null && _e.delete(qe.key === null ? Ce : qe.key), w = l(qe, w, Ce), Ve === null ? be = qe : Ve.sibling = qe, Ve = qe);
      return e && _e.forEach(function($h) {
        return t(N, $h);
      }), Ge && Ca(N, Ce), be;
    }
    function We(N, w, j, K) {
      if (typeof j == "object" && j !== null && j.type === L && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case E:
            e: {
              for (var be = j.key; w !== null; ) {
                if (w.key === be) {
                  if (be = j.type, be === L) {
                    if (w.tag === 7) {
                      a(
                        N,
                        w.sibling
                      ), K = i(
                        w,
                        j.props.children
                      ), K.return = N, N = K;
                      break e;
                    }
                  } else if (w.elementType === be || typeof be == "object" && be !== null && be.$$typeof === J && On(be) === w.type) {
                    a(
                      N,
                      w.sibling
                    ), K = i(w, j.props), nl(K, j), K.return = N, N = K;
                    break e;
                  }
                  a(N, w);
                  break;
                } else t(N, w);
                w = w.sibling;
              }
              j.type === L ? (K = kn(
                j.props.children,
                N.mode,
                K,
                j.key
              ), K.return = N, N = K) : (K = Pl(
                j.type,
                j.key,
                j.props,
                null,
                N.mode,
                K
              ), nl(K, j), K.return = N, N = K);
            }
            return d(N);
          case z:
            e: {
              for (be = j.key; w !== null; ) {
                if (w.key === be)
                  if (w.tag === 4 && w.stateNode.containerInfo === j.containerInfo && w.stateNode.implementation === j.implementation) {
                    a(
                      N,
                      w.sibling
                    ), K = i(w, j.children || []), K.return = N, N = K;
                    break e;
                  } else {
                    a(N, w);
                    break;
                  }
                else t(N, w);
                w = w.sibling;
              }
              K = Vs(j, N.mode, K), K.return = N, N = K;
            }
            return d(N);
          case J:
            return j = On(j), We(
              N,
              w,
              j,
              K
            );
        }
        if (Ne(j))
          return fe(
            N,
            w,
            j,
            K
          );
        if (we(j)) {
          if (be = we(j), typeof be != "function") throw Error(u(150));
          return j = be.call(j), Se(
            N,
            w,
            j,
            K
          );
        }
        if (typeof j.then == "function")
          return We(
            N,
            w,
            oo(j),
            K
          );
        if (j.$$typeof === Z)
          return We(
            N,
            w,
            ao(N, j),
            K
          );
        so(N, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, w !== null && w.tag === 6 ? (a(N, w.sibling), K = i(w, j), K.return = N, N = K) : (a(N, w), K = Hs(j, N.mode, K), K.return = N, N = K), d(N)) : a(N, w);
    }
    return function(N, w, j, K) {
      try {
        al = 0;
        var be = We(
          N,
          w,
          j,
          K
        );
        return gi = null, be;
      } catch (_e) {
        if (_e === _i || _e === io) throw _e;
        var Ve = Lt(29, _e, null, N.mode);
        return Ve.lanes = K, Ve.return = N, Ve;
      }
    };
  }
  var Dn = od(!0), sd = od(!1), ln = !1;
  function Ps(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ec(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function on(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function sn(e, t, a) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Ze & 2) !== 0) {
      var i = n.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, t = Fl(e), Zu(e, null, a), t;
    }
    return Wl(e, n, t, a), Fl(e);
  }
  function il(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, a |= n, t.lanes = a, Ke(e, a);
    }
  }
  function tc(e, t) {
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
  var ac = !1;
  function ll() {
    if (ac) {
      var e = mi;
      if (e !== null) throw e;
    }
  }
  function ol(e, t, a, n) {
    ac = !1;
    var i = e.updateQueue;
    ln = !1;
    var l = i.firstBaseUpdate, d = i.lastBaseUpdate, _ = i.shared.pending;
    if (_ !== null) {
      i.shared.pending = null;
      var x = _, T = x.next;
      x.next = null, d === null ? l = T : d.next = T, d = x;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, _ = q.lastBaseUpdate, _ !== d && (_ === null ? q.firstBaseUpdate = T : _.next = T, q.lastBaseUpdate = x));
    }
    if (l !== null) {
      var X = i.baseState;
      d = 0, q = T = x = null, _ = l;
      do {
        var O = _.lane & -536870913, U = O !== _.lane;
        if (U ? (Be & O) === O : (n & O) === O) {
          O !== 0 && O === fi && (ac = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: null,
            next: null
          });
          e: {
            var fe = e, Se = _;
            O = t;
            var We = a;
            switch (Se.tag) {
              case 1:
                if (fe = Se.payload, typeof fe == "function") {
                  X = fe.call(We, X, O);
                  break e;
                }
                X = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = Se.payload, O = typeof fe == "function" ? fe.call(We, X, O) : fe, O == null) break e;
                X = S({}, X, O);
                break e;
              case 2:
                ln = !0;
            }
          }
          O = _.callback, O !== null && (e.flags |= 64, U && (e.flags |= 8192), U = i.callbacks, U === null ? i.callbacks = [O] : U.push(O));
        } else
          U = {
            lane: O,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          }, q === null ? (T = q = U, x = X) : q = q.next = U, d |= O;
        if (_ = _.next, _ === null) {
          if (_ = i.shared.pending, _ === null)
            break;
          U = _, _ = U.next, U.next = null, i.lastBaseUpdate = U, i.shared.pending = null;
        }
      } while (!0);
      q === null && (x = X), i.baseState = x, i.firstBaseUpdate = T, i.lastBaseUpdate = q, l === null && (i.shared.lanes = 0), fn |= d, e.lanes = d, e.memoizedState = X;
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
  var pi = b(null), co = b(0);
  function ud(e, t) {
    e = Va, te(co, e), te(pi, t), Va = e | t.baseLanes;
  }
  function nc() {
    te(co, Va), te(pi, pi.current);
  }
  function ic() {
    Va = co.current, H(pi), H(co);
  }
  var Gt = b(null), ta = null;
  function cn(e) {
    var t = e.alternate;
    te(st, st.current & 1), te(Gt, e), ta === null && (t === null || pi.current !== null || t.memoizedState !== null) && (ta = e);
  }
  function lc(e) {
    te(st, st.current), te(Gt, e), ta === null && (ta = e);
  }
  function dd(e) {
    e.tag === 22 ? (te(st, st.current), te(Gt, e), ta === null && (ta = e)) : rn();
  }
  function rn() {
    te(st, st.current), te(Gt, Gt.current);
  }
  function Ht(e) {
    H(Gt), ta === e && (ta = null), H(st);
  }
  var st = b(0);
  function ro(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || dr(a) || fr(a)))
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
  var Oa = 0, ke = null, Je = null, ft = null, uo = !1, hi = !1, Un = !1, fo = 0, sl = 0, vi = null, Lp = 0;
  function lt() {
    throw Error(u(321));
  }
  function oc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Bt(e[a], t[a])) return !1;
    return !0;
  }
  function sc(e, t, a, n, i, l) {
    return Oa = l, ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? $d : Sc, Un = !1, l = a(n, i), Un = !1, hi && (l = md(
      t,
      a,
      n,
      i
    )), fd(e), l;
  }
  function fd(e) {
    D.H = ul;
    var t = Je !== null && Je.next !== null;
    if (Oa = 0, ft = Je = ke = null, uo = !1, sl = 0, vi = null, t) throw Error(u(300));
    e === null || mt || (e = e.dependencies, e !== null && to(e) && (mt = !0));
  }
  function md(e, t, a, n) {
    ke = e;
    var i = 0;
    do {
      if (hi && (vi = null), sl = 0, hi = !1, 25 <= i) throw Error(u(301));
      if (i += 1, ft = Je = null, e.updateQueue != null) {
        var l = e.updateQueue;
        l.lastEffect = null, l.events = null, l.stores = null, l.memoCache != null && (l.memoCache.index = 0);
      }
      D.H = Jd, l = t(a, n);
    } while (hi);
    return l;
  }
  function Gp() {
    var e = D.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? cl(t) : t, e = e.useState()[0], (Je !== null ? Je.memoizedState : null) !== e && (ke.flags |= 1024), t;
  }
  function cc() {
    var e = fo !== 0;
    return fo = 0, e;
  }
  function rc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function uc(e) {
    if (uo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      uo = !1;
    }
    Oa = 0, ft = Je = ke = null, hi = !1, sl = fo = 0, vi = null;
  }
  function Nt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ft === null ? ke.memoizedState = ft = e : ft = ft.next = e, ft;
  }
  function ct() {
    if (Je === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = ft === null ? ke.memoizedState : ft.next;
    if (t !== null)
      ft = t, Je = e;
    else {
      if (e === null)
        throw ke.alternate === null ? Error(u(467)) : Error(u(310));
      Je = e, e = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null
      }, ft === null ? ke.memoizedState = ft = e : ft = ft.next = e;
    }
    return ft;
  }
  function mo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function cl(e) {
    var t = sl;
    return sl += 1, vi === null && (vi = []), e = nd(vi, e, t), t = ke, (ft === null ? t.memoizedState : ft.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? $d : Sc), e;
  }
  function _o(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return cl(e);
      if (e.$$typeof === Z) return xt(e);
    }
    throw Error(u(438, String(e)));
  }
  function dc(e) {
    var t = null, a = ke.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var n = ke.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = mo(), ke.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), n = 0; n < e; n++)
        a[n] = ee;
    return t.index++, a;
  }
  function Ra(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function go(e) {
    var t = ct();
    return fc(t, Je, e);
  }
  function fc(e, t, a) {
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
      var _ = d = null, x = null, T = t, q = !1;
      do {
        var X = T.lane & -536870913;
        if (X !== T.lane ? (Be & X) === X : (Oa & X) === X) {
          var O = T.revertLane;
          if (O === 0)
            x !== null && (x = x.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }), X === fi && (q = !0);
          else if ((Oa & O) === O) {
            T = T.next, O === fi && (q = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null
            }, x === null ? (_ = x = X, d = l) : x = x.next = X, ke.lanes |= O, fn |= O;
          X = T.action, Un && a(l, X), l = T.hasEagerState ? T.eagerState : a(l, X);
        } else
          O = {
            lane: X,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          }, x === null ? (_ = x = O, d = l) : x = x.next = O, ke.lanes |= X, fn |= X;
        T = T.next;
      } while (T !== null && T !== t);
      if (x === null ? d = l : x.next = _, !Bt(l, e.memoizedState) && (mt = !0, q && (a = mi, a !== null)))
        throw a;
      e.memoizedState = l, e.baseState = d, e.baseQueue = x, n.lastRenderedState = l;
    }
    return i === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function mc(e) {
    var t = ct(), a = t.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = e;
    var n = a.dispatch, i = a.pending, l = t.memoizedState;
    if (i !== null) {
      a.pending = null;
      var d = i = i.next;
      do
        l = e(l, d.action), d = d.next;
      while (d !== i);
      Bt(l, t.memoizedState) || (mt = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), a.lastRenderedState = l;
    }
    return [l, n];
  }
  function _d(e, t, a) {
    var n = ke, i = ct(), l = Ge;
    if (l) {
      if (a === void 0) throw Error(u(407));
      a = a();
    } else a = t();
    var d = !Bt(
      (Je || i).memoizedState,
      a
    );
    if (d && (i.memoizedState = a, mt = !0), i = i.queue, pc(hd.bind(null, n, i, e), [
      e
    ]), i.getSnapshot !== t || d || ft !== null && ft.memoizedState.tag & 1) {
      if (n.flags |= 2048, bi(
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
      l || (Oa & 127) !== 0 || gd(n, t, a);
    }
    return a;
  }
  function gd(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ke.updateQueue, t === null ? (t = mo(), ke.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
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
  function _c(e) {
    var t = Nt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Un) {
        B(!0);
        try {
          a();
        } finally {
          B(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ra,
      lastRenderedState: e
    }, t;
  }
  function yd(e, t, a, n) {
    return e.baseState = a, fc(
      e,
      Je,
      typeof n == "function" ? n : Ra
    );
  }
  function Hp(e, t, a, n, i) {
    if (vo(e)) throw Error(u(485));
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
      D.T !== null ? a(!0) : l.isTransition = !1, n(l), a = t.pending, a === null ? (l.next = t.pending = l, xd(t, l)) : (l.next = a.next, t.pending = a.next = l);
    }
  }
  function xd(e, t) {
    var a = t.action, n = t.payload, i = e.state;
    if (t.isTransition) {
      var l = D.T, d = {};
      D.T = d;
      try {
        var _ = a(i, n), x = D.S;
        x !== null && x(d, _), Sd(e, t, _);
      } catch (T) {
        gc(e, t, T);
      } finally {
        l !== null && d.types !== null && (l.types = d.types), D.T = l;
      }
    } else
      try {
        l = a(i, n), Sd(e, t, l);
      } catch (T) {
        gc(e, t, T);
      }
  }
  function Sd(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(n) {
        wd(e, t, n);
      },
      function(n) {
        return gc(e, t, n);
      }
    ) : wd(e, t, a);
  }
  function wd(e, t, a) {
    t.status = "fulfilled", t.value = a, zd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, xd(e, a)));
  }
  function gc(e, t, a) {
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
    if (Ge) {
      var a = Fe.formState;
      if (a !== null) {
        e: {
          var n = ke;
          if (Ge) {
            if (tt) {
              t: {
                for (var i = tt, l = ea; i.nodeType !== 8; ) {
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
                tt = aa(
                  i.nextSibling
                ), n = i.data === "F!";
                break e;
              }
            }
            an(n);
          }
          n = !1;
        }
        n && (t = a[0]);
      }
    }
    return a = Nt(), a.memoizedState = a.baseState = t, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ed,
      lastRenderedState: t
    }, a.queue = n, a = Kd.bind(
      null,
      ke,
      n
    ), n.dispatch = a, n = _c(!1), l = xc.bind(
      null,
      ke,
      !1,
      n.queue
    ), n = Nt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = i, a = Hp.bind(
      null,
      ke,
      i,
      l,
      a
    ), i.dispatch = a, n.memoizedState = e, [t, a, !1];
  }
  function Md(e) {
    var t = ct();
    return kd(t, Je, e);
  }
  function kd(e, t, a) {
    if (t = fc(
      e,
      t,
      Ed
    )[0], e = go(Ra)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = cl(t);
      } catch (d) {
        throw d === _i ? io : d;
      }
    else n = t;
    t = ct();
    var i = t.queue, l = i.dispatch;
    return a !== t.memoizedState && (ke.flags |= 2048, bi(
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
    var t = ct(), a = Je;
    if (a !== null)
      return kd(t, a, e);
    ct(), t = t.memoizedState, a = ct();
    var n = a.queue.dispatch;
    return a.memoizedState = e, [t, n, !1];
  }
  function bi(e, t, a, n) {
    return e = { tag: e, create: a, deps: n, inst: t, next: null }, t = ke.updateQueue, t === null && (t = mo(), ke.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (n = a.next, a.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Cd() {
    return ct().memoizedState;
  }
  function po(e, t, a, n) {
    var i = Nt();
    ke.flags |= e, i.memoizedState = bi(
      1 | t,
      { destroy: void 0 },
      a,
      n === void 0 ? null : n
    );
  }
  function ho(e, t, a, n) {
    var i = ct();
    n = n === void 0 ? null : n;
    var l = i.memoizedState.inst;
    Je !== null && n !== null && oc(n, Je.memoizedState.deps) ? i.memoizedState = bi(t, l, a, n) : (ke.flags |= e, i.memoizedState = bi(
      1 | t,
      l,
      a,
      n
    ));
  }
  function jd(e, t) {
    po(8390656, 8, e, t);
  }
  function pc(e, t) {
    ho(2048, 8, e, t);
  }
  function qp(e) {
    ke.flags |= 4;
    var t = ke.updateQueue;
    if (t === null)
      t = mo(), ke.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function Td(e) {
    var t = ct().memoizedState;
    return qp({ ref: t, nextImpl: e }), function() {
      if ((Ze & 2) !== 0) throw Error(u(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Od(e, t) {
    return ho(4, 2, e, t);
  }
  function Rd(e, t) {
    return ho(4, 4, e, t);
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
    a = a != null ? a.concat([e]) : null, ho(4, 4, Dd.bind(null, t, e), a);
  }
  function hc() {
  }
  function Bd(e, t) {
    var a = ct();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    return t !== null && oc(t, n[1]) ? n[0] : (a.memoizedState = [e, t], e);
  }
  function Ld(e, t) {
    var a = ct();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    if (t !== null && oc(t, n[1]))
      return n[0];
    if (n = e(), Un) {
      B(!0);
      try {
        e();
      } finally {
        B(!1);
      }
    }
    return a.memoizedState = [n, t], n;
  }
  function vc(e, t, a) {
    return a === void 0 || (Oa & 1073741824) !== 0 && (Be & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Hf(), ke.lanes |= e, fn |= e, a);
  }
  function Gd(e, t, a, n) {
    return Bt(a, t) ? a : pi.current !== null ? (e = vc(e, a, n), Bt(e, t) || (mt = !0), e) : (Oa & 42) === 0 || (Oa & 1073741824) !== 0 && (Be & 261930) === 0 ? (mt = !0, e.memoizedState = a) : (e = Hf(), ke.lanes |= e, fn |= e, t);
  }
  function Hd(e, t, a, n, i) {
    var l = F.p;
    F.p = l !== 0 && 8 > l ? l : 8;
    var d = D.T, _ = {};
    D.T = _, xc(e, !1, t, a);
    try {
      var x = i(), T = D.S;
      if (T !== null && T(_, x), x !== null && typeof x == "object" && typeof x.then == "function") {
        var q = Bp(
          x,
          n
        );
        rl(
          e,
          t,
          q,
          Yt(e)
        );
      } else
        rl(
          e,
          t,
          n,
          Yt(e)
        );
    } catch (X) {
      rl(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: X },
        Yt()
      );
    } finally {
      F.p = l, d !== null && _.types !== null && (d.types = _.types), D.T = d;
    }
  }
  function Yp() {
  }
  function bc(e, t, a, n) {
    if (e.tag !== 5) throw Error(u(476));
    var i = Vd(e).queue;
    Hd(
      e,
      i,
      t,
      ie,
      a === null ? Yp : function() {
        return qd(e), a(n);
      }
    );
  }
  function Vd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ie,
      baseState: ie,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ra,
        lastRenderedState: ie
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
        lastRenderedReducer: Ra,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function qd(e) {
    var t = Vd(e);
    t.next === null && (t = e.alternate.memoizedState), rl(
      e,
      t.next.queue,
      {},
      Yt()
    );
  }
  function yc() {
    return xt(Nl);
  }
  function Yd() {
    return ct().memoizedState;
  }
  function Zd() {
    return ct().memoizedState;
  }
  function Zp(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Yt();
          e = on(a);
          var n = sn(t, e, a);
          n !== null && (Dt(n, t, a), il(n, t, a)), t = { cache: Js() }, e.payload = t;
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
    }, vo(e) ? Xd(t, a) : (a = Ls(e, t, a, n), a !== null && (Dt(a, e, n), Qd(a, t, n)));
  }
  function Kd(e, t, a) {
    var n = Yt();
    rl(e, t, a, n);
  }
  function rl(e, t, a, n) {
    var i = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (vo(e)) Xd(t, i);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
        try {
          var d = t.lastRenderedState, _ = l(d, a);
          if (i.hasEagerState = !0, i.eagerState = _, Bt(_, d))
            return Wl(e, t, i, 0), Fe === null && Il(), !1;
        } catch {
        }
      if (a = Ls(e, t, i, n), a !== null)
        return Dt(a, e, n), Qd(a, t, n), !0;
    }
    return !1;
  }
  function xc(e, t, a, n) {
    if (n = {
      lane: 2,
      revertLane: Pc(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vo(e)) {
      if (t) throw Error(u(479));
    } else
      t = Ls(
        e,
        a,
        n,
        2
      ), t !== null && Dt(t, e, 2);
  }
  function vo(e) {
    var t = e.alternate;
    return e === ke || t !== null && t === ke;
  }
  function Xd(e, t) {
    hi = uo = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Qd(e, t, a) {
    if ((a & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, a |= n, t.lanes = a, Ke(e, a);
    }
  }
  var ul = {
    readContext: xt,
    use: _o,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useLayoutEffect: lt,
    useInsertionEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useSyncExternalStore: lt,
    useId: lt,
    useHostTransitionStatus: lt,
    useFormState: lt,
    useActionState: lt,
    useOptimistic: lt,
    useMemoCache: lt,
    useCacheRefresh: lt
  };
  ul.useEffectEvent = lt;
  var $d = {
    readContext: xt,
    use: _o,
    useCallback: function(e, t) {
      return Nt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: xt,
    useEffect: jd,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, po(
        4194308,
        4,
        Dd.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return po(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      po(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Nt();
      t = t === void 0 ? null : t;
      var n = e();
      if (Un) {
        B(!0);
        try {
          e();
        } finally {
          B(!1);
        }
      }
      return a.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, a) {
      var n = Nt();
      if (a !== void 0) {
        var i = a(t);
        if (Un) {
          B(!0);
          try {
            a(t);
          } finally {
            B(!1);
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
        ke,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = Nt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = _c(e);
      var t = e.queue, a = Kd.bind(null, ke, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: hc,
    useDeferredValue: function(e, t) {
      var a = Nt();
      return vc(a, e, t);
    },
    useTransition: function() {
      var e = _c(!1);
      return e = Hd.bind(
        null,
        ke,
        e.queue,
        !0,
        !1
      ), Nt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var n = ke, i = Nt();
      if (Ge) {
        if (a === void 0)
          throw Error(u(407));
        a = a();
      } else {
        if (a = t(), Fe === null)
          throw Error(u(349));
        (Be & 127) !== 0 || gd(n, t, a);
      }
      i.memoizedState = a;
      var l = { value: a, getSnapshot: t };
      return i.queue = l, jd(hd.bind(null, n, l, e), [
        e
      ]), n.flags |= 2048, bi(
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
      var e = Nt(), t = Fe.identifierPrefix;
      if (Ge) {
        var a = ga, n = _a;
        a = (n & ~(1 << 32 - $(n) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = fo++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Lp++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: yc,
    useFormState: Nd,
    useActionState: Nd,
    useOptimistic: function(e) {
      var t = Nt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = xc.bind(
        null,
        ke,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: dc,
    useCacheRefresh: function() {
      return Nt().memoizedState = Zp.bind(
        null,
        ke
      );
    },
    useEffectEvent: function(e) {
      var t = Nt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Ze & 2) !== 0)
          throw Error(u(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Sc = {
    readContext: xt,
    use: _o,
    useCallback: Bd,
    useContext: xt,
    useEffect: pc,
    useImperativeHandle: Ud,
    useInsertionEffect: Od,
    useLayoutEffect: Rd,
    useMemo: Ld,
    useReducer: go,
    useRef: Cd,
    useState: function() {
      return go(Ra);
    },
    useDebugValue: hc,
    useDeferredValue: function(e, t) {
      var a = ct();
      return Gd(
        a,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = go(Ra)[0], t = ct().memoizedState;
      return [
        typeof e == "boolean" ? e : cl(e),
        t
      ];
    },
    useSyncExternalStore: _d,
    useId: Yd,
    useHostTransitionStatus: yc,
    useFormState: Md,
    useActionState: Md,
    useOptimistic: function(e, t) {
      var a = ct();
      return yd(a, Je, e, t);
    },
    useMemoCache: dc,
    useCacheRefresh: Zd
  };
  Sc.useEffectEvent = Td;
  var Jd = {
    readContext: xt,
    use: _o,
    useCallback: Bd,
    useContext: xt,
    useEffect: pc,
    useImperativeHandle: Ud,
    useInsertionEffect: Od,
    useLayoutEffect: Rd,
    useMemo: Ld,
    useReducer: mc,
    useRef: Cd,
    useState: function() {
      return mc(Ra);
    },
    useDebugValue: hc,
    useDeferredValue: function(e, t) {
      var a = ct();
      return Je === null ? vc(a, e, t) : Gd(
        a,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = mc(Ra)[0], t = ct().memoizedState;
      return [
        typeof e == "boolean" ? e : cl(e),
        t
      ];
    },
    useSyncExternalStore: _d,
    useId: Yd,
    useHostTransitionStatus: yc,
    useFormState: Ad,
    useActionState: Ad,
    useOptimistic: function(e, t) {
      var a = ct();
      return Je !== null ? yd(a, Je, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: dc,
    useCacheRefresh: Zd
  };
  Jd.useEffectEvent = Td;
  function wc(e, t, a, n) {
    t = e.memoizedState, a = a(n, t), a = a == null ? t : S({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var zc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var n = Yt(), i = on(n);
      i.payload = t, a != null && (i.callback = a), t = sn(e, i, n), t !== null && (Dt(t, e, n), il(t, e, n));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var n = Yt(), i = on(n);
      i.tag = 1, i.payload = t, a != null && (i.callback = a), t = sn(e, i, n), t !== null && (Dt(t, e, n), il(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Yt(), n = on(a);
      n.tag = 2, t != null && (n.callback = t), t = sn(e, n, a), t !== null && (Dt(t, e, a), il(t, e, a));
    }
  };
  function Id(e, t, a, n, i, l, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, l, d) : t.prototype && t.prototype.isPureReactComponent ? !Ii(a, n) || !Ii(i, l) : !0;
  }
  function Wd(e, t, a, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, n), t.state !== e && zc.enqueueReplaceState(t, t.state, null);
  }
  function Bn(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var n in t)
        n !== "ref" && (a[n] = t[n]);
    }
    if (e = e.defaultProps) {
      a === t && (a = S({}, a));
      for (var i in e)
        a[i] === void 0 && (a[i] = e[i]);
    }
    return a;
  }
  function Fd(e) {
    Jl(e);
  }
  function Pd(e) {
    console.error(e);
  }
  function ef(e) {
    Jl(e);
  }
  function bo(e, t) {
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
  function Ec(e, t, a) {
    return a = on(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      bo(e, t);
    }, a;
  }
  function af(e) {
    return e = on(e), e.tag = 3, e;
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
      tf(t, a, n), typeof i != "function" && (mn === null ? mn = /* @__PURE__ */ new Set([this]) : mn.add(this));
      var _ = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: _ !== null ? _ : ""
      });
    });
  }
  function Xp(e, t, a, n, i) {
    if (a.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = a.alternate, t !== null && di(
        t,
        a,
        i,
        !0
      ), a = Gt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return ta === null ? jo() : a.alternate === null && ot === 0 && (ot = 3), a.flags &= -257, a.flags |= 65536, a.lanes = i, n === lo ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Ic(e, n, i)), !1;
          case 22:
            return a.flags |= 65536, n === lo ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : a.add(n)), Ic(e, n, i)), !1;
        }
        throw Error(u(435, a.tag));
      }
      return Ic(e, n, i), jo(), !1;
    }
    if (Ge)
      return t = Gt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, n !== Zs && (e = Error(u(422), { cause: n }), Pi(Wt(e, a)))) : (n !== Zs && (t = Error(u(423), {
        cause: n
      }), Pi(
        Wt(t, a)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, n = Wt(n, a), i = Ec(
        e.stateNode,
        n,
        i
      ), tc(e, i), ot !== 4 && (ot = 2)), !1;
    var l = Error(u(520), { cause: n });
    if (l = Wt(l, a), vl === null ? vl = [l] : vl.push(l), ot !== 4 && (ot = 2), t === null) return !0;
    n = Wt(n, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = i & -i, a.lanes |= e, e = Ec(a.stateNode, n, e), tc(a, e), !1;
        case 1:
          if (t = a.type, l = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || l !== null && typeof l.componentDidCatch == "function" && (mn === null || !mn.has(l))))
            return a.flags |= 65536, i &= -i, a.lanes |= i, i = af(i), nf(
              i,
              e,
              a,
              n
            ), tc(a, i), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Nc = Error(u(461)), mt = !1;
  function St(e, t, a, n) {
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
    return jn(t), n = sc(
      e,
      t,
      a,
      d,
      l,
      i
    ), _ = cc(), e !== null && !mt ? (rc(e, t, i), Da(e, t, i)) : (Ge && _ && qs(t), t.flags |= 1, St(e, t, n, i), t.child);
  }
  function of(e, t, a, n, i) {
    if (e === null) {
      var l = a.type;
      return typeof l == "function" && !Gs(l) && l.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = l, sf(
        e,
        t,
        l,
        n,
        i
      )) : (e = Pl(
        a.type,
        null,
        n,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (l = e.child, !Rc(e, i)) {
      var d = l.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ii, a(d, n) && e.ref === t.ref)
        return Da(e, t, i);
    }
    return t.flags |= 1, e = Aa(l, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function sf(e, t, a, n, i) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (Ii(l, n) && e.ref === t.ref)
        if (mt = !1, t.pendingProps = n = l, Rc(e, i))
          (e.flags & 131072) !== 0 && (mt = !0);
        else
          return t.lanes = e.lanes, Da(e, t, i);
    }
    return Mc(
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
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && no(
          t,
          l !== null ? l.cachePool : null
        ), l !== null ? ud(t, l) : nc(), dd(t);
      else
        return n = t.lanes = 536870912, rf(
          e,
          t,
          l !== null ? l.baseLanes | a : a,
          a,
          n
        );
    } else
      l !== null ? (no(t, l.cachePool), ud(t, l), rn(), t.memoizedState = null) : (e !== null && no(t, null), nc(), rn());
    return St(e, t, i, a), t.child;
  }
  function dl(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function rf(e, t, a, n, i) {
    var l = Ws();
    return l = l === null ? null : { parent: dt._currentValue, pool: l }, t.memoizedState = {
      baseLanes: a,
      cachePool: l
    }, e !== null && no(t, null), nc(), dd(t), e !== null && di(e, t, n, !0), t.childLanes = i, null;
  }
  function yo(e, t) {
    return t = So(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function uf(e, t, a) {
    return Dn(t, e.child, null, a), e = yo(t, t.pendingProps), e.flags |= 2, Ht(t), t.memoizedState = null, e;
  }
  function Qp(e, t, a) {
    var n = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ge) {
        if (n.mode === "hidden")
          return e = yo(t, n), t.lanes = 536870912, dl(null, e);
        if (lc(t), (e = tt) ? (e = Sm(
          e,
          ea
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: en !== null ? { id: _a, overflow: ga } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Xu(e), a.return = t, t.child = a, yt = t, tt = null)) : e = null, e === null) throw an(t);
        return t.lanes = 536870912, null;
      }
      return yo(t, n);
    }
    var l = e.memoizedState;
    if (l !== null) {
      var d = l.dehydrated;
      if (lc(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = uf(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(u(558));
      else if (mt || di(e, t, a, !1), i = (a & e.childLanes) !== 0, mt || i) {
        if (n = Fe, n !== null && (d = Ll(n, a), d !== 0 && d !== l.retryLane))
          throw l.retryLane = d, Mn(e, d), Dt(n, e, d), Nc;
        jo(), t = uf(
          e,
          t,
          a
        );
      } else
        e = l.treeContext, tt = aa(d.nextSibling), yt = t, Ge = !0, tn = null, ea = !1, e !== null && Ju(t, e), t = yo(t, n), t.flags |= 4096;
      return t;
    }
    return e = Aa(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function xo(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(u(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Mc(e, t, a, n, i) {
    return jn(t), a = sc(
      e,
      t,
      a,
      n,
      void 0,
      i
    ), n = cc(), e !== null && !mt ? (rc(e, t, i), Da(e, t, i)) : (Ge && n && qs(t), t.flags |= 1, St(e, t, a, i), t.child);
  }
  function df(e, t, a, n, i, l) {
    return jn(t), t.updateQueue = null, a = md(
      t,
      n,
      a,
      i
    ), fd(e), n = cc(), e !== null && !mt ? (rc(e, t, l), Da(e, t, l)) : (Ge && n && qs(t), t.flags |= 1, St(e, t, a, l), t.child);
  }
  function ff(e, t, a, n, i) {
    if (jn(t), t.stateNode === null) {
      var l = si, d = a.contextType;
      typeof d == "object" && d !== null && (l = xt(d)), l = new a(n, l), t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, l.updater = zc, t.stateNode = l, l._reactInternals = t, l = t.stateNode, l.props = n, l.state = t.memoizedState, l.refs = {}, Ps(t), d = a.contextType, l.context = typeof d == "object" && d !== null ? xt(d) : si, l.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (wc(
        t,
        a,
        d,
        n
      ), l.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (d = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), d !== l.state && zc.enqueueReplaceState(l, l.state, null), ol(t, n, l, i), ll(), l.state = t.memoizedState), typeof l.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      l = t.stateNode;
      var _ = t.memoizedProps, x = Bn(a, _);
      l.props = x;
      var T = l.context, q = a.contextType;
      d = si, typeof q == "object" && q !== null && (d = xt(q));
      var X = a.getDerivedStateFromProps;
      q = typeof X == "function" || typeof l.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, q || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (_ || T !== d) && Wd(
        t,
        l,
        n,
        d
      ), ln = !1;
      var O = t.memoizedState;
      l.state = O, ol(t, n, l, i), ll(), T = t.memoizedState, _ || O !== T || ln ? (typeof X == "function" && (wc(
        t,
        a,
        X,
        n
      ), T = t.memoizedState), (x = ln || Id(
        t,
        a,
        x,
        n,
        O,
        T,
        d
      )) ? (q || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = T), l.props = n, l.state = T, l.context = d, n = x) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      l = t.stateNode, ec(e, t), d = t.memoizedProps, q = Bn(a, d), l.props = q, X = t.pendingProps, O = l.context, T = a.contextType, x = si, typeof T == "object" && T !== null && (x = xt(T)), _ = a.getDerivedStateFromProps, (T = typeof _ == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (d !== X || O !== x) && Wd(
        t,
        l,
        n,
        x
      ), ln = !1, O = t.memoizedState, l.state = O, ol(t, n, l, i), ll();
      var U = t.memoizedState;
      d !== X || O !== U || ln || e !== null && e.dependencies !== null && to(e.dependencies) ? (typeof _ == "function" && (wc(
        t,
        a,
        _,
        n
      ), U = t.memoizedState), (q = ln || Id(
        t,
        a,
        q,
        n,
        O,
        U,
        x
      ) || e !== null && e.dependencies !== null && to(e.dependencies)) ? (T || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(n, U, x), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(
        n,
        U,
        x
      )), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = U), l.props = n, l.state = U, l.context = x, n = q) : (typeof l.componentDidUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return l = n, xo(e, t), n = (t.flags & 128) !== 0, l || n ? (l = t.stateNode, a = n && typeof a.getDerivedStateFromError != "function" ? null : l.render(), t.flags |= 1, e !== null && n ? (t.child = Dn(
      t,
      e.child,
      null,
      i
    ), t.child = Dn(
      t,
      null,
      a,
      i
    )) : St(e, t, a, i), t.memoizedState = l.state, e = t.child) : e = Da(
      e,
      t,
      i
    ), e;
  }
  function mf(e, t, a, n) {
    return An(), t.flags |= 256, St(e, t, a, n), t.child;
  }
  var kc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Ac(e) {
    return { baseLanes: e, cachePool: td() };
  }
  function Cc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= qt), e;
  }
  function _f(e, t, a) {
    var n = t.pendingProps, i = !1, l = (t.flags & 128) !== 0, d;
    if ((d = l) || (d = e !== null && e.memoizedState === null ? !1 : (st.current & 2) !== 0), d && (i = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ge) {
        if (i ? cn(t) : rn(), (e = tt) ? (e = Sm(
          e,
          ea
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: en !== null ? { id: _a, overflow: ga } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Xu(e), a.return = t, t.child = a, yt = t, tt = null)) : e = null, e === null) throw an(t);
        return fr(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var _ = n.children;
      return n = n.fallback, i ? (rn(), i = t.mode, _ = So(
        { mode: "hidden", children: _ },
        i
      ), n = kn(
        n,
        i,
        a,
        null
      ), _.return = t, n.return = t, _.sibling = n, t.child = _, n = t.child, n.memoizedState = Ac(a), n.childLanes = Cc(
        e,
        d,
        a
      ), t.memoizedState = kc, dl(null, n)) : (cn(t), jc(t, _));
    }
    var x = e.memoizedState;
    if (x !== null && (_ = x.dehydrated, _ !== null)) {
      if (l)
        t.flags & 256 ? (cn(t), t.flags &= -257, t = Tc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (rn(), t.child = e.child, t.flags |= 128, t = null) : (rn(), _ = n.fallback, i = t.mode, n = So(
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
        ), n = t.child, n.memoizedState = Ac(a), n.childLanes = Cc(
          e,
          d,
          a
        ), t.memoizedState = kc, t = dl(null, n));
      else if (cn(t), fr(_)) {
        if (d = _.nextSibling && _.nextSibling.dataset, d) var T = d.dgst;
        d = T, n = Error(u(419)), n.stack = "", n.digest = d, Pi({ value: n, source: null, stack: null }), t = Tc(
          e,
          t,
          a
        );
      } else if (mt || di(e, t, a, !1), d = (a & e.childLanes) !== 0, mt || d) {
        if (d = Fe, d !== null && (n = Ll(d, a), n !== 0 && n !== x.retryLane))
          throw x.retryLane = n, Mn(e, n), Dt(d, e, n), Nc;
        dr(_) || jo(), t = Tc(
          e,
          t,
          a
        );
      } else
        dr(_) ? (t.flags |= 192, t.child = e.child, t = null) : (e = x.treeContext, tt = aa(
          _.nextSibling
        ), yt = t, Ge = !0, tn = null, ea = !1, e !== null && Ju(t, e), t = jc(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (rn(), _ = n.fallback, i = t.mode, x = e.child, T = x.sibling, n = Aa(x, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = x.subtreeFlags & 65011712, T !== null ? _ = Aa(
      T,
      _
    ) : (_ = kn(
      _,
      i,
      a,
      null
    ), _.flags |= 2), _.return = t, n.return = t, n.sibling = _, t.child = n, dl(null, n), n = t.child, _ = e.child.memoizedState, _ === null ? _ = Ac(a) : (i = _.cachePool, i !== null ? (x = dt._currentValue, i = i.parent !== x ? { parent: x, pool: x } : i) : i = td(), _ = {
      baseLanes: _.baseLanes | a,
      cachePool: i
    }), n.memoizedState = _, n.childLanes = Cc(
      e,
      d,
      a
    ), t.memoizedState = kc, dl(e.child, n)) : (cn(t), a = e.child, e = a.sibling, a = Aa(a, {
      mode: "visible",
      children: n.children
    }), a.return = t, a.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [e], t.flags |= 16) : d.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function jc(e, t) {
    return t = So(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function So(e, t) {
    return e = Lt(22, e, null, t), e.lanes = 0, e;
  }
  function Tc(e, t, a) {
    return Dn(t, e.child, null, a), e = jc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function gf(e, t, a) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Qs(e.return, t, a);
  }
  function Oc(e, t, a, n, i, l) {
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
    var d = st.current, _ = (d & 2) !== 0;
    if (_ ? (d = d & 1 | 2, t.flags |= 128) : d &= 1, te(st, d), St(e, t, n, a), n = Ge ? Fi : 0, !_ && e !== null && (e.flags & 128) !== 0)
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
          e = a.alternate, e !== null && ro(e) === null && (i = a), a = a.sibling;
        a = i, a === null ? (i = t.child, t.child = null) : (i = a.sibling, a.sibling = null), Oc(
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
          if (e = i.alternate, e !== null && ro(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = a, a = i, i = e;
        }
        Oc(
          t,
          !0,
          a,
          null,
          l,
          n
        );
        break;
      case "together":
        Oc(
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
  function Da(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), fn |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (di(
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
      for (e = t.child, a = Aa(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = Aa(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Rc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && to(e)));
  }
  function $p(e, t, a) {
    switch (t.tag) {
      case 3:
        Pe(t, t.stateNode.containerInfo), nn(t, dt, e.memoizedState.cache), An();
        break;
      case 27:
      case 5:
        ya(t);
        break;
      case 4:
        Pe(t, t.stateNode.containerInfo);
        break;
      case 10:
        nn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, lc(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (cn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? _f(e, t, a) : (cn(t), e = Da(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        cn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (n = (a & t.childLanes) !== 0, n || (di(
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
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), te(st, st.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, cf(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        nn(t, dt, e.memoizedState.cache);
    }
    return Da(e, t, a);
  }
  function hf(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        mt = !0;
      else {
        if (!Rc(e, a) && (t.flags & 128) === 0)
          return mt = !1, $p(
            e,
            t,
            a
          );
        mt = (e.flags & 131072) !== 0;
      }
    else
      mt = !1, Ge && (t.flags & 1048576) !== 0 && $u(t, Fi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = On(t.elementType), t.type = e, typeof e == "function")
            Gs(e) ? (n = Bn(e, n), t.tag = 1, t = ff(
              null,
              t,
              e,
              n,
              a
            )) : (t.tag = 0, t = Mc(
              null,
              t,
              e,
              n,
              a
            ));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === G) {
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
            throw t = je(e) || e, Error(u(306, t, ""));
          }
        }
        return t;
      case 0:
        return Mc(
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
          if (Pe(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(u(387));
          n = t.pendingProps;
          var l = t.memoizedState;
          i = l.element, ec(e, t), ol(t, n, null, a);
          var d = t.memoizedState;
          if (n = d.cache, nn(t, dt, n), n !== l.cache && $s(
            t,
            [dt],
            a,
            !0
          ), ll(), n = d.element, l.isDehydrated)
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
              ), Pi(i), t = mf(
                e,
                t,
                n,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, tt = aa(e.firstChild), yt = t, Ge = !0, tn = null, ea = !0, a = sd(
                t,
                null,
                n,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (An(), n === i) {
              t = Da(
                e,
                t,
                a
              );
              break e;
            }
            St(e, t, n, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return xo(e, t), e === null ? (a = km(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Ge || (a = t.type, e = t.pendingProps, n = Lo(
          ge.current
        ).createElement(a), n[bt] = t, n[At] = e, wt(n, a, e), ht(n), t.stateNode = n) : t.memoizedState = km(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ya(t), e === null && Ge && (n = t.stateNode = Em(
          t.type,
          t.pendingProps,
          ge.current
        ), yt = t, ea = !0, i = tt, hn(t.type) ? (mr = i, tt = aa(n.firstChild)) : tt = i), St(
          e,
          t,
          t.pendingProps.children,
          a
        ), xo(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ge && ((i = n = tt) && (n = zh(
          n,
          t.type,
          t.pendingProps,
          ea
        ), n !== null ? (t.stateNode = n, yt = t, tt = aa(n.firstChild), ea = !1, i = !0) : i = !1), i || an(t)), ya(t), i = t.type, l = t.pendingProps, d = e !== null ? e.memoizedProps : null, n = l.children, cr(i, l) ? n = null : d !== null && cr(i, d) && (t.flags |= 32), t.memoizedState !== null && (i = sc(
          e,
          t,
          Gp,
          null,
          null,
          a
        ), Nl._currentValue = i), xo(e, t), St(e, t, n, a), t.child;
      case 6:
        return e === null && Ge && ((e = a = tt) && (a = Eh(
          a,
          t.pendingProps,
          ea
        ), a !== null ? (t.stateNode = a, yt = t, tt = null, e = !0) : e = !1), e || an(t)), null;
      case 13:
        return _f(e, t, a);
      case 4:
        return Pe(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = Dn(
          t,
          null,
          n,
          a
        ) : St(e, t, n, a), t.child;
      case 11:
        return lf(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return St(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return St(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return St(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return n = t.pendingProps, nn(t, t.type, n.value), St(e, t, n.children, a), t.child;
      case 9:
        return i = t.type._context, n = t.pendingProps.children, jn(t), i = xt(i), n = n(i), t.flags |= 1, St(e, t, n, a), t.child;
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
        return jn(t), n = xt(dt), e === null ? (i = Ws(), i === null && (i = Fe, l = Js(), i.pooledCache = l, l.refCount++, l !== null && (i.pooledCacheLanes |= a), i = l), t.memoizedState = { parent: n, cache: i }, Ps(t), nn(t, dt, i)) : ((e.lanes & a) !== 0 && (ec(e, t), ol(t, null, null, a), ll()), i = e.memoizedState, l = t.memoizedState, i.parent !== n ? (i = { parent: n, cache: n }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), nn(t, dt, n)) : (n = l.cache, nn(t, dt, n), n !== i.cache && $s(
          t,
          [dt],
          a,
          !0
        ))), St(
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
  function Ua(e) {
    e.flags |= 4;
  }
  function Dc(e, t, a, n, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Zf()) e.flags |= 8192;
        else
          throw Rn = lo, Fs;
    } else e.flags &= -16777217;
  }
  function vf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Om(t))
      if (Zf()) e.flags |= 8192;
      else
        throw Rn = lo, Fs;
  }
  function wo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ce() : 536870912, e.lanes |= t, wi |= t);
  }
  function fl(e, t) {
    if (!Ge)
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
  function at(e) {
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
    switch (Ys(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return at(t), null;
      case 1:
        return at(t), null;
      case 3:
        return a = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Ta(dt), Oe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ui(t) ? Ua(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ks())), at(t), null;
      case 26:
        var i = t.type, l = t.memoizedState;
        return e === null ? (Ua(t), l !== null ? (at(t), vf(t, l)) : (at(t), Dc(
          t,
          i,
          null,
          n,
          a
        ))) : l ? l !== e.memoizedState ? (Ua(t), at(t), vf(t, l)) : (at(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && Ua(t), at(t), Dc(
          t,
          i,
          e,
          n,
          a
        )), null;
      case 27:
        if (Xa(t), a = ge.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && Ua(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(u(166));
            return at(t), null;
          }
          e = oe.current, ui(t) ? Iu(t) : (e = Em(i, n, a), t.stateNode = e, Ua(t));
        }
        return at(t), null;
      case 5:
        if (Xa(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && Ua(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(u(166));
            return at(t), null;
          }
          if (l = oe.current, ui(t))
            Iu(t);
          else {
            var d = Lo(
              ge.current
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
            l[bt] = t, l[At] = n;
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
            e: switch (wt(l, i, n), i) {
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
            n && Ua(t);
          }
        }
        return at(t), Dc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && Ua(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(u(166));
          if (e = ge.current, ui(t)) {
            if (e = t.stateNode, a = t.memoizedProps, n = null, i = yt, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  n = i.memoizedProps;
              }
            e[bt] = t, e = !!(e.nodeValue === a || n !== null && n.suppressHydrationWarning === !0 || _m(e.nodeValue, a)), e || an(t, !0);
          } else
            e = Lo(e).createTextNode(
              n
            ), e[bt] = t, t.stateNode = e;
        }
        return at(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = ui(t), a !== null) {
            if (e === null) {
              if (!n) throw Error(u(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(557));
              e[bt] = t;
            } else
              An(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            at(t), e = !1;
          } else
            a = Ks(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(u(558));
        }
        return at(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = ui(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(u(317));
              i[bt] = t;
            } else
              An(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            at(t), i = !1;
          } else
            i = Ks(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
        }
        return Ht(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = n !== null, e = e !== null && e.memoizedState !== null, a && (n = t.child, i = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (i = n.alternate.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== i && (n.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), wo(t, t.updateQueue), at(t), null);
      case 4:
        return Oe(), e === null && nr(t.stateNode.containerInfo), at(t), null;
      case 10:
        return Ta(t.type), at(t), null;
      case 19:
        if (H(st), n = t.memoizedState, n === null) return at(t), null;
        if (i = (t.flags & 128) !== 0, l = n.rendering, l === null)
          if (i) fl(n, !1);
          else {
            if (ot !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (l = ro(e), l !== null) {
                  for (t.flags |= 128, fl(n, !1), e = l.updateQueue, t.updateQueue = e, wo(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Ku(a, e), a = a.sibling;
                  return te(
                    st,
                    st.current & 1 | 2
                  ), Ge && Ca(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && et() > ko && (t.flags |= 128, i = !0, fl(n, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = ro(l), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, wo(t, e), fl(n, !0), n.tail === null && n.tailMode === "hidden" && !l.alternate && !Ge)
                return at(t), null;
            } else
              2 * et() - n.renderingStartTime > ko && a !== 536870912 && (t.flags |= 128, i = !0, fl(n, !1), t.lanes = 4194304);
          n.isBackwards ? (l.sibling = t.child, t.child = l) : (e = n.last, e !== null ? e.sibling = l : t.child = l, n.last = l);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = et(), e.sibling = null, a = st.current, te(
          st,
          i ? a & 1 | 2 : a & 1
        ), Ge && Ca(t, n.treeForkCount), e) : (at(t), null);
      case 22:
      case 23:
        return Ht(t), ic(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : at(t), a = t.updateQueue, a !== null && wo(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== a && (t.flags |= 2048), e !== null && H(Tn), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Ta(dt), at(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Ip(e, t) {
    switch (Ys(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ta(dt), Oe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Xa(t), null;
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
        return H(st), null;
      case 4:
        return Oe(), null;
      case 10:
        return Ta(t.type), null;
      case 22:
      case 23:
        return Ht(t), ic(), e !== null && H(Tn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Ta(dt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bf(e, t) {
    switch (Ys(t), t.tag) {
      case 3:
        Ta(dt), Oe();
        break;
      case 26:
      case 27:
      case 5:
        Xa(t);
        break;
      case 4:
        Oe();
        break;
      case 31:
        t.memoizedState !== null && Ht(t);
        break;
      case 13:
        Ht(t);
        break;
      case 19:
        H(st);
        break;
      case 10:
        Ta(t.type);
        break;
      case 22:
      case 23:
        Ht(t), ic(), e !== null && H(Tn);
        break;
      case 24:
        Ta(dt);
    }
  }
  function ml(e, t) {
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
      Qe(t, t.return, _);
    }
  }
  function un(e, t, a) {
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
              var x = a, T = _;
              try {
                T();
              } catch (q) {
                Qe(
                  i,
                  x,
                  q
                );
              }
            }
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (q) {
      Qe(t, t.return, q);
    }
  }
  function yf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        rd(t, a);
      } catch (n) {
        Qe(e, e.return, n);
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
      Qe(e, t, n);
    }
  }
  function _l(e, t) {
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
      Qe(e, t, i);
    }
  }
  function pa(e, t) {
    var a = e.ref, n = e.refCleanup;
    if (a !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (i) {
          Qe(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (i) {
          Qe(e, t, i);
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
      Qe(e, e.return, i);
    }
  }
  function Uc(e, t, a) {
    try {
      var n = e.stateNode;
      vh(n, e.type, a, t), n[At] = t;
    } catch (i) {
      Qe(e, e.return, i);
    }
  }
  function wf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && hn(e.type) || e.tag === 4;
  }
  function Bc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || wf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && hn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Lc(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Ma));
    else if (n !== 4 && (n === 27 && hn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Lc(e, t, a), e = e.sibling; e !== null; )
        Lc(e, t, a), e = e.sibling;
  }
  function zo(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (n !== 4 && (n === 27 && hn(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (zo(e, t, a), e = e.sibling; e !== null; )
        zo(e, t, a), e = e.sibling;
  }
  function zf(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var n = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      wt(t, n, a), t[bt] = e, t[At] = a;
    } catch (l) {
      Qe(e, e.return, l);
    }
  }
  var Ba = !1, _t = !1, Gc = !1, Ef = typeof WeakSet == "function" ? WeakSet : Set, vt = null;
  function Wp(e, t) {
    if (e = e.containerInfo, or = Ko, e = Uu(e), Ts(e)) {
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
            var d = 0, _ = -1, x = -1, T = 0, q = 0, X = e, O = null;
            t: for (; ; ) {
              for (var U; X !== a || i !== 0 && X.nodeType !== 3 || (_ = d + i), X !== l || n !== 0 && X.nodeType !== 3 || (x = d + n), X.nodeType === 3 && (d += X.nodeValue.length), (U = X.firstChild) !== null; )
                O = X, X = U;
              for (; ; ) {
                if (X === e) break t;
                if (O === a && ++T === i && (_ = d), O === l && ++q === n && (x = d), (U = X.nextSibling) !== null) break;
                X = O, O = X.parentNode;
              }
              X = U;
            }
            a = _ === -1 || x === -1 ? null : { start: _, end: x };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (sr = { focusedElem: e, selectionRange: a }, Ko = !1, vt = t; vt !== null; )
      if (t = vt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, vt = e;
      else
        for (; vt !== null; ) {
          switch (t = vt, l = t.alternate, e = t.flags, t.tag) {
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
                  var fe = Bn(
                    a.type,
                    i
                  );
                  e = n.getSnapshotBeforeUpdate(
                    fe,
                    l
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Se) {
                  Qe(
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
                  ur(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ur(e);
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
        Ga(e, a), n & 4 && ml(5, a);
        break;
      case 1:
        if (Ga(e, a), n & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (d) {
              Qe(a, a.return, d);
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
              Qe(
                a,
                a.return,
                d
              );
            }
          }
        n & 64 && yf(a), n & 512 && _l(a, a.return);
        break;
      case 3:
        if (Ga(e, a), n & 64 && (e = a.updateQueue, e !== null)) {
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
            Qe(a, a.return, d);
          }
        }
        break;
      case 27:
        t === null && n & 4 && zf(a);
      case 26:
      case 5:
        Ga(e, a), t === null && n & 4 && Sf(a), n & 512 && _l(a, a.return);
        break;
      case 12:
        Ga(e, a);
        break;
      case 31:
        Ga(e, a), n & 4 && Af(e, a);
        break;
      case 13:
        Ga(e, a), n & 4 && Cf(e, a), n & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = oh.bind(
          null,
          a
        ), Nh(e, a))));
        break;
      case 22:
        if (n = a.memoizedState !== null || Ba, !n) {
          t = t !== null && t.memoizedState !== null || _t, i = Ba;
          var l = _t;
          Ba = n, (_t = t) && !l ? Ha(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Ga(e, a), Ba = i, _t = l;
        }
        break;
      case 30:
        break;
      default:
        Ga(e, a);
    }
  }
  function Mf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Mf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && gs(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var nt = null, jt = !1;
  function La(e, t, a) {
    for (a = a.child; a !== null; )
      kf(e, t, a), a = a.sibling;
  }
  function kf(e, t, a) {
    if (k && typeof k.onCommitFiberUnmount == "function")
      try {
        k.onCommitFiberUnmount(Ea, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        _t || pa(a, t), La(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        _t || pa(a, t);
        var n = nt, i = jt;
        hn(a.type) && (nt = a.stateNode, jt = !1), La(
          e,
          t,
          a
        ), wl(a.stateNode), nt = n, jt = i;
        break;
      case 5:
        _t || pa(a, t);
      case 6:
        if (n = nt, i = jt, nt = null, La(
          e,
          t,
          a
        ), nt = n, jt = i, nt !== null)
          if (jt)
            try {
              (nt.nodeType === 9 ? nt.body : nt.nodeName === "HTML" ? nt.ownerDocument.body : nt).removeChild(a.stateNode);
            } catch (l) {
              Qe(
                a,
                t,
                l
              );
            }
          else
            try {
              nt.removeChild(a.stateNode);
            } catch (l) {
              Qe(
                a,
                t,
                l
              );
            }
        break;
      case 18:
        nt !== null && (jt ? (e = nt, ym(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), ji(e)) : ym(nt, a.stateNode));
        break;
      case 4:
        n = nt, i = jt, nt = a.stateNode.containerInfo, jt = !0, La(
          e,
          t,
          a
        ), nt = n, jt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        un(2, a, t), _t || un(4, a, t), La(
          e,
          t,
          a
        );
        break;
      case 1:
        _t || (pa(a, t), n = a.stateNode, typeof n.componentWillUnmount == "function" && xf(
          a,
          t,
          n
        )), La(
          e,
          t,
          a
        );
        break;
      case 21:
        La(
          e,
          t,
          a
        );
        break;
      case 22:
        _t = (n = _t) || a.memoizedState !== null, La(
          e,
          t,
          a
        ), _t = n;
        break;
      default:
        La(
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
        ji(e);
      } catch (a) {
        Qe(t, t.return, a);
      }
    }
  }
  function Cf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ji(e);
      } catch (a) {
        Qe(t, t.return, a);
      }
  }
  function Fp(e) {
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
  function Eo(e, t) {
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
              if (hn(_.type)) {
                nt = _.stateNode, jt = !1;
                break e;
              }
              break;
            case 5:
              nt = _.stateNode, jt = !1;
              break e;
            case 3:
            case 4:
              nt = _.stateNode.containerInfo, jt = !0;
              break e;
          }
          _ = _.return;
        }
        if (nt === null) throw Error(u(160));
        kf(l, d, i), nt = null, jt = !1, l = i.alternate, l !== null && (l.return = null), i.return = null;
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
        Tt(t, e), Ot(e), n & 4 && (un(3, e, e.return), ml(3, e), un(5, e, e.return));
        break;
      case 1:
        Tt(t, e), Ot(e), n & 512 && (_t || a === null || pa(a, a.return)), n & 64 && Ba && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? n : a.concat(n))));
        break;
      case 26:
        var i = sa;
        if (Tt(t, e), Ot(e), n & 512 && (_t || a === null || pa(a, a.return)), n & 4) {
          var l = a !== null ? a.memoizedState : null;
          if (n = e.memoizedState, a === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, a = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (n) {
                    case "title":
                      l = i.getElementsByTagName("title")[0], (!l || l[Vi] || l[bt] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = i.createElement(n), i.head.insertBefore(
                        l,
                        i.querySelector("head > title")
                      )), wt(l, n, a), l[bt] = e, ht(l), n = l;
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
                      l = i.createElement(n), wt(l, n, a), i.head.appendChild(l);
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
                      l = i.createElement(n), wt(l, n, a), i.head.appendChild(l);
                      break;
                    default:
                      throw Error(u(468, n));
                  }
                  l[bt] = e, ht(l), n = l;
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
            )) : n === null && e.stateNode !== null && Uc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Tt(t, e), Ot(e), n & 512 && (_t || a === null || pa(a, a.return)), a !== null && n & 4 && Uc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Tt(t, e), Ot(e), n & 512 && (_t || a === null || pa(a, a.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            ei(i, "");
          } catch (fe) {
            Qe(e, e.return, fe);
          }
        }
        n & 4 && e.stateNode != null && (i = e.memoizedProps, Uc(
          e,
          i,
          a !== null ? a.memoizedProps : i
        )), n & 1024 && (Gc = !0);
        break;
      case 6:
        if (Tt(t, e), Ot(e), n & 4) {
          if (e.stateNode === null)
            throw Error(u(162));
          n = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = n;
          } catch (fe) {
            Qe(e, e.return, fe);
          }
        }
        break;
      case 3:
        if (Vo = null, i = sa, sa = Go(t.containerInfo), Tt(t, e), sa = i, Ot(e), n & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ji(t.containerInfo);
          } catch (fe) {
            Qe(e, e.return, fe);
          }
        Gc && (Gc = !1, Tf(e));
        break;
      case 4:
        n = sa, sa = Go(
          e.stateNode.containerInfo
        ), Tt(t, e), Ot(e), sa = n;
        break;
      case 12:
        Tt(t, e), Ot(e);
        break;
      case 31:
        Tt(t, e), Ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Eo(e, n)));
        break;
      case 13:
        Tt(t, e), Ot(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Mo = et()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Eo(e, n)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var x = a !== null && a.memoizedState !== null, T = Ba, q = _t;
        if (Ba = T || i, _t = q || x, Tt(t, e), _t = q, Ba = T, Ot(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (a === null || x || Ba || _t || Ln(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                x = a = t;
                try {
                  if (l = x.stateNode, i)
                    d = l.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    _ = x.stateNode;
                    var X = x.memoizedProps.style, O = X != null && X.hasOwnProperty("display") ? X.display : null;
                    _.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (fe) {
                  Qe(x, x.return, fe);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                x = t;
                try {
                  x.stateNode.nodeValue = i ? "" : x.memoizedProps;
                } catch (fe) {
                  Qe(x, x.return, fe);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                x = t;
                try {
                  var U = x.stateNode;
                  i ? xm(U, !0) : xm(x.stateNode, !1);
                } catch (fe) {
                  Qe(x, x.return, fe);
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
        n & 4 && (n = e.updateQueue, n !== null && (a = n.retryQueue, a !== null && (n.retryQueue = null, Eo(e, a))));
        break;
      case 19:
        Tt(t, e), Ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Eo(e, n)));
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
            var i = a.stateNode, l = Bc(e);
            zo(e, l, i);
            break;
          case 5:
            var d = a.stateNode;
            a.flags & 32 && (ei(d, ""), a.flags &= -33);
            var _ = Bc(e);
            zo(e, _, d);
            break;
          case 3:
          case 4:
            var x = a.stateNode.containerInfo, T = Bc(e);
            Lc(
              e,
              T,
              x
            );
            break;
          default:
            throw Error(u(161));
        }
      } catch (q) {
        Qe(e, e.return, q);
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
  function Ga(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Nf(e, t.alternate, t), t = t.sibling;
  }
  function Ln(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          un(4, t, t.return), Ln(t);
          break;
        case 1:
          pa(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && xf(
            t,
            t.return,
            a
          ), Ln(t);
          break;
        case 27:
          wl(t.stateNode);
        case 26:
        case 5:
          pa(t, t.return), Ln(t);
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
  function Ha(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, i = e, l = t, d = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ha(
            i,
            l,
            a
          ), ml(4, l);
          break;
        case 1:
          if (Ha(
            i,
            l,
            a
          ), n = l, i = n.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (T) {
              Qe(n, n.return, T);
            }
          if (n = l, i = n.updateQueue, i !== null) {
            var _ = n.stateNode;
            try {
              var x = i.shared.hiddenCallbacks;
              if (x !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < x.length; i++)
                  cd(x[i], _);
            } catch (T) {
              Qe(n, n.return, T);
            }
          }
          a && d & 64 && yf(l), _l(l, l.return);
          break;
        case 27:
          zf(l);
        case 26:
        case 5:
          Ha(
            i,
            l,
            a
          ), a && n === null && d & 4 && Sf(l), _l(l, l.return);
          break;
        case 12:
          Ha(
            i,
            l,
            a
          );
          break;
        case 31:
          Ha(
            i,
            l,
            a
          ), a && d & 4 && Af(i, l);
          break;
        case 13:
          Ha(
            i,
            l,
            a
          ), a && d & 4 && Cf(i, l);
          break;
        case 22:
          l.memoizedState === null && Ha(
            i,
            l,
            a
          ), _l(l, l.return);
          break;
        case 30:
          break;
        default:
          Ha(
            i,
            l,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Hc(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && el(a));
  }
  function Vc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && el(e));
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
        ), i & 2048 && ml(9, t);
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
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && el(e)));
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
          } catch (x) {
            Qe(t, t.return, x);
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
        ) : gl(e, t) : l._visibility & 2 ? ca(
          e,
          t,
          a,
          n
        ) : (l._visibility |= 2, yi(
          e,
          t,
          a,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && Hc(d, t);
        break;
      case 24:
        ca(
          e,
          t,
          a,
          n
        ), i & 2048 && Vc(t.alternate, t);
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
  function yi(e, t, a, n, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var l = e, d = t, _ = a, x = n, T = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          yi(
            l,
            d,
            _,
            x,
            i
          ), ml(8, d);
          break;
        case 23:
          break;
        case 22:
          var q = d.stateNode;
          d.memoizedState !== null ? q._visibility & 2 ? yi(
            l,
            d,
            _,
            x,
            i
          ) : gl(
            l,
            d
          ) : (q._visibility |= 2, yi(
            l,
            d,
            _,
            x,
            i
          )), i && T & 2048 && Hc(
            d.alternate,
            d
          );
          break;
        case 24:
          yi(
            l,
            d,
            _,
            x,
            i
          ), i && T & 2048 && Vc(d.alternate, d);
          break;
        default:
          yi(
            l,
            d,
            _,
            x,
            i
          );
      }
      t = t.sibling;
    }
  }
  function gl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, n = t, i = n.flags;
        switch (n.tag) {
          case 22:
            gl(a, n), i & 2048 && Hc(
              n.alternate,
              n
            );
            break;
          case 24:
            gl(a, n), i & 2048 && Vc(n.alternate, n);
            break;
          default:
            gl(a, n);
        }
        t = t.sibling;
      }
  }
  var pl = 8192;
  function xi(e, t, a) {
    if (e.subtreeFlags & pl)
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
        xi(
          e,
          t,
          a
        ), e.flags & pl && e.memoizedState !== null && Lh(
          a,
          sa,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        xi(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var n = sa;
        sa = Go(e.stateNode.containerInfo), xi(
          e,
          t,
          a
        ), sa = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = pl, pl = 16777216, xi(
          e,
          t,
          a
        ), pl = n) : xi(
          e,
          t,
          a
        ));
        break;
      default:
        xi(
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
  function hl(e) {
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
        hl(e), e.flags & 2048 && un(9, e, e.return);
        break;
      case 3:
        hl(e);
        break;
      case 12:
        hl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, No(e)) : hl(e);
        break;
      default:
        hl(e);
    }
  }
  function No(e) {
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
          un(8, t, t.return), No(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, No(t));
          break;
        default:
          No(t);
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
          un(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var n = a.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          el(a.memoizedState.cache);
      }
      if (n = a.child, n !== null) n.return = a, vt = n;
      else
        e: for (a = e; vt !== null; ) {
          n = vt;
          var i = n.sibling, l = n.return;
          if (Mf(n), n === a) {
            vt = null;
            break e;
          }
          if (i !== null) {
            i.return = l, vt = i;
            break e;
          }
          vt = l;
        }
    }
  }
  var Pp = {
    getCacheForType: function(e) {
      var t = xt(dt), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return xt(dt).controller.signal;
    }
  }, eh = typeof WeakMap == "function" ? WeakMap : Map, Ze = 0, Fe = null, De = null, Be = 0, Xe = 0, Vt = null, dn = !1, Si = !1, qc = !1, Va = 0, ot = 0, fn = 0, Gn = 0, Yc = 0, qt = 0, wi = 0, vl = null, Rt = null, Zc = !1, Mo = 0, Lf = 0, ko = 1 / 0, Ao = null, mn = null, gt = 0, _n = null, zi = null, qa = 0, Kc = 0, Xc = null, Gf = null, bl = 0, Qc = null;
  function Yt() {
    return (Ze & 2) !== 0 && Be !== 0 ? Be & -Be : D.T !== null ? Pc() : eu();
  }
  function Hf() {
    if (qt === 0)
      if ((Be & 536870912) === 0 || Ge) {
        var e = $e;
        $e <<= 1, ($e & 3932160) === 0 && ($e = 262144), qt = e;
      } else qt = 536870912;
    return e = Gt.current, e !== null && (e.flags |= 32), qt;
  }
  function Dt(e, t, a) {
    (e === Fe && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (Ei(e, 0), gn(
      e,
      Be,
      qt,
      !1
    )), Ae(e, a), ((Ze & 2) === 0 || e !== Fe) && (e === Fe && ((Ze & 2) === 0 && (Gn |= a), ot === 4 && gn(
      e,
      Be,
      qt,
      !1
    )), ha(e));
  }
  function Vf(e, t, a) {
    if ((Ze & 6) !== 0) throw Error(u(327));
    var n = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ue(e, t), i = n ? nh(e, t) : Jc(e, t, !0), l = n;
    do {
      if (i === 0) {
        Si && !n && gn(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, l && !th(a)) {
          i = Jc(e, t, !1), l = !1;
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
              i = vl;
              var x = _.current.memoizedState.isDehydrated;
              if (x && (Ei(_, d).flags |= 256), d = Jc(
                _,
                d,
                !1
              ), d !== 2) {
                if (qc && !x) {
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
          Ei(e, 0), gn(e, t, 0, !0);
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
              gn(
                n,
                t,
                qt,
                !dn
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
          if ((t & 62914560) === t && (i = Mo + 300 - et(), 10 < i)) {
            if (gn(
              n,
              t,
              qt,
              !dn
            ), ne(n, 0, !0) !== 0) break e;
            qa = t, n.timeoutHandle = vm(
              qf.bind(
                null,
                n,
                a,
                Rt,
                Ao,
                Zc,
                t,
                qt,
                Gn,
                wi,
                dn,
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
            Ao,
            Zc,
            t,
            qt,
            Gn,
            wi,
            dn,
            l,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ha(e);
  }
  function qf(e, t, a, n, i, l, d, _, x, T, q, X, O, U) {
    if (e.timeoutHandle = -1, X = t.subtreeFlags, X & 8192 || (X & 16785408) === 16785408) {
      X = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ma
      }, Rf(
        t,
        l,
        X
      );
      var fe = (l & 62914560) === l ? Mo - et() : (l & 4194048) === l ? Lf - et() : 0;
      if (fe = Gh(
        X,
        fe
      ), fe !== null) {
        qa = l, e.cancelPendingCommit = fe(
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
            x,
            q,
            X,
            null,
            O,
            U
          )
        ), gn(e, l, d, !T);
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
      x
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
  function gn(e, t, a, n) {
    t &= ~Yc, t &= ~Gn, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var l = 31 - $(i), d = 1 << l;
      n[l] = -1, i &= ~d;
    }
    a !== 0 && kt(e, a, t);
  }
  function Co() {
    return (Ze & 6) === 0 ? (yl(0), !1) : !0;
  }
  function $c() {
    if (De !== null) {
      if (Xe === 0)
        var e = De.return;
      else
        e = De, ja = Cn = null, uc(e), gi = null, al = 0, e = De;
      for (; e !== null; )
        bf(e.alternate, e), e = e.return;
      De = null;
    }
  }
  function Ei(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, xh(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), qa = 0, $c(), Fe = e, De = a = Aa(e.current, null), Be = t, Xe = 0, Vt = null, dn = !1, Si = ue(e, t), qc = !1, wi = qt = Yc = Gn = fn = ot = 0, Rt = vl = null, Zc = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var i = 31 - $(n), l = 1 << i;
        t |= e[i], n &= ~l;
      }
    return Va = t, Il(), a;
  }
  function Yf(e, t) {
    ke = null, D.H = ul, t === _i || t === io ? (t = id(), Xe = 3) : t === Fs ? (t = id(), Xe = 4) : Xe = t === Nc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Vt = t, De === null && (ot = 1, bo(
      e,
      Wt(t, e.current)
    ));
  }
  function Zf() {
    var e = Gt.current;
    return e === null ? !0 : (Be & 4194048) === Be ? ta === null : (Be & 62914560) === Be || (Be & 536870912) !== 0 ? e === ta : !1;
  }
  function Kf() {
    var e = D.H;
    return D.H = ul, e === null ? ul : e;
  }
  function Xf() {
    var e = D.A;
    return D.A = Pp, e;
  }
  function jo() {
    ot = 4, dn || (Be & 4194048) !== Be && Gt.current !== null || (Si = !0), (fn & 134217727) === 0 && (Gn & 134217727) === 0 || Fe === null || gn(
      Fe,
      Be,
      qt,
      !1
    );
  }
  function Jc(e, t, a) {
    var n = Ze;
    Ze |= 2;
    var i = Kf(), l = Xf();
    (Fe !== e || Be !== t) && (Ao = null, Ei(e, t)), t = !1;
    var d = ot;
    e: do
      try {
        if (Xe !== 0 && De !== null) {
          var _ = De, x = Vt;
          switch (Xe) {
            case 8:
              $c(), d = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Gt.current === null && (t = !0);
              var T = Xe;
              if (Xe = 0, Vt = null, Ni(e, _, x, T), a && Si) {
                d = 0;
                break e;
              }
              break;
            default:
              T = Xe, Xe = 0, Vt = null, Ni(e, _, x, T);
          }
        }
        ah(), d = ot;
        break;
      } catch (q) {
        Yf(e, q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ja = Cn = null, Ze = n, D.H = i, D.A = l, De === null && (Fe = null, Be = 0, Il()), d;
  }
  function ah() {
    for (; De !== null; ) Qf(De);
  }
  function nh(e, t) {
    var a = Ze;
    Ze |= 2;
    var n = Kf(), i = Xf();
    Fe !== e || Be !== t ? (Ao = null, ko = et() + 500, Ei(e, t)) : Si = ue(
      e,
      t
    );
    e: do
      try {
        if (Xe !== 0 && De !== null) {
          t = De;
          var l = Vt;
          t: switch (Xe) {
            case 1:
              Xe = 0, Vt = null, Ni(e, t, l, 1);
              break;
            case 2:
            case 9:
              if (ad(l)) {
                Xe = 0, Vt = null, $f(t);
                break;
              }
              t = function() {
                Xe !== 2 && Xe !== 9 || Fe !== e || (Xe = 7), ha(e);
              }, l.then(t, t);
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              ad(l) ? (Xe = 0, Vt = null, $f(t)) : (Xe = 0, Vt = null, Ni(e, t, l, 7));
              break;
            case 5:
              var d = null;
              switch (De.tag) {
                case 26:
                  d = De.memoizedState;
                case 5:
                case 27:
                  var _ = De;
                  if (d ? Om(d) : _.stateNode.complete) {
                    Xe = 0, Vt = null;
                    var x = _.sibling;
                    if (x !== null) De = x;
                    else {
                      var T = _.return;
                      T !== null ? (De = T, To(T)) : De = null;
                    }
                    break t;
                  }
              }
              Xe = 0, Vt = null, Ni(e, t, l, 5);
              break;
            case 6:
              Xe = 0, Vt = null, Ni(e, t, l, 6);
              break;
            case 8:
              $c(), ot = 6;
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
    return ja = Cn = null, D.H = n, D.A = i, Ze = a, De !== null ? 0 : (Fe = null, Be = 0, Il(), ot);
  }
  function ih() {
    for (; De !== null && !Xn(); )
      Qf(De);
  }
  function Qf(e) {
    var t = hf(e.alternate, e, Va);
    e.memoizedProps = e.pendingProps, t === null ? To(e) : De = t;
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
          Be
        );
        break;
      case 11:
        t = df(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Be
        );
        break;
      case 5:
        uc(t);
      default:
        bf(a, t), t = De = Ku(t, Va), t = hf(a, t, Va);
    }
    e.memoizedProps = e.pendingProps, t === null ? To(e) : De = t;
  }
  function Ni(e, t, a, n) {
    ja = Cn = null, uc(t), gi = null, al = 0;
    var i = t.return;
    try {
      if (Xp(
        e,
        i,
        t,
        a,
        Be
      )) {
        ot = 1, bo(
          e,
          Wt(a, e.current)
        ), De = null;
        return;
      }
    } catch (l) {
      if (i !== null) throw De = i, l;
      ot = 1, bo(
        e,
        Wt(a, e.current)
      ), De = null;
      return;
    }
    t.flags & 32768 ? (Ge || n === 1 ? e = !0 : Si || (Be & 536870912) !== 0 ? e = !1 : (dn = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Gt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Jf(t, e)) : To(t);
  }
  function To(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Jf(
          t,
          dn
        );
        return;
      }
      e = t.return;
      var a = Jp(
        t.alternate,
        t,
        Va
      );
      if (a !== null) {
        De = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        De = t;
        return;
      }
      De = t = e;
    } while (t !== null);
    ot === 0 && (ot = 5);
  }
  function Jf(e, t) {
    do {
      var a = Ip(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, De = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        De = e;
        return;
      }
      De = e = a;
    } while (e !== null);
    ot = 6, De = null;
  }
  function If(e, t, a, n, i, l, d, _, x) {
    e.cancelPendingCommit = null;
    do
      Oo();
    while (gt !== 0);
    if ((Ze & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (l = t.lanes | t.childLanes, l |= Bs, pt(
        e,
        a,
        l,
        d,
        _,
        x
      ), e === Fe && (De = Fe = null, Be = 0), zi = t, _n = e, qa = a, Kc = l, Xc = i, Gf = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ch(ma, function() {
        return tm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = D.T, D.T = null, i = F.p, F.p = 2, d = Ze, Ze |= 4;
        try {
          Wp(e, t, a);
        } finally {
          Ze = d, F.p = i, D.T = n;
        }
      }
      gt = 1, Wf(), Ff(), Pf();
    }
  }
  function Wf() {
    if (gt === 1) {
      gt = 0;
      var e = _n, t = zi, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = D.T, D.T = null;
        var n = F.p;
        F.p = 2;
        var i = Ze;
        Ze |= 4;
        try {
          jf(t, e);
          var l = sr, d = Uu(e.containerInfo), _ = l.focusedElem, x = l.selectionRange;
          if (d !== _ && _ && _.ownerDocument && Du(
            _.ownerDocument.documentElement,
            _
          )) {
            if (x !== null && Ts(_)) {
              var T = x.start, q = x.end;
              if (q === void 0 && (q = T), "selectionStart" in _)
                _.selectionStart = T, _.selectionEnd = Math.min(
                  q,
                  _.value.length
                );
              else {
                var X = _.ownerDocument || document, O = X && X.defaultView || window;
                if (O.getSelection) {
                  var U = O.getSelection(), fe = _.textContent.length, Se = Math.min(x.start, fe), We = x.end === void 0 ? Se : Math.min(x.end, fe);
                  !U.extend && Se > We && (d = We, We = Se, Se = d);
                  var N = Ru(
                    _,
                    Se
                  ), w = Ru(
                    _,
                    We
                  );
                  if (N && w && (U.rangeCount !== 1 || U.anchorNode !== N.node || U.anchorOffset !== N.offset || U.focusNode !== w.node || U.focusOffset !== w.offset)) {
                    var j = X.createRange();
                    j.setStart(N.node, N.offset), U.removeAllRanges(), Se > We ? (U.addRange(j), U.extend(w.node, w.offset)) : (j.setEnd(w.node, w.offset), U.addRange(j));
                  }
                }
              }
            }
            for (X = [], U = _; U = U.parentNode; )
              U.nodeType === 1 && X.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof _.focus == "function" && _.focus(), _ = 0; _ < X.length; _++) {
              var K = X[_];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Ko = !!or, sr = or = null;
        } finally {
          Ze = i, F.p = n, D.T = a;
        }
      }
      e.current = t, gt = 2;
    }
  }
  function Ff() {
    if (gt === 2) {
      gt = 0;
      var e = _n, t = zi, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = D.T, D.T = null;
        var n = F.p;
        F.p = 2;
        var i = Ze;
        Ze |= 4;
        try {
          Nf(e, t.alternate, t);
        } finally {
          Ze = i, F.p = n, D.T = a;
        }
      }
      gt = 3;
    }
  }
  function Pf() {
    if (gt === 4 || gt === 3) {
      gt = 0, rt();
      var e = _n, t = zi, a = qa, n = Gf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? gt = 5 : (gt = 0, zi = _n = null, em(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (mn = null), ms(a), t = t.stateNode, k && typeof k.onCommitFiberRoot == "function")
        try {
          k.onCommitFiberRoot(
            Ea,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        t = D.T, i = F.p, F.p = 2, D.T = null;
        try {
          for (var l = e.onRecoverableError, d = 0; d < n.length; d++) {
            var _ = n[d];
            l(_.value, {
              componentStack: _.stack
            });
          }
        } finally {
          D.T = t, F.p = i;
        }
      }
      (qa & 3) !== 0 && Oo(), ha(e), i = e.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? e === Qc ? bl++ : (bl = 0, Qc = e) : bl = 0, yl(0);
    }
  }
  function em(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, el(t)));
  }
  function Oo() {
    return Wf(), Ff(), Pf(), tm();
  }
  function tm() {
    if (gt !== 5) return !1;
    var e = _n, t = Kc;
    Kc = 0;
    var a = ms(qa), n = D.T, i = F.p;
    try {
      F.p = 32 > a ? 32 : a, D.T = null, a = Xc, Xc = null;
      var l = _n, d = qa;
      if (gt = 0, zi = _n = null, qa = 0, (Ze & 6) !== 0) throw Error(u(331));
      var _ = Ze;
      if (Ze |= 4, Uf(l.current), Of(
        l,
        l.current,
        d,
        a
      ), Ze = _, yl(0, !1), k && typeof k.onPostCommitFiberRoot == "function")
        try {
          k.onPostCommitFiberRoot(Ea, l);
        } catch {
        }
      return !0;
    } finally {
      F.p = i, D.T = n, em(e, t);
    }
  }
  function am(e, t, a) {
    t = Wt(a, t), t = Ec(e.stateNode, t, 2), e = sn(e, t, 2), e !== null && (Ae(e, 2), ha(e));
  }
  function Qe(e, t, a) {
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (mn === null || !mn.has(n))) {
            e = Wt(a, e), a = af(2), n = sn(t, a, 2), n !== null && (nf(
              a,
              n,
              t,
              e
            ), Ae(n, 2), ha(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ic(e, t, a) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new eh();
      var i = /* @__PURE__ */ new Set();
      n.set(t, i);
    } else
      i = n.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(t, i));
    i.has(a) || (qc = !0, i.add(a), e = lh.bind(null, e, t, a), t.then(e, e));
  }
  function lh(e, t, a) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Fe === e && (Be & a) === a && (ot === 4 || ot === 3 && (Be & 62914560) === Be && 300 > et() - Mo ? (Ze & 2) === 0 && Ei(e, 0) : Yc |= a, wi === Be && (wi = 0)), ha(e);
  }
  function nm(e, t) {
    t === 0 && (t = ce()), e = Mn(e, t), e !== null && (Ae(e, t), ha(e));
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
    return Sa(e, t);
  }
  var Ro = null, Mi = null, Wc = !1, Do = !1, Fc = !1, pn = 0;
  function ha(e) {
    e !== Mi && e.next === null && (Mi === null ? Ro = Mi = e : Mi = Mi.next = e), Do = !0, Wc || (Wc = !0, uh());
  }
  function yl(e, t) {
    if (!Fc && Do) {
      Fc = !0;
      do
        for (var a = !1, n = Ro; n !== null; ) {
          if (e !== 0) {
            var i = n.pendingLanes;
            if (i === 0) var l = 0;
            else {
              var d = n.suspendedLanes, _ = n.pingedLanes;
              l = (1 << 31 - $(42 | e) + 1) - 1, l &= i & ~(d & ~_), l = l & 201326741 ? l & 201326741 | 1 : l ? l | 2 : 0;
            }
            l !== 0 && (a = !0, sm(n, l));
          } else
            l = Be, l = ne(
              n,
              n === Fe ? l : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (l & 3) === 0 || ue(n, l) || (a = !0, sm(n, l));
          n = n.next;
        }
      while (a);
      Fc = !1;
    }
  }
  function rh() {
    im();
  }
  function im() {
    Do = Wc = !1;
    var e = 0;
    pn !== 0 && yh() && (e = pn);
    for (var t = et(), a = null, n = Ro; n !== null; ) {
      var i = n.next, l = lm(n, t);
      l === 0 ? (n.next = null, a === null ? Ro = i : a.next = i, i === null && (Mi = a)) : (a = n, (e !== 0 || (l & 3) !== 0) && (Do = !0)), n = i;
    }
    gt !== 0 && gt !== 5 || yl(e), pn !== 0 && (pn = 0);
  }
  function lm(e, t) {
    for (var a = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes & -62914561; 0 < l; ) {
      var d = 31 - $(l), _ = 1 << d, x = i[d];
      x === -1 ? ((_ & a) === 0 || (_ & n) !== 0) && (i[d] = le(_, t)) : x <= t && (e.expiredLanes |= _), l &= ~_;
    }
    if (t = Fe, a = Be, a = ne(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, a === 0 || e === t && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && wa(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || ue(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (n !== null && wa(n), ms(a)) {
        case 2:
        case 8:
          a = za;
          break;
        case 32:
          a = ma;
          break;
        case 268435456:
          a = Ia;
          break;
        default:
          a = ma;
      }
      return n = om.bind(null, e), a = Sa(a, n), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return n !== null && n !== null && wa(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function om(e, t) {
    if (gt !== 0 && gt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (Oo() && e.callbackNode !== a)
      return null;
    var n = Be;
    return n = ne(
      e,
      e === Fe ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (Vf(e, n, t), lm(e, et()), e.callbackNode != null && e.callbackNode === a ? om.bind(null, e) : null);
  }
  function sm(e, t) {
    if (Oo()) return null;
    Vf(e, t, !0);
  }
  function uh() {
    Sh(function() {
      (Ze & 6) !== 0 ? Sa(
        fa,
        rh
      ) : im();
    });
  }
  function Pc() {
    if (pn === 0) {
      var e = fi;
      e === 0 && (e = M, M <<= 1, (M & 261888) === 0 && (M = 256)), pn = e;
    }
    return pn;
  }
  function cm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ql("" + e);
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
      var _ = new Xl(
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
                if (pn !== 0) {
                  var x = d ? rm(i, d) : new FormData(i);
                  bc(
                    a,
                    {
                      pending: !0,
                      data: x,
                      method: i.method,
                      action: l
                    },
                    null,
                    x
                  );
                }
              } else
                typeof l == "function" && (_.preventDefault(), x = d ? rm(i, d) : new FormData(i), bc(
                  a,
                  {
                    pending: !0,
                    data: x,
                    method: i.method,
                    action: l
                  },
                  l,
                  x
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var er = 0; er < Us.length; er++) {
    var tr = Us[er], fh = tr.toLowerCase(), mh = tr[0].toUpperCase() + tr.slice(1);
    oa(
      fh,
      "on" + mh
    );
  }
  oa(Gu, "onAnimationEnd"), oa(Hu, "onAnimationIteration"), oa(Vu, "onAnimationStart"), oa("dblclick", "onDoubleClick"), oa("focusin", "onFocus"), oa("focusout", "onBlur"), oa(Ap, "onTransitionRun"), oa(Cp, "onTransitionStart"), oa(jp, "onTransitionCancel"), oa(qu, "onTransitionEnd"), Fn("onMouseEnter", ["mouseout", "mouseover"]), Fn("onMouseLeave", ["mouseout", "mouseover"]), Fn("onPointerEnter", ["pointerout", "pointerover"]), Fn("onPointerLeave", ["pointerout", "pointerover"]), wn(
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
  var xl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), _h = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl)
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
            var _ = n[d], x = _.instance, T = _.currentTarget;
            if (_ = _.listener, x !== l && i.isPropagationStopped())
              break e;
            l = _, i.currentTarget = T;
            try {
              l(i);
            } catch (q) {
              Jl(q);
            }
            i.currentTarget = null, l = x;
          }
        else
          for (d = 0; d < n.length; d++) {
            if (_ = n[d], x = _.instance, T = _.currentTarget, _ = _.listener, x !== l && i.isPropagationStopped())
              break e;
            l = _, i.currentTarget = T;
            try {
              l(i);
            } catch (q) {
              Jl(q);
            }
            i.currentTarget = null, l = x;
          }
      }
    }
  }
  function Ue(e, t) {
    var a = t[_s];
    a === void 0 && (a = t[_s] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    a.has(n) || (dm(t, e, 2, !1), a.add(n));
  }
  function ar(e, t, a) {
    var n = 0;
    t && (n |= 4), dm(
      a,
      e,
      n,
      t
    );
  }
  var Uo = "_reactListening" + Math.random().toString(36).slice(2);
  function nr(e) {
    if (!e[Uo]) {
      e[Uo] = !0, nu.forEach(function(a) {
        a !== "selectionchange" && (_h.has(a) || ar(a, !1, e), ar(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Uo] || (t[Uo] = !0, ar("selectionchange", !1, t));
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
        i = vr;
    }
    a = i.bind(
      null,
      t,
      a,
      e
    ), i = void 0, !ws || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, a, !0) : i !== void 0 ? e.addEventListener(t, a, {
      passive: i
    }) : e.addEventListener(t, a, !1);
  }
  function ir(e, t, a, n, i) {
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
              var x = d.tag;
              if ((x === 3 || x === 4) && d.stateNode.containerInfo === i)
                return;
              d = d.return;
            }
          for (; _ !== null; ) {
            if (d = Jn(_), d === null) return;
            if (x = d.tag, x === 5 || x === 6 || x === 26 || x === 27) {
              n = l = d;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        n = n.return;
      }
    gu(function() {
      var T = l, q = xs(a), X = [];
      e: {
        var O = Yu.get(e);
        if (O !== void 0) {
          var U = Xl, fe = e;
          switch (e) {
            case "keypress":
              if (Zl(a) === 0) break e;
            case "keydown":
            case "keyup":
              U = sp;
              break;
            case "focusin":
              fe = "focus", U = Ms;
              break;
            case "focusout":
              fe = "blur", U = Ms;
              break;
            case "beforeblur":
            case "afterblur":
              U = Ms;
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
              U = vu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Jg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = up;
              break;
            case Gu:
            case Hu:
            case Vu:
              U = Fg;
              break;
            case qu:
              U = fp;
              break;
            case "scroll":
            case "scrollend":
              U = Qg;
              break;
            case "wheel":
              U = _p;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = ep;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = yu;
              break;
            case "toggle":
            case "beforetoggle":
              U = pp;
          }
          var Se = (t & 4) !== 0, We = !Se && (e === "scroll" || e === "scrollend"), N = Se ? O !== null ? O + "Capture" : null : O;
          Se = [];
          for (var w = T, j; w !== null; ) {
            var K = w;
            if (j = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || j === null || N === null || (K = Yi(w, N), K != null && Se.push(
              Sl(w, K, j)
            )), We) break;
            w = w.return;
          }
          0 < Se.length && (O = new U(
            O,
            fe,
            null,
            a,
            q
          ), X.push({ event: O, listeners: Se }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", O && a !== ys && (fe = a.relatedTarget || a.fromElement) && (Jn(fe) || fe[$n]))
            break e;
          if ((U || O) && (O = q.window === q ? q : (O = q.ownerDocument) ? O.defaultView || O.parentWindow : window, U ? (fe = a.relatedTarget || a.toElement, U = T, fe = fe ? Jn(fe) : null, fe !== null && (We = m(fe), Se = fe.tag, fe !== We || Se !== 5 && Se !== 27 && Se !== 6) && (fe = null)) : (U = null, fe = T), U !== fe)) {
            if (Se = vu, K = "onMouseLeave", N = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (Se = yu, K = "onPointerLeave", N = "onPointerEnter", w = "pointer"), We = U == null ? O : qi(U), j = fe == null ? O : qi(fe), O = new Se(
              K,
              w + "leave",
              U,
              a,
              q
            ), O.target = We, O.relatedTarget = j, K = null, Jn(q) === T && (Se = new Se(
              N,
              w + "enter",
              fe,
              a,
              q
            ), Se.target = j, Se.relatedTarget = We, K = Se), We = K, U && fe)
              t: {
                for (Se = gh, N = U, w = fe, j = 0, K = N; K; K = Se(K))
                  j++;
                K = 0;
                for (var be = w; be; be = Se(be))
                  K++;
                for (; 0 < j - K; )
                  N = Se(N), j--;
                for (; 0 < K - j; )
                  w = Se(w), K--;
                for (; j--; ) {
                  if (N === w || w !== null && N === w.alternate) {
                    Se = N;
                    break t;
                  }
                  N = Se(N), w = Se(w);
                }
                Se = null;
              }
            else Se = null;
            U !== null && fm(
              X,
              O,
              U,
              Se,
              !1
            ), fe !== null && We !== null && fm(
              X,
              We,
              fe,
              Se,
              !0
            );
          }
        }
        e: {
          if (O = T ? qi(T) : window, U = O.nodeName && O.nodeName.toLowerCase(), U === "select" || U === "input" && O.type === "file")
            var Ve = ku;
          else if (Nu(O))
            if (Au)
              Ve = Np;
            else {
              Ve = zp;
              var _e = wp;
            }
          else
            U = O.nodeName, !U || U.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? T && bs(T.elementType) && (Ve = ku) : Ve = Ep;
          if (Ve && (Ve = Ve(e, T))) {
            Mu(
              X,
              Ve,
              a,
              q
            );
            break e;
          }
          _e && _e(e, O, T), e === "focusout" && T && O.type === "number" && T.memoizedProps.value != null && vs(O, "number", O.value);
        }
        switch (_e = T ? qi(T) : window, e) {
          case "focusin":
            (Nu(_e) || _e.contentEditable === "true") && (ii = _e, Os = T, Wi = null);
            break;
          case "focusout":
            Wi = Os = ii = null;
            break;
          case "mousedown":
            Rs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rs = !1, Bu(X, a, q);
            break;
          case "selectionchange":
            if (kp) break;
          case "keydown":
          case "keyup":
            Bu(X, a, q);
        }
        var Ce;
        if (As)
          e: {
            switch (e) {
              case "compositionstart":
                var Le = "onCompositionStart";
                break e;
              case "compositionend":
                Le = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Le = "onCompositionUpdate";
                break e;
            }
            Le = void 0;
          }
        else
          ni ? zu(e, a) && (Le = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Le = "onCompositionStart");
        Le && (xu && a.locale !== "ko" && (ni || Le !== "onCompositionStart" ? Le === "onCompositionEnd" && ni && (Ce = pu()) : (Pa = q, zs = "value" in Pa ? Pa.value : Pa.textContent, ni = !0)), _e = Bo(T, Le), 0 < _e.length && (Le = new bu(
          Le,
          e,
          null,
          a,
          q
        ), X.push({ event: Le, listeners: _e }), Ce ? Le.data = Ce : (Ce = Eu(a), Ce !== null && (Le.data = Ce)))), (Ce = vp ? bp(e, a) : yp(e, a)) && (Le = Bo(T, "onBeforeInput"), 0 < Le.length && (_e = new bu(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          q
        ), X.push({
          event: _e,
          listeners: Le
        }), _e.data = Ce)), dh(
          X,
          e,
          T,
          a,
          q
        );
      }
      um(X, t);
    });
  }
  function Sl(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Bo(e, t) {
    for (var a = t + "Capture", n = []; e !== null; ) {
      var i = e, l = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || l === null || (i = Yi(e, a), i != null && n.unshift(
        Sl(e, i, l)
      ), i = Yi(e, t), i != null && n.push(
        Sl(e, i, l)
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
      var _ = a, x = _.alternate, T = _.stateNode;
      if (_ = _.tag, x !== null && x === n) break;
      _ !== 5 && _ !== 26 && _ !== 27 || T === null || (x = T, i ? (T = Yi(a, l), T != null && d.unshift(
        Sl(a, T, x)
      )) : i || (T = Yi(a, l), T != null && d.push(
        Sl(a, T, x)
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
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || ei(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && ei(e, "" + n);
        break;
      case "className":
        Hl(e, "class", n);
        break;
      case "tabIndex":
        Hl(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Hl(e, a, n);
        break;
      case "style":
        mu(e, n, l);
        break;
      case "data":
        if (t !== "object") {
          Hl(e, "data", n);
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
        n = ql("" + n), e.setAttribute(a, n);
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
        n = ql("" + n), e.setAttribute(a, n);
        break;
      case "onClick":
        n != null && (e.onclick = Ma);
        break;
      case "onScroll":
        n != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Ue("scrollend", e);
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
        a = ql("" + n), e.setAttributeNS(
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
        Ue("beforetoggle", e), Ue("toggle", e), Gl(e, "popover", n);
        break;
      case "xlinkActuate":
        Na(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Na(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Na(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Na(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Na(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Na(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Na(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Na(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Na(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Gl(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Kg.get(a) || a, Gl(e, a, n));
    }
  }
  function lr(e, t, a, n, i, l) {
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
        typeof n == "string" ? ei(e, n) : (typeof n == "number" || typeof n == "bigint") && ei(e, "" + n);
        break;
      case "onScroll":
        n != null && Ue("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Ue("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Ma);
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
            a in e ? e[a] = n : n === !0 ? e.setAttribute(a, "") : Gl(e, a, n);
          }
    }
  }
  function wt(e, t, a) {
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
        Ue("error", e), Ue("load", e);
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
        Ue("invalid", e);
        var _ = l = d = i = null, x = null, T = null;
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
                  x = q;
                  break;
                case "defaultChecked":
                  T = q;
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
          x,
          T,
          d,
          i,
          !1
        );
        return;
      case "select":
        Ue("invalid", e), n = d = l = null;
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
        t = l, a = d, e.multiple = !!n, t != null ? Pn(e, !!n, t, !1) : a != null && Pn(e, !!n, a, !0);
        return;
      case "textarea":
        Ue("invalid", e), l = i = n = null;
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
        for (x in a)
          a.hasOwnProperty(x) && (n = a[x], n != null) && (x === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : Ie(e, t, x, n, a, null));
        return;
      case "dialog":
        Ue("beforetoggle", e), Ue("toggle", e), Ue("cancel", e), Ue("close", e);
        break;
      case "iframe":
      case "object":
        Ue("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < xl.length; n++)
          Ue(xl[n], e);
        break;
      case "image":
        Ue("error", e), Ue("load", e);
        break;
      case "details":
        Ue("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ue("error", e), Ue("load", e);
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
        for (T in a)
          if (a.hasOwnProperty(T) && (n = a[T], n != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                Ie(e, t, T, n, a, null);
            }
        return;
      default:
        if (bs(t)) {
          for (q in a)
            a.hasOwnProperty(q) && (n = a[q], n !== void 0 && lr(
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
        var i = null, l = null, d = null, _ = null, x = null, T = null, q = null;
        for (U in a) {
          var X = a[U];
          if (a.hasOwnProperty(U) && X != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = X;
              default:
                n.hasOwnProperty(U) || Ie(e, t, U, null, n, X);
            }
        }
        for (var O in n) {
          var U = n[O];
          if (X = a[O], n.hasOwnProperty(O) && (U != null || X != null))
            switch (O) {
              case "type":
                l = U;
                break;
              case "name":
                i = U;
                break;
              case "checked":
                T = U;
                break;
              case "defaultChecked":
                q = U;
                break;
              case "value":
                d = U;
                break;
              case "defaultValue":
                _ = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(u(137, t));
                break;
              default:
                U !== X && Ie(
                  e,
                  t,
                  O,
                  U,
                  n,
                  X
                );
            }
        }
        hs(
          e,
          d,
          _,
          x,
          T,
          q,
          l,
          i
        );
        return;
      case "select":
        U = d = _ = O = null;
        for (l in a)
          if (x = a[l], a.hasOwnProperty(l) && x != null)
            switch (l) {
              case "value":
                break;
              case "multiple":
                U = x;
              default:
                n.hasOwnProperty(l) || Ie(
                  e,
                  t,
                  l,
                  null,
                  n,
                  x
                );
            }
        for (i in n)
          if (l = n[i], x = a[i], n.hasOwnProperty(i) && (l != null || x != null))
            switch (i) {
              case "value":
                O = l;
                break;
              case "defaultValue":
                _ = l;
                break;
              case "multiple":
                d = l;
              default:
                l !== x && Ie(
                  e,
                  t,
                  i,
                  l,
                  n,
                  x
                );
            }
        t = _, a = d, n = U, O != null ? Pn(e, !!a, O, !1) : !!n != !!a && (t != null ? Pn(e, !!a, t, !0) : Pn(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        U = O = null;
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
                O = i;
                break;
              case "defaultValue":
                U = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(u(91));
                break;
              default:
                i !== l && Ie(e, t, d, i, n, l);
            }
        uu(e, O, U);
        return;
      case "option":
        for (var fe in a)
          O = a[fe], a.hasOwnProperty(fe) && O != null && !n.hasOwnProperty(fe) && (fe === "selected" ? e.selected = !1 : Ie(
            e,
            t,
            fe,
            null,
            n,
            O
          ));
        for (x in n)
          O = n[x], U = a[x], n.hasOwnProperty(x) && O !== U && (O != null || U != null) && (x === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : Ie(
            e,
            t,
            x,
            O,
            n,
            U
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
          O = a[Se], a.hasOwnProperty(Se) && O != null && !n.hasOwnProperty(Se) && Ie(e, t, Se, null, n, O);
        for (T in n)
          if (O = n[T], U = a[T], n.hasOwnProperty(T) && O !== U && (O != null || U != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(u(137, t));
                break;
              default:
                Ie(
                  e,
                  t,
                  T,
                  O,
                  n,
                  U
                );
            }
        return;
      default:
        if (bs(t)) {
          for (var We in a)
            O = a[We], a.hasOwnProperty(We) && O !== void 0 && !n.hasOwnProperty(We) && lr(
              e,
              t,
              We,
              void 0,
              n,
              O
            );
          for (q in n)
            O = n[q], U = a[q], !n.hasOwnProperty(q) || O === U || O === void 0 && U === void 0 || lr(
              e,
              t,
              q,
              O,
              n,
              U
            );
          return;
        }
    }
    for (var N in a)
      O = a[N], a.hasOwnProperty(N) && O != null && !n.hasOwnProperty(N) && Ie(e, t, N, null, n, O);
    for (X in n)
      O = n[X], U = a[X], !n.hasOwnProperty(X) || O === U || O == null && U == null || Ie(e, t, X, O, n, U);
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
            var x = a[n], T = x.startTime;
            if (T > _) break;
            var q = x.transferSize, X = x.initiatorType;
            q && gm(X) && (x = x.responseEnd, d += q * (x < _ ? 1 : (_ - T) / (x - T)));
          }
          if (--n, t += 8 * (l + d) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var or = null, sr = null;
  function Lo(e) {
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
  function cr(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var rr = null;
  function yh() {
    var e = window.event;
    return e && e.type === "popstate" ? e === rr ? !1 : (rr = e, !0) : (rr = null, !1);
  }
  var vm = typeof setTimeout == "function" ? setTimeout : void 0, xh = typeof clearTimeout == "function" ? clearTimeout : void 0, bm = typeof Promise == "function" ? Promise : void 0, Sh = typeof queueMicrotask == "function" ? queueMicrotask : typeof bm < "u" ? function(e) {
    return bm.resolve(null).then(e).catch(wh);
  } : vm;
  function wh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function hn(e) {
    return e === "head";
  }
  function ym(e, t) {
    var a = t, n = 0;
    do {
      var i = a.nextSibling;
      if (e.removeChild(a), i && i.nodeType === 8)
        if (a = i.data, a === "/$" || a === "/&") {
          if (n === 0) {
            e.removeChild(i), ji(t);
            return;
          }
          n--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          n++;
        else if (a === "html")
          wl(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, wl(a);
          for (var l = a.firstChild; l; ) {
            var d = l.nextSibling, _ = l.nodeName;
            l[Vi] || _ === "SCRIPT" || _ === "STYLE" || _ === "LINK" && l.rel.toLowerCase() === "stylesheet" || a.removeChild(l), l = d;
          }
        } else
          a === "body" && wl(e.ownerDocument.body);
      a = i;
    } while (a);
    ji(t);
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
  function ur(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ur(a), gs(a);
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
        if (!e[Vi])
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
  function Eh(e, t, a) {
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
  function dr(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function fr(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Nh(e, t) {
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
  var mr = null;
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
    switch (t = Lo(a), e) {
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
  function wl(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    gs(e);
  }
  var na = /* @__PURE__ */ new Map(), Nm = /* @__PURE__ */ new Set();
  function Go(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Ya = F.d;
  F.d = {
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
    var e = Ya.f(), t = Co();
    return e || t;
  }
  function kh(e) {
    var t = In(e);
    t !== null && t.tag === 5 && t.type === "form" ? qd(t) : Ya.r(e);
  }
  var ki = typeof document > "u" ? null : document;
  function Mm(e, t, a) {
    var n = ki;
    if (n && typeof t == "string" && t) {
      var i = Jt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof a == "string" && (i += '[crossorigin="' + a + '"]'), Nm.has(i) || (Nm.add(i), e = { rel: e, crossOrigin: a, href: t }, n.querySelector(i) === null && (t = n.createElement("link"), wt(t, "link", e), ht(t), n.head.appendChild(t)));
    }
  }
  function Ah(e) {
    Ya.D(e), Mm("dns-prefetch", e, null);
  }
  function Ch(e, t) {
    Ya.C(e, t), Mm("preconnect", e, t);
  }
  function jh(e, t, a) {
    Ya.L(e, t, a);
    var n = ki;
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
          l = Ai(e);
          break;
        case "script":
          l = Ci(e);
      }
      na.has(l) || (e = S(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), na.set(l, e), n.querySelector(i) !== null || t === "style" && n.querySelector(zl(l)) || t === "script" && n.querySelector(El(l)) || (t = n.createElement("link"), wt(t, "link", e), ht(t), n.head.appendChild(t)));
    }
  }
  function Th(e, t) {
    Ya.m(e, t);
    var a = ki;
    if (a && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Jt(n) + '"][href="' + Jt(e) + '"]', l = i;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          l = Ci(e);
      }
      if (!na.has(l) && (e = S({ rel: "modulepreload", href: e }, t), na.set(l, e), a.querySelector(i) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(El(l)))
              return;
        }
        n = a.createElement("link"), wt(n, "link", e), ht(n), a.head.appendChild(n);
      }
    }
  }
  function Oh(e, t, a) {
    Ya.S(e, t, a);
    var n = ki;
    if (n && e) {
      var i = Wn(n).hoistableStyles, l = Ai(e);
      t = t || "default";
      var d = i.get(l);
      if (!d) {
        var _ = { loading: 0, preload: null };
        if (d = n.querySelector(
          zl(l)
        ))
          _.loading = 5;
        else {
          e = S(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = na.get(l)) && _r(e, a);
          var x = d = n.createElement("link");
          ht(x), wt(x, "link", e), x._p = new Promise(function(T, q) {
            x.onload = T, x.onerror = q;
          }), x.addEventListener("load", function() {
            _.loading |= 1;
          }), x.addEventListener("error", function() {
            _.loading |= 2;
          }), _.loading |= 4, Ho(d, t, n);
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
    Ya.X(e, t);
    var a = ki;
    if (a && e) {
      var n = Wn(a).hoistableScripts, i = Ci(e), l = n.get(i);
      l || (l = a.querySelector(El(i)), l || (e = S({ src: e, async: !0 }, t), (t = na.get(i)) && gr(e, t), l = a.createElement("script"), ht(l), wt(l, "link", e), a.head.appendChild(l)), l = {
        type: "script",
        instance: l,
        count: 1,
        state: null
      }, n.set(i, l));
    }
  }
  function Dh(e, t) {
    Ya.M(e, t);
    var a = ki;
    if (a && e) {
      var n = Wn(a).hoistableScripts, i = Ci(e), l = n.get(i);
      l || (l = a.querySelector(El(i)), l || (e = S({ src: e, async: !0, type: "module" }, t), (t = na.get(i)) && gr(e, t), l = a.createElement("script"), ht(l), wt(l, "link", e), a.head.appendChild(l)), l = {
        type: "script",
        instance: l,
        count: 1,
        state: null
      }, n.set(i, l));
    }
  }
  function km(e, t, a, n) {
    var i = (i = ge.current) ? Go(i) : null;
    if (!i) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ai(a.href), a = Wn(
          i
        ).hoistableStyles, n = a.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Ai(a.href);
          var l = Wn(
            i
          ).hoistableStyles, d = l.get(e);
          if (d || (i = i.ownerDocument || i, d = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, l.set(e, d), (l = i.querySelector(
            zl(e)
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
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ci(a), a = Wn(
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
  function Ai(e) {
    return 'href="' + Jt(e) + '"';
  }
  function zl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Am(e) {
    return S({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Uh(e, t, a, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), wt(t, "link", a), ht(t), e.head.appendChild(t));
  }
  function Ci(e) {
    return '[src="' + Jt(e) + '"]';
  }
  function El(e) {
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
          var i = S({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), ht(n), wt(n, "style", i), Ho(n, a.precedence, e), t.instance = n;
        case "stylesheet":
          i = Ai(a.href);
          var l = e.querySelector(
            zl(i)
          );
          if (l)
            return t.state.loading |= 4, t.instance = l, ht(l), l;
          n = Am(a), (i = na.get(i)) && _r(n, i), l = (e.ownerDocument || e).createElement("link"), ht(l);
          var d = l;
          return d._p = new Promise(function(_, x) {
            d.onload = _, d.onerror = x;
          }), wt(l, "link", n), t.state.loading |= 4, Ho(l, a.precedence, e), t.instance = l;
        case "script":
          return l = Ci(a.src), (i = e.querySelector(
            El(l)
          )) ? (t.instance = i, ht(i), i) : (n = a, (i = na.get(l)) && (n = S({}, a), gr(n, i)), e = e.ownerDocument || e, i = e.createElement("script"), ht(i), wt(i, "link", n), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, Ho(n, a.precedence, e));
    return t.instance;
  }
  function Ho(e, t, a) {
    for (var n = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = n.length ? n[n.length - 1] : null, l = i, d = 0; d < n.length; d++) {
      var _ = n[d];
      if (_.dataset.precedence === t) l = _;
      else if (l !== i) break;
    }
    l ? l.parentNode.insertBefore(e, l.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function _r(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function gr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Vo = null;
  function jm(e, t, a) {
    if (Vo === null) {
      var n = /* @__PURE__ */ new Map(), i = Vo = /* @__PURE__ */ new Map();
      i.set(a, n);
    } else
      i = Vo, n = i.get(a), n || (n = /* @__PURE__ */ new Map(), i.set(a, n));
    if (n.has(e)) return n;
    for (n.set(e, null), a = a.getElementsByTagName(e), i = 0; i < a.length; i++) {
      var l = a[i];
      if (!(l[Vi] || l[bt] || e === "link" && l.getAttribute("rel") === "stylesheet") && l.namespaceURI !== "http://www.w3.org/2000/svg") {
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
        var i = Ai(n.href), l = t.querySelector(
          zl(i)
        );
        if (l) {
          t = l._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = qo.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = l, ht(l);
          return;
        }
        l = t.ownerDocument || t, n = Am(n), (i = na.get(i)) && _r(n, i), l = l.createElement("link"), ht(l);
        var d = l;
        d._p = new Promise(function(_, x) {
          d.onload = _, d.onerror = x;
        }), wt(l, "link", n), a.instance = l;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = qo.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var pr = 0;
  function Gh(e, t) {
    return e.stylesheets && e.count === 0 && Zo(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var n = setTimeout(function() {
        if (e.stylesheets && Zo(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4 + t);
      0 < e.imgBytes && pr === 0 && (pr = 62500 * bh());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Zo(e, e.stylesheets), e.unsuspend)) {
            var l = e.unsuspend;
            e.unsuspend = null, l();
          }
        },
        (e.imgBytes > pr ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(i);
      };
    } : null;
  }
  function qo() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Zo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Yo = null;
  function Zo(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Yo = /* @__PURE__ */ new Map(), t.forEach(Hh, e), Yo = null, qo.call(e));
  }
  function Hh(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Yo.get(e);
      if (a) var n = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Yo.set(e, a);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), l = 0; l < i.length; l++) {
          var d = i[l];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), n = d);
        }
        n && a.set(null, n);
      }
      i = t.instance, d = i.getAttribute("data-precedence"), l = a.get(d) || n, l === n && a.set(null, i), a.set(d, i), this.count++, n = qo.bind(this), i.addEventListener("load", n), i.addEventListener("error", n), l ? l.parentNode.insertBefore(i, l.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Nl = {
    $$typeof: Z,
    Provider: null,
    Consumer: null,
    _currentValue: ie,
    _currentValue2: ie,
    _threadCount: 0
  };
  function Vh(e, t, a, n, i, l, d, _, x) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ye(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ye(0), this.hiddenUpdates = ye(null), this.identifierPrefix = n, this.onUncaughtError = i, this.onCaughtError = l, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Rm(e, t, a, n, i, l, d, _, x, T, q, X) {
    return e = new Vh(
      e,
      t,
      a,
      d,
      x,
      T,
      q,
      X,
      _
    ), t = 1, l === !0 && (t |= 24), l = Lt(3, null, null, t), e.current = l, l.stateNode = e, t = Js(), t.refCount++, e.pooledCache = t, t.refCount++, l.memoizedState = {
      element: n,
      isDehydrated: a,
      cache: t
    }, Ps(l), e;
  }
  function Dm(e) {
    return e ? (e = si, e) : si;
  }
  function Um(e, t, a, n, i, l) {
    i = Dm(i), n.context === null ? n.context = i : n.pendingContext = i, n = on(t), n.payload = { element: a }, l = l === void 0 ? null : l, l !== null && (n.callback = l), a = sn(e, n, t), a !== null && (Dt(a, e, t), il(a, e, t));
  }
  function Bm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function hr(e, t) {
    Bm(e, t), (e = e.alternate) && Bm(e, t);
  }
  function Lm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Mn(e, 67108864);
      t !== null && Dt(t, e, 67108864), hr(e, 67108864);
    }
  }
  function Gm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yt();
      t = Hi(t);
      var a = Mn(e, t);
      a !== null && Dt(a, e, t), hr(e, t);
    }
  }
  var Ko = !0;
  function qh(e, t, a, n) {
    var i = D.T;
    D.T = null;
    var l = F.p;
    try {
      F.p = 2, vr(e, t, a, n);
    } finally {
      F.p = l, D.T = i;
    }
  }
  function Yh(e, t, a, n) {
    var i = D.T;
    D.T = null;
    var l = F.p;
    try {
      F.p = 8, vr(e, t, a, n);
    } finally {
      F.p = l, D.T = i;
    }
  }
  function vr(e, t, a, n) {
    if (Ko) {
      var i = br(n);
      if (i === null)
        ir(
          e,
          t,
          n,
          Xo,
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
          var l = In(i);
          if (l !== null)
            switch (l.tag) {
              case 3:
                if (l = l.stateNode, l.current.memoizedState.isDehydrated) {
                  var d = P(l.pendingLanes);
                  if (d !== 0) {
                    var _ = l;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; d; ) {
                      var x = 1 << 31 - $(d);
                      _.entanglements[1] |= x, d &= ~x;
                    }
                    ha(l), (Ze & 6) === 0 && (ko = et() + 500, yl(0));
                  }
                }
                break;
              case 31:
              case 13:
                _ = Mn(l, 2), _ !== null && Dt(_, l, 2), Co(), hr(l, 2);
            }
          if (l = br(n), l === null && ir(
            e,
            t,
            n,
            Xo,
            a
          ), l === i) break;
          i = l;
        }
        i !== null && n.stopPropagation();
      } else
        ir(
          e,
          t,
          n,
          null,
          a
        );
    }
  }
  function br(e) {
    return e = xs(e), yr(e);
  }
  var Xo = null;
  function yr(e) {
    if (Xo = null, e = Jn(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = y(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Xo = e, null;
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
        switch (Qn()) {
          case fa:
            return 2;
          case za:
            return 8;
          case ma:
          case zt:
            return 32;
          case Ia:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var xr = !1, vn = null, bn = null, yn = null, Ml = /* @__PURE__ */ new Map(), kl = /* @__PURE__ */ new Map(), xn = [], Zh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Vm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        vn = null;
        break;
      case "dragenter":
      case "dragleave":
        bn = null;
        break;
      case "mouseover":
      case "mouseout":
        yn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ml.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        kl.delete(t.pointerId);
    }
  }
  function Al(e, t, a, n, i, l) {
    return e === null || e.nativeEvent !== l ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: n,
      nativeEvent: l,
      targetContainers: [i]
    }, t !== null && (t = In(t), t !== null && Lm(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Kh(e, t, a, n, i) {
    switch (t) {
      case "focusin":
        return vn = Al(
          vn,
          e,
          t,
          a,
          n,
          i
        ), !0;
      case "dragenter":
        return bn = Al(
          bn,
          e,
          t,
          a,
          n,
          i
        ), !0;
      case "mouseover":
        return yn = Al(
          yn,
          e,
          t,
          a,
          n,
          i
        ), !0;
      case "pointerover":
        var l = i.pointerId;
        return Ml.set(
          l,
          Al(
            Ml.get(l) || null,
            e,
            t,
            a,
            n,
            i
          )
        ), !0;
      case "gotpointercapture":
        return l = i.pointerId, kl.set(
          l,
          Al(
            kl.get(l) || null,
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
    var t = Jn(e.target);
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
          if (t = y(a), t !== null) {
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
  function Qo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = br(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var n = new a.constructor(
          a.type,
          a
        );
        ys = n, a.target.dispatchEvent(n), ys = null;
      } else
        return t = In(a), t !== null && Lm(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Ym(e, t, a) {
    Qo(e) && a.delete(t);
  }
  function Xh() {
    xr = !1, vn !== null && Qo(vn) && (vn = null), bn !== null && Qo(bn) && (bn = null), yn !== null && Qo(yn) && (yn = null), Ml.forEach(Ym), kl.forEach(Ym);
  }
  function $o(e, t) {
    e.blockedOn === t && (e.blockedOn = null, xr || (xr = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      Xh
    )));
  }
  var Jo = null;
  function Zm(e) {
    Jo !== e && (Jo = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Jo === e && (Jo = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], n = e[t + 1], i = e[t + 2];
          if (typeof n != "function") {
            if (yr(n || a) === null)
              continue;
            break;
          }
          var l = In(a);
          l !== null && (e.splice(t, 3), t -= 3, bc(
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
  function ji(e) {
    function t(x) {
      return $o(x, e);
    }
    vn !== null && $o(vn, e), bn !== null && $o(bn, e), yn !== null && $o(yn, e), Ml.forEach(t), kl.forEach(t);
    for (var a = 0; a < xn.length; a++) {
      var n = xn[a];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < xn.length && (a = xn[0], a.blockedOn === null); )
      qm(a), a.blockedOn === null && xn.shift();
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
            else if (yr(i) !== null) continue;
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
  function Sr(e) {
    this._internalRoot = e;
  }
  Io.prototype.render = Sr.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    var a = t.current, n = Yt();
    Um(a, n, e, t, null, null);
  }, Io.prototype.unmount = Sr.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Um(e.current, 2, null, e, null, null), Co(), t[$n] = null;
    }
  };
  function Io(e) {
    this._internalRoot = e;
  }
  Io.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = eu();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < xn.length && t !== 0 && t < xn[a].priority; a++) ;
      xn.splice(a, 0, e), a === 0 && qm(e);
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
  F.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = f(t), e = e !== null ? p(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Qh = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wo.isDisabled && Wo.supportsFiber)
      try {
        Ea = Wo.inject(
          Qh
        ), k = Wo;
      } catch {
      }
  }
  return jl.createRoot = function(e, t) {
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
    ), e[$n] = t.current, nr(e), new Sr(t);
  }, jl.hydrateRoot = function(e, t, a) {
    if (!g(e)) throw Error(u(299));
    var n = !1, i = "", l = Fd, d = Pd, _ = ef, x = null;
    return a != null && (a.unstable_strictMode === !0 && (n = !0), a.identifierPrefix !== void 0 && (i = a.identifierPrefix), a.onUncaughtError !== void 0 && (l = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (_ = a.onRecoverableError), a.formState !== void 0 && (x = a.formState)), t = Rm(
      e,
      1,
      !0,
      t,
      a ?? null,
      n,
      i,
      x,
      l,
      d,
      _,
      Km
    ), t.context = Dm(null), a = t.current, n = Yt(), n = Hi(n), i = on(n), i.callback = null, sn(a, i, n), a = n, t.current.lanes = a, Ae(t, a), ha(t), e[$n] = t.current, nr(e), new Io(t);
  }, jl.version = "19.2.3", jl;
}
var a_;
function n0() {
  if (a_) return Er.exports;
  a_ = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  return o(), Er.exports = a0(), Er.exports;
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
const r0 = R.forwardRef(
  ({
    color: o = "currentColor",
    size: c = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: u,
    className: g = "",
    children: m,
    iconNode: h,
    ...y
  }, v) => R.createElement(
    "svg",
    {
      ref: v,
      ...s0,
      width: c,
      height: c,
      stroke: o,
      strokeWidth: u ? Number(s) * 24 / Number(c) : s,
      className: I_("lucide", g),
      ...!m && !c0(y) && { "aria-hidden": "true" },
      ...y
    },
    [
      ...h.map(([f, p]) => R.createElement(f, p)),
      ...Array.isArray(m) ? m : [m]
    ]
  )
);
const xe = (o, c) => {
  const s = R.forwardRef(
    ({ className: u, ...g }, m) => R.createElement(r0, {
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
], d0 = xe("arrow-big-right-dash", u0);
const f0 = [
  ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
  ["path", { d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935", key: "lre1cr" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936", key: "13q5k0" }]
];
xe("battery-charging", f0);
const m0 = [
  ["path", { d: "M10 10v4", key: "1mb2ec" }],
  ["path", { d: "M14 10v4", key: "1nt88p" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 10v4", key: "1n77qd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], _0 = xe("battery-full", m0);
const g0 = [
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 14v-4", key: "14a6bd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], p0 = xe("battery-low", g0);
const h0 = [
  ["path", { d: "M10 14v-4", key: "suye4c" }],
  ["path", { d: "M22 14v-4", key: "14q9d5" }],
  ["path", { d: "M6 14v-4", key: "14a6bd" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], v0 = xe("battery-medium", h0);
const b0 = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
], y0 = xe("battery", b0);
const x0 = [
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
      key: "oz39mx"
    }
  ]
], S0 = xe("bookmark", x0);
const w0 = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
], z0 = xe("brain", w0);
const E0 = [
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
], Xr = xe("brush-cleaning", E0);
const N0 = [
  ["path", { d: "M5 21v-6", key: "1hz6c0" }],
  ["path", { d: "M12 21V3", key: "1lcnhd" }],
  ["path", { d: "M19 21V9", key: "unv183" }]
], M0 = xe("chart-no-axes-column", N0);
const k0 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], A0 = xe("check", k0);
const C0 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], j0 = xe("chevron-down", C0);
const T0 = [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], O0 = xe("circle-play", T0);
const R0 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], D0 = xe("clock", R0);
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
], B0 = xe("cpu", U0);
const L0 = [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix"
    }
  ]
], rs = xe("droplet", L0);
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
], W_ = xe("droplets", G0);
const H0 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], V0 = xe("external-link", H0);
const q0 = [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
], Y0 = xe("gauge", q0);
const Z0 = [
  [
    "path",
    {
      d: "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",
      key: "p55z4y"
    }
  ],
  ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0", key: "mjntcy" }]
], i_ = xe("glass-water", Z0);
const K0 = [
  [
    "path",
    {
      d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
      key: "11za1p"
    }
  ],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
], X0 = xe("grid-2x2-check", K0);
const Q0 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
], $0 = xe("history", Q0);
const J0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], F_ = xe("info", J0);
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
], W0 = xe("layers", I0);
const F0 = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], P0 = xe("list", F0);
const ev = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], P_ = xe("map-pin", ev);
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
], us = xe("map", tv);
const av = [["path", { d: "M5 12h14", key: "1ays0h" }]], nv = xe("minus", av);
const iv = [
  ["path", { d: "M12.586 12.586 19 19", key: "ea5xo7" }],
  [
    "path",
    {
      d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",
      key: "277e5u"
    }
  ]
], lv = xe("mouse-pointer", iv);
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
], sv = xe("octagon-x", ov);
const cv = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "m15 8-3 3-3-3", key: "1oxy1z" }]
], rv = xe("panel-bottom-close", cv);
const uv = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], dv = xe("pause", uv);
const fv = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], mv = xe("play", fv);
const _v = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], gv = xe("plus", _v);
const pv = [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
], hv = xe("route", pv);
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
], bv = xe("save", vv);
const yv = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
], Qr = xe("scan", yv);
const xv = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], eg = xe("settings-2", xv);
const Sv = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], tg = xe("settings", Sv);
const wv = [
  [
    "path",
    {
      d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",
      key: "1cn552"
    }
  ]
], zv = xe("shell", wv);
const Ev = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
], Nv = xe("shield-alert", Ev);
const Mv = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }]
], kv = xe("signal-high", Mv);
const Av = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }]
], Cv = xe("signal-low", Av);
const jv = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }]
], Tv = xe("signal-medium", jv);
const Ov = [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }],
  ["path", { d: "M22 4v16", key: "sih9yq" }]
], Rv = xe("signal", Ov);
const Dv = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], Uv = xe("square", Dv);
const Bv = [
  [
    "path",
    {
      d: "M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "1ystz2"
    }
  ],
  ["path", { d: "M3 4v16", key: "1ph11n" }]
], Lv = xe("step-forward", Bv);
const Gv = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
], Hv = xe("timer", Gv);
const Vv = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], qv = xe("trash-2", Vv);
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
], ag = xe("volume-2", Yv);
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
], Kv = xe("volume-x", Zv);
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
], Qv = xe("waves-arrow-down", Xv);
const $v = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
], Jv = xe("wrench", $v);
const Iv = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], Wv = xe("zap", Iv), ng = /* @__PURE__ */ r.jsx(y0, {}), ig = /* @__PURE__ */ r.jsx(p0, {}), lg = /* @__PURE__ */ r.jsx(v0, {}), og = /* @__PURE__ */ r.jsx(_0, {}), Fv = /* @__PURE__ */ r.jsx($0, {}), Pv = /* @__PURE__ */ r.jsx(Qr, {}), eb = /* @__PURE__ */ r.jsx(mv, {}), tb = /* @__PURE__ */ r.jsx(dv, {}), ab = /* @__PURE__ */ r.jsx(Lv, {}), nb = /* @__PURE__ */ r.jsx(sv, {}), ib = /* @__PURE__ */ r.jsx(rv, {}), lb = /* @__PURE__ */ r.jsx(S0, {}), ob = /* @__PURE__ */ r.jsx(O0, {}), $r = /* @__PURE__ */ r.jsx(Xr, {}), sb = /* @__PURE__ */ r.jsx(us, {}), Jr = /* @__PURE__ */ r.jsx(rs, {}), Di = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx(Xr, {}),
  /* @__PURE__ */ r.jsx(gv, {}),
  /* @__PURE__ */ r.jsx(rs, {})
] }), Ir = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx(Xr, {}),
  /* @__PURE__ */ r.jsx(d0, {}),
  /* @__PURE__ */ r.jsx(rs, {})
] }), sg = /* @__PURE__ */ r.jsx(Cv, {}), cg = /* @__PURE__ */ r.jsx(Tv, {}), rg = /* @__PURE__ */ r.jsx(kv, {}), ug = /* @__PURE__ */ r.jsx(Rv, {}), cb = /* @__PURE__ */ r.jsx(Qr, {}), rb = /* @__PURE__ */ r.jsx(Hv, {}), ub = /* @__PURE__ */ r.jsx(X0, {}), db = /* @__PURE__ */ r.jsx(Wv, {}), fb = /* @__PURE__ */ r.jsx(hv, {}), mb = /* @__PURE__ */ r.jsx(zv, {}), _b = /* @__PURE__ */ r.jsx(Qv, {}), Tl = {
  WETNESS: {
    MIN: 1,
    MAX: 32
  }
}, Ti = {
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
}, He = {
  SWEEPING: "Sweeping",
  MOPPING: "Mopping",
  SWEEPING_AND_MOPPING: "Sweeping and mopping",
  MOPPING_AFTER_SWEEPING: "Mopping after sweeping",
  MAPPING: "Mapping"
}, da = {
  VACUUM_AND_MOP: "Vacuum and mop",
  MOP_AFTER_VACUUM: "Mop after vacuum"
}, ba = {
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
}, is = {
  SLIGHTLY_DRY: "Slightly dry",
  MOIST: "Moist",
  WET: "Wet"
}, gb = {
  ALL: "all"
}, Ol = {
  CLEANGENIUS: "CleanGenius",
  CUSTOM: "Custom"
}, Mt = {
  MODE: gb.ALL,
  CLEANING_MODE: He.SWEEPING_AND_MOPPING,
  CLEANGENIUS_MODE: da.VACUUM_AND_MOP,
  SUCTION_LEVEL: Ut.STANDARD,
  WETNESS_LEVEL: 20,
  CLEANING_ROUTE: Vn.STANDARD,
  MAX_SUCTION_POWER: !1,
  SELF_CLEAN_AREA: 20,
  SELF_CLEAN_FREQUENCY: qn.BY_AREA,
  MOP_PAD_HUMIDITY: is.MOIST,
  SELF_CLEAN_AREA_MIN: 10,
  SELF_CLEAN_AREA_MAX: 35,
  SELF_CLEAN_TIME: 25,
  SELF_CLEAN_TIME_MIN: 10,
  SELF_CLEAN_TIME_MAX: 50
};
function Wr(o) {
  const c = R.useCallback(
    (v, f, p) => {
      console.debug("[HA Service]", v, f, p), o.callService(v, f, p);
    },
    [o]
  ), s = R.useCallback(
    (v, f) => {
      console.debug("[HA Select]", v, "→", f);
      const p = {
        entity_id: v,
        option: f
      };
      c(Ti.SELECT, Hn.SELECT_OPTION, p);
    },
    [c]
  ), u = R.useCallback(
    (v, f) => {
      console.debug("[HA Switch]", v, "→", f ? "ON" : "OFF");
      const p = f ? Hn.TURN_ON : Hn.TURN_OFF;
      c(Ti.SWITCH, p, { entity_id: v });
    },
    [c]
  ), g = R.useCallback(
    (v, f) => {
      console.debug("[HA Number]", v, "→", f);
      const p = {
        entity_id: v,
        value: f
      };
      c(Ti.NUMBER, Hn.SET_VALUE, p);
    },
    [c]
  ), m = R.useCallback(
    (v) => {
      console.debug("[HA Vacuum] Start", v), c(Ti.VACUUM, Hn.START, { entity_id: v });
    },
    [c]
  ), h = R.useCallback(
    (v) => {
      console.debug("[HA Vacuum] Return to base", v), c(Ti.VACUUM, Hn.RETURN_TO_BASE, { entity_id: v });
    },
    [c]
  ), y = R.useCallback(
    (v, f) => {
      console.debug("[HA Vacuum] Clean segments", v, f);
      const p = {
        entity_id: v,
        segments: f
      };
      c(Ti.DREAME_VACUUM, Hn.VACUUM_CLEAN_SEGMENT, p);
    },
    [c]
  );
  return {
    setSelectOption: s,
    setSwitch: u,
    setNumber: g,
    startVacuum: m,
    returnToBase: h,
    cleanSegments: y,
    callService: c
  };
}
function pb(o) {
  switch (o) {
    case He.SWEEPING:
      return Kt.CLEANING_MODE.SWEEPING;
    case He.MOPPING:
      return Kt.CLEANING_MODE.MOPPING;
    case He.SWEEPING_AND_MOPPING:
      return Kt.CLEANING_MODE.SWEEPING_AND_MOPPING;
    case He.MOPPING_AFTER_SWEEPING:
      return Kt.CLEANING_MODE.MOPPING_AFTER_SWEEPING;
    case He.MAPPING:
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
function ls(o) {
  switch (o) {
    case ba.OFF:
      return Kt.CLEANGENIUS.OFF;
    case ba.ROUTINE_CLEANING:
      return Kt.CLEANGENIUS.ROUTINE_CLEANING;
    case ba.DEEP_CLEANING:
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
function os(o) {
  return o.toLowerCase();
}
function Oi(o, c) {
  return `select.${o}_${c}`;
}
function l_(o, c) {
  return `switch.${o}_${c}`;
}
function Ar(o, c) {
  return `number.${o}_${c}`;
}
function dg(o) {
  return o.replace("vacuum.", "");
}
function Fr(o) {
  return R.useMemo(() => {
    const c = dg(o);
    return {
      base: c,
      cleaningMode: Oi(c, ra.CLEANING_MODE),
      cleangeniusMode: Oi(c, ra.CLEANGENIUS_MODE),
      cleangenius: Oi(c, ra.CLEANGENIUS),
      suctionLevel: Oi(c, ra.SUCTION_LEVEL),
      cleaningRoute: Oi(c, ra.CLEANING_ROUTE),
      maxSuctionPower: l_(c, ra.MAX_SUCTION_POWER),
      customMoppingMode: l_(c, ra.CUSTOM_MOPPING_MODE),
      wetnessLevel: Ar(c, ra.WETNESS_LEVEL),
      selfCleanFrequency: Oi(c, ra.SELF_CLEAN_FREQUENCY),
      selfCleanArea: Ar(c, ra.SELF_CLEAN_AREA),
      selfCleanTime: Ar(c, ra.SELF_CLEAN_TIME)
    };
  }, [o]);
}
function fg({ defaultMode: o = Mt.MODE } = {}) {
  const [c, s] = R.useState(o), [u, g] = R.useState(/* @__PURE__ */ new Map()), [m, h] = R.useState(null), [y, v] = R.useState(!1), [f, p] = R.useState(!1), [S, C] = R.useState(!1), E = R.useCallback((Z) => {
    console.debug("[UI] Mode changed:", Z), s(Z), g(/* @__PURE__ */ new Map()), h(null);
  }, []), z = R.useCallback(
    (Z, G) => (g((W) => {
      const V = new Map(W);
      return V.has(Z) ? (console.debug("[UI] Room deselected:", { roomId: Z, roomName: G }), V.delete(Z)) : (console.debug("[UI] Room selected:", { roomId: Z, roomName: G }), V.set(Z, G)), V;
    }), u.has(Z)),
    [u]
  ), L = R.useCallback((Z) => {
    console.debug("[UI] Cleaning mode modal:", Z ? "opened" : "closed"), v(Z);
  }, []), Q = R.useCallback((Z) => {
    console.debug("[UI] Shortcuts modal:", Z ? "opened" : "closed"), p(Z);
  }, []), A = R.useCallback((Z) => {
    console.debug("[UI] Settings panel:", Z ? "opened" : "closed"), C(Z);
  }, []), I = R.useCallback((Z) => {
    console.debug("[UI] Zone changed:", Z), h(Z);
  }, []);
  return {
    selectedMode: c,
    selectedRooms: u,
    selectedZone: m,
    modalOpened: y,
    shortcutsModalOpened: f,
    settingsPanelOpened: S,
    setSelectedMode: s,
    setSelectedRooms: g,
    setSelectedZone: I,
    setModalOpened: L,
    setShortcutsModalOpened: Q,
    setSettingsPanelOpened: A,
    handleModeChange: E,
    handleRoomToggle: z
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
}, Eb = {
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
}, Nb = {
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
  it: Eb,
  pl: Nb
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
function Ye(o = "en") {
  const c = R.useMemo(() => Ab(o), [o]);
  return {
    t: c,
    getRoomCountTranslation: (s) => Cb(c, s)
  };
}
function Te(o, c) {
  return typeof o == typeof c ? o : c;
}
function mg(o) {
  return typeof o == "string";
}
function ua(o) {
  return typeof o == "number";
}
function Pr(o) {
  return typeof o == "boolean";
}
function jb(o) {
  return typeof o == "object" && o !== null;
}
function s_(o, c, s) {
  const u = s.scale || 1, g = s.padding || [0, 0, 0, 0], m = s.crop || [0, 0, 0, 0], h = s.left, y = s.top, v = s.height, f = s.grid_size, p = (o + m[0] - g[0]) / u * f + h, S = y + (v * f - 1) - (c + m[1] - g[1]) / u * f;
  return { x: Math.round(p), y: Math.round(S) };
}
function Tb(o, c, s, u) {
  const g = Db(c);
  if (console.debug("[ZoneConverter] Input:", { uiZone: o, imageWidth: s, imageHeight: u, hasDimensions: !!g }), !g) {
    const C = Rb(c);
    return console.debug("[ZoneConverter] Using calibration fallback, points:", C?.length ?? 0), Ob(o, C, s, u);
  }
  console.debug("[ZoneConverter] Map dimensions:", g);
  const m = o.x1 / 100 * s, h = o.y1 / 100 * u, y = o.x2 / 100 * s, v = o.y2 / 100 * u;
  console.debug("[ZoneConverter] Pixel coords:", { px1: m, py1: h, px2: y, py2: v });
  const f = s_(m, h, g), p = s_(y, v, g), S = {
    x1: f.x,
    y1: f.y,
    x2: p.x,
    y2: p.y
  };
  return console.debug("[ZoneConverter] Output vacuum coords:", S), S;
}
function Ob(o, c, s, u) {
  if (!c || c.length < 3)
    return {
      x1: Math.round(o.x1 / 100 * 12e3 - 6e3),
      y1: Math.round(o.y1 / 100 * 12e3 - 6e3),
      x2: Math.round(o.x2 / 100 * 12e3 - 6e3),
      y2: Math.round(o.y2 / 100 * 12e3 - 6e3)
    };
  const g = o.x1 / 100 * s, m = o.y1 / 100 * u, h = o.x2 / 100 * s, y = o.y2 / 100 * u, v = c[0], f = c[1], p = c[2], S = (f.vacuum.x - v.vacuum.x) / (f.map.x - v.map.x || 1), C = (p.vacuum.y - v.vacuum.y) / (p.map.y - v.map.y || 1), E = Math.round(v.vacuum.x + (g - v.map.x) * S), z = Math.round(v.vacuum.y + (m - v.map.y) * C), L = Math.round(v.vacuum.x + (h - v.map.x) * S), Q = Math.round(v.vacuum.y + (y - v.map.y) * C);
  return {
    x1: E,
    y1: z,
    x2: L,
    y2: Q
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
    const y = ua(c.scale) ? c.scale : 1, v = Array.isArray(c.padding) ? c.padding : [0, 0, 0, 0], f = Array.isArray(c.crop) ? c.crop : [0, 0, 0, 0];
    return {
      top: s,
      left: u,
      height: g,
      width: m,
      grid_size: h,
      scale: y,
      padding: v,
      crop: f
    };
  }
  return null;
}
function Ub({ hass: o, entityId: c, mapEntityId: s, onSuccess: u, language: g = "en" }) {
  const { t: m } = Ye(g), h = R.useCallback(() => {
    console.debug("[Vacuum] Start full clean", c), o.callService("vacuum", "start", { entity_id: c }), u?.(m("toast.starting_full_clean"));
  }, [o, c, u, m]), y = R.useCallback(() => {
    console.debug("[Vacuum] Pause", c), o.callService("vacuum", "pause", { entity_id: c }), u?.(m("toast.pausing_vacuum"));
  }, [o, c, u, m]), v = R.useCallback(() => {
    console.debug("[Vacuum] Stop and return to base", c), o.callService("vacuum", "stop", { entity_id: c }), o.callService("vacuum", "return_to_base", { entity_id: c }), u?.(m("toast.stopping_vacuum"));
  }, [o, c, u, m]), f = R.useCallback(() => {
    console.debug("[Vacuum] Return to dock", c), o.callService("vacuum", "return_to_base", { entity_id: c }), u?.(m("toast.vacuum_docking"));
  }, [o, c, u, m]), p = R.useCallback(
    (E, z) => {
      console.debug("[Vacuum] Clean segments", { entityId: c, segments: E, count: z }), o.callService("dreame_vacuum", "vacuum_clean_segment", {
        entity_id: c,
        segments: E
      }), u?.(m(z === 1 ? "toast.starting_room_clean" : "toast.starting_room_clean_plural", { count: String(z) }));
    },
    [o, c, u, m]
  ), S = R.useCallback(
    (E, z, L) => {
      const Q = o.states[s];
      console.debug("[Vacuum] Clean zone - input:", {
        uiZone: E,
        imageWidth: z,
        imageHeight: L,
        mapEntityId: s,
        calibrationPoints: Q?.attributes?.calibration_points
      });
      const A = Tb(E, Q, z, L);
      console.debug("[Vacuum] Clean zone - converted:", A), o.callService("dreame_vacuum", "vacuum_clean_zone", {
        entity_id: c,
        zone: [A.x1, A.y1, A.x2, A.y2]
      }), u?.(m("toast.starting_zone_clean"));
    },
    [o, c, s, u, m]
  ), C = R.useCallback(
    (E, z, L, Q, A) => {
      switch (console.debug("[Vacuum] Handle clean", {
        mode: E,
        selectedRooms: Array.from(z.entries()),
        selectedZone: L,
        imageWidth: Q,
        imageHeight: A
      }), E) {
        case "all":
          h();
          break;
        case "room":
          z.size > 0 ? p(Array.from(z.keys()), z.size) : (console.debug("[Vacuum] No rooms selected"), u?.(m("toast.select_rooms_first")));
          break;
        case "zone":
          L && Q && A ? S(L, Q, A) : L ? (console.debug("[Vacuum] Zone selected but no image dimensions"), u?.(m("toast.cannot_determine_map"))) : (console.debug("[Vacuum] No zone selected"), u?.(m("toast.select_zone_first")));
          break;
      }
    },
    [h, p, S, u, m]
  );
  return {
    handleStart: h,
    handlePause: y,
    handleStop: v,
    handleDock: f,
    handleCleanSegments: p,
    handleCleanZone: S,
    handleClean: C
  };
}
function _g(o = 3e3) {
  const [c, s] = R.useState(null);
  R.useEffect(() => {
    if (c) {
      const m = setTimeout(() => s(null), o);
      return () => clearTimeout(m);
    }
  }, [c, o]);
  const u = R.useCallback((m) => {
    s(m);
  }, []), g = R.useCallback(() => {
    s(null);
  }, []);
  return {
    toast: c,
    showToast: u,
    hideToast: g
  };
}
const Vr = {
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
      return Vr;
    case "dark":
      return gg;
    case "custom":
      return Lb(c || {});
    default:
      return Vr;
  }
}
function Lb(o) {
  return {
    name: "custom",
    colors: {
      ...(o.base === "dark" ? gg : Vr).colors,
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
  const u = R.useMemo(() => Bb(o, c), [o, c]);
  return R.useEffect(() => {
    s?.current && Hb(s.current, u);
  }, [u, s]), u;
}
let Vb = 0;
function ss() {
  return `r${++Vb}`;
}
function qb(o) {
  const c = [], s = [];
  for (const u of o.entities)
    u.type === "virtual_wall" && u.points.length >= 4 ? c.push({
      id: ss(),
      pA: { x: u.points[0], y: u.points[1] },
      pB: { x: u.points[2], y: u.points[3] }
    }) : (u.type === "no_go_area" || u.type === "no_mop_area") && u.points.length >= 8 && s.push({
      id: ss(),
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
  const s = R.useRef(null), [u, g] = R.useState({
    walls: [],
    zones: [],
    selectedId: null,
    tool: "wall",
    dirty: !1,
    savedDisplay: null
  });
  R.useEffect(() => {
    if (!c || !o) return;
    const z = qb(o), L = s.current;
    if (L) {
      if (!(z.walls.length === L.walls.length && L.walls.every(
        (A) => z.walls.some(
          (I) => I.pA.x === A.pA.x && I.pA.y === A.pA.y && I.pB.x === A.pB.x && I.pB.y === A.pB.y
        )
      ) && z.zones.length === L.zones.length && L.zones.every(
        (A) => z.zones.some(
          (I) => I.pA.x === A.pA.x && I.pA.y === A.pA.y && I.pC.x === A.pC.x && I.pC.y === A.pC.y
        )
      ))) {
        g((A) => A.dirty || A.selectedId !== null ? A : { ...A, walls: L.walls, zones: L.zones, selectedId: null, dirty: !1 });
        return;
      }
      s.current = null, g((A) => A.dirty || A.selectedId !== null ? A : {
        ...A,
        walls: z.walls,
        zones: z.zones,
        selectedId: null,
        dirty: !1,
        savedDisplay: null
      });
      return;
    }
    g((Q) => Q.dirty || Q.selectedId !== null ? Q : { ...Q, walls: z.walls, zones: z.zones, selectedId: null, dirty: !1 });
  }, [c, o]), R.useEffect(() => {
    c || g((z) => ({
      walls: [],
      zones: [],
      selectedId: null,
      tool: "wall",
      dirty: !1,
      savedDisplay: z.savedDisplay
    }));
  }, [c]);
  const m = R.useCallback((z) => {
    g((L) => ({ ...L, tool: z, selectedId: null }));
  }, []), h = R.useCallback((z, L) => {
    const Q = ss();
    return g((A) => ({
      ...A,
      walls: [...A.walls, { id: Q, pA: z, pB: L }],
      dirty: !0,
      selectedId: Q
    })), Q;
  }, []), y = R.useCallback((z, L, Q) => {
    const A = Math.min(L.x, Q.x), I = Math.max(L.x, Q.x), Z = Math.min(L.y, Q.y), G = Math.max(L.y, Q.y), W = ss();
    return g((V) => ({
      ...V,
      zones: [
        ...V.zones,
        {
          id: W,
          type: z,
          pA: { x: A, y: Z },
          pB: { x: I, y: Z },
          pC: { x: I, y: G },
          pD: { x: A, y: G }
        }
      ],
      dirty: !0,
      selectedId: W
    })), W;
  }, []), v = R.useCallback((z, L, Q) => {
    g((A) => ({
      ...A,
      walls: A.walls.map((I) => I.id === z ? { ...I, pA: L, pB: Q } : I),
      dirty: !0,
      selectedId: z
    }));
  }, []), f = R.useCallback((z, L, Q) => {
    const A = Math.min(L.x, Q.x), I = Math.max(L.x, Q.x), Z = Math.min(L.y, Q.y), G = Math.max(L.y, Q.y);
    g((W) => ({
      ...W,
      zones: W.zones.map(
        (V) => V.id === z ? {
          ...V,
          pA: { x: A, y: Z },
          pB: { x: I, y: Z },
          pC: { x: I, y: G },
          pD: { x: A, y: G }
        } : V
      ),
      dirty: !0,
      selectedId: z
    }));
  }, []), p = R.useCallback((z) => {
    g((L) => ({
      ...L,
      walls: L.walls.filter((Q) => Q.id !== z),
      zones: L.zones.filter((Q) => Q.id !== z),
      dirty: !0,
      selectedId: L.selectedId === z ? null : L.selectedId
    }));
  }, []), S = R.useCallback((z) => {
    g((L) => ({ ...L, selectedId: z }));
  }, []), C = R.useCallback(() => {
    g((z) => z.selectedId ? {
      ...z,
      walls: z.walls.filter((L) => L.id !== z.selectedId),
      zones: z.zones.filter((L) => L.id !== z.selectedId),
      selectedId: null,
      dirty: !0
    } : z);
  }, []), E = R.useCallback(() => {
    g((z) => {
      const L = { walls: z.walls, zones: z.zones };
      return s.current = L, { ...z, dirty: !1, savedDisplay: L };
    });
  }, []);
  return {
    restrictions: u,
    setTool: m,
    addWall: h,
    addZone: y,
    updateWall: v,
    updateZone: f,
    deleteItem: p,
    selectItem: S,
    deleteSelected: C,
    markSaved: E
  };
}
function Kb(o, c) {
  if (c)
    switch (o) {
      case He.SWEEPING_AND_MOPPING:
        return c("cleaning_mode_button.vac_and_mop");
      case He.MOPPING_AFTER_SWEEPING:
        return c("cleaning_mode_button.mop_after_vac");
      case He.SWEEPING:
        return c("cleaning_mode_button.vacuum");
      case He.MOPPING:
        return c("cleaning_mode_button.mop");
      case He.MAPPING:
        return c("cleaning_mode_button.mapping");
      default:
        return o;
    }
  switch (o) {
    case He.SWEEPING_AND_MOPPING:
      return "Vac & Mop";
    case He.MOPPING_AFTER_SWEEPING:
      return "Mop after Vac";
    case He.SWEEPING:
      return "Vac";
    case He.MOPPING:
      return "Mop";
    case He.MAPPING:
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
    case He.SWEEPING:
      return $r;
    case He.MOPPING:
      return Jr;
    case He.SWEEPING_AND_MOPPING:
      return Di;
    case He.MOPPING_AFTER_SWEEPING:
      return Ir;
    case He.MAPPING:
      return sb;
    default:
      return "";
  }
}
function Jb(o) {
  switch (o) {
    case da.VACUUM_AND_MOP:
      return Di;
    case da.MOP_AFTER_VACUUM:
      return Ir;
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
  const s = Te(o.attributes.status, ""), u = o.attributes.segment_cleaning || !1, g = o.attributes.zone_cleaning || !1;
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
function Fo(o, c, s, u, g) {
  if (!s || s.length < 3) {
    const E = (o + 1e4) / 2e4, z = (c + 1e4) / 2e4;
    return {
      x: E * u,
      y: z * g
    };
  }
  const m = s[0], h = s[1], y = s[2], v = (h.map.x - m.map.x) / (h.vacuum.x - m.vacuum.x || 1), f = (y.map.y - m.map.y) / (y.vacuum.y - m.vacuum.y || 1), p = m.map.x + (o - m.vacuum.x) * v, S = m.map.y + (c - m.vacuum.y) * f;
  return { x: p, y: S };
}
function a1(o, c, s, u) {
  if (o.x0 === void 0 || o.y0 === void 0 || o.x1 === void 0 || o.y1 === void 0)
    return console.warn("Room missing coordinates:", o), "";
  const g = Fo(o.x0, o.y0, c, s, u), m = Fo(o.x1, o.y0, c, s, u), h = Fo(o.x1, o.y1, c, s, u), y = Fo(o.x0, o.y1, c, s, u);
  return `M ${g.x} ${g.y} L ${m.x} ${m.y} L ${h.x} ${h.y} L ${y.x} ${y.y} Z`;
}
function n1({ entity: o, deviceName: c, onSettingsClick: s, language: u }) {
  const { t: g } = Ye(u), m = Te(o.attributes.status, o.state), h = Te(o.attributes.cleaned_area, 0), y = Te(o.attributes.cleaning_time, 0), v = Te(o.attributes.battery, 0), f = () => {
    const C = o.attributes.battery;
    return ua(C) ? C >= 80 ? og : C >= 60 ? lg : C >= 20 ? ig : ng : null;
  }, p = Te(o.attributes.cleaning_progress, 0) || Te(o.attributes.drying_progress, 0), S = o.attributes.status;
  return /* @__PURE__ */ r.jsxs("div", { className: "header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "header__top", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "header__title-wrapper", children: [
        /* @__PURE__ */ r.jsx("h2", { className: "header__title", children: c }),
        /* @__PURE__ */ r.jsx("p", { className: "header__status", children: m })
      ] }),
      s && /* @__PURE__ */ r.jsx("button", { className: "header__settings-btn", onClick: s, type: "button", "aria-label": "Settings", children: /* @__PURE__ */ r.jsx(tg, {}) })
    ] }),
    S !== "Sleeping" && p > 0 && /* @__PURE__ */ r.jsx("div", { className: "header__progress", children: /* @__PURE__ */ r.jsx("div", { className: "header__progress-bar", children: /* @__PURE__ */ r.jsx("div", { className: "header__progress-fill", style: { width: `${p}%` } }) }) }),
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
          y,
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
  const { t: y } = Ye(h), v = (E) => E === He.SWEEPING ? $r : E === He.MOPPING ? Jr : E === He.SWEEPING_AND_MOPPING ? Di : E === He.MOPPING_AFTER_SWEEPING ? Ir : Di, f = (E) => E === da.VACUUM_AND_MOP ? y("cleaning_mode_button.vac_and_mop") : E === da.MOP_AFTER_VACUUM ? y("cleaning_mode_button.mop_after_vac") : "", p = (E) => E === He.MOPPING_AFTER_SWEEPING ? y("cleaning_mode_button.mop_after_vac") : E === He.SWEEPING_AND_MOPPING ? y("cleaning_mode_button.vac_and_mop") : E === He.SWEEPING ? y("cleaning_mode_button.vacuum") : E === He.MOPPING ? y("cleaning_mode_button.mop") : "", S = () => y(s === "Off" ? "cleaning_mode_button.prefix_custom" : "cleaning_mode_button.prefix_cleangenius"), C = (E) => {
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
              S(),
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
        onClick: C,
        title: y("cleaning_mode_button.view_shortcuts"),
        disabled: m,
        children: lb
      }
    )
  ] });
}
function l1({ zone: o, onZoneChange: c, clearZoneLabel: s, isStarted: u = !1 }) {
  const [g, m] = R.useState(null), [h, y] = R.useState(null), v = (z, L) => {
    z.stopPropagation(), o && (m(L), y(o));
  }, f = (z) => "touches" in z && z.touches.length > 0 ? { clientX: z.touches[0].clientX, clientY: z.touches[0].clientY } : { clientX: z.clientX, clientY: z.clientY }, p = (z, L) => {
    if (!g || !h) return;
    const { clientX: Q, clientY: A } = f(z), I = Q - L.left, Z = A - L.top, G = Math.max(0, Math.min(100, I / L.width * 100)), W = Math.max(0, Math.min(100, Z / L.height * 100)), V = { ...h };
    switch (g) {
      case "tl":
        V.x1 = Math.min(G, h.x2 - 5), V.y1 = Math.min(W, h.y2 - 5);
        break;
      case "tr":
        V.x2 = Math.max(G, h.x1 + 5), V.y1 = Math.min(W, h.y2 - 5);
        break;
      case "bl":
        V.x1 = Math.min(G, h.x2 - 5), V.y2 = Math.max(W, h.y1 + 5);
        break;
      case "br":
        V.x2 = Math.max(G, h.x1 + 5), V.y2 = Math.max(W, h.y1 + 5);
        break;
    }
    c(V);
  }, S = () => {
    m(null), y(null);
  }, C = (z) => {
    z.stopPropagation(), c(null), m(null), y(null);
  };
  return {
    resizingHandle: g,
    handleResizeMove: p,
    handleResizeEnd: S,
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
        onClick: (z) => z.stopPropagation(),
        children: !u && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "vacuum-map__zone-handle vacuum-map__zone-handle--tl",
              onMouseDown: (z) => v(z, "tl"),
              onTouchStart: (z) => v(z, "tl"),
              title: "Resize"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "vacuum-map__zone-handle vacuum-map__zone-handle--tr",
              onMouseDown: (z) => v(z, "tr"),
              onTouchStart: (z) => v(z, "tr"),
              title: "Resize"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "vacuum-map__zone-handle vacuum-map__zone-handle--bl",
              onMouseDown: (z) => v(z, "bl"),
              onTouchStart: (z) => v(z, "bl"),
              title: "Resize"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "vacuum-map__zone-handle vacuum-map__zone-handle--br",
              onMouseDown: (z) => v(z, "br"),
              onTouchStart: (z) => v(z, "br"),
              title: "Resize"
            }
          ),
          /* @__PURE__ */ r.jsx("button", { className: "vacuum-map__zone-clear", onClick: C, title: s, children: "×" })
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
  const y = R.useMemo(() => o.filter((f) => f.visibility !== "Hidden").map((f) => ({
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
      children: y.map(({ room: f, path: p }) => {
        const S = c.has(f.id);
        return p ? /* @__PURE__ */ r.jsx(
          "path",
          {
            d: p,
            className: `vacuum-map__room-segment ${S ? "vacuum-map__room-segment--selected" : ""}`,
            fill: S ? "var(--accent-bg, rgba(212, 175, 55, 0.3))" : "transparent",
            stroke: !h && S ? "var(--accent-color, #D4AF37)" : "rgba(255, 255, 255, 0.2)",
            strokeWidth: "2",
            style: {
              cursor: "pointer",
              transition: "all 0.2s ease"
            },
            onClick: (C) => {
              C.stopPropagation(), v(f.id, f.name);
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
  const g = o === "map", m = g ? u : s, h = g ? P0 : us;
  return /* @__PURE__ */ r.jsx("button", { className: "view-toggle-button", onClick: c, "aria-label": m, title: m, children: /* @__PURE__ */ r.jsx(h, { size: 18 }) });
}
function c1({ rooms: o, selectedRooms: c, onRoomToggle: s, language: u }) {
  const { t: g } = Ye(u);
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
  onImageDimensionsChange: y,
  language: v = "en",
  isStarted: f = !1,
  defaultRoomView: p = "map"
}) {
  const { t: S } = Ye(v), C = o.states[c], E = C?.attributes?.entity_picture, z = R.useRef(null), L = R.useRef(null), [Q, A] = R.useState({ width: 0, height: 0 }), [I, Z] = R.useState(p);
  R.useEffect(() => {
    s !== "room" && Z(p);
  }, [s, p]);
  const G = t1(o, c), W = C?.attributes?.calibration_points ?? [], V = l1({
    zone: m,
    onZoneChange: h,
    clearZoneLabel: S("vacuum_map.clear_zone"),
    isStarted: f
  }), Y = (ae) => {
    if (s !== "zone" || V.isResizing()) return;
    const ee = z.current?.getBoundingClientRect();
    if (!ee) return;
    const re = ae.clientX - ee.left, we = ae.clientY - ee.top, me = re / ee.width * 100, je = we / ee.height * 100, Ne = 15, D = me, F = je, ie = {
      x1: Math.max(0, D - Ne / 2),
      y1: Math.max(0, F - Ne / 2),
      x2: Math.min(100, D + Ne / 2),
      y2: Math.min(100, F + Ne / 2)
    };
    console.debug("[Map] Zone created at click:", { clickX: re, clickY: we, xPercent: me, yPercent: je, newZone: ie }), h(ie);
  }, J = (ae) => {
    const ee = z.current?.getBoundingClientRect();
    ee && V.handleResizeMove(ae, ee);
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "vacuum-map",
      ref: z,
      onClick: Y,
      onMouseMove: J,
      onMouseUp: V.handleResizeEnd,
      onMouseLeave: V.handleResizeEnd,
      onTouchMove: J,
      onTouchEnd: V.handleResizeEnd,
      onTouchCancel: V.handleResizeEnd,
      children: [
        C && E ? /* @__PURE__ */ r.jsx(
          "img",
          {
            ref: L,
            src: o.hassUrl(E),
            alt: "Vacuum Map",
            className: "vacuum-map__image",
            onLoad: (ae) => {
              const ee = ae.currentTarget;
              ee.naturalWidth && ee.naturalHeight && (A({ width: ee.naturalWidth, height: ee.naturalHeight }), y?.(ee.naturalWidth, ee.naturalHeight));
            }
          }
        ) : /* @__PURE__ */ r.jsxs("div", { className: "vacuum-map__placeholder", children: [
          S("vacuum_map.no_map"),
          /* @__PURE__ */ r.jsx("br", {}),
          /* @__PURE__ */ r.jsx("small", { children: S("vacuum_map.looking_for", { entity: c }) })
        ] }),
        s === "room" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx(
            s1,
            {
              viewMode: I,
              onToggle: () => Z((ae) => ae === "map" ? "list" : "map"),
              mapLabel: S("vacuum_map.switch_to_map"),
              listLabel: S("vacuum_map.switch_to_list")
            }
          ),
          I === "map" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            !f && /* @__PURE__ */ r.jsx("div", { className: "vacuum-map__overlay", children: S("vacuum_map.room_overlay") }),
            !f && Q.width > 0 && Q.height > 0 && /* @__PURE__ */ r.jsx(
              o1,
              {
                rooms: G,
                selectedRooms: u,
                onRoomToggle: g,
                calibrationPoints: W,
                imageWidth: Q.width,
                imageHeight: Q.height,
                isStarted: f
              }
            )
          ] }) : /* @__PURE__ */ r.jsx(
            c1,
            {
              rooms: G,
              selectedRooms: u,
              onRoomToggle: g,
              language: v
            }
          )
        ] }),
        s === "zone" && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("div", { className: "vacuum-map__overlay", children: S(m ? "vacuum_map.zone_overlay_resize" : "vacuum_map.zone_overlay_create") }),
          V.renderZone()
        ] })
      ]
    }
  );
}
function hg({ selectedMode: o, onModeChange: c, disabled: s = !1, language: u = "en" }) {
  const { t: g } = Ye(u), m = [
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
  const { t: s } = Ye(c);
  return /* @__PURE__ */ r.jsxs("button", { onClick: o, className: "action-buttons__pause", children: [
    /* @__PURE__ */ r.jsx("span", { className: "action-buttons__icon", children: tb }),
    /* @__PURE__ */ r.jsx("span", { children: s("actions.pause") })
  ] });
}
function f1({ onClick: o, language: c = "en" }) {
  const { t: s } = Ye(c);
  return /* @__PURE__ */ r.jsxs("button", { onClick: o, className: "action-buttons__resume", children: [
    /* @__PURE__ */ r.jsx("span", { className: "action-buttons__icon", children: ab }),
    /* @__PURE__ */ r.jsx("span", { children: s("actions.resume") })
  ] });
}
function c_({ onClick: o, language: c = "en" }) {
  const { t: s } = Ye(c);
  return /* @__PURE__ */ r.jsxs("button", { onClick: o, className: "action-buttons__stop", children: [
    /* @__PURE__ */ r.jsx("span", { className: "action-buttons__icon", children: nb }),
    /* @__PURE__ */ r.jsx("span", { children: s("actions.stop") })
  ] });
}
function m1({ onClick: o, language: c = "en", disabled: s }) {
  const { t: u } = Ye(c);
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
  onResume: y,
  onStop: v,
  onDock: f,
  language: p = "en",
  disabled: S = !1
}) {
  const { t: C, getRoomCountTranslation: E } = Ye(p), L = (() => {
    switch (o) {
      case "room":
        return E(c);
      case "all":
        return C("actions.clean_all");
      case "zone":
        return C("actions.zone_clean");
      default:
        return C("actions.clean");
    }
  })();
  return s && !u && !g ? /* @__PURE__ */ r.jsxs("div", { className: "action-buttons", children: [
    /* @__PURE__ */ r.jsx(d1, { onClick: h, language: p }),
    /* @__PURE__ */ r.jsx(c_, { onClick: v, language: p })
  ] }) : u ? /* @__PURE__ */ r.jsxs("div", { className: "action-buttons", children: [
    /* @__PURE__ */ r.jsx(f1, { onClick: y, language: p }),
    /* @__PURE__ */ r.jsx(c_, { onClick: v, language: p })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: "action-buttons", children: [
    /* @__PURE__ */ r.jsx(u1, { onClick: m, text: L, disabled: S }),
    /* @__PURE__ */ r.jsx(m1, { onClick: f, language: p, disabled: S })
  ] });
}
function Zt({ title: o, icon: c, defaultOpen: s = !1, children: u }) {
  const [g, m] = R.useState(s), h = R.useCallback(() => {
    m((y) => !y);
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
function Bl({ checked: o = !1, onChange: c, disabled: s = !1 }) {
  const u = (g) => {
    c && !s && c(g.target.checked);
  };
  return /* @__PURE__ */ r.jsxs("label", { className: `toggle ${s ? "toggle--disabled" : ""}`, children: [
    /* @__PURE__ */ r.jsx("input", { type: "checkbox", className: "toggle__input", checked: o, onChange: u, disabled: s }),
    /* @__PURE__ */ r.jsx("span", { className: "toggle__slider", children: /* @__PURE__ */ r.jsx("span", { className: "toggle__knob" }) })
  ] });
}
function Ui({
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
function Bi({ opened: o, onClose: c, children: s }) {
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
  const { setSelectOption: h } = Wr(g), { t: y } = Ye(m), v = Fr(u), f = (p) => {
    p ? (h(
      v.cleangenius,
      ls(ba.DEEP_CLEANING)
    ), h(v.cleaningRoute, os(Vn.DEEP))) : (h(
      v.cleangenius,
      ls(ba.ROUTINE_CLEANING)
    ), h(v.cleaningRoute, os(Vn.STANDARD)));
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__content", children: [
    /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: y("cleangenius_mode.cleaning_mode_title") }),
      /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__mode-grid", children: c.map((p, S) => {
        const C = p, E = p === "Vacuum and mop";
        return /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: `cleaning-mode-modal__mode-card ${p === o ? "cleaning-mode-modal__mode-card--selected" : ""}`,
            onClick: () => h(v.cleangeniusMode, hb(C)),
            style: { cursor: "pointer" },
            children: [
              /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: `cleaning-mode-modal__mode-icon cleaning-mode-modal__mode-icon--${E ? "vac-mop" : "mop-after"}`,
                  children: Jb(C)
                }
              ),
              /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__mode-label", children: Xb(C, y) }),
              p === o && /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__mode-checkmark", children: /* @__PURE__ */ r.jsx("span", { children: "✓" }) })
            ]
          },
          S
        );
      }) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__setting", children: [
      /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__setting-label", children: y("cleangenius_mode.deep_cleaning") }),
      /* @__PURE__ */ r.jsx(Bl, { checked: s === ba.DEEP_CLEANING, onChange: f })
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
      Ui,
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
  maxPlusDescription: y,
  t: v
}) {
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__power-grid", children: c.map((f, p) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__power-option", children: [
      /* @__PURE__ */ r.jsx(
        Ui,
        {
          size: "small",
          selected: f === o,
          onClick: () => u(m, os(f)),
          icon: Ib(f)
        }
      ),
      /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__power-label", children: Qb(f, v) })
    ] }, p)) }),
    /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__max-plus", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__max-plus-header", children: [
        /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__max-plus-title", children: "Max+" }),
        /* @__PURE__ */ r.jsx(
          Bl,
          {
            checked: s,
            onChange: (f) => g(h, f)
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("p", { className: "cleaning-mode-modal__max-plus-description", children: y })
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
  const [y, v] = R.useState(o), f = (y - Tl.WETNESS.MIN) / (Tl.WETNESS.MAX - Tl.WETNESS.MIN) * 100, p = 20, S = `calc(${f}% + ${p / 2 - f * p / 100}px)`, C = (z) => {
    v(parseInt(z.target.value));
  }, E = () => {
    y !== o && s(u, y);
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__slider-container", children: /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__slider-wrapper", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "range",
          min: Tl.WETNESS.MIN,
          max: Tl.WETNESS.MAX,
          value: y,
          onChange: C,
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
            left: S
          },
          children: y
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__slider-labels", children: [
      /* @__PURE__ */ r.jsx(
        "span",
        {
          className: `cleaning-mode-modal__slider-label ${c === is.SLIGHTLY_DRY ? "cleaning-mode-modal__slider-label--active" : "cleaning-mode-modal__slider-label--inactive"}`,
          children: g
        }
      ),
      /* @__PURE__ */ r.jsx(
        "span",
        {
          className: `cleaning-mode-modal__slider-label ${c === is.MOIST ? "cleaning-mode-modal__slider-label--active" : "cleaning-mode-modal__slider-label--inactive"}`,
          children: m
        }
      ),
      /* @__PURE__ */ r.jsx(
        "span",
        {
          className: `cleaning-mode-modal__slider-label ${c === is.WET ? "cleaning-mode-modal__slider-label--active" : "cleaning-mode-modal__slider-label--inactive"}`,
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
  selfCleanTimeMax: y,
  onSelectFrequency: v,
  onChangeArea: f,
  onChangeTime: p,
  frequencyEntityId: S,
  areaEntityId: C,
  timeEntityId: E,
  t: z
}) {
  const [L, Q] = R.useState(s), [A, I] = R.useState(m), Z = (L - u) / (g - u) * 100, G = (A - h) / (y - h) * 100, W = 20, V = `calc(${Z}% + ${W / 2 - Z * W / 100}px)`, Y = `calc(${G}% + ${W / 2 - G * W / 100}px)`, J = z ? z("units.square_meters") : "m²", ae = z ? z("units.minutes_short") : "m", ee = (we) => {
    const me = parseInt(we.target.value);
    o === "By area" ? Q(me) : I(me);
  }, re = () => {
    o === "By area" && L !== s ? f(C, L) : o === "By time" && A !== m && p(E, A);
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__horizontal-scroll", children: c.map((we, me) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__mode-option", children: [
      /* @__PURE__ */ r.jsx(
        Ui,
        {
          size: "small",
          selected: we === o,
          onClick: () => v(S, vb(we)),
          icon: Fb(we)
        }
      ),
      /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__mode-option-label", children: b1(we, z) })
    ] }, me)) }),
    (o === "By area" || o === "By time") && /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__slider-container", style: { marginTop: "1rem" }, children: /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__slider-wrapper", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "range",
          min: o === "By area" ? u : h,
          max: o === "By area" ? g : y,
          value: o === "By area" ? L : A,
          onChange: ee,
          onMouseUp: re,
          onTouchEnd: re,
          className: "cleaning-mode-modal__slider",
          style: {
            background: o === "By area" ? `linear-gradient(to right, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${Z}%, var(--accent-bg-secondary-hover) ${Z}%, var(--accent-bg-secondary-hover) 100%)` : `linear-gradient(to right, var(--accent-bg-secondary) 0%, var(--accent-bg-secondary) ${G}%, var(--accent-bg-secondary-hover) ${G}%, var(--accent-bg-secondary-hover) 100%)`
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
          children: o === "By area" ? `${L}${J}` : `${A}${ae}`
        }
      )
    ] }) })
  ] });
}
function x1({ cleaningRoute: o, cleaningRouteList: c, onSelect: s, entityId: u }) {
  return /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__route-grid", children: c.map((g, m) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__route-option", children: [
    /* @__PURE__ */ r.jsx(
      Ui,
      {
        size: "small",
        selected: g === o,
        onClick: () => s(u, os(g)),
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
  cleaningRouteList: y,
  maxSuctionPower: v,
  selfCleanArea: f,
  selfCleanFrequency: p,
  selfCleanFrequencyList: S,
  selfCleanAreaMin: C,
  selfCleanAreaMax: E,
  selfCleanTime: z,
  selfCleanTimeMin: L,
  selfCleanTimeMax: Q,
  baseEntityId: A,
  hass: I,
  language: Z
}) {
  const { setSelectOption: G, setSwitch: W, setNumber: V } = Wr(I), Y = Fr(A), { t: J } = Ye(Z);
  return /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__content", children: [
    /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.cleaning_mode_title") }),
      /* @__PURE__ */ r.jsx(
        p1,
        {
          cleaningMode: o,
          cleaningModeList: c,
          onSelect: G,
          entityId: Y.cleaningMode,
          t: J
        }
      )
    ] }),
    o !== He.MAPPING && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.suction_power_title") }),
      /* @__PURE__ */ r.jsx(
        h1,
        {
          suctionLevel: s,
          suctionLevelList: u,
          maxSuctionPower: v,
          onSelectSuctionLevel: G,
          onToggleMaxPower: W,
          suctionLevelEntityId: Y.suctionLevel,
          maxSuctionPowerEntityId: Y.maxSuctionPower,
          maxPlusDescription: J("custom_mode.max_plus_description"),
          t: J
        }
      )
    ] }),
    o !== He.SWEEPING && o !== He.MAPPING && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
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
    o !== He.MAPPING && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.mop_washing_frequency_title") }),
      /* @__PURE__ */ r.jsx(
        y1,
        {
          selfCleanFrequency: p,
          selfCleanFrequencyList: S,
          selfCleanArea: f,
          selfCleanAreaMin: C,
          selfCleanAreaMax: E,
          selfCleanTime: z,
          selfCleanTimeMin: L,
          selfCleanTimeMax: Q,
          onSelectFrequency: G,
          onChangeArea: V,
          onChangeTime: V,
          frequencyEntityId: Y.selfCleanFrequency,
          areaEntityId: Y.selfCleanArea,
          timeEntityId: Y.selfCleanTime,
          t: J
        }
      )
    ] }),
    o !== He.MAPPING && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__section-header", children: /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: J("custom_mode.route_title") }) }),
      /* @__PURE__ */ r.jsx(
        x1,
        {
          cleaningRoute: h,
          cleaningRouteList: y,
          onSelect: G,
          entityId: Y.cleaningRoute
        }
      )
    ] })
  ] });
}
function w1({ opened: o, onClose: c, entity: s, hass: u, language: g }) {
  const { t: m } = Ye(g), h = dg(s.entity_id), { setSelectOption: y, setSwitch: v } = Wr(u), f = Fr(h), p = (ze, Ee) => {
    const b = s.attributes[ze];
    return Array.isArray(b) ? b : Ee;
  }, S = Te(s.attributes.cleangenius, ba.OFF), [C, E] = R.useState(S !== ba.OFF), z = Te(s.attributes.cleaning_mode, Mt.CLEANING_MODE), L = Te(s.attributes.cleangenius_mode, Mt.CLEANGENIUS_MODE), Q = Te(s.attributes.suction_level, Mt.SUCTION_LEVEL), A = Te(s.attributes.wetness_level, Mt.WETNESS_LEVEL), I = Te(s.attributes.cleaning_route, Mt.CLEANING_ROUTE), Z = Te(s.attributes.max_suction_power, Mt.MAX_SUCTION_POWER), G = Te(s.attributes.self_clean_area, Mt.SELF_CLEAN_AREA), W = Te(s.attributes.self_clean_frequency, Mt.SELF_CLEAN_FREQUENCY), V = p("self_clean_frequency_list", ["By area", "By time", "By room"]), Y = Te(s.attributes.self_clean_area_min, Mt.SELF_CLEAN_AREA_MIN), J = Te(s.attributes.self_clean_area_max, Mt.SELF_CLEAN_AREA_MAX), ae = Te(s.attributes.previous_self_clean_time, Mt.SELF_CLEAN_TIME), ee = Te(s.attributes.self_clean_time_min, Mt.SELF_CLEAN_TIME_MIN), re = Te(s.attributes.self_clean_time_max, Mt.SELF_CLEAN_TIME_MAX), we = Te(s.attributes.mop_pad_humidity, Mt.MOP_PAD_HUMIDITY), me = [
    { value: Ol.CLEANGENIUS, label: m("cleaning_mode.clean_genius") },
    { value: Ol.CUSTOM, label: m("cleaning_mode.custom") }
  ], je = (() => {
    const ze = p("cleaning_mode_list", [
      "Sweeping",
      "Mopping",
      "Sweeping and mopping",
      "Mopping after sweeping"
    ]);
    return ze.includes("Mapping") ? ze : [...ze, "Mapping"];
  })(), Ne = p("cleangenius_mode_list", ["Vacuum and mop", "Mop after vacuum"]), D = p("suction_level_list", ["Quiet", "Standard", "Strong", "Turbo"]), F = p("cleaning_route_list", ["Quick", "Standard", "Intensive", "Deep"]), ie = (ze) => {
    const Ee = ze === Ol.CLEANGENIUS;
    E(Ee), v(f.customMoppingMode, !Ee), Ee ? y(
      f.cleangenius,
      ls(ba.ROUTINE_CLEANING)
    ) : y(
      f.cleangenius,
      ls(ba.OFF)
    );
  };
  return /* @__PURE__ */ r.jsx(Bi, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal", children: [
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__header", children: /* @__PURE__ */ r.jsx(
      _1,
      {
        value: C ? Ol.CLEANGENIUS : Ol.CUSTOM,
        onChange: ie,
        options: me
      }
    ) }),
    /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__content-wrapper", children: C ? /* @__PURE__ */ r.jsx(
      g1,
      {
        cleangeniusMode: L,
        cleangeniusModeList: Ne,
        cleangenius: S,
        baseEntityId: h,
        hass: u,
        language: g
      }
    ) : /* @__PURE__ */ r.jsx(
      S1,
      {
        cleaningMode: z,
        cleaningModeList: je,
        suctionLevel: Q,
        suctionLevelList: D,
        wetnessLevel: A,
        mopPadHumidity: we,
        cleaningRoute: I,
        cleaningRouteList: F,
        maxSuctionPower: Z,
        selfCleanArea: G,
        selfCleanFrequency: W,
        selfCleanFrequencyList: V,
        selfCleanAreaMin: Y,
        selfCleanAreaMax: J,
        selfCleanTime: ae,
        selfCleanTimeMin: ee,
        selfCleanTimeMax: re,
        baseEntityId: h,
        hass: u,
        language: g
      }
    ) })
  ] }) });
}
function z1({ opened: o, onClose: c, entity: s, hass: u, language: g }) {
  const { t: m } = Ye(g), h = s.attributes.shortcuts || {}, y = Object.entries(h).map(([f, p]) => ({
    id: parseInt(f),
    ...p
  })), v = (f) => {
    u.callService("dreame_vacuum", "vacuum_start_shortcut", {
      entity_id: s.entity_id,
      shortcut_id: f
    }), c();
  };
  return /* @__PURE__ */ r.jsx(Bi, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsxs("div", { className: "shortcuts-modal", children: [
    /* @__PURE__ */ r.jsx("h2", { className: "shortcuts-modal__title", children: m("shortcuts.title") }),
    y.length === 0 ? /* @__PURE__ */ r.jsxs("div", { className: "shortcuts-modal__empty", children: [
      /* @__PURE__ */ r.jsx("p", { children: m("shortcuts.no_shortcuts") }),
      /* @__PURE__ */ r.jsx("p", { className: "shortcuts-modal__empty-hint", children: m("shortcuts.create_hint") })
    ] }) : /* @__PURE__ */ r.jsx("div", { className: "shortcuts-modal__list", children: y.map((f) => /* @__PURE__ */ r.jsxs(
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
const E1 = [
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
function N1({ hass: o, entity: c, language: s }) {
  const { t: u } = Ye(s), g = c.attributes, m = c.entity_id.split(".")[1] ?? "", h = R.useCallback(
    (v, f) => {
      const p = `switch.${m}_${v}`;
      o.callService("switch", f ? "turn_on" : "turn_off", {
        entity_id: p
      });
    },
    [o, m]
  ), y = (v) => {
    const f = g[v];
    return Pr(f) ? f : ua(f) ? f > 0 : !1;
  };
  return /* @__PURE__ */ r.jsx("div", { className: "ai-detection-section", children: E1.map((v) => /* @__PURE__ */ r.jsxs("div", { className: "ai-detection-section__item", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "ai-detection-section__info", children: [
      /* @__PURE__ */ r.jsx("span", { className: "ai-detection-section__label", children: u(v.labelKey) }),
      /* @__PURE__ */ r.jsx("span", { className: "ai-detection-section__description", children: u(v.descriptionKey) })
    ] }),
    /* @__PURE__ */ r.jsx(
      Bl,
      {
        checked: y(v.attributeKey),
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
  const { t: u } = Ye(s), g = c.attributes, m = c.entity_id.split(".")[1] ?? "", h = R.useCallback(
    (S, C) => {
      const E = `switch.${m}_${S}`;
      o.callService("switch", C ? "turn_on" : "turn_off", {
        entity_id: E
      });
    },
    [o, m]
  ), y = R.useCallback(
    (S) => {
      const C = `select.${m}_carpet_sensitivity`;
      o.callService("select", "select_option", {
        entity_id: C,
        option: S
      });
    },
    [o, m]
  ), v = (S) => {
    const C = g[S];
    return Pr(C) ? C : ua(C) ? C > 0 : !1;
  }, f = Te(g.carpet_sensitivity, "medium"), p = mg(f) ? f.toLowerCase() : "medium";
  return /* @__PURE__ */ r.jsxs("div", { className: "carpet-settings-section", children: [
    M1.map((S) => /* @__PURE__ */ r.jsxs("div", { className: "carpet-settings-section__item", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "carpet-settings-section__info", children: [
        /* @__PURE__ */ r.jsx("span", { className: "carpet-settings-section__label", children: u(S.labelKey) }),
        /* @__PURE__ */ r.jsx("span", { className: "carpet-settings-section__description", children: u(S.descriptionKey) })
      ] }),
      /* @__PURE__ */ r.jsx(
        Bl,
        {
          checked: v(S.attributeKey),
          onChange: (C) => h(S.switchEntitySuffix, C)
        }
      )
    ] }, S.key)),
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
          onChange: (S) => y(S.target.value),
          children: k1.map((S) => /* @__PURE__ */ r.jsx("option", { value: S, children: u(`settings.carpet.sensitivity_${S}`) }, S))
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
  const { t: u } = Ye(s), g = c.attributes, m = R.useCallback(
    (y) => {
      o.callService("dreame_vacuum", y, {
        entity_id: c.entity_id
      });
    },
    [o, c.entity_id]
  ), h = (y) => y >= 50 ? "var(--consumable-good, #34c759)" : y >= 20 ? "var(--consumable-warning, #ff9500)" : "var(--consumable-critical, #ff3b30)";
  return /* @__PURE__ */ r.jsx("div", { className: "consumables-section", children: C1.map((y) => {
    const v = Te(g[y.percentKey], 0), f = Te(g[y.hoursKey], 0), p = h(v);
    return /* @__PURE__ */ r.jsxs("div", { className: "consumables-section__item", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "consumables-section__info", children: [
        /* @__PURE__ */ r.jsx("span", { className: "consumables-section__label", children: u(y.labelKey) }),
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
          onClick: () => m(y.resetCommand),
          type: "button",
          children: u("settings.consumables.reset")
        }
      )
    ] }, y.key);
  }) });
}
function T1({ entity: o, language: c }) {
  const { t: s } = Ye(c), u = o.attributes, g = u.firmware_version, m = mg(g) || ua(g) ? g : "-", h = Te(u.total_cleaned_area, 0), y = Te(u.total_cleaning_time, 0), v = Te(u.cleaning_count, 0), f = u.ap, p = f?.ssid ?? "-", S = f?.rssi ?? "-", C = f?.ip ?? "-", E = [
    { labelKey: "settings.device_info.firmware", value: m },
    { labelKey: "settings.device_info.total_area", value: h, unitKey: "units.square_meters" },
    { labelKey: "settings.device_info.total_time", value: y, unitKey: "units.minutes" },
    { labelKey: "settings.device_info.total_cleans", value: v },
    { labelKey: "settings.device_info.wifi_ssid", value: p },
    { labelKey: "settings.device_info.wifi_signal", value: S, unitKey: "units.decibels" },
    { labelKey: "settings.device_info.ip_address", value: C }
  ];
  return /* @__PURE__ */ r.jsx("div", { className: "device-info-section", children: E.map((z) => /* @__PURE__ */ r.jsxs("div", { className: "device-info-section__item", children: [
    /* @__PURE__ */ r.jsx("span", { className: "device-info-section__label", children: s(z.labelKey) }),
    /* @__PURE__ */ r.jsxs("span", { className: "device-info-section__value", children: [
      z.value,
      z.unitKey && ` ${s(z.unitKey)}`
    ] })
  ] }, z.labelKey)) });
}
function O1({ hass: o, entity: c, config: s, language: u }) {
  const { t: g } = Ye(u), m = c.attributes, h = R.useMemo(() => m.maps ?? [], [m.maps]), y = m.selected_map_id ?? m.selected_map, f = `select.${s.entity?.split(".")[1] ?? ""}_selected_map`, p = R.useCallback(
    (S) => {
      const C = h.find((E) => E.id === S);
      C && o.callService("select", "select_option", {
        entity_id: f,
        option: C.name
      });
    },
    [o, f, h]
  );
  return h.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: "map-management-section", children: /* @__PURE__ */ r.jsx("p", { className: "map-management-section__empty", children: g("settings.map_management.no_maps") }) }) : /* @__PURE__ */ r.jsxs("div", { className: "map-management-section", children: [
    /* @__PURE__ */ r.jsx("p", { className: "map-management-section__description", children: g("settings.map_management.description") }),
    /* @__PURE__ */ r.jsx("div", { className: "map-management-section__maps", children: h.map((S) => /* @__PURE__ */ r.jsx(
      "button",
      {
        className: `map-management-section__map ${S.id === y ? "map-management-section__map--active" : ""}`,
        onClick: () => p(S.id),
        type: "button",
        children: S.name
      },
      S.id
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
  const { t: u } = Ye(s), g = c.attributes, m = c.entity_id.split(".")[1] ?? "", h = R.useCallback(
    (v, f) => {
      const p = `switch.${m}_${v}`;
      o.callService("switch", f ? "turn_on" : "turn_off", {
        entity_id: p
      });
    },
    [o, m]
  ), y = (v) => {
    const f = g[v];
    return Pr(f) ? f : ua(f) ? f > 0 : jb(f) ? f.enabled ?? !1 : !1;
  };
  return /* @__PURE__ */ r.jsx("div", { className: "quick-settings-section", children: R1.map((v) => /* @__PURE__ */ r.jsxs("div", { className: "quick-settings-section__item", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "quick-settings-section__info", children: [
      /* @__PURE__ */ r.jsx("span", { className: "quick-settings-section__label", children: u(v.labelKey) }),
      /* @__PURE__ */ r.jsx("span", { className: "quick-settings-section__description", children: u(v.descriptionKey) })
    ] }),
    /* @__PURE__ */ r.jsx(
      Bl,
      {
        checked: y(v.attributeKey),
        onChange: (f) => h(v.switchEntitySuffix, f)
      }
    )
  ] }, v.key)) });
}
const Cr = 0, r_ = 100;
function U1({ hass: o, entity: c, language: s }) {
  const { t: u } = Ye(s), g = c.entity_id.split(".")[1] ?? "", m = Te(c.attributes.volume, 50), [h, y] = R.useState(m), v = (h - Cr) / (r_ - Cr) * 100, f = 20, p = `calc(${v}% + ${f / 2 - v * f / 100}px)`, S = (L) => {
    y(parseInt(L.target.value));
  }, C = R.useCallback(() => {
    if (h !== m) {
      const L = `number.${g}_volume`;
      o.callService("number", "set_value", {
        entity_id: L,
        value: h
      });
    }
  }, [o, g, h, m]), E = R.useCallback(() => {
    o.callService("vacuum", "locate", {
      entity_id: c.entity_id
    });
  }, [o, c.entity_id]), z = h === 0;
  return /* @__PURE__ */ r.jsxs("div", { className: "volume-section", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "volume-section__control", children: [
      /* @__PURE__ */ r.jsx("div", { className: "volume-section__icon", children: z ? /* @__PURE__ */ r.jsx(Kv, { size: 20 }) : /* @__PURE__ */ r.jsx(ag, { size: 20 }) }),
      /* @__PURE__ */ r.jsx("div", { className: "volume-section__slider-container", children: /* @__PURE__ */ r.jsxs("div", { className: "volume-section__slider-wrapper", children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "range",
            min: Cr,
            max: r_,
            value: h,
            onChange: S,
            onMouseUp: C,
            onTouchEnd: C,
            className: "volume-section__slider",
            style: {
              background: `linear-gradient(to right, var(--accent-color, #007aff) 0%, var(--accent-color, #007aff) ${v}%, var(--surface-secondary, #e5e5e5) ${v}%, var(--surface-secondary, #e5e5e5) 100%)`
            }
          }
        ),
        /* @__PURE__ */ r.jsx("div", { className: "volume-section__tooltip", style: { left: p }, children: z ? u("settings.volume.muted") : `${h}%` })
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsxs("button", { className: "volume-section__test-button", onClick: E, type: "button", children: [
      /* @__PURE__ */ r.jsx(P_, { size: 16 }),
      /* @__PURE__ */ r.jsx("span", { children: u("settings.volume.test_sound") })
    ] })
  ] });
}
function B1({ opened: o, onClose: c, hass: s, entity: u, config: g, language: m }) {
  const { t: h } = Ye(m);
  return /* @__PURE__ */ r.jsx(Bi, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsxs("div", { className: "settings-panel", children: [
    /* @__PURE__ */ r.jsx("h2", { className: "settings-panel__title", children: h("settings.title") }),
    /* @__PURE__ */ r.jsx("div", { className: "settings-panel__scroll-wrapper", children: /* @__PURE__ */ r.jsxs("div", { className: "settings-panel__sections", children: [
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.consumables.title"), icon: /* @__PURE__ */ r.jsx(Y0, {}), defaultOpen: !0, children: /* @__PURE__ */ r.jsx(j1, { hass: s, entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.device_info.title"), icon: /* @__PURE__ */ r.jsx(F_, {}), children: /* @__PURE__ */ r.jsx(T1, { entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.map_management.title"), icon: /* @__PURE__ */ r.jsx(us, {}), children: /* @__PURE__ */ r.jsx(O1, { hass: s, entity: u, config: g, language: m }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.volume.title"), icon: /* @__PURE__ */ r.jsx(ag, {}), children: /* @__PURE__ */ r.jsx(U1, { hass: s, entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.quick_settings.title"), icon: /* @__PURE__ */ r.jsx(eg, {}), children: /* @__PURE__ */ r.jsx(D1, { hass: s, entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.carpet.title"), icon: /* @__PURE__ */ r.jsx(W0, {}), children: /* @__PURE__ */ r.jsx(A1, { hass: s, entity: u, language: m }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: h("settings.ai_detection.title"), icon: /* @__PURE__ */ r.jsx(z0, {}), children: /* @__PURE__ */ r.jsx(N1, { hass: s, entity: u, language: m }) })
    ] }) })
  ] }) });
}
function L1({ selectedRooms: o, language: c }) {
  const { t: s } = Ye(c);
  if (o.size === 0)
    return null;
  const u = Array.from(o.values()).join(", ");
  return /* @__PURE__ */ r.jsxs("div", { className: "room-selection-display", children: [
    /* @__PURE__ */ r.jsx("span", { className: "room-selection-display__label", children: s("room_display.selected_label") }),
    /* @__PURE__ */ r.jsx("span", { className: "room-selection-display__rooms", children: u })
  ] });
}
function G1({ hass: o, config: c }) {
  const s = o.states[c.entity], u = c.theme || "light", g = c.language || "en", { t: m } = Ye(g), h = R.useRef(null), y = pg({
    themeType: u,
    customThemeConfig: c.custom_theme,
    containerRef: h
  }), [v, f] = R.useState(null), {
    selectedMode: p,
    selectedRooms: S,
    selectedZone: C,
    modalOpened: E,
    shortcutsModalOpened: z,
    settingsPanelOpened: L,
    setSelectedZone: Q,
    setModalOpened: A,
    setShortcutsModalOpened: I,
    setSettingsPanelOpened: Z,
    handleModeChange: G,
    handleRoomToggle: W
  } = fg({ defaultMode: c.default_mode }), { toast: V, showToast: Y, hideToast: J } = _g(), { handlePause: ae, handleStop: ee, handleDock: re, handleClean: we } = Ub({
    hass: o,
    entityId: c.entity,
    mapEntityId: c.map_entity || `camera.${c.entity.split(".")[1]}_map`,
    onSuccess: Y,
    language: g
  }), me = (b, H) => {
    const te = S.has(b);
    W(b, H), Y(
      te ? m("toast.deselected_room", { name: H }) : m("toast.selected_room", { name: H })
    );
  }, je = () => {
    we(p, S, C, v?.width, v?.height);
  }, Ne = () => {
    o.callService("vacuum", "start", { entity_id: c.entity }), Y(m("toast.resuming"));
  };
  if (!s)
    return /* @__PURE__ */ r.jsx("div", { className: "dreame-vacuum-card__error", children: m("errors.entity_not_found", { entity: c.entity }) });
  const D = Pb(s, c);
  if (!D)
    return /* @__PURE__ */ r.jsx("div", { className: "dreame-vacuum-card__error", children: m("errors.failed_to_load") });
  const { deviceName: F, mapEntityId: ie, rooms: ze } = D, Ee = e1(s, p);
  return /* @__PURE__ */ r.jsxs("div", { ref: h, className: `dreame-vacuum-card dreame-vacuum-card--${y.name}`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "dreame-vacuum-card__container", children: [
      /* @__PURE__ */ r.jsx(
        n1,
        {
          entity: s,
          deviceName: F,
          onSettingsClick: () => Z(!0),
          language: g
        }
      ),
      /* @__PURE__ */ r.jsx(
        r1,
        {
          hass: o,
          mapEntityId: ie,
          selectedMode: p,
          selectedRooms: S,
          rooms: ze,
          onRoomToggle: me,
          zone: C,
          onZoneChange: Q,
          onImageDimensionsChange: (b, H) => f({ width: b, height: H }),
          language: g,
          isStarted: Te(s.attributes.started, !1),
          defaultRoomView: c.default_room_view
        }
      ),
      /* @__PURE__ */ r.jsx(
        i1,
        {
          cleanGeniusMode: Te(s.attributes.cleangenius_mode, ""),
          cleaningMode: Te(s.attributes.cleaning_mode, "Sweeping and mopping"),
          cleangenius: Te(s.attributes.cleangenius, "Off"),
          onClick: () => A(!0),
          onShortcutsClick: () => I(!0),
          disabled: Te(s.attributes.started, !1),
          language: g
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "dreame-vacuum-card__controls", children: [
        p === "room" && /* @__PURE__ */ r.jsx(L1, { selectedRooms: S, language: g }),
        /* @__PURE__ */ r.jsx(
          hg,
          {
            selectedMode: Ee,
            onModeChange: G,
            disabled: Te(s.attributes.started, !1),
            language: g
          }
        ),
        /* @__PURE__ */ r.jsx(
          vg,
          {
            selectedMode: p,
            selectedRoomsCount: S.size,
            isRunning: Te(s.attributes.running, !1),
            isPaused: Te(s.attributes.paused, !1),
            isDocked: s.state === "docked" || Te(s.attributes.docked, !1),
            onClean: je,
            onPause: ae,
            onResume: Ne,
            onStop: ee,
            onDock: re,
            language: g
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      w1,
      {
        opened: E,
        onClose: () => A(!1),
        entity: s,
        hass: o,
        language: g
      }
    ),
    /* @__PURE__ */ r.jsx(
      z1,
      {
        opened: z,
        onClose: () => I(!1),
        entity: s,
        hass: o,
        language: g
      }
    ),
    /* @__PURE__ */ r.jsx(
      B1,
      {
        opened: L,
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
  onSettingsClick: y,
  language: v
}) {
  const { t: f } = Ye(v), p = {
    docked: f("valetudo.status.docked"),
    cleaning: f("valetudo.status.cleaning"),
    paused: f("valetudo.status.paused"),
    returning: f("valetudo.status.returning"),
    idle: f("valetudo.status.idle"),
    error: f("valetudo.status.error")
  }, S = (Z) => {
    const G = Math.floor(Z / 60), W = Math.floor(G / 60), V = G % 60;
    return W > 0 ? f("valetudo.time.hours_minutes", { h: String(W), m: String(V) }) : f("valetudo.time.minutes", { m: String(G) });
  }, C = c ? Number(c.state) : null, E = p[o.state] ?? o.state, z = ["cleaning", "paused", "returning"].includes(o.state), L = s ? Number(s.state) : NaN, Q = u ? Number(u.state) : NaN, A = z && !isNaN(L) && !isNaN(Q) && L > 0, I = () => C === null || isNaN(C) ? null : C >= 80 ? og : C >= 60 ? lg : C >= 20 ? ig : ng;
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
          children: /* @__PURE__ */ r.jsx(Nv, { size: 20 })
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "header__title-wrapper", children: [
        /* @__PURE__ */ r.jsxs("h2", { className: "header__title", children: [
          g,
          " ",
          /* @__PURE__ */ r.jsx("span", { style: { fontSize: "0.6em", opacity: 0.45, fontWeight: 400 }, children: "v1.13.0" })
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: "header__status", children: E })
      ] }),
      y && /* @__PURE__ */ r.jsx("button", { className: "header__settings-btn", onClick: y, type: "button", "aria-label": "Settings", children: /* @__PURE__ */ r.jsx(tg, {}) })
    ] }),
    C !== null && !isNaN(C) || A ? /* @__PURE__ */ r.jsxs("div", { className: "header__stats", children: [
      C !== null && !isNaN(C) && /* @__PURE__ */ r.jsxs("div", { className: "header__stat", children: [
        /* @__PURE__ */ r.jsx("span", { className: "header__stat-icon", children: I() }),
        /* @__PURE__ */ r.jsxs("span", { className: "header__stat-value", children: [
          C,
          "%"
        ] })
      ] }),
      A && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsxs("div", { className: "header__stat", children: [
          /* @__PURE__ */ r.jsx("span", { className: "header__stat-icon header__stat-icon--area", children: /* @__PURE__ */ r.jsx(Qr, { size: 16 }) }),
          /* @__PURE__ */ r.jsx("span", { className: "header__stat-value", children: H1(L) })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "header__stat", children: [
          /* @__PURE__ */ r.jsx("span", { className: "header__stat-icon header__stat-icon--cleaning-time", children: /* @__PURE__ */ r.jsx(D0, { size: 16 }) }),
          /* @__PURE__ */ r.jsx("span", { className: "header__stat-value", children: S(Q) })
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
], jr = "rgba(120, 164, 193, 0.6)", q1 = "rgba( 50,  50,  50, 1)", Y1 = "rgba(255, 255, 255, 0.85)", Z1 = "#4CAF50", K1 = "#2196F3", he = 3;
function X1(o) {
  let c = 1 / 0, s = 1 / 0, u = -1 / 0, g = -1 / 0;
  for (const m of o.layers)
    for (let h = 0; h < m.pixels.length; h += 2) {
      const y = m.pixels[h], v = m.pixels[h + 1];
      y < c && (c = y), v < s && (s = v), y > u && (u = y), v > g && (g = v);
    }
  return c === 1 / 0 && (c = 0, s = 0, u = o.size.x, g = o.size.y), { minX: c, minY: s, maxX: u, maxY: g };
}
function Tr(o, c, s, u, g) {
  o.fillStyle = s;
  for (let m = 0; m < c.pixels.length; m += 2)
    o.fillRect((c.pixels[m] - u) * he, (c.pixels[m + 1] - g) * he, he, he);
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
  displayRestrictions: y,
  onRestrictionDrawn: v,
  onRestrictionSelect: f,
  iterations: p = 1,
  onIterationsChange: S,
  language: C,
  robotSize: E = 1,
  chargerSize: z = 1,
  pathWidth: L = 1
}) {
  const { t: Q } = Ye(C), A = R.useRef(null), I = R.useRef(null), Z = R.useRef({ bb: { minX: 0, minY: 0 }, pixelSize: 50 }), G = R.useRef(/* @__PURE__ */ new Map()), [W, V] = R.useState(1), [Y, J] = R.useState({ x: 0, y: 0 }), ae = R.useRef(null), ee = R.useRef(null), re = R.useRef(!1), we = R.useRef(/* @__PURE__ */ new Map()), [me, je] = R.useState(null), [Ne, D] = R.useState(null), F = R.useRef(!1), [ie, ze] = R.useState(null), Ee = R.useRef(null), [b, H] = R.useState(null), te = R.useRef(null), oe = R.useRef(null), ve = R.useRef(null), ge = R.useMemo(() => window.matchMedia("(pointer: coarse)").matches, []), de = R.useCallback((k, B) => {
    const { bb: $, pixelSize: se } = Z.current;
    return {
      x: (k / he + $.minX) * se,
      y: (B / he + $.minY) * se
    };
  }, []), Pe = R.useCallback((k, B) => {
    const { bb: $, pixelSize: se } = Z.current;
    return {
      x: (k / se - $.minX) * he,
      y: (B / se - $.minY) * he
    };
  }, []), Oe = R.useCallback(
    (k, B) => {
      const $ = I.current, se = A.current;
      if (!$ || !se) return { x: 0, y: 0 };
      const pe = $.getBoundingClientRect(), Re = (k - pe.left - pe.width / 2 - Y.x) / W + pe.width / 2, M = (B - pe.top - pe.height / 2 - Y.y) / W + pe.height / 2, $e = pe.width, P = se.width / $e;
      return { x: Re * P, y: M * P };
    },
    [W, Y]
  );
  R.useEffect(() => {
    V(1), J({ x: 0, y: 0 }), ze(null), H(null), ve.current = null;
  }, [c]), R.useEffect(() => {
    H(null), ve.current = null;
  }, [h?.tool]), R.useEffect(() => {
    if (c === "zone" && ge) {
      const k = A.current;
      if (!k) return;
      const B = k.width * 0.3, $ = k.height * 0.3, se = (k.width - B) / 2, pe = (k.height - $) / 2;
      ze({ x: se, y: pe, w: B, h: $ });
    } else
      ze(null);
  }, [c, ge]), R.useEffect(() => {
    if (ie === null) return;
    const k = de(ie.x, ie.y), B = de(ie.x + ie.w, ie.y + ie.h);
    g?.({
      x1: Math.round(Math.min(k.x, B.x)),
      y1: Math.round(Math.min(k.y, B.y)),
      x2: Math.round(Math.max(k.x, B.x)),
      y2: Math.round(Math.max(k.y, B.y))
    });
  }, [ie, de, g]), R.useEffect(() => {
    const k = A.current;
    if (!k) return;
    const B = X1(o), $ = o.pixelSize || 50;
    Z.current = { bb: B, pixelSize: $ };
    const se = /* @__PURE__ */ new Map();
    for (const P of o.layers)
      if (P.type === "segment" && P.metaData.segmentId) {
        const ne = parseInt(P.metaData.segmentId, 10);
        for (let ue = 0; ue < P.pixels.length; ue += 2)
          se.set(`${P.pixels[ue]},${P.pixels[ue + 1]}`, ne);
      }
    G.current = se;
    const pe = (B.maxX - B.minX + 2) * he, Re = (B.maxY - B.minY + 2) * he;
    k.width = pe, k.height = Re;
    const M = k.getContext("2d");
    if (!M) return;
    M.clearRect(0, 0, pe, Re);
    const $e = Q1(o.layers), ut = (P) => parseInt(P, 10);
    for (const P of o.layers)
      P.type === "floor" && Tr(M, P, jr, B.minX, B.minY);
    for (const P of o.layers)
      if (P.type === "segment") {
        const ne = P.metaData.segmentId, ue = ne ? $e.get(ne) ?? jr : jr, ce = (ne && s && s.size > 0 ? s.has(ut(ne)) : !0) ? ue : ue.replace(/[\d.]+\)$/, "0.35)");
        Tr(M, P, ce, B.minX, B.minY);
      }
    for (const P of o.layers)
      P.type === "wall" && Tr(M, P, q1, B.minX, B.minY);
    for (const P of o.entities)
      if (!(P.type !== "path" && P.type !== "predicted_path")) {
        M.beginPath(), M.strokeStyle = P.type === "predicted_path" ? "rgba(255,255,255,0.4)" : Y1, M.lineWidth = he * 0.75 * L, M.lineCap = "round", M.lineJoin = "round", M.setLineDash(P.type === "predicted_path" ? [4, 3] : []);
        for (let ne = 0; ne < P.points.length; ne += 2) {
          const ue = (P.points[ne] / $ - B.minX) * he, le = (P.points[ne + 1] / $ - B.minY) * he;
          ne === 0 ? M.moveTo(ue, le) : M.lineTo(ue, le);
        }
        M.stroke(), M.lineCap = "butt", M.lineJoin = "miter", M.setLineDash([]);
      }
    for (const P of o.entities) {
      if (P.type !== "charger_location" || P.points.length < 2) continue;
      const ne = (P.points[0] / $ - B.minX) * he, ue = (P.points[1] / $ - B.minY) * he, le = he * 3.4 * z;
      M.save(), M.shadowColor = "rgba(0,0,0,0.5)", M.shadowBlur = he * 2, M.beginPath(), M.arc(ne, ue, le, 0, 2 * Math.PI), M.fillStyle = Z1, M.fill(), M.shadowColor = "transparent", M.shadowBlur = 0, M.strokeStyle = "#fff", M.lineWidth = he * 0.7, M.stroke(), M.beginPath(), M.moveTo(ne + le * 0.15, ue - le * 0.65), M.lineTo(ne - le * 0.2, ue + le * 0.05), M.lineTo(ne + le * 0.05, ue + le * 0.05), M.lineTo(ne - le * 0.15, ue + le * 0.65), M.lineTo(ne + le * 0.2, ue - le * 0.05), M.lineTo(ne - le * 0.05, ue - le * 0.05), M.closePath(), M.fillStyle = "#fff", M.fill(), M.restore();
    }
    for (const P of o.entities) {
      if (P.type !== "robot_position" || P.points.length < 2) continue;
      const ne = (P.points[0] / $ - B.minX) * he, ue = (P.points[1] / $ - B.minY) * he, le = (P.metaData.angle ?? 0) * (Math.PI / 180), ce = he * 3 * E;
      M.save(), M.translate(ne, ue), M.rotate(le), M.shadowColor = "rgba(0,0,0,0.6)", M.shadowBlur = he * 4, M.beginPath(), M.arc(0, 0, ce, 0, 2 * Math.PI), M.fillStyle = K1, M.fill(), M.shadowColor = "transparent", M.shadowBlur = 0, M.strokeStyle = "#fff", M.lineWidth = he * 0.9, M.stroke(), M.beginPath(), M.moveTo(0, -ce * 0.62), M.lineTo(ce * 0.38, ce * 0.42), M.lineTo(0, ce * 0.18), M.lineTo(-ce * 0.38, ce * 0.42), M.closePath(), M.fillStyle = "#fff", M.fill(), M.restore();
    }
    for (const P of o.entities)
      if (!(P.type !== "active_zone" || P.points.length < 8)) {
        M.beginPath();
        for (let ne = 0; ne < P.points.length; ne += 2) {
          const ue = (P.points[ne] / $ - B.minX) * he, le = (P.points[ne + 1] / $ - B.minY) * he;
          ne === 0 ? M.moveTo(ue, le) : M.lineTo(ue, le);
        }
        M.closePath(), M.fillStyle = "rgba(255, 152, 0, 0.22)", M.fill(), M.strokeStyle = "rgba(255, 152, 0, 0.9)", M.lineWidth = he, M.setLineDash([6, 3]), M.stroke(), M.setLineDash([]);
      }
    if (u && !ge) {
      const P = Pe(u.x1, u.y1), ne = Pe(u.x2, u.y2), ue = Math.min(P.x, ne.x), le = Math.min(P.y, ne.y), ce = Math.abs(ne.x - P.x), ye = Math.abs(ne.y - P.y);
      M.fillStyle = "rgba(255, 152, 0, 0.25)", M.fillRect(ue, le, ce, ye), M.strokeStyle = "rgba(255, 152, 0, 0.9)", M.lineWidth = he, M.setLineDash([6, 3]), M.strokeRect(ue, le, ce, ye), M.setLineDash([]);
    }
    if (y) {
      const P = (ne, ue) => ({
        x: (ne / $ - B.minX) * he,
        y: (ue / $ - B.minY) * he
      });
      for (const ne of y.walls) {
        const ue = P(ne.pA.x, ne.pA.y), le = P(ne.pB.x, ne.pB.y);
        M.beginPath(), M.moveTo(ue.x, ue.y), M.lineTo(le.x, le.y), M.strokeStyle = "rgba(244, 67, 54, 0.6)", M.lineWidth = he * 1.2, M.setLineDash([]), M.lineCap = "round", M.stroke(), M.lineCap = "butt";
      }
      for (const ne of y.zones) {
        const ue = [ne.pA, ne.pB, ne.pC, ne.pD].map((ce) => P(ce.x, ce.y));
        M.beginPath(), M.moveTo(ue[0].x, ue[0].y);
        for (let ce = 1; ce < ue.length; ce++) M.lineTo(ue[ce].x, ue[ce].y);
        M.closePath();
        const le = ne.type === "mop";
        M.fillStyle = le ? "rgba(33,150,243,0.1)" : "rgba(244,67,54,0.1)", M.fill(), M.strokeStyle = le ? "rgba(33,150,243,0.5)" : "rgba(244,67,54,0.5)", M.lineWidth = he, M.setLineDash([5, 3]), M.stroke(), M.setLineDash([]);
      }
    } else if (c !== "restrictions")
      for (const P of o.entities) {
        if (P.type === "virtual_wall" && P.points.length >= 4) {
          const ne = (P.points[0] / $ - B.minX) * he, ue = (P.points[1] / $ - B.minY) * he, le = (P.points[2] / $ - B.minX) * he, ce = (P.points[3] / $ - B.minY) * he;
          M.beginPath(), M.moveTo(ne, ue), M.lineTo(le, ce), M.strokeStyle = "rgba(244, 67, 54, 0.6)", M.lineWidth = he * 1.2, M.setLineDash([]), M.lineCap = "round", M.stroke(), M.lineCap = "butt";
        }
        if ((P.type === "no_go_area" || P.type === "no_mop_area") && P.points.length >= 8) {
          const ne = P.type === "no_mop_area", ue = ne ? "rgba(33, 150, 243, 0.1)" : "rgba(244, 67, 54, 0.1)", le = ne ? "rgba(33, 150, 243, 0.5)" : "rgba(244, 67, 54, 0.5)";
          M.beginPath();
          for (let ce = 0; ce < P.points.length; ce += 2) {
            const ye = (P.points[ce] / $ - B.minX) * he, Ae = (P.points[ce + 1] / $ - B.minY) * he;
            ce === 0 ? M.moveTo(ye, Ae) : M.lineTo(ye, Ae);
          }
          M.closePath(), M.fillStyle = ue, M.fill(), M.strokeStyle = le, M.lineWidth = he, M.setLineDash([5, 3]), M.stroke(), M.setLineDash([]);
        }
      }
    if (c === "restrictions" && h) {
      const { bb: P, pixelSize: ne } = Z.current, ue = (ye, Ae) => ({
        x: (ye / ne - P.minX) * he,
        y: (Ae / ne - P.minY) * he
      }), le = (ye, Ae) => {
        const pt = ue(ye.pA.x, ye.pA.y), kt = ue(ye.pB.x, ye.pB.y);
        M.beginPath(), M.moveTo(pt.x, pt.y), M.lineTo(kt.x, kt.y), M.strokeStyle = Ae ? "#ff9800" : "rgba(244,67,54,1)", M.lineWidth = Ae ? he * 3 : he * 2, M.setLineDash([]), M.lineCap = "round", M.stroke(), M.lineCap = "butt";
        for (const Ke of [pt, kt])
          M.beginPath(), M.arc(Ke.x, Ke.y, Ae ? he * 2.5 : he * 1.5, 0, 2 * Math.PI), M.fillStyle = Ae ? "#ff9800" : "rgba(244,67,54,0.9)", M.fill();
      }, ce = (ye, Ae) => {
        const pt = [ye.pA, ye.pB, ye.pC, ye.pD].map((Ke) => ue(Ke.x, Ke.y));
        M.beginPath(), M.moveTo(pt[0].x, pt[0].y);
        for (let Ke = 1; Ke < pt.length; Ke++) M.lineTo(pt[Ke].x, pt[Ke].y);
        M.closePath();
        const kt = ye.type === "mop";
        Ae ? (M.fillStyle = "rgba(255,152,0,0.25)", M.strokeStyle = "#ff9800") : (M.fillStyle = kt ? "rgba(33,150,243,0.2)" : "rgba(244,67,54,0.2)", M.strokeStyle = kt ? "rgba(33,150,243,0.9)" : "rgba(244,67,54,0.9)"), M.fill(), M.lineWidth = Ae ? he * 2 : he * 1.5, M.setLineDash([5, 3]), M.stroke(), M.setLineDash([]);
      };
      for (const ye of h.walls) le(ye, ye.id === h.selectedId);
      for (const ye of h.zones) ce(ye, ye.id === h.selectedId);
    }
  }, [
    o,
    s,
    u,
    c,
    Pe,
    ge,
    y,
    h,
    E,
    z,
    L
  ]), R.useEffect(() => {
    const k = I.current;
    if (!k) return;
    const B = ($) => {
      $.preventDefault(), $.stopPropagation();
      const se = $.deltaY < 0 ? 1.15 : 1 / 1.15;
      V((pe) => {
        const Re = Math.min(8, Math.max(1, pe * se));
        return Re <= 1 && J({ x: 0, y: 0 }), Re;
      });
    };
    return k.addEventListener("wheel", B, { passive: !1 }), () => k.removeEventListener("wheel", B);
  }, []);
  const ya = R.useCallback(
    (k) => {
      if (we.current.set(k.pointerId, { x: k.clientX, y: k.clientY }), we.current.size === 2) {
        F.current = !1, re.current = !1, je(null), D(null);
        return;
      }
      if (k.currentTarget.setPointerCapture(k.pointerId), c === "zone" && !ge) {
        F.current = !0;
        const B = Oe(k.clientX, k.clientY);
        je(B), D(B), g?.(null);
        return;
      }
      if (c === "restrictions" && h) {
        if (!ge) {
          const B = h.tool;
          if (B === "wall" || B === "no_go" || B === "no_mop") {
            F.current = !0;
            const $ = Oe(k.clientX, k.clientY);
            je($), D($);
            return;
          }
          return;
        }
        h.tool !== "select" && (ve.current = { x: k.clientX, y: k.clientY });
      }
      W > 1 && (re.current = !0, ee.current = { x: k.clientX, y: k.clientY });
    },
    [c, ge, W, Oe, g, h]
  ), Xa = R.useCallback(
    (k) => {
      if (we.current.set(k.pointerId, { x: k.clientX, y: k.clientY }), we.current.size === 2) {
        const B = Array.from(we.current.values()), $ = Math.hypot(B[0].x - B[1].x, B[0].y - B[1].y);
        if (ae.current !== null) {
          const se = $ / ae.current;
          V((pe) => Math.min(8, Math.max(1, pe * se)));
        }
        ae.current = $;
        return;
      }
      if (ae.current = null, F.current && c === "zone" && !ge) {
        D(Oe(k.clientX, k.clientY));
        return;
      }
      if (F.current && c === "restrictions" && !ge) {
        D(Oe(k.clientX, k.clientY));
        return;
      }
      if (re.current && ee.current) {
        const B = k.clientX - ee.current.x, $ = k.clientY - ee.current.y;
        ee.current = { x: k.clientX, y: k.clientY };
        const se = I.current;
        if (!se) return;
        const pe = (W - 1) * se.getBoundingClientRect().width / 2;
        J((Re) => ({
          x: Math.max(-pe, Math.min(pe, Re.x + B)),
          y: Math.max(-pe, Math.min(pe, Re.y + $))
        }));
      }
    },
    [c, ge, W, Oe]
  ), Qa = R.useCallback(
    (k) => {
      if (we.current.delete(k.pointerId), ae.current = null, F.current && c === "zone" && !ge) {
        F.current = !1;
        const B = Oe(k.clientX, k.clientY);
        if (me && (Math.abs(B.x - me.x) > 8 || Math.abs(B.y - me.y) > 8)) {
          const $ = de(me.x, me.y), se = de(B.x, B.y);
          g?.({
            x1: Math.round(Math.min($.x, se.x)),
            y1: Math.round(Math.min($.y, se.y)),
            x2: Math.round(Math.max($.x, se.x)),
            y2: Math.round(Math.max($.y, se.y))
          });
        }
        je(null), D(null);
        return;
      }
      if (F.current && c === "restrictions" && h && !ge) {
        F.current = !1;
        const B = Oe(k.clientX, k.clientY);
        if (me && (Math.abs(B.x - me.x) > 5 || Math.abs(B.y - me.y) > 5)) {
          const $ = de(me.x, me.y), se = de(B.x, B.y), pe = { x: Math.round($.x), y: Math.round($.y) }, Re = { x: Math.round(se.x), y: Math.round(se.y) }, M = h.tool === "wall" ? "wall" : "zone";
          v?.(M, pe, Re);
        }
        je(null), D(null);
        return;
      }
      if (c === "restrictions" && h && ge && ve.current) {
        const B = ve.current;
        if (ve.current = null, Math.abs(k.clientX - B.x) < 10 && Math.abs(k.clientY - B.y) < 10 && h.tool !== "select") {
          const $ = A.current;
          if ($) {
            const se = Oe(k.clientX, k.clientY);
            if (h.tool === "wall") {
              const pe = $.width * 0.3;
              H({
                kind: "wall",
                pA: { x: Math.max(0, se.x - pe / 2), y: se.y },
                pB: { x: Math.min($.width, se.x + pe / 2), y: se.y }
              });
            } else {
              const pe = $.width * 0.25, Re = $.height * 0.15;
              H({
                kind: "zone",
                x: Math.max(0, Math.min($.width - pe, se.x - pe / 2)),
                y: Math.max(0, Math.min($.height - Re, se.y - Re / 2)),
                w: pe,
                h: Re,
                type: h.tool
              });
            }
          }
        }
      }
      re.current = !1, ee.current = null;
    },
    [c, ge, me, Oe, de, g, h, v]
  ), Kn = R.useCallback(
    (k) => {
      if (c === "restrictions" && h && h.tool === "select" && f) {
        const $e = Oe(k.clientX, k.clientY), { bb: ut, pixelSize: P } = Z.current, ne = (le, ce) => ({
          x: (le / P - ut.minX) * he,
          y: (ce / P - ut.minY) * he
        }), ue = he * 5;
        for (const le of [...h.walls].reverse()) {
          const ce = ne(le.pA.x, le.pA.y), ye = ne(le.pB.x, le.pB.y), Ae = ye.x - ce.x, pt = ye.y - ce.y, kt = Ae * Ae + pt * pt;
          let Ke = kt > 0 ? (($e.x - ce.x) * Ae + ($e.y - ce.y) * pt) / kt : 0;
          Ke = Math.max(0, Math.min(1, Ke));
          const Ll = ce.x + Ke * Ae, Hi = ce.y + Ke * pt;
          if (Math.hypot($e.x - Ll, $e.y - Hi) <= ue) {
            f(le.id);
            return;
          }
        }
        for (const le of [...h.zones].reverse()) {
          const ce = [le.pA, le.pB, le.pC, le.pD].map((Ke) => ne(Ke.x, Ke.y)), ye = Math.min(...ce.map((Ke) => Ke.x)), Ae = Math.max(...ce.map((Ke) => Ke.x)), pt = Math.min(...ce.map((Ke) => Ke.y)), kt = Math.max(...ce.map((Ke) => Ke.y));
          if ($e.x >= ye - ue && $e.x <= Ae + ue && $e.y >= pt - ue && $e.y <= kt + ue) {
            f(le.id);
            return;
          }
        }
        f(null);
        return;
      }
      if (c !== "room" || !m || !A.current) return;
      const $ = Oe(k.clientX, k.clientY), { bb: se } = Z.current, pe = Math.floor($.x / he) + se.minX, Re = Math.floor($.y / he) + se.minY, M = G.current.get(`${pe},${Re}`);
      M !== void 0 && m(M);
    },
    [c, m, Oe, h, f]
  ), Xt = R.useMemo(() => {
    if (!ie || !A.current) return null;
    const k = A.current, B = k.width, $ = k.height;
    return {
      left: `${ie.x / B * 100}%`,
      top: `${ie.y / $ * 100}%`,
      width: `${ie.w / B * 100}%`,
      height: `${ie.h / $ * 100}%`
    };
  }, [ie]), $a = R.useMemo(() => {
    if (!b || b.kind !== "zone" || !A.current) return null;
    const k = A.current;
    return {
      left: `${b.x / k.width * 100}%`,
      top: `${b.y / k.height * 100}%`,
      width: `${b.w / k.width * 100}%`,
      height: `${b.h / k.height * 100}%`
    };
  }, [b]), Ja = R.useMemo(() => {
    if (!b || b.kind !== "wall" || !A.current) return null;
    const k = A.current, { pA: B, pB: $ } = b, se = k.width, pe = k.height, Re = (B.x + $.x) / 2, M = (B.y + $.y) / 2;
    return {
      cw: se,
      ch: pe,
      pAStyle: { left: `${B.x / se * 100}%`, top: `${B.y / pe * 100}%` },
      pBStyle: { left: `${$.x / se * 100}%`, top: `${$.y / pe * 100}%` },
      midStyle: { left: `${Re / se * 100}%`, top: `${M / pe * 100}%` }
    };
  }, [b]), Qt = R.useCallback(
    (k, B) => {
      B.stopPropagation(), B.currentTarget.setPointerCapture(B.pointerId), ie && (Ee.current = {
        mode: k,
        startPtr: { x: B.clientX, y: B.clientY },
        startZone: { ...ie }
      });
    },
    [ie]
  ), xa = R.useCallback(
    (k) => {
      if (!Ee.current || !A.current) return;
      k.stopPropagation();
      const { mode: B, startPtr: $, startZone: se } = Ee.current, pe = A.current, Re = I.current;
      if (!Re) return;
      const M = Re.getBoundingClientRect(), $e = pe.width / M.width / W, ut = (k.clientX - $.x) * $e, P = (k.clientY - $.y) * $e;
      ze((ne) => {
        if (!ne) return ne;
        const ue = pe.width, le = pe.height;
        if (B === "move")
          return {
            ...ne,
            x: Math.max(0, Math.min(ue - se.w, se.x + ut)),
            y: Math.max(0, Math.min(le - se.h, se.y + P))
          };
        {
          const ye = Math.max(20, Math.min(ue - se.x, se.w + ut)), Ae = Math.max(20, Math.min(le - se.y, se.h + P));
          return { ...ne, w: ye, h: Ae };
        }
      });
    },
    [W]
  ), la = R.useCallback((k) => {
    k.stopPropagation(), Ee.current = null;
  }, []), Sa = R.useCallback(() => {
    if (!(!b || !v)) {
      if (b.kind === "wall") {
        const k = de(b.pA.x, b.pA.y), B = de(b.pB.x, b.pB.y);
        v(
          "wall",
          { x: Math.round(k.x), y: Math.round(k.y) },
          { x: Math.round(B.x), y: Math.round(B.y) }
        );
      } else {
        const k = de(b.x, b.y), B = de(b.x + b.w, b.y + b.h);
        v(
          "zone",
          { x: Math.round(k.x), y: Math.round(k.y) },
          { x: Math.round(B.x), y: Math.round(B.y) }
        );
      }
      H(null);
    }
  }, [b, de, v]), wa = R.useCallback(
    (k, B) => {
      B.stopPropagation(), B.currentTarget.setPointerCapture(B.pointerId), !(!b || b.kind !== "zone") && (te.current = {
        mode: k,
        startPtr: { x: B.clientX, y: B.clientY },
        startItem: {
          x: b.x,
          y: b.y,
          w: b.w,
          h: b.h
        }
      });
    },
    [b]
  ), Xn = R.useCallback(
    (k) => {
      if (!te.current || !A.current) return;
      k.stopPropagation();
      const { mode: B, startPtr: $, startItem: se } = te.current, pe = A.current, Re = I.current;
      if (!Re) return;
      const M = Re.getBoundingClientRect(), $e = pe.width / M.width / W, ut = (k.clientX - $.x) * $e, P = (k.clientY - $.y) * $e;
      H((ne) => {
        if (!ne || ne.kind !== "zone") return ne;
        const ue = pe.width, le = pe.height;
        if (B === "move")
          return {
            ...ne,
            x: Math.max(0, Math.min(ue - se.w, se.x + ut)),
            y: Math.max(0, Math.min(le - se.h, se.y + P))
          };
        const ce = 20;
        return {
          ...ne,
          w: Math.max(ce, Math.min(ue - se.x, se.w + ut)),
          h: Math.max(ce, Math.min(le - se.y, se.h + P))
        };
      });
    },
    [W]
  ), rt = R.useCallback((k) => {
    k.stopPropagation(), te.current = null;
  }, []), et = R.useCallback(
    (k, B) => {
      B.stopPropagation(), B.currentTarget.setPointerCapture(B.pointerId), !(!b || b.kind !== "wall") && (oe.current = {
        endpoint: k,
        startPtr: { x: B.clientX, y: B.clientY },
        startPoint: { ...b[k] }
      });
    },
    [b]
  ), Qn = R.useCallback(
    (k) => {
      if (!oe.current || !A.current) return;
      k.stopPropagation();
      const { endpoint: B, startPtr: $, startPoint: se } = oe.current, pe = A.current, Re = I.current;
      if (!Re) return;
      const M = Re.getBoundingClientRect(), $e = pe.width / M.width / W, ut = (k.clientX - $.x) * $e, P = (k.clientY - $.y) * $e;
      H((ne) => !ne || ne.kind !== "wall" ? ne : {
        ...ne,
        [B]: {
          x: Math.max(0, Math.min(pe.width, se.x + ut)),
          y: Math.max(0, Math.min(pe.height, se.y + P))
        }
      });
    },
    [W]
  ), fa = R.useCallback((k) => {
    k.stopPropagation(), oe.current = null;
  }, []);
  let za = null, ma = null, zt = null;
  if (me && Ne && A.current) {
    const k = A.current.width, B = A.current.height;
    if (c === "zone") {
      const $ = Math.min(me.x, Ne.x) / k * 100, se = Math.min(me.y, Ne.y) / B * 100, pe = Math.abs(Ne.x - me.x) / k * 100, Re = Math.abs(Ne.y - me.y) / B * 100;
      za = { left: `${$}%`, top: `${se}%`, width: `${pe}%`, height: `${Re}%` };
    } else if (c === "restrictions" && h) {
      if (h.tool === "wall")
        zt = { x1: me.x, y1: me.y, x2: Ne.x, y2: Ne.y, cw: k, ch: B };
      else if (h.tool === "no_go" || h.tool === "no_mop") {
        const $ = Math.min(me.x, Ne.x) / k * 100, se = Math.min(me.y, Ne.y) / B * 100, pe = Math.abs(Ne.x - me.x) / k * 100, Re = Math.abs(Ne.y - me.y) / B * 100;
        ma = { left: `${$}%`, top: `${se}%`, width: `${pe}%`, height: `${Re}%` };
      }
    }
  }
  const Ia = c === "zone", Gi = c === "room" && !!m, Wa = c === "restrictions", Ea = h?.tool ?? "select";
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: I,
      className: `valetudo-map-canvas${Ia ? " valetudo-map-canvas--zone-mode" : ""}${Gi ? " valetudo-map-canvas--room-mode" : ""}${Wa ? ` valetudo-map-canvas--restrictions-${Ea}` : ""}`,
      onClick: Kn,
      onPointerDown: ya,
      onPointerMove: Xa,
      onPointerUp: Qa,
      onPointerCancel: Qa,
      children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "valetudo-map-canvas__inner",
            style: { transform: `translate(${Y.x}px, ${Y.y}px) scale(${W})` },
            children: [
              /* @__PURE__ */ r.jsx("canvas", { ref: A, className: "valetudo-map-canvas__canvas" }),
              za && /* @__PURE__ */ r.jsx("div", { className: "valetudo-map-canvas__zone-drag", style: za }),
              ma && /* @__PURE__ */ r.jsx(
                "div",
                {
                  className: `valetudo-map-canvas__restriction-preview valetudo-map-canvas__restriction-preview--${h?.tool}`,
                  style: ma
                }
              ),
              zt && /* @__PURE__ */ r.jsxs(
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
                  viewBox: `0 0 ${zt.cw} ${zt.ch}`,
                  preserveAspectRatio: "none",
                  children: [
                    /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        x1: zt.x1,
                        y1: zt.y1,
                        x2: zt.x2,
                        y2: zt.y2,
                        stroke: "rgba(244,67,54,0.9)",
                        strokeWidth: he * 2,
                        strokeLinecap: "round"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "circle",
                      {
                        cx: zt.x1,
                        cy: zt.y1,
                        r: he * 1.5,
                        fill: "rgba(244,67,54,0.9)"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "circle",
                      {
                        cx: zt.x2,
                        cy: zt.y2,
                        r: he * 1.5,
                        fill: "rgba(244,67,54,0.9)"
                      }
                    )
                  ]
                }
              ),
              Ia && ge && ie && Xt && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-map-canvas__widget-zone", style: Xt, children: [
                /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: "valetudo-map-canvas__widget-zone-move",
                    onPointerDown: (k) => Qt("move", k),
                    onPointerMove: xa,
                    onPointerUp: la,
                    onPointerCancel: la
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: "valetudo-map-canvas__widget-zone-resize",
                    onPointerDown: (k) => Qt("resize", k),
                    onPointerMove: xa,
                    onPointerUp: la,
                    onPointerCancel: la
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    className: "valetudo-map-canvas__widget-zone-delete",
                    onPointerDown: (k) => k.stopPropagation(),
                    onClick: (k) => {
                      k.stopPropagation(), ze(null), g?.(null);
                    },
                    type: "button",
                    children: "×"
                  }
                )
              ] }),
              Wa && ge && b?.kind === "zone" && $a && /* @__PURE__ */ r.jsxs(
                "div",
                {
                  className: `valetudo-map-canvas__pending-restriction valetudo-map-canvas__pending-restriction--${b.type}`,
                  style: $a,
                  children: [
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "valetudo-map-canvas__pending-restriction-move",
                        onPointerDown: (k) => wa("move", k),
                        onPointerMove: Xn,
                        onPointerUp: rt,
                        onPointerCancel: rt
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "valetudo-map-canvas__pending-restriction-resize",
                        onPointerDown: (k) => wa("resize", k),
                        onPointerMove: Xn,
                        onPointerUp: rt,
                        onPointerCancel: rt
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        className: "valetudo-map-canvas__pending-restriction-delete",
                        onPointerDown: (k) => k.stopPropagation(),
                        onClick: (k) => {
                          k.stopPropagation(), H(null);
                        },
                        type: "button",
                        children: "×"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        className: "valetudo-map-canvas__pending-restriction-confirm",
                        onPointerDown: (k) => k.stopPropagation(),
                        onClick: (k) => {
                          k.stopPropagation(), Sa();
                        },
                        type: "button",
                        children: "✓"
                      }
                    )
                  ]
                }
              ),
              Wa && ge && b?.kind === "wall" && Ja && (() => {
                const k = b, B = Ja;
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
                      viewBox: `0 0 ${B.cw} ${B.ch}`,
                      preserveAspectRatio: "none",
                      children: /* @__PURE__ */ r.jsx(
                        "line",
                        {
                          x1: k.pA.x,
                          y1: k.pA.y,
                          x2: k.pB.x,
                          y2: k.pB.y,
                          stroke: "rgba(244,67,54,0.9)",
                          strokeWidth: he * 2,
                          strokeLinecap: "round"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      className: "valetudo-map-canvas__wall-endpoint",
                      style: { position: "absolute", ...B.pAStyle, transform: "translate(-50%, -50%)" },
                      onPointerDown: ($) => et("pA", $),
                      onPointerMove: Qn,
                      onPointerUp: fa,
                      onPointerCancel: fa
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      className: "valetudo-map-canvas__wall-endpoint",
                      style: { position: "absolute", ...B.pBStyle, transform: "translate(-50%, -50%)" },
                      onPointerDown: ($) => et("pB", $),
                      onPointerMove: Qn,
                      onPointerUp: fa,
                      onPointerCancel: fa
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      className: "valetudo-map-canvas__wall-action-btn valetudo-map-canvas__wall-action-btn--delete",
                      style: { position: "absolute", ...B.midStyle, transform: "translate(-50%, -160%)" },
                      onPointerDown: ($) => $.stopPropagation(),
                      onClick: ($) => {
                        $.stopPropagation(), H(null);
                      },
                      type: "button",
                      children: "×"
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      className: "valetudo-map-canvas__wall-action-btn valetudo-map-canvas__wall-action-btn--confirm",
                      style: { position: "absolute", ...B.midStyle, transform: "translate(-50%, 60%)" },
                      onPointerDown: ($) => $.stopPropagation(),
                      onClick: ($) => {
                        $.stopPropagation(), Sa();
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
            onPointerDown: (k) => k.stopPropagation(),
            onPointerUp: (k) => k.stopPropagation(),
            children: [
              S && c !== "restrictions" && /* @__PURE__ */ r.jsxs(
                "button",
                {
                  type: "button",
                  className: "valetudo-map-canvas__iterations-btn",
                  title: Q("valetudo.cleaning.iterations"),
                  onClick: (k) => {
                    k.stopPropagation(), S(p >= 4 ? 1 : p + 1);
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
                    onClick: (k) => {
                      k.stopPropagation(), V((B) => Math.min(8, B * 1.5));
                    },
                    children: "+"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (k) => {
                      k.stopPropagation(), V((B) => {
                        const $ = Math.max(1, B / 1.5);
                        return $ <= 1 ? (J({ x: 0, y: 0 }), 1) : $;
                      });
                    },
                    children: "−"
                  }
                ),
                W > 1 && /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (k) => {
                      k.stopPropagation(), V(1), J({ x: 0, y: 0 });
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
const d_ = [sg, cg, rg, ug], f_ = [/* @__PURE__ */ r.jsx(rs, { size: 20 }), /* @__PURE__ */ r.jsx(W_, { size: 20 }), /* @__PURE__ */ r.jsx(i_, { size: 20 }), /* @__PURE__ */ r.jsx(i_, { size: 20 })];
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
  language: y,
  onStartMapping: v
}) {
  const { t: f } = Ye(y), p = s?.attributes?.options ?? [], S = u?.attributes?.options ?? [], C = s?.state ?? "", E = u?.state ?? "", z = S.length > 0, L = S[0] ?? "", Q = z ? E === L ? "dry" : p.indexOf(C) <= 1 ? "wet" : "both" : "dry", [A, I] = R.useState(Q), Z = A === "dry" || A === "both", G = (A === "wet" || A === "both") && z, W = (J) => {
    h || (I(J), J === "dry" && z ? m(L) : J === "wet" ? (p.length > 0 && g(p[0]), S.length > 0 && m(S[S.length - 1])) : J === "both" && (p.length > 0 && g(p[Math.floor(p.length / 2)]), S.length > 1 && m(S[Math.floor(S.length / 2)])));
  }, V = [
    { key: "dry", label: f("valetudo.cleaning.dry"), icon: $r },
    ...z ? [
      { key: "both", label: f("valetudo.cleaning.both"), icon: Di },
      { key: "wet", label: f("valetudo.cleaning.wet"), icon: Jr }
    ] : []
  ], Y = () => {
    h || !v || !window.confirm(f("valetudo.cleaning.mapping_warning_overwrite")) || !window.confirm(f("valetudo.cleaning.mapping_warning_loss")) || (v(), c());
  };
  return /* @__PURE__ */ r.jsx(Bi, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal", children: /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__content-wrapper", children: /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__content", children: [
    /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "cleaning-mode-modal__section-title", children: f("valetudo.cleaning.mode_title") }),
      /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__mode-grid", children: [
        V.map((J) => /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: `cleaning-mode-modal__mode-card${A === J.key ? " cleaning-mode-modal__mode-card--selected" : ""}`,
            onClick: () => W(J.key),
            role: "button",
            tabIndex: 0,
            onKeyDown: (ae) => ae.key === "Enter" && W(J.key),
            children: [
              /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__mode-icon", children: J.icon }),
              /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__mode-label", children: J.label }),
              A === J.key && /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__mode-checkmark", children: /* @__PURE__ */ r.jsx("span", { children: "✓" }) })
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
              /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-modal__mode-icon", children: /* @__PURE__ */ r.jsx(us, { size: 24 }) }),
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
          children: p.map((J, ae) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__power-option", children: [
            /* @__PURE__ */ r.jsx(
              Ui,
              {
                size: "small",
                selected: J === C,
                onClick: () => !h && g(J),
                icon: d_[Math.min(ae, d_.length - 1)]
              }
            ),
            /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-modal__power-label", children: m_(J) })
          ] }, J))
        }
      )
    ] }),
    G && S.length > 0 && /* @__PURE__ */ r.jsxs("section", { className: "cleaning-mode-modal__section", children: [
      /* @__PURE__ */ r.jsxs("h3", { className: "cleaning-mode-modal__section-title", children: [
        "💧 ",
        f("valetudo.cleaning.water_level")
      ] }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "cleaning-mode-modal__power-grid",
          style: { gridTemplateColumns: `repeat(${S.length}, 1fr)` },
          children: S.map((J, ae) => /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-modal__power-option", children: [
            /* @__PURE__ */ r.jsx(
              Ui,
              {
                size: "small",
                selected: J === E,
                onClick: () => !h && m(J),
                icon: f_[Math.min(ae, f_.length - 1)]
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
function Po({ label: o, entity: c, maxKey: s, onReset: u, t: g }) {
  const m = c?.state, h = m && !["unavailable", "unknown"].includes(m) ? Number(m) : null, y = I1[s] ?? 1, v = h !== null ? Math.max(0, Math.min(100, Math.round(h / y * 100))) : null, f = h !== null && h <= 0, p = v === null || v > 50 ? "var(--accent-color, #007aff)" : v > 20 ? "var(--warning-color, #ff9500)" : "var(--error-color, #ff3b30)", S = h === null ? "" : f ? g("valetudo.panel.needs_replacement") : g("valetudo.panel.remaining", { time: W1(h) });
  return /* @__PURE__ */ r.jsxs("div", { className: "consumable-row", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "consumable-row__header", children: [
      /* @__PURE__ */ r.jsx("span", { className: "consumable-row__label", children: o }),
      /* @__PURE__ */ r.jsx(
        "span",
        {
          className: `consumable-row__value${f ? " consumable-row__value--depleted" : ""}`,
          title: S,
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
  segmentsEntity: y,
  wifiEntity: v,
  mainBrushEntity: f,
  rightBrushEntity: p,
  mainFilterEntity: S,
  sensorCleaningEntity: C,
  totalStatsAreaEntity: E,
  totalStatsTimeEntity: z,
  totalStatsCountEntity: L,
  currentStatsAreaEntity: Q,
  currentStatsTimeEntity: A,
  carpetModeEntity: I,
  entityIds: Z,
  valetudoUrl: G,
  language: W
}) {
  const { t: V } = Ye(W), Y = {
    docked: V("valetudo.status.docked"),
    cleaning: V("valetudo.status.cleaning"),
    paused: V("valetudo.status.paused"),
    returning: V("valetudo.status.returning"),
    idle: V("valetudo.status.idle"),
    error: V("valetudo.status.error")
  }[u.state] ?? u.state, J = h ? Number(h.state) : null, ae = v?.attributes, ee = ae?.ssid ?? "—", re = ae?.ips?.[0] ?? "—", we = v?.state && !["unavailable", "unknown"].includes(v.state) ? `${v.state} ${V("valetudo.panel.dbm")}` : "—", me = E?.state, je = z?.state, Ne = L?.state, D = me && !["unavailable", "unknown"].includes(me) ? Number(me) : null, F = je && !["unavailable", "unknown"].includes(je) ? Number(je) : null, ie = Ne && !["unavailable", "unknown"].includes(Ne) ? Ne : null, ze = Q?.state, Ee = A?.state, b = ze && !["unavailable", "unknown"].includes(ze) ? Number(ze) : null, H = Ee && !["unavailable", "unknown"].includes(Ee) ? Number(Ee) : null, te = y ? Object.entries(y.attributes).filter(([de]) => !isNaN(Number(de))).map(([, de]) => String(de)) : [], oe = I?.state === "on", ve = (de) => {
    s.callService("button", "press", { entity_id: de });
  }, ge = () => {
    s.callService("switch", oe ? "turn_off" : "turn_on", { entity_id: Z.carpetMode });
  };
  return /* @__PURE__ */ r.jsx(Bi, { opened: o, onClose: c, children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-panel", children: [
    /* @__PURE__ */ r.jsx("h2", { className: "valetudo-settings-panel__title", children: V("valetudo.panel.title") }),
    /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-panel__scroll", children: [
      /* @__PURE__ */ r.jsx(Zt, { title: V("valetudo.panel.device"), icon: /* @__PURE__ */ r.jsx(F_, {}), defaultOpen: !0, children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section", children: [
        [
          { label: V("valetudo.panel.status"), value: Y },
          J !== null && !isNaN(J) ? { label: V("valetudo.panel.battery"), value: `${J}%` } : null,
          { label: V("valetudo.panel.wifi"), value: ee },
          { label: V("valetudo.panel.signal"), value: we },
          { label: V("valetudo.panel.ip_address"), value: re }
        ].filter(Boolean).map((de) => /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: de.label }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: de.value })
        ] }, de.label)),
        (G || re && re !== "—") && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row valetudo-settings-section__row--link", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.valetudo_ui") }),
          /* @__PURE__ */ r.jsxs(
            "a",
            {
              className: "valetudo-settings-section__link",
              href: G || `http://${re}`,
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
          Po,
          {
            label: V("valetudo.panel.main_brush"),
            entity: f,
            maxKey: "mainBrush",
            onReset: () => ve(Z.resetMainBrush),
            t: V
          }
        ),
        /* @__PURE__ */ r.jsx(
          Po,
          {
            label: V("valetudo.panel.side_brush"),
            entity: p,
            maxKey: "rightBrush",
            onReset: () => ve(Z.resetRightBrush),
            t: V
          }
        ),
        /* @__PURE__ */ r.jsx(
          Po,
          {
            label: V("valetudo.panel.filter"),
            entity: S,
            maxKey: "mainFilter",
            onReset: () => ve(Z.resetMainFilter),
            t: V
          }
        ),
        /* @__PURE__ */ r.jsx(
          Po,
          {
            label: V("valetudo.panel.sensors"),
            entity: C,
            maxKey: "sensorCleaning",
            onReset: () => ve(Z.resetSensorCleaning),
            t: V
          }
        )
      ] }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: V("valetudo.panel.statistics"), icon: /* @__PURE__ */ r.jsx(M0, {}), children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section", children: [
        ie !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.total_cleanings") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: ie })
        ] }),
        D !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.total_area") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: g_(D) })
        ] }),
        F !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.total_time") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: __(F) })
        ] }),
        (b !== null || H !== null) && /* @__PURE__ */ r.jsx("div", { className: "valetudo-settings-section__divider" }),
        b !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.current_area") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: g_(b) })
        ] }),
        H !== null && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.current_time") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value", children: __(H) })
        ] })
      ] }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: V("valetudo.panel.cleaning_settings"), icon: /* @__PURE__ */ r.jsx(eg, {}), children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section", children: [
        I && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row valetudo-settings-section__row--toggle", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: V("valetudo.panel.carpet_mode") }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: `valetudo-toggle${oe ? " valetudo-toggle--on" : ""}`,
              onClick: ge,
              type: "button",
              "aria-label": V("valetudo.panel.carpet_mode"),
              "aria-pressed": oe,
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
      te.length > 0 && /* @__PURE__ */ r.jsx(Zt, { title: V("valetudo.panel.rooms"), icon: /* @__PURE__ */ r.jsx(P_, {}), children: /* @__PURE__ */ r.jsx("div", { className: "valetudo-settings-section", children: te.map((de, Pe) => /* @__PURE__ */ r.jsx("div", { className: "valetudo-settings-section__row", children: /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label", children: de }) }, Pe)) }) }),
      /* @__PURE__ */ r.jsx(Zt, { title: V("valetudo.panel.configuration"), icon: /* @__PURE__ */ r.jsx(B0, {}), children: /* @__PURE__ */ r.jsx("div", { className: "valetudo-settings-section", children: Object.entries(Z).map(([de, Pe]) => /* @__PURE__ */ r.jsxs("div", { className: "valetudo-settings-section__row", children: [
        /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__label valetudo-settings-section__label--mono", children: de }),
        /* @__PURE__ */ r.jsx("span", { className: "valetudo-settings-section__value valetudo-settings-section__value--mono", children: Pe })
      ] }, de)) }) })
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
  const { t: h } = Ye(m), { tool: y, selectedId: v, dirty: f } = o, p = [
    { key: "select", label: h("valetudo.restrictions.select"), icon: /* @__PURE__ */ r.jsx(lv, { size: 14 }) },
    { key: "wall", label: h("valetudo.restrictions.wall"), icon: /* @__PURE__ */ r.jsx(nv, { size: 14 }) },
    { key: "no_go", label: h("valetudo.restrictions.no_go"), icon: /* @__PURE__ */ r.jsx(Uv, { size: 14 }) },
    { key: "no_mop", label: h("valetudo.restrictions.no_mop"), icon: /* @__PURE__ */ r.jsx(W_, { size: 14 }) }
  ];
  return /* @__PURE__ */ r.jsxs("div", { className: "rt", children: [
    /* @__PURE__ */ r.jsx("div", { className: "rt__seg", children: p.map((S) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        className: `rt__seg-btn rt__seg-btn--${S.key}${y === S.key ? " rt__seg-btn--active" : ""}`,
        onClick: () => c(S.key),
        title: S.label,
        children: [
          S.icon,
          /* @__PURE__ */ r.jsx("span", { children: S.label })
        ]
      },
      S.key
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
  const { t: g } = Ye(u), m = R.useCallback(() => {
    o.callService("vacuum", "start", { entity_id: c.vacuum }), s?.(g("toast.starting_full_clean"));
  }, [o, c.vacuum, s, g]), h = R.useCallback(() => {
    o.callService("vacuum", "pause", { entity_id: c.vacuum }), s?.(g("toast.pausing_vacuum"));
  }, [o, c.vacuum, s, g]), y = R.useCallback(() => {
    o.callService("vacuum", "stop", { entity_id: c.vacuum }), o.callService("vacuum", "return_to_base", { entity_id: c.vacuum }), s?.(g("toast.stopping_vacuum"));
  }, [o, c.vacuum, s, g]), v = R.useCallback(() => {
    o.callService("vacuum", "return_to_base", { entity_id: c.vacuum }), s?.(g("toast.vacuum_docking"));
  }, [o, c.vacuum, s, g]), f = R.useCallback(() => {
    o.callService("vacuum", "start", { entity_id: c.vacuum });
  }, [o, c.vacuum]), p = R.useCallback(
    (z, L, Q = 1) => {
      const A = c.mqttIdentifier;
      if (!A) {
        s?.("⚠️ Добавь valetudo_identifier в конфиг карты (например: HarshSillyPigeon)");
        return;
      }
      o.callService("mqtt", "publish", {
        topic: `valetudo/${A}/MapSegmentationCapability/clean/set`,
        payload: JSON.stringify({
          segment_ids: z.map(String),
          iterations: Q,
          customOrder: !1
        }),
        retain: !1
      }), s?.(g(L === 1 ? "toast.starting_room_clean" : "toast.starting_room_clean_plural", { count: String(L) }));
    },
    [o, c.mqttIdentifier, s, g]
  ), S = R.useCallback(
    (z) => {
      o.callService("select", "select_option", {
        entity_id: c.fan,
        option: z
      });
    },
    [o, c.fan]
  ), C = R.useCallback(
    (z) => {
      o.callService("select", "select_option", {
        entity_id: c.water,
        option: z
      });
    },
    [o, c.water]
  ), E = R.useCallback(
    (z, L, Q, A = 1) => {
      switch (z) {
        case "all":
          m();
          break;
        case "room":
          L.size > 0 ? p(Array.from(L.keys()), L.size, A) : s?.(g("toast.select_rooms_first"));
          break;
        case "zone":
          if (Q) {
            const I = c.mqttIdentifier;
            if (!I) {
              s?.("⚠️ Добавь valetudo_identifier в конфиг карты (например: HarshSillyPigeon)");
              break;
            }
            const { x1: Z, y1: G, x2: W, y2: V } = Q, Y = Math.round(Math.min(Z, W)), J = Math.round(Math.max(Z, W)), ae = Math.round(Math.min(G, V)), ee = Math.round(Math.max(G, V)), re = J - Y, we = ee - ae, me = {
              zones: [
                {
                  points: {
                    pA: { x: Y, y: ae },
                    pB: { x: J, y: ae },
                    pC: { x: J, y: ee },
                    pD: { x: Y, y: ee }
                  }
                }
              ],
              iterations: A
            };
            console.log("[Valetudo] Zone payload:", JSON.stringify(me)), o.callService("mqtt", "publish", {
              topic: `valetudo/${I}/ZoneCleaningCapability/start/set`,
              payload: JSON.stringify(me),
              retain: !1
            }), s?.(`Уборка зоны запущена (${re}×${we}мм, ${A}×)`);
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
    handleStop: y,
    handleDock: v,
    handleResume: f,
    handleCleanSegments: p,
    handleSetFanSpeed: S,
    handleSetWater: C,
    handleClean: E
  };
}
function Li(o) {
  let c = o.length;
  for (; --c >= 0; )
    o[c] = 0;
}
const ty = 3, ay = 258, yg = 29, ny = 256, iy = ny + 1 + yg, xg = 30, ly = 512, oy = new Array((iy + 2) * 2);
Li(oy);
const sy = new Array(xg * 2);
Li(sy);
const cy = new Array(ly);
Li(cy);
const ry = new Array(ay - ty + 1);
Li(ry);
const uy = new Array(yg);
Li(uy);
const dy = new Array(xg);
Li(dy);
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
var qr = fy;
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
var va = gy, Yr = {
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
const Dl = new Uint8Array(256);
for (let o = 0; o < 256; o++)
  Dl[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;
Dl[254] = Dl[254] = 1;
var by = (o) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(o);
  let c, s, u, g, m, h = o.length, y = 0;
  for (g = 0; g < h; g++)
    s = o.charCodeAt(g), (s & 64512) === 55296 && g + 1 < h && (u = o.charCodeAt(g + 1), (u & 64512) === 56320 && (s = 65536 + (s - 55296 << 10) + (u - 56320), g++)), y += s < 128 ? 1 : s < 2048 ? 2 : s < 65536 ? 3 : 4;
  for (c = new Uint8Array(y), m = 0, g = 0; m < y; g++)
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
    let y = Dl[h];
    if (y > 4) {
      m[g++] = 65533, u += y - 1;
      continue;
    }
    for (h &= y === 2 ? 31 : y === 3 ? 15 : 7; y > 1 && u < s; )
      h = h << 6 | o[u++] & 63, y--;
    if (y > 1) {
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
  return s < 0 || s === 0 ? c : s + Dl[o[s]] > c ? s : c;
}, Zr = {
  string2buf: by,
  buf2string: xy,
  utf8border: Sy
};
function wy() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var zy = wy;
const es = 16209, Ey = 16191;
var Ny = function(c, s) {
  let u, g, m, h, y, v, f, p, S, C, E, z, L, Q, A, I, Z, G, W, V, Y, J, ae, ee;
  const re = c.state;
  u = c.next_in, ae = c.input, g = u + (c.avail_in - 5), m = c.next_out, ee = c.output, h = m - (s - c.avail_out), y = m + (c.avail_out - 257), v = re.dmax, f = re.wsize, p = re.whave, S = re.wnext, C = re.window, E = re.hold, z = re.bits, L = re.lencode, Q = re.distcode, A = (1 << re.lenbits) - 1, I = (1 << re.distbits) - 1;
  e:
    do {
      z < 15 && (E += ae[u++] << z, z += 8, E += ae[u++] << z, z += 8), Z = L[E & A];
      t:
        for (; ; ) {
          if (G = Z >>> 24, E >>>= G, z -= G, G = Z >>> 16 & 255, G === 0)
            ee[m++] = Z & 65535;
          else if (G & 16) {
            W = Z & 65535, G &= 15, G && (z < G && (E += ae[u++] << z, z += 8), W += E & (1 << G) - 1, E >>>= G, z -= G), z < 15 && (E += ae[u++] << z, z += 8, E += ae[u++] << z, z += 8), Z = Q[E & I];
            a:
              for (; ; ) {
                if (G = Z >>> 24, E >>>= G, z -= G, G = Z >>> 16 & 255, G & 16) {
                  if (V = Z & 65535, G &= 15, z < G && (E += ae[u++] << z, z += 8, z < G && (E += ae[u++] << z, z += 8)), V += E & (1 << G) - 1, V > v) {
                    c.msg = "invalid distance too far back", re.mode = es;
                    break e;
                  }
                  if (E >>>= G, z -= G, G = m - h, V > G) {
                    if (G = V - G, G > p && re.sane) {
                      c.msg = "invalid distance too far back", re.mode = es;
                      break e;
                    }
                    if (Y = 0, J = C, S === 0) {
                      if (Y += f - G, G < W) {
                        W -= G;
                        do
                          ee[m++] = C[Y++];
                        while (--G);
                        Y = m - V, J = ee;
                      }
                    } else if (S < G) {
                      if (Y += f + S - G, G -= S, G < W) {
                        W -= G;
                        do
                          ee[m++] = C[Y++];
                        while (--G);
                        if (Y = 0, S < W) {
                          G = S, W -= G;
                          do
                            ee[m++] = C[Y++];
                          while (--G);
                          Y = m - V, J = ee;
                        }
                      }
                    } else if (Y += S - G, G < W) {
                      W -= G;
                      do
                        ee[m++] = C[Y++];
                      while (--G);
                      Y = m - V, J = ee;
                    }
                    for (; W > 2; )
                      ee[m++] = J[Y++], ee[m++] = J[Y++], ee[m++] = J[Y++], W -= 3;
                    W && (ee[m++] = J[Y++], W > 1 && (ee[m++] = J[Y++]));
                  } else {
                    Y = m - V;
                    do
                      ee[m++] = ee[Y++], ee[m++] = ee[Y++], ee[m++] = ee[Y++], W -= 3;
                    while (W > 2);
                    W && (ee[m++] = ee[Y++], W > 1 && (ee[m++] = ee[Y++]));
                  }
                } else if ((G & 64) === 0) {
                  Z = Q[(Z & 65535) + (E & (1 << G) - 1)];
                  continue a;
                } else {
                  c.msg = "invalid distance code", re.mode = es;
                  break e;
                }
                break;
              }
          } else if ((G & 64) === 0) {
            Z = L[(Z & 65535) + (E & (1 << G) - 1)];
            continue t;
          } else if (G & 32) {
            re.mode = Ey;
            break e;
          } else {
            c.msg = "invalid literal/length code", re.mode = es;
            break e;
          }
          break;
        }
    } while (u < g && m < y);
  W = z >> 3, u -= W, z -= W << 3, E &= (1 << z) - 1, c.next_in = u, c.next_out = m, c.avail_in = u < g ? 5 + (g - u) : 5 - (u - g), c.avail_out = m < y ? 257 + (y - m) : 257 - (m - y), re.hold = E, re.bits = z;
};
const Ri = 15, p_ = 852, h_ = 592, v_ = 0, Or = 1, b_ = 2, My = new Uint16Array([
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
]), jy = (o, c, s, u, g, m, h, y) => {
  const v = y.bits;
  let f = 0, p = 0, S = 0, C = 0, E = 0, z = 0, L = 0, Q = 0, A = 0, I = 0, Z, G, W, V, Y, J = null, ae;
  const ee = new Uint16Array(Ri + 1), re = new Uint16Array(Ri + 1);
  let we = null, me, je, Ne;
  for (f = 0; f <= Ri; f++)
    ee[f] = 0;
  for (p = 0; p < u; p++)
    ee[c[s + p]]++;
  for (E = v, C = Ri; C >= 1 && ee[C] === 0; C--)
    ;
  if (E > C && (E = C), C === 0)
    return g[m++] = 1 << 24 | 64 << 16 | 0, g[m++] = 1 << 24 | 64 << 16 | 0, y.bits = 1, 0;
  for (S = 1; S < C && ee[S] === 0; S++)
    ;
  for (E < S && (E = S), Q = 1, f = 1; f <= Ri; f++)
    if (Q <<= 1, Q -= ee[f], Q < 0)
      return -1;
  if (Q > 0 && (o === v_ || C !== 1))
    return -1;
  for (re[1] = 0, f = 1; f < Ri; f++)
    re[f + 1] = re[f] + ee[f];
  for (p = 0; p < u; p++)
    c[s + p] !== 0 && (h[re[c[s + p]]++] = p);
  if (o === v_ ? (J = we = h, ae = 20) : o === Or ? (J = My, we = ky, ae = 257) : (J = Ay, we = Cy, ae = 0), I = 0, p = 0, f = S, Y = m, z = E, L = 0, W = -1, A = 1 << E, V = A - 1, o === Or && A > p_ || o === b_ && A > h_)
    return 1;
  for (; ; ) {
    me = f - L, h[p] + 1 < ae ? (je = 0, Ne = h[p]) : h[p] >= ae ? (je = we[h[p] - ae], Ne = J[h[p] - ae]) : (je = 96, Ne = 0), Z = 1 << f - L, G = 1 << z, S = G;
    do
      G -= Z, g[Y + (I >> L) + G] = me << 24 | je << 16 | Ne | 0;
    while (G !== 0);
    for (Z = 1 << f - 1; I & Z; )
      Z >>= 1;
    if (Z !== 0 ? (I &= Z - 1, I += Z) : I = 0, p++, --ee[f] === 0) {
      if (f === C)
        break;
      f = c[s + h[p]];
    }
    if (f > E && (I & V) !== W) {
      for (L === 0 && (L = E), Y += S, z = f - L, Q = 1 << z; z + L < C && (Q -= ee[z + L], !(Q <= 0)); )
        z++, Q <<= 1;
      if (A += 1 << z, o === Or && A > p_ || o === b_ && A > h_)
        return 1;
      W = I & V, g[W] = E << 24 | z << 16 | Y - m | 0;
    }
  }
  return I !== 0 && (g[Y + I] = f - L << 24 | 64 << 16 | 0), y.bits = E, 0;
};
var Rl = jy;
const Ty = 0, Eg = 1, Ng = 2, {
  Z_FINISH: y_,
  Z_BLOCK: Oy,
  Z_TREES: ts,
  Z_OK: Yn,
  Z_STREAM_END: Ry,
  Z_NEED_DICT: Dy,
  Z_STREAM_ERROR: ia,
  Z_DATA_ERROR: Mg,
  Z_MEM_ERROR: kg,
  Z_BUF_ERROR: Uy,
  Z_DEFLATED: x_
} = Sg, ds = 16180, S_ = 16181, w_ = 16182, z_ = 16183, E_ = 16184, N_ = 16185, M_ = 16186, k_ = 16187, A_ = 16188, C_ = 16189, cs = 16190, Za = 16191, Rr = 16192, j_ = 16193, Dr = 16194, T_ = 16195, O_ = 16196, R_ = 16197, D_ = 16198, as = 16199, ns = 16200, U_ = 16201, B_ = 16202, L_ = 16203, G_ = 16204, H_ = 16205, Ur = 16206, V_ = 16207, q_ = 16208, it = 16209, Ag = 16210, Cg = 16211, By = 852, Ly = 592, Gy = 15, Hy = Gy, Y_ = (o) => (o >>> 24 & 255) + (o >>> 8 & 65280) + ((o & 65280) << 8) + ((o & 255) << 24);
function Vy() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const Zn = (o) => {
  if (!o)
    return 1;
  const c = o.state;
  return !c || c.strm !== o || c.mode < ds || c.mode > Cg ? 1 : 0;
}, jg = (o) => {
  if (Zn(o))
    return ia;
  const c = o.state;
  return o.total_in = o.total_out = c.total = 0, o.msg = "", c.wrap && (o.adler = c.wrap & 1), c.mode = ds, c.last = 0, c.havedict = 0, c.flags = -1, c.dmax = 32768, c.head = null, c.hold = 0, c.bits = 0, c.lencode = c.lendyn = new Int32Array(By), c.distcode = c.distdyn = new Int32Array(Ly), c.sane = 1, c.back = -1, Yn;
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
  o.state = s, s.strm = o, s.window = null, s.mode = ds;
  const u = Og(o, c);
  return u !== Yn && (o.state = null), u;
}, qy = (o) => Rg(o, Hy);
let Z_ = !0, Br, Lr;
const Yy = (o) => {
  if (Z_) {
    Br = new Int32Array(512), Lr = new Int32Array(32);
    let c = 0;
    for (; c < 144; )
      o.lens[c++] = 8;
    for (; c < 256; )
      o.lens[c++] = 9;
    for (; c < 280; )
      o.lens[c++] = 7;
    for (; c < 288; )
      o.lens[c++] = 8;
    for (Rl(Eg, o.lens, 0, 288, Br, 0, o.work, { bits: 9 }), c = 0; c < 32; )
      o.lens[c++] = 5;
    Rl(Ng, o.lens, 0, 32, Lr, 0, o.work, { bits: 5 }), Z_ = !1;
  }
  o.lencode = Br, o.lenbits = 9, o.distcode = Lr, o.distbits = 5;
}, Dg = (o, c, s, u) => {
  let g;
  const m = o.state;
  return m.window === null && (m.wsize = 1 << m.wbits, m.wnext = 0, m.whave = 0, m.window = new Uint8Array(m.wsize)), u >= m.wsize ? (m.window.set(c.subarray(s - m.wsize, s), 0), m.wnext = 0, m.whave = m.wsize) : (g = m.wsize - m.wnext, g > u && (g = u), m.window.set(c.subarray(s - u, s - u + g), m.wnext), u -= g, u ? (m.window.set(c.subarray(s - u, s), 0), m.wnext = u, m.whave = m.wsize) : (m.wnext += g, m.wnext === m.wsize && (m.wnext = 0), m.whave < m.wsize && (m.whave += g))), 0;
}, Zy = (o, c) => {
  let s, u, g, m, h, y, v, f, p, S, C, E, z, L, Q = 0, A, I, Z, G, W, V, Y, J;
  const ae = new Uint8Array(4);
  let ee, re;
  const we = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (Zn(o) || !o.output || !o.input && o.avail_in !== 0)
    return ia;
  s = o.state, s.mode === Za && (s.mode = Rr), h = o.next_out, g = o.output, v = o.avail_out, m = o.next_in, u = o.input, y = o.avail_in, f = s.hold, p = s.bits, S = y, C = v, J = Yn;
  e:
    for (; ; )
      switch (s.mode) {
        case ds:
          if (s.wrap === 0) {
            s.mode = Rr;
            break;
          }
          for (; p < 16; ) {
            if (y === 0)
              break e;
            y--, f += u[m++] << p, p += 8;
          }
          if (s.wrap & 2 && f === 35615) {
            s.wbits === 0 && (s.wbits = 15), s.check = 0, ae[0] = f & 255, ae[1] = f >>> 8 & 255, s.check = va(s.check, ae, 2, 0), f = 0, p = 0, s.mode = S_;
            break;
          }
          if (s.head && (s.head.done = !1), !(s.wrap & 1) || /* check if zlib header allowed */
          (((f & 255) << 8) + (f >> 8)) % 31) {
            o.msg = "incorrect header check", s.mode = it;
            break;
          }
          if ((f & 15) !== x_) {
            o.msg = "unknown compression method", s.mode = it;
            break;
          }
          if (f >>>= 4, p -= 4, Y = (f & 15) + 8, s.wbits === 0 && (s.wbits = Y), Y > 15 || Y > s.wbits) {
            o.msg = "invalid window size", s.mode = it;
            break;
          }
          s.dmax = 1 << s.wbits, s.flags = 0, o.adler = s.check = 1, s.mode = f & 512 ? C_ : Za, f = 0, p = 0;
          break;
        case S_:
          for (; p < 16; ) {
            if (y === 0)
              break e;
            y--, f += u[m++] << p, p += 8;
          }
          if (s.flags = f, (s.flags & 255) !== x_) {
            o.msg = "unknown compression method", s.mode = it;
            break;
          }
          if (s.flags & 57344) {
            o.msg = "unknown header flags set", s.mode = it;
            break;
          }
          s.head && (s.head.text = f >> 8 & 1), s.flags & 512 && s.wrap & 4 && (ae[0] = f & 255, ae[1] = f >>> 8 & 255, s.check = va(s.check, ae, 2, 0)), f = 0, p = 0, s.mode = w_;
        /* falls through */
        case w_:
          for (; p < 32; ) {
            if (y === 0)
              break e;
            y--, f += u[m++] << p, p += 8;
          }
          s.head && (s.head.time = f), s.flags & 512 && s.wrap & 4 && (ae[0] = f & 255, ae[1] = f >>> 8 & 255, ae[2] = f >>> 16 & 255, ae[3] = f >>> 24 & 255, s.check = va(s.check, ae, 4, 0)), f = 0, p = 0, s.mode = z_;
        /* falls through */
        case z_:
          for (; p < 16; ) {
            if (y === 0)
              break e;
            y--, f += u[m++] << p, p += 8;
          }
          s.head && (s.head.xflags = f & 255, s.head.os = f >> 8), s.flags & 512 && s.wrap & 4 && (ae[0] = f & 255, ae[1] = f >>> 8 & 255, s.check = va(s.check, ae, 2, 0)), f = 0, p = 0, s.mode = E_;
        /* falls through */
        case E_:
          if (s.flags & 1024) {
            for (; p < 16; ) {
              if (y === 0)
                break e;
              y--, f += u[m++] << p, p += 8;
            }
            s.length = f, s.head && (s.head.extra_len = f), s.flags & 512 && s.wrap & 4 && (ae[0] = f & 255, ae[1] = f >>> 8 & 255, s.check = va(s.check, ae, 2, 0)), f = 0, p = 0;
          } else s.head && (s.head.extra = null);
          s.mode = N_;
        /* falls through */
        case N_:
          if (s.flags & 1024 && (E = s.length, E > y && (E = y), E && (s.head && (Y = s.head.extra_len - s.length, s.head.extra || (s.head.extra = new Uint8Array(s.head.extra_len)), s.head.extra.set(
            u.subarray(
              m,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              m + E
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            Y
          )), s.flags & 512 && s.wrap & 4 && (s.check = va(s.check, u, E, m)), y -= E, m += E, s.length -= E), s.length))
            break e;
          s.length = 0, s.mode = M_;
        /* falls through */
        case M_:
          if (s.flags & 2048) {
            if (y === 0)
              break e;
            E = 0;
            do
              Y = u[m + E++], s.head && Y && s.length < 65536 && (s.head.name += String.fromCharCode(Y));
            while (Y && E < y);
            if (s.flags & 512 && s.wrap & 4 && (s.check = va(s.check, u, E, m)), y -= E, m += E, Y)
              break e;
          } else s.head && (s.head.name = null);
          s.length = 0, s.mode = k_;
        /* falls through */
        case k_:
          if (s.flags & 4096) {
            if (y === 0)
              break e;
            E = 0;
            do
              Y = u[m + E++], s.head && Y && s.length < 65536 && (s.head.comment += String.fromCharCode(Y));
            while (Y && E < y);
            if (s.flags & 512 && s.wrap & 4 && (s.check = va(s.check, u, E, m)), y -= E, m += E, Y)
              break e;
          } else s.head && (s.head.comment = null);
          s.mode = A_;
        /* falls through */
        case A_:
          if (s.flags & 512) {
            for (; p < 16; ) {
              if (y === 0)
                break e;
              y--, f += u[m++] << p, p += 8;
            }
            if (s.wrap & 4 && f !== (s.check & 65535)) {
              o.msg = "header crc mismatch", s.mode = it;
              break;
            }
            f = 0, p = 0;
          }
          s.head && (s.head.hcrc = s.flags >> 9 & 1, s.head.done = !0), o.adler = s.check = 0, s.mode = Za;
          break;
        case C_:
          for (; p < 32; ) {
            if (y === 0)
              break e;
            y--, f += u[m++] << p, p += 8;
          }
          o.adler = s.check = Y_(f), f = 0, p = 0, s.mode = cs;
        /* falls through */
        case cs:
          if (s.havedict === 0)
            return o.next_out = h, o.avail_out = v, o.next_in = m, o.avail_in = y, s.hold = f, s.bits = p, Dy;
          o.adler = s.check = 1, s.mode = Za;
        /* falls through */
        case Za:
          if (c === Oy || c === ts)
            break e;
        /* falls through */
        case Rr:
          if (s.last) {
            f >>>= p & 7, p -= p & 7, s.mode = Ur;
            break;
          }
          for (; p < 3; ) {
            if (y === 0)
              break e;
            y--, f += u[m++] << p, p += 8;
          }
          switch (s.last = f & 1, f >>>= 1, p -= 1, f & 3) {
            case 0:
              s.mode = j_;
              break;
            case 1:
              if (Yy(s), s.mode = as, c === ts) {
                f >>>= 2, p -= 2;
                break e;
              }
              break;
            case 2:
              s.mode = O_;
              break;
            case 3:
              o.msg = "invalid block type", s.mode = it;
          }
          f >>>= 2, p -= 2;
          break;
        case j_:
          for (f >>>= p & 7, p -= p & 7; p < 32; ) {
            if (y === 0)
              break e;
            y--, f += u[m++] << p, p += 8;
          }
          if ((f & 65535) !== (f >>> 16 ^ 65535)) {
            o.msg = "invalid stored block lengths", s.mode = it;
            break;
          }
          if (s.length = f & 65535, f = 0, p = 0, s.mode = Dr, c === ts)
            break e;
        /* falls through */
        case Dr:
          s.mode = T_;
        /* falls through */
        case T_:
          if (E = s.length, E) {
            if (E > y && (E = y), E > v && (E = v), E === 0)
              break e;
            g.set(u.subarray(m, m + E), h), y -= E, m += E, v -= E, h += E, s.length -= E;
            break;
          }
          s.mode = Za;
          break;
        case O_:
          for (; p < 14; ) {
            if (y === 0)
              break e;
            y--, f += u[m++] << p, p += 8;
          }
          if (s.nlen = (f & 31) + 257, f >>>= 5, p -= 5, s.ndist = (f & 31) + 1, f >>>= 5, p -= 5, s.ncode = (f & 15) + 4, f >>>= 4, p -= 4, s.nlen > 286 || s.ndist > 30) {
            o.msg = "too many length or distance symbols", s.mode = it;
            break;
          }
          s.have = 0, s.mode = R_;
        /* falls through */
        case R_:
          for (; s.have < s.ncode; ) {
            for (; p < 3; ) {
              if (y === 0)
                break e;
              y--, f += u[m++] << p, p += 8;
            }
            s.lens[we[s.have++]] = f & 7, f >>>= 3, p -= 3;
          }
          for (; s.have < 19; )
            s.lens[we[s.have++]] = 0;
          if (s.lencode = s.lendyn, s.lenbits = 7, ee = { bits: s.lenbits }, J = Rl(Ty, s.lens, 0, 19, s.lencode, 0, s.work, ee), s.lenbits = ee.bits, J) {
            o.msg = "invalid code lengths set", s.mode = it;
            break;
          }
          s.have = 0, s.mode = D_;
        /* falls through */
        case D_:
          for (; s.have < s.nlen + s.ndist; ) {
            for (; Q = s.lencode[f & (1 << s.lenbits) - 1], A = Q >>> 24, I = Q >>> 16 & 255, Z = Q & 65535, !(A <= p); ) {
              if (y === 0)
                break e;
              y--, f += u[m++] << p, p += 8;
            }
            if (Z < 16)
              f >>>= A, p -= A, s.lens[s.have++] = Z;
            else {
              if (Z === 16) {
                for (re = A + 2; p < re; ) {
                  if (y === 0)
                    break e;
                  y--, f += u[m++] << p, p += 8;
                }
                if (f >>>= A, p -= A, s.have === 0) {
                  o.msg = "invalid bit length repeat", s.mode = it;
                  break;
                }
                Y = s.lens[s.have - 1], E = 3 + (f & 3), f >>>= 2, p -= 2;
              } else if (Z === 17) {
                for (re = A + 3; p < re; ) {
                  if (y === 0)
                    break e;
                  y--, f += u[m++] << p, p += 8;
                }
                f >>>= A, p -= A, Y = 0, E = 3 + (f & 7), f >>>= 3, p -= 3;
              } else {
                for (re = A + 7; p < re; ) {
                  if (y === 0)
                    break e;
                  y--, f += u[m++] << p, p += 8;
                }
                f >>>= A, p -= A, Y = 0, E = 11 + (f & 127), f >>>= 7, p -= 7;
              }
              if (s.have + E > s.nlen + s.ndist) {
                o.msg = "invalid bit length repeat", s.mode = it;
                break;
              }
              for (; E--; )
                s.lens[s.have++] = Y;
            }
          }
          if (s.mode === it)
            break;
          if (s.lens[256] === 0) {
            o.msg = "invalid code -- missing end-of-block", s.mode = it;
            break;
          }
          if (s.lenbits = 9, ee = { bits: s.lenbits }, J = Rl(Eg, s.lens, 0, s.nlen, s.lencode, 0, s.work, ee), s.lenbits = ee.bits, J) {
            o.msg = "invalid literal/lengths set", s.mode = it;
            break;
          }
          if (s.distbits = 6, s.distcode = s.distdyn, ee = { bits: s.distbits }, J = Rl(Ng, s.lens, s.nlen, s.ndist, s.distcode, 0, s.work, ee), s.distbits = ee.bits, J) {
            o.msg = "invalid distances set", s.mode = it;
            break;
          }
          if (s.mode = as, c === ts)
            break e;
        /* falls through */
        case as:
          s.mode = ns;
        /* falls through */
        case ns:
          if (y >= 6 && v >= 258) {
            o.next_out = h, o.avail_out = v, o.next_in = m, o.avail_in = y, s.hold = f, s.bits = p, Ny(o, C), h = o.next_out, g = o.output, v = o.avail_out, m = o.next_in, u = o.input, y = o.avail_in, f = s.hold, p = s.bits, s.mode === Za && (s.back = -1);
            break;
          }
          for (s.back = 0; Q = s.lencode[f & (1 << s.lenbits) - 1], A = Q >>> 24, I = Q >>> 16 & 255, Z = Q & 65535, !(A <= p); ) {
            if (y === 0)
              break e;
            y--, f += u[m++] << p, p += 8;
          }
          if (I && (I & 240) === 0) {
            for (G = A, W = I, V = Z; Q = s.lencode[V + ((f & (1 << G + W) - 1) >> G)], A = Q >>> 24, I = Q >>> 16 & 255, Z = Q & 65535, !(G + A <= p); ) {
              if (y === 0)
                break e;
              y--, f += u[m++] << p, p += 8;
            }
            f >>>= G, p -= G, s.back += G;
          }
          if (f >>>= A, p -= A, s.back += A, s.length = Z, I === 0) {
            s.mode = H_;
            break;
          }
          if (I & 32) {
            s.back = -1, s.mode = Za;
            break;
          }
          if (I & 64) {
            o.msg = "invalid literal/length code", s.mode = it;
            break;
          }
          s.extra = I & 15, s.mode = U_;
        /* falls through */
        case U_:
          if (s.extra) {
            for (re = s.extra; p < re; ) {
              if (y === 0)
                break e;
              y--, f += u[m++] << p, p += 8;
            }
            s.length += f & (1 << s.extra) - 1, f >>>= s.extra, p -= s.extra, s.back += s.extra;
          }
          s.was = s.length, s.mode = B_;
        /* falls through */
        case B_:
          for (; Q = s.distcode[f & (1 << s.distbits) - 1], A = Q >>> 24, I = Q >>> 16 & 255, Z = Q & 65535, !(A <= p); ) {
            if (y === 0)
              break e;
            y--, f += u[m++] << p, p += 8;
          }
          if ((I & 240) === 0) {
            for (G = A, W = I, V = Z; Q = s.distcode[V + ((f & (1 << G + W) - 1) >> G)], A = Q >>> 24, I = Q >>> 16 & 255, Z = Q & 65535, !(G + A <= p); ) {
              if (y === 0)
                break e;
              y--, f += u[m++] << p, p += 8;
            }
            f >>>= G, p -= G, s.back += G;
          }
          if (f >>>= A, p -= A, s.back += A, I & 64) {
            o.msg = "invalid distance code", s.mode = it;
            break;
          }
          s.offset = Z, s.extra = I & 15, s.mode = L_;
        /* falls through */
        case L_:
          if (s.extra) {
            for (re = s.extra; p < re; ) {
              if (y === 0)
                break e;
              y--, f += u[m++] << p, p += 8;
            }
            s.offset += f & (1 << s.extra) - 1, f >>>= s.extra, p -= s.extra, s.back += s.extra;
          }
          if (s.offset > s.dmax) {
            o.msg = "invalid distance too far back", s.mode = it;
            break;
          }
          s.mode = G_;
        /* falls through */
        case G_:
          if (v === 0)
            break e;
          if (E = C - v, s.offset > E) {
            if (E = s.offset - E, E > s.whave && s.sane) {
              o.msg = "invalid distance too far back", s.mode = it;
              break;
            }
            E > s.wnext ? (E -= s.wnext, z = s.wsize - E) : z = s.wnext - E, E > s.length && (E = s.length), L = s.window;
          } else
            L = g, z = h - s.offset, E = s.length;
          E > v && (E = v), v -= E, s.length -= E;
          do
            g[h++] = L[z++];
          while (--E);
          s.length === 0 && (s.mode = ns);
          break;
        case H_:
          if (v === 0)
            break e;
          g[h++] = s.length, v--, s.mode = ns;
          break;
        case Ur:
          if (s.wrap) {
            for (; p < 32; ) {
              if (y === 0)
                break e;
              y--, f |= u[m++] << p, p += 8;
            }
            if (C -= v, o.total_out += C, s.total += C, s.wrap & 4 && C && (o.adler = s.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            s.flags ? va(s.check, g, C, h - C) : qr(s.check, g, C, h - C)), C = v, s.wrap & 4 && (s.flags ? f : Y_(f)) !== s.check) {
              o.msg = "incorrect data check", s.mode = it;
              break;
            }
            f = 0, p = 0;
          }
          s.mode = V_;
        /* falls through */
        case V_:
          if (s.wrap && s.flags) {
            for (; p < 32; ) {
              if (y === 0)
                break e;
              y--, f += u[m++] << p, p += 8;
            }
            if (s.wrap & 4 && f !== (s.total & 4294967295)) {
              o.msg = "incorrect length check", s.mode = it;
              break;
            }
            f = 0, p = 0;
          }
          s.mode = q_;
        /* falls through */
        case q_:
          J = Ry;
          break e;
        case it:
          J = Mg;
          break e;
        case Ag:
          return kg;
        case Cg:
        /* falls through */
        default:
          return ia;
      }
  return o.next_out = h, o.avail_out = v, o.next_in = m, o.avail_in = y, s.hold = f, s.bits = p, (s.wsize || C !== o.avail_out && s.mode < it && (s.mode < Ur || c !== y_)) && Dg(o, o.output, o.next_out, C - o.avail_out), S -= o.avail_in, C -= o.avail_out, o.total_in += S, o.total_out += C, s.total += C, s.wrap & 4 && C && (o.adler = s.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  s.flags ? va(s.check, g, C, o.next_out - C) : qr(s.check, g, C, o.next_out - C)), o.data_type = s.bits + (s.last ? 64 : 0) + (s.mode === Za ? 128 : 0) + (s.mode === as || s.mode === Dr ? 256 : 0), (S === 0 && C === 0 || c === y_) && J === Yn && (J = Uy), J;
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
  return Zn(o) || (u = o.state, u.wrap !== 0 && u.mode !== cs) ? ia : u.mode === cs && (g = 1, g = qr(g, c, s, 0), g !== u.check) ? Mg : (m = Dg(o, c, s, s), m ? (u.mode = Ag, kg) : (u.havedict = 1, Yn));
};
var $y = Tg, Jy = Og, Iy = jg, Wy = qy, Fy = Rg, Py = Zy, e2 = Ky, t2 = Xy, a2 = Qy, n2 = "pako inflate (from Nodeca project)", Ka = {
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
  Z_OK: Ul,
  Z_STREAM_END: Gr,
  Z_NEED_DICT: Hr,
  Z_STREAM_ERROR: c2,
  Z_DATA_ERROR: K_,
  Z_MEM_ERROR: r2
} = Sg;
function fs(o) {
  this.options = wg.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, o || {});
  const c = this.options;
  c.raw && c.windowBits >= 0 && c.windowBits < 16 && (c.windowBits = -c.windowBits, c.windowBits === 0 && (c.windowBits = -15)), c.windowBits >= 0 && c.windowBits < 16 && !(o && o.windowBits) && (c.windowBits += 32), c.windowBits > 15 && c.windowBits < 48 && (c.windowBits & 15) === 0 && (c.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new zy(), this.strm.avail_out = 0;
  let s = Ka.inflateInit2(
    this.strm,
    c.windowBits
  );
  if (s !== Ul)
    throw new Error(Yr[s]);
  if (this.header = new l2(), Ka.inflateGetHeader(this.strm, this.header), c.dictionary && (typeof c.dictionary == "string" ? c.dictionary = Zr.string2buf(c.dictionary) : Ug.call(c.dictionary) === "[object ArrayBuffer]" && (c.dictionary = new Uint8Array(c.dictionary)), c.raw && (s = Ka.inflateSetDictionary(this.strm, c.dictionary), s !== Ul)))
    throw new Error(Yr[s]);
}
fs.prototype.push = function(o, c) {
  const s = this.strm, u = this.options.chunkSize, g = this.options.dictionary;
  let m, h, y;
  if (this.ended) return !1;
  for (c === ~~c ? h = c : h = c === !0 ? s2 : o2, Ug.call(o) === "[object ArrayBuffer]" ? s.input = new Uint8Array(o) : s.input = o, s.next_in = 0, s.avail_in = s.input.length; ; ) {
    for (s.avail_out === 0 && (s.output = new Uint8Array(u), s.next_out = 0, s.avail_out = u), m = Ka.inflate(s, h), m === Hr && g && (m = Ka.inflateSetDictionary(s, g), m === Ul ? m = Ka.inflate(s, h) : m === K_ && (m = Hr)); s.avail_in > 0 && m === Gr && s.state.wrap > 0 && o[s.next_in] !== 0; )
      Ka.inflateReset(s), m = Ka.inflate(s, h);
    switch (m) {
      case c2:
      case K_:
      case Hr:
      case r2:
        return this.onEnd(m), this.ended = !0, !1;
    }
    if (y = s.avail_out, s.next_out && (s.avail_out === 0 || m === Gr))
      if (this.options.to === "string") {
        let v = Zr.utf8border(s.output, s.next_out), f = s.next_out - v, p = Zr.buf2string(s.output, v);
        s.next_out = f, s.avail_out = u - f, f && s.output.set(s.output.subarray(v, v + f), 0), this.onData(p);
      } else
        this.onData(s.output.length === s.next_out ? s.output : s.output.subarray(0, s.next_out));
    if (!(m === Ul && y === 0)) {
      if (m === Gr)
        return m = Ka.inflateEnd(this.strm), this.onEnd(m), this.ended = !0, !0;
      if (s.avail_in === 0) break;
    }
  }
  return !0;
};
fs.prototype.onData = function(o) {
  this.chunks.push(o);
};
fs.prototype.onEnd = function(o) {
  o === Ul && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = wg.flattenChunks(this.chunks)), this.chunks = [], this.err = o, this.msg = this.strm.msg;
};
function u2(o, c) {
  const s = new fs(c);
  if (s.push(o), s.err) throw s.msg || Yr[s.err];
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
    const h = s[0] + 4, y = new Uint8Array(h);
    y[0] = o[m++], y[1] = o[m++], y[2] = o[m++], y[3] = o[m++];
    const v = String.fromCharCode(y[0]) + String.fromCharCode(y[1]) + String.fromCharCode(y[2]) + String.fromCharCode(y[3]);
    if (v === "IEND") {
      g = !0;
      break;
    }
    for (let p = 4; p < h; p++)
      y[p] = o[m++];
    m += 4;
    const f = new Uint8Array(y.buffer.slice(4));
    if (v === "zTXt") {
      let p = 0, S = "";
      for (; f[p] !== 0 && p < 79; )
        S += String.fromCharCode(f[p]), p++;
      u.push({
        keyword: S,
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
  const [u, g] = R.useState(null), [m, h] = R.useState(null), y = R.useRef(!1), v = R.useRef(null), f = h2[s] ?? 5e3, p = R.useCallback(async () => {
    if (y.current) return;
    const S = o.states[c], C = S?.attributes?.entity_picture;
    if (!(!C || S?.state === "unavailable")) {
      y.current = !0;
      try {
        const E = await o.fetchWithAuth(C);
        if (!E.ok)
          throw new Error(`Camera fetch failed: ${E.status}`);
        const z = await E.arrayBuffer(), L = g2(new Uint8Array(z)).filter((I) => I.keyword === "ValetudoMap");
        if (L.length === 0)
          throw new Error("No ValetudoMap ZTXT chunk in PNG");
        const Q = _2(L[0].data, { to: "string" }), A = p2(JSON.parse(Q));
        g(A), h(null);
      } catch (E) {
        h(E instanceof Error ? E.message : String(E)), console.warn("[ValetudoMap] fetch error:", E);
      } finally {
        y.current = !1;
      }
    }
  }, [o, c]);
  return R.useEffect(() => {
    p();
    const S = () => {
      v.current = setTimeout(() => {
        p().finally(S);
      }, f);
    };
    return S(), () => {
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
  const s = b2(c), u = c.language ?? "en", { t: g } = Ye(u), m = c.theme ?? "light", h = o.states[s.vacuum], y = o.states[s.map], v = o.states[s.fan], f = o.states[s.water], p = o.states[s.battery], S = o.states[s.segments], C = o.states[s.wifi], E = o.states[s.mainBrush], z = o.states[s.rightBrush], L = o.states[s.mainFilter], Q = o.states[s.sensorCleaning], A = o.states[s.totalStatsArea], I = o.states[s.totalStatsTime], Z = o.states[s.totalStatsCount], G = o.states[s.currentStatsArea], W = o.states[s.currentStatsTime], V = o.states[s.carpetMode], Y = R.useRef(null), J = pg({
    themeType: m,
    customThemeConfig: c.custom_theme,
    containerRef: Y
  }), [ae, ee] = R.useState(!1), [re, we] = R.useState(!1), {
    selectedMode: me,
    selectedRooms: je,
    selectedZone: Ne,
    setSelectedZone: D,
    setSelectedMode: F,
    handleModeChange: ie,
    handleRoomToggle: ze
  } = fg({ defaultMode: c.default_mode }), { toast: Ee, showToast: b, hideToast: H } = _g(), [te, oe] = R.useState(null), ge = C?.attributes?.ips?.[0], de = c.valetudo_url?.replace(/\/$/, "") || (ge ? `http://${ge}` : null), Pe = !!de, Oe = R.useCallback(async () => {
    try {
      let le = !1;
      const ce = de;
      if (ce)
        try {
          const ye = await fetch(`${ce}/api/v2/robot/capabilities/MappingPassCapability`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "start_mapping" })
          });
          if (!ye.ok) throw new Error(`REST ${ye.status}`);
          le = !0;
        } catch (ye) {
          console.warn("[valetudo] Direct mapping fetch failed:", ye);
        }
      if (!le)
        try {
          await o.callService("rest_command", "valetudo_start_mapping", {}), le = !0;
        } catch (ye) {
          if (!X_(ye))
            throw ye;
        }
      if (!le) {
        console.warn(`[valetudo] Cannot start mapping — no working method.
` + `Добавь в configuration.yaml:
rest_command:
  valetudo_start_mapping:
    url: "http://ROBOT_IP/api/v2/robot/capabilities/MappingPassCapability"
    method: PUT
    content_type: application/json
    payload: '{"action": "start_mapping"}'`), oe("mapping");
        return;
      }
      b(g("valetudo.toast.mapping_started"));
    } catch (le) {
      console.error("[valetudo] Mapping failed:", le), b(g("valetudo.toast.mapping_error"));
    }
  }, [de, o, b, g]), { handlePause: ya, handleStop: Xa, handleDock: Qa, handleResume: Kn, handleSetFanSpeed: Xt, handleSetWater: $a, handleClean: Ja } = ey({
    hass: o,
    entityIds: s,
    onSuccess: b,
    language: u
  }), Qt = h?.state ?? "docked", { mapData: xa, error: la, refetch: Sa } = v2(o, s.map, Qt), [wa, Xn] = R.useState(1);
  R.useEffect(() => {
    (Qt === "docked" || Qt === "idle") && (F("all"), D(null));
  }, [Qt]);
  const rt = me === "restrictions", { restrictions: et, setTool: Qn, addWall: fa, addZone: za, selectItem: ma, deleteSelected: zt, markSaved: Ia } = Zb({
    mapData: xa,
    active: rt
  }), [Gi, Wa] = R.useState(!1), Ea = R.useCallback(
    (le, ce, ye) => {
      if (le === "wall")
        return fa(ce, ye);
      {
        const Ae = et.tool === "no_mop" ? "mop" : "regular";
        return za(Ae, ce, ye);
      }
    },
    [fa, za, et.tool]
  ), k = R.useCallback(async () => {
    const le = Yb(et.walls, et.zones);
    console.log("[valetudo] Saving restrictions payload:", JSON.stringify(le)), Wa(!0);
    try {
      let ce = !1;
      const ye = de;
      if (ye)
        try {
          const Ae = await fetch(`${ye}/api/v2/robot/capabilities/CombinedVirtualRestrictionsCapability`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(le)
          });
          if (!Ae.ok) throw new Error(`REST ${Ae.status}: ${await Ae.text()}`);
          console.log("[valetudo] Saved via direct REST"), ce = !0;
        } catch (Ae) {
          if (Ae instanceof TypeError)
            console.warn("[valetudo] Direct fetch failed (mixed content / network error), trying rest_command");
          else
            throw Ae;
        }
      if (!ce)
        try {
          await o.callService("rest_command", "valetudo_set_restrictions", {
            payload: JSON.stringify(le)
          }), console.log("[valetudo] Saved via HA rest_command"), ce = !0;
        } catch (Ae) {
          if (console.warn("[valetudo] rest_command error:", Ae), !X_(Ae))
            throw Ae;
          console.log("[valetudo] rest_command not configured, trying next method");
        }
      if (!ce) {
        console.warn(`[valetudo] Could not save — no working method.
` + `Добавь в configuration.yaml:
rest_command:
  valetudo_set_restrictions:
    url: "http://ROBOT_IP/api/v2/robot/capabilities/CombinedVirtualRestrictionsCapability"
    method: PUT
    content_type: application/json
    payload: "{{ payload }}"`), oe("restrictions");
        return;
      }
      Ia(), b(g("valetudo.toast.saved")), setTimeout(Sa, 800);
    } catch (ce) {
      console.error("[valetudo] Save failed:", ce), b(g("valetudo.toast.error", { message: ce instanceof Error ? ce.message : String(ce) }));
    } finally {
      Wa(!1);
    }
  }, [de, et, o, Ia, b, Sa, g]);
  if (!h)
    return /* @__PURE__ */ r.jsxs("div", { className: "valetudo-vacuum-card__error", children: [
      "Entity not found: ",
      s.vacuum
    ] });
  const B = `rest_command:
  valetudo_set_restrictions:
    url: "http://ROBOT_IP/api/v2/robot/capabilities/CombinedVirtualRestrictionsCapability"
    method: PUT
    content_type: application/json
    payload: "{{ payload }}"`, $ = `rest_command:
  valetudo_start_mapping:
    url: "http://ROBOT_IP/api/v2/robot/capabilities/MappingPassCapability"
    method: PUT
    content_type: application/json
    payload: '{"action": "start_mapping"}'`, se = ["cleaning", "returning"].includes(Qt), pe = Qt === "paused", Re = Qt === "docked", M = c.title ?? h.attributes.friendly_name ?? "Valetudo Robot", $e = S ? y2(S.attributes) : [], ut = (le, ce) => {
    const ye = je.has(le);
    ze(le, ce), b(ye ? `Deselected: ${ce}` : `Selected: ${ce}`);
  }, P = () => {
    Ja(me, je, Ne, wa), F("all"), D(null);
  }, ne = () => {
    F(rt ? "all" : "restrictions"), D(null);
  }, ue = se;
  return /* @__PURE__ */ r.jsxs("div", { ref: Y, className: `dreame-vacuum-card dreame-vacuum-card--${J.name} valetudo-vacuum-card`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "dreame-vacuum-card__container", children: [
      /* @__PURE__ */ r.jsx(
        V1,
        {
          vacuumEntity: h,
          batteryEntity: p,
          currentStatsAreaEntity: G,
          currentStatsTimeEntity: W,
          deviceName: M,
          restrictionsMode: rt,
          onRestrictionsToggle: ne,
          onSettingsClick: () => ee(!0),
          language: u
        }
      ),
      xa ? /* @__PURE__ */ r.jsx(
        $1,
        {
          mapData: xa,
          mode: me,
          selectedRooms: me === "room" ? je : void 0,
          zone: me === "zone" ? Ne : null,
          onZoneChange: D,
          restrictions: rt ? et : void 0,
          displayRestrictions: rt ? void 0 : et.savedDisplay,
          onRestrictionDrawn: rt ? Ea : void 0,
          onRestrictionSelect: rt ? ma : void 0,
          iterations: wa,
          onIterationsChange: rt ? void 0 : Xn,
          language: u,
          robotSize: c.robot_size,
          chargerSize: c.charger_size,
          pathWidth: c.path_width,
          onSegmentClick: me === "room" ? (le) => {
            const ce = $e.find((ye) => ye.id === le);
            ut(le, ce?.name ?? String(le));
          } : void 0
        }
      ) : /* @__PURE__ */ r.jsx("div", { className: "valetudo-vacuum-card__map-placeholder", children: la ? g("valetudo.map.error", { message: la }) : g("valetudo.map.loading") }),
      /* @__PURE__ */ r.jsx("div", { className: "cleaning-mode-button-wrapper", children: rt ? /* @__PURE__ */ r.jsx(
        P1,
        {
          restrictions: et,
          onToolChange: Qn,
          onDeleteSelected: zt,
          onSave: k,
          saving: Gi,
          language: u
        }
      ) : /* @__PURE__ */ r.jsxs(
        "button",
        {
          className: `cleaning-mode-button${ue ? " cleaning-mode-button--disabled" : ""}`,
          onClick: () => we(!0),
          disabled: ue,
          type: "button",
          children: [
            /* @__PURE__ */ r.jsxs("div", { className: "cleaning-mode-button__content", children: [
              /* @__PURE__ */ r.jsx("span", { className: "cleaning-mode-button__icon", children: Di }),
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
        !rt && me === "room" && je.size > 0 && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-selected-rooms", children: [
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-selected-rooms__label", children: g("room_display.selected_label") }),
          /* @__PURE__ */ r.jsx("span", { className: "valetudo-selected-rooms__names", children: Array.from(je.values()).join(", ") })
        ] }),
        !rt && /* @__PURE__ */ r.jsx(
          hg,
          {
            selectedMode: me,
            onModeChange: ie,
            disabled: se,
            language: u
          }
        ),
        /* @__PURE__ */ r.jsx(
          vg,
          {
            selectedMode: me,
            selectedRoomsCount: je.size,
            isRunning: se,
            isPaused: pe,
            isDocked: Re,
            onClean: rt ? void 0 : P,
            onPause: ya,
            onResume: Kn,
            onStop: Xa,
            onDock: Qa,
            language: u,
            disabled: rt
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      J1,
      {
        opened: re,
        onClose: () => we(!1),
        fanEntity: v,
        waterEntity: f,
        onFanChange: Xt,
        onWaterChange: $a,
        disabled: ue,
        language: u,
        onStartMapping: Pe ? Oe : void 0
      }
    ),
    /* @__PURE__ */ r.jsx(
      F1,
      {
        opened: ae,
        onClose: () => ee(!1),
        hass: o,
        vacuumEntity: h,
        fanEntity: v,
        waterEntity: f,
        batteryEntity: p,
        segmentsEntity: S,
        wifiEntity: C,
        mainBrushEntity: E,
        rightBrushEntity: z,
        mainFilterEntity: L,
        sensorCleaningEntity: Q,
        totalStatsAreaEntity: A,
        totalStatsTimeEntity: I,
        totalStatsCountEntity: Z,
        currentStatsAreaEntity: G,
        currentStatsTimeEntity: W,
        carpetModeEntity: V,
        entityIds: s,
        valetudoUrl: c.valetudo_url,
        language: u
      }
    ),
    Ee && /* @__PURE__ */ r.jsx(bg, { message: Ee, onClose: H }),
    !y && /* @__PURE__ */ r.jsxs("div", { className: "valetudo-vacuum-card__warning", children: [
      "Map entity not found: ",
      s.map
    ] }),
    /* @__PURE__ */ r.jsx(Bi, { opened: te !== null, onClose: () => oe(null), children: /* @__PURE__ */ r.jsxs("div", { className: "valetudo-config-error", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "valetudo-config-error__title", children: g(te === "restrictions" ? "valetudo.config_error.restrictions_title" : "valetudo.config_error.mapping_title") }),
      /* @__PURE__ */ r.jsx("p", { className: "valetudo-config-error__desc", children: g("valetudo.config_error.desc") }),
      /* @__PURE__ */ r.jsx("p", { className: "valetudo-config-error__option", children: g("valetudo.config_error.option_url") }),
      /* @__PURE__ */ r.jsx("p", { className: "valetudo-config-error__option", children: g("valetudo.config_error.option_rest_intro") }),
      /* @__PURE__ */ r.jsx("pre", { className: "valetudo-config-error__yaml", children: te === "restrictions" ? B : $ }),
      /* @__PURE__ */ r.jsx("button", { className: "valetudo-config-error__close", onClick: () => oe(null), children: g("valetudo.config_error.close") })
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
      },
      {
        type: "expandable",
        name: "map_visuals",
        flatten: !0,
        title: "Map visuals",
        schema: [
          {
            type: "grid",
            name: "",
            flatten: !0,
            column_min_width: "160px",
            schema: [
              {
                name: "robot_size",
                selector: { number: { min: 0.3, max: 3, step: 0.1, mode: "slider" } }
              },
              {
                name: "charger_size",
                selector: { number: { min: 0.3, max: 3, step: 0.1, mode: "slider" } }
              },
              {
                name: "path_width",
                selector: { number: { min: 0.1, max: 5, step: 0.1, mode: "slider" } }
              }
            ]
          }
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
      segments_entity: "Segments entity (sensor.*)",
      robot_size: "Robot icon size",
      charger_size: "Charger icon size",
      path_width: "Path line width"
    }, u = {
      valetudo_identifier: "Open Valetudo web UI → Robot Settings → Connectivity → MQTT → Identifier. Example: HarshSillyPigeon. Required for room and zone cleaning via MQTT.",
      valetudo_url: "Optional. Override the robot URL for direct REST calls (restrictions, mapping). If left empty, the card auto-detects the IP from the Wi-Fi sensor entity. Set this only if auto-detection fails (e.g. the robot IP changes or the Wi-Fi entity is unavailable).",
      robot_size: "Multiplier for the robot icon radius. Default: 1.0",
      charger_size: "Multiplier for the charger icon radius. Default: 1.0",
      path_width: "Multiplier for the robot travel path line width. Default: 1.0"
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
