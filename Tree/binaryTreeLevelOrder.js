/**Binary Tree Level Order Traversal
Medium

6664

135

Add to List

Share
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 */

// https://leetcode.com/problems/binary-tree-level-order-traversal/



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(root == null) return [];
    let tmpA = [];
    let mainA = [];
    let level = [];
    tmpA.push(root.val);
    
    mainA.push(tmpA)
  
    if(!trave(root,mainA,1)){
        return mainA
    }
        
};

var trave = function(root,main,level){
    if(root == null) return false;
    if(root.left == null && root.right == null ){  
        return false;
    }
    if(level > main.length){
        main[level].push([]);
    }
    if(root.left != null && root.left.val != null){
        let tmp = main[level]? main[level]:[];
        tmp.push(root.left.val);
        main[level] = tmp;
    } 
    
    if(root.right != null && root.right.val != null){
        let tmp = main[level]? main[level]:[];
        tmp.push(root.right.val);
        main[level] = tmp;
    } 
    
    
   
    return trave(root.left,main,level+1) || trave(root.right,main,level+1)
    
}

let a = new TreeNode(1, 2, 3)
a.left = new TreeNode(2, 4, null)
a.right = new TreeNode(3, null, 5)

console.log(levelOrder(a))