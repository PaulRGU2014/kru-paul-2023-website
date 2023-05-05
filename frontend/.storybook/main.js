module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      },
    },
    "@storybook/addon-interactions",
    "storybook-addon-next"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  "staticDirs": ['../public'],
}