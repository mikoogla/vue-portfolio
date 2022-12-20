import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

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
          background: "/src/assets/mockup2.png",
        },
        {
          id: 2,
          name: "Learning",
          title: "Learning Languages App",
          description: "Languages learned only with practice",
          techStack: ["React", "Redux", "React Router", "Firebase"],
          siteLink: "https://language.mikoogla.me/",
          sourceCodeLink: "https://github.com/mikoogla/LearningLanguagesApp",
          background: "/src/assets/mockup3.jpg",
        },
        {
          id: 3,
          name: "Some",
          title: "Some other app",
          description: "some description about this app",
          techStack: ["React", "Redux", "React Router", "Firebase"],
          siteLink: "https://mikoogla.me/",
          sourceCodeLink: "https://github.com/mikoogla",
          background: "/src/assets/default.png",
        },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
