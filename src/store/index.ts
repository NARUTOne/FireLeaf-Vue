import Vue from "vue";
import Vuex, {StoreOptions} from "vuex";
import {IMobile, RootState} from "./types";
import user from "./modules/user";

Vue.use(Vuex);

const initPageState: RootState = {
  mobile: false
};

const store: StoreOptions<RootState> = {
  strict: process.env.NODE_ENV !== "production",
  modules: {
    user
  },
  state: initPageState,
  mutations: {
    handleMobileChange (state, payload: IMobile) {
      state.mobile = payload.mobile;
    }
  },
  actions: {}
};

export default new Vuex.Store<RootState>(store);
