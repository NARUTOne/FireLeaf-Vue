# Fire-Leaf-Vue-Scaffold
> 脚手架搭建记录 :pencil:

## 技术选型

 - webpack(4.1.1) : https://doc.webpack-china.org/
 - vue(2.5.16): https://cn.vuejs.org/index.html
 - vue-router(3.0.1): https://router.vuejs.org/zh-cn/
 - vuex: https://vuex.vuejs.org/zh-cn/installation.html
 - iview (默认): https://www.iviewui.com/docs/guide/start
 - axios: https://github.com/axios/axios
 - mockjs: http://mockjs.com/

## record process
> 简单记录下搭建过程

### 初始化 package.json

```
$ npm init
```
执行npm init 初始化项目，自定义命令，启动程序，自动部署

### 安装依赖

```
$ npm install webpack --save-dev
$ npm install vue vue-router --save

$ ...

```
- [webpack 配置](./webpack.md)
- [babel](./babel.md)
- [server](./server.md)
- [mockjs](./mock.md)

### 脚手架目录

```
|-- config                             // webpack、vue配置
|-- md                                 // 脚手架文档
|-- script                             // 项目构建, 环境path
|-- src                                // 项目源码
|   |-- components                     // 业务组件
|   |-- mock                           // 开发数据源
|   |-- pages                          // 业务界面
|       |-- app                        // 单页入口（布局）
|       |-- home                       // 默认首页
|       |-- notFound                   // 404页
|   |-- routers                        // 路由配置
|   |-- template                       // vue单页组件模板（简易）
|   |store
|       |-- index.js                   // 组装模块并导出 store 
|       |-- actions.js                 // 根级别的 action
|       |-- mutations.js               // 根级别的 mutation
|       |-- modules                    // 模块集
|   |-- utils                          // 公共集合（配置，样式，工具）
|       |-- style                      // 公共样式（less 变量）
|       |-- config                     // 项目业务配置
|       |-- tools                      // 工具方法
|   |-- index                          // 项目入口
|-- static                             // 项目静态文件
|-- .babelrc                           // babel配置
|-- .editorconfig                      // 定义代码格式
|-- .eslintrc                          // eslint代码规范
|-- .stylelintrc                       // stylelint样式规范
|-- package.json                       // 项目基本信息
|-- template.html                      // html 模板

```

### 规范

[eslint + stylelint](./codeStyle.md)

