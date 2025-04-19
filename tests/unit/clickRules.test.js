// tests/unit/clickRules.test.js
const { isValidClick } = require('../../utils/time');

test('isValidClick returns true for recent timestamp', () => {
  const now = Date.now();
  expect(isValidClick(now)).toBe(true);
});

test('isValidClick returns false for old timestamp', () => {
  const past = Date.now() - 10000;
  expect(isValidClick(past)).toBe(false);
});
