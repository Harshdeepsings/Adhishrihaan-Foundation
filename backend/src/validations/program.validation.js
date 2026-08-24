const { z } = require('zod');

const createProgramSchema = z.object({
  title: z.string().trim().min(2, 'Title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  image: z.string().url().optional(),
  category: z.string().trim().optional(),
  status: z.enum(['active', 'inactive', 'upcoming']).optional(),
  order: z.number().int().min(0).optional(),
});

const updateProgramSchema = createProgramSchema.partial();

module.exports = { createProgramSchema, updateProgramSchema };
