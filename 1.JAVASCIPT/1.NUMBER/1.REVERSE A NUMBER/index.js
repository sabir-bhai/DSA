let num = 167;
let rev_num = 0;
while (num > 0) {
  //197
  rem = num % 10; // rem =7
  rev_num = rev_num * 10 + rem; // Add the last digit of num to rev_num
  num = Math.floor(num / 10); // Remove the last digit from num
}
