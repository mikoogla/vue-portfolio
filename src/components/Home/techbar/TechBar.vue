<template>
  <div class="techbar-container">
    <TechBarItem
      v-for="technology in technologies"
      :key="Math.random()"
      :technology="technology"
    />
  </div>
</template>
<script>
import TechBarItem from "./TechBarItem.vue";

export default {
  props: {
    technologies: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    TechBarItem,
  },
};
</script>

<style scoped>
.techbar-container {
  max-width: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .techbar-container {
    flex-direction: row;
    width: 100%;
    max-width: none;
    justify-content: space-evenly;
    max-height: 3rem;
  }
}
</style>
