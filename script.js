// objects

var john = {
  firstName : 'John',
  lastName : 'Smith',
  birthYear : 1990,
  family : ['Jane', 'Mark', 'Bob', 'Emily'],
  job : 'teacher',
  isMarried : false,
  calcAge : function() {
    this.age = 2019 - this.birthYear;
  }
};

// console.log(john.family[2]);

// john.job = 'designer';

// console.log(john.job);

john.calcAge();
console.log(john.age)
