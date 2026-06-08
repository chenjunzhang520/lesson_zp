function add(a: number, b: number): number {
    return a + b;
}
// js 足够简单
// 大型项目
let a = 1;
let b = "2";
// add(a, parseInt(b)); // api
let c: number = add(a, Number(b)); // 强制类型转换
// add(a, +b); // 隐式类型转换

