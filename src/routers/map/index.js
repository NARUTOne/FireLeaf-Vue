/**
 * 不同功能模块的路由应代码分离
 */ 

export default [
  {
    path: '/home',
    alias: '/',
    component (resolve) {
      require(['@/pages/home/'], resolve);
    }
  },
  { // 404 置后
    path: '*',
    component (resolve) {
      require(['@/pages/notFound/'], resolve);
    }
  }
];
