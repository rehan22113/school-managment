const express = require("express");
const router = express.Router();
const refreshTokenController = require("../../controllers/refreshTokenController");
const reqRateLimit = require("../../middleware/reqRateLimiter");

router.get("/", reqRateLimit(1, 1), refreshTokenController.handleRefreshToken);

module.exports = router;
