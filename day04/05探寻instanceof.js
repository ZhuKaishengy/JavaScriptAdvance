/*1. instanceof是如何判断的
* A instanceof B
* 如果B的显式原型在A的隐式原型链上，返回true，否则返回false
* 2. Function通过new产生自己的实例对象
* */
function Fn() {}
var fn = new Fn()
console.log(fn instanceof  Fn)//true
console.log(fn instanceof Object)//true
//=================
console.log(Object instanceof Object)//true
console.log(Object instanceof Function)//true
console.log(Function instanceof Function)//true
console.log(Function instanceof Object)//true
console.log(Object instanceof Fn)//false