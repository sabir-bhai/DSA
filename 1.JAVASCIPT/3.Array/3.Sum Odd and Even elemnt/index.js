let arr = [11, 43, 12, 35, 36, 70];
let totalSumOdd = 0;
let totalSumEven = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    totalSumEven += arr[i];
  } else {
    totalSumOdd += arr[i];
  }
}

console.log("Odd sum is  " + totalSumOdd);
console.log("Even  sum is  " + totalSumEven);
