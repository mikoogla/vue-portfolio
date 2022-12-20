import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

export default {
  namespaced: false,
  state() {
    return {
      aboutPosition: 0,
      projectsPosition: 0,
      contactPosition: 0,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
