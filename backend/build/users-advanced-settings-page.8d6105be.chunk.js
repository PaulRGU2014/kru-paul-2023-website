"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[9460],{

/***/ 98352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdvancedSettings)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var design_system_dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/permissions.js
var permissions = __webpack_require__(81912);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 2 modules
var utils = __webpack_require__(89031);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/layout.js

const layout = [
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.email"),
      defaultMessage: "One account per email address"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.email"),
      defaultMessage: "Disallow the user to create multiple accounts using the same email address with different authentication providers."
    },
    name: "unique_email",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.sign-up"),
      defaultMessage: "Enable sign-ups"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.sign-up"),
      defaultMessage: "When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."
    },
    name: "allow_register",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.email-reset-password"),
      defaultMessage: "Reset password page"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.email-reset-password"),
      defaultMessage: "URL of your application's reset password page."
    },
    placeholder: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.placeholder.email-reset-password"),
      defaultMessage: "ex: https://youtfrontend.com/reset-password"
    },
    name: "email_reset_password",
    type: "text",
    size: {
      col: 6,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.email-confirmation"),
      defaultMessage: "Enable email confirmation"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.email-confirmation"),
      defaultMessage: "When enabled (ON), new registered users receive a confirmation email."
    },
    name: "email_confirmation",
    type: "bool",
    size: {
      col: 12,
      xs: 12
    }
  },
  {
    intlLabel: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),
      defaultMessage: "Redirection url"
    },
    description: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),
      defaultMessage: "After you confirmed your email, choose where you will be redirected."
    },
    placeholder: {
      id: (0,utils/* getTrad */.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),
      defaultMessage: "ex: https://youtfrontend.com/email-confirmation"
    },
    name: "email_confirmation_redirection",
    type: "text",
    size: {
      col: 6,
      xs: 12
    }
  }
];
/* harmony default export */ const utils_layout = (layout);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/schema.js


const URL_REGEX = new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))");
const schema = yup_lib/* object */.Ry().shape({
  email_confirmation_redirection: yup_lib/* mixed */.nK().when("email_confirmation", {
    is: true,
    then: yup_lib/* string */.Z_().matches(URL_REGEX).required(),
    otherwise: yup_lib/* string */.Z_().nullable()
  }),
  email_reset_password: yup_lib/* string */.Z_(helper_plugin.translatedErrors.string).matches(URL_REGEX, helper_plugin.translatedErrors.regex).nullable()
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/utils/api.js


const fetchData = async () => {
  const { get } = (0,helper_plugin.getFetchClient)();
  const { data } = await get((0,utils/* getRequestURL */.Gc)("advanced"));
  return data;
};
const putAdvancedSettings = (body) => {
  const { put } = (0,helper_plugin.getFetchClient)();
  return put((0,utils/* getRequestURL */.Gc)("advanced"), body);
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/AdvancedSettings/index.js












const ProtectedAdvancedSettingsPage = () => /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.readAdvancedSettings */.Z.readAdvancedSettings }, /* @__PURE__ */ react.createElement(AdvancedSettingsPage, null));
const AdvancedSettingsPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { lockApp, unlockApp } = (0,helper_plugin.useOverlayBlocker)();
  const { notifyStatus } = (0,design_system_dist.useNotifyAT)();
  const queryClient = (0,lib.useQueryClient)();
  (0,helper_plugin.useFocusWhenNavigate)();
  const updatePermissions = (0,react.useMemo)(
    () => ({ update: permissions/* default.updateAdvancedSettings */.Z.updateAdvancedSettings }),
    []
  );
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,helper_plugin.useRBAC)(updatePermissions);
  const { status: isLoadingData, data } = (0,lib.useQuery)("advanced", () => fetchData(), {
    onSuccess() {
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.OB)("Form.advancedSettings.data.loaded"),
          defaultMessage: "Advanced settings data has been loaded"
        })
      );
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: (0,utils/* getTrad */.OB)("notification.error"), defaultMessage: "An error occured" }
      });
    }
  });
  const isLoading = isLoadingForPermissions || isLoadingData !== "success";
  const submitMutation = (0,lib.useMutation)((body) => putAdvancedSettings(body), {
    async onSuccess() {
      await queryClient.invalidateQueries("advanced");
      toggleNotification({
        type: "success",
        message: { id: (0,utils/* getTrad */.OB)("notification.success.saved"), defaultMessage: "Saved" }
      });
      unlockApp();
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: (0,utils/* getTrad */.OB)("notification.error"), defaultMessage: "An error occured" }
      });
      unlockApp();
    },
    refetchActive: true
  });
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleSubmit = async (body) => {
    lockApp();
    const urlConfirmation = body.email_confirmation ? body.email_confirmation_redirection : "";
    await submitMutation.mutateAsync({ ...body, email_confirmation_redirection: urlConfirmation });
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(design_system_dist.Main, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(
      helper_plugin.SettingsPageTitle,
      {
        name: formatMessage({
          id: (0,utils/* getTrad */.OB)("HeaderNav.link.advancedSettings"),
          defaultMessage: "Advanced Settings"
        })
      }
    ), /* @__PURE__ */ react.createElement(
      design_system_dist.HeaderLayout,
      {
        title: formatMessage({
          id: (0,utils/* getTrad */.OB)("HeaderNav.link.advancedSettings"),
          defaultMessage: "Advanced Settings"
        })
      }
    ), /* @__PURE__ */ react.createElement(design_system_dist.ContentLayout, null, /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null)));
  }
  return /* @__PURE__ */ react.createElement(design_system_dist.Main, { "aria-busy": isSubmittingForm }, /* @__PURE__ */ react.createElement(
    helper_plugin.SettingsPageTitle,
    {
      name: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.advancedSettings"),
        defaultMessage: "Advanced Settings"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    dist.Formik,
    {
      onSubmit: handleSubmit,
      initialValues: data.settings,
      validateOnChange: false,
      validationSchema: utils_schema,
      enableReinitialize: true
    },
    ({ errors, values, handleChange, isSubmitting }) => {
      return /* @__PURE__ */ react.createElement(helper_plugin.Form, null, /* @__PURE__ */ react.createElement(
        design_system_dist.HeaderLayout,
        {
          title: formatMessage({
            id: (0,utils/* getTrad */.OB)("HeaderNav.link.advancedSettings"),
            defaultMessage: "Advanced Settings"
          }),
          primaryAction: /* @__PURE__ */ react.createElement(
            design_system_dist.Button,
            {
              loading: isSubmitting,
              type: "submit",
              disabled: !canUpdate,
              startIcon: /* @__PURE__ */ react.createElement(icons_dist.Check, null),
              size: "S"
            },
            formatMessage({ id: "global.save", defaultMessage: "Save" })
          )
        }
      ), /* @__PURE__ */ react.createElement(design_system_dist.ContentLayout, null, /* @__PURE__ */ react.createElement(
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
          id: "global.settings",
          defaultMessage: "Settings"
        })), /* @__PURE__ */ react.createElement(design_system_dist.Grid, { gap: 6 }, /* @__PURE__ */ react.createElement(design_system_dist.GridItem, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          design_system_dist.Select,
          {
            label: formatMessage({
              id: (0,utils/* getTrad */.OB)("EditForm.inputSelect.label.role"),
              defaultMessage: "Default role for authenticated users"
            }),
            value: values.default_role,
            hint: formatMessage({
              id: (0,utils/* getTrad */.OB)("EditForm.inputSelect.description.role"),
              defaultMessage: "It will attach the new authenticated user to the selected role."
            }),
            onChange: (e) => handleChange({ target: { name: "default_role", value: e } })
          },
          data.roles.map((role) => {
            return /* @__PURE__ */ react.createElement(design_system_dist.Option, { key: role.type, value: role.type }, role.name);
          })
        )), utils_layout.map((input) => {
          let value = values[input.name];
          if (!value) {
            value = input.type === "bool" ? false : "";
          }
          return /* @__PURE__ */ react.createElement(design_system_dist.GridItem, { key: input.name, ...input.size }, /* @__PURE__ */ react.createElement(
            helper_plugin.GenericInput,
            {
              ...input,
              value,
              error: errors[input.name],
              disabled: input.name === "email_confirmation_redirection" && values.email_confirmation === false,
              onChange: handleChange
            }
          ));
        })))
      )));
    }
  ));
};
/* harmony default export */ const AdvancedSettings = (ProtectedAdvancedSettingsPage);


/***/ }),

/***/ 89031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "YX": () => (/* reexport */ utils_cleanPermissions),
  "Gc": () => (/* reexport */ utils_getRequestURL),
  "OB": () => (/* reexport */ getTrad/* default */.Z)
});

// UNUSED EXPORTS: formatPolicies

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/cleanPermissions.js

const cleanPermissions = (permissions) => Object.keys(permissions).reduce((acc, current) => {
  const currentPermission = permissions[current].controllers;
  const cleanedControllers = Object.keys(currentPermission).reduce((acc2, curr) => {
    if ((0,lodash.isEmpty)(currentPermission[curr])) {
      return acc2;
    }
    acc2[curr] = currentPermission[curr];
    return acc2;
  }, {});
  if ((0,lodash.isEmpty)(cleanedControllers)) {
    return acc;
  }
  acc[current] = { controllers: cleanedControllers };
  return acc;
}, {});
/* harmony default export */ const utils_cleanPermissions = (cleanPermissions);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pluginId.js
var pluginId = __webpack_require__(31498);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getRequestURL.js

const getRequestURL = (endPoint) => `/${pluginId/* default */.Z}/${endPoint}`;
/* harmony default export */ const utils_getRequestURL = (getRequestURL);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(84757);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js






/***/ })

}]);