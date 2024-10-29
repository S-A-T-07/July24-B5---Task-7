// 9.  Write a program to check if a given number is a perfect number (a number equal to the sum of its proper divisors excluding itself).

const prompt = require('prompt-sync')({ sigint: true });
const number = parseInt(prompt("Enter a number to check if it is a perfect number: "), 10);

function isPerfectNumber(num) {
    if (num <= 1) return false; 

    let sum = 0;


    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

if (isPerfectNumber(number)) {
    console.log(`${number} is a perfect number.`);
} else {
    console.log(`${number} is not a perfect number.`);
}
