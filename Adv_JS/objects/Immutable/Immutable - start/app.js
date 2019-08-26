"use strict"

var obj = {
    firstName: "Steven",
    lastName: "Smith",
    startDate: "January 10, 2015",
    type: "admin"
};

// Object.defineProperty(obj, "startDate", {
//     writable: false
// });

// obj.firstName = "Sarah";
// obj.startDate = "January 5, 2000";

// Object.seal(obj);

Object.freeze(obj);

// obj.newProp = true;
// delete obj.type;
obj.firstName = "Sarah"