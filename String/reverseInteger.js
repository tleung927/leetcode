
/**7. Reverse Integer
Medium

6513

9236

Add to List

Share
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1 */

// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    let isNeg = false;
    if (x < 0) {
        isNeg = true;
        x = 0 - x;
    }
    let str = x.toString();
    let arr = str.split('')
    let j = str.length - 1;
    let newArr = [];
    while (j >= 0) {
        newArr.push(arr[j]);
        j--;
    }

    if (newArr.length > 0) {
        while (newArr[0] === '0') {
            newArr.splice(0, 1);
        }
    }
    if (parseInt(newArr.join('')) > Math.pow(2, 31)) {
        return 0;
    } else {
        if (isNeg) {
            return 0 - parseInt(newArr.join(''))
        }
        else {
            return parseInt(newArr.join(''));
        }
    }

    return 0;

};


console.log(JSON.stringify(reverse(-20000)))