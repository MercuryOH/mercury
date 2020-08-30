(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/createDiscussionModal.js":
/*!*********************************************!*\
  !*** ./components/createDiscussionModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function CreateDiscussionModal(_ref) {
  _s();

  var onCreate = _ref.onCreate;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      name = _useState[0],
      setDiscussionName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      modalState = _useState2[0],
      toggleModal = _useState2[1];

  function createDiscussion() {
    return _createDiscussion.apply(this, arguments);
  }

  function _createDiscussion() {
    _createDiscussion = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (name) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              toggleModal(false);
              onCreate({
                name: name,
                type: 'discussion'
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _createDiscussion.apply(this, arguments);
  }

  return __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    style: {
      borderless: 'true',
      width: '40%',
      height: '40%'
    },
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      color: "teal",
      content: "Create Discussions",
      fluid: true,
      style: {
        fontSize: '1vw'
      },
      onClick: function onClick() {
        toggleModal(true);
        setDiscussionName('');
      }
    }),
    open: modalState,
    onClose: function onClose() {
      return toggleModal(false);
    },
    closeOnDimmerClick: false,
    closeOnEscape: false,
    closeIcon: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Modal"].Content, {
    style: {
      borderless: 'true'
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    style: {
      fontSize: '2vw',
      textAlign: 'center',
      width: '100%',
      padding: '5%',
      height: '50%',
      margin: 'auto'
    },
    content: 'New Discussion'
  }), __jsx("div", {
    style: {
      textAlign: 'center',
      padding: '5%'
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    fluid: true,
    placeholder: "Discussion name",
    name: "name",
    value: name,
    onChange: function onChange(e) {
      return setDiscussionName(e.target.value);
    }
  })), __jsx("div", {
    style: {
      textAlign: 'center',
      width: '70%',
      height: '70%',
      margin: 'auto',
      padding: '5%'
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "teal",
    style: {
      width: '50%',
      fontSize: '1vw'
    },
    onClick: createDiscussion,
    content: 'Create'
  })))));
}

_s(CreateDiscussionModal, "lQ2dJg/0XbxRlgJxJfuFVAqd6iQ=");

_c = CreateDiscussionModal;
CreateDiscussionModal.propTypes = {
  onCreate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CreateDiscussionModal);

var _c;

$RefreshReg$(_c, "CreateDiscussionModal");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZURpc2N1c3Npb25Nb2RhbC5qcyJdLCJuYW1lcyI6WyJDcmVhdGVEaXNjdXNzaW9uTW9kYWwiLCJvbkNyZWF0ZSIsInVzZVN0YXRlIiwibmFtZSIsInNldERpc2N1c3Npb25OYW1lIiwibW9kYWxTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlRGlzY3Vzc2lvbiIsInR5cGUiLCJib3JkZXJsZXNzIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInBhZGRpbmciLCJtYXJnaW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxxQkFBVCxPQUE2QztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBQyxFQUFELENBREM7QUFBQSxNQUNwQ0MsSUFEb0M7QUFBQSxNQUM5QkMsaUJBRDhCOztBQUFBLG1CQUVURixzREFBUSxDQUFDLEtBQUQsQ0FGQztBQUFBLE1BRXBDRyxVQUZvQztBQUFBLE1BRXhCQyxXQUZ3Qjs7QUFBQSxXQUk1QkMsZ0JBSjRCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlNQUkzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ09KLElBRFA7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFHRUcseUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUwsc0JBQVEsQ0FBQztBQUFFRSxvQkFBSSxFQUFKQSxJQUFGO0FBQVFLLG9CQUFJLEVBQUU7QUFBZCxlQUFELENBQVI7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKMkM7QUFBQTtBQUFBOztBQVczQyxTQUNFLG1CQUNFLE1BQUMsdURBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRSxNQUFkO0FBQXNCQyxXQUFLLEVBQUUsS0FBN0I7QUFBb0NDLFlBQU0sRUFBRTtBQUE1QyxLQURUO0FBRUUsV0FBTyxFQUNMLE1BQUMsd0RBQUQ7QUFDRSxXQUFLLEVBQUMsTUFEUjtBQUVFLGFBQU8sRUFBQyxvQkFGVjtBQUdFLFdBQUssTUFIUDtBQUlFLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FKVDtBQUtFLGFBQU8sRUFBRSxtQkFBTTtBQUNiTixtQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRix5QkFBaUIsQ0FBQyxFQUFELENBQWpCO0FBQ0Q7QUFSSCxNQUhKO0FBY0UsUUFBSSxFQUFFQyxVQWRSO0FBZUUsV0FBTyxFQUFFO0FBQUEsYUFBTUMsV0FBVyxDQUFDLEtBQUQsQ0FBakI7QUFBQSxLQWZYO0FBZ0JFLHNCQUFrQixFQUFFLEtBaEJ0QjtBQWlCRSxpQkFBYSxFQUFFLEtBakJqQjtBQWtCRSxhQUFTO0FBbEJYLEtBb0JFLE1BQUMsdURBQUQsQ0FBTyxPQUFQO0FBQWUsU0FBSyxFQUFFO0FBQUVHLGdCQUFVLEVBQUU7QUFBZDtBQUF0QixLQUNFLE1BQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTEcsY0FBUSxFQUFFLEtBREw7QUFFTEMsZUFBUyxFQUFFLFFBRk47QUFHTEgsV0FBSyxFQUFFLE1BSEY7QUFJTEksYUFBTyxFQUFFLElBSko7QUFLTEgsWUFBTSxFQUFFLEtBTEg7QUFNTEksWUFBTSxFQUFFO0FBTkgsS0FEVDtBQVNFLFdBQU8sRUFBRTtBQVRYLElBREYsRUFhRTtBQUNFLFNBQUssRUFBRTtBQUNMRixlQUFTLEVBQUUsUUFETjtBQUVMQyxhQUFPLEVBQUU7QUFGSjtBQURULEtBTUUsTUFBQyx1REFBRDtBQUNFLFNBQUssTUFEUDtBQUVFLGVBQVcsRUFBQyxpQkFGZDtBQUdFLFFBQUksRUFBQyxNQUhQO0FBSUUsU0FBSyxFQUFFWCxJQUpUO0FBS0UsWUFBUSxFQUFFLGtCQUFDYSxDQUFEO0FBQUEsYUFBT1osaUJBQWlCLENBQUNZLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXhCO0FBQUE7QUFMWixJQU5GLENBYkYsRUE0QkU7QUFDRSxTQUFLLEVBQUU7QUFDTEwsZUFBUyxFQUFFLFFBRE47QUFFTEgsV0FBSyxFQUFFLEtBRkY7QUFHTEMsWUFBTSxFQUFFLEtBSEg7QUFJTEksWUFBTSxFQUFFLE1BSkg7QUFLTEQsYUFBTyxFQUFFO0FBTEo7QUFEVCxLQVNFLE1BQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUMsTUFEUjtBQUVFLFNBQUssRUFBRTtBQUFFSixXQUFLLEVBQUUsS0FBVDtBQUFnQkUsY0FBUSxFQUFFO0FBQTFCLEtBRlQ7QUFHRSxXQUFPLEVBQUVMLGdCQUhYO0FBSUUsV0FBTyxFQUFFO0FBSlgsSUFURixDQTVCRixDQXBCRixDQURGLENBREY7QUFzRUQ7O0dBakZRUCxxQjs7S0FBQUEscUI7QUFtRlRBLHFCQUFxQixDQUFDbUIsU0FBdEIsR0FBa0M7QUFDaENsQixVQUFRLEVBQUVtQixpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBRE8sQ0FBbEM7QUFJZXRCLG9GQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIEhlYWRlciwgU2VhcmNoLCBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuZnVuY3Rpb24gQ3JlYXRlRGlzY3Vzc2lvbk1vZGFsKHsgb25DcmVhdGUgfSkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXREaXNjdXNzaW9uTmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbW9kYWxTdGF0ZSwgdG9nZ2xlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURpc2N1c3Npb24oKSB7XHJcbiAgICBpZiAoIW5hbWUpIHJldHVyblxyXG5cclxuICAgIHRvZ2dsZU1vZGFsKGZhbHNlKVxyXG4gICAgb25DcmVhdGUoeyBuYW1lLCB0eXBlOiAnZGlzY3Vzc2lvbicgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBzdHlsZT17eyBib3JkZXJsZXNzOiAndHJ1ZScsIHdpZHRoOiAnNDAlJywgaGVpZ2h0OiAnNDAlJyB9fVxyXG4gICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cInRlYWxcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIERpc2N1c3Npb25zXCJcclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0b2dnbGVNb2RhbCh0cnVlKVxyXG4gICAgICAgICAgICAgIHNldERpc2N1c3Npb25OYW1lKCcnKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgb3Blbj17bW9kYWxTdGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB0b2dnbGVNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgY2xvc2VPbkRpbW1lckNsaWNrPXtmYWxzZX1cclxuICAgICAgICBjbG9zZU9uRXNjYXBlPXtmYWxzZX1cclxuICAgICAgICBjbG9zZUljb25cclxuICAgICAgPlxyXG4gICAgICAgIDxNb2RhbC5Db250ZW50IHN0eWxlPXt7IGJvcmRlcmxlc3M6ICd0cnVlJyB9fT5cclxuICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dycsXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc1JScsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnNTAlJyxcclxuICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY29udGVudD17J05ldyBEaXNjdXNzaW9uJ31cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzUlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpc2N1c3Npb24gbmFtZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGlzY3Vzc2lvbk5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICc3MCUnLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogJzcwJScsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzUlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbG9yPVwidGVhbFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBmb250U2l6ZTogJzF2dycgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtjcmVhdGVEaXNjdXNzaW9ufVxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9eydDcmVhdGUnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5DcmVhdGVEaXNjdXNzaW9uTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gIG9uQ3JlYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVEaXNjdXNzaW9uTW9kYWxcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==