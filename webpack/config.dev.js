const merge = require('webpack-merge');
const common = require('./config.base.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(process.cwd(), 'build'),
    publicPath: 'http://localhost:8000/',
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    quiet: true,
    progress: true,
    historyApiFallback: true,
    inline: true,
    host: '0.0.0.0',
    port: 8000
  }
});
