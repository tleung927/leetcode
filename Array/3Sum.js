/**3Sum
Medium

14907

1428

Add to List

Share
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:
ttttttttttttz
Input: nums = [0]
Output: []
 
*/
// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length <= 2) return [];
    if (nums.length === 3 && nums[0] + nums[1] + nums[2] === 0) { return [nums]; }
    if (nums.length === 3 && nums[0] + nums[1] + nums[2] !== 0) { return []; }

    nums = nums.sort((a, b) => a - b);

    let rtn = [];


    for (let j = 0; j < nums.length - 2; j++) {
        if (nums[j] > 0) break;
        let i = j + 1
        let k = nums.length - 1;

        while (i < k) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                rtn.push([nums[i], nums[j], nums[k]]);
                while (i < k && nums[i] === nums[i + 1]) {
                    i++;
                }
                while (i < k && nums[k] === nums[k - 1]) { k--; }

                i++;
                k--;
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                i++
            }
            else { k--; }
        }


    }

    var hashMap = {}

    rtn.forEach(function (arr) {
        // If your subArrays can be in any order, you can use .sort to have consistant order
        hashMap[arr.join("|")] = arr;
    });

    var result = Object.keys(hashMap).map(function (k) {
        return hashMap[k]
    })

    return result;
};

console.log(threeSum([0,0,0,0]))