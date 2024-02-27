const express = require("express");
const QAController = require("../controllers/QAController");

const QARouter = express.Router();
QARouter.route("/")
    .post(QAController.addNewQA)
    .get(QAController.getAllQuestions);
// QARouter.route("/:id");

module.exports = QARouter;
