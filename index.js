const { odd, even } = require('./var');
// var.js file의 값을 요청
const checkNumber = require('./func');
// func.js file의 function을 요청했는데 -> checkNumber 라는 새로운 이름으로 할당

function checkStringOddOrEven(str) {
  if(str.length % 2) {
// 만약 문자열의 갯수가 2에 나누어 떨어지면 true
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));

