const db = require("./db/database");

const candidates = db.prepare("SELECT * FROM candidates").all();

console.log(candidates);