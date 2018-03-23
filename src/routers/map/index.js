/**
 * 不同功能模块的路由应代码分离
 */ 
const App = () => import('@/pages/app/');
const Home = () => import('@/pages/home/');
const Login = () => import('@/pages/login/');
const NotFound = () => import('@/pages/notFound/');

export default [
  {
    path: '/',
    redirect: '/home',
    component: App,
    children: [
      // 地址为空时跳转home页面
       {
        path: '',
        redirect: '/home'
      },
      { 
        path: '/home', 
        component: Home
      },
      { 
        path: '/login', 
        component: Login
      },
      { // 404 置后
        path: '/404',
        component: NotFound
      },
      {
        path: '*',
        redirect: '/404'
      },
    ]
  }
  
];
