(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/publisher.js":
/*!*********************************!*\
  !*** ./components/publisher.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Publisher; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _screenPublisher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screenPublisher */ "./components/screenPublisher.js");
/* harmony import */ var opentok_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! opentok-react */ "./node_modules/opentok-react/dist/index.js");
/* harmony import */ var opentok_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(opentok_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _util_EventEmitter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/EventEmitter */ "./components/util/EventEmitter.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Publisher = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Publisher, _Component);

  var _super = _createSuper(Publisher);

  function Publisher(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Publisher);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onError", function (err) {
      _this.setState({
        error: "Failed to publish: ".concat(err.message)
      });

      _util_EventEmitter__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"].publish('leaveCallOnError');
    });

    _this.state = {
      error: null,
      audio: true,
      video: true
    };

    _this.defineEventEmitterCallbacks();

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Publisher, [{
    key: "defineEventEmitterCallbacks",
    value: function defineEventEmitterCallbacks() {
      var _this2 = this;

      _util_EventEmitter__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"].subscribe('disableVideo', function () {
        _this2.setState({
          video: false
        });

        _util_EventEmitter__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"].publish('disableVideoButton');
      });
      _util_EventEmitter__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"].subscribe('enableVideo', function () {
        _this2.setState({
          video: true
        });

        _util_EventEmitter__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"].publish('enableVideoButton');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", null, this.state.error ? __jsx("div", null, "We noticed you denied access to your microphone or camera. Please click the camera/microphone blocked icon in your browser's address bar, allow access, and then refresh the page and rejoin the call. You will be able to mute yourself or disable your video once you join a call.") : null, __jsx(opentok_react__WEBPACK_IMPORTED_MODULE_9__["OTPublisher"], {
        properties: {
          width: '13.57vw',
          maxWidth: '13.57vw',
          maxHeight: '8vh',
          publishVideo: this.state.video,
          marginBottom: '5px',
          name: this.props.name,
          style: {
            buttonDisplayMode: 'on',
            nameDisplayMode: 'on'
          }
        },
        session: this.props.session,
        onError: this.onError
      }), __jsx(_screenPublisher__WEBPACK_IMPORTED_MODULE_8__["default"], {
        style: {
          width: '13.62vw',
          maxWidth: '13.62vw',
          height: '500px',
          maxHeight: '16vh',
          marginBottom: '5px'
        },
        session: this.props.session,
        name: this.props.name + "'s Screen"
      }));
    }
  }]);

  return Publisher;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



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

/***/ }),

/***/ "./components/screenContainer.js":
/*!***************************************!*\
  !*** ./components/screenContainer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _publisher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./publisher */ "./components/publisher.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util_EventEmitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/EventEmitter */ "./components/util/EventEmitter.js");
/* harmony import */ var opentok_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! opentok-react */ "./node_modules/opentok-react/dist/index.js");
/* harmony import */ var opentok_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(opentok_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var ScreenContainer = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ScreenContainer, _React$Component);

  var _super = _createSuper(ScreenContainer);

  function ScreenContainer(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScreenContainer);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handlePublish", function () {
      console.log('Successfully published!');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubscribe", function () {
      console.log('Subscribed!');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSessionError", function (error) {
      console.error(error);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handlePublishError", function (error) {
      console.error(error);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubscribeError", function (error) {
      console.error(error);
    });

    _this.state = {
      ssButton: true,
      streams: [],
      focusStream: {},
      videoButton: true,
      expand: false,
      searchName: '',
      searchSession: ''
    };

    _this.defineEventEmitterCallbacks();

    _this.sessionEventHandlers = {
      sessionConnected: function sessionConnected() {},
      sessionDisconnected: function sessionDisconnected() {},
      sessionReconnected: function sessionReconnected() {},
      sessionReconnecting: function sessionReconnecting() {}
    };
    _this.publishEventHandlers = {
      accessDenied: function accessDenied() {},
      streamCreated: function streamCreated() {},
      streamDestroyed: function streamDestroyed() {}
    };
    _this.subscribeEventHandlers = {
      videoEnabled: function videoEnabled() {},
      videoDisabled: function videoDisabled() {}
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScreenContainer, [{
    key: "defineEventEmitterCallbacks",
    value: function defineEventEmitterCallbacks() {
      var _this2 = this;

      _util_EventEmitter__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"].subscribe('disableVideoButton', function () {
        _this2.setState({
          videoButton: false
        });
      });
      _util_EventEmitter__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"].subscribe('enableVideoButton', function () {
        _this2.setState({
          videoButton: true
        });
      });
      _util_EventEmitter__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"].subscribe('newScreensharer', function (msg) {
        if (_this2.props.sessionId === msg.sessionId) {
          _this2.setState({
            focusStream: lodash__WEBPACK_IMPORTED_MODULE_10___default.a.find(_this2.state.streams, {
              'name': msg.name
            }),
            expand: true
          });
        }
      });
    }
  }, {
    key: "getStreamToDisplay",
    value: function getStreamToDisplay() {
      var _this3 = this;

      return this.state.expand === true && this.state.focusStream != undefined ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        onDoubleClick: function onDoubleClick() {
          _this3.setState({
            focusStream: {}
          });

          _this3.setState({
            expand: false
          });
        },
        style: {
          padding: '0px',
          width: '100%',
          maxHeight: '75vh',
          margin: '0px'
        }
      }, __jsx(opentok_react__WEBPACK_IMPORTED_MODULE_12__["OTSubscriber"], {
        key: this.state.focusStream.id,
        session: this.sessionHelper.session,
        stream: this.state.focusStream,
        properties: {
          maxWidth: '75vw',
          maxHeight: '74.5vh',
          height: '84vh',
          width: '48vw',
          style: {
            buttonDisplayMode: 'on',
            nameDisplayMode: 'on'
          }
        },
        onSubscribe: this.handleSubscribe,
        onError: this.handleSubscribeError
      })) : null;
    }
  }, {
    key: "screenShareButton",
    value: function screenShareButton() {
      var _this4 = this;

      return this.state.ssButton === true ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        onClick: function onClick() {
          _util_EventEmitter__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"].publish('startScreenShare');

          _this4.setState({
            ssButton: false
          });
        },
        style: {
          fontSize: '.8vw',
          display: 'inline-flex'
        },
        icon: "tv",
        content: "Share Screen"
      }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        onClick: function onClick() {
          _util_EventEmitter__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"].publish('stopScreenShare');

          _this4.setState({
            ssButton: true
          });
        },
        icon: "tv",
        style: {
          fontSize: '.8vw',
          display: 'inline-flex'
        },
        content: "Stop Screen Share"
      });
    }
  }, {
    key: "videoStateButton",
    value: function videoStateButton() {
      return this.state.videoButton === true ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        onClick: function onClick() {
          _util_EventEmitter__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"].publish('disableVideo');
        },
        icon: "hide",
        style: {
          fontSize: '.8vw',
          display: 'inline-flex'
        },
        content: "Disable video"
      }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        onClick: function onClick() {
          _util_EventEmitter__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"].publish('enableVideo');
        },
        icon: "eye",
        style: {
          fontSize: '.8vw',
          display: 'inline-flex'
        },
        content: "Enable video"
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this5 = this;

      var _this$props = this.props,
          sessionId = _this$props.sessionId,
          token = _this$props.token;
      this.sessionHelper = Object(opentok_react__WEBPACK_IMPORTED_MODULE_12__["createSession"])({
        apiKey: "".concat("46858704"),
        sessionId: "".concat(sessionId),
        token: "".concat(token),
        onStreamsUpdated: function onStreamsUpdated(streams) {
          _this5.setState({
            streams: streams
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.sessionHelper.disconnect();
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var onLeave = this.props.onLeave;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        style: {
          display: 'inline-flex',
          width: '100%',
          maxHeight: '86vh'
        }
      }, __jsx("div", {
        style: {
          width: '78%',
          maxHeight: '85vh',
          overflow: 'auto'
        }
      }, this.getStreamToDisplay()), __jsx("div", {
        style: {
          width: '22%',
          maxHeight: '85vh',
          overflow: 'auto',
          height: '1000px'
        }
      }, __jsx(_publisher__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          width: '13.57vw',
          maxWidth: '13.57vw',
          marginBottom: '5px'
        },
        session: this.sessionHelper.session,
        name: this.props.name
      }), this.state.streams.map(function (stream) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
          onDoubleClick: function onDoubleClick() {
            _this6.setState({
              focusStream: stream
            });

            _this6.setState({
              expand: true
            });
          },
          style: {
            padding: '0px',
            width: '100%',
            maxHeight: '18vh',
            margin: '0px'
          }
        }, __jsx(opentok_react__WEBPACK_IMPORTED_MODULE_12__["OTSubscriber"], {
          key: stream.id,
          session: _this6.sessionHelper.session,
          stream: stream,
          properties: {
            width: '100%',
            height: '18vh',
            maxHeight: '18vh',
            margin: '0px',
            style: {
              buttonDisplayMode: 'on',
              nameDisplayMode: 'on'
            }
          },
          onSubscribe: _this6.handleSubscribe,
          onError: _this6.handleSubscribeError
        })));
      }))), this.videoStateButton(), this.screenShareButton(), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        onClick: onLeave,
        color: "red",
        icon: "close",
        style: {
          fontSize: '.8vw',
          display: 'inline-flex'
        },
        content: "Leave call"
      }));
    }
  }]);

  return ScreenContainer;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

ScreenContainer.propTypes = {
  sessionId: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  token: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  onLeave: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ScreenContainer);

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

/***/ }),

/***/ "./components/screenPublisher.js":
/*!***************************************!*\
  !*** ./components/screenPublisher.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScreenPublisher; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var opentok_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! opentok-react */ "./node_modules/opentok-react/dist/index.js");
/* harmony import */ var opentok_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(opentok_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _util_EventEmitter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/EventEmitter */ "./components/util/EventEmitter.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var ScreenPublisher = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ScreenPublisher, _Component);

  var _super = _createSuper(ScreenPublisher);

  function ScreenPublisher(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScreenPublisher);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onError", function (err) {
      _this.setState({
        error: "Failed to publish: ".concat(err.message)
      });

      _util_EventEmitter__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"].publish('leaveCallOnError');
    });

    _this.state = {
      error: null,
      audio: true,
      video: true,
      videoSource: 'screen',
      appear: false
    };

    _this.defineEventEmitterCallbacks();

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScreenPublisher, [{
    key: "defineEventEmitterCallbacks",
    value: function defineEventEmitterCallbacks() {
      var _this2 = this;

      _util_EventEmitter__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"].subscribe('startScreenShare', function () {
        _this2.setState({
          appear: true
        });
      });
      _util_EventEmitter__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"].subscribe('stopScreenShare', function () {
        _this2.setState({
          appear: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return this.state.appear === false ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, this.state.error ? __jsx("div", null, "We noticed you denied access to your screen. Please click the screen blocked icon in your browser's address bar, allow access, and then refresh the page and rejoin the call.") : null, __jsx(opentok_react__WEBPACK_IMPORTED_MODULE_8__["OTPublisher"], {
        properties: {
          width: '13.62vw',
          maxWidth: '13.62vw',
          height: '20vh',
          publishAudio: this.state.audio,
          publishVideo: this.state.video,
          videoSource: 'screen',
          name: this.props.name,
          style: {
            buttonDisplayMode: 'on',
            nameDisplayMode: 'on'
          }
        },
        onPublish: function onPublish() {
          _util_EventEmitter__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"].publish('screenShareOn', {
            name: _this3.props.name,
            sessionId: _this3.props.session.sessionId
          });
        },
        session: this.props.session,
        onError: this.onError
      }));
    }
  }]);

  return ScreenPublisher;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



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

/***/ }),

/***/ "./node_modules/lodash/before.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/before.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

module.exports = before;


/***/ }),

/***/ "./node_modules/lodash/fp.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/fp.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__(/*! ./lodash.min */ "./node_modules/lodash/lodash.min.js").runInContext();
module.exports = __webpack_require__(/*! ./fp/_baseConvert */ "./node_modules/lodash/fp/_baseConvert.js")(_, _);


/***/ }),

/***/ "./node_modules/lodash/lodash.min.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/lodash.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&t(n[r],r,n)!==!1;);return n}function e(n,t){for(var r=null==n?0:n.length;r--&&t(n[r],r,n)!==!1;);return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;
return!0}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!!(null==n?0:n.length)&&y(n,t,0)>-1}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function p(n){return n.split("")}function _(n){return n.match(Bt)||[]}function v(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function g(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function y(n,t,r){return t===t?q(n,t,r):g(n,b,r)}function d(n,t,r,e){
for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function b(n){return n!==n}function w(n,t){var r=null==n?0:n.length;return r?k(n,t)/r:Sn}function m(n){return function(t){return null==t?Y:t[n]}}function x(n){return function(t){return null==n?Y:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function A(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function k(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==Y&&(r=r===Y?i:r+i);
}return r}function O(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function I(n,t){return c(t,function(t){return[t,n[t]]})}function R(n){return function(t){return n(t)}}function z(n,t){return c(t,function(t){return n[t]})}function E(n,t){return n.has(t)}function S(n,t){for(var r=-1,e=n.length;++r<e&&y(t,n[r],0)>-1;);return r}function W(n,t){for(var r=n.length;r--&&y(t,n[r],0)>-1;);return r}function L(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}function C(n){return"\\"+Gr[n]}function U(n,t){
return null==n?Y:n[t]}function B(n){return Dr.test(n)}function T(n){return Mr.test(n)}function $(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function D(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function M(n,t){return function(r){return n(t(r))}}function F(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==un||(n[r]=un,i[u++]=r)}return i}function N(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function P(n){
var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function q(n,t,r){for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function Z(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}function K(n){return B(n)?G(n):se(n)}function V(n){return B(n)?H(n):p(n)}function G(n){for(var t=Tr.lastIndex=0;Tr.test(n);)++t;return t}function H(n){return n.match(Tr)||[]}function J(n){return n.match($r)||[]}var Y,Q="4.17.19",X=200,nn="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",tn="Expected a function",rn="__lodash_hash_undefined__",en=500,un="__lodash_placeholder__",on=1,fn=2,cn=4,an=1,ln=2,sn=1,hn=2,pn=4,_n=8,vn=16,gn=32,yn=64,dn=128,bn=256,wn=512,mn=30,xn="...",jn=800,An=16,kn=1,On=2,In=3,Rn=1/0,zn=9007199254740991,En=1.7976931348623157e308,Sn=NaN,Wn=4294967295,Ln=Wn-1,Cn=Wn>>>1,Un=[["ary",dn],["bind",sn],["bindKey",hn],["curry",_n],["curryRight",vn],["flip",wn],["partial",gn],["partialRight",yn],["rearg",bn]],Bn="[object Arguments]",Tn="[object Array]",$n="[object AsyncFunction]",Dn="[object Boolean]",Mn="[object Date]",Fn="[object DOMException]",Nn="[object Error]",Pn="[object Function]",qn="[object GeneratorFunction]",Zn="[object Map]",Kn="[object Number]",Vn="[object Null]",Gn="[object Object]",Hn="[object Promise]",Jn="[object Proxy]",Yn="[object RegExp]",Qn="[object Set]",Xn="[object String]",nt="[object Symbol]",tt="[object Undefined]",rt="[object WeakMap]",et="[object WeakSet]",ut="[object ArrayBuffer]",it="[object DataView]",ot="[object Float32Array]",ft="[object Float64Array]",ct="[object Int8Array]",at="[object Int16Array]",lt="[object Int32Array]",st="[object Uint8Array]",ht="[object Uint8ClampedArray]",pt="[object Uint16Array]",_t="[object Uint32Array]",vt=/\b__p \+= '';/g,gt=/\b(__p \+=) '' \+/g,yt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,dt=/&(?:amp|lt|gt|quot|#39);/g,bt=/[&<>"']/g,wt=RegExp(dt.source),mt=RegExp(bt.source),xt=/<%-([\s\S]+?)%>/g,jt=/<%([\s\S]+?)%>/g,At=/<%=([\s\S]+?)%>/g,kt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ot=/^\w*$/,It=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rt=/[\\^$.*+?()[\]{}|]/g,zt=RegExp(Rt.source),Et=/^\s+|\s+$/g,St=/^\s+/,Wt=/\s+$/,Lt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ct=/\{\n\/\* \[wrapped with (.+)\] \*/,Ut=/,? & /,Bt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Tt=/\\(\\)?/g,$t=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Dt=/\w*$/,Mt=/^[-+]0x[0-9a-f]+$/i,Ft=/^0b[01]+$/i,Nt=/^\[object .+?Constructor\]$/,Pt=/^0o[0-7]+$/i,qt=/^(?:0|[1-9]\d*)$/,Zt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Kt=/($^)/,Vt=/['\n\r\u2028\u2029\\]/g,Gt="\\ud800-\\udfff",Ht="\\u0300-\\u036f",Jt="\\ufe20-\\ufe2f",Yt="\\u20d0-\\u20ff",Qt=Ht+Jt+Yt,Xt="\\u2700-\\u27bf",nr="a-z\\xdf-\\xf6\\xf8-\\xff",tr="\\xac\\xb1\\xd7\\xf7",rr="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",er="\\u2000-\\u206f",ur=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ir="A-Z\\xc0-\\xd6\\xd8-\\xde",or="\\ufe0e\\ufe0f",fr=tr+rr+er+ur,cr="['\u2019]",ar="["+Gt+"]",lr="["+fr+"]",sr="["+Qt+"]",hr="\\d+",pr="["+Xt+"]",_r="["+nr+"]",vr="[^"+Gt+fr+hr+Xt+nr+ir+"]",gr="\\ud83c[\\udffb-\\udfff]",yr="(?:"+sr+"|"+gr+")",dr="[^"+Gt+"]",br="(?:\\ud83c[\\udde6-\\uddff]){2}",wr="[\\ud800-\\udbff][\\udc00-\\udfff]",mr="["+ir+"]",xr="\\u200d",jr="(?:"+_r+"|"+vr+")",Ar="(?:"+mr+"|"+vr+")",kr="(?:"+cr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+cr+"(?:D|LL|M|RE|S|T|VE))?",Ir=yr+"?",Rr="["+or+"]?",zr="(?:"+xr+"(?:"+[dr,br,wr].join("|")+")"+Rr+Ir+")*",Er="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Sr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Wr=Rr+Ir+zr,Lr="(?:"+[pr,br,wr].join("|")+")"+Wr,Cr="(?:"+[dr+sr+"?",sr,br,wr,ar].join("|")+")",Ur=RegExp(cr,"g"),Br=RegExp(sr,"g"),Tr=RegExp(gr+"(?="+gr+")|"+Cr+Wr,"g"),$r=RegExp([mr+"?"+_r+"+"+kr+"(?="+[lr,mr,"$"].join("|")+")",Ar+"+"+Or+"(?="+[lr,mr+jr,"$"].join("|")+")",mr+"?"+jr+"+"+kr,mr+"+"+Or,Sr,Er,hr,Lr].join("|"),"g"),Dr=RegExp("["+xr+Gt+Qt+or+"]"),Mr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Fr=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Nr=-1,Pr={};
Pr[ot]=Pr[ft]=Pr[ct]=Pr[at]=Pr[lt]=Pr[st]=Pr[ht]=Pr[pt]=Pr[_t]=!0,Pr[Bn]=Pr[Tn]=Pr[ut]=Pr[Dn]=Pr[it]=Pr[Mn]=Pr[Nn]=Pr[Pn]=Pr[Zn]=Pr[Kn]=Pr[Gn]=Pr[Yn]=Pr[Qn]=Pr[Xn]=Pr[rt]=!1;var qr={};qr[Bn]=qr[Tn]=qr[ut]=qr[it]=qr[Dn]=qr[Mn]=qr[ot]=qr[ft]=qr[ct]=qr[at]=qr[lt]=qr[Zn]=qr[Kn]=qr[Gn]=qr[Yn]=qr[Qn]=qr[Xn]=qr[nt]=qr[st]=qr[ht]=qr[pt]=qr[_t]=!0,qr[Nn]=qr[Pn]=qr[rt]=!1;var Zr={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a",
"\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae",
"\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g",
"\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O",
"\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w",
"\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"},Kr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Gr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Hr=parseFloat,Jr=parseInt,Yr="object"==typeof global&&global&&global.Object===Object&&global,Qr="object"==typeof self&&self&&self.Object===Object&&self,Xr=Yr||Qr||Function("return this")(),ne= true&&exports&&!exports.nodeType&&exports,te=ne&&"object"==typeof module&&module&&!module.nodeType&&module,re=te&&te.exports===ne,ee=re&&Yr.process,ue=function(){
try{var n=te&&te.require&&te.require("util").types;return n?n:ee&&ee.binding&&ee.binding("util")}catch(n){}}(),ie=ue&&ue.isArrayBuffer,oe=ue&&ue.isDate,fe=ue&&ue.isMap,ce=ue&&ue.isRegExp,ae=ue&&ue.isSet,le=ue&&ue.isTypedArray,se=m("length"),he=x(Zr),pe=x(Kr),_e=x(Vr),ve=function p(x){function q(n){if(oc(n)&&!yh(n)&&!(n instanceof Bt)){if(n instanceof H)return n;if(yl.call(n,"__wrapped__"))return to(n)}return new H(n)}function G(){}function H(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,
this.__index__=0,this.__values__=Y}function Bt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Wn,this.__views__=[]}function Gt(){var n=new Bt(this.__wrapped__);return n.__actions__=Uu(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Uu(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Uu(this.__views__),n}function Ht(){if(this.__filtered__){var n=new Bt(this);n.__dir__=-1,
n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Jt(){var n=this.__wrapped__.value(),t=this.__dir__,r=yh(n),e=t<0,u=r?n.length:0,i=Ai(0,u,this.__views__),o=i.start,f=i.end,c=f-o,a=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Vl(c,this.__takeCount__);if(!r||!e&&u==c&&p==c)return du(n,this.__actions__);var _=[];n:for(;c--&&h<p;){a+=t;for(var v=-1,g=n[a];++v<s;){var y=l[v],d=y.iteratee,b=y.type,w=d(g);if(b==On)g=w;else if(!w){if(b==kn)continue n;break n}}_[h++]=g}return _}function Yt(n){
var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Qt(){this.__data__=es?es(null):{},this.size=0}function Xt(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function nr(n){var t=this.__data__;if(es){var r=t[n];return r===rn?Y:r}return yl.call(t,n)?t[n]:Y}function tr(n){var t=this.__data__;return es?t[n]!==Y:yl.call(t,n)}function rr(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=es&&t===Y?rn:t,this}function er(n){
var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function ur(){this.__data__=[],this.size=0}function ir(n){var t=this.__data__,r=Er(t,n);return!(r<0)&&(r==t.length-1?t.pop():Sl.call(t,r,1),--this.size,!0)}function or(n){var t=this.__data__,r=Er(t,n);return r<0?Y:t[r][1]}function fr(n){return Er(this.__data__,n)>-1}function cr(n,t){var r=this.__data__,e=Er(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this}function ar(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){
var e=n[t];this.set(e[0],e[1])}}function lr(){this.size=0,this.__data__={hash:new Yt,map:new(Xl||er),string:new Yt}}function sr(n){var t=wi(this,n).delete(n);return this.size-=t?1:0,t}function hr(n){return wi(this,n).get(n)}function pr(n){return wi(this,n).has(n)}function _r(n,t){var r=wi(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this}function vr(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new ar;++t<r;)this.add(n[t])}function gr(n){return this.__data__.set(n,rn),this}function yr(n){
return this.__data__.has(n)}function dr(n){this.size=(this.__data__=new er(n)).size}function br(){this.__data__=new er,this.size=0}function wr(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}function mr(n){return this.__data__.get(n)}function xr(n){return this.__data__.has(n)}function jr(n,t){var r=this.__data__;if(r instanceof er){var e=r.__data__;if(!Xl||e.length<X-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new ar(e)}return r.set(n,t),this.size=r.size,this}function Ar(n,t){
var r=yh(n),e=!r&&gh(n),u=!r&&!e&&bh(n),i=!r&&!e&&!u&&Ah(n),o=r||e||u||i,f=o?O(n.length,ll):[],c=f.length;for(var a in n)!t&&!yl.call(n,a)||o&&("length"==a||u&&("offset"==a||"parent"==a)||i&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||Wi(a,c))||f.push(a);return f}function kr(n){var t=n.length;return t?n[Xe(0,t-1)]:Y}function Or(n,t){return Yi(Uu(n),$r(t,0,n.length))}function Ir(n){return Yi(Uu(n))}function Rr(n,t,r){(r===Y||Kf(n[t],r))&&(r!==Y||t in n)||Cr(n,t,r)}function zr(n,t,r){var e=n[t];
yl.call(n,t)&&Kf(e,r)&&(r!==Y||t in n)||Cr(n,t,r)}function Er(n,t){for(var r=n.length;r--;)if(Kf(n[r][0],t))return r;return-1}function Sr(n,t,r,e){return vs(n,function(n,u,i){t(e,n,r(n),i)}),e}function Wr(n,t){return n&&Bu(t,Fc(t),n)}function Lr(n,t){return n&&Bu(t,Nc(t),n)}function Cr(n,t,r){"__proto__"==t&&Ul?Ul(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Tr(n,t){for(var r=-1,e=t.length,u=el(e),i=null==n;++r<e;)u[r]=i?Y:$c(n,t[r]);return u}function $r(n,t,r){return n===n&&(r!==Y&&(n=n<=r?n:r),
t!==Y&&(n=n>=t?n:t)),n}function Dr(n,t,e,u,i,o){var f,c=t&on,a=t&fn,l=t&cn;if(e&&(f=i?e(n,u,i,o):e(n)),f!==Y)return f;if(!ic(n))return n;var s=yh(n);if(s){if(f=Ii(n),!c)return Uu(n,f)}else{var h=Is(n),p=h==Pn||h==qn;if(bh(n))return ku(n,c);if(h==Gn||h==Bn||p&&!i){if(f=a||p?{}:Ri(n),!c)return a?$u(n,Lr(f,n)):Tu(n,Wr(f,n))}else{if(!qr[h])return i?n:{};f=zi(n,h,c)}}o||(o=new dr);var _=o.get(n);if(_)return _;o.set(n,f),jh(n)?n.forEach(function(r){f.add(Dr(r,t,e,r,n,o))}):mh(n)&&n.forEach(function(r,u){
f.set(u,Dr(r,t,e,u,n,o))});var v=l?a?gi:vi:a?Nc:Fc,g=s?Y:v(n);return r(g||n,function(r,u){g&&(u=r,r=n[u]),zr(f,u,Dr(r,t,e,u,n,o))}),f}function Mr(n){var t=Fc(n);return function(r){return Zr(r,n,t)}}function Zr(n,t,r){var e=r.length;if(null==n)return!e;for(n=cl(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===Y&&!(u in n)||!i(o))return!1}return!0}function Kr(n,t,r){if("function"!=typeof n)throw new sl(tn);return Es(function(){n.apply(Y,r)},t)}function Vr(n,t,r,e){var u=-1,i=o,a=!0,l=n.length,s=[],h=t.length;
if(!l)return s;r&&(t=c(t,R(r))),e?(i=f,a=!1):t.length>=X&&(i=E,a=!1,t=new vr(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p);if(p=e||0!==p?p:0,a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function Gr(n,t){var r=!0;return vs(n,function(n,e,u){return r=!!t(n,e,u)}),r}function Yr(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===Y?o===o&&!yc(o):r(o,f)))var f=o,c=i}return c}function Qr(n,t,r,e){var u=n.length;for(r=jc(r),r<0&&(r=-r>u?0:u+r),
e=e===Y||e>u?u:jc(e),e<0&&(e+=u),e=r>e?0:Ac(e);r<e;)n[r++]=t;return n}function ne(n,t){var r=[];return vs(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function te(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Si),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?te(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function ee(n,t){return n&&ys(n,t,Fc)}function ue(n,t){return n&&ds(n,t,Fc)}function se(n,t){return i(t,function(t){return rc(n[t])})}function ve(n,t){t=ju(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Qi(t[r++])];
return r&&r==e?n:Y}function ye(n,t,r){var e=t(n);return yh(n)?e:a(e,r(n))}function de(n){return null==n?n===Y?tt:Vn:Cl&&Cl in cl(n)?ji(n):qi(n)}function be(n,t){return n>t}function we(n,t){return null!=n&&yl.call(n,t)}function me(n,t){return null!=n&&t in cl(n)}function xe(n,t,r){return n>=Vl(t,r)&&n<Kl(t,r)}function je(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=el(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,R(t))),s=Vl(p.length,s),l[a]=!r&&(t||u>=120&&p.length>=120)?new vr(a&&p):Y}p=n[0];
var _=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],y=t?t(g):g;if(g=r||0!==g?g:0,!(v?E(v,y):e(h,y,r))){for(a=i;--a;){var d=l[a];if(!(d?E(d,y):e(n[a],y,r)))continue n}v&&v.push(y),h.push(g)}}return h}function Ae(n,t,r,e){return ee(n,function(n,u,i){t(e,r(n),u,i)}),e}function ke(t,r,e){r=ju(r,t),t=Ki(t,r);var u=null==t?t:t[Qi(mo(r))];return null==u?Y:n(u,t,e)}function Oe(n){return oc(n)&&de(n)==Bn}function Ie(n){return oc(n)&&de(n)==ut}function Re(n){return oc(n)&&de(n)==Mn}function ze(n,t,r,e,u){
return n===t||(null==n||null==t||!oc(n)&&!oc(t)?n!==n&&t!==t:Ee(n,t,r,e,ze,u))}function Ee(n,t,r,e,u,i){var o=yh(n),f=yh(t),c=o?Tn:Is(n),a=f?Tn:Is(t);c=c==Bn?Gn:c,a=a==Bn?Gn:a;var l=c==Gn,s=a==Gn,h=c==a;if(h&&bh(n)){if(!bh(t))return!1;o=!0,l=!1}if(h&&!l)return i||(i=new dr),o||Ah(n)?si(n,t,r,e,u,i):hi(n,t,c,r,e,u,i);if(!(r&an)){var p=l&&yl.call(n,"__wrapped__"),_=s&&yl.call(t,"__wrapped__");if(p||_){var v=p?n.value():n,g=_?t.value():t;return i||(i=new dr),u(v,g,r,e,i)}}return!!h&&(i||(i=new dr),pi(n,t,r,e,u,i));
}function Se(n){return oc(n)&&Is(n)==Zn}function We(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=cl(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++u<i;){f=r[u];var c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===Y&&!(c in n))return!1}else{var s=new dr;if(e)var h=e(a,l,c,n,t,s);if(!(h===Y?ze(l,a,an|ln,e,s):h))return!1}}return!0}function Le(n){return!(!ic(n)||Ti(n))&&(rc(n)?jl:Nt).test(Xi(n))}function Ce(n){return oc(n)&&de(n)==Yn}function Ue(n){return oc(n)&&Is(n)==Qn;
}function Be(n){return oc(n)&&uc(n.length)&&!!Pr[de(n)]}function Te(n){return"function"==typeof n?n:null==n?Sa:"object"==typeof n?yh(n)?Pe(n[0],n[1]):Ne(n):Da(n)}function $e(n){if(!$i(n))return Zl(n);var t=[];for(var r in cl(n))yl.call(n,r)&&"constructor"!=r&&t.push(r);return t}function De(n){if(!ic(n))return Pi(n);var t=$i(n),r=[];for(var e in n)("constructor"!=e||!t&&yl.call(n,e))&&r.push(e);return r}function Me(n,t){return n<t}function Fe(n,t){var r=-1,e=Vf(n)?el(n.length):[];return vs(n,function(n,u,i){
e[++r]=t(n,u,i)}),e}function Ne(n){var t=mi(n);return 1==t.length&&t[0][2]?Mi(t[0][0],t[0][1]):function(r){return r===n||We(r,n,t)}}function Pe(n,t){return Ci(n)&&Di(t)?Mi(Qi(n),t):function(r){var e=$c(r,n);return e===Y&&e===t?Mc(r,n):ze(t,e,an|ln)}}function qe(n,t,r,e,u){n!==t&&ys(t,function(i,o){if(u||(u=new dr),ic(i))Ze(n,t,o,r,qe,e,u);else{var f=e?e(Gi(n,o),i,o+"",n,t,u):Y;f===Y&&(f=i),Rr(n,o,f)}},Nc)}function Ze(n,t,r,e,u,i,o){var f=Gi(n,r),c=Gi(t,r),a=o.get(c);if(a)return Rr(n,r,a),Y;var l=i?i(f,c,r+"",n,t,o):Y,s=l===Y;
if(s){var h=yh(c),p=!h&&bh(c),_=!h&&!p&&Ah(c);l=c,h||p||_?yh(f)?l=f:Gf(f)?l=Uu(f):p?(s=!1,l=ku(c,!0)):_?(s=!1,l=Eu(c,!0)):l=[]:_c(c)||gh(c)?(l=f,gh(f)?l=Oc(f):ic(f)&&!rc(f)||(l=Ri(c))):s=!1}s&&(o.set(c,l),u(l,c,e,i,o),o.delete(c)),Rr(n,r,l)}function Ke(n,t){var r=n.length;if(r)return t+=t<0?r:0,Wi(t,r)?n[t]:Y}function Ve(n,t,r){t=t.length?c(t,function(n){return yh(n)?function(t){return ve(t,1===n.length?n[0]:n)}:n}):[Sa];var e=-1;return t=c(t,R(bi())),A(Fe(n,function(n,r,u){return{criteria:c(t,function(t){
return t(n)}),index:++e,value:n}}),function(n,t){return Wu(n,t,r)})}function Ge(n,t){return He(n,t,function(t,r){return Mc(n,r)})}function He(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=ve(n,o);r(f,o)&&iu(i,ju(o,n),f)}return i}function Je(n){return function(t){return ve(t,n)}}function Ye(n,t,r,e){var u=e?d:y,i=-1,o=t.length,f=n;for(n===t&&(t=Uu(t)),r&&(f=c(n,R(r)));++i<o;)for(var a=0,l=t[i],s=r?r(l):l;(a=u(f,s,a,e))>-1;)f!==n&&Sl.call(f,a,1),Sl.call(n,a,1);return n}function Qe(n,t){for(var r=n?t.length:0,e=r-1;r--;){
var u=t[r];if(r==e||u!==i){var i=u;Wi(u)?Sl.call(n,u,1):vu(n,u)}}return n}function Xe(n,t){return n+Ml(Jl()*(t-n+1))}function nu(n,t,r,e){for(var u=-1,i=Kl(Dl((t-n)/(r||1)),0),o=el(i);i--;)o[e?i:++u]=n,n+=r;return o}function tu(n,t){var r="";if(!n||t<1||t>zn)return r;do t%2&&(r+=n),t=Ml(t/2),t&&(n+=n);while(t);return r}function ru(n,t){return Ss(Zi(n,t,Sa),n+"")}function eu(n){return kr(na(n))}function uu(n,t){var r=na(n);return Yi(r,$r(t,0,r.length))}function iu(n,t,r,e){if(!ic(n))return n;t=ju(t,n);
for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=Qi(t[u]),a=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return n;if(u!=o){var l=f[c];a=e?e(l,c,f):Y,a===Y&&(a=ic(l)?l:Wi(t[u+1])?[]:{})}zr(f,c,a),f=f[c]}return n}function ou(n){return Yi(na(n))}function fu(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),r=r>u?u:r,r<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=el(u);++e<u;)i[e]=n[e+t];return i}function cu(n,t){var r;return vs(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function au(n,t,r){
var e=0,u=null==n?e:n.length;if("number"==typeof t&&t===t&&u<=Cn){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!yc(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return lu(n,t,Sa,r)}function lu(n,t,r,e){var u=0,i=null==n?0:n.length;if(0===i)return 0;t=r(t);for(var o=t!==t,f=null===t,c=yc(t),a=t===Y;u<i;){var l=Ml((u+i)/2),s=r(n[l]),h=s!==Y,p=null===s,_=s===s,v=yc(s);if(o)var g=e||_;else g=a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):!p&&!v&&(e?s<=t:s<t);g?u=l+1:i=l}return Vl(i,Ln)}function su(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){
var o=n[r],f=t?t(o):o;if(!r||!Kf(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function hu(n){return"number"==typeof n?n:yc(n)?Sn:+n}function pu(n){if("string"==typeof n)return n;if(yh(n))return c(n,pu)+"";if(yc(n))return ps?ps.call(n):"";var t=n+"";return"0"==t&&1/n==-Rn?"-0":t}function _u(n,t,r){var e=-1,u=o,i=n.length,c=!0,a=[],l=a;if(r)c=!1,u=f;else if(i>=X){var s=t?null:js(n);if(s)return N(s);c=!1,u=E,l=new vr}else l=t?[]:a;n:for(;++e<i;){var h=n[e],p=t?t(h):h;if(h=r||0!==h?h:0,c&&p===p){for(var _=l.length;_--;)if(l[_]===p)continue n;
t&&l.push(p),a.push(h)}else u(l,p,r)||(l!==a&&l.push(p),a.push(h))}return a}function vu(n,t){return t=ju(t,n),n=Ki(n,t),null==n||delete n[Qi(mo(t))]}function gu(n,t,r,e){return iu(n,t,r(ve(n,t)),e)}function yu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?fu(n,e?0:i,e?i+1:u):fu(n,e?i+1:0,e?u:i)}function du(n,t){var r=n;return r instanceof Bt&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function bu(n,t,r){var e=n.length;if(e<2)return e?_u(n[0]):[];
for(var u=-1,i=el(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=Vr(i[u]||o,n[f],t,r));return _u(te(i,1),t,r)}function wu(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;){r(o,n[e],e<i?t[e]:Y)}return o}function mu(n){return Gf(n)?n:[]}function xu(n){return"function"==typeof n?n:Sa}function ju(n,t){return yh(n)?n:Ci(n,t)?[n]:Ws(Rc(n))}function Au(n,t,r){var e=n.length;return r=r===Y?e:r,!t&&r>=e?n:fu(n,t,r)}function ku(n,t){if(t)return n.slice();var r=n.length,e=Il?Il(r):new n.constructor(r);
return n.copy(e),e}function Ou(n){var t=new n.constructor(n.byteLength);return new Ol(t).set(new Ol(n)),t}function Iu(n,t){return new n.constructor(t?Ou(n.buffer):n.buffer,n.byteOffset,n.byteLength)}function Ru(n){var t=new n.constructor(n.source,Dt.exec(n));return t.lastIndex=n.lastIndex,t}function zu(n){return hs?cl(hs.call(n)):{}}function Eu(n,t){return new n.constructor(t?Ou(n.buffer):n.buffer,n.byteOffset,n.length)}function Su(n,t){if(n!==t){var r=n!==Y,e=null===n,u=n===n,i=yc(n),o=t!==Y,f=null===t,c=t===t,a=yc(t);
if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Wu(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var c=Su(u[e],i[e]);if(c){if(e>=f)return c;return c*("desc"==r[e]?-1:1)}}return n.index-t.index}function Lu(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Kl(i-o,0),l=el(c+a),s=!e;++f<c;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l;
}function Cu(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Kl(i-f,0),s=el(l+a),h=!e;++u<l;)s[u]=n[u];for(var p=u;++c<a;)s[p+c]=t[c];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function Uu(n,t){var r=-1,e=n.length;for(t||(t=el(e));++r<e;)t[r]=n[r];return t}function Bu(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):Y;c===Y&&(c=n[f]),u?Cr(r,f,c):zr(r,f,c)}return r}function Tu(n,t){return Bu(n,ks(n),t)}function $u(n,t){return Bu(n,Os(n),t);
}function Du(n,r){return function(e,u){var i=yh(e)?t:Sr,o=r?r():{};return i(e,n,bi(u,2),o)}}function Mu(n){return ru(function(t,r){var e=-1,u=r.length,i=u>1?r[u-1]:Y,o=u>2?r[2]:Y;for(i=n.length>3&&"function"==typeof i?(u--,i):Y,o&&Li(r[0],r[1],o)&&(i=u<3?Y:i,u=1),t=cl(t);++e<u;){var f=r[e];f&&n(t,f,e,i)}return t})}function Fu(n,t){return function(r,e){if(null==r)return r;if(!Vf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=cl(r);(t?i--:++i<u)&&e(o[i],i,o)!==!1;);return r}}function Nu(n){return function(t,r,e){
for(var u=-1,i=cl(t),o=e(t),f=o.length;f--;){var c=o[n?f:++u];if(r(i[c],c,i)===!1)break}return t}}function Pu(n,t,r){function e(){return(this&&this!==Xr&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=t&sn,i=Ku(n);return e}function qu(n){return function(t){t=Rc(t);var r=B(t)?V(t):Y,e=r?r[0]:t.charAt(0),u=r?Au(r,1).join(""):t.slice(1);return e[n]()+u}}function Zu(n){return function(t){return l(Oa(oa(t).replace(Ur,"")),n,"")}}function Ku(n){return function(){var t=arguments;switch(t.length){
case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=_s(n.prototype),e=n.apply(r,t);return ic(e)?e:r}}function Vu(t,r,e){function u(){for(var o=arguments.length,f=el(o),c=o,a=di(u);c--;)f[c]=arguments[c];var l=o<3&&f[0]!==a&&f[o-1]!==a?[]:F(f,a);
return o-=l.length,o<e?ui(t,r,Ju,u.placeholder,Y,f,l,Y,Y,e-o):n(this&&this!==Xr&&this instanceof u?i:t,this,f)}var i=Ku(t);return u}function Gu(n){return function(t,r,e){var u=cl(t);if(!Vf(t)){var i=bi(r,3);t=Fc(t),r=function(n){return i(u[n],n,u)}}var o=n(t,r,e);return o>-1?u[i?t[o]:o]:Y}}function Hu(n){return _i(function(t){var r=t.length,e=r,u=H.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if("function"!=typeof i)throw new sl(tn);if(u&&!o&&"wrapper"==yi(i))var o=new H([],!0)}for(e=o?e:r;++e<r;){
i=t[e];var f=yi(i),c="wrapper"==f?As(i):Y;o=c&&Bi(c[0])&&c[1]==(dn|_n|gn|bn)&&!c[4].length&&1==c[9]?o[yi(c[0])].apply(o,c[3]):1==i.length&&Bi(i)?o[f]():o.thru(i)}return function(){var n=arguments,e=n[0];if(o&&1==n.length&&yh(e))return o.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function Ju(n,t,r,e,u,i,o,f,c,a){function l(){for(var y=arguments.length,d=el(y),b=y;b--;)d[b]=arguments[b];if(_)var w=di(l),m=L(d,w);if(e&&(d=Lu(d,e,u,_)),i&&(d=Cu(d,i,o,_)),
y-=m,_&&y<a){return ui(n,t,Ju,l.placeholder,r,d,F(d,w),f,c,a-y)}var x=h?r:this,j=p?x[n]:n;return y=d.length,f?d=Vi(d,f):v&&y>1&&d.reverse(),s&&c<y&&(d.length=c),this&&this!==Xr&&this instanceof l&&(j=g||Ku(j)),j.apply(x,d)}var s=t&dn,h=t&sn,p=t&hn,_=t&(_n|vn),v=t&wn,g=p?Y:Ku(n);return l}function Yu(n,t){return function(r,e){return Ae(r,n,t(e),{})}}function Qu(n,t){return function(r,e){var u;if(r===Y&&e===Y)return t;if(r!==Y&&(u=r),e!==Y){if(u===Y)return e;"string"==typeof r||"string"==typeof e?(r=pu(r),
e=pu(e)):(r=hu(r),e=hu(e)),u=n(r,e)}return u}}function Xu(t){return _i(function(r){return r=c(r,R(bi())),ru(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ni(n,t){t=t===Y?" ":pu(t);var r=t.length;if(r<2)return r?tu(t,n):t;var e=tu(t,Dl(n/K(t)));return B(t)?Au(V(e),0,n).join(""):e.slice(0,n)}function ti(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=el(l+c),h=this&&this!==Xr&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];
return n(h,o?e:this,s)}var o=r&sn,f=Ku(t);return i}function ri(n){return function(t,r,e){return e&&"number"!=typeof e&&Li(t,r,e)&&(r=e=Y),t=xc(t),r===Y?(r=t,t=0):r=xc(r),e=e===Y?t<r?1:-1:xc(e),nu(t,r,e,n)}}function ei(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=kc(t),r=kc(r)),n(t,r)}}function ui(n,t,r,e,u,i,o,f,c,a){var l=t&_n,s=l?o:Y,h=l?Y:o,p=l?i:Y,_=l?Y:i;t|=l?gn:yn,t&=~(l?yn:gn),t&pn||(t&=~(sn|hn));var v=[n,t,u,p,s,_,h,f,c,a],g=r.apply(Y,v);return Bi(n)&&zs(g,v),g.placeholder=e,
Hi(g,n,t)}function ii(n){var t=fl[n];return function(n,r){if(n=kc(n),r=null==r?0:Vl(jc(r),292),r&&Pl(n)){var e=(Rc(n)+"e").split("e");return e=(Rc(t(e[0]+"e"+(+e[1]+r)))+"e").split("e"),+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oi(n){return function(t){var r=Is(t);return r==Zn?D(t):r==Qn?P(t):I(t,n(t))}}function fi(n,t,r,e,u,i,o,f){var c=t&hn;if(!c&&"function"!=typeof n)throw new sl(tn);var a=e?e.length:0;if(a||(t&=~(gn|yn),e=u=Y),o=o===Y?o:Kl(jc(o),0),f=f===Y?f:jc(f),a-=u?u.length:0,t&yn){var l=e,s=u;
e=u=Y}var h=c?Y:As(n),p=[n,t,r,e,u,l,s,i,o,f];if(h&&Ni(p,h),n=p[0],t=p[1],r=p[2],e=p[3],u=p[4],f=p[9]=p[9]===Y?c?0:n.length:Kl(p[9]-a,0),!f&&t&(_n|vn)&&(t&=~(_n|vn)),t&&t!=sn)_=t==_n||t==vn?Vu(n,t,f):t!=gn&&t!=(sn|gn)||u.length?Ju.apply(Y,p):ti(n,t,r,e);else var _=Pu(n,t,r);return Hi((h?bs:zs)(_,p),n,t)}function ci(n,t,r,e){return n===Y||Kf(n,_l[r])&&!yl.call(e,r)?t:n}function ai(n,t,r,e,u,i){return ic(n)&&ic(t)&&(i.set(t,n),qe(n,t,Y,ai,i),i.delete(t)),n}function li(n){return _c(n)?Y:n}function si(n,t,r,e,u,i){
var o=r&an,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return!1;var a=i.get(n),l=i.get(t);if(a&&l)return a==t&&l==n;var s=-1,p=!0,_=r&ln?new vr:Y;for(i.set(n,t),i.set(t,n);++s<f;){var v=n[s],g=t[s];if(e)var y=o?e(g,v,s,t,n,i):e(v,g,s,n,t,i);if(y!==Y){if(y)continue;p=!1;break}if(_){if(!h(t,function(n,t){if(!E(_,t)&&(v===n||u(v,n,r,e,i)))return _.push(t)})){p=!1;break}}else if(v!==g&&!u(v,g,r,e,i)){p=!1;break}}return i.delete(n),i.delete(t),p}function hi(n,t,r,e,u,i,o){switch(r){case it:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;
n=n.buffer,t=t.buffer;case ut:return!(n.byteLength!=t.byteLength||!i(new Ol(n),new Ol(t)));case Dn:case Mn:case Kn:return Kf(+n,+t);case Nn:return n.name==t.name&&n.message==t.message;case Yn:case Xn:return n==t+"";case Zn:var f=D;case Qn:var c=e&an;if(f||(f=N),n.size!=t.size&&!c)return!1;var a=o.get(n);if(a)return a==t;e|=ln,o.set(n,t);var l=si(f(n),f(t),e,u,i,o);return o.delete(n),l;case nt:if(hs)return hs.call(n)==hs.call(t)}return!1}function pi(n,t,r,e,u,i){var o=r&an,f=vi(n),c=f.length;if(c!=vi(t).length&&!o)return!1;
for(var a=c;a--;){var l=f[a];if(!(o?l in t:yl.call(t,l)))return!1}var s=i.get(n),h=i.get(t);if(s&&h)return s==t&&h==n;var p=!0;i.set(n,t),i.set(t,n);for(var _=o;++a<c;){l=f[a];var v=n[l],g=t[l];if(e)var y=o?e(g,v,l,t,n,i):e(v,g,l,n,t,i);if(!(y===Y?v===g||u(v,g,r,e,i):y)){p=!1;break}_||(_="constructor"==l)}if(p&&!_){var d=n.constructor,b=t.constructor;d!=b&&"constructor"in n&&"constructor"in t&&!("function"==typeof d&&d instanceof d&&"function"==typeof b&&b instanceof b)&&(p=!1)}return i.delete(n),
i.delete(t),p}function _i(n){return Ss(Zi(n,Y,ho),n+"")}function vi(n){return ye(n,Fc,ks)}function gi(n){return ye(n,Nc,Os)}function yi(n){for(var t=n.name+"",r=is[t],e=yl.call(is,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function di(n){return(yl.call(q,"placeholder")?q:n).placeholder}function bi(){var n=q.iteratee||Wa;return n=n===Wa?Te:n,arguments.length?n(arguments[0],arguments[1]):n}function wi(n,t){var r=n.__data__;return Ui(t)?r["string"==typeof t?"string":"hash"]:r.map;
}function mi(n){for(var t=Fc(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,Di(u)]}return t}function xi(n,t){var r=U(n,t);return Le(r)?r:Y}function ji(n){var t=yl.call(n,Cl),r=n[Cl];try{n[Cl]=Y;var e=!0}catch(n){}var u=wl.call(n);return e&&(t?n[Cl]=r:delete n[Cl]),u}function Ai(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Vl(t,n+o);break;case"takeRight":n=Kl(n,t-o)}}return{start:n,end:t}}function ki(n){var t=n.match(Ct);
return t?t[1].split(Ut):[]}function Oi(n,t,r){t=ju(t,n);for(var e=-1,u=t.length,i=!1;++e<u;){var o=Qi(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&uc(u)&&Wi(o,u)&&(yh(n)||gh(n)))}function Ii(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&yl.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ri(n){return"function"!=typeof n.constructor||$i(n)?{}:_s(Rl(n))}function zi(n,t,r){var e=n.constructor;switch(t){case ut:return Ou(n);
case Dn:case Mn:return new e(+n);case it:return Iu(n,r);case ot:case ft:case ct:case at:case lt:case st:case ht:case pt:case _t:return Eu(n,r);case Zn:return new e;case Kn:case Xn:return new e(n);case Yn:return Ru(n);case Qn:return new e;case nt:return zu(n)}}function Ei(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(Lt,"{\n/* [wrapped with "+t+"] */\n")}function Si(n){return yh(n)||gh(n)||!!(Wl&&n&&n[Wl])}function Wi(n,t){var r=typeof n;
return t=null==t?zn:t,!!t&&("number"==r||"symbol"!=r&&qt.test(n))&&n>-1&&n%1==0&&n<t}function Li(n,t,r){if(!ic(r))return!1;var e=typeof t;return!!("number"==e?Vf(r)&&Wi(t,r.length):"string"==e&&t in r)&&Kf(r[t],n)}function Ci(n,t){if(yh(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!yc(n))||(Ot.test(n)||!kt.test(n)||null!=t&&n in cl(t))}function Ui(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}function Bi(n){
var t=yi(n),r=q[t];if("function"!=typeof r||!(t in Bt.prototype))return!1;if(n===r)return!0;var e=As(r);return!!e&&n===e[0]}function Ti(n){return!!bl&&bl in n}function $i(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||_l)}function Di(n){return n===n&&!ic(n)}function Mi(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==Y||n in cl(r)))}}function Fi(n){var t=Wf(n,function(n){return r.size===en&&r.clear(),n}),r=t.cache;return t}function Ni(n,t){var r=n[1],e=t[1],u=r|e,i=u<(sn|hn|dn),o=e==dn&&r==_n||e==dn&&r==bn&&n[7].length<=t[8]||e==(dn|bn)&&t[7].length<=t[8]&&r==_n;
if(!i&&!o)return n;e&sn&&(n[2]=t[2],u|=r&sn?0:pn);var f=t[3];if(f){var c=n[3];n[3]=c?Lu(c,f,t[4]):f,n[4]=c?F(n[3],un):t[4]}return f=t[5],f&&(c=n[5],n[5]=c?Cu(c,f,t[6]):f,n[6]=c?F(n[5],un):t[6]),f=t[7],f&&(n[7]=f),e&dn&&(n[8]=null==n[8]?t[8]:Vl(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function Pi(n){var t=[];if(null!=n)for(var r in cl(n))t.push(r);return t}function qi(n){return wl.call(n)}function Zi(t,r,e){return r=Kl(r===Y?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Kl(u.length-r,0),f=el(o);++i<o;)f[i]=u[r+i];
i=-1;for(var c=el(r+1);++i<r;)c[i]=u[i];return c[r]=e(f),n(t,this,c)}}function Ki(n,t){return t.length<2?n:ve(n,fu(t,0,-1))}function Vi(n,t){for(var r=n.length,e=Vl(t.length,r),u=Uu(n);e--;){var i=t[e];n[e]=Wi(i,r)?u[i]:Y}return n}function Gi(n,t){if(("constructor"!==t||"function"!=typeof n[t])&&"__proto__"!=t)return n[t]}function Hi(n,t,r){var e=t+"";return Ss(n,Ei(e,no(ki(e),r)))}function Ji(n){var t=0,r=0;return function(){var e=Gl(),u=An-(e-r);if(r=e,u>0){if(++t>=jn)return arguments[0]}else t=0;
return n.apply(Y,arguments)}}function Yi(n,t){var r=-1,e=n.length,u=e-1;for(t=t===Y?e:t;++r<t;){var i=Xe(r,u),o=n[i];n[i]=n[r],n[r]=o}return n.length=t,n}function Qi(n){if("string"==typeof n||yc(n))return n;var t=n+"";return"0"==t&&1/n==-Rn?"-0":t}function Xi(n){if(null!=n){try{return gl.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function no(n,t){return r(Un,function(r){var e="_."+r[0];t&r[1]&&!o(n,e)&&n.push(e)}),n.sort()}function to(n){if(n instanceof Bt)return n.clone();var t=new H(n.__wrapped__,n.__chain__);
return t.__actions__=Uu(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function ro(n,t,r){t=(r?Li(n,t,r):t===Y)?1:Kl(jc(t),0);var e=null==n?0:n.length;if(!e||t<1)return[];for(var u=0,i=0,o=el(Dl(e/t));u<e;)o[i++]=fu(n,u,u+=t);return o}function eo(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u}function uo(){var n=arguments.length;if(!n)return[];for(var t=el(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return a(yh(r)?Uu(r):[r],te(t,1));
}function io(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),fu(n,t<0?0:t,e)):[]}function oo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),t=e-t,fu(n,0,t<0?0:t)):[]}function fo(n,t){return n&&n.length?yu(n,bi(t,3),!0,!0):[]}function co(n,t){return n&&n.length?yu(n,bi(t,3),!0):[]}function ao(n,t,r,e){var u=null==n?0:n.length;return u?(r&&"number"!=typeof r&&Li(n,t,r)&&(r=0,e=u),Qr(n,t,r,e)):[]}function lo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:jc(r);
return u<0&&(u=Kl(e+u,0)),g(n,bi(t,3),u)}function so(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==Y&&(u=jc(r),u=r<0?Kl(e+u,0):Vl(u,e-1)),g(n,bi(t,3),u,!0)}function ho(n){return(null==n?0:n.length)?te(n,1):[]}function po(n){return(null==n?0:n.length)?te(n,Rn):[]}function _o(n,t){return(null==n?0:n.length)?(t=t===Y?1:jc(t),te(n,t)):[]}function vo(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e}function go(n){return n&&n.length?n[0]:Y}function yo(n,t,r){
var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:jc(r);return u<0&&(u=Kl(e+u,0)),y(n,t,u)}function bo(n){return(null==n?0:n.length)?fu(n,0,-1):[]}function wo(n,t){return null==n?"":ql.call(n,t)}function mo(n){var t=null==n?0:n.length;return t?n[t-1]:Y}function xo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;return r!==Y&&(u=jc(r),u=u<0?Kl(e+u,0):Vl(u,e-1)),t===t?Z(n,t,u):g(n,b,u,!0)}function jo(n,t){return n&&n.length?Ke(n,jc(t)):Y}function Ao(n,t){return n&&n.length&&t&&t.length?Ye(n,t):n;
}function ko(n,t,r){return n&&n.length&&t&&t.length?Ye(n,t,bi(r,2)):n}function Oo(n,t,r){return n&&n.length&&t&&t.length?Ye(n,t,Y,r):n}function Io(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=bi(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return Qe(n,u),r}function Ro(n){return null==n?n:Yl.call(n)}function zo(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&Li(n,t,r)?(t=0,r=e):(t=null==t?0:jc(t),r=r===Y?e:jc(r)),fu(n,t,r)):[]}function Eo(n,t){
return au(n,t)}function So(n,t,r){return lu(n,t,bi(r,2))}function Wo(n,t){var r=null==n?0:n.length;if(r){var e=au(n,t);if(e<r&&Kf(n[e],t))return e}return-1}function Lo(n,t){return au(n,t,!0)}function Co(n,t,r){return lu(n,t,bi(r,2),!0)}function Uo(n,t){if(null==n?0:n.length){var r=au(n,t,!0)-1;if(Kf(n[r],t))return r}return-1}function Bo(n){return n&&n.length?su(n):[]}function To(n,t){return n&&n.length?su(n,bi(t,2)):[]}function $o(n){var t=null==n?0:n.length;return t?fu(n,1,t):[]}function Do(n,t,r){
return n&&n.length?(t=r||t===Y?1:jc(t),fu(n,0,t<0?0:t)):[]}function Mo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),t=e-t,fu(n,t<0?0:t,e)):[]}function Fo(n,t){return n&&n.length?yu(n,bi(t,3),!1,!0):[]}function No(n,t){return n&&n.length?yu(n,bi(t,3)):[]}function Po(n){return n&&n.length?_u(n):[]}function qo(n,t){return n&&n.length?_u(n,bi(t,2)):[]}function Zo(n,t){return t="function"==typeof t?t:Y,n&&n.length?_u(n,Y,t):[]}function Ko(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){
if(Gf(n))return t=Kl(n.length,t),!0}),O(t,function(t){return c(n,m(t))})}function Vo(t,r){if(!t||!t.length)return[];var e=Ko(t);return null==r?e:c(e,function(t){return n(r,Y,t)})}function Go(n,t){return wu(n||[],t||[],zr)}function Ho(n,t){return wu(n||[],t||[],iu)}function Jo(n){var t=q(n);return t.__chain__=!0,t}function Yo(n,t){return t(n),n}function Qo(n,t){return t(n)}function Xo(){return Jo(this)}function nf(){return new H(this.value(),this.__chain__)}function tf(){this.__values__===Y&&(this.__values__=mc(this.value()));
var n=this.__index__>=this.__values__.length;return{done:n,value:n?Y:this.__values__[this.__index__++]}}function rf(){return this}function ef(n){for(var t,r=this;r instanceof G;){var e=to(r);e.__index__=0,e.__values__=Y,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function uf(){var n=this.__wrapped__;if(n instanceof Bt){var t=n;return this.__actions__.length&&(t=new Bt(this)),t=t.reverse(),t.__actions__.push({func:Qo,args:[Ro],thisArg:Y}),new H(t,this.__chain__)}return this.thru(Ro);
}function of(){return du(this.__wrapped__,this.__actions__)}function ff(n,t,r){var e=yh(n)?u:Gr;return r&&Li(n,t,r)&&(t=Y),e(n,bi(t,3))}function cf(n,t){return(yh(n)?i:ne)(n,bi(t,3))}function af(n,t){return te(vf(n,t),1)}function lf(n,t){return te(vf(n,t),Rn)}function sf(n,t,r){return r=r===Y?1:jc(r),te(vf(n,t),r)}function hf(n,t){return(yh(n)?r:vs)(n,bi(t,3))}function pf(n,t){return(yh(n)?e:gs)(n,bi(t,3))}function _f(n,t,r,e){n=Vf(n)?n:na(n),r=r&&!e?jc(r):0;var u=n.length;return r<0&&(r=Kl(u+r,0)),
gc(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&y(n,t,r)>-1}function vf(n,t){return(yh(n)?c:Fe)(n,bi(t,3))}function gf(n,t,r,e){return null==n?[]:(yh(t)||(t=null==t?[]:[t]),r=e?Y:r,yh(r)||(r=null==r?[]:[r]),Ve(n,t,r))}function yf(n,t,r){var e=yh(n)?l:j,u=arguments.length<3;return e(n,bi(t,4),r,u,vs)}function df(n,t,r){var e=yh(n)?s:j,u=arguments.length<3;return e(n,bi(t,4),r,u,gs)}function bf(n,t){return(yh(n)?i:ne)(n,Lf(bi(t,3)))}function wf(n){return(yh(n)?kr:eu)(n)}function mf(n,t,r){return t=(r?Li(n,t,r):t===Y)?1:jc(t),
(yh(n)?Or:uu)(n,t)}function xf(n){return(yh(n)?Ir:ou)(n)}function jf(n){if(null==n)return 0;if(Vf(n))return gc(n)?K(n):n.length;var t=Is(n);return t==Zn||t==Qn?n.size:$e(n).length}function Af(n,t,r){var e=yh(n)?h:cu;return r&&Li(n,t,r)&&(t=Y),e(n,bi(t,3))}function kf(n,t){if("function"!=typeof t)throw new sl(tn);return n=jc(n),function(){if(--n<1)return t.apply(this,arguments)}}function Of(n,t,r){return t=r?Y:t,t=n&&null==t?n.length:t,fi(n,dn,Y,Y,Y,Y,t)}function If(n,t){var r;if("function"!=typeof t)throw new sl(tn);
return n=jc(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=Y),r}}function Rf(n,t,r){t=r?Y:t;var e=fi(n,_n,Y,Y,Y,Y,Y,t);return e.placeholder=Rf.placeholder,e}function zf(n,t,r){t=r?Y:t;var e=fi(n,vn,Y,Y,Y,Y,Y,t);return e.placeholder=zf.placeholder,e}function Ef(n,t,r){function e(t){var r=h,e=p;return h=p=Y,d=t,v=n.apply(e,r)}function u(n){return d=n,g=Es(f,t),b?e(n):v}function i(n){var r=n-y,e=n-d,u=t-r;return w?Vl(u,_-e):u}function o(n){var r=n-y,e=n-d;return y===Y||r>=t||r<0||w&&e>=_;
}function f(){var n=ih();return o(n)?c(n):(g=Es(f,i(n)),Y)}function c(n){return g=Y,m&&h?e(n):(h=p=Y,v)}function a(){g!==Y&&xs(g),d=0,h=y=p=g=Y}function l(){return g===Y?v:c(ih())}function s(){var n=ih(),r=o(n);if(h=arguments,p=this,y=n,r){if(g===Y)return u(y);if(w)return xs(g),g=Es(f,t),e(y)}return g===Y&&(g=Es(f,t)),v}var h,p,_,v,g,y,d=0,b=!1,w=!1,m=!0;if("function"!=typeof n)throw new sl(tn);return t=kc(t)||0,ic(r)&&(b=!!r.leading,w="maxWait"in r,_=w?Kl(kc(r.maxWait)||0,t):_,m="trailing"in r?!!r.trailing:m),
s.cancel=a,s.flush=l,s}function Sf(n){return fi(n,wn)}function Wf(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new sl(tn);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(Wf.Cache||ar),r}function Lf(n){if("function"!=typeof n)throw new sl(tn);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:
return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function Cf(n){return If(2,n)}function Uf(n,t){if("function"!=typeof n)throw new sl(tn);return t=t===Y?t:jc(t),ru(n,t)}function Bf(t,r){if("function"!=typeof t)throw new sl(tn);return r=null==r?0:Kl(jc(r),0),ru(function(e){var u=e[r],i=Au(e,0,r);return u&&a(i,u),n(t,this,i)})}function Tf(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new sl(tn);return ic(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),
Ef(n,t,{leading:e,maxWait:t,trailing:u})}function $f(n){return Of(n,1)}function Df(n,t){return sh(xu(t),n)}function Mf(){if(!arguments.length)return[];var n=arguments[0];return yh(n)?n:[n]}function Ff(n){return Dr(n,cn)}function Nf(n,t){return t="function"==typeof t?t:Y,Dr(n,cn,t)}function Pf(n){return Dr(n,on|cn)}function qf(n,t){return t="function"==typeof t?t:Y,Dr(n,on|cn,t)}function Zf(n,t){return null==t||Zr(n,t,Fc(t))}function Kf(n,t){return n===t||n!==n&&t!==t}function Vf(n){return null!=n&&uc(n.length)&&!rc(n);
}function Gf(n){return oc(n)&&Vf(n)}function Hf(n){return n===!0||n===!1||oc(n)&&de(n)==Dn}function Jf(n){return oc(n)&&1===n.nodeType&&!_c(n)}function Yf(n){if(null==n)return!0;if(Vf(n)&&(yh(n)||"string"==typeof n||"function"==typeof n.splice||bh(n)||Ah(n)||gh(n)))return!n.length;var t=Is(n);if(t==Zn||t==Qn)return!n.size;if($i(n))return!$e(n).length;for(var r in n)if(yl.call(n,r))return!1;return!0}function Qf(n,t){return ze(n,t)}function Xf(n,t,r){r="function"==typeof r?r:Y;var e=r?r(n,t):Y;return e===Y?ze(n,t,Y,r):!!e;
}function nc(n){if(!oc(n))return!1;var t=de(n);return t==Nn||t==Fn||"string"==typeof n.message&&"string"==typeof n.name&&!_c(n)}function tc(n){return"number"==typeof n&&Pl(n)}function rc(n){if(!ic(n))return!1;var t=de(n);return t==Pn||t==qn||t==$n||t==Jn}function ec(n){return"number"==typeof n&&n==jc(n)}function uc(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=zn}function ic(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function oc(n){return null!=n&&"object"==typeof n}function fc(n,t){
return n===t||We(n,t,mi(t))}function cc(n,t,r){return r="function"==typeof r?r:Y,We(n,t,mi(t),r)}function ac(n){return pc(n)&&n!=+n}function lc(n){if(Rs(n))throw new il(nn);return Le(n)}function sc(n){return null===n}function hc(n){return null==n}function pc(n){return"number"==typeof n||oc(n)&&de(n)==Kn}function _c(n){if(!oc(n)||de(n)!=Gn)return!1;var t=Rl(n);if(null===t)return!0;var r=yl.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&gl.call(r)==ml}function vc(n){
return ec(n)&&n>=-zn&&n<=zn}function gc(n){return"string"==typeof n||!yh(n)&&oc(n)&&de(n)==Xn}function yc(n){return"symbol"==typeof n||oc(n)&&de(n)==nt}function dc(n){return n===Y}function bc(n){return oc(n)&&Is(n)==rt}function wc(n){return oc(n)&&de(n)==et}function mc(n){if(!n)return[];if(Vf(n))return gc(n)?V(n):Uu(n);if(Ll&&n[Ll])return $(n[Ll]());var t=Is(n);return(t==Zn?D:t==Qn?N:na)(n)}function xc(n){if(!n)return 0===n?n:0;if(n=kc(n),n===Rn||n===-Rn){return(n<0?-1:1)*En}return n===n?n:0}function jc(n){
var t=xc(n),r=t%1;return t===t?r?t-r:t:0}function Ac(n){return n?$r(jc(n),0,Wn):0}function kc(n){if("number"==typeof n)return n;if(yc(n))return Sn;if(ic(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=ic(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Et,"");var r=Ft.test(n);return r||Pt.test(n)?Jr(n.slice(2),r?2:8):Mt.test(n)?Sn:+n}function Oc(n){return Bu(n,Nc(n))}function Ic(n){return n?$r(jc(n),-zn,zn):0===n?n:0}function Rc(n){return null==n?"":pu(n)}function zc(n,t){var r=_s(n);
return null==t?r:Wr(r,t)}function Ec(n,t){return v(n,bi(t,3),ee)}function Sc(n,t){return v(n,bi(t,3),ue)}function Wc(n,t){return null==n?n:ys(n,bi(t,3),Nc)}function Lc(n,t){return null==n?n:ds(n,bi(t,3),Nc)}function Cc(n,t){return n&&ee(n,bi(t,3))}function Uc(n,t){return n&&ue(n,bi(t,3))}function Bc(n){return null==n?[]:se(n,Fc(n))}function Tc(n){return null==n?[]:se(n,Nc(n))}function $c(n,t,r){var e=null==n?Y:ve(n,t);return e===Y?r:e}function Dc(n,t){return null!=n&&Oi(n,t,we)}function Mc(n,t){return null!=n&&Oi(n,t,me);
}function Fc(n){return Vf(n)?Ar(n):$e(n)}function Nc(n){return Vf(n)?Ar(n,!0):De(n)}function Pc(n,t){var r={};return t=bi(t,3),ee(n,function(n,e,u){Cr(r,t(n,e,u),n)}),r}function qc(n,t){var r={};return t=bi(t,3),ee(n,function(n,e,u){Cr(r,e,t(n,e,u))}),r}function Zc(n,t){return Kc(n,Lf(bi(t)))}function Kc(n,t){if(null==n)return{};var r=c(gi(n),function(n){return[n]});return t=bi(t),He(n,r,function(n,r){return t(n,r[0])})}function Vc(n,t,r){t=ju(t,n);var e=-1,u=t.length;for(u||(u=1,n=Y);++e<u;){var i=null==n?Y:n[Qi(t[e])];
i===Y&&(e=u,i=r),n=rc(i)?i.call(n):i}return n}function Gc(n,t,r){return null==n?n:iu(n,t,r)}function Hc(n,t,r,e){return e="function"==typeof e?e:Y,null==n?n:iu(n,t,r,e)}function Jc(n,t,e){var u=yh(n),i=u||bh(n)||Ah(n);if(t=bi(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:ic(n)&&rc(o)?_s(Rl(n)):{}}return(i?r:ee)(n,function(n,r,u){return t(e,n,r,u)}),e}function Yc(n,t){return null==n||vu(n,t)}function Qc(n,t,r){return null==n?n:gu(n,t,xu(r))}function Xc(n,t,r,e){return e="function"==typeof e?e:Y,
null==n?n:gu(n,t,xu(r),e)}function na(n){return null==n?[]:z(n,Fc(n))}function ta(n){return null==n?[]:z(n,Nc(n))}function ra(n,t,r){return r===Y&&(r=t,t=Y),r!==Y&&(r=kc(r),r=r===r?r:0),t!==Y&&(t=kc(t),t=t===t?t:0),$r(kc(n),t,r)}function ea(n,t,r){return t=xc(t),r===Y?(r=t,t=0):r=xc(r),n=kc(n),xe(n,t,r)}function ua(n,t,r){if(r&&"boolean"!=typeof r&&Li(n,t,r)&&(t=r=Y),r===Y&&("boolean"==typeof t?(r=t,t=Y):"boolean"==typeof n&&(r=n,n=Y)),n===Y&&t===Y?(n=0,t=1):(n=xc(n),t===Y?(t=n,n=0):t=xc(t)),n>t){
var e=n;n=t,t=e}if(r||n%1||t%1){var u=Jl();return Vl(n+u*(t-n+Hr("1e-"+((u+"").length-1))),t)}return Xe(n,t)}function ia(n){return Jh(Rc(n).toLowerCase())}function oa(n){return n=Rc(n),n&&n.replace(Zt,he).replace(Br,"")}function fa(n,t,r){n=Rc(n),t=pu(t);var e=n.length;r=r===Y?e:$r(jc(r),0,e);var u=r;return r-=t.length,r>=0&&n.slice(r,u)==t}function ca(n){return n=Rc(n),n&&mt.test(n)?n.replace(bt,pe):n}function aa(n){return n=Rc(n),n&&zt.test(n)?n.replace(Rt,"\\$&"):n}function la(n,t,r){n=Rc(n),t=jc(t);
var e=t?K(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return ni(Ml(u),r)+n+ni(Dl(u),r)}function sa(n,t,r){n=Rc(n),t=jc(t);var e=t?K(n):0;return t&&e<t?n+ni(t-e,r):n}function ha(n,t,r){n=Rc(n),t=jc(t);var e=t?K(n):0;return t&&e<t?ni(t-e,r)+n:n}function pa(n,t,r){return r||null==t?t=0:t&&(t=+t),Hl(Rc(n).replace(St,""),t||0)}function _a(n,t,r){return t=(r?Li(n,t,r):t===Y)?1:jc(t),tu(Rc(n),t)}function va(){var n=arguments,t=Rc(n[0]);return n.length<3?t:t.replace(n[1],n[2])}function ga(n,t,r){return r&&"number"!=typeof r&&Li(n,t,r)&&(t=r=Y),
(r=r===Y?Wn:r>>>0)?(n=Rc(n),n&&("string"==typeof t||null!=t&&!xh(t))&&(t=pu(t),!t&&B(n))?Au(V(n),0,r):n.split(t,r)):[]}function ya(n,t,r){return n=Rc(n),r=null==r?0:$r(jc(r),0,n.length),t=pu(t),n.slice(r,r+t.length)==t}function da(n,t,r){var e=q.templateSettings;r&&Li(n,t,r)&&(t=Y),n=Rc(n),t=zh({},t,e,ci);var u,i,o=zh({},t.imports,e.imports,ci),f=Fc(o),c=z(o,f),a=0,l=t.interpolate||Kt,s="__p += '",h=al((t.escape||Kt).source+"|"+l.source+"|"+(l===At?$t:Kt).source+"|"+(t.evaluate||Kt).source+"|$","g"),p="//# sourceURL="+(yl.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Nr+"]")+"\n";
n.replace(h,function(t,r,e,o,f,c){return e||(e=o),s+=n.slice(a,c).replace(Vt,C),r&&(u=!0,s+="' +\n__e("+r+") +\n'"),f&&(i=!0,s+="';\n"+f+";\n__p += '"),e&&(s+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),a=c+t.length,t}),s+="';\n";var _=yl.call(t,"variable")&&t.variable;_||(s="with (obj) {\n"+s+"\n}\n"),s=(i?s.replace(vt,""):s).replace(gt,"$1").replace(yt,"$1;"),s="function("+(_||"obj")+") {\n"+(_?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";
var v=Yh(function(){return ol(f,p+"return "+s).apply(Y,c)});if(v.source=s,nc(v))throw v;return v}function ba(n){return Rc(n).toLowerCase()}function wa(n){return Rc(n).toUpperCase()}function ma(n,t,r){if(n=Rc(n),n&&(r||t===Y))return n.replace(Et,"");if(!n||!(t=pu(t)))return n;var e=V(n),u=V(t);return Au(e,S(e,u),W(e,u)+1).join("")}function xa(n,t,r){if(n=Rc(n),n&&(r||t===Y))return n.replace(Wt,"");if(!n||!(t=pu(t)))return n;var e=V(n);return Au(e,0,W(e,V(t))+1).join("")}function ja(n,t,r){if(n=Rc(n),
n&&(r||t===Y))return n.replace(St,"");if(!n||!(t=pu(t)))return n;var e=V(n);return Au(e,S(e,V(t))).join("")}function Aa(n,t){var r=mn,e=xn;if(ic(t)){var u="separator"in t?t.separator:u;r="length"in t?jc(t.length):r,e="omission"in t?pu(t.omission):e}n=Rc(n);var i=n.length;if(B(n)){var o=V(n);i=o.length}if(r>=i)return n;var f=r-K(e);if(f<1)return e;var c=o?Au(o,0,f).join(""):n.slice(0,f);if(u===Y)return c+e;if(o&&(f+=c.length-f),xh(u)){if(n.slice(f).search(u)){var a,l=c;for(u.global||(u=al(u.source,Rc(Dt.exec(u))+"g")),
u.lastIndex=0;a=u.exec(l);)var s=a.index;c=c.slice(0,s===Y?f:s)}}else if(n.indexOf(pu(u),f)!=f){var h=c.lastIndexOf(u);h>-1&&(c=c.slice(0,h))}return c+e}function ka(n){return n=Rc(n),n&&wt.test(n)?n.replace(dt,_e):n}function Oa(n,t,r){return n=Rc(n),t=r?Y:t,t===Y?T(n)?J(n):_(n):n.match(t)||[]}function Ia(t){var r=null==t?0:t.length,e=bi();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new sl(tn);return[e(n[0]),n[1]]}):[],ru(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e);
}})}function Ra(n){return Mr(Dr(n,on))}function za(n){return function(){return n}}function Ea(n,t){return null==n||n!==n?t:n}function Sa(n){return n}function Wa(n){return Te("function"==typeof n?n:Dr(n,on))}function La(n){return Ne(Dr(n,on))}function Ca(n,t){return Pe(n,Dr(t,on))}function Ua(n,t,e){var u=Fc(t),i=se(t,u);null!=e||ic(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=se(t,Fc(t)));var o=!(ic(e)&&"chain"in e&&!e.chain),f=rc(n);return r(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){
var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Uu(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Ba(){return Xr._===this&&(Xr._=xl),this}function Ta(){}function $a(n){return n=jc(n),ru(function(t){return Ke(t,n)})}function Da(n){return Ci(n)?m(Qi(n)):Je(n)}function Ma(n){return function(t){return null==n?Y:ve(n,t)}}function Fa(){return[]}function Na(){return!1}function Pa(){return{};
}function qa(){return""}function Za(){return!0}function Ka(n,t){if(n=jc(n),n<1||n>zn)return[];var r=Wn,e=Vl(n,Wn);t=bi(t),n-=Wn;for(var u=O(e,t);++r<n;)t(r);return u}function Va(n){return yh(n)?c(n,Qi):yc(n)?[n]:Uu(Ws(Rc(n)))}function Ga(n){var t=++dl;return Rc(n)+t}function Ha(n){return n&&n.length?Yr(n,Sa,be):Y}function Ja(n,t){return n&&n.length?Yr(n,bi(t,2),be):Y}function Ya(n){return w(n,Sa)}function Qa(n,t){return w(n,bi(t,2))}function Xa(n){return n&&n.length?Yr(n,Sa,Me):Y}function nl(n,t){
return n&&n.length?Yr(n,bi(t,2),Me):Y}function tl(n){return n&&n.length?k(n,Sa):0}function rl(n,t){return n&&n.length?k(n,bi(t,2)):0}x=null==x?Xr:ge.defaults(Xr.Object(),x,ge.pick(Xr,Fr));var el=x.Array,ul=x.Date,il=x.Error,ol=x.Function,fl=x.Math,cl=x.Object,al=x.RegExp,ll=x.String,sl=x.TypeError,hl=el.prototype,pl=ol.prototype,_l=cl.prototype,vl=x["__core-js_shared__"],gl=pl.toString,yl=_l.hasOwnProperty,dl=0,bl=function(){var n=/[^.]+$/.exec(vl&&vl.keys&&vl.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:"";
}(),wl=_l.toString,ml=gl.call(cl),xl=Xr._,jl=al("^"+gl.call(yl).replace(Rt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Al=re?x.Buffer:Y,kl=x.Symbol,Ol=x.Uint8Array,Il=Al?Al.allocUnsafe:Y,Rl=M(cl.getPrototypeOf,cl),zl=cl.create,El=_l.propertyIsEnumerable,Sl=hl.splice,Wl=kl?kl.isConcatSpreadable:Y,Ll=kl?kl.iterator:Y,Cl=kl?kl.toStringTag:Y,Ul=function(){try{var n=xi(cl,"defineProperty");return n({},"",{}),n}catch(n){}}(),Bl=x.clearTimeout!==Xr.clearTimeout&&x.clearTimeout,Tl=ul&&ul.now!==Xr.Date.now&&ul.now,$l=x.setTimeout!==Xr.setTimeout&&x.setTimeout,Dl=fl.ceil,Ml=fl.floor,Fl=cl.getOwnPropertySymbols,Nl=Al?Al.isBuffer:Y,Pl=x.isFinite,ql=hl.join,Zl=M(cl.keys,cl),Kl=fl.max,Vl=fl.min,Gl=ul.now,Hl=x.parseInt,Jl=fl.random,Yl=hl.reverse,Ql=xi(x,"DataView"),Xl=xi(x,"Map"),ns=xi(x,"Promise"),ts=xi(x,"Set"),rs=xi(x,"WeakMap"),es=xi(cl,"create"),us=rs&&new rs,is={},os=Xi(Ql),fs=Xi(Xl),cs=Xi(ns),as=Xi(ts),ls=Xi(rs),ss=kl?kl.prototype:Y,hs=ss?ss.valueOf:Y,ps=ss?ss.toString:Y,_s=function(){
function n(){}return function(t){if(!ic(t))return{};if(zl)return zl(t);n.prototype=t;var r=new n;return n.prototype=Y,r}}();q.templateSettings={escape:xt,evaluate:jt,interpolate:At,variable:"",imports:{_:q}},q.prototype=G.prototype,q.prototype.constructor=q,H.prototype=_s(G.prototype),H.prototype.constructor=H,Bt.prototype=_s(G.prototype),Bt.prototype.constructor=Bt,Yt.prototype.clear=Qt,Yt.prototype.delete=Xt,Yt.prototype.get=nr,Yt.prototype.has=tr,Yt.prototype.set=rr,er.prototype.clear=ur,er.prototype.delete=ir,
er.prototype.get=or,er.prototype.has=fr,er.prototype.set=cr,ar.prototype.clear=lr,ar.prototype.delete=sr,ar.prototype.get=hr,ar.prototype.has=pr,ar.prototype.set=_r,vr.prototype.add=vr.prototype.push=gr,vr.prototype.has=yr,dr.prototype.clear=br,dr.prototype.delete=wr,dr.prototype.get=mr,dr.prototype.has=xr,dr.prototype.set=jr;var vs=Fu(ee),gs=Fu(ue,!0),ys=Nu(),ds=Nu(!0),bs=us?function(n,t){return us.set(n,t),n}:Sa,ws=Ul?function(n,t){return Ul(n,"toString",{configurable:!0,enumerable:!1,value:za(t),
writable:!0})}:Sa,ms=ru,xs=Bl||function(n){return Xr.clearTimeout(n)},js=ts&&1/N(new ts([,-0]))[1]==Rn?function(n){return new ts(n)}:Ta,As=us?function(n){return us.get(n)}:Ta,ks=Fl?function(n){return null==n?[]:(n=cl(n),i(Fl(n),function(t){return El.call(n,t)}))}:Fa,Os=Fl?function(n){for(var t=[];n;)a(t,ks(n)),n=Rl(n);return t}:Fa,Is=de;(Ql&&Is(new Ql(new ArrayBuffer(1)))!=it||Xl&&Is(new Xl)!=Zn||ns&&Is(ns.resolve())!=Hn||ts&&Is(new ts)!=Qn||rs&&Is(new rs)!=rt)&&(Is=function(n){var t=de(n),r=t==Gn?n.constructor:Y,e=r?Xi(r):"";
if(e)switch(e){case os:return it;case fs:return Zn;case cs:return Hn;case as:return Qn;case ls:return rt}return t});var Rs=vl?rc:Na,zs=Ji(bs),Es=$l||function(n,t){return Xr.setTimeout(n,t)},Ss=Ji(ws),Ws=Fi(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(It,function(n,r,e,u){t.push(e?u.replace(Tt,"$1"):r||n)}),t}),Ls=ru(function(n,t){return Gf(n)?Vr(n,te(t,1,Gf,!0)):[]}),Cs=ru(function(n,t){var r=mo(t);return Gf(r)&&(r=Y),Gf(n)?Vr(n,te(t,1,Gf,!0),bi(r,2)):[]}),Us=ru(function(n,t){
var r=mo(t);return Gf(r)&&(r=Y),Gf(n)?Vr(n,te(t,1,Gf,!0),Y,r):[]}),Bs=ru(function(n){var t=c(n,mu);return t.length&&t[0]===n[0]?je(t):[]}),Ts=ru(function(n){var t=mo(n),r=c(n,mu);return t===mo(r)?t=Y:r.pop(),r.length&&r[0]===n[0]?je(r,bi(t,2)):[]}),$s=ru(function(n){var t=mo(n),r=c(n,mu);return t="function"==typeof t?t:Y,t&&r.pop(),r.length&&r[0]===n[0]?je(r,Y,t):[]}),Ds=ru(Ao),Ms=_i(function(n,t){var r=null==n?0:n.length,e=Tr(n,t);return Qe(n,c(t,function(n){return Wi(n,r)?+n:n}).sort(Su)),e}),Fs=ru(function(n){
return _u(te(n,1,Gf,!0))}),Ns=ru(function(n){var t=mo(n);return Gf(t)&&(t=Y),_u(te(n,1,Gf,!0),bi(t,2))}),Ps=ru(function(n){var t=mo(n);return t="function"==typeof t?t:Y,_u(te(n,1,Gf,!0),Y,t)}),qs=ru(function(n,t){return Gf(n)?Vr(n,t):[]}),Zs=ru(function(n){return bu(i(n,Gf))}),Ks=ru(function(n){var t=mo(n);return Gf(t)&&(t=Y),bu(i(n,Gf),bi(t,2))}),Vs=ru(function(n){var t=mo(n);return t="function"==typeof t?t:Y,bu(i(n,Gf),Y,t)}),Gs=ru(Ko),Hs=ru(function(n){var t=n.length,r=t>1?n[t-1]:Y;return r="function"==typeof r?(n.pop(),
r):Y,Vo(n,r)}),Js=_i(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return Tr(t,n)};return!(t>1||this.__actions__.length)&&e instanceof Bt&&Wi(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:Qo,args:[u],thisArg:Y}),new H(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(Y),n})):this.thru(u)}),Ys=Du(function(n,t,r){yl.call(n,r)?++n[r]:Cr(n,r,1)}),Qs=Gu(lo),Xs=Gu(so),nh=Du(function(n,t,r){yl.call(n,r)?n[r].push(t):Cr(n,r,[t])}),th=ru(function(t,r,e){var u=-1,i="function"==typeof r,o=Vf(t)?el(t.length):[];
return vs(t,function(t){o[++u]=i?n(r,t,e):ke(t,r,e)}),o}),rh=Du(function(n,t,r){Cr(n,r,t)}),eh=Du(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),uh=ru(function(n,t){if(null==n)return[];var r=t.length;return r>1&&Li(n,t[0],t[1])?t=[]:r>2&&Li(t[0],t[1],t[2])&&(t=[t[0]]),Ve(n,te(t,1),[])}),ih=Tl||function(){return Xr.Date.now()},oh=ru(function(n,t,r){var e=sn;if(r.length){var u=F(r,di(oh));e|=gn}return fi(n,e,t,r,u)}),fh=ru(function(n,t,r){var e=sn|hn;if(r.length){var u=F(r,di(fh));e|=gn;
}return fi(t,e,n,r,u)}),ch=ru(function(n,t){return Kr(n,1,t)}),ah=ru(function(n,t,r){return Kr(n,kc(t)||0,r)});Wf.Cache=ar;var lh=ms(function(t,r){r=1==r.length&&yh(r[0])?c(r[0],R(bi())):c(te(r,1),R(bi()));var e=r.length;return ru(function(u){for(var i=-1,o=Vl(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);return n(t,this,u)})}),sh=ru(function(n,t){return fi(n,gn,Y,t,F(t,di(sh)))}),hh=ru(function(n,t){return fi(n,yn,Y,t,F(t,di(hh)))}),ph=_i(function(n,t){return fi(n,bn,Y,Y,Y,t)}),_h=ei(be),vh=ei(function(n,t){
return n>=t}),gh=Oe(function(){return arguments}())?Oe:function(n){return oc(n)&&yl.call(n,"callee")&&!El.call(n,"callee")},yh=el.isArray,dh=ie?R(ie):Ie,bh=Nl||Na,wh=oe?R(oe):Re,mh=fe?R(fe):Se,xh=ce?R(ce):Ce,jh=ae?R(ae):Ue,Ah=le?R(le):Be,kh=ei(Me),Oh=ei(function(n,t){return n<=t}),Ih=Mu(function(n,t){if($i(t)||Vf(t))return Bu(t,Fc(t),n),Y;for(var r in t)yl.call(t,r)&&zr(n,r,t[r])}),Rh=Mu(function(n,t){Bu(t,Nc(t),n)}),zh=Mu(function(n,t,r,e){Bu(t,Nc(t),n,e)}),Eh=Mu(function(n,t,r,e){Bu(t,Fc(t),n,e);
}),Sh=_i(Tr),Wh=ru(function(n,t){n=cl(n);var r=-1,e=t.length,u=e>2?t[2]:Y;for(u&&Li(t[0],t[1],u)&&(e=1);++r<e;)for(var i=t[r],o=Nc(i),f=-1,c=o.length;++f<c;){var a=o[f],l=n[a];(l===Y||Kf(l,_l[a])&&!yl.call(n,a))&&(n[a]=i[a])}return n}),Lh=ru(function(t){return t.push(Y,ai),n($h,Y,t)}),Ch=Yu(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=wl.call(t)),n[t]=r},za(Sa)),Uh=Yu(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=wl.call(t)),yl.call(n,t)?n[t].push(r):n[t]=[r]},bi),Bh=ru(ke),Th=Mu(function(n,t,r){
qe(n,t,r)}),$h=Mu(function(n,t,r,e){qe(n,t,r,e)}),Dh=_i(function(n,t){var r={};if(null==n)return r;var e=!1;t=c(t,function(t){return t=ju(t,n),e||(e=t.length>1),t}),Bu(n,gi(n),r),e&&(r=Dr(r,on|fn|cn,li));for(var u=t.length;u--;)vu(r,t[u]);return r}),Mh=_i(function(n,t){return null==n?{}:Ge(n,t)}),Fh=oi(Fc),Nh=oi(Nc),Ph=Zu(function(n,t,r){return t=t.toLowerCase(),n+(r?ia(t):t)}),qh=Zu(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Zh=Zu(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Kh=qu("toLowerCase"),Vh=Zu(function(n,t,r){
return n+(r?"_":"")+t.toLowerCase()}),Gh=Zu(function(n,t,r){return n+(r?" ":"")+Jh(t)}),Hh=Zu(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Jh=qu("toUpperCase"),Yh=ru(function(t,r){try{return n(t,Y,r)}catch(n){return nc(n)?n:new il(n)}}),Qh=_i(function(n,t){return r(t,function(t){t=Qi(t),Cr(n,t,oh(n[t],n))}),n}),Xh=Hu(),np=Hu(!0),tp=ru(function(n,t){return function(r){return ke(r,n,t)}}),rp=ru(function(n,t){return function(r){return ke(n,r,t)}}),ep=Xu(c),up=Xu(u),ip=Xu(h),op=ri(),fp=ri(!0),cp=Qu(function(n,t){
return n+t},0),ap=ii("ceil"),lp=Qu(function(n,t){return n/t},1),sp=ii("floor"),hp=Qu(function(n,t){return n*t},1),pp=ii("round"),_p=Qu(function(n,t){return n-t},0);return q.after=kf,q.ary=Of,q.assign=Ih,q.assignIn=Rh,q.assignInWith=zh,q.assignWith=Eh,q.at=Sh,q.before=If,q.bind=oh,q.bindAll=Qh,q.bindKey=fh,q.castArray=Mf,q.chain=Jo,q.chunk=ro,q.compact=eo,q.concat=uo,q.cond=Ia,q.conforms=Ra,q.constant=za,q.countBy=Ys,q.create=zc,q.curry=Rf,q.curryRight=zf,q.debounce=Ef,q.defaults=Wh,q.defaultsDeep=Lh,
q.defer=ch,q.delay=ah,q.difference=Ls,q.differenceBy=Cs,q.differenceWith=Us,q.drop=io,q.dropRight=oo,q.dropRightWhile=fo,q.dropWhile=co,q.fill=ao,q.filter=cf,q.flatMap=af,q.flatMapDeep=lf,q.flatMapDepth=sf,q.flatten=ho,q.flattenDeep=po,q.flattenDepth=_o,q.flip=Sf,q.flow=Xh,q.flowRight=np,q.fromPairs=vo,q.functions=Bc,q.functionsIn=Tc,q.groupBy=nh,q.initial=bo,q.intersection=Bs,q.intersectionBy=Ts,q.intersectionWith=$s,q.invert=Ch,q.invertBy=Uh,q.invokeMap=th,q.iteratee=Wa,q.keyBy=rh,q.keys=Fc,q.keysIn=Nc,
q.map=vf,q.mapKeys=Pc,q.mapValues=qc,q.matches=La,q.matchesProperty=Ca,q.memoize=Wf,q.merge=Th,q.mergeWith=$h,q.method=tp,q.methodOf=rp,q.mixin=Ua,q.negate=Lf,q.nthArg=$a,q.omit=Dh,q.omitBy=Zc,q.once=Cf,q.orderBy=gf,q.over=ep,q.overArgs=lh,q.overEvery=up,q.overSome=ip,q.partial=sh,q.partialRight=hh,q.partition=eh,q.pick=Mh,q.pickBy=Kc,q.property=Da,q.propertyOf=Ma,q.pull=Ds,q.pullAll=Ao,q.pullAllBy=ko,q.pullAllWith=Oo,q.pullAt=Ms,q.range=op,q.rangeRight=fp,q.rearg=ph,q.reject=bf,q.remove=Io,q.rest=Uf,
q.reverse=Ro,q.sampleSize=mf,q.set=Gc,q.setWith=Hc,q.shuffle=xf,q.slice=zo,q.sortBy=uh,q.sortedUniq=Bo,q.sortedUniqBy=To,q.split=ga,q.spread=Bf,q.tail=$o,q.take=Do,q.takeRight=Mo,q.takeRightWhile=Fo,q.takeWhile=No,q.tap=Yo,q.throttle=Tf,q.thru=Qo,q.toArray=mc,q.toPairs=Fh,q.toPairsIn=Nh,q.toPath=Va,q.toPlainObject=Oc,q.transform=Jc,q.unary=$f,q.union=Fs,q.unionBy=Ns,q.unionWith=Ps,q.uniq=Po,q.uniqBy=qo,q.uniqWith=Zo,q.unset=Yc,q.unzip=Ko,q.unzipWith=Vo,q.update=Qc,q.updateWith=Xc,q.values=na,q.valuesIn=ta,
q.without=qs,q.words=Oa,q.wrap=Df,q.xor=Zs,q.xorBy=Ks,q.xorWith=Vs,q.zip=Gs,q.zipObject=Go,q.zipObjectDeep=Ho,q.zipWith=Hs,q.entries=Fh,q.entriesIn=Nh,q.extend=Rh,q.extendWith=zh,Ua(q,q),q.add=cp,q.attempt=Yh,q.camelCase=Ph,q.capitalize=ia,q.ceil=ap,q.clamp=ra,q.clone=Ff,q.cloneDeep=Pf,q.cloneDeepWith=qf,q.cloneWith=Nf,q.conformsTo=Zf,q.deburr=oa,q.defaultTo=Ea,q.divide=lp,q.endsWith=fa,q.eq=Kf,q.escape=ca,q.escapeRegExp=aa,q.every=ff,q.find=Qs,q.findIndex=lo,q.findKey=Ec,q.findLast=Xs,q.findLastIndex=so,
q.findLastKey=Sc,q.floor=sp,q.forEach=hf,q.forEachRight=pf,q.forIn=Wc,q.forInRight=Lc,q.forOwn=Cc,q.forOwnRight=Uc,q.get=$c,q.gt=_h,q.gte=vh,q.has=Dc,q.hasIn=Mc,q.head=go,q.identity=Sa,q.includes=_f,q.indexOf=yo,q.inRange=ea,q.invoke=Bh,q.isArguments=gh,q.isArray=yh,q.isArrayBuffer=dh,q.isArrayLike=Vf,q.isArrayLikeObject=Gf,q.isBoolean=Hf,q.isBuffer=bh,q.isDate=wh,q.isElement=Jf,q.isEmpty=Yf,q.isEqual=Qf,q.isEqualWith=Xf,q.isError=nc,q.isFinite=tc,q.isFunction=rc,q.isInteger=ec,q.isLength=uc,q.isMap=mh,
q.isMatch=fc,q.isMatchWith=cc,q.isNaN=ac,q.isNative=lc,q.isNil=hc,q.isNull=sc,q.isNumber=pc,q.isObject=ic,q.isObjectLike=oc,q.isPlainObject=_c,q.isRegExp=xh,q.isSafeInteger=vc,q.isSet=jh,q.isString=gc,q.isSymbol=yc,q.isTypedArray=Ah,q.isUndefined=dc,q.isWeakMap=bc,q.isWeakSet=wc,q.join=wo,q.kebabCase=qh,q.last=mo,q.lastIndexOf=xo,q.lowerCase=Zh,q.lowerFirst=Kh,q.lt=kh,q.lte=Oh,q.max=Ha,q.maxBy=Ja,q.mean=Ya,q.meanBy=Qa,q.min=Xa,q.minBy=nl,q.stubArray=Fa,q.stubFalse=Na,q.stubObject=Pa,q.stubString=qa,
q.stubTrue=Za,q.multiply=hp,q.nth=jo,q.noConflict=Ba,q.noop=Ta,q.now=ih,q.pad=la,q.padEnd=sa,q.padStart=ha,q.parseInt=pa,q.random=ua,q.reduce=yf,q.reduceRight=df,q.repeat=_a,q.replace=va,q.result=Vc,q.round=pp,q.runInContext=p,q.sample=wf,q.size=jf,q.snakeCase=Vh,q.some=Af,q.sortedIndex=Eo,q.sortedIndexBy=So,q.sortedIndexOf=Wo,q.sortedLastIndex=Lo,q.sortedLastIndexBy=Co,q.sortedLastIndexOf=Uo,q.startCase=Gh,q.startsWith=ya,q.subtract=_p,q.sum=tl,q.sumBy=rl,q.template=da,q.times=Ka,q.toFinite=xc,q.toInteger=jc,
q.toLength=Ac,q.toLower=ba,q.toNumber=kc,q.toSafeInteger=Ic,q.toString=Rc,q.toUpper=wa,q.trim=ma,q.trimEnd=xa,q.trimStart=ja,q.truncate=Aa,q.unescape=ka,q.uniqueId=Ga,q.upperCase=Hh,q.upperFirst=Jh,q.each=hf,q.eachRight=pf,q.first=go,Ua(q,function(){var n={};return ee(q,function(t,r){yl.call(q.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),q.VERSION=Q,r(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){q[n].placeholder=q}),r(["drop","take"],function(n,t){Bt.prototype[n]=function(r){
r=r===Y?1:Kl(jc(r),0);var e=this.__filtered__&&!t?new Bt(this):this.clone();return e.__filtered__?e.__takeCount__=Vl(r,e.__takeCount__):e.__views__.push({size:Vl(r,Wn),type:n+(e.__dir__<0?"Right":"")}),e},Bt.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==kn||r==In;Bt.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:bi(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){
var r="take"+(t?"Right":"");Bt.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Bt.prototype[n]=function(){return this.__filtered__?new Bt(this):this[r](1)}}),Bt.prototype.compact=function(){return this.filter(Sa)},Bt.prototype.find=function(n){return this.filter(n).head()},Bt.prototype.findLast=function(n){return this.reverse().find(n)},Bt.prototype.invokeMap=ru(function(n,t){return"function"==typeof n?new Bt(this):this.map(function(r){
return ke(r,n,t)})}),Bt.prototype.reject=function(n){return this.filter(Lf(bi(n)))},Bt.prototype.slice=function(n,t){n=jc(n);var r=this;return r.__filtered__&&(n>0||t<0)?new Bt(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==Y&&(t=jc(t),r=t<0?r.dropRight(-t):r.take(t-n)),r)},Bt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Bt.prototype.toArray=function(){return this.take(Wn)},ee(Bt.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=q[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);
u&&(q.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Bt,c=o[0],l=f||yh(t),s=function(n){var t=u.apply(q,a([n],o));return e&&h?t[0]:t};l&&r&&"function"==typeof c&&1!=c.length&&(f=l=!1);var h=this.__chain__,p=!!this.__actions__.length,_=i&&!h,v=f&&!p;if(!i&&l){t=v?t:new Bt(this);var g=n.apply(t,o);return g.__actions__.push({func:Qo,args:[s],thisArg:Y}),new H(g,h)}return _&&v?n.apply(this,o):(g=this.thru(s),_?e?g.value()[0]:g.value():g)})}),r(["pop","push","shift","sort","splice","unshift"],function(n){
var t=hl[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);q.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(yh(u)?u:[],n)}return this[r](function(r){return t.apply(yh(r)?r:[],n)})}}),ee(Bt.prototype,function(n,t){var r=q[t];if(r){var e=r.name+"";yl.call(is,e)||(is[e]=[]),is[e].push({name:t,func:r})}}),is[Ju(Y,hn).name]=[{name:"wrapper",func:Y}],Bt.prototype.clone=Gt,Bt.prototype.reverse=Ht,Bt.prototype.value=Jt,q.prototype.at=Js,
q.prototype.chain=Xo,q.prototype.commit=nf,q.prototype.next=tf,q.prototype.plant=ef,q.prototype.reverse=uf,q.prototype.toJSON=q.prototype.valueOf=q.prototype.value=of,q.prototype.first=q.prototype.head,Ll&&(q.prototype[Ll]=rf),q},ge=ve(); true?(Xr._=ge,!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return ge}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))):undefined}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/once.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/once.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var before = __webpack_require__(/*! ./before */ "./node_modules/lodash/before.js");

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

module.exports = once;


/***/ }),

/***/ "./node_modules/opentok-react/dist/OTPublisher.js":
/*!********************************************************!*\
  !*** ./node_modules/opentok-react/dist/OTPublisher.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _once = __webpack_require__(/*! lodash/once */ "./node_modules/lodash/once.js");

var _once2 = _interopRequireDefault(_once);

var _fp = __webpack_require__(/*! lodash/fp */ "./node_modules/lodash/fp.js");

var _uuid = __webpack_require__(/*! uuid */ "./node_modules/opentok-react/node_modules/uuid/index.js");

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OTPublisher = function (_Component) {
  _inherits(OTPublisher, _Component);

  function OTPublisher(props, context) {
    _classCallCheck(this, OTPublisher);

    var _this = _possibleConstructorReturn(this, (OTPublisher.__proto__ || Object.getPrototypeOf(OTPublisher)).call(this, props));

    _this.sessionConnectedHandler = function () {
      _this.publishToSession(_this.state.publisher);
    };

    _this.streamCreatedHandler = function (event) {
      _this.setState({ lastStreamId: event.stream.id });
    };

    _this.state = {
      publisher: null,
      lastStreamId: '',
      session: props.session || context.session || null
    };
    return _this;
  }

  _createClass(OTPublisher, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createPublisher();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var useDefault = function useDefault(value, defaultValue) {
        return value === undefined ? defaultValue : value;
      };

      var shouldUpdate = function shouldUpdate(key, defaultValue) {
        var previous = useDefault(prevProps.properties[key], defaultValue);
        var current = useDefault(_this2.props.properties[key], defaultValue);
        return previous !== current;
      };

      var updatePublisherProperty = function updatePublisherProperty(key, defaultValue) {
        if (shouldUpdate(key, defaultValue)) {
          var value = useDefault(_this2.props.properties[key], defaultValue);
          _this2.state.publisher[key](value);
        }
      };

      if (shouldUpdate('videoSource', undefined)) {
        this.destroyPublisher();
        this.createPublisher();
        return;
      }

      updatePublisherProperty('publishAudio', true);
      updatePublisherProperty('publishVideo', true);

      if (this.state.session !== prevState.session) {
        this.destroyPublisher(prevState.session);
        this.createPublisher();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.state.session) {
        this.state.session.off('sessionConnected', this.sessionConnectedHandler);
      }

      this.destroyPublisher();
    }
  }, {
    key: 'getPublisher',
    value: function getPublisher() {
      return this.state.publisher;
    }
  }, {
    key: 'destroyPublisher',
    value: function destroyPublisher() {
      var _this3 = this;

      var session = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.session;

      delete this.publisherId;

      if (this.state.publisher) {
        this.state.publisher.off('streamCreated', this.streamCreatedHandler);

        if (this.props.eventHandlers && _typeof(this.props.eventHandlers) === 'object') {
          this.state.publisher.once('destroyed', function () {
            _this3.state.publisher.off(_this3.props.eventHandlers);
          });
        }

        if (session) {
          session.unpublish(this.state.publisher);
        }
        this.state.publisher.destroy();
      }
    }
  }, {
    key: 'publishToSession',
    value: function publishToSession(publisher) {
      var _this4 = this;

      var publisherId = this.publisherId;


      this.state.session.publish(publisher, function (err) {
        if (publisherId !== _this4.publisherId) {
          // Either this publisher has been recreated or the
          // component unmounted so don't invoke any callbacks
          return;
        }
        if (err) {
          _this4.errorHandler(err);
        } else if (typeof _this4.props.onPublish === 'function') {
          _this4.props.onPublish();
        }
      });
    }
  }, {
    key: 'createPublisher',
    value: function createPublisher() {
      var _this5 = this;

      if (!this.state.session) {
        this.setState({ publisher: null, lastStreamId: '' });
        return;
      }

      var properties = this.props.properties || {};
      var container = void 0;

      if (properties.insertDefaultUI !== false) {
        container = document.createElement('div');
        container.setAttribute('class', 'OTPublisherContainer');
        this.node.appendChild(container);
      }

      this.publisherId = (0, _uuid2.default)();
      var publisherId = this.publisherId;


      this.errorHandler = (0, _once2.default)(function (err) {
        if (publisherId !== _this5.publisherId) {
          // Either this publisher has been recreated or the
          // component unmounted so don't invoke any callbacks
          return;
        }
        if (typeof _this5.props.onError === 'function') {
          _this5.props.onError(err);
        }
      });

      var publisher = OT.initPublisher(container, properties, function (err) {
        if (publisherId !== _this5.publisherId) {
          // Either this publisher has been recreated or the
          // component unmounted so don't invoke any callbacks
          return;
        }
        if (err) {
          _this5.errorHandler(err);
        } else if (typeof _this5.props.onInit === 'function') {
          _this5.props.onInit();
        }
      });
      publisher.on('streamCreated', this.streamCreatedHandler);

      if (this.props.eventHandlers && _typeof(this.props.eventHandlers) === 'object') {
        var handles = (0, _fp.omitBy)(_fp.isNil)(this.props.eventHandlers);
        publisher.on(handles);
      }

      if (this.state.session.connection) {
        this.publishToSession(publisher);
      } else {
        this.state.session.once('sessionConnected', this.sessionConnectedHandler);
      }

      this.setState({ publisher: publisher, lastStreamId: '' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement('div', { className: className, style: style, ref: function ref(node) {
          _this6.node = node;
        } });
    }
  }]);

  return OTPublisher;
}(_react.Component);

exports.default = OTPublisher;


OTPublisher.propTypes = {
  session: _propTypes2.default.shape({
    connection: _propTypes2.default.shape({
      connectionId: _propTypes2.default.string
    }),
    once: _propTypes2.default.func,
    off: _propTypes2.default.func,
    publish: _propTypes2.default.func,
    unpublish: _propTypes2.default.func
  }),
  className: _propTypes2.default.string,
  style: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  properties: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  eventHandlers: _propTypes2.default.objectOf(_propTypes2.default.func),
  onInit: _propTypes2.default.func,
  onPublish: _propTypes2.default.func,
  onError: _propTypes2.default.func
};

OTPublisher.defaultProps = {
  session: null,
  className: '',
  style: {},
  properties: {},
  eventHandlers: null,
  onInit: null,
  onPublish: null,
  onError: null
};

OTPublisher.contextTypes = {
  session: _propTypes2.default.shape({
    connection: _propTypes2.default.shape({
      connectionId: _propTypes2.default.string
    }),
    once: _propTypes2.default.func,
    off: _propTypes2.default.func,
    publish: _propTypes2.default.func,
    unpublish: _propTypes2.default.func
  })
};

/***/ }),

/***/ "./node_modules/opentok-react/dist/OTSession.js":
/*!******************************************************!*\
  !*** ./node_modules/opentok-react/dist/OTSession.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createSession2 = __webpack_require__(/*! ./createSession */ "./node_modules/opentok-react/dist/createSession.js");

var _createSession3 = _interopRequireDefault(_createSession2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OTSession = function (_Component) {
  _inherits(OTSession, _Component);

  function OTSession(props) {
    _classCallCheck(this, OTSession);

    var _this = _possibleConstructorReturn(this, (OTSession.__proto__ || Object.getPrototypeOf(OTSession)).call(this, props));

    _this.state = {
      streams: []
    };
    return _this;
  }

  _createClass(OTSession, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { session: this.sessionHelper.session, streams: this.state.streams };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.createSession();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.apiKey !== this.props.apiKey || prevProps.sessionId !== this.props.sessionId || prevProps.token !== this.props.token) {
        this.createSession();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroySession();
    }
  }, {
    key: 'createSession',
    value: function createSession() {
      var _this2 = this;

      this.destroySession();

      this.sessionHelper = (0, _createSession3.default)({
        apiKey: this.props.apiKey,
        sessionId: this.props.sessionId,
        token: this.props.token,
        onStreamsUpdated: function onStreamsUpdated(streams) {
          _this2.setState({ streams: streams });
        },
        onConnect: this.props.onConnect,
        onError: this.props.onError,
        options: this.props.options
      });

      if (this.props.eventHandlers && _typeof(this.props.eventHandlers) === 'object') {
        this.sessionHelper.session.on(this.props.eventHandlers);
      }

      var streams = this.sessionHelper.streams;

      this.setState({ streams: streams });
    }
  }, {
    key: 'destroySession',
    value: function destroySession() {
      if (this.sessionHelper) {
        if (this.props.eventHandlers && _typeof(this.props.eventHandlers) === 'object') {
          this.sessionHelper.session.off(this.props.eventHandlers);
        }
        this.sessionHelper.disconnect();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return OTSession;
}(_react.Component);

exports.default = OTSession;


OTSession.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]).isRequired,
  apiKey: _propTypes2.default.string.isRequired,
  sessionId: _propTypes2.default.string.isRequired,
  token: _propTypes2.default.string.isRequired,
  eventHandlers: _propTypes2.default.objectOf(_propTypes2.default.func),
  onConnect: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  options: _propTypes2.default.object
};

OTSession.defaultProps = {
  eventHandlers: null,
  onConnect: null,
  onError: null,
  options: {}
};

OTSession.childContextTypes = {
  streams: _propTypes2.default.arrayOf(_propTypes2.default.object),
  session: _propTypes2.default.shape({
    subscribe: _propTypes2.default.func,
    unsubscribe: _propTypes2.default.func
  })
};

/***/ }),

/***/ "./node_modules/opentok-react/dist/OTStreams.js":
/*!******************************************************!*\
  !*** ./node_modules/opentok-react/dist/OTStreams.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OTStreams;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _OTSubscriberContext = __webpack_require__(/*! ./OTSubscriberContext */ "./node_modules/opentok-react/dist/OTSubscriberContext.js");

var _OTSubscriberContext2 = _interopRequireDefault(_OTSubscriberContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OTStreams(props, context) {
  var session = props.session || context.session || null;
  var streams = props.streams || context.streams || null;

  if (!session) {
    return _react2.default.createElement('div', null);
  }

  var child = _react.Children.only(props.children);

  var childrenWithContextWrapper = Array.isArray(streams) ? streams.map(function (stream) {
    return child ? _react2.default.createElement(
      _OTSubscriberContext2.default,
      { stream: stream, key: stream.id },
      (0, _react.cloneElement)(child)
    ) : child;
  }) : null;

  return _react2.default.createElement(
    'div',
    null,
    childrenWithContextWrapper
  );
}

OTStreams.propTypes = {
  children: _propTypes2.default.element.isRequired,
  session: _propTypes2.default.shape({ publish: _propTypes2.default.func, subscribe: _propTypes2.default.func }),
  streams: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

OTStreams.defaultProps = {
  session: null,
  streams: null
};

OTStreams.contextTypes = {
  session: _propTypes2.default.shape({ publish: _propTypes2.default.func, subscribe: _propTypes2.default.func }),
  streams: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

/***/ }),

/***/ "./node_modules/opentok-react/dist/OTSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/opentok-react/dist/OTSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uuid = __webpack_require__(/*! uuid */ "./node_modules/opentok-react/node_modules/uuid/index.js");

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OTSubscriber = function (_Component) {
  _inherits(OTSubscriber, _Component);

  function OTSubscriber(props, context) {
    _classCallCheck(this, OTSubscriber);

    var _this = _possibleConstructorReturn(this, (OTSubscriber.__proto__ || Object.getPrototypeOf(OTSubscriber)).call(this, props));

    _this.state = {
      subscriber: null,
      stream: props.stream || context.stream || null,
      session: props.session || context.session || null,
      currentRetryAttempt: 0
    };
    _this.maxRetryAttempts = props.maxRetryAttempts || 5;
    _this.retryAttemptTimeout = props.retryAttemptTimeout || 1000;
    return _this;
  }

  _createClass(OTSubscriber, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createSubscriber();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var cast = function cast(value, Type, defaultValue) {
        return value === undefined ? defaultValue : Type(value);
      };

      var updateSubscriberProperty = function updateSubscriberProperty(key) {
        var previous = cast(prevProps.properties[key], Boolean, true);
        var current = cast(_this2.props.properties[key], Boolean, true);
        if (previous !== current) {
          _this2.state.subscriber[key](current);
        }
      };

      updateSubscriberProperty('subscribeToAudio');
      updateSubscriberProperty('subscribeToVideo');

      if (prevState.session !== this.state.session || prevState.stream !== this.state.stream) {
        this.destroySubscriber(prevState.session);
        this.createSubscriber();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroySubscriber();
    }
  }, {
    key: 'getSubscriber',
    value: function getSubscriber() {
      return this.state.subscriber;
    }
  }, {
    key: 'createSubscriber',
    value: function createSubscriber() {
      var _this3 = this;

      if (!this.state.session || !this.state.stream) {
        this.setState({ subscriber: null });
        return;
      }
      var properties = this.props.properties || {};
      var container = void 0;
      if (properties.insertDefaultUI !== false) {
        container = document.createElement('div');
        container.setAttribute('class', 'OTSubscriberContainer');
        this.node.appendChild(container);
      }

      this.subscriberId = (0, _uuid2.default)();
      var subscriberId = this.subscriberId;


      var subscriber = this.state.session.subscribe(this.state.stream, container, this.props.properties, function (err) {
        if (subscriberId !== _this3.subscriberId) {
          // Either this subscriber has been recreated or the
          // component unmounted so don't invoke any callbacks
          return;
        }
        if (err && _this3.props.retry && _this3.state.currentRetryAttempt < _this3.maxRetryAttempts - 1) {
          // Error during subscribe function
          _this3.handleRetrySubscriber();
          // If there is a retry action, do we want to execute the onError props function?
          // return;
        }
        if (err && typeof _this3.props.onError === 'function') {
          _this3.props.onError(err);
        } else if (!err && typeof _this3.props.onSubscribe === 'function') {
          _this3.props.onSubscribe();
        }
      });

      if (this.props.eventHandlers && _typeof(this.props.eventHandlers) === 'object') {
        subscriber.on(this.props.eventHandlers);
      }

      this.setState({ subscriber: subscriber });
    }
  }, {
    key: 'handleRetrySubscriber',
    value: function handleRetrySubscriber() {
      var _this4 = this;

      setTimeout(function () {
        _this4.setState(function (state) {
          return {
            currentRetryAttempt: state.currentRetryAttempt + 1,
            subscriber: null
          };
        });
        _this4.createSubscriber();
      }, this.retryAttemptTimeout);
    }
  }, {
    key: 'destroySubscriber',
    value: function destroySubscriber() {
      var _this5 = this;

      var session = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.session;

      delete this.subscriberId;

      if (this.state.subscriber) {
        if (this.props.eventHandlers && _typeof(this.props.eventHandlers) === 'object') {
          this.state.subscriber.once('destroyed', function () {
            _this5.state.subscriber.off(_this5.props.eventHandlers);
          });
        }

        if (session) {
          session.unsubscribe(this.state.subscriber);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement('div', { className: className, style: style, ref: function ref(node) {
          _this6.node = node;
        } });
    }
  }]);

  return OTSubscriber;
}(_react.Component);

exports.default = OTSubscriber;


OTSubscriber.propTypes = {
  stream: _propTypes2.default.shape({
    streamId: _propTypes2.default.string
  }),
  session: _propTypes2.default.shape({
    subscribe: _propTypes2.default.func,
    unsubscribe: _propTypes2.default.func
  }),
  className: _propTypes2.default.string,
  style: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  properties: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  retry: _propTypes2.default.bool,
  maxRetryAttempts: _propTypes2.default.number,
  retryAttemptTimeout: _propTypes2.default.number,
  eventHandlers: _propTypes2.default.objectOf(_propTypes2.default.func),
  onSubscribe: _propTypes2.default.func,
  onError: _propTypes2.default.func
};

OTSubscriber.defaultProps = {
  stream: null,
  session: null,
  className: '',
  style: {},
  properties: {},
  retry: false,
  maxRetryAttempts: 5,
  retryAttemptTimeout: 1000,
  eventHandlers: null,
  onSubscribe: null,
  onError: null
};

OTSubscriber.contextTypes = {
  stream: _propTypes2.default.shape({
    streamId: _propTypes2.default.string
  }),
  session: _propTypes2.default.shape({
    subscribe: _propTypes2.default.func,
    unsubscribe: _propTypes2.default.func
  })
};

/***/ }),

/***/ "./node_modules/opentok-react/dist/OTSubscriberContext.js":
/*!****************************************************************!*\
  !*** ./node_modules/opentok-react/dist/OTSubscriberContext.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a wrapper class that establishes context for an OTSubscriber
// instance.  This allows stream to be passed to the
// OTSubscriber without requiring each child element to pas through props.
// There should be a 1:1 ratio between OTSubscriberContext's and OTSubscriber's.
// In general, OTSubscriberContext's are generated by the OTStreams component

var OTSubscriberContext = function (_Component) {
  _inherits(OTSubscriberContext, _Component);

  function OTSubscriberContext() {
    _classCallCheck(this, OTSubscriberContext);

    return _possibleConstructorReturn(this, (OTSubscriberContext.__proto__ || Object.getPrototypeOf(OTSubscriberContext)).apply(this, arguments));
  }

  _createClass(OTSubscriberContext, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { stream: this.props.stream };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return OTSubscriberContext;
}(_react.Component);

exports.default = OTSubscriberContext;


OTSubscriberContext.propTypes = {
  children: _propTypes2.default.element.isRequired,
  stream: _propTypes2.default.shape({
    streamId: _propTypes2.default.string
  }).isRequired
};

OTSubscriberContext.childContextTypes = {
  stream: _propTypes2.default.shape({
    streamId: _propTypes2.default.string
  })
};

/***/ }),

/***/ "./node_modules/opentok-react/dist/createSession.js":
/*!**********************************************************!*\
  !*** ./node_modules/opentok-react/dist/createSession.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSession;
function createSession() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      apiKey = _ref.apiKey,
      sessionId = _ref.sessionId,
      token = _ref.token,
      onStreamsUpdated = _ref.onStreamsUpdated,
      onConnect = _ref.onConnect,
      onError = _ref.onError,
      options = _ref.options;

  if (!apiKey) {
    throw new Error('Missing apiKey');
  }

  if (!sessionId) {
    throw new Error('Missing sessionId');
  }

  if (!token) {
    throw new Error('Missing token');
  }

  var streams = [];

  var onStreamCreated = function onStreamCreated(event) {
    var index = streams.findIndex(function (stream) {
      return stream.id === event.stream.id;
    });
    if (index < 0) {
      streams.push(event.stream);
      onStreamsUpdated(streams);
    }
  };

  var onStreamDestroyed = function onStreamDestroyed(event) {
    var index = streams.findIndex(function (stream) {
      return stream.id === event.stream.id;
    });
    if (index >= 0) {
      streams.splice(index, 1);
      onStreamsUpdated(streams);
    }
  };

  var eventHandlers = {
    streamCreated: onStreamCreated,
    streamDestroyed: onStreamDestroyed
  };

  var session = OT.initSession(apiKey, sessionId, options);
  session.on(eventHandlers);
  session.connect(token, function (err) {
    if (!session) {
      // Either this session has been disconnected or OTSession
      // has been unmounted so don't invoke any callbacks
      return;
    }
    if (err && typeof onError === 'function') {
      onError(err);
    } else if (!err && typeof onConnect === 'function') {
      onConnect();
    }
  });

  return {
    session: session,
    streams: streams,
    disconnect: function disconnect() {
      if (session) {
        session.off(eventHandlers);
        session.disconnect();
      }

      streams = null;
      onStreamCreated = null;
      onStreamDestroyed = null;
      eventHandlers = null;
      session = null;

      this.session = null;
      this.streams = null;
    }
  };
}

/***/ }),

/***/ "./node_modules/opentok-react/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/opentok-react/dist/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preloadScript = exports.createSession = exports.OTSubscriber = exports.OTStreams = exports.OTPublisher = exports.OTSession = undefined;

var _OTSession = __webpack_require__(/*! ./OTSession */ "./node_modules/opentok-react/dist/OTSession.js");

var _OTSession2 = _interopRequireDefault(_OTSession);

var _OTPublisher = __webpack_require__(/*! ./OTPublisher */ "./node_modules/opentok-react/dist/OTPublisher.js");

var _OTPublisher2 = _interopRequireDefault(_OTPublisher);

var _OTStreams = __webpack_require__(/*! ./OTStreams */ "./node_modules/opentok-react/dist/OTStreams.js");

var _OTStreams2 = _interopRequireDefault(_OTStreams);

var _OTSubscriber = __webpack_require__(/*! ./OTSubscriber */ "./node_modules/opentok-react/dist/OTSubscriber.js");

var _OTSubscriber2 = _interopRequireDefault(_OTSubscriber);

var _createSession = __webpack_require__(/*! ./createSession */ "./node_modules/opentok-react/dist/createSession.js");

var _createSession2 = _interopRequireDefault(_createSession);

var _preloadScript = __webpack_require__(/*! ./preloadScript */ "./node_modules/opentok-react/dist/preloadScript.js");

var _preloadScript2 = _interopRequireDefault(_preloadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  OTSession: _OTSession2.default,
  OTPublisher: _OTPublisher2.default,
  OTStreams: _OTStreams2.default,
  OTSubscriber: _OTSubscriber2.default,
  createSession: _createSession2.default,
  preloadScript: _preloadScript2.default
};
exports.OTSession = _OTSession2.default;
exports.OTPublisher = _OTPublisher2.default;
exports.OTStreams = _OTStreams2.default;
exports.OTSubscriber = _OTSubscriber2.default;
exports.createSession = _createSession2.default;
exports.preloadScript = _preloadScript2.default;

/***/ }),

/***/ "./node_modules/opentok-react/dist/preloadScript.js":
/*!**********************************************************!*\
  !*** ./node_modules/opentok-react/dist/preloadScript.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = preloadScript;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDisplayName = __webpack_require__(/*! react-display-name */ "./node_modules/react-display-name/lib/getDisplayName.js");

var _reactDisplayName2 = _interopRequireDefault(_reactDisplayName);

var _scriptjs = __webpack_require__(/*! scriptjs */ "./node_modules/scriptjs/dist/script.js");

var _scriptjs2 = _interopRequireDefault(_scriptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_SCRIPT_URL = 'https://static.opentok.com/v2/js/opentok.min.js';

/*
This higher-order component will load the OpenTok client thru a script tag.
It will render its inner component only when the OpenTok client has loaded.
In the meantime, it will render a loading element chosen by the developer.
*/
function preloadScript(InnerComponent) {
  var PreloadScript = function (_Component) {
    _inherits(PreloadScript, _Component);

    function PreloadScript(props) {
      _classCallCheck(this, PreloadScript);

      var _this = _possibleConstructorReturn(this, (PreloadScript.__proto__ || Object.getPrototypeOf(PreloadScript)).call(this, props));

      _this.onScriptLoad = function () {
        if (_this.isPresent) {
          _this.setState({ scriptLoaded: true });
        }
      };

      _this.state = {
        scriptLoaded: typeof OT !== 'undefined'
      };
      _this.isPresent = false;
      return _this;
    }

    _createClass(PreloadScript, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.isPresent = true;

        if (this.scriptLoading || this.state.scriptLoaded) {
          return;
        }

        this.scriptLoading = true;

        var scriptUrl = this.props.opentokClientUrl;
        (0, _scriptjs2.default)(scriptUrl, this.onScriptLoad);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.isPresent = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            opentokClientUrl = _props.opentokClientUrl,
            loadingDelegate = _props.loadingDelegate,
            restProps = _objectWithoutProperties(_props, ['opentokClientUrl', 'loadingDelegate']);

        if (this.state.scriptLoaded) {
          return _react2.default.createElement(InnerComponent, restProps);
        }

        return loadingDelegate;
      }
    }]);

    return PreloadScript;
  }(_react.Component);

  PreloadScript.displayName = 'preloadScript(' + (0, _reactDisplayName2.default)(InnerComponent) + ')';
  PreloadScript.propTypes = {
    opentokClientUrl: _propTypes2.default.string,
    loadingDelegate: _propTypes2.default.node
  };
  PreloadScript.defaultProps = {
    opentokClientUrl: DEFAULT_SCRIPT_URL,
    loadingDelegate: _react2.default.createElement('div', null)
  };

  return PreloadScript;
}


/***/ }),

/***/ "./node_modules/opentok-react/node_modules/uuid/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/opentok-react/node_modules/uuid/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/opentok-react/node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/opentok-react/node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/opentok-react/node_modules/uuid/lib/bytesToUuid.js":
/*!*************************************************************************!*\
  !*** ./node_modules/opentok-react/node_modules/uuid/lib/bytesToUuid.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/opentok-react/node_modules/uuid/lib/rng-browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/opentok-react/node_modules/uuid/lib/rng-browser.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/opentok-react/node_modules/uuid/v1.js":
/*!************************************************************!*\
  !*** ./node_modules/opentok-react/node_modules/uuid/v1.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/opentok-react/node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/opentok-react/node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/opentok-react/node_modules/uuid/v4.js":
/*!************************************************************!*\
  !*** ./node_modules/opentok-react/node_modules/uuid/v4.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/opentok-react/node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/opentok-react/node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./node_modules/react-display-name/lib/getDisplayName.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-display-name/lib/getDisplayName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDisplayName;
function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}

/***/ }),

/***/ "./node_modules/scriptjs/dist/script.js":
/*!**********************************************!*\
  !*** ./node_modules/scriptjs/dist/script.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else {}
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      fn(el)
      return 1
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1Ymxpc2hlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NjcmVlbkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NjcmVlblB1Ymxpc2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2JlZm9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2ZwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbG9kYXNoLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL29uY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29wZW50b2stcmVhY3QvZGlzdC9PVFB1Ymxpc2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb3BlbnRvay1yZWFjdC9kaXN0L09UU2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb3BlbnRvay1yZWFjdC9kaXN0L09UU3RyZWFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb3BlbnRvay1yZWFjdC9kaXN0L09UU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb3BlbnRvay1yZWFjdC9kaXN0L09UU3Vic2NyaWJlckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29wZW50b2stcmVhY3QvZGlzdC9jcmVhdGVTZXNzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vcGVudG9rLXJlYWN0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29wZW50b2stcmVhY3QvZGlzdC9wcmVsb2FkU2NyaXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vcGVudG9rLXJlYWN0L25vZGVfbW9kdWxlcy91dWlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vcGVudG9rLXJlYWN0L25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb3BlbnRvay1yZWFjdC9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29wZW50b2stcmVhY3Qvbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29wZW50b2stcmVhY3Qvbm9kZV9tb2R1bGVzL3V1aWQvdjQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRpc3BsYXktbmFtZS9saWIvZ2V0RGlzcGxheU5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjcmlwdGpzL2Rpc3Qvc2NyaXB0LmpzIl0sIm5hbWVzIjpbIlB1Ymxpc2hlciIsInByb3BzIiwiZXJyIiwic2V0U3RhdGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJFdmVudEVtaXR0ZXIiLCJwdWJsaXNoIiwic3RhdGUiLCJhdWRpbyIsInZpZGVvIiwiZGVmaW5lRXZlbnRFbWl0dGVyQ2FsbGJhY2tzIiwic3Vic2NyaWJlIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInB1Ymxpc2hWaWRlbyIsIm1hcmdpbkJvdHRvbSIsIm5hbWUiLCJzdHlsZSIsImJ1dHRvbkRpc3BsYXlNb2RlIiwibmFtZURpc3BsYXlNb2RlIiwic2Vzc2lvbiIsIm9uRXJyb3IiLCJoZWlnaHQiLCJDb21wb25lbnQiLCJTY3JlZW5Db250YWluZXIiLCJjb25zb2xlIiwibG9nIiwic3NCdXR0b24iLCJzdHJlYW1zIiwiZm9jdXNTdHJlYW0iLCJ2aWRlb0J1dHRvbiIsImV4cGFuZCIsInNlYXJjaE5hbWUiLCJzZWFyY2hTZXNzaW9uIiwic2Vzc2lvbkV2ZW50SGFuZGxlcnMiLCJzZXNzaW9uQ29ubmVjdGVkIiwic2Vzc2lvbkRpc2Nvbm5lY3RlZCIsInNlc3Npb25SZWNvbm5lY3RlZCIsInNlc3Npb25SZWNvbm5lY3RpbmciLCJwdWJsaXNoRXZlbnRIYW5kbGVycyIsImFjY2Vzc0RlbmllZCIsInN0cmVhbUNyZWF0ZWQiLCJzdHJlYW1EZXN0cm95ZWQiLCJzdWJzY3JpYmVFdmVudEhhbmRsZXJzIiwidmlkZW9FbmFibGVkIiwidmlkZW9EaXNhYmxlZCIsIm1zZyIsInNlc3Npb25JZCIsIl8iLCJmaW5kIiwidW5kZWZpbmVkIiwicGFkZGluZyIsIm1hcmdpbiIsImlkIiwic2Vzc2lvbkhlbHBlciIsImhhbmRsZVN1YnNjcmliZSIsImhhbmRsZVN1YnNjcmliZUVycm9yIiwiZm9udFNpemUiLCJkaXNwbGF5IiwidG9rZW4iLCJjcmVhdGVTZXNzaW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsIm9uU3RyZWFtc1VwZGF0ZWQiLCJkaXNjb25uZWN0Iiwib25MZWF2ZSIsIm92ZXJmbG93IiwiZ2V0U3RyZWFtVG9EaXNwbGF5IiwibWFwIiwic3RyZWFtIiwidmlkZW9TdGF0ZUJ1dHRvbiIsInNjcmVlblNoYXJlQnV0dG9uIiwiUmVhY3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyIsIlNjcmVlblB1Ymxpc2hlciIsInZpZGVvU291cmNlIiwiYXBwZWFyIiwicHVibGlzaEF1ZGlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsUzs7Ozs7QUFDbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLGtOQXNCVCxVQUFDQyxHQUFELEVBQVM7QUFDakIsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLGFBQUssK0JBQXdCRixHQUFHLENBQUNHLE9BQTVCO0FBQVAsT0FBZDs7QUFDQUMsc0VBQVksQ0FBQ0MsT0FBYixDQUFxQixrQkFBckI7QUFDRCxLQXpCa0I7O0FBR2pC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QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sS0FBNEI7QUFDbEMsV0FBVyxJQUF5QyxFQUFFLG9DQUFPLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUN4RSxPQUFPLEVBQXlCO0FBQ2hDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2RUFBNkUsc0JBQXNCO0FBQ25HOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxpQ0FBaUMsaUJBQWlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2NyZWVuUHVibGlzaGVyIGZyb20gJy4vc2NyZWVuUHVibGlzaGVyJ1xuaW1wb3J0IHsgT1RQdWJsaXNoZXIgfSBmcm9tICdvcGVudG9rLXJlYWN0J1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnLi91dGlsL0V2ZW50RW1pdHRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHVibGlzaGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIGF1ZGlvOiB0cnVlLFxuICAgICAgdmlkZW86IHRydWUsXG4gICAgfVxuICAgIHRoaXMuZGVmaW5lRXZlbnRFbWl0dGVyQ2FsbGJhY2tzKClcbiAgfVxuXG4gIGRlZmluZUV2ZW50RW1pdHRlckNhbGxiYWNrcygpIHtcbiAgICBFdmVudEVtaXR0ZXIuc3Vic2NyaWJlKCdkaXNhYmxlVmlkZW8nLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmlkZW86IGZhbHNlIH0pXG4gICAgICBFdmVudEVtaXR0ZXIucHVibGlzaCgnZGlzYWJsZVZpZGVvQnV0dG9uJylcbiAgICB9KVxuICAgIEV2ZW50RW1pdHRlci5zdWJzY3JpYmUoJ2VuYWJsZVZpZGVvJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpZGVvOiB0cnVlIH0pXG4gICAgICBFdmVudEVtaXR0ZXIucHVibGlzaCgnZW5hYmxlVmlkZW9CdXR0b24nKVxuICAgIH0pXG4gIH1cblxuICBvbkVycm9yID0gKGVycikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogYEZhaWxlZCB0byBwdWJsaXNoOiAke2Vyci5tZXNzYWdlfWAgfSlcbiAgICBFdmVudEVtaXR0ZXIucHVibGlzaCgnbGVhdmVDYWxsT25FcnJvcicpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmVycm9yID8gPGRpdj57XCJXZSBub3RpY2VkIHlvdSBkZW5pZWQgYWNjZXNzIHRvIHlvdXIgbWljcm9waG9uZSBvciBjYW1lcmEuIFBsZWFzZSBjbGljayB0aGUgY2FtZXJhL21pY3JvcGhvbmUgYmxvY2tlZCBpY29uIGluIHlvdXIgYnJvd3NlcidzIGFkZHJlc3MgYmFyLCBhbGxvdyBhY2Nlc3MsIGFuZCB0aGVuIHJlZnJlc2ggdGhlIHBhZ2UgYW5kIHJlam9pbiB0aGUgY2FsbC4gWW91IHdpbGwgYmUgYWJsZSB0byBtdXRlIHlvdXJzZWxmIG9yIGRpc2FibGUgeW91ciB2aWRlbyBvbmNlIHlvdSBqb2luIGEgY2FsbC5cIn08L2Rpdj4gOiBudWxsfVxuICAgICAgICA8T1RQdWJsaXNoZXJcbiAgICAgICAgICBwcm9wZXJ0aWVzPXt7XG4gICAgICAgICAgICB3aWR0aDogJzEzLjU3dncnLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMy41N3Z3JyxcbiAgICAgICAgICAgIG1heEhlaWdodDogJzh2aCcsXG4gICAgICAgICAgICBwdWJsaXNoVmlkZW86IHRoaXMuc3RhdGUudmlkZW8sXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc1cHgnLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgYnV0dG9uRGlzcGxheU1vZGU6ICdvbicsXG4gICAgICAgICAgICAgIG5hbWVEaXNwbGF5TW9kZTogJ29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgc2Vzc2lvbj17dGhpcy5wcm9wcy5zZXNzaW9ufVxuICAgICAgICAgIG9uRXJyb3I9e3RoaXMub25FcnJvcn1cbiAgICAgICAgLz5cbiAgICAgICAgPFNjcmVlblB1Ymxpc2hlclxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogJzEzLjYydncnLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMy42MnZ3JyxcbiAgICAgICAgICAgIGhlaWdodDogJzUwMHB4JyxcbiAgICAgICAgICAgIG1heEhlaWdodDogJzE2dmgnLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHNlc3Npb249e3RoaXMucHJvcHMuc2Vzc2lvbn1cbiAgICAgICAgICBuYW1lID0ge3RoaXMucHJvcHMubmFtZSArIFwiJ3MgU2NyZWVuXCJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgUHVibGlzaGVyIGZyb20gJy4vcHVibGlzaGVyJ1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJy4vdXRpbC9FdmVudEVtaXR0ZXInXHJcbmltcG9ydCB7IE9UU3Vic2NyaWJlciwgY3JlYXRlU2Vzc2lvbiB9IGZyb20gJ29wZW50b2stcmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuY2xhc3MgU2NyZWVuQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzc0J1dHRvbjogdHJ1ZSxcclxuICAgICAgc3RyZWFtczogW10sXHJcbiAgICAgIGZvY3VzU3RyZWFtOiB7fSxcclxuICAgICAgdmlkZW9CdXR0b246IHRydWUsXHJcbiAgICAgIGV4cGFuZDogZmFsc2UsXHJcbiAgICAgIHNlYXJjaE5hbWU6ICcnLFxyXG4gICAgICBzZWFyY2hTZXNzaW9uOiAnJyxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlZmluZUV2ZW50RW1pdHRlckNhbGxiYWNrcygpXHJcblxyXG4gICAgdGhpcy5zZXNzaW9uRXZlbnRIYW5kbGVycyA9IHtcclxuICAgICAgc2Vzc2lvbkNvbm5lY3RlZDogKCkgPT4ge30sXHJcbiAgICAgIHNlc3Npb25EaXNjb25uZWN0ZWQ6ICgpID0+IHt9LFxyXG4gICAgICBzZXNzaW9uUmVjb25uZWN0ZWQ6ICgpID0+IHt9LFxyXG4gICAgICBzZXNzaW9uUmVjb25uZWN0aW5nOiAoKSA9PiB7fSxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnB1Ymxpc2hFdmVudEhhbmRsZXJzID0ge1xyXG4gICAgICBhY2Nlc3NEZW5pZWQ6ICgpID0+IHt9LFxyXG4gICAgICBzdHJlYW1DcmVhdGVkOiAoKSA9PiB7fSxcclxuICAgICAgc3RyZWFtRGVzdHJveWVkOiAoKSA9PiB7fSxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN1YnNjcmliZUV2ZW50SGFuZGxlcnMgPSB7XHJcbiAgICAgIHZpZGVvRW5hYmxlZDogKCkgPT4ge30sXHJcbiAgICAgIHZpZGVvRGlzYWJsZWQ6ICgpID0+IHt9LFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHVibGlzaCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgcHVibGlzaGVkIScpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJzY3JpYmUgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnU3Vic2NyaWJlZCEnKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2Vzc2lvbkVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUHVibGlzaEVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3Vic2NyaWJlRXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgfVxyXG5cclxuICBkZWZpbmVFdmVudEVtaXR0ZXJDYWxsYmFja3MoKSB7XHJcbiAgICBFdmVudEVtaXR0ZXIuc3Vic2NyaWJlKCdkaXNhYmxlVmlkZW9CdXR0b24nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aWRlb0J1dHRvbjogZmFsc2UgfSlcclxuICAgIH0pXHJcblxyXG4gICAgRXZlbnRFbWl0dGVyLnN1YnNjcmliZSgnZW5hYmxlVmlkZW9CdXR0b24nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aWRlb0J1dHRvbjogdHJ1ZSB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBFdmVudEVtaXR0ZXIuc3Vic2NyaWJlKCduZXdTY3JlZW5zaGFyZXInLCAobXNnKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLnNlc3Npb25JZCA9PT0gbXNnLnNlc3Npb25JZCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvY3VzU3RyZWFtOiBfLmZpbmQodGhpcy5zdGF0ZS5zdHJlYW1zLCB7J25hbWUnOiBtc2cubmFtZSB9KSwgZXhwYW5kOiB0cnVlfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFN0cmVhbVRvRGlzcGxheSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmV4cGFuZCA9PT0gdHJ1ZSAmJiB0aGlzLnN0YXRlLmZvY3VzU3RyZWFtICE9IHVuZGVmaW5lZCA/IChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c1N0cmVhbToge30gfSlcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmQ6IGZhbHNlIH0pXHJcbiAgICAgICAgfX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgbWF4SGVpZ2h0OiAnNzV2aCcsXHJcbiAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8T1RTdWJzY3JpYmVyXHJcbiAgICAgICAgICBrZXk9e3RoaXMuc3RhdGUuZm9jdXNTdHJlYW0uaWR9XHJcbiAgICAgICAgICBzZXNzaW9uPXt0aGlzLnNlc3Npb25IZWxwZXIuc2Vzc2lvbn1cclxuICAgICAgICAgIHN0cmVhbT17dGhpcy5zdGF0ZS5mb2N1c1N0cmVhbX1cclxuICAgICAgICAgIHByb3BlcnRpZXM9e3tcclxuICAgICAgICAgICAgbWF4V2lkdGg6ICc3NXZ3JyxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OiAnNzQuNXZoJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnODR2aCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNDh2dycsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgYnV0dG9uRGlzcGxheU1vZGU6ICdvbicsXHJcbiAgICAgICAgICAgICAgbmFtZURpc3BsYXlNb2RlOiAnb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uU3Vic2NyaWJlPXt0aGlzLmhhbmRsZVN1YnNjcmliZX1cclxuICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaGFuZGxlU3Vic2NyaWJlRXJyb3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICApIDogbnVsbFxyXG4gIH1cclxuXHJcbiAgc2NyZWVuU2hhcmVCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zc0J1dHRvbiA9PT0gdHJ1ZSA/IChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIEV2ZW50RW1pdHRlci5wdWJsaXNoKCdzdGFydFNjcmVlblNoYXJlJylcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzc0J1dHRvbjogZmFsc2UgfSlcclxuICAgICAgICB9fVxyXG4gICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnLjh2dycsIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcgfX1cclxuICAgICAgICBpY29uPVwidHZcIlxyXG4gICAgICAgIGNvbnRlbnQ9XCJTaGFyZSBTY3JlZW5cIlxyXG4gICAgICAvPlxyXG4gICAgKSA6IChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIEV2ZW50RW1pdHRlci5wdWJsaXNoKCdzdG9wU2NyZWVuU2hhcmUnKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNzQnV0dG9uOiB0cnVlIH0pXHJcbiAgICAgICAgfX1cclxuICAgICAgICBpY29uPVwidHZcIlxyXG4gICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnLjh2dycsIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcgfX1cclxuICAgICAgICBjb250ZW50PVwiU3RvcCBTY3JlZW4gU2hhcmVcIlxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgdmlkZW9TdGF0ZUJ1dHRvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLnZpZGVvQnV0dG9uID09PSB0cnVlID8gKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgRXZlbnRFbWl0dGVyLnB1Ymxpc2goJ2Rpc2FibGVWaWRlbycpXHJcbiAgICAgICAgfX1cclxuICAgICAgICBpY29uPVwiaGlkZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcuOHZ3JywgZGlzcGxheTogJ2lubGluZS1mbGV4JyB9fVxyXG4gICAgICAgIGNvbnRlbnQ9XCJEaXNhYmxlIHZpZGVvXCJcclxuICAgICAgLz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBFdmVudEVtaXR0ZXIucHVibGlzaCgnZW5hYmxlVmlkZW8nKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgaWNvbj1cImV5ZVwiXHJcbiAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcuOHZ3JywgZGlzcGxheTogJ2lubGluZS1mbGV4JyB9fVxyXG4gICAgICAgIGNvbnRlbnQ9XCJFbmFibGUgdmlkZW9cIlxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBzZXNzaW9uSWQsIHRva2VuIH0gPSB0aGlzLnByb3BzXHJcbiAgICB0aGlzLnNlc3Npb25IZWxwZXIgPSBjcmVhdGVTZXNzaW9uKHtcclxuICAgICAgYXBpS2V5OiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WVl9BUElfS0VZfWAsXHJcbiAgICAgIHNlc3Npb25JZDogYCR7c2Vzc2lvbklkfWAsXHJcbiAgICAgIHRva2VuOiBgJHt0b2tlbn1gLFxyXG4gICAgICBvblN0cmVhbXNVcGRhdGVkOiAoc3RyZWFtcykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdHJlYW1zIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLnNlc3Npb25IZWxwZXIuZGlzY29ubmVjdCgpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG9uTGVhdmUgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1mbGV4Jywgd2lkdGg6ICcxMDAlJywgbWF4SGVpZ2h0OiAnODZ2aCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnNzglJywgbWF4SGVpZ2h0OiAnODV2aCcsIG92ZXJmbG93OiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgIHt0aGlzLmdldFN0cmVhbVRvRGlzcGxheSgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcyMiUnLFxyXG4gICAgICAgICAgICAgIG1heEhlaWdodDogJzg1dmgnLFxyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwMHB4JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFB1Ymxpc2hlclxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEzLjU3dncnLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMy41N3Z3JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzZXNzaW9uPXt0aGlzLnNlc3Npb25IZWxwZXIuc2Vzc2lvbn1cclxuICAgICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN0cmVhbXMubWFwKChzdHJlYW0pID0+IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzU3RyZWFtOiBzdHJlYW0gfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICcxOHZoJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8T1RTdWJzY3JpYmVyXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtzdHJlYW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbj17dGhpcy5zZXNzaW9uSGVscGVyLnNlc3Npb259XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtPXtzdHJlYW19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE4dmgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMTh2aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uRGlzcGxheU1vZGU6ICdvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVEaXNwbGF5TW9kZTogJ29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvblN1YnNjcmliZT17dGhpcy5oYW5kbGVTdWJzY3JpYmV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5oYW5kbGVTdWJzY3JpYmVFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0aGlzLnZpZGVvU3RhdGVCdXR0b24oKX1cclxuICAgICAgICB7dGhpcy5zY3JlZW5TaGFyZUJ1dHRvbigpfVxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e29uTGVhdmV9XHJcbiAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICBpY29uPVwiY2xvc2VcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcuOHZ3JywgZGlzcGxheTogJ2lubGluZS1mbGV4JyB9fVxyXG4gICAgICAgICAgY29udGVudD1cIkxlYXZlIGNhbGxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuU2NyZWVuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBzZXNzaW9uSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0b2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIG9uTGVhdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcmVlbkNvbnRhaW5lclxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBPVFB1Ymxpc2hlciB9IGZyb20gJ29wZW50b2stcmVhY3QnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJy4vdXRpbC9FdmVudEVtaXR0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlblB1Ymxpc2hlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICBhdWRpbzogdHJ1ZSxcbiAgICAgIHZpZGVvOiB0cnVlLFxuICAgICAgdmlkZW9Tb3VyY2U6ICdzY3JlZW4nLFxuICAgICAgYXBwZWFyOiBmYWxzZSxcbiAgICB9XG4gICAgdGhpcy5kZWZpbmVFdmVudEVtaXR0ZXJDYWxsYmFja3MoKVxuICB9XG5cbiAgZGVmaW5lRXZlbnRFbWl0dGVyQ2FsbGJhY2tzKCkge1xuICAgIEV2ZW50RW1pdHRlci5zdWJzY3JpYmUoJ3N0YXJ0U2NyZWVuU2hhcmUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYXBwZWFyOiB0cnVlIH0pXG4gICAgfSlcbiAgICBFdmVudEVtaXR0ZXIuc3Vic2NyaWJlKCdzdG9wU2NyZWVuU2hhcmUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYXBwZWFyOiBmYWxzZSB9KVxuICAgIH0pXG4gIH1cblxuICBvbkVycm9yID0gKGVycikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogYEZhaWxlZCB0byBwdWJsaXNoOiAke2Vyci5tZXNzYWdlfWAgfSlcbiAgICBFdmVudEVtaXR0ZXIucHVibGlzaCgnbGVhdmVDYWxsT25FcnJvcicpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuYXBwZWFyID09PSBmYWxzZSA/IG51bGwgOiAoXG4gICAgICA8PlxuICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciA/IDxkaXY+e1wiV2Ugbm90aWNlZCB5b3UgZGVuaWVkIGFjY2VzcyB0byB5b3VyIHNjcmVlbi4gUGxlYXNlIGNsaWNrIHRoZSBzY3JlZW4gYmxvY2tlZCBpY29uIGluIHlvdXIgYnJvd3NlcidzIGFkZHJlc3MgYmFyLCBhbGxvdyBhY2Nlc3MsIGFuZCB0aGVuIHJlZnJlc2ggdGhlIHBhZ2UgYW5kIHJlam9pbiB0aGUgY2FsbC5cIn08L2Rpdj4gOiBudWxsfVxuICAgICAgICA8T1RQdWJsaXNoZXJcbiAgICAgICAgICBwcm9wZXJ0aWVzPXt7XG4gICAgICAgICAgICB3aWR0aDogJzEzLjYydncnLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMy42MnZ3JyxcbiAgICAgICAgICAgIGhlaWdodDogJzIwdmgnLFxuICAgICAgICAgICAgcHVibGlzaEF1ZGlvOiB0aGlzLnN0YXRlLmF1ZGlvLFxuICAgICAgICAgICAgcHVibGlzaFZpZGVvOiB0aGlzLnN0YXRlLnZpZGVvLFxuICAgICAgICAgICAgdmlkZW9Tb3VyY2U6ICdzY3JlZW4nLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgYnV0dG9uRGlzcGxheU1vZGU6ICdvbicsXG4gICAgICAgICAgICAgIG5hbWVEaXNwbGF5TW9kZTogJ29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblB1Ymxpc2g9eygpID0+IHtcbiAgICAgICAgICAgIEV2ZW50RW1pdHRlci5wdWJsaXNoKCdzY3JlZW5TaGFyZU9uJywge1xuICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgIHNlc3Npb25JZDogdGhpcy5wcm9wcy5zZXNzaW9uLnNlc3Npb25JZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzZXNzaW9uPXt0aGlzLnByb3BzLnNlc3Npb259XG4gICAgICAgICAgb25FcnJvcj17dGhpcy5vbkVycm9yfVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi90b0ludGVnZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCwgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgYW5kIGFyZ3VtZW50c1xuICogb2YgdGhlIGNyZWF0ZWQgZnVuY3Rpb24sIHdoaWxlIGl0J3MgY2FsbGVkIGxlc3MgdGhhbiBgbmAgdGltZXMuIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBjcmVhdGVkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjYWxscyBhdCB3aGljaCBgZnVuY2AgaXMgbm8gbG9uZ2VyIGludm9rZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHJlc3RyaWN0ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmJlZm9yZSg1LCBhZGRDb250YWN0VG9MaXN0KSk7XG4gKiAvLyA9PiBBbGxvd3MgYWRkaW5nIHVwIHRvIDQgY29udGFjdHMgdG8gdGhlIGxpc3QuXG4gKi9cbmZ1bmN0aW9uIGJlZm9yZShuLCBmdW5jKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIG4gPSB0b0ludGVnZXIobik7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoLS1uID4gMCkge1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBpZiAobiA8PSAxKSB7XG4gICAgICBmdW5jID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJlZm9yZTtcbiIsInZhciBfID0gcmVxdWlyZSgnLi9sb2Rhc2gubWluJykucnVuSW5Db250ZXh0KCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZnAvX2Jhc2VDb252ZXJ0JykoXywgXyk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBMb2Rhc2ggPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBDb3B5cmlnaHQgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9vcGVuanNmLm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cbihmdW5jdGlvbigpe2Z1bmN0aW9uIG4obix0LHIpe3N3aXRjaChyLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuLmNhbGwodCk7Y2FzZSAxOnJldHVybiBuLmNhbGwodCxyWzBdKTtjYXNlIDI6cmV0dXJuIG4uY2FsbCh0LHJbMF0sclsxXSk7Y2FzZSAzOnJldHVybiBuLmNhbGwodCxyWzBdLHJbMV0sclsyXSl9cmV0dXJuIG4uYXBwbHkodCxyKX1mdW5jdGlvbiB0KG4sdCxyLGUpe2Zvcih2YXIgdT0tMSxpPW51bGw9PW4/MDpuLmxlbmd0aDsrK3U8aTspe3ZhciBvPW5bdV07dChlLG8scihvKSxuKX1yZXR1cm4gZX1mdW5jdGlvbiByKG4sdCl7Zm9yKHZhciByPS0xLGU9bnVsbD09bj8wOm4ubGVuZ3RoOysrcjxlJiZ0KG5bcl0scixuKSE9PSExOyk7cmV0dXJuIG59ZnVuY3Rpb24gZShuLHQpe2Zvcih2YXIgcj1udWxsPT1uPzA6bi5sZW5ndGg7ci0tJiZ0KG5bcl0scixuKSE9PSExOyk7cmV0dXJuIG59ZnVuY3Rpb24gdShuLHQpe2Zvcih2YXIgcj0tMSxlPW51bGw9PW4/MDpuLmxlbmd0aDsrK3I8ZTspaWYoIXQobltyXSxyLG4pKXJldHVybiExO1xucmV0dXJuITB9ZnVuY3Rpb24gaShuLHQpe2Zvcih2YXIgcj0tMSxlPW51bGw9PW4/MDpuLmxlbmd0aCx1PTAsaT1bXTsrK3I8ZTspe3ZhciBvPW5bcl07dChvLHIsbikmJihpW3UrK109byl9cmV0dXJuIGl9ZnVuY3Rpb24gbyhuLHQpe3JldHVybiEhKG51bGw9PW4/MDpuLmxlbmd0aCkmJnkobix0LDApPi0xfWZ1bmN0aW9uIGYobix0LHIpe2Zvcih2YXIgZT0tMSx1PW51bGw9PW4/MDpuLmxlbmd0aDsrK2U8dTspaWYocih0LG5bZV0pKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIGMobix0KXtmb3IodmFyIHI9LTEsZT1udWxsPT1uPzA6bi5sZW5ndGgsdT1BcnJheShlKTsrK3I8ZTspdVtyXT10KG5bcl0scixuKTtyZXR1cm4gdX1mdW5jdGlvbiBhKG4sdCl7Zm9yKHZhciByPS0xLGU9dC5sZW5ndGgsdT1uLmxlbmd0aDsrK3I8ZTspblt1K3JdPXRbcl07cmV0dXJuIG59ZnVuY3Rpb24gbChuLHQscixlKXt2YXIgdT0tMSxpPW51bGw9PW4/MDpuLmxlbmd0aDtmb3IoZSYmaSYmKHI9blsrK3VdKTsrK3U8aTspcj10KHIsblt1XSx1LG4pO1xucmV0dXJuIHJ9ZnVuY3Rpb24gcyhuLHQscixlKXt2YXIgdT1udWxsPT1uPzA6bi5sZW5ndGg7Zm9yKGUmJnUmJihyPW5bLS11XSk7dS0tOylyPXQocixuW3VdLHUsbik7cmV0dXJuIHJ9ZnVuY3Rpb24gaChuLHQpe2Zvcih2YXIgcj0tMSxlPW51bGw9PW4/MDpuLmxlbmd0aDsrK3I8ZTspaWYodChuW3JdLHIsbikpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gcChuKXtyZXR1cm4gbi5zcGxpdChcIlwiKX1mdW5jdGlvbiBfKG4pe3JldHVybiBuLm1hdGNoKEJ0KXx8W119ZnVuY3Rpb24gdihuLHQscil7dmFyIGU7cmV0dXJuIHIobixmdW5jdGlvbihuLHIsdSl7aWYodChuLHIsdSkpcmV0dXJuIGU9ciwhMX0pLGV9ZnVuY3Rpb24gZyhuLHQscixlKXtmb3IodmFyIHU9bi5sZW5ndGgsaT1yKyhlPzE6LTEpO2U/aS0tOisraTx1OylpZih0KG5baV0saSxuKSlyZXR1cm4gaTtyZXR1cm4tMX1mdW5jdGlvbiB5KG4sdCxyKXtyZXR1cm4gdD09PXQ/cShuLHQscik6ZyhuLGIscil9ZnVuY3Rpb24gZChuLHQscixlKXtcbmZvcih2YXIgdT1yLTEsaT1uLmxlbmd0aDsrK3U8aTspaWYoZShuW3VdLHQpKXJldHVybiB1O3JldHVybi0xfWZ1bmN0aW9uIGIobil7cmV0dXJuIG4hPT1ufWZ1bmN0aW9uIHcobix0KXt2YXIgcj1udWxsPT1uPzA6bi5sZW5ndGg7cmV0dXJuIHI/ayhuLHQpL3I6U259ZnVuY3Rpb24gbShuKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PXQ/WTp0W25dfX1mdW5jdGlvbiB4KG4pe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09bj9ZOm5bdF19fWZ1bmN0aW9uIGoobix0LHIsZSx1KXtyZXR1cm4gdShuLGZ1bmN0aW9uKG4sdSxpKXtyPWU/KGU9ITEsbik6dChyLG4sdSxpKX0pLHJ9ZnVuY3Rpb24gQShuLHQpe3ZhciByPW4ubGVuZ3RoO2ZvcihuLnNvcnQodCk7ci0tOyluW3JdPW5bcl0udmFsdWU7cmV0dXJuIG59ZnVuY3Rpb24gayhuLHQpe2Zvcih2YXIgcixlPS0xLHU9bi5sZW5ndGg7KytlPHU7KXt2YXIgaT10KG5bZV0pO2khPT1ZJiYocj1yPT09WT9pOnIraSk7XG59cmV0dXJuIHJ9ZnVuY3Rpb24gTyhuLHQpe2Zvcih2YXIgcj0tMSxlPUFycmF5KG4pOysrcjxuOyllW3JdPXQocik7cmV0dXJuIGV9ZnVuY3Rpb24gSShuLHQpe3JldHVybiBjKHQsZnVuY3Rpb24odCl7cmV0dXJuW3Qsblt0XV19KX1mdW5jdGlvbiBSKG4pe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gbih0KX19ZnVuY3Rpb24geihuLHQpe3JldHVybiBjKHQsZnVuY3Rpb24odCl7cmV0dXJuIG5bdF19KX1mdW5jdGlvbiBFKG4sdCl7cmV0dXJuIG4uaGFzKHQpfWZ1bmN0aW9uIFMobix0KXtmb3IodmFyIHI9LTEsZT1uLmxlbmd0aDsrK3I8ZSYmeSh0LG5bcl0sMCk+LTE7KTtyZXR1cm4gcn1mdW5jdGlvbiBXKG4sdCl7Zm9yKHZhciByPW4ubGVuZ3RoO3ItLSYmeSh0LG5bcl0sMCk+LTE7KTtyZXR1cm4gcn1mdW5jdGlvbiBMKG4sdCl7Zm9yKHZhciByPW4ubGVuZ3RoLGU9MDtyLS07KW5bcl09PT10JiYrK2U7cmV0dXJuIGV9ZnVuY3Rpb24gQyhuKXtyZXR1cm5cIlxcXFxcIitHcltuXX1mdW5jdGlvbiBVKG4sdCl7XG5yZXR1cm4gbnVsbD09bj9ZOm5bdF19ZnVuY3Rpb24gQihuKXtyZXR1cm4gRHIudGVzdChuKX1mdW5jdGlvbiBUKG4pe3JldHVybiBNci50ZXN0KG4pfWZ1bmN0aW9uICQobil7Zm9yKHZhciB0LHI9W107ISh0PW4ubmV4dCgpKS5kb25lOylyLnB1c2godC52YWx1ZSk7cmV0dXJuIHJ9ZnVuY3Rpb24gRChuKXt2YXIgdD0tMSxyPUFycmF5KG4uc2l6ZSk7cmV0dXJuIG4uZm9yRWFjaChmdW5jdGlvbihuLGUpe3JbKyt0XT1bZSxuXX0pLHJ9ZnVuY3Rpb24gTShuLHQpe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gbih0KHIpKX19ZnVuY3Rpb24gRihuLHQpe2Zvcih2YXIgcj0tMSxlPW4ubGVuZ3RoLHU9MCxpPVtdOysrcjxlOyl7dmFyIG89bltyXTtvIT09dCYmbyE9PXVufHwobltyXT11bixpW3UrK109cil9cmV0dXJuIGl9ZnVuY3Rpb24gTihuKXt2YXIgdD0tMSxyPUFycmF5KG4uc2l6ZSk7cmV0dXJuIG4uZm9yRWFjaChmdW5jdGlvbihuKXtyWysrdF09bn0pLHJ9ZnVuY3Rpb24gUChuKXtcbnZhciB0PS0xLHI9QXJyYXkobi5zaXplKTtyZXR1cm4gbi5mb3JFYWNoKGZ1bmN0aW9uKG4pe3JbKyt0XT1bbixuXX0pLHJ9ZnVuY3Rpb24gcShuLHQscil7Zm9yKHZhciBlPXItMSx1PW4ubGVuZ3RoOysrZTx1OylpZihuW2VdPT09dClyZXR1cm4gZTtyZXR1cm4tMX1mdW5jdGlvbiBaKG4sdCxyKXtmb3IodmFyIGU9cisxO2UtLTspaWYobltlXT09PXQpcmV0dXJuIGU7cmV0dXJuIGV9ZnVuY3Rpb24gSyhuKXtyZXR1cm4gQihuKT9HKG4pOnNlKG4pfWZ1bmN0aW9uIFYobil7cmV0dXJuIEIobik/SChuKTpwKG4pfWZ1bmN0aW9uIEcobil7Zm9yKHZhciB0PVRyLmxhc3RJbmRleD0wO1RyLnRlc3Qobik7KSsrdDtyZXR1cm4gdH1mdW5jdGlvbiBIKG4pe3JldHVybiBuLm1hdGNoKFRyKXx8W119ZnVuY3Rpb24gSihuKXtyZXR1cm4gbi5tYXRjaCgkcil8fFtdfXZhciBZLFE9XCI0LjE3LjE5XCIsWD0yMDAsbm49XCJVbnN1cHBvcnRlZCBjb3JlLWpzIHVzZS4gVHJ5IGh0dHBzOi8vbnBtcy5pby9zZWFyY2g/cT1wb255ZmlsbC5cIix0bj1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixybj1cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIixlbj01MDAsdW49XCJfX2xvZGFzaF9wbGFjZWhvbGRlcl9fXCIsb249MSxmbj0yLGNuPTQsYW49MSxsbj0yLHNuPTEsaG49Mixwbj00LF9uPTgsdm49MTYsZ249MzIseW49NjQsZG49MTI4LGJuPTI1Nix3bj01MTIsbW49MzAseG49XCIuLi5cIixqbj04MDAsQW49MTYsa249MSxPbj0yLEluPTMsUm49MS8wLHpuPTkwMDcxOTkyNTQ3NDA5OTEsRW49MS43OTc2OTMxMzQ4NjIzMTU3ZTMwOCxTbj1OYU4sV249NDI5NDk2NzI5NSxMbj1Xbi0xLENuPVduPj4+MSxVbj1bW1wiYXJ5XCIsZG5dLFtcImJpbmRcIixzbl0sW1wiYmluZEtleVwiLGhuXSxbXCJjdXJyeVwiLF9uXSxbXCJjdXJyeVJpZ2h0XCIsdm5dLFtcImZsaXBcIix3bl0sW1wicGFydGlhbFwiLGduXSxbXCJwYXJ0aWFsUmlnaHRcIix5bl0sW1wicmVhcmdcIixibl1dLEJuPVwiW29iamVjdCBBcmd1bWVudHNdXCIsVG49XCJbb2JqZWN0IEFycmF5XVwiLCRuPVwiW29iamVjdCBBc3luY0Z1bmN0aW9uXVwiLERuPVwiW29iamVjdCBCb29sZWFuXVwiLE1uPVwiW29iamVjdCBEYXRlXVwiLEZuPVwiW29iamVjdCBET01FeGNlcHRpb25dXCIsTm49XCJbb2JqZWN0IEVycm9yXVwiLFBuPVwiW29iamVjdCBGdW5jdGlvbl1cIixxbj1cIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCIsWm49XCJbb2JqZWN0IE1hcF1cIixLbj1cIltvYmplY3QgTnVtYmVyXVwiLFZuPVwiW29iamVjdCBOdWxsXVwiLEduPVwiW29iamVjdCBPYmplY3RdXCIsSG49XCJbb2JqZWN0IFByb21pc2VdXCIsSm49XCJbb2JqZWN0IFByb3h5XVwiLFluPVwiW29iamVjdCBSZWdFeHBdXCIsUW49XCJbb2JqZWN0IFNldF1cIixYbj1cIltvYmplY3QgU3RyaW5nXVwiLG50PVwiW29iamVjdCBTeW1ib2xdXCIsdHQ9XCJbb2JqZWN0IFVuZGVmaW5lZF1cIixydD1cIltvYmplY3QgV2Vha01hcF1cIixldD1cIltvYmplY3QgV2Vha1NldF1cIix1dD1cIltvYmplY3QgQXJyYXlCdWZmZXJdXCIsaXQ9XCJbb2JqZWN0IERhdGFWaWV3XVwiLG90PVwiW29iamVjdCBGbG9hdDMyQXJyYXldXCIsZnQ9XCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIixjdD1cIltvYmplY3QgSW50OEFycmF5XVwiLGF0PVwiW29iamVjdCBJbnQxNkFycmF5XVwiLGx0PVwiW29iamVjdCBJbnQzMkFycmF5XVwiLHN0PVwiW29iamVjdCBVaW50OEFycmF5XVwiLGh0PVwiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIixwdD1cIltvYmplY3QgVWludDE2QXJyYXldXCIsX3Q9XCJbb2JqZWN0IFVpbnQzMkFycmF5XVwiLHZ0PS9cXGJfX3AgXFwrPSAnJzsvZyxndD0vXFxiKF9fcCBcXCs9KSAnJyBcXCsvZyx5dD0vKF9fZVxcKC4qP1xcKXxcXGJfX3RcXCkpIFxcK1xcbicnOy9nLGR0PS8mKD86YW1wfGx0fGd0fHF1b3R8IzM5KTsvZyxidD0vWyY8PlwiJ10vZyx3dD1SZWdFeHAoZHQuc291cmNlKSxtdD1SZWdFeHAoYnQuc291cmNlKSx4dD0vPCUtKFtcXHNcXFNdKz8pJT4vZyxqdD0vPCUoW1xcc1xcU10rPyklPi9nLEF0PS88JT0oW1xcc1xcU10rPyklPi9nLGt0PS9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sT3Q9L15cXHcqJC8sSXQ9L1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nLFJ0PS9bXFxcXF4kLiorPygpW1xcXXt9fF0vZyx6dD1SZWdFeHAoUnQuc291cmNlKSxFdD0vXlxccyt8XFxzKyQvZyxTdD0vXlxccysvLFd0PS9cXHMrJC8sTHQ9L1xceyg/OlxcblxcL1xcKiBcXFt3cmFwcGVkIHdpdGggLitcXF0gXFwqXFwvKT9cXG4/LyxDdD0vXFx7XFxuXFwvXFwqIFxcW3dyYXBwZWQgd2l0aCAoLispXFxdIFxcKi8sVXQ9Lyw/ICYgLyxCdD0vW15cXHgwMC1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHg3Zl0rL2csVHQ9L1xcXFwoXFxcXCk/L2csJHQ9L1xcJFxceyhbXlxcXFx9XSooPzpcXFxcLlteXFxcXH1dKikqKVxcfS9nLER0PS9cXHcqJC8sTXQ9L15bLStdMHhbMC05YS1mXSskL2ksRnQ9L14wYlswMV0rJC9pLE50PS9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC8sUHQ9L14wb1swLTddKyQvaSxxdD0vXig/OjB8WzEtOV1cXGQqKSQvLFp0PS9bXFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxceGZmXFx1MDEwMC1cXHUwMTdmXS9nLEt0PS8oJF4pLyxWdD0vWydcXG5cXHJcXHUyMDI4XFx1MjAyOVxcXFxdL2csR3Q9XCJcXFxcdWQ4MDAtXFxcXHVkZmZmXCIsSHQ9XCJcXFxcdTAzMDAtXFxcXHUwMzZmXCIsSnQ9XCJcXFxcdWZlMjAtXFxcXHVmZTJmXCIsWXQ9XCJcXFxcdTIwZDAtXFxcXHUyMGZmXCIsUXQ9SHQrSnQrWXQsWHQ9XCJcXFxcdTI3MDAtXFxcXHUyN2JmXCIsbnI9XCJhLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmZcIix0cj1cIlxcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjdcIixycj1cIlxcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZlwiLGVyPVwiXFxcXHUyMDAwLVxcXFx1MjA2ZlwiLHVyPVwiIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDBcIixpcj1cIkEtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZVwiLG9yPVwiXFxcXHVmZTBlXFxcXHVmZTBmXCIsZnI9dHIrcnIrZXIrdXIsY3I9XCJbJ1xcdTIwMTldXCIsYXI9XCJbXCIrR3QrXCJdXCIsbHI9XCJbXCIrZnIrXCJdXCIsc3I9XCJbXCIrUXQrXCJdXCIsaHI9XCJcXFxcZCtcIixwcj1cIltcIitYdCtcIl1cIixfcj1cIltcIitucitcIl1cIix2cj1cIlteXCIrR3QrZnIraHIrWHQrbnIraXIrXCJdXCIsZ3I9XCJcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl1cIix5cj1cIig/OlwiK3NyK1wifFwiK2dyK1wiKVwiLGRyPVwiW15cIitHdCtcIl1cIixicj1cIig/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn1cIix3cj1cIltcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXVwiLG1yPVwiW1wiK2lyK1wiXVwiLHhyPVwiXFxcXHUyMDBkXCIsanI9XCIoPzpcIitfcitcInxcIit2citcIilcIixBcj1cIig/OlwiK21yK1wifFwiK3ZyK1wiKVwiLGtyPVwiKD86XCIrY3IrXCIoPzpkfGxsfG18cmV8c3x0fHZlKSk/XCIsT3I9XCIoPzpcIitjcitcIig/OkR8TEx8TXxSRXxTfFR8VkUpKT9cIixJcj15citcIj9cIixScj1cIltcIitvcitcIl0/XCIsenI9XCIoPzpcIit4citcIig/OlwiK1tkcixicix3cl0uam9pbihcInxcIikrXCIpXCIrUnIrSXIrXCIpKlwiLEVyPVwiXFxcXGQqKD86MXN0fDJuZHwzcmR8KD8hWzEyM10pXFxcXGR0aCkoPz1cXFxcYnxbQS1aX10pXCIsU3I9XCJcXFxcZCooPzoxU1R8Mk5EfDNSRHwoPyFbMTIzXSlcXFxcZFRIKSg/PVxcXFxifFthLXpfXSlcIixXcj1ScitJcit6cixMcj1cIig/OlwiK1twcixicix3cl0uam9pbihcInxcIikrXCIpXCIrV3IsQ3I9XCIoPzpcIitbZHIrc3IrXCI/XCIsc3IsYnIsd3IsYXJdLmpvaW4oXCJ8XCIpK1wiKVwiLFVyPVJlZ0V4cChjcixcImdcIiksQnI9UmVnRXhwKHNyLFwiZ1wiKSxUcj1SZWdFeHAoZ3IrXCIoPz1cIitncitcIil8XCIrQ3IrV3IsXCJnXCIpLCRyPVJlZ0V4cChbbXIrXCI/XCIrX3IrXCIrXCIra3IrXCIoPz1cIitbbHIsbXIsXCIkXCJdLmpvaW4oXCJ8XCIpK1wiKVwiLEFyK1wiK1wiK09yK1wiKD89XCIrW2xyLG1yK2pyLFwiJFwiXS5qb2luKFwifFwiKStcIilcIixtcitcIj9cIitqcitcIitcIitrcixtcitcIitcIitPcixTcixFcixocixMcl0uam9pbihcInxcIiksXCJnXCIpLERyPVJlZ0V4cChcIltcIit4citHdCtRdCtvcitcIl1cIiksTXI9L1thLXpdW0EtWl18W0EtWl17Mn1bYS16XXxbMC05XVthLXpBLVpdfFthLXpBLVpdWzAtOV18W15hLXpBLVowLTkgXS8sRnI9W1wiQXJyYXlcIixcIkJ1ZmZlclwiLFwiRGF0YVZpZXdcIixcIkRhdGVcIixcIkVycm9yXCIsXCJGbG9hdDMyQXJyYXlcIixcIkZsb2F0NjRBcnJheVwiLFwiRnVuY3Rpb25cIixcIkludDhBcnJheVwiLFwiSW50MTZBcnJheVwiLFwiSW50MzJBcnJheVwiLFwiTWFwXCIsXCJNYXRoXCIsXCJPYmplY3RcIixcIlByb21pc2VcIixcIlJlZ0V4cFwiLFwiU2V0XCIsXCJTdHJpbmdcIixcIlN5bWJvbFwiLFwiVHlwZUVycm9yXCIsXCJVaW50OEFycmF5XCIsXCJVaW50OENsYW1wZWRBcnJheVwiLFwiVWludDE2QXJyYXlcIixcIlVpbnQzMkFycmF5XCIsXCJXZWFrTWFwXCIsXCJfXCIsXCJjbGVhclRpbWVvdXRcIixcImlzRmluaXRlXCIsXCJwYXJzZUludFwiLFwic2V0VGltZW91dFwiXSxOcj0tMSxQcj17fTtcblByW290XT1QcltmdF09UHJbY3RdPVByW2F0XT1QcltsdF09UHJbc3RdPVByW2h0XT1QcltwdF09UHJbX3RdPSEwLFByW0JuXT1QcltUbl09UHJbdXRdPVByW0RuXT1QcltpdF09UHJbTW5dPVByW05uXT1QcltQbl09UHJbWm5dPVByW0tuXT1QcltHbl09UHJbWW5dPVByW1FuXT1QcltYbl09UHJbcnRdPSExO3ZhciBxcj17fTtxcltCbl09cXJbVG5dPXFyW3V0XT1xcltpdF09cXJbRG5dPXFyW01uXT1xcltvdF09cXJbZnRdPXFyW2N0XT1xclthdF09cXJbbHRdPXFyW1puXT1xcltLbl09cXJbR25dPXFyW1luXT1xcltRbl09cXJbWG5dPXFyW250XT1xcltzdF09cXJbaHRdPXFyW3B0XT1xcltfdF09ITAscXJbTm5dPXFyW1BuXT1xcltydF09ITE7dmFyIFpyPXtcIlxceGMwXCI6XCJBXCIsXCJcXHhjMVwiOlwiQVwiLFwiXFx4YzJcIjpcIkFcIixcIlxceGMzXCI6XCJBXCIsXCJcXHhjNFwiOlwiQVwiLFwiXFx4YzVcIjpcIkFcIixcIlxceGUwXCI6XCJhXCIsXCJcXHhlMVwiOlwiYVwiLFwiXFx4ZTJcIjpcImFcIixcIlxceGUzXCI6XCJhXCIsXCJcXHhlNFwiOlwiYVwiLFwiXFx4ZTVcIjpcImFcIixcblwiXFx4YzdcIjpcIkNcIixcIlxceGU3XCI6XCJjXCIsXCJcXHhkMFwiOlwiRFwiLFwiXFx4ZjBcIjpcImRcIixcIlxceGM4XCI6XCJFXCIsXCJcXHhjOVwiOlwiRVwiLFwiXFx4Y2FcIjpcIkVcIixcIlxceGNiXCI6XCJFXCIsXCJcXHhlOFwiOlwiZVwiLFwiXFx4ZTlcIjpcImVcIixcIlxceGVhXCI6XCJlXCIsXCJcXHhlYlwiOlwiZVwiLFwiXFx4Y2NcIjpcIklcIixcIlxceGNkXCI6XCJJXCIsXCJcXHhjZVwiOlwiSVwiLFwiXFx4Y2ZcIjpcIklcIixcIlxceGVjXCI6XCJpXCIsXCJcXHhlZFwiOlwiaVwiLFwiXFx4ZWVcIjpcImlcIixcIlxceGVmXCI6XCJpXCIsXCJcXHhkMVwiOlwiTlwiLFwiXFx4ZjFcIjpcIm5cIixcIlxceGQyXCI6XCJPXCIsXCJcXHhkM1wiOlwiT1wiLFwiXFx4ZDRcIjpcIk9cIixcIlxceGQ1XCI6XCJPXCIsXCJcXHhkNlwiOlwiT1wiLFwiXFx4ZDhcIjpcIk9cIixcIlxceGYyXCI6XCJvXCIsXCJcXHhmM1wiOlwib1wiLFwiXFx4ZjRcIjpcIm9cIixcIlxceGY1XCI6XCJvXCIsXCJcXHhmNlwiOlwib1wiLFwiXFx4ZjhcIjpcIm9cIixcIlxceGQ5XCI6XCJVXCIsXCJcXHhkYVwiOlwiVVwiLFwiXFx4ZGJcIjpcIlVcIixcIlxceGRjXCI6XCJVXCIsXCJcXHhmOVwiOlwidVwiLFwiXFx4ZmFcIjpcInVcIixcIlxceGZiXCI6XCJ1XCIsXCJcXHhmY1wiOlwidVwiLFwiXFx4ZGRcIjpcIllcIixcIlxceGZkXCI6XCJ5XCIsXCJcXHhmZlwiOlwieVwiLFwiXFx4YzZcIjpcIkFlXCIsXG5cIlxceGU2XCI6XCJhZVwiLFwiXFx4ZGVcIjpcIlRoXCIsXCJcXHhmZVwiOlwidGhcIixcIlxceGRmXCI6XCJzc1wiLFwiXFx1MDEwMFwiOlwiQVwiLFwiXFx1MDEwMlwiOlwiQVwiLFwiXFx1MDEwNFwiOlwiQVwiLFwiXFx1MDEwMVwiOlwiYVwiLFwiXFx1MDEwM1wiOlwiYVwiLFwiXFx1MDEwNVwiOlwiYVwiLFwiXFx1MDEwNlwiOlwiQ1wiLFwiXFx1MDEwOFwiOlwiQ1wiLFwiXFx1MDEwYVwiOlwiQ1wiLFwiXFx1MDEwY1wiOlwiQ1wiLFwiXFx1MDEwN1wiOlwiY1wiLFwiXFx1MDEwOVwiOlwiY1wiLFwiXFx1MDEwYlwiOlwiY1wiLFwiXFx1MDEwZFwiOlwiY1wiLFwiXFx1MDEwZVwiOlwiRFwiLFwiXFx1MDExMFwiOlwiRFwiLFwiXFx1MDEwZlwiOlwiZFwiLFwiXFx1MDExMVwiOlwiZFwiLFwiXFx1MDExMlwiOlwiRVwiLFwiXFx1MDExNFwiOlwiRVwiLFwiXFx1MDExNlwiOlwiRVwiLFwiXFx1MDExOFwiOlwiRVwiLFwiXFx1MDExYVwiOlwiRVwiLFwiXFx1MDExM1wiOlwiZVwiLFwiXFx1MDExNVwiOlwiZVwiLFwiXFx1MDExN1wiOlwiZVwiLFwiXFx1MDExOVwiOlwiZVwiLFwiXFx1MDExYlwiOlwiZVwiLFwiXFx1MDExY1wiOlwiR1wiLFwiXFx1MDExZVwiOlwiR1wiLFwiXFx1MDEyMFwiOlwiR1wiLFwiXFx1MDEyMlwiOlwiR1wiLFwiXFx1MDExZFwiOlwiZ1wiLFwiXFx1MDExZlwiOlwiZ1wiLFwiXFx1MDEyMVwiOlwiZ1wiLFxuXCJcXHUwMTIzXCI6XCJnXCIsXCJcXHUwMTI0XCI6XCJIXCIsXCJcXHUwMTI2XCI6XCJIXCIsXCJcXHUwMTI1XCI6XCJoXCIsXCJcXHUwMTI3XCI6XCJoXCIsXCJcXHUwMTI4XCI6XCJJXCIsXCJcXHUwMTJhXCI6XCJJXCIsXCJcXHUwMTJjXCI6XCJJXCIsXCJcXHUwMTJlXCI6XCJJXCIsXCJcXHUwMTMwXCI6XCJJXCIsXCJcXHUwMTI5XCI6XCJpXCIsXCJcXHUwMTJiXCI6XCJpXCIsXCJcXHUwMTJkXCI6XCJpXCIsXCJcXHUwMTJmXCI6XCJpXCIsXCJcXHUwMTMxXCI6XCJpXCIsXCJcXHUwMTM0XCI6XCJKXCIsXCJcXHUwMTM1XCI6XCJqXCIsXCJcXHUwMTM2XCI6XCJLXCIsXCJcXHUwMTM3XCI6XCJrXCIsXCJcXHUwMTM4XCI6XCJrXCIsXCJcXHUwMTM5XCI6XCJMXCIsXCJcXHUwMTNiXCI6XCJMXCIsXCJcXHUwMTNkXCI6XCJMXCIsXCJcXHUwMTNmXCI6XCJMXCIsXCJcXHUwMTQxXCI6XCJMXCIsXCJcXHUwMTNhXCI6XCJsXCIsXCJcXHUwMTNjXCI6XCJsXCIsXCJcXHUwMTNlXCI6XCJsXCIsXCJcXHUwMTQwXCI6XCJsXCIsXCJcXHUwMTQyXCI6XCJsXCIsXCJcXHUwMTQzXCI6XCJOXCIsXCJcXHUwMTQ1XCI6XCJOXCIsXCJcXHUwMTQ3XCI6XCJOXCIsXCJcXHUwMTRhXCI6XCJOXCIsXCJcXHUwMTQ0XCI6XCJuXCIsXCJcXHUwMTQ2XCI6XCJuXCIsXCJcXHUwMTQ4XCI6XCJuXCIsXCJcXHUwMTRiXCI6XCJuXCIsXCJcXHUwMTRjXCI6XCJPXCIsXG5cIlxcdTAxNGVcIjpcIk9cIixcIlxcdTAxNTBcIjpcIk9cIixcIlxcdTAxNGRcIjpcIm9cIixcIlxcdTAxNGZcIjpcIm9cIixcIlxcdTAxNTFcIjpcIm9cIixcIlxcdTAxNTRcIjpcIlJcIixcIlxcdTAxNTZcIjpcIlJcIixcIlxcdTAxNThcIjpcIlJcIixcIlxcdTAxNTVcIjpcInJcIixcIlxcdTAxNTdcIjpcInJcIixcIlxcdTAxNTlcIjpcInJcIixcIlxcdTAxNWFcIjpcIlNcIixcIlxcdTAxNWNcIjpcIlNcIixcIlxcdTAxNWVcIjpcIlNcIixcIlxcdTAxNjBcIjpcIlNcIixcIlxcdTAxNWJcIjpcInNcIixcIlxcdTAxNWRcIjpcInNcIixcIlxcdTAxNWZcIjpcInNcIixcIlxcdTAxNjFcIjpcInNcIixcIlxcdTAxNjJcIjpcIlRcIixcIlxcdTAxNjRcIjpcIlRcIixcIlxcdTAxNjZcIjpcIlRcIixcIlxcdTAxNjNcIjpcInRcIixcIlxcdTAxNjVcIjpcInRcIixcIlxcdTAxNjdcIjpcInRcIixcIlxcdTAxNjhcIjpcIlVcIixcIlxcdTAxNmFcIjpcIlVcIixcIlxcdTAxNmNcIjpcIlVcIixcIlxcdTAxNmVcIjpcIlVcIixcIlxcdTAxNzBcIjpcIlVcIixcIlxcdTAxNzJcIjpcIlVcIixcIlxcdTAxNjlcIjpcInVcIixcIlxcdTAxNmJcIjpcInVcIixcIlxcdTAxNmRcIjpcInVcIixcIlxcdTAxNmZcIjpcInVcIixcIlxcdTAxNzFcIjpcInVcIixcIlxcdTAxNzNcIjpcInVcIixcIlxcdTAxNzRcIjpcIldcIixcIlxcdTAxNzVcIjpcIndcIixcblwiXFx1MDE3NlwiOlwiWVwiLFwiXFx1MDE3N1wiOlwieVwiLFwiXFx1MDE3OFwiOlwiWVwiLFwiXFx1MDE3OVwiOlwiWlwiLFwiXFx1MDE3YlwiOlwiWlwiLFwiXFx1MDE3ZFwiOlwiWlwiLFwiXFx1MDE3YVwiOlwielwiLFwiXFx1MDE3Y1wiOlwielwiLFwiXFx1MDE3ZVwiOlwielwiLFwiXFx1MDEzMlwiOlwiSUpcIixcIlxcdTAxMzNcIjpcImlqXCIsXCJcXHUwMTUyXCI6XCJPZVwiLFwiXFx1MDE1M1wiOlwib2VcIixcIlxcdTAxNDlcIjpcIiduXCIsXCJcXHUwMTdmXCI6XCJzXCJ9LEtyPXtcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJiMzOTtcIn0sVnI9e1wiJmFtcDtcIjpcIiZcIixcIiZsdDtcIjpcIjxcIixcIiZndDtcIjpcIj5cIixcIiZxdW90O1wiOidcIicsXCImIzM5O1wiOlwiJ1wifSxHcj17XCJcXFxcXCI6XCJcXFxcXCIsXCInXCI6XCInXCIsXCJcXG5cIjpcIm5cIixcIlxcclwiOlwiclwiLFwiXFx1MjAyOFwiOlwidTIwMjhcIixcIlxcdTIwMjlcIjpcInUyMDI5XCJ9LEhyPXBhcnNlRmxvYXQsSnI9cGFyc2VJbnQsWXI9XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsJiZnbG9iYWwuT2JqZWN0PT09T2JqZWN0JiZnbG9iYWwsUXI9XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLFhyPVlyfHxRcnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLG5lPVwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZleHBvcnRzJiYhZXhwb3J0cy5ub2RlVHlwZSYmZXhwb3J0cyx0ZT1uZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlJiYhbW9kdWxlLm5vZGVUeXBlJiZtb2R1bGUscmU9dGUmJnRlLmV4cG9ydHM9PT1uZSxlZT1yZSYmWXIucHJvY2Vzcyx1ZT1mdW5jdGlvbigpe1xudHJ5e3ZhciBuPXRlJiZ0ZS5yZXF1aXJlJiZ0ZS5yZXF1aXJlKFwidXRpbFwiKS50eXBlcztyZXR1cm4gbj9uOmVlJiZlZS5iaW5kaW5nJiZlZS5iaW5kaW5nKFwidXRpbFwiKX1jYXRjaChuKXt9fSgpLGllPXVlJiZ1ZS5pc0FycmF5QnVmZmVyLG9lPXVlJiZ1ZS5pc0RhdGUsZmU9dWUmJnVlLmlzTWFwLGNlPXVlJiZ1ZS5pc1JlZ0V4cCxhZT11ZSYmdWUuaXNTZXQsbGU9dWUmJnVlLmlzVHlwZWRBcnJheSxzZT1tKFwibGVuZ3RoXCIpLGhlPXgoWnIpLHBlPXgoS3IpLF9lPXgoVnIpLHZlPWZ1bmN0aW9uIHAoeCl7ZnVuY3Rpb24gcShuKXtpZihvYyhuKSYmIXloKG4pJiYhKG4gaW5zdGFuY2VvZiBCdCkpe2lmKG4gaW5zdGFuY2VvZiBIKXJldHVybiBuO2lmKHlsLmNhbGwobixcIl9fd3JhcHBlZF9fXCIpKXJldHVybiB0byhuKX1yZXR1cm4gbmV3IEgobil9ZnVuY3Rpb24gRygpe31mdW5jdGlvbiBIKG4sdCl7dGhpcy5fX3dyYXBwZWRfXz1uLHRoaXMuX19hY3Rpb25zX189W10sdGhpcy5fX2NoYWluX189ISF0LFxudGhpcy5fX2luZGV4X189MCx0aGlzLl9fdmFsdWVzX189WX1mdW5jdGlvbiBCdChuKXt0aGlzLl9fd3JhcHBlZF9fPW4sdGhpcy5fX2FjdGlvbnNfXz1bXSx0aGlzLl9fZGlyX189MSx0aGlzLl9fZmlsdGVyZWRfXz0hMSx0aGlzLl9faXRlcmF0ZWVzX189W10sdGhpcy5fX3Rha2VDb3VudF9fPVduLHRoaXMuX192aWV3c19fPVtdfWZ1bmN0aW9uIEd0KCl7dmFyIG49bmV3IEJ0KHRoaXMuX193cmFwcGVkX18pO3JldHVybiBuLl9fYWN0aW9uc19fPVV1KHRoaXMuX19hY3Rpb25zX18pLG4uX19kaXJfXz10aGlzLl9fZGlyX18sbi5fX2ZpbHRlcmVkX189dGhpcy5fX2ZpbHRlcmVkX18sbi5fX2l0ZXJhdGVlc19fPVV1KHRoaXMuX19pdGVyYXRlZXNfXyksbi5fX3Rha2VDb3VudF9fPXRoaXMuX190YWtlQ291bnRfXyxuLl9fdmlld3NfXz1VdSh0aGlzLl9fdmlld3NfXyksbn1mdW5jdGlvbiBIdCgpe2lmKHRoaXMuX19maWx0ZXJlZF9fKXt2YXIgbj1uZXcgQnQodGhpcyk7bi5fX2Rpcl9fPS0xLFxubi5fX2ZpbHRlcmVkX189ITB9ZWxzZSBuPXRoaXMuY2xvbmUoKSxuLl9fZGlyX18qPS0xO3JldHVybiBufWZ1bmN0aW9uIEp0KCl7dmFyIG49dGhpcy5fX3dyYXBwZWRfXy52YWx1ZSgpLHQ9dGhpcy5fX2Rpcl9fLHI9eWgobiksZT10PDAsdT1yP24ubGVuZ3RoOjAsaT1BaSgwLHUsdGhpcy5fX3ZpZXdzX18pLG89aS5zdGFydCxmPWkuZW5kLGM9Zi1vLGE9ZT9mOm8tMSxsPXRoaXMuX19pdGVyYXRlZXNfXyxzPWwubGVuZ3RoLGg9MCxwPVZsKGMsdGhpcy5fX3Rha2VDb3VudF9fKTtpZighcnx8IWUmJnU9PWMmJnA9PWMpcmV0dXJuIGR1KG4sdGhpcy5fX2FjdGlvbnNfXyk7dmFyIF89W107bjpmb3IoO2MtLSYmaDxwOyl7YSs9dDtmb3IodmFyIHY9LTEsZz1uW2FdOysrdjxzOyl7dmFyIHk9bFt2XSxkPXkuaXRlcmF0ZWUsYj15LnR5cGUsdz1kKGcpO2lmKGI9PU9uKWc9dztlbHNlIGlmKCF3KXtpZihiPT1rbiljb250aW51ZSBuO2JyZWFrIG59fV9baCsrXT1nfXJldHVybiBffWZ1bmN0aW9uIFl0KG4pe1xudmFyIHQ9LTEscj1udWxsPT1uPzA6bi5sZW5ndGg7Zm9yKHRoaXMuY2xlYXIoKTsrK3Q8cjspe3ZhciBlPW5bdF07dGhpcy5zZXQoZVswXSxlWzFdKX19ZnVuY3Rpb24gUXQoKXt0aGlzLl9fZGF0YV9fPWVzP2VzKG51bGwpOnt9LHRoaXMuc2l6ZT0wfWZ1bmN0aW9uIFh0KG4pe3ZhciB0PXRoaXMuaGFzKG4pJiZkZWxldGUgdGhpcy5fX2RhdGFfX1tuXTtyZXR1cm4gdGhpcy5zaXplLT10PzE6MCx0fWZ1bmN0aW9uIG5yKG4pe3ZhciB0PXRoaXMuX19kYXRhX187aWYoZXMpe3ZhciByPXRbbl07cmV0dXJuIHI9PT1ybj9ZOnJ9cmV0dXJuIHlsLmNhbGwodCxuKT90W25dOll9ZnVuY3Rpb24gdHIobil7dmFyIHQ9dGhpcy5fX2RhdGFfXztyZXR1cm4gZXM/dFtuXSE9PVk6eWwuY2FsbCh0LG4pfWZ1bmN0aW9uIHJyKG4sdCl7dmFyIHI9dGhpcy5fX2RhdGFfXztyZXR1cm4gdGhpcy5zaXplKz10aGlzLmhhcyhuKT8wOjEscltuXT1lcyYmdD09PVk/cm46dCx0aGlzfWZ1bmN0aW9uIGVyKG4pe1xudmFyIHQ9LTEscj1udWxsPT1uPzA6bi5sZW5ndGg7Zm9yKHRoaXMuY2xlYXIoKTsrK3Q8cjspe3ZhciBlPW5bdF07dGhpcy5zZXQoZVswXSxlWzFdKX19ZnVuY3Rpb24gdXIoKXt0aGlzLl9fZGF0YV9fPVtdLHRoaXMuc2l6ZT0wfWZ1bmN0aW9uIGlyKG4pe3ZhciB0PXRoaXMuX19kYXRhX18scj1Fcih0LG4pO3JldHVybiEocjwwKSYmKHI9PXQubGVuZ3RoLTE/dC5wb3AoKTpTbC5jYWxsKHQsciwxKSwtLXRoaXMuc2l6ZSwhMCl9ZnVuY3Rpb24gb3Iobil7dmFyIHQ9dGhpcy5fX2RhdGFfXyxyPUVyKHQsbik7cmV0dXJuIHI8MD9ZOnRbcl1bMV19ZnVuY3Rpb24gZnIobil7cmV0dXJuIEVyKHRoaXMuX19kYXRhX18sbik+LTF9ZnVuY3Rpb24gY3Iobix0KXt2YXIgcj10aGlzLl9fZGF0YV9fLGU9RXIocixuKTtyZXR1cm4gZTwwPygrK3RoaXMuc2l6ZSxyLnB1c2goW24sdF0pKTpyW2VdWzFdPXQsdGhpc31mdW5jdGlvbiBhcihuKXt2YXIgdD0tMSxyPW51bGw9PW4/MDpuLmxlbmd0aDtmb3IodGhpcy5jbGVhcigpOysrdDxyOyl7XG52YXIgZT1uW3RdO3RoaXMuc2V0KGVbMF0sZVsxXSl9fWZ1bmN0aW9uIGxyKCl7dGhpcy5zaXplPTAsdGhpcy5fX2RhdGFfXz17aGFzaDpuZXcgWXQsbWFwOm5ldyhYbHx8ZXIpLHN0cmluZzpuZXcgWXR9fWZ1bmN0aW9uIHNyKG4pe3ZhciB0PXdpKHRoaXMsbikuZGVsZXRlKG4pO3JldHVybiB0aGlzLnNpemUtPXQ/MTowLHR9ZnVuY3Rpb24gaHIobil7cmV0dXJuIHdpKHRoaXMsbikuZ2V0KG4pfWZ1bmN0aW9uIHByKG4pe3JldHVybiB3aSh0aGlzLG4pLmhhcyhuKX1mdW5jdGlvbiBfcihuLHQpe3ZhciByPXdpKHRoaXMsbiksZT1yLnNpemU7cmV0dXJuIHIuc2V0KG4sdCksdGhpcy5zaXplKz1yLnNpemU9PWU/MDoxLHRoaXN9ZnVuY3Rpb24gdnIobil7dmFyIHQ9LTEscj1udWxsPT1uPzA6bi5sZW5ndGg7Zm9yKHRoaXMuX19kYXRhX189bmV3IGFyOysrdDxyOyl0aGlzLmFkZChuW3RdKX1mdW5jdGlvbiBncihuKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5zZXQobixybiksdGhpc31mdW5jdGlvbiB5cihuKXtcbnJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhuKX1mdW5jdGlvbiBkcihuKXt0aGlzLnNpemU9KHRoaXMuX19kYXRhX189bmV3IGVyKG4pKS5zaXplfWZ1bmN0aW9uIGJyKCl7dGhpcy5fX2RhdGFfXz1uZXcgZXIsdGhpcy5zaXplPTB9ZnVuY3Rpb24gd3Iobil7dmFyIHQ9dGhpcy5fX2RhdGFfXyxyPXQuZGVsZXRlKG4pO3JldHVybiB0aGlzLnNpemU9dC5zaXplLHJ9ZnVuY3Rpb24gbXIobil7cmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KG4pfWZ1bmN0aW9uIHhyKG4pe3JldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhuKX1mdW5jdGlvbiBqcihuLHQpe3ZhciByPXRoaXMuX19kYXRhX187aWYociBpbnN0YW5jZW9mIGVyKXt2YXIgZT1yLl9fZGF0YV9fO2lmKCFYbHx8ZS5sZW5ndGg8WC0xKXJldHVybiBlLnB1c2goW24sdF0pLHRoaXMuc2l6ZT0rK3Iuc2l6ZSx0aGlzO3I9dGhpcy5fX2RhdGFfXz1uZXcgYXIoZSl9cmV0dXJuIHIuc2V0KG4sdCksdGhpcy5zaXplPXIuc2l6ZSx0aGlzfWZ1bmN0aW9uIEFyKG4sdCl7XG52YXIgcj15aChuKSxlPSFyJiZnaChuKSx1PSFyJiYhZSYmYmgobiksaT0hciYmIWUmJiF1JiZBaChuKSxvPXJ8fGV8fHV8fGksZj1vP08obi5sZW5ndGgsbGwpOltdLGM9Zi5sZW5ndGg7Zm9yKHZhciBhIGluIG4pIXQmJiF5bC5jYWxsKG4sYSl8fG8mJihcImxlbmd0aFwiPT1hfHx1JiYoXCJvZmZzZXRcIj09YXx8XCJwYXJlbnRcIj09YSl8fGkmJihcImJ1ZmZlclwiPT1hfHxcImJ5dGVMZW5ndGhcIj09YXx8XCJieXRlT2Zmc2V0XCI9PWEpfHxXaShhLGMpKXx8Zi5wdXNoKGEpO3JldHVybiBmfWZ1bmN0aW9uIGtyKG4pe3ZhciB0PW4ubGVuZ3RoO3JldHVybiB0P25bWGUoMCx0LTEpXTpZfWZ1bmN0aW9uIE9yKG4sdCl7cmV0dXJuIFlpKFV1KG4pLCRyKHQsMCxuLmxlbmd0aCkpfWZ1bmN0aW9uIElyKG4pe3JldHVybiBZaShVdShuKSl9ZnVuY3Rpb24gUnIobix0LHIpeyhyPT09WXx8S2Yoblt0XSxyKSkmJihyIT09WXx8dCBpbiBuKXx8Q3Iobix0LHIpfWZ1bmN0aW9uIHpyKG4sdCxyKXt2YXIgZT1uW3RdO1xueWwuY2FsbChuLHQpJiZLZihlLHIpJiYociE9PVl8fHQgaW4gbil8fENyKG4sdCxyKX1mdW5jdGlvbiBFcihuLHQpe2Zvcih2YXIgcj1uLmxlbmd0aDtyLS07KWlmKEtmKG5bcl1bMF0sdCkpcmV0dXJuIHI7cmV0dXJuLTF9ZnVuY3Rpb24gU3Iobix0LHIsZSl7cmV0dXJuIHZzKG4sZnVuY3Rpb24obix1LGkpe3QoZSxuLHIobiksaSl9KSxlfWZ1bmN0aW9uIFdyKG4sdCl7cmV0dXJuIG4mJkJ1KHQsRmModCksbil9ZnVuY3Rpb24gTHIobix0KXtyZXR1cm4gbiYmQnUodCxOYyh0KSxuKX1mdW5jdGlvbiBDcihuLHQscil7XCJfX3Byb3RvX19cIj09dCYmVWw/VWwobix0LHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZTpyLHdyaXRhYmxlOiEwfSk6blt0XT1yfWZ1bmN0aW9uIFRyKG4sdCl7Zm9yKHZhciByPS0xLGU9dC5sZW5ndGgsdT1lbChlKSxpPW51bGw9PW47KytyPGU7KXVbcl09aT9ZOiRjKG4sdFtyXSk7cmV0dXJuIHV9ZnVuY3Rpb24gJHIobix0LHIpe3JldHVybiBuPT09biYmKHIhPT1ZJiYobj1uPD1yP246ciksXG50IT09WSYmKG49bj49dD9uOnQpKSxufWZ1bmN0aW9uIERyKG4sdCxlLHUsaSxvKXt2YXIgZixjPXQmb24sYT10JmZuLGw9dCZjbjtpZihlJiYoZj1pP2Uobix1LGksbyk6ZShuKSksZiE9PVkpcmV0dXJuIGY7aWYoIWljKG4pKXJldHVybiBuO3ZhciBzPXloKG4pO2lmKHMpe2lmKGY9SWkobiksIWMpcmV0dXJuIFV1KG4sZil9ZWxzZXt2YXIgaD1JcyhuKSxwPWg9PVBufHxoPT1xbjtpZihiaChuKSlyZXR1cm4ga3UobixjKTtpZihoPT1Hbnx8aD09Qm58fHAmJiFpKXtpZihmPWF8fHA/e306UmkobiksIWMpcmV0dXJuIGE/JHUobixMcihmLG4pKTpUdShuLFdyKGYsbikpfWVsc2V7aWYoIXFyW2hdKXJldHVybiBpP246e307Zj16aShuLGgsYyl9fW98fChvPW5ldyBkcik7dmFyIF89by5nZXQobik7aWYoXylyZXR1cm4gXztvLnNldChuLGYpLGpoKG4pP24uZm9yRWFjaChmdW5jdGlvbihyKXtmLmFkZChEcihyLHQsZSxyLG4sbykpfSk6bWgobikmJm4uZm9yRWFjaChmdW5jdGlvbihyLHUpe1xuZi5zZXQodSxEcihyLHQsZSx1LG4sbykpfSk7dmFyIHY9bD9hP2dpOnZpOmE/TmM6RmMsZz1zP1k6dihuKTtyZXR1cm4gcihnfHxuLGZ1bmN0aW9uKHIsdSl7ZyYmKHU9cixyPW5bdV0pLHpyKGYsdSxEcihyLHQsZSx1LG4sbykpfSksZn1mdW5jdGlvbiBNcihuKXt2YXIgdD1GYyhuKTtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIFpyKHIsbix0KX19ZnVuY3Rpb24gWnIobix0LHIpe3ZhciBlPXIubGVuZ3RoO2lmKG51bGw9PW4pcmV0dXJuIWU7Zm9yKG49Y2wobik7ZS0tOyl7dmFyIHU9cltlXSxpPXRbdV0sbz1uW3VdO2lmKG89PT1ZJiYhKHUgaW4gbil8fCFpKG8pKXJldHVybiExfXJldHVybiEwfWZ1bmN0aW9uIEtyKG4sdCxyKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBuKXRocm93IG5ldyBzbCh0bik7cmV0dXJuIEVzKGZ1bmN0aW9uKCl7bi5hcHBseShZLHIpfSx0KX1mdW5jdGlvbiBWcihuLHQscixlKXt2YXIgdT0tMSxpPW8sYT0hMCxsPW4ubGVuZ3RoLHM9W10saD10Lmxlbmd0aDtcbmlmKCFsKXJldHVybiBzO3ImJih0PWModCxSKHIpKSksZT8oaT1mLGE9ITEpOnQubGVuZ3RoPj1YJiYoaT1FLGE9ITEsdD1uZXcgdnIodCkpO246Zm9yKDsrK3U8bDspe3ZhciBwPW5bdV0sXz1udWxsPT1yP3A6cihwKTtpZihwPWV8fDAhPT1wP3A6MCxhJiZfPT09Xyl7Zm9yKHZhciB2PWg7di0tOylpZih0W3ZdPT09Xyljb250aW51ZSBuO3MucHVzaChwKX1lbHNlIGkodCxfLGUpfHxzLnB1c2gocCl9cmV0dXJuIHN9ZnVuY3Rpb24gR3Iobix0KXt2YXIgcj0hMDtyZXR1cm4gdnMobixmdW5jdGlvbihuLGUsdSl7cmV0dXJuIHI9ISF0KG4sZSx1KX0pLHJ9ZnVuY3Rpb24gWXIobix0LHIpe2Zvcih2YXIgZT0tMSx1PW4ubGVuZ3RoOysrZTx1Oyl7dmFyIGk9bltlXSxvPXQoaSk7aWYobnVsbCE9byYmKGY9PT1ZP289PT1vJiYheWMobyk6cihvLGYpKSl2YXIgZj1vLGM9aX1yZXR1cm4gY31mdW5jdGlvbiBRcihuLHQscixlKXt2YXIgdT1uLmxlbmd0aDtmb3Iocj1qYyhyKSxyPDAmJihyPS1yPnU/MDp1K3IpLFxuZT1lPT09WXx8ZT51P3U6amMoZSksZTwwJiYoZSs9dSksZT1yPmU/MDpBYyhlKTtyPGU7KW5bcisrXT10O3JldHVybiBufWZ1bmN0aW9uIG5lKG4sdCl7dmFyIHI9W107cmV0dXJuIHZzKG4sZnVuY3Rpb24obixlLHUpe3QobixlLHUpJiZyLnB1c2gobil9KSxyfWZ1bmN0aW9uIHRlKG4sdCxyLGUsdSl7dmFyIGk9LTEsbz1uLmxlbmd0aDtmb3Iocnx8KHI9U2kpLHV8fCh1PVtdKTsrK2k8bzspe3ZhciBmPW5baV07dD4wJiZyKGYpP3Q+MT90ZShmLHQtMSxyLGUsdSk6YSh1LGYpOmV8fCh1W3UubGVuZ3RoXT1mKX1yZXR1cm4gdX1mdW5jdGlvbiBlZShuLHQpe3JldHVybiBuJiZ5cyhuLHQsRmMpfWZ1bmN0aW9uIHVlKG4sdCl7cmV0dXJuIG4mJmRzKG4sdCxGYyl9ZnVuY3Rpb24gc2Uobix0KXtyZXR1cm4gaSh0LGZ1bmN0aW9uKHQpe3JldHVybiByYyhuW3RdKX0pfWZ1bmN0aW9uIHZlKG4sdCl7dD1qdSh0LG4pO2Zvcih2YXIgcj0wLGU9dC5sZW5ndGg7bnVsbCE9biYmcjxlOyluPW5bUWkodFtyKytdKV07XG5yZXR1cm4gciYmcj09ZT9uOll9ZnVuY3Rpb24geWUobix0LHIpe3ZhciBlPXQobik7cmV0dXJuIHloKG4pP2U6YShlLHIobikpfWZ1bmN0aW9uIGRlKG4pe3JldHVybiBudWxsPT1uP249PT1ZP3R0OlZuOkNsJiZDbCBpbiBjbChuKT9qaShuKTpxaShuKX1mdW5jdGlvbiBiZShuLHQpe3JldHVybiBuPnR9ZnVuY3Rpb24gd2Uobix0KXtyZXR1cm4gbnVsbCE9biYmeWwuY2FsbChuLHQpfWZ1bmN0aW9uIG1lKG4sdCl7cmV0dXJuIG51bGwhPW4mJnQgaW4gY2wobil9ZnVuY3Rpb24geGUobix0LHIpe3JldHVybiBuPj1WbCh0LHIpJiZuPEtsKHQscil9ZnVuY3Rpb24gamUobix0LHIpe2Zvcih2YXIgZT1yP2Y6byx1PW5bMF0ubGVuZ3RoLGk9bi5sZW5ndGgsYT1pLGw9ZWwoaSkscz0xLzAsaD1bXTthLS07KXt2YXIgcD1uW2FdO2EmJnQmJihwPWMocCxSKHQpKSkscz1WbChwLmxlbmd0aCxzKSxsW2FdPSFyJiYodHx8dT49MTIwJiZwLmxlbmd0aD49MTIwKT9uZXcgdnIoYSYmcCk6WX1wPW5bMF07XG52YXIgXz0tMSx2PWxbMF07bjpmb3IoOysrXzx1JiZoLmxlbmd0aDxzOyl7dmFyIGc9cFtfXSx5PXQ/dChnKTpnO2lmKGc9cnx8MCE9PWc/ZzowLCEodj9FKHYseSk6ZShoLHkscikpKXtmb3IoYT1pOy0tYTspe3ZhciBkPWxbYV07aWYoIShkP0UoZCx5KTplKG5bYV0seSxyKSkpY29udGludWUgbn12JiZ2LnB1c2goeSksaC5wdXNoKGcpfX1yZXR1cm4gaH1mdW5jdGlvbiBBZShuLHQscixlKXtyZXR1cm4gZWUobixmdW5jdGlvbihuLHUsaSl7dChlLHIobiksdSxpKX0pLGV9ZnVuY3Rpb24ga2UodCxyLGUpe3I9anUocix0KSx0PUtpKHQscik7dmFyIHU9bnVsbD09dD90OnRbUWkobW8ocikpXTtyZXR1cm4gbnVsbD09dT9ZOm4odSx0LGUpfWZ1bmN0aW9uIE9lKG4pe3JldHVybiBvYyhuKSYmZGUobik9PUJufWZ1bmN0aW9uIEllKG4pe3JldHVybiBvYyhuKSYmZGUobik9PXV0fWZ1bmN0aW9uIFJlKG4pe3JldHVybiBvYyhuKSYmZGUobik9PU1ufWZ1bmN0aW9uIHplKG4sdCxyLGUsdSl7XG5yZXR1cm4gbj09PXR8fChudWxsPT1ufHxudWxsPT10fHwhb2MobikmJiFvYyh0KT9uIT09biYmdCE9PXQ6RWUobix0LHIsZSx6ZSx1KSl9ZnVuY3Rpb24gRWUobix0LHIsZSx1LGkpe3ZhciBvPXloKG4pLGY9eWgodCksYz1vP1RuOklzKG4pLGE9Zj9UbjpJcyh0KTtjPWM9PUJuP0duOmMsYT1hPT1Cbj9HbjphO3ZhciBsPWM9PUduLHM9YT09R24saD1jPT1hO2lmKGgmJmJoKG4pKXtpZighYmgodCkpcmV0dXJuITE7bz0hMCxsPSExfWlmKGgmJiFsKXJldHVybiBpfHwoaT1uZXcgZHIpLG98fEFoKG4pP3NpKG4sdCxyLGUsdSxpKTpoaShuLHQsYyxyLGUsdSxpKTtpZighKHImYW4pKXt2YXIgcD1sJiZ5bC5jYWxsKG4sXCJfX3dyYXBwZWRfX1wiKSxfPXMmJnlsLmNhbGwodCxcIl9fd3JhcHBlZF9fXCIpO2lmKHB8fF8pe3ZhciB2PXA/bi52YWx1ZSgpOm4sZz1fP3QudmFsdWUoKTp0O3JldHVybiBpfHwoaT1uZXcgZHIpLHUodixnLHIsZSxpKX19cmV0dXJuISFoJiYoaXx8KGk9bmV3IGRyKSxwaShuLHQscixlLHUsaSkpO1xufWZ1bmN0aW9uIFNlKG4pe3JldHVybiBvYyhuKSYmSXMobik9PVpufWZ1bmN0aW9uIFdlKG4sdCxyLGUpe3ZhciB1PXIubGVuZ3RoLGk9dSxvPSFlO2lmKG51bGw9PW4pcmV0dXJuIWk7Zm9yKG49Y2wobik7dS0tOyl7dmFyIGY9clt1XTtpZihvJiZmWzJdP2ZbMV0hPT1uW2ZbMF1dOiEoZlswXWluIG4pKXJldHVybiExfWZvcig7Kyt1PGk7KXtmPXJbdV07dmFyIGM9ZlswXSxhPW5bY10sbD1mWzFdO2lmKG8mJmZbMl0pe2lmKGE9PT1ZJiYhKGMgaW4gbikpcmV0dXJuITF9ZWxzZXt2YXIgcz1uZXcgZHI7aWYoZSl2YXIgaD1lKGEsbCxjLG4sdCxzKTtpZighKGg9PT1ZP3plKGwsYSxhbnxsbixlLHMpOmgpKXJldHVybiExfX1yZXR1cm4hMH1mdW5jdGlvbiBMZShuKXtyZXR1cm4hKCFpYyhuKXx8VGkobikpJiYocmMobik/amw6TnQpLnRlc3QoWGkobikpfWZ1bmN0aW9uIENlKG4pe3JldHVybiBvYyhuKSYmZGUobik9PVlufWZ1bmN0aW9uIFVlKG4pe3JldHVybiBvYyhuKSYmSXMobik9PVFuO1xufWZ1bmN0aW9uIEJlKG4pe3JldHVybiBvYyhuKSYmdWMobi5sZW5ndGgpJiYhIVByW2RlKG4pXX1mdW5jdGlvbiBUZShuKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP246bnVsbD09bj9TYTpcIm9iamVjdFwiPT10eXBlb2Ygbj95aChuKT9QZShuWzBdLG5bMV0pOk5lKG4pOkRhKG4pfWZ1bmN0aW9uICRlKG4pe2lmKCEkaShuKSlyZXR1cm4gWmwobik7dmFyIHQ9W107Zm9yKHZhciByIGluIGNsKG4pKXlsLmNhbGwobixyKSYmXCJjb25zdHJ1Y3RvclwiIT1yJiZ0LnB1c2gocik7cmV0dXJuIHR9ZnVuY3Rpb24gRGUobil7aWYoIWljKG4pKXJldHVybiBQaShuKTt2YXIgdD0kaShuKSxyPVtdO2Zvcih2YXIgZSBpbiBuKShcImNvbnN0cnVjdG9yXCIhPWV8fCF0JiZ5bC5jYWxsKG4sZSkpJiZyLnB1c2goZSk7cmV0dXJuIHJ9ZnVuY3Rpb24gTWUobix0KXtyZXR1cm4gbjx0fWZ1bmN0aW9uIEZlKG4sdCl7dmFyIHI9LTEsZT1WZihuKT9lbChuLmxlbmd0aCk6W107cmV0dXJuIHZzKG4sZnVuY3Rpb24obix1LGkpe1xuZVsrK3JdPXQobix1LGkpfSksZX1mdW5jdGlvbiBOZShuKXt2YXIgdD1taShuKTtyZXR1cm4gMT09dC5sZW5ndGgmJnRbMF1bMl0/TWkodFswXVswXSx0WzBdWzFdKTpmdW5jdGlvbihyKXtyZXR1cm4gcj09PW58fFdlKHIsbix0KX19ZnVuY3Rpb24gUGUobix0KXtyZXR1cm4gQ2kobikmJkRpKHQpP01pKFFpKG4pLHQpOmZ1bmN0aW9uKHIpe3ZhciBlPSRjKHIsbik7cmV0dXJuIGU9PT1ZJiZlPT09dD9NYyhyLG4pOnplKHQsZSxhbnxsbil9fWZ1bmN0aW9uIHFlKG4sdCxyLGUsdSl7biE9PXQmJnlzKHQsZnVuY3Rpb24oaSxvKXtpZih1fHwodT1uZXcgZHIpLGljKGkpKVplKG4sdCxvLHIscWUsZSx1KTtlbHNle3ZhciBmPWU/ZShHaShuLG8pLGksbytcIlwiLG4sdCx1KTpZO2Y9PT1ZJiYoZj1pKSxScihuLG8sZil9fSxOYyl9ZnVuY3Rpb24gWmUobix0LHIsZSx1LGksbyl7dmFyIGY9R2kobixyKSxjPUdpKHQsciksYT1vLmdldChjKTtpZihhKXJldHVybiBScihuLHIsYSksWTt2YXIgbD1pP2koZixjLHIrXCJcIixuLHQsbyk6WSxzPWw9PT1ZO1xuaWYocyl7dmFyIGg9eWgoYykscD0haCYmYmgoYyksXz0haCYmIXAmJkFoKGMpO2w9YyxofHxwfHxfP3loKGYpP2w9ZjpHZihmKT9sPVV1KGYpOnA/KHM9ITEsbD1rdShjLCEwKSk6Xz8ocz0hMSxsPUV1KGMsITApKTpsPVtdOl9jKGMpfHxnaChjKT8obD1mLGdoKGYpP2w9T2MoZik6aWMoZikmJiFyYyhmKXx8KGw9UmkoYykpKTpzPSExfXMmJihvLnNldChjLGwpLHUobCxjLGUsaSxvKSxvLmRlbGV0ZShjKSksUnIobixyLGwpfWZ1bmN0aW9uIEtlKG4sdCl7dmFyIHI9bi5sZW5ndGg7aWYocilyZXR1cm4gdCs9dDwwP3I6MCxXaSh0LHIpP25bdF06WX1mdW5jdGlvbiBWZShuLHQscil7dD10Lmxlbmd0aD9jKHQsZnVuY3Rpb24obil7cmV0dXJuIHloKG4pP2Z1bmN0aW9uKHQpe3JldHVybiB2ZSh0LDE9PT1uLmxlbmd0aD9uWzBdOm4pfTpufSk6W1NhXTt2YXIgZT0tMTtyZXR1cm4gdD1jKHQsUihiaSgpKSksQShGZShuLGZ1bmN0aW9uKG4scix1KXtyZXR1cm57Y3JpdGVyaWE6Yyh0LGZ1bmN0aW9uKHQpe1xucmV0dXJuIHQobil9KSxpbmRleDorK2UsdmFsdWU6bn19KSxmdW5jdGlvbihuLHQpe3JldHVybiBXdShuLHQscil9KX1mdW5jdGlvbiBHZShuLHQpe3JldHVybiBIZShuLHQsZnVuY3Rpb24odCxyKXtyZXR1cm4gTWMobixyKX0pfWZ1bmN0aW9uIEhlKG4sdCxyKXtmb3IodmFyIGU9LTEsdT10Lmxlbmd0aCxpPXt9OysrZTx1Oyl7dmFyIG89dFtlXSxmPXZlKG4sbyk7cihmLG8pJiZpdShpLGp1KG8sbiksZil9cmV0dXJuIGl9ZnVuY3Rpb24gSmUobil7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiB2ZSh0LG4pfX1mdW5jdGlvbiBZZShuLHQscixlKXt2YXIgdT1lP2Q6eSxpPS0xLG89dC5sZW5ndGgsZj1uO2ZvcihuPT09dCYmKHQ9VXUodCkpLHImJihmPWMobixSKHIpKSk7KytpPG87KWZvcih2YXIgYT0wLGw9dFtpXSxzPXI/cihsKTpsOyhhPXUoZixzLGEsZSkpPi0xOylmIT09biYmU2wuY2FsbChmLGEsMSksU2wuY2FsbChuLGEsMSk7cmV0dXJuIG59ZnVuY3Rpb24gUWUobix0KXtmb3IodmFyIHI9bj90Lmxlbmd0aDowLGU9ci0xO3ItLTspe1xudmFyIHU9dFtyXTtpZihyPT1lfHx1IT09aSl7dmFyIGk9dTtXaSh1KT9TbC5jYWxsKG4sdSwxKTp2dShuLHUpfX1yZXR1cm4gbn1mdW5jdGlvbiBYZShuLHQpe3JldHVybiBuK01sKEpsKCkqKHQtbisxKSl9ZnVuY3Rpb24gbnUobix0LHIsZSl7Zm9yKHZhciB1PS0xLGk9S2woRGwoKHQtbikvKHJ8fDEpKSwwKSxvPWVsKGkpO2ktLTspb1tlP2k6Kyt1XT1uLG4rPXI7cmV0dXJuIG99ZnVuY3Rpb24gdHUobix0KXt2YXIgcj1cIlwiO2lmKCFufHx0PDF8fHQ+em4pcmV0dXJuIHI7ZG8gdCUyJiYocis9biksdD1NbCh0LzIpLHQmJihuKz1uKTt3aGlsZSh0KTtyZXR1cm4gcn1mdW5jdGlvbiBydShuLHQpe3JldHVybiBTcyhaaShuLHQsU2EpLG4rXCJcIil9ZnVuY3Rpb24gZXUobil7cmV0dXJuIGtyKG5hKG4pKX1mdW5jdGlvbiB1dShuLHQpe3ZhciByPW5hKG4pO3JldHVybiBZaShyLCRyKHQsMCxyLmxlbmd0aCkpfWZ1bmN0aW9uIGl1KG4sdCxyLGUpe2lmKCFpYyhuKSlyZXR1cm4gbjt0PWp1KHQsbik7XG5mb3IodmFyIHU9LTEsaT10Lmxlbmd0aCxvPWktMSxmPW47bnVsbCE9ZiYmKyt1PGk7KXt2YXIgYz1RaSh0W3VdKSxhPXI7aWYoXCJfX3Byb3RvX19cIj09PWN8fFwiY29uc3RydWN0b3JcIj09PWN8fFwicHJvdG90eXBlXCI9PT1jKXJldHVybiBuO2lmKHUhPW8pe3ZhciBsPWZbY107YT1lP2UobCxjLGYpOlksYT09PVkmJihhPWljKGwpP2w6V2kodFt1KzFdKT9bXTp7fSl9enIoZixjLGEpLGY9ZltjXX1yZXR1cm4gbn1mdW5jdGlvbiBvdShuKXtyZXR1cm4gWWkobmEobikpfWZ1bmN0aW9uIGZ1KG4sdCxyKXt2YXIgZT0tMSx1PW4ubGVuZ3RoO3Q8MCYmKHQ9LXQ+dT8wOnUrdCkscj1yPnU/dTpyLHI8MCYmKHIrPXUpLHU9dD5yPzA6ci10Pj4+MCx0Pj4+PTA7Zm9yKHZhciBpPWVsKHUpOysrZTx1OylpW2VdPW5bZSt0XTtyZXR1cm4gaX1mdW5jdGlvbiBjdShuLHQpe3ZhciByO3JldHVybiB2cyhuLGZ1bmN0aW9uKG4sZSx1KXtyZXR1cm4gcj10KG4sZSx1KSwhcn0pLCEhcn1mdW5jdGlvbiBhdShuLHQscil7XG52YXIgZT0wLHU9bnVsbD09bj9lOm4ubGVuZ3RoO2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0JiZ0PT09dCYmdTw9Q24pe2Zvcig7ZTx1Oyl7dmFyIGk9ZSt1Pj4+MSxvPW5baV07bnVsbCE9PW8mJiF5YyhvKSYmKHI/bzw9dDpvPHQpP2U9aSsxOnU9aX1yZXR1cm4gdX1yZXR1cm4gbHUobix0LFNhLHIpfWZ1bmN0aW9uIGx1KG4sdCxyLGUpe3ZhciB1PTAsaT1udWxsPT1uPzA6bi5sZW5ndGg7aWYoMD09PWkpcmV0dXJuIDA7dD1yKHQpO2Zvcih2YXIgbz10IT09dCxmPW51bGw9PT10LGM9eWModCksYT10PT09WTt1PGk7KXt2YXIgbD1NbCgodStpKS8yKSxzPXIobltsXSksaD1zIT09WSxwPW51bGw9PT1zLF89cz09PXMsdj15YyhzKTtpZihvKXZhciBnPWV8fF87ZWxzZSBnPWE/XyYmKGV8fGgpOmY/XyYmaCYmKGV8fCFwKTpjP18mJmgmJiFwJiYoZXx8IXYpOiFwJiYhdiYmKGU/czw9dDpzPHQpO2c/dT1sKzE6aT1sfXJldHVybiBWbChpLExuKX1mdW5jdGlvbiBzdShuLHQpe2Zvcih2YXIgcj0tMSxlPW4ubGVuZ3RoLHU9MCxpPVtdOysrcjxlOyl7XG52YXIgbz1uW3JdLGY9dD90KG8pOm87aWYoIXJ8fCFLZihmLGMpKXt2YXIgYz1mO2lbdSsrXT0wPT09bz8wOm99fXJldHVybiBpfWZ1bmN0aW9uIGh1KG4pe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBuP246eWMobik/U246K259ZnVuY3Rpb24gcHUobil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4pcmV0dXJuIG47aWYoeWgobikpcmV0dXJuIGMobixwdSkrXCJcIjtpZih5YyhuKSlyZXR1cm4gcHM/cHMuY2FsbChuKTpcIlwiO3ZhciB0PW4rXCJcIjtyZXR1cm5cIjBcIj09dCYmMS9uPT0tUm4/XCItMFwiOnR9ZnVuY3Rpb24gX3Uobix0LHIpe3ZhciBlPS0xLHU9byxpPW4ubGVuZ3RoLGM9ITAsYT1bXSxsPWE7aWYociljPSExLHU9ZjtlbHNlIGlmKGk+PVgpe3ZhciBzPXQ/bnVsbDpqcyhuKTtpZihzKXJldHVybiBOKHMpO2M9ITEsdT1FLGw9bmV3IHZyfWVsc2UgbD10P1tdOmE7bjpmb3IoOysrZTxpOyl7dmFyIGg9bltlXSxwPXQ/dChoKTpoO2lmKGg9cnx8MCE9PWg/aDowLGMmJnA9PT1wKXtmb3IodmFyIF89bC5sZW5ndGg7Xy0tOylpZihsW19dPT09cCljb250aW51ZSBuO1xudCYmbC5wdXNoKHApLGEucHVzaChoKX1lbHNlIHUobCxwLHIpfHwobCE9PWEmJmwucHVzaChwKSxhLnB1c2goaCkpfXJldHVybiBhfWZ1bmN0aW9uIHZ1KG4sdCl7cmV0dXJuIHQ9anUodCxuKSxuPUtpKG4sdCksbnVsbD09bnx8ZGVsZXRlIG5bUWkobW8odCkpXX1mdW5jdGlvbiBndShuLHQscixlKXtyZXR1cm4gaXUobix0LHIodmUobix0KSksZSl9ZnVuY3Rpb24geXUobix0LHIsZSl7Zm9yKHZhciB1PW4ubGVuZ3RoLGk9ZT91Oi0xOyhlP2ktLTorK2k8dSkmJnQobltpXSxpLG4pOyk7cmV0dXJuIHI/ZnUobixlPzA6aSxlP2krMTp1KTpmdShuLGU/aSsxOjAsZT91OmkpfWZ1bmN0aW9uIGR1KG4sdCl7dmFyIHI9bjtyZXR1cm4gciBpbnN0YW5jZW9mIEJ0JiYocj1yLnZhbHVlKCkpLGwodCxmdW5jdGlvbihuLHQpe3JldHVybiB0LmZ1bmMuYXBwbHkodC50aGlzQXJnLGEoW25dLHQuYXJncykpfSxyKX1mdW5jdGlvbiBidShuLHQscil7dmFyIGU9bi5sZW5ndGg7aWYoZTwyKXJldHVybiBlP191KG5bMF0pOltdO1xuZm9yKHZhciB1PS0xLGk9ZWwoZSk7Kyt1PGU7KWZvcih2YXIgbz1uW3VdLGY9LTE7KytmPGU7KWYhPXUmJihpW3VdPVZyKGlbdV18fG8sbltmXSx0LHIpKTtyZXR1cm4gX3UodGUoaSwxKSx0LHIpfWZ1bmN0aW9uIHd1KG4sdCxyKXtmb3IodmFyIGU9LTEsdT1uLmxlbmd0aCxpPXQubGVuZ3RoLG89e307KytlPHU7KXtyKG8sbltlXSxlPGk/dFtlXTpZKX1yZXR1cm4gb31mdW5jdGlvbiBtdShuKXtyZXR1cm4gR2Yobik/bjpbXX1mdW5jdGlvbiB4dShuKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP246U2F9ZnVuY3Rpb24ganUobix0KXtyZXR1cm4geWgobik/bjpDaShuLHQpP1tuXTpXcyhSYyhuKSl9ZnVuY3Rpb24gQXUobix0LHIpe3ZhciBlPW4ubGVuZ3RoO3JldHVybiByPXI9PT1ZP2U6ciwhdCYmcj49ZT9uOmZ1KG4sdCxyKX1mdW5jdGlvbiBrdShuLHQpe2lmKHQpcmV0dXJuIG4uc2xpY2UoKTt2YXIgcj1uLmxlbmd0aCxlPUlsP0lsKHIpOm5ldyBuLmNvbnN0cnVjdG9yKHIpO1xucmV0dXJuIG4uY29weShlKSxlfWZ1bmN0aW9uIE91KG4pe3ZhciB0PW5ldyBuLmNvbnN0cnVjdG9yKG4uYnl0ZUxlbmd0aCk7cmV0dXJuIG5ldyBPbCh0KS5zZXQobmV3IE9sKG4pKSx0fWZ1bmN0aW9uIEl1KG4sdCl7cmV0dXJuIG5ldyBuLmNvbnN0cnVjdG9yKHQ/T3Uobi5idWZmZXIpOm4uYnVmZmVyLG4uYnl0ZU9mZnNldCxuLmJ5dGVMZW5ndGgpfWZ1bmN0aW9uIFJ1KG4pe3ZhciB0PW5ldyBuLmNvbnN0cnVjdG9yKG4uc291cmNlLER0LmV4ZWMobikpO3JldHVybiB0Lmxhc3RJbmRleD1uLmxhc3RJbmRleCx0fWZ1bmN0aW9uIHp1KG4pe3JldHVybiBocz9jbChocy5jYWxsKG4pKTp7fX1mdW5jdGlvbiBFdShuLHQpe3JldHVybiBuZXcgbi5jb25zdHJ1Y3Rvcih0P091KG4uYnVmZmVyKTpuLmJ1ZmZlcixuLmJ5dGVPZmZzZXQsbi5sZW5ndGgpfWZ1bmN0aW9uIFN1KG4sdCl7aWYobiE9PXQpe3ZhciByPW4hPT1ZLGU9bnVsbD09PW4sdT1uPT09bixpPXljKG4pLG89dCE9PVksZj1udWxsPT09dCxjPXQ9PT10LGE9eWModCk7XG5pZighZiYmIWEmJiFpJiZuPnR8fGkmJm8mJmMmJiFmJiYhYXx8ZSYmbyYmY3x8IXImJmN8fCF1KXJldHVybiAxO2lmKCFlJiYhaSYmIWEmJm48dHx8YSYmciYmdSYmIWUmJiFpfHxmJiZyJiZ1fHwhbyYmdXx8IWMpcmV0dXJuLTF9cmV0dXJuIDB9ZnVuY3Rpb24gV3Uobix0LHIpe2Zvcih2YXIgZT0tMSx1PW4uY3JpdGVyaWEsaT10LmNyaXRlcmlhLG89dS5sZW5ndGgsZj1yLmxlbmd0aDsrK2U8bzspe3ZhciBjPVN1KHVbZV0saVtlXSk7aWYoYyl7aWYoZT49ZilyZXR1cm4gYztyZXR1cm4gYyooXCJkZXNjXCI9PXJbZV0/LTE6MSl9fXJldHVybiBuLmluZGV4LXQuaW5kZXh9ZnVuY3Rpb24gTHUobix0LHIsZSl7Zm9yKHZhciB1PS0xLGk9bi5sZW5ndGgsbz1yLmxlbmd0aCxmPS0xLGM9dC5sZW5ndGgsYT1LbChpLW8sMCksbD1lbChjK2EpLHM9IWU7KytmPGM7KWxbZl09dFtmXTtmb3IoOysrdTxvOykoc3x8dTxpKSYmKGxbclt1XV09blt1XSk7Zm9yKDthLS07KWxbZisrXT1uW3UrK107cmV0dXJuIGw7XG59ZnVuY3Rpb24gQ3Uobix0LHIsZSl7Zm9yKHZhciB1PS0xLGk9bi5sZW5ndGgsbz0tMSxmPXIubGVuZ3RoLGM9LTEsYT10Lmxlbmd0aCxsPUtsKGktZiwwKSxzPWVsKGwrYSksaD0hZTsrK3U8bDspc1t1XT1uW3VdO2Zvcih2YXIgcD11OysrYzxhOylzW3ArY109dFtjXTtmb3IoOysrbzxmOykoaHx8dTxpKSYmKHNbcCtyW29dXT1uW3UrK10pO3JldHVybiBzfWZ1bmN0aW9uIFV1KG4sdCl7dmFyIHI9LTEsZT1uLmxlbmd0aDtmb3IodHx8KHQ9ZWwoZSkpOysrcjxlOyl0W3JdPW5bcl07cmV0dXJuIHR9ZnVuY3Rpb24gQnUobix0LHIsZSl7dmFyIHU9IXI7cnx8KHI9e30pO2Zvcih2YXIgaT0tMSxvPXQubGVuZ3RoOysraTxvOyl7dmFyIGY9dFtpXSxjPWU/ZShyW2ZdLG5bZl0sZixyLG4pOlk7Yz09PVkmJihjPW5bZl0pLHU/Q3IocixmLGMpOnpyKHIsZixjKX1yZXR1cm4gcn1mdW5jdGlvbiBUdShuLHQpe3JldHVybiBCdShuLGtzKG4pLHQpfWZ1bmN0aW9uICR1KG4sdCl7cmV0dXJuIEJ1KG4sT3MobiksdCk7XG59ZnVuY3Rpb24gRHUobixyKXtyZXR1cm4gZnVuY3Rpb24oZSx1KXt2YXIgaT15aChlKT90OlNyLG89cj9yKCk6e307cmV0dXJuIGkoZSxuLGJpKHUsMiksbyl9fWZ1bmN0aW9uIE11KG4pe3JldHVybiBydShmdW5jdGlvbih0LHIpe3ZhciBlPS0xLHU9ci5sZW5ndGgsaT11PjE/clt1LTFdOlksbz11PjI/clsyXTpZO2ZvcihpPW4ubGVuZ3RoPjMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGk/KHUtLSxpKTpZLG8mJkxpKHJbMF0sclsxXSxvKSYmKGk9dTwzP1k6aSx1PTEpLHQ9Y2wodCk7KytlPHU7KXt2YXIgZj1yW2VdO2YmJm4odCxmLGUsaSl9cmV0dXJuIHR9KX1mdW5jdGlvbiBGdShuLHQpe3JldHVybiBmdW5jdGlvbihyLGUpe2lmKG51bGw9PXIpcmV0dXJuIHI7aWYoIVZmKHIpKXJldHVybiBuKHIsZSk7Zm9yKHZhciB1PXIubGVuZ3RoLGk9dD91Oi0xLG89Y2wocik7KHQ/aS0tOisraTx1KSYmZShvW2ldLGksbykhPT0hMTspO3JldHVybiByfX1mdW5jdGlvbiBOdShuKXtyZXR1cm4gZnVuY3Rpb24odCxyLGUpe1xuZm9yKHZhciB1PS0xLGk9Y2wodCksbz1lKHQpLGY9by5sZW5ndGg7Zi0tOyl7dmFyIGM9b1tuP2Y6Kyt1XTtpZihyKGlbY10sYyxpKT09PSExKWJyZWFrfXJldHVybiB0fX1mdW5jdGlvbiBQdShuLHQscil7ZnVuY3Rpb24gZSgpe3JldHVybih0aGlzJiZ0aGlzIT09WHImJnRoaXMgaW5zdGFuY2VvZiBlP2k6bikuYXBwbHkodT9yOnRoaXMsYXJndW1lbnRzKX12YXIgdT10JnNuLGk9S3Uobik7cmV0dXJuIGV9ZnVuY3Rpb24gcXUobil7cmV0dXJuIGZ1bmN0aW9uKHQpe3Q9UmModCk7dmFyIHI9Qih0KT9WKHQpOlksZT1yP3JbMF06dC5jaGFyQXQoMCksdT1yP0F1KHIsMSkuam9pbihcIlwiKTp0LnNsaWNlKDEpO3JldHVybiBlW25dKCkrdX19ZnVuY3Rpb24gWnUobil7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBsKE9hKG9hKHQpLnJlcGxhY2UoVXIsXCJcIikpLG4sXCJcIil9fWZ1bmN0aW9uIEt1KG4pe3JldHVybiBmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cztzd2l0Y2godC5sZW5ndGgpe1xuY2FzZSAwOnJldHVybiBuZXcgbjtjYXNlIDE6cmV0dXJuIG5ldyBuKHRbMF0pO2Nhc2UgMjpyZXR1cm4gbmV3IG4odFswXSx0WzFdKTtjYXNlIDM6cmV0dXJuIG5ldyBuKHRbMF0sdFsxXSx0WzJdKTtjYXNlIDQ6cmV0dXJuIG5ldyBuKHRbMF0sdFsxXSx0WzJdLHRbM10pO2Nhc2UgNTpyZXR1cm4gbmV3IG4odFswXSx0WzFdLHRbMl0sdFszXSx0WzRdKTtjYXNlIDY6cmV0dXJuIG5ldyBuKHRbMF0sdFsxXSx0WzJdLHRbM10sdFs0XSx0WzVdKTtjYXNlIDc6cmV0dXJuIG5ldyBuKHRbMF0sdFsxXSx0WzJdLHRbM10sdFs0XSx0WzVdLHRbNl0pfXZhciByPV9zKG4ucHJvdG90eXBlKSxlPW4uYXBwbHkocix0KTtyZXR1cm4gaWMoZSk/ZTpyfX1mdW5jdGlvbiBWdSh0LHIsZSl7ZnVuY3Rpb24gdSgpe2Zvcih2YXIgbz1hcmd1bWVudHMubGVuZ3RoLGY9ZWwobyksYz1vLGE9ZGkodSk7Yy0tOylmW2NdPWFyZ3VtZW50c1tjXTt2YXIgbD1vPDMmJmZbMF0hPT1hJiZmW28tMV0hPT1hP1tdOkYoZixhKTtcbnJldHVybiBvLT1sLmxlbmd0aCxvPGU/dWkodCxyLEp1LHUucGxhY2Vob2xkZXIsWSxmLGwsWSxZLGUtbyk6bih0aGlzJiZ0aGlzIT09WHImJnRoaXMgaW5zdGFuY2VvZiB1P2k6dCx0aGlzLGYpfXZhciBpPUt1KHQpO3JldHVybiB1fWZ1bmN0aW9uIEd1KG4pe3JldHVybiBmdW5jdGlvbih0LHIsZSl7dmFyIHU9Y2wodCk7aWYoIVZmKHQpKXt2YXIgaT1iaShyLDMpO3Q9RmModCkscj1mdW5jdGlvbihuKXtyZXR1cm4gaSh1W25dLG4sdSl9fXZhciBvPW4odCxyLGUpO3JldHVybiBvPi0xP3VbaT90W29dOm9dOll9fWZ1bmN0aW9uIEh1KG4pe3JldHVybiBfaShmdW5jdGlvbih0KXt2YXIgcj10Lmxlbmd0aCxlPXIsdT1ILnByb3RvdHlwZS50aHJ1O2ZvcihuJiZ0LnJldmVyc2UoKTtlLS07KXt2YXIgaT10W2VdO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGkpdGhyb3cgbmV3IHNsKHRuKTtpZih1JiYhbyYmXCJ3cmFwcGVyXCI9PXlpKGkpKXZhciBvPW5ldyBIKFtdLCEwKX1mb3IoZT1vP2U6cjsrK2U8cjspe1xuaT10W2VdO3ZhciBmPXlpKGkpLGM9XCJ3cmFwcGVyXCI9PWY/QXMoaSk6WTtvPWMmJkJpKGNbMF0pJiZjWzFdPT0oZG58X258Z258Ym4pJiYhY1s0XS5sZW5ndGgmJjE9PWNbOV0/b1t5aShjWzBdKV0uYXBwbHkobyxjWzNdKToxPT1pLmxlbmd0aCYmQmkoaSk/b1tmXSgpOm8udGhydShpKX1yZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj1hcmd1bWVudHMsZT1uWzBdO2lmKG8mJjE9PW4ubGVuZ3RoJiZ5aChlKSlyZXR1cm4gby5wbGFudChlKS52YWx1ZSgpO2Zvcih2YXIgdT0wLGk9cj90W3VdLmFwcGx5KHRoaXMsbik6ZTsrK3U8cjspaT10W3VdLmNhbGwodGhpcyxpKTtyZXR1cm4gaX19KX1mdW5jdGlvbiBKdShuLHQscixlLHUsaSxvLGYsYyxhKXtmdW5jdGlvbiBsKCl7Zm9yKHZhciB5PWFyZ3VtZW50cy5sZW5ndGgsZD1lbCh5KSxiPXk7Yi0tOylkW2JdPWFyZ3VtZW50c1tiXTtpZihfKXZhciB3PWRpKGwpLG09TChkLHcpO2lmKGUmJihkPUx1KGQsZSx1LF8pKSxpJiYoZD1DdShkLGksbyxfKSksXG55LT1tLF8mJnk8YSl7cmV0dXJuIHVpKG4sdCxKdSxsLnBsYWNlaG9sZGVyLHIsZCxGKGQsdyksZixjLGEteSl9dmFyIHg9aD9yOnRoaXMsaj1wP3hbbl06bjtyZXR1cm4geT1kLmxlbmd0aCxmP2Q9VmkoZCxmKTp2JiZ5PjEmJmQucmV2ZXJzZSgpLHMmJmM8eSYmKGQubGVuZ3RoPWMpLHRoaXMmJnRoaXMhPT1YciYmdGhpcyBpbnN0YW5jZW9mIGwmJihqPWd8fEt1KGopKSxqLmFwcGx5KHgsZCl9dmFyIHM9dCZkbixoPXQmc24scD10JmhuLF89dCYoX258dm4pLHY9dCZ3bixnPXA/WTpLdShuKTtyZXR1cm4gbH1mdW5jdGlvbiBZdShuLHQpe3JldHVybiBmdW5jdGlvbihyLGUpe3JldHVybiBBZShyLG4sdChlKSx7fSl9fWZ1bmN0aW9uIFF1KG4sdCl7cmV0dXJuIGZ1bmN0aW9uKHIsZSl7dmFyIHU7aWYocj09PVkmJmU9PT1ZKXJldHVybiB0O2lmKHIhPT1ZJiYodT1yKSxlIT09WSl7aWYodT09PVkpcmV0dXJuIGU7XCJzdHJpbmdcIj09dHlwZW9mIHJ8fFwic3RyaW5nXCI9PXR5cGVvZiBlPyhyPXB1KHIpLFxuZT1wdShlKSk6KHI9aHUociksZT1odShlKSksdT1uKHIsZSl9cmV0dXJuIHV9fWZ1bmN0aW9uIFh1KHQpe3JldHVybiBfaShmdW5jdGlvbihyKXtyZXR1cm4gcj1jKHIsUihiaSgpKSkscnUoZnVuY3Rpb24oZSl7dmFyIHU9dGhpcztyZXR1cm4gdChyLGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsdSxlKX0pfSl9KX1mdW5jdGlvbiBuaShuLHQpe3Q9dD09PVk/XCIgXCI6cHUodCk7dmFyIHI9dC5sZW5ndGg7aWYocjwyKXJldHVybiByP3R1KHQsbik6dDt2YXIgZT10dSh0LERsKG4vSyh0KSkpO3JldHVybiBCKHQpP0F1KFYoZSksMCxuKS5qb2luKFwiXCIpOmUuc2xpY2UoMCxuKX1mdW5jdGlvbiB0aSh0LHIsZSx1KXtmdW5jdGlvbiBpKCl7Zm9yKHZhciByPS0xLGM9YXJndW1lbnRzLmxlbmd0aCxhPS0xLGw9dS5sZW5ndGgscz1lbChsK2MpLGg9dGhpcyYmdGhpcyE9PVhyJiZ0aGlzIGluc3RhbmNlb2YgaT9mOnQ7KythPGw7KXNbYV09dVthXTtmb3IoO2MtLTspc1thKytdPWFyZ3VtZW50c1srK3JdO1xucmV0dXJuIG4oaCxvP2U6dGhpcyxzKX12YXIgbz1yJnNuLGY9S3UodCk7cmV0dXJuIGl9ZnVuY3Rpb24gcmkobil7cmV0dXJuIGZ1bmN0aW9uKHQscixlKXtyZXR1cm4gZSYmXCJudW1iZXJcIiE9dHlwZW9mIGUmJkxpKHQscixlKSYmKHI9ZT1ZKSx0PXhjKHQpLHI9PT1ZPyhyPXQsdD0wKTpyPXhjKHIpLGU9ZT09PVk/dDxyPzE6LTE6eGMoZSksbnUodCxyLGUsbil9fWZ1bmN0aW9uIGVpKG4pe3JldHVybiBmdW5jdGlvbih0LHIpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0JiZcInN0cmluZ1wiPT10eXBlb2Ygcnx8KHQ9a2ModCkscj1rYyhyKSksbih0LHIpfX1mdW5jdGlvbiB1aShuLHQscixlLHUsaSxvLGYsYyxhKXt2YXIgbD10Jl9uLHM9bD9vOlksaD1sP1k6byxwPWw/aTpZLF89bD9ZOmk7dHw9bD9nbjp5bix0Jj1+KGw/eW46Z24pLHQmcG58fCh0Jj1+KHNufGhuKSk7dmFyIHY9W24sdCx1LHAscyxfLGgsZixjLGFdLGc9ci5hcHBseShZLHYpO3JldHVybiBCaShuKSYmenMoZyx2KSxnLnBsYWNlaG9sZGVyPWUsXG5IaShnLG4sdCl9ZnVuY3Rpb24gaWkobil7dmFyIHQ9Zmxbbl07cmV0dXJuIGZ1bmN0aW9uKG4scil7aWYobj1rYyhuKSxyPW51bGw9PXI/MDpWbChqYyhyKSwyOTIpLHImJlBsKG4pKXt2YXIgZT0oUmMobikrXCJlXCIpLnNwbGl0KFwiZVwiKTtyZXR1cm4gZT0oUmModChlWzBdK1wiZVwiKygrZVsxXStyKSkpK1wiZVwiKS5zcGxpdChcImVcIiksKyhlWzBdK1wiZVwiKygrZVsxXS1yKSl9cmV0dXJuIHQobil9fWZ1bmN0aW9uIG9pKG4pe3JldHVybiBmdW5jdGlvbih0KXt2YXIgcj1Jcyh0KTtyZXR1cm4gcj09Wm4/RCh0KTpyPT1Rbj9QKHQpOkkodCxuKHQpKX19ZnVuY3Rpb24gZmkobix0LHIsZSx1LGksbyxmKXt2YXIgYz10JmhuO2lmKCFjJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBuKXRocm93IG5ldyBzbCh0bik7dmFyIGE9ZT9lLmxlbmd0aDowO2lmKGF8fCh0Jj1+KGdufHluKSxlPXU9WSksbz1vPT09WT9vOktsKGpjKG8pLDApLGY9Zj09PVk/ZjpqYyhmKSxhLT11P3UubGVuZ3RoOjAsdCZ5bil7dmFyIGw9ZSxzPXU7XG5lPXU9WX12YXIgaD1jP1k6QXMobikscD1bbix0LHIsZSx1LGwscyxpLG8sZl07aWYoaCYmTmkocCxoKSxuPXBbMF0sdD1wWzFdLHI9cFsyXSxlPXBbM10sdT1wWzRdLGY9cFs5XT1wWzldPT09WT9jPzA6bi5sZW5ndGg6S2wocFs5XS1hLDApLCFmJiZ0Jihfbnx2bikmJih0Jj1+KF9ufHZuKSksdCYmdCE9c24pXz10PT1fbnx8dD09dm4/VnUobix0LGYpOnQhPWduJiZ0IT0oc258Z24pfHx1Lmxlbmd0aD9KdS5hcHBseShZLHApOnRpKG4sdCxyLGUpO2Vsc2UgdmFyIF89UHUobix0LHIpO3JldHVybiBIaSgoaD9iczp6cykoXyxwKSxuLHQpfWZ1bmN0aW9uIGNpKG4sdCxyLGUpe3JldHVybiBuPT09WXx8S2YobixfbFtyXSkmJiF5bC5jYWxsKGUscik/dDpufWZ1bmN0aW9uIGFpKG4sdCxyLGUsdSxpKXtyZXR1cm4gaWMobikmJmljKHQpJiYoaS5zZXQodCxuKSxxZShuLHQsWSxhaSxpKSxpLmRlbGV0ZSh0KSksbn1mdW5jdGlvbiBsaShuKXtyZXR1cm4gX2Mobik/WTpufWZ1bmN0aW9uIHNpKG4sdCxyLGUsdSxpKXtcbnZhciBvPXImYW4sZj1uLmxlbmd0aCxjPXQubGVuZ3RoO2lmKGYhPWMmJiEobyYmYz5mKSlyZXR1cm4hMTt2YXIgYT1pLmdldChuKSxsPWkuZ2V0KHQpO2lmKGEmJmwpcmV0dXJuIGE9PXQmJmw9PW47dmFyIHM9LTEscD0hMCxfPXImbG4/bmV3IHZyOlk7Zm9yKGkuc2V0KG4sdCksaS5zZXQodCxuKTsrK3M8Zjspe3ZhciB2PW5bc10sZz10W3NdO2lmKGUpdmFyIHk9bz9lKGcsdixzLHQsbixpKTplKHYsZyxzLG4sdCxpKTtpZih5IT09WSl7aWYoeSljb250aW51ZTtwPSExO2JyZWFrfWlmKF8pe2lmKCFoKHQsZnVuY3Rpb24obix0KXtpZighRShfLHQpJiYodj09PW58fHUodixuLHIsZSxpKSkpcmV0dXJuIF8ucHVzaCh0KX0pKXtwPSExO2JyZWFrfX1lbHNlIGlmKHYhPT1nJiYhdSh2LGcscixlLGkpKXtwPSExO2JyZWFrfX1yZXR1cm4gaS5kZWxldGUobiksaS5kZWxldGUodCkscH1mdW5jdGlvbiBoaShuLHQscixlLHUsaSxvKXtzd2l0Y2gocil7Y2FzZSBpdDppZihuLmJ5dGVMZW5ndGghPXQuYnl0ZUxlbmd0aHx8bi5ieXRlT2Zmc2V0IT10LmJ5dGVPZmZzZXQpcmV0dXJuITE7XG5uPW4uYnVmZmVyLHQ9dC5idWZmZXI7Y2FzZSB1dDpyZXR1cm4hKG4uYnl0ZUxlbmd0aCE9dC5ieXRlTGVuZ3RofHwhaShuZXcgT2wobiksbmV3IE9sKHQpKSk7Y2FzZSBEbjpjYXNlIE1uOmNhc2UgS246cmV0dXJuIEtmKCtuLCt0KTtjYXNlIE5uOnJldHVybiBuLm5hbWU9PXQubmFtZSYmbi5tZXNzYWdlPT10Lm1lc3NhZ2U7Y2FzZSBZbjpjYXNlIFhuOnJldHVybiBuPT10K1wiXCI7Y2FzZSBabjp2YXIgZj1EO2Nhc2UgUW46dmFyIGM9ZSZhbjtpZihmfHwoZj1OKSxuLnNpemUhPXQuc2l6ZSYmIWMpcmV0dXJuITE7dmFyIGE9by5nZXQobik7aWYoYSlyZXR1cm4gYT09dDtlfD1sbixvLnNldChuLHQpO3ZhciBsPXNpKGYobiksZih0KSxlLHUsaSxvKTtyZXR1cm4gby5kZWxldGUobiksbDtjYXNlIG50OmlmKGhzKXJldHVybiBocy5jYWxsKG4pPT1ocy5jYWxsKHQpfXJldHVybiExfWZ1bmN0aW9uIHBpKG4sdCxyLGUsdSxpKXt2YXIgbz1yJmFuLGY9dmkobiksYz1mLmxlbmd0aDtpZihjIT12aSh0KS5sZW5ndGgmJiFvKXJldHVybiExO1xuZm9yKHZhciBhPWM7YS0tOyl7dmFyIGw9ZlthXTtpZighKG8/bCBpbiB0OnlsLmNhbGwodCxsKSkpcmV0dXJuITF9dmFyIHM9aS5nZXQobiksaD1pLmdldCh0KTtpZihzJiZoKXJldHVybiBzPT10JiZoPT1uO3ZhciBwPSEwO2kuc2V0KG4sdCksaS5zZXQodCxuKTtmb3IodmFyIF89bzsrK2E8Yzspe2w9ZlthXTt2YXIgdj1uW2xdLGc9dFtsXTtpZihlKXZhciB5PW8/ZShnLHYsbCx0LG4saSk6ZSh2LGcsbCxuLHQsaSk7aWYoISh5PT09WT92PT09Z3x8dSh2LGcscixlLGkpOnkpKXtwPSExO2JyZWFrfV98fChfPVwiY29uc3RydWN0b3JcIj09bCl9aWYocCYmIV8pe3ZhciBkPW4uY29uc3RydWN0b3IsYj10LmNvbnN0cnVjdG9yO2QhPWImJlwiY29uc3RydWN0b3JcImluIG4mJlwiY29uc3RydWN0b3JcImluIHQmJiEoXCJmdW5jdGlvblwiPT10eXBlb2YgZCYmZCBpbnN0YW5jZW9mIGQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGImJmIgaW5zdGFuY2VvZiBiKSYmKHA9ITEpfXJldHVybiBpLmRlbGV0ZShuKSxcbmkuZGVsZXRlKHQpLHB9ZnVuY3Rpb24gX2kobil7cmV0dXJuIFNzKFppKG4sWSxobyksbitcIlwiKX1mdW5jdGlvbiB2aShuKXtyZXR1cm4geWUobixGYyxrcyl9ZnVuY3Rpb24gZ2kobil7cmV0dXJuIHllKG4sTmMsT3MpfWZ1bmN0aW9uIHlpKG4pe2Zvcih2YXIgdD1uLm5hbWUrXCJcIixyPWlzW3RdLGU9eWwuY2FsbChpcyx0KT9yLmxlbmd0aDowO2UtLTspe3ZhciB1PXJbZV0saT11LmZ1bmM7aWYobnVsbD09aXx8aT09bilyZXR1cm4gdS5uYW1lfXJldHVybiB0fWZ1bmN0aW9uIGRpKG4pe3JldHVybih5bC5jYWxsKHEsXCJwbGFjZWhvbGRlclwiKT9xOm4pLnBsYWNlaG9sZGVyfWZ1bmN0aW9uIGJpKCl7dmFyIG49cS5pdGVyYXRlZXx8V2E7cmV0dXJuIG49bj09PVdhP1RlOm4sYXJndW1lbnRzLmxlbmd0aD9uKGFyZ3VtZW50c1swXSxhcmd1bWVudHNbMV0pOm59ZnVuY3Rpb24gd2kobix0KXt2YXIgcj1uLl9fZGF0YV9fO3JldHVybiBVaSh0KT9yW1wic3RyaW5nXCI9PXR5cGVvZiB0P1wic3RyaW5nXCI6XCJoYXNoXCJdOnIubWFwO1xufWZ1bmN0aW9uIG1pKG4pe2Zvcih2YXIgdD1GYyhuKSxyPXQubGVuZ3RoO3ItLTspe3ZhciBlPXRbcl0sdT1uW2VdO3Rbcl09W2UsdSxEaSh1KV19cmV0dXJuIHR9ZnVuY3Rpb24geGkobix0KXt2YXIgcj1VKG4sdCk7cmV0dXJuIExlKHIpP3I6WX1mdW5jdGlvbiBqaShuKXt2YXIgdD15bC5jYWxsKG4sQ2wpLHI9bltDbF07dHJ5e25bQ2xdPVk7dmFyIGU9ITB9Y2F0Y2gobil7fXZhciB1PXdsLmNhbGwobik7cmV0dXJuIGUmJih0P25bQ2xdPXI6ZGVsZXRlIG5bQ2xdKSx1fWZ1bmN0aW9uIEFpKG4sdCxyKXtmb3IodmFyIGU9LTEsdT1yLmxlbmd0aDsrK2U8dTspe3ZhciBpPXJbZV0sbz1pLnNpemU7c3dpdGNoKGkudHlwZSl7Y2FzZVwiZHJvcFwiOm4rPW87YnJlYWs7Y2FzZVwiZHJvcFJpZ2h0XCI6dC09bzticmVhaztjYXNlXCJ0YWtlXCI6dD1WbCh0LG4rbyk7YnJlYWs7Y2FzZVwidGFrZVJpZ2h0XCI6bj1LbChuLHQtbyl9fXJldHVybntzdGFydDpuLGVuZDp0fX1mdW5jdGlvbiBraShuKXt2YXIgdD1uLm1hdGNoKEN0KTtcbnJldHVybiB0P3RbMV0uc3BsaXQoVXQpOltdfWZ1bmN0aW9uIE9pKG4sdCxyKXt0PWp1KHQsbik7Zm9yKHZhciBlPS0xLHU9dC5sZW5ndGgsaT0hMTsrK2U8dTspe3ZhciBvPVFpKHRbZV0pO2lmKCEoaT1udWxsIT1uJiZyKG4sbykpKWJyZWFrO249bltvXX1yZXR1cm4gaXx8KytlIT11P2k6KHU9bnVsbD09bj8wOm4ubGVuZ3RoLCEhdSYmdWModSkmJldpKG8sdSkmJih5aChuKXx8Z2gobikpKX1mdW5jdGlvbiBJaShuKXt2YXIgdD1uLmxlbmd0aCxyPW5ldyBuLmNvbnN0cnVjdG9yKHQpO3JldHVybiB0JiZcInN0cmluZ1wiPT10eXBlb2YgblswXSYmeWwuY2FsbChuLFwiaW5kZXhcIikmJihyLmluZGV4PW4uaW5kZXgsci5pbnB1dD1uLmlucHV0KSxyfWZ1bmN0aW9uIFJpKG4pe3JldHVyblwiZnVuY3Rpb25cIiE9dHlwZW9mIG4uY29uc3RydWN0b3J8fCRpKG4pP3t9Ol9zKFJsKG4pKX1mdW5jdGlvbiB6aShuLHQscil7dmFyIGU9bi5jb25zdHJ1Y3Rvcjtzd2l0Y2godCl7Y2FzZSB1dDpyZXR1cm4gT3Uobik7XG5jYXNlIERuOmNhc2UgTW46cmV0dXJuIG5ldyBlKCtuKTtjYXNlIGl0OnJldHVybiBJdShuLHIpO2Nhc2Ugb3Q6Y2FzZSBmdDpjYXNlIGN0OmNhc2UgYXQ6Y2FzZSBsdDpjYXNlIHN0OmNhc2UgaHQ6Y2FzZSBwdDpjYXNlIF90OnJldHVybiBFdShuLHIpO2Nhc2UgWm46cmV0dXJuIG5ldyBlO2Nhc2UgS246Y2FzZSBYbjpyZXR1cm4gbmV3IGUobik7Y2FzZSBZbjpyZXR1cm4gUnUobik7Y2FzZSBRbjpyZXR1cm4gbmV3IGU7Y2FzZSBudDpyZXR1cm4genUobil9fWZ1bmN0aW9uIEVpKG4sdCl7dmFyIHI9dC5sZW5ndGg7aWYoIXIpcmV0dXJuIG47dmFyIGU9ci0xO3JldHVybiB0W2VdPShyPjE/XCImIFwiOlwiXCIpK3RbZV0sdD10LmpvaW4ocj4yP1wiLCBcIjpcIiBcIiksbi5yZXBsYWNlKEx0LFwie1xcbi8qIFt3cmFwcGVkIHdpdGggXCIrdCtcIl0gKi9cXG5cIil9ZnVuY3Rpb24gU2kobil7cmV0dXJuIHloKG4pfHxnaChuKXx8ISEoV2wmJm4mJm5bV2xdKX1mdW5jdGlvbiBXaShuLHQpe3ZhciByPXR5cGVvZiBuO1xucmV0dXJuIHQ9bnVsbD09dD96bjp0LCEhdCYmKFwibnVtYmVyXCI9PXJ8fFwic3ltYm9sXCIhPXImJnF0LnRlc3QobikpJiZuPi0xJiZuJTE9PTAmJm48dH1mdW5jdGlvbiBMaShuLHQscil7aWYoIWljKHIpKXJldHVybiExO3ZhciBlPXR5cGVvZiB0O3JldHVybiEhKFwibnVtYmVyXCI9PWU/VmYocikmJldpKHQsci5sZW5ndGgpOlwic3RyaW5nXCI9PWUmJnQgaW4gcikmJktmKHJbdF0sbil9ZnVuY3Rpb24gQ2kobix0KXtpZih5aChuKSlyZXR1cm4hMTt2YXIgcj10eXBlb2YgbjtyZXR1cm4hKFwibnVtYmVyXCIhPXImJlwic3ltYm9sXCIhPXImJlwiYm9vbGVhblwiIT1yJiZudWxsIT1uJiYheWMobikpfHwoT3QudGVzdChuKXx8IWt0LnRlc3Qobil8fG51bGwhPXQmJm4gaW4gY2wodCkpfWZ1bmN0aW9uIFVpKG4pe3ZhciB0PXR5cGVvZiBuO3JldHVyblwic3RyaW5nXCI9PXR8fFwibnVtYmVyXCI9PXR8fFwic3ltYm9sXCI9PXR8fFwiYm9vbGVhblwiPT10P1wiX19wcm90b19fXCIhPT1uOm51bGw9PT1ufWZ1bmN0aW9uIEJpKG4pe1xudmFyIHQ9eWkobikscj1xW3RdO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHJ8fCEodCBpbiBCdC5wcm90b3R5cGUpKXJldHVybiExO2lmKG49PT1yKXJldHVybiEwO3ZhciBlPUFzKHIpO3JldHVybiEhZSYmbj09PWVbMF19ZnVuY3Rpb24gVGkobil7cmV0dXJuISFibCYmYmwgaW4gbn1mdW5jdGlvbiAkaShuKXt2YXIgdD1uJiZuLmNvbnN0cnVjdG9yO3JldHVybiBuPT09KFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnQucHJvdG90eXBlfHxfbCl9ZnVuY3Rpb24gRGkobil7cmV0dXJuIG49PT1uJiYhaWMobil9ZnVuY3Rpb24gTWkobix0KXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIG51bGwhPXImJihyW25dPT09dCYmKHQhPT1ZfHxuIGluIGNsKHIpKSl9fWZ1bmN0aW9uIEZpKG4pe3ZhciB0PVdmKG4sZnVuY3Rpb24obil7cmV0dXJuIHIuc2l6ZT09PWVuJiZyLmNsZWFyKCksbn0pLHI9dC5jYWNoZTtyZXR1cm4gdH1mdW5jdGlvbiBOaShuLHQpe3ZhciByPW5bMV0sZT10WzFdLHU9cnxlLGk9dTwoc258aG58ZG4pLG89ZT09ZG4mJnI9PV9ufHxlPT1kbiYmcj09Ym4mJm5bN10ubGVuZ3RoPD10WzhdfHxlPT0oZG58Ym4pJiZ0WzddLmxlbmd0aDw9dFs4XSYmcj09X247XG5pZighaSYmIW8pcmV0dXJuIG47ZSZzbiYmKG5bMl09dFsyXSx1fD1yJnNuPzA6cG4pO3ZhciBmPXRbM107aWYoZil7dmFyIGM9blszXTtuWzNdPWM/THUoYyxmLHRbNF0pOmYsbls0XT1jP0YoblszXSx1bik6dFs0XX1yZXR1cm4gZj10WzVdLGYmJihjPW5bNV0sbls1XT1jP0N1KGMsZix0WzZdKTpmLG5bNl09Yz9GKG5bNV0sdW4pOnRbNl0pLGY9dFs3XSxmJiYobls3XT1mKSxlJmRuJiYobls4XT1udWxsPT1uWzhdP3RbOF06Vmwobls4XSx0WzhdKSksbnVsbD09bls5XSYmKG5bOV09dFs5XSksblswXT10WzBdLG5bMV09dSxufWZ1bmN0aW9uIFBpKG4pe3ZhciB0PVtdO2lmKG51bGwhPW4pZm9yKHZhciByIGluIGNsKG4pKXQucHVzaChyKTtyZXR1cm4gdH1mdW5jdGlvbiBxaShuKXtyZXR1cm4gd2wuY2FsbChuKX1mdW5jdGlvbiBaaSh0LHIsZSl7cmV0dXJuIHI9S2wocj09PVk/dC5sZW5ndGgtMTpyLDApLGZ1bmN0aW9uKCl7Zm9yKHZhciB1PWFyZ3VtZW50cyxpPS0xLG89S2wodS5sZW5ndGgtciwwKSxmPWVsKG8pOysraTxvOylmW2ldPXVbcitpXTtcbmk9LTE7Zm9yKHZhciBjPWVsKHIrMSk7KytpPHI7KWNbaV09dVtpXTtyZXR1cm4gY1tyXT1lKGYpLG4odCx0aGlzLGMpfX1mdW5jdGlvbiBLaShuLHQpe3JldHVybiB0Lmxlbmd0aDwyP246dmUobixmdSh0LDAsLTEpKX1mdW5jdGlvbiBWaShuLHQpe2Zvcih2YXIgcj1uLmxlbmd0aCxlPVZsKHQubGVuZ3RoLHIpLHU9VXUobik7ZS0tOyl7dmFyIGk9dFtlXTtuW2VdPVdpKGkscik/dVtpXTpZfXJldHVybiBufWZ1bmN0aW9uIEdpKG4sdCl7aWYoKFwiY29uc3RydWN0b3JcIiE9PXR8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIG5bdF0pJiZcIl9fcHJvdG9fX1wiIT10KXJldHVybiBuW3RdfWZ1bmN0aW9uIEhpKG4sdCxyKXt2YXIgZT10K1wiXCI7cmV0dXJuIFNzKG4sRWkoZSxubyhraShlKSxyKSkpfWZ1bmN0aW9uIEppKG4pe3ZhciB0PTAscj0wO3JldHVybiBmdW5jdGlvbigpe3ZhciBlPUdsKCksdT1Bbi0oZS1yKTtpZihyPWUsdT4wKXtpZigrK3Q+PWpuKXJldHVybiBhcmd1bWVudHNbMF19ZWxzZSB0PTA7XG5yZXR1cm4gbi5hcHBseShZLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIFlpKG4sdCl7dmFyIHI9LTEsZT1uLmxlbmd0aCx1PWUtMTtmb3IodD10PT09WT9lOnQ7KytyPHQ7KXt2YXIgaT1YZShyLHUpLG89bltpXTtuW2ldPW5bcl0sbltyXT1vfXJldHVybiBuLmxlbmd0aD10LG59ZnVuY3Rpb24gUWkobil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG58fHljKG4pKXJldHVybiBuO3ZhciB0PW4rXCJcIjtyZXR1cm5cIjBcIj09dCYmMS9uPT0tUm4/XCItMFwiOnR9ZnVuY3Rpb24gWGkobil7aWYobnVsbCE9bil7dHJ5e3JldHVybiBnbC5jYWxsKG4pfWNhdGNoKG4pe310cnl7cmV0dXJuIG4rXCJcIn1jYXRjaChuKXt9fXJldHVyblwiXCJ9ZnVuY3Rpb24gbm8obix0KXtyZXR1cm4gcihVbixmdW5jdGlvbihyKXt2YXIgZT1cIl8uXCIrclswXTt0JnJbMV0mJiFvKG4sZSkmJm4ucHVzaChlKX0pLG4uc29ydCgpfWZ1bmN0aW9uIHRvKG4pe2lmKG4gaW5zdGFuY2VvZiBCdClyZXR1cm4gbi5jbG9uZSgpO3ZhciB0PW5ldyBIKG4uX193cmFwcGVkX18sbi5fX2NoYWluX18pO1xucmV0dXJuIHQuX19hY3Rpb25zX189VXUobi5fX2FjdGlvbnNfXyksdC5fX2luZGV4X189bi5fX2luZGV4X18sdC5fX3ZhbHVlc19fPW4uX192YWx1ZXNfXyx0fWZ1bmN0aW9uIHJvKG4sdCxyKXt0PShyP0xpKG4sdCxyKTp0PT09WSk/MTpLbChqYyh0KSwwKTt2YXIgZT1udWxsPT1uPzA6bi5sZW5ndGg7aWYoIWV8fHQ8MSlyZXR1cm5bXTtmb3IodmFyIHU9MCxpPTAsbz1lbChEbChlL3QpKTt1PGU7KW9baSsrXT1mdShuLHUsdSs9dCk7cmV0dXJuIG99ZnVuY3Rpb24gZW8obil7Zm9yKHZhciB0PS0xLHI9bnVsbD09bj8wOm4ubGVuZ3RoLGU9MCx1PVtdOysrdDxyOyl7dmFyIGk9blt0XTtpJiYodVtlKytdPWkpfXJldHVybiB1fWZ1bmN0aW9uIHVvKCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aDtpZighbilyZXR1cm5bXTtmb3IodmFyIHQ9ZWwobi0xKSxyPWFyZ3VtZW50c1swXSxlPW47ZS0tOyl0W2UtMV09YXJndW1lbnRzW2VdO3JldHVybiBhKHloKHIpP1V1KHIpOltyXSx0ZSh0LDEpKTtcbn1mdW5jdGlvbiBpbyhuLHQscil7dmFyIGU9bnVsbD09bj8wOm4ubGVuZ3RoO3JldHVybiBlPyh0PXJ8fHQ9PT1ZPzE6amModCksZnUobix0PDA/MDp0LGUpKTpbXX1mdW5jdGlvbiBvbyhuLHQscil7dmFyIGU9bnVsbD09bj8wOm4ubGVuZ3RoO3JldHVybiBlPyh0PXJ8fHQ9PT1ZPzE6amModCksdD1lLXQsZnUobiwwLHQ8MD8wOnQpKTpbXX1mdW5jdGlvbiBmbyhuLHQpe3JldHVybiBuJiZuLmxlbmd0aD95dShuLGJpKHQsMyksITAsITApOltdfWZ1bmN0aW9uIGNvKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP3l1KG4sYmkodCwzKSwhMCk6W119ZnVuY3Rpb24gYW8obix0LHIsZSl7dmFyIHU9bnVsbD09bj8wOm4ubGVuZ3RoO3JldHVybiB1PyhyJiZcIm51bWJlclwiIT10eXBlb2YgciYmTGkobix0LHIpJiYocj0wLGU9dSksUXIobix0LHIsZSkpOltdfWZ1bmN0aW9uIGxvKG4sdCxyKXt2YXIgZT1udWxsPT1uPzA6bi5sZW5ndGg7aWYoIWUpcmV0dXJuLTE7dmFyIHU9bnVsbD09cj8wOmpjKHIpO1xucmV0dXJuIHU8MCYmKHU9S2woZSt1LDApKSxnKG4sYmkodCwzKSx1KX1mdW5jdGlvbiBzbyhuLHQscil7dmFyIGU9bnVsbD09bj8wOm4ubGVuZ3RoO2lmKCFlKXJldHVybi0xO3ZhciB1PWUtMTtyZXR1cm4gciE9PVkmJih1PWpjKHIpLHU9cjwwP0tsKGUrdSwwKTpWbCh1LGUtMSkpLGcobixiaSh0LDMpLHUsITApfWZ1bmN0aW9uIGhvKG4pe3JldHVybihudWxsPT1uPzA6bi5sZW5ndGgpP3RlKG4sMSk6W119ZnVuY3Rpb24gcG8obil7cmV0dXJuKG51bGw9PW4/MDpuLmxlbmd0aCk/dGUobixSbik6W119ZnVuY3Rpb24gX28obix0KXtyZXR1cm4obnVsbD09bj8wOm4ubGVuZ3RoKT8odD10PT09WT8xOmpjKHQpLHRlKG4sdCkpOltdfWZ1bmN0aW9uIHZvKG4pe2Zvcih2YXIgdD0tMSxyPW51bGw9PW4/MDpuLmxlbmd0aCxlPXt9OysrdDxyOyl7dmFyIHU9blt0XTtlW3VbMF1dPXVbMV19cmV0dXJuIGV9ZnVuY3Rpb24gZ28obil7cmV0dXJuIG4mJm4ubGVuZ3RoP25bMF06WX1mdW5jdGlvbiB5byhuLHQscil7XG52YXIgZT1udWxsPT1uPzA6bi5sZW5ndGg7aWYoIWUpcmV0dXJuLTE7dmFyIHU9bnVsbD09cj8wOmpjKHIpO3JldHVybiB1PDAmJih1PUtsKGUrdSwwKSkseShuLHQsdSl9ZnVuY3Rpb24gYm8obil7cmV0dXJuKG51bGw9PW4/MDpuLmxlbmd0aCk/ZnUobiwwLC0xKTpbXX1mdW5jdGlvbiB3byhuLHQpe3JldHVybiBudWxsPT1uP1wiXCI6cWwuY2FsbChuLHQpfWZ1bmN0aW9uIG1vKG4pe3ZhciB0PW51bGw9PW4/MDpuLmxlbmd0aDtyZXR1cm4gdD9uW3QtMV06WX1mdW5jdGlvbiB4byhuLHQscil7dmFyIGU9bnVsbD09bj8wOm4ubGVuZ3RoO2lmKCFlKXJldHVybi0xO3ZhciB1PWU7cmV0dXJuIHIhPT1ZJiYodT1qYyhyKSx1PXU8MD9LbChlK3UsMCk6VmwodSxlLTEpKSx0PT09dD9aKG4sdCx1KTpnKG4sYix1LCEwKX1mdW5jdGlvbiBqbyhuLHQpe3JldHVybiBuJiZuLmxlbmd0aD9LZShuLGpjKHQpKTpZfWZ1bmN0aW9uIEFvKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoJiZ0JiZ0Lmxlbmd0aD9ZZShuLHQpOm47XG59ZnVuY3Rpb24ga28obix0LHIpe3JldHVybiBuJiZuLmxlbmd0aCYmdCYmdC5sZW5ndGg/WWUobix0LGJpKHIsMikpOm59ZnVuY3Rpb24gT28obix0LHIpe3JldHVybiBuJiZuLmxlbmd0aCYmdCYmdC5sZW5ndGg/WWUobix0LFkscik6bn1mdW5jdGlvbiBJbyhuLHQpe3ZhciByPVtdO2lmKCFufHwhbi5sZW5ndGgpcmV0dXJuIHI7dmFyIGU9LTEsdT1bXSxpPW4ubGVuZ3RoO2Zvcih0PWJpKHQsMyk7KytlPGk7KXt2YXIgbz1uW2VdO3QobyxlLG4pJiYoci5wdXNoKG8pLHUucHVzaChlKSl9cmV0dXJuIFFlKG4sdSkscn1mdW5jdGlvbiBSbyhuKXtyZXR1cm4gbnVsbD09bj9uOllsLmNhbGwobil9ZnVuY3Rpb24gem8obix0LHIpe3ZhciBlPW51bGw9PW4/MDpuLmxlbmd0aDtyZXR1cm4gZT8ociYmXCJudW1iZXJcIiE9dHlwZW9mIHImJkxpKG4sdCxyKT8odD0wLHI9ZSk6KHQ9bnVsbD09dD8wOmpjKHQpLHI9cj09PVk/ZTpqYyhyKSksZnUobix0LHIpKTpbXX1mdW5jdGlvbiBFbyhuLHQpe1xucmV0dXJuIGF1KG4sdCl9ZnVuY3Rpb24gU28obix0LHIpe3JldHVybiBsdShuLHQsYmkociwyKSl9ZnVuY3Rpb24gV28obix0KXt2YXIgcj1udWxsPT1uPzA6bi5sZW5ndGg7aWYocil7dmFyIGU9YXUobix0KTtpZihlPHImJktmKG5bZV0sdCkpcmV0dXJuIGV9cmV0dXJuLTF9ZnVuY3Rpb24gTG8obix0KXtyZXR1cm4gYXUobix0LCEwKX1mdW5jdGlvbiBDbyhuLHQscil7cmV0dXJuIGx1KG4sdCxiaShyLDIpLCEwKX1mdW5jdGlvbiBVbyhuLHQpe2lmKG51bGw9PW4/MDpuLmxlbmd0aCl7dmFyIHI9YXUobix0LCEwKS0xO2lmKEtmKG5bcl0sdCkpcmV0dXJuIHJ9cmV0dXJuLTF9ZnVuY3Rpb24gQm8obil7cmV0dXJuIG4mJm4ubGVuZ3RoP3N1KG4pOltdfWZ1bmN0aW9uIFRvKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP3N1KG4sYmkodCwyKSk6W119ZnVuY3Rpb24gJG8obil7dmFyIHQ9bnVsbD09bj8wOm4ubGVuZ3RoO3JldHVybiB0P2Z1KG4sMSx0KTpbXX1mdW5jdGlvbiBEbyhuLHQscil7XG5yZXR1cm4gbiYmbi5sZW5ndGg/KHQ9cnx8dD09PVk/MTpqYyh0KSxmdShuLDAsdDwwPzA6dCkpOltdfWZ1bmN0aW9uIE1vKG4sdCxyKXt2YXIgZT1udWxsPT1uPzA6bi5sZW5ndGg7cmV0dXJuIGU/KHQ9cnx8dD09PVk/MTpqYyh0KSx0PWUtdCxmdShuLHQ8MD8wOnQsZSkpOltdfWZ1bmN0aW9uIEZvKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP3l1KG4sYmkodCwzKSwhMSwhMCk6W119ZnVuY3Rpb24gTm8obix0KXtyZXR1cm4gbiYmbi5sZW5ndGg/eXUobixiaSh0LDMpKTpbXX1mdW5jdGlvbiBQbyhuKXtyZXR1cm4gbiYmbi5sZW5ndGg/X3Uobik6W119ZnVuY3Rpb24gcW8obix0KXtyZXR1cm4gbiYmbi5sZW5ndGg/X3UobixiaSh0LDIpKTpbXX1mdW5jdGlvbiBabyhuLHQpe3JldHVybiB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpZLG4mJm4ubGVuZ3RoP191KG4sWSx0KTpbXX1mdW5jdGlvbiBLbyhuKXtpZighbnx8IW4ubGVuZ3RoKXJldHVybltdO3ZhciB0PTA7cmV0dXJuIG49aShuLGZ1bmN0aW9uKG4pe1xuaWYoR2YobikpcmV0dXJuIHQ9S2wobi5sZW5ndGgsdCksITB9KSxPKHQsZnVuY3Rpb24odCl7cmV0dXJuIGMobixtKHQpKX0pfWZ1bmN0aW9uIFZvKHQscil7aWYoIXR8fCF0Lmxlbmd0aClyZXR1cm5bXTt2YXIgZT1Lbyh0KTtyZXR1cm4gbnVsbD09cj9lOmMoZSxmdW5jdGlvbih0KXtyZXR1cm4gbihyLFksdCl9KX1mdW5jdGlvbiBHbyhuLHQpe3JldHVybiB3dShufHxbXSx0fHxbXSx6cil9ZnVuY3Rpb24gSG8obix0KXtyZXR1cm4gd3Uobnx8W10sdHx8W10saXUpfWZ1bmN0aW9uIEpvKG4pe3ZhciB0PXEobik7cmV0dXJuIHQuX19jaGFpbl9fPSEwLHR9ZnVuY3Rpb24gWW8obix0KXtyZXR1cm4gdChuKSxufWZ1bmN0aW9uIFFvKG4sdCl7cmV0dXJuIHQobil9ZnVuY3Rpb24gWG8oKXtyZXR1cm4gSm8odGhpcyl9ZnVuY3Rpb24gbmYoKXtyZXR1cm4gbmV3IEgodGhpcy52YWx1ZSgpLHRoaXMuX19jaGFpbl9fKX1mdW5jdGlvbiB0Zigpe3RoaXMuX192YWx1ZXNfXz09PVkmJih0aGlzLl9fdmFsdWVzX189bWModGhpcy52YWx1ZSgpKSk7XG52YXIgbj10aGlzLl9faW5kZXhfXz49dGhpcy5fX3ZhbHVlc19fLmxlbmd0aDtyZXR1cm57ZG9uZTpuLHZhbHVlOm4/WTp0aGlzLl9fdmFsdWVzX19bdGhpcy5fX2luZGV4X18rK119fWZ1bmN0aW9uIHJmKCl7cmV0dXJuIHRoaXN9ZnVuY3Rpb24gZWYobil7Zm9yKHZhciB0LHI9dGhpcztyIGluc3RhbmNlb2YgRzspe3ZhciBlPXRvKHIpO2UuX19pbmRleF9fPTAsZS5fX3ZhbHVlc19fPVksdD91Ll9fd3JhcHBlZF9fPWU6dD1lO3ZhciB1PWU7cj1yLl9fd3JhcHBlZF9ffXJldHVybiB1Ll9fd3JhcHBlZF9fPW4sdH1mdW5jdGlvbiB1Zigpe3ZhciBuPXRoaXMuX193cmFwcGVkX187aWYobiBpbnN0YW5jZW9mIEJ0KXt2YXIgdD1uO3JldHVybiB0aGlzLl9fYWN0aW9uc19fLmxlbmd0aCYmKHQ9bmV3IEJ0KHRoaXMpKSx0PXQucmV2ZXJzZSgpLHQuX19hY3Rpb25zX18ucHVzaCh7ZnVuYzpRbyxhcmdzOltSb10sdGhpc0FyZzpZfSksbmV3IEgodCx0aGlzLl9fY2hhaW5fXyl9cmV0dXJuIHRoaXMudGhydShSbyk7XG59ZnVuY3Rpb24gb2YoKXtyZXR1cm4gZHUodGhpcy5fX3dyYXBwZWRfXyx0aGlzLl9fYWN0aW9uc19fKX1mdW5jdGlvbiBmZihuLHQscil7dmFyIGU9eWgobik/dTpHcjtyZXR1cm4gciYmTGkobix0LHIpJiYodD1ZKSxlKG4sYmkodCwzKSl9ZnVuY3Rpb24gY2Yobix0KXtyZXR1cm4oeWgobik/aTpuZSkobixiaSh0LDMpKX1mdW5jdGlvbiBhZihuLHQpe3JldHVybiB0ZSh2ZihuLHQpLDEpfWZ1bmN0aW9uIGxmKG4sdCl7cmV0dXJuIHRlKHZmKG4sdCksUm4pfWZ1bmN0aW9uIHNmKG4sdCxyKXtyZXR1cm4gcj1yPT09WT8xOmpjKHIpLHRlKHZmKG4sdCkscil9ZnVuY3Rpb24gaGYobix0KXtyZXR1cm4oeWgobik/cjp2cykobixiaSh0LDMpKX1mdW5jdGlvbiBwZihuLHQpe3JldHVybih5aChuKT9lOmdzKShuLGJpKHQsMykpfWZ1bmN0aW9uIF9mKG4sdCxyLGUpe249VmYobik/bjpuYShuKSxyPXImJiFlP2pjKHIpOjA7dmFyIHU9bi5sZW5ndGg7cmV0dXJuIHI8MCYmKHI9S2wodStyLDApKSxcbmdjKG4pP3I8PXUmJm4uaW5kZXhPZih0LHIpPi0xOiEhdSYmeShuLHQscik+LTF9ZnVuY3Rpb24gdmYobix0KXtyZXR1cm4oeWgobik/YzpGZSkobixiaSh0LDMpKX1mdW5jdGlvbiBnZihuLHQscixlKXtyZXR1cm4gbnVsbD09bj9bXTooeWgodCl8fCh0PW51bGw9PXQ/W106W3RdKSxyPWU/WTpyLHloKHIpfHwocj1udWxsPT1yP1tdOltyXSksVmUobix0LHIpKX1mdW5jdGlvbiB5ZihuLHQscil7dmFyIGU9eWgobik/bDpqLHU9YXJndW1lbnRzLmxlbmd0aDwzO3JldHVybiBlKG4sYmkodCw0KSxyLHUsdnMpfWZ1bmN0aW9uIGRmKG4sdCxyKXt2YXIgZT15aChuKT9zOmosdT1hcmd1bWVudHMubGVuZ3RoPDM7cmV0dXJuIGUobixiaSh0LDQpLHIsdSxncyl9ZnVuY3Rpb24gYmYobix0KXtyZXR1cm4oeWgobik/aTpuZSkobixMZihiaSh0LDMpKSl9ZnVuY3Rpb24gd2Yobil7cmV0dXJuKHloKG4pP2tyOmV1KShuKX1mdW5jdGlvbiBtZihuLHQscil7cmV0dXJuIHQ9KHI/TGkobix0LHIpOnQ9PT1ZKT8xOmpjKHQpLFxuKHloKG4pP09yOnV1KShuLHQpfWZ1bmN0aW9uIHhmKG4pe3JldHVybih5aChuKT9JcjpvdSkobil9ZnVuY3Rpb24gamYobil7aWYobnVsbD09bilyZXR1cm4gMDtpZihWZihuKSlyZXR1cm4gZ2Mobik/SyhuKTpuLmxlbmd0aDt2YXIgdD1JcyhuKTtyZXR1cm4gdD09Wm58fHQ9PVFuP24uc2l6ZTokZShuKS5sZW5ndGh9ZnVuY3Rpb24gQWYobix0LHIpe3ZhciBlPXloKG4pP2g6Y3U7cmV0dXJuIHImJkxpKG4sdCxyKSYmKHQ9WSksZShuLGJpKHQsMykpfWZ1bmN0aW9uIGtmKG4sdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgc2wodG4pO3JldHVybiBuPWpjKG4pLGZ1bmN0aW9uKCl7aWYoLS1uPDEpcmV0dXJuIHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfX1mdW5jdGlvbiBPZihuLHQscil7cmV0dXJuIHQ9cj9ZOnQsdD1uJiZudWxsPT10P24ubGVuZ3RoOnQsZmkobixkbixZLFksWSxZLHQpfWZ1bmN0aW9uIElmKG4sdCl7dmFyIHI7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgc2wodG4pO1xucmV0dXJuIG49amMobiksZnVuY3Rpb24oKXtyZXR1cm4tLW4+MCYmKHI9dC5hcHBseSh0aGlzLGFyZ3VtZW50cykpLG48PTEmJih0PVkpLHJ9fWZ1bmN0aW9uIFJmKG4sdCxyKXt0PXI/WTp0O3ZhciBlPWZpKG4sX24sWSxZLFksWSxZLHQpO3JldHVybiBlLnBsYWNlaG9sZGVyPVJmLnBsYWNlaG9sZGVyLGV9ZnVuY3Rpb24gemYobix0LHIpe3Q9cj9ZOnQ7dmFyIGU9Zmkobix2bixZLFksWSxZLFksdCk7cmV0dXJuIGUucGxhY2Vob2xkZXI9emYucGxhY2Vob2xkZXIsZX1mdW5jdGlvbiBFZihuLHQscil7ZnVuY3Rpb24gZSh0KXt2YXIgcj1oLGU9cDtyZXR1cm4gaD1wPVksZD10LHY9bi5hcHBseShlLHIpfWZ1bmN0aW9uIHUobil7cmV0dXJuIGQ9bixnPUVzKGYsdCksYj9lKG4pOnZ9ZnVuY3Rpb24gaShuKXt2YXIgcj1uLXksZT1uLWQsdT10LXI7cmV0dXJuIHc/VmwodSxfLWUpOnV9ZnVuY3Rpb24gbyhuKXt2YXIgcj1uLXksZT1uLWQ7cmV0dXJuIHk9PT1ZfHxyPj10fHxyPDB8fHcmJmU+PV87XG59ZnVuY3Rpb24gZigpe3ZhciBuPWloKCk7cmV0dXJuIG8obik/YyhuKTooZz1FcyhmLGkobikpLFkpfWZ1bmN0aW9uIGMobil7cmV0dXJuIGc9WSxtJiZoP2Uobik6KGg9cD1ZLHYpfWZ1bmN0aW9uIGEoKXtnIT09WSYmeHMoZyksZD0wLGg9eT1wPWc9WX1mdW5jdGlvbiBsKCl7cmV0dXJuIGc9PT1ZP3Y6YyhpaCgpKX1mdW5jdGlvbiBzKCl7dmFyIG49aWgoKSxyPW8obik7aWYoaD1hcmd1bWVudHMscD10aGlzLHk9bixyKXtpZihnPT09WSlyZXR1cm4gdSh5KTtpZih3KXJldHVybiB4cyhnKSxnPUVzKGYsdCksZSh5KX1yZXR1cm4gZz09PVkmJihnPUVzKGYsdCkpLHZ9dmFyIGgscCxfLHYsZyx5LGQ9MCxiPSExLHc9ITEsbT0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBuKXRocm93IG5ldyBzbCh0bik7cmV0dXJuIHQ9a2ModCl8fDAsaWMocikmJihiPSEhci5sZWFkaW5nLHc9XCJtYXhXYWl0XCJpbiByLF89dz9LbChrYyhyLm1heFdhaXQpfHwwLHQpOl8sbT1cInRyYWlsaW5nXCJpbiByPyEhci50cmFpbGluZzptKSxcbnMuY2FuY2VsPWEscy5mbHVzaD1sLHN9ZnVuY3Rpb24gU2Yobil7cmV0dXJuIGZpKG4sd24pfWZ1bmN0aW9uIFdmKG4sdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbnx8bnVsbCE9dCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgc2wodG4pO3ZhciByPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLHU9dD90LmFwcGx5KHRoaXMsZSk6ZVswXSxpPXIuY2FjaGU7aWYoaS5oYXModSkpcmV0dXJuIGkuZ2V0KHUpO3ZhciBvPW4uYXBwbHkodGhpcyxlKTtyZXR1cm4gci5jYWNoZT1pLnNldCh1LG8pfHxpLG99O3JldHVybiByLmNhY2hlPW5ldyhXZi5DYWNoZXx8YXIpLHJ9ZnVuY3Rpb24gTGYobil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbil0aHJvdyBuZXcgc2wodG4pO3JldHVybiBmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cztzd2l0Y2godC5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4hbi5jYWxsKHRoaXMpO2Nhc2UgMTpyZXR1cm4hbi5jYWxsKHRoaXMsdFswXSk7Y2FzZSAyOlxucmV0dXJuIW4uY2FsbCh0aGlzLHRbMF0sdFsxXSk7Y2FzZSAzOnJldHVybiFuLmNhbGwodGhpcyx0WzBdLHRbMV0sdFsyXSl9cmV0dXJuIW4uYXBwbHkodGhpcyx0KX19ZnVuY3Rpb24gQ2Yobil7cmV0dXJuIElmKDIsbil9ZnVuY3Rpb24gVWYobix0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBuKXRocm93IG5ldyBzbCh0bik7cmV0dXJuIHQ9dD09PVk/dDpqYyh0KSxydShuLHQpfWZ1bmN0aW9uIEJmKHQscil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgc2wodG4pO3JldHVybiByPW51bGw9PXI/MDpLbChqYyhyKSwwKSxydShmdW5jdGlvbihlKXt2YXIgdT1lW3JdLGk9QXUoZSwwLHIpO3JldHVybiB1JiZhKGksdSksbih0LHRoaXMsaSl9KX1mdW5jdGlvbiBUZihuLHQscil7dmFyIGU9ITAsdT0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBuKXRocm93IG5ldyBzbCh0bik7cmV0dXJuIGljKHIpJiYoZT1cImxlYWRpbmdcImluIHI/ISFyLmxlYWRpbmc6ZSx1PVwidHJhaWxpbmdcImluIHI/ISFyLnRyYWlsaW5nOnUpLFxuRWYobix0LHtsZWFkaW5nOmUsbWF4V2FpdDp0LHRyYWlsaW5nOnV9KX1mdW5jdGlvbiAkZihuKXtyZXR1cm4gT2YobiwxKX1mdW5jdGlvbiBEZihuLHQpe3JldHVybiBzaCh4dSh0KSxuKX1mdW5jdGlvbiBNZigpe2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybltdO3ZhciBuPWFyZ3VtZW50c1swXTtyZXR1cm4geWgobik/bjpbbl19ZnVuY3Rpb24gRmYobil7cmV0dXJuIERyKG4sY24pfWZ1bmN0aW9uIE5mKG4sdCl7cmV0dXJuIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OlksRHIobixjbix0KX1mdW5jdGlvbiBQZihuKXtyZXR1cm4gRHIobixvbnxjbil9ZnVuY3Rpb24gcWYobix0KXtyZXR1cm4gdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6WSxEcihuLG9ufGNuLHQpfWZ1bmN0aW9uIFpmKG4sdCl7cmV0dXJuIG51bGw9PXR8fFpyKG4sdCxGYyh0KSl9ZnVuY3Rpb24gS2Yobix0KXtyZXR1cm4gbj09PXR8fG4hPT1uJiZ0IT09dH1mdW5jdGlvbiBWZihuKXtyZXR1cm4gbnVsbCE9biYmdWMobi5sZW5ndGgpJiYhcmMobik7XG59ZnVuY3Rpb24gR2Yobil7cmV0dXJuIG9jKG4pJiZWZihuKX1mdW5jdGlvbiBIZihuKXtyZXR1cm4gbj09PSEwfHxuPT09ITF8fG9jKG4pJiZkZShuKT09RG59ZnVuY3Rpb24gSmYobil7cmV0dXJuIG9jKG4pJiYxPT09bi5ub2RlVHlwZSYmIV9jKG4pfWZ1bmN0aW9uIFlmKG4pe2lmKG51bGw9PW4pcmV0dXJuITA7aWYoVmYobikmJih5aChuKXx8XCJzdHJpbmdcIj09dHlwZW9mIG58fFwiZnVuY3Rpb25cIj09dHlwZW9mIG4uc3BsaWNlfHxiaChuKXx8QWgobil8fGdoKG4pKSlyZXR1cm4hbi5sZW5ndGg7dmFyIHQ9SXMobik7aWYodD09Wm58fHQ9PVFuKXJldHVybiFuLnNpemU7aWYoJGkobikpcmV0dXJuISRlKG4pLmxlbmd0aDtmb3IodmFyIHIgaW4gbilpZih5bC5jYWxsKG4scikpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gUWYobix0KXtyZXR1cm4gemUobix0KX1mdW5jdGlvbiBYZihuLHQscil7cj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByP3I6WTt2YXIgZT1yP3Iobix0KTpZO3JldHVybiBlPT09WT96ZShuLHQsWSxyKTohIWU7XG59ZnVuY3Rpb24gbmMobil7aWYoIW9jKG4pKXJldHVybiExO3ZhciB0PWRlKG4pO3JldHVybiB0PT1Obnx8dD09Rm58fFwic3RyaW5nXCI9PXR5cGVvZiBuLm1lc3NhZ2UmJlwic3RyaW5nXCI9PXR5cGVvZiBuLm5hbWUmJiFfYyhuKX1mdW5jdGlvbiB0YyhuKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgbiYmUGwobil9ZnVuY3Rpb24gcmMobil7aWYoIWljKG4pKXJldHVybiExO3ZhciB0PWRlKG4pO3JldHVybiB0PT1Qbnx8dD09cW58fHQ9PSRufHx0PT1Kbn1mdW5jdGlvbiBlYyhuKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgbiYmbj09amMobil9ZnVuY3Rpb24gdWMobil7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIG4mJm4+LTEmJm4lMT09MCYmbjw9em59ZnVuY3Rpb24gaWMobil7dmFyIHQ9dHlwZW9mIG47cmV0dXJuIG51bGwhPW4mJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWZ1bmN0aW9uIG9jKG4pe3JldHVybiBudWxsIT1uJiZcIm9iamVjdFwiPT10eXBlb2Ygbn1mdW5jdGlvbiBmYyhuLHQpe1xucmV0dXJuIG49PT10fHxXZShuLHQsbWkodCkpfWZ1bmN0aW9uIGNjKG4sdCxyKXtyZXR1cm4gcj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByP3I6WSxXZShuLHQsbWkodCkscil9ZnVuY3Rpb24gYWMobil7cmV0dXJuIHBjKG4pJiZuIT0rbn1mdW5jdGlvbiBsYyhuKXtpZihScyhuKSl0aHJvdyBuZXcgaWwobm4pO3JldHVybiBMZShuKX1mdW5jdGlvbiBzYyhuKXtyZXR1cm4gbnVsbD09PW59ZnVuY3Rpb24gaGMobil7cmV0dXJuIG51bGw9PW59ZnVuY3Rpb24gcGMobil7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIG58fG9jKG4pJiZkZShuKT09S259ZnVuY3Rpb24gX2Mobil7aWYoIW9jKG4pfHxkZShuKSE9R24pcmV0dXJuITE7dmFyIHQ9Umwobik7aWYobnVsbD09PXQpcmV0dXJuITA7dmFyIHI9eWwuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3I7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgciYmciBpbnN0YW5jZW9mIHImJmdsLmNhbGwocik9PW1sfWZ1bmN0aW9uIHZjKG4pe1xucmV0dXJuIGVjKG4pJiZuPj0tem4mJm48PXpufWZ1bmN0aW9uIGdjKG4pe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBufHwheWgobikmJm9jKG4pJiZkZShuKT09WG59ZnVuY3Rpb24geWMobil7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIG58fG9jKG4pJiZkZShuKT09bnR9ZnVuY3Rpb24gZGMobil7cmV0dXJuIG49PT1ZfWZ1bmN0aW9uIGJjKG4pe3JldHVybiBvYyhuKSYmSXMobik9PXJ0fWZ1bmN0aW9uIHdjKG4pe3JldHVybiBvYyhuKSYmZGUobik9PWV0fWZ1bmN0aW9uIG1jKG4pe2lmKCFuKXJldHVybltdO2lmKFZmKG4pKXJldHVybiBnYyhuKT9WKG4pOlV1KG4pO2lmKExsJiZuW0xsXSlyZXR1cm4gJChuW0xsXSgpKTt2YXIgdD1JcyhuKTtyZXR1cm4odD09Wm4/RDp0PT1Rbj9OOm5hKShuKX1mdW5jdGlvbiB4YyhuKXtpZighbilyZXR1cm4gMD09PW4/bjowO2lmKG49a2Mobiksbj09PVJufHxuPT09LVJuKXtyZXR1cm4objwwPy0xOjEpKkVufXJldHVybiBuPT09bj9uOjB9ZnVuY3Rpb24gamMobil7XG52YXIgdD14YyhuKSxyPXQlMTtyZXR1cm4gdD09PXQ/cj90LXI6dDowfWZ1bmN0aW9uIEFjKG4pe3JldHVybiBuPyRyKGpjKG4pLDAsV24pOjB9ZnVuY3Rpb24ga2Mobil7aWYoXCJudW1iZXJcIj09dHlwZW9mIG4pcmV0dXJuIG47aWYoeWMobikpcmV0dXJuIFNuO2lmKGljKG4pKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnZhbHVlT2Y/bi52YWx1ZU9mKCk6bjtuPWljKHQpP3QrXCJcIjp0fWlmKFwic3RyaW5nXCIhPXR5cGVvZiBuKXJldHVybiAwPT09bj9uOituO249bi5yZXBsYWNlKEV0LFwiXCIpO3ZhciByPUZ0LnRlc3Qobik7cmV0dXJuIHJ8fFB0LnRlc3Qobik/SnIobi5zbGljZSgyKSxyPzI6OCk6TXQudGVzdChuKT9Tbjorbn1mdW5jdGlvbiBPYyhuKXtyZXR1cm4gQnUobixOYyhuKSl9ZnVuY3Rpb24gSWMobil7cmV0dXJuIG4/JHIoamMobiksLXpuLHpuKTowPT09bj9uOjB9ZnVuY3Rpb24gUmMobil7cmV0dXJuIG51bGw9PW4/XCJcIjpwdShuKX1mdW5jdGlvbiB6YyhuLHQpe3ZhciByPV9zKG4pO1xucmV0dXJuIG51bGw9PXQ/cjpXcihyLHQpfWZ1bmN0aW9uIEVjKG4sdCl7cmV0dXJuIHYobixiaSh0LDMpLGVlKX1mdW5jdGlvbiBTYyhuLHQpe3JldHVybiB2KG4sYmkodCwzKSx1ZSl9ZnVuY3Rpb24gV2Mobix0KXtyZXR1cm4gbnVsbD09bj9uOnlzKG4sYmkodCwzKSxOYyl9ZnVuY3Rpb24gTGMobix0KXtyZXR1cm4gbnVsbD09bj9uOmRzKG4sYmkodCwzKSxOYyl9ZnVuY3Rpb24gQ2Mobix0KXtyZXR1cm4gbiYmZWUobixiaSh0LDMpKX1mdW5jdGlvbiBVYyhuLHQpe3JldHVybiBuJiZ1ZShuLGJpKHQsMykpfWZ1bmN0aW9uIEJjKG4pe3JldHVybiBudWxsPT1uP1tdOnNlKG4sRmMobikpfWZ1bmN0aW9uIFRjKG4pe3JldHVybiBudWxsPT1uP1tdOnNlKG4sTmMobikpfWZ1bmN0aW9uICRjKG4sdCxyKXt2YXIgZT1udWxsPT1uP1k6dmUobix0KTtyZXR1cm4gZT09PVk/cjplfWZ1bmN0aW9uIERjKG4sdCl7cmV0dXJuIG51bGwhPW4mJk9pKG4sdCx3ZSl9ZnVuY3Rpb24gTWMobix0KXtyZXR1cm4gbnVsbCE9biYmT2kobix0LG1lKTtcbn1mdW5jdGlvbiBGYyhuKXtyZXR1cm4gVmYobik/QXIobik6JGUobil9ZnVuY3Rpb24gTmMobil7cmV0dXJuIFZmKG4pP0FyKG4sITApOkRlKG4pfWZ1bmN0aW9uIFBjKG4sdCl7dmFyIHI9e307cmV0dXJuIHQ9YmkodCwzKSxlZShuLGZ1bmN0aW9uKG4sZSx1KXtDcihyLHQobixlLHUpLG4pfSkscn1mdW5jdGlvbiBxYyhuLHQpe3ZhciByPXt9O3JldHVybiB0PWJpKHQsMyksZWUobixmdW5jdGlvbihuLGUsdSl7Q3IocixlLHQobixlLHUpKX0pLHJ9ZnVuY3Rpb24gWmMobix0KXtyZXR1cm4gS2MobixMZihiaSh0KSkpfWZ1bmN0aW9uIEtjKG4sdCl7aWYobnVsbD09bilyZXR1cm57fTt2YXIgcj1jKGdpKG4pLGZ1bmN0aW9uKG4pe3JldHVybltuXX0pO3JldHVybiB0PWJpKHQpLEhlKG4scixmdW5jdGlvbihuLHIpe3JldHVybiB0KG4sclswXSl9KX1mdW5jdGlvbiBWYyhuLHQscil7dD1qdSh0LG4pO3ZhciBlPS0xLHU9dC5sZW5ndGg7Zm9yKHV8fCh1PTEsbj1ZKTsrK2U8dTspe3ZhciBpPW51bGw9PW4/WTpuW1FpKHRbZV0pXTtcbmk9PT1ZJiYoZT11LGk9ciksbj1yYyhpKT9pLmNhbGwobik6aX1yZXR1cm4gbn1mdW5jdGlvbiBHYyhuLHQscil7cmV0dXJuIG51bGw9PW4/bjppdShuLHQscil9ZnVuY3Rpb24gSGMobix0LHIsZSl7cmV0dXJuIGU9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOlksbnVsbD09bj9uOml1KG4sdCxyLGUpfWZ1bmN0aW9uIEpjKG4sdCxlKXt2YXIgdT15aChuKSxpPXV8fGJoKG4pfHxBaChuKTtpZih0PWJpKHQsNCksbnVsbD09ZSl7dmFyIG89biYmbi5jb25zdHJ1Y3RvcjtlPWk/dT9uZXcgbzpbXTppYyhuKSYmcmMobyk/X3MoUmwobikpOnt9fXJldHVybihpP3I6ZWUpKG4sZnVuY3Rpb24obixyLHUpe3JldHVybiB0KGUsbixyLHUpfSksZX1mdW5jdGlvbiBZYyhuLHQpe3JldHVybiBudWxsPT1ufHx2dShuLHQpfWZ1bmN0aW9uIFFjKG4sdCxyKXtyZXR1cm4gbnVsbD09bj9uOmd1KG4sdCx4dShyKSl9ZnVuY3Rpb24gWGMobix0LHIsZSl7cmV0dXJuIGU9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOlksXG5udWxsPT1uP246Z3Uobix0LHh1KHIpLGUpfWZ1bmN0aW9uIG5hKG4pe3JldHVybiBudWxsPT1uP1tdOnoobixGYyhuKSl9ZnVuY3Rpb24gdGEobil7cmV0dXJuIG51bGw9PW4/W106eihuLE5jKG4pKX1mdW5jdGlvbiByYShuLHQscil7cmV0dXJuIHI9PT1ZJiYocj10LHQ9WSksciE9PVkmJihyPWtjKHIpLHI9cj09PXI/cjowKSx0IT09WSYmKHQ9a2ModCksdD10PT09dD90OjApLCRyKGtjKG4pLHQscil9ZnVuY3Rpb24gZWEobix0LHIpe3JldHVybiB0PXhjKHQpLHI9PT1ZPyhyPXQsdD0wKTpyPXhjKHIpLG49a2MobikseGUobix0LHIpfWZ1bmN0aW9uIHVhKG4sdCxyKXtpZihyJiZcImJvb2xlYW5cIiE9dHlwZW9mIHImJkxpKG4sdCxyKSYmKHQ9cj1ZKSxyPT09WSYmKFwiYm9vbGVhblwiPT10eXBlb2YgdD8ocj10LHQ9WSk6XCJib29sZWFuXCI9PXR5cGVvZiBuJiYocj1uLG49WSkpLG49PT1ZJiZ0PT09WT8obj0wLHQ9MSk6KG49eGMobiksdD09PVk/KHQ9bixuPTApOnQ9eGModCkpLG4+dCl7XG52YXIgZT1uO249dCx0PWV9aWYocnx8biUxfHx0JTEpe3ZhciB1PUpsKCk7cmV0dXJuIFZsKG4rdSoodC1uK0hyKFwiMWUtXCIrKCh1K1wiXCIpLmxlbmd0aC0xKSkpLHQpfXJldHVybiBYZShuLHQpfWZ1bmN0aW9uIGlhKG4pe3JldHVybiBKaChSYyhuKS50b0xvd2VyQ2FzZSgpKX1mdW5jdGlvbiBvYShuKXtyZXR1cm4gbj1SYyhuKSxuJiZuLnJlcGxhY2UoWnQsaGUpLnJlcGxhY2UoQnIsXCJcIil9ZnVuY3Rpb24gZmEobix0LHIpe249UmMobiksdD1wdSh0KTt2YXIgZT1uLmxlbmd0aDtyPXI9PT1ZP2U6JHIoamMociksMCxlKTt2YXIgdT1yO3JldHVybiByLT10Lmxlbmd0aCxyPj0wJiZuLnNsaWNlKHIsdSk9PXR9ZnVuY3Rpb24gY2Eobil7cmV0dXJuIG49UmMobiksbiYmbXQudGVzdChuKT9uLnJlcGxhY2UoYnQscGUpOm59ZnVuY3Rpb24gYWEobil7cmV0dXJuIG49UmMobiksbiYmenQudGVzdChuKT9uLnJlcGxhY2UoUnQsXCJcXFxcJCZcIik6bn1mdW5jdGlvbiBsYShuLHQscil7bj1SYyhuKSx0PWpjKHQpO1xudmFyIGU9dD9LKG4pOjA7aWYoIXR8fGU+PXQpcmV0dXJuIG47dmFyIHU9KHQtZSkvMjtyZXR1cm4gbmkoTWwodSkscikrbituaShEbCh1KSxyKX1mdW5jdGlvbiBzYShuLHQscil7bj1SYyhuKSx0PWpjKHQpO3ZhciBlPXQ/SyhuKTowO3JldHVybiB0JiZlPHQ/bituaSh0LWUscik6bn1mdW5jdGlvbiBoYShuLHQscil7bj1SYyhuKSx0PWpjKHQpO3ZhciBlPXQ/SyhuKTowO3JldHVybiB0JiZlPHQ/bmkodC1lLHIpK246bn1mdW5jdGlvbiBwYShuLHQscil7cmV0dXJuIHJ8fG51bGw9PXQ/dD0wOnQmJih0PSt0KSxIbChSYyhuKS5yZXBsYWNlKFN0LFwiXCIpLHR8fDApfWZ1bmN0aW9uIF9hKG4sdCxyKXtyZXR1cm4gdD0ocj9MaShuLHQscik6dD09PVkpPzE6amModCksdHUoUmMobiksdCl9ZnVuY3Rpb24gdmEoKXt2YXIgbj1hcmd1bWVudHMsdD1SYyhuWzBdKTtyZXR1cm4gbi5sZW5ndGg8Mz90OnQucmVwbGFjZShuWzFdLG5bMl0pfWZ1bmN0aW9uIGdhKG4sdCxyKXtyZXR1cm4gciYmXCJudW1iZXJcIiE9dHlwZW9mIHImJkxpKG4sdCxyKSYmKHQ9cj1ZKSxcbihyPXI9PT1ZP1duOnI+Pj4wKT8obj1SYyhuKSxuJiYoXCJzdHJpbmdcIj09dHlwZW9mIHR8fG51bGwhPXQmJiF4aCh0KSkmJih0PXB1KHQpLCF0JiZCKG4pKT9BdShWKG4pLDAscik6bi5zcGxpdCh0LHIpKTpbXX1mdW5jdGlvbiB5YShuLHQscil7cmV0dXJuIG49UmMobikscj1udWxsPT1yPzA6JHIoamMociksMCxuLmxlbmd0aCksdD1wdSh0KSxuLnNsaWNlKHIscit0Lmxlbmd0aCk9PXR9ZnVuY3Rpb24gZGEobix0LHIpe3ZhciBlPXEudGVtcGxhdGVTZXR0aW5ncztyJiZMaShuLHQscikmJih0PVkpLG49UmMobiksdD16aCh7fSx0LGUsY2kpO3ZhciB1LGksbz16aCh7fSx0LmltcG9ydHMsZS5pbXBvcnRzLGNpKSxmPUZjKG8pLGM9eihvLGYpLGE9MCxsPXQuaW50ZXJwb2xhdGV8fEt0LHM9XCJfX3AgKz0gJ1wiLGg9YWwoKHQuZXNjYXBlfHxLdCkuc291cmNlK1wifFwiK2wuc291cmNlK1wifFwiKyhsPT09QXQ/JHQ6S3QpLnNvdXJjZStcInxcIisodC5ldmFsdWF0ZXx8S3QpLnNvdXJjZStcInwkXCIsXCJnXCIpLHA9XCIvLyMgc291cmNlVVJMPVwiKyh5bC5jYWxsKHQsXCJzb3VyY2VVUkxcIik/KHQuc291cmNlVVJMK1wiXCIpLnJlcGxhY2UoL1xccy9nLFwiIFwiKTpcImxvZGFzaC50ZW1wbGF0ZVNvdXJjZXNbXCIrICsrTnIrXCJdXCIpK1wiXFxuXCI7XG5uLnJlcGxhY2UoaCxmdW5jdGlvbih0LHIsZSxvLGYsYyl7cmV0dXJuIGV8fChlPW8pLHMrPW4uc2xpY2UoYSxjKS5yZXBsYWNlKFZ0LEMpLHImJih1PSEwLHMrPVwiJyArXFxuX19lKFwiK3IrXCIpICtcXG4nXCIpLGYmJihpPSEwLHMrPVwiJztcXG5cIitmK1wiO1xcbl9fcCArPSAnXCIpLGUmJihzKz1cIicgK1xcbigoX190ID0gKFwiK2UrXCIpKSA9PSBudWxsID8gJycgOiBfX3QpICtcXG4nXCIpLGE9Yyt0Lmxlbmd0aCx0fSkscys9XCInO1xcblwiO3ZhciBfPXlsLmNhbGwodCxcInZhcmlhYmxlXCIpJiZ0LnZhcmlhYmxlO198fChzPVwid2l0aCAob2JqKSB7XFxuXCIrcytcIlxcbn1cXG5cIikscz0oaT9zLnJlcGxhY2UodnQsXCJcIik6cykucmVwbGFjZShndCxcIiQxXCIpLnJlcGxhY2UoeXQsXCIkMTtcIikscz1cImZ1bmN0aW9uKFwiKyhffHxcIm9ialwiKStcIikge1xcblwiKyhfP1wiXCI6XCJvYmogfHwgKG9iaiA9IHt9KTtcXG5cIikrXCJ2YXIgX190LCBfX3AgPSAnJ1wiKyh1P1wiLCBfX2UgPSBfLmVzY2FwZVwiOlwiXCIpKyhpP1wiLCBfX2ogPSBBcnJheS5wcm90b3R5cGUuam9pbjtcXG5mdW5jdGlvbiBwcmludCgpIHsgX19wICs9IF9fai5jYWxsKGFyZ3VtZW50cywgJycpIH1cXG5cIjpcIjtcXG5cIikrcytcInJldHVybiBfX3BcXG59XCI7XG52YXIgdj1ZaChmdW5jdGlvbigpe3JldHVybiBvbChmLHArXCJyZXR1cm4gXCIrcykuYXBwbHkoWSxjKX0pO2lmKHYuc291cmNlPXMsbmModikpdGhyb3cgdjtyZXR1cm4gdn1mdW5jdGlvbiBiYShuKXtyZXR1cm4gUmMobikudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiB3YShuKXtyZXR1cm4gUmMobikudG9VcHBlckNhc2UoKX1mdW5jdGlvbiBtYShuLHQscil7aWYobj1SYyhuKSxuJiYocnx8dD09PVkpKXJldHVybiBuLnJlcGxhY2UoRXQsXCJcIik7aWYoIW58fCEodD1wdSh0KSkpcmV0dXJuIG47dmFyIGU9VihuKSx1PVYodCk7cmV0dXJuIEF1KGUsUyhlLHUpLFcoZSx1KSsxKS5qb2luKFwiXCIpfWZ1bmN0aW9uIHhhKG4sdCxyKXtpZihuPVJjKG4pLG4mJihyfHx0PT09WSkpcmV0dXJuIG4ucmVwbGFjZShXdCxcIlwiKTtpZighbnx8ISh0PXB1KHQpKSlyZXR1cm4gbjt2YXIgZT1WKG4pO3JldHVybiBBdShlLDAsVyhlLFYodCkpKzEpLmpvaW4oXCJcIil9ZnVuY3Rpb24gamEobix0LHIpe2lmKG49UmMobiksXG5uJiYocnx8dD09PVkpKXJldHVybiBuLnJlcGxhY2UoU3QsXCJcIik7aWYoIW58fCEodD1wdSh0KSkpcmV0dXJuIG47dmFyIGU9VihuKTtyZXR1cm4gQXUoZSxTKGUsVih0KSkpLmpvaW4oXCJcIil9ZnVuY3Rpb24gQWEobix0KXt2YXIgcj1tbixlPXhuO2lmKGljKHQpKXt2YXIgdT1cInNlcGFyYXRvclwiaW4gdD90LnNlcGFyYXRvcjp1O3I9XCJsZW5ndGhcImluIHQ/amModC5sZW5ndGgpOnIsZT1cIm9taXNzaW9uXCJpbiB0P3B1KHQub21pc3Npb24pOmV9bj1SYyhuKTt2YXIgaT1uLmxlbmd0aDtpZihCKG4pKXt2YXIgbz1WKG4pO2k9by5sZW5ndGh9aWYocj49aSlyZXR1cm4gbjt2YXIgZj1yLUsoZSk7aWYoZjwxKXJldHVybiBlO3ZhciBjPW8/QXUobywwLGYpLmpvaW4oXCJcIik6bi5zbGljZSgwLGYpO2lmKHU9PT1ZKXJldHVybiBjK2U7aWYobyYmKGYrPWMubGVuZ3RoLWYpLHhoKHUpKXtpZihuLnNsaWNlKGYpLnNlYXJjaCh1KSl7dmFyIGEsbD1jO2Zvcih1Lmdsb2JhbHx8KHU9YWwodS5zb3VyY2UsUmMoRHQuZXhlYyh1KSkrXCJnXCIpKSxcbnUubGFzdEluZGV4PTA7YT11LmV4ZWMobCk7KXZhciBzPWEuaW5kZXg7Yz1jLnNsaWNlKDAscz09PVk/ZjpzKX19ZWxzZSBpZihuLmluZGV4T2YocHUodSksZikhPWYpe3ZhciBoPWMubGFzdEluZGV4T2YodSk7aD4tMSYmKGM9Yy5zbGljZSgwLGgpKX1yZXR1cm4gYytlfWZ1bmN0aW9uIGthKG4pe3JldHVybiBuPVJjKG4pLG4mJnd0LnRlc3Qobik/bi5yZXBsYWNlKGR0LF9lKTpufWZ1bmN0aW9uIE9hKG4sdCxyKXtyZXR1cm4gbj1SYyhuKSx0PXI/WTp0LHQ9PT1ZP1Qobik/SihuKTpfKG4pOm4ubWF0Y2godCl8fFtdfWZ1bmN0aW9uIElhKHQpe3ZhciByPW51bGw9PXQ/MDp0Lmxlbmd0aCxlPWJpKCk7cmV0dXJuIHQ9cj9jKHQsZnVuY3Rpb24obil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgblsxXSl0aHJvdyBuZXcgc2wodG4pO3JldHVybltlKG5bMF0pLG5bMV1dfSk6W10scnUoZnVuY3Rpb24oZSl7Zm9yKHZhciB1PS0xOysrdTxyOyl7dmFyIGk9dFt1XTtpZihuKGlbMF0sdGhpcyxlKSlyZXR1cm4gbihpWzFdLHRoaXMsZSk7XG59fSl9ZnVuY3Rpb24gUmEobil7cmV0dXJuIE1yKERyKG4sb24pKX1mdW5jdGlvbiB6YShuKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbn19ZnVuY3Rpb24gRWEobix0KXtyZXR1cm4gbnVsbD09bnx8biE9PW4/dDpufWZ1bmN0aW9uIFNhKG4pe3JldHVybiBufWZ1bmN0aW9uIFdhKG4pe3JldHVybiBUZShcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP246RHIobixvbikpfWZ1bmN0aW9uIExhKG4pe3JldHVybiBOZShEcihuLG9uKSl9ZnVuY3Rpb24gQ2Eobix0KXtyZXR1cm4gUGUobixEcih0LG9uKSl9ZnVuY3Rpb24gVWEobix0LGUpe3ZhciB1PUZjKHQpLGk9c2UodCx1KTtudWxsIT1lfHxpYyh0KSYmKGkubGVuZ3RofHwhdS5sZW5ndGgpfHwoZT10LHQ9bixuPXRoaXMsaT1zZSh0LEZjKHQpKSk7dmFyIG89IShpYyhlKSYmXCJjaGFpblwiaW4gZSYmIWUuY2hhaW4pLGY9cmMobik7cmV0dXJuIHIoaSxmdW5jdGlvbihyKXt2YXIgZT10W3JdO25bcl09ZSxmJiYobi5wcm90b3R5cGVbcl09ZnVuY3Rpb24oKXtcbnZhciB0PXRoaXMuX19jaGFpbl9fO2lmKG98fHQpe3ZhciByPW4odGhpcy5fX3dyYXBwZWRfXyk7cmV0dXJuKHIuX19hY3Rpb25zX189VXUodGhpcy5fX2FjdGlvbnNfXykpLnB1c2goe2Z1bmM6ZSxhcmdzOmFyZ3VtZW50cyx0aGlzQXJnOm59KSxyLl9fY2hhaW5fXz10LHJ9cmV0dXJuIGUuYXBwbHkobixhKFt0aGlzLnZhbHVlKCldLGFyZ3VtZW50cykpfSl9KSxufWZ1bmN0aW9uIEJhKCl7cmV0dXJuIFhyLl89PT10aGlzJiYoWHIuXz14bCksdGhpc31mdW5jdGlvbiBUYSgpe31mdW5jdGlvbiAkYShuKXtyZXR1cm4gbj1qYyhuKSxydShmdW5jdGlvbih0KXtyZXR1cm4gS2UodCxuKX0pfWZ1bmN0aW9uIERhKG4pe3JldHVybiBDaShuKT9tKFFpKG4pKTpKZShuKX1mdW5jdGlvbiBNYShuKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PW4/WTp2ZShuLHQpfX1mdW5jdGlvbiBGYSgpe3JldHVybltdfWZ1bmN0aW9uIE5hKCl7cmV0dXJuITF9ZnVuY3Rpb24gUGEoKXtyZXR1cm57fTtcbn1mdW5jdGlvbiBxYSgpe3JldHVyblwiXCJ9ZnVuY3Rpb24gWmEoKXtyZXR1cm4hMH1mdW5jdGlvbiBLYShuLHQpe2lmKG49amMobiksbjwxfHxuPnpuKXJldHVybltdO3ZhciByPVduLGU9VmwobixXbik7dD1iaSh0KSxuLT1Xbjtmb3IodmFyIHU9TyhlLHQpOysrcjxuOyl0KHIpO3JldHVybiB1fWZ1bmN0aW9uIFZhKG4pe3JldHVybiB5aChuKT9jKG4sUWkpOnljKG4pP1tuXTpVdShXcyhSYyhuKSkpfWZ1bmN0aW9uIEdhKG4pe3ZhciB0PSsrZGw7cmV0dXJuIFJjKG4pK3R9ZnVuY3Rpb24gSGEobil7cmV0dXJuIG4mJm4ubGVuZ3RoP1lyKG4sU2EsYmUpOll9ZnVuY3Rpb24gSmEobix0KXtyZXR1cm4gbiYmbi5sZW5ndGg/WXIobixiaSh0LDIpLGJlKTpZfWZ1bmN0aW9uIFlhKG4pe3JldHVybiB3KG4sU2EpfWZ1bmN0aW9uIFFhKG4sdCl7cmV0dXJuIHcobixiaSh0LDIpKX1mdW5jdGlvbiBYYShuKXtyZXR1cm4gbiYmbi5sZW5ndGg/WXIobixTYSxNZSk6WX1mdW5jdGlvbiBubChuLHQpe1xucmV0dXJuIG4mJm4ubGVuZ3RoP1lyKG4sYmkodCwyKSxNZSk6WX1mdW5jdGlvbiB0bChuKXtyZXR1cm4gbiYmbi5sZW5ndGg/ayhuLFNhKTowfWZ1bmN0aW9uIHJsKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP2sobixiaSh0LDIpKTowfXg9bnVsbD09eD9YcjpnZS5kZWZhdWx0cyhYci5PYmplY3QoKSx4LGdlLnBpY2soWHIsRnIpKTt2YXIgZWw9eC5BcnJheSx1bD14LkRhdGUsaWw9eC5FcnJvcixvbD14LkZ1bmN0aW9uLGZsPXguTWF0aCxjbD14Lk9iamVjdCxhbD14LlJlZ0V4cCxsbD14LlN0cmluZyxzbD14LlR5cGVFcnJvcixobD1lbC5wcm90b3R5cGUscGw9b2wucHJvdG90eXBlLF9sPWNsLnByb3RvdHlwZSx2bD14W1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdLGdsPXBsLnRvU3RyaW5nLHlsPV9sLmhhc093blByb3BlcnR5LGRsPTAsYmw9ZnVuY3Rpb24oKXt2YXIgbj0vW14uXSskLy5leGVjKHZsJiZ2bC5rZXlzJiZ2bC5rZXlzLklFX1BST1RPfHxcIlwiKTtyZXR1cm4gbj9cIlN5bWJvbChzcmMpXzEuXCIrbjpcIlwiO1xufSgpLHdsPV9sLnRvU3RyaW5nLG1sPWdsLmNhbGwoY2wpLHhsPVhyLl8samw9YWwoXCJeXCIrZ2wuY2FsbCh5bCkucmVwbGFjZShSdCxcIlxcXFwkJlwiKS5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLFwiJDEuKj9cIikrXCIkXCIpLEFsPXJlP3guQnVmZmVyOlksa2w9eC5TeW1ib2wsT2w9eC5VaW50OEFycmF5LElsPUFsP0FsLmFsbG9jVW5zYWZlOlksUmw9TShjbC5nZXRQcm90b3R5cGVPZixjbCksemw9Y2wuY3JlYXRlLEVsPV9sLnByb3BlcnR5SXNFbnVtZXJhYmxlLFNsPWhsLnNwbGljZSxXbD1rbD9rbC5pc0NvbmNhdFNwcmVhZGFibGU6WSxMbD1rbD9rbC5pdGVyYXRvcjpZLENsPWtsP2tsLnRvU3RyaW5nVGFnOlksVWw9ZnVuY3Rpb24oKXt0cnl7dmFyIG49eGkoY2wsXCJkZWZpbmVQcm9wZXJ0eVwiKTtyZXR1cm4gbih7fSxcIlwiLHt9KSxufWNhdGNoKG4pe319KCksQmw9eC5jbGVhclRpbWVvdXQhPT1Yci5jbGVhclRpbWVvdXQmJnguY2xlYXJUaW1lb3V0LFRsPXVsJiZ1bC5ub3chPT1Yci5EYXRlLm5vdyYmdWwubm93LCRsPXguc2V0VGltZW91dCE9PVhyLnNldFRpbWVvdXQmJnguc2V0VGltZW91dCxEbD1mbC5jZWlsLE1sPWZsLmZsb29yLEZsPWNsLmdldE93blByb3BlcnR5U3ltYm9scyxObD1BbD9BbC5pc0J1ZmZlcjpZLFBsPXguaXNGaW5pdGUscWw9aGwuam9pbixabD1NKGNsLmtleXMsY2wpLEtsPWZsLm1heCxWbD1mbC5taW4sR2w9dWwubm93LEhsPXgucGFyc2VJbnQsSmw9ZmwucmFuZG9tLFlsPWhsLnJldmVyc2UsUWw9eGkoeCxcIkRhdGFWaWV3XCIpLFhsPXhpKHgsXCJNYXBcIiksbnM9eGkoeCxcIlByb21pc2VcIiksdHM9eGkoeCxcIlNldFwiKSxycz14aSh4LFwiV2Vha01hcFwiKSxlcz14aShjbCxcImNyZWF0ZVwiKSx1cz1ycyYmbmV3IHJzLGlzPXt9LG9zPVhpKFFsKSxmcz1YaShYbCksY3M9WGkobnMpLGFzPVhpKHRzKSxscz1YaShycyksc3M9a2w/a2wucHJvdG90eXBlOlksaHM9c3M/c3MudmFsdWVPZjpZLHBzPXNzP3NzLnRvU3RyaW5nOlksX3M9ZnVuY3Rpb24oKXtcbmZ1bmN0aW9uIG4oKXt9cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKCFpYyh0KSlyZXR1cm57fTtpZih6bClyZXR1cm4gemwodCk7bi5wcm90b3R5cGU9dDt2YXIgcj1uZXcgbjtyZXR1cm4gbi5wcm90b3R5cGU9WSxyfX0oKTtxLnRlbXBsYXRlU2V0dGluZ3M9e2VzY2FwZTp4dCxldmFsdWF0ZTpqdCxpbnRlcnBvbGF0ZTpBdCx2YXJpYWJsZTpcIlwiLGltcG9ydHM6e186cX19LHEucHJvdG90eXBlPUcucHJvdG90eXBlLHEucHJvdG90eXBlLmNvbnN0cnVjdG9yPXEsSC5wcm90b3R5cGU9X3MoRy5wcm90b3R5cGUpLEgucHJvdG90eXBlLmNvbnN0cnVjdG9yPUgsQnQucHJvdG90eXBlPV9zKEcucHJvdG90eXBlKSxCdC5wcm90b3R5cGUuY29uc3RydWN0b3I9QnQsWXQucHJvdG90eXBlLmNsZWFyPVF0LFl0LnByb3RvdHlwZS5kZWxldGU9WHQsWXQucHJvdG90eXBlLmdldD1ucixZdC5wcm90b3R5cGUuaGFzPXRyLFl0LnByb3RvdHlwZS5zZXQ9cnIsZXIucHJvdG90eXBlLmNsZWFyPXVyLGVyLnByb3RvdHlwZS5kZWxldGU9aXIsXG5lci5wcm90b3R5cGUuZ2V0PW9yLGVyLnByb3RvdHlwZS5oYXM9ZnIsZXIucHJvdG90eXBlLnNldD1jcixhci5wcm90b3R5cGUuY2xlYXI9bHIsYXIucHJvdG90eXBlLmRlbGV0ZT1zcixhci5wcm90b3R5cGUuZ2V0PWhyLGFyLnByb3RvdHlwZS5oYXM9cHIsYXIucHJvdG90eXBlLnNldD1fcix2ci5wcm90b3R5cGUuYWRkPXZyLnByb3RvdHlwZS5wdXNoPWdyLHZyLnByb3RvdHlwZS5oYXM9eXIsZHIucHJvdG90eXBlLmNsZWFyPWJyLGRyLnByb3RvdHlwZS5kZWxldGU9d3IsZHIucHJvdG90eXBlLmdldD1tcixkci5wcm90b3R5cGUuaGFzPXhyLGRyLnByb3RvdHlwZS5zZXQ9anI7dmFyIHZzPUZ1KGVlKSxncz1GdSh1ZSwhMCkseXM9TnUoKSxkcz1OdSghMCksYnM9dXM/ZnVuY3Rpb24obix0KXtyZXR1cm4gdXMuc2V0KG4sdCksbn06U2Esd3M9VWw/ZnVuY3Rpb24obix0KXtyZXR1cm4gVWwobixcInRvU3RyaW5nXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiExLHZhbHVlOnphKHQpLFxud3JpdGFibGU6ITB9KX06U2EsbXM9cnUseHM9Qmx8fGZ1bmN0aW9uKG4pe3JldHVybiBYci5jbGVhclRpbWVvdXQobil9LGpzPXRzJiYxL04obmV3IHRzKFssLTBdKSlbMV09PVJuP2Z1bmN0aW9uKG4pe3JldHVybiBuZXcgdHMobil9OlRhLEFzPXVzP2Z1bmN0aW9uKG4pe3JldHVybiB1cy5nZXQobil9OlRhLGtzPUZsP2Z1bmN0aW9uKG4pe3JldHVybiBudWxsPT1uP1tdOihuPWNsKG4pLGkoRmwobiksZnVuY3Rpb24odCl7cmV0dXJuIEVsLmNhbGwobix0KX0pKX06RmEsT3M9Rmw/ZnVuY3Rpb24obil7Zm9yKHZhciB0PVtdO247KWEodCxrcyhuKSksbj1SbChuKTtyZXR1cm4gdH06RmEsSXM9ZGU7KFFsJiZJcyhuZXcgUWwobmV3IEFycmF5QnVmZmVyKDEpKSkhPWl0fHxYbCYmSXMobmV3IFhsKSE9Wm58fG5zJiZJcyhucy5yZXNvbHZlKCkpIT1Ibnx8dHMmJklzKG5ldyB0cykhPVFufHxycyYmSXMobmV3IHJzKSE9cnQpJiYoSXM9ZnVuY3Rpb24obil7dmFyIHQ9ZGUobikscj10PT1Hbj9uLmNvbnN0cnVjdG9yOlksZT1yP1hpKHIpOlwiXCI7XG5pZihlKXN3aXRjaChlKXtjYXNlIG9zOnJldHVybiBpdDtjYXNlIGZzOnJldHVybiBabjtjYXNlIGNzOnJldHVybiBIbjtjYXNlIGFzOnJldHVybiBRbjtjYXNlIGxzOnJldHVybiBydH1yZXR1cm4gdH0pO3ZhciBScz12bD9yYzpOYSx6cz1KaShicyksRXM9JGx8fGZ1bmN0aW9uKG4sdCl7cmV0dXJuIFhyLnNldFRpbWVvdXQobix0KX0sU3M9Smkod3MpLFdzPUZpKGZ1bmN0aW9uKG4pe3ZhciB0PVtdO3JldHVybiA0Nj09PW4uY2hhckNvZGVBdCgwKSYmdC5wdXNoKFwiXCIpLG4ucmVwbGFjZShJdCxmdW5jdGlvbihuLHIsZSx1KXt0LnB1c2goZT91LnJlcGxhY2UoVHQsXCIkMVwiKTpyfHxuKX0pLHR9KSxMcz1ydShmdW5jdGlvbihuLHQpe3JldHVybiBHZihuKT9WcihuLHRlKHQsMSxHZiwhMCkpOltdfSksQ3M9cnUoZnVuY3Rpb24obix0KXt2YXIgcj1tbyh0KTtyZXR1cm4gR2YocikmJihyPVkpLEdmKG4pP1ZyKG4sdGUodCwxLEdmLCEwKSxiaShyLDIpKTpbXX0pLFVzPXJ1KGZ1bmN0aW9uKG4sdCl7XG52YXIgcj1tbyh0KTtyZXR1cm4gR2YocikmJihyPVkpLEdmKG4pP1ZyKG4sdGUodCwxLEdmLCEwKSxZLHIpOltdfSksQnM9cnUoZnVuY3Rpb24obil7dmFyIHQ9YyhuLG11KTtyZXR1cm4gdC5sZW5ndGgmJnRbMF09PT1uWzBdP2plKHQpOltdfSksVHM9cnUoZnVuY3Rpb24obil7dmFyIHQ9bW8obikscj1jKG4sbXUpO3JldHVybiB0PT09bW8ocik/dD1ZOnIucG9wKCksci5sZW5ndGgmJnJbMF09PT1uWzBdP2plKHIsYmkodCwyKSk6W119KSwkcz1ydShmdW5jdGlvbihuKXt2YXIgdD1tbyhuKSxyPWMobixtdSk7cmV0dXJuIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OlksdCYmci5wb3AoKSxyLmxlbmd0aCYmclswXT09PW5bMF0/amUocixZLHQpOltdfSksRHM9cnUoQW8pLE1zPV9pKGZ1bmN0aW9uKG4sdCl7dmFyIHI9bnVsbD09bj8wOm4ubGVuZ3RoLGU9VHIobix0KTtyZXR1cm4gUWUobixjKHQsZnVuY3Rpb24obil7cmV0dXJuIFdpKG4scik/K246bn0pLnNvcnQoU3UpKSxlfSksRnM9cnUoZnVuY3Rpb24obil7XG5yZXR1cm4gX3UodGUobiwxLEdmLCEwKSl9KSxOcz1ydShmdW5jdGlvbihuKXt2YXIgdD1tbyhuKTtyZXR1cm4gR2YodCkmJih0PVkpLF91KHRlKG4sMSxHZiwhMCksYmkodCwyKSl9KSxQcz1ydShmdW5jdGlvbihuKXt2YXIgdD1tbyhuKTtyZXR1cm4gdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6WSxfdSh0ZShuLDEsR2YsITApLFksdCl9KSxxcz1ydShmdW5jdGlvbihuLHQpe3JldHVybiBHZihuKT9WcihuLHQpOltdfSksWnM9cnUoZnVuY3Rpb24obil7cmV0dXJuIGJ1KGkobixHZikpfSksS3M9cnUoZnVuY3Rpb24obil7dmFyIHQ9bW8obik7cmV0dXJuIEdmKHQpJiYodD1ZKSxidShpKG4sR2YpLGJpKHQsMikpfSksVnM9cnUoZnVuY3Rpb24obil7dmFyIHQ9bW8obik7cmV0dXJuIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OlksYnUoaShuLEdmKSxZLHQpfSksR3M9cnUoS28pLEhzPXJ1KGZ1bmN0aW9uKG4pe3ZhciB0PW4ubGVuZ3RoLHI9dD4xP25bdC0xXTpZO3JldHVybiByPVwiZnVuY3Rpb25cIj09dHlwZW9mIHI/KG4ucG9wKCksXG5yKTpZLFZvKG4scil9KSxKcz1faShmdW5jdGlvbihuKXt2YXIgdD1uLmxlbmd0aCxyPXQ/blswXTowLGU9dGhpcy5fX3dyYXBwZWRfXyx1PWZ1bmN0aW9uKHQpe3JldHVybiBUcih0LG4pfTtyZXR1cm4hKHQ+MXx8dGhpcy5fX2FjdGlvbnNfXy5sZW5ndGgpJiZlIGluc3RhbmNlb2YgQnQmJldpKHIpPyhlPWUuc2xpY2UociwrcisodD8xOjApKSxlLl9fYWN0aW9uc19fLnB1c2goe2Z1bmM6UW8sYXJnczpbdV0sdGhpc0FyZzpZfSksbmV3IEgoZSx0aGlzLl9fY2hhaW5fXykudGhydShmdW5jdGlvbihuKXtyZXR1cm4gdCYmIW4ubGVuZ3RoJiZuLnB1c2goWSksbn0pKTp0aGlzLnRocnUodSl9KSxZcz1EdShmdW5jdGlvbihuLHQscil7eWwuY2FsbChuLHIpPysrbltyXTpDcihuLHIsMSl9KSxRcz1HdShsbyksWHM9R3Uoc28pLG5oPUR1KGZ1bmN0aW9uKG4sdCxyKXt5bC5jYWxsKG4scik/bltyXS5wdXNoKHQpOkNyKG4scixbdF0pfSksdGg9cnUoZnVuY3Rpb24odCxyLGUpe3ZhciB1PS0xLGk9XCJmdW5jdGlvblwiPT10eXBlb2YgcixvPVZmKHQpP2VsKHQubGVuZ3RoKTpbXTtcbnJldHVybiB2cyh0LGZ1bmN0aW9uKHQpe29bKyt1XT1pP24ocix0LGUpOmtlKHQscixlKX0pLG99KSxyaD1EdShmdW5jdGlvbihuLHQscil7Q3IobixyLHQpfSksZWg9RHUoZnVuY3Rpb24obix0LHIpe25bcj8wOjFdLnB1c2godCl9LGZ1bmN0aW9uKCl7cmV0dXJuW1tdLFtdXX0pLHVoPXJ1KGZ1bmN0aW9uKG4sdCl7aWYobnVsbD09bilyZXR1cm5bXTt2YXIgcj10Lmxlbmd0aDtyZXR1cm4gcj4xJiZMaShuLHRbMF0sdFsxXSk/dD1bXTpyPjImJkxpKHRbMF0sdFsxXSx0WzJdKSYmKHQ9W3RbMF1dKSxWZShuLHRlKHQsMSksW10pfSksaWg9VGx8fGZ1bmN0aW9uKCl7cmV0dXJuIFhyLkRhdGUubm93KCl9LG9oPXJ1KGZ1bmN0aW9uKG4sdCxyKXt2YXIgZT1zbjtpZihyLmxlbmd0aCl7dmFyIHU9RihyLGRpKG9oKSk7ZXw9Z259cmV0dXJuIGZpKG4sZSx0LHIsdSl9KSxmaD1ydShmdW5jdGlvbihuLHQscil7dmFyIGU9c258aG47aWYoci5sZW5ndGgpe3ZhciB1PUYocixkaShmaCkpO2V8PWduO1xufXJldHVybiBmaSh0LGUsbixyLHUpfSksY2g9cnUoZnVuY3Rpb24obix0KXtyZXR1cm4gS3IobiwxLHQpfSksYWg9cnUoZnVuY3Rpb24obix0LHIpe3JldHVybiBLcihuLGtjKHQpfHwwLHIpfSk7V2YuQ2FjaGU9YXI7dmFyIGxoPW1zKGZ1bmN0aW9uKHQscil7cj0xPT1yLmxlbmd0aCYmeWgoclswXSk/YyhyWzBdLFIoYmkoKSkpOmModGUociwxKSxSKGJpKCkpKTt2YXIgZT1yLmxlbmd0aDtyZXR1cm4gcnUoZnVuY3Rpb24odSl7Zm9yKHZhciBpPS0xLG89VmwodS5sZW5ndGgsZSk7KytpPG87KXVbaV09cltpXS5jYWxsKHRoaXMsdVtpXSk7cmV0dXJuIG4odCx0aGlzLHUpfSl9KSxzaD1ydShmdW5jdGlvbihuLHQpe3JldHVybiBmaShuLGduLFksdCxGKHQsZGkoc2gpKSl9KSxoaD1ydShmdW5jdGlvbihuLHQpe3JldHVybiBmaShuLHluLFksdCxGKHQsZGkoaGgpKSl9KSxwaD1faShmdW5jdGlvbihuLHQpe3JldHVybiBmaShuLGJuLFksWSxZLHQpfSksX2g9ZWkoYmUpLHZoPWVpKGZ1bmN0aW9uKG4sdCl7XG5yZXR1cm4gbj49dH0pLGdoPU9lKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk/T2U6ZnVuY3Rpb24obil7cmV0dXJuIG9jKG4pJiZ5bC5jYWxsKG4sXCJjYWxsZWVcIikmJiFFbC5jYWxsKG4sXCJjYWxsZWVcIil9LHloPWVsLmlzQXJyYXksZGg9aWU/UihpZSk6SWUsYmg9Tmx8fE5hLHdoPW9lP1Iob2UpOlJlLG1oPWZlP1IoZmUpOlNlLHhoPWNlP1IoY2UpOkNlLGpoPWFlP1IoYWUpOlVlLEFoPWxlP1IobGUpOkJlLGtoPWVpKE1lKSxPaD1laShmdW5jdGlvbihuLHQpe3JldHVybiBuPD10fSksSWg9TXUoZnVuY3Rpb24obix0KXtpZigkaSh0KXx8VmYodCkpcmV0dXJuIEJ1KHQsRmModCksbiksWTtmb3IodmFyIHIgaW4gdCl5bC5jYWxsKHQscikmJnpyKG4scix0W3JdKX0pLFJoPU11KGZ1bmN0aW9uKG4sdCl7QnUodCxOYyh0KSxuKX0pLHpoPU11KGZ1bmN0aW9uKG4sdCxyLGUpe0J1KHQsTmModCksbixlKX0pLEVoPU11KGZ1bmN0aW9uKG4sdCxyLGUpe0J1KHQsRmModCksbixlKTtcbn0pLFNoPV9pKFRyKSxXaD1ydShmdW5jdGlvbihuLHQpe249Y2wobik7dmFyIHI9LTEsZT10Lmxlbmd0aCx1PWU+Mj90WzJdOlk7Zm9yKHUmJkxpKHRbMF0sdFsxXSx1KSYmKGU9MSk7KytyPGU7KWZvcih2YXIgaT10W3JdLG89TmMoaSksZj0tMSxjPW8ubGVuZ3RoOysrZjxjOyl7dmFyIGE9b1tmXSxsPW5bYV07KGw9PT1ZfHxLZihsLF9sW2FdKSYmIXlsLmNhbGwobixhKSkmJihuW2FdPWlbYV0pfXJldHVybiBufSksTGg9cnUoZnVuY3Rpb24odCl7cmV0dXJuIHQucHVzaChZLGFpKSxuKCRoLFksdCl9KSxDaD1ZdShmdW5jdGlvbihuLHQscil7bnVsbCE9dCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdC50b1N0cmluZyYmKHQ9d2wuY2FsbCh0KSksblt0XT1yfSx6YShTYSkpLFVoPVl1KGZ1bmN0aW9uKG4sdCxyKXtudWxsIT10JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LnRvU3RyaW5nJiYodD13bC5jYWxsKHQpKSx5bC5jYWxsKG4sdCk/blt0XS5wdXNoKHIpOm5bdF09W3JdfSxiaSksQmg9cnUoa2UpLFRoPU11KGZ1bmN0aW9uKG4sdCxyKXtcbnFlKG4sdCxyKX0pLCRoPU11KGZ1bmN0aW9uKG4sdCxyLGUpe3FlKG4sdCxyLGUpfSksRGg9X2koZnVuY3Rpb24obix0KXt2YXIgcj17fTtpZihudWxsPT1uKXJldHVybiByO3ZhciBlPSExO3Q9Yyh0LGZ1bmN0aW9uKHQpe3JldHVybiB0PWp1KHQsbiksZXx8KGU9dC5sZW5ndGg+MSksdH0pLEJ1KG4sZ2kobiksciksZSYmKHI9RHIocixvbnxmbnxjbixsaSkpO2Zvcih2YXIgdT10Lmxlbmd0aDt1LS07KXZ1KHIsdFt1XSk7cmV0dXJuIHJ9KSxNaD1faShmdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP3t9OkdlKG4sdCl9KSxGaD1vaShGYyksTmg9b2koTmMpLFBoPVp1KGZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gdD10LnRvTG93ZXJDYXNlKCksbisocj9pYSh0KTp0KX0pLHFoPVp1KGZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gbisocj9cIi1cIjpcIlwiKSt0LnRvTG93ZXJDYXNlKCl9KSxaaD1adShmdW5jdGlvbihuLHQscil7cmV0dXJuIG4rKHI/XCIgXCI6XCJcIikrdC50b0xvd2VyQ2FzZSgpfSksS2g9cXUoXCJ0b0xvd2VyQ2FzZVwiKSxWaD1adShmdW5jdGlvbihuLHQscil7XG5yZXR1cm4gbisocj9cIl9cIjpcIlwiKSt0LnRvTG93ZXJDYXNlKCl9KSxHaD1adShmdW5jdGlvbihuLHQscil7cmV0dXJuIG4rKHI/XCIgXCI6XCJcIikrSmgodCl9KSxIaD1adShmdW5jdGlvbihuLHQscil7cmV0dXJuIG4rKHI/XCIgXCI6XCJcIikrdC50b1VwcGVyQ2FzZSgpfSksSmg9cXUoXCJ0b1VwcGVyQ2FzZVwiKSxZaD1ydShmdW5jdGlvbih0LHIpe3RyeXtyZXR1cm4gbih0LFkscil9Y2F0Y2gobil7cmV0dXJuIG5jKG4pP246bmV3IGlsKG4pfX0pLFFoPV9pKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIHIodCxmdW5jdGlvbih0KXt0PVFpKHQpLENyKG4sdCxvaChuW3RdLG4pKX0pLG59KSxYaD1IdSgpLG5wPUh1KCEwKSx0cD1ydShmdW5jdGlvbihuLHQpe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4ga2UocixuLHQpfX0pLHJwPXJ1KGZ1bmN0aW9uKG4sdCl7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiBrZShuLHIsdCl9fSksZXA9WHUoYyksdXA9WHUodSksaXA9WHUoaCksb3A9cmkoKSxmcD1yaSghMCksY3A9UXUoZnVuY3Rpb24obix0KXtcbnJldHVybiBuK3R9LDApLGFwPWlpKFwiY2VpbFwiKSxscD1RdShmdW5jdGlvbihuLHQpe3JldHVybiBuL3R9LDEpLHNwPWlpKFwiZmxvb3JcIiksaHA9UXUoZnVuY3Rpb24obix0KXtyZXR1cm4gbip0fSwxKSxwcD1paShcInJvdW5kXCIpLF9wPVF1KGZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4tdH0sMCk7cmV0dXJuIHEuYWZ0ZXI9a2YscS5hcnk9T2YscS5hc3NpZ249SWgscS5hc3NpZ25Jbj1SaCxxLmFzc2lnbkluV2l0aD16aCxxLmFzc2lnbldpdGg9RWgscS5hdD1TaCxxLmJlZm9yZT1JZixxLmJpbmQ9b2gscS5iaW5kQWxsPVFoLHEuYmluZEtleT1maCxxLmNhc3RBcnJheT1NZixxLmNoYWluPUpvLHEuY2h1bms9cm8scS5jb21wYWN0PWVvLHEuY29uY2F0PXVvLHEuY29uZD1JYSxxLmNvbmZvcm1zPVJhLHEuY29uc3RhbnQ9emEscS5jb3VudEJ5PVlzLHEuY3JlYXRlPXpjLHEuY3Vycnk9UmYscS5jdXJyeVJpZ2h0PXpmLHEuZGVib3VuY2U9RWYscS5kZWZhdWx0cz1XaCxxLmRlZmF1bHRzRGVlcD1MaCxcbnEuZGVmZXI9Y2gscS5kZWxheT1haCxxLmRpZmZlcmVuY2U9THMscS5kaWZmZXJlbmNlQnk9Q3MscS5kaWZmZXJlbmNlV2l0aD1VcyxxLmRyb3A9aW8scS5kcm9wUmlnaHQ9b28scS5kcm9wUmlnaHRXaGlsZT1mbyxxLmRyb3BXaGlsZT1jbyxxLmZpbGw9YW8scS5maWx0ZXI9Y2YscS5mbGF0TWFwPWFmLHEuZmxhdE1hcERlZXA9bGYscS5mbGF0TWFwRGVwdGg9c2YscS5mbGF0dGVuPWhvLHEuZmxhdHRlbkRlZXA9cG8scS5mbGF0dGVuRGVwdGg9X28scS5mbGlwPVNmLHEuZmxvdz1YaCxxLmZsb3dSaWdodD1ucCxxLmZyb21QYWlycz12byxxLmZ1bmN0aW9ucz1CYyxxLmZ1bmN0aW9uc0luPVRjLHEuZ3JvdXBCeT1uaCxxLmluaXRpYWw9Ym8scS5pbnRlcnNlY3Rpb249QnMscS5pbnRlcnNlY3Rpb25CeT1UcyxxLmludGVyc2VjdGlvbldpdGg9JHMscS5pbnZlcnQ9Q2gscS5pbnZlcnRCeT1VaCxxLmludm9rZU1hcD10aCxxLml0ZXJhdGVlPVdhLHEua2V5Qnk9cmgscS5rZXlzPUZjLHEua2V5c0luPU5jLFxucS5tYXA9dmYscS5tYXBLZXlzPVBjLHEubWFwVmFsdWVzPXFjLHEubWF0Y2hlcz1MYSxxLm1hdGNoZXNQcm9wZXJ0eT1DYSxxLm1lbW9pemU9V2YscS5tZXJnZT1UaCxxLm1lcmdlV2l0aD0kaCxxLm1ldGhvZD10cCxxLm1ldGhvZE9mPXJwLHEubWl4aW49VWEscS5uZWdhdGU9TGYscS5udGhBcmc9JGEscS5vbWl0PURoLHEub21pdEJ5PVpjLHEub25jZT1DZixxLm9yZGVyQnk9Z2YscS5vdmVyPWVwLHEub3ZlckFyZ3M9bGgscS5vdmVyRXZlcnk9dXAscS5vdmVyU29tZT1pcCxxLnBhcnRpYWw9c2gscS5wYXJ0aWFsUmlnaHQ9aGgscS5wYXJ0aXRpb249ZWgscS5waWNrPU1oLHEucGlja0J5PUtjLHEucHJvcGVydHk9RGEscS5wcm9wZXJ0eU9mPU1hLHEucHVsbD1EcyxxLnB1bGxBbGw9QW8scS5wdWxsQWxsQnk9a28scS5wdWxsQWxsV2l0aD1PbyxxLnB1bGxBdD1NcyxxLnJhbmdlPW9wLHEucmFuZ2VSaWdodD1mcCxxLnJlYXJnPXBoLHEucmVqZWN0PWJmLHEucmVtb3ZlPUlvLHEucmVzdD1VZixcbnEucmV2ZXJzZT1SbyxxLnNhbXBsZVNpemU9bWYscS5zZXQ9R2MscS5zZXRXaXRoPUhjLHEuc2h1ZmZsZT14ZixxLnNsaWNlPXpvLHEuc29ydEJ5PXVoLHEuc29ydGVkVW5pcT1CbyxxLnNvcnRlZFVuaXFCeT1UbyxxLnNwbGl0PWdhLHEuc3ByZWFkPUJmLHEudGFpbD0kbyxxLnRha2U9RG8scS50YWtlUmlnaHQ9TW8scS50YWtlUmlnaHRXaGlsZT1GbyxxLnRha2VXaGlsZT1ObyxxLnRhcD1ZbyxxLnRocm90dGxlPVRmLHEudGhydT1RbyxxLnRvQXJyYXk9bWMscS50b1BhaXJzPUZoLHEudG9QYWlyc0luPU5oLHEudG9QYXRoPVZhLHEudG9QbGFpbk9iamVjdD1PYyxxLnRyYW5zZm9ybT1KYyxxLnVuYXJ5PSRmLHEudW5pb249RnMscS51bmlvbkJ5PU5zLHEudW5pb25XaXRoPVBzLHEudW5pcT1QbyxxLnVuaXFCeT1xbyxxLnVuaXFXaXRoPVpvLHEudW5zZXQ9WWMscS51bnppcD1LbyxxLnVuemlwV2l0aD1WbyxxLnVwZGF0ZT1RYyxxLnVwZGF0ZVdpdGg9WGMscS52YWx1ZXM9bmEscS52YWx1ZXNJbj10YSxcbnEud2l0aG91dD1xcyxxLndvcmRzPU9hLHEud3JhcD1EZixxLnhvcj1acyxxLnhvckJ5PUtzLHEueG9yV2l0aD1WcyxxLnppcD1HcyxxLnppcE9iamVjdD1HbyxxLnppcE9iamVjdERlZXA9SG8scS56aXBXaXRoPUhzLHEuZW50cmllcz1GaCxxLmVudHJpZXNJbj1OaCxxLmV4dGVuZD1SaCxxLmV4dGVuZFdpdGg9emgsVWEocSxxKSxxLmFkZD1jcCxxLmF0dGVtcHQ9WWgscS5jYW1lbENhc2U9UGgscS5jYXBpdGFsaXplPWlhLHEuY2VpbD1hcCxxLmNsYW1wPXJhLHEuY2xvbmU9RmYscS5jbG9uZURlZXA9UGYscS5jbG9uZURlZXBXaXRoPXFmLHEuY2xvbmVXaXRoPU5mLHEuY29uZm9ybXNUbz1aZixxLmRlYnVycj1vYSxxLmRlZmF1bHRUbz1FYSxxLmRpdmlkZT1scCxxLmVuZHNXaXRoPWZhLHEuZXE9S2YscS5lc2NhcGU9Y2EscS5lc2NhcGVSZWdFeHA9YWEscS5ldmVyeT1mZixxLmZpbmQ9UXMscS5maW5kSW5kZXg9bG8scS5maW5kS2V5PUVjLHEuZmluZExhc3Q9WHMscS5maW5kTGFzdEluZGV4PXNvLFxucS5maW5kTGFzdEtleT1TYyxxLmZsb29yPXNwLHEuZm9yRWFjaD1oZixxLmZvckVhY2hSaWdodD1wZixxLmZvckluPVdjLHEuZm9ySW5SaWdodD1MYyxxLmZvck93bj1DYyxxLmZvck93blJpZ2h0PVVjLHEuZ2V0PSRjLHEuZ3Q9X2gscS5ndGU9dmgscS5oYXM9RGMscS5oYXNJbj1NYyxxLmhlYWQ9Z28scS5pZGVudGl0eT1TYSxxLmluY2x1ZGVzPV9mLHEuaW5kZXhPZj15byxxLmluUmFuZ2U9ZWEscS5pbnZva2U9QmgscS5pc0FyZ3VtZW50cz1naCxxLmlzQXJyYXk9eWgscS5pc0FycmF5QnVmZmVyPWRoLHEuaXNBcnJheUxpa2U9VmYscS5pc0FycmF5TGlrZU9iamVjdD1HZixxLmlzQm9vbGVhbj1IZixxLmlzQnVmZmVyPWJoLHEuaXNEYXRlPXdoLHEuaXNFbGVtZW50PUpmLHEuaXNFbXB0eT1ZZixxLmlzRXF1YWw9UWYscS5pc0VxdWFsV2l0aD1YZixxLmlzRXJyb3I9bmMscS5pc0Zpbml0ZT10YyxxLmlzRnVuY3Rpb249cmMscS5pc0ludGVnZXI9ZWMscS5pc0xlbmd0aD11YyxxLmlzTWFwPW1oLFxucS5pc01hdGNoPWZjLHEuaXNNYXRjaFdpdGg9Y2MscS5pc05hTj1hYyxxLmlzTmF0aXZlPWxjLHEuaXNOaWw9aGMscS5pc051bGw9c2MscS5pc051bWJlcj1wYyxxLmlzT2JqZWN0PWljLHEuaXNPYmplY3RMaWtlPW9jLHEuaXNQbGFpbk9iamVjdD1fYyxxLmlzUmVnRXhwPXhoLHEuaXNTYWZlSW50ZWdlcj12YyxxLmlzU2V0PWpoLHEuaXNTdHJpbmc9Z2MscS5pc1N5bWJvbD15YyxxLmlzVHlwZWRBcnJheT1BaCxxLmlzVW5kZWZpbmVkPWRjLHEuaXNXZWFrTWFwPWJjLHEuaXNXZWFrU2V0PXdjLHEuam9pbj13byxxLmtlYmFiQ2FzZT1xaCxxLmxhc3Q9bW8scS5sYXN0SW5kZXhPZj14byxxLmxvd2VyQ2FzZT1aaCxxLmxvd2VyRmlyc3Q9S2gscS5sdD1raCxxLmx0ZT1PaCxxLm1heD1IYSxxLm1heEJ5PUphLHEubWVhbj1ZYSxxLm1lYW5CeT1RYSxxLm1pbj1YYSxxLm1pbkJ5PW5sLHEuc3R1YkFycmF5PUZhLHEuc3R1YkZhbHNlPU5hLHEuc3R1Yk9iamVjdD1QYSxxLnN0dWJTdHJpbmc9cWEsXG5xLnN0dWJUcnVlPVphLHEubXVsdGlwbHk9aHAscS5udGg9am8scS5ub0NvbmZsaWN0PUJhLHEubm9vcD1UYSxxLm5vdz1paCxxLnBhZD1sYSxxLnBhZEVuZD1zYSxxLnBhZFN0YXJ0PWhhLHEucGFyc2VJbnQ9cGEscS5yYW5kb209dWEscS5yZWR1Y2U9eWYscS5yZWR1Y2VSaWdodD1kZixxLnJlcGVhdD1fYSxxLnJlcGxhY2U9dmEscS5yZXN1bHQ9VmMscS5yb3VuZD1wcCxxLnJ1bkluQ29udGV4dD1wLHEuc2FtcGxlPXdmLHEuc2l6ZT1qZixxLnNuYWtlQ2FzZT1WaCxxLnNvbWU9QWYscS5zb3J0ZWRJbmRleD1FbyxxLnNvcnRlZEluZGV4Qnk9U28scS5zb3J0ZWRJbmRleE9mPVdvLHEuc29ydGVkTGFzdEluZGV4PUxvLHEuc29ydGVkTGFzdEluZGV4Qnk9Q28scS5zb3J0ZWRMYXN0SW5kZXhPZj1VbyxxLnN0YXJ0Q2FzZT1HaCxxLnN0YXJ0c1dpdGg9eWEscS5zdWJ0cmFjdD1fcCxxLnN1bT10bCxxLnN1bUJ5PXJsLHEudGVtcGxhdGU9ZGEscS50aW1lcz1LYSxxLnRvRmluaXRlPXhjLHEudG9JbnRlZ2VyPWpjLFxucS50b0xlbmd0aD1BYyxxLnRvTG93ZXI9YmEscS50b051bWJlcj1rYyxxLnRvU2FmZUludGVnZXI9SWMscS50b1N0cmluZz1SYyxxLnRvVXBwZXI9d2EscS50cmltPW1hLHEudHJpbUVuZD14YSxxLnRyaW1TdGFydD1qYSxxLnRydW5jYXRlPUFhLHEudW5lc2NhcGU9a2EscS51bmlxdWVJZD1HYSxxLnVwcGVyQ2FzZT1IaCxxLnVwcGVyRmlyc3Q9SmgscS5lYWNoPWhmLHEuZWFjaFJpZ2h0PXBmLHEuZmlyc3Q9Z28sVWEocSxmdW5jdGlvbigpe3ZhciBuPXt9O3JldHVybiBlZShxLGZ1bmN0aW9uKHQscil7eWwuY2FsbChxLnByb3RvdHlwZSxyKXx8KG5bcl09dCl9KSxufSgpLHtjaGFpbjohMX0pLHEuVkVSU0lPTj1RLHIoW1wiYmluZFwiLFwiYmluZEtleVwiLFwiY3VycnlcIixcImN1cnJ5UmlnaHRcIixcInBhcnRpYWxcIixcInBhcnRpYWxSaWdodFwiXSxmdW5jdGlvbihuKXtxW25dLnBsYWNlaG9sZGVyPXF9KSxyKFtcImRyb3BcIixcInRha2VcIl0sZnVuY3Rpb24obix0KXtCdC5wcm90b3R5cGVbbl09ZnVuY3Rpb24ocil7XG5yPXI9PT1ZPzE6S2woamMociksMCk7dmFyIGU9dGhpcy5fX2ZpbHRlcmVkX18mJiF0P25ldyBCdCh0aGlzKTp0aGlzLmNsb25lKCk7cmV0dXJuIGUuX19maWx0ZXJlZF9fP2UuX190YWtlQ291bnRfXz1WbChyLGUuX190YWtlQ291bnRfXyk6ZS5fX3ZpZXdzX18ucHVzaCh7c2l6ZTpWbChyLFduKSx0eXBlOm4rKGUuX19kaXJfXzwwP1wiUmlnaHRcIjpcIlwiKX0pLGV9LEJ0LnByb3RvdHlwZVtuK1wiUmlnaHRcIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMucmV2ZXJzZSgpW25dKHQpLnJldmVyc2UoKX19KSxyKFtcImZpbHRlclwiLFwibWFwXCIsXCJ0YWtlV2hpbGVcIl0sZnVuY3Rpb24obix0KXt2YXIgcj10KzEsZT1yPT1rbnx8cj09SW47QnQucHJvdG90eXBlW25dPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMuY2xvbmUoKTtyZXR1cm4gdC5fX2l0ZXJhdGVlc19fLnB1c2goe2l0ZXJhdGVlOmJpKG4sMyksdHlwZTpyfSksdC5fX2ZpbHRlcmVkX189dC5fX2ZpbHRlcmVkX198fGUsdH19KSxyKFtcImhlYWRcIixcImxhc3RcIl0sZnVuY3Rpb24obix0KXtcbnZhciByPVwidGFrZVwiKyh0P1wiUmlnaHRcIjpcIlwiKTtCdC5wcm90b3R5cGVbbl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tyXSgxKS52YWx1ZSgpWzBdfX0pLHIoW1wiaW5pdGlhbFwiLFwidGFpbFwiXSxmdW5jdGlvbihuLHQpe3ZhciByPVwiZHJvcFwiKyh0P1wiXCI6XCJSaWdodFwiKTtCdC5wcm90b3R5cGVbbl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fX2ZpbHRlcmVkX18/bmV3IEJ0KHRoaXMpOnRoaXNbcl0oMSl9fSksQnQucHJvdG90eXBlLmNvbXBhY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5maWx0ZXIoU2EpfSxCdC5wcm90b3R5cGUuZmluZD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5maWx0ZXIobikuaGVhZCgpfSxCdC5wcm90b3R5cGUuZmluZExhc3Q9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMucmV2ZXJzZSgpLmZpbmQobil9LEJ0LnByb3RvdHlwZS5pbnZva2VNYXA9cnUoZnVuY3Rpb24obix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP25ldyBCdCh0aGlzKTp0aGlzLm1hcChmdW5jdGlvbihyKXtcbnJldHVybiBrZShyLG4sdCl9KX0pLEJ0LnByb3RvdHlwZS5yZWplY3Q9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuZmlsdGVyKExmKGJpKG4pKSl9LEJ0LnByb3RvdHlwZS5zbGljZT1mdW5jdGlvbihuLHQpe249amMobik7dmFyIHI9dGhpcztyZXR1cm4gci5fX2ZpbHRlcmVkX18mJihuPjB8fHQ8MCk/bmV3IEJ0KHIpOihuPDA/cj1yLnRha2VSaWdodCgtbik6biYmKHI9ci5kcm9wKG4pKSx0IT09WSYmKHQ9amModCkscj10PDA/ci5kcm9wUmlnaHQoLXQpOnIudGFrZSh0LW4pKSxyKX0sQnQucHJvdG90eXBlLnRha2VSaWdodFdoaWxlPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnJldmVyc2UoKS50YWtlV2hpbGUobikucmV2ZXJzZSgpfSxCdC5wcm90b3R5cGUudG9BcnJheT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRha2UoV24pfSxlZShCdC5wcm90b3R5cGUsZnVuY3Rpb24obix0KXt2YXIgcj0vXig/OmZpbHRlcnxmaW5kfG1hcHxyZWplY3QpfFdoaWxlJC8udGVzdCh0KSxlPS9eKD86aGVhZHxsYXN0KSQvLnRlc3QodCksdT1xW2U/XCJ0YWtlXCIrKFwibGFzdFwiPT10P1wiUmlnaHRcIjpcIlwiKTp0XSxpPWV8fC9eZmluZC8udGVzdCh0KTtcbnUmJihxLnByb3RvdHlwZVt0XT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX193cmFwcGVkX18sbz1lP1sxXTphcmd1bWVudHMsZj10IGluc3RhbmNlb2YgQnQsYz1vWzBdLGw9Znx8eWgodCkscz1mdW5jdGlvbihuKXt2YXIgdD11LmFwcGx5KHEsYShbbl0sbykpO3JldHVybiBlJiZoP3RbMF06dH07bCYmciYmXCJmdW5jdGlvblwiPT10eXBlb2YgYyYmMSE9Yy5sZW5ndGgmJihmPWw9ITEpO3ZhciBoPXRoaXMuX19jaGFpbl9fLHA9ISF0aGlzLl9fYWN0aW9uc19fLmxlbmd0aCxfPWkmJiFoLHY9ZiYmIXA7aWYoIWkmJmwpe3Q9dj90Om5ldyBCdCh0aGlzKTt2YXIgZz1uLmFwcGx5KHQsbyk7cmV0dXJuIGcuX19hY3Rpb25zX18ucHVzaCh7ZnVuYzpRbyxhcmdzOltzXSx0aGlzQXJnOll9KSxuZXcgSChnLGgpfXJldHVybiBfJiZ2P24uYXBwbHkodGhpcyxvKTooZz10aGlzLnRocnUocyksXz9lP2cudmFsdWUoKVswXTpnLnZhbHVlKCk6Zyl9KX0pLHIoW1wicG9wXCIsXCJwdXNoXCIsXCJzaGlmdFwiLFwic29ydFwiLFwic3BsaWNlXCIsXCJ1bnNoaWZ0XCJdLGZ1bmN0aW9uKG4pe1xudmFyIHQ9aGxbbl0scj0vXig/OnB1c2h8c29ydHx1bnNoaWZ0KSQvLnRlc3Qobik/XCJ0YXBcIjpcInRocnVcIixlPS9eKD86cG9wfHNoaWZ0KSQvLnRlc3Qobik7cS5wcm90b3R5cGVbbl09ZnVuY3Rpb24oKXt2YXIgbj1hcmd1bWVudHM7aWYoZSYmIXRoaXMuX19jaGFpbl9fKXt2YXIgdT10aGlzLnZhbHVlKCk7cmV0dXJuIHQuYXBwbHkoeWgodSk/dTpbXSxuKX1yZXR1cm4gdGhpc1tyXShmdW5jdGlvbihyKXtyZXR1cm4gdC5hcHBseSh5aChyKT9yOltdLG4pfSl9fSksZWUoQnQucHJvdG90eXBlLGZ1bmN0aW9uKG4sdCl7dmFyIHI9cVt0XTtpZihyKXt2YXIgZT1yLm5hbWUrXCJcIjt5bC5jYWxsKGlzLGUpfHwoaXNbZV09W10pLGlzW2VdLnB1c2goe25hbWU6dCxmdW5jOnJ9KX19KSxpc1tKdShZLGhuKS5uYW1lXT1be25hbWU6XCJ3cmFwcGVyXCIsZnVuYzpZfV0sQnQucHJvdG90eXBlLmNsb25lPUd0LEJ0LnByb3RvdHlwZS5yZXZlcnNlPUh0LEJ0LnByb3RvdHlwZS52YWx1ZT1KdCxxLnByb3RvdHlwZS5hdD1KcyxcbnEucHJvdG90eXBlLmNoYWluPVhvLHEucHJvdG90eXBlLmNvbW1pdD1uZixxLnByb3RvdHlwZS5uZXh0PXRmLHEucHJvdG90eXBlLnBsYW50PWVmLHEucHJvdG90eXBlLnJldmVyc2U9dWYscS5wcm90b3R5cGUudG9KU09OPXEucHJvdG90eXBlLnZhbHVlT2Y9cS5wcm90b3R5cGUudmFsdWU9b2YscS5wcm90b3R5cGUuZmlyc3Q9cS5wcm90b3R5cGUuaGVhZCxMbCYmKHEucHJvdG90eXBlW0xsXT1yZikscX0sZ2U9dmUoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJlwib2JqZWN0XCI9PXR5cGVvZiBkZWZpbmUuYW1kJiZkZWZpbmUuYW1kPyhYci5fPWdlLGRlZmluZShmdW5jdGlvbigpe3JldHVybiBnZX0pKTp0ZT8oKHRlLmV4cG9ydHM9Z2UpLl89Z2UsbmUuXz1nZSk6WHIuXz1nZX0pLmNhbGwodGhpcyk7IiwidmFyIGJlZm9yZSA9IHJlcXVpcmUoJy4vYmVmb3JlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaXMgcmVzdHJpY3RlZCB0byBpbnZva2luZyBgZnVuY2Agb25jZS4gUmVwZWF0IGNhbGxzXG4gKiB0byB0aGUgZnVuY3Rpb24gcmV0dXJuIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgaW52b2NhdGlvbi4gVGhlIGBmdW5jYCBpc1xuICogaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBhbmQgYXJndW1lbnRzIG9mIHRoZSBjcmVhdGVkIGZ1bmN0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyByZXN0cmljdGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgaW5pdGlhbGl6ZSA9IF8ub25jZShjcmVhdGVBcHBsaWNhdGlvbik7XG4gKiBpbml0aWFsaXplKCk7XG4gKiBpbml0aWFsaXplKCk7XG4gKiAvLyA9PiBgY3JlYXRlQXBwbGljYXRpb25gIGlzIGludm9rZWQgb25jZVxuICovXG5mdW5jdGlvbiBvbmNlKGZ1bmMpIHtcbiAgcmV0dXJuIGJlZm9yZSgyLCBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvbmNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfb25jZSA9IHJlcXVpcmUoJ2xvZGFzaC9vbmNlJyk7XG5cbnZhciBfb25jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vbmNlKTtcblxudmFyIF9mcCA9IHJlcXVpcmUoJ2xvZGFzaC9mcCcpO1xuXG52YXIgX3V1aWQgPSByZXF1aXJlKCd1dWlkJyk7XG5cbnZhciBfdXVpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dWlkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgT1RQdWJsaXNoZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoT1RQdWJsaXNoZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE9UUHVibGlzaGVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9UUHVibGlzaGVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChPVFB1Ymxpc2hlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9UUHVibGlzaGVyKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc2Vzc2lvbkNvbm5lY3RlZEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5wdWJsaXNoVG9TZXNzaW9uKF90aGlzLnN0YXRlLnB1Ymxpc2hlcik7XG4gICAgfTtcblxuICAgIF90aGlzLnN0cmVhbUNyZWF0ZWRIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxhc3RTdHJlYW1JZDogZXZlbnQuc3RyZWFtLmlkIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHB1Ymxpc2hlcjogbnVsbCxcbiAgICAgIGxhc3RTdHJlYW1JZDogJycsXG4gICAgICBzZXNzaW9uOiBwcm9wcy5zZXNzaW9uIHx8IGNvbnRleHQuc2Vzc2lvbiB8fCBudWxsXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoT1RQdWJsaXNoZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuY3JlYXRlUHVibGlzaGVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHVzZURlZmF1bHQgPSBmdW5jdGlvbiB1c2VEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBzaG91bGRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRVcGRhdGUoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzID0gdXNlRGVmYXVsdChwcmV2UHJvcHMucHJvcGVydGllc1trZXldLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICB2YXIgY3VycmVudCA9IHVzZURlZmF1bHQoX3RoaXMyLnByb3BzLnByb3BlcnRpZXNba2V5XSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHByZXZpb3VzICE9PSBjdXJyZW50O1xuICAgICAgfTtcblxuICAgICAgdmFyIHVwZGF0ZVB1Ymxpc2hlclByb3BlcnR5ID0gZnVuY3Rpb24gdXBkYXRlUHVibGlzaGVyUHJvcGVydHkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZShrZXksIGRlZmF1bHRWYWx1ZSkpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSB1c2VEZWZhdWx0KF90aGlzMi5wcm9wcy5wcm9wZXJ0aWVzW2tleV0sIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgX3RoaXMyLnN0YXRlLnB1Ymxpc2hlcltrZXldKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHNob3VsZFVwZGF0ZSgndmlkZW9Tb3VyY2UnLCB1bmRlZmluZWQpKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveVB1Ymxpc2hlcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZVB1Ymxpc2hlcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVB1Ymxpc2hlclByb3BlcnR5KCdwdWJsaXNoQXVkaW8nLCB0cnVlKTtcbiAgICAgIHVwZGF0ZVB1Ymxpc2hlclByb3BlcnR5KCdwdWJsaXNoVmlkZW8nLCB0cnVlKTtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUuc2Vzc2lvbiAhPT0gcHJldlN0YXRlLnNlc3Npb24pIHtcbiAgICAgICAgdGhpcy5kZXN0cm95UHVibGlzaGVyKHByZXZTdGF0ZS5zZXNzaW9uKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQdWJsaXNoZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2Vzc2lvbikge1xuICAgICAgICB0aGlzLnN0YXRlLnNlc3Npb24ub2ZmKCdzZXNzaW9uQ29ubmVjdGVkJywgdGhpcy5zZXNzaW9uQ29ubmVjdGVkSGFuZGxlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGVzdHJveVB1Ymxpc2hlcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFB1Ymxpc2hlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFB1Ymxpc2hlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnB1Ymxpc2hlcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95UHVibGlzaGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveVB1Ymxpc2hlcigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgc2Vzc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdGhpcy5zdGF0ZS5zZXNzaW9uO1xuXG4gICAgICBkZWxldGUgdGhpcy5wdWJsaXNoZXJJZDtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUucHVibGlzaGVyKSB7XG4gICAgICAgIHRoaXMuc3RhdGUucHVibGlzaGVyLm9mZignc3RyZWFtQ3JlYXRlZCcsIHRoaXMuc3RyZWFtQ3JlYXRlZEhhbmRsZXIpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmV2ZW50SGFuZGxlcnMgJiYgX3R5cGVvZih0aGlzLnByb3BzLmV2ZW50SGFuZGxlcnMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRoaXMuc3RhdGUucHVibGlzaGVyLm9uY2UoJ2Rlc3Ryb3llZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMy5zdGF0ZS5wdWJsaXNoZXIub2ZmKF90aGlzMy5wcm9wcy5ldmVudEhhbmRsZXJzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICAgICAgc2Vzc2lvbi51bnB1Ymxpc2godGhpcy5zdGF0ZS5wdWJsaXNoZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUucHVibGlzaGVyLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwdWJsaXNoVG9TZXNzaW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVibGlzaFRvU2Vzc2lvbihwdWJsaXNoZXIpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgcHVibGlzaGVySWQgPSB0aGlzLnB1Ymxpc2hlcklkO1xuXG5cbiAgICAgIHRoaXMuc3RhdGUuc2Vzc2lvbi5wdWJsaXNoKHB1Ymxpc2hlciwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAocHVibGlzaGVySWQgIT09IF90aGlzNC5wdWJsaXNoZXJJZCkge1xuICAgICAgICAgIC8vIEVpdGhlciB0aGlzIHB1Ymxpc2hlciBoYXMgYmVlbiByZWNyZWF0ZWQgb3IgdGhlXG4gICAgICAgICAgLy8gY29tcG9uZW50IHVubW91bnRlZCBzbyBkb24ndCBpbnZva2UgYW55IGNhbGxiYWNrc1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgX3RoaXM0LmVycm9ySGFuZGxlcihlcnIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhpczQucHJvcHMub25QdWJsaXNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgX3RoaXM0LnByb3BzLm9uUHVibGlzaCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVQdWJsaXNoZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVQdWJsaXNoZXIoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnNlc3Npb24pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHB1Ymxpc2hlcjogbnVsbCwgbGFzdFN0cmVhbUlkOiAnJyB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcGVydGllcyA9IHRoaXMucHJvcHMucHJvcGVydGllcyB8fCB7fTtcbiAgICAgIHZhciBjb250YWluZXIgPSB2b2lkIDA7XG5cbiAgICAgIGlmIChwcm9wZXJ0aWVzLmluc2VydERlZmF1bHRVSSAhPT0gZmFsc2UpIHtcbiAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ09UUHVibGlzaGVyQ29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnB1Ymxpc2hlcklkID0gKDAsIF91dWlkMi5kZWZhdWx0KSgpO1xuICAgICAgdmFyIHB1Ymxpc2hlcklkID0gdGhpcy5wdWJsaXNoZXJJZDtcblxuXG4gICAgICB0aGlzLmVycm9ySGFuZGxlciA9ICgwLCBfb25jZTIuZGVmYXVsdCkoZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAocHVibGlzaGVySWQgIT09IF90aGlzNS5wdWJsaXNoZXJJZCkge1xuICAgICAgICAgIC8vIEVpdGhlciB0aGlzIHB1Ymxpc2hlciBoYXMgYmVlbiByZWNyZWF0ZWQgb3IgdGhlXG4gICAgICAgICAgLy8gY29tcG9uZW50IHVubW91bnRlZCBzbyBkb24ndCBpbnZva2UgYW55IGNhbGxiYWNrc1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIF90aGlzNS5wcm9wcy5vbkVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgX3RoaXM1LnByb3BzLm9uRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBwdWJsaXNoZXIgPSBPVC5pbml0UHVibGlzaGVyKGNvbnRhaW5lciwgcHJvcGVydGllcywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAocHVibGlzaGVySWQgIT09IF90aGlzNS5wdWJsaXNoZXJJZCkge1xuICAgICAgICAgIC8vIEVpdGhlciB0aGlzIHB1Ymxpc2hlciBoYXMgYmVlbiByZWNyZWF0ZWQgb3IgdGhlXG4gICAgICAgICAgLy8gY29tcG9uZW50IHVubW91bnRlZCBzbyBkb24ndCBpbnZva2UgYW55IGNhbGxiYWNrc1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgX3RoaXM1LmVycm9ySGFuZGxlcihlcnIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhpczUucHJvcHMub25Jbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgX3RoaXM1LnByb3BzLm9uSW5pdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHB1Ymxpc2hlci5vbignc3RyZWFtQ3JlYXRlZCcsIHRoaXMuc3RyZWFtQ3JlYXRlZEhhbmRsZXIpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5ldmVudEhhbmRsZXJzICYmIF90eXBlb2YodGhpcy5wcm9wcy5ldmVudEhhbmRsZXJzKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIGhhbmRsZXMgPSAoMCwgX2ZwLm9taXRCeSkoX2ZwLmlzTmlsKSh0aGlzLnByb3BzLmV2ZW50SGFuZGxlcnMpO1xuICAgICAgICBwdWJsaXNoZXIub24oaGFuZGxlcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlc3Npb24uY29ubmVjdGlvbikge1xuICAgICAgICB0aGlzLnB1Ymxpc2hUb1Nlc3Npb24ocHVibGlzaGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc2Vzc2lvbi5vbmNlKCdzZXNzaW9uQ29ubmVjdGVkJywgdGhpcy5zZXNzaW9uQ29ubmVjdGVkSGFuZGxlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwdWJsaXNoZXI6IHB1Ymxpc2hlciwgbGFzdFN0cmVhbUlkOiAnJyB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogc3R5bGUsIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICBfdGhpczYubm9kZSA9IG5vZGU7XG4gICAgICAgIH0gfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9UUHVibGlzaGVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gT1RQdWJsaXNoZXI7XG5cblxuT1RQdWJsaXNoZXIucHJvcFR5cGVzID0ge1xuICBzZXNzaW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBjb25uZWN0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICAgIGNvbm5lY3Rpb25JZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbiAgICB9KSxcbiAgICBvbmNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb2ZmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgcHVibGlzaDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIHVucHVibGlzaDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG4gIH0pLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgcHJvcGVydGllczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgZXZlbnRIYW5kbGVyczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RPZihfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMpLFxuICBvbkluaXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25QdWJsaXNoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uRXJyb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufTtcblxuT1RQdWJsaXNoZXIuZGVmYXVsdFByb3BzID0ge1xuICBzZXNzaW9uOiBudWxsLFxuICBjbGFzc05hbWU6ICcnLFxuICBzdHlsZToge30sXG4gIHByb3BlcnRpZXM6IHt9LFxuICBldmVudEhhbmRsZXJzOiBudWxsLFxuICBvbkluaXQ6IG51bGwsXG4gIG9uUHVibGlzaDogbnVsbCxcbiAgb25FcnJvcjogbnVsbFxufTtcblxuT1RQdWJsaXNoZXIuY29udGV4dFR5cGVzID0ge1xuICBzZXNzaW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBjb25uZWN0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICAgIGNvbm5lY3Rpb25JZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbiAgICB9KSxcbiAgICBvbmNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb2ZmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgcHVibGlzaDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIHVucHVibGlzaDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG4gIH0pXG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NyZWF0ZVNlc3Npb24yID0gcmVxdWlyZSgnLi9jcmVhdGVTZXNzaW9uJyk7XG5cbnZhciBfY3JlYXRlU2Vzc2lvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTZXNzaW9uMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE9UU2Vzc2lvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhPVFNlc3Npb24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE9UU2Vzc2lvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPVFNlc3Npb24pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE9UU2Vzc2lvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9UU2Vzc2lvbikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3RyZWFtczogW11cbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhPVFNlc3Npb24sIFt7XG4gICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgcmV0dXJuIHsgc2Vzc2lvbjogdGhpcy5zZXNzaW9uSGVscGVyLnNlc3Npb24sIHN0cmVhbXM6IHRoaXMuc3RhdGUuc3RyZWFtcyB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMuY3JlYXRlU2Vzc2lvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmIChwcmV2UHJvcHMuYXBpS2V5ICE9PSB0aGlzLnByb3BzLmFwaUtleSB8fCBwcmV2UHJvcHMuc2Vzc2lvbklkICE9PSB0aGlzLnByb3BzLnNlc3Npb25JZCB8fCBwcmV2UHJvcHMudG9rZW4gIT09IHRoaXMucHJvcHMudG9rZW4pIHtcbiAgICAgICAgdGhpcy5jcmVhdGVTZXNzaW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuZGVzdHJveVNlc3Npb24oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVTZXNzaW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlU2Vzc2lvbigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLmRlc3Ryb3lTZXNzaW9uKCk7XG5cbiAgICAgIHRoaXMuc2Vzc2lvbkhlbHBlciA9ICgwLCBfY3JlYXRlU2Vzc2lvbjMuZGVmYXVsdCkoe1xuICAgICAgICBhcGlLZXk6IHRoaXMucHJvcHMuYXBpS2V5LFxuICAgICAgICBzZXNzaW9uSWQ6IHRoaXMucHJvcHMuc2Vzc2lvbklkLFxuICAgICAgICB0b2tlbjogdGhpcy5wcm9wcy50b2tlbixcbiAgICAgICAgb25TdHJlYW1zVXBkYXRlZDogZnVuY3Rpb24gb25TdHJlYW1zVXBkYXRlZChzdHJlYW1zKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgc3RyZWFtczogc3RyZWFtcyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db25uZWN0OiB0aGlzLnByb3BzLm9uQ29ubmVjdCxcbiAgICAgICAgb25FcnJvcjogdGhpcy5wcm9wcy5vbkVycm9yLFxuICAgICAgICBvcHRpb25zOiB0aGlzLnByb3BzLm9wdGlvbnNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5ldmVudEhhbmRsZXJzICYmIF90eXBlb2YodGhpcy5wcm9wcy5ldmVudEhhbmRsZXJzKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uSGVscGVyLnNlc3Npb24ub24odGhpcy5wcm9wcy5ldmVudEhhbmRsZXJzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0cmVhbXMgPSB0aGlzLnNlc3Npb25IZWxwZXIuc3RyZWFtcztcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0cmVhbXM6IHN0cmVhbXMgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVzdHJveVNlc3Npb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95U2Vzc2lvbigpIHtcbiAgICAgIGlmICh0aGlzLnNlc3Npb25IZWxwZXIpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZXZlbnRIYW5kbGVycyAmJiBfdHlwZW9mKHRoaXMucHJvcHMuZXZlbnRIYW5kbGVycykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhpcy5zZXNzaW9uSGVscGVyLnNlc3Npb24ub2ZmKHRoaXMucHJvcHMuZXZlbnRIYW5kbGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXNzaW9uSGVscGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPVFNlc3Npb247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBPVFNlc3Npb247XG5cblxuT1RTZXNzaW9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsIF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQpXSkuaXNSZXF1aXJlZCxcbiAgYXBpS2V5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZXNzaW9uSWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRva2VuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICBldmVudEhhbmRsZXJzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdE9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyksXG4gIG9uQ29ubmVjdDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkVycm9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9wdGlvbnM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59O1xuXG5PVFNlc3Npb24uZGVmYXVsdFByb3BzID0ge1xuICBldmVudEhhbmRsZXJzOiBudWxsLFxuICBvbkNvbm5lY3Q6IG51bGwsXG4gIG9uRXJyb3I6IG51bGwsXG4gIG9wdGlvbnM6IHt9XG59O1xuXG5PVFNlc3Npb24uY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHN0cmVhbXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCksXG4gIHNlc3Npb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIHN1YnNjcmliZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIHVuc3Vic2NyaWJlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbiAgfSlcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gT1RTdHJlYW1zO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX09UU3Vic2NyaWJlckNvbnRleHQgPSByZXF1aXJlKCcuL09UU3Vic2NyaWJlckNvbnRleHQnKTtcblxudmFyIF9PVFN1YnNjcmliZXJDb250ZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX09UU3Vic2NyaWJlckNvbnRleHQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBPVFN0cmVhbXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIHNlc3Npb24gPSBwcm9wcy5zZXNzaW9uIHx8IGNvbnRleHQuc2Vzc2lvbiB8fCBudWxsO1xuICB2YXIgc3RyZWFtcyA9IHByb3BzLnN0cmVhbXMgfHwgY29udGV4dC5zdHJlYW1zIHx8IG51bGw7XG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsKTtcbiAgfVxuXG4gIHZhciBjaGlsZCA9IF9yZWFjdC5DaGlsZHJlbi5vbmx5KHByb3BzLmNoaWxkcmVuKTtcblxuICB2YXIgY2hpbGRyZW5XaXRoQ29udGV4dFdyYXBwZXIgPSBBcnJheS5pc0FycmF5KHN0cmVhbXMpID8gc3RyZWFtcy5tYXAoZnVuY3Rpb24gKHN0cmVhbSkge1xuICAgIHJldHVybiBjaGlsZCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgX09UU3Vic2NyaWJlckNvbnRleHQyLmRlZmF1bHQsXG4gICAgICB7IHN0cmVhbTogc3RyZWFtLCBrZXk6IHN0cmVhbS5pZCB9LFxuICAgICAgKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkKVxuICAgICkgOiBjaGlsZDtcbiAgfSkgOiBudWxsO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBudWxsLFxuICAgIGNoaWxkcmVuV2l0aENvbnRleHRXcmFwcGVyXG4gICk7XG59XG5cbk9UU3RyZWFtcy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgc2Vzc2lvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7IHB1Ymxpc2g6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgc3Vic2NyaWJlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMgfSksXG4gIHN0cmVhbXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdClcbn07XG5cbk9UU3RyZWFtcy5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlc3Npb246IG51bGwsXG4gIHN0cmVhbXM6IG51bGxcbn07XG5cbk9UU3RyZWFtcy5jb250ZXh0VHlwZXMgPSB7XG4gIHNlc3Npb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoeyBwdWJsaXNoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIHN1YnNjcmliZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jIH0pLFxuICBzdHJlYW1zOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QpXG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3V1aWQgPSByZXF1aXJlKCd1dWlkJyk7XG5cbnZhciBfdXVpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dWlkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgT1RTdWJzY3JpYmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE9UU3Vic2NyaWJlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gT1RTdWJzY3JpYmVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9UU3Vic2NyaWJlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoT1RTdWJzY3JpYmVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT1RTdWJzY3JpYmVyKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdWJzY3JpYmVyOiBudWxsLFxuICAgICAgc3RyZWFtOiBwcm9wcy5zdHJlYW0gfHwgY29udGV4dC5zdHJlYW0gfHwgbnVsbCxcbiAgICAgIHNlc3Npb246IHByb3BzLnNlc3Npb24gfHwgY29udGV4dC5zZXNzaW9uIHx8IG51bGwsXG4gICAgICBjdXJyZW50UmV0cnlBdHRlbXB0OiAwXG4gICAgfTtcbiAgICBfdGhpcy5tYXhSZXRyeUF0dGVtcHRzID0gcHJvcHMubWF4UmV0cnlBdHRlbXB0cyB8fCA1O1xuICAgIF90aGlzLnJldHJ5QXR0ZW1wdFRpbWVvdXQgPSBwcm9wcy5yZXRyeUF0dGVtcHRUaW1lb3V0IHx8IDEwMDA7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE9UU3Vic2NyaWJlciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5jcmVhdGVTdWJzY3JpYmVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGNhc3QgPSBmdW5jdGlvbiBjYXN0KHZhbHVlLCBUeXBlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiBUeXBlKHZhbHVlKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciB1cGRhdGVTdWJzY3JpYmVyUHJvcGVydHkgPSBmdW5jdGlvbiB1cGRhdGVTdWJzY3JpYmVyUHJvcGVydHkoa2V5KSB7XG4gICAgICAgIHZhciBwcmV2aW91cyA9IGNhc3QocHJldlByb3BzLnByb3BlcnRpZXNba2V5XSwgQm9vbGVhbiwgdHJ1ZSk7XG4gICAgICAgIHZhciBjdXJyZW50ID0gY2FzdChfdGhpczIucHJvcHMucHJvcGVydGllc1trZXldLCBCb29sZWFuLCB0cnVlKTtcbiAgICAgICAgaWYgKHByZXZpb3VzICE9PSBjdXJyZW50KSB7XG4gICAgICAgICAgX3RoaXMyLnN0YXRlLnN1YnNjcmliZXJba2V5XShjdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdXBkYXRlU3Vic2NyaWJlclByb3BlcnR5KCdzdWJzY3JpYmVUb0F1ZGlvJyk7XG4gICAgICB1cGRhdGVTdWJzY3JpYmVyUHJvcGVydHkoJ3N1YnNjcmliZVRvVmlkZW8nKTtcblxuICAgICAgaWYgKHByZXZTdGF0ZS5zZXNzaW9uICE9PSB0aGlzLnN0YXRlLnNlc3Npb24gfHwgcHJldlN0YXRlLnN0cmVhbSAhPT0gdGhpcy5zdGF0ZS5zdHJlYW0pIHtcbiAgICAgICAgdGhpcy5kZXN0cm95U3Vic2NyaWJlcihwcmV2U3RhdGUuc2Vzc2lvbik7XG4gICAgICAgIHRoaXMuY3JlYXRlU3Vic2NyaWJlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lTdWJzY3JpYmVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U3Vic2NyaWJlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN1YnNjcmliZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zdWJzY3JpYmVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NyZWF0ZVN1YnNjcmliZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVTdWJzY3JpYmVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5zdGF0ZS5zZXNzaW9uIHx8ICF0aGlzLnN0YXRlLnN0cmVhbSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3Vic2NyaWJlcjogbnVsbCB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLnByb3BzLnByb3BlcnRpZXMgfHwge307XG4gICAgICB2YXIgY29udGFpbmVyID0gdm9pZCAwO1xuICAgICAgaWYgKHByb3BlcnRpZXMuaW5zZXJ0RGVmYXVsdFVJICE9PSBmYWxzZSkge1xuICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnT1RTdWJzY3JpYmVyQ29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN1YnNjcmliZXJJZCA9ICgwLCBfdXVpZDIuZGVmYXVsdCkoKTtcbiAgICAgIHZhciBzdWJzY3JpYmVySWQgPSB0aGlzLnN1YnNjcmliZXJJZDtcblxuXG4gICAgICB2YXIgc3Vic2NyaWJlciA9IHRoaXMuc3RhdGUuc2Vzc2lvbi5zdWJzY3JpYmUodGhpcy5zdGF0ZS5zdHJlYW0sIGNvbnRhaW5lciwgdGhpcy5wcm9wcy5wcm9wZXJ0aWVzLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChzdWJzY3JpYmVySWQgIT09IF90aGlzMy5zdWJzY3JpYmVySWQpIHtcbiAgICAgICAgICAvLyBFaXRoZXIgdGhpcyBzdWJzY3JpYmVyIGhhcyBiZWVuIHJlY3JlYXRlZCBvciB0aGVcbiAgICAgICAgICAvLyBjb21wb25lbnQgdW5tb3VudGVkIHNvIGRvbid0IGludm9rZSBhbnkgY2FsbGJhY2tzXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnIgJiYgX3RoaXMzLnByb3BzLnJldHJ5ICYmIF90aGlzMy5zdGF0ZS5jdXJyZW50UmV0cnlBdHRlbXB0IDwgX3RoaXMzLm1heFJldHJ5QXR0ZW1wdHMgLSAxKSB7XG4gICAgICAgICAgLy8gRXJyb3IgZHVyaW5nIHN1YnNjcmliZSBmdW5jdGlvblxuICAgICAgICAgIF90aGlzMy5oYW5kbGVSZXRyeVN1YnNjcmliZXIoKTtcbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHJldHJ5IGFjdGlvbiwgZG8gd2Ugd2FudCB0byBleGVjdXRlIHRoZSBvbkVycm9yIHByb3BzIGZ1bmN0aW9uP1xuICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyICYmIHR5cGVvZiBfdGhpczMucHJvcHMub25FcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIF90aGlzMy5wcm9wcy5vbkVycm9yKGVycik7XG4gICAgICAgIH0gZWxzZSBpZiAoIWVyciAmJiB0eXBlb2YgX3RoaXMzLnByb3BzLm9uU3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgX3RoaXMzLnByb3BzLm9uU3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5ldmVudEhhbmRsZXJzICYmIF90eXBlb2YodGhpcy5wcm9wcy5ldmVudEhhbmRsZXJzKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgc3Vic2NyaWJlci5vbih0aGlzLnByb3BzLmV2ZW50SGFuZGxlcnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3Vic2NyaWJlcjogc3Vic2NyaWJlciB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVSZXRyeVN1YnNjcmliZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVSZXRyeVN1YnNjcmliZXIoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzNC5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudFJldHJ5QXR0ZW1wdDogc3RhdGUuY3VycmVudFJldHJ5QXR0ZW1wdCArIDEsXG4gICAgICAgICAgICBzdWJzY3JpYmVyOiBudWxsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzNC5jcmVhdGVTdWJzY3JpYmVyKCk7XG4gICAgICB9LCB0aGlzLnJldHJ5QXR0ZW1wdFRpbWVvdXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rlc3Ryb3lTdWJzY3JpYmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveVN1YnNjcmliZXIoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdmFyIHNlc3Npb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMucHJvcHMuc2Vzc2lvbjtcblxuICAgICAgZGVsZXRlIHRoaXMuc3Vic2NyaWJlcklkO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zdWJzY3JpYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmV2ZW50SGFuZGxlcnMgJiYgX3R5cGVvZih0aGlzLnByb3BzLmV2ZW50SGFuZGxlcnMpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRoaXMuc3RhdGUuc3Vic2NyaWJlci5vbmNlKCdkZXN0cm95ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczUuc3RhdGUuc3Vic2NyaWJlci5vZmYoX3RoaXM1LnByb3BzLmV2ZW50SGFuZGxlcnMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlc3Npb24pIHtcbiAgICAgICAgICBzZXNzaW9uLnVuc3Vic2NyaWJlKHRoaXMuc3RhdGUuc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogc3R5bGUsIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICBfdGhpczYubm9kZSA9IG5vZGU7XG4gICAgICAgIH0gfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9UU3Vic2NyaWJlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE9UU3Vic2NyaWJlcjtcblxuXG5PVFN1YnNjcmliZXIucHJvcFR5cGVzID0ge1xuICBzdHJlYW06IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIHN0cmVhbUlkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xuICB9KSxcbiAgc2Vzc2lvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgc3Vic2NyaWJlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgdW5zdWJzY3JpYmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xuICB9KSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG4gIHByb3BlcnRpZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG4gIHJldHJ5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIG1heFJldHJ5QXR0ZW1wdHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICByZXRyeUF0dGVtcHRUaW1lb3V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgZXZlbnRIYW5kbGVyczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RPZihfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMpLFxuICBvblN1YnNjcmliZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkVycm9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5cbk9UU3Vic2NyaWJlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0cmVhbTogbnVsbCxcbiAgc2Vzc2lvbjogbnVsbCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgc3R5bGU6IHt9LFxuICBwcm9wZXJ0aWVzOiB7fSxcbiAgcmV0cnk6IGZhbHNlLFxuICBtYXhSZXRyeUF0dGVtcHRzOiA1LFxuICByZXRyeUF0dGVtcHRUaW1lb3V0OiAxMDAwLFxuICBldmVudEhhbmRsZXJzOiBudWxsLFxuICBvblN1YnNjcmliZTogbnVsbCxcbiAgb25FcnJvcjogbnVsbFxufTtcblxuT1RTdWJzY3JpYmVyLmNvbnRleHRUeXBlcyA9IHtcbiAgc3RyZWFtOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBzdHJlYW1JZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbiAgfSksXG4gIHNlc3Npb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIHN1YnNjcmliZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIHVuc3Vic2NyaWJlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbiAgfSlcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIFRoaXMgaXMgYSB3cmFwcGVyIGNsYXNzIHRoYXQgZXN0YWJsaXNoZXMgY29udGV4dCBmb3IgYW4gT1RTdWJzY3JpYmVyXG4vLyBpbnN0YW5jZS4gIFRoaXMgYWxsb3dzIHN0cmVhbSB0byBiZSBwYXNzZWQgdG8gdGhlXG4vLyBPVFN1YnNjcmliZXIgd2l0aG91dCByZXF1aXJpbmcgZWFjaCBjaGlsZCBlbGVtZW50IHRvIHBhcyB0aHJvdWdoIHByb3BzLlxuLy8gVGhlcmUgc2hvdWxkIGJlIGEgMToxIHJhdGlvIGJldHdlZW4gT1RTdWJzY3JpYmVyQ29udGV4dCdzIGFuZCBPVFN1YnNjcmliZXIncy5cbi8vIEluIGdlbmVyYWwsIE9UU3Vic2NyaWJlckNvbnRleHQncyBhcmUgZ2VuZXJhdGVkIGJ5IHRoZSBPVFN0cmVhbXMgY29tcG9uZW50XG5cbnZhciBPVFN1YnNjcmliZXJDb250ZXh0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE9UU3Vic2NyaWJlckNvbnRleHQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE9UU3Vic2NyaWJlckNvbnRleHQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9UU3Vic2NyaWJlckNvbnRleHQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChPVFN1YnNjcmliZXJDb250ZXh0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT1RTdWJzY3JpYmVyQ29udGV4dCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE9UU3Vic2NyaWJlckNvbnRleHQsIFt7XG4gICAga2V5OiAnZ2V0Q2hpbGRDb250ZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgcmV0dXJuIHsgc3RyZWFtOiB0aGlzLnByb3BzLnN0cmVhbSB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9UU3Vic2NyaWJlckNvbnRleHQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBPVFN1YnNjcmliZXJDb250ZXh0O1xuXG5cbk9UU3Vic2NyaWJlckNvbnRleHQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LmlzUmVxdWlyZWQsXG4gIHN0cmVhbTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgc3RyZWFtSWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cbk9UU3Vic2NyaWJlckNvbnRleHQuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHN0cmVhbTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgc3RyZWFtSWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG4gIH0pXG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVNlc3Npb247XG5mdW5jdGlvbiBjcmVhdGVTZXNzaW9uKCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBhcGlLZXkgPSBfcmVmLmFwaUtleSxcbiAgICAgIHNlc3Npb25JZCA9IF9yZWYuc2Vzc2lvbklkLFxuICAgICAgdG9rZW4gPSBfcmVmLnRva2VuLFxuICAgICAgb25TdHJlYW1zVXBkYXRlZCA9IF9yZWYub25TdHJlYW1zVXBkYXRlZCxcbiAgICAgIG9uQ29ubmVjdCA9IF9yZWYub25Db25uZWN0LFxuICAgICAgb25FcnJvciA9IF9yZWYub25FcnJvcixcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG5cbiAgaWYgKCFhcGlLZXkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYXBpS2V5Jyk7XG4gIH1cblxuICBpZiAoIXNlc3Npb25JZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBzZXNzaW9uSWQnKTtcbiAgfVxuXG4gIGlmICghdG9rZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdG9rZW4nKTtcbiAgfVxuXG4gIHZhciBzdHJlYW1zID0gW107XG5cbiAgdmFyIG9uU3RyZWFtQ3JlYXRlZCA9IGZ1bmN0aW9uIG9uU3RyZWFtQ3JlYXRlZChldmVudCkge1xuICAgIHZhciBpbmRleCA9IHN0cmVhbXMuZmluZEluZGV4KGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgICAgIHJldHVybiBzdHJlYW0uaWQgPT09IGV2ZW50LnN0cmVhbS5pZDtcbiAgICB9KTtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBzdHJlYW1zLnB1c2goZXZlbnQuc3RyZWFtKTtcbiAgICAgIG9uU3RyZWFtc1VwZGF0ZWQoc3RyZWFtcyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBvblN0cmVhbURlc3Ryb3llZCA9IGZ1bmN0aW9uIG9uU3RyZWFtRGVzdHJveWVkKGV2ZW50KSB7XG4gICAgdmFyIGluZGV4ID0gc3RyZWFtcy5maW5kSW5kZXgoZnVuY3Rpb24gKHN0cmVhbSkge1xuICAgICAgcmV0dXJuIHN0cmVhbS5pZCA9PT0gZXZlbnQuc3RyZWFtLmlkO1xuICAgIH0pO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBzdHJlYW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBvblN0cmVhbXNVcGRhdGVkKHN0cmVhbXMpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZXZlbnRIYW5kbGVycyA9IHtcbiAgICBzdHJlYW1DcmVhdGVkOiBvblN0cmVhbUNyZWF0ZWQsXG4gICAgc3RyZWFtRGVzdHJveWVkOiBvblN0cmVhbURlc3Ryb3llZFxuICB9O1xuXG4gIHZhciBzZXNzaW9uID0gT1QuaW5pdFNlc3Npb24oYXBpS2V5LCBzZXNzaW9uSWQsIG9wdGlvbnMpO1xuICBzZXNzaW9uLm9uKGV2ZW50SGFuZGxlcnMpO1xuICBzZXNzaW9uLmNvbm5lY3QodG9rZW4sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgIC8vIEVpdGhlciB0aGlzIHNlc3Npb24gaGFzIGJlZW4gZGlzY29ubmVjdGVkIG9yIE9UU2Vzc2lvblxuICAgICAgLy8gaGFzIGJlZW4gdW5tb3VudGVkIHNvIGRvbid0IGludm9rZSBhbnkgY2FsbGJhY2tzXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlcnIgJiYgdHlwZW9mIG9uRXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICB9IGVsc2UgaWYgKCFlcnIgJiYgdHlwZW9mIG9uQ29ubmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb25Db25uZWN0KCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHNlc3Npb246IHNlc3Npb24sXG4gICAgc3RyZWFtczogc3RyZWFtcyxcbiAgICBkaXNjb25uZWN0OiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgaWYgKHNlc3Npb24pIHtcbiAgICAgICAgc2Vzc2lvbi5vZmYoZXZlbnRIYW5kbGVycyk7XG4gICAgICAgIHNlc3Npb24uZGlzY29ubmVjdCgpO1xuICAgICAgfVxuXG4gICAgICBzdHJlYW1zID0gbnVsbDtcbiAgICAgIG9uU3RyZWFtQ3JlYXRlZCA9IG51bGw7XG4gICAgICBvblN0cmVhbURlc3Ryb3llZCA9IG51bGw7XG4gICAgICBldmVudEhhbmRsZXJzID0gbnVsbDtcbiAgICAgIHNlc3Npb24gPSBudWxsO1xuXG4gICAgICB0aGlzLnNlc3Npb24gPSBudWxsO1xuICAgICAgdGhpcy5zdHJlYW1zID0gbnVsbDtcbiAgICB9XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5wcmVsb2FkU2NyaXB0ID0gZXhwb3J0cy5jcmVhdGVTZXNzaW9uID0gZXhwb3J0cy5PVFN1YnNjcmliZXIgPSBleHBvcnRzLk9UU3RyZWFtcyA9IGV4cG9ydHMuT1RQdWJsaXNoZXIgPSBleHBvcnRzLk9UU2Vzc2lvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9PVFNlc3Npb24gPSByZXF1aXJlKCcuL09UU2Vzc2lvbicpO1xuXG52YXIgX09UU2Vzc2lvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PVFNlc3Npb24pO1xuXG52YXIgX09UUHVibGlzaGVyID0gcmVxdWlyZSgnLi9PVFB1Ymxpc2hlcicpO1xuXG52YXIgX09UUHVibGlzaGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX09UUHVibGlzaGVyKTtcblxudmFyIF9PVFN0cmVhbXMgPSByZXF1aXJlKCcuL09UU3RyZWFtcycpO1xuXG52YXIgX09UU3RyZWFtczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9PVFN0cmVhbXMpO1xuXG52YXIgX09UU3Vic2NyaWJlciA9IHJlcXVpcmUoJy4vT1RTdWJzY3JpYmVyJyk7XG5cbnZhciBfT1RTdWJzY3JpYmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX09UU3Vic2NyaWJlcik7XG5cbnZhciBfY3JlYXRlU2Vzc2lvbiA9IHJlcXVpcmUoJy4vY3JlYXRlU2Vzc2lvbicpO1xuXG52YXIgX2NyZWF0ZVNlc3Npb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlU2Vzc2lvbik7XG5cbnZhciBfcHJlbG9hZFNjcmlwdCA9IHJlcXVpcmUoJy4vcHJlbG9hZFNjcmlwdCcpO1xuXG52YXIgX3ByZWxvYWRTY3JpcHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlbG9hZFNjcmlwdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgT1RTZXNzaW9uOiBfT1RTZXNzaW9uMi5kZWZhdWx0LFxuICBPVFB1Ymxpc2hlcjogX09UUHVibGlzaGVyMi5kZWZhdWx0LFxuICBPVFN0cmVhbXM6IF9PVFN0cmVhbXMyLmRlZmF1bHQsXG4gIE9UU3Vic2NyaWJlcjogX09UU3Vic2NyaWJlcjIuZGVmYXVsdCxcbiAgY3JlYXRlU2Vzc2lvbjogX2NyZWF0ZVNlc3Npb24yLmRlZmF1bHQsXG4gIHByZWxvYWRTY3JpcHQ6IF9wcmVsb2FkU2NyaXB0Mi5kZWZhdWx0XG59O1xuZXhwb3J0cy5PVFNlc3Npb24gPSBfT1RTZXNzaW9uMi5kZWZhdWx0O1xuZXhwb3J0cy5PVFB1Ymxpc2hlciA9IF9PVFB1Ymxpc2hlcjIuZGVmYXVsdDtcbmV4cG9ydHMuT1RTdHJlYW1zID0gX09UU3RyZWFtczIuZGVmYXVsdDtcbmV4cG9ydHMuT1RTdWJzY3JpYmVyID0gX09UU3Vic2NyaWJlcjIuZGVmYXVsdDtcbmV4cG9ydHMuY3JlYXRlU2Vzc2lvbiA9IF9jcmVhdGVTZXNzaW9uMi5kZWZhdWx0O1xuZXhwb3J0cy5wcmVsb2FkU2NyaXB0ID0gX3ByZWxvYWRTY3JpcHQyLmRlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBwcmVsb2FkU2NyaXB0O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RGlzcGxheU5hbWUgPSByZXF1aXJlKCdyZWFjdC1kaXNwbGF5LW5hbWUnKTtcblxudmFyIF9yZWFjdERpc3BsYXlOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RGlzcGxheU5hbWUpO1xuXG52YXIgX3NjcmlwdGpzID0gcmVxdWlyZSgnc2NyaXB0anMnKTtcblxudmFyIF9zY3JpcHRqczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY3JpcHRqcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgREVGQVVMVF9TQ1JJUFRfVVJMID0gJ2h0dHBzOi8vc3RhdGljLm9wZW50b2suY29tL3YyL2pzL29wZW50b2subWluLmpzJztcblxuLypcblRoaXMgaGlnaGVyLW9yZGVyIGNvbXBvbmVudCB3aWxsIGxvYWQgdGhlIE9wZW5Ub2sgY2xpZW50IHRocnUgYSBzY3JpcHQgdGFnLlxuSXQgd2lsbCByZW5kZXIgaXRzIGlubmVyIGNvbXBvbmVudCBvbmx5IHdoZW4gdGhlIE9wZW5Ub2sgY2xpZW50IGhhcyBsb2FkZWQuXG5JbiB0aGUgbWVhbnRpbWUsIGl0IHdpbGwgcmVuZGVyIGEgbG9hZGluZyBlbGVtZW50IGNob3NlbiBieSB0aGUgZGV2ZWxvcGVyLlxuKi9cbmZ1bmN0aW9uIHByZWxvYWRTY3JpcHQoSW5uZXJDb21wb25lbnQpIHtcbiAgdmFyIFByZWxvYWRTY3JpcHQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhQcmVsb2FkU2NyaXB0LCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFByZWxvYWRTY3JpcHQocHJvcHMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcmVsb2FkU2NyaXB0KTtcblxuICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFByZWxvYWRTY3JpcHQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQcmVsb2FkU2NyaXB0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICBfdGhpcy5vblNjcmlwdExvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5pc1ByZXNlbnQpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHNjcmlwdExvYWRlZDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIHNjcmlwdExvYWRlZDogdHlwZW9mIE9UICE9PSAndW5kZWZpbmVkJ1xuICAgICAgfTtcbiAgICAgIF90aGlzLmlzUHJlc2VudCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQcmVsb2FkU2NyaXB0LCBbe1xuICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmlzUHJlc2VudCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuc2NyaXB0TG9hZGluZyB8fCB0aGlzLnN0YXRlLnNjcmlwdExvYWRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NyaXB0TG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgdmFyIHNjcmlwdFVybCA9IHRoaXMucHJvcHMub3BlbnRva0NsaWVudFVybDtcbiAgICAgICAgKDAsIF9zY3JpcHRqczIuZGVmYXVsdCkoc2NyaXB0VXJsLCB0aGlzLm9uU2NyaXB0TG9hZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLmlzUHJlc2VudCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIG9wZW50b2tDbGllbnRVcmwgPSBfcHJvcHMub3BlbnRva0NsaWVudFVybCxcbiAgICAgICAgICAgIGxvYWRpbmdEZWxlZ2F0ZSA9IF9wcm9wcy5sb2FkaW5nRGVsZWdhdGUsXG4gICAgICAgICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ29wZW50b2tDbGllbnRVcmwnLCAnbG9hZGluZ0RlbGVnYXRlJ10pO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNjcmlwdExvYWRlZCkge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChJbm5lckNvbXBvbmVudCwgcmVzdFByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsb2FkaW5nRGVsZWdhdGU7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFByZWxvYWRTY3JpcHQ7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgUHJlbG9hZFNjcmlwdC5kaXNwbGF5TmFtZSA9ICdwcmVsb2FkU2NyaXB0KCcgKyAoMCwgX3JlYWN0RGlzcGxheU5hbWUyLmRlZmF1bHQpKElubmVyQ29tcG9uZW50KSArICcpJztcbiAgUHJlbG9hZFNjcmlwdC5wcm9wVHlwZXMgPSB7XG4gICAgb3BlbnRva0NsaWVudFVybDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbG9hZGluZ0RlbGVnYXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbiAgfTtcbiAgUHJlbG9hZFNjcmlwdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb3BlbnRva0NsaWVudFVybDogREVGQVVMVF9TQ1JJUFRfVVJMLFxuICAgIGxvYWRpbmdEZWxlZ2F0ZTogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwpXG4gIH07XG5cbiAgcmV0dXJuIFByZWxvYWRTY3JpcHQ7XG59XG4iLCJ2YXIgdjEgPSByZXF1aXJlKCcuL3YxJyk7XG52YXIgdjQgPSByZXF1aXJlKCcuL3Y0Jyk7XG5cbnZhciB1dWlkID0gdjQ7XG51dWlkLnYxID0gdjE7XG51dWlkLnY0ID0gdjQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXVpZDtcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXVxuICBdKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgcmV0dXJuIENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAodHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZycgJiYgQ29tcG9uZW50Lmxlbmd0aCA+IDAgPyBDb21wb25lbnQgOiAnVW5rbm93bicpO1xufSIsIi8qIVxuICAqICRzY3JpcHQuanMgSlMgbG9hZGVyICYgZGVwZW5kZW5jeSBtYW5hZ2VyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2RlZC9zY3JpcHQuanNcbiAgKiAoYykgRHVzdGluIERpYXogMjAxNCB8IExpY2Vuc2UgTUlUXG4gICovXG5cbihmdW5jdGlvbiAobmFtZSwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIHRoaXNbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0pKCckc2NyaXB0JywgZnVuY3Rpb24gKCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnRcbiAgICAsIGhlYWQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICAgICwgcyA9ICdzdHJpbmcnXG4gICAgLCBmID0gZmFsc2VcbiAgICAsIHB1c2ggPSAncHVzaCdcbiAgICAsIHJlYWR5U3RhdGUgPSAncmVhZHlTdGF0ZSdcbiAgICAsIG9ucmVhZHlzdGF0ZWNoYW5nZSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICAgLCBsaXN0ID0ge31cbiAgICAsIGlkcyA9IHt9XG4gICAgLCBkZWxheSA9IHt9XG4gICAgLCBzY3JpcHRzID0ge31cbiAgICAsIHNjcmlwdHBhdGhcbiAgICAsIHVybEFyZ3NcblxuICBmdW5jdGlvbiBldmVyeShhciwgZm4pIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGFyLmxlbmd0aDsgaSA8IGo7ICsraSkgaWYgKCFmbihhcltpXSkpIHJldHVybiBmXG4gICAgcmV0dXJuIDFcbiAgfVxuICBmdW5jdGlvbiBlYWNoKGFyLCBmbikge1xuICAgIGV2ZXJ5KGFyLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGZuKGVsKVxuICAgICAgcmV0dXJuIDFcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gJHNjcmlwdChwYXRocywgaWRPckRvbmUsIG9wdERvbmUpIHtcbiAgICBwYXRocyA9IHBhdGhzW3B1c2hdID8gcGF0aHMgOiBbcGF0aHNdXG4gICAgdmFyIGlkT3JEb25lSXNEb25lID0gaWRPckRvbmUgJiYgaWRPckRvbmUuY2FsbFxuICAgICAgLCBkb25lID0gaWRPckRvbmVJc0RvbmUgPyBpZE9yRG9uZSA6IG9wdERvbmVcbiAgICAgICwgaWQgPSBpZE9yRG9uZUlzRG9uZSA/IHBhdGhzLmpvaW4oJycpIDogaWRPckRvbmVcbiAgICAgICwgcXVldWUgPSBwYXRocy5sZW5ndGhcbiAgICBmdW5jdGlvbiBsb29wRm4oaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uY2FsbCA/IGl0ZW0oKSA6IGxpc3RbaXRlbV1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBpZiAoIS0tcXVldWUpIHtcbiAgICAgICAgbGlzdFtpZF0gPSAxXG4gICAgICAgIGRvbmUgJiYgZG9uZSgpXG4gICAgICAgIGZvciAodmFyIGRzZXQgaW4gZGVsYXkpIHtcbiAgICAgICAgICBldmVyeShkc2V0LnNwbGl0KCd8JyksIGxvb3BGbikgJiYgIWVhY2goZGVsYXlbZHNldF0sIGxvb3BGbikgJiYgKGRlbGF5W2RzZXRdID0gW10pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBlYWNoKHBhdGhzLCBmdW5jdGlvbiBsb2FkaW5nKHBhdGgsIGZvcmNlKSB7XG4gICAgICAgIGlmIChwYXRoID09PSBudWxsKSByZXR1cm4gY2FsbGJhY2soKVxuICAgICAgICBcbiAgICAgICAgaWYgKCFmb3JjZSAmJiAhL15odHRwcz86XFwvXFwvLy50ZXN0KHBhdGgpICYmIHNjcmlwdHBhdGgpIHtcbiAgICAgICAgICBwYXRoID0gKHBhdGguaW5kZXhPZignLmpzJykgPT09IC0xKSA/IHNjcmlwdHBhdGggKyBwYXRoICsgJy5qcycgOiBzY3JpcHRwYXRoICsgcGF0aDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHNjcmlwdHNbcGF0aF0pIHtcbiAgICAgICAgICBpZiAoaWQpIGlkc1tpZF0gPSAxXG4gICAgICAgICAgcmV0dXJuIChzY3JpcHRzW3BhdGhdID09IDIpID8gY2FsbGJhY2soKSA6IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBsb2FkaW5nKHBhdGgsIHRydWUpIH0sIDApXG4gICAgICAgIH1cblxuICAgICAgICBzY3JpcHRzW3BhdGhdID0gMVxuICAgICAgICBpZiAoaWQpIGlkc1tpZF0gPSAxXG4gICAgICAgIGNyZWF0ZShwYXRoLCBjYWxsYmFjaylcbiAgICAgIH0pXG4gICAgfSwgMClcbiAgICByZXR1cm4gJHNjcmlwdFxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlKHBhdGgsIGZuKSB7XG4gICAgdmFyIGVsID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpLCBsb2FkZWRcbiAgICBlbC5vbmxvYWQgPSBlbC5vbmVycm9yID0gZWxbb25yZWFkeXN0YXRlY2hhbmdlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgoZWxbcmVhZHlTdGF0ZV0gJiYgISgvXmN8bG9hZGUvLnRlc3QoZWxbcmVhZHlTdGF0ZV0pKSkgfHwgbG9hZGVkKSByZXR1cm47XG4gICAgICBlbC5vbmxvYWQgPSBlbFtvbnJlYWR5c3RhdGVjaGFuZ2VdID0gbnVsbFxuICAgICAgbG9hZGVkID0gMVxuICAgICAgc2NyaXB0c1twYXRoXSA9IDJcbiAgICAgIGZuKClcbiAgICB9XG4gICAgZWwuYXN5bmMgPSAxXG4gICAgZWwuc3JjID0gdXJsQXJncyA/IHBhdGggKyAocGF0aC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHVybEFyZ3MgOiBwYXRoO1xuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKGVsLCBoZWFkLmxhc3RDaGlsZClcbiAgfVxuXG4gICRzY3JpcHQuZ2V0ID0gY3JlYXRlXG5cbiAgJHNjcmlwdC5vcmRlciA9IGZ1bmN0aW9uIChzY3JpcHRzLCBpZCwgZG9uZSkge1xuICAgIChmdW5jdGlvbiBjYWxsYmFjayhzKSB7XG4gICAgICBzID0gc2NyaXB0cy5zaGlmdCgpXG4gICAgICAhc2NyaXB0cy5sZW5ndGggPyAkc2NyaXB0KHMsIGlkLCBkb25lKSA6ICRzY3JpcHQocywgY2FsbGJhY2spXG4gICAgfSgpKVxuICB9XG5cbiAgJHNjcmlwdC5wYXRoID0gZnVuY3Rpb24gKHApIHtcbiAgICBzY3JpcHRwYXRoID0gcFxuICB9XG4gICRzY3JpcHQudXJsQXJncyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB1cmxBcmdzID0gc3RyO1xuICB9XG4gICRzY3JpcHQucmVhZHkgPSBmdW5jdGlvbiAoZGVwcywgcmVhZHksIHJlcSkge1xuICAgIGRlcHMgPSBkZXBzW3B1c2hdID8gZGVwcyA6IFtkZXBzXVxuICAgIHZhciBtaXNzaW5nID0gW107XG4gICAgIWVhY2goZGVwcywgZnVuY3Rpb24gKGRlcCkge1xuICAgICAgbGlzdFtkZXBdIHx8IG1pc3NpbmdbcHVzaF0oZGVwKTtcbiAgICB9KSAmJiBldmVyeShkZXBzLCBmdW5jdGlvbiAoZGVwKSB7cmV0dXJuIGxpc3RbZGVwXX0pID9cbiAgICAgIHJlYWR5KCkgOiAhZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVsYXlba2V5XSA9IGRlbGF5W2tleV0gfHwgW11cbiAgICAgIGRlbGF5W2tleV1bcHVzaF0ocmVhZHkpXG4gICAgICByZXEgJiYgcmVxKG1pc3NpbmcpXG4gICAgfShkZXBzLmpvaW4oJ3wnKSlcbiAgICByZXR1cm4gJHNjcmlwdFxuICB9XG5cbiAgJHNjcmlwdC5kb25lID0gZnVuY3Rpb24gKGlkT3JEb25lKSB7XG4gICAgJHNjcmlwdChbbnVsbF0sIGlkT3JEb25lKVxuICB9XG5cbiAgcmV0dXJuICRzY3JpcHRcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==