
# Click Event Server Project

이 프로젝트는 TCP 서버와 HTTP 서버를 이용하여 클릭 이벤트를 처리하는 시스템입니다. 주어진 조건에 따라 Node.js 내장 모듈만을 사용하여 서버와 클라이언트를 구현하였습니다.

## 프로젝트 설명

이 프로젝트는 클라이언트가 서버로 클릭 이벤트 데이터를 전송하고, 서버는 해당 데이터를 처리하여 저장하거나 응답을 보내는 시스템입니다.

### 주요 기능

- **TCP 서버**: 클라이언트가 TCP 프로토콜을 통해 서버에 클릭 이벤트 데이터를 전송합니다.
- **HTTP 서버**: POST 방식으로 클릭 이벤트 데이터를 전송하고 응답을 받는 시스템입니다.
- **클러스터 모드**: 여러 개의 CPU 코어를 활용하여 서버 성능을 최적화합니다.
- **SQLite 데이터베이스**: 클릭 이벤트 데이터를 SQLite 데이터베이스에 저장합니다.

## 설치 방법

### 1. Node.js 설치
Node.js는 필수적으로 설치되어 있어야 합니다. [Node.js 공식 웹사이트](https://nodejs.org/)에서 다운로드하여 설치합니다.

### 2. 프로젝트 클론

프로젝트를 로컬에 클론합니다.

```bash
git clone https://github.com/your-repository/work-test.git
cd work-test
```

### 3. 의존성 설치
이 프로젝트는 외부 패키지를 사용하지 않으며, Node.js 내장 모듈만을 사용합니다. 특별한 의존성은 없습니다.

### 4. 서버 실행

프로젝트의 서버를 실행하려면, `click.server.js` 파일을 실행하면 됩니다.

```bash
node servers/click.server.js
```

### 5. 클라이언트 실행

클라이언트 코드(`testClickClient.js`)를 실행하여 서버로 클릭 이벤트를 보냅니다.

```bash
node client/testClickClient.js
```

## 서버 구조

### 클러스터 모드
서버는 `cluster` 모듈을 사용하여 다중 CPU 코어를 활용하고 있습니다. `cluster.fork()`를 사용하여 각 워커 프로세스를 생성하고, 각 프로세스는 독립적으로 TCP 서버나 HTTP 서버를 실행합니다.

### 데이터베이스
- `sqlite3` 모듈을 사용하여 SQLite 데이터베이스에 클릭 이벤트 데이터를 저장합니다.
- 데이터는 `clicks.db` 파일에 저장됩니다.

## 테스트

### 1. 서버 테스트

클라이언트가 보내는 클릭 이벤트를 서버에서 제대로 처리하는지 테스트하려면, `testClickClient.js` 파일을 실행하여 이벤트를 전송하고 서버가 응답하는지 확인합니다.

### 2. HTTP 요청 테스트

클라이언트 코드에서 HTTP 요청을 사용하여 서버에 클릭 이벤트를 전송하고, 서버의 응답을 확인할 수 있습니다. 이 경우 웹 브라우저나 `Insomnia` 같은 HTTP 테스트 도구를 사용할 수 있습니다.

### 3. TCP 연결 테스트

`nc` (netcat) 또는 `Telnet` 도구를 사용하여 TCP 서버에 접속하고 클릭 이벤트 데이터를 전송할 수 있습니다.

```bash
nc localhost 4000
{"username": "testuser", "timestamp": 1649091400453}
```

## 주요 파일 설명

- **servers/click.server.js**: 클릭 이벤트를 처리하는 TCP 및 HTTP 서버 코드.
- **client/testClickClient.js**: 서버로 클릭 이벤트를 전송하는 클라이언트 코드.
- **models/database.js**: SQLite 데이터베이스 연결 및 쿼리 처리 코드.
- **sqlite.js**: SQLite 관련 설정 및 연결 코드.

## 기술 스택

- Node.js (내장 모듈)
- SQLite (내장 SQLite 사용)
- TCP 및 HTTP 프로토콜
- 클러스터 모드 (다중 CPU 활용)

## 추가 설명

이 프로젝트는 외부 패키지나 라이브러리를 사용하지 않고, Node.js 내장 모듈만을 사용하여 구현되었습니다. 이는 프로젝트 조건에 맞게 최소한의 의존성으로 구현한 시스템입니다.

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.
