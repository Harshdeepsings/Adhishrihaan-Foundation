const express = require('express');
const router = express.Router();
const { getGalleryItems, getGalleryById, createGalleryItem, updateGalleryItem, deleteGalleryItem } = require('../controllers/gallery.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const adminMiddleware = require('../middlewares/admin.middleware');
const validate = require('../middlewares/validate.middleware');
const { createGallerySchema, updateGallerySchema } = require('../validations/gallery.validation');

router.get('/', getGalleryItems);
router.get('/:id', getGalleryById);
router.post('/', authMiddleware, adminMiddleware, validate(createGallerySchema), createGalleryItem);
router.put('/:id', authMiddleware, adminMiddleware, validate(updateGallerySchema), updateGalleryItem);
router.delete('/:id', authMiddleware, adminMiddleware, deleteGalleryItem);

module.exports = router;
