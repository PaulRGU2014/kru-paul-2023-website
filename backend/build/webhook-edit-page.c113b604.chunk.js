"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[5162],{

/***/ 40703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Webhooks_EditView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var formik_dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/EventRow.js




const EventRow = ({ disabledEvents, name, events, inputValue, handleChange, handleChangeAll }) => {
  const enabledCheckboxes = events.filter((event) => {
    return !disabledEvents.includes(event);
  });
  const areAllCheckboxesSelected = inputValue.length === enabledCheckboxes.length;
  const hasSomeCheckboxSelected = inputValue.length > 0;
  const onChangeAll = ({ target: { name: name2 } }) => {
    const valueToSet = !areAllCheckboxesSelected;
    handleChangeAll({
      target: { name: name2, value: valueToSet }
    });
  };
  return /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", null, /* @__PURE__ */ react.createElement(
    dist.Checkbox,
    {
      indeterminate: hasSomeCheckboxSelected && !areAllCheckboxesSelected,
      "aria-label": "Select all entries",
      name,
      onChange: onChangeAll,
      value: areAllCheckboxesSelected
    },
    upperFirst_default()(name)
  )), events.map((event) => {
    return /* @__PURE__ */ react.createElement("td", { key: event }, /* @__PURE__ */ react.createElement(
      dist.BaseCheckbox,
      {
        disabled: disabledEvents.includes(event),
        "aria-label": event,
        name: event,
        value: inputValue.includes(event),
        onValueChange: (value) => handleChange({ target: { name: event, value } })
      }
    ));
  }));
};
EventRow.defaultProps = {
  disabledEvents: [],
  events: [],
  inputValue: [],
  handleChange() {
  },
  handleChangeAll() {
  }
};
EventRow.propTypes = {
  disabledEvents: (prop_types_default()).array,
  events: (prop_types_default()).array,
  inputValue: (prop_types_default()).array,
  handleChange: (prop_types_default()).func,
  handleChangeAll: (prop_types_default()).func,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const EventInput_EventRow = (EventRow);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/utils/formatValue.js
const formatValue = (value) => value.reduce((acc, curr) => {
  const key = curr.split(".")[0];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(curr);
  return acc;
}, {});
/* harmony default export */ const utils_formatValue = (formatValue);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/index.js








const StyledTable = styled_components_browser_esm["default"].table`
  td {
    height: ${52 / 16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({ theme }) => theme.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({ theme }) => theme.spaces[7]};
  }
`;
const displayedData = {
  headers: {
    default: [
      { id: "Settings.webhooks.events.create", defaultMessage: "Create" },
      { id: "Settings.webhooks.events.update", defaultMessage: "Update" },
      { id: "app.utils.delete", defaultMessage: "Delete" }
    ],
    draftAndPublish: [
      { id: "Settings.webhooks.events.create", defaultMessage: "Create" },
      { id: "Settings.webhooks.events.update", defaultMessage: "Update" },
      { id: "app.utils.delete", defaultMessage: "Delete" },
      { id: "app.utils.publish", defaultMessage: "Publish" },
      { id: "app.utils.unpublish", defaultMessage: "Unpublish" }
    ]
  },
  events: {
    default: {
      entry: ["entry.create", "entry.update", "entry.delete"],
      media: ["media.create", "media.update", "media.delete"]
    },
    draftAndPublish: {
      entry: ["entry.create", "entry.update", "entry.delete", "entry.publish", "entry.unpublish"],
      media: ["media.create", "media.update", "media.delete"]
    }
  }
};
const EventInput = ({ isDraftAndPublish }) => {
  const headersName = isDraftAndPublish ? displayedData.headers.draftAndPublish : displayedData.headers.default;
  const events = isDraftAndPublish ? displayedData.events.draftAndPublish : displayedData.events.default;
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, handleChange: onChange } = (0,formik_dist.useFormikContext)();
  const inputName = "events";
  const inputValue = values.events;
  const disabledEvents = [];
  const formattedValue = utils_formatValue(inputValue);
  const handleChange = ({ target: { name, value } }) => {
    let set = new Set(inputValue);
    if (value) {
      set.add(name);
    } else {
      set.delete(name);
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  const handleChangeAll = ({ target: { name, value } }) => {
    let set = new Set(inputValue);
    if (value) {
      events[name].forEach((event) => {
        if (!disabledEvents.includes(event)) {
          set.add(event);
        }
      });
    } else {
      events[name].forEach((event) => set.delete(event));
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  return /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 1 }, /* @__PURE__ */ react.createElement(dist.FieldLabel, null, formatMessage({
    id: "Settings.webhooks.form.events",
    defaultMessage: "Events"
  })), /* @__PURE__ */ react.createElement(StyledTable, null, /* @__PURE__ */ react.createElement("thead", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", null), headersName.map((header) => {
    if (header === "app.utils.publish" || header === "app.utils.unpublish") {
      return /* @__PURE__ */ react.createElement(
        "td",
        {
          key: header.id,
          title: formatMessage({
            id: "Settings.webhooks.event.publish-tooltip",
            defaultMessage: "This event only exists for content with draft & publish enabled"
          })
        },
        /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage(header))
      );
    }
    return /* @__PURE__ */ react.createElement("td", { key: header.id }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage(header)));
  }))), /* @__PURE__ */ react.createElement("tbody", null, Object.keys(events).map((event) => {
    return /* @__PURE__ */ react.createElement(
      EventInput_EventRow,
      {
        disabledEvents,
        key: event,
        name: event,
        events: events[event],
        inputValue: formattedValue[event],
        handleChange,
        handleChangeAll
      }
    );
  }))));
};
EventInput.propTypes = {
  isDraftAndPublish: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_EventInput = (EventInput);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/keys.js
const keys = [
  "A-IM",
  "Accept",
  "Accept-Charset",
  "Accept-Encoding",
  "Accept-Language",
  "Accept-Datetime",
  "Access-Control-Request-Method",
  "Access-Control-Request-Headers",
  "Authorization",
  "Cache-Control",
  "Connection",
  "Content-Length",
  "Content-Type",
  "Cookie",
  "Date",
  "Expect",
  "Forwarded",
  "From",
  "Host",
  "If-Match",
  "If-Modified-Since",
  "If-None-Match",
  "If-Range",
  "If-Unmodified-Since",
  "Max-Forwards",
  "Origin",
  "Pragma",
  "Proxy-Authorization",
  "Range",
  "Referer",
  "TE",
  "User-Agent",
  "Upgrade",
  "Via",
  "Warning"
];
/* harmony default export */ const HeadersInput_keys = (keys);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/Combobox.js




const Combobox = ({ name, onChange, value, ...props }) => {
  const [options, setOptions] = (0,react.useState)(value ? [...HeadersInput_keys, value] : HeadersInput_keys);
  const handleChange = (value2) => {
    onChange({ target: { name, value: value2 } });
  };
  const handleCreateOption = (value2) => {
    setOptions((prev) => [...prev, value2]);
    onChange({ target: { name, value: value2 } });
  };
  return /* @__PURE__ */ react.createElement(
    dist.CreatableCombobox,
    {
      ...props,
      onChange: handleChange,
      onCreateOption: handleCreateOption,
      placeholder: "",
      value
    },
    options.map((key) => /* @__PURE__ */ react.createElement(dist.ComboboxOption, { value: key, key }, key))
  );
};
Combobox.defaultProps = {
  value: void 0
};
Combobox.propTypes = {
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const HeadersInput_Combobox = (Combobox);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/index.js







const HeadersInput = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, errors } = (0,formik_dist.useFormikContext)();
  return /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 1 }, /* @__PURE__ */ react.createElement(dist.FieldLabel, null, formatMessage({
    id: "Settings.webhooks.form.headers",
    defaultMessage: "Headers"
  })), /* @__PURE__ */ react.createElement(dist.Box, { padding: 8, background: "neutral100", hasRadius: true }, /* @__PURE__ */ react.createElement(
    formik_dist.FieldArray,
    {
      validateOnChange: false,
      name: "headers",
      render: ({ push, remove }) => /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4 }, values.headers?.map((header, i) => (
        // eslint-disable-next-line
        /* @__PURE__ */ react.createElement(react.Fragment, { key: i }, /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6 }, /* @__PURE__ */ react.createElement(
          formik_dist.Field,
          {
            as: HeadersInput_Combobox,
            name: `headers.${i}.key`,
            "aria-label": `row ${i + 1} key`,
            label: formatMessage({
              id: "Settings.webhooks.key",
              defaultMessage: "Key"
            }),
            error: errors.headers?.[i]?.key && formatMessage({
              id: errors.headers[i]?.key,
              defaultMessage: errors.headers[i]?.key
            })
          }
        )), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6 }, /* @__PURE__ */ react.createElement(dist.Flex, { alignItems: "flex-end" }, /* @__PURE__ */ react.createElement(dist.Box, { style: { flex: 1 } }, /* @__PURE__ */ react.createElement(
          formik_dist.Field,
          {
            as: dist.TextInput,
            "aria-label": `row ${i + 1} value`,
            label: formatMessage({
              id: "Settings.webhooks.value",
              defaultMessage: "Value"
            }),
            name: `headers.${i}.value`,
            error: errors.headers?.[i]?.value && formatMessage({
              id: errors.headers[i]?.value,
              defaultMessage: errors.headers[i]?.value
            })
          }
        )), /* @__PURE__ */ react.createElement(
          dist.Flex,
          {
            paddingLeft: 2,
            style: { alignSelf: "center" },
            paddingTop: errors.headers?.[i]?.value ? 0 : 5
          },
          /* @__PURE__ */ react.createElement(
            helper_plugin.RemoveRoundedButton,
            {
              onClick: () => values.headers.length !== 1 && remove(i),
              label: formatMessage(
                {
                  id: "Settings.webhooks.headers.remove",
                  defaultMessage: "Remove header row {number}"
                },
                { number: i + 1 }
              )
            }
          )
        ))))
      )), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 12 }, /* @__PURE__ */ react.createElement(
        dist.TextButton,
        {
          type: "button",
          onClick: () => {
            push({ key: "", value: "" });
          },
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null)
        },
        formatMessage({
          id: "Settings.webhooks.create.header",
          defaultMessage: "Create new header"
        })
      )))
    }
  )));
};
/* harmony default export */ const components_HeadersInput = (HeadersInput);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/TriggerContainer/index.js







const Icon = styled_components_browser_esm["default"].svg(
  ({ theme, color }) => `
  width: ${12 / 16}rem;
  height: ${12 / 16}rem;

  path {
    fill: ${theme.colors[color]};
  }
`
);
const Status = ({ isPending, statusCode }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  if (isPending) {
    return /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, spacing: 2, style: { alignItems: "center" } }, /* @__PURE__ */ react.createElement(Icon, { as: icons_dist.Loader }), /* @__PURE__ */ react.createElement(dist.Typography, null, formatMessage({ id: "Settings.webhooks.trigger.pending", defaultMessage: "pending" })));
  }
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, spacing: 2, style: { alignItems: "center" } }, /* @__PURE__ */ react.createElement(Icon, { as: icons_dist.Check, color: "success700" }), /* @__PURE__ */ react.createElement(dist.Typography, null, formatMessage({ id: "Settings.webhooks.trigger.success", defaultMessage: "success" })));
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, spacing: 2, style: { alignItems: "center" } }, /* @__PURE__ */ react.createElement(Icon, { as: icons_dist.Cross, color: "danger700" }), /* @__PURE__ */ react.createElement(dist.Typography, null, formatMessage({ id: "Settings.error", defaultMessage: "error" }), " ", statusCode));
  }
  return null;
};
Status.propTypes = {
  isPending: (prop_types_default()).bool.isRequired,
  statusCode: (prop_types_default()).number
};
Status.defaultProps = {
  statusCode: void 0
};
const Message = ({ statusCode, message }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral600", ellipsis: true }, formatMessage({
      id: "Settings.webhooks.trigger.success.label",
      defaultMessage: "Trigger succeeded"
    })));
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(dist.Flex, { maxWidth: (0,helper_plugin.pxToRem)(250), justifyContent: "flex-end", title: message }, /* @__PURE__ */ react.createElement(dist.Typography, { ellipsis: true, textColor: "neutral600" }, message)));
  }
  return null;
};
Message.propTypes = {
  statusCode: (prop_types_default()).number,
  message: (prop_types_default()).string
};
Message.defaultProps = {
  statusCode: void 0,
  message: void 0
};
const CancelButton = ({ onCancel }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement("button", { onClick: onCancel, type: "button" }, /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, spacing: 2, style: { alignItems: "center" } }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral400" }, formatMessage({ id: "Settings.webhooks.trigger.cancel", defaultMessage: "cancel" })), /* @__PURE__ */ react.createElement(Icon, { as: icons_dist.Cross, color: "neutral400" }))));
};
CancelButton.propTypes = { onCancel: (prop_types_default()).func.isRequired };
const TriggerContainer = ({ isPending, onCancel, response }) => {
  const { statusCode, message } = response;
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Box, { background: "neutral0", padding: 5, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4, style: { alignItems: "center" } }, /* @__PURE__ */ react.createElement(dist.GridItem, { col: 3 }, /* @__PURE__ */ react.createElement(dist.Typography, null, formatMessage({
    id: "Settings.webhooks.trigger.test",
    defaultMessage: "Test-trigger"
  }))), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 3 }, /* @__PURE__ */ react.createElement(Status, { isPending, statusCode })), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6 }, !isPending ? /* @__PURE__ */ react.createElement(Message, { statusCode, message }) : /* @__PURE__ */ react.createElement(CancelButton, { onCancel }))));
};
TriggerContainer.defaultProps = {
  isPending: false,
  onCancel() {
  },
  response: {}
};
TriggerContainer.propTypes = {
  isPending: (prop_types_default()).bool,
  onCancel: (prop_types_default()).func,
  response: (prop_types_default()).object
};
/* harmony default export */ const components_TriggerContainer = (TriggerContainer);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/utils/fieldsRegex.js
const NAME_REGEX = /(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/;
const URL_REGEX = /(^$)|((https?:\/\/.*)(d*)\/?(.*))/;


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/utils/schema.js



const schema = yup_lib/* object */.Ry().shape({
  name: yup_lib/* string */.Z_(helper_plugin.translatedErrors.string).required(helper_plugin.translatedErrors.required).matches(NAME_REGEX, helper_plugin.translatedErrors.regex),
  url: yup_lib/* string */.Z_(helper_plugin.translatedErrors.string).required(helper_plugin.translatedErrors.required).matches(URL_REGEX, helper_plugin.translatedErrors.regex),
  headers: yup_lib/* lazy */.Vo((array) => {
    let baseSchema = yup_lib/* array */.IX();
    if (array.length === 1) {
      const { key, value } = array[0];
      if (!key && !value) {
        return baseSchema;
      }
    }
    return baseSchema.of(
      yup_lib/* object */.Ry().shape({
        key: yup_lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
        value: yup_lib/* string */.Z_().required(helper_plugin.translatedErrors.required)
      })
    );
  }),
  events: yup_lib/* array */.IX()
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/WebhookForm/index.js











const WebhookForm = ({
  handleSubmit,
  data,
  triggerWebhook,
  isCreating,
  isTriggering,
  triggerResponse,
  isDraftAndPublishEvents
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showTriggerResponse, setShowTriggerResponse] = (0,react.useState)(false);
  return /* @__PURE__ */ react.createElement(
    formik_dist.Formik,
    {
      onSubmit: handleSubmit,
      initialValues: {
        name: data?.name || "",
        url: data?.url || "",
        headers: Object.keys(data?.headers || []).length ? Object.entries(data.headers).map(([key, value]) => ({ key, value })) : [{ key: "", value: "" }],
        events: data?.events || []
      },
      validationSchema: utils_schema,
      validateOnChange: false,
      validateOnBlur: false
    },
    ({ handleSubmit: handleSubmit2, errors }) => /* @__PURE__ */ react.createElement(helper_plugin.Form, { noValidate: true }, /* @__PURE__ */ react.createElement(
      dist.HeaderLayout,
      {
        primaryAction: /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, spacing: 2 }, /* @__PURE__ */ react.createElement(
          dist.Button,
          {
            onClick: () => {
              triggerWebhook();
              setShowTriggerResponse(true);
            },
            variant: "tertiary",
            startIcon: /* @__PURE__ */ react.createElement(icons_dist.Play, null),
            disabled: isCreating || isTriggering,
            size: "L"
          },
          formatMessage({
            id: "Settings.webhooks.trigger",
            defaultMessage: "Trigger"
          })
        ), /* @__PURE__ */ react.createElement(dist.Button, { startIcon: /* @__PURE__ */ react.createElement(icons_dist.Check, null), onClick: handleSubmit2, type: "submit", size: "L" }, formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        }))),
        title: isCreating ? formatMessage({
          id: "Settings.webhooks.create",
          defaultMessage: "Create a webhook"
        }) : data?.name,
        navigationAction: /* @__PURE__ */ react.createElement(helper_plugin.Link, { startIcon: /* @__PURE__ */ react.createElement(icons_dist.ArrowLeft, null), to: "/settings/webhooks" }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }))
      }
    ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 4 }, showTriggerResponse && /* @__PURE__ */ react.createElement("div", { className: "trigger-wrapper" }, /* @__PURE__ */ react.createElement(
      components_TriggerContainer,
      {
        isPending: isTriggering,
        response: triggerResponse,
        onCancel: () => setShowTriggerResponse(false)
      }
    )), /* @__PURE__ */ react.createElement(dist.Box, { background: "neutral0", padding: 8, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 6 }, /* @__PURE__ */ react.createElement(dist.Grid, { gap: 6 }, /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6 }, /* @__PURE__ */ react.createElement(
      formik_dist.Field,
      {
        as: dist.TextInput,
        name: "name",
        error: errors.name && formatMessage({ id: errors.name }),
        label: formatMessage({
          id: "global.name",
          defaultMessage: "Name"
        }),
        required: true
      }
    )), /* @__PURE__ */ react.createElement(dist.GridItem, { col: 12 }, /* @__PURE__ */ react.createElement(
      formik_dist.Field,
      {
        as: dist.TextInput,
        name: "url",
        error: errors.url && formatMessage({ id: errors.url }),
        label: formatMessage({
          id: "Settings.roles.form.input.url",
          defaultMessage: "Url"
        }),
        required: true
      }
    ))), /* @__PURE__ */ react.createElement(components_HeadersInput, null), /* @__PURE__ */ react.createElement(components_EventInput, { isDraftAndPublish: isDraftAndPublishEvents }))))))
  );
};
WebhookForm.propTypes = {
  data: (prop_types_default()).object,
  handleSubmit: (prop_types_default()).func.isRequired,
  triggerWebhook: (prop_types_default()).func.isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  isDraftAndPublishEvents: (prop_types_default()).bool.isRequired,
  isTriggering: (prop_types_default()).bool.isRequired,
  triggerResponse: (prop_types_default()).object
};
WebhookForm.defaultProps = {
  data: void 0,
  triggerResponse: void 0
};
/* harmony default export */ const components_WebhookForm = (WebhookForm);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/utils/formatData.js

const cleanData = (data) => {
  const webhooks = { ...data };
  (0,lodash.set)(webhooks, "headers", unformatHeaders(data.headers));
  return webhooks;
};
const unformatHeaders = (headers) => {
  return headers.reduce((acc, current) => {
    const { key, value } = current;
    if (key !== "") {
      return {
        ...acc,
        [key]: value
      };
    }
    return acc;
  }, {});
};
/* harmony default export */ const formatData = (cleanData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/index.js








const EditView = () => {
  const {
    params: { id }
  } = (0,react_router_dom_min.useRouteMatch)("/settings/webhooks/:id");
  const { replace } = (0,react_router_dom_min.useHistory)();
  const { lockApp, unlockApp } = (0,helper_plugin.useOverlayBlocker)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const queryClient = (0,lib.useQueryClient)();
  const { isLoading: isLoadingForModels, collectionTypes } = (0,hooks/* useModels */.bP)();
  const { post } = (0,helper_plugin.useFetchClient)();
  const isCreating = id === "create";
  const fetchWebhook = (0,react.useCallback)(
    async (id2) => {
      const [err, { data: data2 }] = await (0,helper_plugin.to)(
        (0,helper_plugin.request)(`/admin/webhooks/${id2}`, {
          method: "GET"
        })
      );
      if (err) {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
        return null;
      }
      return data2;
    },
    [toggleNotification]
  );
  const { isLoading, data } = (0,lib.useQuery)(["get-webhook", id], () => fetchWebhook(id), {
    enabled: !isCreating
  });
  const {
    isLoading: isTriggering,
    data: triggerResponse,
    isIdle: isTriggerIdle,
    mutate
  } = (0,lib.useMutation)(() => post(`/admin/webhooks/${id}/trigger`));
  const triggerWebhook = () => mutate(null, {
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  });
  const createWebhookMutation = (0,lib.useMutation)(
    (body) => (0,helper_plugin.request)("/admin/webhooks", {
      method: "POST",
      body
    })
  );
  const updateWebhookMutation = (0,lib.useMutation)(
    ({ id: id2, body }) => (0,helper_plugin.request)(`/admin/webhooks/${id2}`, {
      method: "PUT",
      body
    })
  );
  const handleSubmit = async (data2) => {
    if (isCreating) {
      lockApp();
      createWebhookMutation.mutate(formatData(data2), {
        onSuccess(result) {
          toggleNotification({
            type: "success",
            message: { id: "Settings.webhooks.created" }
          });
          replace(`/settings/webhooks/${result.data.id}`);
          unlockApp();
        },
        onError(e) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
          console.log(e);
          unlockApp();
        }
      });
    } else {
      lockApp();
      updateWebhookMutation.mutate(
        { id, body: formatData(data2) },
        {
          onSuccess() {
            queryClient.invalidateQueries(["get-webhook", id]);
            toggleNotification({
              type: "success",
              message: { id: "notification.form.success.fields" }
            });
            unlockApp();
          },
          onError(e) {
            toggleNotification({
              type: "warning",
              message: { id: "notification.error" }
            });
            console.log(e);
            unlockApp();
          }
        }
      );
    }
  };
  const isDraftAndPublishEvents = (0,react.useMemo)(
    () => collectionTypes.some((ct) => ct.options.draftAndPublish === true),
    [collectionTypes]
  );
  if (isLoading || isLoadingForModels) {
    return /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(dist.Main, null, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: "Webhooks" }), /* @__PURE__ */ react.createElement(
    components_WebhookForm,
    {
      ...{
        handleSubmit,
        data,
        triggerWebhook,
        isCreating,
        isTriggering,
        isTriggerIdle,
        triggerResponse: triggerResponse?.data.data,
        isDraftAndPublishEvents
      }
    }
  ));
};
/* harmony default export */ const Webhooks_EditView = (EditView);


/***/ }),

/***/ 3672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95489);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87751);
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40703);




const ProtectedCreateView = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.CheckPagePermissions, { permissions: _permissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"].settings.webhooks.create */ .Z.settings.webhooks.create }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedCreateView);


/***/ }),

/***/ 9311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95489);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87751);
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40703);




const ProtectedEditView = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.CheckPagePermissions, { permissions: _permissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"].settings.webhooks.update */ .Z.settings.webhooks.update }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedEditView);


/***/ })

}]);