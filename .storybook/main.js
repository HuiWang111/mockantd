const path = require('path');

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
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.ts$/,
            use: [
                { loader: require.resolve('ts-loader') }
            ]
        });

        config.resolve.extensions.push('.ts');

        config.module.rules.push({
            test: /\.less$/,
            loaders: [
                'style-loader',
                'css-loader',
                {
                    loader: "less-loader",
                    options: {
                        javascriptEnabled: true
                    }
                }
            ],
            include: [path.resolve(__dirname, '../src'), /[\\/]node_modules[\\/].*antd/],
        });
    
        return config;
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