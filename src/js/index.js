import './vendors/svgxuse';
import './vendors/polyfillPrepend';
import horizontalScrolling from './vendors/horizontalScrolling';

import showInputGetCatalog from './modules/showInputGetCatalog';
import colorSelect from './modules/colorSelect';
import sizeSelect from './modules/sizeSelect';
import quantitySelect from './modules/quantitySelect';
import accessorySelect from './modules/accessorySelect';
import './modules/ymap';
import './modules/swiper';

horizontalScrolling(['size-flask__dropdown-content']);

showInputGetCatalog({
  buttonClassName: 'get-catalog__btn',
  showClassNames: [
    'get-catalog__name',
    'get-catalog__email',
  ],
});

colorSelect({
  optionsClassName: 'rose-color__option',
  selectButtonClassName: 'rose-color__btn',
  containerClassName: 'rose-color__dropdown-content',
  clearClassName: 'rose-color__clear--js',
});

sizeSelect({
  optionsClassName: 'size-flask__option',
  selectButtonClassName: 'size-flask__btn',
  containerClassName: 'size-flask__dropdown-content',
  clearClassName: 'size-flask__clear--js',
});

quantitySelect({
  inputQuantityClassName: 'count-flask__quantity--js',
  buttonDecrementClassName: 'count-flask__decrement--js',
  buttonIncrementClassName: 'count-flask__increment--js',
});

accessorySelect({
  optionsClassName: 'accessory__option',
  selectButtonClassName: 'accessory__btn',
  containerClassName: 'accessory__dropdown-content',
  clearClassName: 'accessory__clear--js',
});

quantitySelect({
  inputQuantityClassName: 'count-accessory__quantity--js',
  buttonDecrementClassName: 'count-accessory__decrement--js',
  buttonIncrementClassName: 'count-accessory__increment--js',
});

baguetteBox.run('.baguetteBox');
