/**350. Intersection of Two Arrays II
Easy

4331

692

Add to List

Share
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted. */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let dict = {};
    let rtnA = [];
    for (let i = 0; i < nums1.length; i++) {
        if (dict[nums1[i]] == null) {
            dict[nums1[i]] = 1
        } else {
            dict[nums1[i]] = Number(dict[nums1[i]]) + 1
        }

    }
    for (let i = 0; i < nums2.length; i++) {
        if (dict[nums2[i]] != null && dict[nums2[i]] > 0) {
            dict[nums2[i]] = dict[nums2[i]] - 1
            rtnA.push(nums2[i])
        }
    }



    return rtnA;
};


console.log(JSON.stringify(intersection([1, 2, 2, 1], [2, 2])))