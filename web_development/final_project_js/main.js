// import json

// config variables
let productName = document.getElementById("productName");
let protein = document.getElementById("protein");
let fat = document.getElementById("fat");
let carbs = document.getElementById("carbohydrates");

// stores the results in an object
let results = {};

function calculateEnergyDistribution() {
    // check if any of the fields are empty
    if (productName.value == "" || protein.value == "" || fat.value == "" || carbs.value == "") {
        alert("Please fill all the fields!");
    } else {
        // checks if product name is an integer
        if (isNaN(parseInt(productName.value)) == true) {
            // here we are going to calculate the energy distribution
            console.log("calculating energy distribution...");
            // 55% of the energy comes from carbs, 30% from fat and 15% from protein
            let energyDistribution = [carbsDistribution = 17, fatDistribution = 37, proteinDistribution = 17];

            // calculate the total energy
            let energy = {
                carbs: carbs.value * energyDistribution[0],
                fat: fat.value * energyDistribution[1],
                protein: protein.value * energyDistribution[2],
                total: (carbs.value * energyDistribution[0]) + (fat.value * energyDistribution[1]) + (protein.value * energyDistribution[2]),
            }
            console.log("total energy: " + energy.total);
            
            // calculate the energy distribution in percentages
            let energyDistributionPercentages = {
                carbs: (energy.carbs / energy.total) * 100,
                fat: (energy.fat / energy.total) * 100,
                protein: (energy.protein / energy.total) * 100,
            }
            console.log("energy distribution in percentages: " + energyDistributionPercentages.carbs + "%, " + energyDistributionPercentages.fat + "%, " + energyDistributionPercentages.protein + "%");
            // calculate the energy distribution
            // check if the energy distribution is correct
            if (energyDistributionPercentages.carbs + energyDistributionPercentages.fat + energyDistributionPercentages.protein == 100) {
                console.log("energy distribution is correct!");
                // add the results to the results object
                results[productName.value] = {
                    productName: productName.value,
                    energy: energy,
                    energyDistribution: energyDistributionPercentages,
                }
                // check if the results is 55% of the energy comes from carbs, 30% from fat and 15% from protein
                if (energyDistributionPercentages.carbs == 17 && energyDistributionPercentages.fat == 37 && energyDistributionPercentages.protein == 17) {
                    console.log("This is healthy!");
                    // clear the input fields
                    clearInput();
                } else {
                    console.log("This is not healthy!");
                    // clear the input fields
                    clearInput();
                    // open popup with the results
                    openPopup();
                }
            } else {
                alert("The energy distribution is not correct!");
            }
        } else {
            alert("Please enter a valid product name!");
        }

    }

}

function clearInput() {
    console.log("emptying input fields...");
    protein.value = "";
    fat.value = "";
    carbs.value = "";
    productName.value = "";
}