//统一暴露
function foo() {
    console.log(`foo()...`)
}
function bar() {
    console.log(`foo()...`)
}
let arr = [1,2,3]
let obj = {
    username:'sjx',
    age:12
}
export {foo,bar,arr,obj}