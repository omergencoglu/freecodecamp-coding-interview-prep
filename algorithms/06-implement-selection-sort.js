/** Implement Selection Sort
 *
 * Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list.
 * Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 *
 */

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    const minValue = Math.min(...array.slice(i));
    const minIndex = array.slice(i).indexOf(minValue) + i;
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }

  return array;
}

selectionSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);
