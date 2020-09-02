<template>
  <t-app-layout>
    <template v-slot:sidebar>
      <t-project-list
        v-if="projects"
        @selected="project = $event"
        v-bind="{ projects: projects.data }"/>
    </template>
    <template v-slot:content>
      <t-task-list
        v-if="project && tasks && tasks[project]"
        v-bind="{ tasks: tasks[project].data }"/>
      <div v-else>No Project Selected</div>
    </template>
  </t-app-layout>
</template>

<script>
import { TAppLayout } from '@teamwork/ui-core';
import { TProjectList, TTaskList } from '@teamwork/ui-core/projects';
import { projects, tasksByProjectId } from '@teamwork/js-api';

export default {
  name: 'TeamworkUI',
  components: { TAppLayout, TProjectList, TTaskList },
  data: () => ({
    project: null,
    projects: null,
    tasks: null,
  }),
  computed: {
    activeProject: (vm) =>
      vm.project && vm.projects.data.length ? vm.projects.data.find(({ id }) => id === vm.project.id) : vm.project,
  },
  async mounted() {
    this.projects = await projects();
  },
  watch: {
    async project() {
      this.tasks = {
        ...this.tasks,
        [this.project]: await tasksByProjectId({ id: this.project }),
      };
    },
  },
}
</script>
<style>
html, body {
  margin: 0; padding: 0;
  overflow-y: hidden;
}
</style>
