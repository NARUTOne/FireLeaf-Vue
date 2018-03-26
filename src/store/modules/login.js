import auth from 'utils/auth';
import {toLogin, toLogout} from '@/api/login';

const loginModule = {
  state: {
    user: {}
  },
  getters: {
    getUser: state => {
      return state.user;
    }
  },
  mutations: {
    LOGIN_SUCCESS(state, payload) {
      // console.log(payload);
      const {data} = payload;
      const user = Object.assign({}, data);
      state.user = user;
      auth.register(user);
    },
    LOGIN_OUT(state) {
      console.log(state);
      state.user = {};
      auth.destroy();
    }
  },
  actions: {
    toLogin({commit}, payload) {
      const user = Object.assign({}, payload);

      return new Promise((resolve, reject) => {
        toLogin(user).then(response => {
          console.log(response);
          const data = response.data;
          commit('LOGIN_SUCCESS', data);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },
    toLogout({commit}) {
      return new Promise((resolve, reject) => {
        toLogout().then(() => {
          commit('LOGIN_OUT');
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
};

export default loginModule;