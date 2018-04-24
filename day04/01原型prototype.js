/*
函数prototype属性
1. 每一个函数都有prototype属性，他默认指向一个object类型的空对象（原型对象）
2. 原型对象中有一个属性constructor，他指向函数对象
3. 给原型添加属性（方法），实例对象调用
*/
console.log(Date.prototype,typeof Date.prototype)//Date {} ,'object'
function Test1() {}
Test1.prototype.method1 = function () {
    console.log('mothod1')
}
console.log(Test1.prototype , typeof Test1.prototype)//Test1 {} 'object'

console.log(Date.prototype.constructor === Date)
console.log(Test1.prototype.constructor === Test1)
new Test1().method1();
