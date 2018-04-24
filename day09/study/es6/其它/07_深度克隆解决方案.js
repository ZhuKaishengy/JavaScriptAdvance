function checkType(param) {
    return (Object.prototype.toString.call(param)).slice(8,-1)
}
function clone(param) {
    let result , type = checkType(param)
    if(type === 'Object'){
        result = {}
    }else if (type === 'Array'){
        result = []
    }else{
        return param
    }
    //遍历
    for (var p in param) {
        if(checkType(param[p]) === 'Object' || checkType(param[p]) === 'Array'){
            result[p] = clone(param[p])
        }else{
            result[p] = param[p]
        }
    }
    return result

}






let str = 'zks'
let obj = {
    username:'zks',
    age:12
}
function fun() {

}
let arr = [1,'zks',obj,fun]

console.log(clone(arr));