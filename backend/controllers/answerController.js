const { pool } = require("../database");

exports.getAnswer = async (req, res) => {
    try {
        const [result] = await pool.query(
            `SELECT answer FROM answer WHERE id='${req.params.id}'`
        );

        if (result.length == 0) {
            throw new Error("No Answer found!");
        } else if (result.length > 1) {
            throw new Error("Error: Duplicate Primary Key");
        }

        res.status(200).json({
            status: "success",
            answer: result[0].answer,
        });
    } catch (err) {
        res.status(200).json({
            status: "fail",
            error: err.message,
        });
    }
};

exports.updateAnswer = async ({ body, params }, res) => {
    try {
        if (!body.answer) throw new Error("Please fill the field.");

        const [result] = await pool.query(
            `UPDATE answer SET answer = '${body.answer}' WHERE id='${params.id}'`
        );

        // if (result.length == 0) {
        //     throw new Error("No Answer found!");
        // } else if (result.length > 1) {
        //     throw new Error("Error: Duplicate Primary Key");
        // }

        res.status(200).json({
            status: "success",
            result,
        });
    } catch (err) {
        res.status(200).json({
            status: "fail",
            error: err.message,
        });
    }
};
