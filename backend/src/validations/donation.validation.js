const { z } = require('zod');

const createDonationSchema = z.object({
  donorName: z.string().trim().min(2, 'Donor name is required'),
  email: z.string().trim().email('Invalid email address'),
  phone: z.string().trim().optional(),
  amount: z.number().positive('Amount must be positive'),
  currency: z.string().default('INR'),
  method: z.enum(['upi', 'bank_transfer', 'card', 'other']).optional(),
  transactionId: z.string().trim().optional(),
  message: z.string().trim().optional(),
});

const updateDonationSchema = z.object({
  status: z.enum(['pending', 'completed', 'failed', 'refunded']),
});

module.exports = { createDonationSchema, updateDonationSchema };
