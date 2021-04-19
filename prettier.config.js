module.exports = {
    ...require('@spothero/prettier-config'),
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
        {
            files: '*.scss',
            options: {
                singleQuote: false,
            },
        },
        {
            files: ['.babelrc', '.eslintrc', '.postcssrc'],
            options: {
                parser: 'json',
            },
        },
        {
            files: ['js', 'jsx'],
            options: {
                singleQuote: true,
                tabWidht: 2,
                useTabs: false,
                jsxSingleQuote: true,
                semi: false,
                endOfLine: 'lf',
            },
        },
    ],
};
