const { pool } = require("../database");

exports.getAllQA = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Test",
    });
};

exports.addNewQA = async ({ body }, res) => {
    // const [result] = await pool.query(
    //     `INSERT INTO role (role_name) value ('Worker')`
    // );
    res.status(200).json({
        status: "success",
        body,
    });
};
