/* eslint-disable strict */

function repeatedString(s, n) {
    const m = Math.floor(n / s.length);
    const rem = n % s.length;
    let count = (s.split("a").length - 1) * m;

    for (let i = 0; i < rem; i++) {
        if (s.charAt(i) === "a") {
            count++;
        }
    }
    return count;
}

console.log(repeatedString("abcac", 10));
