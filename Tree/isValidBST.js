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
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (root == null) return true;
    if (root.left == null && root.right == null) return true;
    if (root.left != null && root.right != null) {
        if ((root.left.val === Math.min(root.val, root.left.val)) && root.val === Math.min(root.val, root.right.val)) {
            return isValidBST(root.left) && isValidBST(root.right)
        } else {
            return false;
        }
    } else if (root.left == null && root.right != null && root.val === Math.min(root.val, root.right.val)) {
        return isValidBST(root.left) && isValidBST(root.right)
    } else {
        return false;
    }
    return true;
};