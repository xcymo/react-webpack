const path = require("path");
module.exports = {
    entry: "./app/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "temp/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    devServer: {
        contentBase: './',
        host: "localhost",
        port: 4567,
        compress: true
    },
    mode: "development"
}