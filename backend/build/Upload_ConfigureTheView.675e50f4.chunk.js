"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[9514],{

/***/ 87532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App_ConfigureTheView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(15537);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/constants.js
var constants = __webpack_require__(49826);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/ConfigureTheView/components/Settings.js






const Settings = ({ sort = "", pageSize = 10, onChange }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(
    dist.Box,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "tableShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    },
    /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4 }, /* @__PURE__ */ react.createElement(dist.GridItem, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
      dist.Select,
      {
        label: formatMessage({
          id: (0,getTrad/* default */.Z)("config.entries.title"),
          defaultMessage: "Entries per page"
        }),
        hint: formatMessage({
          id: (0,getTrad/* default */.Z)("config.entries.note"),
          defaultMessage: "Number of assets displayed by default in the Media Library"
        }),
        onChange: (value) => onChange({ target: { name: "pageSize", value } }),
        name: "pageSize",
        value: pageSize,
        "test-pageSize": pageSize,
        "data-testid": "pageSize-select"
      },
      constants/* pageSizes.map */.ay.map((pageSize2) => /* @__PURE__ */ react.createElement(dist.Option, { "data-testid": `pageSize-option-${pageSize2}`, key: pageSize2, value: pageSize2 }, pageSize2))
    )), /* @__PURE__ */ react.createElement(dist.GridItem, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
      dist.Select,
      {
        label: formatMessage({
          id: (0,getTrad/* default */.Z)("config.sort.title"),
          defaultMessage: "Default sort order"
        }),
        hint: formatMessage({
          id: (0,getTrad/* default */.Z)("config.note"),
          defaultMessage: "Note: You can override this value in the media library."
        }),
        onChange: (value) => onChange({ target: { name: "sort", value } }),
        name: "sort",
        value: sort,
        "test-sort": sort,
        "data-testid": "sort-select"
      },
      constants/* sortOptions.map */.Fo.map((filter) => /* @__PURE__ */ react.createElement(
        dist.Option,
        {
          "data-testid": `sort-option-${filter.value}`,
          key: filter.key,
          value: filter.value
        },
        formatMessage({ id: (0,getTrad/* default */.Z)(filter.key), defaultMessage: `${filter.value}` })
      ))
    )))
  );
};
Settings.propTypes = {
  sort: (prop_types_default()).string.isRequired,
  pageSize: (prop_types_default()).number.isRequired,
  onChange: (prop_types_default()).func.isRequired
};


// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pluginId.js
var pluginId = __webpack_require__(55994);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/ConfigureTheView/state/actionTypes.js

const ON_CHANGE = `${pluginId/* default */.Z}/ON_CHANGE`;
const SET_LOADED = `${pluginId/* default */.Z}/SET_LOADED`;

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/ConfigureTheView/state/init.js
const initialState = {
  initialData: {},
  modifiedData: {}
};
const init = (configData) => {
  return {
    ...initialState,
    initialData: configData,
    modifiedData: configData
  };
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/ConfigureTheView/state/reducer.js





const reducer = (state = initialState, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm["default"])(state, (draftState) => {
    switch (action.type) {
      case ON_CHANGE: {
        set_default()(draftState, ["modifiedData", ...action.keys.split(".")], action.value);
        break;
      }
      case SET_LOADED: {
        const reInitialise = init(get_default()(draftState, ["modifiedData"], {}));
        draftState.initialData = reInitialise.initialData;
        draftState.modifiedData = reInitialise.modifiedData;
        break;
      }
      default:
        return draftState;
    }
  })
);
/* harmony default export */ const state_reducer = (reducer);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/ConfigureTheView/state/actions.js

const onChange = ({ name, value }) => ({
  type: ON_CHANGE,
  keys: name,
  value
});
const setLoaded = () => ({
  type: SET_LOADED
});

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useConfig.js
var useConfig = __webpack_require__(60862);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/ConfigureTheView/index.js














const ConfigureTheView = ({ config }) => {
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { mutateConfig } = (0,useConfig/* useConfig */.Z)();
  const { isLoading: isSubmittingForm } = mutateConfig;
  const [showWarningSubmit, setWarningSubmit] = (0,react.useState)(false);
  const toggleWarningSubmit = () => setWarningSubmit((prevState) => !prevState);
  const [reducerState, dispatch] = (0,react.useReducer)(state_reducer, initialState, () => init(config));
  const { initialData, modifiedData } = reducerState;
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleWarningSubmit();
  };
  const handleConfirm = async () => {
    trackUsage("willEditMediaLibraryConfig");
    await mutateConfig.mutateAsync(modifiedData);
    toggleWarningSubmit();
    dispatch(setLoaded());
    toggleNotification({
      type: "success",
      message: {
        id: "notification.form.success.fields",
        defaultMessage: "Changes saved"
      }
    });
  };
  const handleChange = ({ target: { name, value } }) => {
    dispatch(onChange({ name, value }));
  };
  (0,helper_plugin.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(dist.Layout, null, /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": isSubmittingForm }, /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      navigationAction: /* @__PURE__ */ react.createElement(helper_plugin.Link, { startIcon: /* @__PURE__ */ react.createElement(icons_dist.ArrowLeft, null), to: `/plugins/${pluginId/* default */.Z}`, id: "go-back" }, formatMessage({ id: (0,getTrad/* default */.Z)("config.back"), defaultMessage: "Back" })),
      primaryAction: /* @__PURE__ */ react.createElement(
        dist.Button,
        {
          size: "S",
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.Check, null),
          disabled: isEqual_default()(modifiedData, initialData),
          type: "submit"
        },
        formatMessage({ id: "global.save", defaultMessage: "Save" })
      ),
      subtitle: formatMessage({
        id: (0,getTrad/* default */.Z)("config.subtitle"),
        defaultMessage: "Define the view settings of the media library."
      }),
      title: formatMessage({
        id: (0,getTrad/* default */.Z)("config.title"),
        defaultMessage: "Configure the view - Media Library"
      })
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(
    Settings,
    {
      "data-testid": "settings",
      pageSize: modifiedData.pageSize || "",
      sort: modifiedData.sort || "",
      onChange: handleChange
    }
  )), /* @__PURE__ */ react.createElement(
    helper_plugin.ConfirmDialog,
    {
      bodyText: {
        id: (0,getTrad/* default */.Z)("config.popUpWarning.warning.updateAllSettings"),
        defaultMessage: "This will modify all your settings"
      },
      iconRightButton: /* @__PURE__ */ react.createElement(icons_dist.Check, null),
      isConfirmButtonLoading: isSubmittingForm,
      isOpen: showWarningSubmit,
      onToggleDialog: toggleWarningSubmit,
      onConfirm: handleConfirm,
      variantRightButton: "success-light"
    }
  ))));
};
ConfigureTheView.propTypes = {
  config: prop_types_default().shape({
    pageSize: (prop_types_default()).number,
    sort: (prop_types_default()).string
  }).isRequired
};
/* harmony default export */ const App_ConfigureTheView = (ConfigureTheView);


/***/ })

}]);