
var powerExp = function(num) {
    console.log(num * num);
}(2);

// store in var
var powerExp1 = function(num) {
    return num * num;
}(2);

(function(num) {
    console.log(num*num);
}(2));