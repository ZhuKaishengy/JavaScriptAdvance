(function () {
    function foo(a,b) {
        console.log(a+b)
    }
    foo(1,4)
})()
;(() =>{
    function Person(name ,age) {
        this.name = name
        this.age = age
        this.getName = function () {
            console.log(this.name)
        }
    }
    var p = new Person('zks',12)
    p.getName()
})();(() =>{
    class Student{
        constructor(name,age){
            this.name = name
            this.age = age
        }
        getName(){
            return this.name
        }
    }

    let student  = new Student('rl',12)
    console.log(student.getName())
})();import module from './module5'
module.fun()
module.bar()
module.fun();let foo = () =>{
    console.log('foo ...')
}
let bar = () =>{
    console.log('bar ...')
}
let fun = () =>{
    console.log('fun ...')
}

export default {foo,bar,fun}