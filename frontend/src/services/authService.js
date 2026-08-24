import { api } from './api';

export async function login(credentials) {
  return api.post('/api/auth/login', credentials);
}

export async function logout() {
  return api.post('/api/auth/logout');
}

export async function getCurrentUser() {
  return api.get('/api/users/me');
}
