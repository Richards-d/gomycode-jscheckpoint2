// Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr, condition) {
    return arr.filter(condition);
  }


// TEST
const numbers = [1, 2, 3, 4, 5, 6];

// Filter out only even numbers
const isEven = (numbers) => numbers % 2 === 0; // condition
console.log(filterArray(numbers, isEven));
