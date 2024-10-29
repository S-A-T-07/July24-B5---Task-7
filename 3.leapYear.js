// 3.  Write a program that determines if a given year is a century year and a leap year.

// A century year is divisible by 100.
// A leap year is : (i) divisible by 4 and not by 100  (In this problem not necessary since we need to check for century also)
//                      OR
//                  (ii) divisible by 100 and 400

//                  (iii) Divisible by 4, 100, and 400



function isCenturyYear(year) {
    return year % 100 === 0;
}

function isLeapYear(year) {
    
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function checkYear(year) {
    const centuryCheck = isCenturyYear(year) ? 'a Century Year' : 'not a Century Year';
    const leapCheck = isLeapYear(year) ? 'a Leap Year' : 'not a Leap Year';
    
    console.log(`${year} is ${centuryCheck} and ${leapCheck}.`);
}

const prompt = require('prompt-sync')({ sigint: true });
const num = prompt("Enter a year: ");
const year = Number(num);
checkYear(year);
