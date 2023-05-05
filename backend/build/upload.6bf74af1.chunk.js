"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[3650],{

/***/ 17316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(80129);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/UploadAssetDialog/UploadAssetDialog.js + 7 modules
var UploadAssetDialog = __webpack_require__(33012);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EditFolderDialog/index.js + 5 modules
var EditFolderDialog = __webpack_require__(78971);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EditAssetDialog/index.js + 13 modules
var EditAssetDialog = __webpack_require__(80845);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/AssetGridList/index.js + 1 modules
var AssetGridList = __webpack_require__(92585);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FolderGridList/index.js + 1 modules
var FolderGridList = __webpack_require__(24652);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/TableList/index.js + 3 modules
var TableList = __webpack_require__(11357);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/SortPicker/index.js
var SortPicker = __webpack_require__(27954);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/PaginationFooter/index.js




const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 6 }, /* @__PURE__ */ react.createElement(dist.Flex, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(helper_plugin.PageSizeURLQuery, null), /* @__PURE__ */ react.createElement(helper_plugin.PaginationURLQuery, { pagination })));
};
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 10,
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

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/constants.js
var constants = __webpack_require__(49826);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(15537);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkRemove.js
var useBulkRemove = __webpack_require__(2967);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/BulkDeleteButton.js








const BulkDeleteButton = ({ selected, onSuccess }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const { isLoading, remove } = (0,useBulkRemove/* useBulkRemove */.K)();
  const handleConfirmRemove = async () => {
    await remove(selected);
    onSuccess();
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    dist.Button,
    {
      variant: "danger-light",
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null),
      onClick: () => setShowConfirmDialog(true)
    },
    formatMessage({ id: "global.delete", defaultMessage: "Delete" })
  ), /* @__PURE__ */ react.createElement(
    helper_plugin.ConfirmDialog,
    {
      isConfirmButtonLoading: isLoading,
      isOpen: showConfirmDialog,
      onToggleDialog: () => setShowConfirmDialog(false),
      onConfirm: handleConfirmRemove
    }
  ));
};
BulkDeleteButton.propTypes = {
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.pw, constants/* FolderDefinition */.nx).isRequired,
  onSuccess: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var formik_dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var react_query_lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pluginId.js
var pluginId = __webpack_require__(55994);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/index.js + 8 modules
var utils = __webpack_require__(57197);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkMove.js




const useBulkMove = () => {
  const toggleNotification = (0,helper_plugin.useNotification)();
  const queryClient = (0,react_query_lib.useQueryClient)();
  const url = (0,utils/* getRequestUrl */.IF)("actions/bulk-move");
  const { post } = (0,helper_plugin.useFetchClient)();
  const bulkMoveQuery = ({ destinationFolderId, filesAndFolders }) => {
    const payload = filesAndFolders.reduce((acc, selected) => {
      const { id, type } = selected;
      const key = type === "asset" ? "fileIds" : "folderIds";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(id);
      return acc;
    }, {});
    return post(url, { ...payload, destinationFolderId });
  };
  const mutation = (0,react_query_lib.useMutation)(bulkMoveQuery, {
    onSuccess(res) {
      const {
        data: { data }
      } = res;
      if (data?.files?.length > 0) {
        queryClient.refetchQueries([pluginId/* default */.Z, "assets"], { active: true });
        queryClient.refetchQueries([pluginId/* default */.Z, "asset-count"], { active: true });
      }
      queryClient.refetchQueries([pluginId/* default */.Z, "folders"], { active: true });
      toggleNotification({
        type: "success",
        message: {
          id: (0,utils/* getTrad */.OB)("modal.move.success-label"),
          defaultMessage: "Elements have been moved successfully."
        }
      });
    }
  });
  const move = (destinationFolderId, filesAndFolders) => mutation.mutateAsync({ destinationFolderId, filesAndFolders });
  return { ...mutation, move };
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/SelectTree/index.js + 4 modules
var SelectTree = __webpack_require__(66951);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolderStructure.js + 1 modules
var useFolderStructure = __webpack_require__(20796);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/BulkMoveDialog/BulkMoveDialog.js












const BulkMoveDialog = ({ onClose, selected, currentFolder }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { data: folderStructure, isLoading } = (0,useFolderStructure/* useFolderStructure */.v)();
  const { move } = useBulkMove();
  if (!folderStructure) {
    return null;
  }
  const handleSubmit = async (values, { setErrors }) => {
    try {
      await move(values.destination.value, selected);
      onClose();
    } catch (error) {
      const normalizedError = (0,helper_plugin.normalizeAPIError)(error);
      const formikErrors = normalizedError.errors.reduce((acc, error2) => {
        acc[error2.values?.path?.length || "destination"] = error2.defaultMessage;
        return acc;
      }, {});
      if (!isEmpty_default()(formikErrors)) {
        setErrors(formikErrors);
      }
    }
  };
  const handleClose = () => {
    onClose();
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist.ModalLayout, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(dist.ModalBody, null, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "center", paddingTop: 4, paddingBottom: 4 }, /* @__PURE__ */ react.createElement(dist.Loader, null, formatMessage({
      id: (0,utils/* getTrad */.OB)("content.isLoading"),
      defaultMessage: "Content is loading."
    })))));
  }
  const initialFormData = {
    destination: {
      value: currentFolder?.id || "",
      label: currentFolder?.name || folderStructure[0].label
    }
  };
  return /* @__PURE__ */ react.createElement(dist.ModalLayout, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(formik_dist.Formik, { validateOnChange: false, onSubmit: handleSubmit, initialValues: initialFormData }, ({ values, errors, setFieldValue }) => /* @__PURE__ */ react.createElement(helper_plugin.Form, { noValidate: true }, /* @__PURE__ */ react.createElement(dist.ModalHeader, null, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("modal.folder.move.title"),
    defaultMessage: "Move elements to"
  }))), /* @__PURE__ */ react.createElement(dist.ModalBody, null, /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4 }, /* @__PURE__ */ react.createElement(dist.GridItem, { xs: 12, col: 12 }, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 1 }, /* @__PURE__ */ react.createElement(dist.FieldLabel, { htmlFor: "folder-destination" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("form.input.label.folder-location"),
    defaultMessage: "Location"
  })), /* @__PURE__ */ react.createElement(
    SelectTree/* default */.Z,
    {
      options: folderStructure,
      onChange: (value) => {
        setFieldValue("destination", value);
      },
      defaultValue: values.destination,
      name: "destination",
      menuPortalTarget: document.querySelector("body"),
      inputId: "folder-destination",
      error: errors?.destination,
      ariaErrorMessage: "destination-error"
    }
  ), errors.destination && /* @__PURE__ */ react.createElement(
    dist.Typography,
    {
      variant: "pi",
      as: "p",
      id: "folder-destination-error",
      textColor: "danger600"
    },
    errors.destination
  ))))), /* @__PURE__ */ react.createElement(
    dist.ModalFooter,
    {
      startActions: /* @__PURE__ */ react.createElement(dist.Button, { onClick: handleClose, variant: "tertiary", name: "cancel" }, formatMessage({ id: "cancel", defaultMessage: "Cancel" })),
      endActions: /* @__PURE__ */ react.createElement(dist.Button, { type: "submit", loading: isLoading }, formatMessage({ id: "modal.folder.move.submit", defaultMessage: "Move" }))
    }
  ))));
};
BulkMoveDialog.defaultProps = {
  currentFolder: void 0
};
BulkMoveDialog.propTypes = {
  onClose: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.nx,
  selected: prop_types_default().arrayOf(constants/* FolderDefinition */.nx, constants/* AssetDefinition */.pw).isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/BulkMoveDialog/index.js


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/BulkMoveButton.js







const BulkMoveButton = ({ selected, onSuccess, currentFolder }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showConfirmDialog, setShowConfirmDialog] = (0,react.useState)(false);
  const handleConfirmMove = () => {
    setShowConfirmDialog(false);
    onSuccess();
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    dist.Button,
    {
      variant: "secondary",
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement(icons_dist.Folder, null),
      onClick: () => setShowConfirmDialog(true)
    },
    formatMessage({ id: "global.move", defaultMessage: "Move" })
  ), showConfirmDialog && /* @__PURE__ */ react.createElement(
    BulkMoveDialog,
    {
      currentFolder,
      onClose: handleConfirmMove,
      selected
    }
  ));
};
BulkMoveButton.defaultProps = {
  currentFolder: void 0
};
BulkMoveButton.propTypes = {
  onSuccess: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.nx,
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.pw, constants/* FolderDefinition */.nx).isRequired
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/BulkActions.js








const BulkActions = ({ selected, onSuccess, currentFolder }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, spacing: 2, paddingBottom: 5 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "epsilon", textColor: "neutral600" }, formatMessage(
    {
      id: (0,getTrad/* default */.Z)("list.assets.selected"),
      defaultMessage: "{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"
    },
    {
      numberFolders: selected.filter(({ type }) => type === "folder").length,
      numberAssets: selected.filter(({ type }) => type === "asset").length
    }
  )), /* @__PURE__ */ react.createElement(BulkDeleteButton, { selected, onSuccess }), /* @__PURE__ */ react.createElement(BulkMoveButton, { currentFolder, selected, onSuccess }));
};
BulkActions.defaultProps = {
  currentFolder: void 0
};
BulkActions.propTypes = {
  onSuccess: (prop_types_default()).func.isRequired,
  currentFolder: constants/* FolderDefinition */.nx,
  selected: prop_types_default().arrayOf(constants/* AssetDefinition */.pw, constants/* FolderDefinition */.nx).isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EmptyAssets/index.js + 1 modules
var EmptyAssets = __webpack_require__(70088);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/EmptyOrNoPermissions.js







const getContentIntlMessage = ({ isFiltering, canCreate, canRead }) => {
  if (isFiltering) {
    return {
      id: "list.assets-empty.title-withSearch",
      defaultMessage: "There are no elements with the applied filters"
    };
  }
  if (canRead) {
    if (canCreate) {
      return {
        id: "list.assets.empty-upload",
        defaultMessage: "Upload your first assets..."
      };
    }
    return {
      id: "list.assets.empty",
      defaultMessage: "Media Library is empty"
    };
  }
  return {
    id: "header.actions.no-permissions",
    defaultMessage: "No permissions to view"
  };
};
const EmptyOrNoPermissions = ({ canCreate, isFiltering, canRead, onActionClick }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const content = getContentIntlMessage({ isFiltering, canCreate, canRead });
  return /* @__PURE__ */ react.createElement(
    EmptyAssets/* EmptyAssets */.i,
    {
      icon: !canRead ? icons_dist.EmptyPermissions : null,
      action: canCreate && !isFiltering && /* @__PURE__ */ react.createElement(dist.Button, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null), onClick: onActionClick }, formatMessage({
        id: (0,utils/* getTrad */.OB)("header.actions.add-assets"),
        defaultMessage: "Add new assets"
      })),
      content: formatMessage({
        ...content,
        id: (0,utils/* getTrad */.OB)(content.id)
      })
    }
  );
};
EmptyOrNoPermissions.propTypes = {
  canCreate: (prop_types_default()).bool.isRequired,
  canRead: (prop_types_default()).bool.isRequired,
  isFiltering: (prop_types_default()).bool.isRequired,
  onActionClick: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FolderCard/index.js + 9 modules
var FolderCard = __webpack_require__(98101);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FilterList/index.js + 1 modules
var FilterList = __webpack_require__(51386);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/FilterPopover/index.js + 2 modules
var FilterPopover = __webpack_require__(45219);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/displayedFilters.js
var displayedFilters = __webpack_require__(97581);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/Filters.js








const Filters = () => {
  const buttonRef = (0,react.useRef)(null);
  const [isVisible, setVisible] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const [{ query }, setQuery] = (0,helper_plugin.useQueryParams)();
  const filters = query?.filters?.$and || [];
  const toggleFilter = () => setVisible((prev) => !prev);
  const handleRemoveFilter = (nextFilters) => {
    setQuery({ filters: { $and: nextFilters }, page: 1 });
  };
  const handleSubmit = (filters2) => {
    trackUsage("didFilterMediaLibraryElements", {
      location: "content-manager",
      filter: Object.keys(filters2[filters2.length - 1])[0]
    });
    setQuery({ filters: { $and: filters2 }, page: 1 });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    dist.Button,
    {
      variant: "tertiary",
      ref: buttonRef,
      startIcon: /* @__PURE__ */ react.createElement(icons_dist.Filter, null),
      onClick: toggleFilter,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react.createElement(
    FilterPopover/* default */.Z,
    {
      displayedFilters: displayedFilters/* default */.Z,
      filters,
      onSubmit: handleSubmit,
      onToggle: toggleFilter,
      source: buttonRef
    }
  ), /* @__PURE__ */ react.createElement(
    FilterList/* default */.Z,
    {
      appliedFilters: filters,
      filtersSchema: displayedFilters/* default */.Z,
      onRemoveFilter: handleRemoveFilter
    }
  ));
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/Breadcrumbs/index.js + 2 modules
var Breadcrumbs = __webpack_require__(70168);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/components/Header.js











const Header = ({
  breadcrumbs,
  canCreate,
  folder,
  onToggleEditFolderDialog,
  onToggleUploadAssetDialog
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const [{ query }] = (0,helper_plugin.useQueryParams)();
  const backQuery = {
    ...query,
    folder: folder?.parent?.id ?? void 0
  };
  return /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("plugin.name"),
        defaultMessage: `Media Library`
      }),
      subtitle: breadcrumbs && folder && /* @__PURE__ */ react.createElement(
        Breadcrumbs/* Breadcrumbs */.O,
        {
          as: "nav",
          label: formatMessage({
            id: (0,utils/* getTrad */.OB)("header.breadcrumbs.nav.label"),
            defaultMessage: "Folders navigation"
          }),
          breadcrumbs,
          currentFolderId: folder?.id
        }
      ),
      navigationAction: folder && /* @__PURE__ */ react.createElement(
        dist.Link,
        {
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.ArrowLeft, null),
          to: `${pathname}?${(0,lib.stringify)(backQuery, { encode: false })}`
        },
        formatMessage({
          id: (0,utils/* getTrad */.OB)("header.actions.folder-level-up"),
          defaultMessage: "Back"
        })
      ),
      primaryAction: canCreate && /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, spacing: 2 }, /* @__PURE__ */ react.createElement(dist.Button, { startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null), variant: "secondary", onClick: onToggleEditFolderDialog }, formatMessage({
        id: (0,utils/* getTrad */.OB)("header.actions.add-folder"),
        defaultMessage: "Add new folder"
      })), /* @__PURE__ */ react.createElement(dist.Button, { startIcon: /* @__PURE__ */ react.createElement(icons_dist.Plus, null), onClick: onToggleUploadAssetDialog }, formatMessage({
        id: (0,utils/* getTrad */.OB)("header.actions.add-assets"),
        defaultMessage: "Add new assets"
      })))
    }
  );
};
Header.defaultProps = {
  breadcrumbs: false,
  folder: null
};
Header.propTypes = {
  breadcrumbs: prop_types_default().oneOfType([constants/* BreadcrumbsDefinition */.Fv, (prop_types_default()).bool]),
  canCreate: (prop_types_default()).bool.isRequired,
  folder: constants/* FolderDefinition */.nx,
  onToggleEditFolderDialog: (prop_types_default()).func.isRequired,
  onToggleUploadAssetDialog: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useAssets.js
var useAssets = __webpack_require__(73817);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolders.js
var useFolders = __webpack_require__(44466);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useMediaLibraryPermissions.js
var useMediaLibraryPermissions = __webpack_require__(31817);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useFolder.js
var useFolder = __webpack_require__(42047);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/permissions.js
var permissions = __webpack_require__(16838);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/MediaLibrary/index.js




























const BoxWithHeight = (0,styled_components_browser_esm["default"])(dist.Box)`
  height: ${32 / 16}rem;
  display: flex;
  align-items: center;
`;
const TypographyMaxWidth = (0,styled_components_browser_esm["default"])(dist.Typography)`
  max-width: 100%;
`;
const ActionContainer = (0,styled_components_browser_esm["default"])(dist.Box)`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }
`;
const MediaLibrary = () => {
  const { push } = (0,react_router_dom_min.useHistory)();
  const {
    canRead,
    canCreate,
    canUpdate,
    canCopyLink,
    canDownload,
    isLoading: permissionsLoading
  } = (0,useMediaLibraryPermissions/* useMediaLibraryPermissions */.y)();
  const currentFolderToEditRef = (0,react.useRef)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const [{ query }, setQuery] = (0,helper_plugin.useQueryParams)();
  const isFiltering = Boolean(query._q || query.filters);
  const [view, setView] = (0,helper_plugin.usePersistentState)(constants/* localStorageKeys.view */.uf.view, constants/* viewOptions.GRID */.Uk.GRID);
  const isGridView = view === constants/* viewOptions.GRID */.Uk.GRID;
  const {
    data: assetsData,
    isLoading: assetsLoading,
    errors: assetsError
  } = (0,useAssets/* useAssets */.L)({
    skipWhen: !canRead,
    query
  });
  const {
    data: foldersData,
    isLoading: foldersLoading,
    errors: foldersError
  } = (0,useFolders/* useFolders */.j)({
    enabled: canRead && assetsData?.pagination?.page === 1 && !(0,utils/* containsAssetFilter */.rV)(query),
    query
  });
  const {
    data: currentFolder,
    isLoading: isCurrentFolderLoading,
    error: currentFolderError
  } = (0,useFolder/* useFolder */.W)(query?.folder, {
    enabled: canRead && !!query?.folder
  });
  if (currentFolderError?.response?.status === 404) {
    push(pathname);
  }
  const folders = foldersData?.map((folder) => ({
    ...folder,
    type: "folder",
    folderURL: (0,utils/* getFolderURL */.Km)(pathname, query, folder.id),
    isSelectable: canUpdate
  })) ?? [];
  const folderCount = folders?.length || 0;
  const assets = assetsData?.results?.map((asset) => ({ ...asset, type: "asset", isSelectable: canUpdate })) || [];
  const assetCount = assets?.length ?? 0;
  const totalAssetCount = assetsData?.pagination?.total;
  const isLoading = isCurrentFolderLoading || foldersLoading || permissionsLoading || assetsLoading;
  const [showUploadAssetDialog, setShowUploadAssetDialog] = (0,react.useState)(false);
  const [showEditFolderDialog, setShowEditFolderDialog] = (0,react.useState)(false);
  const [assetToEdit, setAssetToEdit] = (0,react.useState)(void 0);
  const [folderToEdit, setFolderToEdit] = (0,react.useState)(void 0);
  const [selected, { selectOne, selectAll }] = (0,helper_plugin.useSelectionState)(["type", "id"], []);
  const indeterminateBulkSelect = selected?.length > 0 && selected?.length !== assetCount + folderCount;
  const toggleUploadAssetDialog = () => setShowUploadAssetDialog((prev) => !prev);
  const toggleEditFolderDialog = ({ created = false } = {}) => {
    if (created && query?.page !== "1") {
      setQuery({
        ...query,
        page: 1
      });
    }
    setShowEditFolderDialog((prev) => !prev);
  };
  const handleBulkSelect = (event, elements) => {
    if (event.target.checked) {
      trackUsage("didSelectAllMediaLibraryElements");
    }
    selectAll(elements);
  };
  const handleChangeSort = (value) => {
    trackUsage("didSortMediaLibraryElements", {
      location: "upload",
      sort: value
    });
    setQuery({ sort: value });
  };
  const handleEditFolder = (folder) => {
    setFolderToEdit(folder);
    setShowEditFolderDialog(true);
  };
  const handleEditFolderClose = (payload) => {
    setFolderToEdit(null);
    toggleEditFolderDialog(payload);
    if (currentFolderToEditRef.current) {
      currentFolderToEditRef.current.focus();
    }
  };
  const handleAssetDeleted = (numberOfAssets) => {
    if (numberOfAssets === assetCount && assetsData.pagination.page === assetsData.pagination.pageCount && assetsData.pagination.page > 1) {
      setQuery({
        ...query,
        page: assetsData.pagination.page - 1
      });
    }
  };
  const handleBulkActionSuccess = () => {
    selectAll();
    handleAssetDeleted(selected.length);
  };
  (0,helper_plugin.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(dist.Layout, null, /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    Header,
    {
      breadcrumbs: !isCurrentFolderLoading && (0,utils/* getBreadcrumbDataML */.M4)(currentFolder, { pathname, query }),
      canCreate,
      onToggleEditFolderDialog: toggleEditFolderDialog,
      onToggleUploadAssetDialog: toggleUploadAssetDialog,
      folder: currentFolder
    }
  ), /* @__PURE__ */ react.createElement(
    dist.ActionLayout,
    {
      startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, canUpdate && isGridView && (assetCount > 0 || folderCount > 0) && /* @__PURE__ */ react.createElement(
        BoxWithHeight,
        {
          paddingLeft: 2,
          paddingRight: 2,
          background: "neutral0",
          hasRadius: true,
          borderColor: "neutral200"
        },
        /* @__PURE__ */ react.createElement(
          dist.BaseCheckbox,
          {
            "aria-label": formatMessage({
              id: (0,utils/* getTrad */.OB)("bulk.select.label"),
              defaultMessage: "Select all folders & assets"
            }),
            indeterminate: indeterminateBulkSelect,
            value: (assetCount > 0 || folderCount > 0) && selected.length === assetCount + folderCount,
            onChange: (e) => handleBulkSelect(e, [...assets, ...folders])
          }
        )
      ), canRead && isGridView && /* @__PURE__ */ react.createElement(SortPicker/* default */.Z, { onChangeSort: handleChangeSort }), canRead && /* @__PURE__ */ react.createElement(Filters, null)),
      endActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(helper_plugin.CheckPermissions, { permissions: permissions/* default.configureView */.Z.configureView }, /* @__PURE__ */ react.createElement(ActionContainer, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          forwardedAs: react_router_dom_min.Link,
          to: {
            pathname: `${pathname}/configuration`,
            search: (0,lib.stringify)(query, { encode: false })
          },
          icon: /* @__PURE__ */ react.createElement(icons_dist.Cog, null),
          label: formatMessage({
            id: "app.links.configure-view",
            defaultMessage: "Configure the view"
          })
        }
      ))), /* @__PURE__ */ react.createElement(ActionContainer, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          icon: isGridView ? /* @__PURE__ */ react.createElement(icons_dist.List, null) : /* @__PURE__ */ react.createElement(icons_dist.Grid, null),
          label: isGridView ? formatMessage({
            id: "view-switch.list",
            defaultMessage: "List View"
          }) : formatMessage({
            id: "view-switch.grid",
            defaultMessage: "Grid View"
          }),
          onClick: () => setView(isGridView ? constants/* viewOptions.LIST */.Uk.LIST : constants/* viewOptions.GRID */.Uk.GRID)
        }
      )), /* @__PURE__ */ react.createElement(
        helper_plugin.SearchURLQuery,
        {
          label: formatMessage({
            id: (0,utils/* getTrad */.OB)("search.label"),
            defaultMessage: "Search for an asset"
          }),
          trackedEvent: "didSearchMediaLibraryElements",
          trackedEventDetails: { location: "upload" }
        }
      ))
    }
  ), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, selected.length > 0 && /* @__PURE__ */ react.createElement(
    BulkActions,
    {
      currentFolder,
      selected,
      onSuccess: handleBulkActionSuccess
    }
  ), isLoading && /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null), (assetsError || foldersError) && /* @__PURE__ */ react.createElement(helper_plugin.AnErrorOccurred, null), folderCount === 0 && assetCount === 0 && /* @__PURE__ */ react.createElement(
    EmptyOrNoPermissions,
    {
      canCreate,
      canRead,
      isFiltering,
      onActionClick: toggleUploadAssetDialog
    }
  ), canRead && !isGridView && (assetCount > 0 || folderCount > 0) && /* @__PURE__ */ react.createElement(
    TableList/* TableList */.b,
    {
      assetCount,
      folderCount,
      indeterminate: indeterminateBulkSelect,
      onChangeSort: handleChangeSort,
      onChangeFolder: (folderID) => push((0,utils/* getFolderURL */.Km)(pathname, query, folderID)),
      onEditAsset: setAssetToEdit,
      onEditFolder: handleEditFolder,
      onSelectOne: selectOne,
      onSelectAll: handleBulkSelect,
      rows: [...folders, ...assets],
      selected,
      shouldDisableBulkSelect: !canUpdate,
      sortQuery: query?.sort ?? ""
    }
  ), canRead && isGridView && /* @__PURE__ */ react.createElement(react.Fragment, null, folderCount > 0 && /* @__PURE__ */ react.createElement(
    FolderGridList/* FolderGridList */.a,
    {
      title: (
        // Folders title should only appear if:
        // user is filtering and there are assets to display, to divide both type of elements
        // user is not filtering
        (isFiltering && assetCount > 0 || !isFiltering) && formatMessage(
          {
            id: (0,utils/* getTrad */.OB)("list.folders.title"),
            defaultMessage: "Folders ({count})"
          },
          { count: folderCount }
        ) || ""
      )
    },
    folders.map((folder) => {
      const selectedFolders = selected.filter(({ type }) => type === "folder");
      const isSelected = !!selectedFolders.find(
        (currentFolder2) => currentFolder2.id === folder.id
      );
      const url = (0,utils/* getFolderURL */.Km)(pathname, query, folder?.id);
      return /* @__PURE__ */ react.createElement(dist.GridItem, { col: 3, key: `folder-${folder.id}` }, /* @__PURE__ */ react.createElement(
        FolderCard/* FolderCard */.Ac,
        {
          ref: folderToEdit && folder.id === folderToEdit.id ? currentFolderToEditRef : void 0,
          ariaLabel: folder.name,
          id: `folder-${folder.id}`,
          to: url,
          startAction: selectOne && folder.isSelectable ? /* @__PURE__ */ react.createElement(
            FolderCard/* FolderCardCheckbox */.MM,
            {
              "data-testid": `folder-checkbox-${folder.id}`,
              value: isSelected,
              onChange: () => selectOne(folder)
            }
          ) : null,
          cardActions: /* @__PURE__ */ react.createElement(
            dist.IconButton,
            {
              icon: /* @__PURE__ */ react.createElement(icons_dist.Pencil, null),
              "aria-label": formatMessage({
                id: (0,utils/* getTrad */.OB)("list.folder.edit"),
                defaultMessage: "Edit folder"
              }),
              onClick: () => handleEditFolder(folder)
            }
          )
        },
        /* @__PURE__ */ react.createElement(FolderCard/* FolderCardBody */.Bu, null, /* @__PURE__ */ react.createElement(FolderCard/* FolderCardBodyAction */.u6, { to: url }, /* @__PURE__ */ react.createElement(dist.Flex, { as: "h2", direction: "column", alignItems: "start", maxWidth: "100%" }, /* @__PURE__ */ react.createElement(TypographyMaxWidth, { fontWeight: "semiBold", ellipsis: true }, folder.name, /* @__PURE__ */ react.createElement(dist.VisuallyHidden, null, ":")), /* @__PURE__ */ react.createElement(
          TypographyMaxWidth,
          {
            as: "span",
            textColor: "neutral600",
            variant: "pi",
            ellipsis: true
          },
          formatMessage(
            {
              id: (0,utils/* getTrad */.OB)("list.folder.subtitle"),
              defaultMessage: "{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"
            },
            {
              folderCount: folder.children.count,
              filesCount: folder.files.count
            }
          )
        ))))
      ));
    })
  ), assetCount > 0 && folderCount > 0 && /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 6, paddingBottom: 4 }, /* @__PURE__ */ react.createElement(dist.Divider, null)), assetCount > 0 && /* @__PURE__ */ react.createElement(
    AssetGridList/* AssetGridList */.r,
    {
      assets,
      onEditAsset: setAssetToEdit,
      onSelectAsset: selectOne,
      selectedAssets: selected.filter(({ type }) => type === "asset"),
      title: (
        // Assets title should only appear if:
        // - user is not filtering
        // - user is filtering and there are folders to display, to separate them
        // - user is on page 1 since folders won't appear on any other page than the first one (no need to visually separate them)
        (!isFiltering || isFiltering && folderCount > 0) && assetsData?.pagination?.page === 1 && formatMessage(
          {
            id: (0,utils/* getTrad */.OB)("list.assets.title"),
            defaultMessage: "Assets ({count})"
          },
          { count: totalAssetCount }
        ) || ""
      )
    }
  )), assetsData?.pagination && /* @__PURE__ */ react.createElement(PaginationFooter, { pagination: assetsData.pagination }))), showUploadAssetDialog && /* @__PURE__ */ react.createElement(
    UploadAssetDialog/* UploadAssetDialog */.x,
    {
      onClose: toggleUploadAssetDialog,
      trackedLocation: "upload",
      folderId: query?.folder
    }
  ), showEditFolderDialog && /* @__PURE__ */ react.createElement(
    EditFolderDialog/* EditFolderDialog */.f,
    {
      onClose: handleEditFolderClose,
      folder: folderToEdit,
      parentFolderId: query?.folder,
      location: "upload"
    }
  ), assetToEdit && /* @__PURE__ */ react.createElement(
    EditAssetDialog/* EditAssetDialog */.s,
    {
      onClose: (editedAsset) => {
        if (editedAsset === null) {
          handleAssetDeleted(1);
        }
        setAssetToEdit(void 0);
      },
      asset: assetToEdit,
      canUpdate,
      canCopyLink,
      canDownload,
      trackedLocation: "upload"
    }
  ));
};

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useConfig.js
var useConfig = __webpack_require__(60862);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/App/index.js










const ConfigureTheView = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Upload_ConfigureTheView */ 9514).then(__webpack_require__.bind(__webpack_require__, 87532))
);
const Upload = () => {
  const {
    config: { isLoading, isError, data: config }
  } = (0,useConfig/* useConfig */.Z)();
  const [{ rawQuery }, setQuery] = (0,helper_plugin.useQueryParams)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const title = formatMessage({ id: (0,utils/* getTrad */.OB)("plugin.name"), defaultMessage: "Media Library" });
  (0,react.useEffect)(() => {
    if (isLoading || isError || rawQuery) {
      return;
    }
    setQuery({ sort: config.sort, page: 1, pageSize: config.pageSize });
  }, [isLoading, isError, config, rawQuery, setQuery]);
  (0,helper_plugin.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(Helmet.Helmet, { title }), isLoading && /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null), rawQuery ? /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null) }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { exact: true, path: `/plugins/${pluginId/* default */.Z}`, component: MediaLibrary }), /* @__PURE__ */ react.createElement(
    react_router_dom_min.Route,
    {
      exact: true,
      path: `/plugins/${pluginId/* default */.Z}/configuration`,
      render: () => /* @__PURE__ */ react.createElement(ConfigureTheView, { config })
    }
  ))) : null);
};
/* harmony default export */ const App = (Upload);


/***/ })

}]);