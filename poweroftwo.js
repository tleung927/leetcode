/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n === 1) return true
    if (n % 2 === 1) return false;
    let tmp = n;
    while (tmp > 1) {
        tmp = tmp / 2;
    }
    return tmp === 1 ? true : false;
};

console.log(isPowerOfTwo(99))
