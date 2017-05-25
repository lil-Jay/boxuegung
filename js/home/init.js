(function (angular) {
    // 用amd模块包裹angular模块

    (function (angular) {

        //start your ride Here
        //创建子模块

        var app = angular.module('initApp', []);
        app.controller('initCtrl', ['$scope', function ($scope) {
            $scope.username = '小龙';
        }])
    })(angular) //添加自执行函数，避免名字的污染

})(angular);