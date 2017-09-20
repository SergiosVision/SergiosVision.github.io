const path = require('path');

module.exports = {
    entry: {
        app: ["./src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js',
        publicPath: 'assets'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 80,
        compress: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            }
        ]
    }
}