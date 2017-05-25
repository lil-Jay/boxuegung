(function (angular) {
    console.log('settings')

    //start your ride Here
    //创建子模块
    var app = angular.module('settingsApp', []);
    app.controller('settingsCtrl', ['$scope', '$http', function ($scope, $http) {
        // 请求讲师数据回显
        $http({
            url: '/v6/teacher/profile',
            method: 'GET',
        }).then(function (data) {
            $scope.formData = data.result

        })


        var userInfo = localStorage.getItem('userInfo')
        if (userInfo) {
            $scope.avatarUrl = JSON.parse(userInfo).tc_avatar;
            $scope.username = JSON.parse(userInfo).tc_name;
        } else {
            $scope.avatarUrl = "/img/default.png";
        }


        // 提交个人详细信息
        $scope.userInfoSubmit = function () {
            $scope.formData = {};
            $http({
                url: '/v6/teacher/modify',
                method: 'POST',
                data: $.param($scope.formData),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }).then(function (data) {
                console.log(data)
            })
        }
    }])
})(angular) //添加自执行函数，避免名字的污染