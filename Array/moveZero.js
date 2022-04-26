/**283. Move Zeroes
Easy

8895

240

Add to List

Share
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0] */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let count = 0;
    let i = nums.length;
    while (i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            count++;
        }
    }
    for (let i = 0; i < count; i++) {
        nums.push(0);
    }
    return nums;
};

console.log(JSON.stringify(moveZeroes([0, 0, 1])))
