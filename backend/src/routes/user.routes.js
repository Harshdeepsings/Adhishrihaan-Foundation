const express = require('express');
const router = express.Router();
const { getUsers, getUserById, updateUser, deleteUser, getMe } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const adminMiddleware = require('../middlewares/admin.middleware');
const validate = require('../middlewares/validate.middleware');
const { updateUserSchema } = require('../validations/user.validation');

router.get('/me', authMiddleware, getMe);
router.get('/', authMiddleware, adminMiddleware, getUsers);
router.get('/:id', authMiddleware, adminMiddleware, getUserById);
router.put('/:id', authMiddleware, validate(updateUserSchema), updateUser);
router.delete('/:id', authMiddleware, adminMiddleware, deleteUser);

module.exports = router;
