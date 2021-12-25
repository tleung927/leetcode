/** Remove Nth Node From End of List
Medium

7959

398

Add to List

Share
Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 */

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let p = dummyHead;
    let q = head;
    for(let i = 0 ; i < n ; i ++){
        q = q.next;
    }
    while (q){
        p = p.next;
        q = q.next;
    }
    let deletenode = p.next ? p.next.next : null;
    p.next = deletenode;
    return dummyHead.next;
};