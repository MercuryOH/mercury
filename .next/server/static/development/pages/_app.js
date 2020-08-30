module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ "./components/authProvider.js":
/*!************************************!*\
  !*** ./components/authProvider.js ***!
  \************************************/
/*! exports provided: AuthProvider, AuthRequired, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRequired", function() { return AuthRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_mercuryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/mercuryService */ "./util/mercuryService.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MERCURY_TOKEN = 'mercury-token';
const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
function AuthProvider({
  children
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const loadUserFromCookies = async () => {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(MERCURY_TOKEN);

    if (token) {
      _util_mercuryService__WEBPACK_IMPORTED_MODULE_3__["setToken"](`Bearer ${token}`);
      const currentUser = await _util_mercuryService__WEBPACK_IMPORTED_MODULE_3__["getMe"]();
      if (currentUser) setUser(currentUser);
    }

    setLoading(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    loadUserFromCookies();
  }, []);

  const login = async (email, password) => {
    const loginResponse = await _util_mercuryService__WEBPACK_IMPORTED_MODULE_3__["postLogin"](email, password);
    if (!loginResponse || !loginResponse.token) return null;
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(MERCURY_TOKEN, loginResponse.token, {
      expires: 60
    });
    _util_mercuryService__WEBPACK_IMPORTED_MODULE_3__["setToken"](`Bearer ${loginResponse.token}`);
    const currentUser = await _util_mercuryService__WEBPACK_IMPORTED_MODULE_3__["getMe"]();
    if (currentUser) setUser(currentUser);
    return currentUser;
  };

  const logout = async () => {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(MERCURY_TOKEN);
    setUser(null);
    await router.push('/login');
  };

  return __jsx(AuthContext.Provider, {
    value: {
      user,
      loading,
      login,
      logout,
      isAuthenticated: !!user
    }
  }, children);
}
function AuthRequired(Component) {
  return () => {
    const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
    const {
      isAuthenticated,
      loading
    } = useAuth();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (!isAuthenticated && !loading) router.push('/login');
    }, [loading, isAuthenticated]);
    return loading ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
      style: {
        height: '100vh'
      },
      loading: true
    }) : __jsx(Component, arguments);
  };
}
function useAuth() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AuthContext);
}

/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-confirm-alert/src/react-confirm-alert.css":
/*!**********************************************************************!*\
  !*** ./node_modules/react-confirm-alert/src/react-confirm-alert.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css":
/*!************************************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-notifications/lib/notifications.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-notifications/lib/notifications.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-quill/dist/quill.snow.css":
/*!******************************************************!*\
  !*** ./node_modules/react-quill/dist/quill.snow.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_authProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/authProvider */ "./components/authProvider.js");
/* harmony import */ var _util_globalStyles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/globalStyles.css */ "./util/globalStyles.css");
/* harmony import */ var _util_globalStyles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_util_globalStyles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-notifications/lib/notifications.css */ "./node_modules/react-notifications/lib/notifications.css");
/* harmony import */ var react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loader-spinner/dist/loader/css/react-spinner-loader.css */ "./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css");
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_confirm_alert_src_react_confirm_alert_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-confirm-alert/src/react-confirm-alert.css */ "./node_modules/react-confirm-alert/src/react-confirm-alert.css");
/* harmony import */ var react_confirm_alert_src_react_confirm_alert_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_confirm_alert_src_react_confirm_alert_css__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //nprogress module



 //styles of nprogress



 // ES6


 // Import css
//Binding events.

next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start());
next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done());
class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(_components_authProvider__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"], null, __jsx(Component, pageProps));
  }

}

/***/ }),

/***/ "./util/globalStyles.css":
/*!*******************************!*\
  !*** ./util/globalStyles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./util/mercuryService.js":
/*!********************************!*\
  !*** ./util/mercuryService.js ***!
  \********************************/
/*! exports provided: setToken, postLogin, submitFeedback, postGroup, getMe, getClass, getClassUsers, getGroups, getClasses, getAllClasses, postGroupToken, deleteGroup, getGroupByID, postJoinGroup, getAllGroups, deleteGroupUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postLogin", function() { return postLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitFeedback", function() { return submitFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postGroup", function() { return postGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMe", function() { return getMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClass", function() { return getClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassUsers", function() { return getClassUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroups", function() { return getGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClasses", function() { return getClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllClasses", function() { return getAllClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postGroupToken", function() { return postGroupToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteGroup", function() { return deleteGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupByID", function() { return getGroupByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postJoinGroup", function() { return postJoinGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGroups", function() { return getAllGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteGroupUser", function() { return deleteGroupUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var token = '';
function setToken(t) {
  token = t;
}
async function postLogin(email, password) {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/login', {
      email,
      password
    });
    return data;
  } catch (e) {
    return null;
  }
}
async function submitFeedback(ClassId, stars, comments) {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/feedback/`, {
      ClassId,
      stars,
      comments
    }, {
      headers: {
        authorization: token
      }
    });
    return data;
  } catch (e) {
    return null;
  }
}
async function postGroup(classId, name, type, userId) {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/classes/${classId}/groups`, {
      name,
      type,
      userId
    }, {
      headers: {
        authorization: token
      }
    });
    return data;
  } catch (e) {
    return null;
  }
}
async function getMe() {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/users/me', {
      headers: {
        authorization: token
      }
    });
    return data;
  } catch (e) {
    return null;
  }
}
async function getClass(classId) {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/classes/class/${classId}`, {
    headers: {
      authorization: token
    }
  });
  return data;
}
async function getClassUsers(classId) {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/users/${classId}`, {
      headers: {
        authorization: token
      }
    });
    return data;
  } catch (e) {
    return null;
  }
}
async function getGroups(classId) {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/classes/${classId}/groups`, {
      headers: {
        authorization: token
      }
    });
    return data;
  } catch (e) {
    return [];
  }
}
/** get the classes the user is enrolled in */

async function getClasses() {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/classes/`, {
      headers: {
        authorization: token
      }
    });
    return data;
  } catch (e) {
    return [];
  }
}
/** get all classes available */

async function getAllClasses() {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/classes/allClasses`, {
      headers: {
        authorization: token
      }
    });
    return data;
  } catch (e) {
    return [];
  }
}
async function postGroupToken(classId, groupId) {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/classes/${classId}/groups/${groupId}/token`, {}, {
      headers: {
        authorization: token
      }
    });
    return data;
  } catch (e) {
    return null;
  }
}
async function deleteGroup(classId, groupId) {
  try {
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/api/classes/${classId}/groups/${groupId}`, {
      headers: {
        authorization: token
      }
    });
    return null;
  } catch (e) {
    return null;
  }
}
async function getGroupByID(classId, groupId) {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/classes/${classId}/groups/${groupId}`, {
      headers: {
        authorization: token
      }
    });
    return data;
  } catch (e) {
    return null;
  }
}
async function postJoinGroup(classId, groupId, email) {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/classes/${classId}/groups/${groupId}/join`, {
      email
    }, {
      headers: {
        authorization: token
      }
    });
    return data;
  } catch (e) {
    return null;
  }
}
async function getAllGroups(classId) {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/api/classes/${classId}/groups`, {
      headers: {
        authorization: token
      }
    });
    return data;
  } catch (e) {
    return null;
  }
}
async function deleteGroupUser(classId, groupId, userId) {
  try {
    await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/api/classes/${classId}/groups/${groupId}/leave/${userId}`, {
      headers: {
        authorization: token
      }
    });
    return null;
  } catch (e) {
    return null;
  }
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL21lcmN1cnlTZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiTUVSQ1VSWV9UT0tFTiIsIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9hZFVzZXJGcm9tQ29va2llcyIsInRva2VuIiwiQ29va2llcyIsImdldCIsImFwaSIsImN1cnJlbnRVc2VyIiwidXNlRWZmZWN0IiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwibG9naW5SZXNwb25zZSIsInNldCIsImV4cGlyZXMiLCJsb2dvdXQiLCJyZW1vdmUiLCJwdXNoIiwiaXNBdXRoZW50aWNhdGVkIiwiQXV0aFJlcXVpcmVkIiwiQ29tcG9uZW50IiwidXNlQXV0aCIsImhlaWdodCIsImFyZ3VtZW50cyIsInVzZUNvbnRleHQiLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZG9uZSIsIkFwcCIsInJlbmRlciIsInBhZ2VQcm9wcyIsInByb3BzIiwic2V0VG9rZW4iLCJ0IiwicG9zdExvZ2luIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImUiLCJzdWJtaXRGZWVkYmFjayIsIkNsYXNzSWQiLCJzdGFycyIsImNvbW1lbnRzIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJwb3N0R3JvdXAiLCJjbGFzc0lkIiwibmFtZSIsInR5cGUiLCJ1c2VySWQiLCJnZXRNZSIsImdldENsYXNzIiwiZ2V0Q2xhc3NVc2VycyIsImdldEdyb3VwcyIsImdldENsYXNzZXMiLCJnZXRBbGxDbGFzc2VzIiwicG9zdEdyb3VwVG9rZW4iLCJncm91cElkIiwiZGVsZXRlR3JvdXAiLCJkZWxldGUiLCJnZXRHcm91cEJ5SUQiLCJwb3N0Sm9pbkdyb3VwIiwiZ2V0QWxsR3JvdXBzIiwiZGVsZXRlR3JvdXBVc2VyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNB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LEVBQUU1QztBQURSO0FBRHdELEtBQTVDLENBQXZCO0FBS0EsV0FBT21DLElBQVA7QUFDRCxHQVBELENBT0UsT0FBT0csQ0FBUCxFQUFVO0FBQ1YsV0FBTyxJQUFQO0FBQ0Q7QUFDRjtBQUVNLGVBQWV5QixlQUFmLENBQStCakIsT0FBL0IsRUFBd0NXLE9BQXhDLEVBQWlEUixNQUFqRCxFQUF5RDtBQUM5RCxNQUFJO0FBQ0YsVUFBTWIsNENBQUssQ0FBQ3VCLE1BQU4sQ0FDSCxnQkFBZWIsT0FBUSxXQUFVVyxPQUFRLFVBQVNSLE1BQU8sRUFEdEQsRUFFSjtBQUNFTixhQUFPLEVBQUU7QUFDUEMscUJBQWEsRUFBRTVDO0FBRFI7QUFEWCxLQUZJLENBQU47QUFRQSxXQUFPLElBQVA7QUFDRCxHQVZELENBVUUsT0FBT3NDLENBQVAsRUFBVTtBQUNWLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuT0Qsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vdXRpbC9tZXJjdXJ5U2VydmljZSdcclxuaW1wb3J0IHsgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuY29uc3QgTUVSQ1VSWV9UT0tFTiA9ICdtZXJjdXJ5LXRva2VuJ1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgY29uc3QgbG9hZFVzZXJGcm9tQ29va2llcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoTUVSQ1VSWV9UT0tFTilcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBhcGkuc2V0VG9rZW4oYEJlYXJlciAke3Rva2VufWApXHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IGFwaS5nZXRNZSgpXHJcbiAgICAgIGlmIChjdXJyZW50VXNlcikgc2V0VXNlcihjdXJyZW50VXNlcilcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRVc2VyRnJvbUNvb2tpZXMoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIGNvbnN0IGxvZ2luUmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdExvZ2luKGVtYWlsLCBwYXNzd29yZClcclxuICAgIGlmICghbG9naW5SZXNwb25zZSB8fCAhbG9naW5SZXNwb25zZS50b2tlbikgcmV0dXJuIG51bGxcclxuXHJcbiAgICBDb29raWVzLnNldChNRVJDVVJZX1RPS0VOLCBsb2dpblJlc3BvbnNlLnRva2VuLCB7IGV4cGlyZXM6IDYwIH0pXHJcbiAgICBhcGkuc2V0VG9rZW4oYEJlYXJlciAke2xvZ2luUmVzcG9uc2UudG9rZW59YClcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IGFwaS5nZXRNZSgpXHJcbiAgICBpZiAoY3VycmVudFVzZXIpIHNldFVzZXIoY3VycmVudFVzZXIpXHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyXHJcbiAgfVxyXG5cclxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBDb29raWVzLnJlbW92ZShNRVJDVVJZX1RPS0VOKVxyXG4gICAgc2V0VXNlcihudWxsKVxyXG4gICAgYXdhaXQgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7IHVzZXIsIGxvYWRpbmcsIGxvZ2luLCBsb2dvdXQsIGlzQXV0aGVudGljYXRlZDogISF1c2VyIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFJlcXVpcmVkKENvbXBvbmVudCkge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICFsb2FkaW5nKSByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH0sIFtsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWRdKVxyXG4gICAgcmV0dXJuIGxvYWRpbmcgPyAoXHJcbiAgICAgIDxTZWdtZW50IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fSBsb2FkaW5nIC8+XHJcbiAgICApIDogKFxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5hcmd1bWVudHN9IC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJyAvL25wcm9ncmVzcyBtb2R1bGVcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9hdXRoUHJvdmlkZXInXHJcbmltcG9ydCAnLi4vdXRpbC9nbG9iYWxTdHlsZXMuY3NzJ1xyXG5pbXBvcnQgJ25wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzJyAvL3N0eWxlcyBvZiBucHJvZ3Jlc3NcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcydcclxuaW1wb3J0ICdyZWFjdC1ub3RpZmljYXRpb25zL2xpYi9ub3RpZmljYXRpb25zLmNzcydcclxuaW1wb3J0ICdyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJyAvLyBFUzZcclxuaW1wb3J0ICdyZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9jc3MvcmVhY3Qtc3Bpbm5lci1sb2FkZXIuY3NzJ1xyXG5pbXBvcnQgJ3JlYWN0LWNvbmZpcm0tYWxlcnQvc3JjL3JlYWN0LWNvbmZpcm0tYWxlcnQuY3NzJyAvLyBJbXBvcnQgY3NzXHJcblxyXG4vL0JpbmRpbmcgZXZlbnRzLlxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG52YXIgdG9rZW4gPSAnJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRva2VuKHQpIHtcclxuICB0b2tlbiA9IHRcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RMb2dpbihlbWFpbCwgcGFzc3dvcmQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3VzZXJzL2xvZ2luJywgeyBlbWFpbCwgcGFzc3dvcmQgfSlcclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0RmVlZGJhY2soQ2xhc3NJZCwgc3RhcnMsIGNvbW1lbnRzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgYC9hcGkvZmVlZGJhY2svYCxcclxuICAgICAgeyBDbGFzc0lkLCBzdGFycywgY29tbWVudHMgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdEdyb3VwKGNsYXNzSWQsIG5hbWUsIHR5cGUsIHVzZXJJZCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgIGAvYXBpL2NsYXNzZXMvJHtjbGFzc0lkfS9ncm91cHNgLFxyXG4gICAgICB7IG5hbWUsIHR5cGUsIHVzZXJJZCB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZSgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMvbWUnLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENsYXNzKGNsYXNzSWQpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9jbGFzc2VzL2NsYXNzLyR7Y2xhc3NJZH1gLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgfSxcclxuICB9KVxyXG5cclxuICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xhc3NVc2VycyhjbGFzc0lkKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3VzZXJzLyR7Y2xhc3NJZH1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwcyhjbGFzc0lkKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2NsYXNzZXMvJHtjbGFzc0lkfS9ncm91cHNgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcbn1cclxuLyoqIGdldCB0aGUgY2xhc3NlcyB0aGUgdXNlciBpcyBlbnJvbGxlZCBpbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xhc3NlcygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvY2xhc3Nlcy9gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcbn1cclxuXHJcbi8qKiBnZXQgYWxsIGNsYXNzZXMgYXZhaWxhYmxlICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxDbGFzc2VzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9jbGFzc2VzL2FsbENsYXNzZXNgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gW11cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0R3JvdXBUb2tlbihjbGFzc0lkLCBncm91cElkKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgYC9hcGkvY2xhc3Nlcy8ke2NsYXNzSWR9L2dyb3Vwcy8ke2dyb3VwSWR9L3Rva2VuYCxcclxuICAgICAge30sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUdyb3VwKGNsYXNzSWQsIGdyb3VwSWQpIHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAvYXBpL2NsYXNzZXMvJHtjbGFzc0lkfS9ncm91cHMvJHtncm91cElkfWAsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiBudWxsXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHcm91cEJ5SUQoY2xhc3NJZCwgZ3JvdXBJZCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgYC9hcGkvY2xhc3Nlcy8ke2NsYXNzSWR9L2dyb3Vwcy8ke2dyb3VwSWR9YCxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIClcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0Sm9pbkdyb3VwKGNsYXNzSWQsIGdyb3VwSWQsIGVtYWlsKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgYC9hcGkvY2xhc3Nlcy8ke2NsYXNzSWR9L2dyb3Vwcy8ke2dyb3VwSWR9L2pvaW5gLFxyXG4gICAgICB7IGVtYWlsIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEdyb3VwcyhjbGFzc0lkKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2NsYXNzZXMvJHtjbGFzc0lkfS9ncm91cHNgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlR3JvdXBVc2VyKGNsYXNzSWQsIGdyb3VwSWQsIHVzZXJJZCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBheGlvcy5kZWxldGUoXHJcbiAgICAgIGAvYXBpL2NsYXNzZXMvJHtjbGFzc0lkfS9ncm91cHMvJHtncm91cElkfS9sZWF2ZS8ke3VzZXJJZH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=