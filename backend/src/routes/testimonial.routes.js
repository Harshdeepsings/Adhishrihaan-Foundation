const express = require('express');
const router = express.Router();
const { getTestimonials, getTestimonialById, createTestimonial, updateTestimonial, deleteTestimonial } = require('../controllers/testimonial.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const adminMiddleware = require('../middlewares/admin.middleware');
const validate = require('../middlewares/validate.middleware');
const { createTestimonialSchema, updateTestimonialSchema } = require('../validations/testimonial.validation');

router.get('/', getTestimonials);
router.get('/:id', getTestimonialById);
router.post('/', authMiddleware, adminMiddleware, validate(createTestimonialSchema), createTestimonial);
router.put('/:id', authMiddleware, adminMiddleware, validate(updateTestimonialSchema), updateTestimonial);
router.delete('/:id', authMiddleware, adminMiddleware, deleteTestimonial);

module.exports = router;
