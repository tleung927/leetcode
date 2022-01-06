/**54. Spiral Matrix
Medium

5793

757

Add to List

Share
Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

// https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 1) return matrix[0]
    if (matrix[0].length === 1) return matrix.map(x => x)
    let m = matrix[0].length;
    let n = matrix.length;
    count = 0;
    let rtn = [];
    let layers = parseInt(Math.ceil((Math.min(m, n) / 2)))
    while (count < layers) {
        for (let i = 0 + count; i <= m - 1 - count; i++) {
            rtn.push(matrix[count][i]);
        }
        for (let i = 1 + count; i <= n - count - 1; i++) {
            rtn.push(matrix[i][m - 1 - count]);
        }
        for (let i = m - 2 - count; i >= 0 + count && (n - count - 1 != count); i--) {
            rtn.push(matrix[n - count - 1][i]);
        }
        for (let i = n - 2 - count; i >= 1 + count; i--) {
            rtn.push(matrix[i][count]);
        }
        count++;
    }
    if (rtn.length !== m * n) rtn.splice(rtn.length - 1, 1)
    return rtn;
};


var spiralOrder2 = function (matrix) {
    if (matrix.length === 1) return matrix[0]
    if (matrix[0].length === 1) return matrix.map(x => x)
    let rows = matrix[0].length;
    let cols = matrix.length;

    let rtn = [];
    let layers = parseInt(Math.ceil((Math.min(rows, cols) / 2)))
    for (let i = 0; i < layers; i++) {
        for (let k = i; k < cols - i; k++) {
            rtn.push(matrix[i][k]);
        }
        for (let j = i + 1; j < rows - i; j++) {
            rtn.push(matrix[j][cols - i - 1])
        }
        for (let k = cols - i - 2; (k >= i) && (rows - i - 1 !== i); k--) {
            rtn.push(matrix[rows - i - 1][k]);
        }
        for (let j = rows - i - 2; (j > i) && (cols - i - 1 !== i); j--) {
            rtn.push(matrix[j][i]);
        }
    }
    return rtn;
};

console.log(JSON.stringify(spiralOrder2(
    [[1, 2, 3, 4], [5, 6, 7, 8]])))