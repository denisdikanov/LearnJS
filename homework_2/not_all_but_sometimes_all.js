function remove(str, what) {
  let new_str = "";
  let entries = Object.entries(what);
  entries.forEach(function (item) {
    new_str = "";
    let [char, char_qty] = item;
    for (let i = 0; i < str.length; i++) {
      str[i] != char
        ? (new_str += str[i])
        : str[i] == char && char_qty < 1
        ? (new_str += str[i])
        : (char_qty -= 1);
    }
    str = new_str;
  });
  return new_str;
}
