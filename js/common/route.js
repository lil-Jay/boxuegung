    console.log('main')
    // 创建主模块, 不干活，活交给子模块
    var app = angular.module('myApp', [
        'ngRoute',
        'asideApp',
        'headerApp',
        'settingsApp',
        'initApp',
        'teacherListApp',
        'userListApp'
    ]); //依赖模块

    //配置路由
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/init', {
                controller: 'initCtrl',
                templateUrl: '/html/home/init.html'
            })
            .when('/userlist', {
                controller: 'userListCtrl',
                templateUrl: '/html/user/list.html'
            })
            .when('/teacherlist', {
                controller: 'teacherListCtrl',
                templateUrl: '/html/teacher/list.html'
            })
            .when('/settings', {
                controller: 'settingsCtrl',
                templateUrl: '/html/home/settings.html'
            })
            .otherwise({
                redirectTo: '/init'
            })

        $locationProvider.hashPrefix('');
    }])