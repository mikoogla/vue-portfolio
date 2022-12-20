export default {
  setCurrentProject({ commit }, payload) {
    commit("setCurrentProject", payload);
  },
  switchLanguage({ commit }) {
    commit("switchLanguage");
  },
};
