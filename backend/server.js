const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;

const app = require("./app");

app.listen(port, () => {
    console.log(`Back-end is running on port:${port}`);
});
