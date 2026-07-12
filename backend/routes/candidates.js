const express = require("express");

const router = express.Router();
const db = require("../db/database");
router.get("/candidates", (req, res) => {

    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const minScore = parseFloat(req.query.minScore) || 0;

        const offset = (page - 1) * limit;
        const total = db.prepare(`
            SELECT COUNT(*)AS count
            FROM candidates 
            WHERE match_score >= ?
            `).get(minScore).count;
        const candidates = db.prepare(`
SELECT
    id,
    name,
    filepath AS filename,
    match_score,
    skills,
    created_at
FROM candidates
WHERE match_score >= ?
ORDER BY match_score DESC
LIMIT ?
OFFSET ?


    `).all(minScore, limit, offset);

        const parsed = candidates.map(candidates => ({
            ...candidates,
            skills: candidates.skills
                ? JSON.parse(candidates.skills)
                : []

        }));
        res.json({
            candidates: parsed,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }

        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: " Failed to fetch candidates",
            detail: err.message
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



