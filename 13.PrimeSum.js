// 13. Write a function to find the sum of all prime numbers up to a given number.

function isPrime(num) {
    if (num <= 1)
        return false;
    if (num <= 3) 
        return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function primeSum(n) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

const prompt = require('prompt-sync')({ sigint: true });
const Numb = prompt('Enter the number up to which the sum should be calculated: ');
const n = Number(Numb);

console.log(`Sum of prime numbers up to ${n} is: ${primeSum(n)}`);


