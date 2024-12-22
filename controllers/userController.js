const bcrypt = require('bcrypt');        // Mengimpor bcrypt untuk enkripsi password
const jwt = require('jsonwebtoken');     // Mengimpor jsonwebtoken untuk membuat token
const User = require('../models/user');  // Mengimpor model User

// Fungsi untuk register (daftar) pengguna baru
exports.registerUser = async (req, res) => {
    const { username, password, email } = req.body;

    // Validasi input (cek apakah semua field ada)
    if (!username || !password || !email) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Cek apakah username sudah terdaftar di database
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Enkripsi password sebelum menyimpannya di database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Buat instance user baru
        const newUser = new User({ username, password: hashedPassword, email });

        // Simpan user baru ke database
        await newUser.save();

        // Kirim respons sukses
        res.status(201).json({ message: 'User registered successfully', data: { username, email } });
    } catch (err) {
        // Tangani error jika terjadi
        res.status(500).json({ message: err.message });
    }
};

// Fungsi untuk login pengguna
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Validasi input (cek apakah username dan password ada)
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Cari user berdasarkan username di database
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Cek apakah password yang dimasukkan cocok dengan yang ada di database
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Buat token JWT yang berisi id dan username user
        const token = jwt.sign({ userId: user._id, username: user.username }, 'SECRET_KEY', { expiresIn: '1h' });

        // Kirimkan token dan respons sukses
        res.json({ message: 'Login successful', token });
    } catch (err) {
        // Tangani error jika terjadi
        res.status(500).json({ message: err.message });
    }
};
