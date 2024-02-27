const express = require("express");
const AuthController = require("../controllers/authController");

const AuthRouter = express.Router();
AuthRouter.route("/signup").post(AuthController.registerUser);
AuthRouter.route("/login").post(AuthController.loginUser);
// QARouter.route("/:id");

module.exports = AuthRouter;
