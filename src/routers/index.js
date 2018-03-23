import Vue from 'vue';
import VueRouter from 'vue-router';
import {PName} from 'utils/config';
import auth from 'utils/auth';
import routes from './map/'; // 路由映射

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'hash|history|abstract',
  base: PName + '/',
  // linkActiveClass: 'router-link-active',
  // scrollBehavior: fn() {}
  routes
});

router.beforeEach((to, from, next) => {
  const LOGIN_PATH = '/login';
  const TO_PATH = to.path;
  // console.log(auth);

  if(!auth.isLoginIn()) {
    TO_PATH !== LOGIN_PATH ? next(LOGIN_PATH) : next();
  }
  else {
    next();
  }
});

export default router;
