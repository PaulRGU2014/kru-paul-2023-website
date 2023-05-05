"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[801],{

/***/ 93858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_AuthenticatedApp)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
;// CONCATENATED MODULE: ./.cache/package.json
const package_namespaceObject = {"i8":"4.7.1"};
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/cjs/index.js
var cjs = __webpack_require__(99168);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/cjs/index.js
var dist_cjs = __webpack_require__(61080);
// EXTERNAL MODULE: ./node_modules/lodash/at.js
var at = __webpack_require__(38914);
var at_default = /*#__PURE__*/__webpack_require__.n(at);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/layout.js
var layout = __webpack_require__(64729);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/components/Modal.js







const ModalWrapper = (0,styled_components_browser_esm["default"])(dist.Flex)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({ theme }) => `${theme.colors.neutral800}1F`};
`;
const Modal = ({ onClose, onSkip, children, hideSkip }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Portal, null, /* @__PURE__ */ react.createElement(ModalWrapper, { onClick: onClose, padding: 8, justifyContent: "center" }, /* @__PURE__ */ react.createElement(dist.FocusTrap, { onEscape: onClose }, /* @__PURE__ */ react.createElement(
    dist.Stack,
    {
      background: "neutral0",
      width: (0,helper_plugin.pxToRem)(660),
      shadow: "popupShadow",
      hasRadius: true,
      padding: 4,
      spacing: 8,
      role: "dialog",
      "aria-modal": true,
      onClick: (e) => e.stopPropagation()
    },
    /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(
      dist.IconButton,
      {
        onClick: onClose,
        "aria-label": formatMessage({ id: "app.utils.close-label", defaultMessage: "Close" }),
        icon: /* @__PURE__ */ react.createElement(icons_dist.Cross, null)
      }
    )),
    /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 7, paddingRight: 7, paddingBottom: hideSkip ? 8 : 0 }, children),
    !hideSkip && /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(dist.Button, { variant: "tertiary", onClick: onSkip }, formatMessage({
      id: "app.components.GuidedTour.skip",
      defaultMessage: "Skip the tour"
    })))
  ))));
};
Modal.propTypes = {
  children: (prop_types_default()).node.isRequired,
  onClose: (prop_types_default()).func.isRequired,
  onSkip: (prop_types_default()).func.isRequired,
  hideSkip: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_Modal = (Modal);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/reducer.js

const initialState = {
  stepContent: null,
  sectionIndex: null,
  stepIndex: null,
  hasSectionAfter: false,
  hasStepAfter: false
};
const reducer = (state = initialState, action) => (0,immer_esm["default"])(state, (draftState) => {
  switch (action.type) {
    case "UPDATE_MODAL": {
      draftState.stepContent = action.content;
      draftState.sectionIndex = action.newSectionIndex;
      draftState.stepIndex = action.newStepIndex;
      draftState.hasSectionAfter = action.newHasSectionAfter;
      draftState.hasStepAfter = action.newHasStepAfter;
      break;
    }
    default: {
      return draftState;
    }
  }
});
/* harmony default export */ const Modal_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/components/Content.js





const LiStyled = styled_components_browser_esm["default"].li`
  list-style: disc;
  &::marker {
    color: ${({ theme }) => theme.colors.neutral800};
  }
`;
const Content = ({ id, defaultMessage }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 4, paddingBottom: 6 }, formatMessage(
    { id, defaultMessage },
    {
      documentationLink: (children) => /* @__PURE__ */ react.createElement(
        dist.Typography,
        {
          as: "a",
          textColor: "primary600",
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"
        },
        children
      ),
      b: (children) => /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "semiBold" }, children),
      p: (children) => /* @__PURE__ */ react.createElement(dist.Typography, null, children),
      light: (children) => /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral600" }, children),
      ul: (children) => /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 6 }, /* @__PURE__ */ react.createElement("ul", null, children)),
      li: (children) => /* @__PURE__ */ react.createElement(LiStyled, null, children)
    }
  ));
};
Content.propTypes = {
  id: (prop_types_default()).string.isRequired,
  defaultMessage: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_Content = (Content);

// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepLine.js
var StepLine = __webpack_require__(89285);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepNumber.js
var StepNumber = __webpack_require__(96392);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/components/StepNumberWithPadding.js




const StepNumberWithPadding = ({ number, last, type }) => /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 3, paddingBottom: last ? 0 : 3 }, /* @__PURE__ */ react.createElement(StepNumber/* default */.Z, { number, type }));
StepNumberWithPadding.defaultProps = {
  number: void 0,
  last: false,
  type: ""
};
StepNumberWithPadding.propTypes = {
  number: (prop_types_default()).number,
  last: (prop_types_default()).bool,
  type: (prop_types_default()).string
};
/* harmony default export */ const components_StepNumberWithPadding = (StepNumberWithPadding);

// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/constants.js
var constants = __webpack_require__(99872);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/components/Stepper.js










const StepperModal = ({
  title,
  content,
  cta,
  onCtaClick,
  sectionIndex,
  stepIndex,
  hasSectionAfter
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const hasSectionBefore = sectionIndex > 0;
  const hasStepsBefore = stepIndex > 0;
  const nextSectionIndex = sectionIndex + 1;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(dist.Flex, { alignItems: "stretch" }, /* @__PURE__ */ react.createElement(dist.Flex, { marginRight: 8, justifyContent: "center", minWidth: (0,helper_plugin.pxToRem)(30) }, hasSectionBefore && /* @__PURE__ */ react.createElement(StepLine/* default */.Z, { type: constants/* IS_DONE */.hx, minHeight: (0,helper_plugin.pxToRem)(24) })), /* @__PURE__ */ react.createElement(dist.Typography, { variant: "sigma", textColor: "primary600" }, formatMessage({
    id: "app.components.GuidedTour.title",
    defaultMessage: "3 steps to get started"
  }))), /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(dist.Flex, { marginRight: 8, minWidth: (0,helper_plugin.pxToRem)(30) }, /* @__PURE__ */ react.createElement(
    components_StepNumberWithPadding,
    {
      number: sectionIndex + 1,
      type: hasStepsBefore ? constants/* IS_DONE */.hx : constants/* IS_ACTIVE */.lW
    }
  )), /* @__PURE__ */ react.createElement(dist.Typography, { variant: "alpha", fontWeight: "bold", textColor: "neutral800", as: "h3", id: "title" }, formatMessage(title))), /* @__PURE__ */ react.createElement(dist.Flex, { alignItems: "stretch" }, /* @__PURE__ */ react.createElement(dist.Flex, { marginRight: 8, direction: "column", justifyContent: "center", minWidth: (0,helper_plugin.pxToRem)(30) }, hasSectionAfter && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(StepLine/* default */.Z, { type: constants/* IS_DONE */.hx }), hasStepsBefore && /* @__PURE__ */ react.createElement(components_StepNumberWithPadding, { number: nextSectionIndex + 1, type: constants/* IS_ACTIVE */.lW, last: true }))), /* @__PURE__ */ react.createElement(dist.Box, null, /* @__PURE__ */ react.createElement(components_Content, { ...content }), cta && (cta.target ? /* @__PURE__ */ react.createElement(helper_plugin.LinkButton, { endIcon: /* @__PURE__ */ react.createElement(icons_dist.ArrowRight, null), onClick: onCtaClick, to: cta.target }, formatMessage(cta.title)) : /* @__PURE__ */ react.createElement(dist.Button, { endIcon: /* @__PURE__ */ react.createElement(icons_dist.ArrowRight, null), onClick: onCtaClick }, formatMessage(cta.title))))), hasStepsBefore && hasSectionAfter && /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 3 }, /* @__PURE__ */ react.createElement(dist.Flex, { marginRight: 8, justifyContent: "center", width: (0,helper_plugin.pxToRem)(30) }, /* @__PURE__ */ react.createElement(StepLine/* default */.Z, { type: constants/* IS_DONE */.hx, minHeight: (0,helper_plugin.pxToRem)(24) }))));
};
StepperModal.defaultProps = {
  currentStep: null,
  cta: void 0
};
StepperModal.propTypes = {
  sectionIndex: (prop_types_default()).number.isRequired,
  stepIndex: (prop_types_default()).number.isRequired,
  hasSectionAfter: (prop_types_default()).bool.isRequired,
  content: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }).isRequired,
  cta: prop_types_default().shape({
    target: (prop_types_default()).string,
    title: prop_types_default().shape({
      id: (prop_types_default()).string.isRequired,
      defaultMessage: (prop_types_default()).string.isRequired
    })
  }),
  currentStep: (prop_types_default()).string,
  onCtaClick: (prop_types_default()).func.isRequired,
  title: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }).isRequired
};
/* harmony default export */ const Stepper = (StepperModal);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/index.js







const GuidedTourModal = () => {
  const {
    currentStep,
    guidedTourState,
    setCurrentStep,
    setStepState,
    isGuidedTourVisible,
    setSkipped
  } = (0,helper_plugin.useGuidedTour)();
  const [isVisible, setIsVisible] = (0,react.useState)(currentStep);
  const [{ stepContent, sectionIndex, stepIndex, hasSectionAfter, hasStepAfter }, dispatch] = (0,react.useReducer)(Modal_reducer, initialState);
  const { trackUsage } = (0,helper_plugin.useTracking)();
  (0,react.useEffect)(() => {
    if (!currentStep) {
      setIsVisible(false);
      return;
    }
    const [isStepDone] = at_default()(guidedTourState, currentStep);
    setIsVisible(!isStepDone && isGuidedTourVisible);
  }, [currentStep, guidedTourState, isGuidedTourVisible]);
  (0,react.useEffect)(() => {
    if (currentStep) {
      const [content] = at_default()(layout/* default */.Z, currentStep);
      const sectionKeys = Object.keys(guidedTourState);
      const [sectionName, stepName] = currentStep.split(".");
      const newSectionIndex = sectionKeys.indexOf(sectionName);
      const newStepIndex = Object.keys(guidedTourState[sectionName]).indexOf(stepName);
      const newHasSectionAfter = newSectionIndex < sectionKeys.length - 1;
      const newHasStepAfter = newStepIndex < Object.keys(guidedTourState[sectionName]).length - 1;
      dispatch({
        type: "UPDATE_MODAL",
        content,
        newSectionIndex,
        newStepIndex,
        newHasSectionAfter,
        newHasStepAfter
      });
    }
  }, [currentStep, guidedTourState]);
  const handleCtaClick = () => {
    setStepState(currentStep, true);
    trackUsage(stepContent.trackingEvent);
    setCurrentStep(null);
  };
  const handleSkip = () => {
    setSkipped(true);
    setCurrentStep(null);
    trackUsage("didSkipGuidedtour");
  };
  if (isVisible && stepContent) {
    return /* @__PURE__ */ react.createElement(
      components_Modal,
      {
        hideSkip: !hasStepAfter && !hasSectionAfter,
        onSkip: handleSkip,
        onClose: handleCtaClick
      },
      /* @__PURE__ */ react.createElement(
        Stepper,
        {
          ...stepContent,
          onCtaClick: handleCtaClick,
          currentStep,
          sectionIndex,
          stepIndex,
          hasSectionAfter
        }
      )
    );
  }
  return null;
};
/* harmony default export */ const GuidedTour_Modal = (GuidedTourModal);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/MainNav.js
var MainNav = __webpack_require__(64330);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavBrand.js
var NavBrand = __webpack_require__(37907);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavSections.js
var NavSections = __webpack_require__(98994);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavLink.js
var NavLink = __webpack_require__(38040);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavSection.js
var NavSection = __webpack_require__(51974);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavFooter.js
var NavFooter = __webpack_require__(45842);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavUser.js + 2 modules
var NavUser = __webpack_require__(80760);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavCondense.js + 1 modules
var NavCondense = __webpack_require__(66550);
;// CONCATENATED MODULE: ./.cache/admin/src/components/LeftMenu/index.js










const LinkUserWrapper = (0,styled_components_browser_esm["default"])(dist.Box)`
  width: ${150 / 16}rem;
  position: absolute;
  bottom: ${({ theme }) => theme.spaces[9]};
  left: ${({ theme }) => theme.spaces[5]};
`;
const LinkUser = (0,styled_components_browser_esm["default"])(react_router_dom_min.NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[4]}`};
  border-radius: ${({ theme }) => theme.spaces[1]};

  &:hover {
    background: ${({ theme, logout }) => logout ? theme.colors.danger100 : theme.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({ theme }) => theme.colors.danger600};
    }
  }
`;
const LeftMenu = ({ generalSectionLinks, pluginsSectionLinks }) => {
  const buttonRef = (0,react.useRef)();
  const [userLinksVisible, setUserLinksVisible] = (0,react.useState)(false);
  const {
    logos: { menu }
  } = (0,hooks/* useConfigurations */.um)();
  const [condensed, setCondensed] = (0,helper_plugin.usePersistentState)("navbar-condensed", false);
  const { userDisplayName } = (0,helper_plugin.useAppInfos)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const history = (0,react_router_dom_min.useHistory)();
  const { post } = (0,helper_plugin.getFetchClient)();
  const initials = userDisplayName.split(" ").map((name) => name.substring(0, 1)).join("").substring(0, 2);
  const handleToggleUserLinks = () => setUserLinksVisible((prev) => !prev);
  const handleLogout = async () => {
    await post("/admin/logout");
    helper_plugin.auth.clearAppStorage();
    handleToggleUserLinks();
    history.push("/auth/login");
  };
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget) && e.relatedTarget?.parentElement?.id !== "main-nav-user-button") {
      setUserLinksVisible(false);
    }
  };
  const handleClickOnLink = (destination = null) => {
    trackUsage("willNavigate", { from: pathname, to: destination });
  };
  const menuTitle = formatMessage({
    id: "app.components.LeftMenu.navbrand.title",
    defaultMessage: "Strapi Dashboard"
  });
  return /* @__PURE__ */ react.createElement(MainNav/* MainNav */.$, { condensed }, /* @__PURE__ */ react.createElement(
    NavBrand/* NavBrand */.D,
    {
      as: react_router_dom_min.NavLink,
      workplace: formatMessage({
        id: "app.components.LeftMenu.navbrand.workplace",
        defaultMessage: "Workplace"
      }),
      title: menuTitle,
      icon: /* @__PURE__ */ react.createElement(
        "img",
        {
          src: menu.custom || menu.default,
          alt: formatMessage({
            id: "app.components.LeftMenu.logo.alt",
            defaultMessage: "Application logo"
          })
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(dist.Divider, null), /* @__PURE__ */ react.createElement(NavSections/* NavSections */._, null, /* @__PURE__ */ react.createElement(
    NavLink/* NavLink */.O,
    {
      as: react_router_dom_min.NavLink,
      to: "/content-manager",
      icon: /* @__PURE__ */ react.createElement(icons_dist.Write, null),
      onClick: () => handleClickOnLink("/content-manager")
    },
    formatMessage({ id: "global.content-manager", defaultMessage: "Content manager" })
  ), pluginsSectionLinks.length > 0 ? /* @__PURE__ */ react.createElement(
    NavSection/* NavSection */.y,
    {
      label: formatMessage({
        id: "app.components.LeftMenu.plugins",
        defaultMessage: "Plugins"
      })
    },
    pluginsSectionLinks.map((link) => {
      const Icon = link.icon;
      return /* @__PURE__ */ react.createElement(
        NavLink/* NavLink */.O,
        {
          as: react_router_dom_min.NavLink,
          to: link.to,
          key: link.to,
          icon: /* @__PURE__ */ react.createElement(Icon, null),
          onClick: () => handleClickOnLink(link.to)
        },
        formatMessage(link.intlLabel)
      );
    })
  ) : null, generalSectionLinks.length > 0 ? /* @__PURE__ */ react.createElement(
    NavSection/* NavSection */.y,
    {
      label: formatMessage({
        id: "app.components.LeftMenu.general",
        defaultMessage: "General"
      })
    },
    generalSectionLinks.map((link) => {
      const LinkIcon = link.icon;
      return /* @__PURE__ */ react.createElement(
        NavLink/* NavLink */.O,
        {
          as: react_router_dom_min.NavLink,
          badgeContent: link.notificationsCount > 0 && link.notificationsCount.toString() || void 0,
          to: link.to,
          key: link.to,
          icon: /* @__PURE__ */ react.createElement(LinkIcon, null),
          onClick: () => handleClickOnLink(link.to)
        },
        formatMessage(link.intlLabel)
      );
    })
  ) : null), /* @__PURE__ */ react.createElement(NavFooter/* NavFooter */.q, null, /* @__PURE__ */ react.createElement(
    NavUser/* NavUser */.r,
    {
      id: "main-nav-user-button",
      ref: buttonRef,
      onClick: handleToggleUserLinks,
      initials
    },
    userDisplayName
  ), userLinksVisible && /* @__PURE__ */ react.createElement(
    LinkUserWrapper,
    {
      onBlur: handleBlur,
      padding: 1,
      shadow: "tableShadow",
      background: "neutral0",
      hasRadius: true
    },
    /* @__PURE__ */ react.createElement(dist.FocusTrap, { onEscape: handleToggleUserLinks }, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 0 }, /* @__PURE__ */ react.createElement(LinkUser, { tabIndex: 0, onClick: handleToggleUserLinks, to: "/me" }, /* @__PURE__ */ react.createElement(dist.Typography, null, formatMessage({
      id: "global.profile",
      defaultMessage: "Profile"
    }))), /* @__PURE__ */ react.createElement(LinkUser, { tabIndex: 0, onClick: handleLogout, logout: "logout", to: "/auth/login" }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "danger600" }, formatMessage({
      id: "app.components.LeftMenu.logout",
      defaultMessage: "Logout"
    })), /* @__PURE__ */ react.createElement(icons_dist.Exit, null))))
  ), /* @__PURE__ */ react.createElement(NavCondense/* NavCondense */.w, { onClick: () => setCondensed((s) => !s) }, condensed ? formatMessage({
    id: "app.components.LeftMenu.expand",
    defaultMessage: "Expand the navbar"
  }) : formatMessage({
    id: "app.components.LeftMenu.collapse",
    defaultMessage: "Collapse the navbar"
  }))));
};
LeftMenu.propTypes = {
  generalSectionLinks: (prop_types_default()).array.isRequired,
  pluginsSectionLinks: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_LeftMenu = (LeftMenu);

;// CONCATENATED MODULE: ./.cache/admin/src/layouts/AppLayout/index.js





const FlexBox = (0,styled_components_browser_esm["default"])(dist.Box)`
  flex: 1;
`;
const AppLayout = ({ children, sideNav }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Box, { background: "neutral100" }, /* @__PURE__ */ react.createElement(dist.SkipToContent, null, formatMessage({ id: "skipToContent", defaultMessage: "Skip to content" })), /* @__PURE__ */ react.createElement(dist.Flex, { alignItems: "flex-start" }, sideNav, /* @__PURE__ */ react.createElement(FlexBox, null, children)));
};
AppLayout.propTypes = {
  children: (prop_types_default()).node.isRequired,
  sideNav: (prop_types_default()).node.isRequired
};
/* harmony default export */ const layouts_AppLayout = (AppLayout);

// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(38683);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/constants.js
var App_constants = __webpack_require__(36657);
;// CONCATENATED MODULE: ./.cache/admin/src/assets/images/onboarding-preview.png
const onboarding_preview_namespaceObject = __webpack_require__.p + "19eb2dfcf2603eb55733.png";
;// CONCATENATED MODULE: ./.cache/admin/src/pages/Admin/Onboarding/constants.js

const VIDEO_LINKS = [
  {
    label: {
      id: "app.components.Onboarding.link.build-content",
      defaultMessage: "Build a content architecture"
    },
    href: "https://www.youtube.com/watch?v=G9GjN0RxhkE",
    duration: "5:48"
  },
  {
    label: {
      id: "app.components.Onboarding.link.manage-content",
      defaultMessage: "Add & manage content"
    },
    href: "https://www.youtube.com/watch?v=DEZw4KbybAI",
    duration: "3:18"
  },
  {
    label: { id: "app.components.Onboarding.link.manage-media", defaultMessage: "Manage media" },
    href: "https://www.youtube.com/watch?v=-61MuiMQb38",
    duration: "3:41"
  }
];
const WATCH_MORE = {
  href: "https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",
  label: {
    id: "app.components.Onboarding.link.more-videos",
    defaultMessage: "Watch more videos"
  }
};
const DOCUMENTATION_LINKS = [
  {
    label: { id: "global.documentation", defaultMessage: "documentation" },
    href: "https://docs.strapi.io",
    icon: icons_dist.Book
  },
  {
    label: { id: "app.static.links.cheatsheet", defaultMessage: "cheatsheet" },
    href: "https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",
    icon: icons_dist.PaperPlane
  }
];

;// CONCATENATED MODULE: ./.cache/admin/src/pages/Admin/Onboarding/index.js








const HelperButton = (0,styled_components_browser_esm["default"])(dist.Button)`
  border-radius: 50%;
  padding: ${({ theme }) => theme.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`;
const IconWrapper = (0,styled_components_browser_esm["default"])(dist.Flex)`
  transform: translate(-50%, -50%);
`;
const VideoLinkWrapper = (0,styled_components_browser_esm["default"])(dist.Flex)`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({ theme }) => `-${theme.spaces[1]}`};
  }

  :hover {
    background: ${({ theme }) => theme.colors.primary100};

    /* Hover style for the number displayed */
    ${dist.Typography}:first-child {
      color: ${({ theme }) => theme.colors.primary500};
    }

    /* Hover style for the label */
    ${dist.Typography}:nth-child(1) {
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const Preview = styled_components_browser_esm["default"].img`
  width: ${({ theme }) => theme.spaces[10]};
  height: ${({ theme }) => theme.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({ theme }) => `${theme.colors.neutral800}1F`};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const TypographyLineHeight = (0,styled_components_browser_esm["default"])(dist.Typography)`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`;
const TextLink = (0,styled_components_browser_esm["default"])(TypographyLineHeight)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
const Onboarding = () => {
  const triggerRef = (0,react.useRef)();
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  const { communityEdition } = (0,helper_plugin.useAppInfos)();
  const handlePopoverVisibility = () => {
    setIsOpen((prev) => !prev);
  };
  const docLinks = [
    ...DOCUMENTATION_LINKS,
    {
      label: { id: "Settings.application.get-help", defaultMessage: "Get help" },
      icon: icons_dist.Message,
      href: communityEdition ? "https://discord.strapi.io" : "https://support.strapi.io/support/home"
    }
  ];
  return /* @__PURE__ */ react.createElement(dist.Box, { as: "aside", position: "fixed", bottom: 2, right: 2 }, /* @__PURE__ */ react.createElement(
    HelperButton,
    {
      "aria-label": formatMessage(
        isOpen ? {
          id: "app.components.Onboarding.help.button-close",
          defaultMessage: "Close help menu"
        } : {
          id: "app.components.Onboarding.help.button",
          defaultMessage: "Open help menu"
        }
      ),
      onClick: handlePopoverVisibility,
      ref: triggerRef
    },
    /* @__PURE__ */ react.createElement(dist.Icon, { as: isOpen ? icons_dist.Cross : icons_dist.Question, color: "buttonNeutral0" })
  ), isOpen && /* @__PURE__ */ react.createElement(dist.Portal, null, /* @__PURE__ */ react.createElement(
    dist.PopoverPrimitives.Content,
    {
      padding: 0,
      source: triggerRef,
      placement: "top-end",
      spacing: 12
    },
    /* @__PURE__ */ react.createElement(dist.FocusTrap, { onEscape: handlePopoverVisibility }, /* @__PURE__ */ react.createElement(
      dist.Flex,
      {
        justifyContent: "space-between",
        paddingBottom: 5,
        paddingRight: 6,
        paddingLeft: 6,
        paddingTop: 6
      },
      /* @__PURE__ */ react.createElement(TypographyLineHeight, { fontWeight: "bold" }, formatMessage({
        id: "app.components.Onboarding.title",
        defaultMessage: "Get started videos"
      })),
      /* @__PURE__ */ react.createElement(
        TextLink,
        {
          as: "a",
          href: WATCH_MORE.href,
          target: "_blank",
          rel: "noreferrer noopener",
          variant: "pi",
          textColor: "primary600"
        },
        formatMessage(WATCH_MORE.label)
      )
    ), /* @__PURE__ */ react.createElement(dist.Divider, null), VIDEO_LINKS.map(({ href, duration, label }, index) => /* @__PURE__ */ react.createElement(
      VideoLinkWrapper,
      {
        as: "a",
        href,
        target: "_blank",
        rel: "noreferrer noopener",
        key: href,
        hasRadius: true,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 6,
        paddingRight: 11
      },
      /* @__PURE__ */ react.createElement(dist.Box, { paddingRight: 5 }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral200", variant: "alpha" }, index + 1)),
      /* @__PURE__ */ react.createElement(dist.Box, { position: "relative" }, /* @__PURE__ */ react.createElement(Preview, { src: onboarding_preview_namespaceObject, alt: "" }), /* @__PURE__ */ react.createElement(
        IconWrapper,
        {
          position: "absolute",
          top: "50%",
          left: "50%",
          background: "primary600",
          borderRadius: "50%",
          justifyContent: "center",
          width: 6,
          height: 6
        },
        /* @__PURE__ */ react.createElement(dist.Icon, { as: icons_dist.Play, color: "buttonNeutral0", width: 3, height: 3 })
      )),
      /* @__PURE__ */ react.createElement(dist.Flex, { direction: "column", alignItems: "start", paddingLeft: 4 }, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "bold" }, formatMessage(label)), /* @__PURE__ */ react.createElement(dist.VisuallyHidden, null, ":"), /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral600", variant: "pi" }, duration))
    )), /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 2, paddingLeft: 5, paddingTop: 2, paddingBottom: 5 }, docLinks.map(({ label, href, icon }) => /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, spacing: 3, key: href }, /* @__PURE__ */ react.createElement(dist.Icon, { as: icon, color: "primary600" }), /* @__PURE__ */ react.createElement(
      TextLink,
      {
        as: "a",
        href,
        target: "_blank",
        rel: "noreferrer noopener",
        variant: "sigma",
        textColor: "primary700"
      },
      formatMessage(label)
    )))))
  )));
};
/* harmony default export */ const Admin_Onboarding = (Onboarding);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/Admin/index.js













const CM = (0,react.lazy)(
  () => Promise.all(/* import() | content-manager */[__webpack_require__.e(3852), __webpack_require__.e(7010), __webpack_require__.e(994)]).then(__webpack_require__.bind(__webpack_require__, 21755))
);
const HomePage = (0,react.lazy)(() => __webpack_require__.e(/* import() | Admin_homePage */ 3981).then(__webpack_require__.bind(__webpack_require__, 91550)));
const InstalledPluginsPage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_pluginsPage */ 3677).then(__webpack_require__.bind(__webpack_require__, 14928))
);
const MarketplacePage = (0,react.lazy)(
  () => Promise.all(/* import() | Admin_marketplace */[__webpack_require__.e(3852), __webpack_require__.e(5516)]).then(__webpack_require__.bind(__webpack_require__, 43008))
);
const NotFoundPage = (0,react.lazy)(
  () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 23330))
);
const InternalErrorPage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_InternalErrorPage */ 9501).then(__webpack_require__.bind(__webpack_require__, 17502))
);
const ProfilePage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_profilePage */ 9497).then(__webpack_require__.bind(__webpack_require__, 50166))
);
const SettingsPage = (0,react.lazy)(
  () => Promise.all(/* import() | Admin_settingsPage */[__webpack_require__.e(3852), __webpack_require__.e(5895)]).then(__webpack_require__.bind(__webpack_require__, 58659))
);
const useTrackUsage = () => {
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const dispatch = (0,react_redux_lib.useDispatch)();
  const appStatus = (0,react_redux_lib.useSelector)((state) => state.admin_app.status);
  (0,react.useEffect)(() => {
    if (appStatus === "init") {
      trackUsage("didAccessAuthenticatedAdministration");
      dispatch({ type: App_constants/* SET_APP_RUNTIME_STATUS */.e });
    }
  }, [appStatus]);
};
const Admin = () => {
  useTrackUsage();
  const { isLoading, generalSectionLinks, pluginsSectionLinks } = (0,hooks/* useMenu */.H9)();
  const { menu } = (0,helper_plugin.useStrapiApp)();
  const { showTutorials } = (0,hooks/* useConfigurations */.um)();
  const routes = (0,react.useMemo)(() => {
    return menu.filter((link) => link.Component).map(({ to, Component, exact }) => (0,utils/* createRoute */.ot)(Component, to, exact));
  }, [menu]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(cjs.DndProvider, { backend: dist_cjs/* HTML5Backend */.PD }, /* @__PURE__ */ react.createElement(
    layouts_AppLayout,
    {
      sideNav: /* @__PURE__ */ react.createElement(
        components_LeftMenu,
        {
          generalSectionLinks,
          pluginsSectionLinks
        }
      )
    },
    /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null) }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/", component: HomePage, exact: true }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/me", component: ProfilePage, exact: true }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/content-manager", component: CM }), routes, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/settings/:settingId", component: SettingsPage }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/settings", component: SettingsPage, exact: true }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/marketplace" }, /* @__PURE__ */ react.createElement(MarketplacePage, null)), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/list-plugins", exact: true }, /* @__PURE__ */ react.createElement(InstalledPluginsPage, null)), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/404", component: NotFoundPage }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "/500", component: InternalErrorPage }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "", component: NotFoundPage }))),
    /* @__PURE__ */ react.createElement(GuidedTour_Modal, null),
    showTutorials && /* @__PURE__ */ react.createElement(Admin_Onboarding, null)
  ));
};
/* harmony default export */ const pages_Admin = (Admin);


;// CONCATENATED MODULE: ./.cache/admin/src/components/PluginsInitializer/init.js
const init = (plugins) => {
  return {
    plugins: Object.keys(plugins).reduce((acc, current) => {
      acc[current] = { ...plugins[current] };
      return acc;
    }, {})
  };
};
/* harmony default export */ const PluginsInitializer_init = (init);

// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./.cache/admin/src/components/PluginsInitializer/reducer.js


const reducer_initialState = {
  plugins: null
};
const reducer_reducer = (state = reducer_initialState, action) => (
  /* eslint-disable-next-line consistent-return */
  (0,immer_esm["default"])(state, (draftState) => {
    switch (action.type) {
      case "SET_PLUGIN_READY": {
        set_default()(draftState, ["plugins", action.pluginId, "isReady"], true);
        break;
      }
      default:
        return draftState;
    }
  })
);

/* harmony default export */ const PluginsInitializer_reducer = (reducer_reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/components/PluginsInitializer/index.js





const PluginsInitializer = () => {
  const { plugins: appPlugins } = (0,helper_plugin.useStrapiApp)();
  const [{ plugins }, dispatch] = (0,react.useReducer)(PluginsInitializer_reducer, reducer_initialState, () => PluginsInitializer_init(appPlugins));
  const setPlugin = (0,react.useRef)((pluginId) => {
    dispatch({ type: "SET_PLUGIN_READY", pluginId });
  });
  const hasApluginNotReady = Object.keys(plugins).some(
    (plugin) => plugins[plugin].isReady === false
  );
  if (hasApluginNotReady) {
    const initializers = Object.keys(plugins).reduce((acc, current) => {
      const InitializerComponent = plugins[current].initializer;
      if (InitializerComponent) {
        const key = plugins[current].pluginId;
        acc.push(/* @__PURE__ */ react.createElement(InitializerComponent, { key, setPlugin: setPlugin.current }));
      }
      return acc;
    }, []);
    return /* @__PURE__ */ react.createElement(react.Fragment, null, initializers, /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null));
  }
  return /* @__PURE__ */ react.createElement(pages_Admin, null);
};
/* harmony default export */ const components_PluginsInitializer = (PluginsInitializer);

// EXTERNAL MODULE: ./.cache/admin/src/components/RBACProvider/constants.js
var RBACProvider_constants = __webpack_require__(28344);
;// CONCATENATED MODULE: ./.cache/admin/src/components/RBACProvider/actions.js

const resetStore = () => ({ type: RBACProvider_constants/* RESET_STORE */.l });
const setPermissions = (permissions) => ({
  type: RBACProvider_constants/* SET_PERMISSIONS */.m,
  permissions
});


;// CONCATENATED MODULE: ./.cache/admin/src/components/RBACProvider/index.js





const RBACProvider = ({ children, permissions, refetchPermissions }) => {
  const { allPermissions } = (0,react_redux_lib.useSelector)((state) => state.rbacProvider);
  const dispatch = (0,react_redux_lib.useDispatch)();
  (0,react.useEffect)(() => {
    dispatch(setPermissions(permissions));
    return () => {
      dispatch(resetStore());
    };
  }, [permissions, dispatch]);
  if (!allPermissions) {
    return /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(helper_plugin.RBACProviderContext.Provider, { value: { allPermissions, refetchPermissions } }, children);
};
RBACProvider.propTypes = {
  children: (prop_types_default()).element.isRequired,
  permissions: (prop_types_default()).array.isRequired,
  refetchPermissions: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_RBACProvider = (RBACProvider);

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(11817);
// EXTERNAL MODULE: ./node_modules/semver/index.js
var semver = __webpack_require__(81249);
var semver_default = /*#__PURE__*/__webpack_require__.n(semver);
;// CONCATENATED MODULE: ./.cache/admin/src/components/AuthenticatedApp/utils/checkLatestStrapiVersion.js

const checkLatestStrapiVersion = (currentPackageVersion, latestPublishedVersion) => {
  if (!semver_default().valid(currentPackageVersion) || !semver_default().valid(latestPublishedVersion)) {
    return false;
  }
  return semver_default().lt(currentPackageVersion, latestPublishedVersion);
};
/* harmony default export */ const utils_checkLatestStrapiVersion = (checkLatestStrapiVersion);

;// CONCATENATED MODULE: ./.cache/admin/src/components/AuthenticatedApp/utils/api.js




const strapiVersion = package_namespaceObject.i8;
const showUpdateNotif = !JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF"));
const { get: api_get } = (0,helper_plugin.getFetchClient)();
const fetchStrapiLatestRelease = async (toggleNotification) => {
  try {
    const {
      data: { tag_name }
    } = await axios/* default.get */.Z.get("https://api.github.com/repos/strapi/strapi/releases/latest");
    const shouldUpdateStrapi = utils_checkLatestStrapiVersion(strapiVersion, tag_name);
    if (shouldUpdateStrapi && showUpdateNotif) {
      toggleNotification({
        type: "info",
        message: { id: "notification.version.update.message" },
        link: {
          url: `https://github.com/strapi/strapi/releases/tag/${tag_name}`,
          label: {
            id: "global.see-more"
          }
        },
        blockTransition: true,
        onClose: () => localStorage.setItem("STRAPI_UPDATE_NOTIF", true)
      });
    }
    return tag_name;
  } catch (err) {
    return strapiVersion;
  }
};
const fetchAppInfo = async () => {
  try {
    const { data, headers } = await api_get("/admin/information");
    if (!headers["content-type"].includes("application/json")) {
      throw new Error("Not found");
    }
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};
const fetchCurrentUserPermissions = async () => {
  try {
    const { data, headers } = await api_get("/admin/users/me/permissions");
    if (!headers["content-type"].includes("application/json")) {
      throw new Error("Not found");
    }
    return data.data;
  } catch (err) {
    throw new Error(err);
  }
};
const fetchUserRoles = async () => {
  try {
    const {
      data: {
        data: { roles }
      }
    } = await api_get("/admin/users/me");
    return roles;
  } catch (err) {
    throw new Error(err);
  }
};


;// CONCATENATED MODULE: ./.cache/admin/src/components/AuthenticatedApp/index.js











const AuthenticatedApp_strapiVersion = package_namespaceObject.i8;
const AuthenticatedApp = () => {
  const { setGuidedTourVisibility } = (0,helper_plugin.useGuidedTour)();
  const toggleNotification = (0,helper_plugin.useNotification)();
  const setGuidedTourVisibilityRef = (0,react.useRef)(setGuidedTourVisibility);
  const userInfo = helper_plugin.auth.getUserInfo();
  const userName = get_default()(userInfo, "username") || (0,utils/* getFullName */.Pp)(userInfo.firstname, userInfo.lastname);
  const [userDisplayName, setUserDisplayName] = (0,react.useState)(userName);
  const [userId, setUserId] = (0,react.useState)(null);
  const { showReleaseNotification } = (0,hooks/* useConfigurations */.um)();
  const [
    { data: appInfos, status },
    { data: tag_name, isLoading },
    { data: permissions, status: fetchPermissionsStatus, refetch, isFetched, isFetching },
    { data: userRoles }
  ] = (0,lib.useQueries)([
    { queryKey: "app-infos", queryFn: fetchAppInfo },
    {
      queryKey: "strapi-release",
      queryFn: () => fetchStrapiLatestRelease(toggleNotification),
      enabled: showReleaseNotification,
      initialData: AuthenticatedApp_strapiVersion
    },
    {
      queryKey: "admin-users-permission",
      queryFn: fetchCurrentUserPermissions,
      initialData: []
    },
    {
      queryKey: "user-roles",
      queryFn: fetchUserRoles
    }
  ]);
  const shouldUpdateStrapi = (0,react.useMemo)(
    () => utils_checkLatestStrapiVersion(AuthenticatedApp_strapiVersion, tag_name),
    [tag_name]
  );
  (0,react.useEffect)(() => {
    if (userRoles) {
      const isUserSuperAdmin = userRoles.find(({ code }) => code === "strapi-super-admin");
      if (isUserSuperAdmin && appInfos?.autoReload) {
        setGuidedTourVisibilityRef.current(true);
      }
    }
  }, [userRoles, appInfos]);
  (0,react.useEffect)(() => {
    const getUserId = async () => {
      const userId2 = await (0,utils/* hashAdminUserEmail */.Qy)(userInfo);
      setUserId(userId2);
    };
    getUserId();
  }, [userInfo]);
  const shouldShowNotDependentQueriesLoader = isFetching && isFetched || status === "loading" || fetchPermissionsStatus === "loading";
  const shouldShowLoader = isLoading || shouldShowNotDependentQueriesLoader;
  const appInfosValue = (0,react.useMemo)(() => {
    return {
      ...appInfos,
      userId,
      latestStrapiReleaseTag: tag_name,
      setUserDisplayName,
      shouldUpdateStrapi,
      userDisplayName
    };
  }, [appInfos, tag_name, shouldUpdateStrapi, userDisplayName, userId]);
  if (shouldShowLoader) {
    return /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null);
  }
  if (status === "error") {
    return /* @__PURE__ */ react.createElement("div", null, "error...");
  }
  return /* @__PURE__ */ react.createElement(helper_plugin.AppInfosContext.Provider, { value: appInfosValue }, /* @__PURE__ */ react.createElement(components_RBACProvider, { permissions, refetchPermissions: refetch }, /* @__PURE__ */ react.createElement(components_PluginsInitializer, null)));
};
/* harmony default export */ const components_AuthenticatedApp = (AuthenticatedApp);


/***/ }),

/***/ 89285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95489);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28702);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99872);





const StepLine = ({ type, ...props }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__.Box,
    {
      width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.pxToRem)(2),
      height: "100%",
      background: type === _constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_NOT_DONE */ .VM ? "neutral300" : "primary500",
      hasRadius: true,
      ...props
    }
  );
};
StepLine.defaultProps = {
  type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_NOT_DONE */ .VM
};
StepLine.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([_constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_ACTIVE */ .lW, _constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_DONE */ .hx, _constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_NOT_DONE */ .VM])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepLine);


/***/ }),

/***/ 96392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95489);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28702);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41363);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99872);






const StepNumber = ({ type, number }) => {
  if (type === _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_DONE */ .hx) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Flex,
      {
        background: "primary600",
        padding: 2,
        borderRadius: "50%",
        width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.pxToRem)(30),
        height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.pxToRem)(30),
        justifyContent: "center"
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Icon, { as: _strapi_icons__WEBPACK_IMPORTED_MODULE_4__.Check, "aria-hidden": true, width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.pxToRem)(16), color: "neutral0" })
    );
  }
  if (type === _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_ACTIVE */ .lW) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Flex,
      {
        background: "primary600",
        padding: 2,
        borderRadius: "50%",
        width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.pxToRem)(30),
        height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.pxToRem)(30),
        justifyContent: "center"
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, { fontWeight: "semiBold", textColor: "neutral0" }, number)
    );
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Flex,
    {
      borderColor: "neutral500",
      borderWidth: "1px",
      borderStyle: "solid",
      padding: 2,
      borderRadius: "50%",
      width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.pxToRem)(30),
      height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.pxToRem)(30),
      justifyContent: "center"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__.Typography, { fontWeight: "semiBold", textColor: "neutral600" }, number)
  );
};
StepNumber.defaultProps = {
  number: void 0,
  type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_NOT_DONE */ .VM
};
StepNumber.propTypes = {
  number: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),
  type: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf([_constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_ACTIVE */ .lW, _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_DONE */ .hx, _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_NOT_DONE */ .VM])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepNumber);


/***/ }),

/***/ 99872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VM": () => (/* binding */ IS_NOT_DONE),
/* harmony export */   "hx": () => (/* binding */ IS_DONE),
/* harmony export */   "lW": () => (/* binding */ IS_ACTIVE)
/* harmony export */ });
const IS_ACTIVE = "isActive";
const IS_DONE = "isDone";
const IS_NOT_DONE = "isNotDone";


/***/ }),

/***/ 64729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const layout = {
  contentTypeBuilder: {
    home: {
      title: {
        id: "app.components.GuidedTour.home.CTB.title",
        defaultMessage: "\u{1F9E0} Build the content structure"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.home.CTB.cta.title",
          defaultMessage: "Go to the Content type Builder"
        },
        type: "REDIRECT",
        target: "/plugins/content-type-builder"
      },
      trackingEvent: "didClickGuidedTourHomepageContentTypeBuilder"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.CTB.create.title",
        defaultMessage: "\u{1F9E0} Create a first Collection type"
      },
      content: {
        id: "app.components.GuidedTour.CTB.create.content",
        defaultMessage: "<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.CTB.create.cta.title",
          defaultMessage: "Build a Collection type"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep1CollectionType"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.CTB.success.title",
        defaultMessage: "Step 1: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.CTB.success.content",
        defaultMessage: "<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "REDIRECT",
        target: "/content-manager"
      },
      trackingEvent: "didCreateGuidedTourCollectionType"
    }
  },
  contentManager: {
    home: {
      title: {
        id: "app.components.GuidedTour.home.CM.title",
        defaultMessage: "\u26A1\uFE0F What would you like to share with the world?"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "REDIRECT",
        target: "/content-manager"
      },
      trackingEvent: "didClickGuidedTourHomepageContentManager"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.CM.create.title",
        defaultMessage: "\u26A1\uFE0F Create content"
      },
      content: {
        id: "app.components.GuidedTour.CM.create.content",
        defaultMessage: "<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep2ContentManager"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.CM.success.title",
        defaultMessage: "Step 2: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.CM.success.content",
        defaultMessage: "<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.CM.success.cta.title",
          defaultMessage: "Test the API"
        },
        type: "REDIRECT",
        target: "/settings/api-tokens"
      },
      trackingEvent: "didCreateGuidedTourEntry"
    }
  },
  apiTokens: {
    home: {
      title: {
        id: "app.components.GuidedTour.apiTokens.create.title",
        defaultMessage: "\u{1F680} See content in action"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.home.apiTokens.cta.title",
          defaultMessage: "Test the API"
        },
        type: "REDIRECT",
        target: "/settings/api-tokens"
      },
      trackingEvent: "didClickGuidedTourHomepageApiTokens"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.apiTokens.create.title",
        defaultMessage: "\u{1F680} See content in action"
      },
      content: {
        id: "app.components.GuidedTour.apiTokens.create.content",
        defaultMessage: "<p>Generate an authentication token here and retrieve the content you just created.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.apiTokens.create.cta.title",
          defaultMessage: "Generate an API Token"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep3ApiTokens"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.apiTokens.success.title",
        defaultMessage: "Step 3: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.apiTokens.success.content",
        defaultMessage: "<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"
      },
      trackingEvent: "didGenerateGuidedTourApiTokens"
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);


/***/ })

}]);