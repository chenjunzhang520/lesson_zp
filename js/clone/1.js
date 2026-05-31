// 堆内存中， 动态性
// 内存需求 弹性
const users = [
    {
        id: 1,
        name: 'chen',
        hometown:'南昌'
    },
    {
        id: 2,
        name: 'li',
        hometown:'南昌'
    },
    {
        id: 3,
        name: 'wang',
        hometown:'南昌'
    }
]
// 动态
users.push({
    id: 4,
    name: 'zhao',
    hometown:'南昌'
})
// 栈内存中 简单 高效  变量的读写操作， 不会影响到空间大小
// 连续存储的简单变量， 方便管理 快速访问
// 程序 ，申请一个连续空间
let a = 1;
let b = 2;
let c = 3;
let d = a; // 值拷贝， 复印
// 赋值操作没有完成值的拷贝
const data = users; // 引用式拷贝  堆内存开销大，
data[0].hobbies = ['篮球','看烟花'];
console.log(data,users);

