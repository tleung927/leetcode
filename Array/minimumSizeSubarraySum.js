/**209. Minimum Size Subarray Sum
Medium

6351

186

Add to List

Share
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 */
// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    if (nums[0] >= target) return 1;
    let cnt = 0;
    let tmpCnt = 9999999999999;
    let tmpSum = -9999999999999;

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        tmpSum = nums[i];
        if (tmpSum >= target) {
            return 1;
        }
        cnt = 1;

        while (j < nums.length && tmpSum < target && cnt < tmpCnt) {
            tmpSum += nums[j]
            j++;
            cnt++;
        }
        if (tmpSum >= target) {
            tmpCnt = cnt;
        }
    }

    return tmpCnt === 9999999999999 ? 0 : tmpCnt;
};

console.log(JSON.stringify(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])));
