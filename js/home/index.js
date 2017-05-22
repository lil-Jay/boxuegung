define(function (require, exports, module) {

    // 跟require的前置依赖不同,seaJS是后置依赖的，需要在第三方库里面用
    
    
    // define(function (require, exports, module) { 
    // require('依赖项');
    // 第三方库的代码....
    // module.exports = '输出项'
    // })
    
    //封装成一个cmd模块


    require.async([
        'jquery',
        'bootstrap'
    ], function (jquery, bootstrap) { //由于jquery不是cmd模块，所以如果用了$接收变量的话为空
        // 回调函数的参数按顺序分别接收这些模块的返回值
        $(document).ready(function () {
            console.log(1)
        })
    })

})