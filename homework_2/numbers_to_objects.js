function numObj(s) {
  const result = [];
  s.forEach(function (item) {
    const obj = {};
    obj[item] = String.fromCharCode(item);
    result.push(obj);
  });
  return result;
}
