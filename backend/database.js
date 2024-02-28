const mysql = require("mysql2");

const pool = mysql
    .createPool({
        host: "localhost",
        user: "root",
        password: "password",
        database: "mksn_studio_f4",
    })
    .promise();

module.exports = {
    pool,
};
