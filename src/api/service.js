import axios from 'axios';

import { API_URL } from '@/utils/constants';

export async function getAllServices() {
  const { data: response } = await axios.get(`${API_URL}/service`);
  return response.data.services;
}
