// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.

function generateFibonacci(n) {
    // Initialize an array with the first two terms of the Fibonacci sequence
    const fibSequence = [0, 1];
    
    // If the number of terms is 1, return only the first term
    if (n === 1) {
      return [0];
    }
  
    // Generate the Fibonacci sequence up to n terms
    for (let i = 2; i < n; i++) {
      const nextTerm = fibSequence[i - 1] + fibSequence[i - 2];
      fibSequence.push(nextTerm);
    }
  
    return fibSequence;
  }
  
  // TEST
  console.log(generateFibonacci(5));  // Output: [0, 1, 1, 2, 3]
  console.log(generateFibonacci(10));