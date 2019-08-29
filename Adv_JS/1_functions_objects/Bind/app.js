var user1 = {
    firstName: 'John',
    lastName: 'Mertens',
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};


var user2 = {
    firstName: 'Sarah',
    lastName: 'West',
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

var greeting = function(term, punct) {
    console.log(term + " " + this.firstName + punct);
};

var morningGreet = greeting.bind(user1, "Morning");
var afternoonGreet = greeting.bind(user1, "Afternoon");

morningGreet("!");
afternoonGreet(".");