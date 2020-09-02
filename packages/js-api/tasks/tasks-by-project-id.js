import fetcher from '@teamwork/js-core/fetcher/v1';
import normalize from './normalize';

const normalizeTasks = (data) => {
  const tasks = data['todo-items'];
  if (!tasks) {
    return null;
  }
  return tasks.map(normalize);
};

export default (params) =>
  fetcher(`projects/${params.id}/tasks`, params, normalizeTasks);
