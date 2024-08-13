// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("Duong");
// console.log(23);

// let firstName = "Duong";
// console.log(firstName);

// let PI = 3.1415;




// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);
// javascriptIsFun = "HELLO";
// console.log(typeof javascriptIsFun);
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof 'Jonas');




// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// const job; // const must be init at declaration

// var job = 'programmer';
// job = 'teacher';
// console.log(job);

// lastName = 'Djfasjd';
// console.log(lastName);


// const now = 2024;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);// 2**3 = 2^3

// const firstName = 'Jonas';
// const lastName = 'Duong'
// console.log(firstName + " " + lastName);


// let x = 10 + 5;
// x++;
// x--;

// console.log(--x);
// console.log(ageJonas > ageSarah);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);


// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year-old " + job;
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string ....`)
// console.log('String with \n\
//     multiple \n\
//     lines');

// console.log(`String
// multiple
// lines`)





// const age = 15;
// if (age >= 18) {
//     console.log("Sarah can start driving license");
// } else {
//     const yearLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
// }
// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//     century = 20;

// } else {
//     century = 21;
// }
// console.log(century)


//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN); //NaN is an invalid number so typeof NaN is still number
console.log(String(23), 23);
//type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + '23' + " years old");
console.log("I am " + String(23) + " years old");
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');


let n = '1' + 1;
n = n - 1;
console.log(n)

let m = '10' - '4' - '3' - 2 + '5'
console.log(m);