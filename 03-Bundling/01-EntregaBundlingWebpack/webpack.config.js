const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: { app: "./src/main.js", myStyles: "./src/styles.css" },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: './src/index.html', //Name of template in ./src
            scriptLoading: "blocking", // I want bundle to have it downloaded to start processing it
            hash: true
        }),
    ],
    stats: "errors-only"
}