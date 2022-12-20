<script setup>
import Button from "../../UI/Button.vue";
import { mapGetters } from "vuex";
</script>

<template>
  <div class="home-container">
    <div class="section">
      <div class="title">
        <h1>OUTSPOKEN FRONT END DESIGN</h1>
      </div>

      <div class="button-container">
        <Button @click="scrollToProjects">
          <template #icon>
            <span class="material-symbols-outlined"> code </span>
          </template>
          <template #text>See My Work</template>
        </Button>
        <Button @click="scrollToContact">
          <template #icon>
            <span class="material-symbols-outlined"> email </span>
          </template>
          <template #text>Contact Me</template>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  components: {
    Button,
  },
  methods: {
    scrollToProjects() {
      window.scrollTo({
        top: this.getProjectsPosition,
        behavior: "smooth",
      });
    },
    scrollToContact() {
      window.scrollTo({
        top: this.getContactPosition,
        behavior: "smooth",
      });
    },
  },
  computed: {
    ...mapGetters([
      "getAboutPosition",
      "getContactPosition",
      "getProjectsPosition",
    ]),
  },
  unmounted() {
    window.removeEventListener("resize", this.setPosition);
  },
};
</script>

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
@media (max-height: 600px) and (min-width: 560px) {
  .section {
    flex-direction: row;
    width: auto;
  }
}

@media (max-width: 500px) {
  .button-container {
    max-width: none;
  }
}
@media only screen and (max-width: 500px) {
  .button-container {
    max-width: none;
    padding-bottom: 120px;
  }
}
</style>
