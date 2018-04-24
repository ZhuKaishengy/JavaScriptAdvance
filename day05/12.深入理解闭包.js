function f1(){
    var n=999;
    nAdd=function(){n+=1}//没有使用var声明，相当于全局变量
    function f2(){
       console.log(n)//
    }
    return f2;
}

var result=f1();//有函数嵌套，调用外部函数形成闭包，导致f1中的共享变量n不会消亡

result(); // 999

nAdd();//相当于调用全局变量

result(); // 1000
