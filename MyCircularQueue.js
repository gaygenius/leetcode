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
  this.pStart = NOT_AN_INDEX;
  this.pEnd = NOT_AN_INDEX;
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
    this.pStart = 0;
    this.pEnd = 0;
  } else {
    this.pEnd = (this.pEnd + 1) % this.data.length;
  }
  this.data[this.pEnd] = value;
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
  if (this.pStart === this.pEnd) {
    this.pStart = NOT_AN_INDEX;
    this.pEnd = NOT_AN_INDEX;
  } else {
    this.pStart = (this.pStart + 1) % this.data.length;
  }
  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) {
    return false;
  }
  return this.data[this.pStart];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) {
    return false;
  }
  return this.data[this.pEnd];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.pStart === NOT_AN_INDEX;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return (
    (this.data.length + 1 + this.pEnd - this.pStart) % this.data.length === 0
  );
};

MyCircularQueue.prototype.log = function() {
  console.log({
    front: this.Front(),
    rear: this.Rear(),
    empty: this.isEmpty(),
    full: this.isFull(),
    pStart: this.pStart,
    pEnd: this.pEnd,
    data: this.data
  });
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
