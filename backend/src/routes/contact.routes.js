const express = require('express');
const router = express.Router();
const { submitContact, submitVolunteer, getContacts, getContactById, markAsRead, deleteContact } = require('../controllers/contact.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const adminMiddleware = require('../middlewares/admin.middleware');
const validate = require('../middlewares/validate.middleware');
const { contactSchema, volunteerSchema } = require('../validations/contact.validation');

// Public endpoints — preserve backward compatibility with frontend
router.post('/', validate(contactSchema), submitContact);
router.post('/volunteer', validate(volunteerSchema), submitVolunteer);

// Admin endpoints
router.get('/', authMiddleware, adminMiddleware, getContacts);
router.get('/:id', authMiddleware, adminMiddleware, getContactById);
router.patch('/:id/read', authMiddleware, adminMiddleware, markAsRead);
router.delete('/:id', authMiddleware, adminMiddleware, deleteContact);

module.exports = router;
