/**
 * SPA 单页应用 入口
 */

import Vue from 'vue';
import router from './routers/';
import App from '@/pages/app/';

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

