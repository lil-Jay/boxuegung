(function (window) {
    require.config({
        baseUrl: '/',

        paths: {
            // angularJS配置模块
            app: 'js/common/app',
            router: 'js/common/router',
            // 每个页面对应的模块
            index: 'js/home/index',
            init: 'js/home/init',
            login: 'js/home/login',
            repass: 'js/home/repass',
            settings: 'js/home/settings',

            add: 'js/course/add',
            cgAdd: 'js/course/category_add',
            cgList: 'js/course/category_list',

            csAdd1: 'js/course/course_add_step1',
            csAdd2: 'js/course/course_add_step2',
            csAdd3: 'js/course/course_add_step3',

            list: 'js/course/list',

            teacherEdit: 'js/teacher/edit',
            teacherList: 'js/teacher/list',

            userList: 'js/user/list',
            userProfile: 'js/user/userprofile',

            // 公共模块
            aside: 'js/common/aside',
            header: 'js/common/header',
            util: 'js/common/util',

            //第三方库  依赖jquery
            jquery: 'lib/jquery/jquery',
            bootstrap: 'lib/bootstrap/js/bootstrap',

            // angular相关
            angular: 'lib/angular/angular',
            angularUiRouter: 'lib/angular-ui-router/release/angular-ui-router'
        },

        shim: {
            'angular': {
                exports: 'angular'
            },
            'angularUiRouter': {
                deps: ['angular'],
                exports: 'angularUiRouter'
            },
            'bootstrap': {
                deps: 'jquery'
            }
        },
        
        // 初始化app绑定主模块 router配置路由
        deps: ['aside','header']
    });

    // 定义对象存储所有pathnames跟paths的对应关系
    var hashsObj = {
        '/': 'index',
        '#/init': 'init',
        '#/userlist': 'userList',
        // '/html/user/profile.html': 'userProfile',
        // '/html/teacher/edit.html': 'teacherEdit',
        '#/teacherlist': 'teacherList',
        '#/login': 'login',
        // '/html/home/repass.html': 'repass',
        '#/settings': 'settings',
        // '/html/course/add.html': 'add',
        // '/html/course/category_add.html': 'cgAdd',
        // '/html/course/category_list.html': 'cgList',
        // '/html/course/course_add_step1.html': 'csAdd1',
        // '/html/course/course_add_step2.html': 'csAdd2',
        // '/html/course/course_add_step3.html': 'csAdd3',
        // '/html/course/list.html': 'list'
    }
    require([hashsObj[location.hash]]);
})(window)