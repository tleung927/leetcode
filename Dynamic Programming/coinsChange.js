/**322. Coin Change
Medium

9291

225

Add to List

Share
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104 */

// https://leetcode.com/problems/coin-change/


/**similar to climbStair, the min way to get 3 equal to min way to get 1 combine 2
 * let said we have coins 1, 2 and 5 
 * like min way to get 1 is 1 of 1 and min to get two is  two of one (1+1) or one two (2) then min way to get three is 1 (way to  get one) +   2 (way to get two)
 * and similar to else, and there is a flag**** the number it try to get must smaller then the coin itself , like you try to get 1 the coin of (3,5 does need to care) 
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let dp = new Array(amount+1);
    dp[0] = 0;
    for(let i = 1; i <= amount ; i ++){
         dp[i] = 10000;
        for(let j= 0; j< coins.length; j++){
             if(i-coins[j] >= 0){
                    dp[i] = Math.min(dp[i], dp[i-coins[j]]+1);
                }
        }
    }
    if(dp[amount] === 10000) return -1;
    return dp[amount];
        
};

console.log(coinChange([1,2,5],18))