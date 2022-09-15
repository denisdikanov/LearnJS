function wordToBin(str) {
  let array = [];
  for (let char of str) {
    let char_code = char.charCodeAt().toString(2);
    char_code.length < 8 ? array.push("0" + char_code) : array.push(char_code);
  }
  return array;
}
