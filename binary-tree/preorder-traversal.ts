import { TreeNode } from "./tree-node"

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