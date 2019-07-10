// var john {
//   name : 'John',
//   yearOfBirth: 1990,
//   job: 'teacher',
// };

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge =  function() {
    console.log(2019 - this.yearOfBirth);
  }

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'designer');
var jane = new Person('Jane', 1999, 'teacher');

john.calculateAge();
console.log(john.lastName);
