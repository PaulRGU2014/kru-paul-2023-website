"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[3552],{

/***/ 72751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useLocales/index.js
var useLocales = __webpack_require__(8181);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/utils/index.js
var utils = __webpack_require__(57813);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var formik_dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/schemas.js


const localeFormSchema = (0,lib/* object */.Ry)().shape({
  code: (0,lib/* string */.Z_)().required(),
  displayName: (0,lib/* string */.Z_)().max(50, "Settings.locales.modal.locales.displayName.error").required(helper_plugin.translatedErrors.required)
});
/* harmony default export */ const schemas = (localeFormSchema);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/constants.js
var constants = __webpack_require__(7982);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useEditLocale/index.js





const editLocale = async (id, payload, toggleNotification) => {
  try {
    const data = await (0,helper_plugin.request)(`/i18n/locales/${id}`, {
      method: "PUT",
      body: payload
    });
    toggleNotification({
      type: "success",
      message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.edit.success") }
    });
    return data;
  } catch {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return null;
  }
};
const useEditLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_lib.useDispatch)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const modifyLocale = async (id, payload) => {
    setLoading(true);
    const editedLocale = await editLocale(id, payload, toggleNotification);
    dispatch({ type: constants/* UPDATE_LOCALE */.OT, editedLocale });
    setLoading(false);
  };
  return { isEditing: isLoading, editLocale: modifyLocale };
};
/* harmony default export */ const hooks_useEditLocale = (useEditLocale);

// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var react_query_lib = __webpack_require__(23724);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDefaultLocales/index.js





const fetchDefaultLocalesList = async (toggleNotification) => {
  try {
    const data = await (0,helper_plugin.request)("/i18n/iso-locales", {
      method: "GET"
    });
    return data;
  } catch (e) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return [];
  }
};
const useDefaultLocales = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { notifyStatus } = (0,dist.useNotifyAT)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { isLoading, data } = (0,react_query_lib.useQuery)(
    "default-locales",
    () => fetchDefaultLocalesList(toggleNotification).then((data2) => {
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.loaded"),
          defaultMessage: "The locales have been successfully loaded."
        })
      );
      return data2;
    })
  );
  return { defaultLocales: data, isLoading };
};
/* harmony default export */ const hooks_useDefaultLocales = (useDefaultLocales);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/BaseForm.js







const BaseForm = ({ locale }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, handleChange, errors } = (0,formik_dist.useFormikContext)();
  const { defaultLocales, isLoading } = hooks_useDefaultLocales();
  const localeDetails = !isLoading && defaultLocales.find((row) => row.code === locale.code);
  return /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4 }, /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6 }, /* @__PURE__ */ react.createElement(
    dist.Select,
    {
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.label"),
        defaultMessage: "Locales"
      }),
      value: localeDetails?.code || locale.code,
      disabled: true
    },
    /* @__PURE__ */ react.createElement(dist.Option, { value: localeDetails?.code || locale.code }, localeDetails?.name || locale.code)
  )), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6 }, /* @__PURE__ */ react.createElement(
    dist.TextInput,
    {
      name: "displayName",
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName"),
        defaultMessage: "Locale display name"
      }),
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.description"),
        defaultMessage: "Locale will be displayed under that name in the administration panel"
      }),
      error: errors.displayName ? formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.error"),
        defaultMessage: "The locale display name can only be less than 50 characters."
      }) : void 0,
      value: values.displayName,
      onChange: handleChange
    }
  )));
};
/* harmony default export */ const ModalEdit_BaseForm = (BaseForm);
BaseForm.propTypes = {
  locale: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired,
    name: (prop_types_default()).string.isRequired,
    code: (prop_types_default()).string.isRequired,
    isDefault: (prop_types_default()).bool.isRequired
  }).isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/AdvancedForm.js






const AdvancedForm = ({ isDefaultLocale }) => {
  const { values, setFieldValue } = (0,formik_dist.useFormikContext)();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    dist.Checkbox,
    {
      name: "isDefault",
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault.hint"),
        defaultMessage: "One default locale is required, change it by selecting another one"
      }),
      onChange: () => setFieldValue("isDefault", !values.isDefault),
      value: values.isDefault,
      disabled: isDefaultLocale
    },
    formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault"),
      defaultMessage: "Set as default locale"
    })
  );
};
AdvancedForm.propTypes = {
  isDefaultLocale: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const ModalEdit_AdvancedForm = (AdvancedForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalEdit/index.js












const ModalEdit = ({ locale, onClose }) => {
  const { refetchPermissions } = (0,helper_plugin.useRBACProvider)();
  const { isEditing, editLocale } = hooks_useEditLocale();
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleSubmit = async ({ displayName, isDefault }) => {
    await editLocale(locale.id, { name: displayName, isDefault });
    await refetchPermissions();
  };
  return /* @__PURE__ */ react.createElement(dist.ModalLayout, { onClose, labelledBy: "edit-locale-title" }, /* @__PURE__ */ react.createElement(
    formik_dist.Formik,
    {
      initialValues: {
        code: locale?.code,
        displayName: locale?.name || "",
        isDefault: Boolean(locale?.isDefault)
      },
      onSubmit: handleSubmit,
      validationSchema: schemas
    },
    /* @__PURE__ */ react.createElement(helper_plugin.Form, null, /* @__PURE__ */ react.createElement(dist.ModalHeader, null, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "edit-locale-title" }, formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.list.actions.edit"),
      defaultMessage: "Edit a locale"
    }))), /* @__PURE__ */ react.createElement(dist.ModalBody, null, /* @__PURE__ */ react.createElement(
      dist.TabGroup,
      {
        label: formatMessage({
          id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
          defaultMessage: "Configurations"
        }),
        id: "tabs",
        variant: "simple"
      },
      /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(dist.Typography, { as: "h2" }, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
        defaultMessage: "Configurations"
      })), /* @__PURE__ */ react.createElement(dist.Tabs, null, /* @__PURE__ */ react.createElement(dist.Tab, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.base"),
        defaultMessage: "Basic settings"
      })), /* @__PURE__ */ react.createElement(dist.Tab, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced"),
        defaultMessage: "Advanced settings"
      })))),
      /* @__PURE__ */ react.createElement(dist.Divider, null),
      /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 7, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(dist.TabPanels, null, /* @__PURE__ */ react.createElement(dist.TabPanel, null, /* @__PURE__ */ react.createElement(ModalEdit_BaseForm, { locale })), /* @__PURE__ */ react.createElement(dist.TabPanel, null, /* @__PURE__ */ react.createElement(ModalEdit_AdvancedForm, { isDefaultLocale: Boolean(locale && locale.isDefault) }))))
    )), /* @__PURE__ */ react.createElement(
      dist.ModalFooter,
      {
        startActions: /* @__PURE__ */ react.createElement(dist.Button, { variant: "tertiary", onClick: onClose }, formatMessage({ id: "app.components.Button.cancel" })),
        endActions: /* @__PURE__ */ react.createElement(dist.Button, { type: "submit", startIcon: /* @__PURE__ */ react.createElement(icons_dist.Check, null), disabled: isEditing }, formatMessage({ id: "global.save" }))
      }
    ))
  ));
};
ModalEdit.defaultProps = {
  locale: void 0
};
ModalEdit.propTypes = {
  locale: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired,
    name: (prop_types_default()).string.isRequired,
    code: (prop_types_default()).string.isRequired,
    isDefault: (prop_types_default()).bool.isRequired
  }),
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalEdit = (ModalEdit);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useDeleteLocale/index.js





const deleteLocale = async (id, toggleNotification) => {
  try {
    const data = await (0,helper_plugin.request)(`/i18n/locales/${id}`, {
      method: "DELETE"
    });
    toggleNotification({
      type: "success",
      message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.delete.success") }
    });
    return data;
  } catch (e) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    return e;
  }
};
const useDeleteLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_lib.useDispatch)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const removeLocale = async (id) => {
    setLoading(true);
    await deleteLocale(id, toggleNotification);
    dispatch({ type: constants/* DELETE_LOCALE */.HC, id });
    setLoading(false);
  };
  return { isDeleting: isLoading, deleteLocale: removeLocale };
};
/* harmony default export */ const hooks_useDeleteLocale = (useDeleteLocale);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalDelete/index.js




const ModalDelete = ({ localeToDelete, onClose }) => {
  const { isDeleting, deleteLocale } = hooks_useDeleteLocale();
  const isOpened = Boolean(localeToDelete);
  const handleDelete = () => deleteLocale(localeToDelete.id).then(onClose);
  return /* @__PURE__ */ react.createElement(
    helper_plugin.ConfirmDialog,
    {
      isConfirmButtonLoading: isDeleting,
      onConfirm: handleDelete,
      onToggleDialog: onClose,
      isOpen: isOpened
    }
  );
};
ModalDelete.defaultProps = {
  localeToDelete: void 0
};
ModalDelete.propTypes = {
  localeToDelete: prop_types_default().shape({
    id: (prop_types_default()).number.isRequired
  }),
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalDelete = (ModalDelete);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/hooks/useAddLocale/index.js






const addLocale = async ({ code, name, isDefault }, toggleNotification) => {
  const data = await (0,helper_plugin.request)("/i18n/locales", {
    method: "POST",
    body: {
      name,
      code,
      isDefault
    }
  });
  toggleNotification({
    type: "success",
    message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.create.success") }
  });
  return data;
};
const useAddLocale = () => {
  const [isLoading, setLoading] = (0,react.useState)(false);
  const dispatch = (0,react_redux_lib.useDispatch)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const persistLocale = async (locale) => {
    setLoading(true);
    try {
      const newLocale = await addLocale(locale, toggleNotification);
      dispatch({ type: constants/* ADD_LOCALE */.xz, newLocale });
    } catch (e) {
      const message = get_default()(e, "response.payload.message", null);
      if (message && message.includes("already exists")) {
        toggleNotification({
          type: "warning",
          message: { id: (0,utils/* getTrad */.O)("Settings.locales.modal.create.alreadyExist") }
        });
      } else {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
      throw e;
    } finally {
      setLoading(false);
    }
  };
  return { isAdding: isLoading, addLocale: persistLocale };
};
/* harmony default export */ const hooks_useAddLocale = (useAddLocale);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleSelect/index.js







const LocaleSelect = react.memo(({ value, onClear, onLocaleChange, error }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { defaultLocales, isLoading } = hooks_useDefaultLocales();
  const { locales } = (0,useLocales/* default */.Z)();
  const options = (defaultLocales || []).map((locale) => ({
    label: locale.name,
    value: locale.code
  })).filter(({ value: v }) => {
    const foundLocale = locales.find(({ code }) => code === v);
    return !foundLocale || foundLocale.code === value;
  });
  const computedValue = value || "";
  return /* @__PURE__ */ react.createElement(
    dist.Combobox,
    {
      "aria-busy": isLoading,
      error,
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.label"),
        defaultMessage: "Locales"
      }),
      value: computedValue,
      onClear: value ? onClear : void 0,
      onChange: (selectedLocaleKey) => {
        const selectedLocale = options.find((locale) => locale.value === selectedLocaleKey);
        if (selectedLocale) {
          onLocaleChange({ code: selectedLocale.value, displayName: selectedLocale.label });
        }
      },
      placeholder: formatMessage({
        id: "components.placeholder.select",
        defaultMessage: "Select"
      })
    },
    options.map((option) => /* @__PURE__ */ react.createElement(dist.ComboboxOption, { value: option.value, key: option.value }, option.label))
  );
});
LocaleSelect.defaultProps = {
  error: void 0,
  value: void 0,
  onClear() {
  },
  onLocaleChange: () => void 0
};
LocaleSelect.propTypes = {
  error: (prop_types_default()).string,
  onClear: (prop_types_default()).func,
  onLocaleChange: (prop_types_default()).func,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_LocaleSelect = (LocaleSelect);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/BaseForm.js






const BaseForm_BaseForm = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, handleChange, setFieldValue, errors } = (0,formik_dist.useFormikContext)();
  const handleLocaleChange = (0,react.useCallback)(
    (nextLocale) => {
      setFieldValue("displayName", nextLocale.displayName);
      setFieldValue("code", nextLocale.code);
    },
    [setFieldValue]
  );
  const handleClear = (0,react.useCallback)(() => {
    setFieldValue("displayName", "");
    setFieldValue("code", "");
  }, [setFieldValue]);
  return /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4 }, /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6 }, /* @__PURE__ */ react.createElement(
    components_LocaleSelect,
    {
      error: errors.code,
      value: values.code,
      onLocaleChange: handleLocaleChange,
      onClear: handleClear
    }
  )), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6 }, /* @__PURE__ */ react.createElement(
    dist.TextInput,
    {
      name: "displayName",
      label: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName"),
        defaultMessage: "Locale display name"
      }),
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.description"),
        defaultMessage: "Locale will be displayed under that name in the administration panel"
      }),
      error: errors.displayName ? formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.locales.displayName.error"),
        defaultMessage: "The locale display name can only be less than 50 characters."
      }) : void 0,
      value: values.displayName,
      onChange: handleChange
    }
  )));
};
/* harmony default export */ const ModalCreate_BaseForm = (BaseForm_BaseForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/AdvancedForm.js





const AdvancedForm_AdvancedForm = () => {
  const { values, setFieldValue } = (0,formik_dist.useFormikContext)();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    dist.Checkbox,
    {
      hint: formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault.hint"),
        defaultMessage: "One default locale is required, change it by selecting another one"
      }),
      onChange: () => setFieldValue("isDefault", !values.isDefault),
      value: values.isDefault
    },
    formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced.setAsDefault"),
      defaultMessage: "Set as default locale"
    })
  );
};
/* harmony default export */ const ModalCreate_AdvancedForm = (AdvancedForm_AdvancedForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/ModalCreate/index.js












const initialFormValues = {
  code: "",
  displayName: "",
  isDefault: false
};
const ModalCreate = ({ onClose }) => {
  const { isAdding, addLocale } = hooks_useAddLocale();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { refetchPermissions } = (0,helper_plugin.useRBACProvider)();
  const handleLocaleAdd = async (values) => {
    await addLocale({
      code: values.code,
      name: values.displayName,
      isDefault: values.isDefault
    });
    await refetchPermissions();
  };
  return /* @__PURE__ */ react.createElement(dist.ModalLayout, { onClose, labelledBy: "add-locale-title" }, /* @__PURE__ */ react.createElement(
    formik_dist.Formik,
    {
      initialValues: initialFormValues,
      onSubmit: handleLocaleAdd,
      validationSchema: schemas,
      validateOnChange: false
    },
    /* @__PURE__ */ react.createElement(helper_plugin.Form, null, /* @__PURE__ */ react.createElement(dist.ModalHeader, null, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "add-locale-title" }, formatMessage({
      id: (0,utils/* getTrad */.O)("Settings.list.actions.add"),
      defaultMessage: "Add new locale"
    }))), /* @__PURE__ */ react.createElement(dist.ModalBody, null, /* @__PURE__ */ react.createElement(
      dist.TabGroup,
      {
        label: formatMessage({
          id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
          defaultMessage: "Configurations"
        }),
        id: "tabs",
        variant: "simple"
      },
      /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(dist.Typography, { as: "h2", variant: "beta" }, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.title"),
        defaultMessage: "Configurations"
      })), /* @__PURE__ */ react.createElement(dist.Tabs, null, /* @__PURE__ */ react.createElement(dist.Tab, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.base"),
        defaultMessage: "Basic settings"
      })), /* @__PURE__ */ react.createElement(dist.Tab, null, formatMessage({
        id: (0,utils/* getTrad */.O)("Settings.locales.modal.advanced"),
        defaultMessage: "Advanced settings"
      })))),
      /* @__PURE__ */ react.createElement(dist.Divider, null),
      /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 7, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(dist.TabPanels, null, /* @__PURE__ */ react.createElement(dist.TabPanel, null, /* @__PURE__ */ react.createElement(ModalCreate_BaseForm, null)), /* @__PURE__ */ react.createElement(dist.TabPanel, null, /* @__PURE__ */ react.createElement(ModalCreate_AdvancedForm, null))))
    )), /* @__PURE__ */ react.createElement(
      dist.ModalFooter,
      {
        startActions: /* @__PURE__ */ react.createElement(dist.Button, { variant: "tertiary", onClick: onClose }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" })),
        endActions: /* @__PURE__ */ react.createElement(dist.Button, { type: "submit", startIcon: /* @__PURE__ */ react.createElement(icons_dist.Check, null), disabled: isAdding }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
      }
    ))
  ));
};
ModalCreate.propTypes = {
  onClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ModalCreate = (ModalCreate);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/LocaleTable.js







const LocaleTable = ({ locales, onDeleteLocale, onEditLocale }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Table, { colCount: 4, rowCount: locales.length + 1 }, /* @__PURE__ */ react.createElement(dist.Thead, null, /* @__PURE__ */ react.createElement(dist.Tr, null, /* @__PURE__ */ react.createElement(dist.Th, null, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.id") }))), /* @__PURE__ */ react.createElement(dist.Th, null, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.displayName") }))), /* @__PURE__ */ react.createElement(dist.Th, null, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.row.default-locale") }))), /* @__PURE__ */ react.createElement(dist.Th, null, /* @__PURE__ */ react.createElement(dist.VisuallyHidden, null, "Actions")))), /* @__PURE__ */ react.createElement(dist.Tbody, null, locales.map((locale) => /* @__PURE__ */ react.createElement(
    dist.Tr,
    {
      key: locale.id,
      ...(0,helper_plugin.onRowClick)({
        fn: () => onEditLocale(locale),
        condition: onEditLocale
      })
    },
    /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, locale.id)),
    /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, locale.name)),
    /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, locale.isDefault ? formatMessage({ id: (0,utils/* getTrad */.O)("Settings.locales.default") }) : null)),
    /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(
      dist.Stack,
      {
        horizontal: true,
        spacing: 1,
        style: { justifyContent: "flex-end" },
        ...helper_plugin.stopPropagation
      },
      onEditLocale && /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          onClick: () => onEditLocale(locale),
          label: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.edit") }),
          icon: /* @__PURE__ */ react.createElement(icons_dist.Pencil, null),
          noBorder: true
        }
      ),
      onDeleteLocale && !locale.isDefault && /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          onClick: () => onDeleteLocale(locale),
          label: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.delete") }),
          icon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null),
          noBorder: true
        }
      )
    ))
  ))));
};
LocaleTable.defaultProps = {
  locales: [],
  onDeleteLocale: void 0,
  onEditLocale: void 0
};
LocaleTable.propTypes = {
  locales: (prop_types_default()).array,
  onDeleteLocale: (prop_types_default()).func,
  onEditLocale: (prop_types_default()).func
};
/* harmony default export */ const LocaleList_LocaleTable = (LocaleTable);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/components/LocaleList/index.js












const LocaleList = ({ canUpdateLocale, canDeleteLocale, onToggleCreateModal, isCreating }) => {
  const [localeToDelete, setLocaleToDelete] = (0,react.useState)();
  const [localeToEdit, setLocaleToEdit] = (0,react.useState)();
  const { locales } = (0,useLocales/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,helper_plugin.useFocusWhenNavigate)();
  const closeModalToDelete = () => setLocaleToDelete(void 0);
  const handleDeleteLocale = canDeleteLocale ? setLocaleToDelete : void 0;
  const closeModalToEdit = () => setLocaleToEdit(void 0);
  const handleEditLocale = canUpdateLocale ? setLocaleToEdit : void 0;
  return /* @__PURE__ */ react.createElement(dist.Main, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      primaryAction: /* @__PURE__ */ react.createElement(dist.Button, { startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null), onClick: onToggleCreateModal, size: "S" }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.add") })),
      title: formatMessage({ id: (0,utils/* getTrad */.O)("plugin.name") }),
      subtitle: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.description") })
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, locales?.length > 0 ? /* @__PURE__ */ react.createElement(
    LocaleList_LocaleTable,
    {
      locales,
      onDeleteLocale: handleDeleteLocale,
      onEditLocale: handleEditLocale
    }
  ) : /* @__PURE__ */ react.createElement(
    dist.EmptyStateLayout,
    {
      icon: /* @__PURE__ */ react.createElement(icons_dist.EmptyDocuments, { width: void 0, height: void 0 }),
      content: formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.empty.title") }),
      action: onToggleCreateModal ? /* @__PURE__ */ react.createElement(dist.Button, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null), onClick: onToggleCreateModal }, formatMessage({ id: (0,utils/* getTrad */.O)("Settings.list.actions.add") })) : null
    }
  )), isCreating && /* @__PURE__ */ react.createElement(components_ModalCreate, { onClose: onToggleCreateModal }), localeToEdit && /* @__PURE__ */ react.createElement(components_ModalEdit, { onClose: closeModalToEdit, locale: localeToEdit }), /* @__PURE__ */ react.createElement(components_ModalDelete, { localeToDelete, onClose: closeModalToDelete }));
};
LocaleList.defaultProps = {
  onToggleCreateModal: void 0
};
LocaleList.propTypes = {
  canUpdateLocale: (prop_types_default()).bool.isRequired,
  canDeleteLocale: (prop_types_default()).bool.isRequired,
  onToggleCreateModal: (prop_types_default()).func,
  isCreating: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_LocaleList = (LocaleList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/LocaleSettingsPage.js



const LocaleSettingsPage = ({
  canReadLocale,
  canCreateLocale,
  canDeleteLocale,
  canUpdateLocale
}) => {
  const [isOpenedCreateModal, setIsOpenedCreateModal] = (0,react.useState)(false);
  const handleToggleModalCreate = canCreateLocale ? () => setIsOpenedCreateModal((s) => !s) : void 0;
  return canReadLocale ? /* @__PURE__ */ react.createElement(
    components_LocaleList,
    {
      canUpdateLocale,
      canDeleteLocale,
      onToggleCreateModal: handleToggleModalCreate,
      isCreating: isOpenedCreateModal
    }
  ) : null;
};
LocaleSettingsPage.propTypes = {
  canReadLocale: (prop_types_default()).bool.isRequired,
  canCreateLocale: (prop_types_default()).bool.isRequired,
  canUpdateLocale: (prop_types_default()).bool.isRequired,
  canDeleteLocale: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const SettingsPage_LocaleSettingsPage = (LocaleSettingsPage);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/permissions.js
var permissions = __webpack_require__(2135);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-i18n/admin/src/pages/SettingsPage/index.js




const ProtectedLocaleSettingsPage = () => {
  const {
    isLoading,
    allowedActions: { canRead, canUpdate, canCreate, canDelete }
  } = (0,helper_plugin.useRBAC)(permissions/* default */.Z);
  if (isLoading) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(
    SettingsPage_LocaleSettingsPage,
    {
      canReadLocale: canRead,
      canCreateLocale: canCreate,
      canUpdateLocale: canUpdate,
      canDeleteLocale: canDelete
    }
  );
};
/* harmony default export */ const SettingsPage = (ProtectedLocaleSettingsPage);


/***/ })

}]);