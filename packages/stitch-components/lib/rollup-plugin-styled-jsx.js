import fs from "fs";

export default function WCToStyledJSX() {
  return {
    name: "wc-to-styled-jsx", // this name will show up in warnings and errors

    transform(code, id) {
      const lines = code.split(/\n/);

      let cssVar = null;
      let css = null;
      let basePath = id.match(/(.*)\/.*.jsx/)[1];

      const edited = lines.map((line) => {
        const match = line.match(/import (.*) from "\.\/(.*).css";/);

        if (match) {
          cssVar = match[1];
          css = fs
            .readFileSync(`${basePath}/${match[2]}.css`, "utf-8")
            .replace(/\n/g, "")
            .replace(/:root\s?{(.*?)}/, "$1");

          return ""; // "erase" the line from the source code
        }

        if (cssVar) {
          const varMatch = line.includes(`\$\{${cssVar}\}`);

          if (varMatch) {
            return css; // replace line w/ modified css
          }
        }

        return line;
      });

      const editedString = edited.join("\n");

      return editedString;
    },
  };
}
