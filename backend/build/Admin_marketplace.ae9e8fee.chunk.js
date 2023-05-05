"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[5516],{

/***/ 43008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MarketPlacePage": () => (/* binding */ MarketPlacePage),
  "default": () => (/* binding */ MarketplacePage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/match-sorter/dist/match-sorter.cjs.js
var match_sorter_cjs = __webpack_require__(63852);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.js
var helper_plugin = __webpack_require__(95489);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/index.cjs
var dist = __webpack_require__(28702);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/index.cjs
var icons_dist = __webpack_require__(41363);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/EmptyNpmPackageSearch/EmptyNpmPackageGrid.js



const EmptyPluginCard = (0,styled_components_browser_esm["default"])(dist.Box)`
  background: ${({ theme }) => `linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${theme.colors.neutral150} 100%)`};
  opacity: 0.33;
`;
const EmptyNpmPackageGrid = () => {
  return /* @__PURE__ */ react.createElement(dist.GridLayout, null, Array(12).fill(null).map((_, idx) => /* @__PURE__ */ react.createElement(
    EmptyPluginCard,
    {
      key: `empty-plugin-card-${idx}`,
      height: "234px",
      hasRadius: true
    }
  )));
};

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/EmptyNpmPackageSearch/index.js





const EmptyNpmPackageSearch = ({ content }) => {
  return /* @__PURE__ */ react.createElement(dist.Box, { position: "relative" }, /* @__PURE__ */ react.createElement(EmptyNpmPackageGrid, null), /* @__PURE__ */ react.createElement(dist.Box, { position: "absolute", top: 11, width: "100%" }, /* @__PURE__ */ react.createElement(dist.Flex, { alignItems: "center", justifyContent: "center", direction: "column" }, /* @__PURE__ */ react.createElement(dist.Icon, { as: icons_dist.EmptyStateDocument, color: "", width: "160px", height: "88px" }), /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 6 }, /* @__PURE__ */ react.createElement(dist.Typography, { variant: "delta", as: "p", textColor: "neutral600" }, content)))));
};
EmptyNpmPackageSearch.propTypes = {
  content: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_EmptyNpmPackageSearch = (EmptyNpmPackageSearch);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.js
var LinkButton = __webpack_require__(80994);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/PageHeader/index.js







const PageHeader = ({ isOnline, npmPackageType }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const tracking = npmPackageType === "provider" ? "didSubmitProvider" : "didSubmitPlugin";
  return /* @__PURE__ */ react.createElement(
    dist.HeaderLayout,
    {
      title: formatMessage({
        id: "global.marketplace",
        defaultMessage: "Marketplace"
      }),
      subtitle: formatMessage({
        id: "admin.pages.MarketPlacePage.subtitle",
        defaultMessage: "Get more out of Strapi"
      }),
      primaryAction: isOnline && /* @__PURE__ */ react.createElement(
        LinkButton/* LinkButton */.Q,
        {
          startIcon: /* @__PURE__ */ react.createElement(icons_dist.Upload, null),
          variant: "tertiary",
          href: `https://market.strapi.io/submit-${npmPackageType}`,
          onClick: () => trackUsage(tracking),
          isExternal: true
        },
        formatMessage({
          id: `admin.pages.MarketPlacePage.submit.${npmPackageType}.link`,
          defaultMessage: `Submit ${npmPackageType}`
        })
      )
    }
  );
};
/* harmony default export */ const components_PageHeader = (PageHeader);
PageHeader.defaultProps = {
  npmPackageType: "plugin"
};
PageHeader.propTypes = {
  isOnline: (prop_types_default()).bool.isRequired,
  npmPackageType: (prop_types_default()).string
};

// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(11817);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchMarketplaceProviders/utils/api.js

const MARKETPLACE_API_URL = "https://market-api.strapi.io";
const fetchMarketplaceProviders = async (params = {}) => {
  const { data } = await axios/* default.get */.Z.get(`${MARKETPLACE_API_URL}/providers`, {
    params
  });
  return data;
};


;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchMarketplaceProviders/index.js



const useFetchMarketplaceProviders = (notifyLoad, params) => {
  const toggleNotification = (0,helper_plugin.useNotification)();
  return (0,lib.useQuery)(["list-marketplace-providers", params], () => fetchMarketplaceProviders(params), {
    onSuccess() {
      if (notifyLoad) {
        notifyLoad();
      }
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  });
};
/* harmony default export */ const hooks_useFetchMarketplaceProviders = (useFetchMarketplaceProviders);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchMarketplacePlugins/utils/api.js

const api_MARKETPLACE_API_URL = "https://market-api.strapi.io";
const fetchMarketplacePlugins = async (params = {}) => {
  const { data: response } = await axios/* default.get */.Z.get(`${api_MARKETPLACE_API_URL}/plugins`, {
    params
  });
  const filteredResponse = {
    ...response,
    data: response.data.filter((plugin) => plugin.attributes.strapiCompatibility === "v4")
  };
  return filteredResponse;
};


;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchMarketplacePlugins/index.js



const useFetchMarketplacePlugins = (notifyLoad, params) => {
  const toggleNotification = (0,helper_plugin.useNotification)();
  return (0,lib.useQuery)(["list-marketplace-plugins", params], () => fetchMarketplacePlugins(params), {
    onSuccess() {
      if (notifyLoad) {
        notifyLoad();
      }
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  });
};
/* harmony default export */ const hooks_useFetchMarketplacePlugins = (useFetchMarketplacePlugins);

// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
;// CONCATENATED MODULE: ./.cache/admin/src/assets/images/icon_offline-cloud.svg
const icon_offline_cloud_namespaceObject = __webpack_require__.p + "9d5d788027e86620c234.svg";
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useNavigatorOnLine/index.js

const useNavigatorOnLine = () => {
  const onlineStatus = typeof navigator !== "undefined" && typeof navigator.onLine === "boolean" ? navigator.onLine : true;
  const [isOnline, setIsOnline] = (0,react.useState)(onlineStatus);
  const setOnline = () => setIsOnline(true);
  const setOffline = () => setIsOnline(false);
  (0,react.useEffect)(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);
  return isOnline;
};
/* harmony default export */ const hooks_useNavigatorOnLine = (useNavigatorOnLine);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/MissingPluginBanner/index.js





const MissingPluginBanner = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  return /* @__PURE__ */ react.createElement(
    "a",
    {
      href: "https://strapi.canny.io/plugin-requests",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      style: { textDecoration: "none" },
      onClick: () => trackUsage("didMissMarketplacePlugin")
    },
    /* @__PURE__ */ react.createElement(
      helper_plugin.ContentBox,
      {
        title: formatMessage({
          id: "admin.pages.MarketPlacePage.missingPlugin.title",
          defaultMessage: "Documentation"
        }),
        subtitle: formatMessage({
          id: "admin.pages.MarketPlacePage.missingPlugin.description",
          defaultMessage: "Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"
        }),
        icon: /* @__PURE__ */ react.createElement(icons_dist.GlassesSquare, null),
        iconBackground: "alternative100",
        endAction: /* @__PURE__ */ react.createElement(dist.Icon, { as: icons_dist.ExternalLink, color: "neutral600", width: 3, height: 3, marginLeft: 2 })
      }
    )
  );
};
/* harmony default export */ const components_MissingPluginBanner = (MissingPluginBanner);

// EXTERNAL MODULE: ./node_modules/pluralize/pluralize.js
var pluralize = __webpack_require__(23450);
var pluralize_default = /*#__PURE__*/__webpack_require__.n(pluralize);
// EXTERNAL MODULE: ./.cache/admin/src/assets/images/logo-strapi-2022.svg
var logo_strapi_2022 = __webpack_require__(61473);
// EXTERNAL MODULE: ./node_modules/semver/index.js
var semver = __webpack_require__(81249);
var semver_default = /*#__PURE__*/__webpack_require__.n(semver);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackageCard/CardButton.js






const TooltipButton = ({ description, installMessage, disabled, handleCopy, pluginName }) => /* @__PURE__ */ react.createElement(dist.Tooltip, { "data-testid": `tooltip-${pluginName}`, description }, /* @__PURE__ */ react.createElement(dist.Box, null, /* @__PURE__ */ react.createElement(
  dist.Button,
  {
    size: "S",
    startIcon: /* @__PURE__ */ react.createElement(icons_dist.Duplicate, null),
    variant: "secondary",
    disabled,
    onClick: handleCopy
  },
  installMessage
)));
const CardButton = ({ strapiPeerDepVersion, strapiAppVersion, handleCopy, pluginName }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const versionRange = semver_default().validRange(strapiPeerDepVersion);
  const isCompatible = semver_default().satisfies(strapiAppVersion, versionRange);
  const installMessage = formatMessage({
    id: "admin.pages.MarketPlacePage.plugin.copy",
    defaultMessage: "Copy install command"
  });
  if (strapiAppVersion) {
    if (!versionRange) {
      return /* @__PURE__ */ react.createElement(
        TooltipButton,
        {
          installMessage,
          pluginName,
          description: formatMessage(
            {
              id: "admin.pages.MarketPlacePage.plugin.version.null",
              defaultMessage: 'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'
            },
            { strapiAppVersion }
          ),
          handleCopy
        }
      );
    }
    if (!isCompatible) {
      return /* @__PURE__ */ react.createElement(
        TooltipButton,
        {
          installMessage,
          pluginName,
          description: formatMessage(
            {
              id: "admin.pages.MarketPlacePage.plugin.version",
              defaultMessage: 'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'
            },
            {
              strapiAppVersion,
              versionRange
            }
          ),
          disabled: true
        }
      );
    }
  }
  return /* @__PURE__ */ react.createElement(dist.Button, { size: "S", startIcon: /* @__PURE__ */ react.createElement(icons_dist.Duplicate, null), variant: "secondary", onClick: handleCopy }, installMessage);
};
TooltipButton.defaultProps = {
  disabled: false,
  handleCopy: null
};
TooltipButton.propTypes = {
  description: (prop_types_default()).string.isRequired,
  installMessage: (prop_types_default()).string.isRequired,
  disabled: (prop_types_default()).bool,
  handleCopy: (prop_types_default()).func,
  pluginName: (prop_types_default()).string.isRequired
};
CardButton.defaultProps = {
  strapiAppVersion: null,
  strapiPeerDepVersion: null
};
CardButton.propTypes = {
  strapiAppVersion: (prop_types_default()).string,
  strapiPeerDepVersion: (prop_types_default()).string,
  handleCopy: (prop_types_default()).func.isRequired,
  pluginName: (prop_types_default()).string.isRequired
};
/* harmony default export */ const NpmPackageCard_CardButton = (CardButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackageCard/InstallPluginButton.js







const InstallPluginButton = ({
  isInstalled,
  isInDevelopmentMode,
  commandToCopy,
  strapiAppVersion,
  strapiPeerDepVersion,
  pluginName
}) => {
  const toggleNotification = (0,helper_plugin.useNotification)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const handleCopy = () => {
    navigator.clipboard.writeText(commandToCopy);
    trackUsage("willInstallPlugin");
    toggleNotification({
      type: "success",
      message: { id: "admin.pages.MarketPlacePage.plugin.copy.success" }
    });
  };
  if (isInstalled) {
    return /* @__PURE__ */ react.createElement(dist.Box, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(dist.Icon, { as: icons_dist.Check, marginRight: 2, width: 12, height: 12, color: "success600" }), /* @__PURE__ */ react.createElement(dist.Typography, { variant: "omega", textColor: "success600", fontWeight: "bold" }, formatMessage({
      id: "admin.pages.MarketPlacePage.plugin.installed",
      defaultMessage: "Installed"
    })));
  }
  if (isInDevelopmentMode) {
    return /* @__PURE__ */ react.createElement(
      NpmPackageCard_CardButton,
      {
        strapiAppVersion,
        strapiPeerDepVersion,
        handleCopy,
        pluginName
      }
    );
  }
  return null;
};
InstallPluginButton.defaultProps = {
  strapiAppVersion: null,
  strapiPeerDepVersion: null
};
InstallPluginButton.propTypes = {
  isInstalled: (prop_types_default()).bool.isRequired,
  isInDevelopmentMode: (prop_types_default()).bool.isRequired,
  commandToCopy: (prop_types_default()).string.isRequired,
  strapiAppVersion: (prop_types_default()).string,
  strapiPeerDepVersion: (prop_types_default()).string,
  pluginName: (prop_types_default()).string.isRequired
};
/* harmony default export */ const NpmPackageCard_InstallPluginButton = (InstallPluginButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackageCard/PackageStats.js







const VerticalDivider = (0,styled_components_browser_esm["default"])(dist.Divider)`
  width: ${(0,helper_plugin.pxToRem)(12)};
  transform: rotate(90deg);
`;
const PackageStats = ({ githubStars, npmDownloads, npmPackageType }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, spacing: 1 }, !!githubStars && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(dist.Icon, { as: icons_dist.Github, height: (0,helper_plugin.pxToRem)(12), width: (0,helper_plugin.pxToRem)(12), "aria-hidden": true }), /* @__PURE__ */ react.createElement(dist.Icon, { as: icons_dist.Star, height: (0,helper_plugin.pxToRem)(12), width: (0,helper_plugin.pxToRem)(12), color: "warning500", "aria-hidden": true }), /* @__PURE__ */ react.createElement(
    "p",
    {
      "aria-label": formatMessage(
        {
          id: `admin.pages.MarketPlacePage.${npmPackageType}.githubStars`,
          defaultMessage: `This {package} was starred {starsCount} on GitHub`
        },
        {
          starsCount: githubStars,
          package: npmPackageType
        }
      )
    },
    /* @__PURE__ */ react.createElement(dist.Typography, { variant: "pi", textColor: "neutral800", lineHeight: 16 }, githubStars)
  ), /* @__PURE__ */ react.createElement(VerticalDivider, { unsetMargin: false, background: "neutral200" })), /* @__PURE__ */ react.createElement(dist.Icon, { as: icons_dist.Download, height: (0,helper_plugin.pxToRem)(12), width: (0,helper_plugin.pxToRem)(12), "aria-hidden": true }), /* @__PURE__ */ react.createElement(
    "p",
    {
      "aria-label": formatMessage(
        {
          id: `admin.pages.MarketPlacePage.${npmPackageType}.downloads`,
          defaultMessage: `This {package} has {downloadsCount} weekly downloads`
        },
        {
          downloadsCount: npmDownloads,
          package: npmPackageType
        }
      )
    },
    /* @__PURE__ */ react.createElement(dist.Typography, { variant: "pi", textColor: "neutral800", lineHeight: 16 }, npmDownloads)
  ));
};
PackageStats.defaultProps = {
  githubStars: 0,
  npmDownloads: 0
};
PackageStats.propTypes = {
  githubStars: (prop_types_default()).number,
  npmDownloads: (prop_types_default()).number,
  npmPackageType: (prop_types_default()).string.isRequired
};
/* harmony default export */ const NpmPackageCard_PackageStats = (PackageStats);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackageCard/index.js












const EllipsisText = (0,styled_components_browser_esm["default"])(dist.Typography)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`;
const NpmPackageCard = ({
  npmPackage,
  isInstalled,
  useYarn,
  isInDevelopmentMode,
  npmPackageType,
  strapiAppVersion
}) => {
  const { attributes } = npmPackage;
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const commandToCopy = useYarn ? `yarn add ${attributes.npmPackageName}` : `npm install ${attributes.npmPackageName}`;
  const madeByStrapiMessage = formatMessage({
    id: "admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",
    defaultMessage: "Made by Strapi"
  });
  const npmPackageHref = `https://market.strapi.io/${pluralize_default().plural(npmPackageType)}/${attributes.slug}`;
  return /* @__PURE__ */ react.createElement(
    dist.Flex,
    {
      direction: "column",
      justifyContent: "space-between",
      paddingTop: 4,
      paddingRight: 4,
      paddingBottom: 4,
      paddingLeft: 4,
      hasRadius: true,
      background: "neutral0",
      shadow: "tableShadow",
      height: "100%",
      alignItems: "normal",
      "data-testid": "npm-package-card"
    },
    /* @__PURE__ */ react.createElement(dist.Box, null, /* @__PURE__ */ react.createElement(dist.Flex, { direction: "row", justifyContent: "space-between", alignItems: "flex-start" }, /* @__PURE__ */ react.createElement(
      dist.Box,
      {
        as: "img",
        src: attributes.logo.url,
        alt: `${attributes.name} logo`,
        hasRadius: true,
        width: 11,
        height: 11
      }
    ), /* @__PURE__ */ react.createElement(
      NpmPackageCard_PackageStats,
      {
        githubStars: attributes.githubStars,
        npmDownloads: attributes.npmDownloads,
        npmPackageType
      }
    )), /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(dist.Typography, { as: "h3", variant: "delta" }, /* @__PURE__ */ react.createElement(dist.Flex, { alignItems: "center" }, attributes.name, attributes.validated && !attributes.madeByStrapi && /* @__PURE__ */ react.createElement(
      dist.Tooltip,
      {
        description: formatMessage({
          id: "admin.pages.MarketPlacePage.plugin.tooltip.verified",
          defaultMessage: "Plugin verified by Strapi"
        })
      },
      /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(dist.Icon, { as: icons_dist.CheckCircle, marginLeft: 2, color: "success600" }))
    ), attributes.madeByStrapi && /* @__PURE__ */ react.createElement(dist.Tooltip, { description: madeByStrapiMessage }, /* @__PURE__ */ react.createElement(dist.Flex, null, /* @__PURE__ */ react.createElement(
      dist.Box,
      {
        as: "img",
        src: logo_strapi_2022,
        alt: madeByStrapiMessage,
        marginLeft: 1,
        width: 6,
        height: "auto"
      }
    )))))), /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(EllipsisText, { as: "p", variant: "omega", textColor: "neutral600" }, attributes.description))),
    /* @__PURE__ */ react.createElement(dist.Stack, { horizontal: true, spacing: 2, style: { alignSelf: "flex-end" }, paddingTop: 6 }, /* @__PURE__ */ react.createElement(
      LinkButton/* LinkButton */.Q,
      {
        size: "S",
        href: npmPackageHref,
        isExternal: true,
        endIcon: /* @__PURE__ */ react.createElement(icons_dist.ExternalLink, null),
        "aria-label": formatMessage(
          {
            id: "admin.pages.MarketPlacePage.plugin.info.label",
            defaultMessage: "Learn more about {pluginName}"
          },
          { pluginName: attributes.name }
        ),
        variant: "tertiary",
        onClick: () => trackUsage("didPluginLearnMore")
      },
      formatMessage({
        id: "admin.pages.MarketPlacePage.plugin.info.text",
        defaultMessage: "More"
      })
    ), /* @__PURE__ */ react.createElement(
      NpmPackageCard_InstallPluginButton,
      {
        isInstalled,
        isInDevelopmentMode,
        commandToCopy,
        strapiAppVersion,
        strapiPeerDepVersion: attributes.strapiVersion,
        pluginName: attributes.name
      }
    ))
  );
};
NpmPackageCard.defaultProps = {
  isInDevelopmentMode: false,
  strapiAppVersion: null
};
NpmPackageCard.propTypes = {
  npmPackage: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    attributes: prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      description: (prop_types_default()).string.isRequired,
      slug: (prop_types_default()).string.isRequired,
      npmPackageName: (prop_types_default()).string.isRequired,
      npmPackageUrl: (prop_types_default()).string.isRequired,
      repositoryUrl: (prop_types_default()).string.isRequired,
      logo: (prop_types_default()).object.isRequired,
      developerName: (prop_types_default()).string.isRequired,
      validated: (prop_types_default()).bool.isRequired,
      madeByStrapi: (prop_types_default()).bool.isRequired,
      strapiCompatibility: prop_types_default().oneOf(["v3", "v4"]),
      strapiVersion: (prop_types_default()).string,
      githubStars: (prop_types_default()).number,
      npmDownloads: (prop_types_default()).number
    }).isRequired
  }).isRequired,
  isInstalled: (prop_types_default()).bool.isRequired,
  useYarn: (prop_types_default()).bool.isRequired,
  isInDevelopmentMode: (prop_types_default()).bool,
  npmPackageType: (prop_types_default()).string.isRequired,
  strapiAppVersion: (prop_types_default()).string
};
/* harmony default export */ const components_NpmPackageCard = (NpmPackageCard);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackagesGrid/index.js




const NpmPackagesGrid = ({
  npmPackages,
  installedPackageNames,
  useYarn,
  isInDevelopmentMode,
  npmPackageType,
  strapiAppVersion
}) => {
  const isAlreadyInstalled = (0,react.useCallback)(
    (npmPackageName) => installedPackageNames.includes(npmPackageName),
    [installedPackageNames]
  );
  return /* @__PURE__ */ react.createElement(dist.Grid, { gap: 4 }, npmPackages.map((npmPackage) => /* @__PURE__ */ react.createElement(dist.GridItem, { col: 4, s: 6, xs: 12, style: { height: "100%" }, key: npmPackage.id }, /* @__PURE__ */ react.createElement(
    components_NpmPackageCard,
    {
      npmPackage,
      isInstalled: isAlreadyInstalled(npmPackage.attributes.npmPackageName),
      useYarn,
      isInDevelopmentMode,
      npmPackageType,
      strapiAppVersion
    }
  ))));
};
NpmPackagesGrid.defaultProps = {
  installedPackageNames: [],
  strapiAppVersion: null
};
NpmPackagesGrid.propTypes = {
  npmPackages: (prop_types_default()).array.isRequired,
  installedPackageNames: prop_types_default().arrayOf((prop_types_default()).string),
  useYarn: (prop_types_default()).bool.isRequired,
  isInDevelopmentMode: (prop_types_default()).bool.isRequired,
  npmPackageType: (prop_types_default()).string.isRequired,
  strapiAppVersion: (prop_types_default()).string
};
/* harmony default export */ const components_NpmPackagesGrid = (NpmPackagesGrid);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/SortSelect/index.js





const SelectWrapper = (0,styled_components_browser_esm["default"])(dist.Box)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  span {
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }
`;
const SortSelect = ({ sortQuery, handleSelectChange }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const sortTypes = {
    "name:asc": {
      selected: {
        id: "admin.pages.MarketPlacePage.sort.alphabetical.selected",
        defaultMessage: "Sort by alphabetical order"
      },
      option: {
        id: "admin.pages.MarketPlacePage.sort.alphabetical",
        defaultMessage: "Alphabetical order"
      }
    },
    "submissionDate:desc": {
      selected: {
        id: "admin.pages.MarketPlacePage.sort.newest.selected",
        defaultMessage: "Sort by newest"
      },
      option: {
        id: "admin.pages.MarketPlacePage.sort.newest",
        defaultMessage: "Newest"
      }
    },
    "githubStars:desc": {
      selected: {
        id: "admin.pages.MarketPlacePage.sort.githubStars.selected",
        defaultMessage: "Sort by GitHub stars"
      },
      option: {
        id: "admin.pages.MarketPlacePage.sort.githubStars",
        defaultMessage: "Number of GitHub stars"
      }
    },
    "npmDownloads:desc": {
      selected: {
        id: "admin.pages.MarketPlacePage.sort.npmDownloads.selected",
        defaultMessage: "Sort by npm downloads"
      },
      option: {
        id: "admin.pages.MarketPlacePage.sort.npmDownloads",
        defaultMessage: "Number of downloads"
      }
    }
  };
  return /* @__PURE__ */ react.createElement(SelectWrapper, null, /* @__PURE__ */ react.createElement(
    dist.Select,
    {
      size: "S",
      id: "sort-by-select",
      value: sortQuery,
      customizeContent: () => formatMessage(sortTypes[sortQuery].selected),
      onChange: (sortName) => {
        handleSelectChange({ sort: sortName });
      }
    },
    Object.entries(sortTypes).map(([sortName, messages]) => {
      return /* @__PURE__ */ react.createElement(dist.Option, { key: sortName, value: sortName }, formatMessage(messages.option));
    })
  ));
};
SortSelect.propTypes = {
  sortQuery: (prop_types_default()).string.isRequired,
  handleSelectChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_SortSelect = (SortSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackagesFilters/FilterSelect.js



const FilterSelect = ({ message, value, onChange, possibleFilters, onClear, customizeContent }) => {
  const computeFilterMessage = (filterName, count) => {
    return `${filterName} (${count})`;
  };
  return /* @__PURE__ */ react.createElement(
    dist.Select,
    {
      "data-testid": `${message}-button`,
      "aria-label": message,
      placeholder: message,
      size: "M",
      onChange,
      onClear,
      value,
      customizeContent,
      multi: true
    },
    Object.entries(possibleFilters).map(([filterName, count]) => {
      return /* @__PURE__ */ react.createElement(dist.Option, { "data-testid": `${filterName}-${count}`, key: filterName, value: filterName }, computeFilterMessage(filterName, count));
    })
  );
};
FilterSelect.propTypes = {
  message: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).array.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  possibleFilters: (prop_types_default()).object.isRequired,
  onClear: (prop_types_default()).func.isRequired,
  customizeContent: (prop_types_default()).func.isRequired
};
/* harmony default export */ const NpmPackagesFilters_FilterSelect = (FilterSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackagesFilters/FiltersPopover.js





const FiltersPopover = ({
  source,
  onToggle,
  query,
  npmPackageType,
  possibleCategories,
  possibleCollections,
  handleSelectChange,
  handleSelectClear
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(dist.Popover, { source, padding: 3, spacing: 4, onBlur: () => {
  } }, /* @__PURE__ */ react.createElement(dist.FocusTrap, { onEscape: onToggle }, /* @__PURE__ */ react.createElement(dist.Stack, { spacing: 1 }, /* @__PURE__ */ react.createElement(dist.Box, null, /* @__PURE__ */ react.createElement(
    NpmPackagesFilters_FilterSelect,
    {
      message: formatMessage({
        id: "admin.pages.MarketPlacePage.filters.collections",
        defaultMessage: "Collections"
      }),
      value: query?.collections || [],
      onChange: (newCollections) => {
        const update = { collections: newCollections };
        handleSelectChange(update);
      },
      onClear: () => handleSelectClear("collections"),
      possibleFilters: possibleCollections,
      customizeContent: (values) => formatMessage(
        {
          id: "admin.pages.MarketPlacePage.filters.collectionsSelected",
          defaultMessage: "{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"
        },
        { count: values.length }
      )
    }
  )), npmPackageType === "plugin" && /* @__PURE__ */ react.createElement(dist.Box, null, /* @__PURE__ */ react.createElement(
    NpmPackagesFilters_FilterSelect,
    {
      message: formatMessage({
        id: "admin.pages.MarketPlacePage.filters.categories",
        defaultMessage: "Categories"
      }),
      value: query?.categories || [],
      onChange: (newCategories) => {
        const update = { categories: newCategories };
        handleSelectChange(update);
      },
      onClear: () => handleSelectClear("categories"),
      possibleFilters: possibleCategories,
      customizeContent: (values) => formatMessage(
        {
          id: "admin.pages.MarketPlacePage.filters.categoriesSelected",
          defaultMessage: "{count, plural, =0 {No categories} one {# category} other {# categories}} selected"
        },
        { count: values.length }
      ),
      name: "categories"
    }
  )))));
};
FiltersPopover.propTypes = {
  onToggle: (prop_types_default()).func.isRequired,
  source: prop_types_default().shape({ current: prop_types_default().instanceOf(Element) }).isRequired,
  query: (prop_types_default()).object.isRequired,
  npmPackageType: prop_types_default().oneOf(["plugin", "provider"]).isRequired,
  possibleCollections: (prop_types_default()).object.isRequired,
  possibleCategories: (prop_types_default()).object.isRequired,
  handleSelectChange: (prop_types_default()).func.isRequired,
  handleSelectClear: (prop_types_default()).func.isRequired
};
/* harmony default export */ const NpmPackagesFilters_FiltersPopover = (FiltersPopover);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackagesFilters/index.js







const FilterTag = ({ name, handleRemove }) => {
  return /* @__PURE__ */ react.createElement(dist.Box, { padding: 1 }, /* @__PURE__ */ react.createElement(dist.Tag, { icon: /* @__PURE__ */ react.createElement(icons_dist.Cross, null), onClick: handleRemove }, name));
};
const ButtonToggle = (0,styled_components_browser_esm["default"])(dist.Button)`
  height: ${({ theme }) => theme.sizes.input.S};
`;
const NpmPackagesFilters = ({
  possibleCollections,
  possibleCategories,
  npmPackageType,
  query,
  handleSelectClear,
  handleSelectChange
}) => {
  const [isVisible, setIsVisible] = (0,react.useState)(false);
  const buttonRef = (0,react.useRef)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const handleToggle = () => setIsVisible((prev) => !prev);
  const handleTagRemove = (tagToRemove, filterType) => {
    const update = {
      [filterType]: query[filterType].filter((previousTag) => previousTag !== tagToRemove)
    };
    handleSelectChange(update);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
    ButtonToggle,
    {
      variant: "tertiary",
      ref: buttonRef,
      "data-testid": "filters-button",
      startIcon: /* @__PURE__ */ react.createElement(icons_dist.Filter, null),
      onClick: handleToggle,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react.createElement(
    NpmPackagesFilters_FiltersPopover,
    {
      onToggle: handleToggle,
      source: buttonRef,
      query,
      handleSelectClear,
      handleSelectChange,
      possibleCollections,
      possibleCategories,
      npmPackageType
    }
  )), query.collections?.map((collection) => /* @__PURE__ */ react.createElement(
    FilterTag,
    {
      name: collection,
      key: collection,
      handleRemove: () => handleTagRemove(collection, "collections")
    }
  )), npmPackageType === "plugin" && query.categories?.map((category) => /* @__PURE__ */ react.createElement(
    FilterTag,
    {
      name: category,
      key: category,
      handleRemove: () => handleTagRemove(category, "categories")
    }
  )));
};
FilterTag.propTypes = {
  name: (prop_types_default()).string.isRequired,
  handleRemove: (prop_types_default()).func.isRequired
};
NpmPackagesFilters.propTypes = {
  npmPackageType: prop_types_default().oneOf(["plugin", "provider"]).isRequired,
  possibleCollections: (prop_types_default()).object.isRequired,
  possibleCategories: (prop_types_default()).object.isRequired,
  query: (prop_types_default()).object.isRequired,
  handleSelectChange: (prop_types_default()).func.isRequired,
  handleSelectClear: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_NpmPackagesFilters = (NpmPackagesFilters);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/index.js

















const matchSearch = (npmPackages, search) => {
  return (0,match_sorter_cjs/* default */.ZP)(npmPackages, search, {
    keys: [
      {
        threshold: match_sorter_cjs/* default.rankings.WORD_STARTS_WITH */.ZP.rankings.WORD_STARTS_WITH,
        key: "attributes.name"
      },
      { threshold: match_sorter_cjs/* default.rankings.WORD_STARTS_WITH */.ZP.rankings.WORD_STARTS_WITH, key: "attributes.description" }
    ],
    baseSort: (a, b) => a.index < b.index ? -1 : 1
  });
};
const MarketPlacePage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,helper_plugin.useTracking)();
  const { notifyStatus } = (0,dist.useNotifyAT)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const toggleNotification = (0,helper_plugin.useNotification)();
  const [searchQuery, setSearchQuery] = (0,react.useState)("");
  const [{ query }, setQuery] = (0,helper_plugin.useQueryParams)();
  const { autoReload: isInDevelopmentMode, dependencies, useYarn, strapiVersion } = (0,helper_plugin.useAppInfos)();
  const isOnline = hooks_useNavigatorOnLine();
  const npmPackageType = query?.npmPackageType || "plugin";
  const [tabQuery, setTabQuery] = (0,react.useState)({
    plugin: npmPackageType === "plugin" ? { ...query } : {},
    provider: npmPackageType === "provider" ? { ...query } : {}
  });
  (0,helper_plugin.useFocusWhenNavigate)();
  const marketplaceTitle = formatMessage({
    id: "global.marketplace",
    defaultMessage: "Marketplace"
  });
  const notifyMarketplaceLoad = () => {
    notifyStatus(
      formatMessage(
        {
          id: "app.utils.notify.data-loaded",
          defaultMessage: "The {target} has loaded"
        },
        { target: marketplaceTitle }
      )
    );
  };
  const { status: marketplaceProvidersStatus, data: marketplaceProvidersResponse } = hooks_useFetchMarketplaceProviders(notifyMarketplaceLoad, tabQuery.provider);
  const { status: marketplacePluginsStatus, data: marketplacePluginsResponse } = hooks_useFetchMarketplacePlugins(notifyMarketplaceLoad, tabQuery.plugin);
  const isLoading = [marketplacePluginsStatus, marketplaceProvidersStatus].includes("loading");
  const hasFailed = [marketplacePluginsStatus, marketplaceProvidersStatus].includes("error");
  (0,react.useEffect)(() => {
    trackUsageRef.current("didGoToMarketplace");
  }, []);
  (0,react.useEffect)(() => {
    if (!isInDevelopmentMode) {
      toggleNotification({
        type: "info",
        message: {
          id: "admin.pages.MarketPlacePage.production",
          defaultMessage: "Manage plugins from the development environment"
        },
        blockTransition: true
      });
    }
  }, [toggleNotification, isInDevelopmentMode]);
  if (!isOnline) {
    return /* @__PURE__ */ react.createElement(dist.Layout, null, /* @__PURE__ */ react.createElement(dist.Main, null, /* @__PURE__ */ react.createElement(components_PageHeader, { isOnline }), /* @__PURE__ */ react.createElement(
      dist.Flex,
      {
        width: "100%",
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        style: { paddingTop: "120px" }
      },
      /* @__PURE__ */ react.createElement(dist.Box, { paddingBottom: 2 }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral700", variant: "alpha" }, formatMessage({
        id: "admin.pages.MarketPlacePage.offline.title",
        defaultMessage: "You are offline"
      }))),
      /* @__PURE__ */ react.createElement(dist.Box, { paddingBottom: 6 }, /* @__PURE__ */ react.createElement(dist.Typography, { textColor: "neutral700", variant: "epsilon" }, formatMessage({
        id: "admin.pages.MarketPlacePage.offline.subtitle",
        defaultMessage: "You need to be connected to the Internet to access Strapi Market."
      }))),
      /* @__PURE__ */ react.createElement("img", { src: icon_offline_cloud_namespaceObject, alt: "offline", style: { width: "88px", height: "88px" } })
    )));
  }
  if (hasFailed) {
    return /* @__PURE__ */ react.createElement(dist.Layout, null, /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 8 }, /* @__PURE__ */ react.createElement(helper_plugin.AnErrorOccurred, null))));
  }
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(dist.Layout, null, /* @__PURE__ */ react.createElement(dist.Main, { "aria-busy": true }, /* @__PURE__ */ react.createElement(helper_plugin.LoadingIndicatorPage, null)));
  }
  const pluginSearchResults = matchSearch(marketplacePluginsResponse.data, searchQuery);
  const providerSearchResults = matchSearch(marketplaceProvidersResponse.data, searchQuery);
  const emptySearchMessage = formatMessage(
    {
      id: "admin.pages.MarketPlacePage.search.empty",
      defaultMessage: 'No result for "{target}"'
    },
    { target: searchQuery }
  );
  const handleTabChange = (selected) => {
    const selectedTab = selected === 0 ? "plugin" : "provider";
    const hasTabQuery = tabQuery[selectedTab] && Object.keys(tabQuery[selectedTab]).length;
    if (hasTabQuery) {
      setQuery({ ...tabQuery[selectedTab], npmPackageType: selectedTab });
    } else {
      setQuery({
        npmPackageType: selectedTab,
        // Clear filters
        collections: [],
        categories: [],
        sort: "name:asc"
      });
    }
  };
  const handleSelectChange = (update) => {
    setQuery(update);
    setTabQuery((prev) => ({
      ...prev,
      [npmPackageType]: { ...prev[npmPackageType], ...update }
    }));
  };
  const handleSelectClear = (filterType) => {
    setQuery({ [filterType]: [] }, "remove");
    setTabQuery((prev) => ({ ...prev, [npmPackageType]: {} }));
  };
  const installedPackageNames = Object.keys(dependencies);
  const possibleCollections = npmPackageType === "plugin" ? marketplacePluginsResponse.meta.collections : marketplaceProvidersResponse.meta.collections;
  const possibleCategories = marketplacePluginsResponse.meta.categories;
  return /* @__PURE__ */ react.createElement(dist.Layout, null, /* @__PURE__ */ react.createElement(dist.Main, null, /* @__PURE__ */ react.createElement(
    Helmet.Helmet,
    {
      title: formatMessage({
        id: "admin.pages.MarketPlacePage.helmet",
        defaultMessage: "Marketplace - Plugins"
      })
    }
  ), /* @__PURE__ */ react.createElement(components_PageHeader, { isOnline, npmPackageType }), /* @__PURE__ */ react.createElement(dist.ContentLayout, null, /* @__PURE__ */ react.createElement(dist.Box, { width: "25%", paddingBottom: 4 }, /* @__PURE__ */ react.createElement(
    dist.Searchbar,
    {
      name: "searchbar",
      onClear: () => setSearchQuery(""),
      value: searchQuery,
      onChange: (e) => setSearchQuery(e.target.value),
      clearLabel: formatMessage({
        id: "admin.pages.MarketPlacePage.search.clear",
        defaultMessage: "Clear the search"
      }),
      placeholder: formatMessage({
        id: "admin.pages.MarketPlacePage.search.placeholder",
        defaultMessage: "Search"
      })
    },
    formatMessage({
      id: "admin.pages.MarketPlacePage.search.placeholder",
      defaultMessage: "Search"
    })
  )), /* @__PURE__ */ react.createElement(
    dist.TabGroup,
    {
      label: formatMessage({
        id: "admin.pages.MarketPlacePage.tab-group.label",
        defaultMessage: "Plugins and Providers for Strapi"
      }),
      id: "tabs",
      variant: "simple",
      initialSelectedTabIndex: ["plugin", "provider"].indexOf(npmPackageType),
      onTabChange: handleTabChange
    },
    /* @__PURE__ */ react.createElement(dist.Box, { paddingBottom: 4 }, /* @__PURE__ */ react.createElement(dist.Tabs, null, /* @__PURE__ */ react.createElement(dist.Tab, null, formatMessage({
      id: "admin.pages.MarketPlacePage.plugins",
      defaultMessage: "Plugins"
    }), " ", "(", pluginSearchResults.length, ")"), /* @__PURE__ */ react.createElement(dist.Tab, null, formatMessage({
      id: "admin.pages.MarketPlacePage.providers",
      defaultMessage: "Providers"
    }), " ", "(", providerSearchResults.length, ")"))),
    /* @__PURE__ */ react.createElement(dist.Flex, { paddingBottom: 4, gap: 2 }, /* @__PURE__ */ react.createElement(
      components_SortSelect,
      {
        sortQuery: query?.sort || "name:asc",
        handleSelectChange
      }
    ), /* @__PURE__ */ react.createElement(
      components_NpmPackagesFilters,
      {
        npmPackageType,
        possibleCollections,
        possibleCategories,
        query: query || {},
        handleSelectChange,
        handleSelectClear
      }
    )),
    /* @__PURE__ */ react.createElement(dist.TabPanels, null, /* @__PURE__ */ react.createElement(dist.TabPanel, null, searchQuery.length > 0 && !pluginSearchResults.length ? /* @__PURE__ */ react.createElement(components_EmptyNpmPackageSearch, { content: emptySearchMessage }) : /* @__PURE__ */ react.createElement(
      components_NpmPackagesGrid,
      {
        npmPackages: pluginSearchResults,
        installedPackageNames,
        useYarn,
        isInDevelopmentMode,
        npmPackageType: "plugin",
        strapiAppVersion: strapiVersion
      }
    )), /* @__PURE__ */ react.createElement(dist.TabPanel, null, searchQuery.length > 0 && !providerSearchResults.length ? /* @__PURE__ */ react.createElement(components_EmptyNpmPackageSearch, { content: emptySearchMessage }) : /* @__PURE__ */ react.createElement(
      components_NpmPackagesGrid,
      {
        npmPackages: providerSearchResults,
        installedPackageNames,
        useYarn,
        isInDevelopmentMode,
        npmPackageType: "provider"
      }
    )))
  ), /* @__PURE__ */ react.createElement(dist.Box, { paddingTop: 7 }, /* @__PURE__ */ react.createElement(components_MissingPluginBanner, null)))));
};
const ProtectedMarketPlace = () => /* @__PURE__ */ react.createElement(helper_plugin.CheckPagePermissions, { permissions: permissions/* default.marketplace.main */.Z.marketplace.main }, /* @__PURE__ */ react.createElement(MarketPlacePage, null));

/* harmony default export */ const MarketplacePage = (ProtectedMarketPlace);


/***/ })

}]);