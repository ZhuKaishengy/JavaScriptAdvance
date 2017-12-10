/*不是真的继承，只是简化代码*/
function Father(name,age) {
    this.name = name
    this.age = age
    this.fn = function (name) {
        console.log('fn...'+name)
    }
}
function Child(name,age,id) {
   Father.call(this,name,age)//this.Father(name,age)
    this.id = id
}
var c = new Child('zks',12,1)
console.log(c.name,c.age,c.id,c.fn())