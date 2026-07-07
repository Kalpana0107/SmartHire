const express = require("express");
const router = express.Router();

const{ spawn } = require("child_process");
const path = require("path");

const db = require("../db/database");

router.post("/extract/:candidateId", (req, res) => {

    const{ candidateId } = req.params;

    const candidate = db
    .prepare("SELECT filepath FROM candidates WHERE id = ?")
    .get(candidateId);

    if(!candidate){
        return res.status(404).json({
            error: " candidate not found "
        });

    }
    const scriptPath = path.join(__dirname, "../python/extract_resume.py");
    
    const pythonExe = path.join(__dirname, "../venv/Scripts/python.exe");

    const pythonProcess = spawn(pythonExe, [
    scriptPath,
    candidate.filepath
]);
    let output = "";
    let errorOutput = "";

    pythonProcess.stdout.on("data", (data) => {
        output += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
        errorOutput += data.toString();
    });

    pythonProcess.on("close", (code) => {

    if (code !== 0) {
        return res.status(500).json({
            error: "NLP extraction failed",
            detail: errorOutput
        });
    }

    try {

        const result = JSON.parse(output);

        db.prepare(`
            UPDATE candidates
            SET name = ?, skills = ?
            WHERE id = ?
        `).run(
            result.name,
            JSON.stringify(result.skills),
            candidateId
        );

        res.status(200).json({
            message: "Resume extracted successfully",
            result
        });

    } catch (e) {

        res.status(500).json({
            error: "Failed to parse NLP output"
        });

    }

});

});

module.exports = router;