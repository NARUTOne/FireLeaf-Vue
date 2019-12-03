import { Module } from 'vuex';
import {
  RootState,
  UserState,
  SAVE_USER
} from "../types";

const initPageState: UserState = {
  id: "",
  name: "",
  avatar: ""
}

const user: Module<UserState, RootState> = {
  state: initPageState,
  mutations: {
    [SAVE_USER](state, payload: UserState) {
      const {id, name, avatar} = payload;
      state.id = id;
      state.name = name;
      state.avatar = avatar;
    }
  },
  actions: {}
};

export default user;
