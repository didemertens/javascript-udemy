// var multiple = 5;

// var obj1 = {
//     start: 1,
//     end: 100,
//     multiple: multiple
// };

// var obj2 = {
//     start: 1,
//     end: 1000,
//     multiple
// };

// var obj1 = {
//     firstName: "Sarah",
//     lastname: "West",
//     fullName() {
//         console.log(this.firstName + " " + this.lastname)
//     }
// };

// var objProto = {
//     fullName() {
//         console.log(this.firstName + " " + this.lastName);
//     }
// };

// var obj = {
//     firstName: "Sarah",
//     lastName: "West"
// };

// Object.setPrototypeOf(obj, objProto);

var obj = {
    start: 0
};

var obj1 = {
    a: 5
};

var obj2 = {
    b: 10
};

Object.assign(obj, obj1, obj2);