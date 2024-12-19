// 기본 내장 모듈 가져오기
const http = require("http");
const fs = require("fs");

// async,await 사용
// const server = http.createServer(async (req, res) => {
//   // 요청 성공 시
//   try {}
//   // 요청 실패 시
//   catch(error){}
// });

const server = http.createServer(async (req, res) => {
  // 요청 성공 시
  try {
    if (req.url === "/") {
      // fs.promises.readFile() : 파일을 읽어오는 메서드
      const data = await fs.promises.readFile("./index.html");
      res.writeHead(200, { "Content-Type": "text/html" });
      // res.write(req.url); // localhost:8080 뒤 클라이언트가 요청한 주소(main: /)
      // res.write(req.method); // 클라이언트가 요청한 http 메서드 (GET)
      // res.write(req.headers); // 클라이언트가 요청한 헤더 정보
      res.end(data);
    } else if (req.url === "/about") {
      const data = await fs.promises.readFile("./about.html");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Not Found</h1>");
    }
  } catch (error) {
    // 요청 실패 시
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end(error.message);
  }
});

server.listen(8080, () => {
  console.log("8080 서버 실행 중");
});
