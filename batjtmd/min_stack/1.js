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
// O(n)
MinStack.prototype.getMin = function() {
    // - 遍历一遍
    // - Infinity 无穷大
    let minValue = Infinity; // 无穷大
    const { stack } = this
    for(let i = 0; i < stack.length; i++) {
        if(stack[i] < minValue) {
            minValue = stack[i];
        }
        // minValue = Math.min(minValue, stack[i]);
    }
    return minValue;
}
