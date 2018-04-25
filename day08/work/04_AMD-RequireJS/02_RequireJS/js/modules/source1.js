//定义一个没有依赖的模块
define(function () {
    let msg = 'zks'
    function show() {
        return msg
    }
    //暴露模块
    return {show}
})