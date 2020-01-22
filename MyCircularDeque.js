const NOT_AN_INDEX = -1;

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  const size = Number(k);
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError(
      `MyCircularDeque constructor argument must be a positive integer but got "${k}"`
    );
  }
  this.data = new Array(size);
  this.head = NOT_AN_INDEX;
  this.tail = NOT_AN_INDEX;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull()) {
    return false;
  }
  if (this.isEmpty()) {
    this.head = 0;
    this.tail = 0;
  } else {
    this.head = (this.head + this.data.length - 1) % this.data.length;
  }
  this.data[this.head] = value;
  return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.isFull()) {
    return false;
  }
  if (this.isEmpty()) {
    this.head = 0;
    this.tail = 0;
  } else {
    this.tail = (this.tail + this.data.length + 1) % this.data.length;
  }
  this.data[this.tail] = value;
  return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
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
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty()) {
    return false;
  }
  if (this.head === this.tail) {
    this.head = NOT_AN_INDEX;
    this.tail = NOT_AN_INDEX;
  } else {
    this.tail = (this.tail + this.data.length - 1) % this.data.length;
  }
  return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this.isEmpty()) {
    return NOT_AN_INDEX;
  }
  return this.data[this.head];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this.isEmpty()) {
    return NOT_AN_INDEX;
  }
  return this.data[this.tail];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.head === NOT_AN_INDEX;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return (this.tail + 1) % this.data.length === this.head;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
