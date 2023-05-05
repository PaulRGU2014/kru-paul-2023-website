(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[4583],{

/***/ 76539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Tokens_FormHead)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var design_system_dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Regenerate/index.js







const Regenerate = ({ onRegenerate, idToRegenerate, backUrl }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const { regenerateData, isLoadingConfirmation } = (0,hooks/* useRegenerate */.rW)(
    backUrl,
    idToRegenerate,
    onRegenerate
  );
  const handleConfirmRegeneration = async () => {
    regenerateData();
    setShowConfirmDialog(false);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    design_system_dist.Button,
    {
      startIcon: /* @__PURE__ */ react.createElement(dist.Refresh, null),
      type: "button",
      size: "S",
      variant: "tertiary",
      onClick: () => setShowConfirmDialog(true),
      name: "regenerate"
    },
    formatMessage({
      id: "Settings.tokens.regenerate",
      defaultMessage: "Regenerate"
    })
  ), /* @__PURE__ */ react.createElement(
    helper_plugin.ConfirmDialog,
    {
      bodyText: {
        id: "Settings.tokens.popUpWarning.message",
        defaultMessage: "Are you sure you want to regenerate this token?"
      },
      iconRightButton: /* @__PURE__ */ react.createElement(dist.Refresh, null),
      isConfirmButtonLoading: isLoadingConfirmation,
      isOpen: showConfirmDialog,
      onToggleDialog: () => setShowConfirmDialog(false),
      onConfirm: handleConfirmRegeneration,
      leftButtonText: {
        id: "Settings.tokens.Button.cancel",
        defaultMessage: "Cancel"
      },
      rightButtonText: {
        id: "Settings.tokens.Button.regenerate",
        defaultMessage: "Regenerate"
      },
      title: {
        id: "Settings.tokens.RegenerateDialog.title",
        defaultMessage: "Regenerate token"
      }
    }
  ));
};
Regenerate.defaultProps = { onRegenerate() {
} };
Regenerate.propTypes = {
  onRegenerate: (prop_types_default()).func,
  idToRegenerate: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired,
  backUrl: (prop_types_default()).string.isRequired
};
/* harmony default export */ const Tokens_Regenerate = (Regenerate);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/FormHead/index.js







const FormHead = ({
  title,
  token,
  setToken,
  canEditInputs,
  canRegenerate,
  isSubmitting,
  backUrl,
  regenerateUrl
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleRegenerate = (newKey) => {
    setToken({
      ...token,
      accessKey: newKey
    });
  };
  return /* @__PURE__ */ react.createElement(
    design_system_dist.HeaderLayout,
    {
      title: token?.name || formatMessage(title),
      primaryAction: canEditInputs ? /* @__PURE__ */ react.createElement(design_system_dist.Stack, { horizontal: true, spacing: 2 }, canRegenerate && token?.id && /* @__PURE__ */ react.createElement(
        Tokens_Regenerate,
        {
          backUrl: regenerateUrl,
          onRegenerate: handleRegenerate,
          idToRegenerate: token?.id
        }
      ), /* @__PURE__ */ react.createElement(
        design_system_dist.Button,
        {
          disabled: isSubmitting,
          loading: isSubmitting,
          startIcon: /* @__PURE__ */ react.createElement(dist.Check, null),
          type: "submit",
          size: "S"
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      )) : canRegenerate && token?.id && /* @__PURE__ */ react.createElement(
        Tokens_Regenerate,
        {
          onRegenerate: handleRegenerate,
          idToRegenerate: token?.id,
          backUrl: regenerateUrl
        }
      ),
      navigationAction: /* @__PURE__ */ react.createElement(helper_plugin.Link, { startIcon: /* @__PURE__ */ react.createElement(dist.ArrowLeft, null), to: backUrl }, formatMessage({
        id: "global.back",
        defaultMessage: "Back"
      }))
    }
  );
};
FormHead.propTypes = {
  token: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  }),
  canEditInputs: (prop_types_default()).bool.isRequired,
  canRegenerate: (prop_types_default()).bool.isRequired,
  setToken: (prop_types_default()).func.isRequired,
  isSubmitting: (prop_types_default()).bool.isRequired,
  backUrl: (prop_types_default()).string.isRequired,
  title: prop_types_default().shape({
    id: (prop_types_default()).string,
    label: (prop_types_default()).string
  }).isRequired,
  regenerateUrl: (prop_types_default()).string.isRequired
};
FormHead.defaultProps = {
  token: void 0
};
/* harmony default export */ const Tokens_FormHead = (FormHead);


/***/ }),

/***/ 60401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97132);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28702);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_ApiTokens_EditView_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75056);





const LifeSpanInput = ({ token, errors, values, onChange, isCreating }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Select,
    {
      name: "lifespan",
      label: formatMessage({
        id: "Settings.tokens.form.duration",
        defaultMessage: "Token duration"
      }),
      value: values.lifespan !== null ? values.lifespan : "0",
      error: errors.lifespan ? formatMessage(
        errors.lifespan?.id ? errors.lifespan : { id: errors.lifespan, defaultMessage: errors.lifespan }
      ) : null,
      onChange: (value) => {
        onChange({ target: { name: "lifespan", value } });
      },
      required: true,
      disabled: !isCreating,
      placeholder: "Select"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "604800000" }, formatMessage({
      id: "Settings.tokens.duration.7-days",
      defaultMessage: "7 days"
    })),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "2592000000" }, formatMessage({
      id: "Settings.tokens.duration.30-days",
      defaultMessage: "30 days"
    })),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "7776000000" }, formatMessage({
      id: "Settings.tokens.duration.90-days",
      defaultMessage: "90 days"
    })),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Option, { value: "0" }, formatMessage({
      id: "Settings.tokens.duration.unlimited",
      defaultMessage: "Unlimited"
    }))
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, { variant: "pi", textColor: "neutral600" }, !isCreating && `${formatMessage({
    id: "Settings.tokens.duration.expiration-date",
    defaultMessage: "Expiration date"
  })}: ${(0,_pages_ApiTokens_EditView_utils__WEBPACK_IMPORTED_MODULE_1__/* .getDateOfExpiration */ .IX)(token?.createdAt, parseInt(values.lifespan, 10))}`));
};
LifeSpanInput.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    lifespan: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
  }),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  values: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    lifespan: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)])
  }).isRequired,
  isCreating: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool.isRequired),
  token: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)]),
    type: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    lifespan: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    accessKey: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    permissions: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    createdAt: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
  })
};
LifeSpanInput.defaultProps = {
  errors: {},
  token: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LifeSpanInput);


/***/ }),

/***/ 24122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97132);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95489);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28702);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41363);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74855);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);







const TokenBox = ({ token, tokenType }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.useNotification)();
  const { trackUsage } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.useTracking)();
  const trackUsageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(trackUsage);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.ContentBox,
    {
      endAction: token && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { alignSelf: "start" } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__.CopyToClipboard,
        {
          onCopy: () => {
            trackUsageRef.current("didCopyTokenKey", {
              tokenType
            });
            toggleNotification({
              type: "success",
              message: { id: "Settings.tokens.notification.copied" }
            });
          },
          text: token
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__.IconButton,
          {
            label: formatMessage({
              id: "app.component.CopyToClipboard.label",
              defaultMessage: "Copy to clipboard"
            }),
            noBorder: true,
            icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__.Duplicate, null),
            style: { padding: 0, height: "1rem" }
          }
        )
      )),
      title: token || formatMessage({
        id: "Settings.tokens.copy.editTitle",
        defaultMessage: "This token isn\u2019t accessible anymore."
      }),
      subtitle: token ? formatMessage({
        id: "Settings.tokens.copy.lastWarning",
        defaultMessage: "Make sure to copy this token, you won\u2019t be able to see it again!"
      }) : formatMessage({
        id: "Settings.tokens.copy.editMessage",
        defaultMessage: "For security reasons, you can only see your token once."
      }),
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__.Key, null),
      iconBackground: "neutral100"
    }
  );
};
TokenBox.defaultProps = {
  token: null
};
TokenBox.propTypes = {
  token: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  tokenType: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenBox);


/***/ }),

/***/ 40695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97132);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28702);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__);




const TokenDescription = ({ errors, values, onChange, canEditInputs }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__.Textarea,
    {
      label: formatMessage({
        id: "Settings.tokens.form.description",
        defaultMessage: "Description"
      }),
      name: "description",
      error: errors.description ? formatMessage(
        errors.description?.id ? errors.description : {
          id: errors.description,
          defaultMessage: errors.description
        }
      ) : null,
      onChange,
      disabled: !canEditInputs
    },
    values.description
  );
};
TokenDescription.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  canEditInputs: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),
  values: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }).isRequired
};
TokenDescription.defaultProps = {
  errors: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenDescription);


/***/ }),

/***/ 61053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97132);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28702);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__);




const TokenName = ({ errors, values, onChange, canEditInputs }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__.TextInput,
    {
      name: "name",
      error: errors.name ? formatMessage(
        errors.name?.id ? errors.name : { id: errors.name, defaultMessage: errors.name }
      ) : null,
      label: formatMessage({
        id: "Settings.tokens.form.name",
        defaultMessage: "Name"
      }),
      onChange,
      value: values.name,
      disabled: !canEditInputs,
      required: true
    }
  );
};
TokenName.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  canEditInputs: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),
  values: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
  }).isRequired
};
TokenName.defaultProps = {
  errors: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenName);


/***/ }),

/***/ 47670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ API_TOKEN_TYPE),
/* harmony export */   "f": () => (/* binding */ TRANSFER_TOKEN_TYPE)
/* harmony export */ });
const API_TOKEN_TYPE = "api-token";
const TRANSFER_TOKEN_TYPE = "transfer-token";


/***/ }),

/***/ 24583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EditView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var formik_dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(38683);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/index.js + 3 modules
var EditView_utils = __webpack_require__(75056);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/LoadingView/index.js






const LoadingView = ({ apiTokenName }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,helper_plugin.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: "API Tokens" }), /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      primaryAction: /* @__PURE__ */ react.createElement(dist.Button, { disabled: true, startIcon: /* @__PURE__ */ react.createElement(icons_dist.Check, null), type: "button", size: "L" }, formatMessage({ id: "global.save", defaultMessage: "Save" })),
      title: apiTokenName || formatMessage({
        id: "Settings.apiTokens.createPage.title",
        defaultMessage: "Create API Token"
      })
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null)));
};
LoadingView.defaultProps = {
  apiTokenName: null
};
LoadingView.propTypes = {
  apiTokenName: (prop_types_default()).string
};
/* harmony default export */ const components_LoadingView = (LoadingView);

// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
;// CONCATENATED MODULE: ./.cache/admin/src/contexts/ApiTokenPermissions/index.js


const ApiTokenPermissionsContext = (0,react.createContext)({});
const ApiTokenPermissionsContextProvider = ({ children, ...rest }) => {
  return /* @__PURE__ */ react.createElement(ApiTokenPermissionsContext.Provider, { value: rest }, children);
};
const useApiTokenPermissionsContext = () => (0,react.useContext)(ApiTokenPermissionsContext);
ApiTokenPermissionsContextProvider.propTypes = {
  children: (prop_types_default()).node.isRequired
};


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/init.js

const init = (state, permissions = []) => {
  return {
    ...state,
    selectedAction: null,
    routes: [],
    selectedActions: [],
    data: (0,EditView_utils/* transformPermissionsData */.mk)(permissions)
  };
};
/* harmony default export */ const EditView_init = (init);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/reducer.js



const initialState = {
  data: {},
  selectedActions: []
};
const reducer = (state, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE": {
      if (draftState.selectedActions.includes(action.value)) {
        (0,lodash.pull)(draftState.selectedActions, action.value);
      } else {
        draftState.selectedActions.push(action.value);
      }
      break;
    }
    case "SELECT_ALL_IN_PERMISSION": {
      const areAllSelected = action.value.every(
        (item) => draftState.selectedActions.includes(item.actionId)
      );
      if (areAllSelected) {
        action.value.forEach((item) => {
          (0,lodash.pull)(draftState.selectedActions, item.actionId);
        });
      } else {
        action.value.forEach((item) => {
          draftState.selectedActions.push(item.actionId);
        });
      }
      break;
    }
    case "SELECT_ALL_ACTIONS": {
      draftState.selectedActions = [...draftState.data.allActionsIds];
      break;
    }
    case "ON_CHANGE_READ_ONLY": {
      const onlyReadOnlyActions = draftState.data.allActionsIds.filter(
        (actionId) => actionId.includes("find") || actionId.includes("findOne")
      );
      draftState.selectedActions = [...onlyReadOnlyActions];
      break;
    }
    case "UPDATE_PERMISSIONS_LAYOUT": {
      draftState.data = (0,EditView_utils/* transformPermissionsData */.mk)(action.value);
      break;
    }
    case "UPDATE_ROUTES": {
      draftState.routes = { ...action.value };
      break;
    }
    case "UPDATE_PERMISSIONS": {
      draftState.selectedActions = [...action.value];
      break;
    }
    case "SET_SELECTED_ACTION": {
      draftState.selectedAction = action.value;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const EditView_reducer = (reducer);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/CollapsableContentType/CheckBoxWrapper.js


const activeCheckboxWrapperStyles = styled_components_browser_esm.css`
  background: ${(props) => props.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`;
const CheckboxWrapper = (0,styled_components_browser_esm["default"])(dist.Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${(props) => props.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${(props) => props.isActive && activeCheckboxWrapperStyles}
  &:hover {
    ${activeCheckboxWrapperStyles}
  }
`;
/* harmony default export */ const CheckBoxWrapper = (CheckboxWrapper);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/CollapsableContentType/index.js









const Border = styled_components_browser_esm["default"].div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const CollapsableContentType = ({
  controllers,
  label,
  orderNumber,
  disabled,
  onExpanded,
  indexExpandendCollapsedContent
}) => {
  const {
    value: { onChangeSelectAll, onChange, selectedActions, setSelectedAction, selectedAction }
  } = useApiTokenPermissionsContext();
  const [expanded, setExpanded] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleExpandedAccordion = () => {
    setExpanded((s) => !s);
    onExpanded(orderNumber);
  };
  (0,react.useEffect)(() => {
    if (indexExpandendCollapsedContent !== null && indexExpandendCollapsedContent !== orderNumber && expanded) {
      setExpanded(false);
    }
  }, [indexExpandendCollapsedContent, orderNumber, expanded]);
  const isActionSelected = (actionId) => actionId === selectedAction;
  return /* @__PURE__ */ react.createElement(
    dist.Accordion,
    {
      expanded,
      onToggle: handleExpandedAccordion,
      variant: orderNumber % 2 ? "primary" : "secondary"
    },
    /* @__PURE__ */ react.createElement(dist.AccordionToggle, { title: (0,lodash.capitalize)(label) }),
    /* @__PURE__ */ react.createElement(dist.AccordionContent, null, controllers?.map((controller) => {
      const allActionsSelected = controller.actions.every(
        (action) => selectedActions.includes(action.actionId)
      );
      const someActionsSelected = controller.actions.some(
        (action) => selectedActions.includes(action.actionId)
      );
      return /* @__PURE__ */ react.createElement(dist.Box, { key: `${label}.${controller?.controller}` }, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "space-between", alignItems: "center", padding: 4 }, /* @__PURE__ */ react.createElement(dist.Box, { paddingRight: 4 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, controller?.controller)), /* @__PURE__ */ react.createElement(Border, null), /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(
        dist.Checkbox,
        {
          value: allActionsSelected,
          indeterminate: !allActionsSelected && someActionsSelected,
          onValueChange: () => {
            onChangeSelectAll({ target: { value: [...controller.actions] } });
          },
          disabled
        },
        formatMessage({ id: "app.utils.select-all", defaultMessage: "Select all" })
      ))), /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4, padding: 4 }, controller?.actions && controller?.actions.map((action) => {
        return /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, key: action.actionId }, /* @__PURE__ */ react.createElement(
          CheckBoxWrapper,
          {
            isActive: isActionSelected(action.actionId),
            padding: 2,
            hasRadius: true
          },
          /* @__PURE__ */ react.createElement(
            dist.Checkbox,
            {
              value: selectedActions.includes(action.actionId),
              name: action.actionId,
              onValueChange: () => {
                onChange({ target: { value: action.actionId } });
              },
              disabled
            },
            action.action
          ),
          /* @__PURE__ */ react.createElement(
            "button",
            {
              type: "button",
              "data-testid": "action-cog",
              onClick: () => setSelectedAction({ target: { value: action.actionId } }),
              style: { display: "inline-flex", alignItems: "center" }
            },
            /* @__PURE__ */ react.createElement(icons_dist.Cog, null)
          )
        ));
      })));
    }))
  );
};
CollapsableContentType.defaultProps = {
  controllers: [],
  orderNumber: 0,
  disabled: false,
  onExpanded: () => null,
  indexExpandendCollapsedContent: null
};
CollapsableContentType.propTypes = {
  controllers: (prop_types_default()).array,
  orderNumber: (prop_types_default()).number,
  label: (prop_types_default()).string.isRequired,
  disabled: (prop_types_default()).bool,
  onExpanded: (prop_types_default()).func,
  indexExpandendCollapsedContent: (prop_types_default()).number
};
/* harmony default export */ const components_CollapsableContentType = (CollapsableContentType);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/ContenTypesSection/index.js




const ContentTypesSection = ({ section, ...props }) => {
  const [indexExpandedCollpsedContent, setIndexExpandedCollpsedContent] = (0,react.useState)(null);
  const handleExpandedCollpsedContentIndex = (index) => setIndexExpandedCollpsedContent(index);
  return /* @__PURE__ */ react.createElement(dist.Box, { padding: 4, background: "neutral0" }, section && section.map((api, index) => /* @__PURE__ */ react.createElement(
    components_CollapsableContentType,
    {
      key: api.apiId,
      label: api.label,
      controllers: api.controllers,
      orderNumber: index,
      indexExpandendCollapsedContent: indexExpandedCollpsedContent,
      onExpanded: handleExpandedCollpsedContentIndex,
      name: api.apiId,
      ...props
    }
  )));
};
ContentTypesSection.defaultProps = {
  section: null
};
ContentTypesSection.propTypes = {
  section: prop_types_default().arrayOf((prop_types_default()).object)
};
/* harmony default export */ const ContenTypesSection = (ContentTypesSection);

// EXTERNAL MODULE: ./node_modules/lodash/map.js
var map = __webpack_require__(35161);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/lodash/tail.js
var tail = __webpack_require__(13217);
var tail_default = /*#__PURE__*/__webpack_require__.n(tail);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/BoundRoute/getMethodColor.js
const getMethodColor = (verb) => {
  switch (verb) {
    case "POST": {
      return {
        text: "success600",
        border: "success200",
        background: "success100"
      };
    }
    case "GET": {
      return {
        text: "secondary600",
        border: "secondary200",
        background: "secondary100"
      };
    }
    case "PUT": {
      return {
        text: "warning600",
        border: "warning200",
        background: "warning100"
      };
    }
    case "DELETE": {
      return {
        text: "danger600",
        border: "danger200",
        background: "danger100"
      };
    }
    default: {
      return {
        text: "neutral600",
        border: "neutral200",
        background: "neutral100"
      };
    }
  }
};
/* harmony default export */ const BoundRoute_getMethodColor = (getMethodColor);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/BoundRoute/index.js








const MethodBox = (0,styled_components_browser_esm["default"])(dist.Box)`
  margin: -1px;
  border-radius: ${({ theme }) => theme.spaces[1]} 0 0 ${({ theme }) => theme.spaces[1]};
`;
function BoundRoute({ route }) {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { method, handler: title, path } = route;
  const formattedRoute = path ? tail_default()(path.split("/")) : [];
  const [controller = "", action = ""] = title ? title.split(".") : [];
  const colors = BoundRoute_getMethodColor(route.method);
  return /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 2 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h3" }, formatMessage({
    id: "Settings.apiTokens.createPage.BoundRoute.title",
    defaultMessage: "Bound route to"
  }), "\xA0", /* @__PURE__ */ react.createElement("span", null, controller), /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", textColor: "primary600" }, ".", action)), /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, hasRadius: true, background: "neutral0", borderColor: "neutral200", spacing: 0 }, /* @__PURE__ */ react.createElement(MethodBox, { background: colors.background, borderColor: colors.border, padding: 2 }, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold", textColor: colors.text }, method)), /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 2, paddingRight: 2 }, map_default()(formattedRoute, (value) => /* @__PURE__ */ react.createElement(dist.Typography, { key: value, textColor: value.includes(":") ? "neutral600" : "neutral900" }, "/", value)))));
}
BoundRoute.defaultProps = {
  route: {
    handler: "Nocontroller.error",
    method: "GET",
    path: "/there-is-no-path"
  }
};
BoundRoute.propTypes = {
  route: prop_types_default().shape({
    handler: (prop_types_default()).string,
    method: (prop_types_default()).string,
    path: (prop_types_default()).string
  })
};
/* harmony default export */ const components_BoundRoute = (BoundRoute);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/ActionBoundRoutes/index.js





const ActionBoundRoutes = () => {
  const {
    value: { selectedAction, routes }
  } = useApiTokenPermissionsContext();
  const { formatMessage } = (0,react_intl.useIntl)();
  const actionSection = selectedAction?.split(".")[0];
  return /* @__PURE__ */ react.createElement(
    dist.GridItem,
    {
      col: 5,
      background: "neutral150",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      style: { minHeight: "100%" }
    },
    selectedAction ? /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 2 }, routes[actionSection]?.map((route) => {
      return route.config.auth?.scope?.includes(selectedAction) || route.handler === selectedAction ? /* @__PURE__ */ react.createElement(components_BoundRoute, { key: route.handler, route }) : null;
    })) : /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 2 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h3" }, formatMessage({
      id: "Settings.apiTokens.createPage.permissions.header.title",
      defaultMessage: "Advanced settings"
    })), /* @__PURE__ */ react.createElement(dist.Typography, { as: "p", textColor: "neutral600" }, formatMessage({
      id: "Settings.apiTokens.createPage.permissions.header.hint",
      defaultMessage: "Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"
    })))
  );
};
/* harmony default export */ const components_ActionBoundRoutes = (ActionBoundRoutes);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/Permissions/index.js






const Permissions = ({ ...props }) => {
  const {
    value: { data }
  } = useApiTokenPermissionsContext();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Grid, { gap: 0, shadow: "filterShadow", hasRadius: true, background: "neutral0" }, /* @__PURE__ */ react.createElement(dist.GridItem, { col: 7, paddingTop: 6, paddingBottom: 6, paddingLeft: 7, paddingRight: 7 }, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 2 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h2" }, formatMessage({
    id: "Settings.apiTokens.createPage.permissions.title",
    defaultMessage: "Permissions"
  })), /* @__PURE__ */ react.createElement(dist.Typography, { as: "p", textColor: "neutral600" }, formatMessage({
    id: "Settings.apiTokens.createPage.permissions.description",
    defaultMessage: "Only actions bound by a route are listed below."
  }))), data?.permissions && /* @__PURE__ */ react.createElement(ContenTypesSection, { section: data?.permissions, ...props })), /* @__PURE__ */ react.createElement(components_ActionBoundRoutes, null));
};
/* harmony default export */ const components_Permissions = ((0,react.memo)(Permissions));

// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/LifeSpanInput/index.js
var LifeSpanInput = __webpack_require__(60401);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenName/index.js
var TokenName = __webpack_require__(61053);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenDescription/index.js
var TokenDescription = __webpack_require__(40695);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenTypeSelect/index.js




const TokenTypeSelect = ({ errors, values, onChange, canEditInputs, options, label }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    dist.Select,
    {
      name: "type",
      label: formatMessage({
        id: label.id,
        defaultMessage: label.defaultMessage
      }),
      value: values?.type,
      error: errors.type ? formatMessage(
        errors.type?.id ? errors.type : { id: errors.type, defaultMessage: errors.type }
      ) : null,
      onChange,
      placeholder: "Select",
      required: true,
      disabled: !canEditInputs
    },
    options && options.map(({ value, label: label2 }) => /* @__PURE__ */ react.createElement(dist.Option, { key: value, value }, formatMessage(label2)))
  );
};
TokenTypeSelect.propTypes = {
  options: prop_types_default().arrayOf(
    prop_types_default().shape({
      label: prop_types_default().shape({
        id: (prop_types_default()).string,
        defaultMessage: (prop_types_default()).string
      }),
      value: (prop_types_default()).string
    })
  ),
  errors: prop_types_default().shape({
    type: (prop_types_default()).string
  }),
  onChange: (prop_types_default()).func.isRequired,
  canEditInputs: (prop_types_default()).bool.isRequired,
  values: prop_types_default().shape({
    type: (prop_types_default()).string
  }).isRequired,
  label: prop_types_default().shape({
    id: (prop_types_default()).string,
    defaultMessage: (prop_types_default()).string
  }).isRequired
};
TokenTypeSelect.defaultProps = {
  errors: {},
  options: []
};
/* harmony default export */ const Tokens_TokenTypeSelect = (TokenTypeSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/components/FormApiTokenContainer/index.js








const FormApiTokenContainer = ({
  errors,
  onChange,
  canEditInputs,
  isCreating,
  values,
  apiToken,
  onDispatch,
  setHasChangedPermissions
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleChangeSelectApiTokenType = ({ target: { value } }) => {
    setHasChangedPermissions(false);
    if (value === "full-access") {
      onDispatch({
        type: "SELECT_ALL_ACTIONS"
      });
    }
    if (value === "read-only") {
      onDispatch({
        type: "ON_CHANGE_READ_ONLY"
      });
    }
  };
  const typeOptions = [
    {
      value: "read-only",
      label: {
        id: "Settings.tokens.types.read-only",
        defaultMessage: "Read-only"
      }
    },
    {
      value: "full-access",
      label: {
        id: "Settings.tokens.types.full-access",
        defaultMessage: "Full access"
      }
    },
    {
      value: "custom",
      label: {
        id: "Settings.tokens.types.custom",
        defaultMessage: "Custom"
      }
    }
  ];
  return /* @__PURE__ */ react.createElement(
    dist.Box,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    },
    /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 4 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h2" }, formatMessage({
      id: "global.details",
      defaultMessage: "Details"
    })), /* @__PURE__ */ react.createElement(dist.Grid, { gap: 5 }, /* @__PURE__ */ react.createElement(dist.GridItem, { key: "name", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      TokenName/* default */.Z,
      {
        errors,
        values,
        canEditInputs,
        onChange
      }
    )), /* @__PURE__ */ react.createElement(dist.GridItem, { key: "description", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      TokenDescription/* default */.Z,
      {
        errors,
        values,
        canEditInputs,
        onChange
      }
    )), /* @__PURE__ */ react.createElement(dist.GridItem, { key: "lifespan", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      LifeSpanInput/* default */.Z,
      {
        isCreating,
        errors,
        values,
        onChange,
        token: apiToken
      }
    )), /* @__PURE__ */ react.createElement(dist.GridItem, { key: "type", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      Tokens_TokenTypeSelect,
      {
        values,
        errors,
        label: {
          id: "Settings.tokens.form.type",
          defaultMessage: "Token type"
        },
        onChange: (value) => {
          handleChangeSelectApiTokenType({ target: { value } });
          onChange({ target: { name: "type", value } });
        },
        options: typeOptions,
        canEditInputs
      }
    ))))
  );
};
FormApiTokenContainer.propTypes = {
  errors: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    type: (prop_types_default()).string
  }),
  onChange: (prop_types_default()).func.isRequired,
  canEditInputs: (prop_types_default()).bool.isRequired,
  values: prop_types_default().shape({
    name: (prop_types_default()).string,
    description: (prop_types_default()).string,
    lifespan: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string
  }).isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  apiToken: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  }),
  onDispatch: (prop_types_default()).func.isRequired,
  setHasChangedPermissions: (prop_types_default()).func.isRequired
};
FormApiTokenContainer.defaultProps = {
  errors: {},
  apiToken: {}
};
/* harmony default export */ const components_FormApiTokenContainer = (FormApiTokenContainer);

// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenBox/index.js
var TokenBox = __webpack_require__(24122);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/FormHead/index.js + 1 modules
var FormHead = __webpack_require__(76539);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/constants.js
var constants = __webpack_require__(47670);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/index.js



















const MSG_ERROR_NAME_TAKEN = "Name already taken";
const ApiTokenCreateView = () => {
  (0,helper_plugin.useFocusWhenNavigate)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { lockApp, unlockApp } = (0,helper_plugin.useOverlayBlocker)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const history = (0,react_router_dom_min.useHistory)();
  const [apiToken, setApiToken] = (0,react.useState)(
    history.location.state?.apiToken.accessKey ? {
      ...history.location.state.apiToken
    } : null
  );
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const { setCurrentStep } = (0,helper_plugin.useGuidedTour)();
  const {
    allowedActions: { canCreate, canUpdate, canRegenerate }
  } = (0,helper_plugin.useRBAC)(permissions/* default.settings.api-tokens */.Z.settings["api-tokens"]);
  const [state, dispatch] = (0,react.useReducer)(EditView_reducer, initialState, (state2) => EditView_init(state2, {}));
  const {
    params: { id }
  } = (0,react_router_dom_min.useRouteMatch)("/settings/api-tokens/:id");
  const { get, post, put } = (0,helper_plugin.useFetchClient)();
  const isCreating = id === "create";
  (0,lib.useQuery)(
    "content-api-permissions",
    async () => {
      const [permissions, routes] = await Promise.all(
        ["/admin/content-api/permissions", "/admin/content-api/routes"].map(async (url) => {
          const { data } = await get(url);
          return data.data;
        })
      );
      dispatch({
        type: "UPDATE_PERMISSIONS_LAYOUT",
        value: permissions
      });
      dispatch({
        type: "UPDATE_ROUTES",
        value: routes
      });
      if (apiToken) {
        if (apiToken?.type === "read-only") {
          dispatch({
            type: "ON_CHANGE_READ_ONLY"
          });
        }
        if (apiToken?.type === "full-access") {
          dispatch({
            type: "SELECT_ALL_ACTIONS"
          });
        }
        if (apiToken?.type === "custom") {
          dispatch({
            type: "UPDATE_PERMISSIONS",
            value: apiToken?.permissions
          });
        }
      }
    },
    {
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  (0,react.useEffect)(() => {
    trackUsageRef.current(isCreating ? "didAddTokenFromList" : "didEditTokenFromList", {
      tokenType: constants/* API_TOKEN_TYPE */.Z
    });
  }, [isCreating]);
  const { status } = (0,lib.useQuery)(
    ["api-token", id],
    async () => {
      const {
        data: { data }
      } = await get(`/admin/api-tokens/${id}`);
      setApiToken({
        ...data
      });
      if (data?.type === "read-only") {
        dispatch({
          type: "ON_CHANGE_READ_ONLY"
        });
      }
      if (data?.type === "full-access") {
        dispatch({
          type: "SELECT_ALL_ACTIONS"
        });
      }
      if (data?.type === "custom") {
        dispatch({
          type: "UPDATE_PERMISSIONS",
          value: data?.permissions
        });
      }
      return data;
    },
    {
      enabled: !isCreating && !apiToken,
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  const handleSubmit = async (body, actions) => {
    trackUsageRef.current(isCreating ? "willCreateToken" : "willEditToken", {
      tokenType: constants/* API_TOKEN_TYPE */.Z
    });
    lockApp();
    const lifespanVal = body.lifespan && parseInt(body.lifespan, 10) && body.lifespan !== "0" ? parseInt(body.lifespan, 10) : null;
    try {
      const {
        data: { data: response }
      } = isCreating ? await post(`/admin/api-tokens`, {
        ...body,
        lifespan: lifespanVal,
        permissions: body.type === "custom" ? state.selectedActions : null
      }) : await put(`/admin/api-tokens/${id}`, {
        name: body.name,
        description: body.description,
        type: body.type,
        permissions: body.type === "custom" ? state.selectedActions : null
      });
      if (isCreating) {
        history.replace(`/settings/api-tokens/${response.id}`, { apiToken: response });
        setCurrentStep("apiTokens.success");
      }
      unlockApp();
      setApiToken({
        ...response
      });
      toggleNotification({
        type: "success",
        message: isCreating ? formatMessage({
          id: "notification.success.apitokencreated",
          defaultMessage: "API Token successfully created"
        }) : formatMessage({
          id: "notification.success.apitokenedited",
          defaultMessage: "API Token successfully edited"
        })
      });
      trackUsageRef.current(isCreating ? "didCreateToken" : "didEditToken", {
        type: apiToken.type,
        tokenType: constants/* API_TOKEN_TYPE */.Z
      });
    } catch (err) {
      const errors = (0,utils/* formatAPIErrors */.Iz)(err.response.data);
      actions.setErrors(errors);
      if (err?.response?.data?.error?.message === MSG_ERROR_NAME_TAKEN) {
        toggleNotification({
          type: "warning",
          message: err.response.data.message || "notification.error.tokennamenotunique"
        });
      } else {
        toggleNotification({
          type: "warning",
          message: err?.response?.data?.message || "notification.error"
        });
      }
      unlockApp();
    }
  };
  const [hasChangedPermissions, setHasChangedPermissions] = (0,react.useState)(false);
  const handleChangeCheckbox = ({ target: { value } }) => {
    setHasChangedPermissions(true);
    dispatch({
      type: "ON_CHANGE",
      value
    });
  };
  const handleChangeSelectAllCheckbox = ({ target: { value } }) => {
    setHasChangedPermissions(true);
    dispatch({
      type: "SELECT_ALL_IN_PERMISSION",
      value
    });
  };
  const setSelectedAction = ({ target: { value } }) => {
    dispatch({
      type: "SET_SELECTED_ACTION",
      value
    });
  };
  const providerValue = {
    ...state,
    onChange: handleChangeCheckbox,
    onChangeSelectAll: handleChangeSelectAllCheckbox,
    setSelectedAction
  };
  const canEditInputs = canUpdate && !isCreating || canCreate && isCreating;
  const isLoading = !isCreating && !apiToken && status !== "success";
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(components_LoadingView, { apiTokenName: apiToken?.name });
  }
  return /* @__PURE__ */ react.createElement(ApiTokenPermissionsContextProvider, { value: providerValue }, /* @__PURE__ */ react.createElement(dist.Main, null, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: "API Tokens" }), /* @__PURE__ */ react.createElement(
    formik_dist.Formik,
    {
      validationSchema: EditView_utils/* schema */.fK,
      validateOnChange: false,
      initialValues: {
        name: apiToken?.name || "",
        description: apiToken?.description || "",
        type: apiToken?.type,
        lifespan: apiToken?.lifespan ? apiToken.lifespan.toString() : apiToken?.lifespan
      },
      enableReinitialize: true,
      onSubmit: (body, actions) => handleSubmit(body, actions)
    },
    ({ errors, handleChange, isSubmitting, values, setFieldValue }) => {
      if (hasChangedPermissions && values?.type !== "custom") {
        setFieldValue("type", "custom");
      }
      return /* @__PURE__ */ react.createElement(helper_plugin.Form, null, /* @__PURE__ */ react.createElement(
        FormHead/* default */.Z,
        {
          backUrl: "/settings/api-tokens",
          title: {
            id: "Settings.apiTokens.createPage.title",
            defaultMessage: "Create API Token"
          },
          token: apiToken,
          setToken: setApiToken,
          canEditInputs,
          canRegenerate,
          isSubmitting,
          regenerateUrl: "/admin/api-tokens/"
        }
      ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 6 }, Boolean(apiToken?.name) && /* @__PURE__ */ react.createElement(TokenBox/* default */.Z, { token: apiToken?.accessKey, tokenType: constants/* API_TOKEN_TYPE */.Z }), /* @__PURE__ */ react.createElement(
        components_FormApiTokenContainer,
        {
          errors,
          onChange: handleChange,
          canEditInputs,
          isCreating,
          values,
          apiToken,
          onDispatch: dispatch,
          setHasChangedPermissions
        }
      ), /* @__PURE__ */ react.createElement(
        components_Permissions,
        {
          disabled: !canEditInputs || values?.type === "read-only" || values?.type === "full-access"
        }
      ))));
    }
  )));
};
/* harmony default export */ const EditView = (ApiTokenCreateView);


/***/ }),

/***/ 75056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "IX": () => (/* reexport */ utils_getDateOfExpiration),
  "fK": () => (/* reexport */ utils_schema),
  "mk": () => (/* reexport */ utils_transformPermissionsData)
});

// EXTERNAL MODULE: ./node_modules/date-fns/index.js
var date_fns = __webpack_require__(47292);
// EXTERNAL MODULE: ./node_modules/date-fns/locale/index.js
var locale = __webpack_require__(73825);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/getDateOfExpiration.js


const getDateOfExpiration = (createdAt, duration, language = "en") => {
  if (duration && typeof duration === "number") {
    const durationInDays = duration / 24 / 60 / 60 / 1e3;
    return (0,date_fns.format)((0,date_fns.addDays)(new Date(createdAt), durationInDays), "PPP", {
      locale: locale[language]
    });
  }
  return "Unlimited";
};
/* harmony default export */ const utils_getDateOfExpiration = (getDateOfExpiration);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/schema.js


const schema = lib/* object */.Ry().shape({
  name: lib/* string */.Z_(helper_plugin.translatedErrors.string).required(helper_plugin.translatedErrors.required),
  type: lib/* string */.Z_(helper_plugin.translatedErrors.string).oneOf(["read-only", "full-access", "custom"]).required(helper_plugin.translatedErrors.required),
  description: lib/* string */.Z_().nullable(),
  lifespan: lib/* number */.Rx().integer().min(0).nullable().defined(helper_plugin.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/transformPermissionsData.js

const transformPermissionsData = (data) => {
  const layout = {
    allActionsIds: [],
    permissions: []
  };
  layout.permissions = Object.keys(data).map((apiId) => ({
    apiId,
    label: apiId.split("::")[1],
    controllers: (0,lodash.flatten)(
      Object.keys(data[apiId].controllers).map((controller) => ({
        controller,
        actions: (0,lodash.flatten)(
          data[apiId].controllers[controller].map((action) => {
            const actionId = `${apiId}.${controller}.${action}`;
            if (apiId.includes("api::")) {
              layout.allActionsIds.push(actionId);
            }
            return {
              action,
              actionId
            };
          })
        )
      }))
    )
  }));
  return layout;
};
/* harmony default export */ const utils_transformPermissionsData = (transformPermissionsData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/ApiTokens/EditView/utils/index.js






/***/ }),

/***/ 13217:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(14259);

/**
 * Gets all but the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.tail([1, 2, 3]);
 * // => [2, 3]
 */
function tail(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 1, length) : [];
}

module.exports = tail;


/***/ })

}]);