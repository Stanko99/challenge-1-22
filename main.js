// Arrays with data, that will be used to displayed to the html
const parametersPercentage = ["100%", "70% ", "60% ", "40% ", "20% ", "10% "] // Array with random % for spaceholders
const fuel = ["100% Fuel", "70% Fuel", "60% Fuel", "40% Fuel!", "20%! Fuel", "10%! Fuel"];
const throttle = ["40% Throttle", "60% Throttle", "80% Throttle", "100% Throttle"];
const kmph = ["4486 kmph", "5210 kmph", "5555 kmph", "6001 kmph"];
const outcome = ["Sucess!", "Chance to fail mission 70%", "Emergency stop", "Asteroid Incoming", "Death"];
const temperatures = ["-270C", "-350C", "-180C", "-220C", "450C"];
const damage = ["15% Damaged", "30% Damaged", "60% Danger!", "80%!! Danger", "Evacuate!!!"]
const gravity = ["620.389 * sg2", "648.670 * sg2", "(80% AA): 5.35%", "SG -775.6821"]
const distance = ["232.96M", "160.21M", "60.12M", "120.28M", "90.52M", "220.78M", "50.11M"]

// I am going for the array approach just for more controlled output

function infoGet() {
    
    var parametersResult = fuel[Math.floor(Math.random()*fuel.length)];
    //making a var that will randomly select an element from the first array 
    //using the Math.random to select an arbitrary number from 0-1 and then Math.floor to round the number, then multiple it by the lenth of the array
    var percentageShow = document.getElementById("percentagesValues").value =parametersResult;
    console.log(parametersResult);
    // selecting the id of the input field's value and then displaying the var on it.

    var parametersResult = throttle[Math.floor(Math.random()*throttle.length)];
    var percentageShow = document.getElementById("percentagesValues2").value =parametersResult ;
    console.log(parametersResult);
    var parametersResult = kmph[Math.floor(Math.random()*kmph.length)];
    var percentageShow = document.getElementById("percentagesValues3").value =parametersResult ;
    console.log(parametersResult);
    var parametersResult = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
    var percentageShow = document.getElementById("percentagesValues4").value =parametersResult + "-" +"Acceleration";
    console.log(parametersResult);


} 

function showInfo() {
    
    var gravityShow = gravity[Math.floor(Math.random()*gravity.length)];
    var gravityDisplay = document.getElementById("gravityValue").value =gravityShow + "-" +"Gravity";

    var distanceShow = distance[Math.floor(Math.random()*distance.length)];
    var distanceDisplay = document.getElementById("distanceValue").value =distanceShow +"-" + "Distance";

    var damageShow = damage[Math.floor(Math.random()*damage.length)];
    var damageDisplay = document.getElementById("damageValue").value =damageShow;
    
} 

function displayInfo() {
    
    var foodShow = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
    var foodDisplay = document.getElementById("foodValue").value =foodShow + "-" +"Food left";

    var waterShow = parametersPercentage[Math.floor(Math.random()*parametersPercentage.length)];
    var waterDisplay = document.getElementById("waterValue").value =waterShow +"-" + "Water Left";
  
}

function presentLast () {

    var tempShow = temperatures[Math.floor(Math.random()*temperatures.length)];
    var tempDisplay = document.getElementById("tempValue").value =tempShow + "°" +"Outside";

    var outcomeShow = outcome[Math.floor(Math.random()*outcome.length)];
    var outcomeDisplay = document.getElementById("outcomeValue").value =outcomeShow ;
}