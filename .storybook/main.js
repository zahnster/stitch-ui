const path = require("path");

module.exports = {
  stories: ["../src/stitch/*.stories.js", "../src/components/**/*.stories.jsx"],
  addons: ["@storybook/addon-controls", "@storybook/addon-cssresources"],

  webpackFinal: async (config) => {
    // modify default css loader
    config.module.rules[3].exclude = path.resolve(__dirname, "../src");

    // add styled jsx loader
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "babel-loader",
        {
          loader: require("styled-jsx/webpack").loader,
          options: {
            type: "scoped",
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
      exclude: path.resolve(__dirname, "../.storybook"),
    });

    return config;
  },
};
