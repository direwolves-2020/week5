const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    /*entry: [
        './src/index.js'
    ],*/
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
};
