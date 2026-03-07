const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

// Register User Route
router.post('/register', authController.registerUser);

// Login User Route
router.post('/login', authController.loginUser);

// Logout User Route
router.post('/logout', authController.logoutUser);

module.exports = router;