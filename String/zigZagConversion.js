/**6. Zigzag Conversion
Medium

3296

7693

Add to List

Share
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000 */

// https://leetcode.com/problems/zigzag-conversion/


var convert = function (s, numRows) {
    if(s.length === 1) return s;
    if(numRows ===1) return s;
    let arr = Array(numRows).fill(null).map(() => Array(1000));
    let count = 0;
    for (let i = 0; count < s.length; i++) {
        let j = 0;
        for (; j < numRows; j++) {
            arr[j][i] = s.charAt(count);
            count++;
        }
        let mid = 0
        j--;
        while (mid != numRows - 2) {
            i++;
            j--;
            arr[j][i] = (s.charAt(count));
            mid++;
            count++;
        }
    }
    let rtn = '';
    for (let m = 0; m < arr.length; m++) {
        rtn += arr[m].join('');
    }
    return rtn;

};


console.log(JSON.stringify(convert('PAYPALISHIRING', 4)))