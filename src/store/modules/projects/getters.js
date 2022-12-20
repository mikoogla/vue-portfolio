export default {
  getProjects(state) {
    return state.projects;
  },
  getProjectByName(state) {
    return (name) => {
      return state.projects.find((project) => project.name === name) || {};
    };
  },
};
