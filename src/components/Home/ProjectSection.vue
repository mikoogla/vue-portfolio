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
        :background-url="project.background"
        :project-name="project.name"
      >
        <template #title> {{ project.title }}</template>
        <template #description>
          {{ project.description }}
        </template>
        <template #iconName> tips_and_updates </template>
        <template #buttonText> More Info </template>
        <template #technologies>
          <p>techbar</p>
        </template>
      </ProjectItem>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ProjectItem,
  },
  methods: {
    ...mapActions(["setProjectsPosition"]),
  },
  computed: {
    ...mapGetters(["getProjects"]),
  },
  mounted() {
    this.setProjectsPosition(this.$refs.position.offsetTop || 0);
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
