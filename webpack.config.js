const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/scripts/index.js',
        pageload: './src/scripts/pageload.js',
        menu: './src/scripts/menu.js',
        homepage: './src/scripts/homepage.js',
        contact: './src/scripts/contact.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            favicon: './src/images/favicon.ico',
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [{
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
};