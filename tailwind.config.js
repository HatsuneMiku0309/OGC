"use strict";
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    defaultExtractor: (content) => {
      const contentWithoutStyleBlocks = content.replace(
        /<style[^]+?<\/style>/gi,
        ""
      );
      return (
        contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
        []
      );
    },
    content: ["./*.html", "./src/**/*.vue"],
    safelist: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!cursor-move).+-move$/,
      /^router-link(|-exact)-active$/,
      /data-v-.*/,
    ],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      teal: colors.teal,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.ping,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
