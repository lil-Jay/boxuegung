(function (angular) {
    // 用amd模块包裹angular模块
    console.log('header')
    //start your ride Here
    //创建子模块
    var app = angular.module('headerApp', []);
    app.controller('headerCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.logout = function () {
            // $http.post('/v6/logout').
            // success(function (data) {
            //     console.log(data);
            //     // if (data.code == 200) {
            //     //     location.hash = '#/login'
            //     // }
            // })

            $http({
                url: '/v6/logout',
                methid: 'post',
                success: function (data) {
                    location.hash = '#/login'
                }
            })
        }

        $scope.$watch('$http', function (newObj) {
            console.log(newObj)
        })
    }])
})(angular);