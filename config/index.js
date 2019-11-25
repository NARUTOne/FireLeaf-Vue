/**
 * config paths
 */

"use strict";

const path = require("path");

module.exports = {
  dev: {
    assetsPublicPath: "/", // 资源path
    assetsSubDirectory: "static", // 项目资源目录
    cssSourceMap: false,
    devtool: "eval-source-map",
    domain: "dev.insight.100credit.cn",
    host: 3001,
    proxyTable: {
      "/test/**": {
        target: "http://192.168.1.7:18709", // 本地
        changeOrigin: true,
        pathRewrite: {}
      }
    } // 代理api
  },
  build: {
    buildPath: path.resolve(__dirname, "../dist"), // 打包文件path
    assetsPublicPath: "/", // 资源path
    assetsSubDirectory: "static", // 项目资源目录
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: "#source-map",
    domain: "insight.100credit.cn"
  },
  PName: "", // 项目名称
  useEslint: true // eslint
};
