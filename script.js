// arrays

var names = ['John', 'Mark', 'Jane'];
var years = [1999, 1994, 1992];

console.log(names.length);

names[names.length-1] = 'Ben';

console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();

console.log(john);

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer'
  : 'John is a designer.';
  console.log(isDesigner);
