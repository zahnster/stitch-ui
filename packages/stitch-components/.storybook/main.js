const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  addons: ["@storybook/addon-controls", "@storybook/addon-cssresources"],

  babel: async (options) => {
    options.plugins.push("styled-jsx/babel");
    return options;
  },

  webpackFinal: async (config) => {
    // modify default css loader to not process src css files
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.test.toString().match(".css")) {
        rule.exclude = path.resolve(__dirname, "../src");
      }
      return rule;
    });

    // add our custom styled jsx css loader
    config.module.rules.push({
      test: /\.css$/,
      use: ["wc-to-styled-jsx-loader", "raw-loader"],
      include: path.resolve(__dirname, "../src"),
    });

    return config;
  },
};
