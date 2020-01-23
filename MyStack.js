var Queue = function() {
  this.data = [];
};

Queue.prototype.add = function(x) {
  this.data.push(x);
};

Queue.prototype.remove = function() {
  return this.data.shift();
};

Queue.prototype.peek = function() {
  return this.data[0];
};

Queue.prototype.empty = function() {
  return this.data.length === 0;
};

Queue.prototype.size = function() {
  return this.data.length;
};

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.storage = new Queue();
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  let movesNeeded = this.storage.size();
  this.storage.add(x);
  while (movesNeeded-- > 0) {
    this.storage.add(this.storage.remove());
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.storage.remove();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.storage.peek();
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.storage.empty();
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
