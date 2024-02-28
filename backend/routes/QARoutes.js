const express = require("express");
const QAController = require("../controllers/QAController");

const QARouter = express.Router();
QARouter.route("/")
    .post(QAController.addNewQA)
    .get(QAController.getAllQuestions);
QARouter.route("/:id")
    .get(QAController.getAnswers)
    .post(QAController.addAnswerToExistingQ);

module.exports = QARouter;
