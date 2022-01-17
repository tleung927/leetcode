/**16. 3Sum Closest
Medium

4995

222

Add to List

Share
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0 */

// https://leetcode.com/problems/3sum-closest/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let diff = Number.MAX_SAFE_INTEGER;
    let rtn = null;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        if (nums[i] === nums[i - 1]) continue;
        while (left < right) {
            let newSum = nums[i] + nums[left] + nums[right];
            if (Math.abs(target - newSum) < diff) {
                diff = Math.abs(target - newSum);
                rtn = newSum;
            }
            if (newSum > target) {
                right--;
            } else if (newSum < target) {
                left++;
            }
            else if (newSum === target) {
                break;
            }
        }
    }
    return rtn;
};


console.log(JSON.stringify(threeSumClosest([1, 1, 1, 0], -100)))