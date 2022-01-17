/**17. Letter Combinations of a Phone Number
Medium

8566

615

Add to List

Share
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"] */

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let hash = new Map();
    hash.set('2', ['a', 'b', 'c']);
    hash.set('3', ['d', 'e', 'f']);
    hash.set('4', ['g', 'h', 'i']);
    hash.set('5', ['j', 'k', 'l']);
    hash.set('6', ['m', 'n', 'o']);
    hash.set('7', ['p', 'q', 'r', 's']);
    hash.set('8', ['t', 'u', 'v']);
    hash.set('9', ['w', 'x', 'y', 'z']);

    let arr = digits.split('');
    let newList = [];
    let rtnList = [];
    arr.forEach(x => {
        if (hash.get(x) != null) {
            newList.push(hash.get(x))
        }
    })
    if (newList.length === 0) return [];
    if (newList.length === 1) return newList[0];
    let newChar = '';
    if (newList.length === 2) {
        for (let i = 0; i < newList[0].length; i++) {
            for (let j = 0; j < newList[1].length; j++) {
                newChar = newList[0][i] + newList[1][j]
                if (newChar.length === newList.length) {
                    rtnList.push(newChar);
                }
            }
        }
    }
    if (newList.length === 3) {
        for (let i = 0; i < newList[0].length; i++) {
            for (let j = 0; j < newList[1].length; j++) {
                for (let k = 0; k < newList[2].length; k++) {
                    newChar = newList[0][i] + newList[1][j] + newList[2][k]
                    if (newChar.length === newList.length) {
                        rtnList.push(newChar);
                    }
                }
            }
        }
    }
    if (newList.length === 4) {
        for (let i = 0; i < newList[0].length; i++) {
            for (let j = 0; j < newList[1].length; j++) {
                for (let k = 0; k < newList[2].length; k++) {
                    for (let m = 0; m < newList[3].length; m++) {
                        newChar = newList[0][i] + newList[1][j] + newList[2][k] + newList[3][m]
                        if (newChar.length === newList.length) {
                            rtnList.push(newChar);
                        }
                    }
                }
            }
        }
    }
    return rtnList;
};

console.log(JSON.stringify(letterCombinations('2789')))