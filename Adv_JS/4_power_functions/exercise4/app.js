
//Add a click handler to the javascript logo. The first time it is clicked after the page loads, display to the console: "You have clicked this logo for the first time."
//The second and subsequent clicks, display "You have clicked the logo again."
//Create this without using any global variables.

(function() {
    let counter = 0
    document.querySelector('#logo').addEventListener('click', function() {
        if (counter === 0) {
            console.log("You have clicked this logo for the first time.")
        } else {
            console.log("You have clicked the logo again.");
        };
        counter++
    });
}());



