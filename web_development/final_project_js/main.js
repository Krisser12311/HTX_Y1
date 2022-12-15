// Author: Kristoffer Sørensen
// Date: 14/12/2022

// popup variables
var popup = document.getElementById('popup');
popup.style.display = 'none';

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
            // 55% of the energy comes from carbs, 30% from fat and 15% from protein
            let energyDistribution = [carbsDistribution = 17, fatDistribution = 37, proteinDistribution = 17];

            // calculate the total energy and the energy total distribution on carbs, fat and protein
            let energy = {
                carbs: carbs.value * energyDistribution[0],
                fat: fat.value * energyDistribution[1],
                protein: protein.value * energyDistribution[2],
                total: (carbs.value * energyDistribution[0]) + (fat.value * energyDistribution[1]) + (protein.value * energyDistribution[2]),
            }
            
            // calculate the energy distribution in percentages
            let energyDistributionPercentages = {
                carbs: (energy.carbs / energy.total) * 100,
                fat: (energy.fat / energy.total) * 100,
                protein: (energy.protein / energy.total) * 100,
            }
            // checks if the energy distribution is correct
            document.getElementById("productNameRes").innerHTML = "Product Name: " + productName.value;
            document.getElementById("carbsRes").innerHTML = "Carbohydrates:" + Math.round(energyDistributionPercentages.carbs) + "%";
            document.getElementById("fatRes").innerHTML = "Fat:" + Math.round(energyDistributionPercentages.fat)+ "%";
            document.getElementById("proteinRes").innerHTML = "Protein: " + Math.round(energyDistributionPercentages.protein) + "%";
            if (energyDistributionPercentages.carbs + energyDistributionPercentages.fat + energyDistributionPercentages.protein == 100) {
                // check if the results is 55% of the energy comes from carbs, 30% from fat and 15% from protein
                // opens the results popup page.
                if (energyDistributionPercentages.carbs == 17 && energyDistributionPercentages.fat == 37 && energyDistributionPercentages.protein == 17) {
                    document.getElementById("healthyRes").innerHTML = "Healthy";
                    // clear the input fields
                    // add the results to the results object add percentage, product name, energyDistribution and if it is healthy or not
                    results[productName.value] = {
                        energyDistribution: energyDistributionPercentages,
                        healthy: true,
                    }
                    openPupup();
                    // clear the input fields
                    clearInput();
                } else {
                    document.getElementById("healthyRes").innerHTML = "Not Healthy";
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
    }
}

const openPupup = () => {
    // open the popup
    popup.style.display = 'block';

    // check if the results object is empty
    if (Object.keys(results).length == 0) {
        alert("There are no results!");
    } else {
       // assign the results to the popup list
        for (let i in results) {
            document.getElementById("productNameRes").value = results[i].productName;
            document.getElementById("carbsRes").value = results[i].energyDistribution.carbs;
            document.getElementById("fatRes").value = results[i].energyDistribution.fat;
            document.getElementById("proteinRes").value = results[i].energyDistribution.protein;
            // check if the product is healthy or not
            if (results[i].healthy == true) {
                document.getElementById("healthyRes").value = "Healthy";
            } else {
                document.getElementById("healthyRes").value = "Not Healthy";
            }
        }
    }

    
}

function closePopup() {
    // close the popup
    popup.style.display = 'none';

}