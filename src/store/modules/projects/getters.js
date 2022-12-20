export default {
  getProjects(state) {
    return state.projects;
  },
  getProjectByName(state, payload) {
    console.log("getProjectByName: ", payload);
    return state.projects.find((project) => project.name === payload);
  },
  getCurrentProject(state) {
    return state.currentProject;
  },
};
