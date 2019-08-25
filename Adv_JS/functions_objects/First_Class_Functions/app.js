var sum = function(x,y) {
    return x + y;
};

var a = sum;

var run = function(fn, a, b) {
    console.log(fn(a,b));
};

run(a, 2, 2);

run(function(x, y) {
    return x * y;
}, 2, 5);