/** Implement Bubble Sort
 *
 * Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 *
 */

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let a = i + 1; a < array.length; a++) {
      if (array[i] > array[a]) {
        [array[i], array[a]] = [array[a], array[i]];
      }
    }
  }
  return array;
}

bubbleSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);
