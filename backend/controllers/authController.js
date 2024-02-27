const bcrypt = require("bcryptjs");
const { pool } = require("../database");

exports.registerUser = async ({ body }, res) => {
    try {
        if (!body.email) {
            throw new Error("Email is a required field.");
        } else if (body.email) {
            const [result] = await pool.query(
                `SELECT * FROM user WHERE email='${body.email}';`
            );
            if (result.length != 0)
                throw new Error("Email is already registered.");
        }
        if (!body.password) {
            throw new Error("Password is a required field.");
        } else if (body.password.length < 6) {
            throw new Error("Password should include more than 5 characters");
        } else if (!body.confirmPassword) {
            throw new Error("Confirm Password is a required field.");
        } else if (body.password != body.confirmPassword) {
            throw new Error("Password and Confirm Password does not match");
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(body.password, salt);

        const [result2] = await pool.query(
            `INSERT INTO user (email, password, role_id, status_id) VALUES ('${body.email}', '${hash}', '3', '1');`
        );

        res.status(201).json({
            status: "success",
            result: result2,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message,
        });
    }
};
