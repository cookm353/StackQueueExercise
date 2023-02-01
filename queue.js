/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newEnd = new Node(val)
    
    // If the queue is empty...
    if (this.size === 0) {
      this.first = newEnd
      this.last = newEnd
    } 

    this.last.next = newEnd
    this.last = newEnd
    this.size++
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      throw new Error
    } 
    
    let firstNode = this.first

    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
    }

    this.size --

    return firstNode.val
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) {
      throw new Error
    }
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0
  }
}

module.exports = Queue;

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(100)
queue.enqueue(1000)
console.log(queue.first.val)
console.log(queue.first.next.val)