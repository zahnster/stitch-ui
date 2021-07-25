const fs = require("fs");

module.exports = function (content) {
  const basePath = this.resourcePath.match(/(.*)\/.*.[t|j]sx/)[1];
  const lines = content.split(/\n/);

  let cssVar = null;
  let css = null;

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
};
