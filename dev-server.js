// dev-server.js
var express = require('express');
var webpack = require('webpack');
var path = require('path');
var webpackConfig = require('./webpack.config');


var app = express();

// webpack编译器
var compiler = webpack(webpackConfig);

// webpack-dev-server中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
});
//中间件热加载
var hotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);
// 路由
app.get('/', function(req, res) {
    res.send('地址栏输入 localhost:8080/ + 你的页面文件夹名称 访问对应页面哦');
});
app.get('/:viewname?', function(req, res, next) {

    var viewname = req.params.viewname ?
        req.params.viewname + '.html' :
        'index.html';

    var filepath = path.join(compiler.outputPath, viewname);

    // 使用webpack提供的outputFileSystem
    compiler.outputFileSystem.readFile(filepath, function(err, result) {
        if (err) {
            // something error
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

var port = 8080;
module.exports = app.listen(port, function(err) {
    if (err) {
        // do something
        return;
    }

    console.log('Listening at http://localhost:' + port + '\n')
})
