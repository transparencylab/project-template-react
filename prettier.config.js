export default {
    printWidth: 145,
    tabWidth: 4,
    singleQuote: true,
    jsxSingleQuote: false,
    bracketSameLine: true,
    plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
    tailwindFunctions: ['clsx'],
    importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};