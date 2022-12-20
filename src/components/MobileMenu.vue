<template>
  <div class="mobile-menu">
    <RouterLink to="/"> <div>Home</div></RouterLink>
    <RouterLink to="/contact"> <div>Contact</div></RouterLink>
  </div>
</template>

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
  font-size: var(--size-font-xl);
  gap: 20px;
}
a.router-link-exact-active {
  color: var(--color-accent-2);
  /* underline */
  border-bottom: 1px solid var(--color-accent-2);
  transition: all 0.3s ease-in-out;
}
</style>
