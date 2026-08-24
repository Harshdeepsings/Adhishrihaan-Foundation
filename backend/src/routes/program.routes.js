const express = require('express');
const router = express.Router();
const { getPrograms, getProgramById, createProgram, updateProgram, deleteProgram } = require('../controllers/program.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const adminMiddleware = require('../middlewares/admin.middleware');
const validate = require('../middlewares/validate.middleware');
const { createProgramSchema, updateProgramSchema } = require('../validations/program.validation');

router.get('/', getPrograms);
router.get('/:id', getProgramById);
router.post('/', authMiddleware, adminMiddleware, validate(createProgramSchema), createProgram);
router.put('/:id', authMiddleware, adminMiddleware, validate(updateProgramSchema), updateProgram);
router.delete('/:id', authMiddleware, adminMiddleware, deleteProgram);

module.exports = router;
