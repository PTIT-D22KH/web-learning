'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriverLicense = true;
// }
// if (hasDriversLicense) {
//     console.log("I can drive :D");
// }

// const interface = 'Audio';
// const private = 534;


// function logger() {
//     console.log("My name is Jonas");
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuce = fruitProcessor(2, 4);
// console.log(appleOrangeJuce);

//function declaration
function calAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calAge1(2004);
console.log(age1);
//function expression
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calAge2(2004);

console.log(age1, age2);



//arrow function
const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(2004);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1991, 'Jonas'));