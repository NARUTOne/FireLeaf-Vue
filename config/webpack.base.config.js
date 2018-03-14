'use strict';

/**
 * webpack base config
 */

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 
var eslintFF = require('eslint-friendly-formatter');

var utils = require('./utils');
const vueLoaderConfig = require('./vue-loader.conf');
var PATHS = require('../script/PATHS');
var pnamePath = PATHS.PName ? (PATHS.PName + '/').replace(/\/\//, '/') : '' ;

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [utils.resolve('src'), utils.resolve('test')],
  options: {
    formatter: eslintFF,
    emitWarning: !PATHS.dev.showEslintErrorsInOverlay
  }
});

var baseConfig = {
  target: 'web', 
  entry: {
		app: [path.resolve(__dirname, '../src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, PATHS.build.buildPath),
		publicPath: process.env.NODE_ENV === 'production'
      ? PATHS.build.assetsPublicPath
      : PATHS.dev.assetsPublicPath,  // 外部资源 url
		chunkFilename: pnamePath +'static/js/[id].[chunkhash:8].js' // chunk生成的文件名,按需加载
  },
  module: {
    rules: [
      ...(PATHS.useEslint ? [createLintingRule()] : []),
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [utils.resolve('src')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  resolve: {
		extensions: ['.js', '.vue', '.json'],
    alias: {
      static: path.resolve(__dirname, '../static'),
      '@': path.resolve(__dirname, '../src'),
      utils: path.resolve(__dirname, '../src/utils'),
      components: path.resolve(__dirname, '../src/components'),
    }
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']), // 清除 测试dist
    new webpack.NoEmitOnErrorsPlugin(), // 2.x以上；编译时出错，跳过，编译后保错
    new ExtractTextPlugin({ // 提取出css模块，到公共文件.css
			filename: pnamePath +'static/css/[name].[contenthash].css',
			disable: false,
			allChunks: true
		})
	],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};

module.exports = baseConfig;