export type MaybeListNode = ListNode | null | undefined

export class ListNode {
    val: number
    next: MaybeListNode
    prev: MaybeListNode
    constructor(val?: number, next?: MaybeListNode, prev?: MaybeListNode) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.prev = (prev===undefined ? null : prev)
    }
    print() {
      let last = null
      let current: MaybeListNode = this
      while (current) {
        if (last && current.prev === last) {
          process.stdout.write('<')
        }
        if (last) {
          process.stdout.write('->')
        }
        process.stdout.write(`${current.val}`)
        last = current
        current = current.next
      }
    }
}