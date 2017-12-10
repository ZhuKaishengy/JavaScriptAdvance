/*闭包的作用
* 1. 使函数内部的变量，在函数执行完之后仍存活在内存中，延长了局部变量的声明周期
* 2. 让函数外部可以操作到函数内部的变量*/

//设计理念：设计一个js模块，外面只能通过其提供的函数操作其固定的局部变量
function fn1() {
    var a = 1
    function add() {
        a++
        return a
    }
    function minus() {
        a--
        return a
    }
    return {
        add:add,
        minus:minus
    }
}
var oper = fn1()//闭包的产生
var a1 = oper.add()
console.log(a1)
var a2 = oper.minus()
console.log(a2)
oper = null//闭包死亡
/*问题 ：
* 1. 函数执行完后add和minus变量声明是否还存在
* 不存在，只有闭包引用的数据还存在，函数内创建的变量没有被引用会被垃圾回收机制回收，但add(),minus()被oper引用，所以还存在
* 2. 在函数外部能直接访问函数内部的局部变量吗？
* 不可以，这是由变量的作用域决定的*/