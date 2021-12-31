/**55. Jump Game
Medium

9113

537

Add to List

Share
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 */

// https://leetcode.com/problems/jump-game/




/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if (nums.length === 1) return true;

    let dist = 0;
    for (let i = 0; i < nums.length; i++) {
        dist = Math.max(nums[i], dist);
        if (dist === 0 && i != nums.length - 1) return false;
        dist--;
    }
    return true;
};


// if index > max step then return false
var canJump2 = function (nums) {
    if (nums.length === 1) return true;

    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > max) return false;
        max = Math.max(max, i + nums[i]);
    }

    return true;
};


console.log(canJump2([3, 2, 1, 1, 4]))