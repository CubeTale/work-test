const http = require('http');
const url = require('url');
const querystring = require('querystring');
const { addUser, getUserByUsername } = require('../models/sqlite');

// HTTP 서버 생성
const server = http.createServer((req, res) => {
  const { method, url: reqUrl } = req;

  // POST 요청일 때만 처리 (사용자 가입)
  if (method === 'POST' && reqUrl === '/signup') {
    let body = '';

    // 요청 본문 데이터 수신
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const { username, password } = JSON.parse(body);

      if (!username || !password) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(
          JSON.stringify({ message: 'Username and password are required!' })
        );
      }

      // 기존 사용자 존재 여부 확인
      const existingUser = getUserByUsername(username);
      if (existingUser) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'User already exists!' }));
      }

      // 사용자 추가
      addUser(username, password);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ message: 'Signup successful!' }));
    });
  } else {
    // 다른 요청은 404 처리
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

// 서버 시작
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
