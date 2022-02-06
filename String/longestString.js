/**3. Longest Substring Without Repeating Characters
Medium

21058

944

Add to List

Share
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces. */

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;
    let tmpArr = [];
    tmpArr[0] = s.charAt(0);
    let max = 1;
    for (let i = 1; i < s.length; i++) {
        if (tmpArr.find(x => x === s.charAt(i)) != null) {
            let sameStr = tmpArr.find(x => x === s.charAt(i));
            i = i - 1;
            while (sameStr !== s.charAt(i)) {
                i--;
            }
            i = i + 1;
            tmpArr = [];

        }
        tmpArr.push(s.charAt(i));
        max = Math.max(max, tmpArr.length);
    }
    return max;
};


console.log(JSON.stringify(lengthOfLongestSubstring("dvdf")))