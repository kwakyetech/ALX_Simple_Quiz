const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}

const addition =document.getElementById("add");
const subtraction = document.getElementById("subtract");
const multiplication = document.getElementById("multiply");
const division = document.getElementById("divide");

addition.addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = add(num1, num2);
    document.getElementById("result").innerText = `Result: ${result}`;
});

subtraction.addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = subtract(num1, num2);
    document.getElementById("result").innerText = `Result: ${result}`;
});

multiplication.addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = multiply(num1, num2);
    document.getElementById("result").innerText = `Result: ${result}`;
});

division.addEventListener("click", () => {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    try {
        const result = divide(num1, num2);
        document.getElementById("result").innerText = `Result: ${result}`;
    } catch (error) {
        document.getElementById("result").innerText = error.message;
    }
});

const calculation_results = document.getElementById("calculation_results");

calculation_results.appendChild(addition);
calculation_results.appendChild(subtraction);
calculation_results.appendChild(multiplication);
calculation_results.appendChild(division);