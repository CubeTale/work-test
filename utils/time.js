// utils/time.js
function isValidClick(timestamp) {
  const now = Date.now();
  return Math.abs(now - timestamp) < 5000; // 5초 이내만 유효
}

module.exports = { isValidClick };
