// Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArray(arr){
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// TEST
let numbers = [10, 9, 20, 35, 40];
console.log(sumArray(numbers));