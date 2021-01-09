const path = require('path');

module.exports = ({ config }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader')
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');

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
};