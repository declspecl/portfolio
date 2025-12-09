import jseslint from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.ConfigWithExtendsArray} */
export const options = [
    jseslint.configs.recommended,
    tseslint.configs.recommended,
    eslintPluginUnicorn.configs.recommended,
    pluginReact.configs.flat.recommended,
    globalIgnores([".husky", ".next", "out/**", "build/**", "node_modules", ".env*", "next-env.d.ts", "pnpm-*"]),
    {
        rules: {
            "unicorn/prevent-abbreviations": "off",
            "unicorn/no-null": "off",
            "unicorn/no-array-reduce": "off",
            "unicorn/no-abusive-eslint-disable": "off",
            "unicorn/no-useless-undefined": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/consistent-type-imports": "error",
        },
    },
    {
        languageOptions: {
            ...pluginReact.configs.flat.recommended.languageOptions,
            globals: {
                ...globals.serviceworker,
                ...globals.browser,
            },
        },
    },
    {
        plugins: {
            "react-hooks": pluginReactHooks,
        },
        settings: { react: { version: "detect" } },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
        },
    },
    {
        ignores: ["dist/**"],
    },
];

/** @type {import("eslint").Linter.Config} */
export default defineConfig(options);
