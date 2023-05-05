"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[5905],{

/***/ 57134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_ListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var design_system_dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(18721);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useFormModalNavigation.js
var useFormModalNavigation = __webpack_require__(26478);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useDataManager.js
var useDataManager = __webpack_require__(13588);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(5002);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentCard/ComponentIcon/ComponentIcon.js




const Wrapper = (0,styled_components_browser_esm["default"])(design_system_dist.Flex)`
  border-radius: 50%;
  color: ${({ theme, isActive }) => isActive ? theme.colors.primary600 : theme.colors.neutral600};
  height: ${({ theme }) => theme.spaces[8]};
  width: ${({ theme }) => theme.spaces[8]};

  svg {
    height: ${({ theme }) => theme.spaces[5]};
    width: ${({ theme }) => theme.spaces[5]};
  }
`;
function ComponentIcon({ isActive }) {
  return /* @__PURE__ */ react.createElement(
    Wrapper,
    {
      alignItems: "center",
      background: isActive ? "primary200" : "neutral200",
      justifyContent: "center",
      isActive
    },
    /* @__PURE__ */ react.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ react.createElement(
      "path",
      {
        d: "M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",
        fill: "currentColor"
      }
    ))
  );
}
ComponentIcon.defaultProps = {
  isActive: false
};
ComponentIcon.propTypes = {
  isActive: (prop_types_default()).bool
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentCard/ComponentIcon/index.js


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentCard/index.js









const CloseButton = (0,styled_components_browser_esm["default"])(design_system_dist.Box)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,helper_plugin.pxToRem)(8)};

  svg {
    width: ${(0,helper_plugin.pxToRem)(10)};
    height: ${(0,helper_plugin.pxToRem)(10)};

    path {
      fill: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const ComponentBox = (0,styled_components_browser_esm["default"])(design_system_dist.Flex)`
  width: ${(0,helper_plugin.pxToRem)(140)};
  height: ${(0,helper_plugin.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background: ${({ theme }) => theme.colors.neutral100};
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    background: ${({ theme }) => theme.colors.primary100};

    ${CloseButton} {
      display: block;
    }

    ${design_system_dist.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({ theme }) => theme.colors.primary200};
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
function ComponentCard({ component, dzName, index, isActive, isInDevelopmentMode, onClick }) {
  const { modifiedData, removeComponentFromDynamicZone } = (0,useDataManager/* default */.Z)();
  const {
    schema: { displayName }
  } = get_default()(modifiedData, ["components", component], { schema: {} });
  const onClose = (e) => {
    e.stopPropagation();
    removeComponentFromDynamicZone(dzName, index);
  };
  return /* @__PURE__ */ react.createElement(
    ComponentBox,
    {
      as: "button",
      alignItems: "center",
      direction: "column",
      className: isActive ? "active" : "",
      borderRadius: "borderRadius",
      justifyContent: "center",
      paddingLeft: 4,
      paddingRight: 4,
      shrink: 0,
      type: "button",
      onClick
    },
    /* @__PURE__ */ react.createElement(ComponentIcon, { isActive }),
    /* @__PURE__ */ react.createElement(design_system_dist.Box, { marginTop: 1, maxWidth: "100%" }, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "pi", fontWeight: "bold", ellipsis: true }, displayName)),
    isInDevelopmentMode && /* @__PURE__ */ react.createElement(CloseButton, { as: "button", onClick: onClose, type: "button" }, /* @__PURE__ */ react.createElement(dist.Cross, null))
  );
}
ComponentCard.defaultProps = {
  component: null,
  isActive: false,
  isInDevelopmentMode: false,
  onClick() {
  }
};
ComponentCard.propTypes = {
  component: (prop_types_default()).string,
  dzName: (prop_types_default()).string.isRequired,
  index: (prop_types_default()).number.isRequired,
  isActive: (prop_types_default()).bool,
  isInDevelopmentMode: (prop_types_default()).bool,
  onClick: (prop_types_default()).func
};
/* harmony default export */ const components_ComponentCard = (ComponentCard);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Tr/index.js


const Tr = styled_components_browser_esm["default"].tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,helper_plugin.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,helper_plugin.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({ isFromDynamicZone, isChildOfDynamicZone, theme }) => {
  if (isChildOfDynamicZone) {
    return `background-color: ${theme.colors.primary200};`;
  }
  if (isFromDynamicZone) {
    return `background-color: ${theme.colors.primary200};`;
  }
  return `background: ${theme.colors.neutral150};`;
}}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;
/* harmony default export */ const components_Tr = (Tr);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentList/index.js






function ComponentList({
  customRowComponent,
  component,
  isFromDynamicZone,
  isNestedInDZComponent,
  firstLoopComponentUid
}) {
  const { modifiedData } = (0,useDataManager/* default */.Z)();
  const {
    schema: { attributes }
  } = get_default()(modifiedData, ["components", component], {
    schema: { attributes: [] }
  });
  return /* @__PURE__ */ react.createElement(components_Tr, { isChildOfDynamicZone: isFromDynamicZone, className: "component-row" }, /* @__PURE__ */ react.createElement("td", { colSpan: 12 }, /* @__PURE__ */ react.createElement(
    components_List,
    {
      customRowComponent,
      items: attributes,
      targetUid: component,
      firstLoopComponentUid: firstLoopComponentUid || component,
      editTarget: "components",
      isFromDynamicZone,
      isNestedInDZComponent,
      isSub: true,
      secondLoopComponentUid: firstLoopComponentUid ? component : null
    }
  )));
}
ComponentList.defaultProps = {
  component: null,
  customRowComponent: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  isNestedInDZComponent: false
};
ComponentList.propTypes = {
  component: (prop_types_default()).string,
  customRowComponent: (prop_types_default()).func,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  isNestedInDZComponent: (prop_types_default()).bool
};
/* harmony default export */ const components_ComponentList = (ComponentList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DynamicZoneList/index.js












const StyledAddIcon = (0,styled_components_browser_esm["default"])(dist.Plus)`
  width: ${(0,helper_plugin.pxToRem)(32)};
  height: ${(0,helper_plugin.pxToRem)(32)};
  padding: ${(0,helper_plugin.pxToRem)(9)};
  border-radius: ${(0,helper_plugin.pxToRem)(64)};
  background: ${({ theme }) => theme.colors.primary100};
  path {
    fill: ${({ theme }) => theme.colors.primary600};
  }
`;
const FixedBox = (0,styled_components_browser_esm["default"])(design_system_dist.Box)`
  height: ${(0,helper_plugin.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;
const ScrollableStack = (0,styled_components_browser_esm["default"])(design_system_dist.Stack)`
  width: 100%;
  overflow-x: auto;
`;
const ComponentContentBox = (0,styled_components_browser_esm["default"])(design_system_dist.Box)`
  padding-top: ${(0,helper_plugin.pxToRem)(90)};
`;
const ComponentStack = (0,styled_components_browser_esm["default"])(design_system_dist.Stack)`
  flex-shrink: 0;
  width: ${(0,helper_plugin.pxToRem)(140)};
  height: ${(0,helper_plugin.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;
function DynamicZoneList({ customRowComponent, components, addComponent, name, targetUid }) {
  const { isInDevelopmentMode } = (0,useDataManager/* default */.Z)();
  const [activeTab, setActiveTab] = (0,react.useState)(0);
  const { formatMessage } = (0,react_intl.useIntl)();
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const handleClickAdd = () => {
    addComponent(name);
  };
  return /* @__PURE__ */ react.createElement(components_Tr, { className: "dynamiczone-row", isFromDynamicZone: true }, /* @__PURE__ */ react.createElement("td", { colSpan: 12 }, /* @__PURE__ */ react.createElement(FixedBox, { paddingLeft: 8 }, /* @__PURE__ */ react.createElement(ScrollableStack, { horizontal: true, spacing: 2 }, isInDevelopmentMode && /* @__PURE__ */ react.createElement("button", { type: "button", onClick: handleClickAdd }, /* @__PURE__ */ react.createElement(ComponentStack, { spacing: 1 }, /* @__PURE__ */ react.createElement(StyledAddIcon, null), /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "pi", fontWeight: "bold", textColor: "primary600" }, formatMessage({
    id: (0,getTrad/* default */.Z)("button.component.add"),
    formatMessage: "Add a component"
  })))), components.map((component, index) => {
    return /* @__PURE__ */ react.createElement(
      components_ComponentCard,
      {
        key: component,
        dzName: name,
        index,
        component,
        isActive: activeTab === index,
        isInDevelopmentMode,
        onClick: () => toggle(index)
      }
    );
  }))), /* @__PURE__ */ react.createElement(ComponentContentBox, null, components.map((component, index) => {
    const props = {
      customRowComponent,
      component
    };
    return /* @__PURE__ */ react.createElement(
      design_system_dist.Box,
      {
        tabId: `${index}`,
        key: component,
        style: { display: activeTab === index ? "block" : "none" }
      },
      /* @__PURE__ */ react.createElement("table", null, /* @__PURE__ */ react.createElement("tbody", null, /* @__PURE__ */ react.createElement(
        components_ComponentList,
        {
          ...props,
          isFromDynamicZone: true,
          targetUid,
          key: component
        }
      )))
    );
  }))));
}
DynamicZoneList.defaultProps = {
  addComponent() {
  },
  components: [],
  customRowComponent: null,
  name: null
};
DynamicZoneList.propTypes = {
  addComponent: (prop_types_default()).func,
  components: prop_types_default().instanceOf(Array),
  customRowComponent: (prop_types_default()).func,
  name: (prop_types_default()).string,
  targetUid: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_DynamicZoneList = (DynamicZoneList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/List/BoxWrapper.js


const BoxWrapper = (0,styled_components_browser_esm["default"])(design_system_dist.Box)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral150};

    & td,
    & th {
      padding: ${({ theme }) => theme.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({ theme }) => theme.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({ theme }) => theme.colors.neutral600};
    outline-offset: -4px;
  }
`;
/* harmony default export */ const List_BoxWrapper = (BoxWrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/NestedTFooter/index.js




const IconBox = (0,styled_components_browser_esm["default"])(design_system_dist.Box)`
  height: ${24 / 16}rem;
  width: ${24 / 16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
  }

  svg path {
    fill: ${({ theme, color }) => theme.colors[`${color}600`]};
  }
`;
const ButtonBox = (0,styled_components_browser_esm["default"])(design_system_dist.Box)`
  border-radius: 0 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`;
const NestedTFooter = ({ children, icon, color, ...props }) => {
  return /* @__PURE__ */ react.createElement(ButtonBox, { paddingBottom: 4, paddingTop: 4, as: "button", type: "button", ...props }, /* @__PURE__ */ react.createElement(design_system_dist.Flex, null, /* @__PURE__ */ react.createElement(IconBox, { color, "aria-hidden": true, background: `${color}200` }, icon), /* @__PURE__ */ react.createElement(design_system_dist.Box, { paddingLeft: 3 }, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "pi", fontWeight: "bold", textColor: `${color}600` }, children))));
};
NestedTFooter.propTypes = {
  color: (prop_types_default()).string.isRequired,
  children: (prop_types_default()).string.isRequired,
  icon: (prop_types_default()).node.isRequired
};
/* harmony default export */ const components_NestedTFooter = (NestedTFooter);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/List/index.js













function List({
  addComponentToDZ,
  customRowComponent,
  editTarget,
  firstLoopComponentUid,
  isFromDynamicZone,
  isMain,
  isNestedInDZComponent,
  isSub,
  items,
  secondLoopComponentUid,
  targetUid
}) {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { isInDevelopmentMode, modifiedData, isInContentTypeView } = (0,useDataManager/* default */.Z)();
  const { onOpenModalAddField } = (0,useFormModalNavigation/* default */.Z)();
  const onClickAddField = () => {
    trackUsage("hasClickedCTBAddFieldBanner");
    onOpenModalAddField({ forTarget: editTarget, targetUid });
  };
  if (!targetUid) {
    return /* @__PURE__ */ react.createElement(design_system_dist.Table, { colCount: 2, rowCount: 2 }, /* @__PURE__ */ react.createElement(design_system_dist.Thead, null, /* @__PURE__ */ react.createElement(design_system_dist.Tr, null, /* @__PURE__ */ react.createElement(design_system_dist.Th, null, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(design_system_dist.Th, null, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement(
      helper_plugin.EmptyBodyTable,
      {
        colSpan: 2,
        content: {
          id: (0,getTrad/* default */.Z)("table.content.create-first-content-type"),
          defaultMessage: "Create your first Collection-Type"
        }
      }
    ));
  }
  if (items.length === 0 && isMain) {
    return /* @__PURE__ */ react.createElement(design_system_dist.Table, { colCount: 2, rowCount: 2 }, /* @__PURE__ */ react.createElement(design_system_dist.Thead, null, /* @__PURE__ */ react.createElement(design_system_dist.Tr, null, /* @__PURE__ */ react.createElement(design_system_dist.Th, null, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(design_system_dist.Th, null, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement(
      helper_plugin.EmptyBodyTable,
      {
        action: /* @__PURE__ */ react.createElement(design_system_dist.Button, { onClick: onClickAddField, size: "L", startIcon: /* @__PURE__ */ react.createElement(dist.Plus, null), variant: "secondary" }, formatMessage({
          id: (0,getTrad/* default */.Z)("table.button.no-fields"),
          defaultMessage: "Add new field"
        })),
        colSpan: 2,
        content: isInContentTypeView ? {
          id: (0,getTrad/* default */.Z)("table.content.no-fields.collection-type"),
          defaultMessage: "Add your first field to this Collection-Type"
        } : {
          id: (0,getTrad/* default */.Z)("table.content.no-fields.component"),
          defaultMessage: "Add your first field to this component"
        }
      }
    ));
  }
  return /* @__PURE__ */ react.createElement(List_BoxWrapper, null, /* @__PURE__ */ react.createElement(
    design_system_dist.Box,
    {
      paddingLeft: 6,
      paddingRight: isMain ? 6 : 0,
      ...isMain && { style: { overflowX: "auto" } }
    },
    /* @__PURE__ */ react.createElement("table", null, isMain && /* @__PURE__ */ react.createElement("thead", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("th", null, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement("th", { colSpan: "2" }, /* @__PURE__ */ react.createElement(design_system_dist.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.type", defaultMessage: "Type" }))))), /* @__PURE__ */ react.createElement("tbody", null, items.map((item) => {
      const { type } = item;
      const CustomRow = customRowComponent;
      return /* @__PURE__ */ react.createElement(react.Fragment, { key: item.name }, /* @__PURE__ */ react.createElement(
        CustomRow,
        {
          ...item,
          isNestedInDZComponent,
          targetUid,
          editTarget,
          firstLoopComponentUid,
          isFromDynamicZone,
          secondLoopComponentUid
        }
      ), type === "component" && /* @__PURE__ */ react.createElement(
        components_ComponentList,
        {
          ...item,
          customRowComponent,
          targetUid,
          isNestedInDZComponent: isFromDynamicZone,
          editTarget,
          firstLoopComponentUid
        }
      ), type === "dynamiczone" && /* @__PURE__ */ react.createElement(
        components_DynamicZoneList,
        {
          ...item,
          customRowComponent,
          addComponent: addComponentToDZ,
          targetUid
        }
      ));
    })))
  ), isMain && isInDevelopmentMode && /* @__PURE__ */ react.createElement(design_system_dist.TFooter, { icon: /* @__PURE__ */ react.createElement(dist.Plus, null), onClick: onClickAddField }, formatMessage({
    id: (0,getTrad/* default */.Z)(
      `form.button.add.field.to.${modifiedData.contentType ? modifiedData.contentType.schema.kind : editTarget || "collectionType"}`
    ),
    defaultMessage: "Add another field"
  })), isSub && isInDevelopmentMode && /* @__PURE__ */ react.createElement(
    components_NestedTFooter,
    {
      icon: /* @__PURE__ */ react.createElement(dist.Plus, null),
      onClick: onClickAddField,
      color: isFromDynamicZone ? "primary" : "neutral"
    },
    formatMessage({
      id: (0,getTrad/* default */.Z)(`form.button.add.field.to.component`),
      defaultMessage: "Add another field"
    })
  ));
}
List.defaultProps = {
  addComponentToDZ() {
  },
  customRowComponent: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  isNestedInDZComponent: false,
  isMain: false,
  isSub: false,
  items: [],
  secondLoopComponentUid: null,
  targetUid: null
};
List.propTypes = {
  addComponentToDZ: (prop_types_default()).func,
  customRowComponent: (prop_types_default()).func,
  editTarget: (prop_types_default()).string.isRequired,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  isNestedInDZComponent: (prop_types_default()).bool,
  isMain: (prop_types_default()).bool,
  items: prop_types_default().instanceOf(Array),
  secondLoopComponentUid: (prop_types_default()).string,
  targetUid: (prop_types_default()).string,
  isSub: (prop_types_default()).bool
};
/* harmony default export */ const components_List = (List);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/icons/Curve.js




const StyledBox = (0,styled_components_browser_esm["default"])(design_system_dist.Box)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4 / 16}rem;
    height: ${12 / 16}rem;
    background: ${({ theme, color }) => theme.colors[color]};
    display: block;
  }
`;
const Svg = styled_components_browser_esm["default"].svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({ theme, color }) => theme.colors[color]};
  }
`;
const Curve = (props) => /* @__PURE__ */ react.createElement(StyledBox, null, /* @__PURE__ */ react.createElement(
  Svg,
  {
    width: "20",
    height: "23",
    viewBox: "0 0 20 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props
  },
  /* @__PURE__ */ react.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"
    }
  )
));
Curve.propTypes = {
  color: (prop_types_default()).string.isRequired
};
/* harmony default export */ const icons_Curve = (Curve);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/UpperFirst/index.js


const UpperFirst = ({ content }) => upperFirst_default()(content);
UpperFirst.defaultProps = {
  content: null
};
UpperFirst.propTypes = {
  content: (prop_types_default()).string
};
/* harmony default export */ const components_UpperFirst = (UpperFirst);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/BoxWrapper.js


const BoxWrapper_BoxWrapper = (0,styled_components_browser_esm["default"])(design_system_dist.Box)`
  position: relative;
`;
/* harmony default export */ const ListRow_BoxWrapper = (BoxWrapper_BoxWrapper);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeIcon/index.js
var AttributeIcon = __webpack_require__(68314);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/DisplayedType.js





const DisplayedType = ({ type, customField, repeatable }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  let readableType = type;
  if (["integer", "biginteger", "float", "decimal"].includes(type)) {
    readableType = "number";
  } else if (["string"].includes(type)) {
    readableType = "text";
  }
  if (customField) {
    return /* @__PURE__ */ react.createElement(design_system_dist.Typography, null, formatMessage({
      id: (0,getTrad/* default */.Z)("attribute.customField"),
      defaultMessage: "Custom field"
    }));
  }
  return /* @__PURE__ */ react.createElement(design_system_dist.Typography, null, formatMessage({
    id: (0,getTrad/* default */.Z)(`attribute.${readableType}`),
    defaultMessage: type
  }), "\xA0", repeatable && formatMessage({
    id: (0,getTrad/* default */.Z)("component.repeatable"),
    defaultMessage: "(repeatable)"
  }));
};
DisplayedType.defaultProps = {
  customField: null,
  repeatable: false
};
DisplayedType.propTypes = {
  type: (prop_types_default()).string.isRequired,
  customField: (prop_types_default()).string,
  repeatable: (prop_types_default()).bool
};
/* harmony default export */ const ListRow_DisplayedType = (DisplayedType);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ListRow/index.js














function ListRow({
  configurable,
  customField,
  editTarget,
  firstLoopComponentUid,
  isFromDynamicZone,
  name,
  onClick,
  relation,
  repeatable,
  secondLoopComponentUid,
  target,
  targetUid,
  type
}) {
  const { contentTypes, isInDevelopmentMode, removeAttribute } = (0,useDataManager/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const isMorph = type === "relation" && relation.includes("morph");
  const ico = ["integer", "biginteger", "float", "decimal"].includes(type) ? "number" : type;
  const contentType = get_default()(contentTypes, [target], {});
  const contentTypeFriendlyName = get_default()(contentType, ["schema", "displayName"], "");
  const isPluginContentType = get_default()(contentType, "plugin");
  const src = target ? "relation" : ico;
  const handleClick = () => {
    if (isMorph) {
      return;
    }
    if (configurable !== false) {
      const attrType = type;
      onClick(
        // Tells where the attribute is located in the main modifiedData object : contentType, component or components
        editTarget,
        // main data type uid
        secondLoopComponentUid || firstLoopComponentUid || targetUid,
        // Name of the attribute
        name,
        // Type of the attribute
        attrType,
        customField
      );
    }
  };
  let loopNumber;
  if (secondLoopComponentUid && firstLoopComponentUid) {
    loopNumber = 2;
  } else if (firstLoopComponentUid) {
    loopNumber = 1;
  } else {
    loopNumber = 0;
  }
  return /* @__PURE__ */ react.createElement(
    ListRow_BoxWrapper,
    {
      as: "tr",
      ...(0,helper_plugin.onRowClick)({
        fn: handleClick,
        condition: isInDevelopmentMode && configurable && !isMorph
      })
    },
    /* @__PURE__ */ react.createElement("td", { style: { position: "relative" } }, loopNumber !== 0 && /* @__PURE__ */ react.createElement(icons_Curve, { color: isFromDynamicZone ? "primary200" : "neutral150" }), /* @__PURE__ */ react.createElement(design_system_dist.Stack, { paddingLeft: 2, spacing: 4, horizontal: true }, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, { type: src, customField }), /* @__PURE__ */ react.createElement(design_system_dist.Typography, { fontWeight: "bold" }, name))),
    /* @__PURE__ */ react.createElement("td", null, target ? /* @__PURE__ */ react.createElement(design_system_dist.Typography, null, formatMessage({
      id: (0,getTrad/* default */.Z)(
        `modelPage.attribute.${isMorph ? "relation-polymorphic" : "relationWith"}`
      ),
      defaultMessage: "Relation with"
    }), "\xA0", /* @__PURE__ */ react.createElement("span", { style: { fontStyle: "italic" } }, /* @__PURE__ */ react.createElement(components_UpperFirst, { content: contentTypeFriendlyName }), "\xA0", isPluginContentType && `(${formatMessage({
      id: (0,getTrad/* default */.Z)(`from`),
      defaultMessage: "from"
    })}: ${isPluginContentType})`)) : /* @__PURE__ */ react.createElement(ListRow_DisplayedType, { type, customField, repeatable })),
    /* @__PURE__ */ react.createElement("td", null, isInDevelopmentMode ? /* @__PURE__ */ react.createElement(design_system_dist.Flex, { justifyContent: "flex-end", ...helper_plugin.stopPropagation }, configurable ? /* @__PURE__ */ react.createElement(design_system_dist.Stack, { horizontal: true, spacing: 1 }, !isMorph && /* @__PURE__ */ react.createElement(
      design_system_dist.IconButton,
      {
        onClick: handleClick,
        label: `${formatMessage({
          id: "app.utils.edit",
          defaultMessage: "Edit"
        })} ${name}`,
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(dist.Pencil, null)
      }
    ), /* @__PURE__ */ react.createElement(
      design_system_dist.IconButton,
      {
        onClick: (e) => {
          e.stopPropagation();
          removeAttribute(
            editTarget,
            name,
            secondLoopComponentUid || firstLoopComponentUid || ""
          );
        },
        label: `${formatMessage({
          id: "global.delete",
          defaultMessage: "Delete"
        })} ${name}`,
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(dist.Trash, null)
      }
    )) : /* @__PURE__ */ react.createElement(dist.Lock, null)) : (
      /*
        In production mode the edit icons aren't visible, therefore
        we need to reserve the same space, otherwise the height of the
        row might collapse, leading to bad positioned curve icons
      */
      /* @__PURE__ */ react.createElement(design_system_dist.Box, { height: (0,helper_plugin.pxToRem)(32) })
    ))
  );
}
ListRow.defaultProps = {
  configurable: true,
  customField: null,
  firstLoopComponentUid: null,
  isFromDynamicZone: false,
  onClick() {
  },
  relation: "",
  repeatable: false,
  secondLoopComponentUid: null,
  target: null,
  targetUid: null,
  type: null
};
ListRow.propTypes = {
  configurable: (prop_types_default()).bool,
  customField: (prop_types_default()).string,
  editTarget: (prop_types_default()).string.isRequired,
  firstLoopComponentUid: (prop_types_default()).string,
  isFromDynamicZone: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired,
  onClick: (prop_types_default()).func,
  relation: (prop_types_default()).string,
  repeatable: (prop_types_default()).bool,
  secondLoopComponentUid: (prop_types_default()).string,
  target: (prop_types_default()).string,
  targetUid: (prop_types_default()).string,
  type: (prop_types_default()).string
};
/* harmony default export */ const components_ListRow = ((0,react.memo)(ListRow));


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getAttributeDisplayedType.js
const getAttributeDisplayedType = (type) => {
  let displayedType;
  switch (type) {
    case "date":
    case "datetime":
    case "time":
    case "timestamp":
      displayedType = "date";
      break;
    case "integer":
    case "biginteger":
    case "decimal":
    case "float":
      displayedType = "number";
      break;
    case "string":
    case "text":
      displayedType = "text";
      break;
    case "":
      displayedType = "relation";
      break;
    default:
      displayedType = type;
  }
  return displayedType;
};
/* harmony default export */ const utils_getAttributeDisplayedType = (getAttributeDisplayedType);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/ListView/LinkToCMSettingsView/index.js







const cmPermissions = {
  collectionTypesConfigurations: [
    {
      action: "plugin::content-manager.collection-types.configure-view",
      subject: null
    }
  ],
  componentsConfigurations: [
    {
      action: "plugin::content-manager.components.configure-layout",
      subject: null
    }
  ],
  singleTypesConfigurations: [
    {
      action: "plugin::content-manager.single-types.configure-view",
      subject: null
    }
  ]
};
const LinkToCMSettingsView = ({
  disabled,
  isTemporary,
  isInContentTypeView,
  contentTypeKind,
  targetUid
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const { collectionTypesConfigurations, componentsConfigurations, singleTypesConfigurations } = cmPermissions;
  const label = formatMessage({ id: "content-type-builder.form.button.configure-view" });
  let permissionsToApply = collectionTypesConfigurations;
  const handleClick = () => {
    if (isTemporary) {
      return false;
    }
    if (isInContentTypeView) {
      push(`/content-manager/collectionType/${targetUid}/configurations/edit`);
    } else {
      push(`/content-manager/components/${targetUid}/configurations/edit`);
    }
    return false;
  };
  if (isInContentTypeView && contentTypeKind === "singleType") {
    permissionsToApply = singleTypesConfigurations;
  }
  if (!isInContentTypeView) {
    permissionsToApply = componentsConfigurations;
  }
  return /* @__PURE__ */ react.createElement(helper_plugin.CheckPermissions, { permissions: permissionsToApply }, /* @__PURE__ */ react.createElement(
    design_system_dist.Button,
    {
      startIcon: /* @__PURE__ */ react.createElement(dist.Layer, null),
      variant: "tertiary",
      onClick: handleClick,
      disabled: isTemporary || disabled
    },
    label
  ));
};
LinkToCMSettingsView.defaultProps = {
  contentTypeKind: "collectionType",
  isInContentTypeView: true,
  isTemporary: false,
  targetUid: ""
};
LinkToCMSettingsView.propTypes = {
  disabled: (prop_types_default()).bool.isRequired,
  contentTypeKind: (prop_types_default()).string,
  isInContentTypeView: (prop_types_default()).bool,
  isTemporary: (prop_types_default()).bool,
  targetUid: (prop_types_default()).string
};
/* harmony default export */ const ListView_LinkToCMSettingsView = ((0,react.memo)(LinkToCMSettingsView));

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/ListView/index.js

















const ListView = () => {
  const { initialData, modifiedData, isInDevelopmentMode, isInContentTypeView, submitData } = (0,useDataManager/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const match = (0,react_router_dom_min.useRouteMatch)("/plugins/content-type-builder/:kind/:currentUID");
  const {
    onOpenModalAddComponentsToDZ,
    onOpenModalAddField,
    onOpenModalEditField,
    onOpenModalEditSchema,
    onOpenModalEditCustomField
  } = (0,useFormModalNavigation/* default */.Z)();
  const firstMainDataPath = isInContentTypeView ? "contentType" : "component";
  const mainDataTypeAttributesPath = [firstMainDataPath, "schema", "attributes"];
  const targetUid = get_default()(modifiedData, [firstMainDataPath, "uid"]);
  const isTemporary = get_default()(modifiedData, [firstMainDataPath, "isTemporary"], false);
  const contentTypeKind = get_default()(modifiedData, [firstMainDataPath, "schema", "kind"], null);
  const attributes = get_default()(modifiedData, mainDataTypeAttributesPath, []);
  const isFromPlugin = has_default()(initialData, [firstMainDataPath, "plugin"]);
  const hasModelBeenModified = !isEqual_default()(modifiedData, initialData);
  const forTarget = isInContentTypeView ? "contentType" : "component";
  const handleClickAddComponentToDZ = (dynamicZoneTarget) => {
    onOpenModalAddComponentsToDZ({ dynamicZoneTarget, targetUid });
  };
  const handleClickEditField = async (forTarget2, targetUid2, attributeName, type, customField) => {
    const attributeType = utils_getAttributeDisplayedType(type);
    const step = type === "component" ? "2" : null;
    if (customField) {
      onOpenModalEditCustomField({
        forTarget: forTarget2,
        targetUid: targetUid2,
        attributeName,
        attributeType,
        customFieldUid: customField
      });
    } else {
      onOpenModalEditField({
        forTarget: forTarget2,
        targetUid: targetUid2,
        attributeName,
        attributeType,
        step
      });
    }
  };
  let label = get_default()(modifiedData, [firstMainDataPath, "schema", "displayName"], "");
  const kind = get_default()(modifiedData, [firstMainDataPath, "schema", "kind"], "");
  const isCreatingFirstContentType = match?.params.currentUID === "create-content-type";
  if (!label && isCreatingFirstContentType) {
    label = formatMessage({
      id: (0,getTrad/* default */.Z)("button.model.create"),
      defaultMessage: "Create new collection type"
    });
  }
  const onEdit = () => {
    const contentType = kind || firstMainDataPath;
    if (contentType === "collectionType") {
      trackUsage("willEditNameOfContentType");
    }
    if (contentType === "singleType") {
      trackUsage("willEditNameOfSingleType");
    }
    onOpenModalEditSchema({
      modalType: firstMainDataPath,
      forTarget: firstMainDataPath,
      targetUid,
      kind: contentType
    });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    react_router_dom_min.Prompt,
    {
      message: formatMessage({ id: (0,getTrad/* default */.Z)("prompt.unsaved") }),
      when: hasModelBeenModified
    }
  ), /* @__PURE__ */ react.createElement(
    design_system_dist.HeaderLayout,
    {
      id: "title",
      primaryAction: isInDevelopmentMode && /* @__PURE__ */ react.createElement(design_system_dist.Stack, { horizontal: true, spacing: 2 }, !isCreatingFirstContentType && /* @__PURE__ */ react.createElement(
        design_system_dist.Button,
        {
          startIcon: /* @__PURE__ */ react.createElement(dist.Plus, null),
          variant: "secondary",
          onClick: () => {
            onOpenModalAddField({ forTarget, targetUid });
          }
        },
        formatMessage({ id: (0,getTrad/* default */.Z)("button.attributes.add.another") })
      ), /* @__PURE__ */ react.createElement(
        design_system_dist.Button,
        {
          startIcon: /* @__PURE__ */ react.createElement(dist.Check, null),
          onClick: () => submitData(),
          type: "submit",
          disabled: isEqual_default()(modifiedData, initialData)
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      )),
      secondaryAction: isInDevelopmentMode && !isFromPlugin && !isCreatingFirstContentType && /* @__PURE__ */ react.createElement(design_system_dist.Button, { startIcon: /* @__PURE__ */ react.createElement(dist.Pencil, null), variant: "tertiary", onClick: onEdit }, formatMessage({
        id: "app.utils.edit",
        defaultMessage: "Edit"
      })),
      title: upperFirst_default()(label),
      subtitle: formatMessage({
        id: (0,getTrad/* default */.Z)("listView.headerLayout.description"),
        defaultMessage: "Build the data architecture of your content"
      }),
      navigationAction: /* @__PURE__ */ react.createElement(helper_plugin.Link, { startIcon: /* @__PURE__ */ react.createElement(dist.ArrowLeft, null), to: "/plugins/content-type-builder/" }, formatMessage({
        id: "global.back",
        defaultMessage: "Back"
      }))
    }
  ), /* @__PURE__ */ react.createElement(design_system_dist.ContentLayout, null, /* @__PURE__ */ react.createElement(design_system_dist.Stack, { spacing: 4 }, /* @__PURE__ */ react.createElement(design_system_dist.Flex, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(design_system_dist.Stack, { horizontal: true, spacing: 2 }, /* @__PURE__ */ react.createElement(
    ListView_LinkToCMSettingsView,
    {
      key: "link-to-cm-settings-view",
      targetUid,
      isTemporary,
      isInContentTypeView,
      contentTypeKind,
      disabled: isCreatingFirstContentType
    }
  ))), /* @__PURE__ */ react.createElement(design_system_dist.Box, { background: "neutral0", shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(
    components_List,
    {
      items: attributes,
      customRowComponent: (props) => /* @__PURE__ */ react.createElement(components_ListRow, { ...props, onClick: handleClickEditField }),
      addComponentToDZ: handleClickAddComponentToDZ,
      targetUid,
      editTarget: forTarget,
      isMain: true
    }
  )))));
};
/* harmony default export */ const pages_ListView = (ListView);


/***/ })

}]);