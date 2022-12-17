<script setup>
import Card from "../../UI/Card.vue";
import Button from "../../UI/Button.vue";
</script>

<template>
  <Card>
    <div class="item-container">
      <div class="left">
        <div class="title">
          <slot name="title">
            <h1>Project title</h1>
          </slot>
        </div>
        <div class="description">
          <slot name="description">
            <p>
              Application built to help you learn the language in a natural way,
              using known words dictionary and your own materials.
              <strong
                >Placeholders: title, description, iconName, buttonText</strong
              >
            </p>
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
      <div class="right">
        <div class="technologies">
          <slot name="technologies">
            <p>techbar</p>
          </slot>
        </div>
      </div>
    </div>
  </Card>
</template>

<script></script>

<style scoped>
.item-container {
  min-height: 40vh;
  padding: 0 0 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 20px;
}
.left,
.right {
  width: 50%;

  /* create rounded corners */
}
.right {
  width: 100%;
  border-radius: 0 10px 10px 0;
  background-image: url("../../assets/mockup.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
}

.left {
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
}
</style>
