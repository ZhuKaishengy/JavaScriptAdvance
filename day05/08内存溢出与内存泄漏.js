/*闭包的缺点：
* 延长了局部变量的存活事件，若用完不及时释放容易造成内存泄漏
* 内存溢出：内存不够了
* 内存泄漏：程序有bug，容易导致内存溢出
* 常见的内存泄漏：
* （1）定义意外的全局变量
* （2）定时器
* （3）闭包*/
var obj = {}
for (var i = 0; i < 10000000000; i++) {
    obj[i] = new Array(1000000000);
    console.log(obj)
}
var iId = setInterval(function () {
    alert(1)
},2000)
clearInterval(iId)//清除定时器