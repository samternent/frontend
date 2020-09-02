import fetcher from '@/demo/core/helpers/fetcher/v1';
import api from '@/demo/core/helpers/api';

const normalizeStatuses = ({ userStatuses }) => userStatuses;

export default (params) =>
  fetcher('statuses', params, normalizeStatuses);

export const updateStatus = (status) =>
  api.post('me/status.json', { userstatus: { status } });
