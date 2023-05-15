const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");
const reqRateLimit = require("../../middleware/reqRateLimiter");

router.post("/", reqRateLimit(10, 60), authController.handleLogin);

module.exports = router;
