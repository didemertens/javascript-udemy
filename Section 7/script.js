// let and const

// ES5

// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';

// console.log(name5);

// // Es5
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);


// // ES5

// function driversLicence(passedTest){
//     console.log(firstName);
//   if (passedTest) {
//     var firstName = 'John';
//     var yearOfBirth = 1990;

//   }
//     console.log(firstName + ', born in ' + yearOfBirth + ' is allowed to drive.');
// }

// driversLicence(true);

// // ES6

// function driversLicence(passedTest){
//   let firstName;
//   const yearOfBirth = 1990;
//   if (passedTest) {
//     firstName = 'John';
//   }
//     console.log(firstName + ', born in ' + yearOfBirth + ' is allowed to drive.');
// }

// driversLicence(true);

/////////////////////////////////////////////

// IIFES, use block for data privacy

// {
//   const a = 1;
//   let b = 2;
// }

// console.log(a + b);



/////////////////////////////////////////////
// Strings

let firstName = 'john';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2019 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName
            + ', he was born in ' + yearOfBirth +
            '. Today he is ' + calcAge(yearOfBirth) + ' years old.')

// ES6
console.log(`This is ${firstName} ${lastName}, he was born in ${yearOfBirth}. So today he is ${calcAge(yearOfBirth)} years old.`)


// new string methods
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.includes(' '));
console.log(n.endsWith('j'));
console.log(`${firstName} `.repeat(5));

