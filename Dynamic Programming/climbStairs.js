/**70. Climbing Stairs
Easy

9444

291

Add to List

Share
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
 */

// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */

/** if n = 0 then no way up then return 0,
 * if n = 1 only one step then one way up return 1
 * if n = 2 then 1+1 or 2 then two way return 2
 * if n = 3 then it will be the way only 1 +  only 2 step ()
 * so for the next n step will be the previous i-1 ways + i-2 ways
 * then return the dp[n] will be the result  
 */
 var climbStairs = function(n) {
    let dp = new Array(n+1)
    
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i <= n ; i++){
        dp[i] = dp[i-1]+dp[i-2];        
    }
    return dp[n];
};

console.log(climbStairs(3))