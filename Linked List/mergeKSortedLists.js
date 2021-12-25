/** Merge k Sorted Lists
Hard

9656

408

Add to List

Share
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.
 */

// https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let newList = new Map();
    let sLists = [];
    lists.forEach((x, index) => {
        newList.set(index, x.length);
    });
    var mapAsc = new Map([...newList.entries()].sort((a, b) => b[1] - a[1]))

    let invertedMap = new Map([...mapAsc.entries()].map(
        ([key, value]) => ([value, key]))
    );

    mapAsc.forEach(x => {
        sLists.push(lists[invertedMap.get(x)]);
    })

    let head = new ListNode(0);
    let merList = head;
    let tmp = Number.MAX_SAFE_INTEGER;
    let iList = [...sList[0]];

    while (iList != null) {
        for (let i = 0; i < sLists.length; i++) {
            if (sLists[i].val <= tmp) {
                merList.next = sLists[i];
                sLists[i] = sLists[i].next;
            }
            merList = merList.next;
        }
        iList = iList.next;
    }

    return head.next;
};

console.log(mergeKLists([[1, 4, 5], [1, 3, 5, 4], [2, 6]]))