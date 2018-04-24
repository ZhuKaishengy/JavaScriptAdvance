/*IIFE:(Immediately-Invoked Function Expression)
匿名函数自调用
1. 理解：函数要不被存储，要不被执行
2. 作用：
（1）隐藏实现
（2）不会污染全局命名空间
*/

//1.定义一个函数被存储
function func1() {
    alert('func1');
}
var func2 = function () {
    console.log('func2');
};
//2. 定义一个函数被执行
(function () {
    console.log('excute...');
})();
//3.JavaScript模块的概念(重要)
var module = (function () {
    var a = 1;
    function add(num) {
        return a+num;
    };
    function calcul() {
        return a++;
    };
    return {
        add:add,
        calcul:calcul
    }

})();
var a = module.add(3);
console.log(a);//4
a = module.calcul()
console.log(a);//1
//====================
var b = {
    name:'zks',
    getName:function () {
        return this.name;
    }
};
console.log(b.getName());//zks