/*
Operator precedence

var x,y;
x = y = (3 + 5) * 4 - 5;

x+1;
x++;

*/

// challenge 1

var massJohn, heightJohn, massMark, heightMark;

massJohn = 70;
heightJohn = 1.70;
massMark = 90;
heightMark = 1.80;

var bmiJohn, bmiMark;
bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark, bmiJohn);

var higherBmi = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's? " + higherBmi);
