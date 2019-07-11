// // var john {
// //   name : 'John',
// //   yearOfBirth: 1990,
// //   job: 'teacher',
// // };

// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calculateAge =  function() {
//     console.log(2019 - this.yearOfBirth);
//   }

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'designer');
// var jane = new Person('Jane', 1999, 'teacher');

// john.calculateAge();
// console.log(john.lastName);


// Object.create
/*
var personProto = {
  calculateAge : function() {
    console.log(2019 - this.yearOfBirth);
  }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;

var jane = Object.create(personProto,
{
  name: { value : 'Jane' },
  yearOfBirth: { value : 1948 },
  });
*/

// Primitives vs objects

// Primitives
var a = 23;
var b = a;
a = 46;

console.log(a, b)

// objects
var obj1 = {
  name: 'John',
  age: 25,
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age);

// functions
var age = 27;
var obj = {
  name: 'louise',
  city: 'Paris',
};

function change(a,b){
  a = 30;
  b.city = 'London'
}


change(age, obj);
console.log(age, obj.city);









