/** 230. Kth Smallest Element in a BST
Medium

5340

107

Add to List

Share
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1
Example 2:


Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
 */

// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    let arr = [];

    arr[0] = root.val;
    if(!trave(root,arr)){
        arr.sort((a, b) => a - b)
    }    
    return arr[k-1];
    
};

var trave = (root,arr) =>{
   
    if(root == null) return false;
    if(root.left){
        if(!arr.includes(x=>x===root.left.val)){
            arr.push(root.left.val);               
        }
    }
    
    if(root.right){
        if(!arr.includes(x=>x===root.right.val)){
            arr.push(root.right.val)
        }
    }
    
    return trave(root.left, arr) || trave(root.right, arr);
    
}
