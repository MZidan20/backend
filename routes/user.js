const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');  // Mengimpor controller

const router = express.Router();  // Membuat router baru

// Endpoint untuk register user baru
router.post('/register', registerUser);

// Endpoint untuk login user
router.post('/login', loginUser);

// Ekspor router agar bisa digunakan di app.js
module.exports = router;
