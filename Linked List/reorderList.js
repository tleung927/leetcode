/**143. Reorder List
Medium

4962

192

Add to List

Share
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 */

// https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    // let newArr = new Array(head.length).fill('a');
    // while (head.next != null) {
    //     newArr.push(head.val)
    //     head = head.next;
    // }
    let newArr = [1, 2, 3, 4]
    let rtnArr = [];
    for (let i = 0, j = newArr.length - 1; i < j; i++, j--) {
        rtnArr.push(newArr[i]);
        rtnArr.push(newArr[j]);
    }

    return rtnArr;
};

console.log(reorderList())