/*
Operator precedence

var x,y;
x = y = (3 + 5) * 4 - 5;

x+1;
x++;

*/

// ternary operator

var firstName = 'John';
var age = 12;

// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';

console.log(firstName + ' drinks ' + drink + '.')


// Switch statement
var job = 'gardener';
switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches children.');
    break;
  case 'driver':
    console.log(firstName + ' drives a car.');
    break;
  case 'designer':
    console.log(firstName + ' makes websites.');
    break;
  default:
    console.log(firstName + ' does something else');
}

age = 8;

switch (true) {
  case age < 13:
    console.log('boy');
    break;
  case age >= 13 && age < 20:
    console.log('teenager');
    break;
  default:
    console.log('man');
}
