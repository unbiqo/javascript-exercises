const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // racecar
    string = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('')

    let reverseString = string.split('').reverse().join('');
    return string === reverseString;
    /*
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string.at(i);
    }
    if (reverseString === string) {
        return true;
    }
    else {
        return false;
    } */
};

// Do not edit below this line
module.exports = palindromes;
