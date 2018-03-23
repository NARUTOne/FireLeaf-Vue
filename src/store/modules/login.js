import auth from 'utils/auth';

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
    loginSuccess(state, payload) {
      // console.log(payload);
      const user = Object.assign({}, payload);
      state.user = user;
      auth.register(user);
    },
    loginOut(state) {
      console.log(state);
      state.user = {};
      auth.destroy();
    }
  },
  actions: {}
};

export default loginModule;