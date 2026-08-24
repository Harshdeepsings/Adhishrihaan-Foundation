import { api } from './api';

export const donationService = {
  processDonation: (data) => {
    return api.post('/api/donations', data);
  }
};
