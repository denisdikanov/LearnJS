function multiplyAll(array) {
  let result = [];
  return function (multiplier) {
    array.forEach((element) => result.push(element * multiplier));
    return result;
  };
}
