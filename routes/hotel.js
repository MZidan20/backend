const express = require('express');
const router = express.Router();
const { getHotels, getHotelDetails } = require('../controllers/hotelController');

router.get('/', getHotels);
router.get('/:id', getHotelDetails);

module.exports = router;