<script setup>
import TestLotOfContent from "../components/TestLotOfContent.vue";
</script>

<template>
  <div class="home-container">
    <div class="section">
      <h1>OUTSPOKEN FRONT END DESIGN</h1>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  font-size: var(--h1-font-size);
  font-weight: 700;
  text-align: left;
  max-width: 300px;
  padding-left: 20px;
}

.section {
  background-color: var(--color-background-layout);
  height: 100%;
  width: 40%;
  min-width: 500px;
  display: flex;
  justify-content: left;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.home-container {
  height: var(--container-height);
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  background-image: url("../assets/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (max-width: 768px) {
  .section {
    width: 100%;
    min-width: 0;
    overflow: hidden;
  }
}
</style>
