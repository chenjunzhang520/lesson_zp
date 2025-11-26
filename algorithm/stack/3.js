// 链表来实现栈
// es5 没有class 关键字
// es6 有了class 关键字
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null; // 离散
    }
}

class LinkListStack {
    // 私有的 只能在内部使用，封装实现的细节，保护类不被随意修改
    // 栈顶指针
    #stackPeek;
    // 栈的大小
    #size = 0;
    constructor() {
        // 初始化栈顶指针为空
        this.#stackPeek = null;
    }
    push(num) {
        const node = new ListNode(num);
        node.next = this.#stackPeek;
        // 更新栈顶指针
        this.#stackPeek = node;
        // 栈的大小增加
        this.#size++;
    }
    peek() {
        if(!this.#stackPeek) {
            throw new Error('栈为空');
        }
        return this.#stackPeek.val;
    }
    pop() {
        const num = this.peek();
        // 删除栈顶节点
        this.#stackPeek = this.#stackPeek.next;
        // 栈的大小减少
        this.#size--;
        return num;
    }
    // get 属性
    get size() {
        return this.#size;
    }
    isEmpty() {
        return this.size === 0;
    }
    toArray() {
        let node = this.#stackPeek;
        const res = new Array(this.size);
        for (let i = res.length -1;i >=0;i--) {
            res[i] = node.val;
            node = node.next;
        }
        return res;
    }
}

const stack = new LinkListStack();
console.log(stack.size);
