(function (window) {
    let msg = 'zks'
    function showMsg() {
        return msg
    }

    window.source1 = {showMsg}
})(window)