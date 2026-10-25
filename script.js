// script.js - logic for the Basic Arithmetic Calculator

// A reusable function that reads the two inputs, validates them,
// performs the chosen operation and prints the result.
function calculate(operation) {
    // Find the result paragraph so we can update its text
    let resultText = document.getElementById("result");

    // Read what the user typed and turn it into numbers
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // ----- Data validation -----
    // Check that both fields contain a valid number
    if (isNaN(num1) || isNaN(num2)) {
        resultText.textContent = "Please enter a valid number in both fields.";
        resultText.style.color = "crimson";
        return; // stop here, do not calculate
    }

    let answer;

    // Use an if / else chain to work out which button was clicked
    if (operation === "add") {
        answer = num1 + num2;
    } else if (operation === "subtract") {
        answer = num1 - num2;
    } else if (operation === "multiply") {
        answer = num1 * num2;
    } else if (operation === "divide") {
        // Extra check: we cannot divide by zero
        if (num2 === 0) {
            resultText.textContent = "Error: cannot divide by zero.";
            resultText.style.color = "crimson";
            return;
        }
        answer = num1 / num2;
    }

    // Show the result back to the user
    resultText.textContent = "Result: " + num1 + " " +
        symbolFor(operation) + " " + num2 + " = " + answer;
    resultText.style.color = "#1f3a5f";
}

// Small helper that returns the maths symbol for each operation
function symbolFor(operation) {
    if (operation === "add") return "+";
    if (operation === "subtract") return "-";
    if (operation === "multiply") return "x";
    if (operation === "divide") return "/";
    return "";
}

// Tell each button to listen for a click and call calculate()
document.getElementById("addBtn").addEventListener("click", function () {
    calculate("add");
});

document.getElementById("subtractBtn").addEventListener("click", function () {
    calculate("subtract");
});

document.getElementById("multiplyBtn").addEventListener("click", function () {
    calculate("multiply");
});

document.getElementById("divideBtn").addEventListener("click", function () {
    calculate("divide");
});
