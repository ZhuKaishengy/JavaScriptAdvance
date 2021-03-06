/*1. 如何产生闭包
* 当一个嵌套子函数引用了其父函数的变量（函数）时，产生闭包
* 2. 什么是闭包
* （1）闭包是嵌套的内部函数
* （2）包含被引用变量的对象(closure)
* （3）闭包存在于嵌套的内部函数中
* 3.产生闭包的条件
* （1）函数嵌套
* （2）内部函数引用了外部函数的变量
* （3）执行内部函数定义，不函数需要调用内部，外部函数调用时产生
* */

function outer() {
    var a = 1
    function inner() {
        console.log(a)
    }
    inner()
}
outer();