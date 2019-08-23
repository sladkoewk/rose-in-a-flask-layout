import polifillSvgForIE from './vendors/svgxuse';
import polyfillPrepend from './vendors/polyfillPrepend';
import horizontalScrolling from './vendors/horizontalScrolling';

import showInputGetCatalog from './modules/showInputGetCatalog';
import colorSelect from './modules/colorSelect';
import sizeSelect from './modules/sizeSelect';

polifillSvgForIE();
polyfillPrepend();
horizontalScrolling();

showInputGetCatalog('get-catalog__btn', ['get-catalog__name', 'get-catalog__email']);
colorSelect('rose-color__option', 'rose-color__btn', 'rose-color__dropdown-content', 'rose-color__clear--js');
sizeSelect('size-flask__option', 'size-flask__btn', 'size-flask__dropdown-content', 'size-flask__clear--js');
