import axios from 'axios';

import { API_URL } from '@/utils/constants';
const LOGIN_URL = `${API_URL}/auth/login`;

export async function login({ email, password }) {
  const { data: response } = await axios.post(LOGIN_URL, {
    email,
    password,
  });
  const user = { ...response.data.user, token: response.data.token };
  return user;
}

const SIGNUP_URL = `${API_URL}/auth/signup`;

export async function signup({ email, password }) {
  const { data } = await axios.post(SIGNUP_URL, {
    email,
    password,
  });
  return data;
}

const UPDATE_PROFILE_URL = `${API_URL}/user/profile`;

export async function updateProfile(token, profileData) {
  const { data } = await axios.post(UPDATE_PROFILE_URL, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const user = { ...data.data.user, token };
  return user;
}

export async function getDentits() {
  const { data: response } = await axios.get(`${API_URL}/user/dentists`);
  return response.data.dentists;
}

export async function getUsers({ token }) {
  const { data: response } = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { users } = response.data;
  const usersParsed = users.map((user) => {
    return {
      ...user,
      fullName: `${user.profile.firstName} ${user.profile.lastName}`,
    };
  });
  return usersParsed;
}
