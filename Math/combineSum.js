/**
 * 39. Combination Sum
Medium

8953

207

Add to List

Share
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
 

Constraints:

1 <= candidates.length <= 30
1 <= candidates[i] <= 200
All elements of candidates are distinct.
1 <= target <= 500
 */

// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function (can, target) {
//     can = can.sort((a, b) => a - b)
//     let rtnArr = [];
//     for (let i = 0; i < can.length; i++) {
//         let rtn = [];
//         if (can[i] < target) {
//             let mul = 1;

//             while (mul * can[i] < target) {
//                 let j = 0;
//                 let diff = target - mul * can[i];
//                 while (j < can.length && diff >= 0) {
//                     if (i !== j) {
//                         diff -= can[j];
//                     }
//                     j++;
//                 }

//                 if (index > -1) {
//                     rtn = new Array(mul).fill(can[i]);
//                     if (i > index && mul === 1) {

//                     } else {
//                         rtn.push(can[index]);
//                         rtnArr.push(rtn);
//                     }

//                 }
//                 mul++;
//             }
//         } else if (can[i] === target) {
//             rtn.push(can[i]);
//             rtnArr.push(rtn);
//         }
//     }

//     return rtnArr;
// };


var combinationSum = function (can, target) {

    let rtnArr = [];
    for (let i = 0; i < can.length; i++) {
        let diff = target - can[i]
        return helper(can[i], rtnArr, diff, []);
    }

    return rtnArr
}

var helper = (number, rtnArr, diff, arr) => {
    if (diff = 0) {
        rtnArr.push(arr)
    }
    let mul = 1;
    calculate(number, mul, diff)
    
    return helper(number, rtnArr, diff, arr);
}

var calculate = (number, mul, diff) => {
    if (diff < 0) {
        return;
    }
    if (diff <= number) {
        return number;
    }
    mul++;
    return calculate(mul * number, mul, diff - mul * number);
}

console.log(JSON.stringify(combinationSum([2, 7, 6, 3, 5, 1]
    , 9)))