// eg:定义一个函数，输出年龄，如果age<18,输出未成年，age>60，输出太老了，其他输出正好
function showMess(age) {
    if (age < 18){
        console.log('未成年！');
    }else if (age > 60){
        console.log('太老了');
    }else{
        console.log('正好');
    }
}
showMess(55)
/*
函数如何执行：
1. test()
2. obj.test()
3. new test()
4. test.call/apply(obj):对象可以执行任何函数
*/
function test1() {
    console.log('test1');
}
var test2 = function () {
    console.log('test2');
}
test1();
test2();
var obj1 = {
    name:'zks',
    getName:function () {
        return this.name;
    }
}
obj1.getName();
function Person(name,age) {
    this.name = name;
    this.age = age;
}
new Person('zks',25);
function test3(age) {
   this.name = 'sjx';
   this.age = age
}
var obj2 = {}
// obj2.test3();
test3.call(obj2,28);
console.log('callname---'+ obj2.name,obj2.age);
