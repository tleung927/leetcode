/**
 * 647. Palindromic Substrings
Medium

5490

148

Add to List

Share
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 
 */

// https://leetcode.com/problems/palindromic-substrings/

var countSubstrings = function (s) {
    if (s.length === 1) return 1;
    let count = 1;
    let numV = 0;
    if (isPalindrome(s)) numV++;
    while (count < s.length - 1) {
        let i = 0;
        while (1 === 1) {
            let newSub = s.substr(i, s.length - count);
            if (isPalindrome(newSub)) {
                numV++;
            }
            if (s.length === newSub.length + i) {
                break;
            }
            i++;
        }
        count++
    }

    return numV + s.length;
};
var isPalindrome = function (s) {

    s = s.replace(/[^0-9a-zA-Z]+/gmi, "");
    s = s.toLowerCase();
    var l = 0, r = s.length - 1;

    while (l < r) {
        if (s.charAt(l) != s.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};
console.log(countSubstrings("aaa"))