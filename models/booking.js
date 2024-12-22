const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
    roomNumber: { type: String, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Booking', BookingSchema);
