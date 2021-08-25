/* VARIABLES AND CONSTANTS */
// An array to hold all the json data
let data;
// Array of expenditure Objects
let expenditureArray = [];
// An array of % that we will be able to use for our PIE Chart
let percentArray = [];
// Generate random color hex codes for PIE Chart
let colorArray = [];

function drawChart() {
    data = document.getElementById('json-data').value;
    // a f(x) that will convert % into a way we can use them in the pie charts
    percentArray = createPercentArray();
    colorArray = createColorArray();
    populateArray(data);
    drawPie();
}

function populateArray(jsonData) {
    // [expenseArray]This is how you convert JSON Data(Json Array) into a JavaScript Array
    // [jsonData] is the data that was passed into JSON Array in the JSON File
    let expenseArray = JSON.parse(jsonData);
    // We are using the 'for loop' to put all the JSON Data into the [expenseArray] JavaScript Array
    // In the 'i < expenseArray.expenditure.length' [expenditures] is the array name in the JSON file and we want to find the length of that Array
    for(i = 0; i < expenseArray.expenditures.length; i++) {
        let expense = expenseArray.expenditure[i];
        // Then we want to throw all the data from expense above into the [expenditureArray] going into each item i.e. [i]
        expenditureArray[i] = expense;
    }
}

// Using function to create an array of percentages that we can actually use
function createPercentArray() {
    let perArr = [];
    /* We are going to go thru each item in the array and get the percent and then multiply it by .02 bc all of them added up together equals
    100 and we want the total to be 2. */
    for(i = 0; i < expenditureArray.length; i++) {
    // We want the percent of each of the items we are going through. We get that by typing 'expenditureArray[i].percent'
        perArr[i] = expenditureArray[i].percent * .02;
    }
    // This will be stored in PercentArray because 'PercentArray' is = to "createPercentArray" up top in the "drawChart()"
    return perArr;
}


// Create Random Color Array
function createRandomColorArray() {
    let randColorArr = [];
    for(i = 0; i < expenditureArray.length; i++) {
    // '16777215' is the same same bit or base number as '#FFFFFF'. So, we need to do all this in order to get a random calor for
    // our array to be put in our PIE Chart
        randColorArr[i] = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    return randColorArr;
}


function drawPie() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    let startAngle = 0;
    let endAngle = 0;

// The for is iterating through percentArray and as long as there is still numbers it will continue to iterate
    for(i = 0; i < percentArray.length; i++){
        // 'startAngle' and 'endAngle' are even to start bc in a circle the beginning has to touch the end to make a full cicle
        startAngle = endAngle;
    }
}

