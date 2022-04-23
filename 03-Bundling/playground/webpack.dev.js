const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportLocalsConvention: "camelCase",
                                localIdentName: "[path][name]__[local]--[hash:base64:5]"
                            }
                        },
                    },
                    "sass-loader"],
            },
        ]
    },
    devtool: "eval-source-map",
    devServer: {
        port: "8081",
        hot: true,
    },
    stats: "errors-only",
    plugins: [
        new Dotenv({
            path: "./dev.env",
        })
    ]
});