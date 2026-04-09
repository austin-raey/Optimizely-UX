/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const prettierConfig = {
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 120,
  singleQuote: false,
  tailwindStylesheet: "./src/styles/tailwind.css",
  trailingComma: "all",
  useTabs: false,
};
export default prettierConfig;
