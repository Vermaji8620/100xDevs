/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let num = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < numbers.length; index++) {
    num = Math.max(num, numbers[index]);
  }
  return numbers.length? num : [];
}

module.exports = findLargestElement;
