// Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(num) {
    // Prime numbers must be greater than 1
    if (num <= 1) {
      return false;
    }
  
    // Check for divisors up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // num is divisible by i, so it's not prime
      }
    }
    
    return true; // num is prime
  }
  
  // TEST
  console.log(isPrime(11));
  console.log(isPrime(4));