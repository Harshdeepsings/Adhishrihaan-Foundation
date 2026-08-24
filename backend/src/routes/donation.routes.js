const express = require('express');
const router = express.Router();
const { createDonation, getDonations, getDonationById, updateDonationStatus, deleteDonation } = require('../controllers/donation.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const adminMiddleware = require('../middlewares/admin.middleware');
const validate = require('../middlewares/validate.middleware');
const { createDonationSchema, updateDonationSchema } = require('../validations/donation.validation');

router.post('/', validate(createDonationSchema), createDonation);
router.get('/', authMiddleware, adminMiddleware, getDonations);
router.get('/:id', authMiddleware, adminMiddleware, getDonationById);
router.patch('/:id/status', authMiddleware, adminMiddleware, validate(updateDonationSchema), updateDonationStatus);
router.delete('/:id', authMiddleware, adminMiddleware, deleteDonation);

module.exports = router;
