const express = require("express");
const AuthController = require("../controllers/authController");

const AuthRouter = express.Router();
AuthRouter.route("/").post(AuthController.registerUser);
// QARouter.route("/:id");

module.exports = AuthRouter;
