const fibonacci = function(idx) {
    let first = 0;
    let second = 1;
    let sum = 0;
// 0 1 1 2 3 5

    if (idx == 0) {
        return 0;
    }
    else if (idx == 1) {
        return 1;
    }
    else if (idx < 0) {
        return 'OOPS';
    }
    else if (typeof idx !== 'number') {
        idx = parseInt(idx);
    }
    for (let i = 2; i < idx + 1; i++) {
        sum = 0;
        sum = first + second;
        first = second;
        second = sum;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;

/*
Iteration 0
sum = 1
first = 1
second = 1

Iteration 1
sum = 2
first = 1
second = 2

Iteration 2
sun = 3
first = 2
second = 3

Iteration 3 */