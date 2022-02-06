/**
 * 50. Pow(x, n)
Medium

3880

4951

Add to List

Share
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

Constraints:

-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104
 */

// https://leetcode.com/problems/powx-n/


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    if(n <0 ) x = 1/x;
    let isEven = false;
    
    if(n%2 === 0) isEven = true;
    
    if(isEven){
        n = n/2;
    }else{
        n = (Math.abs(n)-1)/2
    }
    let res = 1;
    
    for(let i = 0; i < Math.abs(n) ;i++){
        res = res * x;
    }
    
    if(isEven){
        return res*res;
    }else{
        return res*res* x;    
    }
    
};

