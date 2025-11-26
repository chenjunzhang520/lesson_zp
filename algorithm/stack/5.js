// - 用一个map | json 来维护左括号和右括号的对应关系
// - 用一个栈来维护左括号， 当遇到右括号时， 弹出栈顶元素， 查看是否匹配
// - 若不匹配或栈不为空，valid 为 false ， 遍历完毕后，栈为空，有效
const leftToRight = {
    "(":")",
    "[":"]",
    "{":"}"
};
const isValid = function(s) {
    if(!s) return true;
    const stack = [];  // 栈
    const len = s.length;  // 缓存长度
    for(let i =0; i < len;i++) {
        const ch = s[i];
        if(ch === "(" || ch === "[" || ch === "{") {
            stack.push(leftToRight[ch]);
        }else {
            if(!stack.length || stack.pop() !== ch) {
                return false;
            }
        }
    }
    return !stack.length;
}