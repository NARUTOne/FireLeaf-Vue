/**
 * config paths
 */

'use strict';

module.exports = {
  dev: {
    assetsPublicPath: '/', // 资源path
    assetsSubDirectory: 'static', // 项目资源目录
    cssSourceMap: false
  },
  build: {
    buildPath: 'dist', // 打包文件path 
    assetsPublicPath: '/', // 资源path
    assetsSubDirectory: 'static', // 项目资源目录
    roductionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',
  },  
  PName: 'app', // 项目名称
  useEslint: true // eslint
};