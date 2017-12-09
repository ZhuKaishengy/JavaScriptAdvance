//例一：fn1与fn2写法相同
var a = 3
function fn1() {
    console.log(a)//undefined
    var a = 4
}
function fn2() {
    var a
    console.log(a)
    a = 4
}
fn1()
fn2()
/*变量声明提升
* 通过var声明的变量，在语句定义之前就可以访问到，值为undefined
* */
console.log(b)
// console.log(c)
var b = 4
const c = 5
/*函数声明提升
* 通过function声明的函数，在声明前就可以调用，值为函数定义(对象)
* */
fn3()
fn4()//遵循变量提升
// console.log(fn4)
function fn3() {
    console.log('fn3...')
}
var fn4 = function () {
    console.log('fn4...')
}