class MaxHeap<T> {
  public heap: T[];
  private comparator: (a: T, b: T) => boolean;

  constructor(comparator: (a: T, b: T) => boolean) {
      this.heap = [];
      this.comparator = comparator;
  }

  // Returns the parent index
  private parent(index: number): number {
      return Math.floor((index - 1) / 2);
  }

  // Returns the left child index
  private leftChild(index: number): number {
      return 2 * index + 1;
  }

  // Returns the right child index
  private rightChild(index: number): number {
      return 2 * index + 2;
  }

  // Swaps two elements in the heap
  private swap(index1: number, index2: number): void {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // Moves the element at the given index up to restore heap property
  private heapifyUp(index: number): void {
      while (index > 0 && this.comparator(this.heap[index], this.heap[this.parent(index)])) {
          this.swap(index, this.parent(index));
          index = this.parent(index);
      }
  }

  // Moves the element at the given index down to restore heap property
  private heapifyDown(index: number): void {
      let largest = index;
      const left = this.leftChild(index);
      const right = this.rightChild(index);

      if (left < this.heap.length && this.comparator(this.heap[left], this.heap[largest])) {
          largest = left;
      }

      if (right < this.heap.length && this.comparator(this.heap[right], this.heap[largest])) {
          largest = right;
      }

      if (largest !== index) {
          this.swap(index, largest);
          this.heapifyDown(largest);
      }
  }

  // Inserts a new element into the heap
  insert(value: T): void {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
  }

  // Removes and returns the maximum element from the heap
  extractMax(): T | undefined {
      if (this.heap.length === 0) return undefined;
      if (this.heap.length === 1) return this.heap.pop();

      const max = this.heap[0];
      this.heap[0] = this.heap.pop() as T;
      this.heapifyDown(0);
      return max;
  }

  // Returns the maximum element without removing it
  peek(): T | undefined {
      return this.heap.length > 0 ? this.heap[0] : undefined;
  }

  // Returns the number of elements in the heap
  size(): number {
      return this.heap.length;
  }
}