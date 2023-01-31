(self["webpackChunkproject_kru_2023"] = self["webpackChunkproject_kru_2023"] || []).push([[8761],{

/***/ 44174:
/***/ ((module) => {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),

/***/ 81119:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(89881);

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),

/***/ 55189:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayAggregator = __webpack_require__(44174),
    baseAggregator = __webpack_require__(81119),
    baseIteratee = __webpack_require__(67206),
    isArray = __webpack_require__(1469);

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),

/***/ 94654:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(21078),
    map = __webpack_require__(35161);

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1);
}

module.exports = flatMap;


/***/ }),

/***/ 7739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(89465),
    createAggregator = __webpack_require__(55189);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;


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

/***/ 2407:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ h),
/* harmony export */   "O": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71893);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41363);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75515);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41580);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11047);
/* harmony import */ var _VisuallyHidden_VisuallyHidden_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63237);







const s = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k)`
  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
    path {
      fill: ${({
  theme: r
}) => r.colors.neutral500};
    }
  }
  :last-of-type ${_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x} {
    display: none;
  }
  :last-of-type ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z} {
    color: ${({
  theme: r
}) => r.colors.neutral800};
    font-weight: ${({
  theme: r
}) => r.fontWeights.bold};
  }
`, h = ({
  children: r
}) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(s, {
  inline: !0,
  as: "li",
  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
    variant: "pi",
    textColor: "neutral600",
    children: r
  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, {
    "aria-hidden": !0,
    paddingLeft: 3,
    paddingRight: 3,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronRight, {})
  })]
});
h.displayName = "Crumb";
const c = ({
  children: r,
  label: n,
  ...a
}) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k, {
  ...a,
  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisuallyHidden_VisuallyHidden_js__WEBPACK_IMPORTED_MODULE_6__/* .VisuallyHidden */ .T, {
    children: n
  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ol", {
    "aria-hidden": !0,
    children: r
  })]
});
c.displayName = "Breadcrumbs";



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

/***/ 53192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ l)
/* harmony export */ });
/* unused harmony export subNavWidth */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71893);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var _Grid_Grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11276);





const p = `${232 / 16}rem`, s = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_2__/* .Grid */ .r)`
  width: ${p};
  background: ${({ theme: r }) => r.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({ theme: r }) => r.colors.neutral200};
  z-index: 1;
`, l = ({ ariaLabel: r, ...o }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(s, {
  "aria-label": r,
  as: "nav",
  ...o
});
l.propTypes = {
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
};



/***/ }),

/***/ 38702:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ u)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(70004);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/Searchbar.js
var Searchbar = __webpack_require__(49123);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/SearchForm.js
var SearchForm = __webpack_require__(8509);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/useId.js + 1 modules
var useId = __webpack_require__(41762);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/helpers/usePrevious.js

const usePrevious_s = (r) => {
  const e = (0,react.useRef)();
  return (0,react.useEffect)(() => {
    e.current = r;
  }), e.current;
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.js
var keyboardKeys = __webpack_require__(7801);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavHeader.js














const d = (0,styled_components_browser_esm["default"])(Divider/* Divider */.i)`
  width: ${24 / 16}rem;
  background-color: ${({ theme: l }) => l.colors.neutral200};
`, u = ({ as: l, label: f, searchLabel: s, searchable: g, onChange: h, value: b, onClear: E, onSubmit: S, id: y }) => {
  const [a, c] = (0,react.useState)(!1), m = usePrevious_s(a), C = (0,useId/* useId */.M)("subnav-searchbar-clear", y), o = (0,react.useRef)(), i = (0,react.useRef)();
  (0,react.useEffect)(() => {
    a && o.current && o.current.focus(), m && !a && i.current && i.current.focus();
  }, [a, m]);
  const v = () => {
    c((t) => !t);
  }, B = (t) => {
    E(t), o.current.focus();
  }, T = (t) => {
    t.relatedTarget?.id !== C && c(!1);
  }, R = (t) => {
    t.key === keyboardKeys/* KeyboardKeys.ESCAPE */.y.ESCAPE && c(!1);
  };
  return a ? /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 4,
    paddingTop: 5,
    paddingBottom: 2,
    paddingRight: 4
  }, /* @__PURE__ */ react.createElement(SearchForm/* SearchForm */.U, null, /* @__PURE__ */ react.createElement(Searchbar/* Searchbar */.w, {
    name: "searchbar",
    value: b,
    onChange: h,
    placeholder: "e.g: strapi-plugin-abcd",
    onKeyDown: R,
    ref: o,
    onBlur: T,
    onClear: B,
    onSubmit: S,
    clearLabel: "Clear",
    size: "S"
  }, s)), /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 2,
    paddingTop: 4
  }, /* @__PURE__ */ react.createElement(d, null))) : /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 6,
    paddingTop: 6,
    paddingBottom: 2,
    paddingRight: 4
  }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
    variant: "beta",
    as: l
  }, f), g && /* @__PURE__ */ react.createElement(IconButton/* IconButton */.h, {
    ref: i,
    onClick: v,
    label: s,
    icon: /* @__PURE__ */ react.createElement(dist.Search, null)
  })), /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingTop: 4
  }, /* @__PURE__ */ react.createElement(d, null)));
};
u.defaultProps = {
  as: "h2",
  searchable: !1,
  onChange() {
  },
  onClear() {
  },
  onSubmit() {
  },
  value: "",
  searchLabel: "",
  id: void 0
};
u.propTypes = {
  as: prop_types.string,
  id: prop_types.string,
  label: prop_types.string.isRequired,
  onChange: prop_types.func,
  onClear: prop_types.func,
  onSubmit: prop_types.func,
  searchLabel: prop_types.string,
  searchable: prop_types.bool,
  value: prop_types.string
};



/***/ }),

/***/ 52305:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45697);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71893);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41363);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75515);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11047);
/* harmony import */ var _BaseLink_BaseLink_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63507);








const $ = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme: e }) => e.colors.neutral800};
  svg > * {
    fill: ${({ theme: e }) => e.colors.neutral600};
  }

  &.active {
    ${({ theme: e }) => `
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`, s = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__.Dot)`
  width: ${12 / 16}rem;
  height: ${4 / 16}rem;
  * {
    fill: ${({ theme: e, $active: o }) => o ? e.colors.primary600 : e.colors.neutral600};
  }
`, b = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
  }
`, n = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({ children: e, icon: o, withBullet: c, as: m, isSubSectionChild: d, ...u }, f) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement($, {
  as: m,
  icon: o,
  background: "neutral100",
  paddingLeft: d ? 9 : 7,
  paddingBottom: 2,
  paddingTop: 2,
  ref: f,
  ...u
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .k, null, o ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(b, null, o) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(s, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, {
  paddingLeft: 2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
  as: "span"
}, e))), c && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, {
  as: _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .k,
  paddingRight: 4
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(s, {
  $active: !0
}))));
n.displayName = "SubNavLink";
n.defaultProps = {
  as: _BaseLink_BaseLink_js__WEBPACK_IMPORTED_MODULE_6__/* .BaseLink */ .f,
  icon: null,
  isSubSectionChild: !1,
  withBullet: !1
};
n.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_7__.elementType,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7__.node.isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_7__.element,
  isSubSectionChild: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool,
  withBullet: prop_types__WEBPACK_IMPORTED_MODULE_7__.bool
};



/***/ }),

/***/ 29489:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ p)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Badge/Badge.js
var Badge = __webpack_require__(30190);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSectionLabel.js







const i = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k)`
  border: none;
  padding: 0;
  background: transparent;
`, f = styled_components_browser_esm["default"].div`
  display: flex;
  align-items: center;
  transform: rotateX(${({ rotated: t }) => t ? "0deg" : "180deg"});
`, SubNavSectionLabel_m = ({ collapsable: t, label: a, onClick: d, ariaExpanded: o, ariaControls: c }) => t ? /* @__PURE__ */ react.createElement(i, {
  as: "button",
  onClick: d,
  "aria-expanded": o,
  "aria-controls": c,
  textAlign: "left"
}, /* @__PURE__ */ react.createElement(Box/* Box */.x, {
  paddingRight: 1
}, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
  variant: "sigma",
  textColor: "neutral600"
}, a)), t && /* @__PURE__ */ react.createElement(f, {
  rotated: o
}, /* @__PURE__ */ react.createElement(dist.CarretDown, {
  "aria-hidden": !0
}))) : /* @__PURE__ */ react.createElement(i, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, {
  paddingRight: 1
}, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
  variant: "sigma",
  textColor: "neutral600"
}, a)));
SubNavSectionLabel_m.defaultProps = {
  ariaControls: null,
  ariaExpanded: null,
  collapsable: !1,
  onClick() {
  }
};
SubNavSectionLabel_m.propTypes = {
  ariaControls: prop_types.string,
  ariaExpanded: prop_types.bool,
  collapsable: prop_types.bool,
  label: prop_types.string.isRequired,
  onClick: prop_types.func
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/useId.js + 1 modules
var useId = __webpack_require__(41762);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSection.js








const C = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: r }) => r.colors.neutral500};
    }
  }
`, p = ({ collapsable: r, label: s, badgeLabel: o, children: d, id: m }) => {
  const [a, c] = (0,react.useState)(!0), n = (0,useId/* useId */.M)("subnav-list", m), u = () => {
    c((i) => !i);
  };
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(C, {
    paddingLeft: 6,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 4
  }, /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    position: "relative",
    paddingRight: o ? 6 : 0
  }, /* @__PURE__ */ react.createElement(SubNavSectionLabel_m, {
    onClick: u,
    ariaExpanded: a,
    ariaControls: n,
    collapsable: r,
    label: s
  }), o && /* @__PURE__ */ react.createElement(Badge/* Badge */.C, {
    backgroundColor: "neutral150",
    textColor: "neutral600",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)"
  }, o))), (!r || a) && /* @__PURE__ */ react.createElement("ol", {
    id: n
  }, react.Children.map(d, (i, g) => /* @__PURE__ */ react.createElement("li", {
    key: g
  }, i))));
};
p.defaultProps = {
  badgeLabel: null,
  collapsable: !1,
  id: void 0
};
p.propTypes = {
  badgeLabel: prop_types.string,
  children: prop_types.node.isRequired,
  collapsable: prop_types.bool,
  id: prop_types.string,
  label: prop_types.string.isRequired
};



/***/ }),

/***/ 34446:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var _Stack_Stack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7681);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41580);




const c = ({ children: r, ...t }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box_js__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, {
  paddingTop: 2,
  paddingBottom: 4
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_2__/* .Stack */ .K, {
  as: "ol",
  spacing: 2,
  ...t
}, react__WEBPACK_IMPORTED_MODULE_0__.Children.map(r, (o, p) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
  key: p
}, o))));
c.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.node.isRequired
};



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

/***/ 17772:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

function l(e) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M16.235 2.824a1.412 1.412 0 010-2.824h6.353C23.368 0 24 .633 24 1.412v6.353a1.412 1.412 0 01-2.823 0V4.82l-8.179 8.178a1.412 1.412 0 01-1.996-1.996l8.178-8.178h-2.945zm4.942 10.588a1.412 1.412 0 012.823 0v9.176c0 .78-.632 1.412-1.412 1.412H1.412C.632 24 0 23.368 0 22.588V1.412C0 .632.632 0 1.412 0h9.176a1.412 1.412 0 010 2.824H2.824v18.353h18.353v-7.765z",
      fill: "#32324D"
    })
  });
}



/***/ })

}]);