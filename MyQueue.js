var Stack = function() {
  this.data = [];
};

Stack.prototype.push = function(x) {
  this.data.push(x);
};

Stack.prototype.peek = function() {
  return this.data[this.data.length - 1];
};

Stack.prototype.pop = function() {
  return this.data.pop();
};

Stack.prototype.empty = function() {
  return this.data.length === 0;
};

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.pushStack = new Stack();
  this.popStack = new Stack();
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.pushStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.popStack.empty()) {
    while (!this.pushStack.empty()) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.popStack.empty()) {
    while (!this.pushStack.empty()) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack.peek();
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.popStack.empty() && this.pushStack.empty();
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
