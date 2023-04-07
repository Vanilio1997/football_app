const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    entry:{myAppName: path.resolve(__dirname, './src/index.tsx')},
    output: {
        path: path.resolve(__dirname , './dist'),
        filename: '[name].[contenthash].js',
    },
    module:{
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node-modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: 'style-loader'
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: [ '*' , '.js' , '.jsx' , '.ts' , '.tsx' ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Footbal stats'
        }),
        new ESLintPlugin({
            extensions: ['.js', '.ts', '.jsx', '.tsx'],
        }),
        new MiniCssExtractPlugin({
            filename : '[name].[hash].css',
        })
    ],
};
