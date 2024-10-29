// 5.  Write a program that simulates a basic calculator capable of performing addition, subtraction, multiplication, and division. The program should prompt the user to enter two numbers and an operator (+, -, *, /), then output the result of the operation.

const prompt = require('prompt-sync')({ sigint: true })

const operand1 = prompt('Enter the first number: ')
const operand2 = prompt('Enter the second number: ')
const operator = prompt('Enter the operator(+,-,*,/): ')

op1 = Number(operand1)
op2 = Number(operand2)

var result;

switch (operator) {
    case '+':
        result = op1 + op2
        console.log(`Addition: ${op1} + ${op2} = ${result}`);
        
        break;
    
    case '-':
        result = op1 - op2
        console.log(`Subtraction: ${op1} - ${op2} = ${result}`);
        break;
    case '*':
        result = op1 * op2
        console.log(`Multiplication: ${op1} * ${op2} = ${result}`);
        break;
    case '/':
        result = op1 / op2
        console.log(`Division: ${op1} / ${op2} = ${result}`);
        break;
    default:
        console.log("Please input a valid operator!!");
        
}