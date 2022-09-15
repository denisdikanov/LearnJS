function switcher(x) {
  let result = "";
  let alphabet = [];
  let chars = " ?!abcdefghijklmnopqrstuvwxyz";
  for (let charAlphabet of chars) alphabet.push(charAlphabet);
  alphabet.reverse();
  alphabet = alphabet.join("");
  for (let char of x) {
    char--;
    result += alphabet[char];
  }
  return result;
}
