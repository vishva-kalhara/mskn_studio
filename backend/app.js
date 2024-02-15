const express = require("express");
const QARoutes = require("./routes/QARoutes");

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use(`${process.env.BASE_URL}/QA`, QARoutes);

module.exports = app;
