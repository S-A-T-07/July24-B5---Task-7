//17.   Write a function that finds the first missing positive integer in an unsorted integer array.

function Missing(nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b)
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
}

const prompt = require('prompt-sync')({ sigint: true });
const input = prompt('Enter an array of integers, separated by spaces: ');
const nums = input.split(' ').map(Number);

const missingPositive = Missing(nums);
console.log('The first missing positive integer is:', missingPositive);
