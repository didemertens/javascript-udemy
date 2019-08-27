//Immediately invoke all three functions.
//Create a function that adds two numbers and assign it to a variable

var totalNumbers = function(num1, num2) {
    return num1 + num2;
}(2,2);



//Create a function that multiplies the previous number by itself and store it in a second variable.
var multipleNumber = function() {
    return totalNumbers * totalNumbers;
}();


//Create a function that prints to the console the variable that contains the results of the previous function.
(function(){
    console.log(multipleNumber);
}());