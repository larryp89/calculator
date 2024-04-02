// functions for calculate
const add = function add(num1, num2) {
  return num1 + num2;
};

const subtract = function subtract(num1, num2) {
  return num1 - num2;
};

const multiply = function multiply(num1, num2) {
  return num1 * num2;
};

const divide = function divdie(num1, num2) {
  return num1 / num2;
};

// Calculator operation
let firstNum;
let secondNum;
let operator;

const operation = function operation(num1,num2, op){
    return op(num1, num2)
} 
