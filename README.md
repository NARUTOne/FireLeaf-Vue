# vue-scffold

## Project setup

```npm
yarn install
```

### Compiles and hot-reloads for development

```npm
yarn serve
```

### Compiles and minifies for production

```npm
yarn build
```

### Lints and fixes files

```npm
yarn lint
```

## 目录

```tree
├── public                          // 静态页面

├── src                             // 主目录

    ├── assets                      // 静态资源

    ├── filters                     // 过滤

    ├── store                       // vuex 配置

    ├── style                       // 样式

    ├── utils                       // 工具方法(axios封装，全局方法等)

    ├── views                       // 页面

    ├── App.vue                     // 页面主入口

    ├── main.ts                     // 脚本主入口

    ├── router.ts                   // 路由

    ├── shime-global.d.ts           // 相关 全局或者插件 模块注入

    ├── shims-tsx.d.ts              // 相关 tsx 模块注入

    ├── shims-vue.d.ts              // Vue 模块注入, 使 TypeScript 支持 *.vue 后缀的文件

├── tests                           // 测试用例

├── .eslintrc.js                    // eslint 相关配置

├── postcss.config.js               // postcss 配置

├── .gitignore                      // git 忽略文件配置

├── babel.config.js                 // preset 记录

├── package.json                    // 依赖

├── README.md                       // 项目 readme

├── tsconfig.json                   // ts 配置

└── vue.config.js                   // webpack 配置
```

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
