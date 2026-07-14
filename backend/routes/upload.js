const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const db = require("../db/database");

router.post("/upload", upload.single("resume"),(req, res)=>{

    if(!req.file){
        return res.status(400).json({error: " no file uploaded"});
    }
    const{originalname, path: filepath} = req.file;

    const stmt = db.prepare(`INSERT INTO candidates(name, filepath) VALUES(?, ?)
        `);

        const result = stmt.run(originalname, filepath);

        res.status(201).json({
            message:"Resume uploaded successfully",
            candidateId: result.lastInsertRowid,
            filename: originalname,
            filepath: filepath
        });


});
module.exports = router;
