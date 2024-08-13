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
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN); //NaN is an invalid number so typeof NaN is still number
// console.log(String(23), 23);
// //type coercion
// console.log("I am " + 23 + " years old");
// console.log("I am " + '23' + " years old");
// console.log("I am " + String(23) + " years old");
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * '2');
// console.log('23' / '2');


// let n = '1' + 1;
// n = n - 1;
// console.log(n)

// let m = '10' - '4' - '3' - 2 + '5'
// console.log(m);



// 5 falsy values: 0, null, NaN, '', undefined
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean({}));
// console.log(Boolean(NaN));


// const money = 100;
// if (money) {
//     console.log("Don't spend it all ;)");

// } else {
//     console.log("You should get a job!");
// }

// let height;
// console.log(height);
// if (height) {
//     console.log("YAY! Height is defined");
// } else {
//     console.log("Height is UNDEFINED");
// }



// const age = 18;
// if (age === 18) {
//     console.log("You just became an adult :D (strict)");
// }
// if (age == 18) {
//     console.log("You just became an adult :D (loose");
// }
// console.log('18' == 18);
// console.log('18' === 18);

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);


// if (favorite === 23) {
//     console.log("Cool! 23 is an amazing number!");
// } else if (favorite === 7) {
//     console.log("7 is also a cool number");
// } else {
//     console.log("Number is not 23 or 7");
// }
// if (favorite !== 23) {
//     console.log("Why not 23?");
// }

// const hasDriversLicense = true;
// const hasGoodVision = false;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive");
// }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired);


// const day = 'monday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log("Plan course structures");
//         console.log("Go to coding meetup");
//         break;
//     case 'tuesday':
//         console.log("Prepare theory videos");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("Write code examples");
//         break;
//     case 'friday':
//         console.log("Record videos");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("Enjoy the weekend :D");
//         break;
//     default:
//         console.log("Not a valid day!");

// }


