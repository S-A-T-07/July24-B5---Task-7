// 16.  Write a function to find the median of two sorted arrays.

function findMedian(combinedArray) {
    const m = combinedArray.length;
    let result = 0;
    if (m % 2 === 0) {
        result = (combinedArray[m / 2] + combinedArray[(m / 2) - 1]) / 2;
    } else {
        result = combinedArray[Math.floor(m / 2)];
    }
    return result;
}

const prompt = require('prompt-sync')({ sigint: true });
const input1 = prompt('Enter the first array, separated by spaces: ');
const nums1 = input1.split(' ').map(Number);

const input2 = prompt('Enter the second array, separated by spaces: ');
const nums2 = input2.split(' ').map(Number);

const combinedArray = nums1.concat(nums2).sort((a, b) => a - b);

const median = findMedian(combinedArray);
console.log('The median of the two sorted arrays is:', median);
