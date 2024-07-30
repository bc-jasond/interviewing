/*
https://leetcode.com/problems/lfu-cache/
great O(1) average runtime solution: https://leetcode.com/problems/lfu-cache/solutions/207673/python-concise-solution-detailed-explanation-two-dict-doubly-linked-list/
*/

//TODO: debug this, doesn't work yet
type MaybeListNode = LFUNode | null | undefined

class LFUNode {
    key: number
    val: number
    frequency = 1
    next: MaybeListNode
    prev: MaybeListNode
    constructor(key?: number, val?: number, next?: MaybeListNode, prev?: MaybeListNode) {
        this.key = (key===undefined ? 0 : key)
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.prev = (prev===undefined ? null : prev)
    }
}

class DoublyLinkedList {
  private sentinelNode: LFUNode
  private size: number
  constructor() {
    this.sentinelNode = new LFUNode()
    this.sentinelNode.next = this.sentinelNode.prev = this.sentinelNode
    this.size = 0
  }
  get length() {
    return this.size
  }
  prepend(node: LFUNode) {
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


class LFUCache {
  private capacity = 0
  private size = 0
  private storage: Record<number, LFUNode> = {}
  private frequencies: Record<number, DoublyLinkedList> = {} // last element of LFUNode array is least frequently used
  private minFrequency = 0
  constructor(capacity: number) {
    this.capacity = capacity
  }

  private update(node: LFUNode) {
    const frequency = node.frequency
        
    this.frequencies[frequency].pop(node)
    if (this.minFrequency === frequency && !this.frequencies[frequency]) {
      this.minFrequency += 1
    }
    
    node.frequency += 1
    if (!this.frequencies[node.frequency]) {
      this.frequencies[node.frequency] = new DoublyLinkedList()
    }
    this.frequencies[node.frequency].prepend(node)
  }

  get(key: number): number {
    const current = this.storage[key]
    if (!current) {
      return -1
    }
    
    this.update(current)
    return current.val!
  }

  put(key: number, value: number): void {
    if (this.capacity === 0) {
      return
    }

    // key exists
    let current = this.storage[key]
    if (current) {
      this.update(current)
      return
    } 
    if (this.size === this.capacity) {
      const deleteNode = this.frequencies[this.minFrequency].pop()
      delete this.storage[deleteNode!.val!]
      this.size -= 1
    }
    const newNode = new LFUNode(key, value)
    this.storage[key] = newNode
    if (!this.frequencies[1]) {
      this.frequencies[1] = new DoublyLinkedList()
    }
    this.frequencies[1].prepend(newNode)
    this.minFrequency = 1
    this.size += 1
  }
}