/*1.代码分类：（全局代码、局部代码）
* 2.全局执行上下文
* （1）在执行全局代码之前将window确定为全局执行上下文
* （2）对全局数据进行预处理
*       var定义的全局变量=>undefined，添加到window属性
*       function声明的全局函数赋值，添加到window方法
*       this赋值window
* （3）开始执行全局代码
* 3.函数执行上下文（在要执行函数之前创建）
* （1）在调用函数，准备执行函数体之前，创建对应的函数执行上下文对象（虚拟的，存在于内存的栈空间中的一片区域）
* （2）对局部数据进行预处理
*       形参=>赋值（实参）=>添加为执行上下文属性
*       arguments=>赋值（实参列表），添加为执行上下文属性
*       var定义的局部变量=>undefined，添加为执行上下文属性
*       function声明的局部函数赋值，添加为执行上下文方法
*       this赋值调用函数的对象
* （3）开始执行函数体代码
* 结论（自己总结）：javascript加载的方式和java不同，代码加载到内存中时会将变量都预加载（声明但不赋值），
*                 函数都加载完毕，加入到window对象中，也就是说，代码在真正调用时，这些代码就不会再执行了
**/
function func(a1) {
    console.log(a1)//1
    console.log(a2)//undefined
    a3()//a3...
    console.log(this)//window
    console.log(arguments instanceof Object)//{ '0': 1, '1': 3 }(伪数组)

    var a2 = 2
    function a3() {
        console.log('a3...')
    }
}
// func(1,3)
func.call(new Date(),1,3)