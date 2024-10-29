// 8.  Write a program to print Pascal's Triangle up to a certain number of rows (entered by the user).

const prompt = require('prompt-sync')({ sigint: true });
const rows = parseInt(prompt("Enter the number of rows for Pascal's Triangle: "), 10);

function generatePascalTriangle(rows) {
    let triangle = [];

    for (let i = 0; i < rows; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;

        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle[i][i] = 1; 
    }

    return triangle;
}

function printPascalTriangle(triangle) {
    triangle.forEach(row => console.log(row.join(" ")));
}

const pascalTriangle = generatePascalTriangle(rows);
printPascalTriangle(pascalTriangle);
