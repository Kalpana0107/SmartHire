const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT =process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

const healthRoute = require("./routes/health");
app.use("/health", healthRoute);

const db = require("./db/database");

app.listen(PORT , () => {
    console.log(`Server running on http://localhost:${PORT}`);

});
