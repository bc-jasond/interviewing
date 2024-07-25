/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 /*

 Questions:

 Solution:
 - start two pointers at the head, increment one by 1 and the other by 2, there's a cycle if both pointers ever point to the same element

 */
import { ListNode, type MaybeNode } from "./list-node"

 function hasCycle(head: MaybeNode): boolean {
  let slow = head
  let fast = head?.next
  while (slow) {
       if (slow === fast) {
           return true
       }
       slow = slow.next
       fast = fast?.next?.next
  }
  return false
}

const cycleNode1 = new ListNode(1)
const cycleNode2 = new ListNode(2)
const cycleNode3 = new ListNode(3)
cycleNode1.next = cycleNode2
cycleNode2.next = cycleNode3
cycleNode3.next = cycleNode2
console.log('should be true', hasCycle(cycleNode1))

const node1 = new ListNode(4)
const node2 = new ListNode(5)
const node3 = new ListNode(6)
node1.next = node2
node2.next = node3
console.log('should be false', hasCycle(node1))