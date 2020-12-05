const fs = require('fs');
// 상수 fs는 'fs'를 요청했다


fs.readFile('./readme2.txt', (err, data) => {
  // node built-in method readFile('filename', (callback))
  // 방식으로 파일을 불러온다.
  if(err) {
    // 만약 err가 참이라면 err sign을 보낸다.
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});

// 파일 시스템 접근하기
// fs = file system
// 파일을 생성하거나 삭제하고, 읽거나 쓸 수 있다.
