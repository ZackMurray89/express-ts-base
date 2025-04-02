import js from "@eslint/js";

import { defineConfig } from "eslint/config";
import eslintPluginImport from "eslint-plugin-import";
import jest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: ["/dist"],
  },
  {
    files: [
      "src/**/*.{js,jsx,mjs,cjs,ts,tsx}",
      "tests/**/*.{js,jsx,mjs,cjs,ts,tsx}",
    ],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      js,
      import: eslintPluginImport,
      "simple-import-sort": eslintPluginSimpleImportSort,
    },
    extends: ["js/recommended"],
  },
  tseslint.configs.recommended,
  {
    files: ["tests/**/*.{js,mjs,cjs,ts}"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
  {
    rules: {
      "@typescript-eslint/no-empty-interface": "error",
      "no-use-before-define": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^node:"], // Node.Js Built-In Imports
            ["^react$", "^next", "^@\\w"], // External Package Imports
            ["^lib/", "^utils", "^services/"], // Absolute Imports
            ["^\\.\\./"], // Relative Imports (Parent Directory)
            ["\\./"], // Relative Imports (Same Directory)
            ["^.+\\.module\\.css$"], // CSS Module Imports
            ["^\\u0000"], // Side Effect Imports
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
    },
  },
  eslintPluginPrettierRecommended,
]);
