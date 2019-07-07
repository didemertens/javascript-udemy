///////////////////////////////////////
// Lecture: Hoisting

// calcAge(1995); > this does work

function calcAge(year){
  console.log(2019 - year);
}

// retirement(1999); > this doesn't work because it's a function expression,
// not a function declaration

var retirement = function(year){
  console.log(65 - (2019 - year));
}

console.log(age); // this is undefined (not an error, it knows that there is a var, but doesn't have the value yet
var age = 23;

function foo() {
  var age = 65;
  console.log(age);
}

foo();
console.log(age);




///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









