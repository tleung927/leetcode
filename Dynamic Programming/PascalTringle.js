/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let dp = [];
    dp[0] = [1];
    dp[1] = [1, 1];
    for (let i = 2; i < numRows; i++) {
        dp[i] = help(dp[i - 1]);
    }
    let rtn = [];
    dp.forEach(x => rtn.push(x));
    return rtn;
};

var help = function (parent) {
    let newRow = new Array(parent.length + 1);
    let i = 0;
    let j = newRow.length - 1;
    while (i <= j) {
        if (i === 0) { newRow[i] = parent[i]; i++; };
        if (j === newRow.length - 1) { newRow[newRow.length - 1] = parent[parent.length - 1]; j--; continue; };
        if (parent.length % 2 === 0 && i === j) {
            newRow[i] = parent[i - 1] * 2
            break;
        }
        newRow[i] = parent[i] + parent[i - 1];
        newRow[j] = parent[j - 1] + parent[j ];

        i++;
        j--;
    }
    return newRow;
}


console.log(JSON.stringify(generate(5)))