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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./components/headComponent.js":
/*!*************************************!*\
  !*** ./components/headComponent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeadComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class HeadComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    }), __jsx("link", {
      rel: "manifest",
      href: "/site.webmanifest"
    }));
  }

}

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_authProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/authProvider */ "./components/authProvider.js");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-notifications */ "react-notifications");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_notifications__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_headComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/headComponent */ "./components/headComponent.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const loginSchema = yup__WEBPACK_IMPORTED_MODULE_1__["object"]({
  email: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().email().required(),
  password: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().min(8).required()
});

function LoginPage() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    login
  } = Object(_components_authProvider__WEBPACK_IMPORTED_MODULE_5__["useAuth"])();

  const handleLogin = async (values, {
    setSubmitting
  }) => {
    setSubmitting(true);
    const user = await login(values.email, values.password);

    if (user) {
      await router.push('/calendar');
    } else {
      react_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationManager"].error('Username And/Or Password Are Incorrect');
    }

    setSubmitting(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_headComponent__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    textAlign: "center",
    style: {
      height: '100vh'
    },
    verticalAlign: "middle"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"].Column, {
    style: {
      maxWidth: 450,
      minWidth: 300
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Header"], {
    as: "h2",
    color: "teal",
    textAlign: "center"
  }, "Mercury | Login"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: handleLogin
  }, ({
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  }) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    size: "large",
    onSubmit: handleSubmit
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Input, {
    fluid: true,
    icon: "user",
    iconPosition: "left",
    placeholder: "Email address",
    name: "email",
    value: values.email,
    onChange: handleChange,
    onBlur: handleBlur,
    error: getError(errors, touched, 'email')
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"].Input, {
    fluid: true,
    icon: "lock",
    iconPosition: "left",
    placeholder: "Password",
    type: "password",
    name: "password",
    value: values.password,
    onChange: handleChange,
    onBlur: handleBlur,
    error: getError(errors, touched, 'password')
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    fluid: true,
    color: "teal",
    size: "large",
    type: "submit",
    disabled: isSubmitting,
    loading: isSubmitting
  }, "Login")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Message"], null, "New to us? ", __jsx("a", {
    href: "#"
  }, "Sign Up")))), __jsx(react_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationContainer"], null)));
}

function getError(errors, touched, name) {
  if (errors[name] && touched[name]) {
    return {
      content: errors[name]
    };
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ryanj\Documents\mercury\pages\login.js */"./pages/login.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-notifications":
/*!**************************************!*\
  !*** external "react-notifications" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-notifications");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3V0aWwvbWVyY3VyeVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtbm90aWZpY2F0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsiTUVSQ1VSWV9UT0tFTiIsIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9hZFVzZXJGcm9tQ29va2llcyIsInRva2VuIiwiQ29va2llcyIsImdldCIsImFwaSIsImN1cnJlbnRVc2VyIiwidXNlRWZmZWN0IiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwibG9naW5SZXNwb25zZSIsInNldCIsImV4cGlyZXMiLCJsb2dvdXQiLCJyZW1vdmUiLCJwdXNoIiwiaXNBdXRoZW50aWNhdGVkIiwiQXV0aFJlcXVpcmVkIiwiQ29tcG9uZW50IiwidXNlQXV0aCIsImhlaWdodCIsImFyZ3VtZW50cyIsInVzZUNvbnRleHQiLCJIZWFkQ29tcG9uZW50IiwicmVuZGVyIiwibG9naW5TY2hlbWEiLCJ5dXAiLCJyZXF1aXJlZCIsIm1pbiIsIkxvZ2luUGFnZSIsImhhbmRsZUxvZ2luIiwidmFsdWVzIiwic2V0U3VibWl0dGluZyIsIk5vdGlmaWNhdGlvbk1hbmFnZXIiLCJlcnJvciIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaXNTdWJtaXR0aW5nIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImhhbmRsZVN1Ym1pdCIsImdldEVycm9yIiwibmFtZSIsImNvbnRlbnQiLCJzZXRUb2tlbiIsInQiLCJwb3N0TG9naW4iLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiZSIsInN1Ym1pdEZlZWRiYWNrIiwiQ2xhc3NJZCIsInN0YXJzIiwiY29tbWVudHMiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInBvc3RHcm91cCIsImNsYXNzSWQiLCJ0eXBlIiwidXNlcklkIiwiZ2V0TWUiLCJnZXRDbGFzcyIsImdldENsYXNzVXNlcnMiLCJnZXRHcm91cHMiLCJnZXRDbGFzc2VzIiwiZ2V0QWxsQ2xhc3NlcyIsInBvc3RHcm91cFRva2VuIiwiZ3JvdXBJZCIsImRlbGV0ZUdyb3VwIiwiZGVsZXRlIiwiZ2V0R3JvdXBCeUlEIiwicG9zdEpvaW5Hcm91cCIsImdldEFsbEdyb3VwcyIsImRlbGV0ZUdyb3VwVXNlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FB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LFdBQVVVLE9BQVEsVUFBU1IsTUFBTyxFQUR0RCxFQUVKO0FBQ0VMLGFBQU8sRUFBRTtBQUNQQyxxQkFBYSxFQUFFekQ7QUFEUjtBQURYLEtBRkksQ0FBTjtBQVFBLFdBQU8sSUFBUDtBQUNELEdBVkQsQ0FVRSxPQUFPbUQsQ0FBUCxFQUFVO0FBQ1YsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25PRCxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vdXRpbC9tZXJjdXJ5U2VydmljZSdcclxuaW1wb3J0IHsgU2VnbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuY29uc3QgTUVSQ1VSWV9UT0tFTiA9ICdtZXJjdXJ5LXRva2VuJ1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgY29uc3QgbG9hZFVzZXJGcm9tQ29va2llcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoTUVSQ1VSWV9UT0tFTilcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBhcGkuc2V0VG9rZW4oYEJlYXJlciAke3Rva2VufWApXHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IGFwaS5nZXRNZSgpXHJcbiAgICAgIGlmIChjdXJyZW50VXNlcikgc2V0VXNlcihjdXJyZW50VXNlcilcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvYWRVc2VyRnJvbUNvb2tpZXMoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIGNvbnN0IGxvZ2luUmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdExvZ2luKGVtYWlsLCBwYXNzd29yZClcclxuICAgIGlmICghbG9naW5SZXNwb25zZSB8fCAhbG9naW5SZXNwb25zZS50b2tlbikgcmV0dXJuIG51bGxcclxuXHJcbiAgICBDb29raWVzLnNldChNRVJDVVJZX1RPS0VOLCBsb2dpblJlc3BvbnNlLnRva2VuLCB7IGV4cGlyZXM6IDYwIH0pXHJcbiAgICBhcGkuc2V0VG9rZW4oYEJlYXJlciAke2xvZ2luUmVzcG9uc2UudG9rZW59YClcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IGFwaS5nZXRNZSgpXHJcbiAgICBpZiAoY3VycmVudFVzZXIpIHNldFVzZXIoY3VycmVudFVzZXIpXHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyXHJcbiAgfVxyXG5cclxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBDb29raWVzLnJlbW92ZShNRVJDVVJZX1RPS0VOKVxyXG4gICAgc2V0VXNlcihudWxsKVxyXG4gICAgYXdhaXQgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7IHVzZXIsIGxvYWRpbmcsIGxvZ2luLCBsb2dvdXQsIGlzQXV0aGVudGljYXRlZDogISF1c2VyIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFJlcXVpcmVkKENvbXBvbmVudCkge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIGxvYWRpbmcgfSA9IHVzZUF1dGgoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICFsb2FkaW5nKSByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH0sIFtsb2FkaW5nLCBpc0F1dGhlbnRpY2F0ZWRdKVxyXG4gICAgcmV0dXJuIGxvYWRpbmcgPyAoXHJcbiAgICAgIDxTZWdtZW50IHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJyB9fSBsb2FkaW5nIC8+XHJcbiAgICApIDogKFxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5hcmd1bWVudHN9IC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxyXG4gICAgICAgICAgc2l6ZXM9XCIxODB4MTgwXCJcclxuICAgICAgICAgIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXHJcbiAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcclxuICAgICAgICAgIGhyZWY9XCIvZmF2aWNvbi0zMngzMi5wbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXHJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcclxuICAgICAgICAgIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL3NpdGUud2VibWFuaWZlc3RcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBHcmlkLCBIZWFkZXIsIE1lc3NhZ2UsIFNlZ21lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aFByb3ZpZGVyJ1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db250YWluZXIsIE5vdGlmaWNhdGlvbk1hbmFnZXIgfSBmcm9tICdyZWFjdC1ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQgSGVhZENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRDb21wb25lbnQnXHJcblxyXG5jb25zdCBsb2dpblNjaGVtYSA9IHl1cC5vYmplY3Qoe1xyXG4gIGVtYWlsOiB5dXAuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxyXG4gIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkubWluKDgpLnJlcXVpcmVkKCksXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBMb2dpblBhZ2UoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IGxvZ2luIH0gPSB1c2VBdXRoKClcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xyXG4gICAgc2V0U3VibWl0dGluZyh0cnVlKVxyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbih2YWx1ZXMuZW1haWwsIHZhbHVlcy5wYXNzd29yZClcclxuXHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICBhd2FpdCByb3V0ZXIucHVzaCgnL2NhbGVuZGFyJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE5vdGlmaWNhdGlvbk1hbmFnZXIuZXJyb3IoJ1VzZXJuYW1lIEFuZC9PciBQYXNzd29yZCBBcmUgSW5jb3JyZWN0JylcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkQ29tcG9uZW50IC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX1cclxuICAgICAgICAgIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyBtYXhXaWR0aDogNDUwLCBtaW5XaWR0aDogMzAwIH19PlxyXG4gICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDJcIiBjb2xvcj1cInRlYWxcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICBNZXJjdXJ5IHwgTG9naW5cclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH19XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17bG9naW5TY2hlbWF9XHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZUxvZ2lufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBzaXplPVwibGFyZ2VcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Z2V0RXJyb3IoZXJyb3JzLCB0b3VjaGVkLCAnZW1haWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Z2V0RXJyb3IoZXJyb3JzLCB0b3VjaGVkLCAncGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICA8TWVzc2FnZT5cclxuICAgICAgICAgICAgICBOZXcgdG8gdXM/IDxhIGhyZWY9XCIjXCI+U2lnbiBVcDwvYT5cclxuICAgICAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPE5vdGlmaWNhdGlvbkNvbnRhaW5lciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXJyb3IoZXJyb3JzLCB0b3VjaGVkLCBuYW1lKSB7XHJcbiAgaWYgKGVycm9yc1tuYW1lXSAmJiB0b3VjaGVkW25hbWVdKSB7XHJcbiAgICByZXR1cm4geyBjb250ZW50OiBlcnJvcnNbbmFtZV0gfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbnZhciB0b2tlbiA9ICcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9rZW4odCkge1xyXG4gIHRva2VuID0gdFxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdExvZ2luKGVtYWlsLCBwYXNzd29yZCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXNlcnMvbG9naW4nLCB7IGVtYWlsLCBwYXNzd29yZCB9KVxyXG5cclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRGZWVkYmFjayhDbGFzc0lkLCBzdGFycywgY29tbWVudHMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICBgL2FwaS9mZWVkYmFjay9gLFxyXG4gICAgICB7IENsYXNzSWQsIHN0YXJzLCBjb21tZW50cyB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0R3JvdXAoY2xhc3NJZCwgbmFtZSwgdHlwZSwgdXNlcklkKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgYC9hcGkvY2xhc3Nlcy8ke2NsYXNzSWR9L2dyb3Vwc2AsXHJcbiAgICAgIHsgbmFtZSwgdHlwZSwgdXNlcklkIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1lKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c2Vycy9tZScsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xhc3MoY2xhc3NJZCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2NsYXNzZXMvY2xhc3MvJHtjbGFzc0lkfWAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGFzc1VzZXJzKGNsYXNzSWQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvdXNlcnMvJHtjbGFzc0lkfWAsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R3JvdXBzKGNsYXNzSWQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvY2xhc3Nlcy8ke2NsYXNzSWR9L2dyb3Vwc2AsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxufVxyXG4vKiogZ2V0IHRoZSBjbGFzc2VzIHRoZSB1c2VyIGlzIGVucm9sbGVkIGluICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGFzc2VzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9jbGFzc2VzL2AsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxufVxyXG5cclxuLyoqIGdldCBhbGwgY2xhc3NlcyBhdmFpbGFibGUgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbENsYXNzZXMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2NsYXNzZXMvYWxsQ2xhc3Nlc2AsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBbXVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RHcm91cFRva2VuKGNsYXNzSWQsIGdyb3VwSWQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICBgL2FwaS9jbGFzc2VzLyR7Y2xhc3NJZH0vZ3JvdXBzLyR7Z3JvdXBJZH0vdG9rZW5gLFxyXG4gICAgICB7fSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlR3JvdXAoY2xhc3NJZCwgZ3JvdXBJZCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBheGlvcy5kZWxldGUoYC9hcGkvY2xhc3Nlcy8ke2NsYXNzSWR9L2dyb3Vwcy8ke2dyb3VwSWR9YCwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwQnlJRChjbGFzc0lkLCBncm91cElkKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICBgL2FwaS9jbGFzc2VzLyR7Y2xhc3NJZH0vZ3JvdXBzLyR7Z3JvdXBJZH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RKb2luR3JvdXAoY2xhc3NJZCwgZ3JvdXBJZCwgZW1haWwpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICBgL2FwaS9jbGFzc2VzLyR7Y2xhc3NJZH0vZ3JvdXBzLyR7Z3JvdXBJZH0vam9pbmAsXHJcbiAgICAgIHsgZW1haWwgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsR3JvdXBzKGNsYXNzSWQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvY2xhc3Nlcy8ke2NsYXNzSWR9L2dyb3Vwc2AsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIHJldHVybiBkYXRhXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHcm91cFVzZXIoY2xhc3NJZCwgZ3JvdXBJZCwgdXNlcklkKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShcclxuICAgICAgYC9hcGkvY2xhc3Nlcy8ke2NsYXNzSWR9L2dyb3Vwcy8ke2dyb3VwSWR9L2xlYXZlLyR7dXNlcklkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW5vdGlmaWNhdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwieXVwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=