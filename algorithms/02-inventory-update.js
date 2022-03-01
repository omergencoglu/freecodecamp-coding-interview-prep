/** Reverse a String
 *
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 * Update the current existing inventory item quantities (in arr1).
 * If an item cannot be found, add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 *
 */

function updateInventory(arr1, arr2) {
  if (!arr1.length) {
    arr1 = arr2;
  }
  for (let i of arr1) {
    for (let a of arr2) {
      if (i[1] === a[1] && a[0] > i[0]) {
        arr1[arr1.indexOf(i)] = [i[0] + a[0], a[1]];
        break;
      }
      if (arr1.every((item) => item[1] !== a[1])) {
        arr1.push(a);
      }
    }
  }
  arr1 = arr1.sort((a, b) => a[1].localeCompare(b[1]));
  return arr1;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);

updateInventory(
  [],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);
