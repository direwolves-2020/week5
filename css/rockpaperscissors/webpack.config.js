const HtmlWebPackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './src/styles/app.css',
        './src/styles/style1.css',
        './src/js/objectmodel.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ],
    devtool: 'source-map'
};