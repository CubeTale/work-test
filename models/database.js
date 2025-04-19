const sqlite = require('sqlite'); // sqlite3 대신 sqlite 사용

async function connectDatabase() {
  const db = await sqlite.open('./database.db'); // SQLite 데이터베이스 파일 경로
  return db;
}

async function createTable() {
  const db = await connectDatabase();
  await db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL
    )
  `);
  console.log('Table created or already exists');
}

async function insertUser(username, password) {
  const db = await connectDatabase();
  const result = await db.run(
    `
    INSERT INTO users (username, password) VALUES (?, ?)
  `,
    [username, password]
  );
  console.log(`User inserted with ID: ${result.lastID}`);
}

async function getUserByUsername(username) {
  const db = await connectDatabase();
  const user = await db.get('SELECT * FROM users WHERE username = ?', [
    username,
  ]);
  return user;
}

module.exports = { createTable, insertUser, getUserByUsername };
