    // 配置路由,在require跟angular结合的情况下，由于一个amd模块就是一个沙箱，需要想全局暴露接口
    // 所以要用return把模块绑定当作返回值返回全局环境中

    // 配置哈希模块转换对象
    // var hashToModule = {
    //     '#/init': 'initApp',
    //     '#/settings': 'settingsApp',
    //     '#/userlist': 'userlistApp',
    //     '#/teacherlist': 'teacherlistApp',
    //     '#/login': 'loginApp',

    // }

        var app = angular.module(
            'boxueguApp', [
                'ui.router',
                'asideApp',
                'headerApp',
                'initApp',
                'settingsApp',
                'userlistApp',
                'teacherlistApp',
                'loginApp',
                // hashToModule[location.hash]
            ])
        app.controller('boxueguCtrl', ['$scope', function ($scope) {

        }])
        app.config(
            [
                '$stateProvider',
                '$urlRouterProvider',
                '$locationProvider',
                function (
                    $stateProvider,
                    $urlRouterProvider,
                    $locationProvider
                ) {

                    // 默认路由
                    $urlRouterProvider.when("", "/init");

                    // 跳转路由
                    $stateProvider
                        .state('init', {
                            url: '/init',
                            templateUrl: '/html/home/init.html'
                        })
                        .state('userlist', {
                            url: '/userlist',
                            templateUrl: '/html/user/list.html'
                        })
                        .state('teacherlist', {
                            url: '/teacherlist',
                            templateUrl: '/html/teacher/list.html'
                        })
                        .state('settings', {
                            url: '/settings',
                            templateUrl: '/html/home/settings.html'
                        })
                        .state('login', {
                            url: '/login',
                            templateUrl: '/html/home/login.html'
                        })

                    // 删除哈希值乱码
                    $locationProvider.hashPrefix('');
                }
            ])

