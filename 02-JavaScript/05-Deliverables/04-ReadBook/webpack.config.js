const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ["./main.js"],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: 'index.html', //Name of template in ./src
            scriptLoading: "blocking", // I want bundle to have it downloaded to start processing it
            hash: true
        }),
    ]
}
