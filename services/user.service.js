// services/user.service.js
const db = require('../models/database');

function createUser(id, address) {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO users (id, address) VALUES (?, ?)',
      [id, address],
      function (err) {
        if (err) return reject(err);
        resolve();
      }
    );
  });
}

module.exports = { createUser };
