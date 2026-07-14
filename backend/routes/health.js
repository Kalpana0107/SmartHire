const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status: "OK",
        message: "Smarthire backend is running!"
    });

});

module.exports = router;
