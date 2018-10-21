function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivotIndex = 0;
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== pivotIndex) {
      if (arr[i] < arr[pivotIndex]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return [...quickSort(left), arr[pivotIndex], ...quickSort(right)];
}
