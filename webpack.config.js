var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var environment = JSON.stringify(process.env.NODE_ENV);

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.ProvidePlugin({ React: 'react' })
    ],
    module: {     
        rules: [
            {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader?presets[]=es2015!ts-loader"
            },
            {
                test: /.(png|jpg|jpeg|svg|ttf|eot|woff|woff2)$/,
                include: /\/node_modules\//,
                loader: "file?name=[1].[ext]&regExp=node_modules/(.*)"
            },
            {
                test: /.(png|jpg|jpeg|svg|gif|ttf|eot|woff|woff2)$/,
                exclude: /\/node_modules\//,
                loader: "file?name=[path][name].[ext]"
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
};

