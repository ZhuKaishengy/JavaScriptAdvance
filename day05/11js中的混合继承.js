//真正使用：借用继承用于继承属性，原型链继承用于继承方法
function Father(name,age) {
    this.name = name
    this.age = age
    this.method = function () {
        console.log('method...')
    }
}
Father.prototype.getName = function () {
    console.log(this.name)
}
function Child(name,age,id) {
    Father.call(this,name,age)//继承属性
    this.id = id
}
//继承方法
Child.prototype = new Father()
Child.prototype.constructor = Child

Child.prototype.getId =function () {
    console.log(this.id)
}

var c = new Child('zks',12,1)
c.getName()
c.getId()