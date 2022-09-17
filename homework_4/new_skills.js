function shuffleIt(arr, ...combinations) {
  for (let i = 0; i <= combinations.length - 1; i++) {
    let combination = combinations[i];
    x = combinations[i][0];
    y = combinations[i][1];
    [arr[x], arr[y]] = [arr[y], arr[x]];
  }
  return arr;
}
