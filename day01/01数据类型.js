/*
分类：
1.基本数据类型：string、boolean、number、undefined。null
2.引用数据类型：object、function、array
判断数据类型：
typeof：返回数据类型的字符串(string,boolean,number,undefined,function)不可以判断null和object，object和array
instanceof：判断对象的具体数据类型
===:(undefined,null)

*/

//基本数据类型：
var a;
console.log(a,typeof a,typeof a === 'undefined',a===undefined);//undefined 'undefined' true true
console.log(undefined === 'undefined')//false
a = 3;
console.log(typeof a === 'number')//true
a = 'zks';
console.log(typeof a === 'string')//true
a = false;
console.log(typeof a === 'boolean')//true
a = null;
console.log(typeof a)//object

//引用数据类型:
var b = {
    b1:[1,'abc',console.log],
    b2:function () {
        console.log('zks')
        return function () {
            return 'zks';
        }
    }
}

console.log(b instanceof Object);//true
console.log(b.b1 instanceof Array);//true
console.log(b.b2 instanceof Function);//true
console.log(typeof b.b1[2])//function
console.log(typeof b.b1)//object

var name = b.b2()();//只要是“表达式（）”形式的，表达式都是函数类型，相反只要是函数类型都可以加（）
console.log("name:"+name);