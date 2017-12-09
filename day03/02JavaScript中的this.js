//测试代码
function Person1(name) {
    console.log(this);
    this.name = name;
    function getName() {
        console.log(this.name);
        return this.name;
    }
    function setName(name) {
        console.log(this.name);
        this.name = name;
    }
    return '1';
}

// console.log(Person1('zks'));//window对象 1
// console.log(new Person1('zks'));//Person1 {}    Person1 { name: 'zks' }
//============================================================================
function Person(name) {
    console.log(this);
    this.name = name;
    this.getName = function () {
        console.log(this);
        return this.name;
    }
    this.setName = function (name) {
        console.log(this);
        this.name = name;
    }
    return '1';
}
// Person('zks');//this:window
var p = new Person('zks')//this:Person {}
p.getName();//this:p
var obj = {};
p.setName.apply(obj,'sjx');//this:obj

//总结：
// 任何函数本质上都是通过对象来调用的
// 全局this是window，函数内部this是调用函数的对象