<script setup>
import Card from "../../UI/Card.vue";
import Button from "../../UI/Button.vue";
import defaultimage from "../../assets/defaultimage.png";
</script>

<template>
  <Card :style="{ width: '100%' }">
    <div class="item-container">
      <div class="left">
        <div class="title">
          <h2>
            <slot name="title"> Quizx - Quiz App </slot>
          </h2>
        </div>
        <div class="description">
          <slot name="description">
            Application built to help you learn the language in a natural way,
            using known words dictionary and your own materials.
            <strong
              >Placeholders: title, description, iconName, buttonText</strong
            >
          </slot>
        </div>
        <div class="button-container">
          <Button>
            <template #icon>
              <span class="material-symbols-outlined">
                <slot name="iconName"> tune </slot></span
              >
            </template>
            <template #text>
              <slot name="buttonText"> More Info </slot>
            </template>
          </Button>
        </div>
      </div>
      <div
        class="right"
        :style="{ backgroundImage: `url(&quot;${backgroundUrl}&quot;)` }"
      >
        <div class="technologies">
          <slot name="technologies">
            <p>techbar</p>
          </slot>
        </div>
      </div>
      <div class="mobile-button">
        <Button class="button-styling-mobile">
          <template #icon>
            <span class="material-symbols-outlined">
              <slot name="iconName"> tune </slot></span
            >
          </template>
          <template #text>
            <slot name="buttonText"> More Info </slot>
          </template>
        </Button>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  props: {
    backgroundUrl: {
      type: String,
      default: defaultimage,
    },
  },
  mounted() {
    console.log("url: " + this.backgroundUrl);
  },
};
</script>

<style scoped>
.item-container {
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
  padding: 0 20px;
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
</style>
