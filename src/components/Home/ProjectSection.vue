<script setup>
import ProjectItem from "./ProjectItem.vue";
import { mapActions, mapGetters } from "vuex";
</script>

<template>
  <div class="home-container" ref="position">
    <h1>MY PROJECTS</h1>

    <div class="cards-container">
      <ProjectItem
        v-for="project in getProjects"
        :key="project.id"
        :project="project"
      >
      </ProjectItem>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      position: 0,
    };
  },
  components: {
    ProjectItem,
  },
  methods: {
    ...mapActions(["setProjectsPosition"]),
    setPosition() {
      this.setProjectsPosition(this.$refs.position.offsetTop || 0);
    },
  },
  computed: {
    ...mapGetters(["getProjects"]),
  },
  mounted() {
    this.setProjectsPosition(this.$refs.position.offsetTop || 0);
    // window.addEventListener("resize", this.setPosition);
  },
};
</script>

<style scoped>
h1 {
  text-align: left;
  font-weight: var(--weight-normal);
  font-size: var(--size-h1);
  overflow: hidden;
}
.home-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px 20px;
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;

  padding: 20px;
}

@media (max-width: 1300px) {
  .cards-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 3rem 0;
  }
}
</style>
