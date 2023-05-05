"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[8418],{

/***/ 95972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EmailTemplates)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/permissions.js
var permissions = __webpack_require__(81912);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 2 modules
var utils = __webpack_require__(89031);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/utils/api.js


const fetchData = async () => {
  const { get } = (0,helper_plugin.getFetchClient)();
  const { data } = await get((0,utils/* getRequestURL */.Gc)("email-templates"));
  return data;
};
const putEmailTemplate = (body) => {
  const { put } = (0,helper_plugin.getFetchClient)();
  return put((0,utils/* getRequestURL */.Gc)("email-templates"), body);
};


// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailTable.js







const EmailTable = ({ canUpdate, onEditClick }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Table, { colCount: 3, rowCount: 3 }, /* @__PURE__ */ react.createElement(dist.Thead, null, /* @__PURE__ */ react.createElement(dist.Tr, null, /* @__PURE__ */ react.createElement(dist.Th, { width: "1%" }, /* @__PURE__ */ react.createElement(dist.VisuallyHidden, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.table.icon.label"),
    defaultMessage: "icon"
  }))), /* @__PURE__ */ react.createElement(dist.Th, null, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.table.name.label"),
    defaultMessage: "name"
  }))), /* @__PURE__ */ react.createElement(dist.Th, { width: "1%" }, /* @__PURE__ */ react.createElement(dist.VisuallyHidden, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.table.action.label"),
    defaultMessage: "action"
  }))))), /* @__PURE__ */ react.createElement(dist.Tbody, null, /* @__PURE__ */ react.createElement(dist.Tr, { ...(0,helper_plugin.onRowClick)({ fn: () => onEditClick("reset_password") }) }, /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Icon, null, /* @__PURE__ */ react.createElement(
    icons_dist.Refresh,
    {
      "aria-label": formatMessage({
        id: "global.reset-password",
        defaultMessage: "Reset password"
      })
    }
  ))), /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Typography, null, formatMessage({
    id: "global.reset-password",
    defaultMessage: "Reset password"
  }))), /* @__PURE__ */ react.createElement(dist.Td, { ...helper_plugin.stopPropagation }, /* @__PURE__ */ react.createElement(
    dist.IconButton,
    {
      onClick: () => onEditClick("reset_password"),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("Email.template.form.edit.label"),
        defaultMessage: "Edit a template"
      }),
      noBorder: true,
      icon: canUpdate && /* @__PURE__ */ react.createElement(icons_dist.Pencil, null)
    }
  ))), /* @__PURE__ */ react.createElement(dist.Tr, { ...(0,helper_plugin.onRowClick)({ fn: () => onEditClick("email_confirmation") }) }, /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Icon, null, /* @__PURE__ */ react.createElement(
    icons_dist.Check,
    {
      "aria-label": formatMessage({
        id: (0,utils/* getTrad */.OB)("Email.template.email_confirmation"),
        defaultMessage: "Email address confirmation"
      })
    }
  ))), /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Typography, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.email_confirmation"),
    defaultMessage: "Email address confirmation"
  }))), /* @__PURE__ */ react.createElement(dist.Td, { ...helper_plugin.stopPropagation }, /* @__PURE__ */ react.createElement(
    dist.IconButton,
    {
      onClick: () => onEditClick("email_confirmation"),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("Email.template.form.edit.label"),
        defaultMessage: "Edit a template"
      }),
      noBorder: true,
      icon: canUpdate && /* @__PURE__ */ react.createElement(icons_dist.Pencil, null)
    }
  )))));
};
EmailTable.propTypes = {
  canUpdate: (prop_types_default()).bool.isRequired,
  onEditClick: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_EmailTable = (EmailTable);

// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var formik_dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/utils/schema.js


const schema = yup_lib/* object */.Ry().shape({
  options: yup_lib/* object */.Ry().shape({
    from: yup_lib/* object */.Ry().shape({
      name: yup_lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
      email: yup_lib/* string */.Z_().email(helper_plugin.translatedErrors.email).required(helper_plugin.translatedErrors.required)
    }).required(),
    response_email: yup_lib/* string */.Z_().email(helper_plugin.translatedErrors.email),
    object: yup_lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
    message: yup_lib/* string */.Z_().required(helper_plugin.translatedErrors.required)
  }).required(helper_plugin.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailForm.js








const EmailForm = ({ template, onToggle, onSubmit }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    dist.ModalLayout,
    {
      onClose: onToggle,
      labelledBy: `${formatMessage({
        id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.email-templates"),
        defaultMessage: "Edit email template"
      })}, ${formatMessage({ id: (0,utils/* getTrad */.OB)(template.display), defaultMessage: template.display })}`
    },
    /* @__PURE__ */ react.createElement(dist.ModalHeader, null, /* @__PURE__ */ react.createElement(
      dist.Breadcrumbs,
      {
        label: `${formatMessage({
          id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.email-templates"),
          defaultMessage: "Edit email template"
        })}, ${formatMessage({
          id: (0,utils/* getTrad */.OB)(template.display),
          defaultMessage: template.display
        })}`
      },
      /* @__PURE__ */ react.createElement(dist.Crumb, null, formatMessage({
        id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.email-templates"),
        defaultMessage: "Edit email template"
      })),
      /* @__PURE__ */ react.createElement(dist.Crumb, null, formatMessage({ id: (0,utils/* getTrad */.OB)(template.display), defaultMessage: template.display }))
    )),
    /* @__PURE__ */ react.createElement(
      formik_dist.Formik,
      {
        onSubmit,
        initialValues: template,
        validateOnChange: false,
        validationSchema: utils_schema,
        enableReinitialize: true
      },
      ({ errors, values, handleChange, isSubmitting }) => {
        return /* @__PURE__ */ react.createElement(helper_plugin.Form, null, /* @__PURE__ */ react.createElement(dist.ModalBody, null, /* @__PURE__ */ react.createElement(dist.Grid, { gap: 5 }, /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          helper_plugin.GenericInput,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.from.name.label"),
              defaultMessage: "Shipper name"
            },
            name: "options.from.name",
            onChange: handleChange,
            value: values.options.from.name,
            error: errors?.options?.from?.name,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          helper_plugin.GenericInput,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.from.email.label"),
              defaultMessage: "Shipper email"
            },
            name: "options.from.email",
            onChange: handleChange,
            value: values.options.from.email,
            error: errors?.options?.from?.email,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          helper_plugin.GenericInput,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.response_email.label"),
              defaultMessage: "Response email"
            },
            name: "options.response_email",
            onChange: handleChange,
            value: values.options.response_email,
            error: errors?.options?.response_email,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
          helper_plugin.GenericInput,
          {
            intlLabel: {
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.object.label"),
              defaultMessage: "Subject"
            },
            name: "options.object",
            onChange: handleChange,
            value: values.options.object,
            error: errors?.options?.object,
            type: "text"
          }
        )), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 12, s: 12 }, /* @__PURE__ */ react.createElement(
          dist.Textarea,
          {
            label: formatMessage({
              id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.message.label"),
              defaultMessage: "Message"
            }),
            name: "options.message",
            onChange: handleChange,
            value: values.options.message,
            error: errors?.options?.message && formatMessage({
              id: errors.options.message,
              defaultMessage: errors.options.message
            })
          }
        )))), /* @__PURE__ */ react.createElement(
          dist.ModalFooter,
          {
            startActions: /* @__PURE__ */ react.createElement(dist.Button, { onClick: onToggle, variant: "tertiary" }, "Cancel"),
            endActions: /* @__PURE__ */ react.createElement(dist.Button, { loading: isSubmitting, type: "submit" }, "Finish")
          }
        ));
      }
    )
  );
};
EmailForm.propTypes = {
  template: prop_types_default().shape({
    display: (prop_types_default()).string,
    icon: (prop_types_default()).string,
    options: prop_types_default().shape({
      from: prop_types_default().shape({
        name: (prop_types_default()).string,
        email: (prop_types_default()).string
      }),
      message: (prop_types_default()).string,
      object: (prop_types_default()).string,
      response_email: (prop_types_default()).string
    })
  }).isRequired,
  onSubmit: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_EmailForm = (EmailForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/index.js










const ProtectedEmailTemplatesPage = () => /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.readEmailTemplates */.Z.readEmailTemplates }, /* @__PURE__ */ react.createElement(EmailTemplatesPage, null));
const EmailTemplatesPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { notifyStatus } = (0,dist.useNotifyAT)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { lockApp, unlockApp } = (0,helper_plugin.useOverlayBlocker)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const queryClient = (0,lib.useQueryClient)();
  (0,helper_plugin.useFocusWhenNavigate)();
  const [isModalOpen, setIsModalOpen] = (0,react.useState)(false);
  const [templateToEdit, setTemplateToEdit] = (0,react.useState)(null);
  const updatePermissions = (0,react.useMemo)(() => {
    return { update: permissions/* default.updateEmailTemplates */.Z.updateEmailTemplates };
  }, []);
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,helper_plugin.useRBAC)(updatePermissions);
  const { status: isLoadingData, data } = (0,lib.useQuery)("email-templates", () => fetchData(), {
    onSuccess() {
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.OB)("Email.template.data.loaded"),
          defaultMessage: "Email templates has been loaded"
        })
      );
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  });
  const isLoading = isLoadingForPermissions || isLoadingData !== "success";
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleEditClick = (template) => {
    setTemplateToEdit(template);
    handleToggle();
  };
  const submitMutation = (0,lib.useMutation)((body) => putEmailTemplate({ "email-templates": body }), {
    async onSuccess() {
      await queryClient.invalidateQueries("email-templates");
      toggleNotification({
        type: "success",
        message: { id: "notification.success.saved", defaultMessage: "Saved" }
      });
      trackUsageRef.current("didEditEmailTemplates");
      unlockApp();
      handleToggle();
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
      unlockApp();
    },
    refetchActive: true
  });
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleSubmit = (body) => {
    lockApp();
    trackUsageRef.current("willEditEmailTemplates");
    const editedTemplates = { ...data, [templateToEdit]: body };
    submitMutation.mutate(editedTemplates);
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(
      helper_plugin.SettingsPageTitle,
      {
        name: formatMessage({
          id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
          defaultMessage: "Email templates"
        })
      }
    ), /* @__PURE__ */ react.createElement(
      dist.HeaderLayout,
      {
        title: formatMessage({
          id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
          defaultMessage: "Email templates"
        })
      }
    ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null)));
  }
  return /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": isSubmittingForm }, /* @__PURE__ */ react.createElement(
    helper_plugin.SettingsPageTitle,
    {
      name: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
        defaultMessage: "Email templates"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
        defaultMessage: "Email templates"
      })
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(components_EmailTable, { onEditClick: handleEditClick, canUpdate }), isModalOpen && /* @__PURE__ */ react.createElement(
    components_EmailForm,
    {
      template: data[templateToEdit],
      onToggle: handleToggle,
      onSubmit: handleSubmit
    }
  )));
};
/* harmony default export */ const EmailTemplates = (ProtectedEmailTemplatesPage);


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