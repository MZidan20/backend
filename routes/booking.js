const express = require('express');
const router = express.Router();
const { createBooking, confirmBooking } = require('../controllers/bookingController');
const { authenticateToken, isAdmin } = require('../middleware/authMiddleware');

router.post('/', createBooking);
router.patch('/:id/confirm', confirmBooking);
router.post('/', authenticateToken, createBooking);
router.patch('/:id/confirm', authenticateToken, isAdmin, confirmBooking);

module.exports = router;
