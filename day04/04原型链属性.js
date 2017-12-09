/*
* 1.查找对象的属性值时，查找原型链
* 2.设置对象的属性值时不查找原型链，若对象本身没有此属性，创建此属性并赋值
* 3.创建一个类（构造函数）时，属性设置在构造函数中，函数声明在原型中
* */
function Fn() {
    this.getName = function () {
        console.log('getName...')
    }
}
Fn.prototype.age = 26

var fn1 = new Fn();
fn1.getName();
fn1.age = 5
console.log(fn1.age,fn1.__proto__.age)

var fn2 = new Fn();
console.log(fn2.age)
//==============如何创建一个类=====================
function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.getName = function () {
    return this.name
}
Person.prototype.setName = function (name) {
    this.name = name 
}
var p = new Person('zks',25)
console.log(p.getName())
p.setName('sjx')
console.log(p.getName())