function uncensor(infected, discovered) {
  let result = "";
  let i = 0;
  for (let char of infected) {
    if (char !== "*") {
      result += char;
    } else {
      result += discovered[i];
      i++;
    }
  }
  return result;
}
