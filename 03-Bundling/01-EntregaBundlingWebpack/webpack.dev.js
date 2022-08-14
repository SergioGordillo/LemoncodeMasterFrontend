const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const resolve = require('path').resolve;
const dotEnv = require("dotenv-webpack");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    watchOptions: {
        ignored: /node_modules/
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    plugins: [
        new dotEnv({
            path: "./dev.env"
        })
    ],
    devServer: {
        port: "8080",
        hot: true
    },
    stats: "errors-only"

})