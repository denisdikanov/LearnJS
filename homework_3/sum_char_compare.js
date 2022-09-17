function compare(s1, s2) {
  let sumOne = 0;
  let sumTwo = 0;
  if (typeof s1 == "string") {
    s1 = s1.toUpperCase();
    for (let char of s1) {
      x = char.charCodeAt();
      if ((x >= 65 && x <= 90) || (x >= 97 && x <= 122)) {
        sumOne += char.charCodeAt();
      } else {
        sumOne = " ";
        break;
      }
    }
  }
  if (typeof s2 == "string") {
    s2 = s2.toUpperCase();
    for (let char of s2) {
      x = char.charCodeAt();
      if ((x >= 65 && x <= 90) || (x >= 97 && x <= 122)) {
        sumTwo += char.charCodeAt();
      } else {
        sumTwo = " ";
        break;
      }
    }
  }
  console.log(s1, s2);
  console.log(sumOne, sumTwo);
  return sumOne == sumTwo;
}
