webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/container/SideMenue.tsx":
/*!*************************************!*\
  !*** ./src/container/SideMenue.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/component/Button */ "./src/component/Button.tsx");
/* harmony import */ var _util_createPeriod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/util/createPeriod */ "./src/util/createPeriod.ts");
/* harmony import */ var _ducks_anime_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ducks/anime/slice */ "./src/ducks/anime/slice.ts");
/* harmony import */ var _css_style_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/style.module.scss */ "./src/css/style.module.scss");
/* harmony import */ var _css_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_style_module_scss__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "E:\\environment\\react-workspace\\react-anime\\src\\container\\SideMenue.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var date = new Date();

var SeasonList = function SeasonList() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var buttonList = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    year: date.getFullYear(),
    period: Object(_util_createPeriod__WEBPACK_IMPORTED_MODULE_5__["default"])(date.getMonth() + 1),
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
  }),
      animeInfo = _useState[0],
      setAnimeInfo = _useState[1];

  var getDefaultAnimeList = function getDefaultAnimeList() {
    dispatch(Object(_ducks_anime_slice__WEBPACK_IMPORTED_MODULE_6__["getAnnimeAsync"])(date.getFullYear(), Object(_util_createPeriod__WEBPACK_IMPORTED_MODULE_5__["default"])(date.getMonth() + 1)));
  };

  var handleClickSetSeason = function handleClickSetSeason(year, period) {
    setAnimeInfo(_objectSpread(_objectSpread({}, animeInfo), {}, {
      year: year,
      period: period
    }));
  };

  var _loop = function _loop(i) {
    animeInfo.seasons.map(function (season) {
      buttonList.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_component_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        year: i,
        season: season.season,
        period: season.period,
        handleClick: function handleClick(year, period) {
          return handleClickSetSeason(year, period);
        }
      }, "".concat(i, " ").concat(season.period), false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, _this));
    });
  };

  for (var i = date.getFullYear(); 2014 <= i; i--) {
    _loop(i);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch(Object(_ducks_anime_slice__WEBPACK_IMPORTED_MODULE_6__["getAnnimeAsync"])(animeInfo.year, animeInfo.period));
  }, [animeInfo.year, animeInfo.period]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      onLoad: getDefaultAnimeList,
      className: _css_style_module_scss__WEBPACK_IMPORTED_MODULE_7__["menue_bar"],
      children: buttonList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 3
  }, _this);
};

_s(SeasonList, "QNRjFDUrxkwOjviEdEiR+FqAeeM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = SeasonList;
/* harmony default export */ __webpack_exports__["default"] = (SeasonList);

var _c;

$RefreshReg$(_c, "SeasonList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9TaWRlTWVudWUudHN4Il0sIm5hbWVzIjpbImRhdGUiLCJEYXRlIiwiU2Vhc29uTGlzdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJidXR0b25MaXN0IiwidXNlU3RhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJwZXJpb2QiLCJjcmVhdGVQZXJpb2RzIiwiZ2V0TW9udGgiLCJzZWFzb25zIiwic2Vhc29uIiwiYW5pbWVJbmZvIiwic2V0QW5pbWVJbmZvIiwiZ2V0RGVmYXVsdEFuaW1lTGlzdCIsImdldEFubmltZUFzeW5jIiwiaGFuZGxlQ2xpY2tTZXRTZWFzb24iLCJpIiwibWFwIiwicHVzaCIsInVzZUVmZmVjdCIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBYjs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFtQjtBQUFBOztBQUNyQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsTUFBTUMsVUFBVSxHQUFHLEVBQW5COztBQUhxQyxrQkFLSEMsc0RBQVEsQ0FBQztBQUMxQ0MsUUFBSSxFQUFFUCxJQUFJLENBQUNRLFdBQUwsRUFEb0M7QUFFMUNDLFVBQU0sRUFBRUMsa0VBQWEsQ0FBQ1YsSUFBSSxDQUFDVyxRQUFMLEtBQWtCLENBQW5CLENBRnFCO0FBRzFDQyxXQUFPLEVBQUUsQ0FDUjtBQUNDQyxZQUFNLEVBQUUsR0FEVDtBQUVDSixZQUFNLEVBQUU7QUFGVCxLQURRLEVBS1I7QUFDQ0ksWUFBTSxFQUFFLEdBRFQ7QUFFQ0osWUFBTSxFQUFFO0FBRlQsS0FMUSxFQVNSO0FBQ0NJLFlBQU0sRUFBRSxHQURUO0FBRUNKLFlBQU0sRUFBRTtBQUZULEtBVFEsRUFhUjtBQUNDSSxZQUFNLEVBQUUsR0FEVDtBQUVDSixZQUFNLEVBQUU7QUFGVCxLQWJRO0FBSGlDLEdBQUQsQ0FMTDtBQUFBLE1BSzlCSyxTQUw4QjtBQUFBLE1BS25CQyxZQUxtQjs7QUE0QnJDLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNqQ2IsWUFBUSxDQUFDYyx5RUFBYyxDQUFDakIsSUFBSSxDQUFDUSxXQUFMLEVBQUQsRUFBcUJFLGtFQUFhLENBQUNWLElBQUksQ0FBQ1csUUFBTCxLQUFrQixDQUFuQixDQUFsQyxDQUFmLENBQVI7QUFDQSxHQUZEOztBQUlBLE1BQU1PLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ1gsSUFBRCxFQUFlRSxNQUFmLEVBQWtDO0FBQzlETSxnQkFBWSxpQ0FDUkQsU0FEUTtBQUVYUCxVQUFJLEVBQUVBLElBRks7QUFHWEUsWUFBTSxFQUFFQTtBQUhHLE9BQVo7QUFLQSxHQU5EOztBQWhDcUMsNkJBd0M1QlUsQ0F4QzRCO0FBeUNwQ0wsYUFBUyxDQUFDRixPQUFWLENBQWtCUSxHQUFsQixDQUFzQixVQUFDUCxNQUFELEVBQVk7QUFDakNSLGdCQUFVLENBQUNnQixJQUFYLGVBQ0MscUVBQUMseURBQUQ7QUFFQyxZQUFJLEVBQUVGLENBRlA7QUFHQyxjQUFNLEVBQUVOLE1BQU0sQ0FBQ0EsTUFIaEI7QUFJQyxjQUFNLEVBQUVBLE1BQU0sQ0FBQ0osTUFKaEI7QUFLQyxtQkFBVyxFQUFFLHFCQUFDRixJQUFELEVBQWVFLE1BQWY7QUFBQSxpQkFBa0NTLG9CQUFvQixDQUFDWCxJQUFELEVBQU9FLE1BQVAsQ0FBdEQ7QUFBQTtBQUxkLG1CQUNTVSxDQURULGNBQ2NOLE1BQU0sQ0FBQ0osTUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBU0EsS0FWRDtBQXpDb0M7O0FBd0NyQyxPQUFLLElBQUlVLENBQUMsR0FBR25CLElBQUksQ0FBQ1EsV0FBTCxFQUFiLEVBQWlDLFFBQVFXLENBQXpDLEVBQTRDQSxDQUFDLEVBQTdDLEVBQWlEO0FBQUEsVUFBeENBLENBQXdDO0FBWWhEOztBQUVERyx5REFBUyxDQUFDLFlBQU07QUFDZm5CLFlBQVEsQ0FBQ2MseUVBQWMsQ0FBQ0gsU0FBUyxDQUFDUCxJQUFYLEVBQWlCTyxTQUFTLENBQUNMLE1BQTNCLENBQWYsQ0FBUjtBQUNBLEdBRlEsRUFFTixDQUFDSyxTQUFTLENBQUNQLElBQVgsRUFBaUJPLFNBQVMsQ0FBQ0wsTUFBM0IsQ0FGTSxDQUFUO0FBSUEsc0JBQ0M7QUFBQSwyQkFDQztBQUFLLFlBQU0sRUFBRU8sbUJBQWI7QUFBa0MsZUFBUyxFQUFFTyxnRUFBN0M7QUFBQSxnQkFDRWxCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQU9BLENBakVEOztHQUFNSCxVO1VBQ1lFLHVEOzs7S0FEWkYsVTtBQW1FU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNGZkN2YyYzRjZmQzNjk4NDFjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ34vY29tcG9uZW50L0J1dHRvbic7XHJcbmltcG9ydCBjcmVhdGVQZXJpb2RzIGZyb20gJ34vdXRpbC9jcmVhdGVQZXJpb2QnO1xyXG5pbXBvcnQgeyBnZXRBbm5pbWVBc3luYyB9IGZyb20gJy4uL2R1Y2tzL2FuaW1lL3NsaWNlJztcclxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4uL2Nzcy9zdHlsZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbmNvbnN0IFNlYXNvbkxpc3QgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblx0Y29uc3QgYnV0dG9uTGlzdCA9IFtdO1xyXG5cclxuXHRjb25zdCBbYW5pbWVJbmZvLCBzZXRBbmltZUluZm9dID0gdXNlU3RhdGUoe1xyXG5cdFx0eWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLFxyXG5cdFx0cGVyaW9kOiBjcmVhdGVQZXJpb2RzKGRhdGUuZ2V0TW9udGgoKSArIDEpLFxyXG5cdFx0c2Vhc29uczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2Vhc29uOiAn5YasJyxcclxuXHRcdFx0XHRwZXJpb2Q6IDQsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWFzb246ICfnp4snLFxyXG5cdFx0XHRcdHBlcmlvZDogMyxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlYXNvbjogJ+WkjycsXHJcblx0XHRcdFx0cGVyaW9kOiAyLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2Vhc29uOiAn5pilJyxcclxuXHRcdFx0XHRwZXJpb2Q6IDEsXHJcblx0XHRcdH0sXHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBnZXREZWZhdWx0QW5pbWVMaXN0ID0gKCkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goZ2V0QW5uaW1lQXN5bmMoZGF0ZS5nZXRGdWxsWWVhcigpLCBjcmVhdGVQZXJpb2RzKGRhdGUuZ2V0TW9udGgoKSArIDEpKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2tTZXRTZWFzb24gPSAoeWVhcjogbnVtYmVyLCBwZXJpb2Q6IG51bWJlcikgPT4ge1xyXG5cdFx0c2V0QW5pbWVJbmZvKHtcclxuXHRcdFx0Li4uYW5pbWVJbmZvLFxyXG5cdFx0XHR5ZWFyOiB5ZWFyLFxyXG5cdFx0XHRwZXJpb2Q6IHBlcmlvZCxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGZvciAobGV0IGkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7IDIwMTQgPD0gaTsgaS0tKSB7XHJcblx0XHRhbmltZUluZm8uc2Vhc29ucy5tYXAoKHNlYXNvbikgPT4ge1xyXG5cdFx0XHRidXR0b25MaXN0LnB1c2goXHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0a2V5PXtgJHtpfSAke3NlYXNvbi5wZXJpb2R9YH1cclxuXHRcdFx0XHRcdHllYXI9e2l9XHJcblx0XHRcdFx0XHRzZWFzb249e3NlYXNvbi5zZWFzb259XHJcblx0XHRcdFx0XHRwZXJpb2Q9e3NlYXNvbi5wZXJpb2R9XHJcblx0XHRcdFx0XHRoYW5kbGVDbGljaz17KHllYXI6IG51bWJlciwgcGVyaW9kOiBudW1iZXIpID0+IGhhbmRsZUNsaWNrU2V0U2Vhc29uKHllYXIsIHBlcmlvZCl9XHJcblx0XHRcdFx0PjwvQnV0dG9uPixcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRpc3BhdGNoKGdldEFubmltZUFzeW5jKGFuaW1lSW5mby55ZWFyLCBhbmltZUluZm8ucGVyaW9kKSk7XHJcblx0fSwgW2FuaW1lSW5mby55ZWFyLCBhbmltZUluZm8ucGVyaW9kXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IG9uTG9hZD17Z2V0RGVmYXVsdEFuaW1lTGlzdH0gY2xhc3NOYW1lPXtzdHlsZXMubWVudWVfYmFyfT5cclxuXHRcdFx0XHR7YnV0dG9uTGlzdH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Vhc29uTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==