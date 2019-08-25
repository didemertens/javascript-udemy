var name = "global";

var runIt = function(fn) {
    var name = "runIt";
    console.log("from runIt ----");
    console.log(this);
    console.log(this.name);
    fn();
};

// var fun2 = function() {
//     var name = "fun2";
//     console.log("from fun2 ----");
//     console.log(this);
//     console.log(this.name);  
// };

runIt(function fun2() {
        var name = "fun2";
        console.log("from fun2 ----");
        console.log(this);
        console.log(this.name);  
});