const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.jsx", "../stitch/welcome.stories.jsx"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-cssresources",
  ],

  babel: async (options) => {
    options.plugins.push("styled-jsx/babel");
    return options;
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.[j|t]sx$/,
      use: ["styled-jsx-css-loader"],
      include: path.resolve(__dirname, "../components"),
    });

    return config;
  },
};
