import axios from 'axios';
import { API_URL } from '.';

export async function getAll() {
  return axios.get(`${API_URL}/service`);
}
