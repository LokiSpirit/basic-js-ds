const { NotImplementedError } = require('../extensions/index.js');

  const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.root = null;
    this.queueEnd = null;
  }

  getUnderlyingList() {
    return this.root;
  }

  enqueue(value) {
     let cur = new ListNode(value);
    if (this.root) {
      this.queueEnd.next = cur;
      this.queueEnd = cur;
      return;
    }
    this.root = cur;
    this.queueEnd = this.root;
  }

  dequeue() {
      if (this.root) {
        let value = this.root.value;
        if (this.root.next) {
          this.root = this.root.next;
        } else {
          this.root = null;
          this.queueEnd = null;
        }
        return value;
    }
    return null;
  }

  toString() {
  return JSON.stringify(this.root);
  }
}

  ListNode.prototype.toString = function() {
  return JSON.stringify(this);
}

module.exports = {
  Queue
};
