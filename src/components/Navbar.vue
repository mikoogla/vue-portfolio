<template>
  <div class="navbar-container">
    <div class="logo">Mikoogla</div>
    <div class="navigation">
      <RouterLink class="mobile-off navtext" to="/">Home</RouterLink>
      <RouterLink class="mobile-off navtext" to="/contact">Contact</RouterLink>
      <div @click="languageChange" class="language mobile-off navtext">
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
.navtext {
  font-size: var(--size-font-medium);
}
.navbar-container {
  max-height: var(--size-navbar-height);
  padding: 13px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-accent-2);
}

.logo {
  font-size: 1.5rem;
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

@media (max-width: 300px) {
  .logo {
    display: none;
  }
  .navbar-container {
    padding: 10px 20px;
  }
}
</style>
