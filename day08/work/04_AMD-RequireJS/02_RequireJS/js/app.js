//主模块，直接执行
(function () {
    require.config({
            // baseUrl: "js/",
            paths: {
                "source1": "./modules/source1",
                "source2": "./modules/source2",
                "jquery":"../node_modules/jquery/dist/jquery"
            }
        })
    //引入其他模块
    requirejs(["source2"], function(source2) {
        console.log(source2.show());
        console.log(source2.v);
    });
})()