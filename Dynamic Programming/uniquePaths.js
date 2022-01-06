/**62. Unique Paths
Medium

7379

272

Add to List

Share
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

Example 1:


Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
 */

// https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */


// each time m can -1 mean to right, and n - 1 to down, so each way
var uniquePaths = function (m, n) {
    if (m == 1 || n == 1) {
        return 1;
    }
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};


// the way can go to speific spot is the number of way combine by its top and left
// [[1,1,1,1, 1, 1, 1,],
// [1, 2,3,4, 5, 6, 7,],
// [1, 3,6,10,15,21,28,],]
// so the last spot of dp is the number of path total

var uniquePaths2 = function (m, n) {
    let dp = new Array(m).fill(0).map(x => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // the most top and left row/column must be one, cuz it's only one way to be there
            if (i === 0 || j === 0) {
                dp[i][j] = 1;
            }
            // if i and j not 0 then it mean not in the edge, then the value is top+left
            else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }
    return dp[m - 1][n - 1]
};

console.log(uniquePaths2(3, 7))
