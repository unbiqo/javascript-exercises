const sumAll = function(min, max) {
    let total = 0;

    if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)
        || !(typeof(min) === "number") || !(typeof(max) === "number")
    ) {
        return 'ERROR';
    }
    if (min > max) {
        let temp = 0;
        temp = min;
        min = max;
        max = temp;
    }
    for (i = min; i < max + 1; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
