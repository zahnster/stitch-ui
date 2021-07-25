import fastGlob from "fast-glob";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import multiInput from "rollup-plugin-multi-input";

import wcToStyledJSX from "./lib/rollup-plugin-styled-jsx";

const componentFiles = fastGlob.sync("./components/**/*.jsx", {
  ignore: ["./components/**/*.stories.jsx"],
});

export default {
  input: componentFiles,
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    multiInput(),
    wcToStyledJSX(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/env", "@babel/react"],
      plugins: ["styled-jsx/babel"],
    }),
    commonjs(),
  ],
  external: (id) => /^react|styled-jsx/.test(id),
};
