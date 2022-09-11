function convertHashToArray(hash) {
  const entries = Object.entries(hash).sort();
  const result = [];
  entries.forEach(function (item) {
    let arr = [];
    let [item_key, item_value] = item;
    arr.push(item_key);
    arr.push(item_value);
    result.push(arr);
  });
  console.log(result);
  return result;
}
