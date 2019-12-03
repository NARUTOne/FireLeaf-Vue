import Vue from "vue";
import VueRouter, { Route } from "vue-router";
import { Store } from 'vuex';

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
    $store: Store<any>;
    $Message: any;
    $Modal: any;
    $Loading: any;
  }
}