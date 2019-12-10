/* eslint-disable no-inner-declarations */
/* eslint-disable indent */
/* eslint-disable strict */
function maximumToys(prices, k) {
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < prices.length; i++) {
    sum = sum + prices[i];
    if (sum < k) {
      counter++;
    }
  }

  return counter;
}

const prices = [1, 2, 3, 4];
const k = 7;

console.log(maximumToys(prices, k));
