//commonJs导入第三方类库的方式
var $ = require('jquery')
console.log($)
//commonJs导入自定义js的方式
var source = require('./sourceFile')
source.fn2('haha')

source.fn1()
console.log(source.obj);
//构造函数不可以
var person = source.Person('zks',12)
// console.log(person.name)
// console.log(person.age)

source.a
console.log(source.re('sjx'));

//导入立即执行函数
var source1 = require('./sourceFile1')
source1.show()