const Database = require("better-sqlite3");

const db = new Database('C:/express/sjiwp4-express/db.sqlite3', { verbose: console.log });

module.exports = { db };