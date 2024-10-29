// 14.  Write a function to find the longest substring without repeating characters in a given string.
function LongSubString(s) {
    let charIndexMap = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        if (charIndexMap.has(currentChar)) {
            start = Math.max(start, charIndexMap.get(currentChar) + 1);
        }
        charIndexMap.set(currentChar, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}
const prompt = require('prompt-sync')({ sigint: true });
const inputString = prompt('Enter a string: ');
const result = LongSubString(inputString);
console.log(`Length of the longest substring without repeating characters: ${result}`);
