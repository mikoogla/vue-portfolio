<script setup>
import Card from "../../UI/Card.vue";
import Button from "../../UI/Button.vue";
</script>

<template>
  <div class="item-container">
    <Card>
      <div class="left">
        <div class="title">
          <h1>Project title</h1>
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quos quas quidem nesciunt. Quisquam, quae. Quisquam
            voluptate, quod, quia, voluptates quae voluptatibus quibusdam
            voluptatum quos quas quidem nesciunt. Quisquam, quae.
          </p>
        </div>
        <div class="button-container">
          <Button>More info</Button>
        </div>
      </div>
      <div class="right">
        <div class="image-container">
          <img src="#" alt="project image" />
        </div>
        <div class="technologies">
          <p>Technologies used</p>
        </div>
      </div>
    </Card>
  </div>
</template>
