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




const healthRoute = require("./routes/health");

const matchRoute = require("./routes/match");

const db = require("./db/database");

app.use("/health", healthRoute);
app.use("/api", uploadRoutes);
app.use("/api", extractRoutes);
app.use("/api", candidateRoutes);
app.use("/match", matchRoute);



app.use((err, req, res, next) => {
    console.error("unhandled error:", err.stack);

    res.status(err.status || 500).json({
        error: err.message || "Internal Server Error",
        ...(process.env.NODE_ENV !== "production" && {
            stack: err.stack

        })
    })
});



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});
