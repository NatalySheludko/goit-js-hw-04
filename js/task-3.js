"use strict";

function filterArray(numbers, value) {
  const emptyArray = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const element = numbers[i];
    if (element > value) {
      emptyArray.push(numbers[i]);
    }
  }
  return emptyArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
