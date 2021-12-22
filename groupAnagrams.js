/**
 * 49. Group Anagrams
Medium

7610

275

Add to List

Share
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 */

// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let strA = []
    for (let i = 0; i < strs.length; i++) {
        strA.push(strs[i].split('').sort().join(''));
    }
    let rtnA = [];
    let strB = [...strA];
    let strC = [...strA];

    strB.sort();
    let tmp = strB[0];


    for (let j = 0; j < strB.length; j++) {
        let foundIndex = strA.findIndex(x => x === strB[j]);
        rtnA.push(foundIndex)
        strA[foundIndex] = null;
    }

    let tmpSS = strC[rtnA[0]]
    let tmpA = [];
    let bigA = [];
    for (let k = 0; k < rtnA.length; k++) {

        if (tmpSS === strC[rtnA[k]]) {
            tmpA.push(strs[rtnA[k]])
            if (k === rtnA.length - 1) {
                bigA.push(tmpA);
            }
        } else {
            bigA.push(tmpA);
            tmpA = new Array();
            tmpA.push(strs[rtnA[k]])
            if (tmpSS !== strC[rtnA[k]] && k === rtnA.length - 1) {
                bigA.push(tmpA);
            }
            tmpSS = strC[rtnA[k]]
        }


    }
    return bigA;
};

var groupAnagrams2 = function (strs) {
    let hash = new Map();
    strs.forEach(x => {
        let tmp = x.split('').sort().join('')
        if (hash.get(tmp) != null) {
            hash.get(tmp).push(x);
        } else {
            hash.set(tmp, []);
            hash.get(tmp).push(x);
        }
    })
    let ans = [];
    for (let c of hash.values()){
        ans.push(c);
    }
    return ans;
};




console.log(JSON.stringify(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"])))