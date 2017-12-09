//1.显式原型指向的原型对象发生改变，隐性原型的指向不会自动变化
function A() {}
A.prototype.n = 1
var b = new A()
A.prototype = {
    n:2,
    m:3
}
var c = new A()
console.log(b.n,b.m,c.n,c.m)//1 undefined 2 3
//2
function B() {}
Object.prototype.a = function () {
    console.log('a')
}
Function.prototype.b = function () {
    console.log('b')
}
var b = new B()
b.a()//a
b.b()//出错
B.a()//a
B.b()//b