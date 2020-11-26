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
/* harmony import */ var _moks_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moks/comments.js */ "./src/moks/comments.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _view_user_rang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/user-rang.js */ "./src/view/user-rang.js");
/* harmony import */ var _view_site_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/site-menu.js */ "./src/view/site-menu.js");
/* harmony import */ var _view_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/filter.js */ "./src/view/filter.js");
/* harmony import */ var _view_main_content_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/main-content.js */ "./src/view/main-content.js");
/* harmony import */ var _view_films_list_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/films-list.js */ "./src/view/films-list.js");
/* harmony import */ var _view_card_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/card.js */ "./src/view/card.js");
/* harmony import */ var _view_show_more_btn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/show-more-btn.js */ "./src/view/show-more-btn.js");
/* harmony import */ var _view_top_rated_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/top-rated.js */ "./src/view/top-rated.js");
/* harmony import */ var _view_most_comment_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/most-comment.js */ "./src/view/most-comment.js");
/* harmony import */ var _view_statistics_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/statistics.js */ "./src/view/statistics.js");
/* harmony import */ var _view_popup_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/popup.js */ "./src/view/popup.js");
/* harmony import */ var _moks_film_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./moks/film.js */ "./src/moks/film.js");
/* harmony import */ var _moks_filter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./moks/filter.js */ "./src/moks/filter.js");
















const FILMS_AMOUNT = 20;
const FILMS_AMOUNT_PER_STEP = 5;

const films = new Array(FILMS_AMOUNT).fill().map(_moks_film_js__WEBPACK_IMPORTED_MODULE_13__["generateFilm"]);
const filters = Object(_moks_filter_js__WEBPACK_IMPORTED_MODULE_14__["generateFilter"])(films);

const comments = {};
for (let i = 0; i < FILMS_AMOUNT; i++) {
  const commentsArr = new Array(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 5)).fill().map(_moks_comments_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomComment"]);
  commentsArr.forEach((element, index) => {
    element.id = index;
  });
  comments[i] = commentsArr;
}

const sortByRating = (array) => {
  return array.slice().sort((a, b) => {
    if (a.rating > b.rating) {
      return -1;
    }

    if (a.rating < b.rating) {
      return 1;
    }

    return 0;
  });
};

const sortByComments = (array) => {
  return array.slice().sort((a, b) => {
    if (a.comments.length > b.comments.length) {
      return -1;
    }

    if (a.comments.length < b.comments.length) {
      return 1;
    }

    return 0;
  });
};

for (let i = 0; i < films.length; i++) {
  films[i].comments = new Array(comments[i].length);
  for (let j = 0; j < films[i].comments.length; j++) {
    films[i].comments[j] = j;
  }
}

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderNode = document.querySelector(`.header`);
const siteMainNode = document.querySelector(`.main`);
const siteFooterNode = document.querySelector(`.footer`);
const statisticNode = siteFooterNode.querySelector(`.footer__statistics`);

render(siteHeaderNode, Object(_view_user_rang_js__WEBPACK_IMPORTED_MODULE_2__["createUserRangTemplate"])(), `beforeend`);
render(siteMainNode, Object(_view_site_menu_js__WEBPACK_IMPORTED_MODULE_3__["createSiteMenuTemplate"])(filters), `beforeend`);
render(siteMainNode, Object(_view_filter_js__WEBPACK_IMPORTED_MODULE_4__["createFilterTemplate"])(), `beforeend`);
render(siteMainNode, Object(_view_main_content_js__WEBPACK_IMPORTED_MODULE_5__["createMainContentTemplate"])(), `beforeend`);

const filmsNode = siteMainNode.querySelector(`.films`);

render(filmsNode, Object(_view_films_list_js__WEBPACK_IMPORTED_MODULE_6__["createFilmsListTemplate"])(), `beforeend`);

const filmsListNode = filmsNode.querySelector(`.films-list`);
const filmsContainerNode = filmsNode.querySelector(`.films-list__container`);

if (films.length > FILMS_AMOUNT_PER_STEP) {
  let renderedFilmCount = FILMS_AMOUNT_PER_STEP;

  render(filmsListNode, Object(_view_show_more_btn_js__WEBPACK_IMPORTED_MODULE_8__["createShowMoreBtnTemplate"])(), `beforeend`);

  const showMoreButton = filmsListNode.querySelector(`.films-list__show-more`);

  showMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    films.slice(renderedFilmCount, renderedFilmCount + FILMS_AMOUNT_PER_STEP)
    .forEach((filmsElems) => render(filmsContainerNode, Object(_view_card_js__WEBPACK_IMPORTED_MODULE_7__["createCardFilmTemplate"])(filmsElems), `beforeend`));

    renderedFilmCount += FILMS_AMOUNT_PER_STEP;

    if (renderedFilmCount >= films.length) {
      showMoreButton.remove();
    }
  });
}

for (let i = 1; i < Math.min(films.length, FILMS_AMOUNT_PER_STEP + 1); i++) {
  render(filmsContainerNode, Object(_view_card_js__WEBPACK_IMPORTED_MODULE_7__["createCardFilmTemplate"])(films[i]), `beforeend`);
}

render(filmsNode, Object(_view_top_rated_js__WEBPACK_IMPORTED_MODULE_9__["createTopRatedListTemplate"])(), `beforeend`);
render(filmsNode, Object(_view_most_comment_js__WEBPACK_IMPORTED_MODULE_10__["createMostCommentedListTemplate"])(), `beforeend`);

const topRatedFilmsNode = filmsNode.querySelector(`.films-list--top-rated`);
const topRatedFilmsContainerNode = topRatedFilmsNode.querySelector(`.films-list__container`);
const mostCommentedFilmsNode = filmsNode.querySelector(`.films-list--most-comment`);
const mostCommentedFilmsContainerNode = mostCommentedFilmsNode.querySelector(`.films-list__container`);

for (let i = 0; i < 2; i++) {
  render(topRatedFilmsContainerNode, Object(_view_card_js__WEBPACK_IMPORTED_MODULE_7__["createCardFilmTemplate"])(sortByRating(films)[i]), `beforeend`);
}

for (let i = 0; i < 2; i++) {
  render(mostCommentedFilmsContainerNode, Object(_view_card_js__WEBPACK_IMPORTED_MODULE_7__["createCardFilmTemplate"])(sortByComments(films)[i]), `beforeend`);
}


render(statisticNode, Object(_view_statistics_js__WEBPACK_IMPORTED_MODULE_11__["createSiteStatisticTemplate"])(films), `beforeend`);

render(siteFooterNode, Object(_view_popup_js__WEBPACK_IMPORTED_MODULE_12__["createPopupTemplate"])(films[0], comments[0]), `afterend`);



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

const generateRandomItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateCommentDate = () => {
  const maxDaysGap = 10;
  const maxYearsGap = 1;
  const maxMonthsGap = 6;
  const maxHour = 24;
  const maxMinute = 59;
  const daysGap = getRandomInteger(-maxDaysGap, 0);
  const yearsGap = getRandomInteger(-maxYearsGap, 0);
  const monthsGap = getRandomInteger(-maxMonthsGap, 0);
  const hourGap = getRandomInteger(0, maxHour);
  const minuteGap = getRandomInteger(0, maxMinute);

  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, `day`).add(yearsGap, `year`).add(monthsGap, `month`).add(hourGap, `hour`).add(minuteGap, `minute`).toDate();
};

const generateRandomComment = () => {
  return {
    id: null,
    text: generateRandomItem(COMMENTS),
    emoji: generateRandomItem(EMOJI),
    author: generateRandomItem(AUTHORS),
    date: generateCommentDate(),
  };
};


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

const generateRandomItem = (array) => {
  const randomIndex = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, array.length - 1);

  return array[randomIndex];
};

const generateRandomDescription = () => {
  const randomIndex = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, DESCRIPTIONS.length - 1);

  return DESCRIPTIONS[randomIndex];
};

const generateRandomGenre = () => {
  const randomIndex = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, GENRES.length - 1);

  return GENRES[randomIndex];
};

const generateRandomActor = () => {
  const randomIndex = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, ACTORS.length - 1);

  return ACTORS[randomIndex];
};

const generateRandomScreenWriter = () => {
  const randomIndex = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, SCREENWRITERS.length - 1);

  return SCREENWRITERS[randomIndex];
};

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

const generateDescription = () => {
  const amountSentence = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 5);

  return new Array(amountSentence).fill().map(generateRandomDescription);
};

const generateGenre = () => {
  const amountGenres = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 3);

  return new Array(amountGenres).fill().map(generateRandomGenre);
};

const generateActors = () => {
  const amountActors = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(2, 3);

  return new Array(amountActors).fill().map(generateRandomActor);
};

const generateScreenWriters = () => {
  const amountScreenWriters = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(1, 2);

  return new Array(amountScreenWriters).fill().map(generateRandomScreenWriter);
};

const generateFilm = function () {
  return {
    poster: generateRandomItem(POSTERS),
    title: generateRandomItem(TITLES),
    originalTitle: `Original: ${generateRandomItem(TITLES)}`,
    rating: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomIntegerDecimal"])(1, 10),
    director: generateRandomItem(DIRECTORS),
    screenwriter: generateScreenWriters().join(`, `),
    cast: generateActors().join(`, `),
    productionYear: generateDate(),
    duration: generateTime(),
    country: generateRandomItem(COUNTRIES),
    genre: generateGenre(),
    description: generateDescription().join(` `),
    ageRating: `${Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 18)}+`,
    comments: null,
    isWatchList: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
    isWatched: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
    isFavourite: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
  };
};


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
/*! exports provided: getRandomInteger, getRandomIntegerDecimal, limitDesc, upperFirst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntegerDecimal", function() { return getRandomIntegerDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitDesc", function() { return limitDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperFirst", function() { return upperFirst; });
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

const limitDesc = (descriptionText, maxSymbols) => {
  if (descriptionText.length > maxSymbols) {
    return `${descriptionText.substring(0, maxSymbols - 1)}...`;
  }

  return descriptionText;
};

const upperFirst = (string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : ``;
};


/***/ }),

/***/ "./src/view/card.js":
/*!**************************!*\
  !*** ./src/view/card.js ***!
  \**************************/
/*! exports provided: createCardFilmTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardFilmTemplate", function() { return createCardFilmTemplate; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts.js */ "./src/consts.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");




const createCardFilmTemplate = (film) => {
  const {poster, title, rating, genre, description, productionYear, duration, comments, isWatchList, isWatched, isFavourite} = film;

  const year = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(productionYear).format(`YYYY`);
  const time = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(duration).format(`H`);
  const minutes = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(duration).format(`m`);

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${year}</span>
    <span class="film-card__duration">${time}h ${minutes}m</span>
    <span class="film-card__genre">${genre[0]}</span>
  </p>
  <img src="./images/posters/${poster}" alt="" class="film-card__poster">
  <p class="film-card__description">${Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["limitDesc"])(description, _consts_js__WEBPACK_IMPORTED_MODULE_1__["MAX_SYMBOLS_DESCRIPTION"])}</p>
  <a class="film-card__comments">${comments.length} comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchList ? `film-card__controls-item--active` : ``}" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatched ? `film-card__controls-item--active` : ``}" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavourite ? `film-card__controls-item--active` : ``}" type="button">Mark as favorite</button>
  </div>
</article>`;
};


/***/ }),

/***/ "./src/view/films-list.js":
/*!********************************!*\
  !*** ./src/view/films-list.js ***!
  \********************************/
/*! exports provided: createFilmsListTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsListTemplate", function() { return createFilmsListTemplate; });
const createFilmsListTemplate = () => {
  return `<section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container">
    </div>
  </section>`;
};


/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: createFilterTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilterTemplate", function() { return createFilterTemplate; });
const createFilterTemplate = () => {
  return `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`;
};


/***/ }),

/***/ "./src/view/main-content.js":
/*!**********************************!*\
  !*** ./src/view/main-content.js ***!
  \**********************************/
/*! exports provided: createMainContentTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainContentTemplate", function() { return createMainContentTemplate; });
const createMainContentTemplate = () => {
  return `<section class="films">

  </section>`;
};


/***/ }),

/***/ "./src/view/most-comment.js":
/*!**********************************!*\
  !*** ./src/view/most-comment.js ***!
  \**********************************/
/*! exports provided: createMostCommentedListTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMostCommentedListTemplate", function() { return createMostCommentedListTemplate; });
const createMostCommentedListTemplate = () => {
  return `<section class="films-list films-list--extra films-list--most-comment">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container">
  </div>
    </section>`;
};


/***/ }),

/***/ "./src/view/popup.js":
/*!***************************!*\
  !*** ./src/view/popup.js ***!
  \***************************/
/*! exports provided: createPopupTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopupTemplate", function() { return createPopupTemplate; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts.js */ "./src/consts.js");



const createPopupTemplate = (film, comment) => {
  const {poster, title, rating, genre, description, productionYear, duration, director, cast, screenwriter, country, comments, ageRating, isWatchList, isWatched, isFavourite} = film;

  const productionDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(productionYear).format(`D MMMM YYYY`);
  const time = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(duration).format(`H`);
  const minutes = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(duration).format(`m`);

  const createCommentNodeTemplate = (elem) => {

    return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${elem.emoji}" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
      <p class="film-details__comment-text">${elem.text}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${elem.author}</span>
        <span class="film-details__comment-day">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(elem.date).format(`YYYY/MM/DD HH:mm`)}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;
  };

  const createGenreNodeTemplate = (elem) => {
    return `<span class="film-details__genre">${elem}</span>`;
  };

  const createGenresNodeTemplate = (genreArray) => {
    return genreArray.map(createGenreNodeTemplate).join(` `);
  };

  const createCommentsNodeTemplate = (commentArray) => {
    return commentArray.map(createCommentNodeTemplate).join(` `);
  };

  const comentsNodeTemplate = createCommentsNodeTemplate(comment);
  const genresNodeTemplate = createGenresNodeTemplate(genre);

  return `<section class="film-details hidden">
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
              <td class="film-details__cell">${screenwriter}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${cast}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${productionDate}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${time}h ${minutes}m</td>
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
            ${description}
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


/***/ }),

/***/ "./src/view/show-more-btn.js":
/*!***********************************!*\
  !*** ./src/view/show-more-btn.js ***!
  \***********************************/
/*! exports provided: createShowMoreBtnTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShowMoreBtnTemplate", function() { return createShowMoreBtnTemplate; });
const createShowMoreBtnTemplate = () => `<button class="films-list__show-more">Show more</button>`;


/***/ }),

/***/ "./src/view/site-menu.js":
/*!*******************************!*\
  !*** ./src/view/site-menu.js ***!
  \*******************************/
/*! exports provided: createSiteMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSiteMenuTemplate", function() { return createSiteMenuTemplate; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createFilterItemTemplate = (filter, isActive) => {
  const {name, count} = filter;

  return (
    `<a href="#${name}"
        class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">
        ${name === `all` ? `All movies` : `${Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["upperFirst"])(name)}`}
        ${name !== `all` ? `<span class="main-navigation__item-count">${count}</span>` : ``}
    </a>`
  );
};

const createSiteMenuTemplate = (filterItems) => {

  const filterItemsTemplate = filterItems.map((filter, index) => createFilterItemTemplate(filter, index === 0)).join(``);

  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    ${filterItemsTemplate}
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};


/***/ }),

/***/ "./src/view/statistics.js":
/*!********************************!*\
  !*** ./src/view/statistics.js ***!
  \********************************/
/*! exports provided: createSiteStatisticTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSiteStatisticTemplate", function() { return createSiteStatisticTemplate; });
const createSiteStatisticTemplate = (films) => `<p>${films.length} movies inside</p>`;


/***/ }),

/***/ "./src/view/top-rated.js":
/*!*******************************!*\
  !*** ./src/view/top-rated.js ***!
  \*******************************/
/*! exports provided: createTopRatedListTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTopRatedListTemplate", function() { return createTopRatedListTemplate; });
const createTopRatedListTemplate = () => {
  return `<section class="films-list films-list--extra films-list--top-rated">
  <h2 class="films-list__title">Top rated</h2>
  <div class="films-list__container">
  </div>
    </section>`;
};


/***/ }),

/***/ "./src/view/user-rang.js":
/*!*******************************!*\
  !*** ./src/view/user-rang.js ***!
  \*******************************/
/*! exports provided: createUserRangTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserRangTemplate", function() { return createUserRangTemplate; });
const createUserRangTemplate = () => {
  return `<section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map