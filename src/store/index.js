import { createStore } from "vuex";

import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

import positionModule from "./modules/position/index.js";

const store = createStore({
  modules: {
    positionModule: positionModule,
  },
  state() {
    return {};
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});

export default store;
