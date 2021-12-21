/**152. Maximum Product Subarray
Medium

9659

305

Add to List

Share
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. */

// https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
   
    let max = nums[0]; let min = nums[0]; let rtn = nums[0];
     
     for(let i = 1; i<nums.length; i++){
         
       let mx = max, mn = min;
       max = Math.max(Math.max(nums[i], mx * nums[i]), mn * nums[i]);
       min = Math.min(Math.min(nums[i], mx * nums[i]), mn * nums[i]);
       rtn = Math.max(max, rtn);                    
     }
     return rtn;
     
 };

 console.log(maxProduct([2,3,-2,4]))



