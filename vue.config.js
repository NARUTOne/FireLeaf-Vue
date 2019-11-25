/**
 * vue config
 * https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
 */
const config = require("./config/index");

const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  devServer: {
    port: config.dev.host || "8080",
    host: config.dev.domain || "localhost",
    proxy: config.dev.proxyTable
  },
  productionSourceMap: NODE_ENV === "development",
  configureWebpack: config => {
    if (NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
    } else {
      // 为开发环境修改配置...
      config.mode = "development";
    }

    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
        alias: {
          vue$: "vue/dist/vue.js",
          "@": path.resolve(__dirname, "./src"),
          "@c": path.resolve(__dirname, "./src/components"),
          utils: path.resolve(__dirname, "./src/utils"),
          assets: path.resolve(__dirname, "./src/assets"),
          store: path.resolve(__dirname, "./src/store")
        }
      }
    });
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
