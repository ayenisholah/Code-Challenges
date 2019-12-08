function minimumDistances(a) {
    let counter = {};
    let diff = [];
    for (let i = 0; i < a.length; i++) {
        if (counter[a[i]]) {
            counter[a[i]].push(i);
        } else {
            counter[a[i]] = [i];
        }
    }

    let values = Object.values(counter);
    values.forEach(item => {
        diff.push(item[1] - item[0]);
    });
    let result = diff.filter(item => item > 0);
    if (result.length === 0) {
        return -1;
    } else {
        return Math.min(...result);
    }
}
