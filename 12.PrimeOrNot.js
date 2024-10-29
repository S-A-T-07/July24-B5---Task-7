// 12.  Write a function to check if a number is a prime number.

var isPrime = 0, flag = 0;

function Prime(n) {
    
    for (let i = 2; i < n; i++){
        if (n % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0)
    console.log("Prime Number");

    else
    console.log("Not a Prime Number");
}

const prompt = require('prompt-sync')({ sigint: true });
const Numb = prompt('Enter a number: ');
const n = Number(Numb);

if (n == 1){
    console.log(`${n} is neither a prime nor a composite number`);
    
}
else
    Prime(n);


