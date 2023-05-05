"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[5199],{

/***/ 67875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const useLicenseLimitNotification = () => {
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLicenseLimitNotification);


/***/ }),

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

/***/ 4214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97132);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28702);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41363);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons__WEBPACK_IMPORTED_MODULE_3__);





const CreateAction = ({ onClick }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__.Button, { onClick, startIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_3__.Envelop, null), size: "S" }, formatMessage({
    id: "Settings.permissions.users.create",
    defaultMessage: "Invite new user"
  }));
};
CreateAction.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateAction);


/***/ }),

/***/ 57338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formDataModel = {
  firstname: "",
  lastname: "",
  email: "",
  roles: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataModel);


/***/ }),

/***/ 55867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const form = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);


/***/ }),

/***/ 37735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Users_ProtectedListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(64572);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(64687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(38683);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/DynamicTable/TableRows/index.js








const TableRows = ({
  canDelete,
  headers,
  entriesToDelete,
  onClickDelete,
  onSelectRow,
  withMainAction,
  withBulkActions,
  rows
}) => {
  const {
    push,
    location: { pathname }
  } = (0,react_router_dom_min.useHistory)();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Tbody, null, rows.map((data) => {
    const isChecked = entriesToDelete.findIndex((id) => id === data.id) !== -1;
    return /* @__PURE__ */ react.createElement(
      dist.Tr,
      {
        key: data.id,
        ...(0,helper_plugin.onRowClick)({
          fn: () => push(`${pathname}/${data.id}`),
          condition: withBulkActions
        })
      },
      withMainAction && /* @__PURE__ */ react.createElement(dist.Td, { ...helper_plugin.stopPropagation }, /* @__PURE__ */ react.createElement(
        dist.BaseCheckbox,
        {
          "aria-label": formatMessage(
            {
              id: "app.component.table.select.one-entry",
              defaultMessage: `Select {target}`
            },
            { target: (0,utils/* getFullName */.Pp)(data.firstname, data.lastname) }
          ),
          checked: isChecked,
          onChange: () => {
            onSelectRow({ name: data.id, value: !isChecked });
          }
        }
      )),
      headers.map(({ key, cellFormatter, name, ...rest }) => {
        return /* @__PURE__ */ react.createElement(dist.Td, { key }, typeof cellFormatter === "function" ? cellFormatter(data, { key, name, formatMessage, ...rest }) : /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, data[name] || "-"));
      }),
      withBulkActions && /* @__PURE__ */ react.createElement(dist.Td, null, /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "end" }, /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          onClick: () => push(`${pathname}/${data.id}`),
          label: formatMessage(
            { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
            { target: (0,utils/* getFullName */.Pp)(data.firstname, data.lastname) }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(icons_dist.Pencil, null)
        }
      ), canDelete && /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 1, ...helper_plugin.stopPropagation }, /* @__PURE__ */ react.createElement(
        dist.IconButton,
        {
          onClick: () => onClickDelete(data.id),
          label: formatMessage(
            { id: "global.delete-target", defaultMessage: "Delete {target}" },
            { target: (0,utils/* getFullName */.Pp)(data.firstname, data.lastname) }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(icons_dist.Trash, null)
        }
      ))))
    );
  }));
};
TableRows.defaultProps = {
  canDelete: false,
  entriesToDelete: [],
  onClickDelete() {
  },
  onSelectRow() {
  },
  rows: [],
  withBulkActions: false,
  withMainAction: false
};
TableRows.propTypes = {
  canDelete: (prop_types_default()).bool,
  entriesToDelete: (prop_types_default()).array,
  headers: (prop_types_default()).array.isRequired,
  onClickDelete: (prop_types_default()).func,
  onSelectRow: (prop_types_default()).func,
  rows: (prop_types_default()).array,
  withBulkActions: (prop_types_default()).bool,
  withMainAction: (prop_types_default()).bool
};
/* harmony default export */ const DynamicTable_TableRows = (TableRows);

// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Filters/index.js
var Filters = __webpack_require__(94699);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var formik_dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/SelectRoles/index.js
var SelectRoles = __webpack_require__(81288);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/utils/layout.js
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
    }
  ]
];
/* harmony default export */ const utils_layout = (layout);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/utils/schema.js


const schema = yup_lib/* object */.Ry().shape({
  firstname: yup_lib/* string */.Z_().trim().required(helper_plugin.translatedErrors.required),
  lastname: yup_lib/* string */.Z_(),
  email: yup_lib/* string */.Z_().email(helper_plugin.translatedErrors.email).required(helper_plugin.translatedErrors.required),
  roles: yup_lib/* array */.IX().min(1, helper_plugin.translatedErrors.required).required(helper_plugin.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/utils/stepper.js
const stepper = {
  create: {
    buttonSubmitLabel: {
      id: "app.containers.Users.ModalForm.footer.button-success",
      defaultMessage: "Invite user"
    },
    isDisabled: false,
    next: "magic-link"
  },
  "magic-link": {
    buttonSubmitLabel: { id: "global.finish", defaultMessage: "Finish" },
    isDisabled: true,
    next: null
  }
};
/* harmony default export */ const utils_stepper = (stepper);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/index.js
var formDataModel=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(97083)/* ["default"] */ .Z);}return (__webpack_require__(57338)/* ["default"] */ .Z);}();var roleSettingsForm=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(810)/* ["default"] */ .Z);}return (__webpack_require__(55867)/* ["default"] */ .Z);}();var MagicLink=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(12201)/* ["default"] */ .Z);}return (__webpack_require__(31605)/* ["default"] */ .Z);}();var ModalForm=function ModalForm(_ref){var queryName=_ref.queryName,onToggle=_ref.onToggle;var _useState=(0,react.useState)('create'),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),currentStep=_useState2[0],setStep=_useState2[1];var _useState3=(0,react.useState)(false),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),isSubmitting=_useState4[0],setIsSubmitting=_useState4[1];var _useState5=(0,react.useState)(null),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),registrationToken=_useState6[0],setRegistrationToken=_useState6[1];var queryClient=(0,lib.useQueryClient)();var _useIntl=(0,react_intl.useIntl)(),formatMessage=_useIntl.formatMessage;var toggleNotification=(0,helper_plugin.useNotification)();var _useOverlayBlocker=(0,helper_plugin.useOverlayBlocker)(),lockApp=_useOverlayBlocker.lockApp,unlockApp=_useOverlayBlocker.unlockApp;var _useFetchClient=(0,helper_plugin.useFetchClient)(),post=_useFetchClient.post;var postMutation=(0,lib.useMutation)(function(body){return post('/admin/users',body);},{onSuccess:function onSuccess(_ref2){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(){var data;return regenerator_default().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:data=_ref2.data;setRegistrationToken(data.data.registrationToken);_context.next=4;return queryClient.refetchQueries(queryName);case 4:_context.next=6;return queryClient.refetchQueries(['ee','license-limit-info']);case 6:goNext();setIsSubmitting(false);case 8:case"end":return _context.stop();}},_callee);}))();},onError:function onError(err){setIsSubmitting(false);toggleNotification({type:'warning',message:{id:'notification.error',defaultMessage:'An error occured'}});throw err;},onSettled:function onSettled(){unlockApp();}});var headerTitle=formatMessage({id:'Settings.permissions.users.create',defaultMessage:'Invite new user'});var handleSubmit=/*#__PURE__*/function(){var _ref4=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee2(body,_ref3){var setErrors,_err$response,_err$response$data;return regenerator_default().wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:setErrors=_ref3.setErrors;lockApp();setIsSubmitting(true);_context2.prev=3;_context2.next=6;return postMutation.mutateAsync(body);case 6:_context2.next=12;break;case 8:_context2.prev=8;_context2.t0=_context2["catch"](3);unlockApp();if((_context2.t0===null||_context2.t0===void 0?void 0:(_err$response=_context2.t0.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.error.message)==='Email already taken'){setErrors({email:_context2.t0.response.data.error.message});}case 12:case"end":return _context2.stop();}},_callee2,null,[[3,8]]);}));return function handleSubmit(_x,_x2){return _ref4.apply(this,arguments);};}();var goNext=function goNext(){if(next){setStep(next);}else{onToggle();}};var _stepper$currentStep=utils_stepper[currentStep],buttonSubmitLabel=_stepper$currentStep.buttonSubmitLabel,isDisabled=_stepper$currentStep.isDisabled,next=_stepper$currentStep.next;var endActions=currentStep==='create'?/*#__PURE__*/react.createElement(dist.Button,{type:"submit",loading:isSubmitting},formatMessage(buttonSubmitLabel)):/*#__PURE__*/react.createElement(dist.Button,{type:"button",loading:isSubmitting,onClick:onToggle},formatMessage(buttonSubmitLabel));return/*#__PURE__*/react.createElement(dist.ModalLayout,{onClose:onToggle,labelledBy:"title"},/*#__PURE__*/react.createElement(dist.ModalHeader,null,/*#__PURE__*/react.createElement(dist.Breadcrumbs,{label:headerTitle},/*#__PURE__*/react.createElement(dist.Crumb,null,headerTitle))),/*#__PURE__*/react.createElement(formik_dist.Formik,{initialValues:formDataModel,onSubmit:handleSubmit,validationSchema:utils_schema,validateOnChange:false},function(_ref5){var errors=_ref5.errors,handleChange=_ref5.handleChange,values=_ref5.values;return/*#__PURE__*/react.createElement(helper_plugin.Form,null,/*#__PURE__*/react.createElement(dist.ModalBody,null,/*#__PURE__*/react.createElement(dist.Stack,{spacing:6},currentStep!=='create'&&/*#__PURE__*/react.createElement(MagicLink,{registrationToken:registrationToken}),/*#__PURE__*/react.createElement(dist.Box,null,/*#__PURE__*/react.createElement(dist.Typography,{variant:"beta",as:"h2"},formatMessage({id:'app.components.Users.ModalCreateBody.block-title.details',defaultMessage:'User details'})),/*#__PURE__*/react.createElement(dist.Box,{paddingTop:4},/*#__PURE__*/react.createElement(dist.Stack,{spacing:1},/*#__PURE__*/react.createElement(dist.Grid,{gap:5},utils_layout.map(function(row){return row.map(function(input){return/*#__PURE__*/react.createElement(dist.GridItem,(0,esm_extends/* default */.Z)({key:input.name},input.size),/*#__PURE__*/react.createElement(helper_plugin.GenericInput,(0,esm_extends/* default */.Z)({},input,{disabled:isDisabled,error:errors[input.name],onChange:handleChange,value:values[input.name]})));});}))))),/*#__PURE__*/react.createElement(dist.Box,null,/*#__PURE__*/react.createElement(dist.Typography,{variant:"beta",as:"h2"},formatMessage({id:'global.roles',defaultMessage:"User's role"})),/*#__PURE__*/react.createElement(dist.Box,{paddingTop:4},/*#__PURE__*/react.createElement(dist.Grid,{gap:5},/*#__PURE__*/react.createElement(dist.GridItem,{col:6,xs:12},/*#__PURE__*/react.createElement(SelectRoles/* default */.Z,{disabled:isDisabled,error:errors.roles,onChange:handleChange,value:values.roles})),roleSettingsForm.map(function(row){return row.map(function(input){return/*#__PURE__*/react.createElement(dist.GridItem,(0,esm_extends/* default */.Z)({key:input.name},input.size),/*#__PURE__*/react.createElement(helper_plugin.GenericInput,(0,esm_extends/* default */.Z)({},input,{disabled:isDisabled,onChange:handleChange,value:values[input.name]})));});})))))),/*#__PURE__*/react.createElement(dist.ModalFooter,{startActions:/*#__PURE__*/react.createElement(dist.Button,{variant:"tertiary",onClick:onToggle,type:"button"},formatMessage({id:'app.components.Button.cancel',defaultMessage:'Cancel'})),endActions:endActions}));}));};ModalForm.propTypes={onToggle:(prop_types_default()).func.isRequired,queryName:(prop_types_default()).array.isRequired};/* harmony default export */ const ListPage_ModalForm = (ModalForm);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/PaginationFooter/index.js




const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(dist.Flex, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(helper_plugin.PageSizeURLQuery, null), /* @__PURE__ */ react.createElement(helper_plugin.PaginationURLQuery, { pagination })));
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
/* harmony default export */ const ListPage_PaginationFooter = (PaginationFooter);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/api.js

const fetchData = async (search, notify) => {
  const { get } = (0,helper_plugin.getFetchClient)();
  const {
    data: { data }
  } = await get(`/admin/users${search}`);
  notify();
  return data;
};
const deleteData = async (ids) => {
  const { post } = (0,helper_plugin.getFetchClient)();
  await post("/admin/users/batch-delete", { ids });
};


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/displayedFilters.js
const displayedFilters = [
  {
    name: "firstname",
    metadatas: { label: "Firstname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "lastname",
    metadatas: { label: "Lastname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "email",
    metadatas: { label: "Email" },
    fieldSchema: { type: "email" }
  },
  {
    name: "username",
    metadatas: { label: "Username" },
    fieldSchema: { type: "string" }
  },
  {
    name: "isActive",
    metadatas: { label: "Active user" },
    fieldSchema: { type: "boolean" }
  }
];
/* harmony default export */ const utils_displayedFilters = (displayedFilters);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/tableHeaders.js



const tableHeaders = [
  {
    name: "firstname",
    key: "firstname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.firstname",
        defaultMessage: "Firstname"
      },
      sortable: true
    }
  },
  {
    name: "lastname",
    key: "lastname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.lastname",
        defaultMessage: "Lastname"
      },
      sortable: true
    }
  },
  {
    key: "email",
    name: "email",
    metadatas: {
      label: { id: "Settings.permissions.users.email", defaultMessage: "Email" },
      sortable: true
    }
  },
  {
    key: "roles",
    name: "roles",
    metadatas: {
      label: {
        id: "Settings.permissions.users.roles",
        defaultMessage: "Roles"
      },
      sortable: false
    },
    cellFormatter({ roles }, { formatMessage }) {
      return /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, roles.map(
        (role) => formatMessage({
          id: `Settings.permissions.users.${role.code}`,
          defaultMessage: role.name
        })
      ).join(",\n"));
    }
  },
  {
    key: "username",
    name: "username",
    metadatas: {
      label: {
        id: "Settings.permissions.users.username",
        defaultMessage: "Username"
      },
      sortable: true
    }
  },
  {
    key: "isActive",
    name: "isActive",
    metadatas: {
      label: {
        id: "Settings.permissions.users.user-status",
        defaultMessage: "User status"
      },
      sortable: false
    },
    cellFormatter({ isActive }, { formatMessage }) {
      return /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(helper_plugin.Status, { isActive, variant: isActive ? "success" : "danger" }), /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral800" }, formatMessage({
        id: isActive ? "Settings.permissions.users.active" : "Settings.permissions.users.inactive",
        defaultMessage: isActive ? "Active" : "Inactive"
      })));
    }
  }
];
/* harmony default export */ const utils_tableHeaders = (tableHeaders);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,defineProperty/* default */.Z)(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}var CreateAction=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(49823)/* ["default"] */ .Z);}return (__webpack_require__(4214)/* ["default"] */ .Z);}();var useLicenseLimitNotification=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(94018)/* ["default"] */ .Z);}return (__webpack_require__(67875)/* ["default"] */ .Z);}();var ListPage=function ListPage(){var _useAPIErrorHandler=(0,helper_plugin.useAPIErrorHandler)(),formatAPIError=_useAPIErrorHandler.formatAPIError;var _useState=(0,react.useState)(false),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),isModalOpened=_useState2[0],setIsModalOpen=_useState2[1];var _useRBAC=(0,helper_plugin.useRBAC)(permissions/* default.settings.users */.Z.settings.users),_useRBAC$allowedActio=_useRBAC.allowedActions,canCreate=_useRBAC$allowedActio.canCreate,canDelete=_useRBAC$allowedActio.canDelete,canRead=_useRBAC$allowedActio.canRead;var queryClient=(0,lib.useQueryClient)();var toggleNotification=(0,helper_plugin.useNotification)();var _useIntl=(0,react_intl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useLocation=(0,react_router_dom_min.useLocation)(),search=_useLocation.search;(0,helper_plugin.useFocusWhenNavigate)();useLicenseLimitNotification();var _useNotifyAT=(0,dist.useNotifyAT)(),notifyStatus=_useNotifyAT.notifyStatus;var queryName=['users',search];var headers=utils_tableHeaders.map(function(header){return _objectSpread(_objectSpread({},header),{},{metadatas:_objectSpread(_objectSpread({},header.metadatas),{},{label:formatMessage(header.metadatas.label)})});});var title=formatMessage({id:'global.users',defaultMessage:'Users'});var notifyLoad=function notifyLoad(){notifyStatus(formatMessage({id:'app.utils.notify.data-loaded',defaultMessage:'The {target} has loaded'},{target:title}));};var _useQuery=(0,lib.useQuery)(queryName,function(){return fetchData(search,notifyLoad);},{enabled:canRead,retry:false,onError:function onError(error){toggleNotification({type:'warning',message:{id:'notification.error',message:formatAPIError(error),defaultMessage:'An error occured'}});}}),status=_useQuery.status,data=_useQuery.data,isFetching=_useQuery.isFetching;var handleToggle=function handleToggle(){setIsModalOpen(function(prev){return!prev;});};var deleteAllMutation=(0,lib.useMutation)(function(ids){return deleteData(ids);},{onSuccess:function onSuccess(){return (0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(){return regenerator_default().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.next=2;return queryClient.refetchQueries(queryName);case 2:_context.next=4;return queryClient.refetchQueries(['ee','license-limit-info']);case 4:case"end":return _context.stop();}},_callee);}))();},onError:function onError(error){toggleNotification({type:'warning',message:{id:'notification.error',message:formatAPIError(error),defaultMessage:'An error occured'}});}});// This can be improved but we need to show an something to the user
var isLoading=status!=='success'&&status!=='error'||status==='success'&&isFetching;return/*#__PURE__*/react.createElement(dist.Main,{"aria-busy":isLoading},/*#__PURE__*/react.createElement(helper_plugin.SettingsPageTitle,{name:"Users"}),/*#__PURE__*/react.createElement(dist.HeaderLayout,{primaryAction:canCreate&&/*#__PURE__*/react.createElement(CreateAction,{onClick:handleToggle}),title:title,subtitle:formatMessage({id:'Settings.permissions.users.listview.header.subtitle',defaultMessage:'All the users who have access to the Strapi admin panel'})}),canRead&&/*#__PURE__*/react.createElement(dist.ActionLayout,{startActions:/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(helper_plugin.SearchURLQuery,{label:formatMessage({id:'app.component.search.label',defaultMessage:'Search for {target}'},{target:title})}),/*#__PURE__*/react.createElement(Filters/* default */.Z,{displayedFilters:utils_displayedFilters}))}),/*#__PURE__*/react.createElement(dist.ContentLayout,{canRead:canRead},!canRead&&/*#__PURE__*/react.createElement(helper_plugin.NoPermissions,null),status==='error'&&/*#__PURE__*/react.createElement("div",null,"TODO: An error occurred"),canRead&&/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(helper_plugin.DynamicTable,{contentType:"Users",isLoading:isLoading,onConfirmDeleteAll:deleteAllMutation.mutateAsync,onConfirmDelete:function onConfirmDelete(id){return deleteAllMutation.mutateAsync([id]);},headers:headers,rows:data===null||data===void 0?void 0:data.results,withBulkActions:true,withMainAction:canDelete},/*#__PURE__*/react.createElement(DynamicTable_TableRows,{canDelete:canDelete,headers:headers,rows:(data===null||data===void 0?void 0:data.results)||[],withBulkActions:true,withMainAction:canDelete})),/*#__PURE__*/react.createElement(ListPage_PaginationFooter,{pagination:data===null||data===void 0?void 0:data.pagination}))),isModalOpened&&/*#__PURE__*/react.createElement(ListPage_ModalForm,{onToggle:handleToggle,queryName:queryName}));};/* harmony default export */ const Users_ListPage = (ListPage);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ProtectedListPage/index.js




const ProtectedListPage = () => /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.settings.users.main */.Z.settings.users.main }, /* @__PURE__ */ react.createElement(Users_ListPage, null));
/* harmony default export */ const Users_ProtectedListPage = (ProtectedListPage);


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

/***/ 49823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97132);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28702);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41363);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90594);







const CreateAction = ({ onClick }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
  const { license } = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useLicenseLimits */ .q5)();
  const { permittedSeats, shouldStopCreate } = license?.data ?? {};
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__.Stack, { spacing: 2, horizontal: true }, !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(permittedSeats) && shouldStopCreate && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
    {
      description: formatMessage({
        id: "Settings.application.admin-seats.at-limit-tooltip",
        defaultMessage: "At limit: add seats to invite more users"
      }),
      position: "left"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__.Icon,
      {
        width: `${14 / 16}rem`,
        height: `${14 / 16}rem`,
        color: "danger500",
        as: _strapi_icons__WEBPACK_IMPORTED_MODULE_5__.ExclamationMarkCircle
      }
    )
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__.Button,
    {
      "data-testid": "create-user-button",
      onClick,
      startIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__.Envelop, null),
      size: "S",
      disabled: shouldStopCreate
    },
    formatMessage({
      id: "Settings.permissions.users.create",
      defaultMessage: "Invite new user"
    })
  ));
};
CreateAction.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateAction);


/***/ }),

/***/ 97083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_src_pages_SettingsPage_pages_Users_ListPage_ModalForm_utils_formDataModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57338);

const ssoInputsModel = strapi.features.isEnabled(strapi.features.SSO) ? {
  useSSORegistration: true
} : {};
const formDataModel = {
  ..._admin_src_pages_SettingsPage_pages_Users_ListPage_ModalForm_utils_formDataModel__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  ...ssoInputsModel
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataModel);


/***/ }),

/***/ 810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const form = strapi.features.isEnabled(strapi.features.SSO) ? [
  [
    {
      intlLabel: {
        id: "Settings.permissions.users.form.sso",
        defaultMessage: "Connect with SSO"
      },
      hint: {
        id: "Settings.permissions.users.form.sso.description",
        defaultMessage: "When enabled (ON), users can login via SSO"
      },
      name: "useSSORegistration",
      type: "bool",
      size: {
        col: 6,
        xs: 12
      }
    }
  ]
] : [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);


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