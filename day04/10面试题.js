/*1.这种问题考虑入栈、出栈*/
console.log('gb:'+i)
var i  = 1
foo(1)
function foo(i) {
    if(i === 4){
        return
    }
    console.log('fb:'+i)
    foo(i +1)
    console.log('fe:'+i)
}
console.log('ge:'+i)
// gb:undefined
// fb:1
// fb:2
// fb:3
// fe:3
// fe:2
// fe:1
// ge:1
//产生5个上下文
console.log('=======================')
//2.变量提升在函数提升之前完成
function a() {
}
var a
console.log(typeof a)//'function'
//3.变量提升
if(!(b in window)){
    var b = 1
}
console.log(b)//undefined
// 4.变量提升和函数提升
var c = 1
function c(c) {
    console.log(c)
}
c(2)//报错
//=======相当于===========
var c
function c(c) {
    console.log(c)
}
c = 1
c(2)