/**139. Word Break
Medium

8943

407

Add to List

Share
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 */

// https://leetcode.com/problems/word-break/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (wordDict.findIndex(x => x === s.substring(i, j)) > -1) {
                if (j === 0) {
                    dp[i] = true;
                } else {
                    dp[i] = dp[i] === true ? true : dp[j]
                }
            }
        }
    }
    return dp[s.length]
};



console.log(wordBreak("catsandog",
    ["cats", "dog", "sand", "and", "cat"]))