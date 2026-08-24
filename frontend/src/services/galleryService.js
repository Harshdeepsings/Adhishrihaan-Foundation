import { api } from './api';

export async function getGalleryImages() {
  return api.get('/api/gallery');
}
