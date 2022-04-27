/**367. Valid Perfect Square
Easy

2215

232

Add to List

Share
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.

 

Example 1:

Input: num = 16
Output: true
Example 2:

Input: num = 14
Output: false */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {

    let left = 0;
    let right = num;
    while (left <= right) {
        let mid = left + Math.ceil((right - left) / 2)
        let t = mid * mid;
        if (t === num) return true;
        if (t < num) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};


var isPerfectSquare2 = function (num) {

    let x = num;
    while (x * x > num) {
        x = Math.floor((x + num / x) / 2);
    }
    return x * x == num;
};


console.log(JSON.stringify(isPerfectSquare2(9074890)))