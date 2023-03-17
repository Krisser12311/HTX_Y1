// Start the test
onEvent("startQuizz", "click", function startQuizz(){
  setScreen("question1");
});

// Restart the test
onEvent("restart", "click", function(){
  setScreen("main");
});
// Sent to home screen
onEvent("home", "click", function(){
  setScreen("main");
  console.log("You were sent to home screen");
});

// Show all studieretninger
onEvent("show", "click", function(){
  setScreen("list");
});

// sent from all studieretninger back to homepage
onEvent("home1", "click", function(){
  setScreen("main");
});


// Total count
var total = [
  {"studieretning": "fysAMatA", "percentage": 0},
  {"studieretning": "kemiAMatA", "percentage": 0},
  {"studieretning": "programingAMatA", "percentage": 0},
  {"studieretning": "komitADesignB", "percentage": 0},
  {"studieretning": "TeknologiADesignB", "percentage": 0},
  {"studieretning": "BiotekAMatA", "percentage": 0}
];

// question 1
var question1 = [
  // example {"id" : "int", "type": "buttom id", "studieretning": "Logic", "percentage": Here you put the percentage you want to add to the total},
  {"type": "q1a1", "studieretning" : "TeknologiADesignB", "percentage": 25},
  {"type": "q1a2", "studieretning" : "komitADesignB", "percentage": 10},
  {"type": "q1a3", "studieretning" : "programingAMatA", "percentage": 20},
  {"type": "q1a4", "studieretning" : "BiotekAMatA", "percentage": 20}
];

onEvent("q1a1", "click", function() {
  aswneredQuestion("question1", "q1a1");
});

onEvent("q1a2", "click", function() {
  aswneredQuestion("question1", "q1a2");
});

onEvent("q1a3", "click", function() {
  aswneredQuestion("question1", "q1a3");
});

onEvent("q1a4", "click", function() {
  aswneredQuestion("question1", "q1a4");
});

// question 2 
var question2 = [
  {"type": "q2a1", "studieretning" : "fysAMatA", "percentage": 50},
  {"type": "q2a2", "studieretning" : "kemiAMatA", "percentage": 25},
  {"type": "q2a3", "studieretning" : "komitADesignB", "percentage": 20},
  {"type": "q2a4", "studieretning" : "programingAMatA", "percentage": 35}
] ;

onEvent("q2a1", "click", function() {
  aswneredQuestion("question2", "q2a1");
});

onEvent("q2a2", "click", function() {
  aswneredQuestion("question2", "q2a2");
});

onEvent("q2a3", "click", function() {
  aswneredQuestion("question2", "q2a3");
});

onEvent("q2a4", "click", function() {
  aswneredQuestion("question2", "q2a4");
});

// main function to check if the user is eligable for the studieretning


function aswneredQuestion(question, buttonPressed) { // question variable is yoused to figuere out what question we a targeting, button variable is yoused to figure out the spesefic button and what value we aim to target  
    if (question == "question1") {
      for (var i = 0; i < question1.length; i++) {
        if (question1[i].type == buttonPressed) {
          for (var j = 0; j < total.length; j++) {
            if (total[j].studieretning == question1[i].studieretning) {
            total[j].percentage = total[j].percentage + question1[i].percentage;
            //console.log(question1[i].percentage);
            //console.log("Din totale procent er: " + total[j].percentage);
            setScreen("question2");
            }
          }
        }
      }
    }
    if (question == "question2") {
      for (var i = 0; i < question2.length; i++) {
        if (question2[i].type == buttonPressed) {
          for (var j = 0; j < total.length; j++) {
            if (total[j].studieretning == question2[i].studieretning) {
            total[j].percentage = total[j].percentage + question2[i].percentage;
            //console.log(question2[i].percentage);
            //console.log("Din totale procent er: " + total[j].percentage);
            calculateAnswer();
            setScreen("answer");
            }
          }
        }
      }
    }
}

function calculateAnswer() {
  for (var i = 0; i < total.length; i++) {
    if (total[i].percentage > 100) {
      total[i].percentage = 100;
    }
    // list the 4 biggest precentages
    var max = total[0].percentage;
    var max2 = total[1].percentage;
    var max3 = total[2].percentage;
    var max4 = total[3].percentage;
    var max5 = total[4].percentage;
    var max6 = total[5].percentage;
    var maxArray = [max, max2, max3, max4, max5, max6];
    var Arraysort = maxArray.sort(function(a, b){return b-a});
    //console.log(maxArray);
    // show the 4 biggest precentages
    if (total[i].percentage == maxArray[0]) {
      setText("answer1", "Du er kvalificeret til " + total[i].studieretning + " med " + total[i].percentage + "%");
    }
    if (total[i].percentage == maxArray[1]) {
      setText("answer2", "Du er kvalificeret til " + total[i].studieretning + " med " + total[i].percentage + "%");
    }
    if (total[i].percentage == maxArray[2]) {
      setText("answer3", "Du er kvalificeret til " + total[i].studieretning + " med " + total[i].percentage + "%");
    }
    if (total[i].percentage == maxArray[3]) {
      setText("answer4", "Du er kvalificeret til " + total[i].studieretning + " med " + total[i].percentage + "%");
    }
    // check if the user is eligable for less than 4 studieretninger
    if (maxArray[1] <= 0) {
      hideElement("answer2");
      showElement("V");
    }
    if (maxArray[2] <= 0) {
      hideElement("answer3");
      //console.log("Why cant you see me");
    }
    if (maxArray[3] <= 0) {
      hideElement("answer4");
      showElement("V");
    }
  }
}

// Handle all studieretninger

// Handle's Kom/IT and Design
onEvent("btnKomITADesignB", "click", function(){
  setScreen("komitADesignB");
});

onEvent("home3", "click", function(){
  setScreen("list");
});

// Handle's fysAMatA
onEvent("btnFysAMatA", "click", function(){
  setScreen("fysAMatA");
});

onEvent("home5", "click", function(){
  setScreen("list");
});
