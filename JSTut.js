// How PI works
// Pi = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/11...

function calcPI(iterations) {
    //const piVal = 3.14159;
    let pi = 0, divisor = 1;
    // for big numbers over 16 decimals use decimal.js
    for(i = 0; i <= iterations; i++){
        pi = pi + (4/divisor) - (4/(divisor+2));
        divisor +=4;
    }
    document.getElementById("output1").value = pi.toFixed(10);
}

// Fibanoci
// 1, 1, 2, 3 ,5, 8, 13, 21, 34, 55

let fibList = [];
function getFibList(howMany){
    for(i=0; i < howMany; i++) {
        fibList[i] = fib(i);
    }
    // '.shift' is moving the array from starting at index [0] to index [1]
    // '.pop' would take off the last value {index in this case} not the first one
    // '.splice' allows you to take out the value you would place in the () that is in the array
    // so, 'fibList.splice(3,1)' means we want to get rid of 3rd index and only 3rd index,
    // '.splice(3,2)' would get rid of 3rd and 4th index in array
    fibList.shift();
    document.getElementById("output1")
    .value = fibList.join(", ");
}

function fib(whichNum){
    // can define var on their own line
    let num1 = 1, num2 = 0, temp, i = 0;
    while(i < whichNum) {
        temp = num1;
        num1 = num1 + num2;
        num2 = temp;
        i++;
    }
    return num2;
}

// in 'mLText' every space we have a '~' we will replace it with the word type in
// the MadLib Generator

let mLText = "My dear old ~ sat me down to hear some words of wisdom \n" +
"1. Give a man a ~ and you ~ him for a day ~ a man to ~ and he'll ~ forever \n " +
"2. He who ~ at the right time can ~ again \n 3. Always wear ~ ~ in case you're " +
"in a ~ \n 4. Don't use your ~ to wipe your ~ Always have a clean ~ with you";

// Convert string into an array
let mLArray = mLText.split(" ");

// Create array for user input
let inputArray = [];

// Create madLibGenerator() Function
function madLibGenerator() {
    createInputArray();
    
    if(checkForMissingInput()){
        document.getElementById("output1").value = "Enter all values above";
    } else {
        createMLSentence();
    }
}

// Create 'createInputArray()' Function
function createInputArray(){
    // Cycle thru MadLibGenerator on HTML to ensure that each box is filled this can
    // be easily checked because each input has a specific 'id' attached to it
    for(i = 0; i < 14; i++){
        inputArray[i] = document.getElementById("i" +
        i).value;
    }
}

// Create 'checkForMissingInput()' function
function checkForMissingInput(){
    let defaultArrayVals = ["Person", "Noun", "Verb", "Adjective", "Plural Verb", 
    "Body Part", "Event"];

    // If 'true' is returned then an error will be given in f(x) madLibGenerator
    // for not "Enter all values above"
    for(i = 0; i < inputArray.length; i++){
        if(defaultArrayVals.indexOf(inputArray[i]) > -1){
            return true;
        }
    }
    return false;
}

function createMLSentence(){
    let arrIndex = 0;
    for(i = 0; i < mLArray.length; i++) {
        let matchIndex = mLArray.indexOf("~");
        mLArray[matchIndex] = inputArray[arrIndex];
        arrIndex++;
    }
    document.getElementById("output1").value = mLArray.join(" ");
}