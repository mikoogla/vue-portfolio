<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="fullheight">
    <Navbar />
    <div class="main-container">
      <RouterView />
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.fullheight {
  min-height: 100vh;
  width: 100%;
}
.main-container {
  min-height: var(--container-height);
}
</style>
