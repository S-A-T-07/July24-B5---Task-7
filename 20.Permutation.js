// 20.  Write a function to find the next greater permutation of a given sequence of numbers.

function Permutation(nums) {
    let n = nums.length;
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i < 0) {
        nums.reverse();
        return nums;
    }
    let j = n - 1;
    while (nums[j] <= nums[i]) {
        j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    return nums;
}

const prompt = require('prompt-sync')({ sigint: true });
const input = prompt('Enter an array of integers, separated by spaces: ');
const nums = input.split(' ').map(Number);

const nextGreaterPerm = Permutation(nums);
console.log('The next greater permutation is:', nextGreaterPerm);
