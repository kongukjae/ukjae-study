function calcSum (...prices) {
  let result = 0;
  for(const value of prices) {
    result += value;
  }
  return result;
}

const result1 = calcSum(10, 20);
console.log(result1);
console.log("hellO");
