(function (angular) {
    console.log(angular)

    //start your ride Here
    //创建子模块
    var app = angular.module('loginApp', []);
    app.controller('loginCtrl', ['$scope', '$http', function ($scope, $http) {
        // 定义表单数据对象
        $scope.formData = {};
        $scope.login = function () {
            $http({
                    method: 'POST',
                    url: '/v6/login',
                    data:  $.param($scope.formData),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(function (data) {
                    if (data.status == 200) {
                        var userInfo = JSON.stringify(data.data.result);
                        localStorage.setItem('userInfo', userInfo);
                        location.hash = 'init';
                    }
                })


        }
    }])
})(angular) //添加自执行函数，避免名字的污染