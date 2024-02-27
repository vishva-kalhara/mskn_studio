const express = require("express");
const QARoutes = require("./routes/QARoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use(`${process.env.BASE_URL}/QA`, QARoutes);
app.use(`${process.env.BASE_URL}/auth`, authRoutes);

module.exports = app;
