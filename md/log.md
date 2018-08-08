# 更新日志 :bug:

> :fire: FireLeaf-vue-scaffold

## 0.0.5

`2018-08-08`

- 开发阶段支持 `express`开发支出热加载、热更新`webpack-hot-middleware` , `webpack-dev-middleware`
- 修复`xhr`，详情见[xhr doc](./xhr.md)

## 0.0.4

`2018-03-28`

- 添加主题配置 `utils/style/theme`, 参考 https://www.iviewui.com/docs/guide/theme
- 添加业务icon:  http://iconfont.cn
  - 添加 `FLIcon`组件，修改业务图标时，注意修改其下的less样式
  - 参考 [本地化定制icon组件](https://www.jianshu.com/p/e6daa62c56fd)

## 0.0.3 

`2018-03-26`

- 添加 `axios` 、 `mockjs` 
- 配置mockserver： [FireLeaf-Vue-Scaffold](https://easy-mock.com/project/5ab8d1653838ca14983dc0ee)

## 0.0.2 

`2018-03-23`

- 添加`vuex`, 配合内置的login
- 修改router配置方式，采用树形结构，添加根
- 添加登录验证

## 0.0.1

`2018-03-14`
> vue简易脚手架搭建（[搭建记录](./record.md)）

- 拥有类`vue-cli`的脚手架目录、配置，但进行了一些修改，更适合小白开发项目
- 默认支持 `less`, `sass`
- 后续将会计划支持 `iview`、`axios`、`mock`及`vuex`等，充实脚手架，即用即开发