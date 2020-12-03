/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nanoid", function() { return nanoid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAlphabet", function() { return customAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRandom", function() { return customRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__["urlAlphabet"]; });

// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.



if (true) {
  // All bundlers will remove this block in the production bundle.
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID. If you use Expo, install `expo-random` ' +
        'and use `nanoid/async`.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  // `Math.clz32` is not used, because it is not available in browsers.
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).

  // `-~f => Math.ceil(f)` if f is a float
  // `-~i => i + 1` if i is an integer
  let step = -~((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let j = step
      while (j--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[j] & mask] || ''
        // `id.length + 1 === size` is a more compact option.
        if (id.length === +size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))

  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    let byte = bytes[size] & 63
    if (byte < 36) {
      // `0-9a-z`
      id += byte.toString(36)
    } else if (byte < 62) {
      // `A-Z`
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}




/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAlphabet", function() { return urlAlphabet; });
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'




/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/*! exports provided: MAX_SYMBOLS_DESCRIPTION, AMOUNT_GENRES_FOR_SINGLE_NUMBER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_SYMBOLS_DESCRIPTION", function() { return MAX_SYMBOLS_DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AMOUNT_GENRES_FOR_SINGLE_NUMBER", function() { return AMOUNT_GENRES_FOR_SINGLE_NUMBER; });
const MAX_SYMBOLS_DESCRIPTION = 140;
const AMOUNT_GENRES_FOR_SINGLE_NUMBER = 1;


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _view_user_rang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/user-rang.js */ "./src/view/user-rang.js");
/* harmony import */ var _view_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/navigation.js */ "./src/view/navigation.js");
/* harmony import */ var _view_site_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/site-menu.js */ "./src/view/site-menu.js");
/* harmony import */ var _view_stats_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/stats-link.js */ "./src/view/stats-link.js");
/* harmony import */ var _view_sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/sort.js */ "./src/view/sort.js");
/* harmony import */ var _view_main_content_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/main-content.js */ "./src/view/main-content.js");
/* harmony import */ var _view_films_list_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/films-list.js */ "./src/view/films-list.js");
/* harmony import */ var _view_no_film_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/no-film.js */ "./src/view/no-film.js");
/* harmony import */ var _view_card_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/card.js */ "./src/view/card.js");
/* harmony import */ var _view_show_more_btn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/show-more-btn.js */ "./src/view/show-more-btn.js");
/* harmony import */ var _view_top_rated_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/top-rated.js */ "./src/view/top-rated.js");
/* harmony import */ var _view_most_comment_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/most-comment.js */ "./src/view/most-comment.js");
/* harmony import */ var _view_statistics_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/statistics.js */ "./src/view/statistics.js");
/* harmony import */ var _view_popup_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view/popup.js */ "./src/view/popup.js");
/* harmony import */ var _moks_film_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./moks/film.js */ "./src/moks/film.js");
/* harmony import */ var _moks_filter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./moks/filter.js */ "./src/moks/filter.js");
/* harmony import */ var _moks_comments_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./moks/comments.js */ "./src/moks/comments.js");





















const FILMS_AMOUNT = 20;
const FILMS_AMOUNT_PER_STEP = 5;

const ComentsAmmount = {
  MIN: 1,
  MAX: 5,
};

const renderFilm = (filmListElement, film) => {
  const filmComponent = new _view_card_js__WEBPACK_IMPORTED_MODULE_9__["default"](film);
  const popupComponent = new _view_popup_js__WEBPACK_IMPORTED_MODULE_14__["default"](film);

  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmListElement, filmComponent.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

  const closePopup = () => {
    siteBodyNode.removeChild(popupComponent.getElement());
    siteBodyNode.classList.remove(`hide-overflow`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  const openPopup = (evt) => {
    evt.preventDefault();
    siteBodyNode.appendChild(popupComponent.getElement());
    siteBodyNode.classList.add(`hide-overflow`);
    document.addEventListener(`keydown`, onPopupEscPress);
    popupComponent.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, closePopup);
  };

  const onPopupEscPress = (evt) => {
    if (evt.key === _utils_js__WEBPACK_IMPORTED_MODULE_0__["KeyboardKeys"].ESCAPE) {
      closePopup();
    }
  };

  filmComponent.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, openPopup);
  filmComponent.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, openPopup);
  filmComponent.getElement().querySelector(`.film-card__title`).addEventListener(`click`, openPopup);
};

const renderFilmsList = (filmListContainer, filmsItems) => {
  if (filmsItems.length === 0) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmListContainer, new _view_no_film_js__WEBPACK_IMPORTED_MODULE_8__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
    sortComponent.getElement().remove();
    return;
  }

  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteHeaderNode, new _view_user_rang_js__WEBPACK_IMPORTED_MODULE_1__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

  for (let film of filmsItems) {
    film.comments = new Array(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(ComentsAmmount.MIN, ComentsAmmount.MAX)).fill(``).map(_moks_comments_js__WEBPACK_IMPORTED_MODULE_17__["generateRandomComment"]);
  }

  for (let i = 0; i < Math.min(filmsItems.length, FILMS_AMOUNT_PER_STEP); i++) {
    renderFilm(filmListContainer, filmsItems[i]);
  }

  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmsNode, new _view_top_rated_js__WEBPACK_IMPORTED_MODULE_11__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmsNode, new _view_most_comment_js__WEBPACK_IMPORTED_MODULE_12__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

  if (filmsItems.length > FILMS_AMOUNT_PER_STEP) {
    let renderedFilmCount = FILMS_AMOUNT_PER_STEP;
    const showMoreButtonComponent = new _view_show_more_btn_js__WEBPACK_IMPORTED_MODULE_10__["default"]();

    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmsListNode, showMoreButtonComponent.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

    showMoreButtonComponent.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      filmsItems.slice(renderedFilmCount, renderedFilmCount + FILMS_AMOUNT_PER_STEP)
      .forEach((filmsElems) => renderFilm(filmListContainer, filmsElems));

      renderedFilmCount += FILMS_AMOUNT_PER_STEP;

      if (renderedFilmCount >= filmsItems.length) {
        showMoreButtonComponent.getElement().remove();
        showMoreButtonComponent.removeElement();
      }
    });
  }

  const topRatedFilmsNode = filmsNode.querySelector(`.films-list--top-rated`);
  const topRatedFilmsContainerNode = topRatedFilmsNode.querySelector(`.films-list__container`);
  const mostCommentedFilmsNode = filmsNode.querySelector(`.films-list--most-comment`);
  const mostCommentedFilmsContainerNode = mostCommentedFilmsNode.querySelector(`.films-list__container`);

  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["sortByComments"])(filmsItems).slice(0, 2).forEach((film) => {
    renderFilm(mostCommentedFilmsContainerNode, film);
  });
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["sortByRating"])(filmsItems).slice(0, 2).forEach((film) => {
    renderFilm(topRatedFilmsContainerNode, film);
  });
};

const films = new Array(FILMS_AMOUNT).fill(``).map(_moks_film_js__WEBPACK_IMPORTED_MODULE_15__["generateFilm"]);
const filters = Object(_moks_filter_js__WEBPACK_IMPORTED_MODULE_16__["generateFilter"])(films);

const siteHeaderNode = document.querySelector(`.header`);
const siteMainNode = document.querySelector(`.main`);
const siteBodyNode = document.querySelector(`body`);
const statisticNode = document.querySelector(`.footer__statistics`);

const navigationComponent = new _view_navigation_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainNode, navigationComponent.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(navigationComponent.getElement(), new _view_site_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"](filters).getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(navigationComponent.getElement(), new _view_stats_link_js__WEBPACK_IMPORTED_MODULE_4__["default"](filters).getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

const sortComponent = new _view_sort_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainNode, sortComponent.getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainNode, new _view_main_content_js__WEBPACK_IMPORTED_MODULE_6__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

const filmsNode = siteMainNode.querySelector(`.films`);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filmsNode, new _view_films_list_js__WEBPACK_IMPORTED_MODULE_7__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);

const filmsListNode = filmsNode.querySelector(`.films-list`);
const filmsContainerNode = filmsNode.querySelector(`.films-list__container`);

renderFilmsList(filmsContainerNode, films);
Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(statisticNode, new _view_statistics_js__WEBPACK_IMPORTED_MODULE_13__["default"](films.length).getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND);


/***/ }),

/***/ "./src/moks/comments.js":
/*!******************************!*\
  !*** ./src/moks/comments.js ***!
  \******************************/
/*! exports provided: generateRandomComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomComment", function() { return generateRandomComment; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");




const COMMENTS = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`,
  `Обязательно посмотрю еще`,
  `Зачем такое вообще снимать`,
  `Лучший фильм что видел`
];

const EMOJI = [
  `angry.png`,
  `puke.png`,
  `sleeping.png`,
  `smile.png`
];

const AUTHORS = [
  `Tim Macoveev`,
  `John Doe`,
  `Artem Vafin`,
  `Orange`
];

const generateCommentDate = () => {
  const maxDaysGap = 10;
  const maxYearsGap = 1;
  const maxMonthsGap = 6;
  const maxHour = 24;
  const maxMinute = 59;
  const daysGap = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(-maxDaysGap, 0);
  const yearsGap = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(-maxYearsGap, 0);
  const monthsGap = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(-maxMonthsGap, 0);
  const hourGap = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, maxHour);
  const minuteGap = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getRandomInteger"])(0, maxMinute);

  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, `day`).add(yearsGap, `year`).add(monthsGap, `month`).add(hourGap, `hour`).add(minuteGap, `minute`).toDate();
};

const generateRandomComment = () => ({
  id: Object(nanoid__WEBPACK_IMPORTED_MODULE_1__["nanoid"])(),
  text: Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["generateRandomItem"])(COMMENTS),
  emoji: Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["generateRandomItem"])(EMOJI),
  author: Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["generateRandomItem"])(AUTHORS),
  date: generateCommentDate(),
});


/***/ }),

/***/ "./src/moks/film.js":
/*!**************************!*\
  !*** ./src/moks/film.js ***!
  \**************************/
/*! exports provided: generateFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilm", function() { return generateFilm; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



const TITLES = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `Made for Each Other`,
  `The Great Flamarion`
];

const DIRECTORS = [
  `Альфонсо Куарон`,
  `Александр Пэйн`,
  `Хаяо Миядзаки`,
  `Джафар Панахи`,
  `Пол Томас Андерсон`,
  `Асгар Фархади`,
  `Майк Ли`
];

const SCREENWRITERS = [
  `Билли Уайлдер`,
  `Джоэл Коэн`,
  `Роберт Таун`,
  `Квентин Тарантино`,
  `Уильям Голдман`,
  `Чарли Кауфман`,
  `Нора Эфрон`
];

const ACTORS = [
  `Alan Rickman`,
  `Benedict Cumberbatch`,
  `Benicio del Toro`,
  `James McAvoy`,
  `Cillian Murphy`,
  `Christian Bale`,
  `Leonardo DiCaprio`,
];

const COUNTRIES = [
  `Россия`,
  `США`,
  `Великобритания`,
  `Япония`,
  `Германия`
];

const GENRES = [
  `Комедия`,
  `Драмма`,
  `Мелодрамма`,
  `Триллер`,
  `Аниме`
];

const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const Rating = {
  MIN: 1,
  MAX: 10
};

const AgeRating = {
  MIN: 0,
  MAX: 18
};

const generateRandomDescription = () => DESCRIPTIONS[Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, GENRES.length - 1)];
const generateRandomGenre = () => GENRES[Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, GENRES.length - 1)];
const generateRandomActor = () => ACTORS[Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, ACTORS.length - 1)];
const generateRandomScreenWriter = () => SCREENWRITERS[Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, SCREENWRITERS.length - 1)];

const generateDate = () => {
  const maxDaysGap = 30;
  const maxYearsGap = 40;
  const maxMonthsGap = 12;
  const daysGap = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-maxDaysGap, 0);
  const yearsGap = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-maxYearsGap, 0);
  const monthsGap = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-maxMonthsGap, 0);

  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, `day`).add(yearsGap, `year`).add(monthsGap, `month`).toDate();
};

const generateTime = () => {
  const maxHour = 2;
  const maxMinute = 59;
  const hour = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, maxHour);
  const minute = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, maxMinute);

  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().hour(0).minute(0).add(hour, `hour`).add(minute, `minute`).toDate();
};

const generateDescription = () => new Array(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 5)).fill().map(generateRandomDescription);
const generateGenre = () => new Array(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 3)).fill().map(generateRandomGenre);
const generateActors = () => new Array(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(2, 3)).fill().map(generateRandomActor);
const generateScreenWriters = () => new Array(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 2)).fill().map(generateRandomScreenWriter);
const getRandomBooleanValue = () => Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1));

const generateFilm = () => ({
  poster: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["generateRandomItem"])(POSTERS),
  title: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["generateRandomItem"])(TITLES),
  originalTitle: `Original: ${Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["generateRandomItem"])(TITLES)}`,
  rating: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomIntegerDecimal"])(Rating.MIN, Rating.MAX),
  director: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["generateRandomItem"])(DIRECTORS),
  screenwriter: generateScreenWriters(),
  cast: generateActors(),
  productionYear: generateDate(),
  duration: generateTime(),
  country: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["generateRandomItem"])(COUNTRIES),
  genre: generateGenre(),
  description: generateDescription(),
  ageRating: `${Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(AgeRating.MIN, AgeRating.MAX)}+`,
  comments: null,
  isWatchList: getRandomBooleanValue(),
  isWatched: getRandomBooleanValue(),
  isFavourite: getRandomBooleanValue(),
});


/***/ }),

/***/ "./src/moks/filter.js":
/*!****************************!*\
  !*** ./src/moks/filter.js ***!
  \****************************/
/*! exports provided: generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });

const filmToFilterMap = {
  all: (films) => films.length,
  watchlist: (films) => films.filter((film) => film.isWatchList).length,
  history: (films) => films.filter((film) => film.isWatched).length,
  favorites: (films) => films.filter((film) => film.isFavourite).length,
};

const generateFilter = (films) => {
  return Object.entries(filmToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films),
    };
  });
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: RenderPosition, KeyboardKeys, render, renderTemplate, createElement, getRandomInteger, getRandomIntegerDecimal, limitDescription, upperFirst, generateRandomItem, sortByRating, sortByComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardKeys", function() { return KeyboardKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntegerDecimal", function() { return getRandomIntegerDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitDescription", function() { return limitDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperFirst", function() { return upperFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomItem", function() { return generateRandomItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByRating", function() { return sortByRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByComments", function() { return sortByComments; });
const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const KeyboardKeys = {
  ESCAPE: `Escape`,
  ENTER: `Enter`
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomIntegerDecimal = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return ((lower + Math.random() * (upper - lower + 1)) - 1).toFixed(1);
};

const limitDescription = (descriptionText, maxSymbols) => descriptionText.length > maxSymbols ? `${descriptionText.substring(0, maxSymbols - 1)}...` : `${descriptionText}`;

const upperFirst = (string) => string ? string.charAt(0).toUpperCase() + string.slice(1) : ``;

const generateRandomItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

const sortByRating = (items) => items.slice().sort((a, b) => b.rating - a.rating);
const sortByComments = (items) => items.slice().sort((a, b) => b.comments.length - a.comments.length);


/***/ }),

/***/ "./src/view/card.js":
/*!**************************!*\
  !*** ./src/view/card.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardFilm; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts.js */ "./src/consts.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");




const createCardFilmTemplate = (film) => {
  const {poster, title, rating, genre, description, productionYear, duration, comments, isWatchList, isWatched, isFavourite} = film;

  const year = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(productionYear).format(`YYYY`);
  const durationFilm = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(duration).format(`H[h] m[m]`);

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${year}</span>
    <span class="film-card__duration">${durationFilm}</span>
    <span class="film-card__genre">${genre[0]}</span>
  </p>
  <img src="./images/posters/${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["limitDescription"])(description.join(` `), _consts_js__WEBPACK_IMPORTED_MODULE_1__["MAX_SYMBOLS_DESCRIPTION"])}</p>
  <a class="film-card__comments">${comments.length} comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchList ? `film-card__controls-item--active` : ``}" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatched ? `film-card__controls-item--active` : ``}" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavourite ? `film-card__controls-item--active` : ``}" type="button">Mark as favorite</button>
  </div>
</article>`;
};

class CardFilm {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createCardFilmTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/films-list.js":
/*!********************************!*\
  !*** ./src/view/films-list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmsList; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFilmsListTemplate = () => {
  return `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container">
    </div>
  </section>`;
};

class FilmsList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/main-content.js":
/*!**********************************!*\
  !*** ./src/view/main-content.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContent; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createMainContentTemplate = () => `<section class="films"></section>`;
class MainContent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMainContentTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/most-comment.js":
/*!**********************************!*\
  !*** ./src/view/most-comment.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MostCommentedList; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createMostCommentedListTemplate = () => {
  return `<section class="films-list films-list--extra films-list--most-comment">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container">
  </div>
    </section>`;
};

class MostCommentedList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMostCommentedListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/navigation.js":
/*!********************************!*\
  !*** ./src/view/navigation.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



const createNavigationTemplate = () => `<nav class="main-navigation"></nav>`;

class Navigation {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNavigationTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/no-film.js":
/*!*****************************!*\
  !*** ./src/view/no-film.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoFilm; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createNoFilmTemplate = () => `<h2 class="films-list__title">There are no movies in our database</h2>`;

class NoFilm {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoFilmTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/popup.js":
/*!***************************!*\
  !*** ./src/view/popup.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts.js */ "./src/consts.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");




const createCommentTemplate = ({emoji, text, author, date}) => {

  return `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/${emoji}" width="55" height="55" alt="emoji-smile">
  </span>
  <div>
    <p class="film-details__comment-text">${text}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${author}</span>
      <span class="film-details__comment-day">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(`YYYY/MM/DD HH:mm`)}</span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
</li>`;
};

const createGenreTemplate = (elem) => {
  return `<span class="film-details__genre">${elem}</span>`;
};

const createGenresTemplate = (genres) => genres.map(createGenreTemplate).join(` `);

const createCommentsTemplate = (comments) => comments.map(createCommentTemplate).join(` `);

const createPopupTemplate = (film) => {
  const {poster, title, rating, genre, description, productionYear, duration, director, cast, screenwriter, country, ageRating, isWatchList, isWatched, isFavourite, comments} = film;

  const productionDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(productionYear).format(`D MMMM YYYY`);
  const durationFilm = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(duration).format(`H[h] m[m]`);

  const comentsNodeTemplate = createCommentsTemplate(comments);
  const genresNodeTemplate = createGenresTemplate(genre);

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">

          <p class="film-details__age">${ageRating}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: The Great Flamarion</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${screenwriter.join(`, `)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${cast.join(`, `)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${productionDate}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${durationFilm}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${genre.length > _consts_js__WEBPACK_IMPORTED_MODULE_1__["AMOUNT_GENRES_FOR_SINGLE_NUMBER"] ? `Genres` : `Genre`} </td>
              <td class="film-details__cell">
                ${genresNodeTemplate}</td>
            </tr>
          </table>

          <p class="film-details__film-description">
            ${description.join(` `)}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${isWatchList ? `checked` : ``}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${isWatched ? `checked` : ``}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${isFavourite ? `checked` : ``}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>

        <ul class="film-details__comments-list">
          ${comentsNodeTemplate}
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};

class Popup {
  constructor(film) {
    this._element = null;
    this._film = film;
  }

  getTemplate() {
    return createPopupTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/show-more-btn.js":
/*!***********************************!*\
  !*** ./src/view/show-more-btn.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreButton; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



const createShowMoreButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;

class ShowMoreButton {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createShowMoreButtonTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/site-menu.js":
/*!*******************************!*\
  !*** ./src/view/site-menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFilterItemTemplate = ({name, count}, isActive) => {

  return (
    `<a href="#${name}"
        class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">
        ${name === `all` ? `All movies` : `${Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["upperFirst"])(name)}`}
        ${name !== `all` ? `<span class="main-navigation__item-count">${count}</span>` : ``}
    </a>`
  );
};

const createFilterTemplate = (filterItems) => {

  const filterItemsTemplate = filterItems.map((filter, index) => createFilterItemTemplate(filter, index === 0)).join(``);

  return `<div class="main-navigation__items">
    ${filterItemsTemplate}
  </div>`;
};


class Filter {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



const createSortTemplate = () => {
  return `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`;
};

class Sort {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/statistics.js":
/*!********************************!*\
  !*** ./src/view/statistics.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteStatistic; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createSiteStatisticTemplate = (statistic) => `<p>${statistic} movies inside</p>`;

class SiteStatistic {
  constructor(statistic) {
    this._element = null;
    this._statistic = statistic;
  }

  getTemplate() {
    return createSiteStatisticTemplate(this._statistic);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/stats-link.js":
/*!********************************!*\
  !*** ./src/view/stats-link.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatsLink; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



const createStatsLinkTemplate = () => `<a href="#stats" class="main-navigation__additional">Stats</a>`;

class StatsLink {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createStatsLinkTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/top-rated.js":
/*!*******************************!*\
  !*** ./src/view/top-rated.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopRatedList; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createTopRatedListTemplate = () => {
  return `<section class="films-list films-list--extra films-list--top-rated">
  <h2 class="films-list__title">Top rated</h2>
  <div class="films-list__container">
  </div>
    </section>`;
};

class TopRatedList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTopRatedListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/user-rang.js":
/*!*******************************!*\
  !*** ./src/view/user-rang.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenu; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createUserRangTemplate = () => {
  return `<section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
};
class SiteMenu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createUserRangTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map