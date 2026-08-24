const { z } = require('zod');

const createGallerySchema = z.object({
  title: z.string().trim().optional(),
  imageUrl: z.string().url('Image URL is required'),
  caption: z.string().trim().optional(),
  category: z.string().trim().optional(),
  order: z.number().int().min(0).optional(),
});

const updateGallerySchema = createGallerySchema.partial();

module.exports = { createGallerySchema, updateGallerySchema };
