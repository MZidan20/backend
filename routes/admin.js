const express = require('express');
const { authenticateToken, isAdmin } = require('../middleware/authMiddleware');
const { addHotel, updateHotel, deleteHotel } = require('../controllers/adminController');

const router = express.Router();

router.post('/hotels', authenticateToken, isAdmin, addHotel);
router.patch('/hotels/:id', authenticateToken, isAdmin, updateHotel);
router.delete('/hotels/:id', authenticateToken, isAdmin, deleteHotel);

module.exports = router;
