function findTheHigestNumber(num) {
  let highestNumber = 0;
  while (num > 0) {
    let rem = num % 10;
    if (rem > highestNumber) {
      highestNumber = rem;
    }
    num = Math.floor(num / 10);
  }
  return highestNumber;
}
let result = findTheHigestNumber(1230);
console.log("Highest number is " + result);

function findTheLowestNumber(num) {
  let lowestNumber = Number.MAX_VALUE;
  while (num > 0) {
    let rem = num % 10;
    if (rem < lowestNumber) {
      lowestNumber = rem;
    }
    num = Math.floor(num / 10);
  }
  return lowestNumber;
}
let result1 = findTheLowestNumber(4589);
console.log("Lowest number is " + result1);
