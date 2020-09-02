import api from '../api';
import { v3 as noramalizePagination } from '../pagination';
import noramalizeCache from '../cache';

// v3 fetcher
export default async (url, params, normalize = (data) => data) => {
  try {
    const { data, headers } = await api.get(`/projects/api/v3/${url}.json`, params);
    return {
      data: normalize(data),
      paginator: noramalizePagination(data.meta.page),
      cache: noramalizeCache(headers),
    };
  } catch (err) {
    throw new Error(err);
  }
};
