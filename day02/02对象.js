/*
1. 什么是对象？
类比java中的map
2. 对象的组成
属性：属性名（默认都是字符串，不用加""）和属性值
方法：属性值为函数
3. 访问对象内部数据
(1)对象.属性名
(2)对象['属性名']
*/
var obj = {
    name:'zks',
    age:25,
    getName:function () {
        return this.name;
    },
    setName:function (name) {
        this.name = name;
    }
}
obj.setName('sjx');
console.log(obj.name,obj.age,obj.getName(),obj.getName);
/*
什么时候只能用第二种
(1) 属性名中有特殊字符，如：空格，-
*/
// obj.content-type = 'haha';
obj['content-type'] = 'haha';
console.log(obj['content-type']);

// (2) 属性名不确定

var paramName = 'me2';
obj.paramName = 'haha';
obj[paramName] = 'xixi';
console.log(obj.paramName);
console.log(obj.me2);