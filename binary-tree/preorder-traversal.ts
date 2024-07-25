/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function preorderTraversal(root: TreeNode | null): number[] {
  const preorder: number[] = []
  function inner(node: TreeNode | null) {
      if (!node) {
          return
      }
      preorder.push(node.val)
      inner(node.left)
      inner(node.right)
  }
  inner(root)
  return preorder
};