/*
* 原型链：访问一个对象属性时，现在自身属性中查找，没找到，沿着隐式原型链查找直到Object的__proto__属性，没有返回undefined
* 作用:查找对象的属性
* */
function Fn() {
    this.getName = function () {
        console.log('输出name！')
    }
}
Fn.prototype.getAge = function () {
    console.log('输出age！')
}

var fn = new Fn()
fn.getName()
fn.getAge()
console.log(fn.toString())
// fn.get()

console.log(Object.prototype)
console.log(new Object().__proto__)
console.log('==============')
// 1.函数的显式原型=函数的实例的隐式原型
console.log(Date.prototype === new Date().__proto__)//true
// 2.函数的显式原型默认指向空Object类型的实例对象，Object除外，其原型函数定义了一些通用的东西，之中__proto__ = null
console.log(Function.prototype instanceof  Object)//true
console.log(Object.prototype instanceof Object)//false
// 3.Function函数是所有函数的构造函数
console.log(Function.prototype === Function.__proto__)//true
// 4.Object的原型对象是隐式原型链的尽头
console.log(Object.prototype.__proto__)//null
// 5.所有函数对象都有显式原型和隐式原型
console.log(Fn.prototype.__proto__)

console.log('=================')
console.log(Object.prototype)
console.log({} instanceof  Object)
console.log(Object.prototype instanceof Object)

