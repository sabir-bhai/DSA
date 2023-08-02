function isLeapYear(year) {
  // A year is a leap year if it is divisible by 4,
  // but not divisible by 100 unless it's also divisible by 400.
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Test the function
const year = 2024;
if (isLeapYear(year)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}
