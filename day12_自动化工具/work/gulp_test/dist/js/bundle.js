(function () {
    function add(num1, num2) {
        var num3 = 0;
        num1 = num2 + num3;
        return num1 + num2;
    }
    console.log(add(80, 50));
})();
(function () {
    var arr = [2,3,4].map(function (item, index) {
        return item+1;
    });
    console.log(arr);
})();