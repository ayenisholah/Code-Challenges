/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable strict */
const lib = require("./fizzBuzz");

test(`Should return FizzBuzz, when a number is divisible by 3 and 5,
    "Fizz" when it's is divisible by 3 and ,
    "Buzz when it's divisible by 5.`, () => {
    expect(lib.FizzBuzz(1)).toBe(1);
    expect(lib.FizzBuzz(3)).toBe("Fizz");
    expect(lib.FizzBuzz(5)).toBe("Buzz");
    expect(lib.FizzBuzz(7)).toBe(7);
    expect(lib.FizzBuzz(15)).toBe("FizzBuzz");
    expect(lib.FizzBuzz(30)).toBe("FizzBuzz");
    expect(lib.FizzBuzz(33)).toBe("Fizz");
});

test(`Should return true if the number is multiple of a given argument.
      Otherwise it should return false.`, () => {
    expect(lib.isMultiple(10, 5)).toBeTruthy();
    expect(lib.isMultiple(10, 2)).toBeTruthy();
    expect(lib.isMultiple(60, 20)).toBeTruthy();
    expect(lib.isMultiple(65, 15)).toBeFalsy();
    expect(lib.isMultiple(319, 4)).toBeFalsy();
    expect(lib.isMultiple(9, 10)).toBeFalsy();
});
