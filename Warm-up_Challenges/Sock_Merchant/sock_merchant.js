/* eslint-disable strict */
function sockMerchant(n, ar) {
    // Instantiate an object to keep track of the socks and the number of occurencies.
    let count = {};

    // Count the number of occurences of each sock
    for (let i = 0; i < ar.length; i++) {
        if (count[ar[i]]) {
            count[ar[i]]++;
        } else {
            count[ar[i]] = 1;
        }
    }

    // Get an array of the values
    const counter = Object.values(count);

    // create an empty array to store the number of multiple
    let multiple = [];

    // Initialize the sum of pairs to zero
    let sumOfPairs = 0;

    // add multiples to the multiple array
    for (let i = 0; i < counter.length; i++) {
        if (counter[i] > 1) {
            multiple.push(counter[i]);
        }
    }
    for (let i = 0; i < multiple.length; i++) {
        // Math.floor to check for odd numbers (i.e if you have 3 or 5 socks, you want a pair of two, and discard the single)
        sumOfPairs = sumOfPairs + Math.floor(multiple[i] / 2);
    }
    // Finally return the sum of pairs
    return sumOfPairs;
}

const n = 7;
const ar = [1, 2, 1, 2, 1, 3, 2];

console.log(sockMerchant(n, ar));
