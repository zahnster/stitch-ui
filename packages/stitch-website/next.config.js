const withTM = require("next-transpile-modules")(["@stitch-ui/button"]);

module.exports = withTM({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // css loader for stitch components (currently not transpiled)
    config.module.rules.push({
      test: /\.css$/,
      use: ["wc-to-styled-jsx-loader", "raw-loader"],
    });

    return config;
  },
});
