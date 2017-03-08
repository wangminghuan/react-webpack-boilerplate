var webpack = require('webpack');
var path = require('path');
var webpackDevServer = require('webpack-dev-server');
var glob = require('glob');

// var config = require('./webpack.config');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var arguments = process.argv.splice(2);

var config = {};
//此处修改想要查看的文加件名称
var filename = arguments[0]||"apage";

var entryfile = "./app/" + filename + '/index';
config.entry = [
    "webpack-dev-server/client?http://localhost:8000/",
    "webpack/hot/dev-server",
    entryfile
]

config.output = {
    path: path.resolve(__dirname, 'client/dist'),
    publicPath: '/',
    filename: 'main.js'
};

config.module = {
        loaders: [{
            test: /\.css$/,
            include: path.resolve(__dirname, 'app'),
            loaders: ["style-loader", "css-loader"]
        }, {
            test: /\.js[x]?$/,
            include: path.resolve(__dirname, 'app'),
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            include: path.resolve(__dirname, 'app'),
            loaders: ["style", "css", "sass"]
        }]
    },

    config.resolve = {
        extensions: ['', '.js', '.jsx'],
        alias: {
            //    "react":path.resolve(__dirname, 'client/lib/react.min.js'),
        }
    };

config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
        url: 'http://localhost:8000'
    }),
    new HtmlWebpackPlugin({
        title: filename,
        template: path.resolve(__dirname, 'server/view/index.ejs'),
        filename: 'index.html',
        //chunks这个参数告诉插件要引用entry里面的哪几个入口
        chunks: ['main'],
        //要把script插入到标签里
        inject: 'body'
    })
]

console.log("编译页面" + filename + "...");
var compiler = webpack(config);

var server = new webpackDevServer(compiler, {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: config.output.path,
    stats: {
        colors: true
    }
});

server.listen(8000, "localhost", function(err) {
    if (err) {
        console.log(err);
    }
    console.log("listening at localhost:8000...");
})
