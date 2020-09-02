import axios from 'axios';
import { stringify } from 'qs';
import key from './apikey';

const instance = axios.create({
  paramsSerializer(params) {
    return stringify(params, { arrayFormat: 'brackets' });
  },
});

instance.defaults.baseURL = 'https://samternent.teamwork.com'
instance.defaults.headers.common['Authorization'] = `Bearer ${key}`;

export default instance;
