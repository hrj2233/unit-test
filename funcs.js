function isFive(num) {
  // Your code here
  return num === 5 ? true : false;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== "number") {
    throw new Error("this is not a number");
  }
  return number % 2 !== 0 ? true : false;
}

function myRange(min, max, step = 1) {
  // Your code here
  let newArr = [];
  for (let i = min; i <= max; i += step) {
    newArr.push(i);
  }
  return newArr;
}
module.exports = { isFive, isOdd, myRange };
