"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[3981],{

/***/ 91550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_HomePage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/assets/corner-ornament.svg
const corner_ornament_namespaceObject = __webpack_require__.p + "7e9af4fb7e723fcebf1f.svg";
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 31 modules
var hooks = __webpack_require__(48474);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/utils/isGuidedTourCompleted.js
const isGuidedTourCompleted = (guidedTourState) => Object.entries(guidedTourState).every(
  ([, section]) => Object.entries(section).every(([, step]) => step)
);
/* harmony default export */ const utils_isGuidedTourCompleted = (isGuidedTourCompleted);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepNumber.js
var StepNumber = __webpack_require__(96392);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepLine.js
var StepLine = __webpack_require__(89285);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/constants.js
var constants = __webpack_require__(99872);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/components/Step.js








const StepHomepage = ({ type, title, number, content, hasLine }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Box, null, /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(dist.Box, { minWidth: (0,helper_plugin.pxToRem)(30), marginRight: 5 }, /* @__PURE__ */ react.createElement(StepNumber/* default */.Z, { type, number })), /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h3" }, formatMessage(title))), /* @__PURE__ */ react.createElement(dist.Flex, { alignItems: "flex-start" }, /* @__PURE__ */ react.createElement(
    dist.Flex,
    {
      justifyContent: "center",
      minWidth: (0,helper_plugin.pxToRem)(30),
      marginBottom: 3,
      marginTop: 3,
      marginRight: 5
    },
    hasLine && /* @__PURE__ */ react.createElement(StepLine/* default */.Z, { type, minHeight: type === constants/* IS_ACTIVE */.lW ? (0,helper_plugin.pxToRem)(85) : (0,helper_plugin.pxToRem)(65) })
  ), /* @__PURE__ */ react.createElement(dist.Box, { marginTop: 2 }, type === constants/* IS_ACTIVE */.lW && content)));
};
StepHomepage.defaultProps = {
  content: void 0,
  number: void 0,
  type: constants/* IS_NOT_DONE */.VM,
  hasLine: true
};
StepHomepage.propTypes = {
  content: (prop_types_default()).node,
  number: (prop_types_default()).number,
  title: prop_types_default().shape({
    id: (prop_types_default()).string,
    defaultMessage: (prop_types_default()).string
  }).isRequired,
  type: prop_types_default().oneOf([constants/* IS_ACTIVE */.lW, constants/* IS_DONE */.hx, constants/* IS_NOT_DONE */.VM]),
  hasLine: (prop_types_default()).bool
};
/* harmony default export */ const Step = (StepHomepage);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/components/Stepper.js





const getType = (activeSectionIndex, index) => {
  if (activeSectionIndex === -1) {
    return constants/* IS_DONE */.hx;
  }
  if (index < activeSectionIndex) {
    return constants/* IS_DONE */.hx;
  }
  if (index > activeSectionIndex) {
    return constants/* IS_NOT_DONE */.VM;
  }
  return constants/* IS_ACTIVE */.lW;
};
const StepperHomepage = ({ sections, currentSectionKey }) => {
  const activeSectionIndex = sections.findIndex((section) => section.key === currentSectionKey);
  return /* @__PURE__ */ react.createElement(dist.Box, null, sections.map((section, index) => /* @__PURE__ */ react.createElement(
    Step,
    {
      key: section.key,
      title: section.title,
      content: section.content,
      number: index + 1,
      type: getType(activeSectionIndex, index),
      hasLine: index !== sections.length - 1
    }
  )));
};
StepperHomepage.defaultProps = {
  currentSectionKey: void 0
};
StepperHomepage.propTypes = {
  sections: prop_types_default().arrayOf(
    prop_types_default().shape({
      key: (prop_types_default()).string.isRequired,
      title: prop_types_default().shape({
        id: (prop_types_default()).string,
        defaultMessage: (prop_types_default()).string
      }).isRequired,
      content: (prop_types_default()).node
    })
  ).isRequired,
  currentSectionKey: (prop_types_default()).string
};
/* harmony default export */ const Stepper = (StepperHomepage);

// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/layout.js
var layout = __webpack_require__(64729);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Homepage/index.js







const GuidedTourHomepage = () => {
  const { guidedTourState, setSkipped } = (0,helper_plugin.useGuidedTour)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const sections = Object.entries(layout/* default */.Z).map(([key, val]) => ({
    key,
    title: val.home.title,
    content: /* @__PURE__ */ react.createElement(
      helper_plugin.LinkButton,
      {
        onClick: () => trackUsage(val.home.trackingEvent),
        to: val.home.cta.target,
        endIcon: /* @__PURE__ */ react.createElement(icons_dist.ArrowRight, null)
      },
      formatMessage(val.home.cta.title)
    )
  }));
  const enrichedSections = sections.map((section) => ({
    isDone: Object.entries(guidedTourState[section.key]).every(([, value]) => value),
    ...section
  }));
  const activeSection = enrichedSections.find((section) => !section.isDone)?.key;
  const handleSkip = () => {
    setSkipped(true);
    trackUsage("didSkipGuidedtour");
  };
  return /* @__PURE__ */ react.createElement(
    dist.Box,
    {
      hasRadius: true,
      shadow: "tableShadow",
      paddingTop: 7,
      paddingRight: 4,
      paddingLeft: 7,
      paddingBottom: 4,
      background: "neutral0"
    },
    /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 6 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "beta", as: "h2" }, formatMessage({
      id: "app.components.GuidedTour.title",
      defaultMessage: "3 steps to get started"
    })), /* @__PURE__ */ react.createElement(Stepper, { sections, currentSectionKey: activeSection })),
    /* @__PURE__ */ react.createElement(dist.Flex, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(dist.Button, { variant: "tertiary", onClick: handleSkip }, formatMessage({ id: "app.components.GuidedTour.skip", defaultMessage: "Skip the tour" })))
  );
};
/* harmony default export */ const Homepage = (GuidedTourHomepage);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.js
var LinkButton = __webpack_require__(80994);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Link/Link.js
var Link = __webpack_require__(36182);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/SocialLinks.js







const StyledDiscord = (0,styled_components_browser_esm["default"])(icons_dist.Discord)`
  path {
    fill: #7289da !important;
  }
`;
const StyledReddit = (0,styled_components_browser_esm["default"])(icons_dist.Reddit)`
  > path:first-child {
    fill: #ff4500;
  }
`;
const StyledStrapi = (0,styled_components_browser_esm["default"])(icons_dist.Strapi)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`;
const StyledTwitter = (0,styled_components_browser_esm["default"])(icons_dist.Twitter)`
  path {
    fill: #1da1f2 !important;
  }
`;
const StyledDiscourse = (0,styled_components_browser_esm["default"])(icons_dist.Discourse)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`;
const socialLinks = [
  {
    name: { id: "app.components.HomePage.community.links.github", defaultMessage: "Github" },
    link: "https://github.com/strapi/strapi/",
    icon: /* @__PURE__ */ react.createElement(icons_dist.Github, { fill: "#7289DA" }),
    alt: "github"
  },
  {
    name: { id: "app.components.HomePage.community.links.discord", defaultMessage: "Discord" },
    link: "https://discord.strapi.io/",
    icon: /* @__PURE__ */ react.createElement(StyledDiscord, null),
    alt: "discord"
  },
  {
    name: { id: "app.components.HomePage.community.links.reddit", defaultMessage: "Reddit" },
    link: "https://www.reddit.com/r/Strapi/",
    icon: /* @__PURE__ */ react.createElement(StyledReddit, null),
    alt: "reddit"
  },
  {
    name: { id: "app.components.HomePage.community.links.twitter", defaultMessage: "Twitter" },
    link: "https://twitter.com/strapijs",
    icon: /* @__PURE__ */ react.createElement(StyledTwitter, null),
    alt: "twitter"
  },
  {
    name: { id: "app.components.HomePage.community.links.forum", defaultMessage: "Forum" },
    link: "https://forum.strapi.io",
    icon: /* @__PURE__ */ react.createElement(StyledDiscourse, null),
    alt: "forum"
  },
  {
    name: { id: "app.components.HomePage.community.links.blog", defaultMessage: "Blog" },
    link: "https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",
    icon: /* @__PURE__ */ react.createElement(StyledStrapi, null),
    alt: "blog"
  },
  {
    name: {
      id: "app.components.HomePage.community.links.career",
      defaultMessage: "We are hiring!"
    },
    link: "https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",
    icon: /* @__PURE__ */ react.createElement(StyledStrapi, null),
    alt: "career"
  }
];
const LinkCustom = (0,styled_components_browser_esm["default"])(LinkButton/* LinkButton */.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({ theme }) => theme.spaces[6]};
    height: ${({ theme }) => theme.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`;
const GridGap = (0,styled_components_browser_esm["default"])(dist.Grid)`
  row-gap: ${({ theme }) => theme.spaces[2]};
  column-gap: ${({ theme }) => theme.spaces[4]};
`;
const SocialLinks = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { communityEdition } = (0,helper_plugin.useAppInfos)();
  const socialLinksExtended = [
    ...socialLinks,
    {
      icon: /* @__PURE__ */ react.createElement(StyledStrapi, null),
      link: communityEdition ? "https://discord.strapi.io" : "https://support.strapi.io/support/home",
      name: {
        id: "Settings.application.get-help",
        defaultMessage: "Get help"
      }
    }
  ];
  return /* @__PURE__ */ react.createElement(
    dist.Box,
    {
      as: "aside",
      "aria-labelledby": "join-the-community",
      background: "neutral0",
      hasRadius: true,
      paddingRight: 5,
      paddingLeft: 5,
      paddingTop: 6,
      paddingBottom: 6,
      shadow: "tableShadow"
    },
    /* @__PURE__ */ react.createElement(dist.Box, { paddingBottom: 7 }, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 5 }, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 3 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "h2", id: "join-the-community" }, formatMessage({
      id: "app.components.HomePage.community",
      defaultMessage: "Join the community"
    })), /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral600" }, formatMessage({
      id: "app.components.HomePage.community.content",
      defaultMessage: "Discuss with team members, contributors and developers on different channels"
    }))), /* @__PURE__ */ react.createElement(Link/* Link */.r, { href: "https://feedback.strapi.io/", isExternal: true, endIcon: /* @__PURE__ */ react.createElement(icons_dist.ExternalLink, null) }, formatMessage({
      id: "app.components.HomePage.roadmap",
      defaultMessage: "See our road map"
    })))),
    /* @__PURE__ */ react.createElement(GridGap, null, socialLinksExtended.map(({ icon, link, name }) => {
      return /* @__PURE__ */ react.createElement(dist.GridItem, { col: 6, s: 12, key: name }, /* @__PURE__ */ react.createElement(LinkCustom, { size: "L", startIcon: icon, variant: "tertiary", href: link, isExternal: true }, formatMessage(name)));
    }))
  );
};
/* harmony default export */ const HomePage_SocialLinks = (SocialLinks);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/HomeHeader.js







const WordWrap = (0,styled_components_browser_esm["default"])(dist.Typography)`
  word-break: break-word;
`;
const StackCustom = (0,styled_components_browser_esm["default"])(dist.Stack)`
  align-items: flex-start;
`;
const HomeHeader = ({ hasCreatedContentType, onCreateCT }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 6, paddingBottom: 10 }, /* @__PURE__ */ react.createElement(StackCustom, { spacing: 5 }, /* @__PURE__ */ react.createElement(dist.Typography, { as: "h1", variant: "alpha" }, hasCreatedContentType ? formatMessage({
    id: "app.components.HomePage.welcome.again",
    defaultMessage: "Welcome \u{1F44B}"
  }) : formatMessage({
    id: "app.components.HomePage.welcome",
    defaultMessage: "Welcome on board!"
  })), /* @__PURE__ */ react.createElement(WordWrap, { textColor: "neutral600", variant: "epsilon" }, hasCreatedContentType ? formatMessage({
    id: "app.components.HomePage.welcomeBlock.content.again",
    defaultMessage: "We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."
  }) : formatMessage({
    id: "app.components.HomePage.welcomeBlock.content",
    defaultMessage: "Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"
  })), hasCreatedContentType ? /* @__PURE__ */ react.createElement(Link/* Link */.r, { isExternal: true, href: "https://strapi.io/blog" }, formatMessage({
    id: "app.components.HomePage.button.blog",
    defaultMessage: "See more on the blog"
  })) : /* @__PURE__ */ react.createElement(dist.Button, { size: "L", onClick: onCreateCT, endIcon: /* @__PURE__ */ react.createElement(icons_dist.ArrowRight, null) }, formatMessage({
    id: "app.components.HomePage.create",
    defaultMessage: "Create your first Content type"
  })))));
};
HomeHeader.defaultProps = {
  hasCreatedContentType: void 0,
  onCreateCT: void 0
};
HomeHeader.propTypes = {
  hasCreatedContentType: (prop_types_default()).bool,
  onCreateCT: (prop_types_default()).func
};
/* harmony default export */ const HomePage_HomeHeader = (HomeHeader);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/assets/strapi-cloud-background.png
const strapi_cloud_background_namespaceObject = __webpack_require__.p + "27d16aefee06412db90a.png";
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/assets/strapi-cloud-icon.svg
const strapi_cloud_icon_namespaceObject = __webpack_require__.p + "bb3108f7fd1e6179bde1.svg";
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/assets/strapi-cloud-flags.svg
const strapi_cloud_flags_namespaceObject = __webpack_require__.p + "bb4d0d527bdfb161bc5a.svg";
;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/CloudBox.js








const BlockLink = styled_components_browser_esm["default"].a`
  text-decoration: none;
`;
const CloudCustomWrapper = (0,styled_components_browser_esm["default"])(dist.Box)`
  background-image: url(${({ backgroundImage }) => backgroundImage});
`;
const CloudIconWrapper = (0,styled_components_browser_esm["default"])(dist.Flex)`
  background: rgba(255, 255, 255, 0.3);
`;
const CloudBox = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  return /* @__PURE__ */ react.createElement(
    BlockLink,
    {
      href: "https://cloud.strapi.io",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => {
        trackUsage("didClickOnTryStrapiCloudSection");
      }
    },
    /* @__PURE__ */ react.createElement(
      dist.Flex,
      {
        shadow: "tableShadow",
        hasRadius: true,
        padding: 6,
        background: "neutral0",
        position: "relative",
        gap: 6
      },
      /* @__PURE__ */ react.createElement(CloudCustomWrapper, { backgroundImage: strapi_cloud_background_namespaceObject, hasRadius: true, padding: 3 }, /* @__PURE__ */ react.createElement(
        CloudIconWrapper,
        {
          width: (0,helper_plugin.pxToRem)(32),
          height: (0,helper_plugin.pxToRem)(32),
          justifyContent: "center",
          hasRadius: true,
          alignItems: "center"
        },
        /* @__PURE__ */ react.createElement(
          "img",
          {
            src: strapi_cloud_icon_namespaceObject,
            alt: formatMessage({
              id: "app.components.BlockLink.cloud",
              defaultMessage: "Strapi Cloud"
            })
          }
        )
      )),
      /* @__PURE__ */ react.createElement(dist.Flex, { gap: 1, direction: "column", alignItems: "start" }, /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(dist.Typography, { fontWeight: "semiBold", variant: "pi" }, formatMessage({
        id: "app.components.BlockLink.cloud",
        defaultMessage: "Strapi Cloud"
      }))), /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral600" }, formatMessage({
        id: "app.components.BlockLink.cloud.content",
        defaultMessage: "A fully composable, and collaborative platform to boost your team velocity."
      })), /* @__PURE__ */ react.createElement(dist.Box, { src: strapi_cloud_flags_namespaceObject, position: "absolute", top: 0, right: 0, as: "img" }))
    )
  );
};
/* harmony default export */ const HomePage_CloudBox = (CloudBox);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/ContentBlocks.js







const ContentBlocks_BlockLink = styled_components_browser_esm["default"].a`
  text-decoration: none;
`;
const ContentBlocks = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const handleClick = (eventName) => {
    trackUsage(eventName);
  };
  return /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 5 }, /* @__PURE__ */ react.createElement(HomePage_CloudBox, null), /* @__PURE__ */ react.createElement(
    ContentBlocks_BlockLink,
    {
      href: "https://strapi.io/resource-center",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonReadTheDocumentationSection")
    },
    /* @__PURE__ */ react.createElement(
      helper_plugin.ContentBox,
      {
        title: formatMessage({
          id: "global.documentation",
          defaultMessage: "Documentation"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.documentation.content",
          defaultMessage: "Discover the essential concepts, guides and instructions."
        }),
        icon: /* @__PURE__ */ react.createElement(icons_dist.InformationSquare, null),
        iconBackground: "primary100"
      }
    )
  ), /* @__PURE__ */ react.createElement(
    ContentBlocks_BlockLink,
    {
      href: "https://strapi.io/starters",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonCodeExampleSection")
    },
    /* @__PURE__ */ react.createElement(
      helper_plugin.ContentBox,
      {
        title: formatMessage({
          id: "app.components.BlockLink.code",
          defaultMessage: "Code example"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.code.content",
          defaultMessage: "Learn by using ready-made starters for your projects."
        }),
        icon: /* @__PURE__ */ react.createElement(icons_dist.CodeSquare, null),
        iconBackground: "warning100"
      }
    )
  ), /* @__PURE__ */ react.createElement(
    ContentBlocks_BlockLink,
    {
      href: "https://strapi.io/blog/categories/tutorials",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonTutorialSection")
    },
    /* @__PURE__ */ react.createElement(
      helper_plugin.ContentBox,
      {
        title: formatMessage({
          id: "app.components.BlockLink.tutorial",
          defaultMessage: "Tutorials"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.tutorial.content",
          defaultMessage: "Follow step-by-step instructions to use and customize Strapi."
        }),
        icon: /* @__PURE__ */ react.createElement(icons_dist.PlaySquare, null),
        iconBackground: "secondary100"
      }
    )
  ), /* @__PURE__ */ react.createElement(
    ContentBlocks_BlockLink,
    {
      href: "https://strapi.io/blog",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      onClick: () => handleClick("didClickonBlogSection")
    },
    /* @__PURE__ */ react.createElement(
      helper_plugin.ContentBox,
      {
        title: formatMessage({
          id: "app.components.BlockLink.blog",
          defaultMessage: "Blog"
        }),
        subtitle: formatMessage({
          id: "app.components.BlockLink.blog.content",
          defaultMessage: "Read the latest news about Strapi and the ecosystem."
        }),
        icon: /* @__PURE__ */ react.createElement(icons_dist.FeatherSquare, null),
        iconBackground: "alternative100"
      }
    )
  ));
};
/* harmony default export */ const HomePage_ContentBlocks = (ContentBlocks);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/HomePage/index.js
/*
 * HomePage
 *
 */var useLicenseLimitNotification=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(94018)/* ["default"] */ .Z);}return (__webpack_require__(67875)/* ["default"] */ .Z);}();var LogoContainer=/*#__PURE__*/(0,styled_components_browser_esm["default"])(dist.Box).withConfig({displayName:"HomePage__LogoContainer",componentId:"sc-1md9zz4-0"})(["position:absolute;top:0;right:0;img{width:","rem;}"],150/16);var HomePage=function HomePage(){// Temporary until we develop the menu API
var _useModels=(0,hooks/* useModels */.bP)(),collectionTypes=_useModels.collectionTypes,singleTypes=_useModels.singleTypes,isLoadingForModels=_useModels.isLoading;var _useGuidedTour=(0,helper_plugin.useGuidedTour)(),guidedTourState=_useGuidedTour.guidedTourState,isGuidedTourVisible=_useGuidedTour.isGuidedTourVisible,isSkipped=_useGuidedTour.isSkipped;useLicenseLimitNotification();var showGuidedTour=!utils_isGuidedTourCompleted(guidedTourState)&&isGuidedTourVisible&&!isSkipped;var _useHistory=(0,react_router_dom_min.useHistory)(),push=_useHistory.push;var handleClick=function handleClick(e){e.preventDefault();push('/plugins/content-type-builder/content-types/create-content-type');};var hasAlreadyCreatedContentTypes=(0,react.useMemo)(function(){var filterContentTypes=function filterContentTypes(contentTypes){return contentTypes.filter(function(c){return c.isDisplayed;});};return filterContentTypes(collectionTypes).length>1||filterContentTypes(singleTypes).length>0;},[collectionTypes,singleTypes]);if(isLoadingForModels){return/*#__PURE__*/react.createElement(helper_plugin.LoadingIndicatorPage,null);}return/*#__PURE__*/react.createElement(dist.Layout,null,/*#__PURE__*/react.createElement(react_intl.FormattedMessage,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},function(title){return/*#__PURE__*/react.createElement(Helmet.Helmet,{title:title[0]});}),/*#__PURE__*/react.createElement(dist.Main,null,/*#__PURE__*/react.createElement(LogoContainer,null,/*#__PURE__*/react.createElement("img",{alt:"","aria-hidden":true,src:corner_ornament_namespaceObject})),/*#__PURE__*/react.createElement(dist.Box,{padding:10},/*#__PURE__*/react.createElement(dist.Grid,null,/*#__PURE__*/react.createElement(dist.GridItem,{col:8,s:12},/*#__PURE__*/react.createElement(HomePage_HomeHeader,{onCreateCT:handleClick,hasCreatedContentType:hasAlreadyCreatedContentTypes}))),/*#__PURE__*/react.createElement(dist.Grid,{gap:6},/*#__PURE__*/react.createElement(dist.GridItem,{col:8,s:12},showGuidedTour?/*#__PURE__*/react.createElement(Homepage,null):/*#__PURE__*/react.createElement(HomePage_ContentBlocks,null)),/*#__PURE__*/react.createElement(dist.GridItem,{col:4,s:12},/*#__PURE__*/react.createElement(HomePage_SocialLinks,null))))));};/* harmony default export */ const pages_HomePage = (/*#__PURE__*/(0,react.memo)(HomePage));

/***/ }),

/***/ 67875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const useLicenseLimitNotification = () => {
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLicenseLimitNotification);


/***/ })

}]);