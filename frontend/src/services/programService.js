import { api } from './api';

export async function getPrograms() {
  return api.get('/api/programs');
}

export async function getProgramById(id) {
  return api.get(`/api/programs/${id}`);
}
