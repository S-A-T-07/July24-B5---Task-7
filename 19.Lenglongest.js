// 19.  Write a function that finds the length of the longest increasing subsequence in an array.

function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    const dp = new Array(nums.length).fill(1); 

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

const prompt = require('prompt-sync')({ sigint: true });
const input = prompt('Enter an array of integers, separated by spaces: ');
const nums = input.split(' ').map(Number);

const longestIncreasingSubsequenceLength = lengthOfLIS(nums);
console.log('The length of the longest increasing subsequence is:', longestIncreasingSubsequenceLength);
