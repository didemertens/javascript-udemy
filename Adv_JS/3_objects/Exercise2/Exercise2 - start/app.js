
var content = document.querySelector('#content');

content.innerHTML = "President " + pres.fullName() + " was president number " + pres.order + " of the United States of America.";

// All properties
for (var prop in pres) {
    console.log("Name: " + prop);
    console.log("Type: " + typeof(pres[prop]));
};

console.log('===================');

// Own properties
for (var prop in pres) {
    if (pres.hasOwnProperty(prop)) {
        console.log("Name: " + prop);
        console.log("Type: " + typeof(pres[prop]));
    }
};



