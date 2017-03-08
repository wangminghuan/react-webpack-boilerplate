// webpack.config.js

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = process.env.NODE_ENV === 'production' ? require('./webpack.prod.config.js') : require('./webpack.dev.config.js');

config.module = {
   loaders:[
     {
         test: /\.css$/,
         include: path.resolve(__dirname, 'app'),
         loader: ExtractTextPlugin.extract("style-loader", "css-loader")
     },
     {
         test: /\.js[x]?$/,
         include: path.resolve(__dirname, 'app'),
         exclude: /node_modules/,
         loader: 'babel-loader' },
     {
       test: /\.scss$/,
       include: path.resolve(__dirname, 'app'),
       loader: ExtractTextPlugin.extract("style!css!sass")
     }
   ]
 },

 config.resolve = {
   extensions: ['', '.js', '.jsx'],
   alias: {
    //    "react":path.resolve(__dirname, 'client/lib/react.min.js'),
   }
 };

 module.exports = config;
