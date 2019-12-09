/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable strict */
/* eslint-disable no-redeclare */
function primality(n) {
  // test a base case where n == 1
  if (n === 1) {
    // return "Not prime"
    return "Not prime";
  }

  // iterate over 2 to n/2
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // test if the mode of n and i are equal to zero
    if (n % i === 0) {
      // if so it is not a prime (return "Not prime")
      return "Not prime";
    }
  }
  // we reach the end of the iterations return "Prime"
  return "Prime";
}

console.log(primality(11));
