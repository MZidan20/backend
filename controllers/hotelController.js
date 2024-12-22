exports.getHotels = (req, res) => {
    const hotels = [
        { id: 1, name: "Hotel A", location: "City A" },
        { id: 2, name: "Hotel B", location: "City B" },
    ];
    res.json(hotels);
};

exports.getHotelDetails = (req, res) => {
    const hotel = { id: req.params.id, name: "Hotel A", location: "City A", rooms: [
        { roomNumber: "101", type: "Deluxe", price: 100, isAvailable: true },
        { roomNumber: "102", type: "Standard", price: 80, isAvailable: false },
    ] };
    res.json(hotel);
};