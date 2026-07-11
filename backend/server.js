const uploadRoutes = require("./routes/upload");
const extractRoutes = require("./routes/extract");

const express = require("express");
const cors = require("cors");

const candidateRoutes = require("./routes/candidates");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.use(express.json());


const healthRoute = require("./routes/health");
app.use("/health", healthRoute);
app.use("/api", uploadRoutes);
app.use("/api", extractRoutes);
app.use("/api", candidateRoutes);


const matchRoute = require("./routes/match");
app.use("/match", matchRoute);

const db = require("./db/database");

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});
