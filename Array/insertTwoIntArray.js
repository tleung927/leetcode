/**349. Intersection of Two Arrays
Easy

2777

1888

Add to List

Share
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let dict = {};
    let rtn = {};
    let rtnA = [];
    for (let i = 0; i < nums1.length; i++) {
        if (dict[nums1[i]] == null) {
            dict[nums1[i]] = '.'
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (dict[nums2[i]] != null && rtn[nums2[i]] == null) {
            rtn[nums2[i]] = '.'
        }
    }

    for (let key in rtn) {
        rtnA.push(key);
    }

    return rtnA;
};


console.log(JSON.stringify(intersection([4546,489,4565], [9,4,9,8,4])))