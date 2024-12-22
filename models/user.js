const mongoose = require('mongoose');

// Definisikan schema untuk model User
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,    // Field username wajib ada
        unique: true       // Username harus unik
    },
    password: {
        type: String,
        required: true     // Field password wajib ada
    },
    email: {
        type: String,
        required: true,    // Field email wajib ada
        unique: true       // Email harus unik
    }
});

// Ekspor model User berdasarkan schema
module.exports = mongoose.model('User', userSchema);
