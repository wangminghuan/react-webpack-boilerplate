一个基于react+redux的使用webpack构建的脚手架项目，可用于单页面或多页面react开发。

开发流程，[详见](http://note.youdao.com/noteshare?id=cf3c6046902e6a29b2f4e82cc899b134)

##开始项目
```sh
$ git clone git@gitlab.58corp.com:wuxianfe/react-webpack-boilerplate.git
$ cd react-webpack-boilerplate
$ npm install
```

##启动多页面服务器
```sh
$ npm start
```
打开 [http://localhost:8080](http://localhost:8080)查看
多页面服务器使用express搭建，webpack-dev-server作为中间件，可在dev-server.js中查看相关代码。
进行单个页面开发时建议使用单页面服务器。

所有页面资源放在app文件夹下，每一个文件夹对应一个页面。文件夹下index.js为入口文件。

##启动单页面服务器
```sh
$ npm run start-page + [页面名称]
```
例如：查看touPiaoFinal页面，输入：
```sh
$ npm run start-page apage
```
若未配置页面名称，则默认apage
打开 [http://localhost:8000](http://localhost:8000)查看
单页面服务器使用webpack-dev-server，可在server.js中查看相关代码。

##生成静态资源文件

```sh
$ npm run build
```
静态资源不会将react源码及css打包，最终产出为一个js文件一个css文件。使用时需将react及css文件在标签中引入。


## 项目结构


```
.
├── App                      # 程序源文件
│   ├── common               # 公用文件
│   │     ├── compoent       # 公用组件
│   │     ├── util           # 公用小脚本工具
│   │     └── sass           # 公用sass
│   │
│   ├── demo                 # demo页面
│   │     ├── components     # 通用组件
│   │     ├── containers     # 容器组件(Redux Container Components)
│   │     ├── pages          # 表现组件，将 Component 组装成页面(Redux Presentational Components)
│   │     ├── fetch          # 模拟后台接口
│   │     ├── actions        # Redux Action
│   │     ├── reducers       # Redux Reducer
│   │     └── store          # Redux Store
│   │
│   ├── apage            	 # 页面资源文件夹
│   │     ├── components     # 通用组件
│   │     ├── containers     # 容器组件(Redux Container Components)
│   │     ├── pages          # 表现组件，将 Component 组装成页面(Redux Presentational Components)
│   │     ├── fetch          # 模拟后台接口
│   │     ├── actions        # Redux Action
│   │     ├── reducers       # Redux Reducer
│   │     └── store          # Redux Store
│   │
│   ├── otherpage            # 其他页面
│
├── client                   # 静态资源文件
│   ├── lib                  # 使用<script>独立引入的库
│   └── dist                 # 打包后的文件
│
├── server                   # 模板文件
│   └── view                 # 服务端模板
│
└── doc                      # 项目文档

```


## 技术栈

[React](http://reactjs.com/)
[Redux](http://cn.redux.js.org/)
[ReactNative](http://reactnative.cn/)
[ES6](http://es6.ruanyifeng.com/)
[Sass](http://www.w3cplus.com/sassguide/)
[webpack](https://webpack.github.io/)
