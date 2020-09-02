import api from '../api';
import { v1 as noramalizePagination } from '../pagination';
import noramalizeCache from '../cache';

// v1 fetcher
export default async (url, params, normalize = (data) => data) => {
  try {
    const { data, headers } = await api.get(`/${url}.json`, params);
    return {
      data: normalize(data),
      paginator: noramalizePagination(headers),
      cache: noramalizeCache(headers),
    };
  } catch (err) {
    throw new Error(err);
  }
};
