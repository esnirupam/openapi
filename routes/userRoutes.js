const express = require("express");
const {
    registerUser,
    loginUser,
    getUserProfile
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Route
router.get("/profile", authMiddleware, getUserProfile);

module.exports = router;
