import fetcher from '@teamwork/js-core/fetcher/v1';

const normalizeProjects = (data) => {
  const projects = data.projects;

  if (!projects) {
    return null;
  }

  return projects.map(({ id, description, name }) => ({
    id,
    description,
    name,
  }));
};

export default (params) =>
  fetcher('projects', params, normalizeProjects);

