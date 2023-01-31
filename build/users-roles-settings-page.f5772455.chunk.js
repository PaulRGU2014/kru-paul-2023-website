(self["webpackChunkproject_kru_2023"] = self["webpackChunkproject_kru_2023"] || []).push([[8853],{

/***/ 20400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Roles)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pluginId.js
var src_pluginId = __webpack_require__(31498);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/permissions.js
var permissions = __webpack_require__(81912);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.js
var ActionLayout = __webpack_require__(36989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js + 2 modules
var Table = __webpack_require__(11057);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js + 1 modules
var Thead = __webpack_require__(63985);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js + 1 modules
var Tr = __webpack_require__(47144);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js + 1 modules
var Cell = __webpack_require__(18374);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(14087);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/match-sorter/dist/match-sorter.cjs.js
var match_sorter_cjs = __webpack_require__(63852);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 2 modules
var utils = __webpack_require__(89031);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/ListPage/utils/api.js

const fetchData = async (toggleNotification, notifyStatus) => {
  try {
    const { data } = await utils/* axiosInstance.get */.be.get((0,utils/* getRequestURL */.Gc)("roles"));
    notifyStatus("The roles have loaded successfully");
    return data;
  } catch (err) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    throw new Error("error");
  }
};
const deleteData = async (id, toggleNotification) => {
  try {
    await utils/* axiosInstance.delete */.be["delete"](`${(0,utils/* getRequestURL */.Gc)("roles")}/${id}`);
  } catch (error) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error", defaultMessage: "An error occured" }
    });
  }
};

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js + 1 modules
var Tbody = __webpack_require__(550);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/ListPage/components/TableBody.js












const TableBody = ({ sortedRoles, canDelete, permissions, setRoleToDelete, onDelete }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const [showConfirmDelete, setShowConfirmDelete] = onDelete;
  const checkCanDeleteRole = (role) => canDelete && !["public", "authenticated"].includes(role.type);
  const handleClickDelete = (id) => {
    setRoleToDelete(id);
    setShowConfirmDelete(!showConfirmDelete);
  };
  const handleClickEdit = (id) => {
    push(`/settings/${src_pluginId/* default */.Z}/roles/${id}`);
  };
  return /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, sortedRoles?.map((role) => /* @__PURE__ */ react.createElement(Tr.Tr, { key: role.name, ...(0,build.onRowClick)({ fn: () => handleClickEdit(role.id) }) }, /* @__PURE__ */ react.createElement(Cell.Td, { width: "20%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, role.name)), /* @__PURE__ */ react.createElement(Cell.Td, { width: "50%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, role.description)), /* @__PURE__ */ react.createElement(Cell.Td, { width: "30%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, `${role.nb_users} ${formatMessage({
    id: "global.users",
    defaultMessage: "users"
  }).toLowerCase()}`)), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end", ...build.stopPropagation }, /* @__PURE__ */ react.createElement(build.CheckPermissions, { permissions: permissions.updateRole }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => handleClickEdit(role.id),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
      label: formatMessage(
        { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
        { target: `${role.name}` }
      )
    }
  )), checkCanDeleteRole(role) && /* @__PURE__ */ react.createElement(build.CheckPermissions, { permissions: permissions.deleteRole }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => handleClickDelete(role.id),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(Trash["default"], null),
      label: formatMessage(
        { id: "global.delete-target", defaultMessage: "Delete {target}" },
        { target: `${role.name}` }
      )
    }
  )))))));
};
/* harmony default export */ const components_TableBody = (TableBody);
TableBody.defaultProps = {
  canDelete: false
};
TableBody.propTypes = {
  onDelete: (prop_types_default()).array.isRequired,
  permissions: (prop_types_default()).object.isRequired,
  setRoleToDelete: (prop_types_default()).func.isRequired,
  sortedRoles: (prop_types_default()).array.isRequired,
  canDelete: (prop_types_default()).bool
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/ListPage/index.js



















const RoleListPage = () => {
  const { trackUsage } = (0,build.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const toggleNotification = (0,build.useNotification)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.G)();
  const [{ query }] = (0,build.useQueryParams)();
  const _q = query?._q || "";
  const [showConfirmDelete, setShowConfirmDelete] = (0,react.useState)(false);
  const [isConfirmButtonLoading, setIsConfirmButtonLoading] = (0,react.useState)(false);
  const [roleToDelete, setRoleToDelete] = (0,react.useState)();
  (0,build.useFocusWhenNavigate)();
  const queryClient = (0,lib.useQueryClient)();
  const updatePermissions = (0,react.useMemo)(() => {
    return {
      create: permissions/* default.createRole */.Z.createRole,
      read: permissions/* default.readRoles */.Z.readRoles,
      update: permissions/* default.updateRole */.Z.updateRole,
      delete: permissions/* default.deleteRole */.Z.deleteRole
    };
  }, []);
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canRead, canDelete }
  } = (0,build.useRBAC)(updatePermissions);
  const {
    isLoading: isLoadingForData,
    data: { roles },
    isFetching
  } = (0,lib.useQuery)("get-roles", () => fetchData(toggleNotification, notifyStatus), {
    initialData: {},
    enabled: canRead
  });
  const isLoading = isLoadingForData || isFetching;
  const handleNewRoleClick = () => {
    trackUsage("willCreateRole");
    push(`/settings/${src_pluginId/* default */.Z}/roles/new`);
  };
  const handleShowConfirmDelete = () => {
    setShowConfirmDelete(!showConfirmDelete);
  };
  const emptyLayout = {
    roles: {
      id: (0,utils/* getTrad */.OB)("Roles.empty"),
      defaultMessage: "You don't have any roles yet."
    },
    search: {
      id: (0,utils/* getTrad */.OB)("Roles.empty.search"),
      defaultMessage: "No roles match the search."
    }
  };
  const pageTitle = formatMessage({
    id: "global.roles",
    defaultMessage: "Roles"
  });
  const deleteMutation = (0,lib.useMutation)((id) => deleteData(id, toggleNotification), {
    async onSuccess() {
      await queryClient.invalidateQueries("get-roles");
    }
  });
  const handleConfirmDelete = async () => {
    setIsConfirmButtonLoading(true);
    await deleteMutation.mutateAsync(roleToDelete);
    setShowConfirmDelete(!showConfirmDelete);
    setIsConfirmButtonLoading(false);
  };
  const sortedRoles = (0,match_sorter_cjs/* default */.ZP)(roles || [], _q, { keys: ["name", "description"] });
  const emptyContent = _q && !sortedRoles.length ? "search" : "roles";
  const colCount = 4;
  const rowCount = (roles?.length || 0) + 1;
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: pageTitle }), /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: "global.roles",
        defaultMessage: "Roles"
      }),
      subtitle: formatMessage({
        id: "Settings.roles.list.description",
        defaultMessage: "List of roles"
      }),
      primaryAction: /* @__PURE__ */ react.createElement(build.CheckPermissions, { permissions: permissions/* default.createRole */.Z.createRole }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleNewRoleClick, startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), size: "S" }, formatMessage({
        id: (0,utils/* getTrad */.OB)("List.button.roles"),
        defaultMessage: "Add new role"
      })))
    }
  ), /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
    {
      startActions: /* @__PURE__ */ react.createElement(
        build.SearchURLQuery,
        {
          label: formatMessage({
            id: "app.component.search.label",
            defaultMessage: "Search"
          })
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, !canRead && /* @__PURE__ */ react.createElement(build.NoPermissions, null), (isLoading || isLoadingForPermissions) && /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null), canRead && sortedRoles && sortedRoles?.length ? /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount, rowCount }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.description",
    defaultMessage: "Description"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "global.users",
    defaultMessage: "Users"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
    id: "global.actions",
    defaultMessage: "Actions"
  }))))), /* @__PURE__ */ react.createElement(
    components_TableBody,
    {
      sortedRoles,
      canDelete,
      permissions: permissions/* default */.Z,
      setRoleToDelete,
      onDelete: [showConfirmDelete, setShowConfirmDelete]
    }
  )) : /* @__PURE__ */ react.createElement(build.EmptyStateLayout, { content: emptyLayout[emptyContent] })), /* @__PURE__ */ react.createElement(
    build.ConfirmDialog,
    {
      isConfirmButtonLoading,
      onConfirm: handleConfirmDelete,
      onToggleDialog: handleShowConfirmDelete,
      isOpen: showConfirmDelete
    }
  )));
};
/* harmony default export */ const ListPage = (RoleListPage);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/ProtectedListPage/index.js




const ProtectedRolesListPage = () => {
  return /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.accessRoles */.Z.accessRoles }, /* @__PURE__ */ react.createElement(ListPage, null));
};
/* harmony default export */ const ProtectedListPage = (ProtectedRolesListPage);

// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.js + 1 modules
var Textarea = __webpack_require__(64256);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(84757);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/contexts/UsersPermissionsContext/index.js


const UsersPermissions = (0,react.createContext)({});
const UsersPermissionsProvider = ({ children, value }) => {
  return /* @__PURE__ */ react.createElement(UsersPermissions.Provider, { value }, children);
};
const useUsersPermissions = () => (0,react.useContext)(UsersPermissions);
UsersPermissionsProvider.propTypes = {
  children: (prop_types_default()).node.isRequired,
  value: (prop_types_default()).object.isRequired
};


// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/lodash/map.js
var map = __webpack_require__(35161);
var map_default = /*#__PURE__*/__webpack_require__.n(map);
// EXTERNAL MODULE: ./node_modules/lodash/tail.js
var tail = __webpack_require__(13217);
var tail_default = /*#__PURE__*/__webpack_require__.n(tail);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/BoundRoute/getMethodColor.js
const getMethodColor = (verb) => {
  switch (verb) {
    case "POST": {
      return {
        text: "success600",
        border: "success200",
        background: "success100"
      };
    }
    case "GET": {
      return {
        text: "secondary600",
        border: "secondary200",
        background: "secondary100"
      };
    }
    case "PUT": {
      return {
        text: "warning600",
        border: "warning200",
        background: "warning100"
      };
    }
    case "DELETE": {
      return {
        text: "danger600",
        border: "danger200",
        background: "danger100"
      };
    }
    default: {
      return {
        text: "neutral600",
        border: "neutral200",
        background: "neutral100"
      };
    }
  }
};
/* harmony default export */ const BoundRoute_getMethodColor = (getMethodColor);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/BoundRoute/index.js










const MethodBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  margin: -1px;
  border-radius: ${({ theme }) => theme.spaces[1]} 0 0 ${({ theme }) => theme.spaces[1]};
`;
function BoundRoute({ route }) {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { method, handler: title, path } = route;
  const formattedRoute = path ? tail_default()(path.split("/")) : [];
  const [controller = "", action = ""] = title ? title.split(".") : [];
  const colors = BoundRoute_getMethodColor(route.method);
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
    id: "users-permissions.BoundRoute.title",
    defaultMessage: "Bound route to"
  }), "\xA0", /* @__PURE__ */ react.createElement("span", null, controller), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", textColor: "primary600" }, ".", action)), /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, hasRadius: true, background: "neutral0", borderColor: "neutral200", spacing: 0 }, /* @__PURE__ */ react.createElement(MethodBox, { background: colors.background, borderColor: colors.border, padding: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: colors.text }, method)), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 2, paddingRight: 2 }, map_default()(formattedRoute, (value) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { key: value, textColor: value.includes(":") ? "neutral600" : "neutral900" }, "/", value)))));
}
BoundRoute.defaultProps = {
  route: {
    handler: "Nocontroller.error",
    method: "GET",
    path: "/there-is-no-path"
  }
};
BoundRoute.propTypes = {
  route: prop_types_default().shape({
    handler: (prop_types_default()).string,
    method: (prop_types_default()).string,
    path: (prop_types_default()).string
  })
};
/* harmony default export */ const components_BoundRoute = (BoundRoute);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Policies/index.js








const Policies = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { selectedAction, routes } = useUsersPermissions();
  const path = (0,lodash.without)(selectedAction.split("."), "controllers");
  const controllerRoutes = (0,lodash.get)(routes, path[0]);
  const pathResolved = path.slice(1).join(".");
  const displayedRoutes = (0,lodash.isEmpty)(controllerRoutes) ? [] : controllerRoutes.filter((o) => o.handler.endsWith(pathResolved));
  return /* @__PURE__ */ react.createElement(
    GridItem/* GridItem */.P,
    {
      col: 5,
      background: "neutral150",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7,
      style: { minHeight: "100%" }
    },
    selectedAction ? /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, displayedRoutes.map((route, key) => (
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ react.createElement(components_BoundRoute, { key, route })
    ))) : /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h3" }, formatMessage({
      id: "users-permissions.Policies.header.title",
      defaultMessage: "Advanced settings"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p", textColor: "neutral600" }, formatMessage({
      id: "users-permissions.Policies.header.hint",
      defaultMessage: "Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"
    })))
  );
};
/* harmony default export */ const components_Policies = (Policies);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(48734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js + 1 modules
var AccordionToggle = __webpack_require__(74756);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.js
var AccordionContent = __webpack_require__(63081);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/formatPluginName.js

function formatPluginName(pluginSlug) {
  switch (pluginSlug) {
    case "application":
      return "Application";
    case "plugin::content-manager":
      return "Content manager";
    case "plugin::content-type-builder":
      return "Content types builder";
    case "plugin::documentation":
      return "Documentation";
    case "plugin::email":
      return "Email";
    case "plugin::i18n":
      return "i18n";
    case "plugin::upload":
      return "Upload";
    case "plugin::users-permissions":
      return "Users-permissions";
    default:
      return upperFirst_default()(pluginSlug.replace("api::", "").replace("plugin::", ""));
  }
}
/* harmony default export */ const utils_formatPluginName = (formatPluginName);

// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(89734);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(36213);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.js
var Cog = __webpack_require__(78114);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/PermissionRow/CheckboxWrapper.js


const activeCheckboxWrapperStyles = styled_components_browser_esm.css`
  background: ${(props) => props.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`;
const CheckboxWrapper = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${(props) => props.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${(props) => props.isActive && activeCheckboxWrapperStyles}
  &:hover {
    ${activeCheckboxWrapperStyles}
  }
`;
/* harmony default export */ const PermissionRow_CheckboxWrapper = (CheckboxWrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/PermissionRow/SubCategory.js













const Border = styled_components_browser_esm["default"].div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
`;
const SubCategory = ({ subCategory }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { onChange, onChangeSelectAll, onSelectedAction, selectedAction, modifiedData } = useUsersPermissions();
  const currentScopedModifiedData = (0,react.useMemo)(() => {
    return (0,lodash.get)(modifiedData, subCategory.name, {});
  }, [modifiedData, subCategory]);
  const hasAllActionsSelected = (0,react.useMemo)(() => {
    return Object.values(currentScopedModifiedData).every((action) => action.enabled === true);
  }, [currentScopedModifiedData]);
  const hasSomeActionsSelected = (0,react.useMemo)(() => {
    return Object.values(currentScopedModifiedData).some((action) => action.enabled === true) && !hasAllActionsSelected;
  }, [currentScopedModifiedData, hasAllActionsSelected]);
  const handleChangeSelectAll = (0,react.useCallback)(
    ({ target: { name } }) => {
      onChangeSelectAll({ target: { name, value: !hasAllActionsSelected } });
    },
    [hasAllActionsSelected, onChangeSelectAll]
  );
  const isActionSelected = (0,react.useCallback)(
    (actionName) => {
      return selectedAction === actionName;
    },
    [selectedAction]
  );
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "space-between", alignItems: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingRight: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, subCategory.label)), /* @__PURE__ */ react.createElement(Border, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(
    Checkbox/* Checkbox */.X,
    {
      name: subCategory.name,
      value: hasAllActionsSelected,
      onValueChange: (value) => handleChangeSelectAll({ target: { name: subCategory.name, value } }),
      indeterminate: hasSomeActionsSelected
    },
    formatMessage({ id: "app.utils.select-all", defaultMessage: "Select all" })
  ))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { paddingTop: 6, paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 2, style: { flex: 1 } }, subCategory.actions.map((action) => {
    const name = `${action.name}.enabled`;
    return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, key: action.name }, /* @__PURE__ */ react.createElement(PermissionRow_CheckboxWrapper, { isActive: isActionSelected(action.name), padding: 2, hasRadius: true }, /* @__PURE__ */ react.createElement(
      Checkbox/* Checkbox */.X,
      {
        value: (0,lodash.get)(modifiedData, name, false),
        name,
        onValueChange: (value) => onChange({ target: { name, value } })
      },
      action.label
    ), /* @__PURE__ */ react.createElement(
      "button",
      {
        type: "button",
        "data-testid": "action-cog",
        onClick: () => onSelectedAction(action.name),
        style: { display: "inline-flex", alignItems: "center" }
      },
      /* @__PURE__ */ react.createElement(Cog/* default */.Z, null)
    )));
  }))));
};
SubCategory.propTypes = {
  subCategory: (prop_types_default()).object.isRequired
};
/* harmony default export */ const PermissionRow_SubCategory = (SubCategory);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/PermissionRow/index.js





const PermissionRow = ({ name, permissions }) => {
  const subCategories = (0,react.useMemo)(() => {
    return sortBy_default()(
      Object.values(permissions.controllers).reduce((acc, curr, index) => {
        const currentName = `${name}.controllers.${Object.keys(permissions.controllers)[index]}`;
        const actions = sortBy_default()(
          Object.keys(curr).reduce((acc2, current) => {
            return [
              ...acc2,
              {
                ...curr[current],
                label: current,
                name: `${currentName}.${current}`
              }
            ];
          }, []),
          "label"
        );
        return [
          ...acc,
          {
            actions,
            label: Object.keys(permissions.controllers)[index],
            name: currentName
          }
        ];
      }, []),
      "label"
    );
  }, [name, permissions]);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 6 }, subCategories.map((subCategory) => /* @__PURE__ */ react.createElement(PermissionRow_SubCategory, { key: subCategory.name, subCategory })));
};
PermissionRow.propTypes = {
  name: (prop_types_default()).string.isRequired,
  permissions: (prop_types_default()).object.isRequired
};
/* harmony default export */ const Permissions_PermissionRow = (PermissionRow);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/init.js
const init_init = (initialState, permissions) => {
  const collapses = Object.keys(permissions).sort().map((name) => ({ name, isOpen: false }));
  return { ...initialState, collapses };
};
/* harmony default export */ const Permissions_init = (init_init);

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60612);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/reducer.js

const reducer_initialState = {
  collapses: []
};
const reducer_reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm["default"])(state, (draftState) => {
    switch (action.type) {
      case "TOGGLE_COLLAPSE": {
        draftState.collapses = state.collapses.map((collapse, index) => {
          if (index === action.index) {
            return { ...collapse, isOpen: !collapse.isOpen };
          }
          return { ...collapse, isOpen: false };
        });
        break;
      }
      default:
        return draftState;
    }
  })
);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/Permissions/index.js










const Permissions = () => {
  const { modifiedData } = useUsersPermissions();
  const { formatMessage } = (0,react_intl.useIntl)();
  const [{ collapses }, dispatch] = (0,react.useReducer)(
    reducer_reducer,
    reducer_initialState,
    (state) => Permissions_init(state, modifiedData)
  );
  const handleToggle = (index) => dispatch({
    type: "TOGGLE_COLLAPSE",
    index
  });
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 1 }, collapses.map((collapse, index) => /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.U,
    {
      expanded: collapse.isOpen,
      onToggle: () => handleToggle(index),
      key: collapse.name,
      variant: index % 2 === 0 ? "secondary" : void 0
    },
    /* @__PURE__ */ react.createElement(
      AccordionToggle/* AccordionToggle */.B,
      {
        title: utils_formatPluginName(collapse.name),
        description: formatMessage(
          {
            id: "users-permissions.Plugin.permissions.plugins.description",
            defaultMessage: "Define all allowed actions for the {name} plugin."
          },
          { name: collapse.name }
        ),
        variant: index % 2 ? "primary" : "secondary"
      }
    ),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Permissions_PermissionRow, { permissions: modifiedData[collapse.name], name: collapse.name })))
  )));
};
/* harmony default export */ const components_Permissions = (Permissions);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/UsersPermissions/reducer.js


const UsersPermissions_reducer_initialState = {
  initialData: {},
  modifiedData: {},
  routes: {},
  selectedAction: "",
  policies: []
};
const UsersPermissions_reducer_reducer = (state, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE": {
      const keysLength = action.keys.length;
      const isChangingCheckbox = action.keys[keysLength - 1] === "enabled";
      if (action.value && isChangingCheckbox) {
        const selectedAction = (0,lodash.take)(action.keys, keysLength - 1).join(".");
        draftState.selectedAction = selectedAction;
      }
      (0,lodash.set)(draftState, ["modifiedData", ...action.keys], action.value);
      break;
    }
    case "ON_CHANGE_SELECT_ALL": {
      const pathToValue = ["modifiedData", ...action.keys];
      const oldValues = (0,lodash.get)(state, pathToValue, {});
      const updatedValues = Object.keys(oldValues).reduce((acc, current) => {
        acc[current] = { ...oldValues[current], enabled: action.value };
        return acc;
      }, {});
      (0,lodash.set)(draftState, pathToValue, updatedValues);
      break;
    }
    case "ON_RESET": {
      draftState.modifiedData = state.initialData;
      break;
    }
    case "ON_SUBMIT_SUCCEEDED": {
      draftState.initialData = state.modifiedData;
      break;
    }
    case "SELECT_ACTION": {
      const { actionToSelect } = action;
      draftState.selectedAction = actionToSelect === state.selectedAction ? "" : actionToSelect;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const UsersPermissions_reducer = (UsersPermissions_reducer_reducer);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/UsersPermissions/init.js
const UsersPermissions_init_init = (state, permissions, routes) => {
  return {
    ...state,
    initialData: permissions,
    modifiedData: permissions,
    routes
  };
};
/* harmony default export */ const UsersPermissions_init = (UsersPermissions_init_init);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/UsersPermissions/index.js












const UsersPermissions_UsersPermissions = (0,react.forwardRef)(({ permissions, routes }, ref) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [state, dispatch] = (0,react.useReducer)(
    UsersPermissions_reducer,
    UsersPermissions_reducer_initialState,
    (state2) => UsersPermissions_init(state2, permissions, routes)
  );
  (0,react.useImperativeHandle)(ref, () => ({
    getPermissions() {
      return {
        permissions: state.modifiedData
      };
    },
    resetForm() {
      dispatch({ type: "ON_RESET" });
    },
    setFormAfterSubmit() {
      dispatch({ type: "ON_SUBMIT_SUCCEEDED" });
    }
  }));
  const handleChange = ({ target: { name, value } }) => dispatch({
    type: "ON_CHANGE",
    keys: name.split("."),
    value: value === "empty__string_value" ? "" : value
  });
  const handleChangeSelectAll = ({ target: { name, value } }) => dispatch({
    type: "ON_CHANGE_SELECT_ALL",
    keys: name.split("."),
    value
  });
  const handleSelectedAction = (actionToSelect) => dispatch({
    type: "SELECT_ACTION",
    actionToSelect
  });
  const providerValue = {
    ...state,
    onChange: handleChange,
    onChangeSelectAll: handleChangeSelectAll,
    onSelectedAction: handleSelectedAction
  };
  return /* @__PURE__ */ react.createElement(UsersPermissionsProvider, { value: providerValue }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 0, shadow: "filterShadow", hasRadius: true, background: "neutral0" }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 7, paddingTop: 6, paddingBottom: 6, paddingLeft: 7, paddingRight: 7 }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 6 }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
    id: (0,getTrad/* default */.Z)("Plugins.header.title"),
    defaultMessage: "Permissions"
  })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "p", textColor: "neutral600" }, formatMessage({
    id: (0,getTrad/* default */.Z)("Plugins.header.description"),
    defaultMessage: "Only actions bound by a route are listed below."
  }))), /* @__PURE__ */ react.createElement(components_Permissions, null))), /* @__PURE__ */ react.createElement(components_Policies, null)));
});
UsersPermissions_UsersPermissions.propTypes = {
  permissions: (prop_types_default()).object.isRequired,
  routes: (prop_types_default()).object.isRequired
};
/* harmony default export */ const components_UsersPermissions = ((0,react.memo)(UsersPermissions_UsersPermissions));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/useForm/reducer.js

const useForm_reducer_initialState = {
  isLoading: true,
  modifiedData: {}
};
const useForm_reducer_reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  produce(state, (draftState) => {
    switch (action.type) {
      case "GET_DATA": {
        draftState.isLoading = true;
        draftState.modifiedData = {};
        break;
      }
      case "GET_DATA_SUCCEEDED": {
        draftState.isLoading = false;
        draftState.modifiedData = action.data;
        break;
      }
      case "GET_DATA_ERROR": {
        draftState.isLoading = true;
        break;
      }
      case "ON_SUBMIT_SUCCEEDED": {
        draftState.modifiedData = action.data;
        break;
      }
      default: {
        return draftState;
      }
    }
  })
);
/* harmony default export */ const useForm_reducer = ((/* unused pure expression or super */ null && (useForm_reducer_reducer)));


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/useForm/index.js
/* provided dependency */ var console = __webpack_require__(25108);




const useUserForm = (endPoint, permissions) => {
  const { isLoading: isLoadingForPermissions, allowedActions } = useRBAC(permissions);
  const [{ isLoading, modifiedData }, dispatch] = useReducer(reducer, initialState);
  const toggleNotification = useNotification();
  const isMounted = useRef(true);
  const abortController = new AbortController();
  const { signal } = abortController;
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({
          type: "GET_DATA"
        });
        const data = await request(getRequestURL(endPoint), { method: "GET", signal });
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data
        });
      } catch (err) {
        if (isMounted.current) {
          dispatch({
            type: "GET_DATA_ERROR"
          });
          console.error(err);
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
        }
      }
    };
    if (!isLoadingForPermissions) {
      getData();
    }
    return () => {
      abortController.abort();
      isMounted.current = false;
    };
  }, [isLoadingForPermissions, endPoint]);
  const dispatchSubmitSucceeded = useCallback((data) => {
    dispatch({
      type: "ON_SUBMIT_SUCCEEDED",
      data
    });
  }, []);
  return {
    allowedActions,
    dispatchSubmitSucceeded,
    isLoading,
    isLoadingForPermissions,
    modifiedData
  };
};
/* harmony default export */ const useForm = ((/* unused pure expression or super */ null && (useUserForm)));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/useRolesList/reducer.js

const useRolesList_reducer_initialState = {
  roles: [],
  isLoading: true
};
const useRolesList_reducer_reducer = (state, action) => produce(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA": {
      draftState.isLoading = true;
      draftState.roles = [];
      break;
    }
    case "GET_DATA_SUCCEEDED": {
      draftState.roles = action.data;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useRolesList_reducer = ((/* unused pure expression or super */ null && (useRolesList_reducer_reducer)));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/useRolesList/index.js






const useRolesList = (shouldFetchData = true) => {
  const [{ roles, isLoading }, dispatch] = useReducer(
    reducer,
    initialState,
    () => init(initialState, shouldFetchData)
  );
  const toggleNotification = useNotification();
  const isMounted = useRef(true);
  const abortController = new AbortController();
  const { signal } = abortController;
  useEffect(() => {
    if (shouldFetchData) {
      fetchRolesList();
    }
    return () => {
      abortController.abort();
      isMounted.current = false;
    };
  }, [shouldFetchData]);
  const fetchRolesList = async () => {
    try {
      dispatch({
        type: "GET_DATA"
      });
      const { roles: roles2 } = await request(`/${pluginId}/roles`, { method: "GET", signal });
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        data: roles2
      });
    } catch (err) {
      const message = get(err, ["response", "payload", "message"], "An error occured");
      if (isMounted.current) {
        dispatch({
          type: "GET_DATA_ERROR"
        });
        if (message !== "Forbidden") {
          toggleNotification({
            type: "warning",
            message
          });
        }
      }
    }
  };
  return { roles, isLoading, getData: fetchRolesList };
};
/* harmony default export */ const hooks_useRolesList = ((/* unused pure expression or super */ null && (useRolesList)));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/usePlugins/init.js
const usePlugins_init_init = (initialState, shouldFetchData) => {
  return { ...initialState, isLoading: shouldFetchData };
};
/* harmony default export */ const usePlugins_init = (usePlugins_init_init);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/axiosInstance.js
var axiosInstance = __webpack_require__(46979);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/usePlugins/reducer.js

const usePlugins_reducer_initialState = {
  permissions: {},
  routes: {},
  isLoading: true
};
const usePlugins_reducer_reducer = (state, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA": {
      draftState.isLoading = true;
      draftState.permissions = {};
      draftState.routes = {};
      break;
    }
    case "GET_DATA_SUCCEEDED": {
      draftState.permissions = action.permissions;
      draftState.routes = action.routes;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const usePlugins_reducer = (usePlugins_reducer_reducer);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/usePlugins/index.js








const usePlugins = (shouldFetchData = true) => {
  const toggleNotification = (0,build.useNotification)();
  const [{ permissions, routes, isLoading }, dispatch] = (0,react.useReducer)(
    usePlugins_reducer,
    usePlugins_reducer_initialState,
    () => usePlugins_init(usePlugins_reducer_initialState, shouldFetchData)
  );
  const fetchPlugins = (0,react.useCallback)(async () => {
    try {
      dispatch({
        type: "GET_DATA"
      });
      const [{ permissions: permissions2 }, { routes: routes2 }] = await Promise.all(
        [`/${src_pluginId/* default */.Z}/permissions`, `/${src_pluginId/* default */.Z}/routes`].map(async (endpoint) => {
          const res = await axiosInstance/* default.get */.Z.get(endpoint);
          return res.data;
        })
      );
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        permissions: (0,utils/* cleanPermissions */.YX)(permissions2),
        routes: routes2
      });
    } catch (err) {
      const message = (0,lodash.get)(err, ["response", "payload", "message"], "An error occured");
      dispatch({
        type: "GET_DATA_ERROR"
      });
      if (message !== "Forbidden") {
        toggleNotification({
          type: "warning",
          message
        });
      }
    }
  }, [toggleNotification]);
  (0,react.useEffect)(() => {
    if (shouldFetchData) {
      fetchPlugins();
    }
  }, [fetchPlugins, shouldFetchData]);
  return {
    permissions,
    routes,
    getData: fetchPlugins,
    isLoading
  };
};
/* harmony default export */ const hooks_usePlugins = (usePlugins);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/useFetchRole/reducer.js

const useFetchRole_reducer_initialState = {
  role: {},
  isLoading: true
};
const useFetchRole_reducer_reducer = (state, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA_SUCCEEDED": {
      draftState.role = action.role;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      break;
    }
    case "ON_SUBMIT_SUCCEEDED": {
      draftState.role.name = action.name;
      draftState.role.description = action.description;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useFetchRole_reducer = (useFetchRole_reducer_reducer);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/useFetchRole/index.js
/* provided dependency */ var useFetchRole_console = __webpack_require__(25108);





const useFetchRole = (id) => {
  const [state, dispatch] = (0,react.useReducer)(useFetchRole_reducer, useFetchRole_reducer_initialState);
  const toggleNotification = (0,build.useNotification)();
  const isMounted = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    isMounted.current = true;
    if (id) {
      fetchRole(id);
    } else {
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        role: {}
      });
    }
    return () => isMounted.current = false;
  }, [id]);
  const fetchRole = async (roleId) => {
    try {
      const {
        data: { role }
      } = await axiosInstance/* default.get */.Z.get(`/${src_pluginId/* default */.Z}/roles/${roleId}`);
      if (isMounted.current) {
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          role
        });
      }
    } catch (err) {
      useFetchRole_console.error(err);
      dispatch({
        type: "GET_DATA_ERROR"
      });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  };
  const handleSubmitSucceeded = (0,react.useCallback)((data) => {
    dispatch({
      type: "ON_SUBMIT_SUCCEEDED",
      ...data
    });
  }, []);
  return { ...state, onSubmitSucceeded: handleSubmitSucceeded };
};
/* harmony default export */ const hooks_useFetchRole = (useFetchRole);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/hooks/index.js





// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/EditPage/utils/schema.js


const schema = yup_lib/* object */.Ry().shape({
  name: yup_lib/* string */.Z_().required(build.translatedErrors.required),
  description: yup_lib/* string */.Z_().required(build.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/EditPage/index.js
/* provided dependency */ var EditPage_console = __webpack_require__(25108);






















const EditPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const toggleNotification = (0,build.useNotification)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const {
    params: { id }
  } = (0,react_router_dom_min.useRouteMatch)(`/settings/${src_pluginId/* default */.Z}/roles/:id`);
  const { isLoading: isLoadingPlugins, routes } = hooks_usePlugins();
  const { role, onSubmitSucceeded, isLoading: isLoadingRole } = hooks_useFetchRole(id);
  const permissionsRef = (0,react.useRef)();
  const handleEditRoleSubmit = async (data) => {
    lockApp();
    setIsSubmitting(true);
    try {
      const permissions = permissionsRef.current.getPermissions();
      await axiosInstance/* default.put */.Z.put(`/${src_pluginId/* default */.Z}/roles/${id}`, { ...data, ...permissions, users: [] });
      onSubmitSucceeded({ name: data.name, description: data.description });
      toggleNotification({
        type: "success",
        message: {
          id: (0,getTrad/* default */.Z)("Settings.roles.edited"),
          defaultMessage: "Role edited"
        }
      });
    } catch (err) {
      EditPage_console.error(err);
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred"
        }
      });
    }
    setIsSubmitting(false);
    unlockApp();
  };
  if (isLoadingRole) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    dist.Formik,
    {
      enableReinitialize: true,
      initialValues: { name: role.name, description: role.description },
      onSubmit: handleEditRoleSubmit,
      validationSchema: utils_schema
    },
    ({ handleSubmit, values, handleChange, errors }) => /* @__PURE__ */ react.createElement(build.Form, { noValidate: true, onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: !isLoadingPlugins && /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            disabled: role.code === "strapi-super-admin",
            type: "submit",
            loading: isSubmitting,
            startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null)
          },
          formatMessage({
            id: "global.save",
            defaultMessage: "Save"
          })
        ),
        title: role.name,
        subtitle: role.description,
        navigationAction: /* @__PURE__ */ react.createElement(build.Link, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/settings/users-permissions/roles" }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        }))
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 7 }, /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        background: "neutral0",
        hasRadius: true,
        shadow: "filterShadow",
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 7,
        paddingRight: 7
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
        id: (0,getTrad/* default */.Z)("EditPage.form.roles"),
        defaultMessage: "Role details"
      })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
        TextInput/* TextInput */.o,
        {
          name: "name",
          value: values.name || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.name",
            defaultMessage: "Name"
          }),
          error: errors.name ? formatMessage({ id: errors.name, defaultMessage: "Invalid value" }) : null
        }
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
        Textarea/* Textarea */.g,
        {
          name: "description",
          value: values.description || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.description",
            defaultMessage: "Description"
          }),
          error: errors.description ? formatMessage({
            id: errors.description,
            defaultMessage: "Invalid value"
          }) : null
        }
      ))))
    ), !isLoadingPlugins && /* @__PURE__ */ react.createElement(
      components_UsersPermissions,
      {
        ref: permissionsRef,
        permissions: role.permissions,
        routes
      }
    ))))
  ));
};
/* harmony default export */ const Roles_EditPage = (EditPage);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/ProtectedEditPage/index.js




const ProtectedRolesEditPage = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.updateRole */.Z.updateRole }, /* @__PURE__ */ react.createElement(Roles_EditPage, null));
/* harmony default export */ const ProtectedEditPage = (ProtectedRolesEditPage);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/CreatePage/utils/schema.js


const schema_schema = yup_lib/* object */.Ry().shape({
  name: yup_lib/* string */.Z_().required(build.translatedErrors.required),
  description: yup_lib/* string */.Z_().required(build.translatedErrors.required)
});
/* harmony default export */ const CreatePage_utils_schema = (schema_schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/CreatePage/index.js
/* provided dependency */ var CreatePage_console = __webpack_require__(25108);





















const CreatePage_EditPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const toggleNotification = (0,build.useNotification)();
  const { goBack } = (0,react_router_dom_min.useHistory)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const { isLoading: isLoadingPlugins, permissions, routes } = hooks_usePlugins();
  const { trackUsage } = (0,build.useTracking)();
  const permissionsRef = (0,react.useRef)();
  const handleCreateRoleSubmit = async (data) => {
    lockApp();
    setIsSubmitting(true);
    try {
      const permissions2 = permissionsRef.current.getPermissions();
      await axiosInstance/* default.post */.Z.post(`/${src_pluginId/* default */.Z}/roles`, { ...data, ...permissions2, users: [] });
      trackUsage("didCreateRole");
      toggleNotification({
        type: "success",
        message: {
          id: (0,getTrad/* default */.Z)("Settings.roles.created"),
          defaultMessage: "Role created"
        }
      });
      goBack();
    } catch (err) {
      CreatePage_console.error(err);
      toggleNotification({
        type: "warning",
        message: {
          id: "notification.error",
          defaultMessage: "An error occurred"
        }
      });
    }
    setIsSubmitting(false);
    unlockApp();
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: "Roles" }), /* @__PURE__ */ react.createElement(
    dist.Formik,
    {
      enableReinitialize: true,
      initialValues: { name: "", description: "" },
      onSubmit: handleCreateRoleSubmit,
      validationSchema: CreatePage_utils_schema
    },
    ({ handleSubmit, values, handleChange, errors }) => /* @__PURE__ */ react.createElement(build.Form, { noValidate: true, onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: !isLoadingPlugins && /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", loading: isSubmitting, startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null) }, formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })),
        title: formatMessage({
          id: "Settings.roles.create.title",
          defaultMessage: "Create a role"
        }),
        subtitle: formatMessage({
          id: "Settings.roles.create.description",
          defaultMessage: "Define the rights given to the role"
        })
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 7 }, /* @__PURE__ */ react.createElement(
      Box/* Box */.x,
      {
        background: "neutral0",
        hasRadius: true,
        shadow: "filterShadow",
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 7,
        paddingRight: 7
      },
      /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
        id: (0,getTrad/* default */.Z)("EditPage.form.roles"),
        defaultMessage: "Role details"
      })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
        TextInput/* TextInput */.o,
        {
          name: "name",
          value: values.name || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.name",
            defaultMessage: "Name"
          }),
          error: errors.name ? formatMessage({ id: errors.name, defaultMessage: "Invalid value" }) : null
        }
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
        Textarea/* Textarea */.g,
        {
          name: "description",
          value: values.description || "",
          onChange: handleChange,
          label: formatMessage({
            id: "global.description",
            defaultMessage: "Description"
          }),
          error: errors.description ? formatMessage({
            id: errors.description,
            defaultMessage: "Invalid value"
          }) : null
        }
      ))))
    ), !isLoadingPlugins && /* @__PURE__ */ react.createElement(
      components_UsersPermissions,
      {
        ref: permissionsRef,
        permissions,
        routes
      }
    ))))
  ));
};
/* harmony default export */ const CreatePage = (CreatePage_EditPage);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/ProtectedCreatePage/index.js




const ProtectedRolesCreatePage = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.createRole */.Z.createRole }, /* @__PURE__ */ react.createElement(CreatePage, null));
/* harmony default export */ const ProtectedCreatePage = (ProtectedRolesCreatePage);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Roles/index.js








const Roles = () => {
  return /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: permissions/* default.accessRoles */.Z.accessRoles }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(
    react_router_dom_min.Route,
    {
      path: `/settings/${src_pluginId/* default */.Z}/roles/new`,
      component: ProtectedCreatePage,
      exact: true
    }
  ), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: `/settings/${src_pluginId/* default */.Z}/roles/:id`, component: ProtectedEditPage, exact: true }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: `/settings/${src_pluginId/* default */.Z}/roles`, component: ProtectedListPage, exact: true }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "", component: build.NotFound })));
};
/* harmony default export */ const pages_Roles = (Roles);


/***/ }),

/***/ 46979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11817);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__);


const instance = axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create({
  baseURL: ""
});
instance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.auth.getToken()}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.auth.clearAppStorage();
      window.location.reload();
    }
    throw error;
  }
);
const wrapper = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__.wrapAxiosInstance)(instance);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);


/***/ }),

/***/ 89031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "be": () => (/* reexport */ axiosInstance/* default */.Z),
  "YX": () => (/* reexport */ utils_cleanPermissions),
  "Gc": () => (/* reexport */ utils_getRequestURL),
  "OB": () => (/* reexport */ getTrad/* default */.Z)
});

// UNUSED EXPORTS: formatPolicies

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/axiosInstance.js
var axiosInstance = __webpack_require__(46979);
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







/***/ }),

/***/ 89881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(47816),
    createBaseEach = __webpack_require__(99291);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 69199:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(89881),
    isArrayLike = __webpack_require__(98612);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 82689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(29932),
    baseGet = __webpack_require__(97786),
    baseIteratee = __webpack_require__(67206),
    baseMap = __webpack_require__(69199),
    baseSortBy = __webpack_require__(71131),
    baseUnary = __webpack_require__(7518),
    compareMultiple = __webpack_require__(85022),
    identity = __webpack_require__(6557),
    isArray = __webpack_require__(1469);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ 71131:
/***/ ((module) => {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ 26393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(33448);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ 85022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareAscending = __webpack_require__(26393);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ 99291:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(98612);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 35161:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(29932),
    baseIteratee = __webpack_require__(67206),
    baseMap = __webpack_require__(69199),
    isArray = __webpack_require__(1469);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ 89734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(21078),
    baseOrderBy = __webpack_require__(82689),
    baseRest = __webpack_require__(5976),
    isIterateeCall = __webpack_require__(16612);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ 13217:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(14259);

/**
 * Gets all but the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.tail([1, 2, 3]);
 * // => [2, 3]
 */
function tail(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 1, length) : [];
}

module.exports = tail;


/***/ }),

/***/ 48734:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ w),
/* harmony export */   "y": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71893);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75515);
/* harmony import */ var _helpers_useId_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41762);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11047);
/* harmony import */ var _AccordionContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13819);







const b = ({
  theme: r,
  expanded: o,
  variant: i,
  disabled: d,
  error: a
}) => a ? `1px solid ${r.colors.danger600} !important` : d ? `1px solid ${r.colors.neutral150}` : o ? `1px solid ${r.colors.primary600}` : i === "primary" ? `1px solid ${r.colors.neutral0}` : `1px solid ${r.colors.neutral100}`, h = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z)``, v = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x)`
  border: ${b};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({
  theme: r
}) => r.colors.primary600};

    ${h} {
      color: ${({
  theme: r,
  expanded: o
}) => o ? void 0 : r.colors.primary700};
    }

    ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z} {
      color: ${({
  theme: r,
  expanded: o
}) => o ? void 0 : r.colors.primary600};
    }

    & > ${_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .k} {
      background: ${({
  theme: r
}) => r.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({
  theme: r
}) => r.colors.primary200};
    }
  }
`, w = ({
  children: r,
  disabled: o = !1,
  error: i,
  expanded: d = !1,
  hasErrorMessage: a = !0,
  id: s,
  onToggle: l,
  toggle: u,
  size: m = "M",
  variant: p = "primary"
}) => {
  const f = (0,_helpers_useId_js__WEBPACK_IMPORTED_MODULE_5__/* .useId */ .M)("accordion", s);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AccordionContext_js__WEBPACK_IMPORTED_MODULE_6__/* .AccordionContext.Provider */ .S.Provider, {
    value: {
      expanded: d,
      onToggle: l,
      toggle: u,
      id: f,
      size: m,
      variant: p,
      disabled: o
    },
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(v, {
      "data-strapi-expanded": d,
      disabled: o,
      "aria-disabled": o,
      expanded: d,
      hasRadius: !0,
      variant: p,
      error: i,
      children: r
    }), i && a && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
      paddingTop: 1,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
        variant: "pi",
        textColor: "danger600",
        children: i
      })
    })]
  });
};



/***/ }),

/***/ 63081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);
/* harmony import */ var _AccordionContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13819);



const p = ({
  children: r,
  ...n
}) => {
  const {
    expanded: i,
    id: o
  } = (0,_AccordionContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useAccordion */ .A)();
  if (!i)
    return null;
  const c = `accordion-content-${o}`, e = `accordion-label-${o}`, t = `accordion-desc-${o}`;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, {
    role: "region",
    id: c,
    "aria-labelledby": e,
    "aria-describedby": t,
    ...n,
    children: r
  });
};



/***/ }),

/***/ 13819:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ r),
/* harmony export */   "S": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const t = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  disabled: !1,
  expanded: !1,
  id: "",
  size: "M",
  variant: "primary"
}), r = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(t);



/***/ }),

/***/ 74756:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ Z)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(39785);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.js
var Icon = __webpack_require__(52624);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(48734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(13819);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/utils.js
const utils_n = ({ expanded: e, disabled: t, variant: a }) => {
  let r = "neutral100";
  return e ? r = "primary100" : t ? r = "neutral150" : a === "primary" && (r = "neutral0"), r;
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js
/* provided dependency */ var console = __webpack_require__(25108);











const P = (0,styled_components_browser_esm["default"])(TextButton/* TextButton */.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14 / 16}rem;
    height: ${14 / 16}rem;

    path {
      fill: ${({
  theme: o,
  expanded: e
}) => e ? o.colors.primary600 : o.colors.neutral500};
    }
  }
`, U = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  min-height: ${({
  theme: o,
  size: e
}) => o.sizes.accordions[e]};
  border-radius: ${({
  theme: o,
  expanded: e
}) => e ? `${o.borderRadius} ${o.borderRadius} 0 0` : o.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({
  theme: o
}) => o.colors.primary600};
      }
    }
  }
`, Z = ({
  title: o,
  description: e,
  as: w = "span",
  togglePosition: d = "right",
  action: p,
  ...C
}) => {
  const {
    onToggle: l,
    toggle: g,
    expanded: r,
    id: s,
    size: t,
    variant: k,
    disabled: n
  } = (0,AccordionContext/* useAccordion */.A)(), T = `accordion-content-${s}`, m = `accordion-label-${s}`, z = `accordion-desc-${s}`, a = t === "M" ? 6 : 4, h = t === "M" ? a : a - 2, v = utils_n({
    expanded: r,
    disabled: n,
    variant: k
  }), j = {
    as: w,
    fontWeight: t === "S" ? "bold" : void 0,
    id: m,
    textColor: r ? "primary600" : "neutral700",
    ellipsis: !0,
    variant: t === "M" ? "delta" : void 0
  }, B = r ? "primary600" : "neutral600", M = r ? "primary200" : "neutral200", u = t === "M" ? `${32 / 16}rem` : `${24 / 16}rem`, f = () => {
    n || (g && !l ? (console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'), g()) : l && l());
  }, x = (0,jsx_runtime.jsx)(Flex/* Flex */.k, {
    justifyContent: "center",
    borderRadius: "50%",
    height: u,
    width: u,
    transform: r ? "rotate(180deg)" : void 0,
    "data-strapi-dropdown": !0,
    "aria-hidden": !0,
    as: "span",
    background: M,
    cursor: n ? "not-allowed" : "pointer",
    onClick: f,
    shrink: 0,
    children: (0,jsx_runtime.jsx)(Icon/* Icon */.J, {
      as: dist.CarretDown,
      width: t === "M" ? `${11 / 16}rem` : `${8 / 16}rem`,
      color: r ? "primary600" : "neutral600"
    })
  });
  return (0,jsx_runtime.jsx)(U, {
    paddingBottom: h,
    paddingLeft: a,
    paddingRight: a,
    paddingTop: h,
    background: v,
    expanded: r,
    size: t,
    justifyContent: "space-between",
    cursor: n ? "not-allowed" : "",
    children: (0,jsx_runtime.jsxs)(Stack/* Stack */.K, {
      horizontal: !0,
      spacing: 3,
      flex: 1,
      maxWidth: "100%",
      children: [d === "left" && x, (0,jsx_runtime.jsx)(P, {
        onClick: f,
        "aria-disabled": n,
        "aria-expanded": r,
        "aria-controls": T,
        "aria-labelledby": m,
        "data-strapi-accordion-toggle": !0,
        expanded: r,
        type: "button",
        flex: 1,
        minWidth: 0,
        ...C,
        children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [(0,jsx_runtime.jsx)(Accordion/* AccordionTypography */.y, {
            ...j,
            children: o
          }), e && (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
            as: "p",
            id: z,
            textColor: B,
            children: e
          })]
        })
      }), d === "right" && (0,jsx_runtime.jsxs)(Stack/* Stack */.K, {
        horizontal: !0,
        spacing: 3,
        children: [x, p]
      }), d === "left" && p]
    })
  });
};



/***/ }),

/***/ 36989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71893);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11047);





const l = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k)`
  & > * + * {
    margin-left: ${({ theme: t }) => t.spaces[2]};
  }

  margin-left: ${({ pullRight: t }) => t ? "auto" : void 0};
`, m = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(l)`
  flex-shrink: 0;
`, p = ({ startActions: t, endActions: o }) => t || o ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
  paddingLeft: 10,
  paddingRight: 10
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
  paddingBottom: 4
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k, {
  justifyContent: "space-between",
  alignItems: "flex-start"
}, t && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(l, {
  wrap: "wrap"
}, t), o && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(m, {
  pullRight: !0
}, o)))) : null;
p.defaultProps = {
  endActions: void 0,
  startActions: void 0
};
p.propTypes = {
  endActions: prop_types__WEBPACK_IMPORTED_MODULE_4__.node,
  startActions: prop_types__WEBPACK_IMPORTED_MODULE_4__.node
};



/***/ }),

/***/ 49066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41580);



const p = ({ children: e }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, {
  paddingLeft: 10,
  paddingRight: 10
}, e);
p.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.node.isRequired
};



/***/ }),

/***/ 67838:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ p)
});

// UNUSED EXPORTS: BaseHeaderLayout

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/helpers/useElementOnScreen.js

const b = (t) => {
  const e = (0,react.useRef)(null), [s, c] = (0,react.useState)(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return (0,react.useEffect)(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.js
var dist = __webpack_require__(98402);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/helpers/useResizeObserver.js


const c = (e, i) => {
  const t = (0,dist.useCallbackRef)(i);
  (0,react.useLayoutEffect)(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js








const x = () => {
  const t = (0,react.useRef)(null), [o, a] = (0,react.useState)(null), [r, d] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(r, () => {
    r.current && a(r.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    t.current && a(t.current.getBoundingClientRect());
  }, [t]), {
    containerRef: r,
    isVisible: d,
    baseHeaderLayoutRef: t,
    headerSize: o
  };
}, p = (t) => {
  const { containerRef: o, isVisible: a, baseHeaderLayoutRef: r, headerSize: d } = x();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", {
    style: { height: d?.height },
    ref: o
  }, a && /* @__PURE__ */ react.createElement(s, {
    ref: r,
    ...t
  })), !a && /* @__PURE__ */ react.createElement(s, {
    ...t,
    sticky: !0,
    width: d?.width
  }));
};
p.displayName = "HeaderLayout";
const L = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${(t) => t.width}px;
  z-index: 4;
  box-shadow: ${({ theme: t }) => t.shadows.tableShadow};
`, s = react.forwardRef(
  ({ navigationAction: t, primaryAction: o, secondaryAction: a, subtitle: r, title: d, sticky: f, width: g, ...u }, y) => {
    const m = typeof r == "string";
    return f ? /* @__PURE__ */ react.createElement(L, {
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 3,
      paddingBottom: 3,
      background: "neutral0",
      width: g,
      "data-strapi-header-sticky": !0
    }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
      justifyContent: "space-between"
    }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, t && /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingRight: 3
    }, t), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      variant: "beta",
      as: "h1",
      ...u
    }, d), m ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      variant: "pi",
      textColor: "neutral600"
    }, r) : r), a ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingLeft: 4
    }, a) : null), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, o ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingLeft: 2
    }, o) : void 0))) : /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      ref: y,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 8,
      paddingTop: t ? 6 : 8,
      background: "neutral100",
      "data-strapi-header": !0
    }, t ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingBottom: 2
    }, t) : null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
      justifyContent: "space-between"
    }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      as: "h1",
      variant: "alpha",
      ...u
    }, d), a ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingLeft: 4
    }, a) : null), o), m ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      variant: "epsilon",
      textColor: "neutral600",
      as: "p"
    }, r) : r);
  }
);
s.displayName = "BaseHeaderLayout";
s.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0,
  sticky: !1,
  width: void 0
};
s.propTypes = {
  navigationAction: prop_types.node,
  primaryAction: prop_types.node,
  secondaryAction: prop_types.node,
  sticky: prop_types.bool,
  subtitle: prop_types.oneOfType([prop_types.string, prop_types.node]),
  title: prop_types.string.isRequired,
  width: prop_types.number
};
p.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0
};
p.propTypes = {
  navigationAction: prop_types.node,
  primaryAction: prop_types.node,
  secondaryAction: prop_types.node,
  subtitle: prop_types.oneOfType([prop_types.string, prop_types.node]),
  title: prop_types.string.isRequired
};



/***/ }),

/***/ 185:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71893);



const r = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`, e = ({ labelledBy: o, ...t }) => {
  const n = o || "main-content-title";
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(r, {
    "aria-labelledby": n,
    id: "main-content",
    tabIndex: -1,
    ...t
  });
};
e.defaultProps = {
  labelledBy: void 0
};
e.propTypes = {
  labelledBy: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
};



/***/ }),

/***/ 39785:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71893);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41363);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41580);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75515);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11047);
/* harmony import */ var _themes_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15585);








const v = styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, $ = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  animation: ${v} 2s infinite linear;
  will-change: transform;
`, B = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k)`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({
  theme: r
}) => r.colors.neutral600};
    }
  }

  svg {
    display: flex;
    font-size: ${10 / 16}rem;
  }

  svg path {
    fill: ${({
  theme: r
}) => r.colors.primary600};
  }

  ${_themes_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .buttonFocusStyle */ .BF}
`, T = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  children: r,
  startIcon: o,
  endIcon: a,
  onClick: n,
  disabled: i = !1,
  loading: e = !1,
  ...l
}, f) => {
  const m = n && !i ? n : void 0, s = i || e;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(B, {
    ref: f,
    "aria-disabled": s,
    onClick: m,
    as: "button",
    type: "button",
    ...l,
    children: [(o || e) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x, {
      as: "span",
      paddingRight: 2,
      "aria-hidden": !0,
      children: e ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)($, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_6__.Loader, {})
      }) : o
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_7__/* .Typography */ .Z, {
      variant: "pi",
      textColor: s ? "neutral600" : "primary600",
      children: r
    }), a && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x, {
      as: "span",
      paddingLeft: 2,
      "aria-hidden": !0,
      children: a
    })]
  });
});
T.displayName = "TextButton";



/***/ }),

/***/ 67109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function r(e) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",
      fill: "#212134"
    })
  });
}



/***/ }),

/***/ 78114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function e(a) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...a,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 00-.374.68v1.65a.797.797 0 00.384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 00.216.744l1.167 1.166a.801.801 0 00.744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 00.679.374h1.649a.797.797 0 00.686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 00.744-.216l1.166-1.167a.803.803 0 00.216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 00.374-.679v-1.649a.796.796 0 00-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 00-.216-.744l-1.166-1.173a.802.802 0 00-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 00-.68-.374h-1.65a.797.797 0 00-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 00-.744.216L2.921 4.094a.802.802 0 00-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8zM12 17a5 5 0 100-10 5 5 0 000 10z",
      fill: "#212134"
    })
  });
}



/***/ })

}]);