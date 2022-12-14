// Author: Kristoffer Sørensen
// Date: 14/12/2022

// popup variables
const popup = document.getElementById('popup')
//popup.style.display = 'none'

// variables for the input fields
let productName = document.getElementById("productName");
let protein = document.getElementById("protein");
let fat = document.getElementById("fat");
let carbs = document.getElementById("carbohydrates");

// object for the results
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

            // calculate the total energy and the energy total distribution on carbs, fat and protein
            let energy = {
                carbs: carbs.value * energyDistribution[0],
                fat: fat.value * energyDistribution[1],
                protein: protein.value * energyDistribution[2],
                total: (carbs.value * energyDistribution[0]) + (fat.value * energyDistribution[1]) + (protein.value * energyDistribution[2]),
            }
            console.log("total energy: " + energy.total); // DEBUG TOOL
            
            // calculate the energy distribution in percentages
            let energyDistributionPercentages = {
                carbs: (energy.carbs / energy.total) * 100,
                fat: (energy.fat / energy.total) * 100,
                protein: (energy.protein / energy.total) * 100,
            }
            console.log("energy distribution in percentages: " + energyDistributionPercentages.carbs + "%, " + energyDistributionPercentages.fat + "%, " + energyDistributionPercentages.protein + "%");
            // checks if the energy distribution is correct
            if (energyDistributionPercentages.carbs + energyDistributionPercentages.fat + energyDistributionPercentages.protein == 100) {
                console.log("energy distribution is correct!");
                // check if the results is 55% of the energy comes from carbs, 30% from fat and 15% from protein
                if (energyDistributionPercentages.carbs == 17 && energyDistributionPercentages.fat == 37 && energyDistributionPercentages.protein == 17) {
                    console.log("This is healthy!");
                    // clear the input fields
                    // add the results to the results object add percentage, product name, energyDistribution and if it is healthy or not
                    results[productName.value] = {
                        energyDistribution: energyDistributionPercentages,
                        healthy: true,
                    }
                    // opens the results popup page.
                    openPupup();
                    // clear the input fields
                    clearInput();
                } else {
                    console.log("This is not healthy!");
                    // add the results to the results object add percentage, product name, energyDistribution and if it is healthy or not
                    results[productName.value] = {
                        energyDistribution: energyDistributionPercentages,
                        healthy: false,
                    }
                    // opens the results popup page.
                    openPupup();
                    // clear the input fields
                    clearInput();
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

function showResults() {
    // check if the results object is empty
    if (Object.keys(results).length == 0) {
        alert("There are no results!");
    } else {
        // show the results
        console.log(results);
    }
}

const openPupup = () => {
    // open the popup
    //popup.style.display = 'block';

    // check if the results object is empty
    if (Object.keys(results).length == 0) {
        alert("There are no results!");
    } else {
       // assign the results to the popup list
        for (let i in results) {
            document.getElementById("productNameRes").innerHTML = results[i].energyDistribution.productName;
            document.getElementById("carbsRes").innerHTML = results[i].energyDistribution.carbs;
            document.getElementById("fatRes").innerHTML = results[i].energyDistribution.fat;
            document.getElementById("proteinRes").innerHTML = results[i].energyDistribution.protein;
            // check if the product is healthy or not
            if (results[i].healthy == true) {
                document.getElementById("healthyRes").innerHTML = "Healthy";
            } else {
                document.getElementById("healthyRes").innerHTML = "Not Healthy";
            }
        }
    }

    
}

function closePopup() {
    // close the popup
    popup.style.display = 'none';

}