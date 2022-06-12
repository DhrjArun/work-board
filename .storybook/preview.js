/** @jsxImportSource @theme-ui/core */
import { ThemeProvider } from "@theme-ui/core";
import theme from "@theme-ui/preset-tailwind";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import React from "react";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div sx={{ fontFamily: "body", fontSize: "0", color: "gray.8" }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
