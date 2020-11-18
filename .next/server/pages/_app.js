module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/Button.tsx":
/*!**********************************!*\
  !*** ./src/component/Button.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "E:\\environment\\react-workspace\\react-anime\\src\\component\\Button.tsx";


const Button = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      onClick: () => props.handleClick(props.year, props.period),
      children: `${props.year} ${props.season}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/container/SideMenue.tsx":
/*!*************************************!*\
  !*** ./src/container/SideMenue.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/component/Button */ "./src/component/Button.tsx");
/* harmony import */ var _util_createPeriod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/util/createPeriod */ "./src/util/createPeriod.ts");
/* harmony import */ var _ducks_anime_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ducks/anime/slice */ "./src/ducks/anime/slice.ts");
/* harmony import */ var _css_style_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/style.module.scss */ "./src/css/style.module.scss");
/* harmony import */ var _css_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_style_module_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "E:\\environment\\react-workspace\\react-anime\\src\\container\\SideMenue.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const date = new Date();

const SeasonList = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const buttonList = [];
  const {
    0: animeInfo,
    1: setAnimeInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    year: date.getFullYear(),
    period: Object(_util_createPeriod__WEBPACK_IMPORTED_MODULE_4__["default"])(date.getMonth() + 1),
    seasons: [{
      season: '冬',
      period: 4
    }, {
      season: '秋',
      period: 3
    }, {
      season: '夏',
      period: 2
    }, {
      season: '春',
      period: 1
    }]
  });

  const getDefaultAnimeList = () => {
    dispatch(Object(_ducks_anime_slice__WEBPACK_IMPORTED_MODULE_5__["getAnnimeAsync"])(date.getFullYear(), Object(_util_createPeriod__WEBPACK_IMPORTED_MODULE_4__["default"])(date.getMonth() + 1)));
  };

  const handleClickSetSeason = (year, period) => {
    setAnimeInfo(_objectSpread(_objectSpread({}, animeInfo), {}, {
      year: year,
      period: period
    }));
  };

  for (let i = date.getFullYear(); 2014 <= i; i--) {
    animeInfo.seasons.map(season => {
      buttonList.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        year: i,
        season: season.season,
        period: season.period,
        handleClick: (year, period) => handleClickSetSeason(year, period)
      }, `${i} ${season.period}`, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, undefined));
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch(Object(_ducks_anime_slice__WEBPACK_IMPORTED_MODULE_5__["getAnnimeAsync"])(animeInfo.year, animeInfo.period));
  }, [animeInfo.year, animeInfo.period]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _css_style_module_scss__WEBPACK_IMPORTED_MODULE_6__["menue_bar"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onLoad: getDefaultAnimeList,
      children: buttonList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SeasonList);

/***/ }),

/***/ "./src/css/style.module.scss":
/*!***********************************!*\
  !*** ./src/css/style.module.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main_content": "style_main_content__2iohD",
	"menue_bar": "style_menue_bar__115n6"
};


/***/ }),

/***/ "./src/ducks/anime/slice.ts":
/*!**********************************!*\
  !*** ./src/ducks/anime/slice.ts ***!
  \**********************************/
/*! exports provided: initialState, getAnnimeRequest, default, getAnnimeAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnnimeRequest", function() { return getAnnimeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnnimeAsync", function() { return getAnnimeAsync; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  items: {
    year: null,
    period: null,
    animeList: [{
      id: 1,
      title: '',
      title_short1: '',
      title_short2: '',
      title_short3: '',
      public_url: '',
      twitter_account: '',
      twitter_hash_tag: '',
      cours_id: null,
      created_at: '',
      updated_at: '',
      sex: null,
      city_code: null,
      sequel: null,
      city_name: '',
      product_companies: ''
    }]
  },
  loading: true,
  error: null
};
const animeInfoSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'anime',
  initialState,
  reducers: {
    getAnnimeRequest: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
      items: action.payload
    }),
    getAnnimeFailure: (state, action) => _objectSpread({}, state)
  }
});
const {
  getAnnimeRequest
} = animeInfoSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (animeInfoSlice);
const getAnnimeAsync = (year, period) => async dispatch => {
  await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://api.moemoe.tokyo/anime/v1/master/${year}/${period}`).then(response => {
    const animeList = {
      year: year,
      period: period,
      animeList: response.data
    };
    dispatch(getAnnimeRequest(animeList));
  });
};

/***/ }),

/***/ "./src/ducks/createStore.ts":
/*!**********************************!*\
  !*** ./src/ducks/createStore.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _anime_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anime/slice */ "./src/ducks/anime/slice.ts");




const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  anime: _anime_slice__WEBPACK_IMPORTED_MODULE_3__["default"].reducer
});

const preloadedState = () => {
  return {
    anime: _anime_slice__WEBPACK_IMPORTED_MODULE_3__["initialState"]
  };
};

const createStore = () => {
  const middlewareList = [...Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["getDefaultMiddleware"])(), redux_logger__WEBPACK_IMPORTED_MODULE_1___default.a];
  return Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__["configureStore"])({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: true,
    preloadedState: preloadedState()
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createStore);

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ducks_createStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ducks/createStore */ "./src/ducks/createStore.ts");
/* harmony import */ var _css_style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.module.scss */ "./src/css/style.module.scss");
/* harmony import */ var _css_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _container_SideMenue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../container/SideMenue */ "./src/container/SideMenue.tsx");

var _jsxFileName = "E:\\environment\\react-workspace\\react-anime\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: Object(_ducks_createStore__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _css_style_module_scss__WEBPACK_IMPORTED_MODULE_4__["main_content"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_container_SideMenue__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/util/createPeriod.ts":
/*!**********************************!*\
  !*** ./src/util/createPeriod.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createPeriods = month => {
  if (1 <= month && month <= 3) {
    return 1;
  } else if (4 <= month && month <= 6) {
    return 2;
  } else if (7 <= month && month <= 9) {
    return 3;
  } else if (10 <= month && month <= 12) {
    return 4;
  } else {
    console.log('error!!');
    return 5;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (createPeriods);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9CdXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvU2lkZU1lbnVlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9kdWNrcy9hbmltZS9zbGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHVja3MvY3JlYXRlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlsL2NyZWF0ZVBlcmlvZC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIiJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwieWVhciIsInBlcmlvZCIsInNlYXNvbiIsImRhdGUiLCJEYXRlIiwiU2Vhc29uTGlzdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJidXR0b25MaXN0IiwiYW5pbWVJbmZvIiwic2V0QW5pbWVJbmZvIiwidXNlU3RhdGUiLCJnZXRGdWxsWWVhciIsImNyZWF0ZVBlcmlvZHMiLCJnZXRNb250aCIsInNlYXNvbnMiLCJnZXREZWZhdWx0QW5pbWVMaXN0IiwiZ2V0QW5uaW1lQXN5bmMiLCJoYW5kbGVDbGlja1NldFNlYXNvbiIsImkiLCJtYXAiLCJwdXNoIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJhbmltZUxpc3QiLCJpZCIsInRpdGxlIiwidGl0bGVfc2hvcnQxIiwidGl0bGVfc2hvcnQyIiwidGl0bGVfc2hvcnQzIiwicHVibGljX3VybCIsInR3aXR0ZXJfYWNjb3VudCIsInR3aXR0ZXJfaGFzaF90YWciLCJjb3Vyc19pZCIsImNyZWF0ZWRfYXQiLCJ1cGRhdGVkX2F0Iiwic2V4IiwiY2l0eV9jb2RlIiwic2VxdWVsIiwiY2l0eV9uYW1lIiwicHJvZHVjdF9jb21wYW5pZXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJhbmltZUluZm9TbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZ2V0QW5uaW1lUmVxdWVzdCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImdldEFubmltZUZhaWx1cmUiLCJhY3Rpb25zIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJhbmltZSIsInJlZHVjZXIiLCJwcmVsb2FkZWRTdGF0ZSIsIm5ldHdvcmtTdGF0ZSIsImNyZWF0ZVN0b3JlIiwibWlkZGxld2FyZUxpc3QiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsImxvZ2dlciIsImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZSIsImRldlRvb2xzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtb250aCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFD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K0QsS0FBRCxJQUEyQjtBQUNoRCxNQUFJLEtBQUtBLEtBQUwsSUFBY0EsS0FBSyxJQUFJLENBQTNCLEVBQThCO0FBQzdCLFdBQU8sQ0FBUDtBQUNBLEdBRkQsTUFFTyxJQUFJLEtBQUtBLEtBQUwsSUFBY0EsS0FBSyxJQUFJLENBQTNCLEVBQThCO0FBQ3BDLFdBQU8sQ0FBUDtBQUNBLEdBRk0sTUFFQSxJQUFJLEtBQUtBLEtBQUwsSUFBY0EsS0FBSyxJQUFJLENBQTNCLEVBQThCO0FBQ3BDLFdBQU8sQ0FBUDtBQUNBLEdBRk0sTUFFQSxJQUFJLE1BQU1BLEtBQU4sSUFBZUEsS0FBSyxJQUFJLEVBQTVCLEVBQWdDO0FBQ3RDLFdBQU8sQ0FBUDtBQUNBLEdBRk0sTUFFQTtBQUNOQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsV0FBTyxDQUFQO0FBQ0E7QUFDRCxDQWJEOztBQWVlakUsNEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlQ2xpY2socHJvcHMueWVhciwgcHJvcHMucGVyaW9kKX0+e2Ake3Byb3BzLnllYXJ9ICR7cHJvcHMuc2Vhc29ufWB9PC9idXR0b24+XHJcblx0XHRcdDxicj48L2JyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ34vY29tcG9uZW50L0J1dHRvbic7XHJcbmltcG9ydCBjcmVhdGVQZXJpb2RzIGZyb20gJ34vdXRpbC9jcmVhdGVQZXJpb2QnO1xyXG5pbXBvcnQgeyBnZXRBbm5pbWVBc3luYyB9IGZyb20gJy4uL2R1Y2tzL2FuaW1lL3NsaWNlJztcclxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4uL2Nzcy9zdHlsZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbmNvbnN0IFNlYXNvbkxpc3QgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblx0Y29uc3QgYnV0dG9uTGlzdCA9IFtdO1xyXG5cclxuXHRjb25zdCBbYW5pbWVJbmZvLCBzZXRBbmltZUluZm9dID0gdXNlU3RhdGUoe1xyXG5cdFx0eWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLFxyXG5cdFx0cGVyaW9kOiBjcmVhdGVQZXJpb2RzKGRhdGUuZ2V0TW9udGgoKSArIDEpLFxyXG5cdFx0c2Vhc29uczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2Vhc29uOiAn5YasJyxcclxuXHRcdFx0XHRwZXJpb2Q6IDQsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWFzb246ICfnp4snLFxyXG5cdFx0XHRcdHBlcmlvZDogMyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlYXNvbjogJ+WkjycsXHJcblx0XHRcdFx0cGVyaW9kOiAyLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2Vhc29uOiAn5pilJyxcclxuXHRcdFx0XHRwZXJpb2Q6IDEsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBnZXREZWZhdWx0QW5pbWVMaXN0ID0gKCkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goZ2V0QW5uaW1lQXN5bmMoZGF0ZS5nZXRGdWxsWWVhcigpLCBjcmVhdGVQZXJpb2RzKGRhdGUuZ2V0TW9udGgoKSArIDEpKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2tTZXRTZWFzb24gPSAoeWVhcjogbnVtYmVyLCBwZXJpb2Q6IG51bWJlcikgPT4ge1xyXG5cdFx0c2V0QW5pbWVJbmZvKHtcclxuXHRcdFx0Li4uYW5pbWVJbmZvLFxyXG5cdFx0XHR5ZWFyOiB5ZWFyLFxyXG5cdFx0XHRwZXJpb2Q6IHBlcmlvZCxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGZvciAobGV0IGkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7IDIwMTQgPD0gaTsgaS0tKSB7XHJcblx0XHRhbmltZUluZm8uc2Vhc29ucy5tYXAoKHNlYXNvbikgPT4ge1xyXG5cdFx0XHRidXR0b25MaXN0LnB1c2goXHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0a2V5PXtgJHtpfSAke3NlYXNvbi5wZXJpb2R9YH1cclxuXHRcdFx0XHRcdHllYXI9e2l9XHJcblx0XHRcdFx0XHRzZWFzb249e3NlYXNvbi5zZWFzb259XHJcblx0XHRcdFx0XHRwZXJpb2Q9e3NlYXNvbi5wZXJpb2R9XHJcblx0XHRcdFx0XHRoYW5kbGVDbGljaz17KHllYXI6IG51bWJlciwgcGVyaW9kOiBudW1iZXIpID0+IGhhbmRsZUNsaWNrU2V0U2Vhc29uKHllYXIsIHBlcmlvZCl9XHJcblx0XHRcdFx0PjwvQnV0dG9uPixcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRpc3BhdGNoKGdldEFubmltZUFzeW5jKGFuaW1lSW5mby55ZWFyLCBhbmltZUluZm8ucGVyaW9kKSk7XHJcblx0fSwgW2FuaW1lSW5mby55ZWFyLCBhbmltZUluZm8ucGVyaW9kXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVlX2Jhcn0+XHJcblx0XHRcdDxkaXYgb25Mb2FkPXtnZXREZWZhdWx0QW5pbWVMaXN0fT57YnV0dG9uTGlzdH08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFzb25MaXN0O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluX2NvbnRlbnRcIjogXCJzdHlsZV9tYWluX2NvbnRlbnRfXzJpb2hEXCIsXG5cdFwibWVudWVfYmFyXCI6IFwic3R5bGVfbWVudWVfYmFyX18xMTVuNlwiXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTmV0d29ya1N0YXRlLCBTZWFzb25TdGF0ZSB9IGZyb20gJy4uLy4uL3R5cGUvdHlwZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBOZXR3b3JrU3RhdGUgPSB7XHJcblx0aXRlbXM6IHtcclxuXHRcdHllYXI6IG51bGwsXHJcblx0XHRwZXJpb2Q6IG51bGwsXHJcblx0XHRhbmltZUxpc3Q6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdHRpdGxlOiAnJyxcclxuXHRcdFx0XHR0aXRsZV9zaG9ydDE6ICcnLFxyXG5cdFx0XHRcdHRpdGxlX3Nob3J0MjogJycsXHJcblx0XHRcdFx0dGl0bGVfc2hvcnQzOiAnJyxcclxuXHRcdFx0XHRwdWJsaWNfdXJsOiAnJyxcclxuXHRcdFx0XHR0d2l0dGVyX2FjY291bnQ6ICcnLFxyXG5cdFx0XHRcdHR3aXR0ZXJfaGFzaF90YWc6ICcnLFxyXG5cdFx0XHRcdGNvdXJzX2lkOiBudWxsLFxyXG5cdFx0XHRcdGNyZWF0ZWRfYXQ6ICcnLFxyXG5cdFx0XHRcdHVwZGF0ZWRfYXQ6ICcnLFxyXG5cdFx0XHRcdHNleDogbnVsbCxcclxuXHRcdFx0XHRjaXR5X2NvZGU6IG51bGwsXHJcblx0XHRcdFx0c2VxdWVsOiBudWxsLFxyXG5cdFx0XHRcdGNpdHlfbmFtZTogJycsXHJcblx0XHRcdFx0cHJvZHVjdF9jb21wYW5pZXM6ICcnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XSxcclxuXHR9LFxyXG5cdGxvYWRpbmc6IHRydWUsXHJcblx0ZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBhbmltZUluZm9TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuXHRuYW1lOiAnYW5pbWUnLFxyXG5cdGluaXRpYWxTdGF0ZSxcclxuXHRyZWR1Y2Vyczoge1xyXG5cdFx0Z2V0QW5uaW1lUmVxdWVzdDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248U2Vhc29uU3RhdGU+KSA9PiAoe1xyXG5cdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0aXRlbXM6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0fSksXHJcblx0XHRnZXRBbm5pbWVGYWlsdXJlOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcclxuXHRcdFx0Li4uc3RhdGUsXHJcblx0XHR9KSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGdldEFubmltZVJlcXVlc3QgfSA9IGFuaW1lSW5mb1NsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbmltZUluZm9TbGljZTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbm5pbWVBc3luYyA9ICh5ZWFyOiBudW1iZXIsIHBlcmlvZDogbnVtYmVyKSA9PiBhc3luYyAoZGlzcGF0Y2g6IChhcmcwOiB7IHBheWxvYWQ6IGFueTsgdHlwZTogc3RyaW5nIH0pID0+IHZvaWQpID0+IHtcclxuXHRhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9hcGkubW9lbW9lLnRva3lvL2FuaW1lL3YxL21hc3Rlci8ke3llYXJ9LyR7cGVyaW9kfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRjb25zdCBhbmltZUxpc3Q6IFNlYXNvblN0YXRlID0geyB5ZWFyOiB5ZWFyLCBwZXJpb2Q6IHBlcmlvZCwgYW5pbWVMaXN0OiByZXNwb25zZS5kYXRhIH07XHJcblx0XHRkaXNwYXRjaChnZXRBbm5pbWVSZXF1ZXN0KGFuaW1lTGlzdCkpO1xyXG5cdH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcic7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBnZXREZWZhdWx0TWlkZGxld2FyZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgYW5pbWVJbmZvU2xpY2UsIHsgaW5pdGlhbFN0YXRlIGFzIG5ldHdvcmtTdGF0ZSB9IGZyb20gJy4vYW5pbWUvc2xpY2UnO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG5cdGFuaW1lOiBhbmltZUluZm9TbGljZS5yZWR1Y2VyLFxyXG59KTtcclxuXHJcbmNvbnN0IHByZWxvYWRlZFN0YXRlID0gKCkgPT4ge1xyXG5cdHJldHVybiB7IGFuaW1lOiBuZXR3b3JrU3RhdGUgfTtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFN0b3JlU3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBwcmVsb2FkZWRTdGF0ZT47XHJcblxyXG5leHBvcnQgdHlwZSBSZWR1eFN0b3JlID0gU3RvcmU8U3RvcmVTdGF0ZT47XHJcblxyXG5jb25zdCBjcmVhdGVTdG9yZSA9ICgpID0+IHtcclxuXHRjb25zdCBtaWRkbGV3YXJlTGlzdCA9IFsuLi5nZXREZWZhdWx0TWlkZGxld2FyZSgpLCBsb2dnZXJdO1xyXG5cdHJldHVybiBjb25maWd1cmVTdG9yZSh7XHJcblx0XHRyZWR1Y2VyOiByb290UmVkdWNlcixcclxuXHRcdG1pZGRsZXdhcmU6IG1pZGRsZXdhcmVMaXN0LFxyXG5cdFx0ZGV2VG9vbHM6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXHJcblx0XHRwcmVsb2FkZWRTdGF0ZTogcHJlbG9hZGVkU3RhdGUoKSxcclxuXHR9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuLi9kdWNrcy9jcmVhdGVTdG9yZSc7XHJcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuLi9jc3Mvc3R5bGUubW9kdWxlLnNjc3MnO1xyXG5cclxuaW1wb3J0IFNpZGVNZW51ZSBmcm9tICcuLi9jb250YWluZXIvU2lkZU1lbnVlJztcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFByb3ZpZGVyIHN0b3JlPXtjcmVhdGVTdG9yZSgpfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX2NvbnRlbnR9PlxyXG5cdFx0XHRcdDxTaWRlTWVudWUgLz5cclxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9Qcm92aWRlcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImNvbnN0IGNyZWF0ZVBlcmlvZHMgPSAobW9udGg6IG51bWJlcik6IG51bWJlciA9PiB7XHJcblx0aWYgKDEgPD0gbW9udGggJiYgbW9udGggPD0gMykge1xyXG5cdFx0cmV0dXJuIDE7XHJcblx0fSBlbHNlIGlmICg0IDw9IG1vbnRoICYmIG1vbnRoIDw9IDYpIHtcclxuXHRcdHJldHVybiAyO1xyXG5cdH0gZWxzZSBpZiAoNyA8PSBtb250aCAmJiBtb250aCA8PSA5KSB7XHJcblx0XHRyZXR1cm4gMztcclxuXHR9IGVsc2UgaWYgKDEwIDw9IG1vbnRoICYmIG1vbnRoIDw9IDEyKSB7XHJcblx0XHRyZXR1cm4gNDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coJ2Vycm9yISEnKTtcclxuXHRcdHJldHVybiA1O1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBlcmlvZHM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9