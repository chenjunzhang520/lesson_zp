// Cat 大写，开发约定是类
// name color 模板， 抽象，封装的特性在显现
var Cat = {
    name:"",
    color:""
}
var cat1 = {};  // 空对象
cat1.name = '加菲猫';
cat1.color = '橘色';
var cat2 = {};
cat2.name = '黑猫警长';
cat2.color = '黑色';
// 比较麻烦(函数封装实例化的过程)，没什么关系(
//   __proto__
//   prototype
//   constructor
// )