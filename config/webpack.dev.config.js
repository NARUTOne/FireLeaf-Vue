/**
 * webpack dev config
 */

const webpack = require('webpack');
const merge = require('webpack-merge'); // 配置合并
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 配置html
const OpenBrowserPlugin = require('open-browser-webpack-plugin'); // 打开浏览器

const utils = require('./utils');
const PATHS = require('../script/PATHS');
const baseConfig = require('./webpack.base.config.js');
const port = process.argv.slice(2)[0] || 3001;
const pnamePath = PATHS.PName ? (PATHS.PName + '/').replace(/\/\//, '/') : '' ;

module.exports = merge.smart(baseConfig, {
	mode: 'development',
	cache: true,
	output: {
		filename: pnamePath +'static/js/[name].[hash:8].js'
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: PATHS.dev.cssSourceMap, usePostCSS: true })
  },
	devtool: '#cheap-module-eval-source-map',
	performance: {
		hints: false
	},
	plugins: [
		new webpack.NamedModulesPlugin(), // 开发阶段，热加载HMR 显示相对路径
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}), // 环境变量
		new OpenBrowserPlugin({
			url: `http://localhost:${port}/${pnamePath}`
		}),
		new webpack.HotModuleReplacementPlugin(), // 启用HMR
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'template.html',
			inject: true,
			favicon: utils.resolve('favicon.ico')
		})
	]
});

