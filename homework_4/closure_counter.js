function counter() {
  let i = 0;
  return function () {
    i++;
    return i;
  };
}
