/*
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/submissions/1348283908/

1650. Lowest Common Ancestor of a Binary Tree III
Solved
Medium
Topics
Companies
Hint
Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).

Each node will have a reference to its parent node. The definition for Node is below:

class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}
According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q in a tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)."

 

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5 since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [1,2], p = 1, q = 2
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q exist in the tree.
*/

/**
 * Definition for _Node.
 */
type MaybeNode = _Node | null | undefined
class _Node {
  val: number
  left: MaybeNode
  right: MaybeNode
  parent: MaybeNode
  
  constructor(v: number) {
      this.val = v;
      this.left = null;
      this.right = null;
      this.parent = null;
  }
}



function lowestCommonAncestor(p: MaybeNode, q: MaybeNode): MaybeNode {
    let root: MaybeNode
    let current = p
    while (current) {
        root = current
        current = current.parent
    }

    function getPath(maybeNode: MaybeNode) {
        const stack = [root]
        const seen = new Set()
        
        while (stack.length) {
            const {left, right, val} = (stack[stack.length - 1] || {})
            if (val === maybeNode?.val) {
                break
            }
            
            if (left && !seen.has(left.val)) {
                stack.push(left)
                seen.add(left.val)
            } else if (right && !seen.has(right.val)) {
                stack.push(right)
                seen.add(right.val)
            } else {
                stack.pop()
            }
        }
        return stack
    }

    // get each path
    const pPath = getPath(p)
    const qPath = getPath(q)
    console.log(pPath.map(n => n.val),qPath.map(n => n.val))
    // start at shorter length
    for (let i = Math.min(pPath.length, qPath.length) - 1; i >= 0; i -= 1) {
        if (pPath[i]?.val === qPath[i]?.val) {
            return pPath[i]
        }
    }
};