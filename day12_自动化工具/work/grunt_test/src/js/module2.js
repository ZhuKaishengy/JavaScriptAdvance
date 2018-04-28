(() =>{
    function Person(name ,age) {
        this.name = name
        this.age = age
        this.getName = function () {
            console.log(this.name)
        }
    }
    var p = new Person('zks',12)
    p.getName()
})()