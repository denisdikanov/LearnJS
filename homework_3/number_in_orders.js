function inAscOrder(arr) {
  const new_sort = [...arr];
  new_sort.sort((a, b) => a - b);
  return (
    new_sort.length === arr.length &&
    new_sort.every((value, index) => value === arr[index])
  );
}
