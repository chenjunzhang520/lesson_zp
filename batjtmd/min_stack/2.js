// es5 构造函数
const MinStack = function() {
    this.stack = []; // 数组
}
MinStack.prototype.push = function(x) {
    this.stack.push(x);
}
MinStack.prototype.pop = function(x) {
    return this.stack.pop();
}
MinStack.prototype.top = function() {
    if(!this.stack || this.stack.length) {
        return this.stack[this.stack.length - 1];
    }
}
// O(1)
MinStack.prototype.getMin = function() {
    
}