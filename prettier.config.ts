// prettier.config.ts
import type { Config } from "prettier";

const config: Config = {
    arrowParens: "always",
    bracketSpacing: true,
    semi: true,
    useTabs: false,
    trailingComma: "es5",
    jsxSingleQuote: true,
    singleQuote: true,
    tabWidth: 2,
    endOfLine: "lf",
    plugins: [
        "prettier-plugin-tailwindcss",
        "@ianvs/prettier-plugin-sort-imports",
    ],
    importOrder: [
        "^react$",
        "^next",
        "<THIRD_PARTY_MODULES>",
        "^@/components/(.*)$",
        "^@/utils/(.*)$",
        "^[./]",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};

export default config;
