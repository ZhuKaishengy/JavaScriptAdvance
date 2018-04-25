/**
 * IIFE模式增强 : 引入依赖
 * 这就是现代模块实现的基石
 */

(function (window,$) {
    let msg1 = 'NBA'
    let msg2 = 'CBA'
    function foo() {
        console.log(msg1)
    }
    function bar() {
        console.log(msg2)
    }
    function fun() {
        $('body').css('background-color','blue')
    }

    window.module = {foo,bar,fun}
})(window,jQuery)

