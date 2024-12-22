const express = require('express');
const hotelRoutes = require('./routes/hotel');
const userRoutes = require('./routes/user');
const bookingRoutes = require('./routes/booking');
const adminRoutes = require('./routes/admin');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/hotel', hotelRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));