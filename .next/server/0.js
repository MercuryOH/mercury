exports.ids = [0];
exports.modules = {

/***/ "./components/publisher.js":
/*!*********************************!*\
  !*** ./components/publisher.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Publisher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _screenPublisher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screenPublisher */ "./components/screenPublisher.js");
/* harmony import */ var opentok_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! opentok-react */ "opentok-react");
/* harmony import */ var opentok_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(opentok_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_EventEmitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/EventEmitter */ "./components/util/EventEmitter.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Publisher extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onError", err => {
      this.setState({
        error: `Failed to publish: ${err.message}`
      });
      _util_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"].publish('leaveCallOnError');
    });

    this.state = {
      error: null,
      audio: true,
      video: true
    };
    this.defineEventEmitterCallbacks();
  }

  defineEventEmitterCallbacks() {
    _util_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"].subscribe('disableVideo', () => {
      this.setState({
        video: false
      });
      _util_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"].publish('disableVideoButton');
    });
    _util_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"].subscribe('enableVideo', () => {
      this.setState({
        video: true
      });
      _util_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"].publish('enableVideoButton');
    });
  }

  render() {
    return __jsx("div", null, this.state.error ? __jsx("div", null, "We noticed you denied access to your microphone or camera. Please click the camera/microphone blocked icon in your browser's address bar, allow access, and then refresh the page and rejoin the call. You will be able to mute yourself or disable your video once you join a call.") : null, __jsx(opentok_react__WEBPACK_IMPORTED_MODULE_2__["OTPublisher"], {
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
    }), __jsx(_screenPublisher__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

}

/***/ }),

/***/ "./components/screenContainer.js":
/*!***************************************!*\
  !*** ./components/screenContainer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _publisher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publisher */ "./components/publisher.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_EventEmitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/EventEmitter */ "./components/util/EventEmitter.js");
/* harmony import */ var opentok_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! opentok-react */ "opentok-react");
/* harmony import */ var opentok_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(opentok_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class ScreenContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handlePublish", () => {
      console.log('Successfully published!');
    });

    _defineProperty(this, "handleSubscribe", () => {
      console.log('Subscribed!');
    });

    _defineProperty(this, "handleSessionError", error => {
      console.error(error);
    });

    _defineProperty(this, "handlePublishError", error => {
      console.error(error);
    });

    _defineProperty(this, "handleSubscribeError", error => {
      console.error(error);
    });

    this.state = {
      ssButton: true,
      streams: [],
      focusStream: {},
      videoButton: true,
      expand: false,
      searchName: '',
      searchSession: ''
    };
    this.defineEventEmitterCallbacks();
    this.sessionEventHandlers = {
      sessionConnected: () => {},
      sessionDisconnected: () => {},
      sessionReconnected: () => {},
      sessionReconnecting: () => {}
    };
    this.publishEventHandlers = {
      accessDenied: () => {},
      streamCreated: () => {},
      streamDestroyed: () => {}
    };
    this.subscribeEventHandlers = {
      videoEnabled: () => {},
      videoDisabled: () => {}
    };
  }

  defineEventEmitterCallbacks() {
    _util_EventEmitter__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"].subscribe('disableVideoButton', () => {
      this.setState({
        videoButton: false
      });
    });
    _util_EventEmitter__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"].subscribe('enableVideoButton', () => {
      this.setState({
        videoButton: true
      });
    });
    _util_EventEmitter__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"].subscribe('newScreensharer', msg => {
      if (this.props.sessionId === msg.sessionId) {
        this.setState({
          focusStream: lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(this.state.streams, {
            'name': msg.name
          }),
          expand: true
        });
      }
    });
  }

  getStreamToDisplay() {
    return this.state.expand === true && this.state.focusStream != undefined ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onDoubleClick: () => {
        this.setState({
          focusStream: {}
        });
        this.setState({
          expand: false
        });
      },
      style: {
        padding: '0px',
        width: '100%',
        maxHeight: '75vh',
        margin: '0px'
      }
    }, __jsx(opentok_react__WEBPACK_IMPORTED_MODULE_5__["OTSubscriber"], {
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

  screenShareButton() {
    return this.state.ssButton === true ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: () => {
        _util_EventEmitter__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"].publish('startScreenShare');
        this.setState({
          ssButton: false
        });
      },
      style: {
        fontSize: '.8vw',
        display: 'inline-flex'
      },
      icon: "tv",
      content: "Share Screen"
    }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: () => {
        _util_EventEmitter__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"].publish('stopScreenShare');
        this.setState({
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

  videoStateButton() {
    return this.state.videoButton === true ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: () => {
        _util_EventEmitter__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"].publish('disableVideo');
      },
      icon: "hide",
      style: {
        fontSize: '.8vw',
        display: 'inline-flex'
      },
      content: "Disable video"
    }) : __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: () => {
        _util_EventEmitter__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"].publish('enableVideo');
      },
      icon: "eye",
      style: {
        fontSize: '.8vw',
        display: 'inline-flex'
      },
      content: "Enable video"
    });
  }

  componentWillMount() {
    const {
      sessionId,
      token
    } = this.props;
    this.sessionHelper = Object(opentok_react__WEBPACK_IMPORTED_MODULE_5__["createSession"])({
      apiKey: `${"46858704"}`,
      sessionId: `${sessionId}`,
      token: `${token}`,
      onStreamsUpdated: streams => {
        this.setState({
          streams
        });
      }
    });
  }

  componentWillUnmount() {
    this.sessionHelper.disconnect();
  }

  render() {
    const {
      onLeave
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
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
    }, __jsx(_publisher__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        width: '13.57vw',
        maxWidth: '13.57vw',
        marginBottom: '5px'
      },
      session: this.sessionHelper.session,
      name: this.props.name
    }), this.state.streams.map(stream => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onDoubleClick: () => {
        this.setState({
          focusStream: stream
        });
        this.setState({
          expand: true
        });
      },
      style: {
        padding: '0px',
        width: '100%',
        maxHeight: '18vh',
        margin: '0px'
      }
    }, __jsx(opentok_react__WEBPACK_IMPORTED_MODULE_5__["OTSubscriber"], {
      key: stream.id,
      session: this.sessionHelper.session,
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
      onSubscribe: this.handleSubscribe,
      onError: this.handleSubscribeError
    })))))), this.videoStateButton(), this.screenShareButton(), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
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

}

ScreenContainer.propTypes = {
  sessionId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  token: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ScreenContainer);

/***/ }),

/***/ "./components/screenPublisher.js":
/*!***************************************!*\
  !*** ./components/screenPublisher.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScreenPublisher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var opentok_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! opentok-react */ "opentok-react");
/* harmony import */ var opentok_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(opentok_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_EventEmitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/EventEmitter */ "./components/util/EventEmitter.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class ScreenPublisher extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onError", err => {
      this.setState({
        error: `Failed to publish: ${err.message}`
      });
      _util_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"].publish('leaveCallOnError');
    });

    this.state = {
      error: null,
      audio: true,
      video: true,
      videoSource: 'screen',
      appear: false
    };
    this.defineEventEmitterCallbacks();
  }

  defineEventEmitterCallbacks() {
    _util_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"].subscribe('startScreenShare', () => {
      this.setState({
        appear: true
      });
    });
    _util_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"].subscribe('stopScreenShare', () => {
      this.setState({
        appear: false
      });
    });
  }

  render() {
    return this.state.appear === false ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.error ? __jsx("div", null, "We noticed you denied access to your screen. Please click the screen blocked icon in your browser's address bar, allow access, and then refresh the page and rejoin the call.") : null, __jsx(opentok_react__WEBPACK_IMPORTED_MODULE_1__["OTPublisher"], {
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
      onPublish: () => {
        _util_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"].publish('screenShareOn', {
          name: this.props.name,
          sessionId: this.props.session.sessionId
        });
      },
      session: this.props.session,
      onError: this.onError
    }));
  }

}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1Ymxpc2hlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NjcmVlbkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NjcmVlblB1Ymxpc2hlci5qcyJdLCJuYW1lcyI6WyJQdWJsaXNoZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZXJyIiwic2V0U3RhdGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJFdmVudEVtaXR0ZXIiLCJwdWJsaXNoIiwic3RhdGUiLCJhdWRpbyIsInZpZGVvIiwiZGVmaW5lRXZlbnRFbWl0dGVyQ2FsbGJhY2tzIiwic3Vic2NyaWJlIiwicmVuZGVyIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInB1Ymxpc2hWaWRlbyIsIm1hcmdpbkJvdHRvbSIsIm5hbWUiLCJzdHlsZSIsImJ1dHRvbkRpc3BsYXlNb2RlIiwibmFtZURpc3BsYXlNb2RlIiwic2Vzc2lvbiIsIm9uRXJyb3IiLCJoZWlnaHQiLCJTY3JlZW5Db250YWluZXIiLCJSZWFjdCIsImNvbnNvbGUiLCJsb2ciLCJzc0J1dHRvbiIsInN0cmVhbXMiLCJmb2N1c1N0cmVhbSIsInZpZGVvQnV0dG9uIiwiZXhwYW5kIiwic2VhcmNoTmFtZSIsInNlYXJjaFNlc3Npb24iLCJzZXNzaW9uRXZlbnRIYW5kbGVycyIsInNlc3Npb25Db25uZWN0ZWQiLCJzZXNzaW9uRGlzY29ubmVjdGVkIiwic2Vzc2lvblJlY29ubmVjdGVkIiwic2Vzc2lvblJlY29ubmVjdGluZyIsInB1Ymxpc2hFdmVudEhhbmRsZXJzIiwiYWNjZXNzRGVuaWVkIiwic3RyZWFtQ3JlYXRlZCIsInN0cmVhbURlc3Ryb3llZCIsInN1YnNjcmliZUV2ZW50SGFuZGxlcnMiLCJ2aWRlb0VuYWJsZWQiLCJ2aWRlb0Rpc2FibGVkIiwibXNnIiwic2Vzc2lvbklkIiwiXyIsImZpbmQiLCJnZXRTdHJlYW1Ub0Rpc3BsYXkiLCJ1bmRlZmluZWQiLCJwYWRkaW5nIiwibWFyZ2luIiwiaWQiLCJzZXNzaW9uSGVscGVyIiwiaGFuZGxlU3Vic2NyaWJlIiwiaGFuZGxlU3Vic2NyaWJlRXJyb3IiLCJzY3JlZW5TaGFyZUJ1dHRvbiIsImZvbnRTaXplIiwiZGlzcGxheSIsInZpZGVvU3RhdGVCdXR0b24iLCJjb21wb25lbnRXaWxsTW91bnQiLCJ0b2tlbiIsImNyZWF0ZVNlc3Npb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwib25TdHJlYW1zVXBkYXRlZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZGlzY29ubmVjdCIsIm9uTGVhdmUiLCJvdmVyZmxvdyIsIm1hcCIsInN0cmVhbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiU2NyZWVuUHVibGlzaGVyIiwidmlkZW9Tb3VyY2UiLCJhcHBlYXIiLCJwdWJsaXNoQXVkaW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxNQUFNQSxTQUFOLFNBQXdCQywrQ0FBeEIsQ0FBa0M7QUFDL0NDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLHFDQXNCUkMsR0FBRCxJQUFTO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYztBQUFFQyxhQUFLLEVBQUcsc0JBQXFCRixHQUFHLENBQUNHLE9BQVE7QUFBM0MsT0FBZDtBQUNBQyxxRUFBWSxDQUFDQyxPQUFiLENBQXFCLGtCQUFyQjtBQUNELEtBekJrQjs7QUFHakIsU0FBS0MsS0FBTCxHQUFhO0FBQ1hKLFdBQUssRUFBRSxJQURJO0FBRVhLLFdBQUssRUFBRSxJQUZJO0FBR1hDLFdBQUssRUFBRTtBQUhJLEtBQWI7QUFLQSxTQUFLQywyQkFBTDtBQUNEOztBQUVEQSw2QkFBMkIsR0FBRztBQUM1QkwsbUVBQVksQ0FBQ00sU0FBYixDQUF1QixjQUF2QixFQUF1QyxNQUFNO0FBQzNDLFdBQUtULFFBQUwsQ0FBYztBQUFFTyxhQUFLLEVBQUU7QUFBVCxPQUFkO0FBQ0FKLHFFQUFZLENBQUNDLE9BQWIsQ0FBcUIsb0JBQXJCO0FBQ0QsS0FIRDtBQUlBRCxtRUFBWSxDQUFDTSxTQUFiLENBQXVCLGFBQXZCLEVBQXNDLE1BQU07QUFDMUMsV0FBS1QsUUFBTCxDQUFjO0FBQUVPLGFBQUssRUFBRTtBQUFULE9BQWQ7QUFDQUoscUVBQVksQ0FBQ0MsT0FBYixDQUFxQixtQkFBckI7QUFDRCxLQUhEO0FBSUQ7O0FBT0RNLFFBQU0sR0FBRztBQUNQLFdBQ0UsbUJBQ0csS0FBS0wsS0FBTCxDQUFXSixLQUFYLEdBQW1CLG1CQUFNLHNSQUFOLENBQW5CLEdBQXlULElBRDVULEVBRUUsTUFBQyx5REFBRDtBQUNFLGdCQUFVLEVBQUU7QUFDVlUsYUFBSyxFQUFFLFNBREc7QUFFVkMsZ0JBQVEsRUFBRSxTQUZBO0FBR1ZDLGlCQUFTLEVBQUUsS0FIRDtBQUlWQyxvQkFBWSxFQUFFLEtBQUtULEtBQUwsQ0FBV0UsS0FKZjtBQUtWUSxvQkFBWSxFQUFFLEtBTEo7QUFNVkMsWUFBSSxFQUFFLEtBQUtsQixLQUFMLENBQVdrQixJQU5QO0FBT1ZDLGFBQUssRUFBRTtBQUNMQywyQkFBaUIsRUFBRSxJQURkO0FBRUxDLHlCQUFlLEVBQUU7QUFGWjtBQVBHLE9BRGQ7QUFhRSxhQUFPLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV3NCLE9BYnRCO0FBY0UsYUFBTyxFQUFFLEtBQUtDO0FBZGhCLE1BRkYsRUFrQkUsTUFBQyx3REFBRDtBQUNFLFdBQUssRUFBRTtBQUNMVixhQUFLLEVBQUUsU0FERjtBQUVMQyxnQkFBUSxFQUFFLFNBRkw7QUFHTFUsY0FBTSxFQUFFLE9BSEg7QUFJTFQsaUJBQVMsRUFBRSxNQUpOO0FBS0xFLG9CQUFZLEVBQUU7QUFMVCxPQURUO0FBUUUsYUFBTyxFQUFFLEtBQUtqQixLQUFMLENBQVdzQixPQVJ0QjtBQVNFLFVBQUksRUFBSSxLQUFLdEIsS0FBTCxDQUFXa0IsSUFBWCxHQUFrQjtBQVQ1QixNQWxCRixDQURGO0FBZ0NEOztBQTdEOEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTU8sZUFBTixTQUE4QkMsNENBQUssQ0FBQzVCLFNBQXBDLENBQThDO0FBQzVDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOOztBQURpQiwyQ0FpQ0gsTUFBTTtBQUNwQjJCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0QsS0FuQ2tCOztBQUFBLDZDQXFDRCxNQUFNO0FBQ3RCRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0QsS0F2Q2tCOztBQUFBLGdEQXlDR3pCLEtBQUQsSUFBVztBQUM5QndCLGFBQU8sQ0FBQ3hCLEtBQVIsQ0FBY0EsS0FBZDtBQUNELEtBM0NrQjs7QUFBQSxnREE2Q0dBLEtBQUQsSUFBVztBQUM5QndCLGFBQU8sQ0FBQ3hCLEtBQVIsQ0FBY0EsS0FBZDtBQUNELEtBL0NrQjs7QUFBQSxrREFpREtBLEtBQUQsSUFBVztBQUNoQ3dCLGFBQU8sQ0FBQ3hCLEtBQVIsQ0FBY0EsS0FBZDtBQUNELEtBbkRrQjs7QUFFakIsU0FBS0ksS0FBTCxHQUFhO0FBQ1hzQixjQUFRLEVBQUUsSUFEQztBQUVYQyxhQUFPLEVBQUUsRUFGRTtBQUdYQyxpQkFBVyxFQUFFLEVBSEY7QUFJWEMsaUJBQVcsRUFBRSxJQUpGO0FBS1hDLFlBQU0sRUFBRSxLQUxHO0FBTVhDLGdCQUFVLEVBQUUsRUFORDtBQU9YQyxtQkFBYSxFQUFFO0FBUEosS0FBYjtBQVVBLFNBQUt6QiwyQkFBTDtBQUVBLFNBQUswQixvQkFBTCxHQUE0QjtBQUMxQkMsc0JBQWdCLEVBQUUsTUFBTSxDQUFFLENBREE7QUFFMUJDLHlCQUFtQixFQUFFLE1BQU0sQ0FBRSxDQUZIO0FBRzFCQyx3QkFBa0IsRUFBRSxNQUFNLENBQUUsQ0FIRjtBQUkxQkMseUJBQW1CLEVBQUUsTUFBTSxDQUFFO0FBSkgsS0FBNUI7QUFPQSxTQUFLQyxvQkFBTCxHQUE0QjtBQUMxQkMsa0JBQVksRUFBRSxNQUFNLENBQUUsQ0FESTtBQUUxQkMsbUJBQWEsRUFBRSxNQUFNLENBQUUsQ0FGRztBQUcxQkMscUJBQWUsRUFBRSxNQUFNLENBQUU7QUFIQyxLQUE1QjtBQU1BLFNBQUtDLHNCQUFMLEdBQThCO0FBQzVCQyxrQkFBWSxFQUFFLE1BQU0sQ0FBRSxDQURNO0FBRTVCQyxtQkFBYSxFQUFFLE1BQU0sQ0FBRTtBQUZLLEtBQTlCO0FBSUQ7O0FBc0JEckMsNkJBQTJCLEdBQUc7QUFDNUJMLG1FQUFZLENBQUNNLFNBQWIsQ0FBdUIsb0JBQXZCLEVBQTZDLE1BQU07QUFDakQsV0FBS1QsUUFBTCxDQUFjO0FBQUU4QixtQkFBVyxFQUFFO0FBQWYsT0FBZDtBQUNELEtBRkQ7QUFJQTNCLG1FQUFZLENBQUNNLFNBQWIsQ0FBdUIsbUJBQXZCLEVBQTRDLE1BQU07QUFDaEQsV0FBS1QsUUFBTCxDQUFjO0FBQUU4QixtQkFBVyxFQUFFO0FBQWYsT0FBZDtBQUNELEtBRkQ7QUFJQTNCLG1FQUFZLENBQUNNLFNBQWIsQ0FBdUIsaUJBQXZCLEVBQTJDcUMsR0FBRCxJQUFTO0FBQ2pELFVBQUksS0FBS2hELEtBQUwsQ0FBV2lELFNBQVgsS0FBeUJELEdBQUcsQ0FBQ0MsU0FBakMsRUFBNEM7QUFDMUMsYUFBSy9DLFFBQUwsQ0FBYztBQUFDNkIscUJBQVcsRUFBRW1CLDZDQUFDLENBQUNDLElBQUYsQ0FBTyxLQUFLNUMsS0FBTCxDQUFXdUIsT0FBbEIsRUFBMkI7QUFBQyxvQkFBUWtCLEdBQUcsQ0FBQzlCO0FBQWIsV0FBM0IsQ0FBZDtBQUErRGUsZ0JBQU0sRUFBRTtBQUF2RSxTQUFkO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7O0FBRURtQixvQkFBa0IsR0FBRztBQUNuQixXQUFPLEtBQUs3QyxLQUFMLENBQVcwQixNQUFYLEtBQXNCLElBQXRCLElBQThCLEtBQUsxQixLQUFMLENBQVd3QixXQUFYLElBQTBCc0IsU0FBeEQsR0FDTCxNQUFDLHdEQUFEO0FBQ0UsbUJBQWEsRUFBRSxNQUFNO0FBQ25CLGFBQUtuRCxRQUFMLENBQWM7QUFBRTZCLHFCQUFXLEVBQUU7QUFBZixTQUFkO0FBQ0EsYUFBSzdCLFFBQUwsQ0FBYztBQUFFK0IsZ0JBQU0sRUFBRTtBQUFWLFNBQWQ7QUFDRCxPQUpIO0FBS0UsV0FBSyxFQUFFO0FBQ0xxQixlQUFPLEVBQUUsS0FESjtBQUVMekMsYUFBSyxFQUFFLE1BRkY7QUFHTEUsaUJBQVMsRUFBRSxNQUhOO0FBSUx3QyxjQUFNLEVBQUU7QUFKSDtBQUxULE9BWUUsTUFBQywwREFBRDtBQUNFLFNBQUcsRUFBRSxLQUFLaEQsS0FBTCxDQUFXd0IsV0FBWCxDQUF1QnlCLEVBRDlCO0FBRUUsYUFBTyxFQUFFLEtBQUtDLGFBQUwsQ0FBbUJuQyxPQUY5QjtBQUdFLFlBQU0sRUFBRSxLQUFLZixLQUFMLENBQVd3QixXQUhyQjtBQUlFLGdCQUFVLEVBQUU7QUFDVmpCLGdCQUFRLEVBQUUsTUFEQTtBQUVWQyxpQkFBUyxFQUFFLFFBRkQ7QUFHVlMsY0FBTSxFQUFFLE1BSEU7QUFJVlgsYUFBSyxFQUFFLE1BSkc7QUFLVk0sYUFBSyxFQUFFO0FBQ0xDLDJCQUFpQixFQUFFLElBRGQ7QUFFTEMseUJBQWUsRUFBRTtBQUZaO0FBTEcsT0FKZDtBQWNFLGlCQUFXLEVBQUUsS0FBS3FDLGVBZHBCO0FBZUUsYUFBTyxFQUFFLEtBQUtDO0FBZmhCLE1BWkYsQ0FESyxHQStCSCxJQS9CSjtBQWdDRDs7QUFFREMsbUJBQWlCLEdBQUc7QUFDbEIsV0FBTyxLQUFLckQsS0FBTCxDQUFXc0IsUUFBWCxLQUF3QixJQUF4QixHQUNMLE1BQUMsd0RBQUQ7QUFDRSxhQUFPLEVBQUUsTUFBTTtBQUNieEIsdUVBQVksQ0FBQ0MsT0FBYixDQUFxQixrQkFBckI7QUFDQSxhQUFLSixRQUFMLENBQWM7QUFBRTJCLGtCQUFRLEVBQUU7QUFBWixTQUFkO0FBQ0QsT0FKSDtBQUtFLFdBQUssRUFBRTtBQUFFZ0MsZ0JBQVEsRUFBRSxNQUFaO0FBQW9CQyxlQUFPLEVBQUU7QUFBN0IsT0FMVDtBQU1FLFVBQUksRUFBQyxJQU5QO0FBT0UsYUFBTyxFQUFDO0FBUFYsTUFESyxHQVdMLE1BQUMsd0RBQUQ7QUFDRSxhQUFPLEVBQUUsTUFBTTtBQUNiekQsdUVBQVksQ0FBQ0MsT0FBYixDQUFxQixpQkFBckI7QUFDQSxhQUFLSixRQUFMLENBQWM7QUFBRTJCLGtCQUFRLEVBQUU7QUFBWixTQUFkO0FBQ0QsT0FKSDtBQUtFLFVBQUksRUFBQyxJQUxQO0FBTUUsV0FBSyxFQUFFO0FBQUVnQyxnQkFBUSxFQUFFLE1BQVo7QUFBb0JDLGVBQU8sRUFBRTtBQUE3QixPQU5UO0FBT0UsYUFBTyxFQUFDO0FBUFYsTUFYRjtBQXFCRDs7QUFFREMsa0JBQWdCLEdBQUc7QUFDakIsV0FBTyxLQUFLeEQsS0FBTCxDQUFXeUIsV0FBWCxLQUEyQixJQUEzQixHQUNMLE1BQUMsd0RBQUQ7QUFDRSxhQUFPLEVBQUUsTUFBTTtBQUNiM0IsdUVBQVksQ0FBQ0MsT0FBYixDQUFxQixjQUFyQjtBQUNELE9BSEg7QUFJRSxVQUFJLEVBQUMsTUFKUDtBQUtFLFdBQUssRUFBRTtBQUFFdUQsZ0JBQVEsRUFBRSxNQUFaO0FBQW9CQyxlQUFPLEVBQUU7QUFBN0IsT0FMVDtBQU1FLGFBQU8sRUFBQztBQU5WLE1BREssR0FVTCxNQUFDLHdEQUFEO0FBQ0UsYUFBTyxFQUFFLE1BQU07QUFDYnpELHVFQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckI7QUFDRCxPQUhIO0FBSUUsVUFBSSxFQUFDLEtBSlA7QUFLRSxXQUFLLEVBQUU7QUFBRXVELGdCQUFRLEVBQUUsTUFBWjtBQUFvQkMsZUFBTyxFQUFFO0FBQTdCLE9BTFQ7QUFNRSxhQUFPLEVBQUM7QUFOVixNQVZGO0FBbUJEOztBQUVERSxvQkFBa0IsR0FBRztBQUNuQixVQUFNO0FBQUVmLGVBQUY7QUFBYWdCO0FBQWIsUUFBdUIsS0FBS2pFLEtBQWxDO0FBQ0EsU0FBS3lELGFBQUwsR0FBcUJTLG1FQUFhLENBQUM7QUFDakNDLFlBQU0sRUFBRyxHQUFFQyxVQUFtQyxFQURiO0FBRWpDbkIsZUFBUyxFQUFHLEdBQUVBLFNBQVUsRUFGUztBQUdqQ2dCLFdBQUssRUFBRyxHQUFFQSxLQUFNLEVBSGlCO0FBSWpDSSxzQkFBZ0IsRUFBR3ZDLE9BQUQsSUFBYTtBQUM3QixhQUFLNUIsUUFBTCxDQUFjO0FBQUU0QjtBQUFGLFNBQWQ7QUFDRDtBQU5nQyxLQUFELENBQWxDO0FBUUQ7O0FBRUR3QyxzQkFBb0IsR0FBRztBQUNyQixTQUFLYixhQUFMLENBQW1CYyxVQUFuQjtBQUNEOztBQUVEM0QsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFNEQ7QUFBRixRQUFjLEtBQUt4RSxLQUF6QjtBQUNBLFdBQ0UsbUVBQ0U7QUFDRSxXQUFLLEVBQUU7QUFBRThELGVBQU8sRUFBRSxhQUFYO0FBQTBCakQsYUFBSyxFQUFFLE1BQWpDO0FBQXlDRSxpQkFBUyxFQUFFO0FBQXBEO0FBRFQsT0FHRTtBQUFLLFdBQUssRUFBRTtBQUFFRixhQUFLLEVBQUUsS0FBVDtBQUFnQkUsaUJBQVMsRUFBRSxNQUEzQjtBQUFtQzBELGdCQUFRLEVBQUU7QUFBN0M7QUFBWixPQUNHLEtBQUtyQixrQkFBTCxFQURILENBSEYsRUFNRTtBQUNFLFdBQUssRUFBRTtBQUNMdkMsYUFBSyxFQUFFLEtBREY7QUFFTEUsaUJBQVMsRUFBRSxNQUZOO0FBR0wwRCxnQkFBUSxFQUFFLE1BSEw7QUFJTGpELGNBQU0sRUFBRTtBQUpIO0FBRFQsT0FRRSxNQUFDLGtEQUFEO0FBQ0UsV0FBSyxFQUFFO0FBQ0xYLGFBQUssRUFBRSxTQURGO0FBRUxDLGdCQUFRLEVBQUUsU0FGTDtBQUdMRyxvQkFBWSxFQUFFO0FBSFQsT0FEVDtBQU1FLGFBQU8sRUFBRSxLQUFLd0MsYUFBTCxDQUFtQm5DLE9BTjlCO0FBT0UsVUFBSSxFQUFFLEtBQUt0QixLQUFMLENBQVdrQjtBQVBuQixNQVJGLEVBaUJHLEtBQUtYLEtBQUwsQ0FBV3VCLE9BQVgsQ0FBbUI0QyxHQUFuQixDQUF3QkMsTUFBRCxJQUN0QixtRUFDRSxNQUFDLHdEQUFEO0FBQ0UsbUJBQWEsRUFBRSxNQUFNO0FBQ25CLGFBQUt6RSxRQUFMLENBQWM7QUFBRTZCLHFCQUFXLEVBQUU0QztBQUFmLFNBQWQ7QUFDQSxhQUFLekUsUUFBTCxDQUFjO0FBQUUrQixnQkFBTSxFQUFFO0FBQVYsU0FBZDtBQUNELE9BSkg7QUFLRSxXQUFLLEVBQUU7QUFDTHFCLGVBQU8sRUFBRSxLQURKO0FBRUx6QyxhQUFLLEVBQUUsTUFGRjtBQUdMRSxpQkFBUyxFQUFFLE1BSE47QUFJTHdDLGNBQU0sRUFBRTtBQUpIO0FBTFQsT0FZRSxNQUFDLDBEQUFEO0FBQ0UsU0FBRyxFQUFFb0IsTUFBTSxDQUFDbkIsRUFEZDtBQUVFLGFBQU8sRUFBRSxLQUFLQyxhQUFMLENBQW1CbkMsT0FGOUI7QUFHRSxZQUFNLEVBQUVxRCxNQUhWO0FBSUUsZ0JBQVUsRUFBRTtBQUNWOUQsYUFBSyxFQUFFLE1BREc7QUFFVlcsY0FBTSxFQUFFLE1BRkU7QUFHVlQsaUJBQVMsRUFBRSxNQUhEO0FBSVZ3QyxjQUFNLEVBQUUsS0FKRTtBQUtWcEMsYUFBSyxFQUFFO0FBQ0xDLDJCQUFpQixFQUFFLElBRGQ7QUFFTEMseUJBQWUsRUFBRTtBQUZaO0FBTEcsT0FKZDtBQWNFLGlCQUFXLEVBQUUsS0FBS3FDLGVBZHBCO0FBZUUsYUFBTyxFQUFFLEtBQUtDO0FBZmhCLE1BWkYsQ0FERixDQURELENBakJILENBTkYsQ0FERixFQTRERyxLQUFLSSxnQkFBTCxFQTVESCxFQTZERyxLQUFLSCxpQkFBTCxFQTdESCxFQThERSxNQUFDLHdEQUFEO0FBQ0UsYUFBTyxFQUFFWSxPQURYO0FBRUUsV0FBSyxFQUFDLEtBRlI7QUFHRSxVQUFJLEVBQUMsT0FIUDtBQUlFLFdBQUssRUFBRTtBQUFFWCxnQkFBUSxFQUFFLE1BQVo7QUFBb0JDLGVBQU8sRUFBRTtBQUE3QixPQUpUO0FBS0UsYUFBTyxFQUFDO0FBTFYsTUE5REYsQ0FERjtBQXdFRDs7QUFqUDJDOztBQW9QOUNyQyxlQUFlLENBQUNtRCxTQUFoQixHQUE0QjtBQUMxQjNCLFdBQVMsRUFBRTRCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREY7QUFFMUJkLE9BQUssRUFBRVksaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGRTtBQUcxQlAsU0FBTyxFQUFFSyxpREFBUyxDQUFDRyxJQUFWLENBQWVEO0FBSEUsQ0FBNUI7QUFNZXRELDhFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxNQUFNd0QsZUFBTixTQUE4Qm5GLCtDQUE5QixDQUF3QztBQUNyREMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIscUNBc0JSQyxHQUFELElBQVM7QUFDakIsV0FBS0MsUUFBTCxDQUFjO0FBQUVDLGFBQUssRUFBRyxzQkFBcUJGLEdBQUcsQ0FBQ0csT0FBUTtBQUEzQyxPQUFkO0FBQ0FDLHFFQUFZLENBQUNDLE9BQWIsQ0FBcUIsa0JBQXJCO0FBQ0QsS0F6QmtCOztBQUdqQixTQUFLQyxLQUFMLEdBQWE7QUFDWEosV0FBSyxFQUFFLElBREk7QUFFWEssV0FBSyxFQUFFLElBRkk7QUFHWEMsV0FBSyxFQUFFLElBSEk7QUFJWHlFLGlCQUFXLEVBQUUsUUFKRjtBQUtYQyxZQUFNLEVBQUU7QUFMRyxLQUFiO0FBT0EsU0FBS3pFLDJCQUFMO0FBQ0Q7O0FBRURBLDZCQUEyQixHQUFHO0FBQzVCTCxtRUFBWSxDQUFDTSxTQUFiLENBQXVCLGtCQUF2QixFQUEyQyxNQUFNO0FBQy9DLFdBQUtULFFBQUwsQ0FBYztBQUFFaUYsY0FBTSxFQUFFO0FBQVYsT0FBZDtBQUNELEtBRkQ7QUFHQTlFLG1FQUFZLENBQUNNLFNBQWIsQ0FBdUIsaUJBQXZCLEVBQTBDLE1BQU07QUFDOUMsV0FBS1QsUUFBTCxDQUFjO0FBQUVpRixjQUFNLEVBQUU7QUFBVixPQUFkO0FBQ0QsS0FGRDtBQUdEOztBQU9EdkUsUUFBTSxHQUFHO0FBQ1AsV0FBTyxLQUFLTCxLQUFMLENBQVc0RSxNQUFYLEtBQXNCLEtBQXRCLEdBQThCLElBQTlCLEdBQ0wsbUVBQ0csS0FBSzVFLEtBQUwsQ0FBV0osS0FBWCxHQUFtQixtQkFBTSwrS0FBTixDQUFuQixHQUFrTixJQURyTixFQUVFLE1BQUMseURBQUQ7QUFDRSxnQkFBVSxFQUFFO0FBQ1ZVLGFBQUssRUFBRSxTQURHO0FBRVZDLGdCQUFRLEVBQUUsU0FGQTtBQUdWVSxjQUFNLEVBQUUsTUFIRTtBQUlWNEQsb0JBQVksRUFBRSxLQUFLN0UsS0FBTCxDQUFXQyxLQUpmO0FBS1ZRLG9CQUFZLEVBQUUsS0FBS1QsS0FBTCxDQUFXRSxLQUxmO0FBTVZ5RSxtQkFBVyxFQUFFLFFBTkg7QUFPVmhFLFlBQUksRUFBRSxLQUFLbEIsS0FBTCxDQUFXa0IsSUFQUDtBQVFWQyxhQUFLLEVBQUU7QUFDTEMsMkJBQWlCLEVBQUUsSUFEZDtBQUVMQyx5QkFBZSxFQUFFO0FBRlo7QUFSRyxPQURkO0FBY0UsZUFBUyxFQUFFLE1BQU07QUFDZmhCLHVFQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsRUFBc0M7QUFDcENZLGNBQUksRUFBRSxLQUFLbEIsS0FBTCxDQUFXa0IsSUFEbUI7QUFFcEMrQixtQkFBUyxFQUFFLEtBQUtqRCxLQUFMLENBQVdzQixPQUFYLENBQW1CMkI7QUFGTSxTQUF0QztBQUlELE9BbkJIO0FBb0JFLGFBQU8sRUFBRSxLQUFLakQsS0FBTCxDQUFXc0IsT0FwQnRCO0FBcUJFLGFBQU8sRUFBRSxLQUFLQztBQXJCaEIsTUFGRixDQURGO0FBNEJEOztBQXpEb0QsQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNjcmVlblB1Ymxpc2hlciBmcm9tICcuL3NjcmVlblB1Ymxpc2hlcidcbmltcG9ydCB7IE9UUHVibGlzaGVyIH0gZnJvbSAnb3BlbnRvay1yZWFjdCdcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJy4vdXRpbC9FdmVudEVtaXR0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1Ymxpc2hlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICBhdWRpbzogdHJ1ZSxcbiAgICAgIHZpZGVvOiB0cnVlLFxuICAgIH1cbiAgICB0aGlzLmRlZmluZUV2ZW50RW1pdHRlckNhbGxiYWNrcygpXG4gIH1cblxuICBkZWZpbmVFdmVudEVtaXR0ZXJDYWxsYmFja3MoKSB7XG4gICAgRXZlbnRFbWl0dGVyLnN1YnNjcmliZSgnZGlzYWJsZVZpZGVvJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpZGVvOiBmYWxzZSB9KVxuICAgICAgRXZlbnRFbWl0dGVyLnB1Ymxpc2goJ2Rpc2FibGVWaWRlb0J1dHRvbicpXG4gICAgfSlcbiAgICBFdmVudEVtaXR0ZXIuc3Vic2NyaWJlKCdlbmFibGVWaWRlbycsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aWRlbzogdHJ1ZSB9KVxuICAgICAgRXZlbnRFbWl0dGVyLnB1Ymxpc2goJ2VuYWJsZVZpZGVvQnV0dG9uJylcbiAgICB9KVxuICB9XG5cbiAgb25FcnJvciA9IChlcnIpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IGBGYWlsZWQgdG8gcHVibGlzaDogJHtlcnIubWVzc2FnZX1gIH0pXG4gICAgRXZlbnRFbWl0dGVyLnB1Ymxpc2goJ2xlYXZlQ2FsbE9uRXJyb3InKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciA/IDxkaXY+e1wiV2Ugbm90aWNlZCB5b3UgZGVuaWVkIGFjY2VzcyB0byB5b3VyIG1pY3JvcGhvbmUgb3IgY2FtZXJhLiBQbGVhc2UgY2xpY2sgdGhlIGNhbWVyYS9taWNyb3Bob25lIGJsb2NrZWQgaWNvbiBpbiB5b3VyIGJyb3dzZXIncyBhZGRyZXNzIGJhciwgYWxsb3cgYWNjZXNzLCBhbmQgdGhlbiByZWZyZXNoIHRoZSBwYWdlIGFuZCByZWpvaW4gdGhlIGNhbGwuIFlvdSB3aWxsIGJlIGFibGUgdG8gbXV0ZSB5b3Vyc2VsZiBvciBkaXNhYmxlIHlvdXIgdmlkZW8gb25jZSB5b3Ugam9pbiBhIGNhbGwuXCJ9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgPE9UUHVibGlzaGVyXG4gICAgICAgICAgcHJvcGVydGllcz17e1xuICAgICAgICAgICAgd2lkdGg6ICcxMy41N3Z3JyxcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTMuNTd2dycsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6ICc4dmgnLFxuICAgICAgICAgICAgcHVibGlzaFZpZGVvOiB0aGlzLnN0YXRlLnZpZGVvLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGJ1dHRvbkRpc3BsYXlNb2RlOiAnb24nLFxuICAgICAgICAgICAgICBuYW1lRGlzcGxheU1vZGU6ICdvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIHNlc3Npb249e3RoaXMucHJvcHMuc2Vzc2lvbn1cbiAgICAgICAgICBvbkVycm9yPXt0aGlzLm9uRXJyb3J9XG4gICAgICAgIC8+XG4gICAgICAgIDxTY3JlZW5QdWJsaXNoZXJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6ICcxMy42MnZ3JyxcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTMuNjJ2dycsXG4gICAgICAgICAgICBoZWlnaHQ6ICc1MDBweCcsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6ICcxNnZoJyxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBzZXNzaW9uPXt0aGlzLnByb3BzLnNlc3Npb259XG4gICAgICAgICAgbmFtZSA9IHt0aGlzLnByb3BzLm5hbWUgKyBcIidzIFNjcmVlblwifVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IFB1Ymxpc2hlciBmcm9tICcuL3B1Ymxpc2hlcidcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICcuL3V0aWwvRXZlbnRFbWl0dGVyJ1xyXG5pbXBvcnQgeyBPVFN1YnNjcmliZXIsIGNyZWF0ZVNlc3Npb24gfSBmcm9tICdvcGVudG9rLXJlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmNsYXNzIFNjcmVlbkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3NCdXR0b246IHRydWUsXHJcbiAgICAgIHN0cmVhbXM6IFtdLFxyXG4gICAgICBmb2N1c1N0cmVhbToge30sXHJcbiAgICAgIHZpZGVvQnV0dG9uOiB0cnVlLFxyXG4gICAgICBleHBhbmQ6IGZhbHNlLFxyXG4gICAgICBzZWFyY2hOYW1lOiAnJyxcclxuICAgICAgc2VhcmNoU2Vzc2lvbjogJycsXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZWZpbmVFdmVudEVtaXR0ZXJDYWxsYmFja3MoKVxyXG5cclxuICAgIHRoaXMuc2Vzc2lvbkV2ZW50SGFuZGxlcnMgPSB7XHJcbiAgICAgIHNlc3Npb25Db25uZWN0ZWQ6ICgpID0+IHt9LFxyXG4gICAgICBzZXNzaW9uRGlzY29ubmVjdGVkOiAoKSA9PiB7fSxcclxuICAgICAgc2Vzc2lvblJlY29ubmVjdGVkOiAoKSA9PiB7fSxcclxuICAgICAgc2Vzc2lvblJlY29ubmVjdGluZzogKCkgPT4ge30sXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wdWJsaXNoRXZlbnRIYW5kbGVycyA9IHtcclxuICAgICAgYWNjZXNzRGVuaWVkOiAoKSA9PiB7fSxcclxuICAgICAgc3RyZWFtQ3JlYXRlZDogKCkgPT4ge30sXHJcbiAgICAgIHN0cmVhbURlc3Ryb3llZDogKCkgPT4ge30sXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpYmVFdmVudEhhbmRsZXJzID0ge1xyXG4gICAgICB2aWRlb0VuYWJsZWQ6ICgpID0+IHt9LFxyXG4gICAgICB2aWRlb0Rpc2FibGVkOiAoKSA9PiB7fSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVB1Ymxpc2ggPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IHB1Ymxpc2hlZCEnKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3Vic2NyaWJlID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1N1YnNjcmliZWQhJylcclxuICB9XHJcblxyXG4gIGhhbmRsZVNlc3Npb25FcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICB9XHJcblxyXG4gIGhhbmRsZVB1Ymxpc2hFcnJvciA9IChlcnJvcikgPT4ge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1YnNjcmliZUVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gIH1cclxuXHJcbiAgZGVmaW5lRXZlbnRFbWl0dGVyQ2FsbGJhY2tzKCkge1xyXG4gICAgRXZlbnRFbWl0dGVyLnN1YnNjcmliZSgnZGlzYWJsZVZpZGVvQnV0dG9uJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmlkZW9CdXR0b246IGZhbHNlIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIEV2ZW50RW1pdHRlci5zdWJzY3JpYmUoJ2VuYWJsZVZpZGVvQnV0dG9uJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmlkZW9CdXR0b246IHRydWUgfSlcclxuICAgIH0pXHJcblxyXG4gICAgRXZlbnRFbWl0dGVyLnN1YnNjcmliZSgnbmV3U2NyZWVuc2hhcmVyJywgKG1zZykgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5zZXNzaW9uSWQgPT09IG1zZy5zZXNzaW9uSWQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmb2N1c1N0cmVhbTogXy5maW5kKHRoaXMuc3RhdGUuc3RyZWFtcywgeyduYW1lJzogbXNnLm5hbWUgfSksIGV4cGFuZDogdHJ1ZX0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRTdHJlYW1Ub0Rpc3BsYXkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5leHBhbmQgPT09IHRydWUgJiYgdGhpcy5zdGF0ZS5mb2N1c1N0cmVhbSAhPSB1bmRlZmluZWQgPyAoXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNTdHJlYW06IHt9IH0pXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kOiBmYWxzZSB9KVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBhZGRpbmc6ICcwcHgnLFxyXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgIG1heEhlaWdodDogJzc1dmgnLFxyXG4gICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE9UU3Vic2NyaWJlclxyXG4gICAgICAgICAga2V5PXt0aGlzLnN0YXRlLmZvY3VzU3RyZWFtLmlkfVxyXG4gICAgICAgICAgc2Vzc2lvbj17dGhpcy5zZXNzaW9uSGVscGVyLnNlc3Npb259XHJcbiAgICAgICAgICBzdHJlYW09e3RoaXMuc3RhdGUuZm9jdXNTdHJlYW19XHJcbiAgICAgICAgICBwcm9wZXJ0aWVzPXt7XHJcbiAgICAgICAgICAgIG1heFdpZHRoOiAnNzV2dycsXHJcbiAgICAgICAgICAgIG1heEhlaWdodDogJzc0LjV2aCcsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzg0dmgnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzQ4dncnLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgIGJ1dHRvbkRpc3BsYXlNb2RlOiAnb24nLFxyXG4gICAgICAgICAgICAgIG5hbWVEaXNwbGF5TW9kZTogJ29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvblN1YnNjcmliZT17dGhpcy5oYW5kbGVTdWJzY3JpYmV9XHJcbiAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZVN1YnNjcmliZUVycm9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKSA6IG51bGxcclxuICB9XHJcblxyXG4gIHNjcmVlblNoYXJlQnV0dG9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc3NCdXR0b24gPT09IHRydWUgPyAoXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBFdmVudEVtaXR0ZXIucHVibGlzaCgnc3RhcnRTY3JlZW5TaGFyZScpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3NCdXR0b246IGZhbHNlIH0pXHJcbiAgICAgICAgfX1cclxuICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJy44dncnLCBkaXNwbGF5OiAnaW5saW5lLWZsZXgnIH19XHJcbiAgICAgICAgaWNvbj1cInR2XCJcclxuICAgICAgICBjb250ZW50PVwiU2hhcmUgU2NyZWVuXCJcclxuICAgICAgLz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBFdmVudEVtaXR0ZXIucHVibGlzaCgnc3RvcFNjcmVlblNoYXJlJylcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzc0J1dHRvbjogdHJ1ZSB9KVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgaWNvbj1cInR2XCJcclxuICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJy44dncnLCBkaXNwbGF5OiAnaW5saW5lLWZsZXgnIH19XHJcbiAgICAgICAgY29udGVudD1cIlN0b3AgU2NyZWVuIFNoYXJlXCJcclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHZpZGVvU3RhdGVCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS52aWRlb0J1dHRvbiA9PT0gdHJ1ZSA/IChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIEV2ZW50RW1pdHRlci5wdWJsaXNoKCdkaXNhYmxlVmlkZW8nKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgaWNvbj1cImhpZGVcIlxyXG4gICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnLjh2dycsIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcgfX1cclxuICAgICAgICBjb250ZW50PVwiRGlzYWJsZSB2aWRlb1wiXHJcbiAgICAgIC8+XHJcbiAgICApIDogKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgRXZlbnRFbWl0dGVyLnB1Ymxpc2goJ2VuYWJsZVZpZGVvJylcclxuICAgICAgICB9fVxyXG4gICAgICAgIGljb249XCJleWVcIlxyXG4gICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnLjh2dycsIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcgfX1cclxuICAgICAgICBjb250ZW50PVwiRW5hYmxlIHZpZGVvXCJcclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgc2Vzc2lvbklkLCB0b2tlbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgdGhpcy5zZXNzaW9uSGVscGVyID0gY3JlYXRlU2Vzc2lvbih7XHJcbiAgICAgIGFwaUtleTogYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVlZfQVBJX0tFWX1gLFxyXG4gICAgICBzZXNzaW9uSWQ6IGAke3Nlc3Npb25JZH1gLFxyXG4gICAgICB0b2tlbjogYCR7dG9rZW59YCxcclxuICAgICAgb25TdHJlYW1zVXBkYXRlZDogKHN0cmVhbXMpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RyZWFtcyB9KVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5zZXNzaW9uSGVscGVyLmRpc2Nvbm5lY3QoKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBvbkxlYXZlIH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsIHdpZHRoOiAnMTAwJScsIG1heEhlaWdodDogJzg2dmgnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzc4JScsIG1heEhlaWdodDogJzg1dmgnLCBvdmVyZmxvdzogJ2F1dG8nIH19PlxyXG4gICAgICAgICAgICB7dGhpcy5nZXRTdHJlYW1Ub0Rpc3BsYXkoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMjIlJyxcclxuICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc4NXZoJyxcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMDBweCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQdWJsaXNoZXJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMy41N3Z3JyxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTMuNTd2dycsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc1cHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc2Vzc2lvbj17dGhpcy5zZXNzaW9uSGVscGVyLnNlc3Npb259XHJcbiAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdHJlYW1zLm1hcCgoc3RyZWFtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c1N0cmVhbTogc3RyZWFtIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZDogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMTh2aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPE9UU3Vic2NyaWJlclxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17c3RyZWFtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb249e3RoaXMuc2Vzc2lvbkhlbHBlci5zZXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbT17c3RyZWFtfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxOHZoJyxcclxuICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzE4dmgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkRpc3BsYXlNb2RlOiAnb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lRGlzcGxheU1vZGU6ICdvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJzY3JpYmU9e3RoaXMuaGFuZGxlU3Vic2NyaWJlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaGFuZGxlU3Vic2NyaWJlRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy52aWRlb1N0YXRlQnV0dG9uKCl9XHJcbiAgICAgICAge3RoaXMuc2NyZWVuU2hhcmVCdXR0b24oKX1cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkxlYXZlfVxyXG4gICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgaWNvbj1cImNsb3NlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnLjh2dycsIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcgfX1cclxuICAgICAgICAgIGNvbnRlbnQ9XCJMZWF2ZSBjYWxsXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblNjcmVlbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgc2Vzc2lvbklkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdG9rZW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBvbkxlYXZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JlZW5Db250YWluZXJcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgT1RQdWJsaXNoZXIgfSBmcm9tICdvcGVudG9rLXJlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICcuL3V0aWwvRXZlbnRFbWl0dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW5QdWJsaXNoZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgYXVkaW86IHRydWUsXG4gICAgICB2aWRlbzogdHJ1ZSxcbiAgICAgIHZpZGVvU291cmNlOiAnc2NyZWVuJyxcbiAgICAgIGFwcGVhcjogZmFsc2UsXG4gICAgfVxuICAgIHRoaXMuZGVmaW5lRXZlbnRFbWl0dGVyQ2FsbGJhY2tzKClcbiAgfVxuXG4gIGRlZmluZUV2ZW50RW1pdHRlckNhbGxiYWNrcygpIHtcbiAgICBFdmVudEVtaXR0ZXIuc3Vic2NyaWJlKCdzdGFydFNjcmVlblNoYXJlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFwcGVhcjogdHJ1ZSB9KVxuICAgIH0pXG4gICAgRXZlbnRFbWl0dGVyLnN1YnNjcmliZSgnc3RvcFNjcmVlblNoYXJlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFwcGVhcjogZmFsc2UgfSlcbiAgICB9KVxuICB9XG5cbiAgb25FcnJvciA9IChlcnIpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IGBGYWlsZWQgdG8gcHVibGlzaDogJHtlcnIubWVzc2FnZX1gIH0pXG4gICAgRXZlbnRFbWl0dGVyLnB1Ymxpc2goJ2xlYXZlQ2FsbE9uRXJyb3InKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmFwcGVhciA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgICAgPD5cbiAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgPyA8ZGl2PntcIldlIG5vdGljZWQgeW91IGRlbmllZCBhY2Nlc3MgdG8geW91ciBzY3JlZW4uIFBsZWFzZSBjbGljayB0aGUgc2NyZWVuIGJsb2NrZWQgaWNvbiBpbiB5b3VyIGJyb3dzZXIncyBhZGRyZXNzIGJhciwgYWxsb3cgYWNjZXNzLCBhbmQgdGhlbiByZWZyZXNoIHRoZSBwYWdlIGFuZCByZWpvaW4gdGhlIGNhbGwuXCJ9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgPE9UUHVibGlzaGVyXG4gICAgICAgICAgcHJvcGVydGllcz17e1xuICAgICAgICAgICAgd2lkdGg6ICcxMy42MnZ3JyxcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTMuNjJ2dycsXG4gICAgICAgICAgICBoZWlnaHQ6ICcyMHZoJyxcbiAgICAgICAgICAgIHB1Ymxpc2hBdWRpbzogdGhpcy5zdGF0ZS5hdWRpbyxcbiAgICAgICAgICAgIHB1Ymxpc2hWaWRlbzogdGhpcy5zdGF0ZS52aWRlbyxcbiAgICAgICAgICAgIHZpZGVvU291cmNlOiAnc2NyZWVuJyxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGJ1dHRvbkRpc3BsYXlNb2RlOiAnb24nLFxuICAgICAgICAgICAgICBuYW1lRGlzcGxheU1vZGU6ICdvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25QdWJsaXNoPXsoKSA9PiB7XG4gICAgICAgICAgICBFdmVudEVtaXR0ZXIucHVibGlzaCgnc2NyZWVuU2hhcmVPbicsIHtcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgICAgICBzZXNzaW9uSWQ6IHRoaXMucHJvcHMuc2Vzc2lvbi5zZXNzaW9uSWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgICAgc2Vzc2lvbj17dGhpcy5wcm9wcy5zZXNzaW9ufVxuICAgICAgICAgIG9uRXJyb3I9e3RoaXMub25FcnJvcn1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==