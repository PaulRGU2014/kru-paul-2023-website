"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[2282],{

/***/ 8971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ProvidersPage": () => (/* binding */ ProvidersPage),
  "default": () => (/* binding */ Providers)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(18721);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 2 modules
var utils = __webpack_require__(89031);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/forms.js



const callbackLabel = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.redirectURL.front-end.label"),
  defaultMessage: "The redirect URL to your front-end app"
};
const callbackPlaceholder = {
  id: "http://www.client-app.com",
  defaultMessage: "http://www.client-app.com"
};
const enabledDescription = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.enabled.description"),
  defaultMessage: "If disabled, users won't be able to use this provider."
};
const enabledLabel = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.enabled.label"),
  defaultMessage: "Enable"
};
const keyLabel = { id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.key.label"), defaultMessage: "Client ID" };
const hintLabel = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.redirectURL.label"),
  defaultMessage: "The redirect URL to add in your {provider} application configurations"
};
const textPlaceholder = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.key.placeholder"),
  defaultMessage: "TEXT"
};
const secretLabel = {
  id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.secret.label"),
  defaultMessage: "Client Secret"
};
const forms_forms = {
  email: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6
          // TODO check if still needed
          // validations: {
          //   required: true,
          // },
        }
      ]
    ],
    schema: yup_lib/* object */.Ry().shape({
      enabled: yup_lib/* bool */.Xg().required(helper_plugin.translatedErrors.required)
    })
  },
  providers: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: keyLabel,
          name: "key",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: secretLabel,
          name: "secret",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: callbackLabel,
          placeholder: callbackPlaceholder,
          name: "callback",
          type: "text",
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: hintLabel,
          name: "noName",
          type: "text",
          validations: {},
          size: 12,
          disabled: true
        }
      ]
    ],
    schema: yup_lib/* object */.Ry().shape({
      enabled: yup_lib/* bool */.Xg().required(helper_plugin.translatedErrors.required),
      key: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      }),
      secret: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      }),
      callback: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      })
    })
  },
  providersWithSubdomain: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: keyLabel,
          name: "key",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: secretLabel,
          name: "secret",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: {
            id: (0,utils/* getTrad */.OB)({ id: "PopUpForm.Providers.jwksurl.label" }),
            defaultMessage: "JWKS URL"
          },
          name: "jwksurl",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: false
          }
        }
      ],
      [
        {
          intlLabel: {
            id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.subdomain.label"),
            defaultMessage: "Host URI (Subdomain)"
          },
          name: "subdomain",
          type: "text",
          placeholder: {
            id: (0,utils/* getTrad */.OB)("PopUpForm.Providers.subdomain.placeholder"),
            defaultMessage: "my.subdomain.com"
          },
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: callbackLabel,
          placeholder: callbackPlaceholder,
          name: "callback",
          type: "text",
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: hintLabel,
          name: "noName",
          type: "text",
          validations: {},
          size: 12,
          disabled: true
        }
      ]
    ],
    schema: yup_lib/* object */.Ry().shape({
      enabled: yup_lib/* bool */.Xg().required(helper_plugin.translatedErrors.required),
      key: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      }),
      secret: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      }),
      subdomain: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      }),
      callback: yup_lib/* string */.Z_().when("enabled", {
        is: true,
        then: yup_lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
        otherwise: yup_lib/* string */.Z_()
      })
    })
  }
};
/* harmony default export */ const utils_forms = (forms_forms);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/api.js


const fetchData = async (toggleNotification) => {
  try {
    const { get } = (0,helper_plugin.getFetchClient)();
    const { data } = await get((0,utils/* getRequestURL */.Gc)("providers"));
    return data;
  } catch (err) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    throw new Error("error");
  }
};
const putProvider = (body) => {
  const { put } = (0,helper_plugin.getFetchClient)();
  return put((0,utils/* getRequestURL */.Gc)("providers"), body);
};

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/createProvidersArray.js

const createProvidersArray = (data) => {
  return (0,lodash.sortBy)(
    Object.keys(data).reduce((acc, current) => {
      const { icon: iconName, enabled, subdomain } = data[current];
      const icon = iconName === "envelope" ? ["fas", "envelope"] : ["fab", iconName];
      if (subdomain !== void 0) {
        acc.push({ name: current, icon, enabled, subdomain });
      } else {
        acc.push({ name: current, icon, enabled });
      }
      return acc;
    }, []),
    "name"
  );
};
/* harmony default export */ const utils_createProvidersArray = (createProvidersArray);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/permissions.js
var permissions = __webpack_require__(81912);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var formik_dist = __webpack_require__(80831);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/Input/index.js




const Input = ({
  description,
  disabled,
  intlLabel,
  error,
  name,
  onChange,
  placeholder,
  providerToEditName,
  type,
  value
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const inputValue = name === "noName" ? `${strapi.backendURL}/api/connect/${providerToEditName}/callback` : value;
  const label = formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    { provider: providerToEditName, ...intlLabel.values }
  );
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    { provider: providerToEditName, ...description.values }
  ) : "";
  if (type === "bool") {
    return /* @__PURE__ */ react.createElement(
      dist.ToggleInput,
      {
        "aria-label": name,
        checked: value,
        disabled,
        hint,
        label,
        name,
        offLabel: formatMessage({
          id: "app.components.ToggleCheckbox.off-label",
          defaultMessage: "Off"
        }),
        onLabel: formatMessage({
          id: "app.components.ToggleCheckbox.on-label",
          defaultMessage: "On"
        }),
        onChange: (e) => {
          onChange({ target: { name, value: e.target.checked } });
        }
      }
    );
  }
  const formattedPlaceholder = placeholder ? formatMessage(
    { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
    { ...placeholder.values }
  ) : "";
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  return /* @__PURE__ */ react.createElement(
    dist.TextInput,
    {
      "aria-label": name,
      disabled,
      error: errorMessage,
      label,
      name,
      onChange,
      placeholder: formattedPlaceholder,
      type,
      value: inputValue
    }
  );
};
Input.defaultProps = {
  description: null,
  disabled: false,
  error: "",
  placeholder: null,
  value: ""
};
Input.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  providerToEditName: (prop_types_default()).string.isRequired,
  type: (prop_types_default()).string.isRequired,
  value: prop_types_default().oneOfType([(prop_types_default()).bool, (prop_types_default()).string])
};
/* harmony default export */ const FormModal_Input = (Input);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/index.js







const FormModal = ({
  headerBreadcrumbs,
  initialData,
  isSubmiting,
  layout,
  isOpen,
  onSubmit,
  onToggle,
  providerToEditName
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(dist.ModalLayout, { onClose: onToggle, labelledBy: "title" }, /* @__PURE__ */ react.createElement(dist.ModalHeader, null, /* @__PURE__ */ react.createElement(dist.Breadcrumbs, { label: headerBreadcrumbs.join(", ") }, headerBreadcrumbs.map((crumb) => /* @__PURE__ */ react.createElement(dist.Crumb, { key: crumb }, crumb)))), /* @__PURE__ */ react.createElement(
    formik_dist.Formik,
    {
      onSubmit: (values) => onSubmit(values),
      initialValues: initialData,
      validationSchema: layout.schema,
      validateOnChange: false
    },
    ({ errors, handleChange, values }) => {
      return /* @__PURE__ */ react.createElement(helper_plugin.Form, null, /* @__PURE__ */ react.createElement(dist.ModalBody, null, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 1 }, /* @__PURE__ */ react.createElement(dist.Grid, { gap: 5 }, layout.form.map((row) => {
        return row.map((input) => {
          return /* @__PURE__ */ react.createElement(dist.GridItem, { key: input.name, col: input.size, xs: 12 }, /* @__PURE__ */ react.createElement(
            FormModal_Input,
            {
              ...input,
              error: errors[input.name],
              onChange: handleChange,
              value: values[input.name],
              providerToEditName
            }
          ));
        });
      })))), /* @__PURE__ */ react.createElement(
        dist.ModalFooter,
        {
          startActions: /* @__PURE__ */ react.createElement(dist.Button, { variant: "tertiary", onClick: onToggle, type: "button" }, formatMessage({
            id: "app.components.Button.cancel",
            defaultMessage: "Cancel"
          })),
          endActions: /* @__PURE__ */ react.createElement(dist.Button, { type: "submit", loading: isSubmiting }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
        }
      ));
    }
  ));
};
FormModal.defaultProps = {
  initialData: null,
  providerToEditName: null
};
FormModal.propTypes = {
  headerBreadcrumbs: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  initialData: (prop_types_default()).object,
  layout: prop_types_default().shape({
    form: prop_types_default().arrayOf((prop_types_default()).array),
    schema: (prop_types_default()).object
  }).isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  isSubmiting: (prop_types_default()).bool.isRequired,
  onSubmit: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired,
  providerToEditName: (prop_types_default()).string
};
/* harmony default export */ const components_FormModal = (FormModal);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/index.js














const ProvidersPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,helper_plugin.useFocusWhenNavigate)();
  const { notifyStatus } = (0,dist.useNotifyAT)();
  const queryClient = (0,lib.useQueryClient)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const [isSubmiting, setIsSubmiting] = (0,react.useState)(false);
  const [providerToEditName, setProviderToEditName] = (0,react.useState)(null);
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { lockApp, unlockApp } = (0,helper_plugin.useOverlayBlocker)();
  const updatePermissions = (0,react.useMemo)(() => {
    return { update: permissions/* default.updateProviders */.Z.updateProviders };
  }, []);
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,helper_plugin.useRBAC)(updatePermissions);
  const {
    isLoading: isLoadingForData,
    data: modifiedData,
    isFetching
  } = (0,lib.useQuery)("get-providers", () => fetchData(toggleNotification), {
    onSuccess() {
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.OB)("Providers.data.loaded"),
          defaultMessage: "Providers have been loaded"
        })
      );
    },
    initialData: {}
  });
  const isLoading = isLoadingForData || isFetching;
  const submitMutation = (0,lib.useMutation)(putProvider, {
    async onSuccess() {
      await queryClient.invalidateQueries("get-providers");
      toggleNotification({
        type: "info",
        message: { id: (0,utils/* getTrad */.OB)("notification.success.submit") }
      });
      trackUsageRef.current("didEditAuthenticationProvider");
      setIsSubmiting(false);
      handleToggleModal();
      unlockApp();
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
      unlockApp();
      setIsSubmiting(false);
    },
    refetchActive: false
  });
  const providers = (0,react.useMemo)(() => utils_createProvidersArray(modifiedData), [modifiedData]);
  const rowCount = providers.length;
  const isProviderWithSubdomain = (0,react.useMemo)(() => {
    if (!providerToEditName) {
      return false;
    }
    const providerToEdit = providers.find((obj) => obj.name === providerToEditName);
    return has_default()(providerToEdit, "subdomain");
  }, [providers, providerToEditName]);
  const pageTitle = formatMessage({
    id: (0,utils/* getTrad */.OB)("HeaderNav.link.providers"),
    defaultMessage: "Providers"
  });
  const layoutToRender = (0,react.useMemo)(() => {
    if (providerToEditName === "email") {
      return utils_forms.email;
    }
    if (isProviderWithSubdomain) {
      return utils_forms.providersWithSubdomain;
    }
    return utils_forms.providers;
  }, [providerToEditName, isProviderWithSubdomain]);
  const handleToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClickEdit = (provider) => {
    if (canUpdate) {
      setProviderToEditName(provider.name);
      handleToggleModal();
    }
  };
  const handleSubmit = async (values) => {
    setIsSubmiting(true);
    lockApp();
    trackUsageRef.current("willEditAuthenticationProvider");
    const body = { ...modifiedData, [providerToEditName]: values };
    submitMutation.mutate({ providers: body });
  };
  return /* @__PURE__ */ react.createElement(dist.Layout, null, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: pageTitle }), /* @__PURE__ */ react.createElement(dist.Main, null, /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.providers"),
        defaultMessage: "Providers"
      })
    }
  ), isLoading || isLoadingForPermissions ? /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null) : /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(dist.Table, { colCount: 3, rowCount: rowCount + 1 }, /* @__PURE__ */ react.createElement(dist.Thead, null, /* @__PURE__ */ react.createElement(dist.Tr, null, /* @__PURE__ */ react.createElement(dist.Th, null, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(dist.Th, null, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.OB)("Providers.status"), defaultMessage: "Status" }))), /* @__PURE__ */ react.createElement(dist.Th, null, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma" }, /* @__PURE__ */ react.createElement(dist.VisuallyHidden, null, formatMessage({
    id: "global.settings",
    defaultMessage: "Settings"
  })))))), /* @__PURE__ */ react.createElement(dist.Tbody, null, providers.map((provider) => /* @__PURE__ */ react.createElement(
    dist.Tr,
    {
      key: provider.name,
      ...(0,helper_plugin.onRowClick)({
        fn: () => handleClickEdit(provider),
        condition: canUpdate
      })
    },
    /* @__PURE__ */ react.createElement(dist.Td, { width: "45%" }, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "semiBold", textColor: "neutral800" }, provider.name)),
    /* @__PURE__ */ react.createElement(dist.Td, { width: "65%" }, /* @__PURE__ */ react.createElement(
      dist.Typography,
      {
        textColor: provider.enabled ? "success600" : "danger600",
        "data-testid": `enable-${provider.name}`
      },
      provider.enabled ? formatMessage({
        id: "global.enabled",
        defaultMessage: "Enabled"
      }) : formatMessage({
        id: "global.disabled",
        defaultMessage: "Disabled"
      })
    )),
    /* @__PURE__ */ react.createElement(dist.Td, { ...helper_plugin.stopPropagation }, canUpdate && /* @__PURE__ */ react.createElement(
      dist.IconButton,
      {
        onClick: () => handleClickEdit(provider),
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(icons_dist.Pencil, null),
        label: "Edit"
      }
    ))
  )))))), /* @__PURE__ */ react.createElement(
    components_FormModal,
    {
      initialData: modifiedData[providerToEditName],
      isOpen,
      isSubmiting,
      layout: layoutToRender,
      headerBreadcrumbs: [
        formatMessage({
          id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.providers"),
          defaultMessage: "Edit Provider"
        }),
        upperFirst_default()(providerToEditName)
      ],
      onToggle: handleToggleModal,
      onSubmit: handleSubmit,
      providerToEditName
    }
  ));
};
const ProtectedProvidersPage = () => /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.readProviders */.Z.readProviders }, /* @__PURE__ */ react.createElement(ProvidersPage, null));
/* harmony default export */ const Providers = (ProtectedProvidersPage);


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