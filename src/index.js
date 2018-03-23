/**
 * SPA 单页应用 入口
 */

import Vue from 'vue';
import router from './routers/';
import store from './store/';
// import iView from 'iview';
import {Message} from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

// Vue.use(iView);

Vue.prototype.$Message = Message;

new Vue({
  el: '#app',
  router,
  store
});

