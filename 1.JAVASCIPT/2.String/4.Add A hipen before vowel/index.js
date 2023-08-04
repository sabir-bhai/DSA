// 1.Add hipen before every vowel
let str = "skennu";
let ans = "";
let flag = false;
for (let i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u"
  ) {
    flag = true;
  }
  if (flag) {
    ans += "-";
    flag = false;
    continue;
  }
  ans += str[i];
}
console.log(ans);
