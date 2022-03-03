/** Pairwise
 *
 * Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
 * You may use multiple pairs that have the same numeric elements but different indices.
 * Each pair should use the lowest possible available indices.
 * Once an element has been used it cannot be reused to pair with another element.
 *
 */

function pairwise(arr, arg) {
  let indexValues = [];
  for (let i = 0; i < arr.length; i++) {
    for (let a = i + 1; a < arr.length; a++) {
      if (
        arr[i] + arr[a] === arg &&
        !indexValues.includes(i) &&
        !indexValues.includes(a)
      ) {
        indexValues.push(i, a);
      }
    }
  }
  return indexValues.reduce((a, b) => a + b, 0);
}

pairwise([1, 4, 2, 3, 0, 5], 7);
pairwise([0, 0, 0, 0, 1, 1], 1);
