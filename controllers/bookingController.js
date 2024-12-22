exports.createBooking = (req, res) => {
    res.status(201).json({ message: "Booking created successfully", data: req.body });
};

exports.confirmBooking = (req, res) => {
    res.json({ message: "Booking confirmed successfully", bookingId: req.params.id });
};

exports.deleteBookingByUser = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Menghapus booking oleh admin
exports.deleteBookingByAdmin = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};