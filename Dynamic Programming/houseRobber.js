/**198. House Robber
Medium

10146

228

Add to List

Share
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12. */

// https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 0) return 0;
    let dp = [];
    // store the first two house, 
    // first is the first house
    // seconde is the max between first and second
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1])

    // start from the 3rd like decode ways 
    for (let i = 2; i < nums.length; i++) {
        // the max of current is current + the two house ahead history  or the previous house 
        // store the larger value
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
    }
    return dp[nums.length - 1];
};

console.log(rob([1, 2, 3, 1]));