// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

function findMax(arr){
    return Math.max(...arr);
}

function findMin(arr){
    return Math.min(...arr);
}
let numbers = [10, 9, 20, 35, 40];
console.log(findMax(numbers));
console.log(findMin(numbers));
