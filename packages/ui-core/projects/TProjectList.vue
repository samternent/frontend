<template>
  <ul>
    <li
      v-for="project in projects"
      @click="$emit('selected', project.id)"
      :key="project.id">
      {{ project.name }}
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    projects: { type: Array, default: () => ([]) },
  },
}
</script>
