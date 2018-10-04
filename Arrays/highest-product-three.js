// Given an array of integers, find the highest possible product from three of the integers
// O(n) time

const highestProductOf3 = array => {
  let lowestNum = Math.min(array[0], array[1]);
  let highestNum = Math.max(array[0], array[1]);

  let lowestProductOf2 = array[0] * array[1];
  let highestProductOf2 = array[0] * array[1];

  let highestProductOf3 = array[0] * array[1] * array[2];

  for (let i = 2; i < array.length; i++) {
    const currentNum = array[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      currentNum * lowestProductOf2,
      currentNum * highestProductOf2
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      currentNum * lowestNum,
      currentNum * highestNum
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      currentNum * lowestNum,
      currentNum * highestNum
    );

    lowestNum = Math.min(lowestNum, currentNum);
    highestNum = Math.max(highestNum, currentNum);
  }
  return highestProductOf3;
};
