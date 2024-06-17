let display = document.getElementById('display');
let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function chooseOperation(operation) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentOperation) {
        secondOperand = parseFloat(currentInput);
        firstOperand = operate(firstOperand, secondOperand, currentOperation);
    }
    currentOperation = operation;
    currentInput = '';
    display.innerText = firstOperand;
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    display.innerText = '';
}

function calculate() {
    if (currentInput === '' || currentOperation === null) return;
    secondOperand = parseFloat(currentInput);
    const result = operate(firstOperand, secondOperand, currentOperation);
    display.innerText = result;
    firstOperand = result;
    currentInput = '';
    currentOperation = null;
}

function operate(first, second, operation) {
    switch (operation) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            if (second === 0) {
                alert("Cannot divide by zero");
                return first;
            }
            return first / second;
        default:
            return second;
    }
}
