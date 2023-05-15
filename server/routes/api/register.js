const express = require("express");
const router = express.Router();
const registerController = require("../../controllers/registerController");
const reqRateLimit = require("../../middleware/reqRateLimiter");
const ROLES_LIST = require("../../config/rolesList");
const verifyJWT = require("../../middleware/verifyJWT");
const verifyRoles = require("../../middleware/verifyRoles");

router.post("/", [reqRateLimit(10, 60), verifyJWT, verifyRoles(ROLES_LIST.Admin)], registerController.handleNewUser);

module.exports = router;
