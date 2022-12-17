<script setup>
import Button from "../../UI/Button.vue";
</script>

<template>
  <div class="home-container">
    <div class="section">
      <div class="title">
        <h1>OUTSPOKEN FRONT END DESIGN</h1>
      </div>

      <div class="button-container">
        <Button>
          <template #icon>
            <span class="material-symbols-outlined"> code </span>
          </template>
          <template #text>See My Work</template>
        </Button>
        <Button>
          <template #icon>
            <span class="material-symbols-outlined"> email </span>
          </template>
          <template #text>Contact Me</template>
        </Button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
h1 {
  max-width: 300px;
  text-align: left;
  font-weight: var(--weight-normal);
  font-size: var(--size-h1);
  overflow: hidden;
}
.title {
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}
.section {
  background-color: var(--color-background-layout);
  height: 100%;
  width: 40%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.button-container {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 50px 20px;
  gap: 20px;
}
.home-container {
  height: var(--container-height);
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  background-image: url("../../assets/background.png");
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

@media (max-width: 500px) {
  .button-container {
    max-width: none;
    padding-bottom: 80px;
  }
}
</style>
