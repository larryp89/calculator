// variables
let firstNum;
let secondNum;
let operator;

// functions for calculate
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const calculate = (num1, num2, op) => op(num1, num2);

// add event listeners
const screen = document.querySelector(".calc-screen-h1");
const numButtons = document.querySelectorAll(".calc-button.num");
const clearScreenButton = document.querySelector(".clr");
const operatorButtons = document.querySelectorAll(".op");
const equalsButton = document.querySelector(".equals");

numButtons.forEach((element) => {
  element.addEventListener("click", function () {
    if (screen.textContent == 0) {
      clearScreen();
      screen.textContent = this.textContent;
    } else {
      screen.textContent = screen.textContent + this.textContent;
    }
  });
});

clearScreenButton.addEventListener("click", function () {
  screen.textContent = "0";
  firstNum = 0;
  secondNum = 0;
  operator = undefined;
});

operatorButtons.forEach((element) => {
  element.addEventListener("click", function () {
    if (operator === undefined) {
      firstNum = parseFloat(screen.textContent);
      clearScreen();
      if (element.textContent === "+") {
        operator = add;
      } else if (element.textContent === "-") {
        operator = subtract;
      } else if (element.textContent === "/") {
        operator = divide;
      } else if (element.textContent === "X") {
        operator = multiply;
      }
    } else {
      secondNum = parseFloat(screen.textContent);
      clearScreen();
      total = calculate(firstNum, secondNum, operator);
      firstNum = total;
      if (element.textContent === "+") {
        operator = add;
      } else if (element.textContent === "-") {
        operator = subtract;
      } else if (element.textContent === "/") {
        operator = divide;
      } else if (element.textContent === "X") {
        operator = multiply;
      }
    }
  });
});

equalsButton.addEventListener("click", function () {
  secondNum = parseFloat(screen.textContent);
  total = calculate(firstNum, secondNum, operator);
  operator = undefined;
  firstNum = total;
  screen.textContent = total;
});

const clearScreen = function () {
  return (screen.textContent = "");
};
