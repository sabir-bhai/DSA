let str = "ssabaja";
let occurance = 0;
let ansChar = "";
for (let i = 0; i < str.length; i++) {
  let count = 1;
  for (let j = 0; j < str.length; j++) {
    let char = str[i];
    if (char == str[j] && i != j) {
      count++;
    }
    if (occurance < count) {
      ansChar = str[i];
      occurance = count;
    }
  }
}
console.log("Total occurance " + occurance + " character is " + ansChar);
