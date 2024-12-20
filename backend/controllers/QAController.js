const { pool } = require("../database");

exports.getAllQuestions = async ({ query }, res) => {
    if (query.question) {
        try {
            console.log(query);
            if (!query.question) {
                throw new Error("Question is required.");
            }

            const [result] = await pool.query(
                `SELECT * FROM answer WHERE question_id IN (SELECT id FROM question WHERE question_val = '${query.question}')`
            );

            if (result.length == 0) {
                throw new Error("No tips found.");
            }

            res.status(200).json({
                status: "success",
                count: result.length,
                body: result,
            });
        } catch (err) {
            res.status(200).json({
                status: "fail",
                error: err.message,
            });
        }
    } else {
        try {
            const [result] = await pool.query(`SELECT * FROM question`);

            if (result.length == 0) {
                throw new Error("No Questions found!");
            }

            res.status(200).json({
                status: "success",
                count: result.length,
                body: result,
            });
        } catch (err) {
            res.status(200).json({
                status: "fail",
                error: err.message,
            });
        }
    }
};

exports.addNewQA = async ({ body }, res) => {
    try {
        // Validation
        if (!body.question) {
            throw new Error("Question is required in the request body.");
        } else if (!body.answer || body.answer.length == 0) {
            throw new Error(
                "Atleast an answer is required in the request body."
            );
        } else if (body.answer[0] == "" || body.answer[0] == null) {
            throw new Error(
                "Atleast an answer is required in the request body."
            );
        }

        // Inserting Question
        const [result1] = await pool.query(
            `INSERT INTO question (question_val, visibility_id) value ('${body.question}', '1')`
        );

        // Inserting Answers
        body.answer.map(async (el) => {
            const [result2] = await pool.query(
                // console.log(
                `INSERT INTO answer (answer, question_id) value ('${el}', ${result1.insertId})`
            );
        });

        res.status(200).json({
            status: "success",
            body,
            output: result1,
        });
    } catch (err) {
        res.status(200).json({
            status: "fail",
            error: err.message,
        });
    }
};

exports.getQA = async ({ query, params }, res) => {
    try {
        console.log(query);
        if (!query.question) {
            throw new Error("Question is required.");
        }

        const [result] = await pool.query(
            `SELECT * FROM answer WHERE question_id IN (SELECT id FROM question WHERE question_val = '${query.question}')`
        );

        if (result.length == 0) {
            throw new Error("No tips found.");
        }

        res.status(200).json({
            status: "success",
            count: result.length,
            body: result,
        });
    } catch (err) {
        res.status(200).json({
            status: "fail",
            error: err.message,
        });
    }
};

exports.getAnswers = async (req, res) => {
    try {
        const [result] = await pool.query(
            `SELECT * FROM answer WHERE question_id = ${req.params.id}`
        );

        const [question] = await pool.query(
            `SELECT question_val FROM question WHERE id=${req.params.id}`
        );

        if (result.length == 0) throw new Error("Invalid Question");

        res.status(200).json({
            status: "success",
            question: question[0].question_val,
            count: result.length,
            body: result,
        });
    } catch (error) {
        res.status(200).json({
            status: "fail",
            error: error.message,
        });
    }
};

exports.addAnswerToExistingQ = async (req, res) => {
    try {
        const { body, params } = req;
        console.log(body);
        // Validation
        if (!params.id) {
            throw new Error(
                "Try refreshing the page. (Error: Param does not found)"
            );
        } else if (!body.answer) {
            throw new Error("Enter the Answer.");
        }

        // Inserting Answers
        const [result2] = await pool.query(
            // console.log(
            `INSERT INTO answer (answer, question_id) value ('${body.answer}', ${params.id})`
        );

        res.status(200).json({
            status: "success",
            output: result2,
        });
    } catch (err) {
        res.status(200).json({
            status: "fail",
            error: err.message,
        });
    }
};
