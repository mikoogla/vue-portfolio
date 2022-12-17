<template>
  <div class="card-container">
    <slot><div class="default">Default card placeholder</div></slot>
  </div>
</template>

<script></script>

<style scoped>
.card-container {
  border-radius: 10px;
  border: 1px solid var(--color-accent-1);
  box-shadow: var(--size-box-shadow);
}
.default {
  padding: 20px;
}
</style>
