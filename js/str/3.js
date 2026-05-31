const todos = [
    {
        id: 1,
        text: '学习es6'
    },
    {
        id: 2,
        text: '通读你不知道的javascript'
    }
];
console.log(todos.map(function (todo) {
    // console.log(todo);
    return `<li> ${todo.text}</li>`
}))
// 箭头函数
// function 可以省略，=>代替
// 如果只有一个参数，可以省略大括号
// 如果只有一个语句，且是返回值 可以省略{}
console.log(todos.map(todo => `<li>${todo.text}</li>`));