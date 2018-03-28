import auth from 'utils/auth';
import {toLogin, toLogout} from '@/api/login';

const loginModule = {
  state: {
    user: null
  },
  getters: {
    getUser: state => {
      return state.user;
    }
  },
  mutations: {
    LOGIN_SUCCESS(state, payload) {
      // console.log(payload);
      const user = Object.assign({}, payload);
      state.user = user;
      // console.log(user);
      auth.register(user);
    },
    LOGIN_OUT(state) {
      // console.log(state);
      state.user = null;
      auth.destroy();
    }
  },
  actions: {
    toLogin({commit}, payload) {
      const user = Object.assign({}, payload);
      
      return new Promise((resolve, reject) => {
        toLogin(user).then(response => {
          // console.log(response);
          const {data, msg} = response.data;
          commit('LOGIN_SUCCESS', data);
          resolve(msg);
        }).catch(error => {
          reject(error);
        });
      });
    },
    toLogout({commit}) {
      return new Promise((resolve, reject) => {
        toLogout().then((response) => {
          const {msg} = response.data;
          commit('LOGIN_OUT');
          resolve(msg);
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
};

export default loginModule;