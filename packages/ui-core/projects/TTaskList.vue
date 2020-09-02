<template>
  <ul>
    <li
      v-for="task in tasks"
      :key="task.id">
      {{ task.title }} - <strong>{{ task.assignee }}</strong>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    tasks: { type: Array, default: () => ([]) },
  },
}
</script>
