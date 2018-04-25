//引用外部js包写在最前面
let uniq = require('uniq')

let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

module1.foo()
module2()
module3.foo()
module3.bar()

console.log(uniq(module3.arr));//[ 0, 1, 3, 4, 7, 8, 9 ]