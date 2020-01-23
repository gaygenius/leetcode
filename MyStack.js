var Queue = function() {
  this.data = [];
};

Queue.prototype.push = function(x) {
  this.data.push(x);
};

Queue.prototype.pop = function() {
  return this.data.shift();
};

Queue.prototype.peek = function() {
  return this.data[0];
};

Queue.prototype.empty = function() {
  return this.data.length === 0;
};

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.pushQueue = new Queue();
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.pushQueue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  const newQueue = new Queue();
  let last;
  while (!this.pushQueue.empty()) {
    last = this.pushQueue.pop();
    if (!this.pushQueue.empty()) {
      newQueue.push(last);
    }
  }
  this.pushQueue = newQueue;
  return last;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  const newQueue = new Queue();
  let last;
  while (!this.pushQueue.empty()) {
    last = this.pushQueue.pop();
    newQueue.push(last);
  }
  this.pushQueue = newQueue;
  return last;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.pushQueue.empty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
