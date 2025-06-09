const reverseString = function(string) {
    let list = string.split('');
    let result = '';
    for (i = list.length - 1; i >= 0; i--){
        result += list[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
