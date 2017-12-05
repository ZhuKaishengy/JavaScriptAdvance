/*
1. 什么是数据？
存储在内存中，代表特定信息
2. 什么是变量？
由变量名（查找对应的内存区域）和变量值（保存的数据）组成
3. 什么是内存？
内存条通电后产生的用来（临时的）存储数据的空间，断电后空间和存储的数据都消失
栈空间：全局变量和局部变量
堆空间：对象
4. var a = xxx；a中保存的是什么？
xxx为基本数据类型：a中保存数据
xxx为引用数据类型：a中保存xxx对象的地址值
5. 内存释放机制：
全局变量：程序执行完不会释放内存
局部变量：
    基本数据类型：方法执行完自动释放内存
    引用数据类型（var a = {name:'zks',age:25}）：a自动释放，a所指向的对象，后面某个时间被垃圾回收机释放
*/

// eg1:javascript中的传递是值传递，执行change(a);将a所指向的对象的地址值赋给obj，
// this.obj = {name:'sjx',age:26}，改变的是obj的引用
var a = {
    name:'zks',
    age:25
}
function change(obj) {
    this.obj = {
        name:'sjx',
        age:26
    }
}
change(a);
console.log(a.name,a.age);
// eg2:深入理解值传递，改变的是什么，是局部变量
var b = 1;
function add1(b) {
    b+=1;
}
function add2(b) {
    b = b+1;
    return b;
}
add1(b);
console.log(b);
console.log(add2(b));
//总结：值传递，基本类型传数据；引用类型传地址值


