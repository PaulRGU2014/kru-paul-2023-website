"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[2812],{

/***/ 94699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97132);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28702);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41363);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95489);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);






const Filters = ({ displayedFilters }) => {
  const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Box, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Button,
    {
      variant: "tertiary",
      ref: buttonRef,
      startIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__.Filter, null),
      onClick: handleToggle,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.FilterPopoverURLQuery,
    {
      displayedFilters,
      isVisible,
      onToggle: handleToggle,
      source: buttonRef
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.FilterListURLQuery, { filtersSchema: displayedFilters }));
};
Filters.propTypes = {
  displayedFilters: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(
    prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
      name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
      metadatas: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({ label: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string) }),
      fieldSchema: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({ type: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string) })
    })
  ).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);


/***/ }),

/***/ 35915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AuditLogs_ProtectedListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/date-fns/parseISO/index.js
var parseISO = __webpack_require__(51196);
var parseISO_default = /*#__PURE__*/__webpack_require__.n(parseISO);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/hooks/useFormatTimeStamp.js


const useFormatTimeStamp = () => {
  const { formatDate } = (0,react_intl.useIntl)();
  const formatTimeStamp = (value) => {
    const date = parseISO_default()(value);
    const formattedDate = formatDate(date, {
      dateStyle: "long"
    });
    const formattedTime = formatDate(date, {
      timeStyle: "medium",
      hourCycle: "h24"
    });
    return `${formattedDate}, ${formattedTime}`;
  };
  return formatTimeStamp;
};
/* harmony default export */ const hooks_useFormatTimeStamp = (useFormatTimeStamp);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/utils/getActionTypesDefaultMessages.js
const actionTypes = {
  "entry.create": "Create entry{model, select, undefined {} other { ({model})}}",
  "entry.update": "Update entry{model, select, undefined {} other { ({model})}}",
  "entry.delete": "Delete entry{model, select, undefined {} other { ({model})}}",
  "entry.publish": "Publish entry{model, select, undefined {} other { ({model})}}",
  "entry.unpublish": "Unpublish entry{model, select, undefined {} other { ({model})}}",
  "media.create": "Create media",
  "media.update": "Update media",
  "media.delete": "Delete media",
  "media-folder.create": "Create media folder",
  "media-folder.update": "Update media folder",
  "media-folder.delete": "Delete media folder",
  "user.create": "Create user",
  "user.update": "Update user",
  "user.delete": "Delete user",
  "admin.auth.success": "Admin login",
  "admin.logout": "Admin logout",
  "content-type.create": "Create content type",
  "content-type.update": "Update content type",
  "content-type.delete": "Delete content type",
  "component.create": "Create component",
  "component.update": "Update component",
  "component.delete": "Delete component",
  "role.create": "Create role",
  "role.update": "Update role",
  "role.delete": "Delete role",
  "permission.create": "Create permission",
  "permission.update": "Update permission",
  "permission.delete": "Delete permission"
};
const getDefaultMessage = (value) => {
  return actionTypes[value] || value;
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/TableRows/index.js








const TableRows = ({ headers, rows, onOpenModal }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const formatTimeStamp = hooks_useFormatTimeStamp();
  const getCellValue = ({ type, value, model }) => {
    if (type === "date") {
      return formatTimeStamp(value);
    }
    if (type === "action") {
      return formatMessage(
        {
          id: `Settings.permissions.auditLogs.${value}`,
          defaultMessage: getDefaultMessage(value)
        },
        { model }
      );
    }
    return value || "-";
  };
  return /* @__PURE__ */ react.createElement(dist.Tbody, null, rows.map((data) => {
    return /* @__PURE__ */ react.createElement(
      dist.Tr,
      {
        key: data.id,
        ...(0,helper_plugin.onRowClick)({
          fn: () => onOpenModal(data.id)
        })
      },
      headers.map(({ key, name, cellFormatter }) => {
        return /* @__PURE__ */ react.createElement(dist.Td, { key }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, getCellValue({
          type: key,
          value: cellFormatter ? cellFormatter(data[name]) : data[name],
          model: data.payload?.model
        })));
      }),
      /* @__PURE__ */ react.createElement(dist.Td, { ...helper_plugin.stopPropagation }, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "end" }, /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          onClick: () => onOpenModal(data.id),
          "aria-label": formatMessage(
            { id: "app.component.table.view", defaultMessage: "{target} details" },
            { target: `${data.action} action` }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(icons_dist.Eye, null)
        }
      )))
    );
  }));
};
TableRows.defaultProps = {
  rows: []
};
TableRows.propTypes = {
  headers: (prop_types_default()).array.isRequired,
  rows: (prop_types_default()).array,
  onOpenModal: (prop_types_default()).func.isRequired
};
/* harmony default export */ const ListView_TableRows = (TableRows);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/utils/tableHeaders.js
const tableHeaders = [
  {
    name: "action",
    key: "action",
    metadatas: {
      label: {
        id: "Settings.permissions.auditLogs.action",
        defaultMessage: "Action"
      },
      sortable: true
    }
  },
  {
    name: "date",
    key: "date",
    metadatas: {
      label: {
        id: "Settings.permissions.auditLogs.date",
        defaultMessage: "Date"
      },
      sortable: true
    }
  },
  {
    key: "user",
    name: "user",
    metadatas: {
      label: {
        id: "Settings.permissions.auditLogs.user",
        defaultMessage: "User"
      },
      sortable: false
    },
    cellFormatter: (user) => user ? user.displayName : ""
  }
];
/* harmony default export */ const utils_tableHeaders = (tableHeaders);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/PaginationFooter/index.js




const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(dist.Flex, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(helper_plugin.PageSizeURLQuery, null), /* @__PURE__ */ react.createElement(helper_plugin.PaginationURLQuery, { pagination })));
};
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 50,
    total: 0
  }
};
PaginationFooter.propTypes = {
  pagination: prop_types_default().shape({
    page: (prop_types_default()).number,
    pageCount: (prop_types_default()).number,
    pageSize: (prop_types_default()).number,
    total: (prop_types_default()).number
  })
};
/* harmony default export */ const ListView_PaginationFooter = (PaginationFooter);

// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/Modal/ActionItem.js



const ActionItem = ({ actionLabel, actionName }) => {
  return /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "baseline", gap: 1 }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral600", variant: "sigma" }, actionLabel), /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral600" }, actionName));
};
ActionItem.propTypes = {
  actionLabel: (prop_types_default()).string.isRequired,
  actionName: (prop_types_default()).string.isRequired
};
/* harmony default export */ const Modal_ActionItem = (ActionItem);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/Modal/ActionBody.js






const ActionBody = ({ status, data, formattedDate }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  if (status === "loading") {
    return /* @__PURE__ */ react.createElement(dist.Flex, { padding: 7, justifyContent: "center", alignItems: "center" }, /* @__PURE__ */ react.createElement(dist.Loader, null, "Loading content..."));
  }
  const { action, user, payload } = data;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(dist.Box, { marginBottom: 3 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", id: "title" }, formatMessage({
    id: "Settings.permissions.auditLogs.details",
    defaultMessage: "Log Details"
  }))), /* @__PURE__ */ react.createElement(
    dist.Grid,
    {
      gap: 4,
      gridCols: 2,
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 6,
      paddingRight: 6,
      marginBottom: 4,
      background: "neutral100",
      hasRadius: true
    },
    /* @__PURE__ */ react.createElement(
      Modal_ActionItem,
      {
        actionLabel: formatMessage({
          id: "Settings.permissions.auditLogs.action",
          defaultMessage: "Action"
        }),
        actionName: formatMessage(
          {
            id: `Settings.permissions.auditLogs.${action}`,
            defaultMessage: getDefaultMessage(action)
          },
          { model: payload?.model }
        )
      }
    ),
    /* @__PURE__ */ react.createElement(
      Modal_ActionItem,
      {
        actionLabel: formatMessage({
          id: "Settings.permissions.auditLogs.date",
          defaultMessage: "Date"
        }),
        actionName: formattedDate
      }
    ),
    /* @__PURE__ */ react.createElement(
      Modal_ActionItem,
      {
        actionLabel: formatMessage({
          id: "Settings.permissions.auditLogs.user",
          defaultMessage: "User"
        }),
        actionName: user?.displayName || "-"
      }
    ),
    /* @__PURE__ */ react.createElement(
      Modal_ActionItem,
      {
        actionLabel: formatMessage({
          id: "Settings.permissions.auditLogs.userId",
          defaultMessage: "User ID"
        }),
        actionName: user?.id.toString() || "-"
      }
    )
  ), /* @__PURE__ */ react.createElement(
    dist.JSONInput,
    {
      value: JSON.stringify(payload, null, 2),
      disabled: true,
      label: formatMessage({
        id: "Settings.permissions.auditLogs.payload",
        defaultMessage: "Payload"
      })
    }
  ));
};
ActionBody.defaultProps = {
  data: {}
};
ActionBody.propTypes = {
  status: prop_types_default().oneOf(["idle", "loading", "error", "success"]).isRequired,
  data: prop_types_default().shape({
    action: (prop_types_default()).string,
    date: (prop_types_default()).string,
    payload: (prop_types_default()).object,
    user: (prop_types_default()).object
  }),
  formattedDate: (prop_types_default()).string.isRequired
};
/* harmony default export */ const Modal_ActionBody = (ActionBody);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/Modal/index.js







const Modal = ({ handleClose, logId }) => {
  const { get } = (0,helper_plugin.useFetchClient)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const fetchAuditLog = async (id) => {
    const { data: data2 } = await get(`/admin/audit-logs/${id}`);
    if (!data2) {
      throw new Error("Audit log not found");
    }
    return data2;
  };
  const { data, status } = (0,lib.useQuery)(["audit-log", logId], () => fetchAuditLog(logId), {
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
      handleClose();
    }
  });
  const formatTimeStamp = hooks_useFormatTimeStamp();
  const formattedDate = data ? formatTimeStamp(data.date) : "";
  return /* @__PURE__ */ react.createElement(dist.ModalLayout, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(dist.ModalHeader, null, /* @__PURE__ */ react.createElement(dist.Breadcrumbs, { label: formattedDate, id: "title" }, /* @__PURE__ */ react.createElement(dist.Crumb, null, formattedDate))), /* @__PURE__ */ react.createElement(dist.ModalBody, null, /* @__PURE__ */ react.createElement(Modal_ActionBody, { status, data, formattedDate })));
};
Modal.propTypes = {
  handleClose: (prop_types_default()).func.isRequired,
  logId: (prop_types_default()).string.isRequired
};
/* harmony default export */ const ListView_Modal = (Modal);

// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Filters/index.js
var Filters = __webpack_require__(94699);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/ComboboxFilter/index.js




const ComboboxFilter = ({ value, options, onChange }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const ariaLabel = formatMessage({
    id: "Settings.permissions.auditLogs.filter.aria-label",
    defaultMessage: "Search and select an option to filter"
  });
  return /* @__PURE__ */ react.createElement(dist.Combobox, { "aria-label": ariaLabel, value, onChange }, options.map(({ label, customValue }) => {
    return /* @__PURE__ */ react.createElement(dist.ComboboxOption, { key: customValue, value: customValue }, label);
  }));
};
ComboboxFilter.defaultProps = {
  value: null
};
ComboboxFilter.propTypes = {
  value: (prop_types_default()).string,
  options: prop_types_default().arrayOf(
    prop_types_default().shape({
      label: (prop_types_default()).string.isRequired,
      customValue: (prop_types_default()).string.isRequired
    }).isRequired
  ).isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const ListView_ComboboxFilter = (ComboboxFilter);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/utils/getDisplayedFilters.js


const customOperators = [
  {
    intlLabel: { id: "components.FilterOptions.FILTER_TYPES.$eq", defaultMessage: "is" },
    value: "$eq"
  },
  {
    intlLabel: { id: "components.FilterOptions.FILTER_TYPES.$ne", defaultMessage: "is not" },
    value: "$ne"
  }
];
const getDisplayedFilters = ({ formatMessage, users }) => {
  const getDisplaynameFromUser = (user) => {
    if (user.username) {
      return user.username;
    }
    if (user.firstname && user.lastname) {
      return formatMessage(
        {
          id: "Settings.permissions.auditLogs.user.fullname",
          defaultMessage: "{firstname} {lastname}"
        },
        {
          firstname: user.firstname,
          lastname: user.lastname
        }
      );
    }
    return user.email;
  };
  const actionOptions = Object.keys(actionTypes).map((action) => {
    return {
      label: formatMessage(
        {
          id: `Settings.permissions.auditLogs.${action}`,
          defaultMessage: getDefaultMessage(action)
        },
        { model: void 0 }
      ),
      customValue: action
    };
  });
  const userOptions = users && users.results.map((user) => {
    return {
      label: getDisplaynameFromUser(user),
      // Combobox expects a string value
      customValue: user.id.toString()
    };
  });
  return [
    {
      name: "action",
      metadatas: {
        customOperators,
        label: formatMessage({
          id: "Settings.permissions.auditLogs.action",
          defaultMessage: "Action"
        }),
        options: actionOptions,
        customInput: ListView_ComboboxFilter
      },
      fieldSchema: { type: "enumeration" }
    },
    {
      name: "date",
      metadatas: {
        label: formatMessage({
          id: "Settings.permissions.auditLogs.date",
          defaultMessage: "Date"
        })
      },
      fieldSchema: { type: "datetime" }
    },
    {
      name: "user",
      metadatas: {
        customOperators,
        label: formatMessage({
          id: "Settings.permissions.auditLogs.user",
          defaultMessage: "User"
        }),
        options: userOptions,
        customInput: ListView_ComboboxFilter
      },
      fieldSchema: { type: "relation", mainField: { name: "id" } }
    }
  ];
};
/* harmony default export */ const utils_getDisplayedFilters = (getDisplayedFilters);

// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/hooks/useAuditLogsData.js



const useAuditLogsData = ({ canRead }) => {
  const { get } = (0,helper_plugin.useFetchClient)();
  const { search } = (0,react_router_dom_min.useLocation)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const fetchAuditLogsPage = async ({ queryKey }) => {
    const search2 = queryKey[1];
    const { data } = await get(`/admin/audit-logs${search2}`);
    return data;
  };
  const fetchAllUsers = async () => {
    const { data } = await get(`/admin/users`);
    return data;
  };
  const queryOptions = {
    enabled: canRead,
    keepPreviousData: true,
    retry: false,
    staleTime: 1e3 * 20,
    // 20 seconds
    onError: (error) => toggleNotification({ type: "warning", message: error.message })
  };
  const {
    data: auditLogs,
    isLoading,
    isError: isAuditLogsError
  } = (0,lib.useQuery)(["auditLogs", search], fetchAuditLogsPage, queryOptions);
  const { data: users, isError: isUsersError } = (0,lib.useQuery)(["auditLogsUsers"], fetchAllUsers, {
    ...queryOptions,
    staleTime: 2 * (1e3 * 60)
    // 2 minutes
  });
  const hasError = isAuditLogsError || isUsersError;
  return { auditLogs, users: users?.data, isLoading, hasError };
};
/* harmony default export */ const hooks_useAuditLogsData = (useAuditLogsData);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ListView/index.js












const ListView = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    allowedActions: { canRead }
  } = (0,helper_plugin.useRBAC)(permissions/* default.settings.auditLogs */.Z.settings.auditLogs);
  const [{ query }, setQuery] = (0,helper_plugin.useQueryParams)();
  const { auditLogs, users, isLoading, hasError } = hooks_useAuditLogsData({ canRead });
  (0,helper_plugin.useFocusWhenNavigate)();
  const displayedFilters = utils_getDisplayedFilters({ formatMessage, users });
  const title = formatMessage({
    id: "global.auditLogs",
    defaultMessage: "Audit Logs"
  });
  const headers = utils_tableHeaders.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  if (hasError) {
    return /* @__PURE__ */ react.createElement(dist.Layout, null, /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 8 }, /* @__PURE__ */ react.createElement(helper_plugin.AnErrorOccurred, null))));
  }
  return /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(helper_plugin.SettingsPageTitle, { name: title }), /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      title,
      subtitle: formatMessage({
        id: "Settings.permissions.auditLogs.listview.header.subtitle",
        defaultMessage: "Logs of all the activities that happened in your environment"
      })
    }
  ), /* @__PURE__ */ react.createElement(dist.ActionLayout, { startActions: /* @__PURE__ */ react.createElement(Filters/* default */.Z, { displayedFilters }) }), /* @__PURE__ */ react.createElement(dist.ContentLayout, { canRead }, /* @__PURE__ */ react.createElement(
    helper_plugin.DynamicTable,
    {
      contentType: "Audit logs",
      headers,
      rows: auditLogs?.results || [],
      withBulkActions: true,
      isLoading
    },
    /* @__PURE__ */ react.createElement(
      ListView_TableRows,
      {
        headers,
        rows: auditLogs?.results || [],
        onOpenModal: (id) => setQuery({ id })
      }
    )
  ), /* @__PURE__ */ react.createElement(ListView_PaginationFooter, { pagination: auditLogs?.pagination })), query?.id && /* @__PURE__ */ react.createElement(ListView_Modal, { handleClose: () => setQuery({ id: null }, "remove"), logId: query.id }));
};
/* harmony default export */ const AuditLogs_ListView = (ListView);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/AuditLogs/ProtectedListPage/index.js




const ProtectedListPage = () => /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.settings.auditLogs.main */.Z.settings.auditLogs.main }, /* @__PURE__ */ react.createElement(AuditLogs_ListView, null));
/* harmony default export */ const AuditLogs_ProtectedListPage = (ProtectedListPage);


/***/ })

}]);