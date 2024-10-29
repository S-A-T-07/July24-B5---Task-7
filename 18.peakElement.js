//18.  Write a function to find the peak element in an array. A peak element is an element that is greater than its neighbors.

function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);       
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
}
const prompt = require('prompt-sync')({ sigint: true });
const input = prompt('Enter an array of integers, separated by spaces: ');
const nums = input.split(' ').map(Number);

const peakElement = findPeakElement(nums);
console.log('A peak element is:', peakElement);
