const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    entry: { app: "./main.js" },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
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
                use: [MiniCssExtractPlugin.loader, { loader: "css-loader" }]
            },
            {
                test: /\.(png|jpg)$/,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: ["html-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: './index.html', //Name of template in ./src
            scriptLoading: "blocking", // I want bundle to have it downloaded to start processing it
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin()
    ],
    stats: "errors-only"
}