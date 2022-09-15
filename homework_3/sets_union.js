function union(s1, s2) {
  let result = new Set();
  for (let valueS1 of s1) result.add(valueS1);
  for (let valueS2 of s2) {
    if (result.has(valueS2) == false) {
      result.add(valueS2);
    }
  }
  return result;
}
