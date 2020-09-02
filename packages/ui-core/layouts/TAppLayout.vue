<template>
  <div class="t-app-layout">
    <t-header/>
    <main class="t-app-body">
      <t-sidebar>
        <slot name="sidebar"/>
      </t-sidebar>
      <section class="content">
        <slot name="content"/>
      </section>
    </main>
  </div>
</template>
<script>
import THeader from '../components/THeader.vue';
import TSidebar from '../components/TSidebar.vue';
export default {
  components: { THeader, TSidebar },
};
</script>
<style scoped>
.t-app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
.t-app-body {
  display: flex;
  height: 100vh;
  flex: 1;
  overflow-y: auto;
}
</style>
