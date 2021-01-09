module.exports = {
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    stories: ['../src/stories/*.stories.tsx'],
    addons: [
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
            }
        }
    ]
};