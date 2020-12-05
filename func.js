const { odd, even } = require('./var');
// require 함수 안에 불러올 모듈의 경로를 적어둔다.
// 파일경로에서 js나 json 같은 확장자는 생략할 수 있다.
// var.js에서 선언된 odd, even의 값을 요청(가져옴) 한 것 

function checkOddOrEven(num) {
  if(num % 2) {
    return odd;
  }
  return even;
}
// 홀짝구별하는 함수 생성


module.exports = checkOddOrEven;
// 다른 모듈을 가져왔음에도 이것을 또 다른 모듈로 활용할 수 도 있다.
// var.js -> func.js -> 새로운 모듈