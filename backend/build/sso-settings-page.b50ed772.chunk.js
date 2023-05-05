"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[302],{

/***/ 40316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SingleSignOn": () => (/* binding */ SingleSignOn),
  "default": () => (/* binding */ pages_SingleSignOn)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var design_system_dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(38683);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/SingleSignOn/utils/schema.js


const schema = lib/* object */.Ry().shape({
  autoRegister: lib/* bool */.Xg().required(helper_plugin.translatedErrors.required),
  defaultRole: lib/* mixed */.nK().when("autoRegister", (value, initSchema) => {
    return value ? initSchema.required(helper_plugin.translatedErrors.required) : initSchema.nullable();
  })
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/SingleSignOn/index.js










const ssoPermissions = {
  ...permissions/* default.settings.sso */.Z.settings.sso,
  readRoles: permissions/* default.settings.roles.read */.Z.settings.roles.read
};
const SingleSignOn = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate, canReadRoles }
  } = (0,helper_plugin.useRBAC)(ssoPermissions);
  const [
    { formErrors, initialData, isLoading, modifiedData, showHeaderButtonLoader },
    // eslint-disable-next-line no-unused-vars
    dispatch,
    { handleChange, handleSubmit }
  ] = (0,hooks/* useSettingsForm */.G4)((0,utils/* getRequestUrl */.IF)("providers/options"), utils_schema, () => {
  }, [
    "autoRegister",
    "defaultRole"
  ]);
  const { roles } = (0,hooks/* useRolesList */.bF)(canReadRoles);
  (0,helper_plugin.useFocusWhenNavigate)();
  const showLoader = isLoadingForPermissions || isLoading;
  (0,react.useEffect)(() => {
    if (formErrors.defaultRole) {
      const selector = `[name="defaultRole"]`;
      document.querySelector(selector).focus();
    }
  }, [formErrors]);
  const isHeaderButtonDisabled = isEqual_default()(initialData, modifiedData);
  return /* @__PURE__ */ react.createElement(design_system_dist.Layout, null, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: "SSO" }), /* @__PURE__ */ react.createElement(design_system_dist.Main, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(
    "form",
    {
      onSubmit: (e) => {
        if (isHeaderButtonDisabled) {
          e.preventDefault();
          return;
        }
        handleSubmit(e);
      }
    },
    /* @__PURE__ */ react.createElement(
      design_system_dist.HeaderLayout,
      {
        primaryAction: /* @__PURE__ */ react.createElement(
          design_system_dist.Button,
          {
            "data-testid": "save-button",
            disabled: isHeaderButtonDisabled,
            loading: showHeaderButtonLoader,
            startIcon: /* @__PURE__ */ react.createElement(dist.Check, null),
            type: "submit",
            size: "L"
          },
          formatMessage({
            id: "global.save",
            defaultMessage: "Save"
          })
        ),
        title: formatMessage({ id: "Settings.sso.title", defaultMessage: "Single Sign-On" }),
        subtitle: formatMessage({
          id: "Settings.sso.description",
          defaultMessage: "Configure the settings for the Single Sign-On feature."
        })
      }
    ),
    /* @__PURE__ */ react.createElement(design_system_dist.ContentLayout, null, showLoader ? /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null) : /* @__PURE__ */ react.createElement(design_system_dist.Stack, { spacing: 4, background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "delta", as: "h2" }, formatMessage({
      id: "global.settings",
      defaultMessage: "Settings"
    })), /* @__PURE__ */ react.createElement(design_system_dist.Grid, { gap: 4 }, /* @__PURE__ */ react.createElement(design_system_dist.GridItem, { col: 6, m: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      design_system_dist.ToggleInput,
      {
        "aria-label": "autoRegister",
        "data-testid": "autoRegister",
        disabled: !canUpdate,
        checked: modifiedData.autoRegister,
        hint: formatMessage({
          id: "Settings.sso.form.registration.description",
          defaultMessage: "Create new user on SSO login if no account exists"
        }),
        label: formatMessage({
          id: "Settings.sso.form.registration.label",
          defaultMessage: "Auto-registration"
        }),
        name: "autoRegister",
        offLabel: formatMessage({
          id: "app.components.ToggleCheckbox.off-label",
          defaultMessage: "Off"
        }),
        onLabel: formatMessage({
          id: "app.components.ToggleCheckbox.on-label",
          defaultMessage: "On"
        }),
        onChange: (e) => {
          handleChange({
            target: { name: "autoRegister", value: e.target.checked }
          });
        }
      }
    )), /* @__PURE__ */ react.createElement(design_system_dist.GridItem, { col: 6, m: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      design_system_dist.Select,
      {
        disabled: !canUpdate,
        hint: formatMessage({
          id: "Settings.sso.form.defaultRole.description",
          defaultMessage: "It will attach the new authenticated user to the selected role"
        }),
        error: formErrors.defaultRole ? formatMessage({
          id: formErrors.defaultRole.id,
          defaultMessage: formErrors.defaultRole.id
        }) : "",
        label: formatMessage({
          id: "Settings.sso.form.defaultRole.label",
          defaultMessage: "Default role"
        }),
        name: "defaultRole",
        onChange: (value) => {
          handleChange({ target: { name: "defaultRole", value } });
        },
        placeholder: formatMessage({
          id: "components.InputSelect.option.placeholder",
          defaultMessage: "Choose here"
        }),
        value: modifiedData.defaultRole
      },
      roles.map(({ id, name }) => /* @__PURE__ */ react.createElement(design_system_dist.Option, { key: id, value: id.toString() }, name))
    )))))
  )));
};
const ProtectedSSO = () => /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: ssoPermissions.main }, /* @__PURE__ */ react.createElement(SingleSignOn, null));
/* harmony default export */ const pages_SingleSignOn = (ProtectedSSO);


/***/ })

}]);