"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[4977],{

/***/ 11809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ screens_Patterns)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/helpers/pluginId.js
var pluginId = __webpack_require__(92869);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
// EXTERNAL MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/permissions.js
var permissions = __webpack_require__(32783);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(88655);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Plus.js

function e(h) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...h,
    children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
      d: "M24 13.604a.3.3 0 01-.3.3h-9.795V23.7a.3.3 0 01-.3.3h-3.21a.3.3 0 01-.3-.3v-9.795H.3a.3.3 0 01-.3-.3v-3.21a.3.3 0 01.3-.3h9.795V.3a.3.3 0 01.3-.3h3.21a.3.3 0 01.3.3v9.795H23.7a.3.3 0 01.3.3v3.21z",
      fill: "#212134"
    })
  });
}


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js + 2 modules
var Table = __webpack_require__(11057);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js + 1 modules
var Thead = __webpack_require__(63985);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js + 1 modules
var Tr = __webpack_require__(47144);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js + 2 modules
var Cell = __webpack_require__(92439);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js + 1 modules
var Tbody = __webpack_require__(550);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Pencil.js

function n(l) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...l,
    children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M23.604 3.514c.528.528.528 1.36 0 1.887l-2.622 2.607-4.99-4.99L18.6.396a1.322 1.322 0 011.887 0l3.118 3.118zM0 24v-4.99l14.2-14.2 4.99 4.99L4.99 24H0z",
      fill: "#212134"
    })
  });
}


;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Trash.js

function a(t) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
      d: "M3.236 6.149a.2.2 0 00-.197.233L6 24h12l2.96-17.618a.2.2 0 00-.196-.233H3.236zM21.8 1.983c.11 0 .2.09.2.2v1.584a.2.2 0 01-.2.2H2.2a.2.2 0 01-.2-.2V2.183c0-.11.09-.2.2-.2h5.511c.9 0 1.631-1.09 1.631-1.983h5.316c0 .894.73 1.983 1.631 1.983H21.8z",
      fill: "#32324D"
    })
  });
}


;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/screens/Patterns/ListPage/components/TableBody/index.js











const TableBody = ({ patterns }) => {
  const [statePatterns, setStatePatterns] = (0,react.useState)(patterns);
  const { formatMessage } = (0,react_intl.useIntl)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const handleClickDelete = (id) => {
    (0,helper_plugin.request)(`/url-alias/pattern/delete/${id}`, {
      method: "GET"
    }).then((res) => {
      const newPatterns = statePatterns.filter((pattern) => pattern.id !== id);
      setStatePatterns(newPatterns);
      toggleNotification({ type: "success", message: { id: "url-alias.settings.success.delete" } });
    }).catch((err) => {
      toggleNotification({ type: "warning", message: { id: "notification.error" } });
    });
  };
  const handleClickEdit = (id) => {
    push(`/settings/${(pluginId_default())}/patterns/${id}`);
  };
  return /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, statePatterns.map((pattern) => /* @__PURE__ */ react.createElement(Tr.Tr, { key: pattern.label, ...(0,helper_plugin.onRowClick)({ fn: () => handleClickEdit(pattern.id) }) }, /* @__PURE__ */ react.createElement(Cell.Td, { width: "20%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, pattern.label)), /* @__PURE__ */ react.createElement(Cell.Td, { width: "50%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, pattern.pattern)), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "end", ...helper_plugin.stopPropagation }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => handleClickEdit(pattern.id),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(n, null),
      label: formatMessage(
        { id: "url-alias.settings.page.patterns.table.actions.edit", defaultMessage: "Edit {target}" },
        { target: `${pattern.label}` }
      )
    }
  ), /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.h,
    {
      onClick: () => handleClickDelete(pattern.id),
      noBorder: true,
      icon: /* @__PURE__ */ react.createElement(a, null),
      label: formatMessage(
        { id: "url-alias.settings.page.patterns.table.actions.delete", defaultMessage: "Delete {target}" },
        { target: `${pattern.label}` }
      )
    }
  ))))));
};
/* harmony default export */ const components_TableBody = (TableBody);

;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/screens/Patterns/ListPage/components/Table/index.js







const TableComponent = ({ patterns }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const colCount = 3;
  const rowCount = (patterns?.length || 0) + 1;
  return /* @__PURE__ */ react.createElement("div", null, patterns && patterns.length > 0 ? /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount, rowCount }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "settings.page.patterns.table.head.label", defaultMessage: "Label" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "settings.page.patterns.table.head.pattern",
    defaultMessage: "Pattern"
  }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, formatMessage({
    id: "settings.page.patterns.table.head.actions",
    defaultMessage: "Actions"
  }))))), /* @__PURE__ */ react.createElement(
    components_TableBody,
    {
      patterns
    }
  )) : /* @__PURE__ */ react.createElement(helper_plugin.EmptyStateLayout, { content: {
    id: "settings.page.patterns.table.empty",
    defaultMessage: "You don't have any patterns yet."
  } }));
};
/* harmony default export */ const components_Table = (TableComponent);

;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/components/Center/index.js

const Center = ({ children }) => {
  return /* @__PURE__ */ react.createElement("div", { style: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, children);
};
/* harmony default export */ const components_Center = (Center);

;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/screens/Patterns/ListPage/index.js












const ListPatternPage = () => {
  const [patterns, setPatterns] = (0,react.useState)([]);
  const [loading, setLoading] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const { push } = (0,react_router_dom_min.useHistory)();
  (0,react.useEffect)(() => {
    setLoading(true);
    (0,helper_plugin.request)(`/url-alias/pattern/findMany`, { method: "GET" }).then((res) => {
      setPatterns(res);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);
  if (loading || !patterns) {
    return /* @__PURE__ */ react.createElement(components_Center, null, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({ id: "url-alias.settings.loading", defaultMessage: "Loading content..." })));
  }
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({ id: "url-alias.settings.page.patterns.title", defaultMessage: "Patterns" }),
      subtitle: formatMessage({ id: "url-alias.settings.page.patterns.description", defaultMessage: "A list of all the known URL alias patterns." }),
      as: "h2",
      primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: () => push(`/settings/${(pluginId_default())}/patterns/new`), startIcon: /* @__PURE__ */ react.createElement(e, null), size: "L" }, formatMessage({
        id: "url-alias.settings.button.add_pattern",
        defaultMessage: "Add new pattern"
      }))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(components_Table, { patterns })));
};
/* harmony default export */ const ListPage = (ListPatternPage);

// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.js
var Link = __webpack_require__(23620);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js

function r(e) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
      d: "M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",
      fill: "#212134"
    })
  });
}


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Check.js

function Check_a(e) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ (0,jsx_runtime.jsx)("path", {
      d: "M20.727 2.97a.2.2 0 01.286 0l2.85 2.89a.2.2 0 010 .28L9.554 20.854a.2.2 0 01-.285 0l-9.13-9.243a.2.2 0 010-.281l2.85-2.892a.2.2 0 01.284 0l6.14 6.209L20.726 2.97z",
      fill: "#212134"
    })
  });
}


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridContext.js
var GridContext = __webpack_require__(86675);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js





const u = styled_components_browser_esm["default"].div`
  grid-column: span ${({ col: r }) => r};
  max-width: 100%;

  ${({ theme: r }) => r.mediaQueries.tablet} {
    grid-column: span ${({ s: r }) => r};
  }

  ${({ theme: r }) => r.mediaQueries.mobile} {
    grid-column: span ${({ xs: r }) => r};
  }
`, m = ({ col: r, xs: t, s: i, ...p }) => {
  const { gap: s, gridCols: d } = (0,GridContext/* useGrid */.N)();
  return /* @__PURE__ */ react.createElement(u, {
    gap: s,
    gridCols: d,
    col: r,
    xs: t,
    s: i
  }, /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    ...p
  }));
};
m.defaultProps = {
  col: void 0,
  s: void 0,
  xs: void 0
};
m.propTypes = {
  col: prop_types.number,
  s: prop_types.number,
  xs: prop_types.number
};


// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/screens/Patterns/EditPage/utils/schema.js


const schema = lib/* object */.Ry().shape({
  label: lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
  pattern: lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
  contenttype: lib/* string */.Z_().required(helper_plugin.translatedErrors.required)
  // languages: yup.array().min(1, translatedErrors.required),
});
/* harmony default export */ const utils_schema = (schema);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/sizes.js
var sizes = __webpack_require__(75228);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.js
var keyboardKeys = __webpack_require__(7801);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/constants.js
const constants_o = {
  Keyboard: "down:keyboard",
  Mouse: "down:mouse"
}, constants_e = { Keyboard: "up:keyboard", Mouse: "up:mouse" };


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/SelectButton.js





const SelectButton_m = styled_components_browser_esm["default"].button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  background: transparent;
  border: none;

  // The focus state is moved to the parent thanks to :focus-within
  &:focus {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`, SelectButton_a = (0,react.forwardRef)(({ labelledBy: s, expanded: d, onTrigger: r, disabled: n, ...l }, i) => {
  const p = (o) => {
    if (!n)
      switch (o.key) {
        case keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN:
        case keyboardKeys/* KeyboardKeys.SPACE */.y.SPACE:
        case keyboardKeys/* KeyboardKeys.ENTER */.y.ENTER: {
          o.preventDefault(), r(constants_o.Keyboard);
          break;
        }
        case keyboardKeys/* KeyboardKeys.UP */.y.UP: {
          o.preventDefault(), r(constants_e.Keyboard);
          break;
        }
      }
  };
  return /* @__PURE__ */ react.createElement(SelectButton_m, {
    ref: i,
    "aria-labelledby": s,
    "aria-haspopup": "listbox",
    "aria-expanded": d,
    onKeyDown: p,
    "aria-disabled": n,
    type: "button",
    ...l
  });
});
SelectButton_a.displayName = "SelectButton";
SelectButton_a.defaultProps = {
  expanded: !1,
  disabled: !1
};
SelectButton_a.propTypes = {
  disabled: prop_types.bool,
  expanded: prop_types.bool,
  labelledBy: prop_types.string.isRequired,
  onTrigger: prop_types.func.isRequired
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js
var FieldLabel = __webpack_require__(64777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldHint.js
var FieldHint = __webpack_require__(63428);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.js + 1 modules
var Popover = __webpack_require__(88533);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/useId.js
var useId = __webpack_require__(14085);
;// CONCATENATED MODULE: ./node_modules/compute-scroll-into-view/dist/index.mjs
function t(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function dist_e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function dist_n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return dist_e(r.overflowY,n)||dist_e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function dist_r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}var i=function(e,i){var o=window,l=i.scrollMode,d=i.block,f=i.inline,h=i.boundary,u=i.skipOverflowHiddenElements,s="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var a,c,g=document.scrollingElement||document.documentElement,p=[],m=e;t(m)&&s(m);){if((m=null==(c=(a=m).parentElement)?a.getRootNode().host||null:c)===g){p.push(m);break}null!=m&&m===document.body&&dist_n(m)&&!dist_n(document.documentElement)||null!=m&&dist_n(m,u)&&p.push(m)}for(var w=o.visualViewport?o.visualViewport.width:innerWidth,v=o.visualViewport?o.visualViewport.height:innerHeight,W=window.scrollX||pageXOffset,H=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),y=b.height,E=b.width,M=b.top,V=b.right,x=b.bottom,I=b.left,C="start"===d||"nearest"===d?M:"end"===d?x:M+y/2,R="center"===f?I+E/2:"end"===f?V:I,T=[],k=0;k<p.length;k++){var B=p[k],D=B.getBoundingClientRect(),O=D.height,X=D.width,Y=D.top,L=D.right,S=D.bottom,j=D.left;if("if-needed"===l&&M>=0&&I>=0&&x<=v&&V<=w&&M>=Y&&x<=S&&I>=j&&V<=L)return T;var N=getComputedStyle(B),q=parseInt(N.borderLeftWidth,10),z=parseInt(N.borderTopWidth,10),A=parseInt(N.borderRightWidth,10),F=parseInt(N.borderBottomWidth,10),G=0,J=0,K="offsetWidth"in B?B.offsetWidth-B.clientWidth-q-A:0,P="offsetHeight"in B?B.offsetHeight-B.clientHeight-z-F:0,Q="offsetWidth"in B?0===B.offsetWidth?0:X/B.offsetWidth:0,U="offsetHeight"in B?0===B.offsetHeight?0:O/B.offsetHeight:0;if(g===B)G="start"===d?C:"end"===d?C-v:"nearest"===d?dist_r(H,H+v,v,z,F,H+C,H+C+y,y):C-v/2,J="start"===f?R:"center"===f?R-w/2:"end"===f?R-w:dist_r(W,W+w,w,q,A,W+R,W+R+E,E),G=Math.max(0,G+H),J=Math.max(0,J+W);else{G="start"===d?C-Y-z:"end"===d?C-S+F+P:"nearest"===d?dist_r(Y,S,O,z,F+P,C,C+y,y):C-(Y+O/2)+P/2,J="start"===f?R-j-q:"center"===f?R-(j+X/2)+K/2:"end"===f?R-L+A+K:dist_r(j,L,X,q,A+K,R,R+E,E);var Z=B.scrollLeft,$=B.scrollTop;C+=$-(G=Math.max(0,Math.min($+G/U,B.scrollHeight-O/U+P))),R+=Z-(J=Math.max(0,Math.min(Z+J/Q,B.scrollWidth-X/Q+K)))}T.push({el:B,top:G,left:J})}return T};
//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/utils.js

const utils_d = (e, t) => {
  e.setAttribute("aria-activedescendant", t.getAttribute("id")), e.querySelectorAll('[role="option"]').forEach((c) => c.classList.remove("is-focused")), t.classList.add("is-focused"), i(t, {
    scrollMode: "if-needed",
    block: "nearest",
    inline: "nearest"
  }).forEach(({ el: c, top: o, left: s }) => {
    c.scrollTop = o, c.scrollLeft = s;
  });
}, l = (e) => {
  const t = e.getAttribute("aria-activedescendant");
  return e.querySelector(`#${t}`);
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/hooks/useListRef.js



const useListRef_y = (r) => {
  const e = (0,react.useRef)(null);
  return (0,react.useEffect)(() => {
    e.current.focus();
  }, []), (0,react.useEffect)(() => {
    if (!e.current)
      return;
    const n = e.current.querySelector('[aria-selected="true"]'), o = e.current.querySelectorAll('[role="option"]');
    let t;
    n ? t = n : r === constants_e.Keyboard ? t = o[o.length - 1] : r === constants_o.Keyboard && (t = o[0]), t && (r === constants_e.Keyboard || r === constants_o.Keyboard) && utils_d(e.current, t);
  }, []), e;
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/SelectList.js







const SelectList_m = ({ labelledBy: g, onSelectItem: p, children: y, multi: d, onEscape: a, expanded: S }) => {
  const e = useListRef_y(S), A = (o) => {
    switch (o.key) {
      case keyboardKeys/* KeyboardKeys.ESCAPE */.y.ESCAPE: {
        o.stopPropagation(), a();
        break;
      }
      case keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN: {
        o.preventDefault();
        const t = l(e.current);
        if (!t)
          return;
        const n = t.nextSibling;
        if (n)
          utils_d(e.current, n);
        else {
          const c = e.current.querySelectorAll('[role="option"]')[0];
          utils_d(e.current, c);
        }
        break;
      }
      case keyboardKeys/* KeyboardKeys.UP */.y.UP: {
        o.preventDefault();
        const t = l(e.current);
        if (!t)
          return;
        const n = t.previousSibling;
        if (n)
          utils_d(e.current, n);
        else {
          const l = e.current.querySelectorAll('[role="option"]'), c = l[l.length - 1];
          utils_d(e.current, c);
        }
        break;
      }
      case keyboardKeys/* KeyboardKeys.SPACE */.y.SPACE:
      case keyboardKeys/* KeyboardKeys.ENTER */.y.ENTER: {
        o.preventDefault();
        const t = l(e.current);
        t.getAttribute("data-opt-group") ? p(
          t.getAttribute("data-opt-group-children").split(","),
          t.getAttribute("data-opt-group")
        ) : p(t.getAttribute("data-strapi-value")), d || a();
        break;
      }
    }
  };
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    as: "ul",
    spacing: 1,
    role: "listbox",
    "aria-labelledby": g,
    tabIndex: -1,
    ref: e,
    onKeyDown: A,
    onBlur: a,
    "aria-multiselectable": d
  }, y);
};
SelectList_m.defaultProps = {
  labelledBy: void 0,
  multi: !1
};
SelectList_m.propTypes = {
  children: prop_types.node.isRequired,
  expanded: prop_types.oneOf([constants_e.Keyboard, constants_e.Mouse, constants_o.Keyboard, constants_o.Mouse]).isRequired,
  labelledBy: prop_types.string,
  multi: prop_types.bool,
  onEscape: prop_types.func.isRequired,
  onSelectItem: prop_types.func.isRequired
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/utils.js
var utils = __webpack_require__(15585);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/components.js




const components_u = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  position: relative;
  border: 1px solid ${({ theme: o, hasError: r }) => r ? o.colors.danger600 : o.colors.neutral200};
  padding-right: ${({ theme: o }) => o.spaces[3]};
  border-radius: ${({ theme: o }) => o.borderRadius};
  background: ${({ theme: o }) => o.colors.neutral0};
  overflow: hidden;
  min-height: ${(0,utils/* getThemeSize */.ZB)("input")};

  ${({ theme: o, disabled: r }) => r ? `
    color: ${o.colors.neutral600};
    background: ${o.colors.neutral150};
  ` : void 0}

  ${(0,utils/* inputFocusStyle */.k3)()}
`, components_d = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  background: transparent;
  border: none;
  position: relative;
  z-index: 1;

  svg {
    height: ${11 / 16}rem;
    width: ${11 / 16}rem;
  }

  svg path {
    fill: ${({ theme: o }) => o.colors.neutral600};
  }
`, components_$ = (0,styled_components_browser_esm["default"])(components_d)`
  display: flex;
  background: none;
  border: none;
  cursor: ${({ disabled: o }) => o ? "not-allowed" : void 0};

  svg {
    width: ${6 / 16}rem;
  }
`;


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/hooks/useButtonRef.js


const useButtonRef_m = (t) => {
  const u = (0,react.useRef)(null), o = (0,react.useRef)(null), r = (0,react.useRef)();
  return t && (r.current = t), (0,react.useEffect)(() => {
    !o.current || t || (r.current === constants_o.Keyboard || r.current === constants_e.Keyboard) && u.current.focus();
  }, [t]), (0,react.useEffect)(() => {
    o.current = !0;
  }, []), u;
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/helpers/escapeSelector.js
const escapeSelector_c = (e) => e.replace(":", "-");


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Tag/Tag.js






const Tag_u = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  svg {
    height: ${8 / 16}rem;
    width: ${8 / 16}rem;
  }

  svg path {
    fill: ${({ theme: r, ...o }) => o["aria-disabled"] ? r.colors.neutral600 : r.colors.primary600};
  }
`, f = (0,styled_components_browser_esm["default"])(Typography/* Typography */.Z)`
  border-right: 1px solid ${({ theme: r, disabled: o }) => o ? r.colors.neutral300 : r.colors.primary200};
  color: inherit;
  padding-right: ${({ theme: r }) => r.spaces[2]};
`, Tag_i = ({ children: r, icon: o, disabled: e, onClick: d, ...s }) => {
  const c = (m) => {
    e || d(m);
  };
  return /* @__PURE__ */ react.createElement(Tag_u, {
    as: "button",
    background: e ? "neutral200" : "primary100",
    color: e ? "neutral700" : "primary600",
    paddingLeft: 3,
    paddingRight: 3,
    onClick: c,
    "aria-disabled": e,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: e ? "neutral300" : "primary200",
    hasRadius: !0,
    height: `${32 / 16}rem`,
    ...s
  }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(f, {
    disabled: e,
    variant: "pi",
    fontWeight: "bold",
    as: "span"
  }, r), /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 2
  }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, o))));
};
Tag_i.displayName = "Tag";
Tag_i.defaultProps = {
  disabled: !1,
  onClick: void 0
};
Tag_i.propTypes = {
  children: prop_types.node.isRequired,
  disabled: prop_types.bool,
  icon: prop_types.element.isRequired,
  onClick: prop_types.func
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/SelectTags.js






const c = styled_components_browser_esm["default"].div`
  margin-bottom: ${({ theme: r }) => r.spaces[1]};
`, SelectTags_f = (0,styled_components_browser_esm["default"])(Tag_i)`
  margin-left: ${({ theme: r }) => r.spaces[1]};
  margin-top: ${({ theme: r }) => r.spaces[1]};
`, SelectTags_l = ({ tags: r, onRemoveTag: s, disabled: p }) => /* @__PURE__ */ react.createElement(c, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
  wrap: "wrap"
}, r.map((t) => /* @__PURE__ */ react.createElement(SelectTags_f, {
  disabled: p,
  key: `tag-${t.value}`,
  icon: /* @__PURE__ */ react.createElement(icons_dist.Cross, null),
  onClick: () => s(t.value),
  position: "relative",
  tabIndex: -1,
  zIndex: 1
}, t.label))));
SelectTags_l.defaultProps = {
  disabled: !1,
  tags: []
};
SelectTags_l.propTypes = {
  disabled: prop_types.bool,
  onRemoveTag: prop_types.func.isRequired,
  tags: prop_types.arrayOf(
    prop_types.shape({ label: prop_types.string, value: prop_types.oneOfType([prop_types.string, prop_types.number]) })
  )
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js


























const Be = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  width: 100%;
`, z = ({
  label: d,
  labelAction: G,
  id: H,
  children: W,
  customizeContent: f,
  placeholder: y,
  onChange: g,
  value: o,
  hint: v,
  error: m,
  disabled: s,
  clearLabel: I,
  onClear: S,
  onReachEnd: N,
  multi: i,
  required: J,
  selectButtonTitle: K,
  size: Q,
  startIcon: x,
  withTags: u,
  ...U
}) => {
  const n = (0,useId/* useId */.M)(H), [h, E] = (0,react.useState)(void 0), $ = useButtonRef_m(h), R = (0,react.useRef)(null), w = `${n}-label`, b = `${n}-content`, X = typeof m == "string";
  let B;
  if (m ? B = `${n}-error` : v && (B = `${n}-hint`), u && !i)
    throw new Error('The "withTags" props can only be used when the "multi" prop is present');
  const Y = () => {
    E(void 0);
  }, Z = () => {
    s || (S(), $.current.focus());
  }, D = (t) => {
    t.preventDefault(), !s && (t.nativeEvent.which === 3 || t.nativeEvent.button === 2 || E(constants_o.Mouse));
  }, O = (t, l = !0) => {
    i ? g(o.includes(t) ? o.filter((a) => a !== t) : [...o, t]) : (g(t), l && E(void 0));
  }, L = (t) => {
    g(
      o.includes(t[0]) ? o.filter((l, a, c) => c.indexOf(l) < 0, t) : [...o, ...t]
    );
  };
  let T, F = [];
  const M = (t, l) => {
    const a = `${n}-option-${t.props.value}`, c = i ? o.includes(t.props.value) : t.props.value === o;
    return c && (u ? F.push({ label: t.props.children, value: t.props.value }) : T = t.props.children), (0,react.cloneElement)(t, {
      id: escapeSelector_c(a),
      onClick: () => O(t.props.value),
      selected: c,
      multi: i,
      isChild: l
    });
  }, V = react.Children.toArray(W).map((t) => {
    if (t.type.displayName === "OptGroup") {
      const l = `${n}-option-${t.props.label}`, a = t.props.children.every((p) => o.includes(p.props.value)), c = !a && t.props.children.some((p) => o.includes(p.props.value));
      return (0,react.cloneElement)(t, {
        id: escapeSelector_c(l),
        onClick: () => L(t.props.children.map((p) => p.props.value)),
        selected: a,
        indeterminate: c,
        multi: i,
        children: react.Children.toArray(t.props.children).map((p) => M(p, !0)),
        value: t.props.label
      });
    }
    return M(t);
  });
  return /* @__PURE__ */ react.createElement(Field/* Field */.g, {
    hint: v,
    error: m,
    id: n,
    required: J
  }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    spacing: d || v || X ? 1 : 0
  }, d && /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, {
    action: G
  }, d), /* @__PURE__ */ react.createElement(components_u, {
    size: Q,
    hasError: Boolean(m),
    disabled: s,
    ref: R
  }, /* @__PURE__ */ react.createElement(SelectButton_a, {
    ref: $,
    labelledBy: `${n} ${w} ${b}`,
    "aria-describedby": B,
    expanded: Boolean(h),
    onTrigger: E,
    id: n,
    hasError: Boolean(m),
    disabled: s,
    onMouseDown: D,
    ...U
  }), /* @__PURE__ */ react.createElement(Be, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, x && /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 3,
    "aria-hidden": !0
  }, x), u && /* @__PURE__ */ react.createElement(SelectTags_l, {
    tags: F,
    onRemoveTag: O,
    disabled: s
  }), /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 4,
    paddingRight: 4
  }, u ? /* @__PURE__ */ react.createElement(react.Fragment, null, !o || o.length === 0 ? /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
    ellipsis: !0,
    id: b,
    textColor: "neutral600"
  }, y) : null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, {
    as: "span",
    id: b
  }, f ? f(o) : T || y, o.join(", "))) : /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
    ellipsis: !0,
    id: b,
    textColor: o ? "neutral800" : "neutral600"
  }, f ? f(o) : T || y, i && /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, {
    as: "span"
  }, o.join(", "))))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, (i && o && o.length || !i && o) && S && /* @__PURE__ */ react.createElement(components_d, {
    as: "button",
    type: "button",
    onClick: Z,
    "aria-label": I,
    "aria-disabled": s,
    title: I
  }, /* @__PURE__ */ react.createElement(icons_dist.Cross, null)), /* @__PURE__ */ react.createElement(components_$, {
    paddingLeft: 3,
    "aria-hidden": !0,
    as: "button",
    type: "button",
    onMouseDown: D,
    tabIndex: -1,
    disabled: s,
    title: K
  }, /* @__PURE__ */ react.createElement(icons_dist.CarretDown, null))))), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null)), h && /* @__PURE__ */ react.createElement(Popover/* Popover */.J2, {
    source: R,
    spacing: 4,
    fullWidth: !0,
    intersectionId: `select-list-intersection-${n}`,
    onReachEnd: N
  }, /* @__PURE__ */ react.createElement(SelectList_m, {
    selectId: n,
    labelledBy: d ? w : void 0,
    onEscape: Y,
    expanded: h,
    onSelectItem: (t, l) => l ? L(t) : O(t, !1),
    multi: i
  }, V)));
};
z.defaultProps = {
  "aria-label": void 0,
  children: [],
  clearLabel: "Clear",
  customizeContent: void 0,
  disabled: !1,
  id: void 0,
  label: void 0,
  labelAction: void 0,
  multi: !1,
  onChange() {
  },
  onClear: void 0,
  onReachEnd: void 0,
  value: void 0,
  hint: void 0,
  error: void 0,
  placeholder: "Select...",
  required: !1,
  selectButtonTitle: "Carret Down Button",
  size: "M",
  startIcon: void 0,
  withTags: !1
};
z.propTypes = {
  "aria-label": prop_types.string,
  children: prop_types.oneOfType([prop_types.arrayOf(prop_types.node), prop_types.node]),
  clearLabel: prop_types.string,
  customizeContent: prop_types.func,
  disabled: prop_types.bool,
  error: prop_types.oneOfType([prop_types.string, prop_types.bool]),
  hint: prop_types.oneOfType([prop_types.string, prop_types.bool, prop_types.node, prop_types.arrayOf(prop_types.node)]),
  id: prop_types.oneOfType([prop_types.string, prop_types.number]),
  label: prop_types.string,
  labelAction: prop_types.element,
  multi: prop_types.bool,
  onChange: prop_types.func,
  onClear: prop_types.func,
  onReachEnd: prop_types.func,
  placeholder: prop_types.string,
  required: prop_types.bool,
  selectButtonTitle: prop_types.string,
  size: prop_types.oneOf(Object.keys(sizes/* sizes.input */.J.input)),
  startIcon: prop_types.element,
  value: prop_types.oneOfType([
    prop_types.arrayOf(prop_types.oneOfType([prop_types.string, prop_types.number])),
    prop_types.string,
    prop_types.number
  ]),
  withTags: prop_types.bool
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/assets/checkmark.js
var checkmark = __webpack_require__(22392);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js







const y = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  border: 1px solid
    ${({ theme: e, selected: r, indeterminate: i }) => r || i ? e.colors.primary600 : e.colors.neutral300};
  height: 18px;
  width: 18px;
  background-color: ${({ theme: e, selected: r, indeterminate: i }) => r || i ? e.colors.primary600 : e.colors.neutral0};

  ${({ theme: e, indeterminate: r }) => r && `&::after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${e.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

  `}

  ${({ selected: e }) => e && `  
    &::after {
      content: '';
      background: url(${checkmark/* default */.Z}) no-repeat no-repeat center center;
      width: 100%;
      height: 100%;
      position: absolute;
    }

  `}
`, x = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  &.is-focused {
    background: ${({ theme: e }) => e.colors.primary100};
  }

  &:hover {
    background: ${({ theme: e }) => e.colors.primary100};
  }
`, Option_n = ({ selected: e, indeterminate: r, children: i, value: p, multi: s, isChild: c, startIcon: l, ...u }) => {
  const m = (0,react.useRef)(null);
  return /* @__PURE__ */ react.createElement(x, {
    as: "li",
    hasRadius: !0,
    paddingLeft: c ? 7 : 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    ref: m,
    role: "option",
    "aria-selected": e,
    background: "neutral0",
    "data-strapi-value": p,
    ...u
  }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, l && /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingRight: 2,
    "aria-hidden": !0
  }, l), s && /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingRight: 2,
    "aria-hidden": !0
  }, /* @__PURE__ */ react.createElement(y, {
    hasRadius: !0,
    overflow: "hidden",
    position: "relative",
    indeterminate: r,
    selected: e,
    zIndex: 1
  })), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
    textColor: e ? "primary600" : "neutral800",
    fontWeight: e ? "bold" : null
  }, i)));
};
Option_n.defaultProps = {
  isChild: !1,
  multi: !1,
  selected: !1,
  startIcon: void 0,
  indeterminate: !1
};
Option_n.propTypes = {
  children: prop_types.oneOfType([prop_types.string, prop_types.number]).isRequired,
  indeterminate: prop_types.bool,
  isChild: prop_types.bool,
  multi: prop_types.bool,
  selected: prop_types.bool,
  startIcon: prop_types.node,
  value: prop_types.oneOfType([prop_types.string, prop_types.number]).isRequired
};
Option_n.displayName = "Option";


;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/components/Select/index.js


const SelectComponent = ({
  list,
  name,
  label,
  placeholder,
  hint,
  value,
  error,
  setFieldValue
}) => {
  if (!list || list.length < 0) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(
    z,
    {
      label,
      name,
      placeholder,
      hint,
      error,
      value,
      onChange: (v) => {
        setFieldValue(name, v);
      }
    },
    list.map((item) => /* @__PURE__ */ react.createElement(Option_n, { key: item.uid, value: item.uid }, item.name))
  );
};
/* harmony default export */ const Select = (SelectComponent);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js








const v = styled_components_browser_esm.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`, $ = styled_components_browser_esm["default"].div`
  animation: ${v} 2s infinite linear;
  will-change: transform;
`, B = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
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

  ${utils/* buttonFocusStyle */.BF}
`, T = react.forwardRef(({
  children: r,
  startIcon: o,
  endIcon: a,
  onClick: n,
  disabled: i = !1,
  loading: e = !1,
  ...l
}, f) => {
  const m = n && !i ? n : void 0, s = i || e;
  return (0,jsx_runtime.jsxs)(B, {
    ref: f,
    "aria-disabled": s,
    onClick: m,
    as: "button",
    type: "button",
    ...l,
    children: [(o || e) && (0,jsx_runtime.jsx)(Box/* Box */.x, {
      as: "span",
      paddingRight: 2,
      "aria-hidden": !0,
      children: e ? (0,jsx_runtime.jsx)($, {
        children: (0,jsx_runtime.jsx)(icons_dist.Loader, {})
      }) : o
    }), (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
      variant: "pi",
      textColor: s ? "neutral600" : "primary600",
      children: r
    }), a && (0,jsx_runtime.jsx)(Box/* Box */.x, {
      as: "span",
      paddingLeft: 2,
      "aria-hidden": !0,
      children: a
    })]
  });
});
T.displayName = "TextButton";


;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/components/LabelField/index.js






const LabelField = ({
  values,
  setFieldValue,
  errors,
  touched,
  hint,
  code
}) => {
  const [open, setOpen] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const generatedCode = code || lodash_default().snakeCase(lodash_default().deburr(lodash_default().toLower(values.label || "")));
  (0,react.useEffect)(() => {
    if (errors.code) {
      setOpen(true);
    }
  }, [errors]);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      name: "label",
      value: values.label || "",
      onChange: (e) => setFieldValue("label", e.target.value),
      label: formatMessage({
        id: "settings.form.label.label",
        defaultMessage: "Label"
      }),
      error: errors.label && touched.label ? formatMessage({ id: errors.label, defaultMessage: "Invalid value" }) : null
    }
  ), generatedCode && !open && /* @__PURE__ */ react.createElement(Box/* Box */.x, { style: { display: "flex", marginTop: 5 } }, hint(generatedCode), /* @__PURE__ */ react.createElement(T, { style: { marginLeft: 5 }, onClick: () => setOpen(true) }, "Edit")), open && /* @__PURE__ */ react.createElement(Box/* Box */.x, { style: { marginTop: 20 } }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      name: "code",
      value: values.code || generatedCode,
      onChange: (e) => setFieldValue("code", e.target.value),
      label: formatMessage({
        id: "global.sde",
        defaultMessage: "Code"
      }),
      error: errors.code ? formatMessage({ id: errors.code, defaultMessage: "This value must be unique" }) : null
    }
  )));
};
/* harmony default export */ const components_LabelField = (LabelField);

;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/helpers/useActiveElement.js

/* harmony default export */ const useActiveElement = (() => {
  const [active, setActive] = react.useState(document.activeElement);
  const handleFocusIn = (e) => {
    setActive(document.activeElement);
  };
  react.useEffect(() => {
    document.addEventListener("focusin", handleFocusIn);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, []);
  return active;
});

;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/components/PatternField/index.js









const PatternField = ({ uid, values, error, setFieldValue, hint }) => {
  const activeElement = useActiveElement();
  const patternRef = (0,react.useRef)();
  const [allowedFields, setAllowedFields] = (0,react.useState)(null);
  const { formatMessage } = (0,react_intl.useIntl)();
  const HoverBox = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
    cursor: pointer;
    &:hover:not([aria-disabled='true']) {
      background: ${({ theme }) => theme.colors.primary100};
    }
  `;
  const patternHint = () => {
    const base = formatMessage({ id: "settings.form.pattern.description_1", defaultMessage: "Create a URL alias pattern" });
    let suffix = "";
    if (allowedFields[uid]) {
      suffix = ` ${formatMessage({ id: "settings.form.pattern.description_2", defaultMessage: "using" })} `;
      allowedFields[uid].map((fieldName, i) => {
        if (i === 0) {
          suffix = `${suffix}[${fieldName}]`;
        } else if (allowedFields[uid].length !== i + 1) {
          suffix = `${suffix}, [${fieldName}]`;
        } else {
          suffix = `${suffix} ${formatMessage({ id: "settings.form.pattern.description_3", defaultMessage: "or" })} [${fieldName}]`;
        }
      });
    }
    return base + suffix;
  };
  (0,react.useEffect)(() => {
    (0,helper_plugin.request)(`/url-alias/pattern/allowed-fields`, { method: "GET" }).then((res) => {
      setAllowedFields(res);
    }).catch(() => {
    });
  }, []);
  if (!allowedFields)
    return null;
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement("div", { ref: patternRef }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      label: formatMessage({ id: "settings.form.pattern.label", defaultMessage: "Pattern" }),
      name: "pattern",
      value: values.pattern,
      placeholder: "/en/pages/[id]",
      error,
      onChange: async (e) => {
        if (e.target.value.match(/^[A-Za-z0-9-_.~[\]/]*$/)) {
          setFieldValue("pattern", e.target.value);
        }
      }
    }
  )), hint(patternHint()), values.pattern.endsWith("[") && activeElement.name === "pattern" && /* @__PURE__ */ react.createElement(
    Popover/* Popover */.J2,
    {
      source: patternRef,
      fullWidth: true
    },
    /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { size: 1 }, allowedFields[uid].map((fieldName) => /* @__PURE__ */ react.createElement(
      HoverBox,
      {
        key: fieldName,
        padding: 2,
        onClick: () => {
          const newPattern = `${values.pattern}${fieldName}]`;
          setFieldValue("pattern", newPattern);
        }
      },
      fieldName
    )))
  ));
};
/* harmony default export */ const components_PatternField = (PatternField);

;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/screens/Patterns/EditPage/index.js





















const EditPatternPage = () => {
  const { push } = (0,react_router_dom_min.useHistory)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const [loading, setLoading] = (0,react.useState)(false);
  const [patternEntity, setPatternEntity] = (0,react.useState)(null);
  const [contentTypes, setContentTypes] = (0,react.useState)([]);
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    params: { id }
  } = (0,react_router_dom_min.useRouteMatch)(`/settings/${(pluginId_default())}/patterns/:id`);
  (0,react.useEffect)(() => {
    setLoading(true);
    (0,helper_plugin.request)(`/url-alias/info/getContentTypes`, { method: "GET" }).then((res) => {
      setContentTypes(res);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);
  (0,react.useEffect)(() => {
    setLoading(true);
    (0,helper_plugin.request)(`/url-alias/pattern/findOne/${id}`, { method: "GET" }).then((res) => {
      setPatternEntity(res);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);
  const handleEditSubmit = (values, { setSubmitting, setErrors }) => {
    (0,helper_plugin.request)(`/url-alias/pattern/update/${patternEntity.id}`, {
      method: "POST",
      body: {
        data: values
      }
    }).then((res) => {
      push(`/settings/${(pluginId_default())}/patterns`);
      toggleNotification({ type: "success", message: { id: "url-alias.settings.success.edit" } });
      setSubmitting(false);
    }).catch((err) => {
      if (err.response.payload[0].message === "This attribute must be unique") {
        setErrors({ code: err.response.payload[0].message });
      } else {
        toggleNotification({ type: "warning", message: { id: "notification.error" } });
      }
      setSubmitting(false);
    });
  };
  const validatePattern = async (values) => {
    const errors = {};
    await (0,helper_plugin.request)(`/url-alias/pattern/validate`, {
      method: "POST",
      body: {
        pattern: values.pattern,
        modelName: values.contenttype
      }
    }).then((res) => {
      if (res.valid === false) {
        errors.pattern = res.message;
      }
    }).catch(() => {
    });
    return errors;
  };
  if (loading || !contentTypes || !patternEntity) {
    return /* @__PURE__ */ react.createElement(components_Center, null, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({ id: "url-alias.settings.loading", defaultMessage: "Loading content..." })));
  }
  return /* @__PURE__ */ react.createElement(
    dist.Formik,
    {
      enableReinitialize: true,
      initialValues: {
        label: patternEntity.label,
        pattern: patternEntity.pattern,
        contenttype: patternEntity.contenttype,
        languages: patternEntity.languages,
        code: patternEntity.code
      },
      onSubmit: handleEditSubmit,
      validationSchema: utils_schema,
      validate: validatePattern
    },
    ({ handleSubmit, values, handleChange, errors, touched, isSubmitting, setFieldValue }) => /* @__PURE__ */ react.createElement(dist.Form, { noValidate: true, onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        title: formatMessage({ id: "url-alias.settings.page.patterns.edit.title", defaultMessage: "Edit pattern" }),
        subtitle: formatMessage({ id: "url-alias.settings.page.patterns.edit.description", defaultMessage: "Edit this pattern for automatic URL alias generation." }),
        as: "h2",
        navigationAction: /* @__PURE__ */ react.createElement(Link/* Link */.r, { startIcon: /* @__PURE__ */ react.createElement(r, null), to: `/settings/${(pluginId_default())}/patterns` }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        })),
        primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", loading: isSubmitting, startIcon: /* @__PURE__ */ react.createElement(Check_a, null) }, formatMessage({
          id: "global.save",
          defaultMessage: "Save"
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
        id: "settings.page.patterns.edit.subtitle",
        defaultMessage: "Pattern details"
      })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(m, { col: 6 }, /* @__PURE__ */ react.createElement(
        Select,
        {
          name: "contenttype",
          list: contentTypes,
          value: values.contenttype || "",
          setFieldValue,
          label: formatMessage({
            id: "settings.form.contenttype.label",
            defaultMessage: "Content type"
          }),
          error: errors.contenttype && touched.contenttype ? formatMessage({ id: errors.contenttype, defaultMessage: "Invalid value" }) : null
        }
      )), /* @__PURE__ */ react.createElement(m, { col: 12 }), /* @__PURE__ */ react.createElement(m, { col: 12 }), /* @__PURE__ */ react.createElement(m, { col: 6 }, /* @__PURE__ */ react.createElement(
        components_LabelField,
        {
          values,
          setFieldValue,
          errors,
          touched,
          hint: (code) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, "Machine name: ", code, " ")
        }
      )), /* @__PURE__ */ react.createElement(m, { col: 12 }), values.contenttype !== "" && /* @__PURE__ */ react.createElement(m, { col: 6 }, /* @__PURE__ */ react.createElement(
        components_PatternField,
        {
          values,
          uid: values.contenttype,
          setFieldValue,
          hint: (hint) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi" }, hint),
          error: errors.pattern && touched.pattern ? errors.pattern : null
        }
      ))))
    ))))
  );
};
/* harmony default export */ const EditPage = (EditPatternPage);

;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/screens/Patterns/CreatePage/utils/schema.js


const schema_schema = lib/* object */.Ry().shape({
  label: lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
  pattern: lib/* string */.Z_().required(helper_plugin.translatedErrors.required),
  contenttype: lib/* string */.Z_().required(helper_plugin.translatedErrors.required)
  // languages: yup.array().min(1, translatedErrors.required),
});
/* harmony default export */ const CreatePage_utils_schema = (schema_schema);

;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/screens/Patterns/CreatePage/index.js





















const CreatePattternPage = () => {
  const { push } = (0,react_router_dom_min.useHistory)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const [loading, setLoading] = (0,react.useState)(false);
  const [contentTypes, setContentTypes] = (0,react.useState)([]);
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,react.useEffect)(() => {
    setLoading(true);
    (0,helper_plugin.request)(`/url-alias/info/getContentTypes`, { method: "GET" }).then((res) => {
      setContentTypes(res);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);
  const handleCreateSubmit = (values, { setSubmitting, setErrors }) => {
    (0,helper_plugin.request)(`/url-alias/pattern/create`, {
      method: "POST",
      body: {
        data: values
      }
    }).then((res) => {
      push(`/settings/${(pluginId_default())}/patterns`);
      toggleNotification({ type: "success", message: { id: "url-alias.settings.success.create" } });
      setSubmitting(false);
    }).catch((err) => {
      if (err.response.payload[0].message === "This attribute must be unique") {
        setErrors({ code: err.response.payload[0].message });
      } else {
        toggleNotification({ type: "warning", message: { id: "notification.error" } });
      }
      setSubmitting(false);
    });
  };
  const validatePattern = async (values) => {
    const errors = {};
    await (0,helper_plugin.request)(`/url-alias/pattern/validate`, {
      method: "POST",
      body: {
        pattern: values.pattern,
        modelName: values.contenttype
      }
    }).then((res) => {
      if (res.valid === false) {
        errors.pattern = res.message;
      }
    }).catch(() => {
    });
    return errors;
  };
  if (loading || !contentTypes) {
    return /* @__PURE__ */ react.createElement(components_Center, null, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({ id: "url-alias.settings.loading", defaultMessage: "Loading content..." })));
  }
  return /* @__PURE__ */ react.createElement(
    dist.Formik,
    {
      enableReinitialize: true,
      initialValues: { label: "", pattern: "", contenttype: "", languages: [] },
      onSubmit: handleCreateSubmit,
      validationSchema: CreatePage_utils_schema,
      validate: validatePattern
    },
    ({ handleSubmit, values, handleChange, errors, touched, isSubmitting, setFieldValue }) => /* @__PURE__ */ react.createElement(dist.Form, { noValidate: true, onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        title: formatMessage({ id: "url-alias.settings.page.patterns.create.title", defaultMessage: "Add new pattern" }),
        subtitle: formatMessage({ id: "url-alias.settings.page.patterns.create.description", defaultMessage: "Add a pattern for automatic URL alias generation." }),
        as: "h2",
        navigationAction: /* @__PURE__ */ react.createElement(Link/* Link */.r, { startIcon: /* @__PURE__ */ react.createElement(r, null), to: `/settings/${(pluginId_default())}/patterns` }, formatMessage({
          id: "global.back",
          defaultMessage: "Back"
        })),
        primaryAction: /* @__PURE__ */ react.createElement(Button/* Button */.z, { type: "submit", loading: isSubmitting, startIcon: /* @__PURE__ */ react.createElement(Check_a, null) }, formatMessage({
          id: "global.save",
          defaultMessage: "Save"
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
        id: "settings.page.patterns.create.subtitle",
        defaultMessage: "Pattern details"
      })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(m, { col: 6 }, /* @__PURE__ */ react.createElement(
        Select,
        {
          name: "contenttype",
          list: contentTypes,
          value: values.contenttype || "",
          setFieldValue,
          label: formatMessage({
            id: "settings.form.contenttype.label",
            defaultMessage: "Content type"
          }),
          error: errors.contenttype && touched.contenttype ? formatMessage({ id: errors.contenttype, defaultMessage: "Invalid value" }) : null
        }
      )), /* @__PURE__ */ react.createElement(m, { col: 12 }), /* @__PURE__ */ react.createElement(m, { col: 6 }, /* @__PURE__ */ react.createElement(
        components_LabelField,
        {
          values,
          setFieldValue,
          errors,
          touched,
          hint: (code) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, "Machine name: ", code, " ")
        }
      )), /* @__PURE__ */ react.createElement(m, { col: 12 }), values.contenttype !== "" && /* @__PURE__ */ react.createElement(m, { col: 6 }, /* @__PURE__ */ react.createElement(
        components_PatternField,
        {
          values,
          uid: values.contenttype,
          setFieldValue,
          hint: (hint) => /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi" }, hint),
          error: errors.pattern && touched.pattern ? errors.pattern : null
        }
      ))))
    ))))
  );
};
/* harmony default export */ const CreatePage = (CreatePattternPage);

;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/screens/Patterns/index.js








const Patterns = () => {
  return /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.settings.patterns */.Z["settings.patterns"] }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(
    react_router_dom_min.Route,
    {
      path: `/settings/${(pluginId_default())}/patterns/new`,
      component: CreatePage,
      exact: true
    }
  ), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: `/settings/${(pluginId_default())}/patterns/:id`, component: EditPage, exact: true }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: `/settings/${(pluginId_default())}/patterns`, component: ListPage, exact: true }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "", component: helper_plugin.NotFound })));
};
/* harmony default export */ const screens_Patterns = (Patterns);


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








const L = () => {
  const n = (0,react.useRef)(null), [o, a] = (0,react.useState)(null), [r, d] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(r, () => {
    r.current && a(r.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    n.current && a(n.current.getBoundingClientRect());
  }, [n]), {
    containerRef: r,
    isVisible: d,
    baseHeaderLayoutRef: n,
    headerSize: o
  };
}, p = (n) => {
  const { containerRef: o, isVisible: a, baseHeaderLayoutRef: r, headerSize: d } = L();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", {
    style: { height: d?.height },
    ref: o
  }, a && /* @__PURE__ */ react.createElement(s, {
    ref: r,
    ...n
  })), !a && /* @__PURE__ */ react.createElement(s, {
    ...n,
    sticky: !0,
    width: d?.width
  }));
};
p.displayName = "HeaderLayout";
const x = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  width: ${(n) => n.width}px;
`, s = react.forwardRef(
  ({ navigationAction: n, primaryAction: o, secondaryAction: a, subtitle: r, title: d, sticky: f, width: g, ...u }, y) => {
    const m = typeof r == "string";
    return f ? /* @__PURE__ */ react.createElement(x, {
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 3,
      paddingBottom: 3,
      position: "fixed",
      top: 0,
      right: 0,
      background: "neutral0",
      shadow: "tableShadow",
      width: g,
      zIndex: 4,
      "data-strapi-header-sticky": !0
    }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
      justifyContent: "space-between"
    }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, n && /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingRight: 3
    }, n), /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
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
      paddingTop: n ? 6 : 8,
      background: "neutral100",
      "data-strapi-header": !0
    }, n ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
      paddingBottom: 2
    }, n) : null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
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

/***/ 52954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ o),
/* harmony export */   "x": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const o = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  rowIndex: 0,
  colIndex: 0,
  setTableValues() {
    throw new Error("setTableValues must be initialized via the RawTableContext.Provider");
  }
}), r = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(o);



/***/ }),

/***/ 92439:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Td": () => (/* binding */ T),
  "Th": () => (/* binding */ n)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/helpers/getFocusableNodes.js
const u = (t, e) => [
  ...t.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')
].filter((r) => r.hasAttribute("disabled") ? !1 : e ? !0 : r.getAttribute("tabindex") !== "-1"), getFocusableNodes_n = (t) => t.filter((e) => e.tagName === "INPUT" ? e.type !== "checkbox" && e.type !== "radio" : !1);


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.js
var keyboardKeys = __webpack_require__(7801);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/RawTable/RawTableContext.js
var RawTableContext = __webpack_require__(52954);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/RawTable/RawCell.js






const E = (r) => /* @__PURE__ */ react.createElement(h, {
  ...r,
  as: "th"
}), h = ({ coords: r, as: T, ...x }) => {
  const s = (0,react.useRef)(null), { rowIndex: y, colIndex: v, setTableValues: p } = (0,RawTableContext/* useTable */.x)(), [c, i] = (0,react.useState)(!1), I = (e) => {
    const t = u(s.current, !0);
    if (t.length === 0 || t.length === 1 && getFocusableNodes_n(t).length === 0)
      return;
    if (t.length > 1 && !t.find((u) => u.tagName !== "BUTTON")) {
      e.preventDefault();
      const u = t.findIndex((a) => a === document.activeElement);
      if (e.key === keyboardKeys/* KeyboardKeys.RIGHT */.y.RIGHT) {
        const a = t[u + 1];
        a && (e.stopPropagation(), a.focus());
      } else if (e.key === keyboardKeys/* KeyboardKeys.LEFT */.y.LEFT) {
        const a = t[u - 1];
        a && (e.stopPropagation(), a.focus());
      }
      return;
    }
    const n = e.key === keyboardKeys/* KeyboardKeys.ENTER */.y.ENTER;
    if (n && !c)
      i(!0);
    else if ((e.key === keyboardKeys/* KeyboardKeys.ESCAPE */.y.ESCAPE || n) && c) {
      if (n && document.activeElement.tagName === "A")
        return;
      i(!1), s.current.focus();
    } else
      c && e.stopPropagation();
  }, f = y === r.row - 1 && v === r.col - 1;
  (0,react.useLayoutEffect)(() => {
    const e = u(s.current, !0);
    e.length === 0 || e.length === 1 && getFocusableNodes_n(e).length !== 0 || e.length > 1 && Boolean(e.find((t) => t.tagName !== "BUTTON")) ? (s.current.setAttribute("tabIndex", !c && f ? 0 : -1), e.forEach((t, n) => {
      t.setAttribute("tabIndex", c ? 0 : -1), c && n === 0 && t.focus();
    })) : e.forEach((t) => {
      t.setAttribute("tabIndex", f ? 0 : -1);
    });
  }, [c, f]);
  const m = (0,react.useCallback)(() => {
    const e = u(s.current, !0);
    e.length >= 1 && (getFocusableNodes_n(e).length !== 0 || !e.find((t) => t.tagName !== "BUTTON")) && i(!0), p({ rowIndex: r.row - 1, colIndex: r.col - 1 });
  }, [r, p]);
  return (0,react.useLayoutEffect)(() => {
    const e = s.current;
    return u(e, !0).forEach((n) => {
      n.addEventListener("focus", m);
    }), () => {
      u(e, !0).forEach((u) => {
        u.removeEventListener("focus", m);
      });
    };
  }, [m]), /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    role: "gridcell",
    as: T,
    ref: s,
    onKeyDown: I,
    ...x
  });
};
E.defaultProps = {
  children: void 0,
  coords: {}
};
E.propTypes = {
  "aria-colindex": prop_types.number.isRequired,
  children: prop_types.node,
  coords: prop_types.shape({
    col: prop_types.number,
    row: prop_types.number
  })
};
h.defaultProps = {
  as: "td",
  children: void 0,
  coords: {}
};
h.propTypes = {
  "aria-colindex": prop_types.number.isRequired,
  as: prop_types.oneOf(["td", "th"]),
  children: prop_types.node,
  coords: prop_types.shape({
    col: prop_types.number,
    row: prop_types.number
  })
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js





const l = (0,styled_components_browser_esm["default"])(h)`
  vertical-align: middle;
  text-align: left;
  color: ${({ theme: e }) => e.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`, s = styled_components_browser_esm["default"].span`
  svg {
    height: ${4 / 16}rem;
  }
`, n = ({ children: e, action: a, ...i }) => /* @__PURE__ */ react.createElement(l, {
  as: E,
  ...i
}, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, e, /* @__PURE__ */ react.createElement(s, null, a)));
n.defaultProps = {
  action: void 0
};
n.propTypes = {
  action: prop_types.node,
  children: prop_types.node.isRequired
};
const T = (e) => /* @__PURE__ */ react.createElement(l, {
  ...e
});



/***/ }),

/***/ 11057:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ s)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/RawTable/RawTableContext.js
var RawTableContext = __webpack_require__(52954);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.js
var keyboardKeys = __webpack_require__(7801);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/RawTable/focusFocusable.js
const focusFocusable_c = (o) => {
  const e = o.querySelector('[tabindex="0"]');
  e && e.focus();
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/RawTable/RawTable.js





const y = ({ colCount: i, rowCount: l, jumpStep: n, initialCol: p, initialRow: E, ...P }) => {
  const f = (0,react.useRef)(null), u = (0,react.useRef)(!1), [o, r] = (0,react.useState)(E), [b, c] = (0,react.useState)(p), T = (0,react.useCallback)(({ colIndex: t, rowIndex: e }) => {
    c(t), r(e);
  }, []);
  (0,react.useEffect)(() => {
    u.current && focusFocusable_c(f.current), u.current || (u.current = !0);
  }, [b, o]);
  const K = (t) => {
    switch (t.key) {
      case keyboardKeys/* KeyboardKeys.RIGHT */.y.RIGHT: {
        t.preventDefault(), c((e) => e < i - 1 ? e + 1 : e);
        break;
      }
      case keyboardKeys/* KeyboardKeys.LEFT */.y.LEFT: {
        t.preventDefault(), c((e) => e > 0 ? e - 1 : e);
        break;
      }
      case keyboardKeys/* KeyboardKeys.UP */.y.UP: {
        t.preventDefault(), r((e) => e > 0 ? e - 1 : e);
        break;
      }
      case keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN: {
        t.preventDefault(), r((e) => e < l - 1 ? e + 1 : e);
        break;
      }
      case keyboardKeys/* KeyboardKeys.HOME */.y.HOME: {
        t.preventDefault(), t.ctrlKey && r(0), c(0);
        break;
      }
      case keyboardKeys/* KeyboardKeys.END */.y.END: {
        t.preventDefault(), t.ctrlKey && r(l - 1), c(i - 1);
        break;
      }
      case keyboardKeys/* KeyboardKeys.PAGE_DOWN */.y.PAGE_DOWN: {
        t.preventDefault(), r((e) => e + n < l ? e + n : l - 1);
        break;
      }
      case keyboardKeys/* KeyboardKeys.PAGE_UP */.y.PAGE_UP: {
        t.preventDefault(), r((e) => e - n > 0 ? e - n : 0);
        break;
      }
    }
  };
  return /* @__PURE__ */ react.createElement(RawTableContext/* RawTableContext.Provider */.N.Provider, {
    value: { rowIndex: o, colIndex: b, setTableValues: T }
  }, /* @__PURE__ */ react.createElement("table", {
    role: "grid",
    ref: f,
    "aria-rowcount": l,
    "aria-colcount": i,
    onKeyDown: K,
    ...P
  }));
};
y.defaultProps = {
  jumpStep: 3,
  initialCol: 0,
  initialRow: 0
};
y.propTypes = {
  colCount: prop_types.number.isRequired,
  initialCol: prop_types.number,
  initialRow: prop_types.number,
  jumpStep: prop_types.number,
  rowCount: prop_types.number.isRequired
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js





const T = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  overflow: hidden;
  border: 1px solid ${({ theme: t }) => t.colors.neutral150};
`, x = (0,styled_components_browser_esm["default"])(y)`
  width: 100%;
  white-space: nowrap;
`, R = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({ overflowing: t }) => t === "both" || t === "left" ? "''" : void 0};
    box-shadow: ${({ theme: t }) => t.shadows.tableShadow};
    width: ${({ theme: t }) => t.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({ overflowing: t }) => t === "both" || t === "right" ? "''" : void 0};
    box-shadow: ${({ theme: t }) => t.shadows.tableShadow};
    width: ${({ theme: t }) => t.spaces[2]};
    right: 0;
    top: 0;
  }
`, S = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  overflow-x: auto;
`, s = ({ colCount: t, rowCount: d, footer: c, ...f }) => {
  const i = (0,react.useRef)(null), [h, o] = (0,react.useState)(), u = (e) => {
    const p = e.target.scrollWidth - e.target.clientWidth;
    if (e.target.scrollLeft === 0) {
      o("right");
      return;
    }
    if (e.target.scrollLeft === p) {
      o("left");
      return;
    }
    e.target.scrollLeft > 0 && o("both");
  };
  return (0,react.useEffect)(() => {
    i.current.scrollWidth > i.current.clientWidth && o("right");
  }, []), /* @__PURE__ */ react.createElement(T, {
    shadow: "tableShadow",
    hasRadius: !0,
    background: "neutral0"
  }, /* @__PURE__ */ react.createElement(R, {
    overflowing: h,
    position: "relative"
  }, /* @__PURE__ */ react.createElement(S, {
    ref: i,
    onScroll: u,
    paddingLeft: 6,
    paddingRight: 6
  }, /* @__PURE__ */ react.createElement(x, {
    colCount: t,
    rowCount: d,
    ...f
  }))), c);
};
s.defaultProps = {
  footer: void 0
};
s.propTypes = {
  colCount: prop_types.number.isRequired,
  footer: prop_types.node,
  rowCount: prop_types.number.isRequired
};



/***/ }),

/***/ 550:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ n)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/RawTable/RawTbody.js


const l = ({ children: e, ...r }) => {
  const o = react.Children.toArray(e).map(
    (t, n) => (0,react.cloneElement)(t, { "aria-rowindex": n + 2 })
  );
  return /* @__PURE__ */ react.createElement("tbody", {
    ...r
  }, o);
};
l.propTypes = {
  children: prop_types.node.isRequired
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js



const m = (0,styled_components_browser_esm["default"])(l)`
  & tr:last-of-type {
    border-bottom: none;
  }
`, n = (o) => /* @__PURE__ */ react.createElement(m, {
  ...o
});



/***/ }),

/***/ 63985:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ l)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/RawTable/RawThead.js


const p = ({ children: e, ...r }) => {
  const o = react.Children.toArray(e).map((t) => (0,react.cloneElement)(t, { "aria-rowindex": 1 }));
  return /* @__PURE__ */ react.createElement("thead", {
    ...r
  }, o);
};
p.propTypes = {
  children: prop_types.node.isRequired
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js



const a = (0,styled_components_browser_esm["default"])(p)`
  border-bottom: 1px solid ${({ theme: r }) => r.colors.neutral150};
`, l = (r) => /* @__PURE__ */ react.createElement(a, {
  ...r
});



/***/ }),

/***/ 47144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Tr": () => (/* binding */ n)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/RawTable/RawTr.js



const m = ({ children: i, ...r }) => {
  const n = react.Children.toArray(i).map(
    (t, e) => (0,react.cloneElement)(t, { "aria-colindex": e + 1, coords: { col: e + 1, row: r["aria-rowindex"] } })
  );
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    as: "tr",
    ...r
  }, n);
};
m.propTypes = {
  "aria-rowindex": prop_types.number.isRequired,
  children: prop_types.node.isRequired
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js



const d = (0,styled_components_browser_esm["default"])(m)`
  border-bottom: 1px solid ${({ theme: t }) => t.colors.neutral150};

  & td,
  & th {
    padding: ${({ theme: t }) => t.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({ theme: t }) => t.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56 / 16}rem;
  }
`, n = (t) => /* @__PURE__ */ react.createElement(d, {
  ...t
});



/***/ })

}]);