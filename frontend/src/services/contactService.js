import { api } from './api';

export const contactService = {
  submitContactForm: (data) => api.post('/api/contact', data),
  submitVolunteerForm: (data) => api.post('/api/contact/volunteer', data),
};
