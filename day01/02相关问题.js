// 1. 什么是类型对象，什么是实例对象
/*
类型对象：构造函数
*/
function Person(name ,age) {
   this.name = name;
   this.age = age;
}

/**
 * 实例对象
 */
var p = new Person('zks',25);
console.log(p.name,'---',p.age)

// 2.undefined 和 null 的区别：
// undefined:声明一个变量但没有赋值；null：声明了一个变量，并赋值为null

var a
console.log(a);//undefined
a = null ;
console.log(a);//null

// 3. 什么时候赋值为null:声明的这个变量,这个对象想要赋值为一个对象，对象使用完毕，使垃圾回收，这也是为什么typeof null === ‘object’
var obj = null ;
obj = [0,1,2];
obj = null ;
// 4. 区分数据类型和变量类型
/*
数据类型：基本类型、对象类型
变量类型：
    基本类型：保存基本类型的数据
    引用类型：保存堆空间对象的引用地址值，typeof根据地址值找到堆空间查看数据类型
*/
