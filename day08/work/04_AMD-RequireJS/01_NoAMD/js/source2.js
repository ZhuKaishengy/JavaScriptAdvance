(function (window,source1) {
    let msg1 = 'sjx'
    function showMsg2() {
        return msg1
    }
    let re = source1.showMsg()

    window.source2 = {showMsg2,re}

})(window,source1)