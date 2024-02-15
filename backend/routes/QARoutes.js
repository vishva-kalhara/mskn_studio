const express = require("express");
const QAController = require("../controllers/QAController");

const QARouter = express.Router();
QARouter.route("/").get(QAController.getAllQA);

module.exports = QARouter;
