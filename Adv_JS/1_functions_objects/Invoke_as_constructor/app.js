function Users(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.fullName = function() {
        return (this.firstName + " " + this.lastName);
    };
};

var user1 = new Users('Jamie', 'West');
var user2 = new Users('Sarah', 'East');