import { withCssResources } from "@storybook/addon-cssresources";
import "./styles.css";

export const parameters = {
  cssresources: [
    {
      id: `BlueTheme`,
      code: `<style>
        :root { 
          --color-brand-contrast-1: blue;
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
