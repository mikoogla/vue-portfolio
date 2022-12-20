import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

import { projects as dictionaryPL, texts as txtPL } from "./dictionary-pl.js";
import { projects as dictionaryEN, texts as txtEN } from "./dictionary-en.js";

export default {
  namespaced: false,
  state() {
    return {
      projects: dictionaryEN,
      texts: txtEN,
      language: "en",
      currentProject: {},
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
