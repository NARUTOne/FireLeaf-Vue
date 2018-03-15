'use strict';

const path = require('path');
const PATHS = require('../script/PATHS');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var pnamePath = PATHS.PName ? (PATHS.PName + '/').replace(/\/\//, '/') : '' ;

exports.resolve = function (dir) {
  return path.join(__dirname, '..', dir);
}; 

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? PATHS.build.assetsSubDirectory
    : PATHS.dev.assetsSubDirectory;

  return path.posix.join(pnamePath + assetsSubDirectory, _path);
};

exports.cssLoaders = function (options) {
  options = options || {};

  const cssLoader = {
    loader: 'css-loader', 
    options: {
      sourceMap: options.sourceMap
    }
  };

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader];

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      });
    } else {
      return ['vue-style-loader'].concat(loaders);
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass')
  };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = [];
  const loaders = exports.cssLoaders(options);

  for (const extension in loaders) {
    const loader = loaders[extension];
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    });
  }

  return output;
};