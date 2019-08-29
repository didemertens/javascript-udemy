document.addEventListener("DOMContentLoaded", function() {
    var logo = document.querySelector("#logo");

    logo.addEventListener("click", function() {
        console.log("Clicked");
    });
});

var firstName = "John";
    lastName = "West";

var user1 = {
    firstName: "Cory",
    lastName: "Took"
};

var user2 = {
    firstName: "Jamie",
    lastName: "Smith"
};

var fullName = function() {
    setTimeout( () => {
        console.log(this.firstName + " " + this.lastName);
    }, 2000);
};

fullName.call(user1);
fullName.call(user2);