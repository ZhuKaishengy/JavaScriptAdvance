// 方式二：匿名函数子调用，推荐使用这种
;(function (window) {
    var a = 1
    function add() {
        a++
        return a
    }
    function minus() {
        a--
        return a
    }
    window.myModule1 = {
        add:add,
        minus:minus
    }
})(window)
