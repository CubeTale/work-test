const fs = require('fs');
const path = require('path');

// 데이터베이스 파일 경로 (예: users.json)
const dbFilePath = path.join(__dirname, 'database.json');

// 데이터베이스 읽기
const readDB = () => {
  if (fs.existsSync(dbFilePath)) {
    const rawData = fs.readFileSync(dbFilePath);
    return JSON.parse(rawData);
  }
  return [];
};

// 데이터베이스 쓰기
const writeDB = (data) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

// 사용자 추가
const addUser = (username, password) => {
  const users = readDB();
  const newUser = {
    id: users.length + 1,
    username: username,
    password: password,
  };
  users.push(newUser);
  writeDB(users);
};

// 사용자 검색
const getUserByUsername = (username) => {
  const users = readDB();
  return users.find((user) => user.username === username);
};

module.exports = { addUser, getUserByUsername };
