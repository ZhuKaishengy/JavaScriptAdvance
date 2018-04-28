(() =>{
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
})()