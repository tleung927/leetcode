/**368. Largest Divisible Subset
Medium

3168

148

Add to List

Share
Given a set of distinct positive integers nums, return the largest subset answer such that every pair
 (answer[i], answer[j]) of elements in this subset satisfies:

answer[i] % answer[j] == 0, or
answer[j] % answer[i] == 0
If there are multiple solutions, return any of them.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,2]
Explanation: [1,3] is also accepted.
Example 2:

Input: nums = [1,2,4,8]
Output: [1,2,4,8]
 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 2 * 109
All the integers in nums are unique. */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    let i = 0;
    let rtn = {};
    let rtnA = [];
    while (i < nums.length) {
        let j = i + 1;
        while (j < nums.length) {
            if (nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0) {
                if (Object.keys(rtn).length === 0) {
                    rtn[nums[i]] = true;
                    rtn[nums[j]] = true;
                    j++;
                    break;
                }
                let cnt = 0;
                for (let key in rtn) {
                    if ((nums[i] % key === 0 || key % nums[i] === 0) &&
                        (nums[j] % key === 0 || key % nums[j] === 0)) {

                    } else {
                        cnt++;
                    }

                }
                if (cnt === 0) {
                    rtn[nums[i]] = true;
                    rtn[nums[j]] = true;
                    j++;
                    break;
                }
            }
            j++;

        }
        i++;
    }
    for (let key in rtn) {
        rtnA.push(key);
    }

    return rtnA;
};


console.log(JSON.stringify(largestDivisibleSubset([2, 3, 8, 9, 27])))