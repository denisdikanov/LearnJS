function killer(suspectInfo, deadPeoples) {
  let entries = Object.entries(suspectInfo);
  let result = null;
  entries.forEach(function (element) {
    let key = element[0];
    let values = element[1];

    if (deadPeoples.every((item) => values.includes(item))) {
      result = key;
    }
  });
  return result;
}
