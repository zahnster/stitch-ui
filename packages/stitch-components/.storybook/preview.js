import { withCssResources } from "@storybook/addon-cssresources";
import "./scales-stitch.css";
import "./theme-classic.css";

export const parameters = {
  cssresources: [
    {
      id: `BlueTheme`,
      code: `<style>
        :root { 
          --color-brand-contrast-2: blue;
         }
      </style>`,
      picked: false,
      hideCode: false,
    },
    {
      id: `DarkMode`,
      code: `<style>
         html {
           background: #121212;
         }
      </style>`,
      picked: false,
      hideCode: false,
    },
  ],
};
export const decorators = [withCssResources];
