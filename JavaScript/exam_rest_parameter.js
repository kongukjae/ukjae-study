function calcSum (...prices) {
  let result = 0;
  for(const value of prices) {
    result += value;
  }
  return result;
}

const result1 = calcSum(10, 20);
<<<<<<< HEAD
const result2 = calcSum(2,3,40);
console.log(result1);
console.log(result2);

=======
console.log(result1);
console.log("hellO");
>>>>>>> exam/restparameter
