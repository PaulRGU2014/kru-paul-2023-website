"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[1495],{

/***/ 30077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Settings)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-email/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(47560);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/components/Configuration.js






const DocumentationLink = styled_components_browser_esm["default"].a`
  color: ${({ theme }) => theme.colors.primary600};
`;
const Configuration = ({ config }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 4 }, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 1 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h2" }, formatMessage({
    id: (0,getTrad/* default */.Z)("Settings.email.plugin.title.config"),
    defaultMessage: "Configuration"
  })), /* @__PURE__ */ react.createElement(dist.Typography, null, formatMessage(
    {
      id: (0,getTrad/* default */.Z)("Settings.email.plugin.text.configuration"),
      defaultMessage: "The plugin is configured through the {file} file, checkout this {link} for the documentation."
    },
    {
      file: "./config/plugins.js",
      link: /* @__PURE__ */ react.createElement(
        DocumentationLink,
        {
          href: "https://docs.strapi.io/developer-docs/latest/plugins/email.html",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        formatMessage({
          id: (0,getTrad/* default */.Z)("link"),
          defaultMessage: "Link"
        })
      )
    }
  ))), /* @__PURE__ */ react.createElement(dist.Grid, { gap: 5 }, /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    dist.TextInput,
    {
      name: "shipper-email",
      label: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.label.defaultFrom"),
        defaultMessage: "Default sender email"
      }),
      placeholder: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.placeholder.defaultFrom"),
        defaultMessage: "ex: Strapi No-Reply '<'no-reply@strapi.io'>'"
      }),
      disabled: true,
      onChange: () => {
      },
      value: config.settings.defaultFrom
    }
  )), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    dist.TextInput,
    {
      name: "response-email",
      label: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.label.defaultReplyTo"),
        defaultMessage: "Default response email"
      }),
      placeholder: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.placeholder.defaultReplyTo"),
        defaultMessage: `ex: Strapi '<'example@strapi.io'>'`
      }),
      disabled: true,
      onChange: () => {
      },
      value: config.settings.defaultReplyTo
    }
  )), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    dist.Select,
    {
      name: "email-provider",
      label: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.label.provider"),
        defaultMessage: "Email provider"
      }),
      disabled: true,
      onChange: () => {
      },
      value: config.provider
    },
    /* @__PURE__ */ react.createElement(dist.Option, { value: config.provider }, config.provider)
  ))));
};
Configuration.propTypes = {
  config: prop_types_default().shape({
    provider: (prop_types_default()).string,
    settings: prop_types_default().shape({
      defaultFrom: (prop_types_default()).string,
      defaultReplyTo: (prop_types_default()).string
    })
  }).isRequired
};
/* harmony default export */ const components_Configuration = (Configuration);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/utils/schema.js


const schema = lib/* object */.Ry().shape({
  email: lib/* string */.Z_().email(helper_plugin.translatedErrors.email).required(helper_plugin.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-email/admin/src/permissions.js
var permissions = __webpack_require__(61321);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/utils/api.js

const fetchEmailSettings = async () => {
  const { get } = (0,helper_plugin.getFetchClient)();
  const { data } = await get("/email/settings");
  return data.config;
};
const postEmailTest = async (body) => {
  const { post } = (0,helper_plugin.getFetchClient)();
  await post("/email/test", body);
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/components/EmailHeader.js





const EmailHeader = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    helper_plugin.SettingsPageTitle,
    {
      name: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.title"),
        defaultMessage: "Configuration"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      id: "title",
      title: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.title"),
        defaultMessage: "Configuration"
      }),
      subtitle: formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.subTitle"),
        defaultMessage: "Test the settings for the Email plugin"
      })
    }
  ));
};
/* harmony default export */ const components_EmailHeader = (EmailHeader);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/index.js











const ProtectedSettingsPage = () => /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.settings */.Z.settings }, /* @__PURE__ */ react.createElement(SettingsPage, null));
const SettingsPage = () => {
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { lockApp, unlockApp } = (0,helper_plugin.useOverlayBlocker)();
  const { notifyStatus } = (0,dist.useNotifyAT)();
  (0,helper_plugin.useFocusWhenNavigate)();
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const [testAddress, setTestAddress] = (0,react.useState)("");
  const [isTestAddressValid, setIsTestAddressValid] = (0,react.useState)(false);
  const [config, setConfig] = (0,react.useState)({
    provider: "",
    settings: { defaultFrom: "", defaultReplyTo: "", testAddress: "" }
  });
  (0,react.useEffect)(() => {
    setIsLoading(true);
    fetchEmailSettings().then((config2) => {
      notifyStatus(
        formatMessage({
          id: (0,getTrad/* default */.Z)("Settings.email.plugin.notification.data.loaded"),
          defaultMessage: "Email settings data has been loaded"
        })
      );
      setConfig(config2);
      const testAddressFound = config2?.settings?.testAddress;
      if (testAddressFound) {
        setTestAddress(testAddressFound);
      }
    }).catch(
      () => toggleNotification({
        type: "warning",
        message: formatMessage({
          id: (0,getTrad/* default */.Z)("Settings.email.plugin.notification.config.error"),
          defaultMessage: "Failed to retrieve the email config"
        })
      })
    ).finally(() => setIsLoading(false));
  }, [formatMessage, toggleNotification, notifyStatus]);
  (0,react.useEffect)(() => {
    if (formErrors.email) {
      const input = document.querySelector("#test-address-input");
      input.focus();
    }
  }, [formErrors]);
  (0,react.useEffect)(() => {
    utils_schema.validate({ email: testAddress }, { abortEarly: false }).then(() => setIsTestAddressValid(true)).catch(() => setIsTestAddressValid(false));
  }, [testAddress]);
  const handleChange = (e) => {
    setTestAddress(() => e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await utils_schema.validate({ email: testAddress }, { abortEarly: false });
      setIsSubmitting(true);
      lockApp();
      postEmailTest({ to: testAddress }).then(() => {
        toggleNotification({
          type: "success",
          message: formatMessage(
            {
              id: (0,getTrad/* default */.Z)("Settings.email.plugin.notification.test.success"),
              defaultMessage: "Email test succeeded, check the {to} mailbox"
            },
            { to: testAddress }
          )
        });
      }).catch(() => {
        toggleNotification({
          type: "warning",
          message: formatMessage(
            {
              id: (0,getTrad/* default */.Z)("Settings.email.plugin.notification.test.error"),
              defaultMessage: "Failed to send a test mail to {to}"
            },
            { to: testAddress }
          )
        });
      }).finally(() => {
        setIsSubmitting(false);
        unlockApp();
      });
    } catch (error) {
      setFormErrors((0,helper_plugin.getYupInnerErrors)(error));
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist.Main, { labelledBy: "title", "aria-busy": "true" }, /* @__PURE__ */ react.createElement(components_EmailHeader, null), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null)));
  }
  return /* @__PURE__ */ react.createElement(dist.Main, { labelledBy: "title", "aria-busy": isSubmitting }, /* @__PURE__ */ react.createElement(components_EmailHeader, null), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 7 }, /* @__PURE__ */ react.createElement(
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
    /* @__PURE__ */ react.createElement(components_Configuration, { config })
  ), /* @__PURE__ */ react.createElement(
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
      id: (0,getTrad/* default */.Z)("Settings.email.plugin.title.test"),
      defaultMessage: "Test email delivery"
    })), /* @__PURE__ */ react.createElement(dist.Grid, { gap: 5, alignItems: "end" }, /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      dist.TextInput,
      {
        id: "test-address-input",
        name: "test-address",
        onChange: handleChange,
        label: formatMessage({
          id: (0,getTrad/* default */.Z)("Settings.email.plugin.label.testAddress"),
          defaultMessage: "Recipient email"
        }),
        value: testAddress,
        error: formErrors.email?.id && formatMessage({
          id: (0,getTrad/* default */.Z)(`${formErrors.email?.id}`),
          defaultMessage: "This is an invalid email"
        }),
        placeholder: formatMessage({
          id: (0,getTrad/* default */.Z)("Settings.email.plugin.placeholder.testAddress"),
          defaultMessage: "ex: developer@example.com"
        })
      }
    )), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 7, s: 12 }, /* @__PURE__ */ react.createElement(
      dist.Button,
      {
        loading: isSubmitting,
        disabled: !isTestAddressValid,
        type: "submit",
        startIcon: /* @__PURE__ */ react.createElement(icons_dist.Envelop, null)
      },
      formatMessage({
        id: (0,getTrad/* default */.Z)("Settings.email.plugin.button.test-email"),
        defaultMessage: "Send test email"
      })
    ))))
  )))));
};
/* harmony default export */ const Settings = (ProtectedSettingsPage);


/***/ })

}]);