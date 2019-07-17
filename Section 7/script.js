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


// ES5

function driversLicence(passedTest){
    console.log(firstName);
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;

  }
    console.log(firstName + ', born in ' + yearOfBirth + ' is allowed to drive.');
}

driversLicence(true);

// ES6

function driversLicence(passedTest){
  let firstName;
  const yearOfBirth = 1990;
  if (passedTest) {
    firstName = 'John';
  }
    console.log(firstName + ', born in ' + yearOfBirth + ' is allowed to drive.');
}

driversLicence(true);
