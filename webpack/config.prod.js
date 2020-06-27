const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./config.base.js');
const os = require('os');

module.exports = merge(common, {
  entry: {
    main: path.join(process.cwd(), 'src/index.tsx'),
    vendor: ['react', 'react-dom']
  },
  mode: 'production',
  output: {
    filename: 'mockantd.min.js',
    path: path.join(process.cwd(), 'build'),
    publicPath: '/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: os.cpus().length,
        cache: true,
        sourceMap: true,
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            collapse_vars: true,
            reduce_vars: true
          },
          output: {
            beautify: false,
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin(),
    new HTMLPlugin({
      filename: path.join(process.cwd(), 'build/index.html'),
      template: path.resolve(process.cwd(), 'src/index.html')
    })
  ]
});