const { z } = require('zod');

const createTestimonialSchema = z.object({
  name: z.string().trim().min(2, 'Name is required'),
  role: z.string().trim().optional(),
  quote: z.string().min(10, 'Quote must be at least 10 characters'),
  image: z.string().url().optional(),
  isActive: z.boolean().optional(),
  order: z.number().int().min(0).optional(),
});

const updateTestimonialSchema = createTestimonialSchema.partial();

module.exports = { createTestimonialSchema, updateTestimonialSchema };
