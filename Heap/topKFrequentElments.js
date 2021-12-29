/**347. Top K Frequent Elements
Medium

6853

317

Add to List

Share
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
  */

// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let hash = new Map();
    nums.forEach(x => {
        hash.get(x) ? hash.set(x, hash.get(x) + 1) : hash.set(x, 1);
    })

    let rtn = [];
    const mapSort2 = new Map([...hash.entries()].sort((a, b) => b[1] - a[1]));

    try {
        let count = 1;
        mapSort2.forEach((v, key) => {
            rtn.push(key)
            if (count === k) {
                throw 'break';
            }
            count++;
        })
    } catch (e) {

    }
    return rtn;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))