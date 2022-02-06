/**2. Add Two Numbers
Medium

15834

3410

Add to List

Share
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros. */

// https://leetcode.com/problems/add-two-numbers/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (c1, c2) {
    let newNumber = [];
    let l1 = convertToArray(c1);
    let l2 = convertToArray(c2);
    let diffLength = l1.length - l2.length;
    if (diffLength !== 0) {
        for (let j = 0; j < Math.abs(diffLength); j++) {
            if (diffLength > 0) {
                l2.unshift(0)
            } else {
                l1.unshift(0)
            }
        }
    }
    for (let i = l1.length - 1; i >= 0; i--) {
        let n = l1[i] + l2[i]

        if (n >= 10) {
            newNumber.push(n - 10)
            if (l1[i - 1] == null) {
                newNumber.push(1)
            } else {
                l1[i - 1] += 1;
            }
        } else {
            newNumber.push(n)
        }
    }

    return convertToLinkedList(newNumber)
};

var convertToArray = function (l) {
    let arr = []
    while (l.next != null) {
        arr.push(l.val)
    }
    return arr;
}

var convertToLinkedList = function (l) {
    let ls = new ListNode();
    ls.next;
    for (let i = 0; i < l.length; i++) {
        ls.val = l[i];
        ls.next;
    }
}


console.log(JSON.stringify(addTwoNumbers([], [1, 2, 3, 4, 5])))