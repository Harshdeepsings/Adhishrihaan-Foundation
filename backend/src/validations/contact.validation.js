const { z } = require('zod');

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name is required'),
  email: z.string().trim().email('Invalid email address'),
  message: z.string().min(5, 'Message is required'),
});

const volunteerSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required'),
  lastName: z.string().trim().min(1, 'Last name is required'),
  email: z.string().trim().email('Invalid email address'),
  phone: z.string().trim().min(7, 'Phone number is required'),
  interest: z.string().trim().min(1, 'Interest is required'),
  reason: z.string().min(5, 'Reason is required'),
});

module.exports = { contactSchema, volunteerSchema };
