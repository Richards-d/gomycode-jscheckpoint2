// Factorial: Write a function to calculate the factorial of a given number.

function factorialIterative(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
}

// TEST
console.log(factorialIterative(5));
