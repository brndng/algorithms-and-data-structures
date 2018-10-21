function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const output = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      output.push(left[indexLeft]);
      indexLeft++;
    } else {
      output.push(right[indexRight]);
      indexRight++;
    }
  }

  while (indexLeft < left.length) {
    output.push(left[indexLeft]);
    indexLeft++;
  }

  while (indexRight < right.length) {
    output.push(right[indexRight]);
    indexRight++;
  }
  return output;
}
