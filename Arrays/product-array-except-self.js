// For each index in an array of integers, find the product of every integer except the integer at that index
// O(n) time, O(n) space
// No division

const getProductsOfAllIntsExceptAtIndex = array => {
  if (array.length < 2)
    throw new Error("There must be at least 2 integers to calculate a product");

  const prodsOfAllIntsExceptAtIndex = [];
  let currentProd = 1;

  for (let i = 0; i < array.length; i++) {
    prodsOfAllIntsExceptAtIndex[i] = currentProd;
    currentProd *= array[i];
  }

  currentProd = 1;

  for (let j = array.length - 1; j >= 0; j--) {
    prodsOfAllIntsExceptAtIndex[j] *= currentProd;
    currentProd *= array[j];
  }

  return prodsOfAllIntsExceptAtIndex;
};
