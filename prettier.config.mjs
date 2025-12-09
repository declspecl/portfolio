/** @type { import("prettier").Config } */
const config = {
    trailingComma: "all",
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    printWidth: 140,
    plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
};

export default config;
