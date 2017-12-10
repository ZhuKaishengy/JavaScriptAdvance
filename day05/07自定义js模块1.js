/*js模块是一个函数，封装了一系列功能，共外部调用，实现一组功能，由于变量的作用域的关系，外部无法直接调用函数内部的变量，因此设计了闭包的概念*/
//方式一：
function myModule() {
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
var m = myModule()
var a = m.add()
var mi = m.minus()
console.log(a , mi)
m = null
