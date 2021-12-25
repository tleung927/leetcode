
/**125. Valid Palindrome
Easy

2786

4610

Add to List

Share
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:
 */

// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
   
    s = s.trim().replace(/[^A-Za-z0-9]/g,'')
    let sA = s.split('');
    if(sA.length === 1 || s === '') return true; 
    for(let i= 0,j= sA.length - 1; j > 0; i++,j-- ){
        if(i===j) return true;
        if(sA[i].toLowerCase() !== sA[j].toLowerCase()) return false;
    }
    return true;
};

var isPalindrome2 = function(s) {
    
   
    s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
    s = s.toLowerCase();
    var l = 0, r = s.length - 1;

    while(l<r) {
        if(s.charAt(l) != s.charAt(r)) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};
console.log(isPalindrome("aa"));