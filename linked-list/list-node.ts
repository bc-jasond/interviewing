export type MaybeNode = ListNode | null | undefined

 export class ListNode {
     val: number
     next: MaybeNode
     constructor(val?: number, next?: MaybeNode) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }