<template>
  <div class="mobile-menu">
    <RouterLink to="/">
      <div>{{ text.navbar.home }}</div></RouterLink
    >
    <RouterLink to="/contact">
      <div>{{ text.navbar.contact }}</div></RouterLink
    >
    <div @click="switchLanguage" class="language">
      {{ text.navbar.languagePrompt }}
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "MobileMenu",
  computed: {
    ...mapGetters({
      text: "getTexts",
    }),
  },
  methods: {
    switchLanguage() {
      this.$store.dispatch("switchLanguage");
    },
  },
};
</script>
<style scoped>
.mobile-menu {
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-background-layout);
  backdrop-filter: blur(5px);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: end;
  font-size: var(--size-font-xl);
  gap: 20px;
}
.language {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
}
a.router-link-exact-active {
  color: var(--color-accent-2);
  /* underline */
  border-bottom: 1px solid var(--color-accent-2);
  transition: all 0.3s ease-in-out;
}
</style>
