



/**36. Valid Sudoku
Medium

4391

667

Add to List

Share
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'. */


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    let n = board.length;

    for (let i = 0; i < n; i++) {
        if (!chkRep(board[i])) {
            return false
        }
        let col = [];
        for (let j = 0; j < n; j++) {
            col.push(board[j][i]);
        }
        if (!chkRep(col)) {
            return false
        }
    }

    for (let i = 0; i < board.length; i = i + 3) {
        if (!chkRep(getMatrix(board, i, 0))) {
            return false;
        }
        if (!chkRep(getMatrix(board, i, 3))) {
            return false;
        }
        if (!chkRep(getMatrix(board, i, 6))) {
            return false;
        }
    }


    return true;
};

var chkRep = function (arr) {
    let chkDic = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '.') {
            if (chkDic[arr[i]] == null) {
                chkDic[arr[i]] = true;
            }
            else {
                return false;
            }
        }
    }
    return true;
}

var getMatrix = function (board, x, y) {
    let arr = []
    for (let i = x; i < 3 + x; i++) {
        for (let j = y; j < 3 + y; j++) {
            arr.push(board[i][j]);
        }
    }
    return arr;
}




console.log(JSON.stringify(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]])))