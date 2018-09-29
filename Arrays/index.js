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

// Given an array of integers, find the highest possible product from three of the integers
// O(n) time
const highestProdOf3 = array => {
  let lowestNum = Math.min(array[0], array[1]);
  let highestNum = Math.max(array[0], array[1]);

  let lowestProdOf2 = array[0] * array[1];
  let highestProdOf2 = array[0] * array[1];

  let highestProdOf3 = array[0] * array[1] * array[2];

  for (let i = 2; i < array.length; i++) {
    const currentNum = array[i];

    highestProdOf3 = Math.max(
      highestProdOf3,
      currentNum * lowestProdOf2,
      currentNum * highestProdOf2
    );

    lowestProdOf2 = Math.min(
      lowestProdOf2,
      currentNum * lowestNum,
      currentNum * highestNum
    );

    highestProdOf2 = Math.max(
      highestProdOf2,
      currentNum * lowestNum,
      currentNum * highestNum
    );

    lowestNum = Math.min(lowestNum, currentNum);
    highestNum = Math.max(highestNum, currentNum);
  }
  return highestProdOf3;
};
