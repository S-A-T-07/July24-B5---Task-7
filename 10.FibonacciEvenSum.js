// 10.  Write a program to generate the Fibonacci sequence up to a specified limit and then calculate the sum of all even numbers in the sequence.

const prompt = require('prompt-sync')({ sigint: true });
const Numb = prompt('Enter the number of digits: ');
const n = Number(Numb);
var result = "";
var sumEven = 0;

function fibonacci(num) {
    if (num === 0)
        return 0; 
    if (num === 1)
        return 1; 
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function FibonacciSeries(n) {
    var temp;
    for (let i = 0; i < n; i++) {
        temp = fibonacci(i);
        if (temp % 2 == 0) {
            sumEven += temp;
        }
        result += temp + " ";
    }
}

FibonacciSeries(n);
console.log(`Fibonacci Series: ${result}`);
console.log(`Sum of above Even numbers: ${sumEven}`);
