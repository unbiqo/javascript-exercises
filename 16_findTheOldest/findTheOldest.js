const findTheOldest = function(people) {
    const getAge = function(yearOfBirth, yearOfDeath) {
        if (yearOfDeath) {
            return yearOfDeath - yearOfBirth;
        }
        else {
            return new Date().getFullYear() - yearOfBirth;
        }
    }

    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        //const oldestAge = (oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth);
        
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        //const currentAge = (current.yearOfDeath ? current.yearOfDeath - current.yearOfBirth : new Date().getFullYear() - current.yearOfBirth);
        return oldestAge < currentAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
