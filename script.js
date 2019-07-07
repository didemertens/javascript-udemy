// loops and iteration

// for (var i = 0;  i < 10; i++){
//   console.log(i)
// };

// var john = ['John', 'Smith', 'designer', 1990];

// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// var i = 0
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// continue and break statement

var john = ['John', 'Smith', false, 'designer', 1990];

for (var i = john.length  - 1; i >= 0; i--) {
  // if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}
