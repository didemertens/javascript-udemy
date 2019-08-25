"use strict";

var name = "global";

var fun = function() {
    var name = "fun";
    console.log("from fun ----");
    console.log(this);
    console.log(this.name);
};

fun();

// // var fun2 = function() {
// //     var name = "fun2";
// //     console.log("from fun2 ----");
// //     console.log(this);
// //     console.log(this.name);  
// // };

// runIt(function fun2() {
//         var name = "fun2";
//         console.log("from fun2 ----");
//         console.log(this);
//         console.log(this.name);  
// });