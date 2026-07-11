const express = require("express");

const router = express.Router();
const db = require("../db/database");
router.get("/candidates", (req, res) => {

    try {

        const candidates = db.prepare(`
SELECT
    id,
    name,
    filepath AS filename,
    match_score,
    skills,
    created_at
FROM candidates
ORDER BY match_score DESC

    `).all();

        const parsed = candidates.map(candidates => ({
            ...candidates,
            skills: candidates.skills
                ? JSON.parse(candidates.skills)
                : []

        }));
        res.json({
            candidates: parsed,
            total: parsed.length
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: " Failed to fetch candidates"
        });

    }

});

router.delete("/candidates/:id", (req, res) => {

    const { id } = req.params;

    db.prepare(`
        DELETE FROM candidates
        WHERE id = ?
        `).run(id);

    res.json({
        message: `Candidate ${id} deleted`
    });

});

module.exports = router;



