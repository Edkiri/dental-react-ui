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

export async function getDentistAppointments({ token }) {
  const { data: response } = await axios.get(`${API_URL}/appointment/dentist`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.appointments;
}

export async function getAppointment({ appointmentId, token }) {
  const { data: response } = await axios.get(
    `${API_URL}/appointment/${appointmentId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data.appointment;
}

export async function updateAppointment({
  appointmentId,
  token,
  appointmentData,
}) {
  const { data: response } = await axios.put(
    `${API_URL}/appointment/${appointmentId}`,
    appointmentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data.appointment;
}

export async function cancelAppointment({
  appointmentId,
  token,
  appointmentData,
}) {
  const { data: response } = await axios.post(
    `${API_URL}/appointment/${appointmentId}/cancel`,
    appointmentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data.appointment;
}

export async function getAllAppointments({ token, query }) {
  const { data: response } = await axios.get(`${API_URL}/appointment`, {
    params: query,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

export async function confirmAppointment({
  token,
  appointmentId,
  ...confirmData
}) {
  const { data: response } = await axios.post(
    `${API_URL}/appointment/${appointmentId}/confirm`,
    confirmData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data.appointment;
}
