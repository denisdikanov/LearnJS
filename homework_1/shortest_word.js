function findShort(s) {
  const stringArray = s.split(" ");
  let result = stringArray[0].length;
  for (let i = 1; i < stringArray.length; i++) {
    if (stringArray[i].length < result) {
      result = stringArray[i].length;
    }
  }
  return result;
}
