// 1.Write a program that determines the type of a triangle based on the lengths of its sides (equilateral, isosceles, scalene, or not a triangle).

const prompt = require('prompt-sync')({ sigint: true });

const s1 = prompt('Enter the length of the first side of the triangle: ');
const s2 = prompt('Enter the length of the second side of the triangle: ');
const s3 = prompt('Enter the length of the third side of the triangle: ');

const a = Number(s1);
const b = Number(s2);
const c = Number(s3);

if (a + b > c && a + c > b && b + c > a) {
    
    if (a === b && b === c) {
        console.log("Since all sides of the triangle are equal, it is an equilateral triangle.");
    } else if (a === b || b === c || a === c) {
        console.log("Since two sides of the triangle are equal, it is an isosceles triangle.");
    } else {
        console.log("Since all sides of the triangle are unequal, it is a scalene triangle.");
    }
} else {
    console.log("The given lengths do not form a triangle.");
}
