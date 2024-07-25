
/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/


 /*

Solution
 - BRUTE FORCE find the length of each linked list, visit each node in the lists adding their values or 0, keep track of carry, return sum as list in reverse order
 - OPTIMIZED - don't need to find lenghts - just use 0 if node.next === null
 */

import { ListNode, MaybeNode } from "./list-node";

 function addTwoNumbers(l1: MaybeNode, l2: MaybeNode): MaybeNode {
  let carry = 0
  let first: MaybeNode = l1
  let second = l2
  let resultHead: MaybeNode = undefined
  let resultLast: MaybeNode = undefined
  while (first || second) {
      let firstValue = first?.val || 0
      first = first?.next
      let secondValue = second?.val || 0
      second = second?.next
      
      const sum = firstValue + secondValue + carry
      const sumNodeValue = sum % 10
      carry = Math.floor(sum / 10)
      const nextNode = new ListNode(sumNodeValue)
      if (!resultHead) {
          resultHead = nextNode
      }
      if (resultLast) {
          resultLast.next = nextNode
      }
      resultLast = nextNode
  }
  if (carry) {
      const carryNode = new ListNode(carry)
      resultLast!.next = carryNode
  }
  return resultHead
};