export type MaybeListNode = ListNode | null | undefined

export class ListNode {
    val?: number
    next: MaybeListNode
    prev: MaybeListNode
    constructor(val?: number, next?: MaybeListNode, prev?: MaybeListNode) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.prev = (prev===undefined ? null : prev)
    }
    static print(head: MaybeListNode) {
      let last = null
      let current: MaybeListNode = head
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

export class DoublyLinkedList<T extends ListNode, A> {
  private sentinelNode: T
  private size: number
  constructor(Model: new (args: A) => T, args?: A) {
    this.sentinelNode = new Model(args as A) // dummy node
    this.sentinelNode.next = this.sentinelNode.prev = this.sentinelNode
    this.size = 0
  }
  get length() {
    return this.size
  }
  prepend(node: ListNode) {
    node.next = this.sentinelNode.next
    node.prev = this.sentinelNode
    if (node.next) {
      node.next.prev = node
    }
    this.sentinelNode.next = node
    this.size += 1
  }
  pop(node?: MaybeListNode) {
    if (this.size === 0) {
      return
    }
      
    if (!node) {
      node = this.sentinelNode.prev

      if (node?.prev) {
        node.prev.next = node.next
      }
      if (node?.next) {
        node.next.prev = node.prev
      }
      this.size -= 1
      
      return node
    }
  }
}