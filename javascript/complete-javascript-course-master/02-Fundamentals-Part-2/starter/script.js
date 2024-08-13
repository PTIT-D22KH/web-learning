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
// function calAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calAge1(2004);
// console.log(age1);
// //function expression
// const calAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calAge2(2004);

// console.log(age1, age2);



//arrow function
// const calAge3 = birthYear => 2037 - birthYear;
// const age3 = calAge3(2004);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearUntilRetirement(1991, 'Jonas'));
// console.log(yearUntilRetirement(1991, 'Jonas'));



// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'duong', 2037 - 2004, 'teacher', friends];
// console.log(jonas);


// const years = [1990, 1967, 2002, 2010, 2018];
// const calAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// console.log(calAge(years));
// console.log(calAge(years[1]));


// const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])];
// console.log(ages);


// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
// console.log(friends);

// const newLength = friends.push("Duong");
// console.log(newLength);

// friends.unshift("John");//add at the beginning
// console.log(friends);



//remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);


// friends.shift();//remove first element
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('dfasdfas'));


// console.log(friends.includes('Steven'));
// console.log(friends.includes('dfasdfas'));

// friends.push(23);
// console.log(friends.includes('23'));// using ==== (strict equality)


const jonasArray = [
    'Jonas',
    'Duong',
    2024 - 2004,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
const jonas = {
    firstName: 'Jonas',
    lastName: 'Duong',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonans.'last' + nameKey);// can not do
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} and his best friend is called ${jonas.friends[0]}`);