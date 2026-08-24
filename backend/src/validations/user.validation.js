const { z } = require('zod');

const updateUserSchema = z.object({
  name: z.string().trim().min(2).optional(),
  email: z.string().trim().email().optional(),
  avatar: z.string().url().optional(),
});

module.exports = { updateUserSchema };
