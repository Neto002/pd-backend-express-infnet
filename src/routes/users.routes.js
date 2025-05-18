const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");
const { verifyToken } = require("../middlewares/auth.middleware");

router.route("/", verifyToken, usersController.getAllUsers);
router.post("/", usersController.createUser);

module.exports = router;
