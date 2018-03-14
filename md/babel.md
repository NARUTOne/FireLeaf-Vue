# babel
> Babel 是一个 JavaScript 编译器, 进行语法转换，可按需加载插件。

[babel 中文](https://babeljs.cn/)
[Babel 入门教程](http://www.ruanyifeng.com/blog/2016/01/babel.html)

## 开始

```sh
$ npm i babel-loader babel-core --save-dev
```

- babel-loader: 这个包允许使用babel和webpack来转换JavaScript文件。
- babel-core: 如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块。

```sh
$ npm install babel-preset-env babel-preset-stage-3 --save-dev
```

- babel-preset-env: babel常用的转义器：相当于 es2015 ，es2016 ，es2017 及最新版本。
- stage-x: 
  - Stage 0 - 稻草人: 只是一个想法，可能是 babel 插件。
  - Stage 1 - 提案: 初步尝试。
  - Stage 2 - 初稿: 完成初步规范。
  - Stage 3 - 候选: 完成规范和浏览器初步实现。
  - Stage 4 - 完成: 将被添加到下一年度发布。

```sh
$ npm install babel-plugin-transform-runtime --save-dev
```

- babel-plugin-transform-runtime: 类babel-polyfill, 按需polyfill

## .babelrc 配置

```
{
  "presets": [
  	["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-3"
  ],
  "plugins": [
    "transform-runtime"
  ]
}
```
