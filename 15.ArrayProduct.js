// 15.  Write a function that takes an array of integers and returns the maximum product that can be obtained by multiplying any three integers in the array.


function maxPro(nums) {
  nums.sort((a, b) => a - b);
  const pro1 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
  const pro2 = nums[0] * nums[1] * nums[nums.length - 1];
  return Math.max(pro1, pro2);
}

const prompt = require('prompt-sync')({ sigint: true });
const input = prompt("Enter integers separated by spaces:");

const arr = input.split(" ").map(Number);

console.log("Maximum product of three numbers is:", maxPro(arr));
