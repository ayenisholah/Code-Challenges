/* eslint-disable strict */

function jumpingOnClouds(c) {
    c = c.map(Number);
    let i = 0;
    let n = c.length;
    let counter = (i = 0);
    while (i <= n) {
        if (!c[i + 2]) {
            i += 2;
        } else if (!c[i + 1]) {
            i += 1;
        }
        counter++;
    }
    return counter - 1;
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));
