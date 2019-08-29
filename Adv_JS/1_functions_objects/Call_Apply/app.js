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

greeting.call(user1, "Good Morning", ".");
greeting.call(user2, "Good Afternoon", "!");

greeting.apply(user1, ["Morning", "!"])

console.log(user1.fullName.call(user2));