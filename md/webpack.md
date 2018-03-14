# webpack
> 介绍本脚手架webpack配置

:rocket: v.4.1.1

[webpack blog](https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2)

[Webpack 4 不完全迁移指北](https://github.com/dwqs/blog/issues/60) 


## 开始

```sh
$ npm i webpack --save-dev 
$ npm i webpack-cli -D
```

## 资源处理
> img、fonts、media

```sh
$ npm i url-loader file-loader --save-dev
```
[url-loader](https://www.npmjs.com/package/url-loader)
[file-loader](https://www.npmjs.com/package/file-loader)

## babel

[babel 编译配置](./babel.md)

## vue-loader

[vue-loader](https://vue-loader.vuejs.org/zh-cn/)

## 样式
 
```sh
$ npm i style-loader css-loader --save-dev
$ npm i less less-loader sass-loader node-sass --save-dev 
$ npm i vue-style-loader --save-dev
```

### 样式兼容

```sh
$ npm i autoprefixer postcss-loader --save-dev
```

## dev

```sh
$ npm i html-webpack-plugin --save-dev
$ npm i webpack-merge --save-dev
```
> `npm i html-webpack-plugin@webpack-contrib/html-webpack-plugin --save-dev` 用于`html-webpack-plugin`未更新支持webpack4.x
## 优化

```sh
$ npm i extract-text-webpack-plugin@next --save-dev
```
> extract-text-webpack-plugin@next 主要是此包，暂时未更新支持webpack4.x `2018-03-12`