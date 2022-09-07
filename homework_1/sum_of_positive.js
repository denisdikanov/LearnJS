function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) arr[i] > 0 ? (sum += arr[i]) : null;
  return sum;
}
