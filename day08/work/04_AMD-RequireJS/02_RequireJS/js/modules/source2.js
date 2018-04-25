//定义一个有依赖的模块
define(["source1","jquery"], function (source1,$) {
    let msg = 'sjx'
    function show() {
        return msg
    }
    $('body').css('background-color','red')
    let v = source1.show()
    //暴露模块
    return {show,v}
});