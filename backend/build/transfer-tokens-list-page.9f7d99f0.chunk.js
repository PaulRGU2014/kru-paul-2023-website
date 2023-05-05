"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[9600],{

/***/ 56856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Tokens_Table)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Table/DeleteButton/index.js






const DeleteButton = ({ tokenName, onClickDelete, tokenType }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const handleClickDelete = () => {
    setShowConfirmDialog(false);
    trackUsage("willDeleteToken", {
      tokenType
    });
    onClickDelete();
  };
  return /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 1, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ react.createElement(
    dist.IconButton,
    {
      onClick: () => {
        setShowConfirmDialog(true);
      },
      label: formatMessage(
        {
          id: "global.delete-target",
          defaultMessage: "Delete {target}"
        },
        { target: `${tokenName}` }
      ),
      name: "delete",
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null)
    }
  ), /* @__PURE__ */ react.createElement(
    helper_plugin.ConfirmDialog,
    {
      onToggleDialog: () => setShowConfirmDialog(false),
      onConfirm: handleClickDelete,
      isOpen: showConfirmDialog
    }
  ));
};
DeleteButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  onClickDelete: (prop_types_default()).func.isRequired,
  tokenType: (prop_types_default()).string.isRequired
};
/* harmony default export */ const Table_DeleteButton = (DeleteButton);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Table/DefaultButton/index.js






const MESSAGES_MAP = {
  edit: {
    id: "app.component.table.edit",
    defaultMessage: "Edit {target}"
  },
  read: {
    id: "app.component.table.read",
    defaultMessage: "Read {target}"
  }
};
const LinkStyled = (0,styled_components_browser_esm["default"])(helper_plugin.Link)`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.neutral800};
      }
    }
  }
`;
const DefaultButton = ({ tokenName, tokenId, buttonType, children }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    location: { pathname }
  } = (0,react_router_dom_min.useHistory)();
  return /* @__PURE__ */ react.createElement(
    LinkStyled,
    {
      to: `${pathname}/${tokenId}`,
      title: formatMessage(MESSAGES_MAP[buttonType], { target: tokenName })
    },
    children
  );
};
DefaultButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  tokenId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
  buttonType: (prop_types_default()).string,
  children: (prop_types_default()).node.isRequired
};
DefaultButton.defaultProps = {
  buttonType: "edit"
};
/* harmony default export */ const Table_DefaultButton = (DefaultButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Table/UpdateButton/index.js




const UpdateButton = ({ tokenName, tokenId }) => {
  return /* @__PURE__ */ react.createElement(Table_DefaultButton, { tokenName, tokenId }, /* @__PURE__ */ react.createElement(icons_dist.Pencil, null));
};
UpdateButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  tokenId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
};
/* harmony default export */ const Table_UpdateButton = (UpdateButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Table/ReadButton/index.js




const ReadButton = ({ tokenName, tokenId }) => {
  return /* @__PURE__ */ react.createElement(Table_DefaultButton, { tokenName, tokenId, buttonType: "read" }, /* @__PURE__ */ react.createElement(icons_dist.Eye, null));
};
ReadButton.propTypes = {
  tokenName: (prop_types_default()).string.isRequired,
  tokenId: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
};
/* harmony default export */ const Table_ReadButton = (ReadButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Table/index.js








const Table = ({
  permissions,
  headers,
  contentType,
  isLoading,
  tokens,
  onConfirmDelete,
  tokenType
}) => {
  const { canDelete, canUpdate, canRead } = permissions;
  const withBulkActions = canDelete || canUpdate || canRead;
  const [{ query }] = (0,helper_plugin.useQueryParams)();
  const [, sortOrder] = query ? query.sort.split(":") : "ASC";
  const {
    push,
    location: { pathname }
  } = (0,react_router_dom_min.useHistory)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const sortedTokens = tokens.sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);
    return sortOrder === "DESC" ? -comparison : comparison;
  });
  return /* @__PURE__ */ react.createElement(
    helper_plugin.DynamicTable,
    {
      headers,
      contentType,
      rows: tokens,
      withBulkActions,
      isLoading,
      onConfirmDelete
    },
    /* @__PURE__ */ react.createElement(dist.Tbody, null, sortedTokens.map((token) => {
      return /* @__PURE__ */ react.createElement(
        dist.Tr,
        {
          key: token.id,
          ...(0,helper_plugin.onRowClick)({
            fn() {
              trackUsage("willEditTokenFromList", {
                tokenType
              });
              push(`${pathname}/${token.id}`);
            },
            condition: canUpdate
          })
        },
        /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800", fontWeight: "bold" }, token.name)),
        /* @__PURE__ */ react.createElement(dist.Td, { maxWidth: (0,helper_plugin.pxToRem)(250) }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800", ellipsis: true }, token.description)),
        /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, /* @__PURE__ */ react.createElement(helper_plugin.RelativeTime, { timestamp: new Date(token.createdAt) }))),
        /* @__PURE__ */ react.createElement(dist.Td, null, token.lastUsedAt && /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, /* @__PURE__ */ react.createElement(helper_plugin.RelativeTime, { timestamp: new Date(token.lastUsedAt) }))),
        withBulkActions && /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "end" }, canUpdate && /* @__PURE__ */ react.createElement(Table_UpdateButton, { tokenName: token.name, tokenId: token.id }), !canUpdate && canRead && /* @__PURE__ */ react.createElement(Table_ReadButton, { tokenName: token.name, tokenId: token.id }), canDelete && /* @__PURE__ */ react.createElement(
          Table_DeleteButton,
          {
            tokenName: token.name,
            onClickDelete: () => onConfirmDelete(token.id),
            tokenType
          }
        )))
      );
    }))
  );
};
Table.propTypes = {
  tokens: (prop_types_default()).array,
  permissions: prop_types_default().shape({
    canRead: (prop_types_default()).bool,
    canDelete: (prop_types_default()).bool,
    canUpdate: (prop_types_default()).bool
  }).isRequired,
  headers: prop_types_default().arrayOf(
    prop_types_default().shape({
      cellFormatter: (prop_types_default()).func,
      key: (prop_types_default()).string.isRequired,
      metadatas: prop_types_default().shape({
        label: (prop_types_default()).string.isRequired,
        sortable: (prop_types_default()).bool
      }).isRequired,
      name: (prop_types_default()).string.isRequired
    })
  ),
  contentType: (prop_types_default()).string.isRequired,
  isLoading: (prop_types_default()).bool,
  onConfirmDelete: (prop_types_default()).func,
  tokenType: (prop_types_default()).string.isRequired
};
Table.defaultProps = {
  tokens: [],
  headers: [],
  isLoading: false,
  onConfirmDelete() {
  }
};
/* harmony default export */ const Tokens_Table = (Table);


/***/ }),

/***/ 47670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ API_TOKEN_TYPE),
/* harmony export */   "f": () => (/* binding */ TRANSFER_TOKEN_TYPE)
/* harmony export */ });
const API_TOKEN_TYPE = "api-token";
const TRANSFER_TOKEN_TYPE = "transfer-token";


/***/ }),

/***/ 70798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProtectedListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var qs_lib = __webpack_require__(80129);
var qs_lib_default = /*#__PURE__*/__webpack_require__.n(qs_lib);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/ListView/utils/tableHeaders.js
const tableHeaders = [
  {
    name: "name",
    key: "name",
    metadatas: {
      label: {
        id: "Settings.tokens.ListView.headers.name",
        defaultMessage: "Name"
      },
      sortable: true
    }
  },
  {
    name: "description",
    key: "description",
    metadatas: {
      label: {
        id: "Settings.tokens.ListView.headers.description",
        defaultMessage: "Description"
      },
      sortable: false
    }
  },
  {
    name: "createdAt",
    key: "createdAt",
    metadatas: {
      label: {
        id: "Settings.tokens.ListView.headers.createdAt",
        defaultMessage: "Created at"
      },
      sortable: false
    }
  },
  {
    name: "lastUsedAt",
    key: "lastUsedAt",
    metadatas: {
      label: {
        id: "Settings.tokens.ListView.headers.lastUsedAt",
        defaultMessage: "Last used"
      },
      sortable: false
    }
  }
];
/* harmony default export */ const utils_tableHeaders = (tableHeaders);

// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/Table/index.js + 4 modules
var Table = __webpack_require__(56856);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Tokens/constants.js
var constants = __webpack_require__(47670);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/ListView/index.js












const TransferTokenListView = () => {
  (0,helper_plugin.useFocusWhenNavigate)();
  const queryClient = (0,lib.useQueryClient)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const {
    allowedActions: { canCreate, canDelete, canUpdate, canRead }
  } = (0,helper_plugin.useRBAC)(permissions/* default.settings.transfer-tokens */.Z.settings["transfer-tokens"]);
  const { push } = (0,react_router_dom_min.useHistory)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { startSection } = (0,helper_plugin.useGuidedTour)();
  const startSectionRef = (0,react.useRef)(startSection);
  const { get, del } = (0,helper_plugin.useFetchClient)();
  (0,react.useEffect)(() => {
    if (startSectionRef.current) {
      startSectionRef.current("transferTokens");
    }
  }, []);
  (0,react.useEffect)(() => {
    push({ search: qs_lib_default().stringify({ sort: "name:ASC" }, { encode: false }) });
  }, [push]);
  const headers = utils_tableHeaders.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  const {
    data: transferTokens,
    status,
    isFetching
  } = (0,lib.useQuery)(
    ["transfer-tokens"],
    async () => {
      trackUsage("willAccessTokenList", {
        tokenType: constants/* TRANSFER_TOKEN_TYPE */.f
      });
      const {
        data: { data }
      } = await get(`/admin/transfer/tokens`);
      trackUsage("didAccessTokenList", { number: data.length, tokenType: constants/* TRANSFER_TOKEN_TYPE */.f });
      return data;
    },
    {
      enabled: canRead,
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  const isLoading = canRead && (status !== "success" && status !== "error" || status === "success" && isFetching);
  const deleteMutation = (0,lib.useMutation)(
    async (id) => {
      await del(`/admin/transfer/tokens/${id}`);
    },
    {
      async onSuccess() {
        await queryClient.invalidateQueries(["transfer-tokens"]);
      },
      onError(err) {
        if (err?.response?.data?.data) {
          toggleNotification({ type: "warning", message: err.response.data.data });
        } else {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error", defaultMessage: "An error occured" }
          });
        }
      }
    }
  );
  const shouldDisplayDynamicTable = canRead && transferTokens;
  const shouldDisplayNoContent = canRead && !transferTokens && !canCreate;
  const shouldDisplayNoContentWithCreationButton = canRead && !transferTokens && canCreate;
  return /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: "Transfer Tokens" }), /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      title: formatMessage({
        id: "Settings.transferTokens.title",
        defaultMessage: "Transfer Tokens"
      }),
      subtitle: formatMessage({
        id: "Settings.transferTokens.description",
        defaultMessage: '"List of generated transfer tokens"'
        // TODO change this message
      }),
      primaryAction: canCreate ? /* @__PURE__ */ react.createElement(
        helper_plugin.LinkButton,
        {
          "data-testid": "create-transfer-token-button",
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null),
          size: "S",
          onClick: () => trackUsage("willAddTokenFromList", {
            tokenType: constants/* TRANSFER_TOKEN_TYPE */.f
          }),
          to: "/settings/transfer-tokens/create"
        },
        formatMessage({
          id: "Settings.transferTokens.create",
          defaultMessage: "Create new Transfer Token"
        })
      ) : void 0
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, !canRead && /* @__PURE__ */ react.createElement(helper_plugin.NoPermissions, null), shouldDisplayDynamicTable && /* @__PURE__ */ react.createElement(
    Table/* default */.Z,
    {
      permissions: { canRead, canDelete, canUpdate },
      headers,
      contentType: "trasfer-tokens",
      rows: transferTokens,
      isLoading,
      onConfirmDelete: (id) => deleteMutation.mutateAsync(id),
      tokens: transferTokens,
      tokenType: constants/* TRANSFER_TOKEN_TYPE */.f
    }
  ), shouldDisplayNoContentWithCreationButton && /* @__PURE__ */ react.createElement(
    helper_plugin.NoContent,
    {
      content: {
        id: "Settings.transferTokens.addFirstToken",
        defaultMessage: "Add your first Transfer Token"
      },
      action: /* @__PURE__ */ react.createElement(dist.Button, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null) }, formatMessage({
        id: "Settings.transferTokens.addNewToken",
        defaultMessage: "Add new Transfer Token"
      }))
    }
  ), shouldDisplayNoContent && /* @__PURE__ */ react.createElement(
    helper_plugin.NoContent,
    {
      content: {
        id: "Settings.transferTokens.emptyStateLayout",
        defaultMessage: "You don\u2019t have any content yet..."
      }
    }
  )));
};
/* harmony default export */ const ListView = (TransferTokenListView);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/TransferTokens/ProtectedListView/index.js




const ProtectedTransferTokenListView = () => /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.settings.transfer-tokens.main */.Z.settings["transfer-tokens"].main }, /* @__PURE__ */ react.createElement(ListView, null));
/* harmony default export */ const ProtectedListView = (ProtectedTransferTokenListView);


/***/ })

}]);