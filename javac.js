let display = document.getElementById("display");

function appendNumber(num) {
    display.value += num;
}

function appendOperator(op) {
    display.value += op;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);
        console.log("Result:", result);
        alert("Result: " + result);
        display.value = result;
    } catch {
        alert("Invalid Expression");
    }
}

function square() {
    let num = parseFloat(display.value);
    let result = num * num;
    console.log("Square:", result);
    alert("Square: " + result);
    display.value = result;
}

function sqrt() {
    let num = parseFloat(display.value);
    let result = Math.sqrt(num);
    console.log("Square Root:", result);
    alert("Square Root: " + result);
    display.value = result;
}

function cube() {
    let num = parseFloat(display.value);
    let result = num * num * num;
    console.log("Cube:", result);
    alert("Cube: " + result);
    display.value = result;
}

function factorial() {
    let num = parseInt(display.value);
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log("Factorial:", result);
    alert("Factorial: " + result);
    display.value = result;
}

function power() {
    let base = parseFloat(prompt("Enter base number:"));
    let exponent = parseFloat(prompt("Enter exponent:"));
    let result = Math.pow(base, exponent);
    console.log("Power:", result);
    alert("Power: " + result);
    display.value = result;
}