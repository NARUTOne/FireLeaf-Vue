/**
 * SPA 单页应用 入口
 */

import Vue from 'vue';
import router from './routers/';
import App from '@/pages/app/';
// import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

// Vue.use(iView);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

