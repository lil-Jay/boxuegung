(function (angular) {
    // 用amd模块包裹angular模块
    console.log('aside')

    //start your ride Here
    //创建子模块
    var app = angular.module('asideApp', []);
    app.controller('asideCtrl', ['$scope', function ($scope) {
        var userInfo = localStorage.getItem('userInfo')
        if (userInfo) {
            $scope.avatarUrl = JSON.parse(userInfo).tc_avatar;
            $scope.username = JSON.parse(userInfo).tc_name;
        } else {
            $scope.avatarUrl = "/img/default.png";
        }


    }])

})(angular);