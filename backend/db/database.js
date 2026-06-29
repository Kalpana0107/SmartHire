const Database = require("better-sqlite3");

const db = new Database("smarthire.db");

db.exec(`CREATE TABLE IF NOT EXISTS candidates(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    resume_path TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    
    );

`);


module.exports =db;
