exports.ids = [1];
exports.modules = {

/***/ "./components/createDiscussionModal.js":
/*!*********************************************!*\
  !*** ./components/createDiscussionModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function CreateDiscussionModal({
  onCreate
}) {
  const {
    0: name,
    1: setDiscussionName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: modalState,
    1: toggleModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  async function createDiscussion() {
    if (!name) return;
    toggleModal(false);
    onCreate({
      name,
      type: 'discussion'
    });
  }

  return __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    style: {
      borderless: 'true',
      width: '40%',
      height: '40%'
    },
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: "teal",
      content: "Create Discussions",
      fluid: true,
      style: {
        fontSize: '1vw'
      },
      onClick: () => {
        toggleModal(true);
        setDiscussionName('');
      }
    }),
    open: modalState,
    onClose: () => toggleModal(false),
    closeOnDimmerClick: false,
    closeOnEscape: false,
    closeIcon: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
    style: {
      borderless: 'true'
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
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
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    fluid: true,
    placeholder: "Discussion name",
    name: "name",
    value: name,
    onChange: e => setDiscussionName(e.target.value)
  })), __jsx("div", {
    style: {
      textAlign: 'center',
      width: '70%',
      height: '70%',
      margin: 'auto',
      padding: '5%'
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "teal",
    style: {
      width: '50%',
      fontSize: '1vw'
    },
    onClick: createDiscussion,
    content: 'Create'
  })))));
}

CreateDiscussionModal.propTypes = {
  onCreate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CreateDiscussionModal);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZURpc2N1c3Npb25Nb2RhbC5qcyJdLCJuYW1lcyI6WyJDcmVhdGVEaXNjdXNzaW9uTW9kYWwiLCJvbkNyZWF0ZSIsIm5hbWUiLCJzZXREaXNjdXNzaW9uTmFtZSIsInVzZVN0YXRlIiwibW9kYWxTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlRGlzY3Vzc2lvbiIsInR5cGUiLCJib3JkZXJsZXNzIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsInBhZGRpbmciLCJtYXJnaW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxxQkFBVCxDQUErQjtBQUFFQztBQUFGLENBQS9CLEVBQTZDO0FBQzNDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUE0QkMsc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQTRCRixzREFBUSxDQUFDLEtBQUQsQ0FBMUM7O0FBRUEsaUJBQWVHLGdCQUFmLEdBQWtDO0FBQ2hDLFFBQUksQ0FBQ0wsSUFBTCxFQUFXO0FBRVhJLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUwsWUFBUSxDQUFDO0FBQUVDLFVBQUY7QUFBUU0sVUFBSSxFQUFFO0FBQWQsS0FBRCxDQUFSO0FBQ0Q7O0FBRUQsU0FDRSxtQkFDRSxNQUFDLHVEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLGdCQUFVLEVBQUUsTUFBZDtBQUFzQkMsV0FBSyxFQUFFLEtBQTdCO0FBQW9DQyxZQUFNLEVBQUU7QUFBNUMsS0FEVDtBQUVFLFdBQU8sRUFDTCxNQUFDLHdEQUFEO0FBQ0UsV0FBSyxFQUFDLE1BRFI7QUFFRSxhQUFPLEVBQUMsb0JBRlY7QUFHRSxXQUFLLE1BSFA7QUFJRSxXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BSlQ7QUFLRSxhQUFPLEVBQUUsTUFBTTtBQUNiTixtQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBSCx5QkFBaUIsQ0FBQyxFQUFELENBQWpCO0FBQ0Q7QUFSSCxNQUhKO0FBY0UsUUFBSSxFQUFFRSxVQWRSO0FBZUUsV0FBTyxFQUFFLE1BQU1DLFdBQVcsQ0FBQyxLQUFELENBZjVCO0FBZ0JFLHNCQUFrQixFQUFFLEtBaEJ0QjtBQWlCRSxpQkFBYSxFQUFFLEtBakJqQjtBQWtCRSxhQUFTO0FBbEJYLEtBb0JFLE1BQUMsdURBQUQsQ0FBTyxPQUFQO0FBQWUsU0FBSyxFQUFFO0FBQUVHLGdCQUFVLEVBQUU7QUFBZDtBQUF0QixLQUNFLE1BQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTEcsY0FBUSxFQUFFLEtBREw7QUFFTEMsZUFBUyxFQUFFLFFBRk47QUFHTEgsV0FBSyxFQUFFLE1BSEY7QUFJTEksYUFBTyxFQUFFLElBSko7QUFLTEgsWUFBTSxFQUFFLEtBTEg7QUFNTEksWUFBTSxFQUFFO0FBTkgsS0FEVDtBQVNFLFdBQU8sRUFBRTtBQVRYLElBREYsRUFhRTtBQUNFLFNBQUssRUFBRTtBQUNMRixlQUFTLEVBQUUsUUFETjtBQUVMQyxhQUFPLEVBQUU7QUFGSjtBQURULEtBTUUsTUFBQyx1REFBRDtBQUNFLFNBQUssTUFEUDtBQUVFLGVBQVcsRUFBQyxpQkFGZDtBQUdFLFFBQUksRUFBQyxNQUhQO0FBSUUsU0FBSyxFQUFFWixJQUpUO0FBS0UsWUFBUSxFQUFHYyxDQUFELElBQU9iLGlCQUFpQixDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVjtBQUxwQyxJQU5GLENBYkYsRUE0QkU7QUFDRSxTQUFLLEVBQUU7QUFDTEwsZUFBUyxFQUFFLFFBRE47QUFFTEgsV0FBSyxFQUFFLEtBRkY7QUFHTEMsWUFBTSxFQUFFLEtBSEg7QUFJTEksWUFBTSxFQUFFLE1BSkg7QUFLTEQsYUFBTyxFQUFFO0FBTEo7QUFEVCxLQVNFLE1BQUMsd0RBQUQ7QUFDRSxTQUFLLEVBQUMsTUFEUjtBQUVFLFNBQUssRUFBRTtBQUFFSixXQUFLLEVBQUUsS0FBVDtBQUFnQkUsY0FBUSxFQUFFO0FBQTFCLEtBRlQ7QUFHRSxXQUFPLEVBQUVMLGdCQUhYO0FBSUUsV0FBTyxFQUFFO0FBSlgsSUFURixDQTVCRixDQXBCRixDQURGLENBREY7QUFzRUQ7O0FBRURQLHFCQUFxQixDQUFDbUIsU0FBdEIsR0FBa0M7QUFDaENsQixVQUFRLEVBQUVtQixpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBRE8sQ0FBbEM7QUFJZXRCLG9GQUFmLEUiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIEhlYWRlciwgU2VhcmNoLCBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5cclxuZnVuY3Rpb24gQ3JlYXRlRGlzY3Vzc2lvbk1vZGFsKHsgb25DcmVhdGUgfSkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXREaXNjdXNzaW9uTmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbbW9kYWxTdGF0ZSwgdG9nZ2xlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURpc2N1c3Npb24oKSB7XHJcbiAgICBpZiAoIW5hbWUpIHJldHVyblxyXG5cclxuICAgIHRvZ2dsZU1vZGFsKGZhbHNlKVxyXG4gICAgb25DcmVhdGUoeyBuYW1lLCB0eXBlOiAnZGlzY3Vzc2lvbicgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBzdHlsZT17eyBib3JkZXJsZXNzOiAndHJ1ZScsIHdpZHRoOiAnNDAlJywgaGVpZ2h0OiAnNDAlJyB9fVxyXG4gICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cInRlYWxcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIERpc2N1c3Npb25zXCJcclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxdncnIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICB0b2dnbGVNb2RhbCh0cnVlKVxyXG4gICAgICAgICAgICAgIHNldERpc2N1c3Npb25OYW1lKCcnKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgb3Blbj17bW9kYWxTdGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB0b2dnbGVNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgY2xvc2VPbkRpbW1lckNsaWNrPXtmYWxzZX1cclxuICAgICAgICBjbG9zZU9uRXNjYXBlPXtmYWxzZX1cclxuICAgICAgICBjbG9zZUljb25cclxuICAgICAgPlxyXG4gICAgICAgIDxNb2RhbC5Db250ZW50IHN0eWxlPXt7IGJvcmRlcmxlc3M6ICd0cnVlJyB9fT5cclxuICAgICAgICAgIDxIZWFkZXJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmb250U2l6ZTogJzJ2dycsXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICc1JScsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnNTAlJyxcclxuICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY29udGVudD17J05ldyBEaXNjdXNzaW9uJ31cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzUlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpc2N1c3Npb24gbmFtZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGlzY3Vzc2lvbk5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICc3MCUnLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogJzcwJScsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzUlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbG9yPVwidGVhbFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBmb250U2l6ZTogJzF2dycgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtjcmVhdGVEaXNjdXNzaW9ufVxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9eydDcmVhdGUnfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5DcmVhdGVEaXNjdXNzaW9uTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gIG9uQ3JlYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVEaXNjdXNzaW9uTW9kYWxcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==