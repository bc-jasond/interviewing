
export type MaybeTreeNode = TreeNode | null | undefined
/**
 * Definition for a binary tree node.
 */
export class TreeNode {
  val: number;
  left: MaybeTreeNode
  right: MaybeTreeNode
  constructor(val?: number, left?: MaybeTreeNode, right?: MaybeTreeNode) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}
