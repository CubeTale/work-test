// tests/unit/time.test.js
const { isValidClick } = require('../../utils/time');

describe('Click Time Validation', () => {
  it('should accept timestamp within 5 seconds', () => {
    expect(isValidClick(Date.now())).toBe(true);
  });

  it('should reject timestamp older than 5 seconds', () => {
    expect(isValidClick(Date.now() - 6000)).toBe(false);
  });
});
