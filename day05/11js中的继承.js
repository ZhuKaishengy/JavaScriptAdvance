/*js中的继承通过原型链实现：子类型的原型为父类型的实例对象*/
function Father(name,age) {
    this.name = name
    this.age = age
}
Father.prototype.setName = function (name) {
    this.name = name
}
function Child(name,age) {
    this.name = name
    this.age = age
}
//注意修改原型的位置，优先于其他在原型中定义的方法
// 子类型的原型为父类型的实例对象
Child.prototype = new Father('zks',123)
// 新指向的子类型原型中的构造器指向子类型
Child.prototype.constructor = Child
Child.prototype.setAge = function (age) {
    this.age = age
}
var c = new Child('sjx ',456)
c.setAge(1)
c.setName('haha')
console.log(c.name,c.age)