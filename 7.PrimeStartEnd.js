// 7.  Write a program to find all prime numbers between two given numbers (entered by the user).

const prompt = require('prompt-sync')({ sigint: true });
const Numb = prompt('Enter the starting: ');
let a = Number(Numb);
const Numb1 = prompt('Enter the ending: ');
const b = Number(Numb1);

console.log(`Prime Numbers between ${a} and ${b} are: `);

while (a <= b) {
    if (a == 1) {
        // console.log(`1 is neither a prime nor a composite number`);
        a++;
        continue;
    }

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i == 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        console.log(a);
    }
    
    a++;
}
