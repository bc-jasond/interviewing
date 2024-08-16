class MinHeap {
  // for parent index: N, left child: 2*N+1, right child: 2*N+2
  // for child index: N, parent: floor((N - 1) / 2)
  storage: number[] = []
  constructor() {}
  static fromArray(values: number[]) {
    return values.reduce((heap, v) => {
      heap.insert(v)
      return heap
    }, new MinHeap())
  }
  leftChildIdx(n: number) {
    return 2 * n + 1
  }
  rightChildIdx(n: number) {
    return 2 * n + 2
  }
  parentIdx(n: number) {
    return Math.floor((n - 1) / 2)
  }
  insert(val: number) {
    // push to end of storage - end of binary tree
    this.storage.push(val)
    
    // bubble up while current < parent
    let currentIdx = this.storage.length - 1
    let parentIdx = this.parentIdx(currentIdx)
    let parent = this.storage[parentIdx]
    while (val < parent) {
      this.storage[currentIdx] = parent
      this.storage[parentIdx] = val
      currentIdx = parentIdx
      parentIdx = this.parentIdx(currentIdx)
      parent = this.storage[parentIdx]
    }
  }
  pop() {

  }
  peek() {
    return this.storage[0]
  }
}