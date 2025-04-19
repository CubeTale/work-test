// tests/e2e/e2e.test.js
const http = require('http');

test('POST /signup should return 200 on success', (done) => {
  const data = JSON.stringify({ id: 'e2e-user', address: 'Busan' });
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/signup',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    },
  };

  const req = http.request(options, (res) => {
    expect(res.statusCode).toBe(200);
    done();
  });

  req.write(data);
  req.end();
});
