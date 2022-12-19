<template>
  <div class="card-container">
    <slot><div class="default">Default card placeholder</div></slot>
  </div>
</template>

<script></script>

<style scoped>
.card-container {
  border-radius: 10px;
  border: 0px solid var(--color-accent-1);
  box-shadow: var(--size-box-shadow);
  backdrop-filter: brightness(0.5);
}
.default {
  padding: 20px;
}
</style>
