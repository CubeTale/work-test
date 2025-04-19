// services/click.service.js
const db = require('../models/database');
const { isValidClick } = require('../utils/time');

function handleClick(id, x, y, timestamp) {
  return new Promise((resolve, reject) => {
    if (!isValidClick(timestamp)) return reject(new Error('Invalid timestamp'));

    db.run(
      'INSERT INTO clicks (id, x, y, timestamp) VALUES (?, ?, ?, ?)',
      [id, x, y, timestamp],
      function (err) {
        if (err) return reject(err);
        resolve();
      }
    );
  });
}

module.exports = { handleClick };
