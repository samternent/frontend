<template>
  <section class="sidebar">
    <slot/>
  </section>
</template>
<style scoped>
.sidebar {
  width: 300px;
  background-color: #f5f6f7;
  position: sticky;
  top: 0;
}
</style>
