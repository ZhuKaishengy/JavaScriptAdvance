/**
 * IIFE模式: 匿名函数自调用(闭包)
 * IIFE : immediately-invoked function expression(立即调用函数表达式)
 * 作用: 数据是私有的, 外部只能通过暴露的方法操作
 * 问题: 如果当前这个模块依赖另一个模块怎么办?
 */
//IIFE模式

//形成闭包，导致局部函数内部定义的函数不会消亡，得以保存，同时，因为声明在函数内，不会污染全局变量
(function (window) {
    let msg1 = 'NBA'
    let msg2 = 'CBA'
    function foo() {
        console.log(msg1)
    }
    function bar() {
        console.log(msg2)
    }

    window.module = {foo,bar}
})(window)


