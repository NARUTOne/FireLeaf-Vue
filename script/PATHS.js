/**
 * config paths
 */

'use strict';

const path = require('path');

module.exports = {
  dev: {
    assetsPublicPath: '/', // 资源path
    assetsSubDirectory: 'static', // 项目资源目录
    cssSourceMap: false,
    devtool: 'eval-source-map'
  },
  build: {
    buildPath: path.resolve(__dirname, '../dist'), // 打包文件path 
    assetsPublicPath: '/', // 资源path
    assetsSubDirectory: 'static', // 项目资源目录
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
  },  
  PName: 'app', // 项目名称
  useEslint: true // eslint
};