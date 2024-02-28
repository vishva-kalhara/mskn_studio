const express = require("express");
const QAController = require("../controllers/QAController");

const QARouter = express.Router();
QARouter.route("/")
    .post(QAController.addNewQA) // Add new QA
    .get(QAController.getAllQuestions); // Get * Questions
QARouter.route("/:id")
    .get(QAController.getAnswers)
    .post(QAController.addAnswerToExistingQ);

// Get Answers by name -- Home
// Get Answers by id
// Add new Answer to existing Question
// Update Answer
// Delete Answer

// Delete Question
// Update Question

module.exports = QARouter;
