import axios from 'axios';

import { API_URL } from '@/utils/constants';

export async function getAll() {
  return axios.get(`${API_URL}/service`);
}
