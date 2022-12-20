<script setup>
import Card from "../../UI/Card.vue";
import Button from "../../UI/Button.vue";
import { mapActions } from "vuex";
import TechBar from "./techbar/TechBar.vue";
</script>

<template>
  <Card :style="{ width: '100%' }" class="interaction">
    <div class="item-container">
      <div class="left">
        <div class="title">
          <h2>
            {{ project.title }}
          </h2>
        </div>
        <div class="description">
          {{ project.description }}
        </div>
        <div class="button-container">
          <Button @click="goToProject">
            <template #icon>
              <span class="material-symbols-outlined"> tips_and_updates </span>
            </template>
            <template #text> {{ buttonText }} </template>
          </Button>
        </div>
      </div>
      <div
        class="right"
        :style="{ backgroundImage: `url(&quot;${project.background}&quot;)` }"
      >
        <div class="technologies">
          <TechBar :technologies="project.techStack" />
        </div>
      </div>
      <div class="mobile-button">
        <Button class="button-styling-mobile" @click="goToProject">
          <template #icon>
            <span class="material-symbols-outlined">
              <slot name="iconName"> tips_and_updates </slot></span
            >
          </template>
          <template #text>
            <slot name="buttonText"> {{ buttonText }} </slot>
          </template>
        </Button>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
    buttonText: {
      type: String,
      default: "More Info",
    },
  },
  methods: {
    goToProject() {
      this.setCurrentProject(this.project).then(() => {
        this.$router.push("/project/" + this.project.name);
      });
    },
    ...mapActions(["setCurrentProject"]),
  },
  components: { TechBar },
};
</script>

<style scoped>
.interaction:hover {
  transform: scale(1.01);
  transition: 0.3s;
}

.item-container {
  height: 100%;
  font-size: var(--size-font-medium);
  min-height: 40vh;
  padding: 0 0 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.right {
  width: 100%;
  border-radius: 0 10px 10px 0;
  /* background-image: url("../../assets/mockup.jpg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
}

.left {
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  gap: 20px;
}
.technologies {
  padding: 20px;
  border-radius: 0 10px 10px 0;
  height: 100%;
  background-color: var(--color-background-layout);
  backdrop-filter: blur(5px);
}

.mobile-button {
  display: none;
}
@media (max-width: 768px) {
  .item-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0;
  }
  .left {
    width: calc(100% - 40px);
    padding: 20px;
  }

  .right {
    flex-direction: row;
    justify-content: end;
    align-items: end;
    border-radius: 0 0 10px 10px;
  }
  .technologies {
    border-radius: 0 0 10px 10px;
    width: 100%;
    height: var(--size-overlay-height);
    background-color: var(--color-background-layout);
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .description,
  .title {
    max-width: none;
  }
  .button-container {
    display: none;
  }
  .mobile-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 10px 10px;
    padding: 20px 0;
  }
  .button-styling-mobile {
    width: 80%;
    justify-content: center;
  }
}
@media (max-width: 300px) {
  .technologies {
    display: none;
  }
}
</style>
