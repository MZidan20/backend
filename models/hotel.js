const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: String,
    location: String,
    rooms: [
        {
            roomNumber: String,
            type: String,
            price: Number,
            isAvailable: Boolean,
        },
    ],
});

module.exports = mongoose.model('Hotel', hotelSchema);
