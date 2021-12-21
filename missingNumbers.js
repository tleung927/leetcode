/**
 * 268. Missing Number
Easy

4385

2745

Add to List

Share
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
Example 4:

Input: nums = [0]
Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.

 */

// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums.sort(function (a, b) { return a - b });
    if (nums.includes(0) === false) return 0;
    let start = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (start === nums[i]) {
            start++;
        } else {
            return start;
        }
    }

    if (start - 1 === nums[nums.length - 1]) {
        return start;
    }

    return 1;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));