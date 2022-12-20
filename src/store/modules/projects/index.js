import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

import mockup2 from "../../../assets/mockup2.png";
import mockup3 from "../../../assets/mockup3.jpg";
import defaultmockup from "../../../assets/default.png";

export default {
  namespaced: false,
  state() {
    return {
      projects: [
        {
          id: 1,
          name: "Quizx",
          title: "Quizx - Quiz App",
          description:
            "Project where you can learn by solving single-choice questions.",
          techStack: ["Vue", "Vuex", "Vue Router", "Firebase", "Bootstrap"],
          siteLink: "https://quiz.mikoogla.me/",
          sourceCodeLink: "https://github.com/mikoogla/vue-quiz-project",
          background: mockup2,
        },
        {
          id: 2,
          name: "Learning",
          title: "Learning Languages App",
          description: "Languages learned only with practice",
          techStack: ["React", "Redux", "React Router", "Firebase"],
          siteLink: "https://language.mikoogla.me/",
          sourceCodeLink: "https://github.com/mikoogla/LearningLanguagesApp",
          background: mockup3,
        },
        {
          id: 3,
          name: "Some",
          title: "Some other app",
          description: "some description about this app",
          techStack: ["React", "Redux", "React Router", "Firebase"],
          siteLink: "https://mikoogla.me/",
          sourceCodeLink: "https://github.com/mikoogla",
          background: defaultmockup,
        },
        {
          id: 4,
          name: "Some",
          title: "Some other app",
          description: "some description about this app",
          techStack: ["React", "Redux", "React Router", "Firebase"],
          siteLink: "https://mikoogla.me/",
          sourceCodeLink: "https://github.com/mikoogla",
          background: defaultmockup,
        },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
