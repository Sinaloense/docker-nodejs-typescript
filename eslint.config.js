import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["eslint.config.js", "dist/"],
  },
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      // "array-bracket-spacing": [ 1, "always" ],
      // "object-curly-spacing": [ 1, "always" ],
      // "quotes": [ 1, "single", { "avoidEscape": true } ],
    }
  }
];