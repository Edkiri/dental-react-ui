import { API_URL } from '@/utils/constants';
import axios from 'axios';

export async function requestAppointment({ token, appointmentData }) {
  return axios.post(`${API_URL}/appointment`, appointmentData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
