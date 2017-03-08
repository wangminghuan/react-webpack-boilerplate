var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

// 获取指定路径下的入口文件
function getEntries(globPath) {
    var files = glob.sync(globPath),
        entries = {};

    files.forEach(function(filepath) {
        // 取倒数第二层(view下面的文件夹)做包名
        console.log(filepath);
        var split = filepath.split('/');
        var name = split[split.length - 2];

        entries[name + '/' + name] = './' + filepath;
    });

    return entries;
}

var entries = getEntries('app/*/index.js');

module.exports = {
    devtool: 'cheap-source-map',
    entry: entries,
    output: {
        path: __dirname + '/client/dist',
        publicPath: '/',
        filename: './[name].js'
    },
    externals: {
        'react': 'React',
        'react-dom': 'react-dom'
    },
    plugins: [
        // new webpack.optimize.DedupePlugin(),
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("[name].css"),
        // new CopyWebpackPlugin([
        //   { from: './app/common/', to: 'common/' },
        //   { from: './app/**/index.html', to: '**/index.html' }
        // ]),
        new CleanWebpackPlugin([
            'client/dist',
            'build'
        ], {
            root: __dirname,
            verbose: true,
            dry: true,
            exclude: ['shared.js']
        })
    ]

};
