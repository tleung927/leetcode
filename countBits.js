/**
 * 338. Counting Bits
Easy

5242

262

Add to List

Share
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
 

Constraints:

0 <= n <= 105
 */

// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let rtn = [];
    for(let i = 0; i <=n ; i ++ ){
        rtn.push(i.toString(2).split('').reduce((a, b) => Number(a) + Number(b), 0));
    }
    return rtn;
};

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits2 = function(n) {
    let rtn = new Array(n+1);
     
     rtn[0] = 0;
     rtn[1] = 1;
     rtn[2] = 1;
     
     if(n === 0) return [0];
     else if(n === 1) return [0,1];
     else if (n===2) return [0,1,1];
     
     let c = 2;
     for(let i = 3 ; i <=n ; i++){
         if(i === c*2){
             c = c*2;
             rtn[i] = 1;
         }else{
             rtn[i] = rtn[c]+rtn[i-c];
         }        
     }
     return rtn;
     
 };

console.log(countBits2(5))