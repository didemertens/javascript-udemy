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

// let firstName = 'john';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year) {
//   return 2019 - year;
// }

// // ES5
// console.log('This is ' + firstName + ' ' + lastName
//             + ', he was born in ' + yearOfBirth +
//             '. Today he is ' + calcAge(yearOfBirth) + ' years old.')

// // ES6
// console.log(`This is ${firstName} ${lastName}, he was born in ${yearOfBirth}. So today he is ${calcAge(yearOfBirth)} years old.`)


// // new string methods
// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('j'));
// console.log(n.includes(' '));
// console.log(n.endsWith('j'));
// console.log(`${firstName} `.repeat(5));

/////////////////////////////////////////////
// ARROW FUNCTIONS

// const years = [1990, 1994, 1992, 1995];

// // ES5
// var ages5 = years.map(function(el) {
//   return 2019 - el;
// });

// console.log(ages5);

// // ES6
// let ages6 = years.map(el => 2019 - el);

// console.log(ages6);


// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`)
// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });

// console.log(ages6);


//ES5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     var self = this;
//     document.querySelector('.green').addEventListener('click', function() {
//       var str = 'This is box number ' + self.position + ' is ' + self.color;
//       alert(str);
//     });
//   }
// }
// box5.clickMe();


//ES6

// const box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     document.querySelector('.green').addEventListener('click', () =>  {
//       var str = `This is box number ${this.position} is ${this.color}`;
//       alert(str);
//     });
//   }
// }
// box6.clickMe();




// const box66 = {
//   color: 'green',
//   position: 1,
//   clickMe: () => {
//     document.querySelector('.green').addEventListener('click', () =>  {
//       var str = `This is box number ${this.position} is ${this.color}`;
//       alert(str);
//     });
//   }
// }
// box66.clickMe();

// function Person(name) {
//   this.name = name;
// }

// // ES5
// Person.prototype.myFriends5 = function(friends) {
//     var arr = friends.map(function(el){
//         return this.name + ' is friends with ' + el;
//     }.bind(this));
//     console.log(arr);
// }

// var friends = ['Bob', 'Jane'];
// new Person('John').myFriends5(friends);


// // ES6
// Person.prototype.myFriends6 = function(friends) {
//     var arr = friends.map(el =>
//         `${this.name} is friends with ${el}`);
//     console.log(arr);
// }

// var friends = ['Bob', 'Jane'];
// new Person('Mike').myFriends6(friends);

/////////////////////////////////////////////

// DESTRUCTERING

// var john = ['john', 26];
// var name = john[0];
// var age = john[1];

// ES6

// const john = ['john', 26];
// const [name, age] = john;
// console.log(name, age);


// const obj = {
//   firstName: 'John',
//   lastName: 'Smith',
// }

// const {firstName, lastName} = obj;

// console.log(firstName);

// const {firstName: a, lastName: b} = obj;
// console.log(b);


// function caclAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// const [age2, retirement] = caclAgeRetirement(1999);


// console.log(age, retirement)

/////////////////////////////////////////////

// ARRAYS

// const boxes = document.querySelectorAll('.box');

// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
// // Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// for (const cur of boxesArr6) {
//   if (cur.className.includes('blue')) {
//     continue;
//   }
//     cur.textContent = 'I changed to blue';
// }

// const ages = [12, 6, 3, 8, 11, 21];

// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));

/////////////////////////////////////////////

/// SPREAD OPERATOR

// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }

// // var sum1 = addFourAges(19, 31, 3, 21);

// // console.log(sum1);

// // ES5
// var ages = [19, 31, 3, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);


// const familySmith = ['John', 'Jane', 'Mike'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'Lilly', ...familyMiller];
// console.log(bigFamily);



// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];

// Array.from(all).forEach(cur => cur.style.color = 'purple');

/////////////////////////////////////////////

// REST PARAMETERS (in function declaration. Spread in function call.)

// // // ES5
// // function isFullAge5() {
// //   var argsArr =
// //   Array.prototype.slice.call(arguments);

// //   argsArr.forEach(function(cur) {
// //     console.log((2019 - cur) >= 18);
// //   })
// // }

// // isFullAge5(2010, 1990, 1999, 1965);


// // ES6

// function isFullAge6(...years) {
//   years.forEach(cur => console.log((2019 - cur) >= 18));
// }

// isFullAge6(2010, 1990, 1999, 1965);

// // ES5
// function isFullAge5(limit) {
//   var argsArr =
//   Array.prototype.slice.call(arguments, 1);

//   argsArr.forEach(function(cur) {
//     console.log((2019 - cur) >= limit);
//   })
// }

// isFullAge5(8, 2000, 2010, 1990, 1999, 1965);


// // ES6

// function isFullAge6(limit, ...years) {
//   years.forEach(cur => console.log((2019 - cur) >= limit));
// }

// isFullAge6(16, 2000, 2010, 1990, 1999, 1965);


/////////////////////////////////////////////

// DEFAULT PARAMETERS

// ES5

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//   lastName === undefined ? lastName = 'Smith' : lastName;
//   nationality === undefined ? nationality = 'English' : nationality;

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }

// ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'English'){

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// console.log(john);

// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
// console.log(emily);

/////////////////////////////////////////////

// MAPS

// const question = new Map();
// question.set('question', 'What is the official name of the latest major JavaScript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct!');
// question.set(false, 'Wrong, try again.');

// console.log(question.get('question'));
// console.log(question.size);

// // if(question.has(4)) {
// // //     question.delete(4);
// // }

// // question.clear();

// // question.forEach((value, key) =>
// //   console.log(`This is the key ${key} and it is set to ${value}`))

// for (let [key, value] of question.entries()) {
//   if (typeof(key) === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const ans =  parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));

/////////////////////////////////////////////

// CLASSES

// ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calcAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

john5.calcAge();

// ES6
class Person6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calcAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log('Hey!');
  }
}

const john6 = new Person6('John', 1990, 'teacher');
john6.calcAge();
Person6.greeting();



/////////////////////////////////////////////

/////////////////////////////////////////////

