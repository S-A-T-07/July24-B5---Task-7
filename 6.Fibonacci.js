// 6.  Write a program to generate the Fibonacci sequence up to a certain number of terms (entered by the user).

const prompt = require('prompt-sync')({ sigint: true });
const Numb = prompt('Enter the number of terms: ');
const n = Number(Numb);
var i,t1 = 0, t2 = 1, nextTerm;
var result = " "


for (i = 1; i <= n; i++) {
    result += t1
    nextTerm = t1 + t2;
    t1 = t2;
    t2 = nextTerm;
}

console.log(`Fibonacci Series: ${result}`);