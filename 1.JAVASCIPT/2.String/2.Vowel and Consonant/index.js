let s = "I Want to become a software developer";
let coutVowel = 0;
let countConsonant = 0;
for (let i = 0; i < s.length; i++) {
  if (
    s[i] === "a" ||
    s[i] === "e" ||
    s[i] == "i" ||
    s[i] == "o" ||
    s[i] == "u"
  ) {
    coutVowel++;
  } else {
    countConsonant++;
  }
}

console.log("Total vowel is " + coutVowel);
console.log("Total consonant is " + countConsonant);
