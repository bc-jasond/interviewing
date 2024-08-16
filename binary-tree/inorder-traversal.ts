/*
https://leetcode.com/problems/binary-tree-inorder-traversal/description/
94. Binary Tree Inorder Traversal
Solved
Easy
Topics
Companies
Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
import type { MaybeTreeNode } from "./tree-node";
function inorderTraversal(root:MaybeTreeNode): number[] {
  const inOrder: number[] = []
  function dfs(node: MaybeTreeNode) {
      if (!node) {
          return
      }
      dfs(node.left)
      inOrder.push(node.val)
      dfs(node.right)
  }
  dfs(root)
  return inOrder
};