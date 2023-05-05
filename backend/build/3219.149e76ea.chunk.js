"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[3219],{

/***/ 76539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ API_TOKEN_TYPE),
/* harmony export */   "f": () => (/* binding */ TRANSFER_TOKEN_TYPE)
/* harmony export */ });
const API_TOKEN_TYPE = "api-token";
const TRANSFER_TOKEN_TYPE = "transfer-token";


/***/ }),

/***/ 75056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 53219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EditView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var design_system_dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(38683);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/utils/schema.js


const schema = yup_lib/* object */.Ry().shape({
  name: yup_lib/* string */.Z_(helper_plugin.translatedErrors.string).required(helper_plugin.translatedErrors.required),
  description: yup_lib/* string */.Z_().nullable(),
  lifespan: yup_lib/* number */.Rx().integer().min(0).nullable().defined(helper_plugin.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/utils/index.js




// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/components/LoadingView/index.js






const LoadingView = ({ transferTokenName }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,helper_plugin.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(design_system_dist.Main, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: "Transfer Tokens" }), /* @__PURE__ */ react.createElement(
    design_system_dist.HeaderLayout,
    {
      primaryAction: /* @__PURE__ */ react.createElement(design_system_dist.Button, { disabled: true, startIcon: /* @__PURE__ */ react.createElement(icons_dist.Check, null), type: "button", size: "L" }, formatMessage({ id: "global.save", defaultMessage: "Save" })),
      title: transferTokenName || formatMessage({
        id: "Settings.transferTokens.createPage.title",
        defaultMessage: "Create Transfer Token"
      })
    }
  ), /* @__PURE__ */ react.createElement(design_system_dist.ContentLayout, null, /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null)));
};
LoadingView.defaultProps = {
  transferTokenName: null
};
LoadingView.propTypes = {
  transferTokenName: (prop_types_default()).string
};
/* harmony default export */ const components_LoadingView = (LoadingView);

// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/LifeSpanInput/index.js
var LifeSpanInput = __webpack_require__(60401);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenName/index.js
var TokenName = __webpack_require__(61053);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenDescription/index.js
var TokenDescription = __webpack_require__(40695);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/components/FormTransferTokenContainer/index.js







const FormTransferTokenContainer = ({
  errors,
  onChange,
  canEditInputs,
  isCreating,
  values,
  transferToken
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    design_system_dist.Box,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    },
    /* @__PURE__ */ react.createElement(design_system_dist.Stack, { spacing: 4 }, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "delta", as: "h2" }, formatMessage({
      id: "global.details",
      defaultMessage: "Details"
    })), /* @__PURE__ */ react.createElement(design_system_dist.Grid, { gap: 5 }, /* @__PURE__ */ react.createElement(design_system_dist.GridItem, { key: "name", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      TokenName/* default */.Z,
      {
        errors,
        values,
        canEditInputs,
        onChange
      }
    )), /* @__PURE__ */ react.createElement(design_system_dist.GridItem, { key: "description", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      TokenDescription/* default */.Z,
      {
        errors,
        values,
        canEditInputs,
        onChange
      }
    )), /* @__PURE__ */ react.createElement(design_system_dist.GridItem, { key: "lifespan", col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
      LifeSpanInput/* default */.Z,
      {
        isCreating,
        errors,
        values,
        onChange,
        token: transferToken
      }
    ))))
  );
};
FormTransferTokenContainer.propTypes = {
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
  transferToken: prop_types_default().shape({
    id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
    type: (prop_types_default()).string,
    lifespan: (prop_types_default()).string,
    name: (prop_types_default()).string,
    accessKey: (prop_types_default()).string,
    permissions: (prop_types_default()).array,
    description: (prop_types_default()).string,
    createdAt: (prop_types_default()).string
  })
};
FormTransferTokenContainer.defaultProps = {
  errors: {},
  transferToken: {}
};
/* harmony default export */ const components_FormTransferTokenContainer = (FormTransferTokenContainer);

// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/TokenBox/index.js
var TokenBox = __webpack_require__(24122);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/FormHead/index.js + 1 modules
var FormHead = __webpack_require__(76539);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/constants.js
var constants = __webpack_require__(47670);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/EditView/index.js















const MSG_ERROR_NAME_TAKEN = "Name already taken";
const TransferTokenCreateView = () => {
  (0,helper_plugin.useFocusWhenNavigate)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { lockApp, unlockApp } = (0,helper_plugin.useOverlayBlocker)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const history = (0,react_router_dom_min.useHistory)();
  const [transferToken, setTransferToken] = (0,react.useState)(
    history.location.state?.transferToken.accessKey ? {
      ...history.location.state.transferToken
    } : null
  );
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const { setCurrentStep } = (0,helper_plugin.useGuidedTour)();
  const {
    allowedActions: { canCreate, canUpdate, canRegenerate }
  } = (0,helper_plugin.useRBAC)(permissions/* default.settings.transfer-tokens */.Z.settings["transfer-tokens"]);
  const {
    params: { id }
  } = (0,react_router_dom_min.useRouteMatch)("/settings/transfer-tokens/:id");
  const { get, post, put } = (0,helper_plugin.useFetchClient)();
  const isCreating = id === "create";
  (0,react.useEffect)(() => {
    trackUsageRef.current(isCreating ? "didAddTokenFromList" : "didEditTokenFromList", {
      tokenType: constants/* TRANSFER_TOKEN_TYPE */.f
    });
  }, [isCreating]);
  const { status } = (0,lib.useQuery)(
    ["transfer-token", id],
    async () => {
      const {
        data: { data }
      } = await get(`/admin/transfer/tokens/${id}`);
      setTransferToken({
        ...data
      });
      return data;
    },
    {
      enabled: !isCreating && !transferToken,
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
      tokenType: constants/* TRANSFER_TOKEN_TYPE */.f
    });
    lockApp();
    const lifespanVal = body.lifespan && parseInt(body.lifespan, 10) && body.lifespan !== "0" ? parseInt(body.lifespan, 10) : null;
    try {
      const {
        data: { data: response }
      } = isCreating ? await post(`/admin/transfer/tokens`, {
        ...body,
        lifespan: lifespanVal,
        permissions: ["push"]
      }) : await put(`/admin/transfer/tokens/${id}`, {
        name: body.name,
        description: body.description,
        type: body.type,
        permissions: ["push"]
      });
      unlockApp();
      if (isCreating) {
        history.replace(`/settings/transfer-tokens/${response.id}`, { transferToken: response });
        setCurrentStep("transferTokens.success");
      }
      setTransferToken({
        ...response
      });
      toggleNotification({
        type: "success",
        message: isCreating ? formatMessage({
          id: "notification.success.transfertokencreated",
          defaultMessage: "Transfer Token successfully created"
        }) : formatMessage({
          id: "notification.success.transfertokenedited",
          defaultMessage: "Transfer Token successfully edited"
        })
      });
      trackUsageRef.current(isCreating ? "didCreateToken" : "didEditToken", {
        type: transferToken?.type,
        tokenType: constants/* TRANSFER_TOKEN_TYPE */.f
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
  const canEditInputs = canUpdate && !isCreating || canCreate && isCreating;
  const isLoading = !isCreating && !transferToken && status !== "success";
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(components_LoadingView, { transferTokenName: transferToken?.name });
  }
  return /* @__PURE__ */ react.createElement(design_system_dist.Main, null, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: "Transfer Tokens" }), /* @__PURE__ */ react.createElement(
    dist.Formik,
    {
      validationSchema: utils_schema,
      validateOnChange: false,
      initialValues: {
        name: transferToken?.name || "",
        description: transferToken?.description || "",
        lifespan: transferToken?.lifespan ? transferToken.lifespan.toString() : transferToken?.lifespan
      },
      enableReinitialize: true,
      onSubmit: (body, actions) => handleSubmit(body, actions)
    },
    ({ errors, handleChange, isSubmitting, values }) => {
      return /* @__PURE__ */ react.createElement(helper_plugin.Form, null, /* @__PURE__ */ react.createElement(
        FormHead/* default */.Z,
        {
          backUrl: "/settings/transfer-tokens",
          title: {
            id: "Settings.transferTokens.createPage.title",
            defaultMessage: "Create Transfer Token"
          },
          token: transferToken,
          setToken: setTransferToken,
          canEditInputs,
          canRegenerate,
          isSubmitting,
          regenerateUrl: "/admin/transfer/tokens/"
        }
      ), /* @__PURE__ */ react.createElement(design_system_dist.ContentLayout, null, /* @__PURE__ */ react.createElement(design_system_dist.Stack, { spacing: 6 }, Boolean(transferToken?.name) && /* @__PURE__ */ react.createElement(TokenBox/* default */.Z, { token: transferToken?.accessKey, tokenType: constants/* TRANSFER_TOKEN_TYPE */.f }), /* @__PURE__ */ react.createElement(
        components_FormTransferTokenContainer,
        {
          errors,
          onChange: handleChange,
          canEditInputs,
          isCreating,
          values,
          transferToken
        }
      ))));
    }
  ));
};
/* harmony default export */ const EditView = (TransferTokenCreateView);


/***/ })

}]);