const Hotel = require('../models/hotel');

exports.addHotel = async (req, res) => {
    try {
        const hotel = new Hotel(req.body);
        await hotel.save();
        res.status(201).json(hotel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(hotel);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteHotel = async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Hotel deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
