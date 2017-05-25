(function (angular) {
    console.log('teacherList')

    //start your ride Here
    //创建子模块
    var app = angular.module('teacherlistApp', []);
    app.controller('teacherlistCtrl', ['$scope', function ($scope) {
        $scope.username = '小龙';
    }])
})(angular) //添加自执行函数，避免名字的污染