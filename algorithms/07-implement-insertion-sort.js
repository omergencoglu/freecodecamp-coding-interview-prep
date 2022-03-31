/** Implement Selection Sort
 *
 *  Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 *
 */

function insertionSort(array) {
  // Only change code below this line
  for (let i = 1; i < array.length; i++)
    for (let j = i; array[j] > 0; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      } else {
        break;
      }
    }
  return array;
  // Only change code above this line
}

insertionSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);
