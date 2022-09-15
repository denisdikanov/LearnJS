function colourAssociation(array) {
  const result = [];
  array.forEach(function (item) {
    let includes = {};
    includes[item[0]] = item[1];
    result.push(includes);
  });
  return result;
}
