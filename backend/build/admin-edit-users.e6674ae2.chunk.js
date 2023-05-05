"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[4263],{

/***/ 22282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Users_ProtectedEditPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var src_permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(64687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var design_system_dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(38683);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/utils/api.js

const fetchUser = async (id) => {
  const { get } = (0,helper_plugin.getFetchClient)();
  const { data } = await get(`/admin/users/${id}`);
  return data.data;
};
const putUser = async (id, body) => {
  const { put } = (0,helper_plugin.getFetchClient)();
  const { data } = await put(`/admin/users/${id}`, body);
  return data.data;
};


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/utils/layout.js
const layout = [
  [
    {
      intlLabel: {
        id: "Auth.form.firstname.label",
        defaultMessage: "First name"
      },
      name: "firstname",
      placeholder: {
        id: "Auth.form.firstname.placeholder",
        defaultMessage: "e.g. Kai"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.lastname.label",
        defaultMessage: "Last name"
      },
      name: "lastname",
      placeholder: {
        id: "Auth.form.lastname.placeholder",
        defaultMessage: "e.g. Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.email.label",
        defaultMessage: "Email"
      },
      name: "email",
      placeholder: {
        id: "Auth.form.email.placeholder",
        defaultMessage: "e.g. kai.doe@strapi.io"
      },
      type: "email",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.username.label",
        defaultMessage: "Username"
      },
      name: "username",
      placeholder: {
        id: "Auth.form.username.placeholder",
        defaultMessage: "e.g. Kai_Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "global.password",
        defaultMessage: "Password"
      },
      name: "password",
      type: "password",
      size: {
        col: 6,
        xs: 12
      },
      autoComplete: "new-password"
    },
    {
      intlLabel: {
        id: "Auth.form.confirmPassword.label",
        defaultMessage: "Password confirmation"
      },
      name: "confirmPassword",
      type: "password",
      size: {
        col: 6,
        xs: 12
      },
      autoComplete: "new-password"
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.active.label",
        defaultMessage: "Active"
      },
      name: "isActive",
      type: "bool",
      size: {
        col: 6,
        xs: 12
      }
    }
  ]
];
/* harmony default export */ const utils_layout = (layout);

// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js + 3 modules
var users = __webpack_require__(17405);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/SelectRoles/index.js
var SelectRoles = __webpack_require__(81288);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/EditPage/index.js
var MagicLink=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(12201)/* ["default"] */ .Z);}return (__webpack_require__(31605)/* ["default"] */ .Z);}();var fieldsToPick=['email','firstname','lastname','username','isActive','roles'];var EditPage=function EditPage(_ref){var canUpdate=_ref.canUpdate;var _useIntl=(0,react_intl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useRouteMatch=(0,react_router_dom_min.useRouteMatch)('/settings/users/:id'),id=_useRouteMatch.params.id;var _useHistory=(0,react_router_dom_min.useHistory)(),push=_useHistory.push;var _useAppInfos=(0,helper_plugin.useAppInfos)(),setUserDisplayName=_useAppInfos.setUserDisplayName;var toggleNotification=(0,helper_plugin.useNotification)();var _useOverlayBlocker=(0,helper_plugin.useOverlayBlocker)(),lockApp=_useOverlayBlocker.lockApp,unlockApp=_useOverlayBlocker.unlockApp;(0,helper_plugin.useFocusWhenNavigate)();var _useQuery=(0,lib.useQuery)(['user',id],function(){return fetchUser(id);},{retry:false,onError:function onError(err){var status=err.response.status;// Redirect the use to the homepage if is not allowed to read
if(status===403){toggleNotification({type:'info',message:{id:'notification.permission.not-allowed-read',defaultMessage:'You are not allowed to see this document'}});push('/');}console.log(err.response.status);}}),status=_useQuery.status,data=_useQuery.data;var handleSubmit=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(body,actions){var _data,userInfos,userDisplayName,errors,fieldsErrors;return regenerator_default().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:lockApp();_context.prev=1;_context.next=4;return putUser(id,omit_default()(body,'confirmPassword'));case 4:_data=_context.sent;toggleNotification({type:'success',message:formatMessage({id:'notification.success.saved',defaultMessage:'Saved'})});userInfos=helper_plugin.auth.getUserInfo();// The user is updating himself
if(id.toString()===userInfos.id.toString()){helper_plugin.auth.setUserInfo(_data);userDisplayName=get_default()(body,'username')||(0,utils/* getFullName */.Pp)(body.firstname,body.lastname);setUserDisplayName(userDisplayName);}actions.setValues(pick_default()(body,fieldsToPick));_context.next=17;break;case 11:_context.prev=11;_context.t0=_context["catch"](1);// FIXME when API errors are ready
errors=(0,utils/* formatAPIErrors */.Iz)(_context.t0.response.data);fieldsErrors=Object.keys(errors).reduce(function(acc,current){acc[current]=errors[current].id;return acc;},{});actions.setErrors(fieldsErrors);toggleNotification({type:'warning',message:get_default()(_context.t0,'response.data.error.message','notification.error')});case 17:unlockApp();case 18:case"end":return _context.stop();}},_callee,null,[[1,11]]);}));return function handleSubmit(_x,_x2){return _ref2.apply(this,arguments);};}();var isLoading=status!=='success';var headerLabel=isLoading?{id:'app.containers.Users.EditPage.header.label-loading',defaultMessage:'Edit user'}:{id:'app.containers.Users.EditPage.header.label',defaultMessage:'Edit {name}'};var initialData=Object.keys(pick_default()(data,fieldsToPick)).reduce(function(acc,current){if(current==='roles'){acc[current]=((data===null||data===void 0?void 0:data.roles)||[]).map(function(_ref3){var id=_ref3.id;return id;});return acc;}acc[current]=data===null||data===void 0?void 0:data[current];return acc;},{});var headerLabelName=initialData.username||(0,utils/* getFullName */.Pp)(initialData.firstname,initialData.lastname);var title=formatMessage(headerLabel,{name:headerLabelName});if(isLoading){return/*#__PURE__*/react.createElement(design_system_dist.Main,{"aria-busy":"true"},/*#__PURE__*/react.createElement(helper_plugin.SettingsPageTitle,{name:"Users"}),/*#__PURE__*/react.createElement(design_system_dist.HeaderLayout,{primaryAction:/*#__PURE__*/react.createElement(design_system_dist.Button,{disabled:true,startIcon:/*#__PURE__*/react.createElement(icons_dist.Check,null),type:"button",size:"L"},formatMessage({id:'global.save',defaultMessage:'Save'})),title:title,navigationAction:/*#__PURE__*/react.createElement(helper_plugin.Link,{startIcon:/*#__PURE__*/react.createElement(icons_dist.ArrowLeft,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},formatMessage({id:'global.back',defaultMessage:'Back'}))}),/*#__PURE__*/react.createElement(design_system_dist.ContentLayout,null,/*#__PURE__*/react.createElement(helper_plugin.LoadingIndicatorPage,null)));}return/*#__PURE__*/react.createElement(design_system_dist.Main,null,/*#__PURE__*/react.createElement(helper_plugin.SettingsPageTitle,{name:"Users"}),/*#__PURE__*/react.createElement(dist.Formik,{onSubmit:handleSubmit,initialValues:initialData,validateOnChange:false,validationSchema:users/* editValidation */.YM},function(_ref4){var errors=_ref4.errors,values=_ref4.values,handleChange=_ref4.handleChange,isSubmitting=_ref4.isSubmitting;return/*#__PURE__*/react.createElement(helper_plugin.Form,null,/*#__PURE__*/react.createElement(design_system_dist.HeaderLayout,{primaryAction:/*#__PURE__*/react.createElement(design_system_dist.Button,{disabled:isSubmitting||!canUpdate,startIcon:/*#__PURE__*/react.createElement(icons_dist.Check,null),loading:isSubmitting,type:"submit",size:"L"},formatMessage({id:'global.save',defaultMessage:'Save'})),title:title,navigationAction:/*#__PURE__*/react.createElement(helper_plugin.Link,{startIcon:/*#__PURE__*/react.createElement(icons_dist.ArrowLeft,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},formatMessage({id:'global.back',defaultMessage:'Back'}))}),/*#__PURE__*/react.createElement(design_system_dist.ContentLayout,null,(data===null||data===void 0?void 0:data.registrationToken)&&/*#__PURE__*/react.createElement(design_system_dist.Box,{paddingBottom:6},/*#__PURE__*/react.createElement(MagicLink,{registrationToken:data.registrationToken})),/*#__PURE__*/react.createElement(design_system_dist.Stack,{spacing:7},/*#__PURE__*/react.createElement(design_system_dist.Box,{background:"neutral0",hasRadius:true,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},/*#__PURE__*/react.createElement(design_system_dist.Stack,{spacing:4},/*#__PURE__*/react.createElement(design_system_dist.Typography,{variant:"delta",as:"h2"},formatMessage({id:'app.components.Users.ModalCreateBody.block-title.details',defaultMessage:'Details'})),/*#__PURE__*/react.createElement(design_system_dist.Grid,{gap:5},utils_layout.map(function(row){return row.map(function(input){return/*#__PURE__*/react.createElement(design_system_dist.GridItem,(0,esm_extends/* default */.Z)({key:input.name},input.size),/*#__PURE__*/react.createElement(helper_plugin.GenericInput,(0,esm_extends/* default */.Z)({},input,{disabled:!canUpdate,error:errors[input.name],onChange:handleChange,value:values[input.name]||''})));});})))),/*#__PURE__*/react.createElement(design_system_dist.Box,{background:"neutral0",hasRadius:true,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},/*#__PURE__*/react.createElement(design_system_dist.Stack,{spacing:4},/*#__PURE__*/react.createElement(design_system_dist.Typography,{variant:"delta",as:"h2"},formatMessage({id:'global.roles',defaultMessage:"User's role"})),/*#__PURE__*/react.createElement(design_system_dist.Grid,{gap:5},/*#__PURE__*/react.createElement(design_system_dist.GridItem,{col:6,xs:12},/*#__PURE__*/react.createElement(SelectRoles/* default */.Z,{disabled:!canUpdate,error:errors.roles,onChange:handleChange,value:values.roles}))))))));}));};EditPage.propTypes={canUpdate:(prop_types_default()).bool.isRequired};/* harmony default export */ const Users_EditPage = (EditPage);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ProtectedEditPage/index.js






const ProtectedEditPage = () => {
  const toggleNotification = (0,helper_plugin.useNotification)();
  const permissions = (0,react.useMemo)(() => {
    return {
      read: src_permissions/* default.settings.users.read */.Z.settings.users.read,
      update: src_permissions/* default.settings.users.update */.Z.settings.users.update
    };
  }, []);
  const {
    isLoading,
    allowedActions: { canRead, canUpdate }
  } = (0,helper_plugin.useRBAC)(permissions);
  const { state } = (0,react_router_dom_min.useLocation)();
  const from = (0,lodash.get)(state, "from", "/");
  (0,react.useEffect)(() => {
    if (!isLoading) {
      if (!canRead && !canUpdate) {
        toggleNotification({
          type: "info",
          message: {
            id: "notification.permission.not-allowed-read",
            defaultMessage: "You are not allowed to see this document"
          }
        });
      }
    }
  }, [isLoading, canRead, canUpdate, toggleNotification]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null);
  }
  if (!canRead && !canUpdate) {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, { to: from });
  }
  return /* @__PURE__ */ react.createElement(Users_EditPage, { canUpdate });
};
/* harmony default export */ const Users_ProtectedEditPage = (ProtectedEditPage);


/***/ }),

/***/ 82464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28702);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95489);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41363);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74855);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97132);







const MagicLinkWrapper = ({ children, target }) => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.useNotification)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const handleCopy = () => {
    toggleNotification({ type: "info", message: { id: "notification.link-copied" } });
  };
  const copyLabel = formatMessage({
    id: "app.component.CopyToClipboard.label",
    defaultMessage: "Copy to clipboard"
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.ContentBox,
    {
      endAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__.CopyToClipboard, { onCopy: handleCopy, text: target }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__.IconButton, { label: copyLabel, noBorder: true, icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__.Duplicate, null) })),
      title: target,
      titleEllipsis: true,
      subtitle: children,
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { fontSize: 32 } }, "\u2709\uFE0F"),
      iconBackground: "neutral100"
    }
  );
};
MagicLinkWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)]).isRequired,
  target: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLinkWrapper);


/***/ }),

/***/ 31605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97132);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63871);
/* harmony import */ var _MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82464);





const MagicLink = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const target = `${window.location.origin}${_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/register?registrationToken=${registrationToken}`;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { target }, formatMessage({
    id: "app.components.Users.MagicLink.connect",
    defaultMessage: "Copy and share this link to give access to this user"
  }));
};
MagicLink.defaultProps = {
  registrationToken: ""
};
MagicLink.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLink);


/***/ }),

/***/ 81288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97132);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28702);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23724);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71893);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41363);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95489);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);








const rotation = styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  animation: ${rotation} 2s infinite linear;
`;
const Loader = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingWrapper, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_3__.Loader, null));
const fetchData = async () => {
  const { get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.getFetchClient)();
  const { data } = await get("/admin/roles");
  return data.data;
};
const SelectRoles = ({ disabled, error, onChange, value }) => {
  const { status, data } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(["roles"], fetchData, {
    staleTime: 5e4
  });
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles",
    defaultMessage: "User's roles"
  });
  const hint = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles.description",
    defaultMessage: "A user can have one or several roles"
  });
  const placeholder = formatMessage({
    id: "app.components.Select.placeholder",
    defaultMessage: "Select"
  });
  const startIcon = status === "loading" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Loader, null) : void 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__.Select,
    {
      id: "roles",
      disabled,
      error: errorMessage,
      hint,
      label,
      name: "roles",
      onChange: (v) => {
        onChange({ target: { name: "roles", value: v } });
      },
      placeholder,
      multi: true,
      startIcon,
      value,
      withTags: true,
      required: true
    },
    (data || []).map((role) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__.Option, { key: role.id, value: role.id }, formatMessage({
        id: `global.${role.code}`,
        defaultMessage: role.name
      }));
    })
  );
};
SelectRoles.defaultProps = {
  disabled: false,
  error: void 0
};
SelectRoles.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectRoles);


/***/ }),

/***/ 17405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "YM": () => (/* reexport */ edit),
  "Rw": () => (/* reexport */ profile)
});

// UNUSED EXPORTS: rolesValidation

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/profile.js


const commonUserSchema = {
  firstname: lib/* string */.Z_().trim().required(helper_plugin.translatedErrors.required),
  lastname: lib/* string */.Z_(),
  email: lib/* string */.Z_().email(helper_plugin.translatedErrors.email).lowercase().required(helper_plugin.translatedErrors.required),
  username: lib/* string */.Z_().nullable(),
  password: lib/* string */.Z_().min(8, helper_plugin.translatedErrors.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number"),
  confirmPassword: lib/* string */.Z_().min(8, helper_plugin.translatedErrors.minLength).oneOf([lib/* ref */.iH("password"), null], "components.Input.error.password.noMatch").when("password", (password, passSchema) => {
    return password ? passSchema.required(helper_plugin.translatedErrors.required) : passSchema;
  })
};
const schema = {
  ...commonUserSchema,
  currentPassword: lib/* string */.Z_().when(["password", "confirmPassword"], (password, confirmPassword, passSchema) => {
    return password || confirmPassword ? passSchema.required(helper_plugin.translatedErrors.required) : passSchema;
  }),
  preferedLanguage: lib/* string */.Z_().nullable()
};
/* harmony default export */ const profile = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/roles.js


const roles_schema = {
  roles: lib/* array */.IX().min(1, helper_plugin.translatedErrors.required).required(helper_plugin.translatedErrors.required)
};
/* harmony default export */ const roles = (roles_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/edit.js



const edit_schema = lib/* object */.Ry().shape({
  ...commonUserSchema,
  isActive: lib/* bool */.Xg(),
  ...roles
});
/* harmony default export */ const edit = (edit_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js





/***/ }),

/***/ 12201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97132);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63871);
/* harmony import */ var _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82464);





const MagicLink = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  if (registrationToken) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
      {
        target: `${window.location.origin}${_admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/register?registrationToken=${registrationToken}`
      },
      formatMessage({
        id: "app.components.Users.MagicLink.connect",
        defaultMessage: "Copy and share this link to give access to this user"
      })
    );
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_SettingsPage_pages_Users_components_MagicLink_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { target: `${window.location.origin}${_admin_src_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}auth/login` }, formatMessage({
    id: "app.components.Users.MagicLink.connect.sso",
    defaultMessage: "Send this link to the user, the first login can be made via a SSO provider."
  }));
};
MagicLink.defaultProps = {
  registrationToken: ""
};
MagicLink.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLink);


/***/ })

}]);