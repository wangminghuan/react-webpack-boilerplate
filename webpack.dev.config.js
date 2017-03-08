var webpack = require('webpack');
var path = require('path');
var glob = require('glob');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var config = {};

// 获取指定路径下的入口文件
function getEntries(globPath) {
    var files = glob.sync(globPath),
        entries = {};

    files.forEach(function(filepath) {
        // 取倒数第二层(view下面的文件夹)做包名
        console.log(filepath);
        var split = filepath.split('/');
        var name = split[split.length - 2];

        entries[name] = './' + filepath;
    });

    return entries;
}

var entries = getEntries('app/*/index.js');

config.entry = {};
config.output = {
    path: __dirname + '/client/dist',
    publicPath: '/',
    filename: '[name].js'
};
config.plugins = [
    // new CopyWebpackPlugin([
    //   { from: './app/common/', to: 'common/' }
    // ]),
    new webpack.HotModuleReplacementPlugin(),

    new ExtractTextPlugin("[name].css"),

    // new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
]

Object.keys(entries).forEach(function(name) {
    // 每个页面生成一个entry，如果需要HotUpdate，在这里修改entry
    config.entry[name] = entries[name];

    // 每个页面生成一个html
    var plugin = new HtmlWebpackPlugin({
        // 生成出来的html文件名
        filename: name + '.html',
        // 每个html的模版，这里多个页面使用同一个模版
        template: './server/view/index.ejs',
        // 自动将引用插入html
        inject: true,
        // 每个html引用的js模块，也可以在这里加上vendor等公用模块
        chunks: [name]
    });
    config.plugins.push(plugin);
})



module.exports = config;
