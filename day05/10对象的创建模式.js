// 1. Object构造函数：适用对象内部结构不确定
var obj1 = new Object()
obj1.name = 'zks'
obj1.setName = function (name) {
    this.name = name
}
//测试
obj1.setName('sjx')
console.log(obj1.name)
// 2. 对象字面量模式：适用对象内部结构确定，创建多个对象代码过多
var obj2 = {
    name:'zks',
    setName:function (name) {
        this.name = name
    }
}
//测试
obj2.setName('sjx')
console.log(obj1.name)
// 3. 工厂模式：创建的对象没有具体的类型，都是Object类型
function createObj(name) {
    var obj = {
        name:name,
        setName:function (name) {
            this.name = name
        }
    }
    return obj;
}
var obj3 = createObj('zks')
//测试
obj3.setName('sjx1')
console.log(obj3.name)
//4. 自定义构造函数：其定义的方法都相同，内存浪费
function Obj(name) {
    this.name = name
    this.setName = function (name) {
        this.name = name
    }
}
var obj4 = new Obj('sjx')
//测试
obj4.setName('zks')
console.log(obj4.name)
// 5. 自定义构造函数+原型
function ObjNew(name) {
    this.name = name
}
ObjNew.prototype.setName = function (name) {
    this.name = name
}