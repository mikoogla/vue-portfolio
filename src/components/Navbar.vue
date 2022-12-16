<template>
  <div class="navbar-container">
    <div class="logo">Mikoogla</div>
    <div class="navigation">
      <RouterLink class="mobile-off" to="/">Home</RouterLink>
      <RouterLink class="mobile-off" to="/contact">Contact</RouterLink>
      <div @click="languageChange" class="language mobile-off">
        ENG<span class="material-symbols-outlined"> translate </span>
      </div>
      <span @click="showMenu" class="material-symbols-outlined mobile-on">
        menu
      </span>
    </div>
  </div>
</template>

<script setup>
function showMenu() {
  alert("menu will be here");
}
function languageChange() {
  alert("changing Language");
}
</script>

<style scoped>
.navbar-container {
  max-height: 4rem;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-accent-2);
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
}
.navigation {
  width: 50%;
  max-width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.language {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.material-symbols-outlined,
.language {
  cursor: pointer;
}

@media (min-width: 768px) {
  .mobile-on {
    display: none;
  }
}

@media (max-width: 768px) {
  .mobile-off {
    display: none;
  }
  .navigation {
    justify-content: right;
  }
}
</style>
