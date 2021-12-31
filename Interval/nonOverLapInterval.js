/**435. Non-overlapping Intervals
Medium

3171

88

Add to List

Share
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

 

Example 1:

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
Example 2:

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
Example 3:

Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 */

// https://leetcode.com/problems/non-overlapping-intervals/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (inter) {
    inter.sort((a, b) => (Number(a[1]) - Number(b[1])));
    //  inter.sort((a, b) => (Number(a[0]) - Number(b[0]) === 0) && (Number(a[1]) - Number(b[1])));
    let count = 0;
    // for (let i = 0; i < inter.length; i++) {
    //     if (inter[i + 1] != null && Number(inter[i][1]) > Number(inter[i + 1][0])) {
    //         inter[i][1] = Math.max(inter[i][1], inter[i + 1][0])
    //         inter.splice(i + 1, 1);
    //         count++;
    //         i--;
    //     }
    // }

    let r = inter[0][1];
    for (let i = 1; i < inter.length; i++) {
        if (inter[i][0] < r) {
            count++
        }
        else
            r = inter[i][1];
    }
    return count;
};

console.log(JSON.stringify(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])))