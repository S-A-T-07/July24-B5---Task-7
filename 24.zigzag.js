// 24.  Write a function to perform the ZigZag conversion given a string and a number of rows.

function zigzagConversion(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = new Array(Math.min(numRows, s.length)).fill("").map(() => "");
    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currentRow] += char;

        if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
        currentRow += goingDown ? 1 : -1;
    }
    return rows.join("");
}

const prompt = require('prompt-sync')({ sigint: true });
const inputString = prompt('Enter the string to convert to ZigZag pattern: ');
const inputRows = parseInt(prompt('Enter the number of rows for ZigZag pattern: '), 10);

const result = zigzagConversion(inputString, inputRows);
console.log('ZigZag Conversion:', result);
