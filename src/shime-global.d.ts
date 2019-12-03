// 声明全局的 window ，不然使用 window.XX 时会报错
// declare var window: Window;
declare var document: Document;
declare var THREE: any;
declare module '*.png'
declare module '*.jpg'

// interface THREE extends Window {}

// 解决 .ts文件中引入.vue文件报错，需要和shims-vue.d.ts声明分开
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}

declare module "element-ui/lib/transitions/collapse-transition";
declare module "element-ui";
declare module "axhr";
declare module "flo-utils";
declare module "enquire-js";
