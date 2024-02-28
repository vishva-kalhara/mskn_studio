const express = require("express");
const answerController = require("../controllers/answerController");

const answerRoutes = express.Router();
answerRoutes
    .route("/:id")
    .get(answerController.getAnswer)
    .patch(answerController.updateAnswer); // Get * Questions

// Get Answers by name -- Home
// Get Answers by id
// Add new Answer to existing Question
// Update Answer
// Delete Answer

// Delete Question
// Update Question

module.exports = answerRoutes;
