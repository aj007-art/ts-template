import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts"],
    languageOptions: { parserOptions: { ecmaVersion: "latest", sourceType: "module" } },
    plugins: { import: importPlugin },
    rules: {
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
    }
  }
];
