/**
 * 不同功能模块的路由应代码分离
 */ 

const Home = () => import('@/pages/home/');
const NotFound = () => import('@/pages/notFound/');

export default [
  {
    path: '/home',
    alias: '/',
    component: Home
  },
  { // 404 置后
    path: '*',
    component: NotFound
  }
];
