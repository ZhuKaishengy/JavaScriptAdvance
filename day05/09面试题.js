//1.this
var name = 'zks'
var Person = {
    name:'sjx',
    getName:function () {
        return function () {
            return this.name;//this为window 输出zks
        }
    }
}
console.log(Person.getName()())

var Person = {
    name:'sjx',
    getName:function () {
        var that = this;//this为window，that为Person 输出sjx
        return function () {
            return that.name;
        }
    }
}
console.log(Person.getName()())