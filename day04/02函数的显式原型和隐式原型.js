//1. 每个function都有prototype属性，即显示原型
function Func() {
    //内部JavaScript引擎执行的语句
    // this.prototype = {}
}
console.log(Func.prototype)
//2. 每一个函数的实例都有一个__proto__属性，即隐式原型
console.log(new Func().__proto__)//内部JavaScript引擎执行的语句  this.__proto__ = Func.prototype
//3. 对象隐式原型的值与其对应的构造函数的显式原型的值相同
console.log(Func.prototype === new Func().__proto__)
//4. 通过显示原型赋值
Func.prototype.add = function () {
    console.log('add...')
}
//5. 通过隐式原型获取
new Func().add()
