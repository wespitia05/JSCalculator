// ---------- CALCULATOR FUNCTIONALITY ---------- //

const display = document.getElementById("display");

// this function adds the buttons pressed to the display
function appendToDisplay(input) {
    display.value += input;
}

// this function clears the display
function clearDisplay() {
    display.value = "";
}

// this function handles the actual calculating of the calculator
function calculate() {
    // use try/catch in case of any potential error inputs
    // example 3.14 + (no value) catches the error and displays error msg
    try {
        // eval() grabs any input and evaluates it (basically calculates)
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}