// transpiles declared packages in node_modules
const withTM = require("next-transpile-modules")(["@stitch-ui/button"]);

module.exports = withTM({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.[j|t]sx$/,
      use: ["styled-jsx-css-loader"],
    });

    return config;
  },
});
