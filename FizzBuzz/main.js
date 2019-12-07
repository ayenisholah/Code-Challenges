/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable strict */
function isMultiple(num, mod) {
    return num % mod === 0;
}

function FizzBuzz(num) {
    switch (true) {
        case isMultiple(num, 15):
            return "FizzBuzz";
        case isMultiple(num, 3):
            return "Fizz";
        case isMultiple(num, 5):
            return "Buzz";
        default:
            return num;
    }
}

module.exports = {
    FizzBuzz,
    isMultiple
};
