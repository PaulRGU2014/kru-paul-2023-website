"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[4121],{

/***/ 6784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Webhooks_ProtectedListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/ListView/reducer.js


const initialState = {
  webhooks: [],
  webhooksToDelete: [],
  webhookToDelete: null,
  loadingWebhooks: true
};
const reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm["default"])(state, (draftState) => {
    switch (action.type) {
      case "GET_DATA_SUCCEEDED": {
        draftState.webhooks = action.data;
        draftState.loadingWebhooks = false;
        break;
      }
      case "TOGGLE_LOADING": {
        draftState.loadingWebhooks = !state.loadingWebhooks;
        break;
      }
      case "SET_WEBHOOK_ENABLED": {
        set_default()(draftState, ["webhooks", ...action.keys], action.value);
        break;
      }
      case "SET_WEBHOOK_TO_DELETE": {
        draftState.webhookToDelete = action.id;
        break;
      }
      case "SET_WEBHOOKS_TO_DELETE": {
        if (action.value) {
          draftState.webhooksToDelete.push(action.id);
        } else {
          draftState.webhooksToDelete = state.webhooksToDelete.filter((id) => id !== action.id);
        }
        break;
      }
      case "SET_ALL_WEBHOOKS_TO_DELETE": {
        if (state.webhooksToDelete.length === 0) {
          draftState.webhooksToDelete = state.webhooks.map((webhook) => webhook.id);
        } else {
          draftState.webhooksToDelete = [];
        }
        break;
      }
      case "WEBHOOKS_DELETED": {
        draftState.webhooks = state.webhooks.filter(
          (webhook) => !state.webhooksToDelete.includes(webhook.id)
        );
        draftState.webhooksToDelete = [];
        break;
      }
      case "WEBHOOK_DELETED": {
        draftState.webhooks = state.webhooks.filter((_, index) => index !== action.index);
        draftState.webhookToDelete = null;
        break;
      }
      default:
        return draftState;
    }
  })
);
/* harmony default export */ const ListView_reducer = (reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/ListView/index.js








const ListView = () => {
  const {
    isLoading,
    allowedActions: { canCreate, canRead, canUpdate, canDelete }
  } = (0,helper_plugin.useRBAC)(permissions/* default.settings.webhooks */.Z.settings.webhooks);
  const toggleNotification = (0,helper_plugin.useNotification)();
  const isMounted = (0,react.useRef)(true);
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showModal, setShowModal] = (0,react.useState)(false);
  const [{ webhooks, webhooksToDelete, webhookToDelete, loadingWebhooks }, dispatch] = (0,react.useReducer)(
    ListView_reducer,
    initialState
  );
  const { notifyStatus } = (0,dist.useNotifyAT)();
  (0,helper_plugin.useFocusWhenNavigate)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const rowsCount = webhooks.length;
  const webhooksToDeleteLength = webhooksToDelete.length;
  const getWebhookIndex = (id) => webhooks.findIndex((webhook) => webhook.id === id);
  (0,react.useEffect)(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  (0,react.useEffect)(() => {
    if (canRead) {
      fetchWebHooks();
    }
  }, [canRead]);
  const fetchWebHooks = async () => {
    try {
      const { data } = await (0,helper_plugin.request)("/admin/webhooks", {
        method: "GET"
      });
      if (isMounted.current) {
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data
        });
        notifyStatus("webhooks have been loaded");
      }
    } catch (err) {
      console.log(err);
      if (isMounted.current) {
        if (err.code !== 20) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
        }
        dispatch({
          type: "TOGGLE_LOADING"
        });
      }
    }
  };
  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleConfirmDelete = () => {
    if (webhookToDelete) {
      handleConfirmDeleteOne();
    } else {
      handleConfirmDeleteAll();
    }
  };
  const handleConfirmDeleteOne = async () => {
    try {
      await (0,helper_plugin.request)(`/admin/webhooks/${webhookToDelete}`, {
        method: "DELETE"
      });
      dispatch({
        type: "WEBHOOK_DELETED",
        index: getWebhookIndex(webhookToDelete)
      });
    } catch (err) {
      if (err.code !== 20) {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
    }
    setShowModal(false);
  };
  const handleConfirmDeleteAll = async () => {
    const body = {
      ids: webhooksToDelete
    };
    try {
      await (0,helper_plugin.request)("/admin/webhooks/batch-delete", {
        method: "POST",
        body
      });
      if (isMounted.current) {
        dispatch({
          type: "WEBHOOKS_DELETED"
        });
      }
    } catch (err) {
      if (isMounted.current) {
        if (err.code !== 20) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
        }
      }
    }
    setShowModal(false);
  };
  const handleDeleteClick = (id) => {
    setShowModal(true);
    if (id !== "all") {
      dispatch({
        type: "SET_WEBHOOK_TO_DELETE",
        id
      });
    }
  };
  const handleEnabledChange = async (value, id) => {
    const webhookIndex = getWebhookIndex(id);
    const initialWebhookProps = webhooks[webhookIndex];
    const keys = [webhookIndex, "isEnabled"];
    const body = {
      ...initialWebhookProps,
      isEnabled: value
    };
    delete body.id;
    try {
      dispatch({
        type: "SET_WEBHOOK_ENABLED",
        keys,
        value
      });
      await (0,helper_plugin.request)(`/admin/webhooks/${id}`, {
        method: "PUT",
        body
      });
    } catch (err) {
      if (isMounted.current) {
        dispatch({
          type: "SET_WEBHOOK_ENABLED",
          keys,
          value: !value
        });
        if (err.code !== 20) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
        }
      }
    }
  };
  const handleSelectAllCheckbox = () => {
    dispatch({
      type: "SET_ALL_WEBHOOKS_TO_DELETE"
    });
  };
  const handleSelectOneCheckbox = (value, id) => {
    dispatch({
      type: "SET_WEBHOOKS_TO_DELETE",
      value,
      id
    });
  };
  const handleGoTo = (to) => {
    push(`${pathname}/${to}`);
  };
  return /* @__PURE__ */ react.createElement(dist.Layout, null, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: "Webhooks" }), /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": isLoading || loadingWebhooks }, /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      title: formatMessage({ id: "Settings.webhooks.title", defaultMessage: "Webhooks" }),
      subtitle: formatMessage({
        id: "Settings.webhooks.list.description",
        defaultMessage: "Get POST changes notifications"
      }),
      primaryAction: canCreate && !loadingWebhooks && /* @__PURE__ */ react.createElement(helper_plugin.LinkButton, { startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null), variant: "default", to: `${pathname}/create`, size: "S" }, formatMessage({
        id: "Settings.webhooks.list.button.add",
        defaultMessage: "Create new webhook"
      }))
    }
  ), webhooksToDeleteLength > 0 && canDelete && /* @__PURE__ */ react.createElement(
    dist.ActionLayout,
    {
      startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "epsilon", textColor: "neutral600" }, formatMessage(
        {
          id: "Settings.webhooks.to.delete",
          defaultMessage: "{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"
        },
        { webhooksToDeleteLength }
      )), /* @__PURE__ */ react.createElement(
        dist.Button,
        {
          onClick: () => handleDeleteClick("all"),
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null),
          size: "L",
          variant: "danger-light"
        },
        formatMessage({
          id: "global.delete",
          defaultMessage: "Delete"
        })
      ))
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, isLoading || loadingWebhooks ? /* @__PURE__ */ react.createElement(dist.Box, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null)) : /* @__PURE__ */ react.createElement(react.Fragment, null, rowsCount > 0 ? /* @__PURE__ */ react.createElement(
    dist.Table,
    {
      colCount: 5,
      rowCount: rowsCount + 1,
      footer: /* @__PURE__ */ react.createElement(
        dist.TFooter,
        {
          onClick: () => canCreate ? handleGoTo("create") : {},
          icon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null)
        },
        formatMessage({
          id: "Settings.webhooks.list.button.add",
          defaultMessage: "Create new webhook"
        })
      )
    },
    /* @__PURE__ */ react.createElement(dist.Thead, null, /* @__PURE__ */ react.createElement(dist.Tr, null, /* @__PURE__ */ react.createElement(dist.Th, null, /* @__PURE__ */ react.createElement(
      dist.BaseCheckbox,
      {
        "aria-label": formatMessage({
          id: "global.select-all-entries",
          defaultMessage: "Select all entries"
        }),
        indeterminate: webhooksToDeleteLength > 0 && webhooksToDeleteLength < rowsCount,
        value: webhooksToDeleteLength === rowsCount,
        onValueChange: handleSelectAllCheckbox
      }
    )), /* @__PURE__ */ react.createElement(dist.Th, { width: "20%" }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "global.name",
      defaultMessage: "Name"
    }))), /* @__PURE__ */ react.createElement(dist.Th, { width: "60%" }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "Settings.webhooks.form.url",
      defaultMessage: "URL"
    }))), /* @__PURE__ */ react.createElement(dist.Th, { width: "20%" }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({
      id: "Settings.webhooks.list.th.status",
      defaultMessage: "Status"
    }))), /* @__PURE__ */ react.createElement(dist.Th, null, /* @__PURE__ */ react.createElement(dist.VisuallyHidden, null, formatMessage({
      id: "Settings.webhooks.list.th.actions",
      defaultMessage: "Actions"
    }))))),
    /* @__PURE__ */ react.createElement(dist.Tbody, null, webhooks.map((webhook) => /* @__PURE__ */ react.createElement(
      dist.Tr,
      {
        key: webhook.id,
        ...(0,helper_plugin.onRowClick)({
          fn: () => handleGoTo(webhook.id),
          condition: canUpdate
        })
      },
      /* @__PURE__ */ react.createElement(dist.Td, { ...helper_plugin.stopPropagation }, /* @__PURE__ */ react.createElement(
        dist.BaseCheckbox,
        {
          "aria-label": `${formatMessage({
            id: "global.select",
            defaultMessage: "Select"
          })} ${webhook.name}`,
          value: webhooksToDelete?.includes(webhook.id),
          onValueChange: (value) => handleSelectOneCheckbox(value, webhook.id),
          id: "select",
          name: "select"
        }
      )),
      /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "semiBold", textColor: "neutral800" }, webhook.name)),
      /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, webhook.url)),
      /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Flex, { ...helper_plugin.stopPropagation }, /* @__PURE__ */ react.createElement(
        dist.Switch,
        {
          onLabel: formatMessage({
            id: "global.enabled",
            defaultMessage: "Enabled"
          }),
          offLabel: formatMessage({
            id: "global.disabled",
            defaultMessage: "Disabled"
          }),
          label: `${webhook.name} ${formatMessage({
            id: "Settings.webhooks.list.th.status",
            defaultMessage: "Status"
          })}`,
          selected: webhook.isEnabled,
          onChange: () => handleEnabledChange(!webhook.isEnabled, webhook.id),
          visibleLabels: true
        }
      ))),
      /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, spacing: 1, ...helper_plugin.stopPropagation }, canUpdate && /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          onClick: () => {
            handleGoTo(webhook.id);
          },
          label: formatMessage({
            id: "Settings.webhooks.events.update",
            defaultMessage: "Update"
          }),
          icon: /* @__PURE__ */ react.createElement(icons_dist.Pencil, null),
          noBorder: true
        }
      ), canDelete && /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          onClick: () => handleDeleteClick(webhook.id),
          label: formatMessage({
            id: "global.delete",
            defaultMessage: "Delete"
          }),
          icon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null),
          noBorder: true,
          id: `delete-${webhook.id}`
        }
      )))
    )))
  ) : /* @__PURE__ */ react.createElement(
    dist.EmptyStateLayout,
    {
      icon: /* @__PURE__ */ react.createElement(icons_dist.EmptyDocuments, { width: "160px" }),
      content: formatMessage({
        id: "Settings.webhooks.list.empty.description",
        defaultMessage: "No webhooks found"
      }),
      action: /* @__PURE__ */ react.createElement(
        dist.Button,
        {
          variant: "secondary",
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null),
          onClick: () => canCreate ? handleGoTo("create") : {}
        },
        formatMessage({
          id: "Settings.webhooks.list.button.add",
          defaultMessage: "Create new webhook"
        })
      )
    }
  )))), /* @__PURE__ */ react.createElement(
    helper_plugin.ConfirmDialog,
    {
      isOpen: showModal,
      onToggleDialog: handleToggleModal,
      onConfirm: handleConfirmDelete
    }
  ));
};
/* harmony default export */ const Webhooks_ListView = (ListView);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/ProtectedListView/index.js




const ProtectedListView = () => /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.settings.webhooks.main */.Z.settings.webhooks.main }, /* @__PURE__ */ react.createElement(Webhooks_ListView, null));
/* harmony default export */ const Webhooks_ProtectedListView = (ProtectedListView);


/***/ })

}]);