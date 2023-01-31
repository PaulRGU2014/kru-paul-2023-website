"use strict";
(self["webpackChunkproject_kru_2023"] = self["webpackChunkproject_kru_2023"] || []).push([[302],{

/***/ 40316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SingleSignOn": () => (/* binding */ SingleSignOn),
  "default": () => (/* binding */ pages_SingleSignOn)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.js + 1 modules
var ToggleInput = __webpack_require__(20707);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js + 4 modules
var Select = __webpack_require__(91216);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(82562);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(38683);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/SingleSignOn/utils/schema.js


const schema = lib/* object */.Ry().shape({
  autoRegister: lib/* bool */.Xg().required(build.translatedErrors.required),
  defaultRole: lib/* mixed */.nK().when("autoRegister", (value, initSchema) => {
    return value ? initSchema.required(build.translatedErrors.required) : initSchema.nullable();
  })
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/SingleSignOn/index.js

















const ssoPermissions = {
  ...permissions/* default.settings.sso */.Z.settings.sso,
  readRoles: permissions/* default.settings.roles.read */.Z.settings.roles.read
};
const SingleSignOn = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate, canReadRoles }
  } = (0,build.useRBAC)(ssoPermissions);
  const [
    { formErrors, initialData, isLoading, modifiedData, showHeaderButtonLoader },
    // eslint-disable-next-line no-unused-vars
    dispatch,
    { handleChange, handleSubmit }
  ] = (0,hooks/* useSettingsForm */.G4)((0,utils/* getRequestUrl */.IF)("providers/options"), utils_schema, () => {
  }, [
    "autoRegister",
    "defaultRole"
  ]);
  const { roles } = (0,hooks/* useRolesList */.bF)(canReadRoles);
  (0,build.useFocusWhenNavigate)();
  const showLoader = isLoadingForPermissions || isLoading;
  (0,react.useEffect)(() => {
    if (formErrors.defaultRole) {
      const selector = `[name="defaultRole"]`;
      document.querySelector(selector).focus();
    }
  }, [formErrors]);
  const isHeaderButtonDisabled = isEqual_default()(initialData, modifiedData);
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, { name: "SSO" }), /* @__PURE__ */ react.createElement(Main/* Main */.o, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(
    "form",
    {
      onSubmit: (e) => {
        if (isHeaderButtonDisabled) {
          e.preventDefault();
          return;
        }
        handleSubmit(e);
      }
    },
    /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.T,
      {
        primaryAction: /* @__PURE__ */ react.createElement(
          Button/* Button */.z,
          {
            "data-testid": "save-button",
            disabled: isHeaderButtonDisabled,
            loading: showHeaderButtonLoader,
            startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
            type: "submit",
            size: "L"
          },
          formatMessage({
            id: "global.save",
            defaultMessage: "Save"
          })
        ),
        title: formatMessage({ id: "Settings.sso.title", defaultMessage: "Single Sign-On" }),
        subtitle: formatMessage({
          id: "Settings.sso.description",
          defaultMessage: "Configure the settings for the Single Sign-On feature."
        })
      }
    ),
    /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, showLoader ? /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null) : /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 4, background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
      id: "global.settings",
      defaultMessage: "Settings"
    })), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, m: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      ToggleInput/* ToggleInput */.s,
      {
        "aria-label": "autoRegister",
        "data-testid": "autoRegister",
        disabled: !canUpdate,
        checked: modifiedData.autoRegister,
        hint: formatMessage({
          id: "Settings.sso.form.registration.description",
          defaultMessage: "Create new user on SSO login if no account exists"
        }),
        label: formatMessage({
          id: "Settings.sso.form.registration.label",
          defaultMessage: "Auto-registration"
        }),
        name: "autoRegister",
        offLabel: formatMessage({
          id: "app.components.ToggleCheckbox.off-label",
          defaultMessage: "Off"
        }),
        onLabel: formatMessage({
          id: "app.components.ToggleCheckbox.on-label",
          defaultMessage: "On"
        }),
        onChange: (e) => {
          handleChange({
            target: { name: "autoRegister", value: e.target.checked }
          });
        }
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, m: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      Select/* Select */.P,
      {
        disabled: !canUpdate,
        hint: formatMessage({
          id: "Settings.sso.form.defaultRole.description",
          defaultMessage: "It will attach the new authenticated user to the selected role"
        }),
        error: formErrors.defaultRole ? formatMessage({
          id: formErrors.defaultRole.id,
          defaultMessage: formErrors.defaultRole.id
        }) : "",
        label: formatMessage({
          id: "Settings.sso.form.defaultRole.label",
          defaultMessage: "Default role"
        }),
        name: "defaultRole",
        onChange: (value) => {
          handleChange({ target: { name: "defaultRole", value } });
        },
        placeholder: formatMessage({
          id: "components.InputSelect.option.placeholder",
          defaultMessage: "Choose here"
        }),
        value: modifiedData.defaultRole
      },
      roles.map(({ id, name }) => /* @__PURE__ */ react.createElement(Option/* Option */.W, { key: id, value: id.toString() }, name))
    )))))
  )));
};
const ProtectedSSO = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, { permissions: ssoPermissions.main }, /* @__PURE__ */ react.createElement(SingleSignOn, null));
/* harmony default export */ const pages_SingleSignOn = (ProtectedSSO);


/***/ }),

/***/ 20707:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* binding */ o)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/sizes.js
var sizes = __webpack_require__(75228);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/useId.js + 1 modules
var useId = __webpack_require__(41762);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js
var FieldLabel = __webpack_require__(64777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldHint.js
var FieldHint = __webpack_require__(63428);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(39785);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/themes/utils.js
var utils = __webpack_require__(15585);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldContext.js
var FieldContext = __webpack_require__(88262);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/ToggleCheckbox/ToggleCheckbox.js














const L = styled_components_browser_esm["default"].label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`, q = (0,styled_components_browser_esm["default"])(Box/* Box */.x)`
  cursor: ${({ disabled: e }) => e ? "not-allowed" : void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,utils/* inputFocusStyle */.k3)()}
`, f = (0,styled_components_browser_esm["default"])(Flex/* Flex */.k).attrs({
  hasRadius: !0
})`
  background-color: ${({ theme: e, checked: l, disabled: a }) => l ? a ? e.colors.neutral200 : e.colors.neutral0 : "transparent"};
  border: 1px solid
    ${({ theme: e, checked: l, disabled: a }) => l && l !== null ? a ? e.colors.neutral300 : e.colors.neutral200 : a ? e.colors.neutral150 : e.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({ size: e }) => `${e === "S" ? "2px" : "6px"}`};
  padding-bottom: ${({ size: e }) => `${e === "S" ? "2px" : "6px"}`};
`, z = styled_components_browser_esm["default"].input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`, ToggleCheckbox_u = react.forwardRef(
  ({ size: e, onLabel: l, offLabel: a, children: c, checked: t, disabled: o, onChange: m, ...g }, h) => {
    const { name: b, required: x } = (0,FieldContext/* useField */.U)(), s = "neutral600";
    let y = !t && t !== null ? "danger700" : s, C = t ? "primary600" : s;
    const w = (p) => {
      o || m(p);
    };
    return /* @__PURE__ */ react.createElement(L, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, c), /* @__PURE__ */ react.createElement(q, {
      hasRadius: !0,
      disabled: o,
      padding: 1,
      display: "flex",
      background: o ? "neutral150" : "neutral100",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "neutral200"
    }, /* @__PURE__ */ react.createElement(f, {
      size: e,
      paddingLeft: 3,
      paddingRight: 3,
      justifyContent: "center",
      alignItems: "center",
      "aria-hidden": !0,
      checked: t === null ? !1 : !t,
      disabled: o
    }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      variant: "pi",
      fontWeight: "bold",
      textTransform: "uppercase",
      textColor: o ? "neutral700" : y
    }, a)), /* @__PURE__ */ react.createElement(f, {
      size: e,
      paddingLeft: 3,
      paddingRight: 3,
      justifyContent: "center",
      alignItems: "center",
      "aria-hidden": !0,
      checked: t === null ? !1 : t,
      disabled: o
    }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      variant: "pi",
      fontWeight: "bold",
      textTransform: "uppercase",
      textColor: o ? "neutral700" : C
    }, l)), /* @__PURE__ */ react.createElement(z, {
      type: "checkbox",
      "aria-disabled": o,
      onChange: (p) => w(p),
      name: b,
      ref: h,
      "aria-required": x,
      ...g,
      checked: !(t === null || !t)
    })));
  }
);
ToggleCheckbox_u.displayName = "ToggleCheckbox";
ToggleCheckbox_u.defaultProps = {
  disabled: !1,
  checked: !1,
  onChange: void 0,
  size: "M"
};
ToggleCheckbox_u.propTypes = {
  checked: prop_types.bool,
  children: prop_types.string.isRequired,
  disabled: prop_types.bool,
  offLabel: prop_types.string.isRequired,
  onChange: prop_types.func,
  onLabel: prop_types.string.isRequired,
  size: prop_types.oneOf(Object.keys(sizes/* sizes.input */.J.input))
};


;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.js
















const ToggleInput_z = (0,styled_components_browser_esm["default"])(Field/* Field */.g)`
  max-width: 320px;
`, ToggleInput_q = (0,styled_components_browser_esm["default"])(TextButton/* TextButton */.A)`
  align-self: flex-end;
  margin-left: auto;
`, o = ({
  disabled: t,
  size: d,
  error: s,
  hint: c,
  label: i,
  name: f,
  labelAction: g,
  required: u,
  id: b,
  onClear: l,
  clearLabel: n,
  checked: m,
  ...E
}) => {
  const a = (0,useId/* useId */.M)("toggleinput", b);
  return /* @__PURE__ */ react.createElement(ToggleInput_z, {
    name: f,
    hint: c,
    error: s,
    id: a,
    required: u
  }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, {
    action: g
  }, i), n && l && m !== null && !t && /* @__PURE__ */ react.createElement(ToggleInput_q, {
    onClick: l
  }, n)), /* @__PURE__ */ react.createElement(ToggleCheckbox_u, {
    id: a,
    size: d,
    checked: m,
    disabled: t,
    ...E
  }, i), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null)));
};
o.displayName = "ToggleInput";
o.defaultProps = {
  checked: !1,
  clearLabel: void 0,
  disabled: !1,
  error: void 0,
  hint: void 0,
  id: void 0,
  label: "",
  labelAction: void 0,
  name: "",
  onClear: void 0,
  required: !1,
  size: "M"
};
o.propTypes = {
  checked: prop_types.bool,
  clearLabel: prop_types.string,
  disabled: prop_types.bool,
  error: prop_types.string,
  hint: prop_types.oneOfType([prop_types.string, prop_types.node, prop_types.arrayOf(prop_types.node)]),
  id: prop_types.string,
  label: prop_types.string,
  labelAction: prop_types.node,
  name: prop_types.string,
  onClear: prop_types.func,
  required: prop_types.bool,
  size: prop_types.oneOf(Object.keys(sizes/* sizes.input */.J.input))
};



/***/ })

}]);