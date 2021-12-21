/**242. Valid Anagram
Easy

3736

193

Add to List

Share
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters. */

// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let tA = t.split('').sort();
    let sA = s.split('').sort();
    if (tA.length !== sA.length) return false;
    
    for(let i = 0; i < tA.length; i++){
        if(tA[i] !== sA[i]){
            return false;
        }
    }
    return true;
    
};

console.log(isAnagram("anagram","nagaram"))