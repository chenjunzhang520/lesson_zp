// es5 没有类class 
// JS函数是一等对象
// 首字母大写的 构造函数
function Car(color) {
    // this？ 指向新创建的对象
    this.color = color;
    // this.drive
    // 车参数 
    // this.name = 'su7';
    // this.height = 1.4;
    // this.weight = 1.5;
    // this.long = 4800;
}
// 共享
Car.prototype = {
    drive() {
        console.log('drive,下赛道');
    },
    name: 'su7',
    height: 1.4,
    weight: 1.5,
    long: 4800,
}

const car1 = new Car('霞光紫');
console.log(car1,car1.name,car1.weight);
car1.drive();
const car2 = new Car('海湾蓝');
console.log(car2,car2.name,car2.weight);
