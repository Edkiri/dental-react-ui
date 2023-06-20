import axios from 'axios';

export const API_URL = 'http://localhost:5000/api/v1';

export const LOGIN_URL = `${API_URL}/auth/login`;

async function login({ email, password }) {
  const { data } = await axios.post(LOGIN_URL, {
    email,
    password,
  });
  const user = { ...data.data.user, token: data.data.token };
  return user;
}

export const SIGNUP_URL = `${API_URL}/auth/signup`;

async function signup({ email, password }) {
  const { data } = await axios.post(SIGNUP_URL, {
    email,
    password,
  });
  return data;
}

export const UPDATE_PROFILE_URL = `${API_URL}/user/profile`;

async function updateProfile(token, profileData) {
  const { data } = await axios.post(UPDATE_PROFILE_URL, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const user = { ...data.data.user, token };
  return user;
}

export default { login, signup, updateProfile };
