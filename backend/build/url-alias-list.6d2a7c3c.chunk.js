"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[3055],{

/***/ 5660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ screens_List)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/permissions.js
var permissions = __webpack_require__(32783);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js + 2 modules
var Table = __webpack_require__(11057);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js + 1 modules
var Thead = __webpack_require__(63985);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js + 1 modules
var Tr = __webpack_require__(47144);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js + 2 modules
var Cell = __webpack_require__(92439);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js + 1 modules
var Tbody = __webpack_require__(550);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/screens/List/components/TableBody/index.js






const TableBody = ({ paths }) => {
  const { push } = (0,react_router_dom_min.useHistory)();
  const handleClick = (path) => {
    (0,helper_plugin.request)(`/url-alias/path/editLink?path=${path}`, { method: "GET" }).then((res) => {
      push(res.link);
    }).catch(() => {
    });
  };
  return /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, paths.map((path) => /* @__PURE__ */ react.createElement(Tr.Tr, { key: path.url_path, ...(0,helper_plugin.onRowClick)({ fn: () => handleClick(path.url_path) }) }, /* @__PURE__ */ react.createElement(Cell.Td, { width: "20%" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { style: { marginTop: 5, marginBottom: 5 } }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, path.url_path))))));
};
/* harmony default export */ const components_TableBody = (TableBody);

;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/screens/List/components/Table/index.js






const TableComponent = ({ paths }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const colCount = 1;
  const rowCount = (paths?.length || 0) + 1;
  return /* @__PURE__ */ react.createElement("div", null, paths && paths.length > 0 ? /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount, rowCount }, /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "settings.page.patterns.table.head.label", defaultMessage: "Path" }))))), /* @__PURE__ */ react.createElement(
    components_TableBody,
    {
      paths
    }
  )) : /* @__PURE__ */ react.createElement(helper_plugin.EmptyStateLayout, { content: {
    id: "settings.page.list.table.empty",
    defaultMessage: "You don't have any URL paths yet."
  } }));
};
/* harmony default export */ const components_Table = (TableComponent);

;// CONCATENATED MODULE: ./node_modules/@strapi-community/strapi-plugin-url-alias/admin/screens/List/index.js






const List = () => {
  const [paths, setPaths] = (0,react.useState)(null);
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,react.useEffect)(() => {
    (0,helper_plugin.request)(`/url-alias/path/findMany`, { method: "GET" }).then((res) => {
      setPaths(res.results);
    }).catch(() => {
    });
  }, []);
  return /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.settings.patterns */.Z["settings.patterns"] }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({ id: "url-alias.settings.page.list.title", defaultMessage: "List" }),
      subtitle: formatMessage({ id: "url-alias.settings.page.list.description", defaultMessage: "A list of all the known URL aliases." }),
      as: "h2"
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(components_Table, { paths })));
};
/* harmony default export */ const screens_List = (List);


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