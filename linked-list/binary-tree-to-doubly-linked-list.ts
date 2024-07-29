/*
Convert Binary Tree to Doubly Linked List by keeping track of visited node
Last Updated : 21 Apr, 2024
Given a Binary Tree, The task is to convert it to a Doubly Linked List keeping the same order. 

The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. 
The order of nodes in DLL must be the same as in-order for the given Binary Tree. 
The first node of in-order traversal (leftmost node in BT) must be the head node of the DLL. 

Example:
       10
     /    \
   12      15
  /  \     /
 25   30  36

 head
  25 <-> 12 <-> 30 <-> 10 <-> 36 <-> 15

The following two different solutions have been discussed for this problem. 
Convert a given Binary Tree to a Doubly Linked List | Set 1 
Convert a given Binary Tree to a Doubly Linked List | Set 2

Approach:
  - Do in-order traversal of the binary tree. While doing in-order traversal, keep track of the previously visited node in a variable (prev). For every visited node, make it the next to (prev) and set previous of this node as prev.
*/

import { TreeNode, MaybeTreeNode } from "../binary-tree/tree-node";
import { ListNode } from "./list-node";

const bst1 = new TreeNode(10, new TreeNode(12, new TreeNode(25), new TreeNode(30)), new TreeNode(15, new TreeNode(36)))

function inOrderToDLL(root: MaybeTreeNode) {
  // in-order traversal to array
  const results: number[] = []
  function inner(node: MaybeTreeNode) {
    if (!node) {
      return
    }
    inner(node.left)
    results.push(node.val)
    inner(node.right)
  }
  inner(root)
  //console.log(results)
  return results
}

function DLLFromArray(input: number[]) {
  let head
  let prev
  let current
  for (let i = 0; i < input.length; i += 1) {
    current = new ListNode(input[i])
    if (!head) {
      head = current
    }
    if (prev) {
      prev.next = current
      current.prev = prev
    }
    prev = current
  }
  return head
}

const test = DLLFromArray(inOrderToDLL(bst1))
test?.print()

const head = new ListNode(25)
const node2 = new ListNode(12)
head.next = node2
node2.prev = head
const node3 = new ListNode(30)
node2.next = node3
node3.prev = node2
const node4 = new ListNode(10)
node3.next = node4
node4.prev = node3
const node5 = new ListNode(36)
node4.next = node5
node5.prev = node4
const node6 = new ListNode(15)
node5.next = node6
node6.prev = node5


head.print()
console.log(' ')

