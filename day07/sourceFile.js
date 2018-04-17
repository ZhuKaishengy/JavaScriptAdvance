//方法
function fn1() {
    console.log('this is function1...')
}
function fn2(content) {
    console.log(content)
}
//属性
var a = '123'

//对象
var obj = {
    name:'zks',
    age:12,
    setName:function (name) {
        this.name = name
    }
}
//构造函数
function Person(name,age) {
    this.name = name
    this.age = age
    this.setAge = function (age) {
        this.age = age
    }
}
//带返回值的函数

var re = function (name) {
    return name
}
//commonJs暴露单个
module.exports.fn2 = fn2

//commonJs暴露一个对象
module.exports = {
    fn1:fn1,
    fn2:fn2,
    a:a,
    obj:obj,
    Person:Person,
    re:re
}

var person = new Person('sjx',10)
console.log(person)