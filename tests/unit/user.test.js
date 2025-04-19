// tests/unit/user.test.js
const { createUser } = require('../../services/user.service');
const db = require('../../models/database');

beforeAll((done) => {
  db.run('CREATE TABLE IF NOT EXISTS users (id TEXT, address TEXT)', done);
});

test('createUser inserts a user into database', async () => {
  await createUser('test-user', 'Seoul');
});
