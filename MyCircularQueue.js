const NOT_AN_INDEX = -1;

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  const size = Number(k);
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError(
      `MyCircularQueue constructor argument must be a positive integer but got "${k}"`
    );
  }
  this.data = new Array(size);
  this.head = NOT_AN_INDEX;
  this.tail = NOT_AN_INDEX;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) {
    return false;
  }
  if (this.isEmpty()) {
    this.head = 0;
    this.tail = 0;
  } else {
    this.tail = (this.tail + 1) % this.data.length;
  }
  this.data[this.tail] = value;
  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
    return false;
  }
  if (this.head === this.tail) {
    this.head = NOT_AN_INDEX;
    this.tail = NOT_AN_INDEX;
  } else {
    this.head = (this.head + 1) % this.data.length;
  }
  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) {
    return NOT_AN_INDEX;
  }
  return this.data[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) {
    return NOT_AN_INDEX;
  }
  return this.data[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.head === NOT_AN_INDEX;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return (this.tail + 1) % this.data.length === this.head;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
