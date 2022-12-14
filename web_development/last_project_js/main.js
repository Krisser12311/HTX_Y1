// import json

// stores the results in an object
let results = {};

function calculateEnergyDistribution() {
    // check if any of the fields are empty
    if (document.getElementById("protein").value == "" || document.getElementById("fat").value == "" || document.getElementById("carbs").value == "") {
        alert("Please fill in all fields");
    } else {
        console.log("Calculating energy distribution");
        // get the values from the input fields
        let protein = document.getElementById("protein").value;
        let fat = document.getElementById("fat").value;
        let carbs = document.getElementById("carbs").value;
        
        // calculate the total energy

    }
}