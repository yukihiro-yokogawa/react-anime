webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/css/style.module.scss":
false,

/***/ "./node_modules/css-loader/dist/runtime/api.js":
false,

/***/ "./node_modules/next/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
false,

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
        lineNumber: 52,
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
      className: styles.menue_bar,
      children: buttonList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
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

/***/ }),

/***/ "./src/css/style.module.scss":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9TaWRlTWVudWUudHN4Il0sIm5hbWVzIjpbImRhdGUiLCJEYXRlIiwiU2Vhc29uTGlzdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJidXR0b25MaXN0IiwidXNlU3RhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJwZXJpb2QiLCJjcmVhdGVQZXJpb2RzIiwiZ2V0TW9udGgiLCJzZWFzb25zIiwic2Vhc29uIiwiYW5pbWVJbmZvIiwic2V0QW5pbWVJbmZvIiwiZ2V0RGVmYXVsdEFuaW1lTGlzdCIsImdldEFubmltZUFzeW5jIiwiaGFuZGxlQ2xpY2tTZXRTZWFzb24iLCJpIiwibWFwIiwicHVzaCIsInVzZUVmZmVjdCIsInN0eWxlcyIsIm1lbnVlX2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFiOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQW1CO0FBQUE7O0FBQ3JDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxVQUFVLEdBQUcsRUFBbkI7O0FBSHFDLGtCQUtIQyxzREFBUSxDQUFDO0FBQzFDQyxRQUFJLEVBQUVQLElBQUksQ0FBQ1EsV0FBTCxFQURvQztBQUUxQ0MsVUFBTSxFQUFFQyxrRUFBYSxDQUFDVixJQUFJLENBQUNXLFFBQUwsS0FBa0IsQ0FBbkIsQ0FGcUI7QUFHMUNDLFdBQU8sRUFBRSxDQUNSO0FBQ0NDLFlBQU0sRUFBRSxHQURUO0FBRUNKLFlBQU0sRUFBRTtBQUZULEtBRFEsRUFLUjtBQUNDSSxZQUFNLEVBQUUsR0FEVDtBQUVDSixZQUFNLEVBQUU7QUFGVCxLQUxRLEVBU1I7QUFDQ0ksWUFBTSxFQUFFLEdBRFQ7QUFFQ0osWUFBTSxFQUFFO0FBRlQsS0FUUSxFQWFSO0FBQ0NJLFlBQU0sRUFBRSxHQURUO0FBRUNKLFlBQU0sRUFBRTtBQUZULEtBYlE7QUFIaUMsR0FBRCxDQUxMO0FBQUEsTUFLOUJLLFNBTDhCO0FBQUEsTUFLbkJDLFlBTG1COztBQTRCckMsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ2pDYixZQUFRLENBQUNjLHlFQUFjLENBQUNqQixJQUFJLENBQUNRLFdBQUwsRUFBRCxFQUFxQkUsa0VBQWEsQ0FBQ1YsSUFBSSxDQUFDVyxRQUFMLEtBQWtCLENBQW5CLENBQWxDLENBQWYsQ0FBUjtBQUNBLEdBRkQ7O0FBSUEsTUFBTU8sb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDWCxJQUFELEVBQWVFLE1BQWYsRUFBa0M7QUFDOURNLGdCQUFZLGlDQUNSRCxTQURRO0FBRVhQLFVBQUksRUFBRUEsSUFGSztBQUdYRSxZQUFNLEVBQUVBO0FBSEcsT0FBWjtBQUtBLEdBTkQ7O0FBaENxQyw2QkF3QzVCVSxDQXhDNEI7QUF5Q3BDTCxhQUFTLENBQUNGLE9BQVYsQ0FBa0JRLEdBQWxCLENBQXNCLFVBQUNQLE1BQUQsRUFBWTtBQUNqQ1IsZ0JBQVUsQ0FBQ2dCLElBQVgsZUFDQyxxRUFBQyx5REFBRDtBQUVDLFlBQUksRUFBRUYsQ0FGUDtBQUdDLGNBQU0sRUFBRU4sTUFBTSxDQUFDQSxNQUhoQjtBQUlDLGNBQU0sRUFBRUEsTUFBTSxDQUFDSixNQUpoQjtBQUtDLG1CQUFXLEVBQUUscUJBQUNGLElBQUQsRUFBZUUsTUFBZjtBQUFBLGlCQUFrQ1Msb0JBQW9CLENBQUNYLElBQUQsRUFBT0UsTUFBUCxDQUF0RDtBQUFBO0FBTGQsbUJBQ1NVLENBRFQsY0FDY04sTUFBTSxDQUFDSixNQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFTQSxLQVZEO0FBekNvQzs7QUF3Q3JDLE9BQUssSUFBSVUsQ0FBQyxHQUFHbkIsSUFBSSxDQUFDUSxXQUFMLEVBQWIsRUFBaUMsUUFBUVcsQ0FBekMsRUFBNENBLENBQUMsRUFBN0MsRUFBaUQ7QUFBQSxVQUF4Q0EsQ0FBd0M7QUFZaEQ7O0FBRURHLHlEQUFTLENBQUMsWUFBTTtBQUNmbkIsWUFBUSxDQUFDYyx5RUFBYyxDQUFDSCxTQUFTLENBQUNQLElBQVgsRUFBaUJPLFNBQVMsQ0FBQ0wsTUFBM0IsQ0FBZixDQUFSO0FBQ0EsR0FGUSxFQUVOLENBQUNLLFNBQVMsQ0FBQ1AsSUFBWCxFQUFpQk8sU0FBUyxDQUFDTCxNQUEzQixDQUZNLENBQVQ7QUFJQSxzQkFDQztBQUFBLDJCQUNDO0FBQUssWUFBTSxFQUFFTyxtQkFBYjtBQUFrQyxlQUFTLEVBQUVPLE1BQU0sQ0FBQ0MsU0FBcEQ7QUFBQSxnQkFDRW5CO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQU9BLENBakVEOztHQUFNSCxVO1VBQ1lFLHVEOzs7S0FEWkYsVTtBQW1FU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hNzdlODJjN2ViYmQxMzY2MWNiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ34vY29tcG9uZW50L0J1dHRvbic7XHJcbmltcG9ydCBjcmVhdGVQZXJpb2RzIGZyb20gJ34vdXRpbC9jcmVhdGVQZXJpb2QnO1xyXG5pbXBvcnQgeyBnZXRBbm5pbWVBc3luYyB9IGZyb20gJy4uL2R1Y2tzL2FuaW1lL3NsaWNlJztcclxuXHJcbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc3QgU2Vhc29uTGlzdCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHRjb25zdCBidXR0b25MaXN0ID0gW107XHJcblxyXG5cdGNvbnN0IFthbmltZUluZm8sIHNldEFuaW1lSW5mb10gPSB1c2VTdGF0ZSh7XHJcblx0XHR5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksXHJcblx0XHRwZXJpb2Q6IGNyZWF0ZVBlcmlvZHMoZGF0ZS5nZXRNb250aCgpICsgMSksXHJcblx0XHRzZWFzb25zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWFzb246ICflhqwnLFxyXG5cdFx0XHRcdHBlcmlvZDogNCxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlYXNvbjogJ+eniycsXHJcblx0XHRcdFx0cGVyaW9kOiAzLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2Vhc29uOiAn5aSPJyxcclxuXHRcdFx0XHRwZXJpb2Q6IDIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWFzb246ICfmmKUnLFxyXG5cdFx0XHRcdHBlcmlvZDogMSxcclxuXHRcdFx0fSxcclxuXHRcdF0sXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGdldERlZmF1bHRBbmltZUxpc3QgPSAoKSA9PiB7XHJcblx0XHRkaXNwYXRjaChnZXRBbm5pbWVBc3luYyhkYXRlLmdldEZ1bGxZZWFyKCksIGNyZWF0ZVBlcmlvZHMoZGF0ZS5nZXRNb250aCgpICsgMSkpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGlja1NldFNlYXNvbiA9ICh5ZWFyOiBudW1iZXIsIHBlcmlvZDogbnVtYmVyKSA9PiB7XHJcblx0XHRzZXRBbmltZUluZm8oe1xyXG5cdFx0XHQuLi5hbmltZUluZm8sXHJcblx0XHRcdHllYXI6IHllYXIsXHJcblx0XHRcdHBlcmlvZDogcGVyaW9kLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Zm9yIChsZXQgaSA9IGRhdGUuZ2V0RnVsbFllYXIoKTsgMjAxNCA8PSBpOyBpLS0pIHtcclxuXHRcdGFuaW1lSW5mby5zZWFzb25zLm1hcCgoc2Vhc29uKSA9PiB7XHJcblx0XHRcdGJ1dHRvbkxpc3QucHVzaChcclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRrZXk9e2Ake2l9ICR7c2Vhc29uLnBlcmlvZH1gfVxyXG5cdFx0XHRcdFx0eWVhcj17aX1cclxuXHRcdFx0XHRcdHNlYXNvbj17c2Vhc29uLnNlYXNvbn1cclxuXHRcdFx0XHRcdHBlcmlvZD17c2Vhc29uLnBlcmlvZH1cclxuXHRcdFx0XHRcdGhhbmRsZUNsaWNrPXsoeWVhcjogbnVtYmVyLCBwZXJpb2Q6IG51bWJlcikgPT4gaGFuZGxlQ2xpY2tTZXRTZWFzb24oeWVhciwgcGVyaW9kKX1cclxuXHRcdFx0XHQ+PC9CdXR0b24+LFxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goZ2V0QW5uaW1lQXN5bmMoYW5pbWVJbmZvLnllYXIsIGFuaW1lSW5mby5wZXJpb2QpKTtcclxuXHR9LCBbYW5pbWVJbmZvLnllYXIsIGFuaW1lSW5mby5wZXJpb2RdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxkaXYgb25Mb2FkPXtnZXREZWZhdWx0QW5pbWVMaXN0fSBjbGFzc05hbWU9e3N0eWxlcy5tZW51ZV9iYXJ9PlxyXG5cdFx0XHRcdHtidXR0b25MaXN0fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFzb25MaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9