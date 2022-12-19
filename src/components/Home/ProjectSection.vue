<script setup>
import Button from "../../UI/Button.vue";
import Card from "../../UI/Card.vue";
import ProjectItem from "./ProjectItem.vue";
</script>

<template>
  <div class="home-container">
    <h1>MY PROJECTS</h1>
    <div class="cards-container">
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  </div>
</template>

<script></script>

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
}
</style>
s
