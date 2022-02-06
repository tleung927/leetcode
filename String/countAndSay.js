/**38. Count and Say
Medium

1108

3007

Add to List

Share
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

For example, the saying and conversion for digit string "3322251":


Given a positive integer n, return the nth term of the count-and-say sequence.

 

Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.
Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 

Constraints:

1 <= n <= 30 */

//https://leetcode.com/problems/count-and-say/ 

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = '1';
    dp[2] = '11'
    dp[3] = '21';
    dp[4] = '1211';
    for (let i = 5; i <= n; i++) {
        dp[i] = helper(dp[i - 1]);
    }
    return dp[n];

};


var helper = function (s) {
    let ret = ''
    let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        let number = 1;
        while (j < arr.length && arr[j] === arr[j + 1]) {
            number += 1;
            i++;
            j++;
        }
        ret += number.toString() + arr[i].toString();
    }
    return ret;
}


console.log(JSON.stringify(countAndSay(6)))

// 111221