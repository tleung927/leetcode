/**22. Generate Parentheses
Medium

11191

439

Add to List

Share
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 */

// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    let dp = new Array();    
    if(n > 1){
        buildPare(dp,n,n,'')
    }
    
    return dp;
};

var buildPare = function (ret,l, r, base) {
    if(l === 0 && r === 0){
        return ret.push(base);
    }
    if(l > 0){
       
        buildPare(ret,l-1,r,base+'(');
    }
    if(r > l){
        
        buildPare(ret,l,r-1,base+')');
    }
}

console.log(JSON.stringify(generateParenthesis(3)))