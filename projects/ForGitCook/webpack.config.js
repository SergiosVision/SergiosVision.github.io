const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        main: ['./src/main.js', './src/sass/main.sass'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: "[name].min.js",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader',
                            fallback: 'vue-style-loader'
                        }),
                        sass: ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader?indentedSyntax=1&data=@import "./src/sass/_params"',
                            fallback: 'vue-style-loader'
                        })
                    },
                    postcss: [
                        require('autoprefixer')()
                    ]
                }
            },
            {
                test: /\.sass/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [require('autoprefixer')({
                                    browsers:['ie >= 8', 'last 5 version']
                                })]
                            }
                        },
                        'sass-loader']
                })
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].min.css',
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
