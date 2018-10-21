function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (arr[i - 1] && curr < arr[i - 1]) {
      let j = i;
      while (j >= 0 && curr < arr[j - 1]) {
        arr[j] = arr[j - 1];
        j--;
      }
      arr[j] = curr;
    }
  }
  return arr;
}
