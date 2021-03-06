import { getToken } from 'utils/utils';
import axios from 'axios';
import { api } from 'constants/api';

const instance = axios.create({
  baseURL: api,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});
export default instance;
