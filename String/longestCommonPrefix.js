/**14. Longest Common Prefix
Easy

6814

2768

Add to List

Share
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
 */

// https://leetcode.com/problems/longest-common-prefix/



/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0];

    let max = 0;
    let end = false;
    while (!end && max < strs[0].length) {
        let pre = strs[0].charAt(max);
        for (let i = 0; i < strs.length; i++) {
            if (pre !== strs[i].charAt(max)) {
                end = true;
                break;
            }
            pre = strs[i].charAt(max);
        }
        if (!end) {
            max++;
        }
    }
    return strs[0].substring(0, max);
};


console.log(JSON.stringify(longestCommonPrefix(["flower", "flow", "flight"])))