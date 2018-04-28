### javascript 入门到高级特性

**day01~day06 JavaScript入门知识**

`对象调用属性的方式`

```
var paramName = 'me2';
obj.paramName = 'haha';
obj[paramName] = 'xixi';
console.log(obj.paramName);//haha
console.log(obj.me2);//xixi
```

`函数的调用方式之call`

```
function foo(num1, num2) {
    return num1*num2
}
console.log(foo.call(new Object(), 2, 5));//10
```

`IIFE:(Immediately-Invoked Function Expression)`

```
var module = (function () {
    var a = 1;
    function add(num) {
        return a+num;
    };
    function calcul() {
        return a++;
    };
    return {
        add:add,
        calcul:calcul
    }

})();
```

`定义一个构造函数`

```
function Person(name) {
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
```

`注意：这不是一个构造函数`

```
function Person1(name) {
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
console.log('name:',new Person1('zks').getName());
//new Person1('zks')没有getName()方法
//使用Person1('zks')，this为windows，使用new Person1('zks')，this为Person1 { name: 'zks'}
```

`js原型相关知识`

> 函数的显式原型为原型对象，隐式原型为函数

> 构造函数的显示原型 === 其实例对象的隐式原型

`js arguments伪数组`

```
function test(a,b) {
    console.log(arguments)//{ '0': 1, '1': 2 }
}
test(1,2)
```

`注意：在函数内部如果不使用var声明变量，也相当于全局变量`

`闭包`

**1. 为什么闭包？**

> JavaScript的作用域为：全局作用域和函数作用域；的作用域链为从当前作用域到上级作用域，这导致一个问题，在函数作用域之外的无法访问局部作用域的变量

**2. 形成闭包的条件？**

* 函数嵌套
* 内部函数引用了外部函数的变量
* 执行内部函数定义，不函数需要调用内部，外部函数调用时产生

**3. 闭包的作用？**

* 使函数内部的变量，在函数执行完之后仍存活在内存中，延长了局部变量的声明周期
* 让函数外部可以操作到函数内部的变量

**4. 常见的闭包**
```
/*1.将函数作为另一个函数的返回值*/
        function fn1() {
            var a = 1
            function fn2() {
                a ++
                console.log(a)
            }
            return fn2
        }
        var f1 = fn1()
        f1()//2
        f1()//3
/*2.将函数作为实参传递给另一个函数*/
        function sendMess(mess,time) {
            setTimeout(function () {
                alert(mess)
            },time)
        }
        sendMess('hello zks',2000)
```

`javascript中的混合继承`

```
    //声明父函数的属性
    function Father(name,age) {
        this.name = name
        this.age = age
    }
    //通过显式原型链声明父函数的方法
    Father.prototype.getName = function () {
        return this.name
    }
    Father.prototype.setName = function (name) {
        this.name = name
    }
    //声明子函数继承父函数的属性
    function Child(name,age,sex) {
        Father.call(this,name,age)
        this.sex =sex
    }
    //通过child的构造函数的显式原型链指定继承关系，继承父函数的方法
    Child.prototype = new Father()
    Child.prototype.constructor = Child
    //设定子函数自己独有的方法
    Child.prototype.getSex = function () {
        return this.sex
    }
    Child.prototype.setSex = function (sex) {
        this.sex = sex
    }
    var p = new Child('zks',12,'male')
    console.log(p.getName())
    p.setSex('female')
    console.log(p)

```
**day07 node的commonJs语法**

**[day08 javaScript的模块化规范](./day08/README.md)**

**[day09 ES567规范](./day08/README.md)**

**[day11 angularJs](./day11_angularjs/笔记/1_angularjs入门.md)**

**[day12 自动化项目构建工具](./day11_angularjs/笔记/1_angularjs入门.md)**
