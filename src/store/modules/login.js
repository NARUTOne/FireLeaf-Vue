import auth from 'utils/auth';

const loginModule = {
  state: {
    user: {}
  },
  getters: {},
  mutations: {
    loginSuccess (state, payload) {
      const user = Object.assign({}, payload);
      state.user = user;
      auth.register(user);
    }
  },
  actions: {}
};

export default loginModule;