// // 打印结果是？
// // parseInt callbackFn
// // parseInt(element,index,arr)
// [1,2,3].map(function(item, index, arr) {
//     console.log(item,index,arr);
//     return item;
// });
// console.log([1,2,3].map(parseInt)); // [1,2,3] ?

console.log(parseInt(1,0,[1,2,3]));
console.log(parseInt(2,1,[1,2,3])); // NaN
console.log(parseInt(3,2,[1,2,3])); // NaN
// console.log(console.log(parseInt("ff", 16)));
// console.log(console.log(parseInt("10", 8)));
