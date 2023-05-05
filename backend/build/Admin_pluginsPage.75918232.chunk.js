"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[3677],{

/***/ 14928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_InstalledPluginsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchEnabledPlugins/utils/api.js

const fetchEnabledPlugins = async () => {
  const { get } = (0,helper_plugin.getFetchClient)();
  const { data } = await get("/admin/plugins");
  return data;
};


;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchEnabledPlugins/index.js



const useFetchEnabledPlugins = (notifyLoad) => {
  const toggleNotification = (0,helper_plugin.useNotification)();
  return (0,lib.useQuery)("list-enabled-plugins", () => fetchEnabledPlugins(), {
    onSuccess() {
      if (notifyLoad) {
        notifyLoad();
      }
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  });
};
/* harmony default export */ const hooks_useFetchEnabledPlugins = (useFetchEnabledPlugins);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/InstalledPluginsPage/Plugins.js





const Plugins = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { notifyStatus } = (0,dist.useNotifyAT)();
  (0,helper_plugin.useFocusWhenNavigate)();
  const title = formatMessage({
    id: "global.plugins",
    defaultMessage: "Plugins"
  });
  const notifyPluginPageLoad = () => {
    notifyStatus(
      formatMessage(
        {
          id: "app.utils.notify.data-loaded",
          defaultMessage: "The {target} has loaded"
        },
        { target: title }
      )
    );
  };
  const { status, data } = hooks_useFetchEnabledPlugins(notifyPluginPageLoad);
  const isLoading = status !== "success" && status !== "error";
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist.Layout, null, /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": true }, /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null)));
  }
  return /* @__PURE__ */ react.createElement(dist.Layout, null, /* @__PURE__ */ react.createElement(dist.Main, null, /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      title,
      subtitle: formatMessage({
        id: "app.components.ListPluginsPage.description",
        defaultMessage: "List of the installed plugins in the project."
      })
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(dist.Table, { colCount: 2, rowCount: data?.plugins?.length ?? 0 + 1 }, /* @__PURE__ */ react.createElement(dist.Thead, null, /* @__PURE__ */ react.createElement(dist.Tr, null, /* @__PURE__ */ react.createElement(dist.Th, null, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.name",
    defaultMessage: "Name"
  }))), /* @__PURE__ */ react.createElement(dist.Th, null, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.description",
    defaultMessage: "description"
  }))))), /* @__PURE__ */ react.createElement(dist.Tbody, null, data.plugins.map(({ name, displayName, description }) => {
    return /* @__PURE__ */ react.createElement(dist.Tr, { key: name }, /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800", variant: "omega", fontWeight: "bold" }, formatMessage({
      id: `global.plugins.${name}`,
      defaultMessage: displayName
    }))), /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, formatMessage({
      id: `global.plugins.${name}.description`,
      defaultMessage: description
    }))));
  }))))));
};
/* harmony default export */ const InstalledPluginsPage_Plugins = (Plugins);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/InstalledPluginsPage/index.js






const InstalledPluginsPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const title = formatMessage({
    id: "global.plugins",
    defaultMessage: "Plugins"
  });
  return /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.marketplace.main */.Z.marketplace.main }, /* @__PURE__ */ react.createElement(Helmet.Helmet, { title }), /* @__PURE__ */ react.createElement(InstalledPluginsPage_Plugins, null));
};
/* harmony default export */ const pages_InstalledPluginsPage = (InstalledPluginsPage);


/***/ })

}]);