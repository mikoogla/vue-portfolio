import { projects as dictionaryPL, texts as txtPL } from "./dictionary-pl.js";
import { projects as dictionaryEN, texts as txtEN } from "./dictionary-en.js";

export default {
  setCurrentProject(state, payload) {
    state.currentProject = payload;
  },
  switchLanguage(state) {
    console.log("switchLanguage");
    if (state.language == "en") {
      state.projects = dictionaryPL;
      state.language = "pl";
      state.texts = txtPL;
    } else {
      state.projects = dictionaryEN;
      state.language = "en";
      state.texts = txtEN;
    }
  },
};
