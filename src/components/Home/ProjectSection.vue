<script setup>
import Button from "../../UI/Button.vue";
import Card from "../../UI/Card.vue";
import ProjectItem from "./ProjectItem.vue";
import mockup2 from "../../assets/mockup2.png";
import mockup3 from "../../assets/mockup3.jpg";
</script>

<template>
  <div class="home-container">
    <h1>MY PROJECTS</h1>
    <div class="cards-container">
      <ProjectItem :background-url="mockup2">
        <template #title> Quizx - Quiz App </template>
        <template #description>
          Project where you can learn by solving single-choice questions.
        </template>
        <template #iconName> tips_and_updates </template>
        <template #buttonText> More Info </template>
        <template #technologies>
          <p>techbar</p>
        </template>
      </ProjectItem>

      <ProjectItem :background-url="mockup3">
        <template #title> Learning Languages App </template>
        <template #description> Languages learned only with practice </template>
        <template #iconName> tips_and_updates </template>
        <template #buttonText> More Info </template>
        <template #technologies>
          <p>techbar</p>
        </template>
      </ProjectItem>
      <ProjectItem>
        <template #title> Some other app </template>
        <template #description> Languages learned only with practice </template>
        <template #iconName> tips_and_updates </template>
        <template #buttonText> More Info </template>
        <template #technologies>
          <p>techbar</p>
        </template>
      </ProjectItem>
      <ProjectItem :background-url="mockup2">
        <template #title> Quizx - Quiz App </template>
        <template #description>
          Project where you can learn by solving single-choice questions.
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr;
  grid-gap: 20px;
  padding: 20px;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap; */
}

@media (max-width: 1300px) {
  .cards-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
s
