const express = require("express");
const { getAllAPIs, addAPI } = require("../controllers/apiController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getAllAPIs);
router.post("/", authMiddleware, addAPI);

module.exports = router;
