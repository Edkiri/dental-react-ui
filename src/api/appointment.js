import { API_URL } from '@/utils/constants';
import axios from 'axios';

export async function requestAppointment({ token, appointmentData }) {
  return axios.post(`${API_URL}/appointment`, appointmentData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getPatientAppointments({ token }) {
  const { data: response } = await axios.get(`${API_URL}/appointment/patient`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.appointments;
}

export async function getAppointment({ appointmentId, token }) {
  const { data: response } = await axios.get(`${API_URL}/appointment/${appointmentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.appointment;
}