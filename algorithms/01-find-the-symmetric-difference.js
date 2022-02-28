/** Reverse a String
 *
 * Create a function that takes two or more arrays and returns an array of their symmetric difference.
 * The returned array must contain only unique values (no duplicates).
 *
 */

function sym(...args) {
  // create a new function returns Symmetric Difference of two arrays.
  const filterDif = (a, b) => {
    // merge a,b and remove dublicates with Set.
    let filteredArr = [...new Set([...a, ...b])];

    // remove the common elements from the merged array.
    filteredArr = filteredArr.filter(
      (item) =>
        (!a.includes(item) && b.includes(item)) ||
        (a.includes(item) && !b.includes(item))
    );

    return filteredArr;
  };

  return args.reduce((a, b) => filterDif(a, b));
}

sym([1, 2, 3], [5, 2, 1, 4]);

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
