import { TreeNode, type MaybeTreeNode } from "./tree-node";

function lowestCommonAncestor(root: MaybeTreeNode, p: MaybeTreeNode, q: MaybeTreeNode): MaybeTreeNode {
    function findPath(r: MaybeTreeNode, n: MaybeTreeNode) {
        const seen = new Set()
        const stack: MaybeTreeNode[] = [r]
        while (stack.length) {
            const {left, right, val} = (stack[stack.length - 1] || new TreeNode())
            if (val === n?.val) {
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
    
    const pStack = findPath(root, p)
    const qStack = findPath(root, q)
    let currentDepth = Math.min(pStack.length, qStack.length)
    while (currentDepth > 0) {
        currentDepth -= 1
        if (pStack[currentDepth]?.val === qStack[currentDepth]?.val) {
            return pStack[currentDepth]
        }
    } 
    return null
};