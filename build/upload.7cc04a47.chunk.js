"use strict";
(self["webpackChunkproject_kru_2023"] = self["webpackChunkproject_kru_2023"] || []).push([[3650],{

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
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(80129);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.js
var ActionLayout = __webpack_require__(36989);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(70004);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
var BaseCheckbox = __webpack_require__(41451);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(4585);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cog.js
var Cog = __webpack_require__(78114);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Grid.js
var Grid = __webpack_require__(29729);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/List.js
var List = __webpack_require__(50738);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/UploadAssetDialog/UploadAssetDialog.js + 7 modules
var UploadAssetDialog = __webpack_require__(33012);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EditFolderDialog/index.js + 5 modules
var EditFolderDialog = __webpack_require__(78971);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/EditAssetDialog/index.js + 14 modules
var EditAssetDialog = __webpack_require__(11900);
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
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(build.PageSizeURLQuery, null), /* @__PURE__ */ react.createElement(build.PaginationURLQuery, { pagination })));
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

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/constants.js
var constants = __webpack_require__(49826);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(15537);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
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
    Button/* Button */.z,
    {
      variant: "danger-light",
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement(Trash["default"], null),
      onClick: () => setShowConfirmDialog(true)
    },
    formatMessage({ id: "global.delete", defaultMessage: "Delete" })
  ), /* @__PURE__ */ react.createElement(
    build.ConfirmDialog,
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

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Folder.js
var Folder = __webpack_require__(32605);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid_Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(88655);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(42866);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(59946);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(24969);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(36856);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js
var FieldLabel = __webpack_require__(64777);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var react_query_lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pluginId.js
var pluginId = __webpack_require__(55994);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/index.js + 8 modules
var utils = __webpack_require__(57197);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/hooks/useBulkMove.js




const useBulkMove = () => {
  const toggleNotification = (0,build.useNotification)();
  const queryClient = (0,react_query_lib.useQueryClient)();
  const url = (0,utils/* getRequestUrl */.IF)("actions/bulk-move");
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
    return utils/* axiosInstance.post */.be.post(url, { ...payload, destinationFolderId });
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
      const errors = (0,build.getAPIInnerErrors)(error, { getTrad: utils/* getTrad */.OB });
      const formikErrors = Object.entries(errors).reduce((acc, [key, error2]) => {
        acc[key || "destination"] = error2.defaultMessage;
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
    return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center", paddingTop: 4, paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({
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
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.P, { onClose: handleClose, labelledBy: "title" }, /* @__PURE__ */ react.createElement(dist.Formik, { validateOnChange: false, onSubmit: handleSubmit, initialValues: initialFormData }, ({ values, errors, setFieldValue }) => /* @__PURE__ */ react.createElement(build.Form, { noValidate: true }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "bold", textColor: "neutral800", as: "h2", id: "title" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("modal.folder.move.title"),
    defaultMessage: "Move elements to"
  }))), /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.f, null, /* @__PURE__ */ react.createElement(Grid_Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { xs: 12, col: 12 }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 1 }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, { htmlFor: "folder-destination" }, formatMessage({
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
    Typography/* Typography */.Z,
    {
      variant: "pi",
      as: "p",
      id: "folder-destination-error",
      textColor: "danger600"
    },
    errors.destination
  ))))), /* @__PURE__ */ react.createElement(
    ModalFooter/* ModalFooter */.m,
    {
      startActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: handleClose, variant: "tertiary", name: "cancel" }, formatMessage({ id: "cancel", defaultMessage: "Cancel" })),
      endActions: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", loading: isLoading }, formatMessage({ id: "modal.folder.move.submit", defaultMessage: "Move" }))
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
    Button/* Button */.z,
    {
      variant: "secondary",
      size: "S",
      startIcon: /* @__PURE__ */ react.createElement(Folder/* default */.Z, null),
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
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 2, paddingBottom: 5 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600" }, formatMessage(
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

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyPermissions.js
var EmptyPermissions = __webpack_require__(65169);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
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
      icon: !canRead ? EmptyPermissions["default"] : null,
      action: canCreate && !isFiltering && /* @__PURE__ */ react.createElement(Button/* Button */.z, { variant: "secondary", startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), onClick: onActionClick }, formatMessage({
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
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Filter.js
var Filter = __webpack_require__(89597);
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
  const { trackUsage } = (0,build.useTracking)();
  const [{ query }, setQuery] = (0,build.useQueryParams)();
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
    Button/* Button */.z,
    {
      variant: "tertiary",
      ref: buttonRef,
      startIcon: /* @__PURE__ */ react.createElement(Filter/* default */.Z, null),
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

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.js
var Link = __webpack_require__(23620);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/components/Breadcrumbs/index.js + 9 modules
var Breadcrumbs = __webpack_require__(67851);
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
  const [{ query }] = (0,build.useQueryParams)();
  const backQuery = {
    ...query,
    folder: folder?.parent?.id ?? void 0
  };
  return /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
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
        Link/* Link */.r,
        {
          startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null),
          to: `${pathname}?${(0,lib.stringify)(backQuery, { encode: false })}`
        },
        formatMessage({
          id: (0,utils/* getTrad */.OB)("header.actions.folder-level-up"),
          defaultMessage: "Back"
        })
      ),
      primaryAction: canCreate && /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { horizontal: true, spacing: 2 }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), variant: "secondary", onClick: onToggleEditFolderDialog }, formatMessage({
        id: (0,utils/* getTrad */.OB)("header.actions.add-folder"),
        defaultMessage: "Add new folder"
      })), /* @__PURE__ */ react.createElement(Button/* Button */.z, { startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null), onClick: onToggleUploadAssetDialog }, formatMessage({
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








































const BoxWithHeight = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  height: ${32 / 16}rem;
  display: flex;
  align-items: center;
`;
const TypographyMaxWidth = (0,styled_components_browser_esm["default"])(Typography/* Typography */.Z)`
  max-width: 100%;
`;
const ActionContainer = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
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
  const { trackUsage } = (0,build.useTracking)();
  const [{ query }, setQuery] = (0,build.useQueryParams)();
  const isFiltering = Boolean(query._q || query.filters);
  const [view, setView] = (0,build.usePersistentState)(constants/* localStorageKeys.view */.uf.view, constants/* viewOptions.GRID */.Uk.GRID);
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
  const [selected, { selectOne, selectAll }] = (0,build.useSelectionState)(["type", "id"], []);
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
  (0,build.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(
    Header,
    {
      breadcrumbs: !isCurrentFolderLoading && (0,utils/* getBreadcrumbDataML */.M4)(currentFolder, { pathname, query }),
      canCreate,
      onToggleEditFolderDialog: toggleEditFolderDialog,
      onToggleUploadAssetDialog: toggleUploadAssetDialog,
      folder: currentFolder
    }
  ), /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.Z,
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
          BaseCheckbox/* BaseCheckbox */.C,
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
      endActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(build.CheckPermissions, { permissions: permissions/* default.configureView */.Z.configureView }, /* @__PURE__ */ react.createElement(ActionContainer, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          forwardedAs: react_router_dom_min.Link,
          to: {
            pathname: `${pathname}/configuration`,
            search: (0,lib.stringify)(query, { encode: false })
          },
          icon: /* @__PURE__ */ react.createElement(Cog/* default */.Z, null),
          label: formatMessage({
            id: "app.links.configure-view",
            defaultMessage: "Configure the view"
          })
        }
      ))), /* @__PURE__ */ react.createElement(ActionContainer, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.h,
        {
          icon: isGridView ? /* @__PURE__ */ react.createElement(List/* default */.Z, null) : /* @__PURE__ */ react.createElement(Grid/* default */.Z, null),
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
        build.SearchURLQuery,
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
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, selected.length > 0 && /* @__PURE__ */ react.createElement(
    BulkActions,
    {
      currentFolder,
      selected,
      onSuccess: handleBulkActionSuccess
    }
  ), isLoading && /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null), (assetsError || foldersError) && /* @__PURE__ */ react.createElement(build.AnErrorOccurred, null), folderCount === 0 && assetCount === 0 && /* @__PURE__ */ react.createElement(
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
      return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 3, key: `folder-${folder.id}` }, /* @__PURE__ */ react.createElement(
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
            IconButton/* IconButton */.h,
            {
              icon: /* @__PURE__ */ react.createElement(Pencil/* default */.Z, null),
              "aria-label": formatMessage({
                id: (0,utils/* getTrad */.OB)("list.folder.edit"),
                defaultMessage: "Edit folder"
              }),
              onClick: () => handleEditFolder(folder)
            }
          )
        },
        /* @__PURE__ */ react.createElement(FolderCard/* FolderCardBody */.Bu, null, /* @__PURE__ */ react.createElement(FolderCard/* FolderCardBodyAction */.u6, { to: url }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { as: "h2", direction: "column", alignItems: "start", maxWidth: "100%" }, /* @__PURE__ */ react.createElement(TypographyMaxWidth, { fontWeight: "semiBold", ellipsis: true }, folder.name, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, ":")), /* @__PURE__ */ react.createElement(
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
  ), assetCount > 0 && folderCount > 0 && /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6, paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Divider/* Divider */.i, null)), assetCount > 0 && /* @__PURE__ */ react.createElement(
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
  const [{ rawQuery }, setQuery] = (0,build.useQueryParams)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const title = formatMessage({ id: (0,utils/* getTrad */.OB)("plugin.name"), defaultMessage: "Media Library" });
  (0,react.useEffect)(() => {
    if (isLoading || isError || rawQuery) {
      return;
    }
    setQuery({ sort: config.sort, page: 1, pageSize: config.pageSize });
  }, [isLoading, isError, config, rawQuery, setQuery]);
  (0,build.useFocusWhenNavigate)();
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(Helmet.Helmet, { title }), isLoading && /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null), rawQuery ? /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null) }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { exact: true, path: `/plugins/${pluginId/* default */.Z}`, component: MediaLibrary }), /* @__PURE__ */ react.createElement(
    react_router_dom_min.Route,
    {
      exact: true,
      path: `/plugins/${pluginId/* default */.Z}/configuration`,
      render: () => /* @__PURE__ */ react.createElement(ConfigureTheView, { config })
    }
  ))) : null);
};
/* harmony default export */ const App = (Upload);


/***/ }),

/***/ 36989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ 17034:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71893);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);




const a = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)`
  display: grid;
  grid-template-columns: ${({ hasSideNav: e }) => e ? "auto 1fr" : "1fr"};
`, m = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)`
  overflow-x: hidden;
`, i = ({ sideNav: e, children: n }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(a, {
  hasSideNav: Boolean(e)
}, e, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(m, {
  paddingBottom: 10
}, n));
i.defaultProps = {
  sideNav: void 0
};
i.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.node.isRequired,
  sideNav: prop_types__WEBPACK_IMPORTED_MODULE_3__.node
};



/***/ }),

/***/ 185:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ 67109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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