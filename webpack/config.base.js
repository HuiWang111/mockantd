const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
    entry: {
        main: path.join(process.cwd(), 'src/index.tsx')
    },
    output: {
        filename: 'mockantd.js',
        path: path.join(process.cwd(), 'dist'),
        publicPath: '/'
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            react: path.resolve(process.cwd(), 'node_modules/react/index.js')
        }
    },
    plugins: [
        new HTMLPlugin({
            filename: path.join(process.cwd(), 'dist/index.html'),
            template: path.resolve(process.cwd(), 'src/index.html')
        })
    ],
    module:{
        rules:[
            {
                test:/\.ts|tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: 'antd',
                                libraryDirectory: 'lib',
                                style: true,
                            })
                        ]
                    }),
                    compilerOptions: {
                        module: 'es2015'
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader",
                }, {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: ['url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    { loader: 'file-loader' }
                ]
            }
        ]
    }
  }