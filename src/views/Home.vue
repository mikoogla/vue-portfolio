<script setup>
import AboutSection from "../components/Home/AboutSection.vue";
import ContactSection from "../components/Home/ContactSection.vue";
import HeroSection from "../components/Home/HeroSection.vue";
import ProjectSection from "../components/Home/ProjectSection.vue";
</script>

<template>
  <HeroSection />
  <AboutSection />
  <ProjectSection />
  <ContactSection />
</template>
<script>
export default {
  name: "Home",
  components: {
    AboutSection,
    ContactSection,
    HeroSection,
    ProjectSection,
  },
};
</script>

<style scoped></style>
