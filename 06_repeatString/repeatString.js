const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let finalString = '';
    for (let n = 0; n < num; n++) {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
